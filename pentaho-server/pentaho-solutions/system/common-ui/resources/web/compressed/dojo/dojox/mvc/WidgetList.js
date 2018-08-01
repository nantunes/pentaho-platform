define(["require","dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dijit/_Container","dijit/_WidgetBase","./Templated"],function(require,array,lang,declare,_Container,_WidgetBase,Templated){
function evalParams(params){return eval("({"+params+"})")}function unwatchElements(i){
for(var t=null;t=(i._handles||[]).pop();)t.unwatch()}function flatten(i){var t=[];
return array.forEach(i,function(i){[].push.apply(t,i)}),t}function loadModules(i,t){
if(this.childClz)t(this.childClz);else if(this.childType){var n=lang.isFunction(this.childType)||lang.isFunction(this.childMixins)?array.map(i,function(i){
var t=lang.isFunction(this.childType)?this.childType.call(i,this):this.childType,n=lang.isFunction(this.childMixins)?this.childMixins.call(i,this):this.childMixins;
return t?[t].concat(lang.isArray(n)?n:n?n.split(","):[]):["dojox/mvc/Templated"]},this):[[this.childType].concat(this.childMixins&&this.childMixins.split(",")||[])];
require(array.filter(array.map(flatten(n),function(i){return lang.getObject(i)?undef:i;
}),function(i){return i!==undef}),function(){t.apply(this,array.map(n,function(i){
var t=array.map(i,function(i){return lang.getObject(i)||require(i)});return t.length>1?declare(t,{}):t[0];
}))})}else t(Templated)}var childTypeAttr="data-mvc-child-type",childMixinsAttr="data-mvc-child-mixins",childParamsAttr="data-mvc-child-props",childBindingsAttr="data-mvc-child-bindings",undef,WidgetList=declare("dojox.mvc.WidgetList",[_WidgetBase,_Container],{
childClz:null,childType:"",childMixins:"",childParams:null,childBindings:null,children:null,
partialRebuild:!1,_relTargetProp:"children",postMixInProperties:function(){this.inherited(arguments),
this[childTypeAttr]&&(this.childType=this[childTypeAttr]),this[childMixinsAttr]&&(this.childMixins=this[childMixinsAttr]);
},startup:function(){this.inherited(arguments),this._setChildrenAttr(this.children);
},_setChildrenAttr:function(i){var t=this.children;if(this._set("children",i),this._started&&(!this._builtOnce||t!=i)&&(this._builtOnce=!0,
this._buildChildren(i),lang.isArray(i))){var n=this;i.watch!=={}.watch&&(this._handles=this._handles||[]).push(i.watch(function(i,t,e){
if(!isNaN(i)){var a=n.getChildren()[i-0];a&&a.set(a._relTargetProp||"target",e)}}));
}},_buildChildren:function(i){function t(i){if(!(this._beingDestroyed||this._buildChildrenSeq>l)){
var t=[].slice.call(arguments,1);i.clz=lang.isFunction(this.childType)||lang.isFunction(this.childMixins)?t:t[0];
for(var n=null;n=s.shift();){if(!n.clz){s.unshift(n);break}for(var e=0,a=(n.removals||[]).length;a>e;++e)this.removeChild(n.idx);
array.forEach(array.map(n.adds,function(i,t){var e={ownerDocument:this.ownerDocument,
parent:this,indexAtStartup:n.idx+t},a=lang.isArray(n.clz)?n.clz[t]:n.clz;e[(lang.isFunction(this.childParams)&&this.childParams.call(e,this)||this.childParams||this[childParamsAttr]&&evalParams.call(e,this[childParamsAttr])||{})._relTargetProp||a.prototype._relTargetProp||"target"]=i;
var l=this.childParams||this[childParamsAttr]&&evalParams.call(e,this[childParamsAttr]),r=this.childBindings||this[childBindingsAttr]&&evalParams.call(e,this[childBindingsAttr]);
return!this.templateString||e.templateString||a.prototype.templateString||(e.templateString=this.templateString),
!r||e.bindings||a.prototype.bindings||(e.bindings=r),new a(lang.delegate(lang.isFunction(l)?l.call(e,this):l,e));
},this),function(i,t){this.addChild(i,n.idx+t)},this)}}}unwatchElements(this);for(var n=this.getChildren(),e=null;e=n.pop();)this.removeChild(e),
e.destroy();if(lang.isArray(i)){var a=this,l=this._buildChildrenSeq=(this._buildChildrenSeq||0)+1,r={
idx:0,removals:[],adds:[].concat(i)},s=[r];lang.isFunction(i.watchElements)&&(this._handles=this._handles||[]).push(i.watchElements(function(n,e,l){
if(e&&l&&a.partialRebuild){var r={idx:n,removals:e,adds:l};s.push(r),loadModules.call(a,l,lang.hitch(a,t,r));
}else a._buildChildren(i)})),loadModules.call(this,i,lang.hitch(this,t,r))}},destroy:function(){
unwatchElements(this),this.inherited(arguments)}});return WidgetList.prototype[childTypeAttr]=WidgetList.prototype[childMixinsAttr]=WidgetList.prototype[childParamsAttr]=WidgetList.prototype[childBindingsAttr]="",
WidgetList});