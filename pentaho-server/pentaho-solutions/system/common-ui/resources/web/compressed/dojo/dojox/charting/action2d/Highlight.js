define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/Color","dojo/_base/connect","dojox/color/_base","./PlotAction","dojo/fx/easing","dojox/gfx/fx"],function(n,t,o,i,e,a,r,s){
var c=100,l=75,u=50,h=function(n){return function(){return n}},d=function(n){var t=new e.Color(n),o=t.toHsl();
0==o.s?o.l=o.l<50?100:0:(o.s=c,o.l<u?o.l=l:o.l>l?o.l=u:o.l=o.l-u>l-o.l?u:l);var i=e.fromHsl(o);
return i.a=t.a,i},f=function(n){var t=d(n);return t.a=.7,t};return t("dojox.charting.action2d.Highlight",a,{
defaultParams:{duration:400,easing:r.backOut},optionalParams:{highlight:"red"},constructor:function(t,o,i){
var e=i&&i.highlight;this.colorFunc=e?n.isFunction(e)?e:h(e):d,this.connect()},process:function(n){
if(n.shape&&n.type in this.overOutEvents&&"spider_circle"!=n.element&&"spider_plot"!=n.element){
"spider_poly"==n.element&&this.colorFunc==d&&(this.colorFunc=f);var t,e=n.run.name,a=n.index;
if(e in this.anim?t=this.anim[e][a]:this.anim[e]={},t)t.action.stop(!0);else{var r=n.shape.getFill();
if(!(r&&r instanceof o))return;this.anim[e][a]=t={start:r,end:this.colorFunc(r)}}
var c=t.start,l=t.end;if("onmouseout"==n.type){var u=c;c=l,l=u}t.action=s.animateFill({
shape:n.shape,duration:this.duration,easing:this.easing,color:{start:c,end:l}}),"onmouseout"==n.type&&i.connect(t.action,"onEnd",this,function(){
this.anim[e]&&delete this.anim[e][a]}),t.action.play()}}})});