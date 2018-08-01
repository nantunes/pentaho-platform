define(["dojo/_base/array","dojo/sniff","dojo/_base/window","./main"],function(e,t,r,i){
var n={},o={},d={length:0,add:function(e){if(o[e.id])throw new Error("Tried to register widget with id=="+e.id+" but that id is already registered");
o[e.id]=e,this.length++},remove:function(e){o[e]&&(delete o[e],this.length--)},byId:function(e){
return"string"==typeof e?o[e]:e},byNode:function(e){return o[e.getAttribute("widgetId")];
},toArray:function(){var e=[];for(var t in o)e.push(o[t]);return e},getUniqueId:function(e){
var t;do t=e+"_"+(e in n?++n[e]:n[e]=0);while(o[t]);return"dijit"==i._scopeName?t:i._scopeName+"_"+t;
},findWidgets:function(e,t){function r(e){for(var n=e.firstChild;n;n=n.nextSibling)if(1==n.nodeType){
var d=n.getAttribute("widgetId");if(d){var u=o[d];u&&i.push(u)}else n!==t&&r(n)}}
var i=[];return r(e),i},_destroyAll:function(){i._curFocus=null,i._prevFocus=null,
i._activeStack=[],e.forEach(d.findWidgets(r.body()),function(e){e._destroyed||(e.destroyRecursive?e.destroyRecursive():e.destroy&&e.destroy());
})},getEnclosingWidget:function(e){for(;e;){var t=1==e.nodeType&&e.getAttribute("widgetId");
if(t)return o[t];e=e.parentNode}return null},_hash:o};return i.registry=d,d});