define(["../_base/array","../_base/declare","../_base/kernel","../_base/lang","../_base/window","../dom","../dom-class","../dom-construct","../Evented","../has","../on","../query","../touch","./common"],function(t,e,n,r,i,a,o,s,d,h,u,c,l,p){
var f=e("dojo.dnd.Container",d,{skipForm:!1,allowNested:!1,constructor:function(t,e){
this.node=a.byId(t),e||(e={}),this.creator=e.creator||null,this.skipForm=e.skipForm,
this.parent=e.dropParent&&a.byId(e.dropParent),this.map={},this.current=null,this.containerState="",
o.add(this.node,"dojoDndContainer"),e&&e._skipStartup||this.startup(),this.events=[u(this.node,l.over,r.hitch(this,"onMouseOver")),u(this.node,l.out,r.hitch(this,"onMouseOut")),u(this.node,"dragstart",r.hitch(this,"onSelectStart")),u(this.node,"selectstart",r.hitch(this,"onSelectStart"))];
},creator:function(){},getItem:function(t){return this.map[t]},setItem:function(t,e){
this.map[t]=e},delItem:function(t){delete this.map[t]},forInItems:function(t,e){e=e||n.global;
var r=this.map,i=p._empty;for(var a in r)a in i||t.call(e,r[a],a,this);return e},
clearItems:function(){this.map={}},getAllNodes:function(){return c((this.allowNested?"":"> ")+".dojoDndItem",this.parent);
},sync:function(){var t={};return this.getAllNodes().forEach(function(e){if(e.id){
var n=this.getItem(e.id);if(n)return void(t[e.id]=n)}else e.id=p.getUniqueId();var r=e.getAttribute("dndType"),i=e.getAttribute("dndData");
t[e.id]={data:i||e.innerHTML,type:r?r.split(/\s*,\s*/):["text"]}},this),this.map=t,
this},insertNodes:function(t,e,n){this.parent.firstChild?e?n||(n=this.parent.firstChild):n&&(n=n.nextSibling):n=null;
var r,i;if(n)for(r=0;r<t.length;++r)i=this._normalizedCreator(t[r]),this.setItem(i.node.id,{
data:i.data,type:i.type}),n.parentNode.insertBefore(i.node,n);else for(r=0;r<t.length;++r)i=this._normalizedCreator(t[r]),
this.setItem(i.node.id,{data:i.data,type:i.type}),this.parent.appendChild(i.node);
return this},destroy:function(){t.forEach(this.events,function(t){t.remove()}),this.clearItems(),
this.node=this.parent=this.current=null},markupFactory:function(t,e,n){return t._skipStartup=!0,
new n(e,t)},startup:function(){if(!this.parent&&(this.parent=this.node,"table"==this.parent.tagName.toLowerCase())){
var t=this.parent.getElementsByTagName("tbody");t&&t.length&&(this.parent=t[0])}this.defaultCreator=p._defaultCreator(this.parent),
this.sync()},onMouseOver:function(t){for(var e=t.relatedTarget;e&&e!=this.node;)try{
e=e.parentNode}catch(n){e=null}e||(this._changeState("Container","Over"),this.onOverEvent()),
e=this._getChildByEvent(t),this.current!=e&&(this.current&&this._removeItemClass(this.current,"Over"),
e&&this._addItemClass(e,"Over"),this.current=e)},onMouseOut:function(t){for(var e=t.relatedTarget;e;){
if(e==this.node)return;try{e=e.parentNode}catch(n){e=null}}this.current&&(this._removeItemClass(this.current,"Over"),
this.current=null),this._changeState("Container",""),this.onOutEvent()},onSelectStart:function(t){
this.skipForm&&p.isFormElement(t)||(t.stopPropagation(),t.preventDefault())},onOverEvent:function(){},
onOutEvent:function(){},_changeState:function(t,e){var n="dojoDnd"+t,r=t.toLowerCase()+"State";
o.replace(this.node,n+e,n+this[r]),this[r]=e},_addItemClass:function(t,e){o.add(t,"dojoDndItem"+e);
},_removeItemClass:function(t,e){o.remove(t,"dojoDndItem"+e)},_getChildByEvent:function(t){
var e=t.target;if(e)for(var n=e.parentNode;n;e=n,n=e.parentNode)if((n==this.parent||this.allowNested)&&o.contains(e,"dojoDndItem"))return e;
return null},_normalizedCreator:function(t,e){var n=(this.creator||this.defaultCreator).call(this,t,e);
return r.isArray(n.type)||(n.type=["text"]),n.node.id||(n.node.id=p.getUniqueId()),
o.add(n.node,"dojoDndItem"),n}});return p._createNode=function(t){return t?function(e){
return s.create(t,{innerHTML:e})}:p._createSpan},p._createTrTd=function(t){var e=s.create("tr");
return s.create("td",{innerHTML:t},e),e},p._createSpan=function(t){return s.create("span",{
innerHTML:t})},p._defaultCreatorNodes={ul:"li",ol:"li",div:"div",p:"div"},p._defaultCreator=function(t){
var e=t.tagName.toLowerCase(),n="tbody"==e||"thead"==e?p._createTrTd:p._createNode(p._defaultCreatorNodes[e]);
return function(t,e){var i,a,o,s=t&&r.isObject(t);return s&&t.tagName&&t.nodeType&&t.getAttribute?(i=t.getAttribute("dndData")||t.innerHTML,
a=t.getAttribute("dndType"),a=a?a.split(/\s*,\s*/):["text"],o=t):(i=s&&t.data?t.data:t,
a=s&&t.type?t.type:["text"],o=("avatar"==e?p._createSpan:n)(String(i))),o.id||(o.id=p.getUniqueId()),
{node:o,data:i,type:a}}},f});