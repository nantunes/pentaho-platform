define(["dojo/_base/lang","../../util/oo","../../manager/_registry","../../stencil/Path","../../annotations/Arrow","../../annotations/Label","../../tools/custom/Vector"],function(t,s,i,n,e,h,o){
var a=s.declare(n,function(s){if(this.closePath=!1,this.xArrow=new e({stencil:this,
idx1:0,idx2:1}),this.yArrow=new e({stencil:this,idx1:2,idx2:1}),s.data&&(this.style.zAxisEnabled=1==s.data.cosphi?!0:!1,
this.setData(s.data)),this.style.zAxisEnabled){this.data.cosphi=1;var i={};t.mixin(i,s),
t.mixin(i,{container:this.container.createGroup(),style:this.style,showAngle:!1,label:null
}),!s.data||i.data.radius&&i.data.angle||(i.data.x2=i.data.x4,i.data.y2=i.data.y4),
i.style.zAxis=!0,this.zAxis=new o(i),this.zAxis.minimumSize=5,this.connectMult([[this,"onChangeStyle",this.zAxis,"onChangeStyle"],[this,"select",this.zAxis,"select"],[this,"deselect",this.zAxis,"deselect"],[this,"onDelete",this.zAxis,"destroy"],[this,"onDrag",this,"zSet"],[this,"onTransform",this,"zSet"],[this.zAxis,"onBeforeRender",this,"zSet"],[this,"_onPostRender",this.zAxis,"render"]]);
}this.points&&this.points.length&&(this.setPoints=this._postSetPoints,this.render(),
s.label&&this.setLabel(s.label),s.shadow&&this.addShadow(s.shadow))},{draws:!0,type:"dojox.drawing.tools.custom.Axes",
minimumSize:30,showAngle:!0,closePath:!1,baseRender:!1,zScale:.5,zPoint:function(t){
t.radius=this.util.length(t);var s=this.util.pointOnCircle(t.start.x,t.start.y,t.radius*this.zScale,this.style.zAngle);
return{x:s.x,y:s.y,skip:!0,noAnchor:!0}},zSet:function(){if(this.zAxis){var t=this.points[1],s=this.points[3],i=[{
x:t.x,y:t.y},{x:s.x,y:s.y}],n=this.util.length({start:{x:t.x,y:t.y},x:s.x,y:s.y});
n>this.zAxis.minimumSize?this.zAxis.setPoints(i):!1,this.zAxis.cosphi=1}},createLabels:function(){
var s={align:"middle",valign:"middle",util:this.util,annotation:!0,container:this.container,
mouse:this.mouse,stencil:this};this.labelX=new h(t.mixin(s,{labelPosition:this.setLabelX
})),this.labelY=new h(t.mixin(s,{labelPosition:this.setLabelY})),this.style.zAxisEnabled&&(this.labelZ=new h(t.mixin(s,{
labelPosition:this.setLabelZ})))},setLabelX:function(){var t,s,i,n,e=this.points[0],h=this.points[1],o=40,a=20;
return t=this.util.lineSub(h.x,h.y,e.x,e.y,o),s=t.x+(t.y-e.y),i=t.y+(e.x-t.x),n=this.util.lineSub(t.x,t.y,s,i,o-a),
{x:n.x,y:n.y,width:20}},setLabelY:function(){var t,s,i,n,e=this.points[1],h=this.points[2],o=40,a=20;
return t=this.util.lineSub(e.x,e.y,h.x,h.y,o),s=t.x+(h.y-t.y),i=t.y+(t.x-h.x),n=this.util.lineSub(t.x,t.y,s,i,o-a),
{x:n.x,y:n.y,width:20}},setLabelZ:function(){var t,s,i,n,e=this.points[1],h=this.points[3],o=40,a=20;
return t=this.util.lineSub(e.x,e.y,h.x,h.y,o),s=t.x+(t.y-h.y),i=t.y+(h.x-t.x),n=this.util.lineSub(t.x,t.y,s,i,o-a),
{x:n.x,y:n.y,width:20}},setLabel:function(t){if(!this._labelsCreated){!this.labelX&&this.createLabels();
var s="x",i="y",n="z";if(t)if(this.labelZ){var e=t.match(/(.*?)(and|&)(.*?)(and|&)(.*)/i);
e.length>4&&(s=e[1].replace(/^\s+/,"").replace(/\s+$/,""),i=e[3].replace(/^\s+/,"").replace(/\s+$/,""),
n=e[5].replace(/^\s+/,"").replace(/\s+$/,""))}else{var e=t.match(/(.*?)(and|&)(.*)/i);
e.length>2&&(s=e[1].replace(/^\s+/,"").replace(/\s+$/,""),i=e[3].replace(/^\s+/,"").replace(/\s+$/,""));
}this.labelX.setLabel(s),this.labelY.setLabel(i),this.labelZ&&this.labelZ.setLabel(n),
this._labelsCreated=!0}},getLabel:function(){return this.labelX?{x:this.labelX.getText(),
y:this.labelY.getText(),z:this.labelZ?this.labelZ.getText():null}:null},anchorPositionCheck:function(t,s,i){
var n=this.container.getParent().getTransform(),e=i.shape.getTransform(),h=this.points,o={
x:e.dx+i.org.x+n.dx,y:e.dy+i.org.y+n.dy},a={x:h[1].x+n.dx,y:h[1].y+n.dy},x=a.x-(a.y-o.y),l=a.y-(o.x-a.x);
return{x:x,y:l}},onTransformBegin:function(t){this._isBeingModified=!0},onTransformEnd:function(t){
if(t){this._isBeingModified=!1,this._toggleSelected(),console.log("before:",Math.ceil(this.points[1].x)," x ",Math.ceil(this.points[1].y));
var s=this.points[0],i=this.points[1],n={start:{x:i.x,y:i.y},x:s.x,y:s.y},e=this.util.constrainAngle(n,0,89),h=this.style.zAxisEnabled?this.zPoint(n):null;
if(e.x==s.x&&e.y==s.y){e=this.util.snapAngle(n,this.angleSnap/180),n.x=e.x,n.y=e.y;
var o=n.start.x-(n.start.y-n.y),a=n.start.y-(n.x-n.start.x);return 0>o||0>a?void console.warn("AXES ERROR LESS THAN ZERO - ABORT"):(this.points=[{
x:n.x,y:n.y},{x:n.start.x,y:n.start.y,noAnchor:!0}],this.points.push({x:o,y:a,noAnchor:!0
}),h&&this.points.push(h),this.setPoints(this.points),void this.onModify(this))}this.points[0].x=e.x,
this.points[0].y=e.y,s=this.points[0];var o=i.x-(i.y-s.y),a=i.y-(s.x-i.x);this.points[2]={
x:o,y:a,noAnchor:!0},h&&this.points.push(h),this.setPoints(this.points),this.labelX.setLabel(),
this.labelY.setLabel(),this.labelZ&&this.labelZ.setLabel(),this.onModify(this)}},
getBounds:function(t){var s=this.points[0],i=this.points[1],n=this.points[2];if(this.style.zAxisEnabled)var e=this.points[3];
if(t){var h={x:i.x,y:i.y,x1:i.x,y1:i.y,x2:s.x,y2:s.y,x3:n.x,y3:n.y};return this.style.zAxisEnabled&&(h.x4=e.x,
h.y4=e.y),h}var o=this.style.zAxisEnabled?n.x<e.x?n.x:e.x:n.x;return y1=n.y<s.y?n.y:s.y,
x2=s.x,y2=this.style.zAxisEnabled?e.y:i.y,{x1:o,y1:y1,x2:x2,y2:y2,x:o,y:y1,w:x2-o,
h:y2-y1}},_postSetPoints:function(t){this.points[0]=t[0],this.pointsToData&&(this.data=this.pointsToData());
},onTransform:function(t){var s=this.points[0],i=this.points[1],n=i.x-(i.y-s.y),e=i.y-(s.x-i.x);
this.points[2]={x:n,y:e,noAnchor:!0},this.style.zAxisEnabled&&(this.points[3]=this.zPoint({
start:{x:i.x,y:i.y},x:s.x,y:s.y})),this.setPoints(this.points),this._isBeingModified||this.onTransformBegin(),
this.render()},pointsToData:function(){var t=this.points,s={x1:t[1].x,y1:t[1].y,x2:t[0].x,
y2:t[0].y,x3:t[2].x,y3:t[2].y};return this.style.zAxisEnabled&&(s.x4=t[3].x,s.y4=t[3].y,
s.cosphi=1),s},getRadius:function(){var t=this.points,s={start:{x:t[1].x,y:t[1].y
},x:t[0].x,y:t[0].y};return this.util.length(s)},dataToPoints:function(t){if(t=t||this.data,
t.radius||t.angle){var s,i=this.util.pointOnCircle(t.x,t.y,t.radius,t.angle),n=t.x-(t.y-i.y),e=t.y-(i.x-t.x);
(t.cosphi&&1==t.cosphi||this.style.zAxisEnabled)&&(this.style.zAxisEnabled=!0,s=this.util.pointOnCircle(t.x,t.y,t.radius*this.zScale,this.style.zAngle)),
this.data=t={x1:t.x,y1:t.y,x2:i.x,y2:i.y,x3:n,y3:e},this.style.zAxisEnabled&&(this.data.x4=t.x4=s.x,
this.data.y4=t.y4=s.y,this.data.cosphi=1)}return this.points=[{x:t.x2,y:t.y2},{x:t.x1,
y:t.y1,noAnchor:!0},{x:t.x3,y:t.y3,noAnchor:!0}],this.style.zAxisEnabled&&this.points.push({
x:t.x4,y:t.y4,skip:!0,noAnchor:!0}),this.points},onDrag:function(t){var s=this.util.constrainAngle(t,0,89);
t.x=s.x,t.y=s.y;var i=t.start.x-(t.start.y-t.y),n=t.start.y-(t.x-t.start.x);if(!(0>i||0>n)){
if(this.points=[{x:t.x,y:t.y},{x:t.start.x,y:t.start.y,noAnchor:!0}],this.points.push({
x:i,y:n,noAnchor:!0}),this.style.zAxisEnabled){var e=this.zPoint(t);this.points.push(e);
}this.render()}},onUp:function(t){if(this._downOnCanvas){this._downOnCanvas=!1;var s=this.points;
if(!s.length){var i=t.start,n=100;if(this.points=[{x:i.x+n,y:i.y+n},{x:i.x,y:i.y+n,
noAnchor:!0},{x:i.x,y:i.y,noAnchor:!0}],this.style.zAxisEnabled){var e=this.zPoint({
start:{x:i.x,y:i.y+n},x:i.x+n,y:i.y+n});this.points.push(e)}return this.setPoints=this._postSetPoints,
this.pointsToData(),this.render(),void this.onRender(this)}var h=this.util.distance(s[1].x,s[1].y,s[0].x,s[0].y);
if(s&&s.length){if(h<this.minimumSize)return this.remove(this.shape,this.hit),this.xArrow.remove(this.xArrow.shape,this.xArrow.hit),
this.yArrow.remove(this.yArrow.shape,this.yArrow.hit),void(this.zArrow&&this.zArrow.remove(this.zArrow.shape,this.zArrow.hit));
var o=s[0],a=s[1];t={start:{x:a.x,y:a.y},x:o.x,y:o.y};var x=this.util.snapAngle(t,this.angleSnap/180);
t.x=x.x,t.y=x.y;var l=t.start.x-(t.start.y-t.y),r=t.start.y-(t.x-t.start.x);0>l||0>r||(this.points=[{
x:t.x,y:t.y},{x:t.start.x,y:t.start.y,noAnchor:!0}],this.points.push({x:l,y:r,noAnchor:!0
}),this.style.zAxisEnabled&&this.points.push(this.zPoint(t)),this.onRender(this),
this.setPoints=this._postSetPoints)}}}});return t.setObject("dojox.drawing.tools.custom.Axes",a),
a.setup={name:"dojox.drawing.tools.custom.Axes",tooltip:"Axes Tool",iconClass:"iconAxes"
},i.register(a.setup,"tool"),a});