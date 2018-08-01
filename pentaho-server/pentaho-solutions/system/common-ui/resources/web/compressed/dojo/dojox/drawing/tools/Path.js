define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Path"],function(t,s,i,e){
var h=s.declare(e,function(){this.pathMode="",this.currentPathMode="",this._started=!1,
this.oddEvenClicks=0},{draws:!0,onDown:function(t){this._started||this.onStartPath(t);
},makeSubPath:function(t){t&&("Q"==this.currentPathMode&&this.points.push({x:this.points[0].x,
y:this.points[0].y}),this.points.push({t:"Z"}),this.render()),this.currentPathMode="",
this.pathMode="M"},onStartPath:function(t){this._started=!0,this.revertRenderHit=this.renderHit,
this.renderHit=!1,this.closePath=!1,this.mouse.setEventMode("PathEdit"),this.closePoint={
x:t.x,y:t.y},this._kc1=this.connect(this.keys,"onEsc",this,function(){this.onCompletePath(!1);
}),this._kc2=this.connect(this.keys,"onKeyUp",this,function(t){switch(t.letter){case"c":
this.onCompletePath(!0);break;case"l":this.pathMode="L";break;case"m":this.makeSubPath(!1);
break;case"q":this.pathMode="Q";break;case"s":this.pathMode="S";break;case"z":this.makeSubPath(!0);
}})},onCompletePath:function(t){this.remove(this.closeGuide,this.guide);var s=this.getBounds();
return s.w<this.minimumSize&&s.h<this.minimumSize?(this.remove(this.hit,this.shape,this.closeGuide),
this._started=!1,this.mouse.setEventMode(""),void this.setPoints([])):(t&&("Q"==this.currentPathMode&&this.points.push({
x:this.points[0].x,y:this.points[0].y}),this.closePath=!0),this.renderHit=this.revertRenderHit,
this.renderedOnce=!0,this.onRender(this),this.disconnect([this._kc1,this._kc2]),this.mouse.setEventMode(""),
void this.render())},onUp:function(t){if(this._started&&t.withinCanvas)if(this.points.length>2&&this.closeRadius>this.util.distance(t.x,t.y,this.closePoint.x,this.closePoint.y))this.onCompletePath(!0);else{
var s={x:t.x,y:t.y};this.oddEvenClicks++,this.currentPathMode!=this.pathMode&&("Q"==this.pathMode?(s.t="Q",
this.oddEvenClicks=0):"L"==this.pathMode?s.t="L":"M"==this.pathMode&&(s.t="M",this.closePoint={
x:t.x,y:t.y}),this.currentPathMode=this.pathMode),this.points.push(s),this.points.length>1&&(this.remove(this.guide),
this.render())}},createGuide:function(t){if(this.points.length){var s=[].concat(this.points),i={
x:t.x,y:t.y};"Q"==this.currentPathMode&&this.oddEvenClicks%2&&(i.t="L"),this.points.push(i),
this.render(),this.points=s;var e=this.util.distance(t.x,t.y,this.closePoint.x,this.closePoint.y);
if(this.points.length>1)if(e<this.closeRadius&&!this.closeGuide){var h={cx:this.closePoint.x,
cy:this.closePoint.y,rx:this.closeRadius,ry:this.closeRadius};this.closeGuide=this.container.createEllipse(h).setFill(this.closeColor);
}else e>this.closeRadius&&this.closeGuide&&(this.remove(this.closeGuide),this.closeGuide=null);
}},onMove:function(t){this._started&&this.createGuide(t)},onDrag:function(t){this._started&&this.createGuide(t);
}});return t.setObject("dojox.drawing.tools.Path",h),h.setup={name:"dojox.drawing.tools.Path",
tooltip:"Path Tool",iconClass:"iconLine"},i.register(h.setup,"tool"),h});