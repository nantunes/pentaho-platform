define(["./_base/lang","./Evented","./_base/kernel","./_base/array","./aspect","./_base/fx","./dom","./dom-style","./dom-geometry","./ready","require"],function(t,n,i,e,o,r,s,a,h,u,c){
i.isAsync||u(0,function(){var t=["./fx/Toggler"];c(t)});var f=i.fx={},_={_fire:function(t,n){
return this[t]&&this[t].apply(this,n||[]),this}},d=function(t){this._index=-1,this._animations=t||[],
this._current=this._onAnimateCtx=this._onEndCtx=null,this.duration=0,e.forEach(this._animations,function(t){
this.duration+=t.duration,t.delay&&(this.duration+=t.delay)},this)};d.prototype=new n,
t.extend(d,{_onAnimate:function(){this._fire("onAnimate",arguments)},_onEnd:function(){
this._onAnimateCtx.remove(),this._onEndCtx.remove(),this._onAnimateCtx=this._onEndCtx=null,
this._index+1==this._animations.length?this._fire("onEnd"):(this._current=this._animations[++this._index],
this._onAnimateCtx=o.after(this._current,"onAnimate",t.hitch(this,"_onAnimate"),!0),
this._onEndCtx=o.after(this._current,"onEnd",t.hitch(this,"_onEnd"),!0),this._current.play(0,!0));
},play:function(n,i){if(this._current||(this._current=this._animations[this._index=0]),
!i&&"playing"==this._current.status())return this;var e=o.after(this._current,"beforeBegin",t.hitch(this,function(){
this._fire("beforeBegin")}),!0),r=o.after(this._current,"onBegin",t.hitch(this,function(t){
this._fire("onBegin",arguments)}),!0),s=o.after(this._current,"onPlay",t.hitch(this,function(t){
this._fire("onPlay",arguments),e.remove(),r.remove(),s.remove()}));return this._onAnimateCtx&&this._onAnimateCtx.remove(),
this._onAnimateCtx=o.after(this._current,"onAnimate",t.hitch(this,"_onAnimate"),!0),
this._onEndCtx&&this._onEndCtx.remove(),this._onEndCtx=o.after(this._current,"onEnd",t.hitch(this,"_onEnd"),!0),
this._current.play.apply(this._current,arguments),this},pause:function(){if(this._current){
var n=o.after(this._current,"onPause",t.hitch(this,function(t){this._fire("onPause",arguments),
n.remove()}),!0);this._current.pause()}return this},gotoPercent:function(t,n){this.pause();
var i=this.duration*t;return this._current=null,e.some(this._animations,function(t){
return t.duration<=i?(this._current=t,!0):(i-=t.duration,!1)}),this._current&&this._current.gotoPercent(i/this._current.duration,n),
this},stop:function(n){if(this._current){if(n){for(;this._index+1<this._animations.length;++this._index)this._animations[this._index].stop(!0);
this._current=this._animations[this._index]}var i=o.after(this._current,"onStop",t.hitch(this,function(t){
this._fire("onStop",arguments),i.remove()}),!0);this._current.stop()}return this},
status:function(){return this._current?this._current.status():"stopped"},destroy:function(){
this._onAnimateCtx&&this._onAnimateCtx.remove(),this._onEndCtx&&this._onEndCtx.remove();
}}),t.extend(d,_),f.chain=function(t){return new d(t)};var l=function(n){this._animations=n||[],
this._connects=[],this._finished=0,this.duration=0,e.forEach(n,function(n){var i=n.duration;
n.delay&&(i+=n.delay),this.duration<i&&(this.duration=i),this._connects.push(o.after(n,"onEnd",t.hitch(this,"_onEnd"),!0));
},this),this._pseudoAnimation=new r.Animation({curve:[0,1],duration:this.duration
});var i=this;e.forEach(["beforeBegin","onBegin","onPlay","onAnimate","onPause","onStop","onEnd"],function(t){
i._connects.push(o.after(i._pseudoAnimation,t,function(){i._fire(t,arguments)},!0));
})};return t.extend(l,{_doAction:function(t,n){return e.forEach(this._animations,function(i){
i[t].apply(i,n)}),this},_onEnd:function(){++this._finished>this._animations.length&&this._fire("onEnd");
},_call:function(t,n){var i=this._pseudoAnimation;i[t].apply(i,n)},play:function(t,n){
return this._finished=0,this._doAction("play",arguments),this._call("play",arguments),
this},pause:function(){return this._doAction("pause",arguments),this._call("pause",arguments),
this},gotoPercent:function(t,n){var i=this.duration*t;return e.forEach(this._animations,function(t){
t.gotoPercent(t.duration<i?1:i/t.duration,n)}),this._call("gotoPercent",arguments),
this},stop:function(t){return this._doAction("stop",arguments),this._call("stop",arguments),
this},status:function(){return this._pseudoAnimation.status()},destroy:function(){
e.forEach(this._connects,function(t){t.remove()})}}),t.extend(l,_),f.combine=function(t){
return new l(t)},f.wipeIn=function(n){var i,e=n.node=s.byId(n.node),h=e.style,u=r.animateProperty(t.mixin({
properties:{height:{start:function(){if(i=h.overflow,h.overflow="hidden","hidden"==h.visibility||"none"==h.display)return h.height="1px",
h.display="",h.visibility="",1;var t=a.get(e,"height");return Math.max(t,1)},end:function(){
return e.scrollHeight}}}},n)),c=function(){h.height="auto",h.overflow=i};return o.after(u,"onStop",c,!0),
o.after(u,"onEnd",c,!0),u},f.wipeOut=function(n){var i,e=n.node=s.byId(n.node),a=e.style,h=r.animateProperty(t.mixin({
properties:{height:{end:1}}},n));o.after(h,"beforeBegin",function(){i=a.overflow,
a.overflow="hidden",a.display=""},!0);var u=function(){a.overflow=i,a.height="auto",
a.display="none"};return o.after(h,"onStop",u,!0),o.after(h,"onEnd",u,!0),h},f.slideTo=function(n){
var i=n.node=s.byId(n.node),e=null,u=null,c=function(t){return function(){var n=a.getComputedStyle(t),i=n.position;
if(e="absolute"==i?t.offsetTop:parseInt(n.top)||0,u="absolute"==i?t.offsetLeft:parseInt(n.left)||0,
"absolute"!=i&&"relative"!=i){var o=h.position(t,!0);e=o.y,u=o.x,t.style.position="absolute",
t.style.top=e+"px",t.style.left=u+"px"}}}(i);c();var f=r.animateProperty(t.mixin({
properties:{top:n.top||0,left:n.left||0}},n));return o.after(f,"beforeBegin",c,!0),
f},f});