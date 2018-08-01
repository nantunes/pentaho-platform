define(["dojo","dojox","dojo/data/util/sorter"],function(t,e){return e.data.ASYNC_MODE=0,
e.data.SYNC_MODE=1,t.declare("dojox.data.CdfStore",null,{identity:"jsxid",url:"",
xmlStr:"",data:null,label:"",mode:e.data.ASYNC_MODE,constructor:function(t){t&&(this.url=t.url,
this.xmlStr=t.xmlStr||t.str,t.data&&(this.xmlStr=this._makeXmlString(t.data)),this.identity=t.identity||this.identity,
this.label=t.label||this.label,this.mode=void 0!==t.mode?t.mode:this.mode),this._modifiedItems={},
this.byId=this.fetchItemByIdentity},getValue:function(t,e,i){return t.getAttribute(e)||i;
},getValues:function(e,i){var r=this.getValue(e,i,[]);return t.isArray(r)?r:[r]},
getAttributes:function(t){return t.getAttributeNames()},hasAttribute:function(t,e){
return void 0!==this.getValue(t,e)},hasProperty:function(t,e){return this.hasAttribute(t,e);
},containsValue:function(t,e,i){for(var r=this.getValues(t,e),n=0;n<r.length;n++)if(null!==r[n])if("string"==typeof i){
if(r[n].toString&&r[n].toString()===i)return!0}else if(r[n]===i)return!0;return!1;
},isItem:function(t){return t.getClass&&t.getClass().equals(jsx3.xml.Entity.jsxclass)?!0:!1;
},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},getFeatures:function(){
return{"dojo.data.api.Read":!0,"dojo.data.api.Write":!0,"dojo.data.api.Identity":!0
}},getLabel:function(t){if(""!==this.label&&this.isItem(t)){var e=this.getValue(t,this.label);
if(e)return e.toString()}return void 0},getLabelAttributes:function(t){return""!==this.label?[this.label]:null;
},fetch:function(i){i=i||{},i.store||(i.store=this),void 0!==i.mode&&(this.mode=i.mode);
var r=this,n=function(e){if(i.onError){var r=i.scope||t.global;i.onError.call(r,e,i);
}else console.error("cdfStore Error:",e)},o=function(e,n){n=n||i;var o=n.abort||null,s=!1,a=n.start?n.start:0,c=n.count&&n.count!==1/0?a+n.count:e.length;
n.abort=function(){s=!0,o&&o.call(n)};var d=n.scope||t.global;if(n.store||(n.store=r),
n.onBegin&&n.onBegin.call(d,e.length,n),n.sort&&e.sort(t.data.util.sorter.createSortFunction(n.sort,r)),
n.onItem)for(var u=a;u<e.length&&c>u;++u){var l=e[u];s||n.onItem.call(d,l,n)}return n.onComplete&&!s?(n.onItem||(e=e.slice(a,c),
n.byId&&(e=e[0])),n.onComplete.call(d,e,n)):(e=e.slice(a,c),n.byId&&(e=e[0])),e};if(!this.url&&!this.data&&!this.xmlStr)return n(new Error("No URL or data specified.")),
!1;var s=i||"*";if(this.mode==e.data.SYNC_MODE){var a=this._loadCDF();if(a instanceof Error)return i.onError?i.onError.call(i.scope||t.global,a,i):console.error("CdfStore Error:",a),
a;this.cdfDoc=a;var c=this._getItems(this.cdfDoc,s);return c=c&&c.length>0?o(c,i):o([],i);
}var d=this._loadCDF();return d.addCallbacks(t.hitch(this,function(t){var e=this._getItems(this.cdfDoc,s);
e&&e.length>0?o(e,i):o([],i)}),t.hitch(this,function(t){n(t,i)})),d},_loadCDF:function(){
var i=new t.Deferred;if(this.cdfDoc)return this.mode==e.data.SYNC_MODE?this.cdfDoc:(setTimeout(t.hitch(this,function(){
i.callback(this.cdfDoc)}),0),i);if(this.cdfDoc=jsx3.xml.CDF.Document.newDocument(),
this.cdfDoc.subscribe("response",this,function(t){i.callback(this.cdfDoc)}),this.cdfDoc.subscribe("error",this,function(t){
i.errback(t)}),this.cdfDoc.setAsync(!this.mode),this.url)this.cdfDoc.load(this.url);else if(this.xmlStr&&(this.cdfDoc.loadXML(this.xmlStr),
this.cdfDoc.getError().code))return new Error(this.cdfDoc.getError().description);
return this.mode==e.data.SYNC_MODE?this.cdfDoc:i},_getItems:function(t,e){for(var i=t.selectNodes(e.query,!1,1),r=[];i.hasNext();)r.push(i.next());
return r},close:function(t){},newItem:function(t,e){t=t||{},t.tagName&&("record"!=t.tagName&&console.warn("Only record inserts are supported at this time"),
delete t.tagName),t.jsxid=t.jsxid||this.cdfDoc.getKey(),this.isItem(e)&&(e=this.getIdentity(e));
var i=this.cdfDoc.insertRecord(t,e);return this._makeDirty(i),i},deleteItem:function(t){
return this.cdfDoc.deleteRecord(this.getIdentity(t)),this._makeDirty(t),!0},setValue:function(t,e,i){
return this._makeDirty(t),t.setAttribute(e,i),!0},setValues:function(t,e,i){return this._makeDirty(t),
console.warn("cdfStore.setValues only partially implemented."),t.setAttribute(e,i);
},unsetAttribute:function(t,e){return this._makeDirty(t),t.removeAttribute(e),!0},
revert:function(){return delete this.cdfDoc,this._modifiedItems={},!0},isDirty:function(t){
if(t)return!!this._modifiedItems[this.getIdentity(t)];var e=!1;for(var i in this._modifiedItems){
e=!0;break}return e},_makeDirty:function(t){var e=this.getIdentity(t);this._modifiedItems[e]=t;
},_makeXmlString:function(e){var i=function(e,r){var n,o="";if(t.isArray(e))for(var s=0;s<e.length;s++)o+=i(e[s],r);else if(t.isObject(e)){
o+="<"+r+" ";for(n in e)t.isObject(e[n])||(o+=n+'="'+e[n]+'" ');o+=">";for(n in e)t.isObject(e[n])&&(o+=i(e[n],n));
o+="</"+r+">"}return o};return i(e,"data")},getIdentity:function(t){return this.getValue(t,this.identity);
},getIdentityAttributes:function(t){return[this.identity]},fetchItemByIdentity:function(i){
if(t.isString(i)){var r=i;i={query:"//record[@jsxid='"+r+"']",mode:e.data.SYNC_MODE
}}else i&&(i.query="//record[@jsxid='"+i.identity+"']"),i.mode||(i.mode=this.mode);
return i.byId=!0,this.fetch(i)},byId:function(t){}})});