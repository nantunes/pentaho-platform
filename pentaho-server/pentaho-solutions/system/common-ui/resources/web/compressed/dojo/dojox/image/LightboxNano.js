define(["dojo","dojo/fx"],function(t,e){var o="absolute",i="visibility",n=function(){
var e="BackCompat"==t.doc.compatMode?t.body():t.doc.documentElement,o=t._docScroll();
return{w:e.clientWidth,h:e.clientHeight,l:o.x,t:o.y}};return t.declare("dojox.image.LightboxNano",null,{
href:"",duration:500,preloadDelay:5e3,constructor:function(e,o){var i=this;if(t.mixin(i,e),
o=i._node=t.byId(o)){if(!/a/i.test(o.tagName)){var n=t.create("a",{href:i.href,"class":o.className
},o,"after");o.className="",n.appendChild(o),o=n}t.style(o,"position","relative"),
i._createDiv("dojoxEnlarge",o),t.setSelectable(o,!1),i._onClickEvt=t.connect(o,"onclick",i,"_load");
}i.href&&setTimeout(function(){(new Image).src=i.href,i._hideLoading()},i.preloadDelay);
},destroy:function(){var e=this._connects||[];e.push(this._onClickEvt),t.forEach(e,t.disconnect),
t.destroy(this._node)},_createDiv:function(e,i,n){return t.create("div",{"class":e,
style:{position:o,display:n?"":"none"}},i)},_load:function(e){var i=this;if(e&&t.stopEvent(e),
!i._loading){i._loading=!0,i._reset();var n=i._img=t.create("img",{style:{visibility:"hidden",
cursor:"pointer",position:o,top:0,left:0,zIndex:9999999}},t.body()),s=i._loadingNode,d=t.query("img",i._node)[0]||i._node,a=t.position(d,!0),r=t.contentBox(d),c=t._getBorderExtents(d);
if(null==s){i._loadingNode=s=i._createDiv("dojoxLoading",i._node,!0);var l=t.marginBox(s);
t.style(s,{left:parseInt((r.w-l.w)/2)+"px",top:parseInt((r.h-l.h)/2)+"px"})}r.x=a.x-10+c.l,
r.y=a.y-10+c.t,i._start=r,i._connects=[t.connect(n,"onload",i,"_show")],n.src=i.href;
}},_hideLoading:function(){this._loadingNode&&t.style(this._loadingNode,"display","none"),
this._loadingNode=!1},_show:function(){var e=this,s=n(),d=e._img.width,a=e._img.height,r=parseInt(.9*(s.w-20)),c=parseInt(.9*(s.h-20)),l=t.doc,_=e._bg=t.create("div",{
style:{backgroundColor:"#000",opacity:0,position:o,zIndex:9999998}},t.body());e._loadingNode;
e._loadingNode&&e._hideLoading(),t.style(e._img,{border:"10px solid #fff",visibility:"visible"
}),t.style(e._node,i,"hidden"),e._loading=!1,e._connects=e._connects.concat([t.connect(l,"onmousedown",e,"_hide"),t.connect(l,"onkeypress",e,"_key"),t.connect(window,"onresize",e,"_sizeBg")]),
d>r&&(a=a*r/d,d=r),a>c&&(d=d*c/a,a=c),e._end={x:(s.w-20-d)/2+s.l,y:(s.h-20-a)/2+s.t,
w:d,h:a},e._sizeBg(),t.fx.combine([e._anim(e._img,e._coords(e._start,e._end)),e._anim(_,{
opacity:.5})]).play()},_sizeBg:function(){var e=t.doc.documentElement;t.style(this._bg,{
top:0,left:0,width:e.scrollWidth+"px",height:e.scrollHeight+"px"})},_key:function(e){
t.stopEvent(e),this._hide()},_coords:function(t,e){return{left:{start:t.x,end:e.x
},top:{start:t.y,end:e.y},width:{start:t.w,end:e.w},height:{start:t.h,end:e.h}}},
_hide:function(){var e=this;t.forEach(e._connects,t.disconnect),e._connects=[],t.fx.combine([e._anim(e._img,e._coords(e._end,e._start),"_reset"),e._anim(e._bg,{
opacity:0})]).play()},_reset:function(){t.style(this._node,i,"visible"),t.destroy(this._img),
t.destroy(this._bg),this._img=this._bg=null,this._node.focus()},_anim:function(e,o,i){
return t.animateProperty({node:e,duration:this.duration,properties:o,onEnd:i?t.hitch(this,i):null
})},show:function(e){e=e||{},this.href=e.href||this.href;var i=t.byId(e.origin),s=n();
this._node=i||t.create("div",{style:{position:o,width:0,hieght:0,left:s.l+s.w/2+"px",
top:s.t+s.h/2+"px"}},t.body()),this._load(),i||t.destroy(this._node)}})});