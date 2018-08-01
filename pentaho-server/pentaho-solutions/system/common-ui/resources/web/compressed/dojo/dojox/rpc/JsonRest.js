define("dojox/rpc/JsonRest",["dojo","dojox","dojox/json/ref","dojox/rpc/Rest"],function(e,t){
function r(e,r,i,s){var c=r.ioArgs&&r.ioArgs.xhr&&r.ioArgs.xhr.getResponseHeader("Last-Modified");
c&&o._timeStamps&&(o._timeStamps[s]=c);var a=e._schema&&e._schema.hrefProperty;return a&&(t.json.ref.refAttribute=a),
i=i&&t.json.ref.resolveJson(i,{defaultId:s,index:o._index,timeStamps:c&&o._timeStamps,
time:c,idPrefix:e._store.allowNoTrailingSlash?e.servicePath+"/":e.servicePath.replace(/[^\/]*$/,""),
idAttribute:n.getIdAttribute(e),schemas:n.schemas,loader:n._loader,idAsRef:e.idAsRef,
assignAbsoluteIds:!0}),t.json.ref.refAttribute="$ref",i}var n,i=[],o=t.rpc.Rest;return n=t.rpc.JsonRest={
serviceClass:t.rpc.Rest,conflictDateHeader:"If-Unmodified-Since",commit:function(t){
t=t||{};for(var r=[],s={},c=[],a=0;a<i.length;a++){var d=i[a],h=d.object,f=d.old;if((!t.service||!h&&!f||!(h||f).__id.indexOf(t.service.servicePath))&&d.save){
if(delete h.__isDirty,h)if(f){var u;if((u=h.__id.match(/(.*)#.*/))&&(h=o._index[u[1]]),
!(h.__id in s)){if(s[h.__id]=h,t.incrementalUpdates&&!u)var l=("function"==typeof t.incrementalUpdates?t.incrementalUpdates:function(){
l={};for(var e in h)if(h.hasOwnProperty(e))h[e]!==f[e]&&(l[e]=h[e]);else if(f.hasOwnProperty(e))return null;
return l})(h,f);l?r.push({method:"post",target:h,content:l}):r.push({method:"put",
target:h,content:h})}}else{var v=n.getServiceAndId(h.__id).service,_=n.getIdAttribute(v);
_ in h&&!t.alwaysPostNewItems?r.push({method:"put",target:h,content:h}):r.push({method:"post",
target:{__id:v.servicePath},content:h})}else f&&r.push({method:"delete",target:f});
c.push(d),i.splice(a--,1)}}return e.connect(t,"onError",function(){if(t.revertOnError!==!1){
var r=i;i=c;n.revert(),i=r}else e.forEach(c,function(e){n.changing(e.object,!e.object);
})}),n.sendToServer(r,t),r},sendToServer:function(i,s){var c,a,d,h=e.xhr,f=i.length,u=this.conflictDateHeader;
for(e.xhr=function(t,r){return r.headers=r.headers||{},r.headers.Transaction=i.length-1==c?"commit":"open",
u&&d&&(r.headers[u]=d),a&&(r.headers["Content-ID"]="<"+a+">"),h.apply(e,arguments);
},c=0;c<i.length;c++){var l=i[c];t.rpc.JsonRest._contentId=l.content&&l.content.__id;
var v="post"==l.method;d="put"==l.method&&o._timeStamps[l.content.__id],d&&(o._timeStamps[l.content.__id]=new Date+""),
a=v&&t.rpc.JsonRest._contentId;var _=n.getServiceAndId(l.target.__id),p=_.service,m=l.deferred=p[l.method](_.id.replace(/#/,""),t.json.ref.toJson(l.content,!1,p.servicePath,!0));
!function(e,t,n){t.addCallback(function(c){try{var a=t.ioArgs.xhr&&t.ioArgs.xhr.getResponseHeader("Location");
if(a){var d=a.match(/(^\w+:\/\/)/)&&a.indexOf(n.servicePath);a=d>0?a.substring(d):(n.servicePath+a).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3"),
e.__id=a,o._index[a]=e}c=r(n,t,c,e&&e.__id)}catch(h){}return--f||s.onComplete&&s.onComplete.call(s.scope,i),
c})}(l.content,m,p),m.addErrback(function(e){f=-1,s.onError.call(s.scope,e)})}e.xhr=h;
},getDirtyObjects:function(){return i},revert:function(e){for(var r=i.length;r>0;){
r--;var n=i[r],o=n.object,s=n.old,c=t.data._getStoreForItem(o||s);if(!e||!o&&!s||!(o||s).__id.indexOf(e.servicePath)){
if(o&&s){for(var a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(c&&c.onSet(o,a,o[a],s[a]),
o[a]=s[a]);for(a in o)s.hasOwnProperty(a)||(c&&c.onSet(o,a,o[a]),delete o[a])}else s?c&&c.onNew(s):c&&c.onDelete(o);
delete(o||s).__isDirty,i.splice(r,1)}}},changing:function(e,t){if(e.__id){e.__isDirty=!0;
for(var r=0;r<i.length;r++){var n=i[r];if(e==n.object)return void(t&&(n.object=!1,
this._saveNotNeeded||(n.save=!0)))}var o=e instanceof Array?[]:{};for(r in e)e.hasOwnProperty(r)&&(o[r]=e[r]);
i.push({object:!t&&e,old:o,save:!this._saveNotNeeded})}},deleteObject:function(e){
this.changing(e,!0)},getConstructor:function(r,s){if("string"==typeof r){var c=r;r=new t.rpc.Rest(r,!0),
this.registerService(r,c,s)}return r._constructor?r._constructor:(r._constructor=function(s){
function c(e){if(e){c(e["extends"]),a=e.properties;for(var t in a){var r=a[t];r&&"object"==typeof r&&"default"in r&&(h[t]=r["default"]);
}}e&&e.prototype&&e.prototype.initialize&&(d=!0,e.prototype.initialize.apply(h,f));
}var a,d,h=this,f=arguments;c(r._schema),!d&&s&&"object"==typeof s&&e.mixin(h,s);var u=n.getIdAttribute(r);
o._index[this.__id=this.__clientId=r.servicePath+(this[u]||Math.random().toString(16).substring(2,14)+"@"+(t.rpc.Client&&t.rpc.Client.clientId||"client"))]=this,
t.json.schema&&a&&t.json.schema.mustBeValid(t.json.schema.validate(this,r._schema)),
i.push({object:this,save:!0})},e.mixin(r._constructor,r._schema,{load:r}))},fetch:function(e){
var t=n.getServiceAndId(e);return this.byId(t.service,t.id)},getIdAttribute:function(e){
var t,r=e._schema;if(r&&!(t=r._idAttr))for(var n in r.properties)(r.properties[n].identity||"self"==r.properties[n].link)&&(r._idAttr=t=n);
return t||"id"},getServiceAndId:function(e){var t="";for(var r in n.services)e.substring(0,r.length)==r&&r.length>=t.length&&(t=r);
if(t)return{service:n.services[t],id:e.substring(t.length)};var i=e.match(/^(.*\/)([^\/]*)$/);
return{service:new n.serviceClass(i[1],!0),id:i[2]}},services:{},schemas:{},registerService:function(e,t,r){
t=e.servicePath=t||e.servicePath,e._schema=n.schemas[t]=r||e._schema||{},n.services[t]=e;
},byId:function(t,r){var n,i=o._index[(t.servicePath||"")+r];return i&&!i._loadObject?(n=new e.Deferred,
n.callback(i),n):this.query(t,r)},query:function(e,t,n){var i=e(t,n);return i.addCallback(function(o){
return o.nodeType&&o.cloneNode?o:r(e,i,o,"string"!=typeof t||n&&(n.start||n.count)?void 0:t);
}),i},_loader:function(e){var t=n.getServiceAndId(this.__id),r=this;n.query(t.service,t.id).addBoth(function(t){
t==r?(delete t.$ref,delete t._loadObject):r._loadObject=function(e){e(t)},e(t)})},
isDirty:function(r,n){return r?r.__isDirty:n?e.some(i,function(e){return t.data._getStoreForItem(e.object||e.old)==n;
}):!!i.length}},t.rpc.JsonRest});