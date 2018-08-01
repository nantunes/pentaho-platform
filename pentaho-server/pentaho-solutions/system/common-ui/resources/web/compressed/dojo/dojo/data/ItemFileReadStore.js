define(["../_base/kernel","../_base/lang","../_base/declare","../_base/array","../_base/xhr","../Evented","./util/filter","./util/simpleFetch","../date/stamp"],function(e,t,r,s,i,a,l,n,o){
var h=r("dojo.data.ItemFileReadStore",[a],{constructor:function(e){this._arrayOfAllItems=[],
this._arrayOfTopLevelItems=[],this._loadFinished=!1,this._jsonFileUrl=e.url,this._ccUrl=e.url,
this.url=e.url,this._jsonData=e.data,this.data=null,this._datatypeMap=e.typeMap||{},
this._datatypeMap.Date||(this._datatypeMap.Date={type:Date,deserialize:function(e){
return o.fromISOString(e)}}),this._features={"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0
},this._itemsByIdentity=null,this._storeRefPropName="_S",this._itemNumPropName="_0",
this._rootItemPropName="_RI",this._reverseRefMap="_RRM",this._loadInProgress=!1,this._queuedFetches=[],
void 0!==e.urlPreventCache&&(this.urlPreventCache=e.urlPreventCache?!0:!1),void 0!==e.hierarchical&&(this.hierarchical=e.hierarchical?!0:!1),
e.clearOnClose&&(this.clearOnClose=!0),"failOk"in e&&(this.failOk=e.failOk?!0:!1);
},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:!1,urlPreventCache:!1,failOk:!1,
hierarchical:!0,_assertIsItem:function(e){if(!this.isItem(e))throw new Error(this.declaredClass+": Invalid item argument.");
},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error(this.declaredClass+": Invalid attribute argument.");
},getValue:function(e,t,r){var s=this.getValues(e,t);return s.length>0?s[0]:r},getValues:function(e,t){
return this._assertIsItem(e),this._assertIsAttribute(t),(e[t]||[]).slice(0)},getAttributes:function(e){
this._assertIsItem(e);var t=[];for(var r in e)r!==this._storeRefPropName&&r!==this._itemNumPropName&&r!==this._rootItemPropName&&r!==this._reverseRefMap&&t.push(r);
return t},hasAttribute:function(e,t){return this._assertIsItem(e),this._assertIsAttribute(t),
t in e},containsValue:function(e,t,r){var s=void 0;return"string"==typeof r&&(s=l.patternToRegExp(r,!1)),
this._containsValue(e,t,r,s)},_containsValue:function(e,r,i,a){return s.some(this.getValues(e,r),function(e){
if(null!==e&&!t.isObject(e)&&a){if(e.toString().match(a))return!0}else if(i===e)return!0;
})},isItem:function(e){return e&&e[this._storeRefPropName]===this&&this._arrayOfAllItems[e[this._itemNumPropName]]===e?!0:!1;
},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item);
},getFeatures:function(){return this._features},getLabel:function(e){return this._labelAttr&&this.isItem(e)?this.getValue(e,this._labelAttr):void 0;
},getLabelAttributes:function(e){return this._labelAttr?[this._labelAttr]:null},filter:function(e,t,r){
var s,i,a=[];if(e.query){var n,o=e.queryOptions?e.queryOptions.ignoreCase:!1,h={};
for(i in e.query)n=e.query[i],"string"==typeof n?h[i]=l.patternToRegExp(n,o):n instanceof RegExp&&(h[i]=n);
for(s=0;s<t.length;++s){var d=!0,u=t[s];if(null===u)d=!1;else for(i in e.query)n=e.query[i],
this._containsValue(u,i,n,h[i])||(d=!1);d&&a.push(u)}r(a,e)}else{for(s=0;s<t.length;++s){
var _=t[s];null!==_&&a.push(_)}r(a,e)}},_fetchItems:function(r,s,a){var l=this;if(this._loadFinished)this.filter(r,this._getItemsArray(r.queryOptions),s);else if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),
this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,
this._ccUrl=this.url),null!=this.data&&(this._jsonData=this.data,this.data=null),
this._jsonFileUrl)if(this._loadInProgress)this._queuedFetches.push({args:r,filter:t.hitch(l,"filter"),
findCallback:t.hitch(l,s)});else{this._loadInProgress=!0;var n={url:l._jsonFileUrl,
handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk
},o=i.get(n);o.addCallback(function(e){try{l._getItemsFromLoadedData(e),l._loadFinished=!0,
l._loadInProgress=!1,l.filter(r,l._getItemsArray(r.queryOptions),s),l._handleQueuedFetches();
}catch(t){l._loadFinished=!0,l._loadInProgress=!1,a(t,r)}}),o.addErrback(function(e){
l._loadInProgress=!1,a(e,r)});var h=null;r.abort&&(h=r.abort),r.abort=function(){
var e=o;e&&-1===e.fired&&(e.cancel(),e=null),h&&h.call(r)}}else if(this._jsonData)try{
this._loadFinished=!0,this._getItemsFromLoadedData(this._jsonData),this._jsonData=null,
l.filter(r,this._getItemsArray(r.queryOptions),s)}catch(d){a(d,r)}else a(new Error(this.declaredClass+": No JSON source data was provided as either URL or a nested Javascript object."),r);
},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var e=0;e<this._queuedFetches.length;e++){
var t=this._queuedFetches[e],r=t.args,s=t.filter,i=t.findCallback;s?s(r,this._getItemsArray(r.queryOptions),i):this.fetchItemByIdentity(r);
}this._queuedFetches=[]}},_getItemsArray:function(e){return e&&e.deep?this._arrayOfAllItems:this._arrayOfTopLevelItems;
},close:function(e){this.clearOnClose&&this._loadFinished&&!this._loadInProgress&&(""!=this._jsonFileUrl&&null!=this._jsonFileUrl||""!=this.url&&null!=this.url||null!=this.data||console.debug(this.declaredClass+": WARNING!  Data reload  information has not been provided.  Please set 'url' or 'data' to the appropriate value before the next fetch"),
this._arrayOfAllItems=[],this._arrayOfTopLevelItems=[],this._loadFinished=!1,this._itemsByIdentity=null,
this._loadInProgress=!1,this._queuedFetches=[])},_getItemsFromLoadedData:function(e){
function r(e){return null!==e&&"object"==typeof e&&(!t.isArray(e)||i)&&!t.isFunction(e)&&(e.constructor==Object||t.isArray(e))&&"undefined"==typeof e._reference&&"undefined"==typeof e._type&&"undefined"==typeof e._value&&a.hierarchical;
}function s(e){a._arrayOfAllItems.push(e);for(var i in e){var l=e[i];if(l)if(t.isArray(l))for(var n=l,o=0;o<n.length;++o){
var h=n[o];r(h)&&s(h)}else r(l)&&s(l)}}var i=!1,a=this;this._labelAttr=e.label;var l,n;
for(this._arrayOfAllItems=[],this._arrayOfTopLevelItems=e.items,l=0;l<this._arrayOfTopLevelItems.length;++l)n=this._arrayOfTopLevelItems[l],
t.isArray(n)&&(i=!0),s(n),n[this._rootItemPropName]=!0;var o,h={};for(l=0;l<this._arrayOfAllItems.length;++l){
n=this._arrayOfAllItems[l];for(o in n){if(o!==this._rootItemPropName){var d=n[o];null!==d?t.isArray(d)||(n[o]=[d]):n[o]=[null];
}h[o]=o}}for(;h[this._storeRefPropName];)this._storeRefPropName+="_";for(;h[this._itemNumPropName];)this._itemNumPropName+="_";
for(;h[this._reverseRefMap];)this._reverseRefMap+="_";var u,_=e.identifier;if(_)for(this._itemsByIdentity={},
this._features["dojo.data.api.Identity"]=_,l=0;l<this._arrayOfAllItems.length;++l){
n=this._arrayOfAllItems[l],u=n[_];var c=u[0];if(Object.hasOwnProperty.call(this._itemsByIdentity,c)){
if(this._jsonFileUrl)throw new Error(this.declaredClass+":  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+_+"].  Value collided: ["+c+"]");
if(this._jsonData)throw new Error(this.declaredClass+":  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+_+"].  Value collided: ["+c+"]");
}else this._itemsByIdentity[c]=n}else this._features["dojo.data.api.Identity"]=Number;
for(l=0;l<this._arrayOfAllItems.length;++l)n=this._arrayOfAllItems[l],n[this._storeRefPropName]=this,
n[this._itemNumPropName]=l;for(l=0;l<this._arrayOfAllItems.length;++l){n=this._arrayOfAllItems[l];
for(o in n){u=n[o];for(var f=0;f<u.length;++f)if(d=u[f],null!==d&&"object"==typeof d){
if("_type"in d&&"_value"in d){var m=d._type,p=this._datatypeMap[m];if(!p)throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+m+"'");
if(t.isFunction(p))u[f]=new p(d._value);else{if(!t.isFunction(p.deserialize))throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");
u[f]=p.deserialize(d._value)}}if(d._reference){var y=d._reference;if(t.isObject(y))for(var I=0;I<this._arrayOfAllItems.length;++I){
var g=this._arrayOfAllItems[I],v=!0;for(var j in y)g[j]!=y[j]&&(v=!1);v&&(u[f]=g);
}else u[f]=this._getItemByIdentity(y);if(this.referenceIntegrity){var F=u[f];this.isItem(F)&&this._addReferenceToMap(F,n,o);
}}else this.isItem(d)&&this.referenceIntegrity&&this._addReferenceToMap(d,n,o)}}}
},_addReferenceToMap:function(e,t,r){},getIdentity:function(e){var t=this._features["dojo.data.api.Identity"];
if(t===Number)return e[this._itemNumPropName];var r=e[t];return r?r[0]:null},fetchItemByIdentity:function(t){
var r,s;if(this._loadFinished)r=this._getItemByIdentity(t.identity),t.onItem&&(s=t.scope?t.scope:e.global,
t.onItem.call(s,r));else{var a=this;if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),
this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,
this._ccUrl=this.url),null!=this.data&&null==this._jsonData&&(this._jsonData=this.data,
this.data=null),this._jsonFileUrl)if(this._loadInProgress)this._queuedFetches.push({
args:t});else{this._loadInProgress=!0;var l={url:a._jsonFileUrl,handleAs:"json-comment-optional",
preventCache:this.urlPreventCache,failOk:this.failOk},n=i.get(l);n.addCallback(function(s){
var i=t.scope?t.scope:e.global;try{a._getItemsFromLoadedData(s),a._loadFinished=!0,
a._loadInProgress=!1,r=a._getItemByIdentity(t.identity),t.onItem&&t.onItem.call(i,r),
a._handleQueuedFetches()}catch(l){a._loadInProgress=!1,t.onError&&t.onError.call(i,l);
}}),n.addErrback(function(r){if(a._loadInProgress=!1,t.onError){var s=t.scope?t.scope:e.global;
t.onError.call(s,r)}})}else this._jsonData&&(a._getItemsFromLoadedData(a._jsonData),
a._jsonData=null,a._loadFinished=!0,r=a._getItemByIdentity(t.identity),t.onItem&&(s=t.scope?t.scope:e.global,
t.onItem.call(s,r)))}},_getItemByIdentity:function(e){var t=null;return this._itemsByIdentity?Object.hasOwnProperty.call(this._itemsByIdentity,e)&&(t=this._itemsByIdentity[e]):Object.hasOwnProperty.call(this._arrayOfAllItems,e)&&(t=this._arrayOfAllItems[e]),
void 0===t&&(t=null),t},getIdentityAttributes:function(e){var t=this._features["dojo.data.api.Identity"];
return t===Number?null:[t]},_forceLoad:function(){var t=this;if(this._jsonFileUrl!==this._ccUrl?(e.deprecated(this.declaredClass+": ","To change the url, set the url property of the store, not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0"),
this._ccUrl=this._jsonFileUrl,this.url=this._jsonFileUrl):this.url!==this._ccUrl&&(this._jsonFileUrl=this.url,
this._ccUrl=this.url),null!=this.data&&(this._jsonData=this.data,this.data=null),
this._jsonFileUrl){var r={url:this._jsonFileUrl,handleAs:"json-comment-optional",
preventCache:this.urlPreventCache,failOk:this.failOk,sync:!0},s=i.get(r);s.addCallback(function(e){
try{if(t._loadInProgress===!0||t._loadFinished){if(t._loadInProgress)throw new Error(this.declaredClass+":  Unable to perform a synchronous load, an async load is in progress.");
}else t._getItemsFromLoadedData(e),t._loadFinished=!0}catch(r){throw console.log(r),
r}}),s.addErrback(function(e){throw e})}else this._jsonData&&(t._getItemsFromLoadedData(t._jsonData),
t._jsonData=null,t._loadFinished=!0)}});return t.extend(h,n),h});