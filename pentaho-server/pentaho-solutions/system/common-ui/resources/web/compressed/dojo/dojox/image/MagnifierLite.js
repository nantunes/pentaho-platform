define(["dojo/_base/kernel","dojo/_base/declare","dijit/_Widget","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","dojo/_base/window","dojo/_base/lang"],function(s,e,i,t,o,a,h,l){
return s.experimental("dojox.image.MagnifierLite"),e("dojox.image.MagnifierLite",i,{
glassSize:125,scale:6,postCreate:function(){this.inherited(arguments),this._adjustScale(),
this._createGlass(),this.connect(this.domNode,"onmouseenter","_showGlass"),this.connect(this.glassNode,"onmousemove","_placeGlass"),
this.connect(this.img,"onmouseout","_hideGlass"),this.connect(h,"onresize","_adjustScale");
},_createGlass:function(){var s=this.glassNode=t.create("div",{style:{height:this.glassSize+"px",
width:this.glassSize+"px"},className:"glassNode"},h.body());this.surfaceNode=s.appendChild(t.create("div")),
this.img=t.place(l.clone(this.domNode),s),o.set(this.img,{position:"relative",top:0,
left:0,width:this._zoomSize.w+"px",height:this._zoomSize.h+"px"})},_adjustScale:function(){
this.offset=a.position(this.domNode,!0),console.dir(this.offset),this._imageSize={
w:this.offset.w,h:this.offset.h},this._zoomSize={w:this._imageSize.w*this.scale,h:this._imageSize.h*this.scale
}},_showGlass:function(s){this._placeGlass(s),o.set(this.glassNode,{visibility:"visible",
display:""})},_hideGlass:function(s){o.set(this.glassNode,{visibility:"hidden",display:"none"
})},_placeGlass:function(s){this._setImage(s);var e=Math.floor(this.glassSize/2);o.set(this.glassNode,{
top:Math.floor(s.pageY-e)+"px",left:Math.floor(s.pageX-e)+"px"})},_setImage:function(s){
var e=(s.pageX-this.offset.x)/this.offset.w,i=(s.pageY-this.offset.y)/this.offset.h,t=this._zoomSize.w*e*-1+this.glassSize*e,a=this._zoomSize.h*i*-1+this.glassSize*i;
o.set(this.img,{top:a+"px",left:t+"px"})},destroy:function(s){t.destroy(this.glassNode),
this.inherited(arguments)}})});