define(["dojo","../util/common"],function(t,e){var i=!1,n=!0,o="abcdefghijklmnopqrstuvwxyz",s={
arrowIncrement:1,arrowShiftIncrement:10,shift:!1,ctrl:!1,alt:!1,cmmd:!1,meta:!1,onDelete:function(t){},
onEsc:function(t){},onEnter:function(t){},onArrow:function(t){},onKeyDown:function(t){},
onKeyUp:function(t){},listeners:[],register:function(t){var i=e.uid("listener");this.listeners.push({
handle:i,scope:t.scope||window,callback:t.callback,keyCode:t.keyCode})},_getLetter:function(t){
return!t.meta&&t.keyCode>=65&&t.keyCode<=90?o.charAt(t.keyCode-65):null},_mixin:function(t){
return t.meta=this.meta,t.shift=this.shift,t.alt=this.alt,t.cmmd=this.cmmd,t.ctrl=this.ctrl,
t.letter=this._getLetter(t),t},editMode:function(t){i=t},enable:function(t){n=t},
scanForFields:function(){this._fieldCons&&t.forEach(this._fieldCons,t.disconnect,t),
this._fieldCons=[],t.query("input").forEach(function(e){var i=t.connect(e,"focus",this,function(t){
this.enable(!1)}),n=t.connect(e,"blur",this,function(t){this.enable(!0)});this._fieldCons.push(i),
this._fieldCons.push(n)},this)},init:function(){setTimeout(t.hitch(this,"scanForFields"),500),
t.connect(document,"blur",this,function(t){this.meta=this.shift=this.ctrl=this.cmmd=this.alt=!1;
}),t.connect(document,"keydown",this,function(e){n&&(16==e.keyCode&&(this.shift=!0),
17==e.keyCode&&(this.ctrl=!0),18==e.keyCode&&(this.alt=!0),224==e.keyCode&&(this.cmmd=!0),
this.meta=this.shift||this.ctrl||this.cmmd||this.alt,i||(this.onKeyDown(this._mixin(e)),
(8==e.keyCode||46==e.keyCode)&&t.stopEvent(e)))}),t.connect(document,"keyup",this,function(e){
if(n){var o=!1;16==e.keyCode&&(this.shift=!1),17==e.keyCode&&(this.ctrl=!1),18==e.keyCode&&(this.alt=!1),
224==e.keyCode&&(this.cmmd=!1),this.meta=this.shift||this.ctrl||this.cmmd||this.alt,
!i&&this.onKeyUp(this._mixin(e)),13==e.keyCode&&(console.warn("KEY ENTER"),this.onEnter(e),
o=!0),27==e.keyCode&&(this.onEsc(e),o=!0),(8==e.keyCode||46==e.keyCode)&&(this.onDelete(e),
o=!0),o&&!i&&t.stopEvent(e)}}),t.connect(document,"keypress",this,function(e){if(n){
var o=this.shift?this.arrowIncrement*this.arrowShiftIncrement:this.arrowIncrement,s=e.alt||this.cmmd,h=0,c=0;
32!=e.keyCode||i||t.stopEvent(e),37!=e.keyCode||s||(h=-o),38!=e.keyCode||s||(c=-o),
39!=e.keyCode||s||(h=o),40!=e.keyCode||s||(c=o),(h||c)&&(e.x=h,e.y=c,e.shift=this.shift,
i||(this.onArrow(e),t.stopEvent(e)))}})}};return t.addOnLoad(s,"init"),s});