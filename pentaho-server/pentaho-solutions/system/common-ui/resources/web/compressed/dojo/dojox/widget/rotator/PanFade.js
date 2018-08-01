define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/fx","dojo/dom-style","dojo/fx"],function(n,t,e,o,a,r){
function i(n,t){var i={node:t.current.node,duration:t.duration,easing:t.easing},d={
node:t.next.node,duration:t.duration,easing:t.easing},u=t.rotatorBox,c=n%2,s=c?"left":"top",f=(c?u.w:u.h)*(2>n?-1:1),p={},x={};
return a.set(d.node,{display:"",opacity:0}),p[s]={start:0,end:-f},x[s]={start:f,end:0
},r.combine([o.animateProperty(e.mixin({properties:p},i)),o.fadeOut(i),o.animateProperty(e.mixin({
properties:x},d)),o.fadeIn(d)])}function d(n,t){a.set(n,"zIndex",t)}var u=0,c=1,s=2,f=3,p={
panFade:function(o){var u=o.wrap,s=o.rotator.panes,p=s.length,x=p,h=o.current.idx,m=o.next.idx,g=Math.abs(m-h),b=Math.abs(p-Math.max(h,m)+Math.min(h,m))%p,j=m>h,y=f,l=[],v=[],M=o.duration;
if((!u&&!j||u&&(j&&g>b||!j&&b>g))&&(y=c),o.continuous){o.quick&&(M=Math.round(M/(u?Math.min(b,g):g))),
d(s[h].node,x--);for(var F=y==f;;){var w=h;F?++h>=p&&(h=0):--h<0&&(h=p-1);var _=s[w],I=s[h];
if(d(I.node,x--),l.push(i(y,e.mixin({easing:function(n){return n}},o,{current:_,next:I,
duration:M}))),F&&h==m||!F&&h==m)break;v.push(I.node)}var k=r.chain(l),z=t.connect(k,"onEnd",function(){
t.disconnect(z),n.forEach(v,function(n){a.set(n,{display:"none",left:0,opacity:1,
top:0,zIndex:0})})});return k}return i(y,o)},panFadeDown:function(n){return i(u,n);
},panFadeRight:function(n){return i(c,n)},panFadeUp:function(n){return i(s,n)},panFadeLeft:function(n){
return i(f,n)}};return e.mixin(e.getObject("dojox.widget.rotator"),p),p});