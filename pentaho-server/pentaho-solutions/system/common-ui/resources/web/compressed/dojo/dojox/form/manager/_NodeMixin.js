define(["dojo/_base/lang","dojo/_base/array","dojo/on","dojo/dom","dojo/dom-attr","dojo/query","./_Mixin","dijit/form/_FormWidget","dijit/_base/manager","dojo/_base/declare"],function(e,t,o,n,i,r,s,c,a,u){
var f=e.getObject("dojox.form.manager",!0),h=f.actionAdapter,d=f._keys,l=f.changeEvent=function(e){
var t="click";switch(e.tagName.toLowerCase()){case"textarea":t="keyup";break;case"select":
t="change";break;case"input":switch(e.type.toLowerCase()){case"text":case"password":
t="keyup"}}return t},m=function(t,o){var n=i.get(t,"name");if(o=o||this.domNode,!n||n in this.formWidgets)n=null;else{
for(var r=t;r&&r!==o;r=r.parentNode)if(i.get(r,"widgetId")&&a.byNode(r).isInstanceOf(c))return null;
if("input"==t.tagName.toLowerCase()&&"radio"==t.type.toLowerCase()){var s=this.formNodes[n];
s=s&&s.node,s&&e.isArray(s)?s.push(t):this.formNodes[n]={node:[t],connections:[]};
}else this.formNodes[n]={node:t,connections:[]}}return n},g=function(o){var n={};return h(function(o,r){
var s=i.get(r,"data-dojo-observer")||i.get(r,"observer");s&&"string"==typeof s&&t.forEach(s.split(","),function(t){
t=e.trim(t),t&&e.isFunction(this[t])&&(n[t]=1)},this)}).call(this,null,this.formNodes[o].node),
d(n)},N=function(n,i){var r=this.formNodes[n],s=r.connections;s.length&&(t.forEach(s,function(e){
e.remove()}),s=r.connections=[]),h(function(r,c){var a=l(c);t.forEach(i,function(t){
s.push(o(c,a,e.hitch(this,function(e){this.watching&&this[t](this.formNodeValue(n),n,c,e);
})))},this)}).call(this,null,r.node)};return u("dojox.form.manager._NodeMixin",null,{
destroy:function(){for(var e in this.formNodes)t.forEach(this.formNodes[e].connections,function(e){
e.remove()});this.formNodes={},this.inherited(arguments)},registerNode:function(e){
"string"==typeof e&&(e=n.byId(e));var t=m.call(this,e);return t&&N.call(this,t,g.call(this,t)),
this},unregisterNode:function(e){return e in this.formNodes&&(t.forEach(this.formNodes[e].connections,function(e){
e.remove()}),delete this.formNodes[e]),this},registerNodeDescendants:function(e){
return"string"==typeof e&&(e=n.byId(e)),r("input, select, textarea, button",e).map(function(t){
return m.call(this,t,e)},this).forEach(function(e){e&&N.call(this,e,g.call(this,e));
},this),this},unregisterNodeDescendants:function(e){return"string"==typeof e&&(e=n.byId(e)),
r("input, select, textarea, button",e).map(function(t){return i.get(e,"name")||null;
}).forEach(function(e){e&&this.unregisterNode(e)},this),this},formNodeValue:function(o,n){
var i,s=2==arguments.length&&void 0!==n;if("string"==typeof o&&(o=this.formNodes[o],
o&&(o=o.node)),!o)return null;if(e.isArray(o))return s?(t.forEach(o,function(e){e.checked="";
}),t.forEach(o,function(e){e.checked=e.value===n?"checked":""}),this):(t.some(o,function(e){
return e.checked?(i=e,!0):!1}),i?i.value:"");switch(o.tagName.toLowerCase()){case"select":
if(o.multiple){if(s){if(e.isArray(n)){var c={};return t.forEach(n,function(e){c[e]=1;
}),r("> option",o).forEach(function(e){e.selected=e.value in c}),this}return r("> option",o).forEach(function(e){
e.selected=e.value===n}),this}return i=r("> option",o).filter(function(e){return e.selected;
}).map(function(e){return e.value}),1==i.length?i[0]:i}return s?(r("> option",o).forEach(function(e){
e.selected=e.value===n}),this):o.value||"";case"button":return s?(o.innerHTML=""+n,
this):o.innerHTML;case"input":if("checkbox"==o.type.toLowerCase())return s?(o.checked=n?"checked":"",
this):Boolean(o.checked)}return s?(o.value=""+n,this):o.value},inspectFormNodes:function(o,n,i){
var r,s={};if(n)if(e.isArray(n))t.forEach(n,function(e){e in this.formNodes&&(s[e]=o.call(this,e,this.formNodes[e].node,i));
},this);else for(r in n)r in this.formNodes&&(s[r]=o.call(this,r,this.formNodes[r].node,n[r]));else for(r in this.formNodes)s[r]=o.call(this,r,this.formNodes[r].node,i);
return s}})});