define(["dojo/_base/connect","dojo/_base/declare","./PlotAction","dojo/fx","dojo/fx/easing","dojox/gfx/matrix","dojox/gfx/fx"],function(t,i,n,a,s,o,e){
var h=3;return i("dojox.charting.action2d.Shake",n,{defaultParams:{duration:400,easing:s.backOut,
shiftX:h,shiftY:h},optionalParams:{},constructor:function(t,i,n){n||(n={}),this.shiftX="number"==typeof n.shiftX?n.shiftX:h,
this.shiftY="number"==typeof n.shiftY?n.shiftY:h,this.connect()},process:function(i){
if(i.shape&&i.type in this.overOutEvents){var n,s=i.run.name,h=i.index,r=[];s in this.anim?n=this.anim[s][h]:this.anim[s]={},
n?n.action.stop(!0):this.anim[s][h]=n={};var f={shape:i.shape,duration:this.duration,
easing:this.easing,transform:[{name:"translate",start:[this.shiftX,this.shiftY],end:[0,0]
},o.identity]};if(i.shape&&r.push(e.animateTransform(f)),i.oultine&&(f.shape=i.outline,
r.push(e.animateTransform(f))),i.shadow&&(f.shape=i.shadow,r.push(e.animateTransform(f))),
!r.length)return void delete this.anim[s][h];n.action=a.combine(r),"onmouseout"==i.type&&t.connect(n.action,"onEnd",this,function(){
this.anim[s]&&delete this.anim[s][h]}),n.action.play()}}})});