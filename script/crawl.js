'use strict'

let Load = require('./crawl-load')
let Parse = require('./crawl-parse')
let Tree = require('./crawl-tree')
let Write = require('./crawl-write')

Load.index().then((index) => {
  return Parse.index(index)
}).then((index) => {
  return Tree.build(index)
}).then((payload) => {
  return Load.tree(payload.tree, payload.nodeList)
}).then((tree) => {
  return Tree.stringify(tree)
}).then((tree) => {
  return Write.script(tree)
}).then((tree) => {
  return Write.tree(tree)
}).catch((reason) => {
  console.log(reason)
})
