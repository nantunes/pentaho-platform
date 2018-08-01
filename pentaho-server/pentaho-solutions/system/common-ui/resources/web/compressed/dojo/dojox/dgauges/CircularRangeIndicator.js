define(["dojo/_base/declare","./ScaleIndicatorBase","./_circularUtils","dojo/_base/event"],function(t,a,i,s){
return t("dojox.dgauges.CircularRangeIndicator",a,{start:0,radius:NaN,startThickness:6,
endThickness:6,fill:null,stroke:null,constructor:function(){this.indicatorShapeFunc=null,
this.fill=[255,120,0],this.stroke={color:"black",width:.2},this.interactionMode="none",
this.addInvalidatingProperties(["start","radius","startThickness","endThickness","fill","stroke"]);
},_interpolateColor:function(t,a,i){var s=t>>16&255,n=t>>8&255,o=255&t,e=a>>16&255,r=a>>8&255,h=255&a,l=(1-i)*s+i*e&255,c=(1-i)*n+i*r&255,u=(1-i)*o+i*h&255;
return l<<16|c<<8|u},_colorsInterpolation:function(t,a,i){for(var s=[],n=0,o=0;o<t.length-1;o++)n=(a[o+1]-a[o])*i,
n=Math.round(n),s=s.concat(_colorInterpolation(t[o],t[o+1],n));return s},_alphasInterpolation:function(t,a,i){
for(var s=[],n=0,o=0;o<t.length-1;o++)n=(a[o+1]-a[o])*i,n=Math.round(n),s=s.concat(_alphaInterpolation(t[o],t[o+1],n));
return s},_alphaInterpolation:function(t,a,i){for(var s=(a-t)/(i-1),n=[],o=0;i>o;o++)n.push(t+o*s);
return n},_colorInterpolation:function(t,a,i){for(var s=[],n=0;i>n;n++)s.push(_interpolateColor(t,a,n/(i-1)));
return s},_getEntriesFor:function(t,a){for(var i,s,n=[],o=0;o<t.length;o++)i=t[o],
s=null==i[a]||isNaN(i[a])?o/(t.length-1):i[a],n.push(s);return n},_drawColorTrack:function(t,a,s,n,o,e,r,h,l,c,u,g){
var d,p=.05;if(d=6.28318530718-i.computeAngle(e,r,o),!isNaN(g)){var f=i.computeAngle(e,g,o);
l*=f/d,d=f}var v=Math.max(2,Math.floor(d/p));p=d/v;var M,_,k,N,I=0,T=0;M=-h,_=0,T=(h-l)/v;
var P,F;"clockwise"==o&&(p=-p);var m=[];for(k=a+Math.cos(e)*(n+M),N=s-Math.sin(e)*(n+M),
m.push(k,N),F=0;v>F;F++)P=e+F*p,k=a+Math.cos(P+p)*(n+M+F*T),N=s-Math.sin(P+p)*(n+M+F*T),
m.push(k,N);for(isNaN(P)&&(P=e),k=a+Math.cos(P+p)*(n+_+(v-1)*I),N=s-Math.sin(P+p)*(n+_+(v-1)*I),
m.push(k,N),F=v-1;F>=0;F--)P=e+F*p,k=a+Math.cos(P+p)*(n+_+F*I),N=s-Math.sin(P+p)*(n+_+F*I),
m.push(k,N);k=a+Math.cos(e)*(n+_),N=s-Math.sin(e)*(n+_),m.push(k,N),k=a+Math.cos(e)*(n+M),
N=s-Math.sin(e)*(n+M),m.push(k,N),t.createPolyline(m).setFill(c).setStroke(u)},refreshRendering:function(){
this.inherited(arguments);var t=this._gfxGroup;t.clear();var a=this.scale.originX,s=this.scale.originY,n=isNaN(this.radius)?this.scale.radius:this.radius,o=this.scale.orientation,e=i.toRadians(360-this.scale.positionForValue(this.start)),r=isNaN(this._transitionValue)?this.value:this._transitionValue,h=i.toRadians(360-this.scale.positionForValue(r)),l=this.startThickness,c=this.endThickness,u=NaN;
this._drawColorTrack(t,a,s,n,o,e,h,l,c,this.fill,this.stroke,u)},_onMouseDown:function(t){
this.inherited(arguments);var a=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),i=180*Math.atan2(t.pageY-a.y,t.pageX-a.x)/Math.PI;
this.set("value",this.scale.valueForPosition(i)),s.stop(t)},_onMouseMove:function(t){
this.inherited(arguments);var a=this.scale._gauge._gaugeToPage(this.scale.originX,this.scale.originY),i=180*Math.atan2(t.pageY-a.y,t.pageX-a.x)/Math.PI;
this.set("value",this.scale.valueForPosition(i))}})});