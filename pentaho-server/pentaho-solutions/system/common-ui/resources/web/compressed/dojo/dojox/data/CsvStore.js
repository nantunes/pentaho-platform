define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/xhr","dojo/_base/kernel","dojo/data/util/filter","dojo/data/util/simpleFetch"],function(t,e,r,i,s,a){
var n=e("dojox.data.CsvStore",null,{constructor:function(t){this._attributes=[],this._attributeIndexes={},
this._dataArray=[],this._arrayOfAllItems=[],this._loadFinished=!1,t.url&&(this.url=t.url),
this._csvData=t.data,t.label?this.label=t.label:""===this.label&&(this.label=void 0),
this._storeProp="_csvStore",this._idProp="_csvId",this._features={"dojo.data.api.Read":!0,
"dojo.data.api.Identity":!0},this._loadInProgress=!1,this._queuedFetches=[],this.identifier=t.identifier,
""===this.identifier?delete this.identifier:this._idMap={},"separator"in t&&(this.separator=t.separator),
"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1)},url:"",label:"",
identifier:"",separator:",",urlPreventCache:!1,_assertIsItem:function(t){if(!this.isItem(t))throw new Error(this.declaredClass+": a function was passed an item argument that was not an item");
},_getIndex:function(t){var e=this.getIdentity(t);return this.identifier&&(e=this._idMap[e]),
e},getValue:function(t,e,r){this._assertIsItem(t);var i=r;if("string"!=typeof e)throw new Error(this.declaredClass+": a function was passed an attribute argument that was not a string");
var s=this._attributeIndexes[e];if(null!=s){var a=this._dataArray[this._getIndex(t)];
i=a[s]||r}return i},getValues:function(t,e){var r=this.getValue(t,e);return r?[r]:[];
},getAttributes:function(t){this._assertIsItem(t);for(var e=[],r=this._dataArray[this._getIndex(t)],i=0;i<r.length;i++)""!==r[i]&&e.push(this._attributes[i]);
return e},hasAttribute:function(t,e){if(this._assertIsItem(t),"string"==typeof e){
var r=this._attributeIndexes[e],i=this._dataArray[this._getIndex(t)];return"undefined"!=typeof r&&r<i.length&&""!==i[r];
}throw new Error(this.declaredClass+": a function was passed an attribute argument that was not a string");
},containsValue:function(t,e,r){var i=void 0;return"string"==typeof r&&(i=s.patternToRegExp(r,!1)),
this._containsValue(t,e,r,i)},_containsValue:function(t,e,r,i){for(var s=this.getValues(t,e),a=0;a<s.length;++a){
var n=s[a];if("string"==typeof n&&i)return null!==n.match(i);if(r===n)return!0}return!1;
},isItem:function(t){if(t&&t[this._storeProp]===this){var e=t[this._idProp];if(this.identifier){
var r=this._dataArray[this._idMap[e]];if(r)return!0}else if(e>=0&&e<this._dataArray.length)return!0;
}return!1},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},
getFeatures:function(){return this._features},getLabel:function(t){return this.label&&this.isItem(t)?this.getValue(t,this.label):void 0;
},getLabelAttributes:function(t){return this.label?[this.label]:null},_fetchItems:function(t,e,i){
var a=this,n=function(t,r){var i=null;if(t.query){var n,h;i=[];var l=t.queryOptions?t.queryOptions.ignoreCase:!1,o={};
for(n in t.query)h=t.query[n],"string"==typeof h&&(o[n]=s.patternToRegExp(h,l));for(var u=0;u<r.length;++u){
var d=!0,c=r[u];for(n in t.query)h=t.query[n],a._containsValue(c,n,h,o[n])||(d=!1);
d&&i.push(c)}}else i=r.slice(0,r.length);e(i,t)};if(this._loadFinished)n(t,this._arrayOfAllItems);else if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({
args:t,filter:n});else{this._loadInProgress=!0;var h={url:a.url,handleAs:"text",preventCache:a.urlPreventCache
},l=r.get(h);l.addCallback(function(e){try{a._processData(e),n(t,a._arrayOfAllItems),
a._handleQueuedFetches()}catch(r){i(r,t)}}),l.addErrback(function(e){if(a._loadInProgress=!1,
!i)throw e;i(e,t)});var o=null;t.abort&&(o=t.abort),t.abort=function(){var e=l;e&&-1===e.fired&&(e.cancel(),
e=null),o&&o.call(t)}}else if(this._csvData)try{this._processData(this._csvData),
this._csvData=null,n(t,this._arrayOfAllItems)}catch(u){i(u,t)}else{var d=new Error(this.declaredClass+": No CSV source data was provided as either URL or String data input.");
if(!i)throw d;i(d,t)}},close:function(t){},_getArrayOfArraysFromCsvFileContents:function(e){
if(t.isString(e)){var r,i=new RegExp("^\\s+","g"),s=new RegExp("\\s+$","g"),a=new RegExp('""',"g"),n=[],h=this._splitLines(e);
for(r=0;r<h.length;++r){var l=h[r];if(l.length>0){for(var o=l.split(this.separator),u=0;u<o.length;){
var d=o[u],c=d.replace(i,""),f=c.replace(s,""),_=f.charAt(0),g=f.charAt(f.length-1),I=f.charAt(f.length-2),p=f.charAt(f.length-3);
if(2===f.length&&'""'==f)o[u]="";else if('"'==_&&('"'!=g||'"'==g&&'"'==I&&'"'!=p)){
if(u+1===o.length)return;var v=o[u+1];o[u]=c+this.separator+v,o.splice(u+1,1)}else'"'==_&&'"'==g&&(f=f.slice(1,f.length-1),
f=f.replace(a,'"')),o[u]=f,u+=1}n.push(o)}}for(this._attributes=n.shift(),r=0;r<this._attributes.length;r++)this._attributeIndexes[this._attributes[r]]=r;
this._dataArray=n}},_splitLines:function(t){var e,r=[],i="",s=!1;for(e=0;e<t.length;e++){
var a=t.charAt(e);switch(a){case'"':s=!s,i+=a;break;case"\r":s?i+=a:(r.push(i),i="",
e<t.length-1&&"\n"==t.charAt(e+1)&&e++);break;case"\n":s?i+=a:(r.push(i),i="");break;
default:i+=a}}return""!==i&&r.push(i),r},_processData:function(t){if(this._getArrayOfArraysFromCsvFileContents(t),
this._arrayOfAllItems=[],this.identifier&&void 0===this._attributeIndexes[this.identifier])throw new Error(this.declaredClass+": Identity specified is not a column header in the data set.");
for(var e=0;e<this._dataArray.length;e++){var r=e;if(this.identifier){var i=this._dataArray[e];
r=i[this._attributeIndexes[this.identifier]],this._idMap[r]=e}this._arrayOfAllItems.push(this._createItemFromIdentity(r));
}this._loadFinished=!0,this._loadInProgress=!1},_createItemFromIdentity:function(t){
var e={};return e[this._storeProp]=this,e[this._idProp]=t,e},getIdentity:function(t){
return this.isItem(t)?t[this._idProp]:null},fetchItemByIdentity:function(t){var e,s=t.scope?t.scope:i.global;
if(this._loadFinished)e=this._createItemFromIdentity(t.identity),this.isItem(e)||(e=null),
t.onItem&&t.onItem.call(s,e);else{var a=this;if(""!==this.url)if(this._loadInProgress)this._queuedFetches.push({
args:t});else{this._loadInProgress=!0;var n={url:a.url,handleAs:"text"},h=r.get(n);
h.addCallback(function(e){try{a._processData(e);var r=a._createItemFromIdentity(t.identity);
a.isItem(r)||(r=null),t.onItem&&t.onItem.call(s,r),a._handleQueuedFetches()}catch(i){
t.onError&&t.onError.call(s,i)}}),h.addErrback(function(e){this._loadInProgress=!1,
t.onError&&t.onError.call(s,e)})}else if(this._csvData)try{a._processData(a._csvData),
a._csvData=null,e=a._createItemFromIdentity(t.identity),a.isItem(e)||(e=null),t.onItem&&t.onItem.call(s,e);
}catch(l){t.onError&&t.onError.call(s,l)}}},getIdentityAttributes:function(t){return this.identifier?[this.identifier]:null;
},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var t=0;t<this._queuedFetches.length;t++){
var e=this._queuedFetches[t],r=e.filter,i=e.args;r?r(i,this._arrayOfAllItems):this.fetchItemByIdentity(e.args);
}this._queuedFetches=[]}}});return t.extend(n,a),n});