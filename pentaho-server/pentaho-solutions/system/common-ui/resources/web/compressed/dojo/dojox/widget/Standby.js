define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/event","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/window","dojo/_base/window","dojo/_base/fx","dojo/fx","dijit/_Widget","dijit/_TemplatedMixin","dijit/registry"],function(e,t,i,o,d,s,n,r,a,h,l,c,_,p,y,f,u){
return e.experimental("dojox.widget.Standby"),t("dojox.widget.Standby",[y,f],{image:require.toUrl("dojox/widget/Standby/images/loading.gif").toString(),
imageText:"Please Wait...",text:"Please wait...",centerIndicator:"image",target:"",
color:"#C0C0C0",duration:500,zIndex:"auto",opacity:.75,templateString:'<div><div style="display: none; opacity: 0; z-index: 9999; position: absolute; cursor:wait;" dojoAttachPoint="_underlayNode"></div><img src="${image}" style="opacity: 0; display: none; z-index: -10000; position: absolute; top: 0px; left: 0px; cursor:wait;" dojoAttachPoint="_imageNode"><div style="opacity: 0; display: none; z-index: -10000; position: absolute; top: 0px;" dojoAttachPoint="_textNode"></div></div>',
_underlayNode:null,_imageNode:null,_textNode:null,_centerNode:null,_displayed:!1,
_resizeCheck:null,_started:!1,_parent:null,startup:function(e){if(!this._started){
if("string"==typeof this.target){var t=u.byId(this.target);this.target=t?t.domNode:s.byId(this.target);
}this.text&&(this._textNode.innerHTML=this.text),"image"===this.centerIndicator?(this._centerNode=this._imageNode,
n.set(this._imageNode,"src",this.image),n.set(this._imageNode,"alt",this.imageText)):this._centerNode=this._textNode,
h.set(this._underlayNode,{display:"none",backgroundColor:this.color}),h.set(this._centerNode,"display","none"),
this.connect(this._underlayNode,"onclick","_ignore"),this.domNode.parentNode&&this.domNode.parentNode!=c.body()&&c.body().appendChild(this.domNode),
7==d("ie")&&(this._ieFixNode=r.create("div"),h.set(this._ieFixNode,{opacity:"0",zIndex:"-1000",
position:"absolute",top:"-1000px"}),c.body().appendChild(this._ieFixNode)),this.inherited(arguments);
}},show:function(){this._displayed||(this._anim&&(this._anim.stop(),delete this._anim),
this._displayed=!0,this._size(),this._disableOverflow(),this._fadeIn())},hide:function(){
this._displayed&&(this._anim&&(this._anim.stop(),delete this._anim),this._size(),
this._fadeOut(),this._displayed=!1,null!==this._resizeCheck&&(clearInterval(this._resizeCheck),
this._resizeCheck=null))},isVisible:function(){return this._displayed},onShow:function(){},
onHide:function(){},uninitialize:function(){this._displayed=!1,this._resizeCheck&&clearInterval(this._resizeCheck),
h.set(this._centerNode,"display","none"),h.set(this._underlayNode,"display","none"),
7==d("ie")&&this._ieFixNode&&(c.body().removeChild(this._ieFixNode),delete this._ieFixNode),
this._anim&&(this._anim.stop(),delete this._anim),this.target=null,this._imageNode=null,
this._textNode=null,this._centerNode=null,this.inherited(arguments)},_size:function(){
if(this._displayed){var e=n.get(c.body(),"dir");e&&(e=e.toLowerCase());var t,i=this._scrollerWidths(),o=this.target,s=h.get(this._centerNode,"display");
h.set(this._centerNode,"display","block");var r=a.position(o,!0);(o===c.body()||o===c.doc)&&(r=l.getBox(),
r.x=r.l,r.y=r.t);var _=a.getMarginBox(this._centerNode);h.set(this._centerNode,"display",s),
this._ieFixNode&&(t=-this._ieFixNode.offsetTop/1e3,r.x=Math.floor((r.x+.9)/t),r.y=Math.floor((r.y+.9)/t),
r.w=Math.floor((r.w+.9)/t),r.h=Math.floor((r.h+.9)/t));var p=h.get(o,"zIndex"),y=p,f=p;
if("auto"===this.zIndex)if("auto"!=p)y=parseInt(y,10)+1,f=parseInt(f,10)+2;else for(var u=o.parentNode,g=-1e5;u&&u!==c.body();)if(p=h.get(u,"zIndex"),
p&&"auto"!==p){var x=parseInt(p,10);x>g&&(g=x,y=x+1,f=x+2),u=u.parentNode}else u=u.parentNode;else y=parseInt(this.zIndex,10)+1,
f=parseInt(this.zIndex,10)+2;h.set(this._centerNode,"zIndex",f),h.set(this._underlayNode,"zIndex",y);
var N=o.parentNode;if(N&&N!==c.body()&&o!==c.body()&&o!==c.doc){var v=r.h,w=r.w,m=a.position(N,!0);
this._ieFixNode&&(t=-this._ieFixNode.offsetTop/1e3,m.x=Math.floor((m.x+.9)/t),m.y=Math.floor((m.y+.9)/t),
m.w=Math.floor((m.w+.9)/t),m.h=Math.floor((m.h+.9)/t)),m.w-=N.scrollHeight>N.clientHeight&&N.clientHeight>0?i.v:0,
m.h-=N.scrollWidth>N.clientWidth&&N.clientWidth>0?i.h:0,"rtl"===e&&(d("opera")?(r.x+=N.scrollHeight>N.clientHeight&&N.clientHeight>0?i.v:0,
m.x+=N.scrollHeight>N.clientHeight&&N.clientHeight>0?i.v:0):d("ie")?m.x+=N.scrollHeight>N.clientHeight&&N.clientHeight>0?i.v:0:d("webkit")),
m.w<r.w&&(r.w=r.w-m.w),m.h<r.h&&(r.h=r.h-m.h);var b,z=m.y,I=m.y+m.h,C=r.y,B=r.y+v,k=m.x,j=m.x+m.w,H=r.x,R=r.x+w;
if(B>z&&z>C){r.y=m.y,b=z-C;var M=v-b;M<m.h?r.h=M:r.h-=2*(N.scrollWidth>N.clientWidth&&N.clientWidth>0?i.h:0);
}else I>C&&B>I?r.h=I-C:(z>=B||C>=I)&&(r.h=0);if(R>k&&k>H){r.x=m.x,b=k-H;var T=w-b;
T<m.w?r.w=T:r.w-=2*(N.scrollHeight>N.clientHeight&&N.clientHeight>0?i.w:0)}else j>H&&R>j?r.w=j-H:(k>=R||H>=j)&&(r.w=0);
}if(r.h>0&&r.w>0){h.set(this._underlayNode,{display:"block",width:r.w+"px",height:r.h+"px",
top:r.y+"px",left:r.x+"px"});var O=["borderRadius","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"];
this._cloneStyles(O),d("ie")||(O=["MozBorderRadius","MozBorderRadiusTopleft","MozBorderRadiusTopright","MozBorderRadiusBottomleft","MozBorderRadiusBottomright","WebkitBorderRadius","WebkitBorderTopLeftRadius","WebkitBorderTopRightRadius","WebkitBorderBottomLeftRadius","WebkitBorderBottomRightRadius"],
this._cloneStyles(O,this));var W=r.h/2-_.h/2,P=r.w/2-_.w/2;r.h>=_.h&&r.w>=_.w?h.set(this._centerNode,{
top:W+r.y+"px",left:P+r.x+"px",display:"block"}):h.set(this._centerNode,"display","none");
}else h.set(this._underlayNode,"display","none"),h.set(this._centerNode,"display","none");
if(null===this._resizeCheck){var F=this;this._resizeCheck=setInterval(function(){
F._size()},100)}}},_cloneStyles:function(e){i.forEach(e,function(e){h.set(this._underlayNode,e,h.get(this.target,e));
},this)},_fadeIn:function(){var e=this,t=_.animateProperty({duration:e.duration,node:e._underlayNode,
properties:{opacity:{start:0,end:e.opacity}}}),i=_.animateProperty({duration:e.duration,
node:e._centerNode,properties:{opacity:{start:0,end:1}},onEnd:function(){e.onShow(),
delete e._anim}});this._anim=p.combine([t,i]),this._anim.play()},_fadeOut:function(){
var e=this,t=_.animateProperty({duration:e.duration,node:e._underlayNode,properties:{
opacity:{start:e.opacity,end:0}},onEnd:function(){h.set(this.node,{display:"none",
zIndex:"-1000"})}}),i=_.animateProperty({duration:e.duration,node:e._centerNode,properties:{
opacity:{start:1,end:0}},onEnd:function(){h.set(this.node,{display:"none",zIndex:"-1000"
}),e.onHide(),e._enableOverflow(),delete e._anim}});this._anim=p.combine([t,i]),this._anim.play();
},_ignore:function(e){e&&o.stop(e)},_scrollerWidths:function(){var e=r.create("div");
h.set(e,{position:"absolute",opacity:0,overflow:"hidden",width:"50px",height:"50px",
zIndex:"-100",top:"-200px",padding:"0px",margin:"0px"});var t=r.create("div");h.set(t,{
width:"200px",height:"10px"}),e.appendChild(t),c.body().appendChild(e);var i=a.getContentBox(e);
h.set(e,"overflow","scroll");var o=a.getContentBox(e);return c.body().removeChild(e),
{v:i.w-o.w,h:i.h-o.h}},_setTextAttr:function(e){this._textNode.innerHTML=e,this.text=e;
},_setColorAttr:function(e){h.set(this._underlayNode,"backgroundColor",e),this.color=e;
},_setImageTextAttr:function(e){n.set(this._imageNode,"alt",e),this.imageText=e},
_setImageAttr:function(e){n.set(this._imageNode,"src",e),this.image=e},_setCenterIndicatorAttr:function(e){
this.centerIndicator=e,"image"===e?(this._centerNode=this._imageNode,h.set(this._textNode,"display","none")):(this._centerNode=this._textNode,
h.set(this._imageNode,"display","none"))},_disableOverflow:function(){if(this.target===c.body()||this.target===c.doc){
this._overflowDisabled=!0;var e=c.body();if(e.style&&e.style.overflow?this._oldOverflow=h.get(e,"overflow"):this._oldOverflow="",
d("ie")&&!d("quirks")){if(e.parentNode&&e.parentNode.style&&e.parentNode.style.overflow)this._oldBodyParentOverflow=e.parentNode.style.overflow;else try{
this._oldBodyParentOverflow=h.get(e.parentNode,"overflow")}catch(t){this._oldBodyParentOverflow="scroll";
}h.set(e.parentNode,"overflow","hidden")}h.set(e,"overflow","hidden")}},_enableOverflow:function(){
if(this._overflowDisabled){delete this._overflowDisabled;var e=c.body();if(d("ie")&&!d("quirks")&&(e.parentNode.style.overflow=this._oldBodyParentOverflow,
delete this._oldBodyParentOverflow),h.set(e,"overflow",this._oldOverflow),d("webkit")){
var t=r.create("div",{style:{height:"2px"}});e.appendChild(t),setTimeout(function(){
e.removeChild(t)},0)}delete this._oldOverflow}}})});