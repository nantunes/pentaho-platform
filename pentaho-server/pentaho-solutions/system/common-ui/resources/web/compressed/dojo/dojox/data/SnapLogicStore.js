define(["dojo","dojox","dojo/io/script","dojo/data/util/sorter"],function(t,e){return t.declare("dojox.data.SnapLogicStore",null,{
Parts:{DATA:"data",COUNT:"count"},url:"",constructor:function(t){t.url&&(this.url=t.url),
this._parameters=t.parameters},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.SnapLogicStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.SnapLogicStore: a function was passed an attribute argument that was not an attribute name string");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(e,a,r){
this._assertIsItem(e),this._assertIsAttribute(a);var n=t.indexOf(e.attributes,a);return-1!==n?e.values[n]:r;
},getAttributes:function(t){return this._assertIsItem(t),t.attributes},hasAttribute:function(t,e){
this._assertIsItem(t),this._assertIsAttribute(e);for(var a=0;a<t.attributes.length;++a)if(e==t.attributes[a])return!0;
return!1},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},
getLabel:function(t){return void 0},getLabelAttributes:function(t){return null},containsValue:function(t,e,a){
return this.getValue(t,e)===a},getValues:function(e,a){this._assertIsItem(e),this._assertIsAttribute(a);
var r=t.indexOf(e.attributes,a);return-1!==r?[e.values[r]]:[]},isItem:function(t){
return t&&t._store===this?!0:!1},close:function(t){},_fetchHandler:function(e){var a=e.scope||t.global;
if(e.onBegin&&e.onBegin.call(a,e._countResponse[0],e),e.onItem||e.onComplete){var r=e._dataResponse;
if(!r.length)return void e.onError.call(a,new Error("dojox.data.SnapLogicStore: invalid response of length 0"),e);
if("record count"!=e.query){for(var n=r.shift(),o=[],s=0;s<r.length&&!e._aborted;++s)o.push({
attributes:n,values:r[s],_store:this});e.sort&&!e._aborted&&o.sort(t.data.util.sorter.createSortFunction(e.sort,self));
}else o=[{attributes:["count"],values:r,_store:this}];if(e.onItem){for(var s=0;s<o.length&&!e._aborted;++s)e.onItem.call(a,o[s],e);
o=null}e.onComplete&&!e._aborted&&e.onComplete.call(a,o,e)}},_partHandler:function(t,e,a){
if(a instanceof Error)e==this.Parts.DATA?t._dataHandle=null:t._countHandle=null,t._aborted=!0,
t.onError&&t.onError.call(t.scope,a,t);else{if(t._aborted)return;e==this.Parts.DATA?t._dataResponse=a:t._countResponse=a,
t._dataHandle&&null===t._dataResponse||t._countHandle&&null===t._countResponse||this._fetchHandler(t);
}},fetch:function(e){if(e._countResponse=null,e._dataResponse=null,e._aborted=!1,
e.abort=function(){e._aborted||(e._aborted=!0,e._dataHandle&&e._dataHandle.cancel&&e._dataHandle.cancel(),
e._countHandle&&e._countHandle.cancel&&e._countHandle.cancel())},e.onItem||e.onComplete){
var a=this._parameters||{};if(e.start){if(e.start<0)throw new Error("dojox.data.SnapLogicStore: request start value must be 0 or greater");
a["sn.start"]=e.start+1}if(e.count){if(e.count<0)throw new Error("dojox.data.SnapLogicStore: request count value 0 or greater");
a["sn.limit"]=e.count}a["sn.content_type"]="application/javascript";var r={url:this.url,
content:a,timeout:6e4,callbackParamName:"sn.stream_header",handle:t.hitch(this,"_partHandler",e,this.Parts.DATA)
};e._dataHandle=t.io.script.get(r)}if(e.onBegin){var a={};a["sn.count"]="records",
a["sn.content_type"]="application/javascript";var r={url:this.url,content:a,timeout:6e4,
callbackParamName:"sn.stream_header",handle:t.hitch(this,"_partHandler",e,this.Parts.COUNT)
};e._countHandle=t.io.script.get(r)}return e}})});