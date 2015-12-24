"use strict"

let request = require('request')
let parseXmlString = require('xml2js').parseString
let cheerio = require('cheerio')
let fs = require('fs')
let mkdirp = require('mkdirp')
let dirname = require("path").dirname

const INDEX_URL = 'https://openui5.hana.ondemand.com/docs/api/index.xml'
const DETAIL_URL_PREFIX = 'https://openui5.hana.ondemand.com/docs/api/'
const FILE_OUT = 'out/tree.json'

let tree = {}
let promisesDone = 0;
let lastShownPercentage = -1
let readDetailsQueue = []
let retryQueue = []

let buildTree = function(objects, currentRoot) {
  objects.forEach(function(object) {
    let branch = currentRoot[object.name[0]] = {}
    readDetailsQueue.push({ref: object.ref[0], branch: branch})
    if(!!object.children) buildTree(object.children[0].namespace, branch)
  })
}

let readAttributesForNode = function(ref, branch) {
  let detailUrl = DETAIL_URL_PREFIX + ref

  let promise = new Promise(function(resolve, reject){

    request(detailUrl, function (error, response, data) {
      if (!error && response.statusCode == 200) {
        var parsedHTML = cheerio.load(data)
        parsedHTML('h1').map(function(i, element) {
          element = cheerio(element)
          resolve({doc: element.text().trim()})
        })
      } else {
        reject({reason: error.code, ref: ref, branch: branch})
      }
    })
  }).then(function(data){
    branch['!doc'] = data.doc
    branch['!url'] = 'test'
  }).catch(function(data){
    console.log('Warning: ' + data.reason + ' for ' + data.ref + ' -- will retry')
    retryQueue.push({ref: data.ref, branch: data.branch})
  })
  return promise
}

let readAttributes = function() {
  return new Promise(function(resolve, reject){
    console.log('Reading details of ' + readDetailsQueue.length + ' entries...')
    let promises = []
    readDetailsQueue.forEach(function(entry) {
      promises.push(readAttributesForNode(entry.ref, entry.branch))
    })
    Promise.all(promises).then(function() {
      readDetailsQueue = retryQueue
      retryQueue = []

      if(readDetailsQueue.length > 0) {
        readAttributes().then(resolve)
      } else {
        resolve()
      }
    })
  })
}

console.log('Loading index file at ' + INDEX_URL)

new Promise(function(resolve, reject) {
  request(INDEX_URL, function (error, response, data) {
    if (!error && response.statusCode == 200) {
      resolve(data)
    }
  })
}).then(function(data) {
  return new Promise(function(resolve, reject) {
    parseXmlString(data, function(err, result) {
      resolve(result.index)
    })
  })
}).then(function(data) {
  console.log('Parsing index...')
  buildTree(data.namespace, tree)
}).then(function(){
  return readAttributes()
}).then(function () {
  console.log('Writing output...')

  mkdirp(dirname(FILE_OUT), function (err) {
    if (err) console.log('Error while writing output: ' + err)
    else fs.writeFile(FILE_OUT, JSON.stringify(tree, null, 2), function(err) {
      if(err) console.log('Error while writing output: ' + err)
      else console.log("All done. Tree saved to " + FILE_OUT)
    })
  })
})
