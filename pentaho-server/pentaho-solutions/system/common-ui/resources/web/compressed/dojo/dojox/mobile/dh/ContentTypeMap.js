define(["dojo/_base/lang"],function(n){var o={};return n.setObject("dojox.mobile.dh.ContentTypeMap",o),
o.map={html:"dojox/mobile/dh/HtmlContentHandler",json:"dojox/mobile/dh/JsonContentHandler"
},o.add=function(n,o){this.map[n]=o},o.getHandlerClass=function(n){return this.map[n];
},o});