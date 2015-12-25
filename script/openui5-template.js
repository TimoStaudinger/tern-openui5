/* global define, tern */

;(function (mod) {
  if (typeof exports === 'object' && typeof module === 'object') { // CommonJS
    return mod(require('tern/lib/infer'), require('tern/lib/tern'), require)
  }
  if (typeof define === 'function' && define.amd) { // AMD
    return define(['tern/lib/infer', 'tern/lib/tern'], mod)
  }
  mod(tern, tern)
})(function (infer, tern, require) {
  'use strict'

  tern.registerPlugin('openui5', function (server, options) {
    return {
      defs: defs
    }
  })

  var defs = '{{defs}}'
})
