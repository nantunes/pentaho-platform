/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(e,o){"use strict";function n(e,n,t){function i(e,t,i){var u,c;i=i||{},c=i.expires,
u=o.isDefined(i.path)?i.path:r,o.isUndefined(t)&&(c="Thu, 01 Jan 1970 00:00:00 GMT",
t=""),o.isString(c)&&(c=new Date(c));var s=encodeURIComponent(e)+"="+encodeURIComponent(t);
s+=u?";path="+u:"",s+=i.domain?";domain="+i.domain:"",s+=c?";expires="+c.toUTCString():"",
s+=i.secure?";secure":"";var f=s.length+1;return f>4096&&n.warn("Cookie '"+e+"' possibly not set or overflowed because it was too large ("+f+" > 4096 bytes)!"),
s}var r=t.baseHref(),u=e[0];return function(e,o,n){u.cookie=i(e,o,n)}}o.module("ngCookies",["ng"]).provider("$cookies",[function(){
function e(e){return e?o.extend({},n,e):n}var n=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(n,t){
return{get:function(e){return n()[e]},getObject:function(e){var n=this.get(e);return n?o.fromJson(n):n;
},getAll:function(){return n()},put:function(o,n,i){t(o,n,e(i))},putObject:function(e,n,t){
this.put(e,o.toJson(n),t)},remove:function(o,n){t(o,void 0,e(n))}}}]}]),o.module("ngCookies").factory("$cookieStore",["$cookies",function(e){
return{get:function(o){return e.getObject(o)},put:function(o,n){e.putObject(o,n)},
remove:function(o){e.remove(o)}}}]),n.$inject=["$document","$log","$browser"],o.module("ngCookies").provider("$$cookieWriter",function(){
this.$get=n})}(window,window.angular);