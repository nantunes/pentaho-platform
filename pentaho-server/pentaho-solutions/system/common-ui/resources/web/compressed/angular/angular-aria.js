/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

!function(r,e){"use strict";function a(){function r(r,e,i,n){return function(c,o,u){
var d=u.$normalize(e);!a[d]||t(o,i)||u[d]||c.$watch(u[r],function(r){r=n?!r:!!r,o.attr(e,r);
})}}var a={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,
ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};this.config=function(r){
a=e.extend(a,r)},this.$get=function(){return{config:function(r){return a[r]},$$watchExpr:r
}}}var i=e.module("ngAria",["ng"]).provider("$aria",a),n=["BUTTON","A","INPUT","TEXTAREA","SELECT","DETAILS","SUMMARY"],t=function(r,e){
return-1!==e.indexOf(r[0].nodeName)?!0:void 0};i.directive("ngShow",["$aria",function(r){
return r.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(r){
return r.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(r){
return r.$$watchExpr("ngValue","aria-checked",n,!1)}]).directive("ngChecked",["$aria",function(r){
return r.$$watchExpr("ngChecked","aria-checked",n,!1)}]).directive("ngReadonly",["$aria",function(r){
return r.$$watchExpr("ngReadonly","aria-readonly",n,!1)}]).directive("ngRequired",["$aria",function(r){
return r.$$watchExpr("ngRequired","aria-required",n,!1)}]).directive("ngModel",["$aria",function(r){
function e(e,a,i,c){return r.config(a)&&!i.attr(e)&&(c||!t(i,n))}function a(r,e){
return!e.attr("role")&&e.attr("type")===r&&"INPUT"!==e[0].nodeName}function i(r,e){
var a=r.type,i=r.role;return"checkbox"===(a||i)||"menuitemcheckbox"===i?"checkbox":"radio"===(a||i)||"menuitemradio"===i?"radio":"range"===a||"progressbar"===i||"slider"===i?"range":"";
}return{restrict:"A",require:"ngModel",priority:200,compile:function(n,t){var c=i(t,n);
return{pre:function(r,e,a,i){"checkbox"===c&&(i.$isEmpty=function(r){return r===!1;
})},post:function(i,n,t,o){function u(){return o.$modelValue}function d(r){var e=t.value==o.$viewValue;
n.attr("aria-checked",e)}function l(){n.attr("aria-checked",!o.$isEmpty(o.$viewValue));
}var f=e("tabindex","tabindex",n,!1);switch(c){case"radio":case"checkbox":a(c,n)&&n.attr("role",c),
e("aria-checked","ariaChecked",n,!1)&&i.$watch(u,"radio"===c?d:l),f&&n.attr("tabindex",0);
break;case"range":if(a(c,n)&&n.attr("role","slider"),r.config("ariaValue")){var s=!n.attr("aria-valuemin")&&(t.hasOwnProperty("min")||t.hasOwnProperty("ngMin")),$=!n.attr("aria-valuemax")&&(t.hasOwnProperty("max")||t.hasOwnProperty("ngMax")),v=!n.attr("aria-valuenow");
s&&t.$observe("min",function(r){n.attr("aria-valuemin",r)}),$&&t.$observe("max",function(r){
n.attr("aria-valuemax",r)}),v&&i.$watch(u,function(r){n.attr("aria-valuenow",r)});
}f&&n.attr("tabindex",0)}!t.hasOwnProperty("ngRequired")&&o.$validators.required&&e("aria-required","ariaRequired",n,!1)&&t.$observe("required",function(){
n.attr("aria-required",!!t.required)}),e("aria-invalid","ariaInvalid",n,!0)&&i.$watch(function(){
return o.$invalid},function(r){n.attr("aria-invalid",!!r)})}}}}}]).directive("ngDisabled",["$aria",function(r){
return r.$$watchExpr("ngDisabled","aria-disabled",n,!1)}]).directive("ngMessages",function(){
return{restrict:"A",require:"?ngMessages",link:function(r,e,a,i){e.attr("aria-live")||e.attr("aria-live","assertive");
}}}).directive("ngClick",["$aria","$parse",function(r,e){return{restrict:"A",compile:function(a,i){
var c=e(i.ngClick,null,!0);return function(e,a,i){t(a,n)||(r.config("bindRoleForClick")&&!a.attr("role")&&a.attr("role","button"),
r.config("tabindex")&&!a.attr("tabindex")&&a.attr("tabindex",0),r.config("bindKeypress")&&!i.ngKeypress&&a.on("keypress",function(r){
function a(){c(e,{$event:r})}var i=r.which||r.keyCode;(32===i||13===i)&&e.$apply(a);
}))}}}}]).directive("ngDblclick",["$aria",function(r){return function(e,a,i){!r.config("tabindex")||a.attr("tabindex")||t(a,n)||a.attr("tabindex",0);
}}])}(window,window.angular);