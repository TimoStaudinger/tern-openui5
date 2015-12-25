'use strict'

let buildTree = function (objects, currentRoot, nodeList) {
  objects.forEach((object) => {
    let branch = currentRoot[object.name[0]] = {}

    nodeList.push({
      ref: object.ref[0],
      branch: branch
    })

    if (object.children) {
      buildTree(object.children[0].namespace, branch, nodeList)
    }
  })
}

exports.build = function (index) {
  return new Promise((resolve, reject) => {
    let nodeList = []
    let tree = {
      '!name': 'openui5'
    }
    buildTree(index.namespace, tree, nodeList)
    resolve({
      tree: tree,
      nodeList: nodeList
    })
  })
}

exports.stringify = function (tree) {
  console.log('Stringifying tree...')
  return new Promise((resolve, reject) => {
    resolve(JSON.stringify(tree, null, 2))
  })
}
