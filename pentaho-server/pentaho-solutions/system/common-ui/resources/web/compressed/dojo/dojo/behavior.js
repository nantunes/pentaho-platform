define(["./_base/kernel","./_base/lang","./_base/array","./_base/connect","./query","./domReady"],function(n,i,o,e,t,r){
n.deprecated("dojo.behavior","Use dojo/on with event delegation (on.selector())");
var a=function(){function n(n,i){return n[i]||(n[i]=[]),n[i]}function r(n,i,o){var e={};
for(var t in n)"undefined"==typeof e[t]&&(o?o.call(i,n[t],t):i(n[t],t))}var a=0;this._behaviors={},
this.add=function(o){r(o,this,function(o,e){var t=n(this._behaviors,e);"number"!=typeof t.id&&(t.id=a++);
var u=[];t.push(u),(i.isString(o)||i.isFunction(o))&&(o={found:o}),r(o,function(i,o){
n(u,o).push(i)})})};var u=function(n,o,t){i.isString(o)?"found"==t?e.publish(o,[n]):e.connect(n,t,function(){
e.publish(o,arguments)}):i.isFunction(o)&&("found"==t?o(n):e.connect(n,t,o))};this.apply=function(){
r(this._behaviors,function(n,e){t(e).forEach(function(e){var t=0,a="_dj_behavior_"+n.id;
if("number"!=typeof e[a]||(t=e[a],t!=n.length)){for(var c,f=t;c=n[f];f++)r(c,function(n,t){
i.isArray(n)&&o.forEach(n,function(n){u(e,n,t)})});e[a]=n.length}})})}};return n.behavior=new a,
r(function(){n.behavior.apply()}),n.behavior});