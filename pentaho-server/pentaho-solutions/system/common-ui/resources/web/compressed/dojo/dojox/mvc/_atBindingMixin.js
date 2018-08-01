define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/has","dojo/Stateful","./resolve","./sync"],function(array,lang,declare,has,Stateful,resolve,sync){
function getLogContent(t,e){return[t._setIdAttr||!t.declaredClass?t:t.declaredClass,e].join(":");
}function logResolveFailure(t,e){console.warn(e+" could not be resolved"+("string"==typeof t?" with "+t:"")+".");
}function getParent(t){var e;try{e=require("dijit/registry")}catch(n){return}for(var i,a=t.domNode&&t.domNode.parentNode;a;){
if(i=e.getEnclosingWidget(a)){var r=i._relTargetProp||"target",o=lang.isFunction(i.get)?i.get(r):i[r];
if(o||r in i.constructor.prototype)return i}a=i&&i.domNode.parentNode}}function bind(t,e,n,i,a){
function r(){o.Two&&o.Two.unwatch(),delete o.Two;var r=s&&(lang.isFunction(s.get)?s.get(l):s[l]),c=resolve(t,r),d=resolve(n,r);
return has("mvc-bindings-log-api")&&(!c||/^rel:/.test(t)&&!s)&&logResolveFailure(t,e),
has("mvc-bindings-log-api")&&(!d||/^rel:/.test(n)&&!s)&&logResolveFailure(n,i),c&&d&&(!/^rel:/.test(t)&&!/^rel:/.test(n)||s)?c.set&&c.watch||"*"!=e?void(null==e?(lang.isFunction(d.set)?d.set(i,c):d[i]=c,
has("mvc-bindings-log-api")&&console.log("dojox/mvc/_atBindingMixin set "+c+" to: "+getLogContent(d,i))):o.Two=sync(c,e,d,i,a)):void(has("mvc-bindings-log-api")&&logResolveFailure(t,e)):void 0;
}var o={},s=getParent(n),l=s&&s._relTargetProp||"target";r(),(s&&/^rel:/.test(t)||/^rel:/.test(n)&&lang.isFunction(s.set)&&lang.isFunction(s.watch))&&(o.rel=s.watch(l,function(t,e,n){
e!==n&&(has("mvc-bindings-log-api")&&console.log("Change in relative data binding target: "+s),
r())}));var c={};return c.unwatch=c.remove=function(){for(var t in o)o[t]&&o[t].unwatch(),
delete o[t]},c}has("mvc-bindings-log-api");var mixin={dataBindAttr:"data-mvc-bindings",
_dbpostscript:function(t,e){var n=this._refs=(t||{}).refs||{};for(var i in t)if("dojox.mvc.at"==(t[i]||{}).atsignature){
var a=t[i];delete t[i],n[i]=a}var r=new Stateful,o=this;r.toString=function(){return"[Mixin value of widget "+o.declaredClass+", "+(o.id||"NO ID")+"]";
},r.canConvertToLoggable=!0,this._startAtWatchHandles(r);for(var i in n)void 0!==r[i]&&((t=t||{})[i]=r[i]);
this._stopAtWatchHandles()},_startAtWatchHandles:function(t){this.canConvertToLoggable=!0;
var e=this._refs;if(e){var n=this._atWatchHandles=this._atWatchHandles||{};this._excludes=null;
for(var i in e)e[i]&&"*"!=i&&(n[i]=bind(e[i].target,e[i].targetProp,t||this,i,{bindDirection:e[i].bindDirection,
converter:e[i].converter,equals:e[i].equalsCallback}));"dojox.mvc.at"==(e["*"]||{}).atsignature&&(n["*"]=bind(e["*"].target,e["*"].targetProp,t||this,"*",{
bindDirection:e["*"].bindDirection,converter:e["*"].converter,equals:e["*"].equalsCallback
}))}},_stopAtWatchHandles:function(){for(var t in this._atWatchHandles)this._atWatchHandles[t].unwatch(),
delete this._atWatchHandles[t]},_setAtWatchHandle:function(t,e){if("ref"==t)throw new Error(this+": 1.7 ref syntax used in conjuction with 1.8 dojox/mvc/at syntax, which is not supported.");
var n=this._atWatchHandles=this._atWatchHandles||{};n[t]&&(n[t].unwatch(),delete n[t]),
this[t]=null,this._excludes=null,this._started?n[t]=bind(e.target,e.targetProp,this,t,{
bindDirection:e.bindDirection,converter:e.converter,equals:e.equalsCallback}):this._refs[t]=e;
},_setBind:function(value){var list=eval("({"+value+"})");for(var prop in list){var h=list[prop];
"dojox.mvc.at"!=(h||{}).atsignature?console.warn(prop+" in "+dataBindAttr+" is not a data binding handle."):this._setAtWatchHandle(prop,h);
}},_getExcludesAttr:function(){if(this._excludes)return this._excludes;var t=[];for(var e in this._atWatchHandles)"*"!=e&&t.push(e);
return t},_getPropertiesAttr:function(){if(this.constructor._attribs)return this.constructor._attribs;
var t=["onClick"].concat(this.constructor._setterAttrs);return array.forEach(["id","excludes","properties","ref","binding"],function(e){
var n=array.indexOf(t,e);n>=0&&t.splice(n,1)}),this.constructor._attribs=t}};mixin[mixin.dataBindAttr]="";
var _atBindingMixin=declare("dojox/mvc/_atBindingMixin",null,mixin);return _atBindingMixin.mixin=mixin,
_atBindingMixin});