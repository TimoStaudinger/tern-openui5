'use strict'

let parseXmlString = require('xml2js').parseString
let cheerio = require('cheerio')

const DOC_URL_PREFEX = 'https://openui5.hana.ondemand.com/#docs/api/'

let mapTypeToTern = function (type) {
  let types = type.split('|')
  if (types.length === 0) return ''
  type = types[0]

  const ARRAY_PATTERN = [
    /(.*)\[\]/, // integer[]
    /array\((.*)\)/ // array(integer)
  ]
  let isArray = ARRAY_PATTERN.some((regex) => {
    let matches = regex.exec(type)
    if (matches && matches[1]) {
      type = matches[1]
      return true
    }
  })

  if (type === 'int') type = 'number'
  if (type === 'boolean') type = 'bool'
  if (type === '*') type = '?'

  if (isArray) type = '[' + type + ']'

  return type
}

let addConstructorToBranch = function (constructor, branch) {
  if (constructor) {
    let type = 'fn('
    type += constructor.arguments.map((arg) => {
      if (arg.name.includes('.')) return null
      let argString = arg.name
      if (arg.isOptional) argString += '?'
      return argString + ': ' + mapTypeToTern(arg.type)
    }).join(', ')
    type += ') -> +' + constructor.returns

    branch['!type'] = type
  }
}

let addMethodsToBranch = function (methods, branch) {
  branch.prototype = branch.prototype || {}

  methods.forEach((method) => {
    let type = 'fn('
    type += method.arguments.map((arg) => {
      if (arg.name.includes('.')) return null
      let argString = arg.name
      if (arg.isOptional) argString += '?'
      argString += ': ' + mapTypeToTern(arg.type)
      return argString
    }).join(', ')
    type += ')'
    if (method.returns) type += ' -> ' + mapTypeToTern(method.returns)
    if (method.isStatic) {
      branch[method.name] = {
        '!doc': method.doc,
        '!url': method.url,
        '!type': type
      }
    } else {
      branch.prototype[method.name] = {
        '!doc': method.doc,
        '!url': method.url,
        '!type': type
      }
    }
  })
}

let addFieldsToBranch = function (fields, branch) {
  branch.prototype = branch.prototype || {}

  fields.forEach((field) => {
    let type = mapTypeToTern(field.type)

    if (field.isStatic) {
      branch[field.name] = {
        '!doc': field.doc,
        '!url': field.url,
        '!type': type
      }
    } else {
      branch.prototype[field.name] = {
        '!doc': field.doc,
        '!url': field.url,
        '!type': type
      }
    }
  })
}

exports.index = function (index) {
  console.log('Parsing index...')

  return new Promise((resolve, reject) => {
    parseXmlString(index, (err, result) => {
      if (err) {
        reject('Failed to parse index: ' + err)
      } else {
        resolve(result.index)
      }
    })
  })
}

exports.node = function (page, node) {
  return new Promise((resolve, reject) => {
    let branch = node.branch
    let ref = node.ref

    let $ = cheerio.load(page)
    let doc = $('div.full-description > p:first-of-type').text().trim()
    let url = DOC_URL_PREFEX + ref
    let ext = $('div.classRelation.extends > a').attr('title')
    ext = ext ? ext.trim() : null

    // Extract constructor information
    let constructor = null
    $('div.sectionTitle:contains(" Constructor Detail ") + div.sectionItems div.sectionItem').each((i, constructorElement) => {
      constructor = {
        arguments: []
      }

      constructor.returns = cheerio('div.icon > b', constructorElement).text().trim()

      let constructorArgumentElements = cheerio('div.heading:contains("Parameters:") + table.methodItem > tbody > tr', constructorElement)
      constructorArgumentElements.each((i, argument) => {
        let argumentName = cheerio('td.methodItemName > b', argument).text().trim()
        let argumentIsOptional = cheerio('td.methodItemName > i.help', argument).attr('title') === 'Optional parameter'
        let argumentType = cheerio('td.methodItemType', argument).text().trim()
        argumentType = argumentType.substring(1, argumentType.length - 1)
        constructor.arguments.push({
          name: argumentName,
          type: argumentType,
          isOptional: argumentIsOptional
        })
      })
    })

    // Extract method information
    let methods = []
    let methodsElement = $('div.sectionTitle:contains(" Method Detail ") + div.sectionItems')
    cheerio('div.sectionItem', methodsElement).each((i, method) => {
      let methodNameFullyQualified = cheerio('div.itemTitle', method).clone().children().remove().end().text().trim().split('.')
      let methodIsStatic = methodNameFullyQualified.length > 1
      let methodName = methodNameFullyQualified[methodNameFullyQualified.length - 1]

      let methodReturns = cheerio('div.itemTitle > span.light', method).text().trim()
      methodReturns = methodReturns.substr(1, methodReturns.length - 1).trim()

      let methodArguments = []
      let argumentsElement = cheerio('div.heading:contains("Parameters:") + table.methodItem > tbody > tr', method)
      argumentsElement.each((i, argument) => {
        let argumentName = cheerio('td.methodItemName > b', argument).text().trim()
        let argumentIsOptional = cheerio('td.methodItemName > i.help', argument).attr('title') === 'Optional parameter'
        let argumentType = cheerio('td.methodItemType', argument).text().trim()
        argumentType = argumentType.substring(1, argumentType.length - 1)
        methodArguments.push({
          name: argumentName,
          type: argumentType,
          isOptional: argumentIsOptional
        })
      })

      let methodDocElement = cheerio('div.full-description', method).clone()
      cheerio('p', methodDocElement).remove()
      let methodDoc = methodDocElement.text().trim()
      let methodUrl = url + '#'
      if (methodIsStatic) methodUrl += '.'
      methodUrl += methodName

      methods.push({
        name: methodName,
        returns: methodReturns,
        arguments: methodArguments,
        isStatic: methodIsStatic,
        doc: methodDoc,
        url: methodUrl
      })
    })

    // Extract field information
    let fields = []
    let fieldsElement = $('div.sectionTitle:contains("Field Detail") + div.sectionItems')
    cheerio('div.sectionItem', fieldsElement).each((i, field) => {
      let fieldNameFullyQualified = cheerio('div.itemTitle', field).clone().children('span.light').remove().end().text().trim().split('.')
      let fieldIsStatic = fieldNameFullyQualified.length > 1
      let fieldName = fieldNameFullyQualified[fieldNameFullyQualified.length - 1]
      let fieldType = cheerio('div.itemTitle > span.light', field).text()
      fieldType = fieldType.substr(1, fieldType.length).trim()

      let fieldDocElement = cheerio('div.full-description', field).clone()
      cheerio('p', fieldDocElement).remove()
      let fieldDoc = fieldDocElement.text().trim()
      let fieldUrl = url + '#'
      if (fieldIsStatic) fieldUrl += '.'
      fieldUrl += fieldName

      fields.push({
        name: fieldName,
        isStatic: fieldIsStatic,
        doc: fieldDoc,
        url: fieldUrl,
        type: fieldType
      })
    })

    // Build branch of tree
    branch['!doc'] = doc
    branch['!url'] = url
    if (ext) {
      branch.prototype = {
        '!proto': ext + '.prototype'
      }
    }
    addConstructorToBranch(constructor, branch)
    addMethodsToBranch(methods, branch)
    addFieldsToBranch(fields, branch)
    if (branch.prototype && Object.keys(branch.prototype).length === 0) {
      delete branch.prototype
    }

    resolve()
  })
}
