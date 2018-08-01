define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr","dojo/_base/kernel","dojo/data/util/simpleFetch","dojo/data/util/filter"],function(declare,lang,xhr,kernel,simpleFetch,filterUtil){
var KeyValueStore=declare("dojox.data.KeyValueStore",null,{constructor:function(t){
t.url&&(this.url=t.url),this._keyValueString=t.data,this._keyValueVar=t.dataVar,this._keyAttribute="key",
this._valueAttribute="value",this._storeProp="_keyValueStore",this._features={"dojo.data.api.Read":!0,
"dojo.data.api.Identity":!0},this._loadInProgress=!1,this._queuedFetches=[],t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1);
},url:"",data:"",urlPreventCache:!1,_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.KeyValueStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t,e){if(!lang.isString(e))throw new Error("dojox.data.KeyValueStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string");
},getValue:function(t,e,r){this._assertIsItem(t),this._assertIsAttribute(t,e);var i;
return i=e==this._keyAttribute?t[this._keyAttribute]:t[this._valueAttribute],void 0===i&&(i=r),
i},getValues:function(t,e){var r=this.getValue(t,e);return r?[r]:[]},getAttributes:function(t){
return[this._keyAttribute,this._valueAttribute,t[this._keyAttribute]]},hasAttribute:function(t,e){
return this._assertIsItem(t),this._assertIsAttribute(t,e),e==this._keyAttribute||e==this._valueAttribute||e==t[this._keyAttribute];
},containsValue:function(t,e,r){var i=void 0;return"string"==typeof r&&(i=filterUtil.patternToRegExp(r,!1)),
this._containsValue(t,e,r,i)},_containsValue:function(t,e,r,i){for(var a=this.getValues(t,e),s=0;s<a.length;++s){
var n=a[s];if("string"==typeof n&&i)return null!==n.match(i);if(r===n)return!0}return!1;
},isItem:function(t){return t&&t[this._storeProp]===this?!0:!1},isItemLoaded:function(t){
return this.isItem(t)},loadItem:function(t){},getFeatures:function(){return this._features;
},close:function(t){},getLabel:function(t){return t[this._keyAttribute]},getLabelAttributes:function(t){
return[this._keyAttribute]},_fetchItems:function(keywordArgs,findCallback,errorCallback){
var self=this,filter=function(t,e){var r=null;if(t.query){r=[];var i=t.queryOptions?t.queryOptions.ignoreCase:!1,a={};
for(var s in t.query){var n=t.query[s];"string"==typeof n&&(a[s]=filterUtil.patternToRegExp(n,i));
}for(var l=0;l<e.length;++l){var u=!0,o=e[l];for(var s in t.query){var n=t.query[s];
self._containsValue(o,s,n,a[s])||(u=!1)}u&&r.push(o)}}else if(t.identity){r=[];var h;
for(var s in e)if(h=e[s],h[self._keyAttribute]==t.identity){r.push(h);break}}else e.length>0&&(r=e.slice(0,e.length));
findCallback(r,t)};if(this._loadFinished)filter(keywordArgs,this._arrayOfAllItems);else if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({
args:keywordArgs,filter:filter});else{this._loadInProgress=!0;var getArgs={url:self.url,
handleAs:"json-comment-filtered",preventCache:this.urlPreventCache},getHandler=xhr.get(getArgs);
getHandler.addCallback(function(t){self._processData(t),filter(keywordArgs,self._arrayOfAllItems),
self._handleQueuedFetches()}),getHandler.addErrback(function(t){throw self._loadInProgress=!1,
t})}else if(this._keyValueString)this._processData(eval(this._keyValueString)),this._keyValueString=null,
filter(keywordArgs,this._arrayOfAllItems);else{if(!this._keyValueVar)throw new Error("dojox.data.KeyValueStore: No source data was provided as either URL, String, or Javascript variable data input.");
this._processData(this._keyValueVar),this._keyValueVar=null,filter(keywordArgs,this._arrayOfAllItems);
}},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var t=0;t<this._queuedFetches.length;t++){
var e=this._queuedFetches[t],r=e.filter,i=e.args;r?r(i,this._arrayOfAllItems):this.fetchItemByIdentity(e.args);
}this._queuedFetches=[]}},_processData:function(t){this._arrayOfAllItems=[];for(var e=0;e<t.length;e++)this._arrayOfAllItems.push(this._createItem(t[e]));
this._loadFinished=!0,this._loadInProgress=!1},_createItem:function(t){var e={};e[this._storeProp]=this;
for(var r in t){e[this._keyAttribute]=r,e[this._valueAttribute]=t[r];break}return e;
},getIdentity:function(t){return this.isItem(t)?t[this._keyAttribute]:null},getIdentityAttributes:function(t){
return[this._keyAttribute]},fetchItemByIdentity:function(t){t.oldOnItem=t.onItem,
t.onItem=null,t.onComplete=this._finishFetchItemByIdentity,this.fetch(t)},_finishFetchItemByIdentity:function(t,e){
var r=e.scope||kernel.global;t.length?e.oldOnItem.call(r,t[0]):e.oldOnItem.call(r,null);
}});return lang.extend(KeyValueStore,simpleFetch),KeyValueStore});