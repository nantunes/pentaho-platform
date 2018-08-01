define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/on","dojo/ready","dijit/registry","./ProgressIndicator","./TransitionEvent","./viewRegistry"],function(e,o,t,i,a,r,n,s,d,l,c,h,f,u,b,g){
var v=i("dojox.mobile.ViewController",null,{dataHandlerClass:"dojox/mobile/dh/DataHandler",
dataSourceClass:"dojox/mobile/dh/UrlDataSource",fileTypeMapClass:"dojox/mobile/dh/SuffixFileTypeMap",
constructor:function(){this.viewMap={},h(a.hitch(this,function(){c(r.body(),"startTransition",a.hitch(this,"onStartTransition"));
}))},findTransitionViews:function(e){if(!e)return[];e.match(/^#?([^&?]+)(.*)/);var o=RegExp.$2,t=f.byId(RegExp.$1);
if(!t)return[];for(var i=t.getParent();i;i=i.getParent())if(i.isVisible&&!i.isVisible()){
var a=t.getShowingView();a&&a.id!==t.id&&t.show(),t=i}return[t.getShowingView(),t,o];
},openExternalView:function(e,o){var t=new n,i=this.viewMap[e.url];if(i)return e.moveTo=i,
e.noTransition?f.byId(i).hide():new b(r.body(),e).dispatch(),t.resolve(!0),t;for(var s=null,d=o.childNodes.length-1;d>=0;d--){
var l=o.childNodes[d];if(1===l.nodeType){var c=l.getAttribute("fixed")||l.getAttribute("data-mobile-fixed")||f.byNode(l)&&f.byNode(l).fixed;
if("bottom"===c){s=l;break}}}var h=e.dataHandlerClass||this.dataHandlerClass,u=e.dataSourceClass||this.dataSourceClass,g=e.fileTypeMapClass||this.fileTypeMapClass;
return require([h,u,g],a.hitch(this,function(i,n,d){var l=new i(new n(e.data||e.url),o,s),c=e.contentType||d.getContentType(e.url)||"html";
l.processData(c,a.hitch(this,function(o){o?(this.viewMap[e.url]=e.moveTo=o,e.noTransition?f.byId(o).hide():new b(r.body(),e).dispatch(),
t.resolve(!0)):t.reject("Failed to load "+e.url)}))})),t},onStartTransition:function(e){
if(e.preventDefault(),e.detail){var o=e.detail;if(o.moveTo||o.href||o.url||o.scene){
if(o.url&&!o.moveTo){var i=o.urlTarget,a=f.byId(i),n=a&&a.containerNode||s.byId(i);
return n||(a=g.getEnclosingView(e.target),n=a&&a.domNode.parentNode||r.body()),void this.openExternalView(o,n);
}if(o.href)if(o.hrefTarget&&"_self"!=o.hrefTarget)r.global.open(o.href,o.hrefTarget);else{
for(var d,l=g.getEnclosingView(e.target);l;l=g.getParentView(l))d=l;d&&d.performTransition(null,o.transitionDir,o.transition,e.target,function(){
location.href=o.href})}else{if(o.scene)return void t.publish("/dojox/mobile/app/pushScene",[o.scene]);
var c=this.findTransitionViews(o.moveTo),h=c[0],u=c[1],b=c[2];if(location.hash||o.hashchange||(g.initialView=h),
o.moveTo&&u&&(o.moveTo=("#"===o.moveTo.charAt(0)?"#"+u.id:u.id)+b),h&&(!o.moveTo||h!==f.byId(o.moveTo.replace(/^#?([^&?]+).*/,"$1")))){
var v=f.getEnclosingWidget(e.target);v&&v.callback&&(o.context=v,o.method=v.callback),
h.performTransition(o)}}}}}});return v._instance=new v,v.getInstance=function(){return v._instance;
},v});