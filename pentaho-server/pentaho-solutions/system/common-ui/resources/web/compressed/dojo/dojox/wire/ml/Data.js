dojo.provide("dojox.wire.ml.Data"),dojo.require("dijit._Widget"),dojo.require("dijit._Container"),
dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.Data",[dijit._Widget,dijit._Container],{
startup:function(){this._initializeProperties()},_initializeProperties:function(e){
(!this._properties||e)&&(this._properties={});var t=this.getChildren();for(var i in t){
var r=t[i];r instanceof dojox.wire.ml.DataProperty&&r.name&&this.setPropertyValue(r.name,r.getValue());
}},getPropertyValue:function(e){return this._properties[e]},setPropertyValue:function(e,t){
this._properties[e]=t}}),dojo.declare("dojox.wire.ml.DataProperty",[dijit._Widget,dijit._Container],{
name:"",type:"",value:"",_getValueAttr:function(){return this.getValue()},getValue:function(){
var e=this.value;if(this.type)if("number"==this.type)e=parseInt(e);else if("boolean"==this.type)e="true"==e;else if("array"==this.type){
e=[];var t=this.getChildren();for(var i in t){var r=t[i];r instanceof dojox.wire.ml.DataProperty&&e.push(r.getValue());
}}else if("object"==this.type){e={};var t=this.getChildren();for(var i in t){var r=t[i];
r instanceof dojox.wire.ml.DataProperty&&r.name&&(e[r.name]=r.getValue())}}else if("element"==this.type){
e=new dojox.wire.ml.XmlElement(e);var t=this.getChildren();for(var i in t){var r=t[i];
r instanceof dojox.wire.ml.DataProperty&&r.name&&e.setPropertyValue(r.name,r.getValue());
}}return e}});