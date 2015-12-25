'use strict'

let dirname = require('path').dirname
let format = require('standard-format').transform
let fs = require('fs')
let mkdirp = require('mkdirp')

const TREE_OUT = 'out/tree.json'
const OPENUI5_TEMPLATE = 'openui5-template.js'
const OPENUI5_OUT = '../openui5.js'

exports.tree = function (tree) {
  return new Promise((resolve, reject) => {
    console.log('Writing tree...')
    mkdirp(dirname(TREE_OUT), (err) => {
      if (err) {
        reject('Error while writing ' + TREE_OUT + ': ' + err)
      } else {
        fs.writeFile(TREE_OUT, tree, (err) => {
          if (err) {
            reject('Error while writing ' + TREE_OUT + ': ' + err)
          } else {
            console.log('Tree written to ' + TREE_OUT)
            resolve(tree)
          }
        })
      }
    })
  })
}

exports.script = function (tree) {
  return new Promise((resolve, reject) => {
    console.log('Reading template...')
    fs.readFile(OPENUI5_TEMPLATE, 'utf8', (err, data) => {
      if (err) {
        reject('Error while writing output: ' + err)
      } else {
        console.log('Formatting script...')
        let openui5Content = format(data.replace("'{{defs}}'", tree), {indent_size: 2})
        console.log('Writing script...')
        mkdirp(dirname(OPENUI5_OUT), (err) => {
          if (err) {
            reject('Error while writing ' + OPENUI5_OUT + ': ' + err)
          } else {
            fs.writeFile(OPENUI5_OUT, openui5Content, (err) => {
              if (err) {
                reject('Error while writing ' + OPENUI5_OUT + ': ' + err)
              } else {
                console.log('Script written to ' + OPENUI5_OUT)
                resolve(tree)
              }
            })
          }
        })
      }
    })
  })
}
