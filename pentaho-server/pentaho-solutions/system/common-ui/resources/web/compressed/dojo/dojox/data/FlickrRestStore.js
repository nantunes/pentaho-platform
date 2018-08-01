define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/io/script","dojox/data/FlickrStore","dojo/_base/connect"],function(t,e,r,a,s,o){
var i=e("dojox.data.FlickrRestStore",s,{constructor:function(t){t&&(t.label&&(this.label=t.label),
t.apikey&&(this._apikey=t.apikey)),this._cache=[],this._prevRequests={},this._handlers={},
this._prevRequestRanges=[],this._maxPhotosPerUser={},this._id=i.prototype._id++},
_id:0,_requestCount:0,_flickrRestUrl:"http://www.flickr.com/services/rest/",_apikey:null,
_storeRef:"_S",_cache:null,_prevRequests:null,_handlers:null,_sortAttributes:{"date-posted":!0,
"date-taken":!0,interestingness:!0},_fetchItems:function(e,s,i){var n={};e.query?t.mixin(n,e.query):e.query=n={};
var u=[],l=[],h={format:"json",method:"flickr.photos.search",api_key:this._apikey,
extras:"owner_name,date_upload,date_taken"},c=!1;if(n.userid&&(c=!0,h.user_id=e.query.userid,
u.push("userid"+e.query.userid)),n.groupid&&(c=!0,h.group_id=n.groupid,u.push("groupid"+n.groupid)),
n.apikey)c=!0,h.api_key=e.query.apikey,l.push("api"+e.query.apikey);else{if(!h.api_key)throw Error("dojox.data.FlickrRestStore: An API key must be specified.");
c=!0,e.query.apikey=h.api_key,l.push("api"+h.api_key)}if(e._curCount=e.count,n.page)h.page=e.query.page,
l.push("page"+h.page);else if("start"in e&&null!==e.start){e.count||(e.count=20);var p=e.start%e.count,_=e.start,d=e.count;
if(0!==p){if(d/2>_)d=_+d,_=0;else{for(var g=20,m=2,f=g;f>0;f--)if(_%f===0&&_/f>=d){
m=f;break}d=_/m}e._realStart=e.start,e._realCount=e.count,e._curStart=_,e._curCount=d;
}else e._realStart=e._realCount=null,e._curStart=e.start,e._curCount=e.count;h.page=_/d+1,
l.push("page"+h.page)}e._curCount&&(h.per_page=e._curCount,l.push("count"+e._curCount)),
n.lang&&(h.lang=e.query.lang,u.push("lang"+e.lang)),n.setid&&(h.method="flickr.photosets.getPhotos",
h.photoset_id=e.query.setid,u.push("set"+e.query.setid)),n.tags&&(n.tags instanceof Array?h.tags=n.tags.join(","):h.tags=n.tags,
u.push("tags"+h.tags),!n.tag_mode||"any"!==n.tag_mode.toLowerCase()&&"all"!==n.tag_mode.toLowerCase()||(h.tag_mode=n.tag_mode)),
n.text&&(h.text=n.text,u.push("text:"+n.text)),n.sort&&n.sort.length>0?(n.sort[0].attribute||(n.sort[0].attribute="date-posted"),
this._sortAttributes[n.sort[0].attribute]&&(n.sort[0].descending?h.sort=n.sort[0].attribute+"-desc":h.sort=n.sort[0].attribute+"-asc")):h.sort="date-posted-asc",
u.push("sort:"+h.sort),u=u.join("."),l=l.length>0?"."+l.join("."):"";var k=u+l;e={
query:n,count:e._curCount,start:e._curStart,_realCount:e._realCount,_realStart:e._realStart,
onBegin:e.onBegin,onComplete:e.onComplete,onItem:e.onItem};var v={request:e,fetchHandler:s,
errorHandler:i};if(this._handlers[k])return void this._handlers[k].push(v);this._handlers[k]=[v];
var q=null,y={url:this._flickrRestUrl,preventCache:this.urlPreventCache,content:h,
callbackParamName:"jsoncallback"},b=t.hitch(this,function(t,e,r){var a=r.request.onBegin;
r.request.onBegin=null;var s,o=r.request;if("_realStart"in o&&null!=o._realStart&&(o.start=o._realStart,
o.count=o._realCount,o._realStart=o._realCount=null),a){var i=null;e&&(i=e.photoset?e.photoset:e.photos),
i&&"perpage"in i&&"pages"in i?(s=i.perpage*i.pages<=r.request.start+r.request.count?r.request.start+i.photo.length:i.perpage*i.pages,
this._maxPhotosPerUser[u]=s,a(s,r.request)):this._maxPhotosPerUser[u]&&a(this._maxPhotosPerUser[u],r.request);
}r.fetchHandler(t,r.request),a&&(r.request.onBegin=a)}),R=t.hitch(this,function(t){
if("ok"!=t.stat)i(null,e);else{var a=this._handlers[k];if(!a)return void console.log("FlickrRestStore: no handlers for data",t);
this._handlers[k]=null,this._prevRequests[k]=t;var s=this._processFlickrData(t,e,u);
this._prevRequestRanges[u]||(this._prevRequestRanges[u]=[]),this._prevRequestRanges[u].push({
start:e.start,end:e.start+(t.photoset?t.photoset.photo.length:t.photos.photo.length)
}),r.forEach(a,function(e){b(s,t,e)})}}),C=this._prevRequests[k];if(C)return this._handlers[k]=null,
void b(this._cache[u],C,v);if(this._checkPrevRanges(u,e.start,e.count))return this._handlers[k]=null,
void b(this._cache[u],null,v);var j=a.get(y);j.addCallback(R),j.addErrback(function(t){
o.disconnect(q),i(t,e)})},getAttributes:function(t){return["title","author","imageUrl","imageUrlSmall","imageUrlMedium","imageUrlThumb","imageUrlLarge","imageUrlOriginal","link","dateTaken","datePublished"];
},getValues:function(t,e){switch(this._assertIsItem(t),this._assertIsAttribute(e),
e){case"title":return[this._unescapeHtml(t.title)];case"author":return[t.ownername];
case"imageUrlSmall":return[t.media.s];case"imageUrl":return[t.media.l];case"imageUrlOriginal":
return[t.media.o];case"imageUrlLarge":return[t.media.l];case"imageUrlMedium":return[t.media.m];
case"imageUrlThumb":return[t.media.t];case"link":return["http://www.flickr.com/photos/"+t.owner+"/"+t.id];
case"dateTaken":return[t.datetaken];case"datePublished":return[t.datepublished];default:
return void 0}},_processFlickrData:function(t,e,a){if(t.items)return s.prototype._processFlickrData.apply(this,arguments);
var o=["http://farm",null,".static.flickr.com/",null,"/",null,"_",null],i=[],n=t.photoset?t.photoset:t.photos;
if("ok"==t.stat&&n&&n.photo){i=n.photo;for(var u=0;u<i.length;u++){var l=i[u];l[this._storeRef]=this,
o[1]=l.farm,o[3]=l.server,o[5]=l.id,o[7]=l.secret;var h=o.join("");l.media={s:h+"_s.jpg",
m:h+"_m.jpg",l:h+".jpg",t:h+"_t.jpg",o:h+"_o.jpg"},!l.owner&&t.photoset&&(l.owner=t.photoset.owner);
}}var c=e.start?e.start:0,p=this._cache[a];return p||(this._cache[a]=p=[]),r.forEach(i,function(t,e){
p[e+c]=t}),p},_checkPrevRanges:function(t,e,a){var s=e+a,o=this._prevRequestRanges[t];
return!!o&&r.some(o,function(t){return e>=t.start&&s<=t.end})}});return i});