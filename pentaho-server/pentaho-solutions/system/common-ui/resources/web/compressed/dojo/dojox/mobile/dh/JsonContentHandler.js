define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/json","dojo/dom-construct"],function(e,r,t,n,i,s,o){
return t("dojox.mobile.dh.JsonContentHandler",null,{parse:function(e,t,a){var l,c=o.create("DIV");
t.insertBefore(c,a),this._ws=[],this._req=[];var h=s.parse(e);return i.when(this._loadPrereqs(h),n.hitch(this,function(){
return l=this._instantiate(h,c),l.style.visibility="hidden",r.forEach(this._ws,function(e){
!e._started&&e.startup&&e.startup()}),this._ws=null,l.id}))},_loadPrereqs:function(t){
var n=new i,s=this._collectRequires(t);return 0===s.length?!0:e.require?(r.forEach(s,function(r){
e.require(r)}),!0):(s=r.map(s,function(e){return e.replace(/\./g,"/")}),require(s,function(){
n.resolve(!0)}),n)},_collectRequires:function(e){var r=e["class"];for(var t in e)if("@"!=t.charAt(0)&&"children"!==t){
var i=r||t.replace(/:.*/,"");if(this._req.push(i),i)for(var s=r?[e]:n.isArray(e[t])?e[t]:[e[t]],o=0;o<s.length;o++)if(r){
if(s[o].children)for(var a=0;a<s[o].children.length;a++)this._collectRequires(s[o].children[a]);
}else this._collectRequires(s[o])}return this._req},_instantiate:function(e,r,t){
var i,o=e["class"];for(var a in e)if("@"!=a.charAt(0)&&"children"!==a){var l=n.getObject(o||a.replace(/:.*/,""));
if(l)for(var c=l.prototype,h=o?[e]:n.isArray(e[a])?e[a]:[e[a]],u=0;u<h.length;u++){
var f={};for(var d in h[u])if("@"==d.charAt(0)){var _=h[u][d];d=d.substring(1);var v=typeof c[d];
n.isArray(c[d])?f[d]=_.split(/\s*,\s*/):"string"===v?f[d]=_:"number"===v?f[d]=_-0:"boolean"===v?f[d]="false"!==_:"object"===v?f[d]=s.parse(_):"function"===v&&(f[d]=n.getObject(_,!1)||new Function(_));
}if(i=new l(f,r),r&&this._ws.push(i),t&&i.placeAt(t.containerNode||t.domNode),o){
if(h[u].children)for(var p=0;p<h[u].children.length;p++)this._instantiate(h[u].children[p],null,i);
}else this._instantiate(h[u],null,i)}}return i&&i.domNode}})});