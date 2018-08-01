define(["../_base/xhr","../_base/lang","../json","../_base/declare","./util/QueryResults"],function(t,e,r,n,i){
var s=null;return n("dojo.store.JsonRest",s,{constructor:function(t){this.headers={},
n.safeMixin(this,t)},headers:{},target:"",idProperty:"id",ascendingPrefix:"+",descendingPrefix:"-",
get:function(r,n){n=n||{};var i=e.mixin({Accept:this.accepts},this.headers,n.headers||n);
return t("GET",{url:this.target+r,handleAs:"json",headers:i})},accepts:"application/javascript, application/json",
getIdentity:function(t){return t[this.idProperty]},put:function(n,i){i=i||{};var s="id"in i?i.id:this.getIdentity(n),a="undefined"!=typeof s;
return t(a&&!i.incremental?"PUT":"POST",{url:a?this.target+s:this.target,postData:r.stringify(n),
handleAs:"json",headers:e.mixin({"Content-Type":"application/json",Accept:this.accepts,
"If-Match":i.overwrite===!0?"*":null,"If-None-Match":i.overwrite===!1?"*":null},this.headers,i.headers)
})},add:function(t,e){return e=e||{},e.overwrite=!1,this.put(t,e)},remove:function(r,n){
return n=n||{},t("DELETE",{url:this.target+r,headers:e.mixin({},this.headers,n.headers)
})},query:function(r,n){n=n||{};var s=e.mixin({Accept:this.accepts},this.headers,n.headers);
(n.start>=0||n.count>=0)&&(s.Range=s["X-Range"]="items="+(n.start||"0")+"-"+("count"in n&&n.count!=1/0?n.count+(n.start||0)-1:""));
var a=this.target.indexOf("?")>-1;if(r&&"object"==typeof r&&(r=t.objectToQuery(r),
r=r?(a?"&":"?")+r:""),n&&n.sort){var o=this.sortParam;r+=(r||a?"&":"?")+(o?o+"=":"sort(");
for(var c=0;c<n.sort.length;c++){var h=n.sort[c];r+=(c>0?",":"")+(h.descending?this.descendingPrefix:this.ascendingPrefix)+encodeURIComponent(h.attribute);
}o||(r+=")")}var d=t("GET",{url:this.target+(r||""),handleAs:"json",headers:s});return d.total=d.then(function(){
var t=d.ioArgs.xhr.getResponseHeader("Content-Range");return t&&(t=t.match(/\/(.*)/))&&+t[1];
}),i(d)}})});