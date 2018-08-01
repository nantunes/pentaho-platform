define(["dojo/_base/lang","./matrix","dojo/_base/Color"],function(o,t,e){function r(o,e,r,f,l,n){
var s=t.multiplyPoint(r,o,e),c=t.multiplyPoint(f,s);return{r:s,p:c,o:t.multiplyPoint(l,c).x/n
}}function f(o,t){return o.o-t.o}var l=o.getObject("dojox.gfx.gradient",!0),n=e;return l.rescale=function(o,t,r){
var f,l=o.length,s=t>r;if(s){var c=t;t=r,r=c}if(!l)return[];if(r<=o[0].offset)f=[{
offset:0,color:o[0].color},{offset:1,color:o[0].color}];else if(t>=o[l-1].offset)f=[{
offset:0,color:o[l-1].color},{offset:1,color:o[l-1].color}];else{var i,y,u,x=r-t;for(f=[],
0>t&&f.push({offset:0,color:new n(o[0].color)}),u=0;l>u&&(i=o[u],!(i.offset>=t));++u);
for(u?(y=o[u-1],f.push({offset:0,color:e.blendColors(new n(y.color),new n(i.color),(t-y.offset)/(i.offset-y.offset))
})):f.push({offset:0,color:new n(i.color)});l>u&&(i=o[u],!(i.offset>=r));++u)f.push({
offset:(i.offset-t)/x,color:new n(i.color)});l>u?(y=o[u-1],f.push({offset:1,color:e.blendColors(new n(y.color),new n(i.color),(r-y.offset)/(i.offset-y.offset))
})):f.push({offset:1,color:new n(o[l-1].color)})}if(s)for(f.reverse(),u=0,l=f.length;l>u;++u)i=f[u],
i.offset=1-i.offset;return f},l.project=function(o,e,n,s,c,i){o=o||t.identity;var y=t.multiplyPoint(o,e.x1,e.y1),u=t.multiplyPoint(o,e.x2,e.y2),x=Math.atan2(u.y-y.y,u.x-y.x),a=t.project(u.x-y.x,u.y-y.y),p=t.multiplyPoint(a,y),d=t.multiplyPoint(a,u),h=new t.Matrix2D([t.rotate(-x),{
dx:-p.x,dy:-p.y}]),m=t.multiplyPoint(h,d).x,w=[r(n.x,n.y,o,a,h,m),r(s.x,s.y,o,a,h,m),r(n.x,s.y,o,a,h,m),r(s.x,n.y,o,a,h,m)].sort(f),P=w[0].o,g=w[3].o,v=l.rescale(e.colors,P,g);
Math.atan2(w[3].r.y-w[0].r.y,w[3].r.x-w[0].r.x);return{type:"linear",x1:w[0].p.x,
y1:w[0].p.y,x2:w[3].p.x,y2:w[3].p.y,colors:v,angle:x}},l});