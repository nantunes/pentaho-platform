dojo.provide("dojox.wire.ml.Service"),dojo.require("dijit._Widget"),dojo.require("dojox.xml.parser"),
dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.Service",dijit._Widget,{
url:"",serviceUrl:"",serviceType:"",handlerClass:"",preventCache:!0,postCreate:function(){
this.handler=this._createHandler()},_handlerClasses:{TEXT:"dojox.wire.ml.RestHandler",
XML:"dojox.wire.ml.XmlHandler",JSON:"dojox.wire.ml.JsonHandler","JSON-RPC":"dojo.rpc.JsonService"
},_createHandler:function(){if(this.url){var e=this,s=dojo.xhrGet({url:this.url,handleAs:"json",
sync:!0});s.addCallback(function(s){e.smd=s}),this.smd&&!this.serviceUrl&&(this.serviceUrl=this.smd.serviceUrl||this.smd.serviceURL);
}var r=void 0;return this.handlerClass?r=dojox.wire._getClass(this.handlerClass):this.serviceType?(r=this._handlerClasses[this.serviceType],
r&&dojo.isString(r)&&(r=dojox.wire._getClass(r),this._handlerClasses[this.serviceType]=r)):this.smd&&this.smd.serviceType&&(r=this._handlerClasses[this.smd.serviceType],
r&&dojo.isString(r)&&(r=dojox.wire._getClass(r),this._handlerClasses[this.smd.serviceType]=r)),
r?new r:null},callMethod:function(e,s){var r=new dojo.Deferred;return this.handler.bind(e,s,r,this.serviceUrl),
r}});