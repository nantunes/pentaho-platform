define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(t,e,a,i,o){
t.experimental("dojox.gesture.tap");var n=e(i,{defaultEvent:"tap",subEvents:["hold","doubletap"],
holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(t,e){if(e.touches&&e.touches.length>=2)return clearTimeout(t.tapTimeOut),
void delete t.context;var i=e.target;this._initTap(t,e),t.tapTimeOut=setTimeout(a.hitch(this,function(){
this._isTap(t,e)&&this.fire(i,{type:"tap.hold"}),delete t.context}),this.holdThreshold);
},release:function(t,e){if(!t.context)return void clearTimeout(t.tapTimeOut);if(this._isTap(t,e))switch(t.context.c){
case 1:this.fire(e.target,{type:"tap"});break;case 2:this.fire(e.target,{type:"tap.doubletap"
})}clearTimeout(t.tapTimeOut)},_initTap:function(t,e){t.context||(t.context={x:0,
y:0,t:0,c:0});var a=(new Date).getTime();a-t.context.t<=this.doubleTapTimeout?t.context.c++:(t.context.c=1,
t.context.x=e.screenX,t.context.y=e.screenY),t.context.t=a},_isTap:function(t,e){
var a=Math.abs(t.context.x-e.screenX),i=Math.abs(t.context.y-e.screenY);return a<=this.tapRadius&&i<=this.tapRadius;
}});return o.gesture.tap=new n,o.gesture.tap.Tap=n,o.gesture.tap});