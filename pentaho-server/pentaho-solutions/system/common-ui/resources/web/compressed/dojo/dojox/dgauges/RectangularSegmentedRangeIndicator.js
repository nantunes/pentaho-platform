define(["dojo/_base/declare","dojo/on","dojox/gfx","./IndicatorBase"],function(e,s,t,o){
return e("dojox.dgauges.RectangularSegmentedRangeIndicator",o,{start:0,startThickness:10,
endThickness:10,fill:null,stroke:null,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,
segments:10,segmentSpacing:2,rounded:!0,ranges:null,constructor:function(){this.fill=[255,120,0],
this.stroke={color:"black",width:.2},this.addInvalidatingProperties(["start","startThickness","endThickness","fill","stroke","segments","segmentSpacing","ranges"]);
},_defaultHorizontalShapeFunc:function(e,s,t,o,i,n,r,a,l,h){var c,g,d,u,T=t._contentBox.w;
if(this.ranges){l={type:"linear",colors:[]},l.x1=o,l.y1=i,l.x2=o+T,l.y2=i;var f=this.start;
for(g=0;g<this.ranges.length;g++){var p={color:this.ranges[g].color,offset:t.scaler.positionForValue(f)
},m={color:this.ranges[g].color,offset:t.scaler.positionForValue(f+this.ranges[g].size)
};l.colors.push(p),l.colors.push(m),f+=this.ranges[g].size}}else l&&l.colors&&(l.x1=o,
l.y1=i,l.x2=o+T,l.y2=i);var k=o,v=i,S=T/this.segments-this.segmentSpacing,x=Math.abs((n-o)/(S+this.segmentSpacing)),F=this.startThickness,y=(this.endThickness-this.startThickness)/this.segments,_=F+y,z=x-Math.floor(x);
for(g=0;g<Math.floor(x);g++){var M=s.createPath();0==g&&this.rounded&&S>F/2?(u=F/2,
M.moveTo(k+u,v),M.lineTo(k+S,v),M.lineTo(k+S,v+_),M.lineTo(k+u,v+F),M.arcTo(u,u,0,0,1,k+u,v)):g==Math.floor(x)-1&&0==z&&this.rounded&&S>_/2?(u=_/2,
M.moveTo(k,v),M.lineTo(k+S-u,v),M.arcTo(u,u,0,0,1,k+S-u,v+_),M.lineTo(k,v+F),M.lineTo(k,v)):(M.moveTo(k,v),
M.lineTo(k+S,v),M.lineTo(k+S,v+_),M.lineTo(k,v+F),M.lineTo(k,v)),M.setFill(l).setStroke(h),
F=_,_+=y,k+=S+this.segmentSpacing}return z>0&&(_=F+(_-F)*z,d=[k,v,k+S*z,v,k+S*z,v+_,k,v+F,k,v],
c=s.createPolyline(d).setFill(l).setStroke(h)),c},_defaultVerticalShapeFunc:function(e,s,t,o,i,n,r,a,l,h){
var c,g,d,u,T=t._contentBox.h;if(this.ranges){l={type:"linear",colors:[]},l.x1=o,
l.y1=i,l.x2=o,l.y2=i+T;var f=0;for(g=0;g<this.ranges.length;g++){var p={color:this.ranges[g].color,
offset:t.scaler.positionForValue(f)},m={color:this.ranges[g].color,offset:t.scaler.positionForValue(f+this.ranges[g].size)
};l.colors.push(p),l.colors.push(m),f+=this.ranges[g].size}}else l&&l.colors&&(l.x1=o,
l.y1=i,l.x2=o,l.y2=i+T);var k=o,v=i,S=T/this.segments-this.segmentSpacing,x=Math.abs((n-i)/(S+this.segmentSpacing)),F=this.startThickness,y=(this.endThickness-this.startThickness)/this.segments,_=F+y,z=x-Math.floor(x);
for(g=0;g<Math.floor(x);g++){var M=s.createPath();0==g&&this.rounded&&S>F/2?(u=F/2,
M.moveTo(k,v+u),M.lineTo(k,v+S),M.lineTo(k+_,v+S),M.lineTo(k+F,v+u),M.arcTo(u,u,0,0,0,k,v+u)):g==Math.floor(x)-1&&0==z&&this.rounded&&S>_/2?(u=_/2,
M.moveTo(k,v),M.lineTo(k,v+S-u),M.arcTo(u,u,0,0,0,k+_,v+S-u),M.lineTo(k+F,v),M.lineTo(k,v)):(M.moveTo(k,v),
M.lineTo(k,v+S),M.lineTo(k+_,v+S),M.lineTo(k+F,v),M.lineTo(k,v)),M.setFill(l).setStroke(h),
F=_,_+=y,v+=S+this.segmentSpacing}return z>0&&(_=F+(_-F)*z,d=[k,v,k,v+S*z,k+_,v+S*z,k+F,v,k,v],
c=s.createPolyline(d).setFill(l).setStroke(h)),c},indicatorShapeFunc:function(e,s,t,o,i,n,r,a,l){
"horizontal"==s.scale._gauge.orientation?this._defaultHorizontalShapeFunc(s,e,s.scale,t,o,i,n,r,a,l):this._defaultVerticalShapeFunc(s,e,s.scale,t,o,i,n,r,a,l);
},refreshRendering:function(){if(null!=this._gfxGroup&&null!=this.scale){var e=this.scale.positionForValue(this.start),s=this.scale.positionForValue(this.value);
this._gfxGroup.clear();var t,o,i;"horizontal"==this.scale._gauge.orientation?(t=e,
o=this.paddingTop,i=s):(t=this.paddingLeft,o=e,i=s),this.indicatorShapeFunc(this._gfxGroup,this,t,o,i,this.startThickness,this.endThickness,this.fill,this.stroke);
}}})});