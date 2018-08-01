define(["require","dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/config","dojo/_base/window","dojo/Evented","dojo/Deferred","dojo/when","dojo/has","dojo/on","dojo/ready","dojo/dom-construct","dojo/dom-attr","./utils/model","./utils/nls","./module/lifecycle","./utils/hash","./utils/constraints","./utils/config"],function(t,e,o,s,i,r,a,n,d,l,h,c,p,u,m,f,g,w,v,j){
function b(e,i){var a;e=j.configProcessHas(e),e.loaderConfig||(e.loaderConfig={}),
e.loaderConfig.paths||(e.loaderConfig.paths={}),e.loaderConfig.paths.app||(a=window.location.pathname,
"/"!=a.charAt(a.length)&&(a=a.split("/"),a.pop(),a=a.join("/")),e.loaderConfig.paths.app=a),
t(e.loaderConfig),e.modules||(e.modules=[]),e.modules.push("./module/lifecycle");var n=e.modules.concat(e.dependencies?e.dependencies:[]);
e.template&&(a=e.template,0==a.indexOf("./")&&(a="app/"+a),n.push("dojo/text!"+a)),
t(n,function(){for(var t=[y],a=0;a<e.modules.length;a++)t.push(arguments[a]);if(e.template)var n={
templateString:arguments[arguments.length-1]};App=s(t,n),c(function(){var t=new App(e,i||r.body());
l("app-log-api")?t.log=function(){var t="";try{for(var e=0;e<arguments.length-1;e++)t+=arguments[e];
console.log(t,arguments[arguments.length-1])}catch(o){}}:t.log=function(){},t.transitionToView=function(t,e,o){
var s={bubbles:!0,cancelable:!0,detail:e,triggerEvent:o||null};h.emit(t,"startTransition",s);
},t.setStatus(t.lifecycle.STARTING);var s=t.id;window[s]&&o.mixin(t,window[s]),window[s]=t,
t.start()})})}l.add("app-log-api",(i.app||{}).debugApp);var y=s(a,{constructor:function(t,e){
o.mixin(this,t),this.params=t,this.id=t.id,this.defaultView=t.defaultView,this.controllers=[],
this.children={},this.loadedModels={},this.loadedStores={},this.setDomNode(p.create("div",{
id:this.id+"_Root",style:"width:100%; height:100%; overflow-y:hidden; overflow-x:hidden;"
})),e.appendChild(this.domNode)},createDataStore:function(e){if(e.stores)for(var s in e.stores)if("_"!==s.charAt(0)){
var i=e.stores[s].type?e.stores[s].type:"dojo/store/Memory",r={};e.stores[s].params&&o.mixin(r,e.stores[s].params);
try{var a=t(i)}catch(n){throw new Error(i+" must be listed in the dependencies")}
if(r.data&&o.isString(r.data)&&(r.data=o.getObject(r.data)),e.stores[s].observable){
try{var d=t("dojo/store/Observable")}catch(n){throw new Error("dojo/store/Observable must be listed in the dependencies");
}e.stores[s].store=d(new a(r))}else e.stores[s].store=new a(r);this.loadedStores[s]=e.stores[s].store;
}},createControllers:function(e){if(e){for(var s=[],i=0;i<e.length;i++)s.push(e[i]);
var r,a=new n;try{r=t.on("error",function(t){a.isResolved()||a.isRejected()||(a.reject("load controllers error."),
r.remove())}),t(s,function(){a.resolve.call(a,arguments),r.remove()})}catch(l){a.reject(l),
r&&r.remove()}var h=new n;return d(a,o.hitch(this,function(){for(var t=0;t<arguments[0].length;t++)this.controllers.push(new arguments[0][t](this).bind());
h.resolve(this)}),function(){h.reject("load controllers error.")}),h}},trigger:function(t,o){
e.deprecated("dojox.app.Application.trigger","Use dojox.app.Application.emit instead","2.0"),
this.emit(t,o)},start:function(){this.createDataStore(this.params);var t,e=new n;try{
t=m(this.params.models,this,this)}catch(s){return e.reject(s),e.promise}d(t,o.hitch(this,function(t){
this.loadedModels=o.isArray(t)?t[0]:t,this.setupControllers(),d(f(this.params),o.hitch(this,function(t){
t&&o.mixin(this.nls={},t),this.startup()}))}),function(){e.reject("load model error.");
})},setDomNode:function(t){var e=this.domNode;this.domNode=t,this.emit("app-domNode",{
oldNode:e,newNode:t})},setupControllers:function(){var t=window.location.hash;this._startView=w.getTarget(t,this.defaultView),
this._startParams=w.getParams(t)},startup:function(){this.selectedChildren={};var t=this.createControllers(this.params.controllers);
this.hasOwnProperty("constraint")?v.register(this.params.constraints):this.constraint="center";
var e=function(){this.emit("app-load",{viewId:this.defaultView,initLoad:!0,params:this._startParams,
callback:o.hitch(this,function(){this.emit("app-transition",{viewId:this.defaultView,
forceTransitionNone:!0,opts:{params:this._startParams}}),this.defaultView!==this._startView&&this.emit("app-transition",{
viewId:this._startView,opts:{params:this._startParams}}),this.setStatus(this.lifecycle.STARTED);
})})};d(t,o.hitch(this,function(){this.template?this.emit("app-init",{app:this,name:this.name,
type:this.type,parent:this,templateString:this.templateString,controller:this.controller,
callback:o.hitch(this,function(t){this.setDomNode(t.domNode),e.call(this)})}):e.call(this);
}))}});return function(e,o){if(!e)throw new Error("App Config Missing");e.validate?t(["dojox/json/schema","dojox/json/ref","dojo/text!dojox/application/schema/application.json"],function(t,s){
t=dojox.json.ref.resolveJson(t),t.validate(e,s)&&b(e,o)}):b(e,o)}});