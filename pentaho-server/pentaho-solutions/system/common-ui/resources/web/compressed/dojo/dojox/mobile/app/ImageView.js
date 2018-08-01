dojo.provide("dojox.mobile.app.ImageView"),dojo.experimental("dojox.mobile.app.ImageView"),
dojo.require("dojox.mobile.app._Widget"),dojo.require("dojo.fx.easing"),dojo.declare("dojox.mobile.app.ImageView",dojox.mobile.app._Widget,{
zoom:1,zoomCenterX:0,zoomCenterY:0,maxZoom:5,autoZoomLevel:3,disableAutoZoom:!1,disableSwipe:!1,
autoZoomEvent:null,_leftImg:null,_centerImg:null,_rightImg:null,_leftSmallImg:null,
_centerSmallImg:null,_rightSmallImg:null,constructor:function(){this.panX=0,this.panY=0,
this.handleLoad=dojo.hitch(this,this.handleLoad),this._updateAnimatedZoom=dojo.hitch(this,this._updateAnimatedZoom),
this._updateAnimatedPan=dojo.hitch(this,this._updateAnimatedPan),this._onAnimPanEnd=dojo.hitch(this,this._onAnimPanEnd);
},buildRendering:function(){this.inherited(arguments),this.canvas=dojo.create("canvas",{},this.domNode),
dojo.addClass(this.domNode,"mblImageView")},postCreate:function(){this.inherited(arguments),
this.size=dojo.marginBox(this.domNode),dojo.style(this.canvas,{width:this.size.w+"px",
height:this.size.h+"px"}),this.canvas.height=this.size.h,this.canvas.width=this.size.w;
var t=this;this.connect(this.domNode,"onmousedown",function(i){t.isAnimating()||(t.panX&&t.handleDragEnd(),
t.downX=i.targetTouches?i.targetTouches[0].clientX:i.clientX,t.downY=i.targetTouches?i.targetTouches[0].clientY:i.clientY);
}),this.connect(this.domNode,"onmousemove",function(i){if(!t.isAnimating()&&(t.downX||0===t.downX)&&(t.downY||0===t.downY)&&(!t.disableSwipe&&1==t.zoom||!t.disableAutoZoom&&1!=t.zoom)){
var e=i.targetTouches?i.targetTouches[0].clientX:i.pageX,n=i.targetTouches?i.targetTouches[0].clientY:i.pageY;
t.panX=e-t.downX,t.panY=n-t.downY,1==t.zoom?Math.abs(t.panX)>10&&t.render():(Math.abs(t.panX)>10||Math.abs(t.panY)>10)&&t.render();
}}),this.connect(this.domNode,"onmouseout",function(i){!t.isAnimating()&&t.panX&&t.handleDragEnd();
}),this.connect(this.domNode,"onmouseover",function(i){t.downX=t.downY=null}),this.connect(this.domNode,"onclick",function(i){
if(!t.isAnimating()&&null!=t.downX&&null!=t.downY){var e=i.targetTouches?i.targetTouches[0].clientX:i.pageX,n=i.targetTouches?i.targetTouches[0].clientY:i.pageY;
if(Math.abs(t.panX)>14||Math.abs(t.panY)>14)return t.downX=t.downY=null,void t.handleDragEnd();
if(t.downX=t.downY=null,!t.disableAutoZoom){if(!t._centerImg||!t._centerImg._loaded)return;
if(1!=t.zoom)return void t.set("animatedZoom",1);var o=dojo._abs(t.domNode),h=t.size.w/t._centerImg.width,a=t.size.h/t._centerImg.height;
t.zoomTo((e-o.x)/h-t.panX,(n-o.y)/a-t.panY,t.autoZoomLevel)}}}),dojo.connect(this.domNode,"flick",this,"handleFlick");
},isAnimating:function(){return this._anim&&"playing"==this._anim.status()},handleDragEnd:function(){
if(this.downX=this.downY=null,console.log("handleDragEnd"),1==this.zoom){if(!this.panX)return;
var t=this._leftImg&&this._leftImg._loaded||this._leftSmallImg&&this._leftSmallImg._loaded,i=this._rightImg&&this._rightImg._loaded||this._rightSmallImg&&this._rightSmallImg._loaded,e=!(Math.abs(this.panX)<this._centerImg._baseWidth/2)&&((this.panX>0&&t?1:0)||(this.panX<0&&i?1:0));
e?this.moveTo(this.panX):this._animPanTo(0,dojo.fx.easing.expoOut,700)}else{if(!this.panX&&!this.panY)return;
this.zoomCenterX-=this.panX/this.zoom,this.zoomCenterY-=this.panY/this.zoom,this.panX=this.panY=0;
}},handleFlick:function(t){1==this.zoom&&t.duration<500&&("ltr"==t.direction?this.moveTo(1):"rtl"==t.direction&&this.moveTo(-1),
this.downX=this.downY=null)},moveTo:function(t){t=t>0?1:-1;var i;1>t?this._rightImg&&this._rightImg._loaded?i=this._rightImg:this._rightSmallImg&&this._rightSmallImg._loaded&&(i=this._rightSmallImg):this._leftImg&&this._leftImg._loaded?i=this._leftImg:this._leftSmallImg&&this._leftSmallImg._loaded&&(i=this._leftSmallImg),
this._moveDir=t;var e=this;i&&i._loaded?this._animPanTo(this.size.w*t,null,500,function(){
e.panX=0,e.panY=0,0>t?e._switchImage("left","right"):e._switchImage("right","left"),
e.render(),e.onChange(-1*t)}):(console.log("moveTo image not loaded!",i),this._animPanTo(0,dojo.fx.easing.expoOut,700));
},_switchImage:function(t,i){var e="_"+t+"SmallImg",n="_"+t+"Img",o="_"+i+"SmallImg",h="_"+i+"Img";
this[n]=this._centerImg,this[e]=this._centerSmallImg,this[n]._type=t,this[e]&&(this[e]._type=t),
this._centerImg=this[h],this._centerSmallImg=this[o],this._centerImg._type="center",
this._centerSmallImg&&(this._centerSmallImg._type="center"),this[h]=this[o]=null},
_animPanTo:function(t,i,e,n){return this._animCallback=n,this._anim=new dojo.Animation({
curve:[this.panX,t],onAnimate:this._updateAnimatedPan,duration:e||500,easing:i,onEnd:this._onAnimPanEnd
}),this._anim.play(),this._anim},onChange:function(t){},_updateAnimatedPan:function(t){
this.panX=t,this.render()},_onAnimPanEnd:function(){this.panX=this.panY=0,this._animCallback&&this._animCallback();
},zoomTo:function(t,i,e){this.set("zoomCenterX",t),this.set("zoomCenterY",i),this.set("animatedZoom",e);
},render:function(){var t=this.canvas.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height),
this._renderImg(this._centerSmallImg,this._centerImg,1==this.zoom?this.panX<0?1:this.panX>0?-1:0:0),
1==this.zoom&&0!=this.panX&&(this.panX>0?this._renderImg(this._leftSmallImg,this._leftImg,1):this._renderImg(this._rightSmallImg,this._rightImg,-1));
},_renderImg:function(t,i,e){var n=i&&i._loaded?i:t;if(n&&n._loaded){var o=this.canvas.getContext("2d"),h=n._baseWidth,a=n._baseHeight,s=h*this.zoom,m=a*this.zoom,d=Math.min(this.size.w,s),r=Math.min(this.size.h,m),l=this.dispWidth=n.width*(d/s),g=this.dispHeight=n.height*(r/m),c=this.zoomCenterX-this.panX/this.zoom,_=this.zoomCenterY-this.panY/this.zoom,u=Math.floor(Math.max(l/2,Math.min(n.width-l/2,c))),p=Math.floor(Math.max(g/2,Math.min(n.height-g/2,_))),I=Math.max(0,Math.round((n.width-l)/2+(u-n._centerX))),f=Math.max(0,Math.round((n.height-g)/2+(p-n._centerY))),X=Math.round(Math.max(0,this.canvas.width-d)/2),w=Math.round(Math.max(0,this.canvas.height-r)/2),z=d,v=l;
1==this.zoom&&e&&this.panX&&(this.panX<0?e>0?(d-=Math.abs(this.panX),X=0):0>e&&(d=Math.max(1,Math.abs(this.panX)-5),
X=this.size.w-d):e>0?(d=Math.max(1,Math.abs(this.panX)-5),X=0):0>e&&(d-=Math.abs(this.panX),
X=this.size.w-d),l=Math.max(1,Math.floor(l*(d/z))),e>0&&(I=I+v-l),I=Math.floor(I));
try{o.drawImage(n,Math.max(0,I),f,Math.min(v,l),g,X,w,Math.min(z,d),r)}catch(M){console.log("Caught Error",M,"type=",n._type,"oldDestWidth = ",z,"destWidth",d,"destX",X,"oldSourceWidth=",v,"sourceWidth=",l,"sourceX = "+I);
}}},_setZoomAttr:function(t){this.zoom=Math.min(this.maxZoom,Math.max(1,t)),1==this.zoom&&this._centerImg&&this._centerImg._loaded&&(this.isAnimating()||(this.zoomCenterX=this._centerImg.width/2,
this.zoomCenterY=this._centerImg.height/2),this.panX=this.panY=0),this.render()},
_setZoomCenterXAttr:function(t){t!=this.zoomCenterX&&(this._centerImg&&this._centerImg._loaded&&(t=Math.min(this._centerImg.width,t)),
this.zoomCenterX=Math.max(0,Math.round(t)))},_setZoomCenterYAttr:function(t){t!=this.zoomCenterY&&(this._centerImg&&this._centerImg._loaded&&(t=Math.min(this._centerImg.height,t)),
this.zoomCenterY=Math.max(0,Math.round(t)))},_setZoomCenterAttr:function(t){(t.x!=this.zoomCenterX||t.y!=this.zoomCenterY)&&(this.set("zoomCenterX",t.x),
this.set("zoomCenterY",t.y),this.render())},_setAnimatedZoomAttr:function(t){this._anim&&"playing"==this._anim.status()||(this._anim=new dojo.Animation({
curve:[this.zoom,t],onAnimate:this._updateAnimatedZoom,onEnd:this._onAnimEnd}),this._anim.play());
},_updateAnimatedZoom:function(t){this._setZoomAttr(t)},_setCenterUrlAttr:function(t){
this._setImage("center",t)},_setLeftUrlAttr:function(t){this._setImage("left",t)},
_setRightUrlAttr:function(t){this._setImage("right",t)},_setImage:function(t,i){var e=null,n=null;
if(dojo.isString(i)?n=i:(n=i.large,e=i.small),!this["_"+t+"Img"]||this["_"+t+"Img"]._src!=n){
var o=this["_"+t+"Img"]=new Image;if(o._type=t,o._loaded=!1,o._src=n,o._conn=dojo.connect(o,"onload",this.handleLoad),
e){var h=this["_"+t+"SmallImg"]=new Image;h._type=t,h._loaded=!1,h._conn=dojo.connect(h,"onload",this.handleLoad),
h._isSmall=!0,h._src=e,h.src=e}o.src=n}},handleLoad:function(t){var i=t.target;i._loaded=!0,
dojo.disconnect(i._conn);var e=i._type;switch(e){case"center":this.zoomCenterX=i.width/2,
this.zoomCenterY=i.height/2}var n=i.height,o=i.width;o/this.size.w<n/this.size.h?(i._baseHeight=this.canvas.height,
i._baseWidth=o/(n/this.size.h)):(i._baseWidth=this.canvas.width,i._baseHeight=n/(o/this.size.w)),
i._centerX=o/2,i._centerY=n/2,this.render(),this.onLoad(i._type,i._src,i._isSmall);
},onLoad:function(t,i,e){}});