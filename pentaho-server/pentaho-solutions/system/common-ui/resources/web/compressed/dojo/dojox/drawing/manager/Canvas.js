define(["dojo","../util/oo","dojox/gfx"],function(t,i,e){return i.declare(function(i){
t.mixin(this,i);var h=t.contentBox(this.srcRefNode);this.height=this.parentHeight=i.height||h.h,
this.width=this.parentWidth=i.width||h.w,this.domNode=t.create("div",{id:"canvasNode"
},this.srcRefNode),t.style(this.domNode,{width:this.width,height:"auto"}),t.setSelectable(this.domNode,!1),
this.id=this.id||this.util.uid("surface"),console.info("create canvas"),this.gfxSurface=e.createSurface(this.domNode,this.width,this.height),
this.gfxSurface.whenLoaded(this,function(){setTimeout(t.hitch(this,function(){this.surfaceReady=!0,
t.isIE||"silverlight"==e.renderer&&(this.id=this.domNode.firstChild.id),this.underlay=this.gfxSurface.createGroup(),
this.surface=this.gfxSurface.createGroup(),this.overlay=this.gfxSurface.createGroup(),
this.surface.setTransform({dx:0,dy:0,xx:1,yy:1}),this.gfxSurface.getDimensions=t.hitch(this.gfxSurface,"getDimensions"),
i.callback&&i.callback(this.domNode)}),500)}),this._mouseHandle=this.mouse.register(this);
},{zoom:1,useScrollbars:!0,baseClass:"drawingCanvas",resize:function(t,i){this.parentWidth=t,
this.parentHeight=i,this.setDimensions(t,i)},setDimensions:function(i,e,h,s){var o=this.getScrollWidth();
this.width=Math.max(i,this.parentWidth),this.height=Math.max(e,this.parentHeight),
this.height>this.parentHeight&&(this.width-=o),this.width>this.parentWidth&&(this.height-=o),
this.mouse.resize(this.width,this.height),this.gfxSurface.setDimensions(this.width,this.height),
this.domNode.parentNode.scrollTop=s||0,this.domNode.parentNode.scrollLeft=h||0,this.useScrollbars?t.style(this.domNode.parentNode,{
overflowY:this.height>this.parentHeight?"scroll":"hidden",overflowX:this.width>this.parentWidth?"scroll":"hidden"
}):t.style(this.domNode.parentNode,{overflowY:"hidden",overflowX:"hidden"})},setZoom:function(t){
this.zoom=t,this.surface.setTransform({xx:t,yy:t}),this.setDimensions(this.width*t,this.height*t);
},onScroll:function(){},getScrollOffset:function(){return{top:this.domNode.parentNode.scrollTop,
left:this.domNode.parentNode.scrollLeft}},getScrollWidth:function(){var i=t.create("div");
i.innerHTML='<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:0;left:-1000px;"><div style="height:100px;"></div>';
var e=i.firstChild;t.body().appendChild(e);var h=t.contentBox(e).h;t.style(e,"overflow","scroll");
var s=h-t.contentBox(e).h;return t.destroy(e),this.getScrollWidth=function(){return s;
},s}})});