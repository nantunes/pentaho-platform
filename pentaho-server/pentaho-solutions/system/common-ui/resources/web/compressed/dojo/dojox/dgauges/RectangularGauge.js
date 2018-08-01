define(["dojo/_base/declare","./GaugeBase","dojox/gfx/matrix"],function(t,i,s){return t("dojox.dgauges.RectangularGauge",i,{
orientation:"horizontal",_middleParts:null,_leadingParts:null,_trailingParts:null,
_baseParts:null,_classParts:null,_layoutInfos:{},constructor:function(){this.orientation="horizontal",
this._middleParts=[],this._leadingParts=[],this._trailingParts=[],this._baseParts=[],
this._classParts=[],this._layoutInfos={leading:{x:0,y:0,w:0,h:0},middle:{x:0,y:0,
w:0,h:0},trailing:{x:0,y:0,w:0,h:0}},this.addInvalidatingProperties(["orientation"]);
},addElement:function(t,i,s){this.inherited(arguments);var e=this._elements[this._elements.length-1];
"middle"==s?this._middleParts.push(e):"leading"==s?this._leadingParts.push(e):"trailing"==s?this._trailingParts.push(e):e._isGFX?this._baseParts.push(e):this._classParts.push(e);
},removeElement:function(t){var i=this.getElement(t);i&&(this._middleParts&&this._middleParts.indexOf(i)>=0?this._middleParts.splice(this._middleParts.indexOf(i),1):this._leadingParts&&this._leadingParts.indexOf(i)>=0?this._leadingParts.splice(this._leadingParts.indexOf(i),1):this._trailingParts&&this._trailingParts.indexOf(i)>=0?this._trailingParts.splice(this._trailingParts.indexOf(i),1):this._baseParts&&this._baseParts.indexOf(i)>=0?this._baseParts.splice(this._baseParts.indexOf(i),1):this._classParts&&this._classParts.indexOf(i)>=0&&this._classParts.splice(this._classParts.indexOf(i),1)),
this.inherited(arguments)},_computeArrayBoundingBox:function(t){if(0==t.length)return{
x:0,y:0,w:0,h:0};var i,s,e,a,r=null;i=s=+(1/0),e=a=-(1/0);for(var n=0;n<t.length;n++)r=this._computeBoundingBox(t[n]._gfxGroup),
i>r.x&&(i=r.x),s>r.y&&(s=r.y),e<r.x+r.width&&(e=r.x+r.width),a<r.y+r.height&&(a=r.y+r.height);
return{x:i,y:s,w:e-i,h:a-s}},refreshRendering:function(){if(!(this._widgetBox.w<=0||this._widgetBox.h<=0)){
var t;if(this._baseParts)for(t=0;t<this._baseParts.length;t++)this._baseParts[t].width=this._widgetBox.w,
this._baseParts[t].height=this._widgetBox.h,this._elementsRenderers[this._baseParts[t]._name]=this._baseParts[t].refreshRendering();
if(this._leadingParts)for(t=0;t<this._leadingParts.length;t++)this._elementsRenderers[this._leadingParts[t]._name]=this._leadingParts[t].refreshRendering();
if(this._trailingParts)for(t=0;t<this._trailingParts.length;t++)this._elementsRenderers[this._trailingParts[t]._name]=this._trailingParts[t].refreshRendering();
var i=this._computeArrayBoundingBox(this._leadingParts),e=this._computeArrayBoundingBox(this._trailingParts),a={};
for("horizontal"==this.orientation?(a.x=i.x+i.w,a.y=0,a.w=this._widgetBox.w-i.w-e.w,
a.h=this._widgetBox.h):(a.x=0,a.y=i.y+i.h,a.w=this._widgetBox.w,a.h=this._widgetBox.h-i.h-e.h),
this._layoutInfos={leading:i,middle:a,trailing:e},t=0;t<this._middleParts.length;t++)this._middleParts[t]._gfxGroup.setTransform([s.translate(a.x,a.y)]);
if(this._trailingParts)for(t=0;t<this._trailingParts.length;t++)this._trailingParts[t]._gfxGroup.setTransform(s.translate(this._widgetBox.w-e.w,0));
for(t=0;t<this._classParts.length;t++)this._elementsRenderers[this._classParts[t]._name]=this._classParts[t].refreshRendering();
}}})});