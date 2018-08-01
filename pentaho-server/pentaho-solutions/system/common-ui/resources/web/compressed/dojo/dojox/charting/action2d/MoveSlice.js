define(["dojo/_base/connect","dojo/_base/declare","dojo/_base/array","./PlotAction","dojo/fx/easing","dojox/gfx/matrix","dojox/gfx/fx","dojox/lang/functional","dojox/lang/functional/scan","dojox/lang/functional/fold"],function(t,a,n,e,s,o,i,c){
var l=1.05,r=7;return a("dojox.charting.action2d.MoveSlice",e,{defaultParams:{duration:400,
easing:s.backOut,scale:l,shift:r},optionalParams:{},constructor:function(t,a,n){n||(n={}),
this.scale="number"==typeof n.scale?n.scale:l,this.shift="number"==typeof n.shift?n.shift:r,
this.connect()},process:function(a){if(a.shape&&"slice"==a.element&&a.type in this.overOutEvents){
if(!this.angles){var e=o._degToRad(a.plot.opt.startAngle);"number"==typeof a.run.data[0]?this.angles=c.map(c.scanl(a.run.data,"+",0),"* 2 * Math.PI / this",c.foldl(a.run.data,"+",0)):this.angles=c.map(c.scanl(a.run.data,"a + b.y",0),"* 2 * Math.PI / this",c.foldl(a.run.data,"a + b.y",0)),
this.angles=n.map(this.angles,function(t){return t+e})}var s,l,r,h,d,f=a.index,u=(this.angles[f]+this.angles[f+1])/2,g=o.rotateAt(-u,a.cx,a.cy),m=o.rotateAt(u,a.cx,a.cy);
s=this.anim[f],s?s.action.stop(!0):this.anim[f]=s={},"onmouseover"==a.type?(h=0,d=this.shift,
l=1,r=this.scale):(h=this.shift,d=0,l=this.scale,r=1),s.action=i.animateTransform({
shape:a.shape,duration:this.duration,easing:this.easing,transform:[m,{name:"translate",
start:[h,0],end:[d,0]},{name:"scaleAt",start:[l,a.cx,a.cy],end:[r,a.cx,a.cy]},g]}),
"onmouseout"==a.type&&t.connect(s.action,"onEnd",this,function(){delete this.anim[f];
}),s.action.play()}},reset:function(){delete this.angles}})});