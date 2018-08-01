define(["dojo/_base/lang","../util/oo","../manager/_registry","./Line","../annotations/Arrow","../util/positioning"],function(t,i,e,r,o,n){
var s=i.declare(r,function(t){this.arrowStart&&(this.begArrow=new o({stencil:this,
idx1:0,idx2:1})),this.arrowEnd&&(this.endArrow=new o({stencil:this,idx1:1,idx2:0})),
this.points.length&&(this.render(),t.label&&this.setLabel(t.label))},{draws:!0,type:"dojox.drawing.tools.Arrow",
baseRender:!1,arrowStart:!1,arrowEnd:!0,labelPosition:function(){var t=this.data,i=n.label({
x:t.x1,y:t.y1},{x:t.x2,y:t.y2});return{x:i.x,y:i.y}},onUp:function(t){if(!this.created&&this.shape){
var i=this.points,e=this.util.distance(i[0].x,i[0].y,i[1].x,i[1].y);if(e<this.minimumSize)return void this.remove(this.shape,this.hit);
var r=this.util.snapAngle(t,this.angleSnap/180);this.setPoints([{x:i[0].x,y:i[0].y
},{x:r.x,y:r.y}]),this.renderedOnce=!0,this.onRender(this)}}});return t.setObject("dojox.drawing.tools.Arrow",s),
s.setup={name:"dojox.drawing.tools.Arrow",tooltip:"Arrow Tool",iconClass:"iconArrow"
},e.register(s.setup,"tool"),s});