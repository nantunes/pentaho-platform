define(["dojo/_base/lang","./_base"],function(e){return dojox.uuid.generateTimeBasedUuid=function(e){
var r=dojox.uuid.generateTimeBasedUuid._generator.generateUuidString(e);return r},
dojox.uuid.generateTimeBasedUuid.isValidNode=function(r){var i=16,o=parseInt(r,i),t=e.isString(r)&&12==r.length&&isFinite(o);
return t},dojox.uuid.generateTimeBasedUuid.setNode=function(e){dojox.uuid.assert(null===e||this.isValidNode(e)),
this._uniformNode=e},dojox.uuid.generateTimeBasedUuid.getNode=function(){return this._uniformNode;
},dojox.uuid.generateTimeBasedUuid._generator=new function(){function r(e){e[2]+=e[3]>>>16,
e[3]&=65535,e[1]+=e[2]>>>16,e[2]&=65535,e[0]+=e[1]>>>16,e[1]&=65535,dojox.uuid.assert(e[0]>>>16===0);
}function i(e){var r=new Array(0,0,0,0);return r[3]=e%65536,e-=r[3],e/=65536,r[2]=e%65536,
e-=r[2],e/=65536,r[1]=e%65536,e-=r[1],e/=65536,r[0]=e,r}function o(i,o){dojox.uuid.assert(e.isArray(i)),
dojox.uuid.assert(e.isArray(o)),dojox.uuid.assert(4==i.length),dojox.uuid.assert(4==o.length);
var t=new Array(0,0,0,0);return t[3]=i[3]+o[3],t[2]=i[2]+o[2],t[1]=i[1]+o[1],t[0]=i[0]+o[0],
r(t),t}function t(i,o){dojox.uuid.assert(e.isArray(i)),dojox.uuid.assert(e.isArray(o)),
dojox.uuid.assert(4==i.length),dojox.uuid.assert(4==o.length);var t=!1;i[0]*o[0]!==0&&(t=!0),
i[0]*o[1]!==0&&(t=!0),i[0]*o[2]!==0&&(t=!0),i[1]*o[0]!==0&&(t=!0),i[1]*o[1]!==0&&(t=!0),
i[2]*o[0]!==0&&(t=!0),dojox.uuid.assert(!t);var u=new Array(0,0,0,0);return u[0]+=i[0]*o[3],
r(u),u[0]+=i[1]*o[2],r(u),u[0]+=i[2]*o[1],r(u),u[0]+=i[3]*o[0],r(u),u[1]+=i[1]*o[3],
r(u),u[1]+=i[2]*o[2],r(u),u[1]+=i[3]*o[1],r(u),u[2]+=i[2]*o[3],r(u),u[2]+=i[3]*o[2],
r(u),u[3]+=i[3]*o[3],r(u),u}function u(e,r){for(;e.length<r;)e="0"+e;return e}function n(){
for(var e=Math.floor(Math.random()%1*Math.pow(2,32)),r=e.toString(j);r.length<8;)r="0"+r;
return r}this.GREGORIAN_CHANGE_OFFSET_IN_HOURS=3394248;var a=null,d=null,s=null,f=0,g=null,l=null,j=16;
this.generateUuidString=function(e){if(e)dojox.uuid.assert(dojox.uuid.generateTimeBasedUuid.isValidNode(e));else if(dojox.uuid.generateTimeBasedUuid._uniformNode)e=dojox.uuid.generateTimeBasedUuid._uniformNode;else{
if(!a){var x=32768,h=Math.floor(Math.random()%1*Math.pow(2,15)),v=(x|h).toString(j);
a=v+n()}e=a}if(!d){var m=32768,_=Math.floor(Math.random()%1*Math.pow(2,14));d=(m|_).toString(j);
}var N=new Date,U=N.valueOf(),S=i(U);if(!g){var c=i(3600),T=i(dojox.uuid.generateTimeBasedUuid._generator.GREGORIAN_CHANGE_OFFSET_IN_HOURS),A=t(T,c),B=i(1e3);
g=t(A,B),l=i(1e4)}var w=S,O=o(g,w),M=t(O,l);if(N.valueOf()==s){if(M[3]+=f,r(M),f+=1,
1e4==f)for(;N.valueOf()==s;)N=new Date}else s=N.valueOf(),f=1;var y=M[2].toString(j),E=M[3].toString(j),G=u(y,4)+u(E,4),R=M[1].toString(j);
R=u(R,4);var F=M[0].toString(j);F=u(F,3);var I="-",p="1",H=G+I+R+I+p+F+I+d+I+e;return H=H.toLowerCase();
}},dojox.uuid.generateTimeBasedUuid});