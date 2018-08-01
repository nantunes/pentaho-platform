define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/data/util/simpleFetch","dojo/io/script","dojo/_base/connect","dojo/date/stamp","dojo/AdapterRegistry"],function(t,e,r,a,i,n,s,o){
var u=e("dojox.data.FlickrStore",null,{constructor:function(t){t&&t.label&&(this.label=t.label),
t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1)},_storeRef:"_S",
label:"title",urlPreventCache:!0,_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojox.data.FlickrStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojox.data.FlickrStore: a function was passed an attribute argument that was not an attribute name string");
},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(t,e,r){
var a=this.getValues(t,e);return a&&a.length>0?a[0]:r},getAttributes:function(t){
return["title","description","author","datePublished","dateTaken","imageUrl","imageUrlSmall","imageUrlMedium","tags","link"];
},hasAttribute:function(t,e){var r=this.getValue(t,e);return r||""===r||r===!1?!0:!1;
},isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){},getLabel:function(t){
return this.getValue(t,this.label)},getLabelAttributes:function(t){return[this.label];
},containsValue:function(t,e,r){for(var a=this.getValues(t,e),i=0;i<a.length;i++)if(a[i]===r)return!0;
return!1},getValues:function(e,r){this._assertIsItem(e),this._assertIsAttribute(r);
var a=t.hitch(this,"_unescapeHtml"),i=t.hitch(s,"fromISOString");switch(r){case"title":
return[a(e.title)];case"author":return[a(e.author)];case"datePublished":return[i(e.published)];
case"dateTaken":return[i(e.date_taken)];case"imageUrlSmall":return[e.media.m.replace(/_m\./,"_s.")];
case"imageUrl":return[e.media.m.replace(/_m\./,".")];case"imageUrlMedium":return[e.media.m];
case"link":return[e.link];case"tags":return e.tags.split(" ");case"description":return[a(e.description)];
default:return[]}},isItem:function(t){return t&&t[this._storeRef]===this?!0:!1},close:function(t){},
_fetchItems:function(e,a,s){var o=e.query=e.query||{},u={format:"json",tagmode:"any"
};r.forEach(["tags","tagmode","lang","id","ids"],function(t){o[t]&&(u[t]=o[t])}),
u.id=o.id||o.userid||o.groupid,o.userids&&(u.ids=o.userids);var c=null,l={url:dojox.data.FlickrStore.urlRegistry.match(e),
preventCache:this.urlPreventCache,content:u},d=t.hitch(this,function(t){c&&n.disconnect(c),
a(this._processFlickrData(t),e)});c=n.connect("jsonFlickrFeed",d);var h=i.get(l);h.addErrback(function(t){
n.disconnect(c),s(t,e)})},_processFlickrData:function(t){var e=[];if(t.items){e=t.items;
for(var r=0;r<t.items.length;r++){var a=t.items[r];a[this._storeRef]=this}}return e;
},_unescapeHtml:function(t){return t.replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"').replace(/&#39;/gm,"'");
}});t.extend(u,a);var c="http://api.flickr.com/services/feeds/",l=u.urlRegistry=new o(!0);
if(l.register("group pool",function(t){return!!t.query.groupid},c+"groups_pool.gne"),
l.register("default",function(t){return!0},c+"photos_public.gne"),!d)var d=function(t){};
return u});