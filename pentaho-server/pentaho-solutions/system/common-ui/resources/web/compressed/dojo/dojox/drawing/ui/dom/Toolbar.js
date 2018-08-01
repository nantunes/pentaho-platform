define(["dojo","../../util/common"],function(dojo,commonUtil){return dojo.deprecated("dojox.drawing.ui.dom.Toolbar","It may not even make it to the 1.4 release.",1.4),
dojo.declare("dojox.drawing.ui.dom.Toolbar",[],{baseClass:"drawingToolbar",buttonClass:"drawingButton",
iconClass:"icon",constructor:function(o,t){dojo.addOnLoad(this,function(){this.domNode=dojo.byId(t),
dojo.addClass(this.domNode,this.baseClass),this.parse()})},createIcon:function(o,t){
var n=t&&t.setup?t.setup:{};if(n.iconClass){var e=n.iconClass?n.iconClass:"iconNone",d=n.tooltip?n.tooltip:"Tool",s=dojo.create("div",{
title:d},o);dojo.addClass(s,this.iconClass),dojo.addClass(s,e),dojo.connect(o,"mouseup",function(t){
dojo.stopEvent(t),dojo.removeClass(o,"active")}),dojo.connect(o,"mouseover",function(t){
dojo.stopEvent(t),dojo.addClass(o,"hover")}),dojo.connect(o,"mousedown",this,function(t){
dojo.stopEvent(t),dojo.addClass(o,"active")}),dojo.connect(o,"mouseout",this,function(t){
dojo.stopEvent(t),dojo.removeClass(o,"hover")})}},createTool:function(o){o.innerHTML="";
var t=dojo.attr(o,"tool");this.toolNodes[t]=o,dojo.attr(o,"tabIndex",1);var n=dojo.getObject(t);
this.createIcon(o,n),this.drawing.registerTool(t,n),dojo.connect(o,"mouseup",this,function(n){
dojo.stopEvent(n),dojo.removeClass(o,"active"),this.onClick(t)}),dojo.connect(o,"mouseover",function(t){
dojo.stopEvent(t),dojo.addClass(o,"hover")}),dojo.connect(o,"mousedown",this,function(t){
dojo.stopEvent(t),dojo.addClass(o,"active")}),dojo.connect(o,"mouseout",this,function(t){
dojo.stopEvent(t),dojo.removeClass(o,"hover")})},parse:function(){var drawingId=dojo.attr(this.domNode,"drawingId");
this.drawing=commonUtil.byId(drawingId),!this.drawing&&console.error("Drawing not found based on 'drawingId' in Toolbar. "),
this.toolNodes={};var _sel;dojo.forEach(this.domNode.childNodes,function(node,i){
if(1===node.nodeType){node.className=this.buttonClass;var tool=dojo.attr(node,"tool"),action=dojo.attr(node,"action"),plugin=dojo.attr(node,"plugin");
if(tool)(0==i||"true"==dojo.attr(node,"selected"))&&(_sel=tool),this.createTool(node);else if(plugin){
var p={name:plugin,options:{}},opt=dojo.attr(node,"options");opt&&(p.options=eval("("+opt+")")),
p.options.node=node,node.innerHTML="",this.drawing.addPlugin(p),this.createIcon(node,dojo.getObject(dojo.attr(node,"plugin")));
}}},this),this.drawing.initPlugins(),dojo.connect(this.drawing,"setTool",this,"onSetTool"),
this.drawing.setTool(_sel)},onClick:function(o){this.drawing.setTool(o)},onSetTool:function(o){
for(var t in this.toolNodes)t==o?(dojo.addClass(this.toolNodes[o],"selected"),this.toolNodes[o].blur()):dojo.removeClass(this.toolNodes[t],"selected");
}})});