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
    // "sap": {
    //   "!doc" : "Root namespace for JavaScript functionality provided by SAP SE.",
    //   "!url" : "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.html",
    //   "ui": {
    //     "!doc": "The sap.ui namespace is the central OpenAjax compliant entry point for UI related JavaScript functionality provided by SAP.",
    //     "!url": "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.html",
    //     "component" : {
    //       "!type" : "fn(arg1: string|object) -> sap.ui.core.Component|Promise",
    //       "!doc" : "Creates a new instance of a Component or returns the instance of an existing Component.",
    //       "!url" : "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.html#.component"
    //     },
    //     "core": {
    //       "Core" : {
    //         "!doc": "Core Class of the SAP UI Library.",
    //         "!url": "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.core.Core.html",
    //       },
    //       "Component" : {}
    //     },
    //     "getCore" : "fn() -> sap.ui.core.Core"
    //   }
    // }
    "jQuery": {
        "device": {
            "is": {
                "!doc": "Namespace jQuery.device.is",
                "!url": "test"
            },
            "!doc": "Namespace jQuery.device",
            "!url": "test"
        },
        "Event": {
            "!doc": "Class jQuery.Event",
            "!url": "test"
        },
        "os": {
            "!doc": "Namespace jQuery.os",
            "!url": "test"
        },
        "sap": {
            "act": {
                "!doc": "Namespace jQuery.sap.act",
                "!url": "test"
            },
            "history": {
                "NavType": {
                    "!doc": "Namespace jQuery.sap.history.NavType",
                    "!url": "test"
                },
                "!doc": "Class jQuery.sap.history",
                "!url": "test"
            },
            "KeyCodes": {
                "!doc": "Namespace jQuery.sap.KeyCodes",
                "!url": "test"
            },
            "log": {
                "Level": {
                    "!doc": "Namespace jQuery.sap.log.Level",
                    "!url": "test"
                },
                "Logger": {
                    "!doc": "Class jQuery.sap.log.Logger",
                    "!url": "test"
                },
                "LogLevel": {
                    "!doc": "Namespace jQuery.sap.log.LogLevel",
                    "!url": "test"
                },
                "!doc": "Namespace jQuery.sap.log",
                "!url": "test"
            },
            "measure": {
                "!doc": "Namespace jQuery.sap.measure",
                "!url": "test"
            },
            "PseudoEvents": {
                "!doc": "Namespace jQuery.sap.PseudoEvents",
                "!url": "test"
            },
            "storage": {
                "Storage": {
                    "!doc": "Interface jQuery.sap.storage.Storage",
                    "!url": "test"
                },
                "Type": {
                    "!doc": "Namespace jQuery.sap.storage.Type",
                    "!url": "test"
                },
                "!doc": "Namespace jQuery.sap.storage",
                "!url": "test"
            },
            "util": {
                "Properties": {
                    "!doc": "Interface jQuery.sap.util.Properties",
                    "!url": "test"
                },
                "ResourceBundle": {
                    "!doc": "Interface jQuery.sap.util.ResourceBundle",
                    "!url": "test"
                },
                "UriParameters": {
                    "!doc": "Interface jQuery.sap.util.UriParameters",
                    "!url": "test"
                },
                "!doc": "Namespace jQuery.sap.util",
                "!url": "test"
            },
            "Version": {
                "!doc": "Class jQuery.sap.Version",
                "!url": "test"
            },
            "!doc": "Namespace jQuery.sap",
            "!url": "test"
        },
        "support": {
            "!doc": "Namespace jQuery.support",
            "!url": "test"
        },
        "!doc": "Namespace jQuery",
        "!url": "test"
    },
    "sap": {
        "m": {
            "ActionListItem": {
                "!doc": "Class sap.m.ActionListItem",
                "!url": "test"
            },
            "ActionSelect": {
                "!doc": "Class sap.m.ActionSelect",
                "!url": "test"
            },
            "ActionSheet": {
                "!doc": "Class sap.m.ActionSheet",
                "!url": "test"
            },
            "App": {
                "!doc": "Class sap.m.App",
                "!url": "test"
            },
            "BackgroundDesign": {
                "!doc": "Enum sap.m.BackgroundDesign",
                "!url": "test"
            },
            "BackgroundHelper": {
                "!doc": "Namespace sap.m.BackgroundHelper",
                "!url": "test"
            },
            "Bar": {
                "!doc": "Class sap.m.Bar",
                "!url": "test"
            },
            "BarDesign": {
                "!doc": "Enum sap.m.BarDesign",
                "!url": "test"
            },
            "BusyDialog": {
                "!doc": "Class sap.m.BusyDialog",
                "!url": "test"
            },
            "BusyIndicator": {
                "!doc": "Class sap.m.BusyIndicator",
                "!url": "test"
            },
            "Button": {
                "!doc": "Class sap.m.Button",
                "!url": "test"
            },
            "ButtonType": {
                "!doc": "Enum sap.m.ButtonType",
                "!url": "test"
            },
            "Carousel": {
                "!doc": "Class sap.m.Carousel",
                "!url": "test"
            },
            "CheckBox": {
                "!doc": "Class sap.m.CheckBox",
                "!url": "test"
            },
            "Column": {
                "!doc": "Class sap.m.Column",
                "!url": "test"
            },
            "ColumnListItem": {
                "!doc": "Class sap.m.ColumnListItem",
                "!url": "test"
            },
            "ComboBox": {
                "!doc": "Class sap.m.ComboBox",
                "!url": "test"
            },
            "ComboBoxBase": {
                "!doc": "Class sap.m.ComboBoxBase",
                "!url": "test"
            },
            "CustomListItem": {
                "!doc": "Class sap.m.CustomListItem",
                "!url": "test"
            },
            "CustomTile": {
                "!doc": "Class sap.m.CustomTile",
                "!url": "test"
            },
            "DatePicker": {
                "!doc": "Class sap.m.DatePicker",
                "!url": "test"
            },
            "DateRangeSelection": {
                "!doc": "Class sap.m.DateRangeSelection",
                "!url": "test"
            },
            "DateTimeInput": {
                "!doc": "Class sap.m.DateTimeInput",
                "!url": "test"
            },
            "DateTimeInputType": {
                "!doc": "Enum sap.m.DateTimeInputType",
                "!url": "test"
            },
            "Dialog": {
                "!doc": "Class sap.m.Dialog",
                "!url": "test"
            },
            "DialogType": {
                "!doc": "Enum sap.m.DialogType",
                "!url": "test"
            },
            "DisplayListItem": {
                "!doc": "Class sap.m.DisplayListItem",
                "!url": "test"
            },
            "DraftIndicator": {
                "!doc": "abstract Class sap.m.DraftIndicator",
                "!url": "test"
            },
            "DraftIndicatorState": {
                "!doc": "Enum sap.m.DraftIndicatorState",
                "!url": "test"
            },
            "FacetFilter": {
                "!doc": "Class sap.m.FacetFilter",
                "!url": "test"
            },
            "FacetFilterItem": {
                "!doc": "Class sap.m.FacetFilterItem",
                "!url": "test"
            },
            "FacetFilterList": {
                "!doc": "Class sap.m.FacetFilterList",
                "!url": "test"
            },
            "FacetFilterListDataType": {
                "!doc": "Enum sap.m.FacetFilterListDataType",
                "!url": "test"
            },
            "FacetFilterType": {
                "!doc": "Enum sap.m.FacetFilterType",
                "!url": "test"
            },
            "FeedInput": {
                "!doc": "Class sap.m.FeedInput",
                "!url": "test"
            },
            "FeedListItem": {
                "!doc": "Class sap.m.FeedListItem",
                "!url": "test"
            },
            "FlexAlignItems": {
                "!doc": "Enum sap.m.FlexAlignItems",
                "!url": "test"
            },
            "FlexAlignSelf": {
                "!doc": "Enum sap.m.FlexAlignSelf",
                "!url": "test"
            },
            "FlexBox": {
                "!doc": "Class sap.m.FlexBox",
                "!url": "test"
            },
            "FlexDirection": {
                "!doc": "Enum sap.m.FlexDirection",
                "!url": "test"
            },
            "FlexItemData": {
                "!doc": "Class sap.m.FlexItemData",
                "!url": "test"
            },
            "FlexJustifyContent": {
                "!doc": "Enum sap.m.FlexJustifyContent",
                "!url": "test"
            },
            "FlexRendertype": {
                "!doc": "Enum sap.m.FlexRendertype",
                "!url": "test"
            },
            "GroupHeaderListItem": {
                "!doc": "Class sap.m.GroupHeaderListItem",
                "!url": "test"
            },
            "GrowingEnablement": {
                "!doc": "Class sap.m.GrowingEnablement",
                "!url": "test"
            },
            "GrowingList": {
                "!doc": "Class sap.m.GrowingList",
                "!url": "test"
            },
            "HBox": {
                "!doc": "Class sap.m.HBox",
                "!url": "test"
            },
            "HeaderLevel": {
                "!doc": "Enum sap.m.HeaderLevel",
                "!url": "test"
            },
            "IBar": {
                "!doc": "Interface sap.m.IBar",
                "!url": "test"
            },
            "IBarHTMLTag": {
                "!doc": "Enum sap.m.IBarHTMLTag",
                "!url": "test"
            },
            "IBarInPageEnabler": {
                "!doc": "Class sap.m.IBarInPageEnabler",
                "!url": "test"
            },
            "IconTab": {
                "!doc": "Interface sap.m.IconTab",
                "!url": "test"
            },
            "IconTabBar": {
                "!doc": "Class sap.m.IconTabBar",
                "!url": "test"
            },
            "IconTabFilter": {
                "!doc": "Class sap.m.IconTabFilter",
                "!url": "test"
            },
            "IconTabFilterDesign": {
                "!doc": "Enum sap.m.IconTabFilterDesign",
                "!url": "test"
            },
            "IconTabHeader": {
                "!doc": "Class sap.m.IconTabHeader",
                "!url": "test"
            },
            "IconTabSeparator": {
                "!doc": "Class sap.m.IconTabSeparator",
                "!url": "test"
            },
            "Image": {
                "!doc": "Class sap.m.Image",
                "!url": "test"
            },
            "ImageHelper": {
                "!doc": "Namespace sap.m.ImageHelper",
                "!url": "test"
            },
            "ImageMode": {
                "!doc": "Enum sap.m.ImageMode",
                "!url": "test"
            },
            "Input": {
                "!doc": "Class sap.m.Input",
                "!url": "test"
            },
            "InputBase": {
                "!doc": "Class sap.m.InputBase",
                "!url": "test"
            },
            "InputListItem": {
                "!doc": "Class sap.m.InputListItem",
                "!url": "test"
            },
            "InputType": {
                "!doc": "Enum sap.m.InputType",
                "!url": "test"
            },
            "Label": {
                "!doc": "Class sap.m.Label",
                "!url": "test"
            },
            "LabelDesign": {
                "!doc": "Enum sap.m.LabelDesign",
                "!url": "test"
            },
            "Link": {
                "!doc": "Class sap.m.Link",
                "!url": "test"
            },
            "List": {
                "!doc": "Class sap.m.List",
                "!url": "test"
            },
            "ListBase": {
                "!doc": "Class sap.m.ListBase",
                "!url": "test"
            },
            "ListHeaderDesign": {
                "!doc": "Enum sap.m.ListHeaderDesign",
                "!url": "test"
            },
            "ListItemBase": {
                "!doc": "Class sap.m.ListItemBase",
                "!url": "test"
            },
            "ListMode": {
                "!doc": "Enum sap.m.ListMode",
                "!url": "test"
            },
            "ListSeparators": {
                "!doc": "Enum sap.m.ListSeparators",
                "!url": "test"
            },
            "ListType": {
                "!doc": "Enum sap.m.ListType",
                "!url": "test"
            },
            "MessageBox": {
                "Action": {
                    "!doc": "Namespace sap.m.MessageBox.Action",
                    "!url": "test"
                },
                "Icon": {
                    "!doc": "Namespace sap.m.MessageBox.Icon",
                    "!url": "test"
                },
                "!doc": "Namespace sap.m.MessageBox",
                "!url": "test"
            },
            "MessagePage": {
                "!doc": "Class sap.m.MessagePage",
                "!url": "test"
            },
            "MessagePopover": {
                "!doc": "Class sap.m.MessagePopover",
                "!url": "test"
            },
            "MessagePopoverItem": {
                "!doc": "Class sap.m.MessagePopoverItem",
                "!url": "test"
            },
            "MessageStrip": {
                "!doc": "Class sap.m.MessageStrip",
                "!url": "test"
            },
            "MessageToast": {
                "!doc": "Namespace sap.m.MessageToast",
                "!url": "test"
            },
            "MultiComboBox": {
                "!doc": "Class sap.m.MultiComboBox",
                "!url": "test"
            },
            "MultiInput": {
                "!doc": "Class sap.m.MultiInput",
                "!url": "test"
            },
            "NavContainer": {
                "!doc": "Class sap.m.NavContainer",
                "!url": "test"
            },
            "NavContainerChild": {
                "!doc": "Interface sap.m.NavContainerChild",
                "!url": "test"
            },
            "ObjectAttribute": {
                "!doc": "Class sap.m.ObjectAttribute",
                "!url": "test"
            },
            "ObjectHeader": {
                "!doc": "Class sap.m.ObjectHeader",
                "!url": "test"
            },
            "ObjectHeaderContainer": {
                "!doc": "Interface sap.m.ObjectHeaderContainer",
                "!url": "test"
            },
            "ObjectIdentifier": {
                "!doc": "Class sap.m.ObjectIdentifier",
                "!url": "test"
            },
            "ObjectListItem": {
                "!doc": "Class sap.m.ObjectListItem",
                "!url": "test"
            },
            "ObjectNumber": {
                "!doc": "Class sap.m.ObjectNumber",
                "!url": "test"
            },
            "ObjectStatus": {
                "!doc": "Class sap.m.ObjectStatus",
                "!url": "test"
            },
            "OverflowToolbar": {
                "!doc": "Class sap.m.OverflowToolbar",
                "!url": "test"
            },
            "OverflowToolbarLayoutData": {
                "!doc": "Class sap.m.OverflowToolbarLayoutData",
                "!url": "test"
            },
            "OverflowToolbarPriority": {
                "!doc": "Enum sap.m.OverflowToolbarPriority",
                "!url": "test"
            },
            "P13nColumnsItem": {
                "!doc": "Class sap.m.P13nColumnsItem",
                "!url": "test"
            },
            "P13nColumnsPanel": {
                "!doc": "Class sap.m.P13nColumnsPanel",
                "!url": "test"
            },
            "P13nConditionPanel": {
                "!doc": "Class sap.m.P13nConditionPanel",
                "!url": "test"
            },
            "P13nDialog": {
                "!doc": "Class sap.m.P13nDialog",
                "!url": "test"
            },
            "P13nFilterItem": {
                "!doc": "Class sap.m.P13nFilterItem",
                "!url": "test"
            },
            "P13nFilterPanel": {
                "!doc": "Class sap.m.P13nFilterPanel",
                "!url": "test"
            },
            "P13nGroupItem": {
                "!doc": "Class sap.m.P13nGroupItem",
                "!url": "test"
            },
            "P13nGroupPanel": {
                "!doc": "Class sap.m.P13nGroupPanel",
                "!url": "test"
            },
            "P13nItem": {
                "!doc": "Class sap.m.P13nItem",
                "!url": "test"
            },
            "P13nPanel": {
                "!doc": "Class sap.m.P13nPanel",
                "!url": "test"
            },
            "P13nPanelType": {
                "!doc": "Enum sap.m.P13nPanelType",
                "!url": "test"
            },
            "P13nSortItem": {
                "!doc": "Class sap.m.P13nSortItem",
                "!url": "test"
            },
            "P13nSortPanel": {
                "!doc": "Class sap.m.P13nSortPanel",
                "!url": "test"
            },
            "Page": {
                "!doc": "Class sap.m.Page",
                "!url": "test"
            },
            "PageBackgroundDesign": {
                "!doc": "Enum sap.m.PageBackgroundDesign",
                "!url": "test"
            },
            "PagingButton": {
                "!doc": "Class sap.m.PagingButton",
                "!url": "test"
            },
            "Panel": {
                "!doc": "Class sap.m.Panel",
                "!url": "test"
            },
            "PlacementType": {
                "!doc": "Enum sap.m.PlacementType",
                "!url": "test"
            },
            "PopinDisplay": {
                "!doc": "Enum sap.m.PopinDisplay",
                "!url": "test"
            },
            "Popover": {
                "!doc": "Class sap.m.Popover",
                "!url": "test"
            },
            "PopupHelper": {
                "!doc": "Namespace sap.m.PopupHelper",
                "!url": "test"
            },
            "ProgressIndicator": {
                "!doc": "Class sap.m.ProgressIndicator",
                "!url": "test"
            },
            "PullToRefresh": {
                "!doc": "Class sap.m.PullToRefresh",
                "!url": "test"
            },
            "QuickView": {
                "!doc": "Class sap.m.QuickView",
                "!url": "test"
            },
            "QuickViewBase": {
                "!doc": "Class sap.m.QuickViewBase",
                "!url": "test"
            },
            "QuickViewCard": {
                "!doc": "Class sap.m.QuickViewCard",
                "!url": "test"
            },
            "QuickViewGroup": {
                "!doc": "Class sap.m.QuickViewGroup",
                "!url": "test"
            },
            "QuickViewGroupElement": {
                "!doc": "Class sap.m.QuickViewGroupElement",
                "!url": "test"
            },
            "QuickViewGroupElementType": {
                "!doc": "Enum sap.m.QuickViewGroupElementType",
                "!url": "test"
            },
            "QuickViewPage": {
                "!doc": "Class sap.m.QuickViewPage",
                "!url": "test"
            },
            "RadioButton": {
                "!doc": "Class sap.m.RadioButton",
                "!url": "test"
            },
            "RadioButtonGroup": {
                "!doc": "Class sap.m.RadioButtonGroup",
                "!url": "test"
            },
            "RatingIndicator": {
                "!doc": "Class sap.m.RatingIndicator",
                "!url": "test"
            },
            "RatingIndicatorVisualMode": {
                "!doc": "Enum sap.m.RatingIndicatorVisualMode",
                "!url": "test"
            },
            "ResponsivePopover": {
                "!doc": "Class sap.m.ResponsivePopover",
                "!url": "test"
            },
            "routing": {
                "RouteMatchedHandler": {
                    "!doc": "Class sap.m.routing.RouteMatchedHandler",
                    "!url": "test"
                },
                "Router": {
                    "!doc": "Class sap.m.routing.Router",
                    "!url": "test"
                },
                "TargetHandler": {
                    "!doc": "Class sap.m.routing.TargetHandler",
                    "!url": "test"
                },
                "Targets": {
                    "!doc": "Class sap.m.routing.Targets",
                    "!url": "test"
                },
                "!doc": "Namespace sap.m.routing",
                "!url": "test"
            },
            "ScreenSize": {
                "!doc": "Enum sap.m.ScreenSize",
                "!url": "test"
            },
            "ScrollContainer": {
                "!doc": "Class sap.m.ScrollContainer",
                "!url": "test"
            },
            "SearchField": {
                "!doc": "Class sap.m.SearchField",
                "!url": "test"
            },
            "SegmentedButton": {
                "!doc": "Class sap.m.SegmentedButton",
                "!url": "test"
            },
            "SegmentedButtonItem": {
                "!doc": "Class sap.m.SegmentedButtonItem",
                "!url": "test"
            },
            "Select": {
                "!doc": "Class sap.m.Select",
                "!url": "test"
            },
            "SelectDialog": {
                "!doc": "Class sap.m.SelectDialog",
                "!url": "test"
            },
            "SelectList": {
                "!doc": "Class sap.m.SelectList",
                "!url": "test"
            },
            "SelectType": {
                "!doc": "Enum sap.m.SelectType",
                "!url": "test"
            },
            "semantic": {
                "AddAction": {
                    "!doc": "Class sap.m.semantic.AddAction",
                    "!url": "test"
                },
                "CancelAction": {
                    "!doc": "Class sap.m.semantic.CancelAction",
                    "!url": "test"
                },
                "DetailPage": {
                    "!doc": "Class sap.m.semantic.DetailPage",
                    "!url": "test"
                },
                "DiscussInJamAction": {
                    "!doc": "Class sap.m.semantic.DiscussInJamAction",
                    "!url": "test"
                },
                "EditAction": {
                    "!doc": "Class sap.m.semantic.EditAction",
                    "!url": "test"
                },
                "FavoriteAction": {
                    "!doc": "Class sap.m.semantic.FavoriteAction",
                    "!url": "test"
                },
                "FilterAction": {
                    "!doc": "Class sap.m.semantic.FilterAction",
                    "!url": "test"
                },
                "FilterSelect": {
                    "!doc": "Class sap.m.semantic.FilterSelect",
                    "!url": "test"
                },
                "FlagAction": {
                    "!doc": "Class sap.m.semantic.FlagAction",
                    "!url": "test"
                },
                "ForwardAction": {
                    "!doc": "Class sap.m.semantic.ForwardAction",
                    "!url": "test"
                },
                "FullscreenPage": {
                    "!doc": "Class sap.m.semantic.FullscreenPage",
                    "!url": "test"
                },
                "GroupAction": {
                    "!doc": "Class sap.m.semantic.GroupAction",
                    "!url": "test"
                },
                "GroupSelect": {
                    "!doc": "Class sap.m.semantic.GroupSelect",
                    "!url": "test"
                },
                "IFilter": {
                    "!doc": "Interface sap.m.semantic.IFilter",
                    "!url": "test"
                },
                "IGroup": {
                    "!doc": "Interface sap.m.semantic.IGroup",
                    "!url": "test"
                },
                "ISort": {
                    "!doc": "Interface sap.m.semantic.ISort",
                    "!url": "test"
                },
                "MainAction": {
                    "!doc": "Class sap.m.semantic.MainAction",
                    "!url": "test"
                },
                "MasterPage": {
                    "!doc": "Class sap.m.semantic.MasterPage",
                    "!url": "test"
                },
                "MessagesIndicator": {
                    "!doc": "Class sap.m.semantic.MessagesIndicator",
                    "!url": "test"
                },
                "MultiSelectAction": {
                    "!doc": "Class sap.m.semantic.MultiSelectAction",
                    "!url": "test"
                },
                "NegativeAction": {
                    "!doc": "Class sap.m.semantic.NegativeAction",
                    "!url": "test"
                },
                "OpenInAction": {
                    "!doc": "Class sap.m.semantic.OpenInAction",
                    "!url": "test"
                },
                "PositiveAction": {
                    "!doc": "Class sap.m.semantic.PositiveAction",
                    "!url": "test"
                },
                "PrintAction": {
                    "!doc": "Class sap.m.semantic.PrintAction",
                    "!url": "test"
                },
                "SaveAction": {
                    "!doc": "Class sap.m.semantic.SaveAction",
                    "!url": "test"
                },
                "SemanticButton": {
                    "!doc": "abstract Class sap.m.semantic.SemanticButton",
                    "!url": "test"
                },
                "SemanticControl": {
                    "!doc": "abstract Class sap.m.semantic.SemanticControl",
                    "!url": "test"
                },
                "SemanticPage": {
                    "!doc": "abstract Class sap.m.semantic.SemanticPage",
                    "!url": "test"
                },
                "SemanticSelect": {
                    "!doc": "abstract Class sap.m.semantic.SemanticSelect",
                    "!url": "test"
                },
                "SemanticToggleButton": {
                    "!doc": "abstract Class sap.m.semantic.SemanticToggleButton",
                    "!url": "test"
                },
                "SendEmailAction": {
                    "!doc": "Class sap.m.semantic.SendEmailAction",
                    "!url": "test"
                },
                "SendMessageAction": {
                    "!doc": "Class sap.m.semantic.SendMessageAction",
                    "!url": "test"
                },
                "ShareInJamAction": {
                    "!doc": "Class sap.m.semantic.ShareInJamAction",
                    "!url": "test"
                },
                "ShareMenuPage": {
                    "!doc": "Class sap.m.semantic.ShareMenuPage",
                    "!url": "test"
                },
                "SortAction": {
                    "!doc": "Class sap.m.semantic.SortAction",
                    "!url": "test"
                },
                "SortSelect": {
                    "!doc": "Class sap.m.semantic.SortSelect",
                    "!url": "test"
                },
                "!doc": "Namespace sap.m.semantic",
                "!url": "test"
            },
            "Shell": {
                "!doc": "Class sap.m.Shell",
                "!url": "test"
            },
            "Slider": {
                "!doc": "Class sap.m.Slider",
                "!url": "test"
            },
            "SplitApp": {
                "!doc": "Class sap.m.SplitApp",
                "!url": "test"
            },
            "SplitAppMode": {
                "!doc": "Enum sap.m.SplitAppMode",
                "!url": "test"
            },
            "SplitContainer": {
                "!doc": "Class sap.m.SplitContainer",
                "!url": "test"
            },
            "StandardListItem": {
                "!doc": "Class sap.m.StandardListItem",
                "!url": "test"
            },
            "StandardTile": {
                "!doc": "Class sap.m.StandardTile",
                "!url": "test"
            },
            "StandardTileType": {
                "!doc": "Enum sap.m.StandardTileType",
                "!url": "test"
            },
            "SwipeDirection": {
                "!doc": "Enum sap.m.SwipeDirection",
                "!url": "test"
            },
            "Switch": {
                "!doc": "Class sap.m.Switch",
                "!url": "test"
            },
            "SwitchType": {
                "!doc": "Enum sap.m.SwitchType",
                "!url": "test"
            },
            "Table": {
                "!doc": "Class sap.m.Table",
                "!url": "test"
            },
            "TablePersoController": {
                "!doc": "Class sap.m.TablePersoController",
                "!url": "test"
            },
            "TablePersoDialog": {
                "!doc": "Class sap.m.TablePersoDialog",
                "!url": "test"
            },
            "TablePersoProvider": {
                "!doc": "abstract Class sap.m.TablePersoProvider",
                "!url": "test"
            },
            "TableSelectDialog": {
                "!doc": "Class sap.m.TableSelectDialog",
                "!url": "test"
            },
            "Text": {
                "!doc": "Class sap.m.Text",
                "!url": "test"
            },
            "TextArea": {
                "!doc": "Class sap.m.TextArea",
                "!url": "test"
            },
            "Tile": {
                "!doc": "Class sap.m.Tile",
                "!url": "test"
            },
            "TileContainer": {
                "!doc": "Class sap.m.TileContainer",
                "!url": "test"
            },
            "TimePicker": {
                "!doc": "Class sap.m.TimePicker",
                "!url": "test"
            },
            "TimePickerSlider": {
                "!doc": "Class sap.m.TimePickerSlider",
                "!url": "test"
            },
            "Title": {
                "!doc": "Class sap.m.Title",
                "!url": "test"
            },
            "ToggleButton": {
                "!doc": "Class sap.m.ToggleButton",
                "!url": "test"
            },
            "Token": {
                "!doc": "Class sap.m.Token",
                "!url": "test"
            },
            "Tokenizer": {
                "!doc": "Class sap.m.Tokenizer",
                "!url": "test"
            },
            "Toolbar": {
                "!doc": "Class sap.m.Toolbar",
                "!url": "test"
            },
            "ToolbarDesign": {
                "!doc": "Enum sap.m.ToolbarDesign",
                "!url": "test"
            },
            "ToolbarLayoutData": {
                "!doc": "Class sap.m.ToolbarLayoutData",
                "!url": "test"
            },
            "ToolbarSeparator": {
                "!doc": "Class sap.m.ToolbarSeparator",
                "!url": "test"
            },
            "ToolbarSpacer": {
                "!doc": "Class sap.m.ToolbarSpacer",
                "!url": "test"
            },
            "touch": {
                "!doc": "Namespace sap.m.touch",
                "!url": "test"
            },
            "UploadCollection": {
                "!doc": "Class sap.m.UploadCollection",
                "!url": "test"
            },
            "UploadCollectionItem": {
                "!doc": "Class sap.m.UploadCollectionItem",
                "!url": "test"
            },
            "UploadCollectionParameter": {
                "!doc": "Class sap.m.UploadCollectionParameter",
                "!url": "test"
            },
            "URLHelper": {
                "!doc": "Namespace sap.m.URLHelper",
                "!url": "test"
            },
            "VBox": {
                "!doc": "Class sap.m.VBox",
                "!url": "test"
            },
            "VerticalPlacementType": {
                "!doc": "Enum sap.m.VerticalPlacementType",
                "!url": "test"
            },
            "ViewSettingsCustomItem": {
                "!doc": "Class sap.m.ViewSettingsCustomItem",
                "!url": "test"
            },
            "ViewSettingsCustomTab": {
                "!doc": "Class sap.m.ViewSettingsCustomTab",
                "!url": "test"
            },
            "ViewSettingsDialog": {
                "!doc": "Class sap.m.ViewSettingsDialog",
                "!url": "test"
            },
            "ViewSettingsFilterItem": {
                "!doc": "Class sap.m.ViewSettingsFilterItem",
                "!url": "test"
            },
            "ViewSettingsItem": {
                "!doc": "Class sap.m.ViewSettingsItem",
                "!url": "test"
            },
            "Wizard": {
                "!doc": "Class sap.m.Wizard",
                "!url": "test"
            },
            "WizardStep": {
                "!doc": "Class sap.m.WizardStep",
                "!url": "test"
            },
            "!doc": "Namespace sap.m",
            "!url": "test"
        },
        "ui": {
            "app": {
                "Application": {
                    "!doc": "abstract Class sap.ui.app.Application",
                    "!url": "test"
                },
                "MockServer": {
                    "!doc": "abstract Class sap.ui.app.MockServer",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.app",
                "!url": "test"
            },
            "base": {
                "Event": {
                    "!doc": "Class sap.ui.base.Event",
                    "!url": "test"
                },
                "EventProvider": {
                    "!doc": "abstract Class sap.ui.base.EventProvider",
                    "!url": "test"
                },
                "Interface": {
                    "!doc": "Class sap.ui.base.Interface",
                    "!url": "test"
                },
                "ManagedObject": {
                    "!doc": "Class sap.ui.base.ManagedObject",
                    "!url": "test"
                },
                "Metadata": {
                    "!doc": "Class sap.ui.base.Metadata",
                    "!url": "test"
                },
                "Object": {
                    "!doc": "abstract Class sap.ui.base.Object",
                    "!url": "test"
                },
                "ObjectPool": {
                    "!doc": "Class sap.ui.base.ObjectPool",
                    "!url": "test"
                },
                "Poolable": {
                    "!doc": "Interface sap.ui.base.Poolable",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.base",
                "!url": "test"
            },
            "commons": {
                "Accordion": {
                    "!doc": "Class sap.ui.commons.Accordion",
                    "!url": "test"
                },
                "AccordionSection": {
                    "!doc": "Class sap.ui.commons.AccordionSection",
                    "!url": "test"
                },
                "ApplicationHeader": {
                    "!doc": "Class sap.ui.commons.ApplicationHeader",
                    "!url": "test"
                },
                "Area": {
                    "!doc": "Class sap.ui.commons.Area",
                    "!url": "test"
                },
                "AutoComplete": {
                    "!doc": "Class sap.ui.commons.AutoComplete",
                    "!url": "test"
                },
                "Button": {
                    "!doc": "Class sap.ui.commons.Button",
                    "!url": "test"
                },
                "ButtonStyle": {
                    "!doc": "Enum sap.ui.commons.ButtonStyle",
                    "!url": "test"
                },
                "Callout": {
                    "!doc": "Class sap.ui.commons.Callout",
                    "!url": "test"
                },
                "CalloutBase": {
                    "!doc": "Class sap.ui.commons.CalloutBase",
                    "!url": "test"
                },
                "Carousel": {
                    "!doc": "Class sap.ui.commons.Carousel",
                    "!url": "test"
                },
                "CheckBox": {
                    "!doc": "Class sap.ui.commons.CheckBox",
                    "!url": "test"
                },
                "ColorPicker": {
                    "!doc": "Class sap.ui.commons.ColorPicker",
                    "!url": "test"
                },
                "ComboBox": {
                    "!doc": "Class sap.ui.commons.ComboBox",
                    "!url": "test"
                },
                "DatePicker": {
                    "!doc": "Class sap.ui.commons.DatePicker",
                    "!url": "test"
                },
                "Dialog": {
                    "!doc": "Class sap.ui.commons.Dialog",
                    "!url": "test"
                },
                "DropdownBox": {
                    "!doc": "Class sap.ui.commons.DropdownBox",
                    "!url": "test"
                },
                "enums": {
                    "AreaDesign": {
                        "!doc": "Enum sap.ui.commons.enums.AreaDesign",
                        "!url": "test"
                    },
                    "BorderDesign": {
                        "!doc": "Enum sap.ui.commons.enums.BorderDesign",
                        "!url": "test"
                    },
                    "Orientation": {
                        "!doc": "Enum sap.ui.commons.enums.Orientation",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.commons.enums",
                    "!url": "test"
                },
                "FileUploader": {
                    "!doc": "Class sap.ui.commons.FileUploader",
                    "!url": "test"
                },
                "FileUploaderParameter": {
                    "!doc": "Class sap.ui.commons.FileUploaderParameter",
                    "!url": "test"
                },
                "form": {
                    "Form": {
                        "!doc": "Class sap.ui.commons.form.Form",
                        "!url": "test"
                    },
                    "FormContainer": {
                        "!doc": "Class sap.ui.commons.form.FormContainer",
                        "!url": "test"
                    },
                    "FormElement": {
                        "!doc": "Class sap.ui.commons.form.FormElement",
                        "!url": "test"
                    },
                    "FormLayout": {
                        "!doc": "Class sap.ui.commons.form.FormLayout",
                        "!url": "test"
                    },
                    "GridContainerData": {
                        "!doc": "Class sap.ui.commons.form.GridContainerData",
                        "!url": "test"
                    },
                    "GridElementData": {
                        "!doc": "Class sap.ui.commons.form.GridElementData",
                        "!url": "test"
                    },
                    "GridLayout": {
                        "!doc": "Class sap.ui.commons.form.GridLayout",
                        "!url": "test"
                    },
                    "ResponsiveLayout": {
                        "!doc": "Class sap.ui.commons.form.ResponsiveLayout",
                        "!url": "test"
                    },
                    "SimpleForm": {
                        "!doc": "Class sap.ui.commons.form.SimpleForm",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.commons.form",
                    "!url": "test"
                },
                "FormattedTextView": {
                    "!doc": "Class sap.ui.commons.FormattedTextView",
                    "!url": "test"
                },
                "FormattedTextViewControl": {
                    "!doc": "Interface sap.ui.commons.FormattedTextViewControl",
                    "!url": "test"
                },
                "HorizontalDivider": {
                    "!doc": "Class sap.ui.commons.HorizontalDivider",
                    "!url": "test"
                },
                "HorizontalDividerHeight": {
                    "!doc": "Enum sap.ui.commons.HorizontalDividerHeight",
                    "!url": "test"
                },
                "HorizontalDividerType": {
                    "!doc": "Enum sap.ui.commons.HorizontalDividerType",
                    "!url": "test"
                },
                "Image": {
                    "!doc": "Class sap.ui.commons.Image",
                    "!url": "test"
                },
                "ImageMap": {
                    "!doc": "Class sap.ui.commons.ImageMap",
                    "!url": "test"
                },
                "InPlaceEdit": {
                    "!doc": "Class sap.ui.commons.InPlaceEdit",
                    "!url": "test"
                },
                "Label": {
                    "!doc": "Class sap.ui.commons.Label",
                    "!url": "test"
                },
                "LabelDesign": {
                    "!doc": "Enum sap.ui.commons.LabelDesign",
                    "!url": "test"
                },
                "layout": {
                    "AbsoluteLayout": {
                        "!doc": "Class sap.ui.commons.layout.AbsoluteLayout",
                        "!url": "test"
                    },
                    "BackgroundDesign": {
                        "!doc": "Enum sap.ui.commons.layout.BackgroundDesign",
                        "!url": "test"
                    },
                    "BorderLayout": {
                        "!doc": "Class sap.ui.commons.layout.BorderLayout",
                        "!url": "test"
                    },
                    "BorderLayoutArea": {
                        "!doc": "Class sap.ui.commons.layout.BorderLayoutArea",
                        "!url": "test"
                    },
                    "BorderLayoutAreaTypes": {
                        "!doc": "Enum sap.ui.commons.layout.BorderLayoutAreaTypes",
                        "!url": "test"
                    },
                    "HAlign": {
                        "!doc": "Enum sap.ui.commons.layout.HAlign",
                        "!url": "test"
                    },
                    "HorizontalLayout": {
                        "!doc": "Class sap.ui.commons.layout.HorizontalLayout",
                        "!url": "test"
                    },
                    "MatrixLayout": {
                        "!doc": "Class sap.ui.commons.layout.MatrixLayout",
                        "!url": "test"
                    },
                    "MatrixLayoutCell": {
                        "!doc": "Class sap.ui.commons.layout.MatrixLayoutCell",
                        "!url": "test"
                    },
                    "MatrixLayoutRow": {
                        "!doc": "Class sap.ui.commons.layout.MatrixLayoutRow",
                        "!url": "test"
                    },
                    "Padding": {
                        "!doc": "Enum sap.ui.commons.layout.Padding",
                        "!url": "test"
                    },
                    "PositionContainer": {
                        "!doc": "Class sap.ui.commons.layout.PositionContainer",
                        "!url": "test"
                    },
                    "ResponsiveFlowLayout": {
                        "!doc": "Class sap.ui.commons.layout.ResponsiveFlowLayout",
                        "!url": "test"
                    },
                    "ResponsiveFlowLayoutData": {
                        "!doc": "Class sap.ui.commons.layout.ResponsiveFlowLayoutData",
                        "!url": "test"
                    },
                    "Separation": {
                        "!doc": "Enum sap.ui.commons.layout.Separation",
                        "!url": "test"
                    },
                    "VAlign": {
                        "!doc": "Enum sap.ui.commons.layout.VAlign",
                        "!url": "test"
                    },
                    "VerticalLayout": {
                        "!doc": "Class sap.ui.commons.layout.VerticalLayout",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.commons.layout",
                    "!url": "test"
                },
                "Link": {
                    "!doc": "Class sap.ui.commons.Link",
                    "!url": "test"
                },
                "ListBox": {
                    "!doc": "Class sap.ui.commons.ListBox",
                    "!url": "test"
                },
                "Menu": {
                    "!doc": "Class sap.ui.commons.Menu",
                    "!url": "test"
                },
                "MenuBar": {
                    "!doc": "Class sap.ui.commons.MenuBar",
                    "!url": "test"
                },
                "MenuBarDesign": {
                    "!doc": "Enum sap.ui.commons.MenuBarDesign",
                    "!url": "test"
                },
                "MenuButton": {
                    "!doc": "Class sap.ui.commons.MenuButton",
                    "!url": "test"
                },
                "MenuItem": {
                    "!doc": "Class sap.ui.commons.MenuItem",
                    "!url": "test"
                },
                "MenuItemBase": {
                    "!doc": "abstract Class sap.ui.commons.MenuItemBase",
                    "!url": "test"
                },
                "MenuTextFieldItem": {
                    "!doc": "Class sap.ui.commons.MenuTextFieldItem",
                    "!url": "test"
                },
                "Message": {
                    "!doc": "Class sap.ui.commons.Message",
                    "!url": "test"
                },
                "MessageBar": {
                    "!doc": "Class sap.ui.commons.MessageBar",
                    "!url": "test"
                },
                "MessageBox": {
                    "Action": {
                        "!doc": "Enum sap.ui.commons.MessageBox.Action",
                        "!url": "test"
                    },
                    "Icon": {
                        "!doc": "Enum sap.ui.commons.MessageBox.Icon",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.commons.MessageBox",
                    "!url": "test"
                },
                "MessageList": {
                    "!doc": "Class sap.ui.commons.MessageList",
                    "!url": "test"
                },
                "MessageToast": {
                    "!doc": "Class sap.ui.commons.MessageToast",
                    "!url": "test"
                },
                "MessageType": {
                    "!doc": "Enum sap.ui.commons.MessageType",
                    "!url": "test"
                },
                "Paginator": {
                    "!doc": "Class sap.ui.commons.Paginator",
                    "!url": "test"
                },
                "PaginatorEvent": {
                    "!doc": "Enum sap.ui.commons.PaginatorEvent",
                    "!url": "test"
                },
                "Panel": {
                    "!doc": "Class sap.ui.commons.Panel",
                    "!url": "test"
                },
                "PasswordField": {
                    "!doc": "Class sap.ui.commons.PasswordField",
                    "!url": "test"
                },
                "ProgressIndicator": {
                    "!doc": "Class sap.ui.commons.ProgressIndicator",
                    "!url": "test"
                },
                "RadioButton": {
                    "!doc": "Class sap.ui.commons.RadioButton",
                    "!url": "test"
                },
                "RadioButtonGroup": {
                    "!doc": "Class sap.ui.commons.RadioButtonGroup",
                    "!url": "test"
                },
                "RangeSlider": {
                    "!doc": "Class sap.ui.commons.RangeSlider",
                    "!url": "test"
                },
                "RatingIndicator": {
                    "!doc": "Class sap.ui.commons.RatingIndicator",
                    "!url": "test"
                },
                "RatingIndicatorVisualMode": {
                    "!doc": "Enum sap.ui.commons.RatingIndicatorVisualMode",
                    "!url": "test"
                },
                "ResponsiveContainer": {
                    "!doc": "Class sap.ui.commons.ResponsiveContainer",
                    "!url": "test"
                },
                "ResponsiveContainerRange": {
                    "!doc": "Class sap.ui.commons.ResponsiveContainerRange",
                    "!url": "test"
                },
                "RichTooltip": {
                    "!doc": "Class sap.ui.commons.RichTooltip",
                    "!url": "test"
                },
                "RoadMap": {
                    "!doc": "Class sap.ui.commons.RoadMap",
                    "!url": "test"
                },
                "RoadMapStep": {
                    "!doc": "Class sap.ui.commons.RoadMapStep",
                    "!url": "test"
                },
                "RowRepeater": {
                    "!doc": "Class sap.ui.commons.RowRepeater",
                    "!url": "test"
                },
                "RowRepeaterDesign": {
                    "!doc": "Enum sap.ui.commons.RowRepeaterDesign",
                    "!url": "test"
                },
                "RowRepeaterFilter": {
                    "!doc": "Class sap.ui.commons.RowRepeaterFilter",
                    "!url": "test"
                },
                "RowRepeaterSorter": {
                    "!doc": "Class sap.ui.commons.RowRepeaterSorter",
                    "!url": "test"
                },
                "SearchField": {
                    "!doc": "Class sap.ui.commons.SearchField",
                    "!url": "test"
                },
                "SearchProvider": {
                    "!doc": "Class sap.ui.commons.SearchProvider",
                    "!url": "test"
                },
                "SegmentedButton": {
                    "!doc": "Class sap.ui.commons.SegmentedButton",
                    "!url": "test"
                },
                "Slider": {
                    "!doc": "Class sap.ui.commons.Slider",
                    "!url": "test"
                },
                "Splitter": {
                    "!doc": "Class sap.ui.commons.Splitter",
                    "!url": "test"
                },
                "SplitterSize": {
                    "!doc": "final Namespace sap.ui.commons.SplitterSize",
                    "!url": "test"
                },
                "Tab": {
                    "!doc": "Class sap.ui.commons.Tab",
                    "!url": "test"
                },
                "TabStrip": {
                    "!doc": "Class sap.ui.commons.TabStrip",
                    "!url": "test"
                },
                "TextArea": {
                    "!doc": "Class sap.ui.commons.TextArea",
                    "!url": "test"
                },
                "TextField": {
                    "!doc": "Class sap.ui.commons.TextField",
                    "!url": "test"
                },
                "TextView": {
                    "!doc": "Class sap.ui.commons.TextView",
                    "!url": "test"
                },
                "TextViewColor": {
                    "!doc": "Enum sap.ui.commons.TextViewColor",
                    "!url": "test"
                },
                "TextViewDesign": {
                    "!doc": "Enum sap.ui.commons.TextViewDesign",
                    "!url": "test"
                },
                "Title": {
                    "!doc": "Class sap.ui.commons.Title",
                    "!url": "test"
                },
                "ToggleButton": {
                    "!doc": "Class sap.ui.commons.ToggleButton",
                    "!url": "test"
                },
                "Toolbar": {
                    "!doc": "Class sap.ui.commons.Toolbar",
                    "!url": "test"
                },
                "ToolbarDesign": {
                    "!doc": "Enum sap.ui.commons.ToolbarDesign",
                    "!url": "test"
                },
                "ToolbarItem": {
                    "!doc": "Interface sap.ui.commons.ToolbarItem",
                    "!url": "test"
                },
                "ToolbarSeparator": {
                    "!doc": "Class sap.ui.commons.ToolbarSeparator",
                    "!url": "test"
                },
                "ToolbarSeparatorDesign": {
                    "!doc": "Enum sap.ui.commons.ToolbarSeparatorDesign",
                    "!url": "test"
                },
                "Tree": {
                    "!doc": "Class sap.ui.commons.Tree",
                    "!url": "test"
                },
                "TreeNode": {
                    "!doc": "Class sap.ui.commons.TreeNode",
                    "!url": "test"
                },
                "TreeSelectionMode": {
                    "!doc": "Enum sap.ui.commons.TreeSelectionMode",
                    "!url": "test"
                },
                "TriStateCheckBox": {
                    "!doc": "Class sap.ui.commons.TriStateCheckBox",
                    "!url": "test"
                },
                "TriStateCheckBoxState": {
                    "!doc": "Enum sap.ui.commons.TriStateCheckBoxState",
                    "!url": "test"
                },
                "ValueHelpField": {
                    "!doc": "Class sap.ui.commons.ValueHelpField",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.commons",
                "!url": "test"
            },
            "core": {
                "AccessibleRole": {
                    "!doc": "Enum sap.ui.core.AccessibleRole",
                    "!url": "test"
                },
                "AppCacheBuster": {
                    "!doc": "Namespace sap.ui.core.AppCacheBuster",
                    "!url": "test"
                },
                "BarColor": {
                    "!doc": "Enum sap.ui.core.BarColor",
                    "!url": "test"
                },
                "BusyIndicator": {
                    "!doc": "Namespace sap.ui.core.BusyIndicator",
                    "!url": "test"
                },
                "BusyIndicatorUtils": {
                    "!doc": "Namespace sap.ui.core.BusyIndicatorUtils",
                    "!url": "test"
                },
                "CalendarType": {
                    "!doc": "Enum sap.ui.core.CalendarType",
                    "!url": "test"
                },
                "Collision": {
                    "!doc": "final Namespace sap.ui.core.Collision",
                    "!url": "test"
                },
                "Component": {
                    "!doc": "abstract Class sap.ui.core.Component",
                    "!url": "test"
                },
                "ComponentContainer": {
                    "!doc": "Class sap.ui.core.ComponentContainer",
                    "!url": "test"
                },
                "ComponentMetadata": {
                    "!doc": "Class sap.ui.core.ComponentMetadata",
                    "!url": "test"
                },
                "Configuration": {
                    "FormatSettings": {
                        "!doc": "Class sap.ui.core.Configuration.FormatSettings",
                        "!url": "test"
                    },
                    "!doc": "Class sap.ui.core.Configuration",
                    "!url": "test"
                },
                "Control": {
                    "!doc": "abstract Class sap.ui.core.Control",
                    "!url": "test"
                },
                "Core": {
                    "!doc": "final Class sap.ui.core.Core",
                    "!url": "test"
                },
                "CSSColor": {
                    "!doc": "final Namespace sap.ui.core.CSSColor",
                    "!url": "test"
                },
                "CSSSize": {
                    "!doc": "final Namespace sap.ui.core.CSSSize",
                    "!url": "test"
                },
                "CSSSizeShortHand": {
                    "!doc": "final Namespace sap.ui.core.CSSSizeShortHand",
                    "!url": "test"
                },
                "CustomData": {
                    "!doc": "Class sap.ui.core.CustomData",
                    "!url": "test"
                },
                "DeclarativeSupport": {
                    "!doc": "Class sap.ui.core.DeclarativeSupport",
                    "!url": "test"
                },
                "delegate": {
                    "ItemNavigation": {
                        "!doc": "Class sap.ui.core.delegate.ItemNavigation",
                        "!url": "test"
                    },
                    "ScrollEnablement": {
                        "!doc": "Class sap.ui.core.delegate.ScrollEnablement",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.delegate",
                    "!url": "test"
                },
                "Design": {
                    "!doc": "Enum sap.ui.core.Design",
                    "!url": "test"
                },
                "Dock": {
                    "!doc": "final Namespace sap.ui.core.Dock",
                    "!url": "test"
                },
                "Element": {
                    "!doc": "Class sap.ui.core.Element",
                    "!url": "test"
                },
                "EnabledPropagator": {
                    "!doc": "Class sap.ui.core.EnabledPropagator",
                    "!url": "test"
                },
                "EventBus": {
                    "!doc": "Class sap.ui.core.EventBus",
                    "!url": "test"
                },
                "format": {
                    "DateFormat": {
                        "!doc": "Class sap.ui.core.format.DateFormat",
                        "!url": "test"
                    },
                    "FileSizeFormat": {
                        "!doc": "Class sap.ui.core.format.FileSizeFormat",
                        "!url": "test"
                    },
                    "NumberFormat": {
                        "RoundingMode": {
                            "!doc": "Enum sap.ui.core.format.NumberFormat.RoundingMode",
                            "!url": "test"
                        },
                        "!doc": "Class sap.ui.core.format.NumberFormat",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.format",
                    "!url": "test"
                },
                "Fragment": {
                    "!doc": "Class sap.ui.core.Fragment",
                    "!url": "test"
                },
                "History": {
                    "!doc": "Class sap.ui.core.History",
                    "!url": "test"
                },
                "HorizontalAlign": {
                    "!doc": "Enum sap.ui.core.HorizontalAlign",
                    "!url": "test"
                },
                "HTML": {
                    "!doc": "Class sap.ui.core.HTML",
                    "!url": "test"
                },
                "Icon": {
                    "!doc": "Class sap.ui.core.Icon",
                    "!url": "test"
                },
                "IconColor": {
                    "!doc": "Enum sap.ui.core.IconColor",
                    "!url": "test"
                },
                "IconPool": {
                    "!doc": "Class sap.ui.core.IconPool",
                    "!url": "test"
                },
                "ID": {
                    "!doc": "final Namespace sap.ui.core.ID",
                    "!url": "test"
                },
                "ImeMode": {
                    "!doc": "Enum sap.ui.core.ImeMode",
                    "!url": "test"
                },
                "IntervalTrigger": {
                    "!doc": "Class sap.ui.core.IntervalTrigger",
                    "!url": "test"
                },
                "InvisibleText": {
                    "!doc": "Class sap.ui.core.InvisibleText",
                    "!url": "test"
                },
                "IShrinkable": {
                    "!doc": "Interface sap.ui.core.IShrinkable",
                    "!url": "test"
                },
                "Item": {
                    "!doc": "Class sap.ui.core.Item",
                    "!url": "test"
                },
                "Label": {
                    "!doc": "Interface sap.ui.core.Label",
                    "!url": "test"
                },
                "LabelEnablement": {
                    "!doc": "Namespace sap.ui.core.LabelEnablement",
                    "!url": "test"
                },
                "LayoutData": {
                    "!doc": "Class sap.ui.core.LayoutData",
                    "!url": "test"
                },
                "ListItem": {
                    "!doc": "Class sap.ui.core.ListItem",
                    "!url": "test"
                },
                "LocalBusyIndicator": {
                    "!doc": "Class sap.ui.core.LocalBusyIndicator",
                    "!url": "test"
                },
                "Locale": {
                    "!doc": "Class sap.ui.core.Locale",
                    "!url": "test"
                },
                "LocaleData": {
                    "!doc": "Class sap.ui.core.LocaleData",
                    "!url": "test"
                },
                "Message": {
                    "!doc": "Class sap.ui.core.Message",
                    "!url": "test"
                },
                "message": {
                    "ControlMessageProcessor": {
                        "!doc": "Class sap.ui.core.message.ControlMessageProcessor",
                        "!url": "test"
                    },
                    "Message": {
                        "!doc": "Class sap.ui.core.message.Message",
                        "!url": "test"
                    },
                    "MessageManager": {
                        "!doc": "Class sap.ui.core.message.MessageManager",
                        "!url": "test"
                    },
                    "MessageParser": {
                        "!doc": "abstract Class sap.ui.core.message.MessageParser",
                        "!url": "test"
                    },
                    "MessageProcessor": {
                        "!doc": "abstract Class sap.ui.core.message.MessageProcessor",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.message",
                    "!url": "test"
                },
                "MessageType": {
                    "!doc": "Enum sap.ui.core.MessageType",
                    "!url": "test"
                },
                "mvc": {
                    "Controller": {
                        "!doc": "Class sap.ui.core.mvc.Controller",
                        "!url": "test"
                    },
                    "HTMLView": {
                        "!doc": "Class sap.ui.core.mvc.HTMLView",
                        "!url": "test"
                    },
                    "JSONView": {
                        "!doc": "Class sap.ui.core.mvc.JSONView",
                        "!url": "test"
                    },
                    "JSView": {
                        "!doc": "Class sap.ui.core.mvc.JSView",
                        "!url": "test"
                    },
                    "TemplateView": {
                        "!doc": "Class sap.ui.core.mvc.TemplateView",
                        "!url": "test"
                    },
                    "View": {
                        "Preprocessor": {
                            "!doc": "Interface sap.ui.core.mvc.View.Preprocessor",
                            "!url": "test"
                        },
                        "!doc": "Class sap.ui.core.mvc.View",
                        "!url": "test"
                    },
                    "ViewType": {
                        "!doc": "Enum sap.ui.core.mvc.ViewType",
                        "!url": "test"
                    },
                    "XMLView": {
                        "!doc": "Class sap.ui.core.mvc.XMLView",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.mvc",
                    "!url": "test"
                },
                "OpenState": {
                    "!doc": "Enum sap.ui.core.OpenState",
                    "!url": "test"
                },
                "Orientation": {
                    "!doc": "Enum sap.ui.core.Orientation",
                    "!url": "test"
                },
                "Percentage": {
                    "!doc": "final Namespace sap.ui.core.Percentage",
                    "!url": "test"
                },
                "Popup": {
                    "Dock": {
                        "!doc": "Namespace sap.ui.core.Popup.Dock",
                        "!url": "test"
                    },
                    "!doc": "Class sap.ui.core.Popup",
                    "!url": "test"
                },
                "PopupInterface": {
                    "!doc": "Interface sap.ui.core.PopupInterface",
                    "!url": "test"
                },
                "Renderer": {
                    "!doc": "Namespace sap.ui.core.Renderer",
                    "!url": "test"
                },
                "RenderManager": {
                    "!doc": "Class sap.ui.core.RenderManager",
                    "!url": "test"
                },
                "ResizeHandler": {
                    "!doc": "Namespace sap.ui.core.ResizeHandler",
                    "!url": "test"
                },
                "routing": {
                    "HashChanger": {
                        "!doc": "Class sap.ui.core.routing.HashChanger",
                        "!url": "test"
                    },
                    "History": {
                        "!doc": "Class sap.ui.core.routing.History",
                        "!url": "test"
                    },
                    "HistoryDirection": {
                        "!doc": "Enum sap.ui.core.routing.HistoryDirection",
                        "!url": "test"
                    },
                    "Route": {
                        "!doc": "Class sap.ui.core.routing.Route",
                        "!url": "test"
                    },
                    "Router": {
                        "!doc": "Class sap.ui.core.routing.Router",
                        "!url": "test"
                    },
                    "Target": {
                        "!doc": "Class sap.ui.core.routing.Target",
                        "!url": "test"
                    },
                    "Targets": {
                        "!doc": "Class sap.ui.core.routing.Targets",
                        "!url": "test"
                    },
                    "Views": {
                        "!doc": "Class sap.ui.core.routing.Views",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.routing",
                    "!url": "test"
                },
                "ScrollBar": {
                    "!doc": "Class sap.ui.core.ScrollBar",
                    "!url": "test"
                },
                "ScrollBarAction": {
                    "!doc": "Enum sap.ui.core.ScrollBarAction",
                    "!url": "test"
                },
                "Scrolling": {
                    "!doc": "Enum sap.ui.core.Scrolling",
                    "!url": "test"
                },
                "search": {
                    "OpenSearchProvider": {
                        "!doc": "Class sap.ui.core.search.OpenSearchProvider",
                        "!url": "test"
                    },
                    "SearchProvider": {
                        "!doc": "Class sap.ui.core.search.SearchProvider",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.search",
                    "!url": "test"
                },
                "SeparatorItem": {
                    "!doc": "Class sap.ui.core.SeparatorItem",
                    "!url": "test"
                },
                "support": {
                    "Support": {
                        "EventType": {
                            "!doc": "Namespace sap.ui.core.support.Support.EventType",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.core.support.Support",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.support",
                    "!url": "test"
                },
                "TextAlign": {
                    "!doc": "Enum sap.ui.core.TextAlign",
                    "!url": "test"
                },
                "TextDirection": {
                    "!doc": "Enum sap.ui.core.TextDirection",
                    "!url": "test"
                },
                "theming": {
                    "Parameters": {
                        "!doc": "Namespace sap.ui.core.theming.Parameters",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.theming",
                    "!url": "test"
                },
                "Title": {
                    "!doc": "Class sap.ui.core.Title",
                    "!url": "test"
                },
                "TitleLevel": {
                    "!doc": "Enum sap.ui.core.TitleLevel",
                    "!url": "test"
                },
                "tmpl": {
                    "DOMAttribute": {
                        "!doc": "Class sap.ui.core.tmpl.DOMAttribute",
                        "!url": "test"
                    },
                    "DOMElement": {
                        "!doc": "Class sap.ui.core.tmpl.DOMElement",
                        "!url": "test"
                    },
                    "HandlebarsTemplate": {
                        "!doc": "abstract Class sap.ui.core.tmpl.HandlebarsTemplate",
                        "!url": "test"
                    },
                    "Template": {
                        "!doc": "abstract Class sap.ui.core.tmpl.Template",
                        "!url": "test"
                    },
                    "TemplateControl": {
                        "!doc": "Class sap.ui.core.tmpl.TemplateControl",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.tmpl",
                    "!url": "test"
                },
                "Toolbar": {
                    "!doc": "Interface sap.ui.core.Toolbar",
                    "!url": "test"
                },
                "TooltipBase": {
                    "!doc": "Class sap.ui.core.TooltipBase",
                    "!url": "test"
                },
                "UIArea": {
                    "!doc": "Class sap.ui.core.UIArea",
                    "!url": "test"
                },
                "UIComponent": {
                    "!doc": "abstract Class sap.ui.core.UIComponent",
                    "!url": "test"
                },
                "URI": {
                    "!doc": "final Namespace sap.ui.core.URI",
                    "!url": "test"
                },
                "util": {
                    "Export": {
                        "!doc": "Class sap.ui.core.util.Export",
                        "!url": "test"
                    },
                    "ExportCell": {
                        "!doc": "Class sap.ui.core.util.ExportCell",
                        "!url": "test"
                    },
                    "ExportColumn": {
                        "!doc": "Class sap.ui.core.util.ExportColumn",
                        "!url": "test"
                    },
                    "ExportRow": {
                        "!doc": "Class sap.ui.core.util.ExportRow",
                        "!url": "test"
                    },
                    "ExportType": {
                        "!doc": "Class sap.ui.core.util.ExportType",
                        "!url": "test"
                    },
                    "ExportTypeCSV": {
                        "!doc": "Class sap.ui.core.util.ExportTypeCSV",
                        "!url": "test"
                    },
                    "File": {
                        "!doc": "Namespace sap.ui.core.util.File",
                        "!url": "test"
                    },
                    "MockServer": {
                        "!doc": "abstract Class sap.ui.core.util.MockServer",
                        "!url": "test"
                    },
                    "serializer": {
                        "delegate": {
                            "Delegate": {
                                "!doc": "abstract Class sap.ui.core.util.serializer.delegate.Delegate",
                                "!url": "test"
                            },
                            "HTML": {
                                "!doc": "Class sap.ui.core.util.serializer.delegate.HTML",
                                "!url": "test"
                            },
                            "XML": {
                                "!doc": "Class sap.ui.core.util.serializer.delegate.XML",
                                "!url": "test"
                            },
                            "!doc": "Namespace sap.ui.core.util.serializer.delegate",
                            "!url": "test"
                        },
                        "HTMLViewSerializer": {
                            "!doc": "Class sap.ui.core.util.serializer.HTMLViewSerializer",
                            "!url": "test"
                        },
                        "Serializer": {
                            "!doc": "Class sap.ui.core.util.serializer.Serializer",
                            "!url": "test"
                        },
                        "ViewSerializer": {
                            "!doc": "Class sap.ui.core.util.serializer.ViewSerializer",
                            "!url": "test"
                        },
                        "XMLViewSerializer": {
                            "!doc": "Class sap.ui.core.util.serializer.XMLViewSerializer",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.core.util.serializer",
                        "!url": "test"
                    },
                    "XMLPreprocessor": {
                        "IContext": {
                            "!doc": "Interface sap.ui.core.util.XMLPreprocessor.IContext",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.core.util.XMLPreprocessor",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.util",
                    "!url": "test"
                },
                "ValueState": {
                    "!doc": "Enum sap.ui.core.ValueState",
                    "!url": "test"
                },
                "ValueStateSupport": {
                    "!doc": "Namespace sap.ui.core.ValueStateSupport",
                    "!url": "test"
                },
                "VariantLayoutData": {
                    "!doc": "Class sap.ui.core.VariantLayoutData",
                    "!url": "test"
                },
                "VerticalAlign": {
                    "!doc": "Enum sap.ui.core.VerticalAlign",
                    "!url": "test"
                },
                "Wrapping": {
                    "!doc": "Enum sap.ui.core.Wrapping",
                    "!url": "test"
                },
                "ws": {
                    "ReadyState": {
                        "!doc": "Namespace sap.ui.core.ws.ReadyState",
                        "!url": "test"
                    },
                    "SapPcpWebSocket": {
                        "SUPPORTED_PROTOCOLS": {
                            "!doc": "Namespace sap.ui.core.ws.SapPcpWebSocket.SUPPORTED_PROTOCOLS",
                            "!url": "test"
                        },
                        "!doc": "Class sap.ui.core.ws.SapPcpWebSocket",
                        "!url": "test"
                    },
                    "WebSocket": {
                        "!doc": "Class sap.ui.core.ws.WebSocket",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.core.ws",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.core",
                "!url": "test"
            },
            "Device": {
                "browser": {
                    "BROWSER": {
                        "!doc": "Namespace sap.ui.Device.browser.BROWSER",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.Device.browser",
                    "!url": "test"
                },
                "media": {
                    "RANGESETS": {
                        "!doc": "Namespace sap.ui.Device.media.RANGESETS",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.Device.media",
                    "!url": "test"
                },
                "orientation": {
                    "!doc": "Namespace sap.ui.Device.orientation",
                    "!url": "test"
                },
                "os": {
                    "OS": {
                        "!doc": "Namespace sap.ui.Device.os.OS",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.Device.os",
                    "!url": "test"
                },
                "resize": {
                    "!doc": "Namespace sap.ui.Device.resize",
                    "!url": "test"
                },
                "support": {
                    "!doc": "Namespace sap.ui.Device.support",
                    "!url": "test"
                },
                "system": {
                    "!doc": "Namespace sap.ui.Device.system",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.Device",
                "!url": "test"
            },
            "dt": {
                "SelectionMode": {
                    "!doc": "Enum sap.ui.dt.SelectionMode",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.dt",
                "!url": "test"
            },
            "layout": {
                "DynamicSideContent": {
                    "!doc": "Class sap.ui.layout.DynamicSideContent",
                    "!url": "test"
                },
                "FixFlex": {
                    "!doc": "Class sap.ui.layout.FixFlex",
                    "!url": "test"
                },
                "form": {
                    "Form": {
                        "!doc": "Class sap.ui.layout.form.Form",
                        "!url": "test"
                    },
                    "FormContainer": {
                        "!doc": "Class sap.ui.layout.form.FormContainer",
                        "!url": "test"
                    },
                    "FormElement": {
                        "!doc": "Class sap.ui.layout.form.FormElement",
                        "!url": "test"
                    },
                    "FormLayout": {
                        "!doc": "Class sap.ui.layout.form.FormLayout",
                        "!url": "test"
                    },
                    "GridContainerData": {
                        "!doc": "Class sap.ui.layout.form.GridContainerData",
                        "!url": "test"
                    },
                    "GridElementCells": {
                        "!doc": "Namespace sap.ui.layout.form.GridElementCells",
                        "!url": "test"
                    },
                    "GridElementData": {
                        "!doc": "Class sap.ui.layout.form.GridElementData",
                        "!url": "test"
                    },
                    "GridLayout": {
                        "!doc": "Class sap.ui.layout.form.GridLayout",
                        "!url": "test"
                    },
                    "ResponsiveGridLayout": {
                        "!doc": "Class sap.ui.layout.form.ResponsiveGridLayout",
                        "!url": "test"
                    },
                    "ResponsiveLayout": {
                        "!doc": "Class sap.ui.layout.form.ResponsiveLayout",
                        "!url": "test"
                    },
                    "SimpleForm": {
                        "!doc": "Class sap.ui.layout.form.SimpleForm",
                        "!url": "test"
                    },
                    "SimpleFormLayout": {
                        "!doc": "Enum sap.ui.layout.form.SimpleFormLayout",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.layout.form",
                    "!url": "test"
                },
                "Grid": {
                    "!doc": "Class sap.ui.layout.Grid",
                    "!url": "test"
                },
                "GridData": {
                    "!doc": "Class sap.ui.layout.GridData",
                    "!url": "test"
                },
                "GridIndent": {
                    "!doc": "final Namespace sap.ui.layout.GridIndent",
                    "!url": "test"
                },
                "GridPosition": {
                    "!doc": "Enum sap.ui.layout.GridPosition",
                    "!url": "test"
                },
                "GridSpan": {
                    "!doc": "final Namespace sap.ui.layout.GridSpan",
                    "!url": "test"
                },
                "HorizontalLayout": {
                    "!doc": "Class sap.ui.layout.HorizontalLayout",
                    "!url": "test"
                },
                "ResponsiveFlowLayout": {
                    "!doc": "Class sap.ui.layout.ResponsiveFlowLayout",
                    "!url": "test"
                },
                "ResponsiveFlowLayoutData": {
                    "!doc": "Class sap.ui.layout.ResponsiveFlowLayoutData",
                    "!url": "test"
                },
                "SideContentFallDown": {
                    "!doc": "Enum sap.ui.layout.SideContentFallDown",
                    "!url": "test"
                },
                "SideContentVisibility": {
                    "!doc": "Enum sap.ui.layout.SideContentVisibility",
                    "!url": "test"
                },
                "Splitter": {
                    "!doc": "Class sap.ui.layout.Splitter",
                    "!url": "test"
                },
                "SplitterLayoutData": {
                    "!doc": "Class sap.ui.layout.SplitterLayoutData",
                    "!url": "test"
                },
                "VerticalLayout": {
                    "!doc": "Class sap.ui.layout.VerticalLayout",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.layout",
                "!url": "test"
            },
            "model": {
                "analytics": {
                    "AnalyticalBinding": {
                        "!doc": "Class sap.ui.model.analytics.AnalyticalBinding",
                        "!url": "test"
                    },
                    "AnalyticalTreeBindingAdapter": {
                        "!doc": "Class sap.ui.model.analytics.AnalyticalTreeBindingAdapter",
                        "!url": "test"
                    },
                    "odata4analytics": {
                        "Dimension": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.Dimension",
                            "!url": "test"
                        },
                        "DimensionAttribute": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.DimensionAttribute",
                            "!url": "test"
                        },
                        "DimensionMemberSetRequest": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.DimensionMemberSetRequest",
                            "!url": "test"
                        },
                        "EntitySet": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.EntitySet",
                            "!url": "test"
                        },
                        "EntityType": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.EntityType",
                            "!url": "test"
                        },
                        "FilterExpression": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.FilterExpression",
                            "!url": "test"
                        },
                        "Measure": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.Measure",
                            "!url": "test"
                        },
                        "Model": {
                            "ReferenceByModel": {
                                "!doc": "Class sap.ui.model.analytics.odata4analytics.Model.ReferenceByModel",
                                "!url": "test"
                            },
                            "ReferenceByURI": {
                                "!doc": "Class sap.ui.model.analytics.odata4analytics.Model.ReferenceByURI",
                                "!url": "test"
                            },
                            "ReferenceWithWorkaround": {
                                "!doc": "Class sap.ui.model.analytics.odata4analytics.Model.ReferenceWithWorkaround",
                                "!url": "test"
                            },
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.Model",
                            "!url": "test"
                        },
                        "Parameter": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.Parameter",
                            "!url": "test"
                        },
                        "Parameterization": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.Parameterization",
                            "!url": "test"
                        },
                        "ParameterizationRequest": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.ParameterizationRequest",
                            "!url": "test"
                        },
                        "ParameterValueSetRequest": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.ParameterValueSetRequest",
                            "!url": "test"
                        },
                        "QueryResult": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.QueryResult",
                            "!url": "test"
                        },
                        "QueryResultRequest": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.QueryResultRequest",
                            "!url": "test"
                        },
                        "RecursiveHierarchy": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.RecursiveHierarchy",
                            "!url": "test"
                        },
                        "SortExpression": {
                            "!doc": "Class sap.ui.model.analytics.odata4analytics.SortExpression",
                            "!url": "test"
                        },
                        "SortOrder": {
                            "!doc": "Namespace sap.ui.model.analytics.odata4analytics.SortOrder",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.model.analytics.odata4analytics",
                        "!url": "test"
                    },
                    "v2": {
                        "BatchResponseCollector": {
                            "!doc": "Class sap.ui.model.analytics.v2.BatchResponseCollector",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.model.analytics.v2",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.analytics",
                    "!url": "test"
                },
                "Binding": {
                    "!doc": "abstract Class sap.ui.model.Binding",
                    "!url": "test"
                },
                "BindingMode": {
                    "!doc": "Namespace sap.ui.model.BindingMode",
                    "!url": "test"
                },
                "ChangeReason": {
                    "!doc": "Namespace sap.ui.model.ChangeReason",
                    "!url": "test"
                },
                "ClientContextBinding": {
                    "!doc": "abstract Class sap.ui.model.ClientContextBinding",
                    "!url": "test"
                },
                "ClientModel": {
                    "!doc": "abstract Class sap.ui.model.ClientModel",
                    "!url": "test"
                },
                "ClientTreeBindingAdapter": {
                    "!doc": "Class sap.ui.model.ClientTreeBindingAdapter",
                    "!url": "test"
                },
                "CompositeBinding": {
                    "!doc": "Class sap.ui.model.CompositeBinding",
                    "!url": "test"
                },
                "CompositeType": {
                    "!doc": "abstract Class sap.ui.model.CompositeType",
                    "!url": "test"
                },
                "Context": {
                    "!doc": "abstract Class sap.ui.model.Context",
                    "!url": "test"
                },
                "ContextBinding": {
                    "!doc": "abstract Class sap.ui.model.ContextBinding",
                    "!url": "test"
                },
                "control": {
                    "!doc": "Namespace sap.ui.model.control",
                    "!url": "test"
                },
                "DataState": {
                    "!doc": "Class sap.ui.model.DataState",
                    "!url": "test"
                },
                "Filter": {
                    "!doc": "Class sap.ui.model.Filter",
                    "!url": "test"
                },
                "FilterOperator": {
                    "!doc": "Namespace sap.ui.model.FilterOperator",
                    "!url": "test"
                },
                "FilterType": {
                    "!doc": "Namespace sap.ui.model.FilterType",
                    "!url": "test"
                },
                "json": {
                    "JSONModel": {
                        "!doc": "Class sap.ui.model.json.JSONModel",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.json",
                    "!url": "test"
                },
                "ListBinding": {
                    "!doc": "Class sap.ui.model.ListBinding",
                    "!url": "test"
                },
                "message": {
                    "MessageModel": {
                        "!doc": "Class sap.ui.model.message.MessageModel",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.message",
                    "!url": "test"
                },
                "MetaModel": {
                    "!doc": "abstract Class sap.ui.model.MetaModel",
                    "!url": "test"
                },
                "Model": {
                    "!doc": "abstract Class sap.ui.model.Model",
                    "!url": "test"
                },
                "odata": {
                    "AnnotationHelper": {
                        "!doc": "Namespace sap.ui.model.odata.AnnotationHelper",
                        "!url": "test"
                    },
                    "BatchMode": {
                        "!doc": "Namespace sap.ui.model.odata.BatchMode",
                        "!url": "test"
                    },
                    "CountMode": {
                        "!doc": "Namespace sap.ui.model.odata.CountMode",
                        "!url": "test"
                    },
                    "Filter": {
                        "!doc": "Class sap.ui.model.odata.Filter",
                        "!url": "test"
                    },
                    "ODataAnnotations": {
                        "!doc": "Class sap.ui.model.odata.ODataAnnotations",
                        "!url": "test"
                    },
                    "ODataContextBinding": {
                        "!doc": "abstract Class sap.ui.model.odata.ODataContextBinding",
                        "!url": "test"
                    },
                    "ODataListBinding": {
                        "!doc": "Class sap.ui.model.odata.ODataListBinding",
                        "!url": "test"
                    },
                    "ODataMessageParser": {
                        "!doc": "abstract Class sap.ui.model.odata.ODataMessageParser",
                        "!url": "test"
                    },
                    "ODataMetadata": {
                        "!doc": "Class sap.ui.model.odata.ODataMetadata",
                        "!url": "test"
                    },
                    "ODataMetaModel": {
                        "!doc": "Class sap.ui.model.odata.ODataMetaModel",
                        "!url": "test"
                    },
                    "ODataModel": {
                        "!doc": "Class sap.ui.model.odata.ODataModel",
                        "!url": "test"
                    },
                    "ODataPropertyBinding": {
                        "!doc": "Class sap.ui.model.odata.ODataPropertyBinding",
                        "!url": "test"
                    },
                    "ODataUtils": {
                        "!doc": "Namespace sap.ui.model.odata.ODataUtils",
                        "!url": "test"
                    },
                    "OperationMode": {
                        "!doc": "Namespace sap.ui.model.odata.OperationMode",
                        "!url": "test"
                    },
                    "type": {
                        "Boolean": {
                            "!doc": "Class sap.ui.model.odata.type.Boolean",
                            "!url": "test"
                        },
                        "Byte": {
                            "!doc": "Class sap.ui.model.odata.type.Byte",
                            "!url": "test"
                        },
                        "DateTime": {
                            "!doc": "Class sap.ui.model.odata.type.DateTime",
                            "!url": "test"
                        },
                        "DateTimeBase": {
                            "!doc": "abstract Class sap.ui.model.odata.type.DateTimeBase",
                            "!url": "test"
                        },
                        "DateTimeOffset": {
                            "!doc": "Class sap.ui.model.odata.type.DateTimeOffset",
                            "!url": "test"
                        },
                        "Decimal": {
                            "!doc": "Class sap.ui.model.odata.type.Decimal",
                            "!url": "test"
                        },
                        "Double": {
                            "!doc": "Class sap.ui.model.odata.type.Double",
                            "!url": "test"
                        },
                        "Guid": {
                            "!doc": "Class sap.ui.model.odata.type.Guid",
                            "!url": "test"
                        },
                        "Int": {
                            "!doc": "Class sap.ui.model.odata.type.Int",
                            "!url": "test"
                        },
                        "Int16": {
                            "!doc": "Class sap.ui.model.odata.type.Int16",
                            "!url": "test"
                        },
                        "Int32": {
                            "!doc": "Class sap.ui.model.odata.type.Int32",
                            "!url": "test"
                        },
                        "Int64": {
                            "!doc": "Class sap.ui.model.odata.type.Int64",
                            "!url": "test"
                        },
                        "ODataType": {
                            "!doc": "Class sap.ui.model.odata.type.ODataType",
                            "!url": "test"
                        },
                        "SByte": {
                            "!doc": "Class sap.ui.model.odata.type.SByte",
                            "!url": "test"
                        },
                        "Single": {
                            "!doc": "Class sap.ui.model.odata.type.Single",
                            "!url": "test"
                        },
                        "String": {
                            "!doc": "Class sap.ui.model.odata.type.String",
                            "!url": "test"
                        },
                        "Time": {
                            "!doc": "Class sap.ui.model.odata.type.Time",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.model.odata.type",
                        "!url": "test"
                    },
                    "UpdateMethod": {
                        "!doc": "Namespace sap.ui.model.odata.UpdateMethod",
                        "!url": "test"
                    },
                    "v2": {
                        "ODataContextBinding": {
                            "!doc": "abstract Class sap.ui.model.odata.v2.ODataContextBinding",
                            "!url": "test"
                        },
                        "ODataListBinding": {
                            "!doc": "Class sap.ui.model.odata.v2.ODataListBinding",
                            "!url": "test"
                        },
                        "ODataModel": {
                            "!doc": "Class sap.ui.model.odata.v2.ODataModel",
                            "!url": "test"
                        },
                        "ODataTreeBinding": {
                            "!doc": "Class sap.ui.model.odata.v2.ODataTreeBinding",
                            "!url": "test"
                        },
                        "!doc": "Namespace sap.ui.model.odata.v2",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.odata",
                    "!url": "test"
                },
                "PropertyBinding": {
                    "!doc": "Class sap.ui.model.PropertyBinding",
                    "!url": "test"
                },
                "resource": {
                    "ResourceModel": {
                        "!doc": "Class sap.ui.model.resource.ResourceModel",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.resource",
                    "!url": "test"
                },
                "SelectionModel": {
                    "!doc": "Class sap.ui.model.SelectionModel",
                    "!url": "test"
                },
                "SimpleType": {
                    "!doc": "abstract Class sap.ui.model.SimpleType",
                    "!url": "test"
                },
                "Sorter": {
                    "!doc": "Class sap.ui.model.Sorter",
                    "!url": "test"
                },
                "TreeBinding": {
                    "!doc": "Class sap.ui.model.TreeBinding",
                    "!url": "test"
                },
                "TreeBindingAdapter": {
                    "!doc": "Class sap.ui.model.TreeBindingAdapter",
                    "!url": "test"
                },
                "TreeBindingCompatibilityAdapter": {
                    "!doc": "Class sap.ui.model.TreeBindingCompatibilityAdapter",
                    "!url": "test"
                },
                "TreeBindingUtils": {
                    "!doc": "Namespace sap.ui.model.TreeBindingUtils",
                    "!url": "test"
                },
                "Type": {
                    "!doc": "abstract Class sap.ui.model.Type",
                    "!url": "test"
                },
                "type": {
                    "Boolean": {
                        "!doc": "Class sap.ui.model.type.Boolean",
                        "!url": "test"
                    },
                    "Currency": {
                        "!doc": "Class sap.ui.model.type.Currency",
                        "!url": "test"
                    },
                    "Date": {
                        "!doc": "Class sap.ui.model.type.Date",
                        "!url": "test"
                    },
                    "DateTime": {
                        "!doc": "Class sap.ui.model.type.DateTime",
                        "!url": "test"
                    },
                    "FileSize": {
                        "!doc": "Class sap.ui.model.type.FileSize",
                        "!url": "test"
                    },
                    "Float": {
                        "!doc": "Class sap.ui.model.type.Float",
                        "!url": "test"
                    },
                    "Integer": {
                        "!doc": "Class sap.ui.model.type.Integer",
                        "!url": "test"
                    },
                    "String": {
                        "!doc": "Class sap.ui.model.type.String",
                        "!url": "test"
                    },
                    "Time": {
                        "!doc": "Class sap.ui.model.type.Time",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.type",
                    "!url": "test"
                },
                "xml": {
                    "XMLModel": {
                        "!doc": "Class sap.ui.model.xml.XMLModel",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.model.xml",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.model",
                "!url": "test"
            },
            "suite": {
                "TaskCircle": {
                    "!doc": "Class sap.ui.suite.TaskCircle",
                    "!url": "test"
                },
                "TaskCircleColor": {
                    "!doc": "Enum sap.ui.suite.TaskCircleColor",
                    "!url": "test"
                },
                "VerticalProgressIndicator": {
                    "!doc": "Class sap.ui.suite.VerticalProgressIndicator",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.suite",
                "!url": "test"
            },
            "table": {
                "AnalyticalColumn": {
                    "!doc": "Class sap.ui.table.AnalyticalColumn",
                    "!url": "test"
                },
                "AnalyticalColumnMenu": {
                    "!doc": "Class sap.ui.table.AnalyticalColumnMenu",
                    "!url": "test"
                },
                "AnalyticalTable": {
                    "!doc": "Class sap.ui.table.AnalyticalTable",
                    "!url": "test"
                },
                "Column": {
                    "!doc": "Class sap.ui.table.Column",
                    "!url": "test"
                },
                "ColumnMenu": {
                    "!doc": "Class sap.ui.table.ColumnMenu",
                    "!url": "test"
                },
                "DataTable": {
                    "!doc": "Class sap.ui.table.DataTable",
                    "!url": "test"
                },
                "GroupEventType": {
                    "!doc": "Enum sap.ui.table.GroupEventType",
                    "!url": "test"
                },
                "NavigationMode": {
                    "!doc": "Enum sap.ui.table.NavigationMode",
                    "!url": "test"
                },
                "Row": {
                    "!doc": "Class sap.ui.table.Row",
                    "!url": "test"
                },
                "SelectionBehavior": {
                    "!doc": "Enum sap.ui.table.SelectionBehavior",
                    "!url": "test"
                },
                "SelectionMode": {
                    "!doc": "Enum sap.ui.table.SelectionMode",
                    "!url": "test"
                },
                "SortOrder": {
                    "!doc": "Enum sap.ui.table.SortOrder",
                    "!url": "test"
                },
                "Table": {
                    "!doc": "Class sap.ui.table.Table",
                    "!url": "test"
                },
                "TablePersoController": {
                    "!doc": "Class sap.ui.table.TablePersoController",
                    "!url": "test"
                },
                "TreeAutoExpandMode": {
                    "!doc": "Namespace sap.ui.table.TreeAutoExpandMode",
                    "!url": "test"
                },
                "TreeTable": {
                    "!doc": "Class sap.ui.table.TreeTable",
                    "!url": "test"
                },
                "VisibleRowCountMode": {
                    "!doc": "Enum sap.ui.table.VisibleRowCountMode",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.table",
                "!url": "test"
            },
            "test": {
                "matchers": {
                    "AggregationContainsPropertyEqual": {
                        "!doc": "Class sap.ui.test.matchers.AggregationContainsPropertyEqual",
                        "!url": "test"
                    },
                    "AggregationFilled": {
                        "!doc": "Class sap.ui.test.matchers.AggregationFilled",
                        "!url": "test"
                    },
                    "AggregationLengthEquals": {
                        "!doc": "Class sap.ui.test.matchers.AggregationLengthEquals",
                        "!url": "test"
                    },
                    "Ancestor": {
                        "!doc": "Class sap.ui.test.matchers.Ancestor",
                        "!url": "test"
                    },
                    "BindingPath": {
                        "!doc": "Class sap.ui.test.matchers.BindingPath",
                        "!url": "test"
                    },
                    "Matcher": {
                        "!doc": "abstract Class sap.ui.test.matchers.Matcher",
                        "!url": "test"
                    },
                    "Properties": {
                        "!doc": "Class sap.ui.test.matchers.Properties",
                        "!url": "test"
                    },
                    "PropertyStrictEquals": {
                        "!doc": "Class sap.ui.test.matchers.PropertyStrictEquals",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.test.matchers",
                    "!url": "test"
                },
                "Opa": {
                    "!doc": "Class sap.ui.test.Opa",
                    "!url": "test"
                },
                "Opa5": {
                    "!doc": "Class sap.ui.test.Opa5",
                    "!url": "test"
                },
                "OpaPlugin": {
                    "!doc": "Class sap.ui.test.OpaPlugin",
                    "!url": "test"
                },
                "PageObjectFactory": {
                    "!doc": "Class sap.ui.test.PageObjectFactory",
                    "!url": "test"
                },
                "TestUtils": {
                    "!doc": "Namespace sap.ui.test.TestUtils",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.test",
                "!url": "test"
            },
            "unified": {
                "Calendar": {
                    "!doc": "Class sap.ui.unified.Calendar",
                    "!url": "test"
                },
                "calendar": {
                    "DatesRow": {
                        "!doc": "Class sap.ui.unified.calendar.DatesRow",
                        "!url": "test"
                    },
                    "Header": {
                        "!doc": "Class sap.ui.unified.calendar.Header",
                        "!url": "test"
                    },
                    "Month": {
                        "!doc": "Class sap.ui.unified.calendar.Month",
                        "!url": "test"
                    },
                    "MonthPicker": {
                        "!doc": "Class sap.ui.unified.calendar.MonthPicker",
                        "!url": "test"
                    },
                    "MonthsRow": {
                        "!doc": "Class sap.ui.unified.calendar.MonthsRow",
                        "!url": "test"
                    },
                    "TimesRow": {
                        "!doc": "Class sap.ui.unified.calendar.TimesRow",
                        "!url": "test"
                    },
                    "YearPicker": {
                        "!doc": "Class sap.ui.unified.calendar.YearPicker",
                        "!url": "test"
                    },
                    "!doc": "Namespace sap.ui.unified.calendar",
                    "!url": "test"
                },
                "CalendarDateInterval": {
                    "!doc": "Class sap.ui.unified.CalendarDateInterval",
                    "!url": "test"
                },
                "CalendarDayType": {
                    "!doc": "Enum sap.ui.unified.CalendarDayType",
                    "!url": "test"
                },
                "CalendarLegend": {
                    "!doc": "Class sap.ui.unified.CalendarLegend",
                    "!url": "test"
                },
                "CalendarLegendItem": {
                    "!doc": "Class sap.ui.unified.CalendarLegendItem",
                    "!url": "test"
                },
                "CalendarMonthInterval": {
                    "!doc": "Class sap.ui.unified.CalendarMonthInterval",
                    "!url": "test"
                },
                "CalendarTimeInterval": {
                    "!doc": "Class sap.ui.unified.CalendarTimeInterval",
                    "!url": "test"
                },
                "ContentSwitcher": {
                    "!doc": "Class sap.ui.unified.ContentSwitcher",
                    "!url": "test"
                },
                "ContentSwitcherAnimation": {
                    "!doc": "Enum sap.ui.unified.ContentSwitcherAnimation",
                    "!url": "test"
                },
                "Currency": {
                    "!doc": "Class sap.ui.unified.Currency",
                    "!url": "test"
                },
                "DateRange": {
                    "!doc": "Class sap.ui.unified.DateRange",
                    "!url": "test"
                },
                "DateTypeRange": {
                    "!doc": "Class sap.ui.unified.DateTypeRange",
                    "!url": "test"
                },
                "FileUploader": {
                    "!doc": "Class sap.ui.unified.FileUploader",
                    "!url": "test"
                },
                "FileUploaderParameter": {
                    "!doc": "Class sap.ui.unified.FileUploaderParameter",
                    "!url": "test"
                },
                "Menu": {
                    "!doc": "Class sap.ui.unified.Menu",
                    "!url": "test"
                },
                "MenuItem": {
                    "!doc": "Class sap.ui.unified.MenuItem",
                    "!url": "test"
                },
                "MenuItemBase": {
                    "!doc": "abstract Class sap.ui.unified.MenuItemBase",
                    "!url": "test"
                },
                "MenuTextFieldItem": {
                    "!doc": "Class sap.ui.unified.MenuTextFieldItem",
                    "!url": "test"
                },
                "Shell": {
                    "!doc": "Class sap.ui.unified.Shell",
                    "!url": "test"
                },
                "ShellHeadItem": {
                    "!doc": "Class sap.ui.unified.ShellHeadItem",
                    "!url": "test"
                },
                "ShellHeadUserItem": {
                    "!doc": "Class sap.ui.unified.ShellHeadUserItem",
                    "!url": "test"
                },
                "ShellLayout": {
                    "!doc": "Class sap.ui.unified.ShellLayout",
                    "!url": "test"
                },
                "ShellOverlay": {
                    "!doc": "Class sap.ui.unified.ShellOverlay",
                    "!url": "test"
                },
                "SplitContainer": {
                    "!doc": "Class sap.ui.unified.SplitContainer",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.unified",
                "!url": "test"
            },
            "ux3": {
                "ActionBar": {
                    "!doc": "Class sap.ui.ux3.ActionBar",
                    "!url": "test"
                },
                "ActionBarSocialActions": {
                    "!doc": "Enum sap.ui.ux3.ActionBarSocialActions",
                    "!url": "test"
                },
                "Collection": {
                    "!doc": "Class sap.ui.ux3.Collection",
                    "!url": "test"
                },
                "CollectionInspector": {
                    "!doc": "Class sap.ui.ux3.CollectionInspector",
                    "!url": "test"
                },
                "DataSet": {
                    "!doc": "Class sap.ui.ux3.DataSet",
                    "!url": "test"
                },
                "DataSetItem": {
                    "!doc": "Class sap.ui.ux3.DataSetItem",
                    "!url": "test"
                },
                "DataSetSimpleView": {
                    "!doc": "Class sap.ui.ux3.DataSetSimpleView",
                    "!url": "test"
                },
                "DataSetView": {
                    "!doc": "Interface sap.ui.ux3.DataSetView",
                    "!url": "test"
                },
                "Exact": {
                    "!doc": "Class sap.ui.ux3.Exact",
                    "!url": "test"
                },
                "ExactArea": {
                    "!doc": "Class sap.ui.ux3.ExactArea",
                    "!url": "test"
                },
                "ExactAttribute": {
                    "!doc": "Class sap.ui.ux3.ExactAttribute",
                    "!url": "test"
                },
                "ExactBrowser": {
                    "!doc": "Class sap.ui.ux3.ExactBrowser",
                    "!url": "test"
                },
                "ExactOrder": {
                    "!doc": "Enum sap.ui.ux3.ExactOrder",
                    "!url": "test"
                },
                "FacetFilter": {
                    "!doc": "Class sap.ui.ux3.FacetFilter",
                    "!url": "test"
                },
                "FacetFilterList": {
                    "!doc": "Class sap.ui.ux3.FacetFilterList",
                    "!url": "test"
                },
                "Feed": {
                    "!doc": "Class sap.ui.ux3.Feed",
                    "!url": "test"
                },
                "FeedChunk": {
                    "!doc": "Class sap.ui.ux3.FeedChunk",
                    "!url": "test"
                },
                "Feeder": {
                    "!doc": "Class sap.ui.ux3.Feeder",
                    "!url": "test"
                },
                "FeederType": {
                    "!doc": "Enum sap.ui.ux3.FeederType",
                    "!url": "test"
                },
                "FollowActionState": {
                    "!doc": "Enum sap.ui.ux3.FollowActionState",
                    "!url": "test"
                },
                "NavigationBar": {
                    "!doc": "Class sap.ui.ux3.NavigationBar",
                    "!url": "test"
                },
                "NavigationItem": {
                    "!doc": "Class sap.ui.ux3.NavigationItem",
                    "!url": "test"
                },
                "NotificationBar": {
                    "!doc": "Class sap.ui.ux3.NotificationBar",
                    "!url": "test"
                },
                "NotificationBarStatus": {
                    "!doc": "Enum sap.ui.ux3.NotificationBarStatus",
                    "!url": "test"
                },
                "Notifier": {
                    "!doc": "Class sap.ui.ux3.Notifier",
                    "!url": "test"
                },
                "Overlay": {
                    "!doc": "Class sap.ui.ux3.Overlay",
                    "!url": "test"
                },
                "OverlayContainer": {
                    "!doc": "Class sap.ui.ux3.OverlayContainer",
                    "!url": "test"
                },
                "OverlayDialog": {
                    "!doc": "Class sap.ui.ux3.OverlayDialog",
                    "!url": "test"
                },
                "QuickView": {
                    "!doc": "Class sap.ui.ux3.QuickView",
                    "!url": "test"
                },
                "Shell": {
                    "!doc": "Class sap.ui.ux3.Shell",
                    "!url": "test"
                },
                "ShellDesignType": {
                    "!doc": "Enum sap.ui.ux3.ShellDesignType",
                    "!url": "test"
                },
                "ShellHeaderType": {
                    "!doc": "Enum sap.ui.ux3.ShellHeaderType",
                    "!url": "test"
                },
                "ThingAction": {
                    "!doc": "Class sap.ui.ux3.ThingAction",
                    "!url": "test"
                },
                "ThingGroup": {
                    "!doc": "Class sap.ui.ux3.ThingGroup",
                    "!url": "test"
                },
                "ThingInspector": {
                    "!doc": "Class sap.ui.ux3.ThingInspector",
                    "!url": "test"
                },
                "ThingViewer": {
                    "!doc": "Class sap.ui.ux3.ThingViewer",
                    "!url": "test"
                },
                "ThingViewerHeaderType": {
                    "!doc": "Enum sap.ui.ux3.ThingViewerHeaderType",
                    "!url": "test"
                },
                "ToolPopup": {
                    "!doc": "Class sap.ui.ux3.ToolPopup",
                    "!url": "test"
                },
                "VisibleItemCountMode": {
                    "!doc": "Enum sap.ui.ux3.VisibleItemCountMode",
                    "!url": "test"
                },
                "!doc": "Namespace sap.ui.ux3",
                "!url": "test"
            },
            "!doc": "Namespace sap.ui",
            "!url": "test"
        },
        "!doc": "Namespace sap",
        "!url": "test"
    }
  };
});
