(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"), require);
  if (typeof define == "function" && define.amd) // AMD
    return define(["tern/lib/infer", "tern/lib/tern"], mod);
  mod(tern, tern);
})(function(infer, tern, require) {
  "use strict";

  tern.registerPlugin("openui5", function(server, options) {
    return {defs: defs};
  });

  var defs = {
    "!name": "openui5",
    "sap": {
      "!doc" : "Root namespace for JavaScript functionality provided by SAP SE.",
      "!url" : "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.html",
      "ui": {
        "!doc": "The sap.ui namespace is the central OpenAjax compliant entry point for UI related JavaScript functionality provided by SAP.",
        "!url": "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.html",
        "component" : {
          "!type" : "fn(arg1: string|object) -> sap.ui.core.Component|Promise",
          "!doc" : "Creates a new instance of a Component or returns the instance of an existing Component.",
          "!url" : "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.html#.component"
        },
        "core": {
          "Core" : {
            "!doc": "Core Class of the SAP UI Library.",
            "!url": "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.core.Core.html",
          },
          "Component" : {}
        },
        "getCore" : "fn() -> sap.ui.core.Core"
      }
    }
  };
});
