define(["dojo/dom","dojo/_base/array","dojo/_base/window","./_base","./svg"],function(e,t,i,r,n){
function s(e,i){var r=i.ownerDocument.createElementNS(n.xmlns.svg,e.tag);i.appendChild(r);
for(var a in e)a in o||r.setAttribute(a,e[a]);return e.children&&t.forEach(e.children,function(e){
s(e,r)}),r}var a=r.svgext={},o={primitives:null,tag:null,children:null};return n.Shape.extend({
addRenderingOption:function(e,t){return this.rawNode.setAttribute(e,t),this},setFilter:function(i){
if(!i)return this.rawNode.removeAttribute("filter"),this.filter=null,this;this.filter=i,
i.id=i.id||r._base._getUniqueId();var a=e.byId(i.id);if(!a){a=this.rawNode.ownerDocument.createElementNS(n.xmlns.svg,"filter"),
a.setAttribute("filterUnits","userSpaceOnUse");for(var d in i)d in o||a.setAttribute(d,i[d]);
t.forEach(i.primitives,function(e){s(e,a)});var u=this._getParentSurface();if(u){
var l=u.defNode;l.appendChild(a)}}return this.rawNode.setAttribute("filter","url(#"+i.id+")"),
this},getFilter:function(){return this.filter}}),a});