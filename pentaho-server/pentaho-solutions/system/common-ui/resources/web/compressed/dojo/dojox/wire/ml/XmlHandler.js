dojo.provide("dojox.wire.ml.XmlHandler"),dojo.require("dojox.wire.ml.RestHandler"),
dojo.require("dojox.xml.parser"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),
dojo.declare("dojox.wire.ml.XmlHandler",dojox.wire.ml.RestHandler,{contentType:"text/xml",
handleAs:"xml",_getContent:function(e,o){var r=null;if("POST"==e||"PUT"==e){var l=o[0];
if(l)if(dojo.isString(l))r=l;else{var n=l;n instanceof dojox.wire.ml.XmlElement?n=n.element:9===n.nodeType&&(n=n.documentElement);
var d='<?xml version="1.0"?>';r=d+dojox.xml.parser.innerXML(n)}}return r},_getResult:function(e){
return e&&(e=new dojox.wire.ml.XmlElement(e)),e}});