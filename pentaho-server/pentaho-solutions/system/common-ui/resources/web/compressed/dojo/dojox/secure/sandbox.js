dojo.provide("dojox.secure.sandbox"),dojo.require("dojox.secure.DOM"),dojo.require("dojox.secure.capability"),
dojo.require("dojo.NodeList-fx"),dojo.require("dojo._base.url"),function(){var oldTimeout=setTimeout,oldInterval=setInterval;
if({}.__proto__){var fixMozArrayFunction=function(e){var r=Array.prototype[e];r&&!r.fixed&&((Array.prototype[e]=function(){
if(this==window)throw new TypeError("Called with wrong this");return r.apply(this,arguments);
}).fixed=!0)};fixMozArrayFunction("concat"),fixMozArrayFunction("reverse"),fixMozArrayFunction("sort"),
fixMozArrayFunction("slice"),fixMozArrayFunction("forEach"),fixMozArrayFunction("filter"),
fixMozArrayFunction("reduce"),fixMozArrayFunction("reduceRight"),fixMozArrayFunction("every"),
fixMozArrayFunction("map"),fixMozArrayFunction("some")}var xhrGet=function(){return dojo.xhrGet.apply(dojo,arguments);
};dojox.secure.sandbox=function(element){function get(e,r){if(r=""+r,dojox.secure.badProps.test(r))throw new Error("bad property access");
return e.__get__?e.__get__(r):e[r]}function set(e,r,o){return r=""+r,get(e,r),e.__set?e.__set(r):(e[r]=o,
o)}function forEach(e,r){if("function"!=typeof r)throw new TypeError;if("length"in e)if(e.__get__)for(var o=e.__get__("length"),t=0;o>t;t++)t in e&&r.call(e,e.__get__(t),t,e);else for(o=e.length,
t=0;o>t;t++)t in e&&r.call(e,e[t],t,e);else for(t in e)r.call(e,get(e,t),t,e)}function Class(e,r,o){
function t(){i&&i.apply(this,arguments),a&&a.apply(this,arguments)}for(var n,i,a,u,c=0,s=arguments.length;"function"==typeof(u=arguments[c])&&s>c;c++)if(n)mixin(n,u.prototype);else{
i=u;var l=function(){};l.prototype=u.prototype,n=new l}if(u){for(var f in u){var d=u[f];
"function"==typeof d&&(u[f]=function(){if(this instanceof t)return arguments.callee.__rawMethod__.apply(this,arguments);
throw new Error("Method called on wrong object")},u[f].__rawMethod__=d)}u.hasOwnProperty("constructor")&&(a=u.constructor);
}return n=n?mixin(n,u):u,mixin(t,arguments[c]),n.constructor=t,t.prototype=n,t}function checkString(e){
if("function"!=typeof e)throw new Error("String is not allowed in setTimeout/setInterval");
}function setTimeout(e,r){return checkString(e),oldTimeout(e,r)}function setInterval(e,r){
return checkString(e),oldInterval(e,r)}function evaluate(e){return wrap.evaluate(e);
}var wrap=dojox.secure.DOM(element);element=wrap(element);var document=element.ownerDocument,mixin,dojo=dojox.secure._safeDojoFunctions(element,wrap),imports=[],safeCalls=["isNaN","isFinite","parseInt","parseFloat","escape","unescape","encodeURI","encodeURIComponent","decodeURI","decodeURIComponent","alert","confirm","prompt","Error","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","Date","RegExp","Number","Object","Array","String","Math","setTimeout","setInterval","clearTimeout","clearInterval","dojo","get","set","forEach","load","evaluate"];
for(var i in dojo)safeCalls.push(i),imports.push("var "+i+"=dojo."+i);eval(imports.join(";"));
var load=wrap.load=function(e){if(e.match(/^[\w\s]*:/))throw new Error("Access denied to cross-site requests");
return xhrGet({url:new dojo._Url(wrap.rootUrl,e)+"",secure:!0})};return wrap.evaluate=function(script){
if(dojox.secure.capability.validate(script,safeCalls,{document:1,element:1}),script.match(/^\s*[\[\{]/))var result=eval("("+script+")");else eval(script);
},{loadJS:function(e){return wrap.rootUrl=e,xhrGet({url:e,secure:!0}).addCallback(function(e){
evaluate(e,element)})},loadHTML:function(e){return wrap.rootUrl=e,xhrGet({url:e,secure:!0
}).addCallback(function(e){element.innerHTML=e})},evaluate:function(e){return wrap.evaluate(e);
}}}}(),dojox.secure._safeDojoFunctions=function(e,r){var o=["mixin","require","isString","isArray","isFunction","isObject","isArrayLike","isAlien","hitch","delegate","partial","trim","disconnect","subscribe","unsubscribe","Deferred","toJson","style","attr"],t=(e.ownerDocument,
dojox.secure.unwrap);dojo.NodeList.prototype.addContent.safetyCheck=function(e){r.safeHTML(e);
},dojo.NodeList.prototype.style.safetyCheck=function(e,o){if("behavior"==e)throw new Error("Can not set behavior");
r.safeCSS(o)},dojo.NodeList.prototype.attr.safetyCheck=function(e,r){if(r&&("src"==e||"href"==e||"style"==e))throw new Error("Illegal to set "+e);
};for(var n={query:function(o,n){return r(dojo.query(o,t(n||e)))},connect:function(e,r){
var o=e;if(arguments[0]=t(e),o!=arguments[0]&&"on"!=r.substring(0,2))throw new Error("Invalid event name for element");
return dojo.connect.apply(dojo,arguments)},body:function(){return e},byId:function(r){
return e.ownerDocument.getElementById(r)},fromJson:function(e){return dojox.secure.capability.validate(e,[],{}),
dojo.fromJson(e)}},i=0;i<o.length;i++)n[o[i]]=dojo[o[i]];return n};