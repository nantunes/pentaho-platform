/*!
* Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

// Based on Xavi Ramirez's MIT licensed https://github.com/xavi-/node-properties-parser

define(["pentaho/shim/es5"],function(){"use strict";function e(e){var n=0,r=e.length;
this.peek=function(t){return t=t||0,n+t>=r?null:e.charAt(n+t)},this.next=function(t){
return t=t||1,n>=r?null:e.charAt((n+=t)-t)},this.pos=function(){return n}}function n(e){
return g.test(e)}function r(e){for(var r=e.pos();n(e.peek());)e.next();return{type:"whitespace",
start:r,end:e.pos()}}function t(e){return"!"===e||"#"===e}function u(e){return null==e||"\n"===e||"\r"===e;
}function s(e){for(var n=e.pos();!u(e.peek());)e.next();return{type:"comment",start:n,
end:e.pos()}}function o(e){return!n(e)&&!t(e)}function i(e){return"="===e||":"===e||n(e);
}function a(e){return"\\"===e}function p(e){var n=e.pos();e.next();var r=e.next();
return"u"===r&&e.next(4),{type:"escaped-value",start:n,end:e.pos()}}function f(e){
for(var n,r=e.pos(),t=[];null!==(n=e.peek())&&!i(n);)a(n)?t.push(p(e)):e.next();return{
type:"key",start:r,end:e.pos(),children:t}}function c(e){for(var r,t=e.pos(),s=!1;null!==(r=e.peek())&&!u(r);)if(n(r))e.next();else{
if(s)break;if(s=":"===r||"="===r,!s)break;e.next()}return{type:"key-value-separator",
start:t,end:e.pos()}}function l(e){return"\\"===e.peek()&&u(e.peek(1))}function h(e){
var r=e.pos();e.next(),"\r"===e.peek()&&e.next(),e.next();for(var t;null!==(t=e.peek())&&!u(t)&&n(t);)e.next();
return{type:"line-break",start:r,end:e.pos()}}function v(e){for(var n,r=e.pos(),t=[];null!==(n=e.peek());)if(l(e))t.push(h(e));else if(a(n))t.push(p(e));else{
if(u(n))break;e.next()}return{type:"value",start:r,end:e.pos(),children:t}}function d(e){
return{type:"key-value",start:e.pos(),children:[f(e),c(e),v(e)],end:e.pos()}}function k(e,n){
for(var r=e.start,t=[],u=0;u<e.children.length;u++){var s=e.children[u];t.push(n.substring(r,s.start)),
t.push(m[s.type](s,n)),r=s.end}return t.push(n.substring(r,e.end)),t}function x(e,n){
for(var r={},t=0;t<e.length;t++){var u=e[t];if("key-value"===u.type){var s=k(u.children[0],n).join(""),o=k(u.children[2],n).join("");
r[s]=o}}return r}function y(u){for(var i,a=new e(u),p=[];null!==(i=a.peek());)if(n(i))p.push(r(a));else if(t(i))p.push(s(a));else{
if(!o(i))throw Error("Something crazy happened. text: '"+u+"'; curChar: '"+i+"'");
p.push(d(a))}return p}function b(e){e=String(e);var n=y(e);return x(n,e)}var g=/\s/,m={
"escaped-value":function(e,n){var r=n.charAt(e.start+1);return"t"===r?"	":"r"===r?"\r":"n"===r?"\n":"f"===r?"\f":"u"!==r?r:String.fromCharCode(parseInt(n.substr(e.start+2,4),16));
},"line-break":function(e,n){return""}};return b});