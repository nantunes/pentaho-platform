define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/window","dojo/_base/Deferred","dojo/ready"],function(t,e,r,o,a,n){
var i=function(){this._lazyNodes=[];var i=this;r.parseOnLoad&&n(90,function(){var t,r,a,n,u=e.filter(o.body().getElementsByTagName("*"),function(t){
return"true"===t.getAttribute("lazy")||(t.getAttribute("data-dojo-props")||"").match(/lazy\s*:\s*true/);
});for(t=0;t<u.length;t++)e.forEach(["dojoType","data-dojo-type"],function(o){for(a=e.filter(u[t].getElementsByTagName("*"),function(t){
return t.getAttribute(o)}),r=0;r<a.length;r++)n=a[r],n.setAttribute("__"+o,n.getAttribute(o)),
n.removeAttribute(o),i._lazyNodes.push(n)})}),n(function(){for(var t=0;t<i._lazyNodes.length;t++){
var r=i._lazyNodes[t];e.forEach(["dojoType","data-dojo-type"],function(t){r.getAttribute("__"+t)&&(r.setAttribute(t,r.getAttribute("__"+t)),
r.removeAttribute("__"+t))})}delete i._lazyNodes}),this.instantiateLazyWidgets=function(r,o,n){
for(var i=new a,u=o?o.split(/,/):[],s=r.getElementsByTagName("*"),d=s.length,f=0;d>f;f++){
var g=s[f].getAttribute("dojoType")||s[f].getAttribute("data-dojo-type");if(g){u.push(g);
var l=s[f].getAttribute("data-dojo-mixins"),c=l?l.split(/, */):[];u=u.concat(c)}}
return 0===u.length?!0:t.require?(e.forEach(u,function(e){t.require(e)}),t.parser.parse(r),
n&&n(r),!0):(u=e.map(u,function(t){return t.replace(/\./g,"/")}),require(u,function(){
t.parser.parse(r),n&&n(r),i.resolve(!0)}),i)}};return new i});