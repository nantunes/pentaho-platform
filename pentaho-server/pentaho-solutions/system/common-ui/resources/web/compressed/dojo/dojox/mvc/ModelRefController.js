define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Stateful","./_Controller"],function(t,r,o,e,n){
return r("dojox.mvc.ModelRefController",n,{ownProps:null,_refModelProp:"model",_refInModelProp:"model",
model:null,postscript:function(t,r){this._relTargetProp=(t||{})._refModelProp||this._refModelProp,
this.inherited(arguments)},get:function(t){if(!this.hasControllerProperty(t)){var r=this[this._refModelProp];
return r?r.get?r.get(t):r[t]:void 0}return this.inherited(arguments)},_set:function(t,r){
if(!this.hasControllerProperty(t)){var o=this[this._refModelProp];return o&&(o.set?o.set(t,r):o[t]=r),
this}return this.inherited(arguments)},watch:function(r,n){function i(t){a&&a.unwatch(),
t&&o.isFunction(t.set)&&o.isFunction(t.watch)&&(a=t.watch.apply(t,(r?[r]:[]).concat([function(t,r,o){
n.call(h,t,r,o)}])))}function l(o,e){var i={};r?i[r]=1:t.forEach([o,e],function(r){
var o=r&&r.get("properties");if(o)t.forEach(o,function(t){h.hasControllerProperty(t)||(i[t]=1);
});else for(var e in r)r.hasOwnProperty(e)&&!h.hasControllerProperty(e)&&(i[e]=1);
});for(var l in i)n.call(h,l,o?o.get?o.get(l):o[l]:void 0,e?e.get?e.get(l):e[l]:void 0);
}if(this.hasControllerProperty(r))return this.inherited(arguments);n||(n=r,r=null);
var s=null,a=null,h=this;s=e.prototype.watch.call(this,this._refModelProp,function(t,r,o){
r!==o&&(l(r,o),i(o))}),i(this.get(this._refModelProp));var u={};return u.unwatch=u.remove=function(){
a&&(a.unwatch(),a=null),s&&(s.unwatch(),s=null)},u},hasControllerProperty:function(t){
return"_watchCallbacks"==t||t==this._refModelProp||t==this._refInModelProp||t in(this.ownProps||{})||t in this.constructor.prototype||/^dojoAttach(Point|Event)$/i.test(t);
}})});