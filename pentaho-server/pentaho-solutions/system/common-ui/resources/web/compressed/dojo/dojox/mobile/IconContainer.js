define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./IconItem","./Heading","./View"],function(i,e,t,n,o,a,s,d,r,h,l){
return e("dojox.mobile.IconContainer",[d,s,a],{defaultIcon:"",transition:"below",
pressedIconOpacity:.4,iconBase:"",iconPos:"",back:"Home",label:"My Application",single:!1,
editable:!1,tag:"ul",baseClass:"mblIconContainer",editableMixinClass:"dojox/mobile/_EditableIconMixin",
iconItemPaneContainerClass:"dojox/mobile/Container",iconItemPaneContainerProps:null,
iconItemPaneClass:"dojox/mobile/_IconItemPane",iconItemPaneProps:null,buildRendering:function(){
this.domNode=this.containerNode=this.srcNodeRef||o.create(this.tag),this._terminator=o.create("ul"===this.tag?"li":"div",{
className:"mblIconItemTerminator"},this.domNode),this.inherited(arguments)},postCreate:function(){
this.editable&&!this.startEdit&&require([this.editableMixinClass],t.hitch(this,function(i){
e.safeMixin(this,new i),this.set("editable",this.editable)}))},startup:function(){
this._started||(require([this.iconItemPaneContainerClass],t.hitch(this,function(i){
if(this.paneContainerWidget=new i(this.iconItemPaneContainerProps),"below"===this.transition)o.place(this.paneContainerWidget.domNode,this.domNode,"after");else{
var e=this.appView=new l({id:this.id+"_mblApplView"}),t=this;e.onAfterTransitionIn=function(i,e,n,o,a){
t._opening._open_1()},e.domNode.style.visibility="hidden";var a=e._heading=new h({
back:this._cv?this._cv(this.back):this.back,label:this._cv?this._cv(this.label):this.label,
moveTo:this.domNode.parentNode.id,transition:"zoomIn"==this.transition?"zoomOut":this.transition
});e.addChild(a),e.addChild(this.paneContainerWidget);for(var s,d=this.getParent();d;d=d.getParent())if(d instanceof l){
s=d.domNode.parentNode;break}s||(s=n.body()),s.appendChild(e.domNode),e.startup();
}})),this.inherited(arguments))},closeAll:function(){i.forEach(this.getChildren(),function(i){
i.close(!0)},this)},addChild:function(i,e){this.inherited(arguments),this._started&&i.paneWidget&&!i.paneWidget.getParent()&&this.paneContainerWidget.addChild(i.paneWidget,e),
this.domNode.appendChild(this._terminator)},removeChild:function(i){var e="number"==typeof i?i:i.getIndexInParent();
this.paneContainerWidget.removeChild(e),this.inherited(arguments)},_setLabelAttr:function(i){
if(this.appView){this.label=i;var e=this._cv?this._cv(i):i;this.appView._heading.set("label",e);
}}})});