define(["../_base/lang","../when"],function(e,n){var t=function(t,r,u){return u=u||{},
e.delegate(t,{query:function(e,n){var o=t.query(e,n);return o.forEach(function(e){
(!u.isLoaded||u.isLoaded(e))&&r.put(e)}),o},queryEngine:t.queryEngine||r.queryEngine,
get:function(e,u){return n(r.get(e),function(o){return o||n(t.get(e,u),function(n){
return n&&r.put(n,{id:e}),n})})},add:function(e,u){return n(t.add(e,u),function(n){
return r.add(e&&"object"==typeof n?n:e,u),n})},put:function(e,u){return r.remove(u&&u.id||this.getIdentity(e)),
n(t.put(e,u),function(n){return r.put(e&&"object"==typeof n?n:e,u),n})},remove:function(e,u){
return n(t.remove(e,u),function(n){return r.remove(e,u)})},evict:function(e){return r.remove(e);
}})};return e.setObject("dojo.store.Cache",t),t});