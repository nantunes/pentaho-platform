define(["dojo/_base/declare","dojox/gfx","./ScaleBase","./_circularUtils"],function(t,i,n,e){
return t("dojox.dgauges.CircularScale",n,{originX:50,originY:50,radius:50,startAngle:0,
endAngle:180,orientation:"clockwise",constructor:function(){this.labelPosition="inside",
this.addInvalidatingProperties(["originX","originY","radius","startAngle","endAngle","orientation"]);
},_getOrientationNum:function(){return"cclockwise"==this.orientation?-1:1},positionForValue:function(t){
var i=e.computeTotalAngle(this.startAngle,this.endAngle,this.orientation),n=this.scaler.positionForValue(t);
return e.modAngle(this.startAngle+this._getOrientationNum()*i*n,360)},_positionForTickItem:function(t){
var i=e.computeTotalAngle(this.startAngle,this.endAngle,this.orientation);return e.modAngle(this.startAngle+this._getOrientationNum()*i*t.position,360);
},valueForPosition:function(t){if(this.positionInRange(t)){var i=e.modAngle(this._getOrientationNum()*(t-this.startAngle),360),n=e.computeTotalAngle(this.startAngle,this.endAngle,this.orientation);
s=i/n}else{var s,a=e.modAngle(this.startAngle-t,360),o=360-a,r=e.modAngle(this.endAngle-t,360),h=360-r;
s=Math.min(a,o)<Math.min(r,h)?0:1}return this.scaler.valueForPosition(s)},positionInRange:function(t){
return this.startAngle==this.endAngle?!0:(t=e.modAngle(t,360),1==this._getOrientationNum()?this.startAngle<this.endAngle?t>=this.startAngle&&t<=this.endAngle:!(t>this.endAngle&&t<this.startAngle):this.startAngle<this.endAngle?!(t>this.startAngle&&t<this.endAngle):t>=this.endAngle&&t<=this.startAngle);
},_distance:function(t,i,n,e){return Math.sqrt((n-t)*(n-t)+(e-i)*(e-i))},_layoutLabel:function(t,n,e,s,a,o,r){
var h,l=this._getFont(),g=i._base._getTextBox(n,{font:i.makeFontString(i.makeParameters(i.defaultFont,l))
}),d=g.w,u=l.size,c=i.normalizedLength(u),A=e+Math.cos(o)*a-d/2,m=s-Math.sin(o)*a-c/2,_=[];
h=A;var f=h,p=-Math.tan(o)*h+s+Math.tan(o)*e;p>=m&&m+c>=p&&_.push({x:f,y:p}),h=A+d,
f=h,p=-Math.tan(o)*h+s+Math.tan(o)*e,p>=m&&m+c>=p&&_.push({x:f,y:p}),h=m,f=-1/Math.tan(o)*h+e+1/Math.tan(o)*s,
p=h,f>=A&&A+d>=f&&_.push({x:f,y:p}),h=m+c,f=-1/Math.tan(o)*h+e+1/Math.tan(o)*s,p=h,
f>=A&&A+d>=f&&_.push({x:f,y:p});var x;if("inside"==r)for(var v=0;v<_.length;v++){
var F=_[v];if(x=this._distance(F.x,F.y,e,s)-a,x>=0){A=e+Math.cos(o)*(a-x)-d/2,m=s-Math.sin(o)*(a-x)-c/2;
break}}else for(v=0;v<_.length;v++)if(F=_[v],x=this._distance(F.x,F.y,e,s)-a,0>=x){
A=e+Math.cos(o)*(a-x)-d/2,m=s-Math.sin(o)*(a-x)-c/2;break}t&&t.setTransform([{dx:A+d/2,
dy:m+c}])},refreshRendering:function(){if(this.inherited(arguments),this._gfxGroup&&this.scaler){
this.startAngle=e.modAngle(this.startAngle,360),this.endAngle=e.modAngle(this.endAngle,360),
this._ticksGroup.clear();for(var t,n,s,a,o=this.scaler.computeTicks(),r=0;r<o.length;r++){
var h=o[r];t=this.tickShapeFunc(this._ticksGroup,this,h),a=this._gauge._computeBoundingBox(t);
var l;if(l=h.position?this._positionForTickItem(h):this.positionForValue(h.value),
t&&t.setTransform([{dx:this.originX,dy:this.originY},i.matrix.rotateg(l),{dx:this.radius-a.width-2*a.x,
dy:0}]),s=this.tickLabelFunc(h)){n=this._ticksGroup.createText({x:0,y:0,text:s,align:"middle"
}).setFont(this._getFont()).setFill(this._getFont().color?this._getFont().color:"black");
var g=this.radius;"inside"==this.labelPosition?g-=a.width+this.labelGap:g+=this.labelGap,
this._layoutLabel(n,s,this.originX,this.originY,g,e.toRadians(360-l),this.labelPosition);
}}for(var d in this._indicatorsIndex)this._indicatorsRenderers[d]=this._indicatorsIndex[d].invalidateRendering();
}}})});