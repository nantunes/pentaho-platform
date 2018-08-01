define(["require","dojo/when","dojo/on","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dijit/Destroyable","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./ViewBase","./utils/nls"],function(e,t,i,n,s,o,r,h,a,l,d){
return n("dojox.app.View",[h,a,r,l],{constructor:function(e){},connect:function(e,t,n){
return this.own(i(e,t,s.hitch(this,n)))[0]},_loadTemplate:function(){if(this.templateString)return!0;
var i=this.template,n=this.dependencies?this.dependencies:[];i&&(0==i.indexOf("./")&&(i="app/"+i),
n=n.concat(["dojo/text!"+i]));var r=new o;if(n.length>0){var h;try{h=e.on("error",s.hitch(this,function(e){
r.isResolved()||r.isRejected()||e.info[0]&&e.info[0].indexOf(this.template)>=0&&(r.resolve(!1),
h.remove())})),e(n,function(){r.resolve.call(r,arguments),h.remove()})}catch(a){r.resolve(!1),
h&&h.remove()}}else r.resolve(!0);var l=new o;return t(r,s.hitch(this,function(){
this.templateString=this.template?arguments[0][arguments[0].length-1]:"<div></div>",
l.resolve(this)})),l},load:function(){var e=new o,i=this.inherited(arguments),n=d(this);
return t(i,s.hitch(this,function(){t(n,s.hitch(this,function(i){this.nls=s.mixin({},this.parent.nls),
i&&s.mixin(this.nls,i),t(this._loadTemplate(),function(t){e.resolve(t)})}))})),e},
_startup:function(){this.buildRendering(),this.inherited(arguments)}})});