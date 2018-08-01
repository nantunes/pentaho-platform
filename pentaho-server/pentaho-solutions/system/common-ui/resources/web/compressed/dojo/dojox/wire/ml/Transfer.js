dojo.provide("dojox.wire.ml.Transfer"),dojo.require("dijit._Widget"),dojo.require("dijit._Container"),
dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.Action"),dojo.declare("dojox.wire.ml.Transfer",dojox.wire.ml.Action,{
source:"",sourceStore:"",sourceAttribute:"",sourcePath:"",type:"",converter:"",target:"",
targetStore:"",targetAttribute:"",targetPath:"",delimiter:"",_run:function(){var e=this._getWire("source"),t=this._getWire("target");
dojox.wire.transfer(e,t,arguments)},_getWire:function(e){var t=void 0;if(t="source"==e?{
object:this.source,dataStore:this.sourceStore,attribute:this.sourceAttribute,path:this.sourcePath,
type:this.type,converter:this.converter}:{object:this.target,dataStore:this.targetStore,
attribute:this.targetAttribute,path:this.targetPath},t.object)if(t.object.length>=9&&"arguments"==t.object.substring(0,9))t.property=t.object.substring(9),
t.object=null;else{var r=t.object.indexOf(".");0>r?t.object=dojox.wire.ml._getValue(t.object):(t.property=t.object.substring(r+1),
t.object=dojox.wire.ml._getValue(t.object.substring(0,r)))}t.dataStore&&(t.dataStore=dojox.wire.ml._getValue(t.dataStore));
var i=void 0,o=this.getChildren();for(var r in o){var d=o[r];d instanceof dojox.wire.ml.ChildWire&&d.which==e&&(i||(i={}),
d._addWire(this,i))}return i&&(i.object=dojox.wire.create(t),i.dataStore=t.dataStore,
t=i),t}}),dojo.declare("dojox.wire.ml.ChildWire",dijit._Widget,{which:"source",object:"",
property:"",type:"",converter:"",attribute:"",path:"",name:"",_addWire:function(e,t){
this.name?(t.children||(t.children={}),t.children[this.name]=this._getWire(e)):(t.children||(t.children=[]),
t.children.push(this._getWire(e)))},_getWire:function(e){return{object:this.object?dojox.wire.ml._getValue(this.object):void 0,
property:this.property,type:this.type,converter:this.converter,attribute:this.attribute,
path:this.path}}}),dojo.declare("dojox.wire.ml.ColumnWire",dojox.wire.ml.ChildWire,{
column:"",_addWire:function(e,t){this.column?(t.columns||(t.columns={}),t.columns[this.column]=this._getWire(e)):(t.columns||(t.columns=[]),
t.columns.push(this._getWire(e)))}}),dojo.declare("dojox.wire.ml.NodeWire",[dojox.wire.ml.ChildWire,dijit._Container],{
titleProperty:"",titleAttribute:"",titlePath:"",_addWire:function(e,t){t.nodes||(t.nodes=[]),
t.nodes.push(this._getWires(e))},_getWires:function(e){var t={node:this._getWire(e),
title:{type:"string",property:this.titleProperty,attribute:this.titleAttribute,path:this.titlePath
}},r=[],i=this.getChildren();for(var o in i){var d=i[o];d instanceof dojox.wire.ml.NodeWire&&r.push(d._getWires(e));
}return r.length>0&&(t.children=r),t}}),dojo.declare("dojox.wire.ml.SegmentWire",dojox.wire.ml.ChildWire,{
_addWire:function(e,t){t.segments||(t.segments=[]),t.segments.push(this._getWire(e)),
e.delimiter&&!t.delimiter&&(t.delimiter=e.delimiter)}});