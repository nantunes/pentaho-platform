define("dojox/rpc/JsonRest",["dojox/json/ref","dojox/rpc/Rest","dojo/on","dojo/_base/array","dojo/aspect","dojox/data/JsonRestStore"],function(e,t,r,i,o,n){
function s(r,i,o,n){var s=i.ioArgs&&i.ioArgs.xhr&&i.ioArgs.xhr.getResponseHeader("Last-Modified");
s&&t._timeStamps&&(t._timeStamps[n]=s);var c=r._schema&&r._schema.hrefProperty;return c&&(e.refAttribute=c),
o=o&&e.resolveJson(o,{defaultId:n,index:t._index,timeStamps:s&&t._timeStamps,time:s,
idPrefix:r._store.allowNoTrailingSlash?r.servicePath+"/":r.servicePath.replace(/[^\/]*$/,""),
idAttribute:a.getIdAttribute(r),schemas:a.schemas,loader:a._loader,idAsRef:r.idAsRef,
assignAbsoluteIds:!0}),e.refAttribute="$ref",o}var a,c=[];return a=dojox.rpc.JsonRest={
serviceClass:t,conflictDateHeader:"If-Unmodified-Since",commit:function(e){e=e||{};
for(var r=[],n={},s=[],d=0;d<c.length;d++){var f=c[d],h=f.object,u=f.old;if((!e.service||!h&&!u||!(h||u).__id.indexOf(e.service.servicePath))&&f.save){
if(delete h.__isDirty,h)if(u){var l;if((l=h.__id.match(/(.*)#.*/))&&(h=t._index[l[1]]),
!(h.__id in n)){if(n[h.__id]=h,e.incrementalUpdates&&!l)var v=("function"==typeof e.incrementalUpdates?e.incrementalUpdates:function(){
v={};for(var e in h)if(h.hasOwnProperty(e))h[e]!==u[e]&&(v[e]=h[e]);else if(u.hasOwnProperty(e))return null;
return v})(h,u);v?r.push({method:"post",target:h,content:v}):r.push({method:"put",
target:h,content:h})}}else{var _=a.getServiceAndId(h.__id).service,p=a.getIdAttribute(_);
p in h&&!e.alwaysPostNewItems?r.push({method:"put",target:h,content:h}):r.push({method:"post",
target:{__id:_.servicePath},content:h})}else u&&r.push({method:"delete",target:u});
s.push(f),c.splice(d--,1)}}return o.after(e,"onError",function(){if(e.revertOnError!==!1){
var t=c;c=s;a.revert(),c=t}else i.forEach(s,function(e){a.changing(e.object,!e.object);
})}),a.sendToServer(r,e),r},sendToServer:function(r,i){var o,n,c,d=(dojo.xhr,r.length);
this.conflictDateHeader;for(o=0;o<r.length;o++){var f=r[o];dojox.rpc.JsonRest._contentId=f.content&&f.content.__id;
var h="post"==f.method;c="put"==f.method&&t._timeStamps[f.content.__id],c&&(t._timeStamps[f.content.__id]=new Date+""),
n=h&&dojox.rpc.JsonRest._contentId;var u=a.getServiceAndId(f.target.__id),l=u.service,v=f.deferred=l[f.method](u.id.replace(/#/,""),e.toJson(f.content,!1,l.servicePath,!0));
!function(e,o,n){o.addCallback(function(a){try{var c=o.ioArgs.xhr&&o.ioArgs.xhr.getResponseHeader("Location");
if(c){var f=c.match(/(^\w+:\/\/)/)&&c.indexOf(n.servicePath);c=f>0?c.substring(f):(n.servicePath+c).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3"),
e.__id=c,t._index[c]=e}a=s(n,o,a,e&&e.__id)}catch(h){}return--d||i.onComplete&&i.onComplete.call(i.scope,r),
a})}(f.content,v,l),v.addErrback(function(e){d=-1,i.onError.call(i.scope,e)})}},getDirtyObjects:function(){
return c},revert:function(e){for(var t=c.length;t>0;){t--;var r=c[t],i=r.object,o=r.old,n=dojox.data._getStoreForItem(i||o);
if(!e||!i&&!o||!(i||o).__id.indexOf(e.servicePath)){if(i&&o){for(var s in o)o.hasOwnProperty(s)&&i[s]!==o[s]&&(n&&n.onSet(i,s,i[s],o[s]),
i[s]=o[s]);for(s in i)o.hasOwnProperty(s)||(n&&n.onSet(i,s,i[s]),delete i[s])}else o?n&&n.onNew(o):n&&n.onDelete(i);
delete(i||o).__isDirty,c.splice(t,1)}}},changing:function(e,t){if(e.__id){e.__isDirty=!0;
for(var r=0;r<c.length;r++){var i=c[r];if(e==i.object)return void(t&&(i.object=!1,
this._saveNotNeeded||(i.save=!0)))}var o=e instanceof Array?[]:{};for(r in e)e.hasOwnProperty(r)&&(o[r]=e[r]);
c.push({object:!t&&e,old:o,save:!this._saveNotNeeded})}},deleteObject:function(e){
this.changing(e,!0)},getConstructor:function(e,r){if("string"==typeof e){var i=e;e=new t(e,!0),
this.registerService(e,i,r)}return e._constructor?e._constructor:(e._constructor=function(r){
function i(e){if(e){i(e["extends"]),o=e.properties;for(var t in o){var r=o[t];r&&"object"==typeof r&&"default"in r&&(s[t]=r["default"]);
}}e&&e.prototype&&e.prototype.initialize&&(n=!0,e.prototype.initialize.apply(s,d));
}var o,n,s=this,d=arguments;i(e._schema),!n&&r&&"object"==typeof r&&dojo.mixin(s,r);
var f=a.getIdAttribute(e);t._index[this.__id=this.__clientId=e.servicePath+(this[f]||Math.random().toString(16).substring(2,14)+"@"+(dojox.rpc.Client&&dojox.rpc.Client.clientId||"client"))]=this,
dojox.json.schema&&o&&dojox.json.schema.mustBeValid(dojox.json.schema.validate(this,e._schema)),
c.push({object:this,save:!0})},dojo.mixin(e._constructor,e._schema,{load:e}))},fetch:function(e){
var t=a.getServiceAndId(e);return this.byId(t.service,t.id)},getIdAttribute:function(e){
var t,r=e._schema;if(r&&!(t=r._idAttr))for(var i in r.properties)(r.properties[i].identity||"self"==r.properties[i].link)&&(r._idAttr=t=i);
return t||"id"},getServiceAndId:function(e){var t="";for(var r in a.services)e.substring(0,r.length)==r&&r.length>=t.length&&(t=r);
if(t)return{service:a.services[t],id:e.substring(t.length)};var i=e.match(/^(.*\/)([^\/]*)$/);
return{service:new a.serviceClass(i[1],!0),id:i[2]}},services:{},schemas:{},registerService:function(e,t,r){
t=e.servicePath=t||e.servicePath,e._schema=a.schemas[t]=r||e._schema||{},a.services[t]=e;
},byId:function(e,r){var i,o=t._index[(e.servicePath||"")+r];return o&&!o._loadObject?(i=new dojo.Deferred,
i.callback(o),i):this.query(e,r)},query:function(e,t,r){var i=e(t,r);return i.addCallback(function(o){
return o.nodeType&&o.cloneNode?o:s(e,i,o,"string"!=typeof t||r&&(r.start||r.count)?void 0:t);
}),i},_loader:function(e){var t=a.getServiceAndId(this.__id),r=this;a.query(t.service,t.id).addCallback(function(t){
t==r?(delete t.$ref,delete t._loadObject):r._loadObject=function(e){e(t)},e(t)})},
isDirty:function(e,t){return e?e.__isDirty:t?i.some(c,function(e){return dojox.data._getStoreForItem(e.object||e.old)==t;
}):!!c.length}},dojox.rpc.JsonRest});