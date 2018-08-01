define(["dojo/_base/declare","dojox/gfx","./ScaleBase"],function(t,i,o){return t("dojox.dgauges.RectangularScale",o,{
paddingLeft:15,paddingTop:12,paddingRight:15,paddingBottom:0,_contentBox:null,constructor:function(){
this.labelPosition="leading",this.addInvalidatingProperties(["paddingTop","paddingLeft","paddingRight","paddingBottom"]);
},positionForValue:function(t){var i,o=0,n=0,e=0;return this._contentBox&&("horizontal"==this._gauge.orientation?(n=this._contentBox.x,
e=this._contentBox.w):(n=this._contentBox.y,e=this._contentBox.h)),o=this.scaler.positionForValue(t),
i=n+o*e},valueForPosition:function(t){var i=this.scaler.minimum,o=NaN,n=0,e=0;return"horizontal"==this._gauge.orientation?(o=t.x,
n=this._contentBox.x,e=this._contentBox.x+this._contentBox.w):(o=t.y,n=this._contentBox.y,
e=this._contentBox.y+this._contentBox.h),i=n>=o?this.scaler.minimum:o>=e?this.scaler.maximum:this.scaler.valueForPosition((o-n)/(e-n));
},refreshRendering:function(){if(this.inherited(arguments),this._gfxGroup&&this.scaler){
this._ticksGroup.clear();var t=this._gauge._layoutInfos.middle;this._contentBox={},
this._contentBox.x=t.x+this.paddingLeft,this._contentBox.y=t.y+this.paddingTop,this._contentBox.w=t.w-(this.paddingLeft+this.paddingRight),
this._contentBox.h=t.h-(this.paddingBottom+this.paddingTop);for(var o,n,e=this._getFont(),a=this.scaler.computeTicks(),s=0;s<a.length;s++){
var h=a[s];if(o=this.tickShapeFunc(this._ticksGroup,this,h)){var r=this.positionForValue(h.value),d=this._gauge._computeBoundingBox(o).width,c=0,l=0,g=0;
"horizontal"==this._gauge.orientation?(c=r,l=this._contentBox.y,g=90):(c=this._contentBox.x,
l=r),o.setTransform([{dx:c,dy:l},i.matrix.rotateg(g)])}if(n=this.tickLabelFunc(h)){
var x=i._base._getTextBox(n,{font:i.makeFontString(i.makeParameters(i.defaultFont,e))
}),u=x.w,_=x.h,p="start",B=c,f=l;"horizontal"==this._gauge.orientation?(B=c,f="trailing"==this.labelPosition?l+d+this.labelGap+_:l-this.labelGap,
p="middle"):(B="trailing"==this.labelPosition?c+d+this.labelGap:c-this.labelGap-u,
f=l+_/2);var m=this._ticksGroup.createText({x:B,y:f,text:n,align:p});m.setFill(e.color?e.color:"black"),
m.setFont(e)}}for(var v in this._indicatorsIndex)this._indicatorsRenderers[v]=this._indicatorsIndex[v].invalidateRendering();
}}})});