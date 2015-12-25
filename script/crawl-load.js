'use strict'

let request = require('request')

let Parse = require('./crawl-parse')

const INDEX_URL = 'https://openui5.hana.ondemand.com/docs/api/index.xml'
const DETAIL_URL_PREFIX = 'https://openui5.hana.ondemand.com/docs/api/'

let loadTree = function (tree, nodeList) {
  return new Promise((resolve, reject) => {
    console.log('Reading details of ' + nodeList.length + ' entries...')
    let loadNodePromises = []
    let retryList = []
    nodeList.forEach((node) => {
      let loadNodePromise = new Promise((resolve, reject) => {
        loadNode(node.ref).then((page) => {
          return Parse.node(page, node)
        }).then(() => {
          resolve()
        }).catch((reason) => {
          console.log('Warning: ' + reason + ' for ' + node.ref + ' -- will retry')
          retryList.push(node)
          resolve()
        })
      })
      loadNodePromises.push(loadNodePromise)
    })

    Promise.all(loadNodePromises).then(() => {
      if (retryList.length > 0) {
        loadTree(tree, retryList).then(resolve)
      } else {
        resolve(tree)
      }
    })
  })
}

let loadNode = function (ref) {
  let nodeUrl = DETAIL_URL_PREFIX + ref

  return new Promise((resolve, reject) => {
    request(nodeUrl, (error, response, data) => {
      if (!error && response.statusCode === 200) {
        resolve(data)
      } else {
        reject(error.code)
      }
    })
  })
}

exports.index = function () {
  return new Promise((resolve, reject) => {
    console.log('Loading index file at ' + INDEX_URL)

    request(INDEX_URL, (error, response, data) => {
      if (!error && response.statusCode === 200) {
        resolve(data)
      } else {
        reject('Error while loading index file: ' + error.code)
      }
    })
  })
}

exports.tree = loadTree
