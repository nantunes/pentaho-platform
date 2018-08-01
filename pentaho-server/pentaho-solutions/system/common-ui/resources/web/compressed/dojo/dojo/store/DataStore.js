define(["../_base/lang","../_base/declare","../Deferred","../_base/array","./util/QueryResults","./util/SimpleQueryEngine"],function(t,e,n,r,i,o){
var s=null;return e("dojo.store.DataStore",s,{target:"",constructor:function(e){if(t.mixin(this,e),
!1 in e){var n;try{n=this.store.getIdentityAttributes()}catch(r){}this.idProperty=!n||!idAttributes[0]||this.idProperty;
}var i=this.store.getFeatures();i["dojo.data.api.Read"]||(this.get=null),i["dojo.data.api.Identity"]||(this.getIdentity=null),
i["dojo.data.api.Write"]||(this.put=this.add=null)},idProperty:"id",store:null,queryEngine:o,
_objectConverter:function(t){function e(t){for(var i={},o=n.getAttributes(t),s=0;s<o.length;s++){
var u=o[s],a=n.getValues(t,u);if(a.length>1){for(var d=0;d<a.length;d++){var f=a[d];
"object"==typeof f&&n.isItem(f)&&(a[d]=e(f))}f=a}else{var f=n.getValue(t,u);"object"==typeof f&&n.isItem(f)&&(f=e(f));
}i[o[s]]=f}return r in i||!n.getIdentity||(i[r]=n.getIdentity(t)),i}var n=this.store,r=this.idProperty;
return function(n){return t(e(n))}},get:function(t,e){var r,i,o=new n;if(this.store.fetchItemByIdentity({
identity:t,onItem:this._objectConverter(function(t){o.resolve(r=t)}),onError:function(t){
o.reject(i=t)}}),r)return r;if(i)throw i;return o.promise},put:function(t,e){var n=e&&"undefined"!=typeof e.id||this.getIdentity(t),r=this.store,i=this.idProperty;
"undefined"==typeof n?(r.newItem(t),r.save()):r.fetchItemByIdentity({identity:n,onItem:function(e){
if(e)for(var n in t)n!=i&&r.getValue(e,n)!=t[n]&&r.setValue(e,n,t[n]);else r.newItem(t);
r.save()}})},remove:function(t){var e=this.store;this.store.fetchItemByIdentity({
identity:t,onItem:function(t){e.deleteItem(t),e.save()}})},query:function(e,o){var s,u=new n(function(){
s.abort&&s.abort()});u.total=new n;var a=this._objectConverter(function(t){return t;
});return s=this.store.fetch(t.mixin({query:e,onBegin:function(t){u.total.resolve(t);
},onComplete:function(t){u.resolve(r.map(t,a))},onError:function(t){u.reject(t)}},o)),
i(u)},getIdentity:function(t){return t[this.idProperty]}})});