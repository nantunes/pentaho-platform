define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/query","dojo/dom-construct","dojo/io/script"],function(t,e,r,o,a,n){
t.experimental("dojox.data.GoogleSearchStore");var s=r("dojox.data.GoogleSearchStore",null,{
constructor:function(t){t&&(t.label&&(this.label=t.label),t.key&&(this._key=t.key),
t.lang&&(this._lang=t.lang),"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1)),
this._id=dojox.data.GoogleSearchStore.prototype._id++},_id:0,_requestCount:0,_googleUrl:"http://ajax.googleapis.com/ajax/services/search/",
_storeRef:"_S",_attributes:["unescapedUrl","url","visibleUrl","cacheUrl","title","titleNoFormatting","content","estimatedResultCount"],
_aggregatedAttributes:{estimatedResultCount:"cursor.estimatedResultCount"},label:"titleNoFormatting",
_type:"web",urlPreventCache:!0,_queryAttrs:{text:"q"},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.GoogleSearchStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.GoogleSearchStore: a function was passed an attribute argument that was not an attribute name string");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(t,e,r){
var o=this.getValues(t,e);return o&&o.length>0?o[0]:r},getAttributes:function(t){
return this._attributes},hasAttribute:function(t,e){return this.getValue(t,e)?!0:!1;
},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},getLabel:function(t){
return this.getValue(t,this.label)},getLabelAttributes:function(t){return[this.label];
},containsValue:function(t,e,r){for(var o=this.getValues(t,e),a=0;a<o.length;a++)if(o[a]===r)return!0;
return!1},getValues:function(t,r){this._assertIsItem(t),this._assertIsAttribute(r);
var o=t[r];return e.isArray(o)?o:void 0!==o?[o]:[]},isItem:function(t){return t&&t[this._storeRef]===this?!0:!1;
},close:function(t){},_format:function(t,e){return t},fetch:function(e){function r(t){
v++,_.content.context=_.content.start=t.start;var r=n.get(_);y.push(r.ioArgs.id),
r.addErrback(function(t){e.onError&&e.onError.call(s,t,e)})}e=e||{};var s=e.scope||t.global;
if(!e.query&&e.onError)return void e.onError.call(s,new Error(this.declaredClass+": A query must be specified."));
var i={};for(var l in this._queryAttrs)i[l]=e.query[l];e={query:i,onComplete:e.onComplete,
onError:e.onError,onItem:e.onItem,onBegin:e.onBegin,start:e.start,count:e.count};var u,c=8,g="GoogleSearchStoreCallback_"+this._id+"_"+ ++this._requestCount,h=this._createContent(i,g,e);
("undefined"==typeof e.start||null===e.start)&&(e.start=0),e.count||(e.count=c),u={
start:e.start-e.start%c};var d=this,b=this._googleUrl+this._type,_={url:b,preventCache:this.urlPreventCache,
content:h},f=[],m=0,p=!1,S=e.start-1,v=0,y=[],A=function(n,i){if(y.length>0&&o("#"+y.splice(0,1)).forEach(a.destroy),
!p){var l=d._getItems(i),u=i?i.cursor:null;if(l){for(var h=0;h<l.length&&h+n<e.count+e.start;h++)d._processItem(l[h],i),
f[h+n]=l[h];if(m++,1==m){var b=u?u.pages:null,_=b?Number(b[b.length-1].start):0;if(e.onBegin){
var A=u?u.estimatedResultCount:l.length,I=A?Math.min(A,_+l.length):_+l.length;e.onBegin.call(s,I,e);
}for(var j=e.start-e.start%c+c,C=1;b&&b[C]&&!(Number(b[C].start)>=e.start+e.count);)Number(b[C].start)>=j&&r({
start:b[C].start}),C++}if(e.onItem&&f[S+1])do S++,e.onItem.call(s,f[S],e);while(f[S+1]&&S<e.start+e.count);
m==v&&(p=!0,t.global[g]=null,e.onItem?e.onComplete.call(s,null,e):(f=f.slice(e.start,e.start+e.count),
e.onComplete.call(s,f,e)))}}},I=[],j=u.start-1;t.global[g]=function(r,o,a,n){try{
if(200!=a)return e.onError&&e.onError.call(s,new Error("Response from Google was: "+a),e),
void(t.global[g]=function(){});if(r==j+1){if(A(Number(r),o),j+=c,I.length>0)for(I.sort(d._getSort());I.length>0&&I[0].start==j+1;)A(Number(I[0].start),I[0].data),
I.splice(0,1),j+=c}else I.push({start:r,data:o})}catch(i){e.onError.call(s,i,e)}},
r(u)},_getSort:function(){return function(t,e){return t.start<e.start?-1:e.start<t.start?1:0;
}},_processItem:function(t,r){t[this._storeRef]=this;for(var o in this._aggregatedAttributes)t[o]=e.getObject(this._aggregatedAttributes[o],!1,r);
},_getItems:function(t){return t.results||t},_createContent:function(t,e,r){var o={
v:"1.0",rsz:"large",callback:e,key:this._key,hl:this._lang};for(var a in this._queryAttrs)o[this._queryAttrs[a]]=t[a];
return o}}),i=r("dojox.data.GoogleWebSearchStore",s,{}),l=r("dojox.data.GoogleBlogSearchStore",s,{
_type:"blogs",_attributes:["blogUrl","postUrl","title","titleNoFormatting","content","author","publishedDate"],
_aggregatedAttributes:{}}),u=r("dojox.data.GoogleLocalSearchStore",s,{_type:"local",
_attributes:["title","titleNoFormatting","url","lat","lng","streetAddress","city","region","country","phoneNumbers","ddUrl","ddUrlToHere","ddUrlFromHere","staticMapUrl","viewport"],
_aggregatedAttributes:{viewport:"viewport"},_queryAttrs:{text:"q",centerLatLong:"sll",
searchSpan:"sspn"}}),c=r("dojox.data.GoogleVideoSearchStore",s,{_type:"video",_attributes:["title","titleNoFormatting","content","url","published","publisher","duration","tbWidth","tbHeight","tbUrl","playUrl"],
_aggregatedAttributes:{}}),g=r("dojox.data.GoogleNewsSearchStore",s,{_type:"news",
_attributes:["title","titleNoFormatting","content","url","unescapedUrl","publisher","clusterUrl","location","publishedDate","relatedStories"],
_aggregatedAttributes:{}}),h=r("dojox.data.GoogleBookSearchStore",s,{_type:"books",
_attributes:["title","titleNoFormatting","authors","url","unescapedUrl","bookId","pageCount","publishedYear"],
_aggregatedAttributes:{}}),d=r("dojox.data.GoogleImageSearchStore",s,{_type:"images",
_attributes:["title","titleNoFormatting","visibleUrl","url","unescapedUrl","originalContextUrl","width","height","tbWidth","tbHeight","tbUrl","content","contentNoFormatting"],
_aggregatedAttributes:{}});return{Search:s,ImageSearch:d,BookSearch:h,NewsSearch:g,
VideoSearch:c,LocalSearch:u,BlogSearch:l,WebSearch:i}});