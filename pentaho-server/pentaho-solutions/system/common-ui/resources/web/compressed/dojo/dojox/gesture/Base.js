define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/on","dojo/touch","dojo/has","../main"],function(e,t,n,s,i,o,a,c,r){
return e.experimental("dojox.gesture.Base"),s.getObject("gesture",!0,r),t(null,{defaultEvent:" ",
subEvents:[],touchOnly:!1,_elements:null,constructor:function(e){s.mixin(this,e),
this.init()},init:function(){if(this._elements=[],!c("touch")&&this.touchOnly)return void console.warn("Gestures:[",this.defaultEvent,"] is only supported on touch devices!");
var e=this.defaultEvent;this.call=this._handle(e),this._events=[e],n.forEach(this.subEvents,function(t){
this[t]=this._handle(e+"."+t),this._events.push(e+"."+t)},this)},_handle:function(e){
var t=this;return function(n,s){var i=arguments;i.length>2&&(n=i[1],s=i[2]);var a=n&&(n.nodeType||n.attachEvent||n.addEventListener);
if(a){var c=t._add(n,e,s),r={remove:function(){c.remove(),t._remove(n,e)}};return r;
}return o(n,e,s)}},_add:function(e,t,n){var i=this._getGestureElement(e);if(!i){i={
target:e,data:{},handles:{}};var c=s.hitch(this,"_process",i,"press"),r=s.hitch(this,"_process",i,"move"),l=s.hitch(this,"_process",i,"release"),h=s.hitch(this,"_process",i,"cancel"),u=i.handles;
this.touchOnly?(u.press=o(e,"touchstart",c),u.move=o(e,"touchmove",r),u.release=o(e,"touchend",l),
u.cancel=o(e,"touchcancel",h)):(u.press=a.press(e,c),u.move=a.move(e,r),u.release=a.release(e,l),
u.cancel=a.cancel(e,h)),this._elements.push(i)}return i.handles[t]=i.handles[t]?++i.handles[t]:1,
o(e,t,n)},_getGestureElement:function(e){for(var t,n=0;n<this._elements.length;n++)if(t=this._elements[n],
t.target===e)return t},_process:function(e,t,n){n._locking=n._locking||{},n._locking[this.defaultEvent]||this.isLocked(n.currentTarget)||("INPUT"==n.target.tagName&&"radio"!=n.target.type&&"checkbox"!=n.target.type||"TEXTAREA"==n.target.tagName||n.preventDefault(),
n._locking[this.defaultEvent]=!0,this[t](e.data,n))},press:function(e,t){},move:function(e,t){},
release:function(e,t){},cancel:function(e,t){},fire:function(e,t){e&&t&&(t.bubbles=!0,
t.cancelable=!0,o.emit(e,t.type,t))},_remove:function(e,t){var s=this._getGestureElement(e);
if(s&&s.handles){s.handles[t]--;var i=s.handles;if(!n.some(this._events,function(e){
return i[e]>0})){this._cleanHandles(i);var o=n.indexOf(this._elements,s);o>=0&&this._elements.splice(o,1);
}}},_cleanHandles:function(e){for(var t in e)e[t].remove&&e[t].remove(),delete e[t];
},lock:function(e){this._lock=e},unLock:function(){this._lock=null},isLocked:function(e){
return this._lock&&e?this._lock!==e&&i.isDescendant(e,this._lock):!1},destroy:function(){
n.forEach(this._elements,function(e){this._cleanHandles(e.handles)},this),this._elements=null;
}})});