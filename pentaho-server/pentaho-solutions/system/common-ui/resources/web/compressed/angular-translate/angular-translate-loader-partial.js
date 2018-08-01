/*!
 * angular-translate - v2.1.0 - 2014-09-04
 * http://github.com/PascalPrecht/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */

angular.module("pascalprecht.translate").provider("$translatePartialLoader",function(){
function t(t){this.name=t,this.isActive=!0,this.tables={}}function e(t){return o.hasOwnProperty(t);
}function r(t){return angular.isString(t)&&""!==t}function a(t){if(!r(t))throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
return e(t)&&o[t].isActive}function n(t,e){for(var r in e)e[r]&&e[r].constructor&&e[r].constructor===Object?(t[r]=t[r]||{},
n(t[r],e[r])):t[r]=e[r];return t}t.prototype.parseUrl=function(t,e){return t.replace(/\{part\}/g,this.name).replace(/\{lang\}/g,e);
},t.prototype.getTable=function(t,e,r,a,n,o){var i=e.defer();if(this.tables[t])i.resolve(this.tables[t]);else{
var s=this;r({method:"GET",url:this.parseUrl(a,t)}).success(function(e){o&&(e=o(e)),
s.tables[t]=e,i.resolve(e)}).error(function(){n?n(s.name,t).then(function(e){o&&(e=o(e)),
s.tables[t]=e,i.resolve(e)},function(){i.reject(s.name)}):i.reject(s.name)})}return i.promise;
};var o={};this.addPart=function(a){if(!r(a))throw new TypeError("Couldn't add part, part name has to be a string!");
return e(a)||(o[a]=new t(a)),o[a].isActive=!0,this},this.setPart=function(a,n,i){
if(!r(a))throw new TypeError("Couldn't set part.`lang` parameter has to be a string!");
if(!r(n))throw new TypeError("Couldn't set part.`part` parameter has to be a string!");
if("object"!=typeof i||null===i)throw new TypeError("Couldn't set part. `table` parameter has to be an object!");
return e(n)||(o[n]=new t(n),o[n].isActive=!1),o[n].tables[a]=i,this},this.deletePart=function(t){
if(!r(t))throw new TypeError("Couldn't delete part, first arg has to be string.");
return e(t)&&(o[t].isActive=!1),this},this.isPartAvailable=a,this.$get=["$rootScope","$injector","$q","$http",function(i,s,l,u){
var c=function(t){function a(t){f.push(t)}if(!r(t.key))throw new TypeError("Unable to load data, a key is not a non-empty string.");
if(!r(t.urlTemplate))throw new TypeError("Unable to load data, a urlTemplate is not a non-empty string.");
var i=t.loadFailureHandler;if(void 0!==i){if(!angular.isString(i))throw new Error("Unable to load data, a loadFailureHandler is not a string.");
i=s.get(i)}var c=t.fileFormatAdapter;if(void 0!==c&&!angular.isFunction(c))throw new Error("Unable to load data, a fileFormatAdapter is not a function!");
var p=[],f=[],d=l.defer();for(var h in o)e(h)&&o[h].isActive&&p.push(o[h].getTable(t.key,l,u,t.urlTemplate,i,c).then(a));
return p.length?l.all(p).then(function(){for(var t={},e=0;e<f.length;e++)n(t,f[e]);
d.resolve(t)},function(){d.reject(t.key)}):d.resolve({}),d.promise};return c.addPart=function(a){
if(!r(a))throw new TypeError("Couldn't add part, first arg has to be a string");return e(a)?o[a].isActive||(o[a].isActive=!0,
i.$emit("$translatePartialLoaderStructureChanged",a)):(o[a]=new t(a),i.$emit("$translatePartialLoaderStructureChanged",a)),
c},c.deletePart=function(t,a){if(!r(t))throw new TypeError("Couldn't delete part, first arg has to be string");
if(void 0===a)a=!1;else if("boolean"!=typeof a)throw new TypeError("Invalid type of a second argument, a boolean expected.");
if(e(t)){var n=o[t].isActive;a?delete o[t]:o[t].isActive=!1,n&&i.$emit("$translatePartialLoaderStructureChanged",t);
}return c},c.isPartAvailable=a,c}]});