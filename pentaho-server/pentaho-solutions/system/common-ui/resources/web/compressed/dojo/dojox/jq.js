dojo.provide("dojox.jq"),dojo.require("dojo.NodeList-traverse"),dojo.require("dojo.NodeList-manipulate"),
dojo.require("dojo.io.script"),function(){function t(t,e){return t+="",t=t.replace(/<\s*(\w+)([^\/\>]*)\/\s*>/g,function(t,e,o){
return-1==p.indexOf("|"+e+"|")?"<"+e+o+"></"+e+">":t}),dojo._toDom(t,e)}function e(t){
var e=t.indexOf("-");return-1!=e&&(0==e&&(t=t.substring(1)),t=t.replace(/-(\w)/g,function(t,e){
return e.toUpperCase()})),t}function o(t,e){if(t==e)return t;var n={};for(var r in e)void 0!==n[r]&&n[r]==e[r]||void 0===e[r]||t==e[r]||(dojo.isObject(t[r])&&dojo.isObject(e[r])?dojo.isArray(e[r])?t[r]=e[r]:t[r]=o(t[r],e[r]):t[r]=e[r]);
if(dojo.isIE&&e){var i=e.toString;"function"==typeof i&&i!=t.toString&&i!=n.toString&&"\nfunction toString() {\n    [native code]\n}\n"!=i&&(t.toString=e.toString);
}return t}function n(t){var e=t.contentDocument||t.name&&t.document&&document.getElementsByTagName("iframe")[t.name].contentWindow&&document.getElementsByTagName("iframe")[t.name].contentWindow.document||t.name&&document.frames[t.name]&&document.frames[t.name].document||null;
return e}function r(t,e,o,n){if(n){var r={};return r[o]=n,t.forEach(function(t){dojo[e](t,r);
}),t}return Math.abs(Math.round(dojo[e](t[0])[o]))}function i(t,e,o,n,r){var i=!1;
(i="none"==t.style.display)&&(t.style.display="block");var a=dojo.getComputedStyle(t),s=Math.abs(Math.round(dojo._getContentBox(t,a)[e])),u=o?Math.abs(Math.round(dojo._getPadExtents(t,a)[e])):0,d=n?Math.abs(Math.round(dojo._getBorderExtents(t,a)[e])):0,c=r?Math.abs(Math.round(dojo._getMarginExtents(t,a)[e])):0;
return i&&(t.style.display="none"),u+s+d+c}function a(t){t=t.split("$$")[0];var e=t.indexOf(".");
return-1!=e&&(t=t.substring(0,e)),t}function s(t,e){return 0==e.indexOf("ajax")?dojo.subscribe(L[e],function(o,n){
var r=new g.Event(e);-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(e)?d(t,[r,o.ioArgs.xhr,o.ioArgs.args]):"ajaxError"==e?d(t,[r,o.ioArgs.xhr,o.ioArgs.args,n]):d(t,[r]);
}):dojo.connect(t,"on"+e,function(e){d(t,arguments)})}function u(t,e){t=t||[],t=[].concat(t);
var o=t[0];return o&&o.preventDefault||(o=e&&e.preventDefault?e:new g.Event(e),t.unshift(o)),
t}function d(t,e,o){F=!0,e=e||w,o=o,9==t.nodeType&&(t=t.documentElement);var n=t.getAttribute(k);
if(n){var r,i=e[0],s=i.type,u=a(s),d=N[n][u];if(o&&(r=o.apply(t,e)),r!==!1)for(var c in d)if("_connectId"!=c&&(!i._isStrict&&0==c.indexOf(s)||i._isStrict&&c==s)){
i[dojo._scopeName+"callbackId"]=c;var f=d[c];"undefined"!=typeof f.data?i.data=f.data:i.data=null,
(r=f.fn.apply(i.target,e))!==!1||i._isFake||dojo.stopEvent(i),i.result=r}return r;
}}function c(t,e){var o=e.getAttribute(k),n=N[o];if(n){var r=r=C++;e.setAttribute(k,r);
var i=N[r]={};for(var a in n){var u=i[a]={_connectId:s(e,a)},d=n[a];for(var c in d)u[c]={
fn:d[c].fn,data:d[c].data}}}}function f(t,e,o,n,r){var i=t[e];if(i){var a=-1!=o.indexOf("."),s=!1;
if(n)delete i[n];else if(a||r){if(a)if("."==o.charAt(0))for(var u in i)u.indexOf(o)==u.length-o.length&&delete i[u];else delete i[o];else for(var u in i)if(-1!=u.indexOf("$$")&&i[u].fn==r){
delete i[u];break}}else s=!0;var d=!0;for(var u in i)if("_connectId"!=u){d=!1;break;
}(s||d)&&(-1!=e.indexOf("ajax")?dojo.unsubscribe(i._connectId):dojo.disconnect(i._connectId),
delete t[e])}}function l(t){return dojo.isString(t)&&(t="slow"==t?700:"fast"==t?300:500),
t}function h(t){for(var e in t)if(e.indexOf("callback")==e.length-8)return e;return null;
}dojo.config.ioPublish=!0;var p="|img|meta|hr|br|input|",j=dojo.global.$,v=dojo.global.jQuery,g=dojo.global.$=dojo.global.jQuery=function(){
var e=arguments[0];if(!e)return g._wrap([],null,g);if(dojo.isString(e)){if("<"!=e.charAt(0)){
var o=dojo._NodeListCtor;dojo._NodeListCtor=g;var n=arguments[1];n&&n._is$?n=n[0]:dojo.isString(n)&&(n=dojo.query(n)[0]);
var r=dojo.query.call(this,e,n);return dojo._NodeListCtor=o,r}if(e=t(e),11!=e.nodeType)return g._wrap([e],null,g);
e=e.childNodes}else{if(dojo.isFunction(e))return g.ready(e),g;if(e==document||e==window)return g._wrap([e],null,g);
if(dojo.isArray(e)){for(var i=[],a=0;a<e.length;a++)-1==dojo.indexOf(i,e[a])&&i.push(e[a]);
return g._wrap(e,null,g)}if("nodeType"in e)return g._wrap([e],null,g)}return g._wrap(dojo._toArray(e),null,g);
},m=dojo.NodeList.prototype,y=g.fn=g.prototype=dojo.delegate(m);g._wrap=dojo.NodeList._wrap;
var b=/^H\d/i,x=dojo.query.pseudos;dojo.mixin(x,{has:function(t,e){return function(t){
return g(e,t).length}},visible:function(t,e){return function(t){return"hidden"!=dojo.style(t,"visible")&&"none"!=dojo.style(t,"display");
}},hidden:function(t,e){return function(t){return"hidden"==t.type||"hidden"==dojo.style(t,"visible")||"none"==dojo.style(t,"display");
}},selected:function(t,e){return function(t){return t.selected}},checked:function(t,e){
return function(t){return"INPUT"==t.nodeName.toUpperCase()&&t.checked}},disabled:function(t,e){
return function(t){return t.getAttribute("disabled")}},enabled:function(t,e){return function(t){
return!t.getAttribute("disabled")}},input:function(t,e){return function(t){var e=t.nodeName.toUpperCase();
return"INPUT"==e||"SELECT"==e||"TEXTAREA"==e||"BUTTON"==e}},button:function(t,e){
return function(t){return"INPUT"==t.nodeName.toUpperCase()&&"button"==t.type||"BUTTON"==t.nodeName.toUpperCase();
}},header:function(t,e){return function(t){return t.nodeName.match(b)}}});var _={};
dojo.forEach(["text","password","radio","checkbox","submit","image","reset","file"],function(t){
_[t]=function(e,o){return function(e){return"INPUT"==e.nodeName.toUpperCase()&&e.type==t;
}}}),dojo.mixin(x,_),g.browser={mozilla:dojo.isMoz,msie:dojo.isIE,opera:dojo.isOpera,
safari:dojo.isSafari},g.browser.version=dojo.isIE||dojo.isMoz||dojo.isOpera||dojo.isSafari||dojo.isWebKit,
g.ready=g.fn.ready=function(t){return dojo.addOnLoad(dojo.hitch(null,t,g)),this},
y._is$=!0,y.size=function(){return this.length},g.prop=function(t,e){return dojo.isFunction(e)?e.call(t):e;
},g.className={add:dojo.addClass,remove:dojo.removeClass,has:dojo.hasClass},g.makeArray=function(t){
return"undefined"==typeof t?[]:!t.length||dojo.isString(t)||"location"in t?[t]:dojo._toArray(t);
},g.merge=function(t,e){var o=[t.length,0];return o=o.concat(e),t.splice.apply(t,o),
t},g.each=function(t,e){if(dojo.isArrayLike(t))for(var o=0;o<t.length&&e.call(t[o],o,t[o])!==!1;o++);else if(dojo.isObject(t))for(var n in t)if(e.call(t[n],n,t[n])===!1)break;
return this},y.each=function(t){return g.each.call(this,this,t)},y.eq=function(){
var t=g();return dojo.forEach(arguments,function(e){this[e]&&t.push(this[e])},this),
t},y.get=function(t){return t||0==t?this[t]:this},y.index=function(t){return t._is$&&(t=t[0]),
this.indexOf(t)};var T=[],E=0,S=dojo._scopeName+"DataId",O=function(t){var e=t.getAttribute(S);
e||(e=E++,t.setAttribute(S,e))},A=function(t){var e={};if(1==t.nodeType){var o=O(t);
e=T[o],e||(e=T[o]={})}return e};g.data=function(t,e,o){var n=null;if("events"==e){
n=N[t.getAttribute(k)];var r=!0;if(n)for(var i in n){r=!1;break}return r?null:n}var a=A(t);
return"undefined"!=typeof o?a[e]=o:n=a[e],o?this:n},g.removeData=function(t,e){var o=A(t);
if(delete o[e],1==t.nodeType){var n=!0;for(var r in o){n=!1;break}n&&t.removeAttribute(S);
}return this},y.data=function(t,e){var o=null;return this.forEach(function(n){o=g.data(n,t,e);
}),e?this:o},y.removeData=function(t){return this.forEach(function(e){g.removeData(e,t);
}),this},y.extend=function(){var t=[this];return t=t.concat(arguments),g.extend.apply(g,t);
},g.extend=function(){for(var t,e=arguments,n=0;n<e.length;n++){var r=e[n];r&&dojo.isObject(r)&&(t?o(t,r):t=r);
}return t},g.noConflict=function(t){var e=g;return dojo.global.$=j,t&&(dojo.global.jQuery=v),
e},y.attr=function(t,e){if(1==arguments.length&&dojo.isString(arguments[0])){var o=this[0];
if(!o)return null;var n=arguments[0],r=dojo.attr(o,n),i=o[n];return n in o&&!dojo.isObject(i)&&"href"!=t?i:r||i;
}if(dojo.isObject(t)){for(var a in t)this.attr(a,t[a]);return this}var s=dojo.isFunction(e);
return this.forEach(function(o,n){var r=o[t];t in o&&!dojo.isObject(r)&&"href"!=t?o[t]=s?e.call(o,n):e:1==o.nodeType&&dojo.attr(o,t,s?e.call(o,n):e);
}),this},y.removeAttr=function(t){return this.forEach(function(e,o){var n=e[t];t in e&&!dojo.isObject(n)&&"href"!=t?delete e[t]:1==e.nodeType&&("class"==t?e.removeAttribute(t):dojo.removeAttr(e,t));
}),this},y.toggleClass=function(t,e){var o=arguments.length>1;return this.forEach(function(n){
dojo.toggleClass(n,t,o?e:!dojo.hasClass(n,t))}),this},y.toggle=function(){var t=arguments;
if(arguments.length>1&&dojo.isFunction(arguments[0])){var e=0,o=function(){t[e].apply(this,arguments);
e+=1,e>t.length-1&&(e=0)};return this.bind("click",o)}var n=1==arguments.length?arguments[0]:void 0;
return this.forEach(function(e){var o="undefined"==typeof n?"none"==dojo.style(e,"display"):n,r=o?"show":"hide",i=g(e);
i[r].apply(i,t)}),this},y.hasClass=function(t){return this.some(function(e){return dojo.hasClass(e,t);
})},y.html=y.innerHTML,dojo.forEach(["filter","slice"],function(t){y[t]=function(){
var e;if(dojo.isFunction(arguments[0])){var o=arguments[0];arguments[0]=function(t,e){
return o.call(t,t,e)}}if("filter"==t&&dojo.isString(arguments[0]))var e=this._filterQueryResult(this,arguments[0]);else{
var n=dojo._NodeListCtor;dojo._NodeListCtor=y,e=g(m[t].apply(this,arguments)),dojo._NodeListCtor=n;
}return e._stash(this)}}),y.map=function(t){return this._buildArrayFromCallback(t);
},g.map=function(t,e){return y._buildArrayFromCallback.call(t,e)},g.inArray=function(t,e){
return dojo.indexOf(e,t)},y.is=function(t){return t?!!this.filter(t).length:!1},y.not=function(){
var t=g.apply(g,arguments),e=g(m.filter.call(this,function(e){return-1==t.indexOf(e);
}));return e._stash(this)},y.add=function(){return this.concat.apply(this,arguments);
},y.contents=function(){var t=[];return this.forEach(function(e){if("IFRAME"==e.nodeName.toUpperCase()){
var o=n(e);o&&t.push(o)}else for(var r=e.childNodes,i=0;i<r.length;i++)t.push(r[i]);
}),this._wrap(t)._stash(this)},y.find=function(t){var e=[];return this.forEach(function(o){
1==o.nodeType&&(e=e.concat(dojo._toArray(g(t,o))))}),this._getUniqueAsNodeList(e)._stash(this);
},y.andSelf=function(){return this.add(this._parent)},y.remove=function(t){var e=t?this._filterQueryResult(this,t):this;
return e.removeData(),e.forEach(function(t){t.parentNode.removeChild(t)}),this},g.css=function(t,o,n){
o=e(o);var r=n?dojo.style(t,o,n):dojo.style(t,o);return r},y.css=function(t,o){if(dojo.isString(t))return t=e(t),
2==arguments.length?(dojo.isString(o)||"zIndex"==t||(o+="px"),this.forEach(function(e){
1==e.nodeType&&dojo.style(e,t,o)}),this):(o=dojo.style(this[0],t),dojo.isString(o)||"zIndex"==t||(o+="px"),
o);for(var n in t)this.css(n,t[n]);return this},y.height=function(t){return r(this,"contentBox","h",t);
},y.width=function(t){return r(this,"contentBox","w",t)},y.innerHeight=function(){
return i(this[0],"h",!0)},y.innerWidth=function(){return i(this[0],"w",!0)},y.outerHeight=function(t){
return i(this[0],"h",!0,!0,t)},y.outerWidth=function(t){return i(this[0],"w",!0,!0,t);
};var w,N=[],C=1,k=dojo._scopeName+"eventid";g.Event=function(t){return this==g?new g.Event(t):("string"==typeof t?this.type=t.replace(/!/,""):dojo.mixin(this,t),
this.timeStamp=(new Date).getTime(),this._isFake=!0,void(this._isStrict=-1!=this.type.indexOf("!")));
};var I=g.Event.prototype={preventDefault:function(){this.isDefaultPrevented=this._true;
},stopPropagation:function(){this.isPropagationStopped=this._true},stopImmediatePropagation:function(){
this.isPropagationStopped=this._true,this.isImmediatePropagationStopped=this._true;
},_true:function(){return!0},_false:function(){return!1}};dojo.mixin(I,{isPropagationStopped:I._false,
isImmediatePropagationStopped:I._false,isDefaultPrevented:I._false});var F=!1;y.triggerHandler=function(t,e,o){
var n=this[0];return n&&3!=n.nodeType&&8!=n.nodeType?(e=u(e,t),d(n,e,o)):void 0},
y.trigger=function(t,e,o){e=u(e,t);var n=e[0],t=a(n.type);w=e,currentExtraFunc=o;var r=null,i=!n.target;
return this.forEach(function(a){if(3!=a.nodeType&&8!=a.nodeType){if(9==a.nodeType&&(a=a.documentElement),
n._isFake&&(n.currentTarget=a,i&&(n.target=a)),o){var s=e.slice(1);r=o.apply(a,r=s.concat(r));
}if(r!==!1){if(F=!1,a[t])try{r=a[t]()}catch(u){}else if(a["on"+t])try{r=a["on"+t]();
}catch(u){}F||(r=d(a,e));var c=a.parentNode;r===!1||n.isImmediatePropagationStopped()||n.isPropagationStopped()||!c||1!=c.nodeType||g(c).trigger(t,e,o);
}}}),w=null,currentExtraFunc=null,this};var P=0;y.bind=function(t,e,o){return t=t.split(" "),
o||(o=e,e=null),this.forEach(function(n){if(3!=n.nodeType&&8!=n.nodeType){9==n.nodeType&&(n=n.documentElement);
var r=n.getAttribute(k);r||(r=C++,n.setAttribute(k,r),N[r]={});for(var i=0;i<t.length;i++){
var u=t[i],d=a(u);d==u&&(u=d+"$$"+P++);var c=N[r];c[d]||(c[d]={_connectId:s(n,d)}),
c[d][u]={fn:o,data:e}}}}),this},y.unbind=function(t,e){var o=t?t[dojo._scopeName+"callbackId"]:null;
return t=t&&t.type?t.type:t,t=t?t.split(" "):t,this.forEach(function(n){if(3!=n.nodeType&&8!=n.nodeType){
9==n.nodeType&&(n=n.documentElement);var r=n.getAttribute(k);if(r){var i=N[r];if(i){
var s=t;if(!s){s=[];for(var u in i)s.push(u)}for(var d=0;d<s.length;d++){var c=s[d],l=a(c);
if("."==c.charAt(0))for(var u in i)f(i,u,c,o,e);else f(i,l,c,o,e)}}}}}),this},y.one=function(t,e){
var o=function(){return g(this).unbind(t,arguments.callee),e.apply(this,arguments);
};return this.bind(t,o)},y._cloneNode=function(t){var e=t.cloneNode(!0);if(1==t.nodeType)for(var o,n=dojo.query("["+k+"]",e),r=0;o=n[r];r++){
var i=dojo.query("["+k+'="'+o.getAttribute(k)+'"]',t)[0];i&&c(i,o)}return e},dojo.getObject("$.event.global",!0),
dojo.forEach(["blur","focus","dblclick","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit","ajaxStart","ajaxSend","ajaxSuccess","ajaxError","ajaxComplete","ajaxStop"],function(t){
y[t]=function(e){return e?this.bind(t,e):this.trigger(t),this}}),y.hide=function(t,e){
return t=l(t),this.forEach(function(o){var n=o.style,r=dojo.getComputedStyle(o);"none"!=r.display&&(n.overflow="hidden",
n.display="block",t?dojo.anim(o,{width:0,height:0,opacity:0},t,null,function(){return n.width="",
n.height="",n.display="none",e&&e.call(o)}):(dojo.style(o,"display","none"),e&&e.call(o)));
}),this},y.show=function(t,e){return t=l(t),this.forEach(function(o){var n=o.style,r=dojo.getComputedStyle(o);
if("none"==r.display)if(t){var i=parseFloat(n.width),a=parseFloat(n.height);if(!i||!a){
n.display="block";var s=dojo.marginBox(o);i=s.w,a=s.h}n.width=0,n.height=0,n.overflow="hidden",
dojo.attr(o,"opacity",0),n.display="block",dojo.anim(o,{width:i,height:a,opacity:1
},t,null,e?dojo.hitch(o,e):void 0)}else dojo.style(o,"display","block"),e&&e.call(o);
}),this},g.ajaxSettings={},g.ajaxSetup=function(t){dojo.mixin(g.ajaxSettings,t)};var L={
ajaxStart:"/dojo/io/start",ajaxSend:"/dojo/io/send",ajaxSuccess:"/dojo/io/load",ajaxError:"/dojo/io/error",
ajaxComplete:"/dojo/io/done",ajaxStop:"/dojo/io/stop"};for(var M in L)0==M.indexOf("ajax")&&!function(t){
y[t]=function(e){return this.forEach(function(o){dojo.subscribe(L[t],function(){var n=new g.Event(t),r=arguments[0]&&arguments[0].ioArgs,i=r&&r.xhr,a=r&&r.args,s=arguments[1];
return-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(t)?e.call(o,n,i,a):"ajaxError"==t?e.call(o,n,i,a,s):e.call(o,n);
})}),this}}(M);var q=dojo._xhrObj;dojo._xhrObj=function(t){var e=q.apply(dojo,arguments);
return t&&t.beforeSend&&t.beforeSend(e)===!1?!1:e},g.ajax=function(t){var e=dojo.delegate(g.ajaxSettings);
for(var o in t)if("data"==o&&dojo.isObject(t[o])&&dojo.isObject(e.data))for(var n in t[o])e.data[n]=t[o][n];else e[o]=t[o];
t=e;var r=t.url;if("async"in t&&(t.sync=!t.async),t.global===!1&&(t.ioPublish=!1),
t.data){var i=t.data;if(dojo.isString(i))t.content=dojo.queryToObject(i);else{for(var o in i)dojo.isFunction(i[o])&&(i[o]=i[o]());
t.content=i}}var a=t.dataType;"dataType"in t?("script"==a?a="javascript":"html"==a&&(a="text"),
t.handleAs=a):(a=t.handleAs="text",t.guessedType=!0),"cache"in t?t.preventCache=!t.cache:("script"==t.dataType||"jsonp"==t.dataType)&&(t.preventCache=!0),
t.error&&(t._jqueryError=t.error,delete t.error),t.handle=function(e,o){var n="success";
if(e instanceof Error)n="timeout"==e.dojoType?"timeout":"error",t._jqueryError&&t._jqueryError(o.xhr,n,e);else{
var r=o.args.guessedType&&o.xhr&&o.xhr.responseXML;r&&(e=r),t.success&&t.success(e,n,o.xhr);
}return t.complete&&t.complete(e,n,o.xhr),e};var s="jsonp"==a;if("javascript"==a){
var u=r.indexOf(":"),d=r.indexOf("/");if(u>0&&d>u){var c=r.indexOf("/",d+2);-1==c&&(c=r.length),
(location.protocol!=r.substring(0,u+1)||location.hostname!=r.substring(d+2,c))&&(s=!0);
}}if(s){if("jsonp"==a){var f=t.jsonp;if(!f){var l=t.url.split("?")[1];if(l&&(l=dojo.queryToObject(l))&&(f=h(l))){
var p=new RegExp("([&\\?])?"+f+"=?");t.url=t.url.replace(p+"=?")}f||(f=h(t.content),
f&&delete t.content[f])}t.jsonp=f||"callback"}var j=dojo.io.script.get(t);return j;
}var j=dojo.xhr(t.type||"GET",t);return j.ioArgs.xhr===!1?!1:j.ioArgs.xhr},g.getpost=function(t,e,o,n,r){
var i={url:e,type:t};return o&&(dojo.isFunction(o)&&!n?i.complete=o:i.data=o),n&&(dojo.isString(n)&&!r?r=n:i.complete=n),
r&&(i.dataType=r),g.ajax(i)},g.get=dojo.hitch(g,"getpost","GET"),g.post=dojo.hitch(g,"getpost","POST"),
g.getJSON=function(t,e,o){return g.getpost("GET",t,e,o,"json")},g.getScript=function(t,e){
return g.ajax({url:t,success:e,dataType:"script"})},y.load=function(t,e,o){var n=this[0];
if(!n||!n.nodeType||9==n.nodeType)return dojo.addOnLoad(t),this;var r=t.split(/\s+/);
t=r[0];var i=r[1],a=o||e,s=dojo.hitch(this,function(t,e,o){var n=t.match(/\<\s*body[^>]+>.*<\/body\s*>/i);
n&&(t=n);var r=dojo._toDom(t);if(i){var s=g(dojo.create("div"));s.append(r),r=s.find(i);
}else r=g(11==r.nodeType?r.childNodes:r);this.html(r),a&&setTimeout(dojo.hitch(this,function(){
this.forEach(function(n){a.call(n,t,e,o)})}),10)});o?o=s:e=s;var u="GET";return e&&dojo.isObject(e)&&(u="POST"),
g.getpost(u,t,e,o,"html"),this};var U="file|submit|image|reset|button|";y.serialize=function(){
var t="",e=this.map(function(t){if("FORM"==t.nodeName.toUpperCase())return dojo.formToQuery(t);
var e=(t.type||"").toLowerCase();if(-1==U.indexOf(e)){var o=dojo.fieldToObject(t);
if(t.name&&null!=o){var n={};return n[t.name]=o,dojo.objectToQuery(n)}}});return t+e.join("&");
},g.param=function(t){return t._is$&&t.serialize?t.serialize():dojo.isArray(t)?dojo.map(t,function(t){
return g.param(t)}).join("&"):dojo.objectToQuery(t)},g.isFunction=function(){var t=dojo.isFunction.apply(dojo,arguments);
return t&&(t="object"!=typeof arguments[0]),t}}();