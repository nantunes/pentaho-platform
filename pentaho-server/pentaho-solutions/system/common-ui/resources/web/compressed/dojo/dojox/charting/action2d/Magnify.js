define(["dojo/_base/connect","dojo/_base/declare","./PlotAction","dojox/gfx/matrix","dojox/gfx/fx","dojo/fx","dojo/fx/easing"],function(n,e,t,a,i,o,s){
var c=2;return e("dojox.charting.action2d.Magnify",t,{defaultParams:{duration:400,
easing:s.backOut,scale:c},optionalParams:{},constructor:function(n,e,t){this.scale=t&&"number"==typeof t.scale?t.scale:c,
this.connect()},process:function(e){if(e.shape&&e.type in this.overOutEvents&&"cx"in e&&"cy"in e&&"spider_plot"!=e.element&&"spider_poly"!=e.element){
var t,s,c,r=e.run.name,h=e.index,d=[];r in this.anim?t=this.anim[r][h]:this.anim[r]={},
t?t.action.stop(!0):this.anim[r][h]=t={},"onmouseover"==e.type?(s=a.identity,c=this.scale):(s=a.scaleAt(this.scale,e.cx,e.cy),
c=1/this.scale);var m={shape:e.shape,duration:this.duration,easing:this.easing,transform:[{
name:"scaleAt",start:[1,e.cx,e.cy],end:[c,e.cx,e.cy]},s]};if(e.shape&&d.push(i.animateTransform(m)),
e.outline&&(m.shape=e.outline,d.push(i.animateTransform(m))),e.shadow&&(m.shape=e.shadow,
d.push(i.animateTransform(m))),!d.length)return void delete this.anim[r][h];t.action=o.combine(d),
"onmouseout"==e.type&&n.connect(t.action,"onEnd",this,function(){this.anim[r]&&delete this.anim[r][h];
}),t.action.play()}}})});