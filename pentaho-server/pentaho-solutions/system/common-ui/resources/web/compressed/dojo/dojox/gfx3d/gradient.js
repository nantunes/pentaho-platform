define(["dojo/_base/lang","./matrix","./vector"],function(t,o,a){var r=t.getObject("dojox.gfx3d",!0),n=function(t,o){
return Math.sqrt(Math.pow(o.x-t.x,2)+Math.pow(o.y-t.y,2))},i=32;return r.gradient=function(t,r,l,s,c,e,u){
for(var y=o.normalize(u),f=o.multiplyPoint(y,s*Math.cos(c)+l.x,s*Math.sin(c)+l.y,l.z),h=o.multiplyPoint(y,s*Math.cos(e)+l.x,s*Math.sin(e)+l.y,l.z),x=o.multiplyPoint(y,l.x,l.y,l.z),p=(e-c)/i,M=n(f,h)/2,d=t[r.type],m=r.finish,b=r.color,g=[{
offset:0,color:d.call(t,a.substract(f,x),m,b)}],z=c+p;e>z;z+=p){var v=o.multiplyPoint(y,s*Math.cos(z)+l.x,s*Math.sin(z)+l.y,l.z),P=n(f,v),j=n(h,v);
g.push({offset:P/(P+j),color:d.call(t,a.substract(v,x),m,b)})}return g.push({offset:1,
color:d.call(t,a.substract(h,x),m,b)}),{type:"linear",x1:0,y1:-M,x2:0,y2:M,colors:g
}},r.gradient});