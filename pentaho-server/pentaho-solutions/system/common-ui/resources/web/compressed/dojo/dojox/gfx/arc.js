define(["./_base","dojo/_base/lang","./matrix"],function(t,a,i){function n(t){var a=Math.cos(t),i=Math.sin(t),n={
x:a+4/3*(1-a),y:i-4/3*a*(1-a)/i};return{s:{x:a,y:-i},c1:{x:n.x,y:-n.y},c2:n,e:{x:a,
y:i}}}var r=2*Math.PI,y=Math.PI/4,l=Math.PI/8,o=y+l,e=n(l),x=t.arc={unitArcAsBezier:n,
curvePI4:e,arcAsBezier:function(t,a,x,u,c,s,P,m){c=Boolean(c),s=Boolean(s);var p=i._degToRad(u),h=a*a,v=x*x,M=i.multiplyPoint(i.rotate(-p),{
x:(t.x-P)/2,y:(t.y-m)/2}),f=M.x*M.x,d=M.y*M.y,z=Math.sqrt((h*v-h*d-v*f)/(h*d+v*f));
isNaN(z)&&(z=0);var B={x:z*a*M.y/x,y:-z*x*M.x/a};c==s&&(B={x:-B.x,y:-B.y});var I=i.multiplyPoint([i.translate((t.x+P)/2,(t.y+m)/2),i.rotate(p)],B),A=i.normalize([i.translate(I.x,I.y),i.rotate(p),i.scale(a,x)]),_=i.invert(A),b=i.multiplyPoint(_,t),g=i.multiplyPoint(_,P,m),N=Math.atan2(b.y,b.x),j=Math.atan2(g.y,g.x),q=N-j;
s&&(q=-q),0>q?q+=r:q>r&&(q-=r);for(var R=l,T=e,k=s?R:-R,w=[],C=q;C>0;C-=y){o>C&&(R=C/2,
T=n(R),k=s?R:-R,C=0);var D,E,F=i.normalize([A,i.rotate(N+k)]);s?(z=i.multiplyPoint(F,T.c1),
D=i.multiplyPoint(F,T.c2),E=i.multiplyPoint(F,T.e)):(z=i.multiplyPoint(F,T.c2),D=i.multiplyPoint(F,T.c1),
E=i.multiplyPoint(F,T.s)),w.push([z.x,z.y,D.x,D.y,E.x,E.y]),N+=2*k}return w}};return x;
});