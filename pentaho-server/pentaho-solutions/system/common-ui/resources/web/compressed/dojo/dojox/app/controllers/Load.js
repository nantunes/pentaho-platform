define(["require","dojo/_base/lang","dojo/_base/declare","dojo/on","dojo/Deferred","dojo/when","dojo/dom-style","../Controller"],function(e,i,t,a,o,r,n,l,s){
return t("dojox.app.controllers.Load",l,{_waitingQueue:[],constructor:function(e,i){
this.events={"app-init":this.init,"app-load":this.load}},init:function(e){r(this.createView(e.parent,null,null,{
templateString:e.templateString,controller:e.controller},null,e.type),function(i){
r(i.start(),e.callback)})},load:function(e){this.app.log("in app/controllers/Load event.viewId="+e.viewId+" event =",e);
for(var t=e.viewId||"",a=[],n=t.split("+");n.length>0;){var l=n.shift();a.push(l);
}var s;if(this.proceedLoadViewDef=new o,!(a&&a.length>1))return s=this.loadView(e);
for(var d=0;d<a.length-1;d++){var h=i.clone(e);h.callback=null,h.viewId=a[d],this._waitingQueue.push(h);
}this.proceedLoadView(this._waitingQueue.shift()),r(this.proceedLoadViewDef,i.hitch(this,function(){
var t=i.clone(e);return t.viewId=a[d],s=this.loadView(t)}))},proceedLoadView:function(e){
var t=this.loadView(e);r(t,i.hitch(this,function(){this.app.log("in app/controllers/Load proceedLoadView back from loadView for event",e);
var i=this._waitingQueue.shift();i?(this.app.log("in app/controllers/Load proceedLoadView back from loadView calling this.proceedLoadView(nextEvt) for ",i),
this.proceedLoadView(i)):(this._waitingQueue=[],this.proceedLoadViewDef.resolve());
}))},loadView:function(e){var t=e.parent||this.app,a=e.viewId||"",o=a.split(","),n=o.shift(),l=o.join(","),s=e.params||"";
this._handleDefault=!1,this._defaultHasPlus=!1;var d=this.loadChild(t,n,l,s,e);return e.callback&&r(d,i.hitch(this,function(){
this._handleDefault&&!e.initLoad&&(this.app.log("logTransitions:",""," emit app-transition this.childViews=["+this.childViews+"]"),
this.app.emit("app-transition",{viewId:this.childViews,defaultView:!0,forceTransitionNone:e.forceTransitionNone,
opts:{params:s}})),e.callback(this._handleDefault,this._defaultHasPlus)})),d},createChild:function(e,i,t,a){
var n=e.id+"_"+i;!a&&e.views[i]&&e.views[i].defaultParams&&(a=e.views[i].defaultParams);
var l=e.children[n];if(l)return a&&(l.params=a),this.app.log("in app/controllers/Load createChild view is already loaded so return the loaded view with the new parms ",l),
l;var s=new o;return r(this.createView(e,n,i,null,a,e.views[i].type),function(i){
e.children[n]=i,r(i.start(),function(e){s.resolve(e)})}),s},createView:function(t,a,r,n,l,s){
var d=new o,h=this.app;return e([s?s:"../View"],function(e){var o=new e(i.mixin({
app:h,id:a,name:r,parent:t},{params:l},n));d.resolve(o)}),d},loadChild:function(e,t,a,n,l){
if(!e)throw Error("No parent for Child '"+t+"'.");if(!t){var s=e.defaultView?e.defaultView.split(","):"default";
if(e.defaultView&&!l.initLoad){var d=this._getViewNamesFromDefaults(e);this.app.log("logTransitions:","Load:loadChild","setting _handleDefault true for parent.defaultView childViews=["+d+"]"),
this._handleDefault=!0,e.defaultView.indexOf("+")>=0&&(this._defaultHasPlus=!0)}else t=s.shift(),
a=s.join(",")}var h,c=new o;try{h=this.createChild(e,t,a,n)}catch(u){return console.warn("logTransitions:","","emit reject load exception for =["+t+"]",u),
c.reject("load child '"+t+"' error."),c.promise}return r(h,i.hitch(this,function(e){
if(!a&&e.defaultView){var i=this._getViewNamesFromDefaults(e);this.app.log("logTransitions:","Load:loadChild"," setting _handleDefault = true child.defaultView childViews=["+i+"]"),
this._handleDefault=!0,e.defaultView.indexOf("+")>=0&&(this._defaultHasPlus=!0),this.childViews=i,
c.resolve()}var o=a.split(",");if(t=o.shift(),a=o.join(","),t){var s=this.loadChild(e,t,a,n,l);
r(s,function(){c.resolve()},function(){c.reject("load child '"+t+"' error.")})}else c.resolve();
}),function(){console.warn("loadChildDeferred.REJECT() for ["+t+"] subIds=["+a+"]"),
c.reject("load child '"+t+"' error.")}),c.promise},_getViewNamesFromDefaults:function(e){
for(var i=e.parent,t=e.name,a="";i!==this.app;)t=i.name+","+t,i=i.parent;var o=e.defaultView.split("+");
for(var r in o)o[r]=t+","+o[r];return a=o.join("+")}})});