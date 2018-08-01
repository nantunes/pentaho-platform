/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(e,n){"use strict";function t(e){return n.lowercase(e.nodeName||e[0]&&e[0].nodeName);
}function o(e,t){var o=!1,c=!1;this.ngClickOverrideEnabled=function(i){return n.isDefined(i)?(i&&!c&&(c=!0,
r.$$moduleName="ngTouch",t.directive("ngClick",r),e.decorator("ngClickDirective",["$delegate",function(e){
if(o)e.shift();else for(var n=e.length-1;n>=0;){if("ngTouch"===e[n].$$moduleName){
e.splice(n,1);break}n--}return e}])),o=i,this):o},this.$get=function(){return{ngClickOverrideEnabled:function(){
return o}}}}function c(e,t,o){i.directive(e,["$parse","$swipe",function(c,i){var r=75,u=.3,a=30;
return function(s,l,h){function f(e){if(!d)return!1;var n=Math.abs(e.y-d.y),o=(e.x-d.x)*t;
return v&&r>n&&o>0&&o>a&&u>n/o}var d,v,g=c(h[e]),p=["touch"];n.isDefined(h.ngSwipeDisableMouse)||p.push("mouse"),
i.bind(l,{start:function(e,n){d=e,v=!0},cancel:function(e){v=!1},end:function(e,n){
f(e)&&s.$apply(function(){l.triggerHandler(o),g(s,{$event:n})})}},p)}}])}var i=n.module("ngTouch",[]);
i.provider("$touch",o),o.$inject=["$provide","$compileProvider"],i.factory("$swipe",[function(){
function e(e){var n=e.originalEvent||e,t=n.touches&&n.touches.length?n.touches:[n],o=n.changedTouches&&n.changedTouches[0]||t[0];
return{x:o.clientX,y:o.clientY}}function t(e,t){var o=[];return n.forEach(e,function(e){
var n=c[e][t];n&&o.push(n)}),o.join(" ")}var o=10,c={mouse:{start:"mousedown",move:"mousemove",
end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"
},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"
}};return{bind:function(n,c,i){var r,u,a,s,l=!1;i=i||["mouse","touch","pointer"],
n.on(t(i,"start"),function(n){a=e(n),l=!0,r=0,u=0,s=a,c.start&&c.start(a,n)});var h=t(i,"cancel");
h&&n.on(h,function(e){l=!1,c.cancel&&c.cancel(e)}),n.on(t(i,"move"),function(n){if(l&&a){
var t=e(n);if(r+=Math.abs(t.x-s.x),u+=Math.abs(t.y-s.y),s=t,!(o>r&&o>u))return u>r?(l=!1,
void(c.cancel&&c.cancel(n))):(n.preventDefault(),void(c.move&&c.move(t,n)))}}),n.on(t(i,"end"),function(n){
l&&(l=!1,c.end&&c.end(e(n),n))})}}}]);var r=["$parse","$timeout","$rootElement",function(e,o,c){
function i(e,n,t,o){return Math.abs(e-t)<p&&Math.abs(n-o)<p}function r(e,n,t){for(var o=0;o<e.length;o+=2)if(i(e[o],e[o+1],n,t))return e.splice(o,o+2),
!0;return!1}function u(e){if(!(Date.now()-l>g)){var n=e.touches&&e.touches.length?e.touches:[e],o=n[0].clientX,c=n[0].clientY;
1>o&&1>c||f&&f[0]===o&&f[1]===c||(f&&(f=null),"label"===t(e.target)&&(f=[o,c]),r(h,o,c)||(e.stopPropagation(),
e.preventDefault(),e.target&&e.target.blur&&e.target.blur()))}}function a(e){var n=e.touches&&e.touches.length?e.touches:[e],t=n[0].clientX,c=n[0].clientY;
h.push(t,c),o(function(){for(var e=0;e<h.length;e+=2)if(h[e]==t&&h[e+1]==c)return void h.splice(e,e+2);
},g,!1)}function s(e,n){h||(c[0].addEventListener("click",u,!0),c[0].addEventListener("touchstart",a,!0),
h=[]),l=Date.now(),r(h,e,n)}var l,h,f,d=750,v=12,g=2500,p=25,m="ng-click-active";return function(t,o,c){
function i(){f=!1,o.removeClass(m)}var r,u,a,l,h=e(c.ngClick),f=!1;o.on("touchstart",function(e){
f=!0,r=e.target?e.target:e.srcElement,3==r.nodeType&&(r=r.parentNode),o.addClass(m),
u=Date.now();var n=e.originalEvent||e,t=n.touches&&n.touches.length?n.touches:[n],c=t[0];
a=c.clientX,l=c.clientY}),o.on("touchcancel",function(e){i()}),o.on("touchend",function(e){
var t=Date.now()-u,h=e.originalEvent||e,g=h.changedTouches&&h.changedTouches.length?h.changedTouches:h.touches&&h.touches.length?h.touches:[h],p=g[0],m=p.clientX,w=p.clientY,$=Math.sqrt(Math.pow(m-a,2)+Math.pow(w-l,2));
f&&d>t&&v>$&&(s(m,w),r&&r.blur(),n.isDefined(c.disabled)&&c.disabled!==!1||o.triggerHandler("click",[e])),
i()}),o.onclick=function(e){},o.on("click",function(e,n){t.$apply(function(){h(t,{
$event:n||e})})}),o.on("mousedown",function(e){o.addClass(m)}),o.on("mousemove mouseup",function(e){
o.removeClass(m)})}}];c("ngSwipeLeft",-1,"swipeleft"),c("ngSwipeRight",1,"swiperight");
}(window,window.angular);