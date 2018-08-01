define(["dojo","dojox","dojo/text!./Dialog/Dialog.html","dijit/Dialog","dojo/window","dojox/fx","./DialogSimple"],function(i,t,e){
return i.getObject("widget",!0,t),i.declare("dojox.widget.Dialog",t.widget.DialogSimple,{
templateString:e,sizeToViewport:!1,viewportPadding:35,dimensions:null,easing:null,
sizeDuration:dijit._defaultDuration,sizeMethod:"chain",showTitle:!1,draggable:!1,
modal:!1,constructor:function(t,e){this.easing=t.easing||i._defaultEasing,this.dimensions=t.dimensions||[300,300];
},_setup:function(){this.inherited(arguments),this._alreadyInitialized||(this._navIn=i.fadeIn({
node:this.closeButtonNode}),this._navOut=i.fadeOut({node:this.closeButtonNode}),this.showTitle||i.addClass(this.domNode,"dojoxDialogNoTitle"));
},layout:function(i){this._setSize(),this.inherited(arguments)},_setSize:function(){
this._vp=i.window.getBox();var t=this.containerNode,e=this.sizeToViewport;return this._displaysize={
w:e?t.scrollWidth:this.dimensions[0],h:e?t.scrollHeight:this.dimensions[1]}},show:function(){
this.open||(this._setSize(),i.style(this.closeButtonNode,"opacity",0),i.style(this.domNode,{
overflow:"hidden",opacity:0,width:"1px",height:"1px"}),i.style(this.containerNode,{
opacity:0,overflow:"hidden"}),this.inherited(arguments),this.modal?this._modalconnects.push(i.connect(i.body(),"onkeypress",function(t){
t.charOrCode==i.keys.ESCAPE&&i.stopEvent(t)})):this._modalconnects.push(i.connect(dijit._underlay.domNode,"onclick",this,"onCancel")),
this._modalconnects.push(i.connect(this.domNode,"onmouseenter",this,"_handleNav")),
this._modalconnects.push(i.connect(this.domNode,"onmouseleave",this,"_handleNav")));
},_handleNav:function(i){var t="_navOut",e="_navIn",o="mouseout"==i.type?e:t,s="mouseout"==i.type?t:e;
this[o].stop(),this[s].play()},_position:function(){if(this._started){this._sizing&&(this._sizing.stop(),
this.disconnect(this._sizingConnect),delete this._sizing),this.inherited(arguments),
this.open||i.style(this.containerNode,"opacity",0);var e=2*this.viewportPadding,o={
node:this.domNode,duration:this.sizeDuration||dijit._defaultDuration,easing:this.easing,
method:this.sizeMethod},s=this._displaysize||this._setSize();o.width=s.w=s.w+e>=this._vp.w||this.sizeToViewport?this._vp.w-e:s.w,
o.height=s.h=s.h+e>=this._vp.h||this.sizeToViewport?this._vp.h-e:s.h,this._sizing=t.fx.sizeTo(o),
this._sizingConnect=this.connect(this._sizing,"onEnd","_showContent"),this._sizing.play();
}},_showContent:function(t){var e=this.containerNode;i.style(this.domNode,{overflow:"visible",
opacity:1}),i.style(this.closeButtonNode,"opacity",1),i.style(e,{height:this._displaysize.h-this.titleNode.offsetHeight+"px",
width:this._displaysize.w+"px",overflow:"auto"}),i.anim(e,{opacity:1})}})});