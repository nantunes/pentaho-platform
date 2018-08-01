define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/sniff","dojo/ready","dojo/_base/window"],function(t,i,e,o,s,h){
var l=i("dojox.mdnd.AutoScroll",null,{interval:3,recursiveTimer:10,marginMouse:50,
constructor:function(){this.resizeHandler=o.connect(t.global,"onresize",this,function(){
this.getViewport()}),h(e.hitch(this,"init"))},init:function(){this._html=s("webkit")?t.body():t.body().parentNode,
this.getViewport()},getViewport:function(){var i=t.doc,e=i.documentElement,o=window,s=t.body();
t.isMozilla?this._v={w:e.clientWidth,h:o.innerHeight}:!t.isOpera&&o.innerWidth?this._v={
w:o.innerWidth,h:o.innerHeight}:!t.isOpera&&e&&e.clientWidth?this._v={w:e.clientWidth,
h:e.clientHeight}:s.clientWidth&&(this._v={w:s.clientWidth,h:s.clientHeight})},setAutoScrollNode:function(t){
this._node=t},setAutoScrollMaxPage:function(){this._yMax=this._html.scrollHeight,
this._xMax=this._html.scrollWidth},checkAutoScroll:function(t){this._autoScrollActive&&this.stopAutoScroll(),
this._y=t.pageY,this._x=t.pageX,t.clientX<this.marginMouse?(this._autoScrollActive=!0,
this._autoScrollLeft(t)):t.clientX>this._v.w-this.marginMouse&&(this._autoScrollActive=!0,
this._autoScrollRight(t)),t.clientY<this.marginMouse?(this._autoScrollActive=!0,this._autoScrollUp(t)):t.clientY>this._v.h-this.marginMouse&&(this._autoScrollActive=!0,
this._autoScrollDown())},_autoScrollDown:function(){this._timer&&clearTimeout(this._timer),
this._autoScrollActive&&this._y+this.marginMouse<this._yMax&&(this._html.scrollTop+=this.interval,
this._node.style.top=parseInt(this._node.style.top)+this.interval+"px",this._y+=this.interval,
this._timer=setTimeout(e.hitch(this,"_autoScrollDown"),this.recursiveTimer))},_autoScrollUp:function(){
this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._y-this.marginMouse>0&&(this._html.scrollTop-=this.interval,
this._node.style.top=parseInt(this._node.style.top)-this.interval+"px",this._y-=this.interval,
this._timer=setTimeout(e.hitch(this,"_autoScrollUp"),this.recursiveTimer))},_autoScrollRight:function(){
this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._x+this.marginMouse<this._xMax&&(this._html.scrollLeft+=this.interval,
this._node.style.left=parseInt(this._node.style.left)+this.interval+"px",this._x+=this.interval,
this._timer=setTimeout(e.hitch(this,"_autoScrollRight"),this.recursiveTimer))},_autoScrollLeft:function(t){
this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._x-this.marginMouse>0&&(this._html.scrollLeft-=this.interval,
this._node.style.left=parseInt(this._node.style.left)-this.interval+"px",this._x-=this.interval,
this._timer=setTimeout(e.hitch(this,"_autoScrollLeft"),this.recursiveTimer))},stopAutoScroll:function(){
this._timer&&clearTimeout(this._timer),this._autoScrollActive=!1},destroy:function(){
o.disconnect(this.resizeHandler)}});return dojox.mdnd.autoScroll=null,dojox.mdnd.autoScroll=new dojox.mdnd.AutoScroll,
l});