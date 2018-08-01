define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/dom-style","dojo/_base/fx","dojo/fx"],function(n,t,o,e,r,a){
function i(n,t){var o=t.next.node,i=t.rotatorBox,u=n%2,d=u?"left":"top",c=(u?i.w:i.h)*(2>n?-1:1),s={},f={};
return e.set(o,"display",""),s[d]={start:0,end:-c},f[d]={start:c,end:0},a.combine([r.animateProperty({
node:t.current.node,duration:t.duration,properties:s,easing:t.easing}),r.animateProperty({
node:o,duration:t.duration,properties:f,easing:t.easing})])}function u(n,t){e.set(n,"zIndex",t);
}var d=0,c=1,s=2,f=3,p={pan:function(r){var d=r.wrap,s=r.rotator.panes,p=s.length,x=p,h=r.current.idx,g=r.next.idx,b=Math.abs(g-h),m=Math.abs(p-Math.max(h,g)+Math.min(h,g))%p,j=g>h,l=f,v=[],y=[],M=r.duration;
if((!d&&!j||d&&(j&&b>m||!j&&m>b))&&(l=c),r.continuous){r.quick&&(M=Math.round(M/(d?Math.min(m,b):b))),
u(s[h].node,x--);for(var w=l==f;;){var _=h;w?++h>=p&&(h=0):--h<0&&(h=p-1);var k=s[_],z=s[h];
if(u(z.node,x--),v.push(i(l,o.mixin({easing:function(n){return n}},r,{current:k,next:z,
duration:M}))),w&&h==g||!w&&h==g)break;y.push(z.node)}var E=a.chain(v),I=t.connect(E,"onEnd",function(){
t.disconnect(I),n.forEach(y,function(n){e.set(n,{display:"none",left:0,opacity:1,
top:0,zIndex:0})})});return E}return i(l,r)},panDown:function(n){return i(d,n)},panRight:function(n){
return i(c,n)},panUp:function(n){return i(s,n)},panLeft:function(n){return i(f,n);
}};return o.mixin(o.getObject("dojox.widget.rotator"),p),p});