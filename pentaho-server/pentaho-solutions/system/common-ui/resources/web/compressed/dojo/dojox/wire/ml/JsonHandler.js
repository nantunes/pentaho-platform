dojo.provide("dojox.wire.ml.JsonHandler"),dojo.require("dojox.wire.ml.RestHandler"),
dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.JsonHandler",dojox.wire.ml.RestHandler,{
contentType:"text/json",handleAs:"json",headers:{Accept:"*/json"},_getContent:function(o,e){
var r=null;if("POST"==o||"PUT"==o){var d=e?e[0]:void 0;d&&(r=dojo.isString(d)?d:dojo.toJson(d));
}return r}});