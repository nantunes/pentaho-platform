define(["dojo/_base/lang","./_base","./GeometryFeature"],function(t,a,n){var r=a.GreatCircle={
toPointArray:function(t,a,n){var r=t.x,e=a.x,i=Math.min(r,e),h=Math.max(r,e),o=this.DEG2RAD,M=t.y*o,s=t.x*o,u=a.y*o,c=a.x*o;
if(Math.abs(s-c)<=this.TOLERANCE){var y=Math.min(s,c);c=y+Math.PI}Math.abs(c-s)==Math.PI&&M+u==0&&(u+=Math.PI/18e7);
for(var A=i*o,D=h*o,E=n*o,G=[],f=0,v=this.RAD2DEG;D>=A;){lat=Math.atan((Math.sin(M)*Math.cos(u)*Math.sin(A-c)-Math.sin(u)*Math.cos(M)*Math.sin(A-s))/(Math.cos(M)*Math.cos(u)*Math.sin(s-c)));
var P={x:A*v,y:lat*v};G[f++]=P,D>A&&A+E>=D?A=D:A+=E}return G},toLineString:function(t,a,n){
var r=this.toPointArray(t,a,n),e=new OpenLayers.Geometry.LineString(r);return e},
toGeometryFeature:function(t,a,r){var e=this.toLineString(t,a,r);return new n(e)},
DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,TOLERANCE:1e-5};return r});