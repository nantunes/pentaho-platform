define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/io/script","dojo/data/util/simpleFetch","dojo/date/stamp"],function(t,e,a,r,s,i){
var n=e("dojox.data.PicasaStore",null,{constructor:function(t){t&&t.label&&(this.label=t.label),
t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1),t&&"maxResults"in t&&(this.maxResults=parseInt(t.maxResults),
this.maxResults||(this.maxResults=20))},_picasaUrl:"http://picasaweb.google.com/data/feed/api/all",
_storeRef:"_S",label:"title",urlPreventCache:!1,maxResults:20,_assertIsItem:function(t){
if(!this.isItem(t))throw new Error("dojox.data.PicasaStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.PicasaStore: a function was passed an attribute argument that was not an attribute name string");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(t,e,a){
var r=this.getValues(t,e);return r&&r.length>0?r[0]:a},getAttributes:function(t){
return["id","published","updated","category","title$type","title","summary$type","summary","rights$type","rights","link","author","gphoto$id","gphoto$name","location","imageUrlSmall","imageUrlMedium","imageUrl","datePublished","dateTaken","description"];
},hasAttribute:function(t,e){return this.getValue(t,e)?!0:!1},isItemLoaded:function(t){
return this.isItem(t)},loadItem:function(t){},getLabel:function(t){return this.getValue(t,this.label);
},getLabelAttributes:function(t){return[this.label]},containsValue:function(t,e,a){
for(var r=this.getValues(t,e),s=0;s<r.length;s++)if(r[s]===a)return!0;return!1},getValues:function(t,e){
return this._assertIsItem(t),this._assertIsAttribute(e),"title"===e?[this._unescapeHtml(t.title)]:"author"===e?[this._unescapeHtml(t.author[0].name)]:"datePublished"===e?[dateAtamp.fromISOString(t.published)]:"dateTaken"===e?[i.fromISOString(t.published)]:"updated"===e?[i.fromISOString(t.updated)]:"imageUrlSmall"===e?[t.media.thumbnail[1].url]:"imageUrl"===e?[t.content$src]:"imageUrlMedium"===e?[t.media.thumbnail[2].url]:"link"===e?[t.link[1]]:"tags"===e?t.tags.split(" "):"description"===e?[this._unescapeHtml(t.summary)]:[];
},isItem:function(t){return t&&t[this._storeRef]===this?!0:!1},close:function(t){},
_fetchItems:function(t,e,s){t.query||(t.query={});var i={alt:"jsonm",pp:"1",psc:"G"
};i["start-index"]="1",t.query.start&&(i["start-index"]=t.query.start),t.query.tags&&(i.q=t.query.tags),
t.query.userid&&(i.uname=t.query.userid),t.query.userids&&(i.ids=t.query.userids),
t.query.lang&&(i.hl=t.query.lang),i["max-results"]=this.maxResults;var n=this,u=null,l=function(r){
null!==u&&a.disconnect(u),e(n._processPicasaData(r),t)},o={url:this._picasaUrl,preventCache:this.urlPreventCache,
content:i,callbackParamName:"callback",handle:l},c=r.get(o);c.addErrback(function(e){
a.disconnect(u),s(e,t)})},_processPicasaData:function(t){var e=[];if(t.feed){e=t.feed.entry;
for(var a=0;a<e.length;a++){var r=e[a];r[this._storeRef]=this}}return e},_unescapeHtml:function(t){
return t&&(t=t.replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"'),
t=t.replace(/&#39;/gm,"'")),t}});return t.extend(n,s),n});