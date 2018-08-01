define(["dojo/_base/lang","dojo/_base/connect","dojo/dom-style","dojo/_base/fx","dojo/fx","dojo/_base/html","dojox/html/ext-dojo/style","dojox/fx/ext-dojo/complex"],function(e,n,t,o,a,r,d,s){
var i=e.getObject("dojox.css3.fx",!0),c={puff:function(e){return a.combine([o.fadeOut(e),this.expand({
node:e.node,endScale:e.endScale||2})])},expand:function(e){return o.animateProperty({
node:e.node,properties:{transform:{start:"scale(1)",end:"scale("+[e.endScale||3]+")"
}}})},shrink:function(e){return this.expand({node:e.node,endScale:.01})},rotate:function(e){
return o.animateProperty({node:e.node,duration:e.duration||1e3,properties:{transform:{
start:"rotate("+(e.startAngle||"0deg")+")",end:"rotate("+(e.endAngle||"360deg")+")"
}}})},flip:function(n){for(var t=[],r=n.whichAnims||[0,1,2,3],d=n.direction||1,s=[{
start:"scale(1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0,"+30*d+"deg)"},{start:"scale(0, 1) skew(0deg,"+30*d+"deg)",
end:"scale(-1, 1) skew(0deg,0deg)"},{start:"scale(-1, 1) skew(0deg,0deg)",end:"scale(0, 1) skew(0deg,"+30*-d+"deg)"
},{start:"scale(0, 1) skew(0deg,"+30*-d+"deg)",end:"scale(1, 1) skew(0deg,0deg)"}],i=0;i<r.length;i++)t.push(o.animateProperty(e.mixin({
node:n.node,duration:n.duration||600,properties:{transform:s[r[i]]}},n)));return a.chain(t);
},bounce:function(t){var d=[],s=t.node,i=t.duration||1e3,c=t.scaleX||1.2,u=t.scaleY||.6,p=r.style,l=p(s,"position"),g="absolute",m=p(s,"top"),f=[],h=0,x=Math.round,j=t.jumpHeight||70;
"absolute"!==l&&(g="relative");var w=o.animateProperty({node:s,duration:i/6,properties:{
transform:{start:"scale(1, 1)",end:"scale("+c+", "+u+")"}}});n.connect(w,"onBegin",function(){
p(s,{transformOrigin:"50% 100%",position:g})}),d.push(w);var b=o.animateProperty({
node:s,duration:i/6,properties:{transform:{end:"scale(1, 1)",start:"scale("+c+", "+u+")"
}}});return f.push(b),f.push(new o.Animation(e.mixin({curve:[],duration:i/3,delay:i/12,
onBegin:function(){h=(new Date).getTime()},onAnimate:function(){var e=(new Date).getTime();
p(s,{top:parseInt(p(s,"top"))-x(j*((e-h)/this.duration))+"px"}),h=e}},t))),d.push(a.combine(f)),
d.push(o.animateProperty(e.mixin({duration:i/3,onEnd:function(){p(s,{position:l});
},properties:{top:m}},t))),d.push(w),d.push(b),a.chain(d)}};return e.mixin(i,c)});