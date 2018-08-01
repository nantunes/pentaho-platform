define(["dojo/_base/window","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/dom-attr","dojo/dom-class","dijit/_base/manager","dijit/_Widget","dijit/form/_FormWidget","dijit/form/Button","dijit/form/CheckBox","dojo/_base/declare"],function(t,e,i,n,s,o,r,a,c,h,d,f){
var g=e.getObject("dojox.form.manager",!0),u=g.actionAdapter=function(t){return function(n,s,o){
e.isArray(s)?i.forEach(s,function(e){t.call(this,n,e,o)},this):t.apply(this,arguments);
}},l=(g.inspectorAdapter=function(t){return function(i,n,s){return t.call(this,i,e.isArray(n)?n[0]:n,s);
}},{domNode:1,containerNode:1,srcNodeRef:1,bgIframe:1}),m=g._keys=function(t){var e,i=[];
for(e in t)t.hasOwnProperty(e)&&i.push(e);return i},N=function(t){var i=t.get("name");
if(i&&t.isInstanceOf(c))if(i in this.formWidgets){var n=this.formWidgets[i].widget;
e.isArray(n)?n.push(t):this.formWidgets[i].widget=[n,t]}else this.formWidgets[i]={
widget:t,connections:[]};else i=null;return i},v=function(t){var n={};return u(function(t,s){
var o=s.get("data-dojo-observer")||s.get("observer");o&&"string"==typeof o&&i.forEach(o.split(","),function(t){
t=e.trim(t),t&&e.isFunction(this[t])&&(n[t]=1)},this)}).call(this,null,this.formWidgets[t].widget),
m(n)},W=function(t,o){var r=this.formWidgets[t],a=r.widget,c=r.connections;if(c.length&&(i.forEach(c,function(t){
t.remove()}),c=r.connections=[]),e.isArray(a))i.forEach(a,function(r){i.forEach(o,function(i){
c.push(n(r,"change",e.hitch(this,function(e){this.watching&&s.get(r.focusNode,"checked")&&this[i](r.get("value"),t,r,e);
})))},this)},this);else{var d=a.isInstanceOf(h)?"click":"change";i.forEach(o,function(i){
c.push(n(a,d,e.hitch(this,function(e){this.watching&&this[i](a.get("value"),t,a,e);
})))},this)}},p=f("dojox.form.manager._Mixin",null,{watching:!0,startup:function(){
this._started||(this.formWidgets={},this.formNodes={},this.registerWidgetDescendants(this),
this.inherited(arguments))},destroy:function(){for(var t in this.formWidgets)i.forEach(this.formWidgets[t].connections,function(t){
t.remove()});this.formWidgets={},this.inherited(arguments)},registerWidget:function(t){
"string"==typeof t?t=r.byId(t):t.tagName&&t.cloneNode&&(t=r.byNode(t));var e=N.call(this,t);
return e&&W.call(this,e,v.call(this,e)),this},unregisterWidget:function(t){return t in this.formWidgets&&(i.forEach(this.formWidgets[t].connections,function(t){
t.remove()}),delete this.formWidgets[t]),this},registerWidgetDescendants:function(t){
"string"==typeof t?t=r.byId(t):t.tagName&&t.cloneNode&&(t=r.byNode(t));var e=i.map(t.getDescendants(),N,this);
return i.forEach(e,function(t){t&&W.call(this,t,v.call(this,t))},this),this.registerNodeDescendants?this.registerNodeDescendants(t.domNode):this;
},unregisterWidgetDescendants:function(t){return"string"==typeof t?t=r.byId(t):t.tagName&&t.cloneNode&&(t=r.byNode(t)),
i.forEach(i.map(t.getDescendants(),function(t){return t instanceof c&&t.get("name")||null;
}),function(t){t&&this.unregisterWidget(t)},this),this.unregisterNodeDescendants?this.unregisterNodeDescendants(t.domNode):this;
},formWidgetValue:function(t,n){var o,r=2==arguments.length&&void 0!==n;return"string"==typeof t&&(t=this.formWidgets[t],
t&&(t=t.widget)),t?e.isArray(t)?r?(i.forEach(t,function(t){t.set("checked",!1,!this.watching);
},this),i.forEach(t,function(t){t.set("checked",t.value===n,!this.watching)},this),
this):(i.some(t,function(t){return s.get(t.focusNode,"checked")?(o=t,!0):!1}),o?o.get("value"):""):t.isInstanceOf&&t.isInstanceOf(d)?r?(t.set("value",Boolean(n),!this.watching),
this):Boolean(t.get("value")):r?(t.set("value",n,!this.watching),this):t.get("value"):null;
},formPointValue:function(t,e){return t&&"string"==typeof t&&(t=this[t]),t&&t.tagName&&t.cloneNode&&o.contains(t,"dojoFormValue")?2==arguments.length&&void 0!==e?(t.innerHTML=e,
this):t.innerHTML:null},inspectFormWidgets:function(t,n,s){var o,r={};if(n)if(e.isArray(n))i.forEach(n,function(e){
e in this.formWidgets&&(r[e]=t.call(this,e,this.formWidgets[e].widget,s))},this);else for(o in n)o in this.formWidgets&&(r[o]=t.call(this,o,this.formWidgets[o].widget,n[o]));else for(o in this.formWidgets)r[o]=t.call(this,o,this.formWidgets[o].widget,s);
return r},inspectAttachedPoints:function(t,n,s){var o,r,a={};if(n)if(e.isArray(n))i.forEach(n,function(e){
r=this[e],r&&r.tagName&&r.cloneNode&&(a[e]=t.call(this,e,r,s))},this);else for(o in n)r=this[o],
r&&r.tagName&&r.cloneNode&&(a[o]=t.call(this,o,r,n[o]));else for(o in this)o in l||(r=this[o],
r&&r.tagName&&r.cloneNode&&(a[o]=t.call(this,o,r,s)));return a},inspect:function(t,n,s){
var o=this.inspectFormWidgets(function(n,s,o){return e.isArray(s)?t.call(this,n,i.map(s,function(t){
return t.domNode}),o):t.call(this,n,s.domNode,o)},n,s);return this.inspectFormNodes&&e.mixin(o,this.inspectFormNodes(t,n,s)),
e.mixin(o,this.inspectAttachedPoints(t,n,s))}});return e.extend(a,{observer:""}),
p});