define(["dojo/_base/kernel","dojo/_base/lang","./getStateful","./StatefulModel","./Bind","./_DataBindingMixin","./_patches"],function(t,e,n,o){
t.experimental("dojox.mvc");var r=e.getObject("dojox.mvc",!0);return r.newStatefulModel=function(t){
if(t.data)return n(t.data,o.getStatefulOptions);if(t.store&&e.isFunction(t.store.query)){
var r,a=t.store.query(t.query);return a.then?a.then(function(e){return r=n(e,o.getStatefulOptions),
r.store=t.store,r}):(r=n(a,o.getStatefulOptions),r.store=t.store,r)}},r});