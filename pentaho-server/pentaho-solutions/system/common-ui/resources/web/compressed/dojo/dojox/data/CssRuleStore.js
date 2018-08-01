define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/sniff","dojo/data/util/sorter","dojo/data/util/filter","./css"],function(e,t,s,n,r,i,l,a,o){
return t("dojox.data.CssRuleStore",null,{_storeRef:"_S",_labelAttribute:"selector",
_cache:null,_browserMap:null,_cName:"dojox.data.CssRuleStore",constructor:function(t){
function s(){try{for(n.context=o.determineContext(n.context),n.gatherHandle&&(clearInterval(n.gatherHandle),
n.gatherHandle=null);n._waiting.length;){var e=n._waiting.pop();o.rules.forEach(e.forFunc,null,n.context),
e.finishFunc()}}catch(t){}}t&&e.mixin(this,t),this._cache={},this._allItems=null,
this._waiting=[],this.gatherHandle=null;var n=this;this.gatherHandle=setInterval(s,250);
},setContext:function(e){e&&(this.close(),this.context=o.determineContext(e))},getFeatures:function(){
return{"dojo.data.api.Read":!0}},isItem:function(e){return e&&e[this._storeRef]==this?!0:!1;
},hasAttribute:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t);var n=this.getAttributes(e);
return-1!=s.indexOf(n,t)?!0:!1},getAttributes:function(e){this._assertIsItem(e);var t=["selector","classes","rule","style","cssText","styleSheet","parentStyleSheet","parentStyleSheetHref"],s=e.rule.style;
if(s){var n;for(n in s)t.push("style."+n)}return t},getValue:function(e,t,s){var n=this.getValues(e,t);
return n&&n.length>0?n[0]:s},getValues:function(t,s){this._assertIsItem(t),this._assertIsAttribute(s);
var n=null;if("selector"===s)n=t.rule.selectorText,n&&e.isString(n)&&(n=n.split(","));else if("classes"===s)n=t.classes;else if("rule"===s)n=t.rule.rule;else if("style"===s)n=t.rule.style;else if("cssText"===s)i("ie")?t.rule.style&&(n=t.rule.style.cssText,
n&&(n="{ "+n.toLowerCase()+" }")):(n=t.rule.cssText,n&&(n=n.substring(n.indexOf("{"),n.length)));else if("styleSheet"===s)n=t.rule.styleSheet;else if("parentStyleSheet"===s)n=t.rule.parentStyleSheet;else if("parentStyleSheetHref"===s)t.href&&(n=t.href);else if(0===s.indexOf("style.")){
var r=s.substring(s.indexOf("."),s.length);n=t.rule.style[r]}else n=[];return void 0!==n&&(e.isArray(n)||(n=[n])),
n},getLabel:function(e){return this._assertIsItem(e),this.getValue(e,this._labelAttribute);
},getLabelAttributes:function(e){return[this._labelAttribute]},containsValue:function(e,t,s){
var n=void 0;return"string"==typeof s&&(n=a.patternToRegExp(s,!1)),this._containsValue(e,t,s,n);
},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item);
},fetch:function(e){e=e||{},e.store||(e.store=this);e.scope||r.global;return this._pending&&this._pending.length>0?this._pending.push({
request:e,fetch:!0}):(this._pending=[{request:e,fetch:!0}],this._fetch(e)),e},_fetch:function(t){
var s=t.scope||r.global;if(null===this._allItems){this._allItems={};try{this.gatherHandle?this._waiting.push({
forFunc:e.hitch(this,this._handleRule),finishFunc:e.hitch(this,this._handleReturn)
}):(o.rules.forEach(e.hitch(this,this._handleRule),null,this.context),this._handleReturn());
}catch(n){t.onError&&t.onError.call(s,n,t)}}else this._handleReturn()},_handleRule:function(e,t,s){
for(var n=e.selectorText,r=n.split(" "),i=[],l=0;l<r.length;l++){var a=r[l],o=a.indexOf(".");
if(a&&a.length>0&&-1!==o){var h=a.indexOf(",")||a.indexOf("[");a=a.substring(o,-1!==h&&h>o?h:a.length),
i.push(a)}}var u={};u.rule=e,u.styleSheet=t,u.href=s,u.classes=i,u[this._storeRef]=this,
this._allItems[n]||(this._allItems[n]=[]),this._allItems[n].push(u)},_handleReturn:function(){
var e=[],t=[],s=null;for(var n in this._allItems){s=this._allItems[n];for(var r in s)t.push(s[r]);
}for(var i;this._pending.length;)i=this._pending.pop(),i.request._items=t,e.push(i);
for(;e.length;)i=e.pop(),this._handleFetchReturn(i.request)},_handleFetchReturn:function(t){
var s,i=t.scope||r.global,o=[],h="all";if(t.query&&(h=n.toJson(t.query)),this._cache[h])o=this._cache[h];else if(t.query){
for(s in t._items){var u,c,f=t._items[s],_=t.queryOptions?t.queryOptions.ignoreCase:!1,g={};
for(u in t.query)c=t.query[u],"string"==typeof c&&(g[u]=a.patternToRegExp(c,_));var d=!0;
for(u in t.query)c=t.query[u],this._containsValue(f,u,c,g[u])||(d=!1);d&&o.push(f);
}this._cache[h]=o}else for(s in t._items)o.push(t._items[s]);var p=o.length;t.sort&&o.sort(l.createSortFunction(t.sort,this));
var m=0,y=o.length;t.start>0&&t.start<o.length&&(m=t.start),t.count&&t.count&&(y=t.count);
var I=m+y;if(I>o.length&&(I=o.length),o=o.slice(m,I),t.onBegin&&t.onBegin.call(i,p,t),
t.onItem){if(e.isArray(o)){for(s=0;s<o.length;s++)t.onItem.call(i,o[s],t);t.onComplete&&t.onComplete.call(i,null,t);
}}else t.onComplete&&t.onComplete.call(i,o,t);return t},close:function(){this._cache={},
this._allItems=null},_assertIsItem:function(e){if(!this.isItem(e))throw new Error(this._cName+": Invalid item argument.");
},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error(this._cName+": Invalid attribute argument.");
},_containsValue:function(t,n,r,i){return s.some(this.getValues(t,n),function(t){
if(null!==t&&!e.isObject(t)&&i){if(t.toString().match(i))return!0}else if(r===t)return!0;
return!1})}})});