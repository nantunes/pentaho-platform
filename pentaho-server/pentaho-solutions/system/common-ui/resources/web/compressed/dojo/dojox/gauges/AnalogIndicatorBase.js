define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/_base/fx","dojox/gfx","./_Indicator"],function(t,e,a,s,h,i){
return e("dojox.gauges.AnalogIndicatorBase",[i],{draw:function(t,e){if(this.shape)this._move(e);else{
this.text&&(this.text.parent.remove(this.text),this.text=null);var a=this._gauge._getAngle(Math.min(Math.max(this.value,this._gauge.min),this._gauge.max));
this.color=this.color||"#000000",this.length=this.length||this._gauge.radius,this.width=this.width||1,
this.offset=this.offset||0,this.highlight=this.highlight||"#D0D0D0";var s=this._getShapes(t,this._gauge,this);
if(s){if(s.length>1){this.shape=t.createGroup();for(var i=0;i<s.length;i++)this.shape.add(s[i]);
}else this.shape=s[0];this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy
},h.matrix.rotateg(a)]),this.shape.connect("onmouseover",this,this.handleMouseOver),
this.shape.connect("onmouseout",this,this.handleMouseOut),this.shape.connect("onmousedown",this,this.handleMouseDown),
this.shape.connect("touchstart",this,this.handleTouchStart)}if(this.label){var n=this.direction;
n||(n="outside");var o;o="inside"==n?-this.length+this.offset-5:this.length+this.offset+5;
var g=this._gauge._getRadians(90-a);this._layoutLabel(t,this.label+"",this._gauge.cx,this._gauge.cy,o,g,n);
}this.currentValue=this.value}},_layoutLabel:function(t,e,a,s,i,n,o){var g,r=this.font?this.font:h.defaultFont,u=h._base._getTextBox(e,{
font:h.makeFontString(h.makeParameters(h.defaultFont,r))}),l=u.w,c=r.size,d=h.normalizedLength(c),f=a+Math.cos(n)*i-l/2,_=s-Math.sin(n)*i-d/2,x=[];
g=f;var m=g,v=-Math.tan(n)*g+s+Math.tan(n)*a;v>=_&&_+d>=v&&x.push({x:m,y:v}),g=f+l,
m=g,v=-Math.tan(n)*g+s+Math.tan(n)*a,v>=_&&_+d>=v&&x.push({x:m,y:v}),g=_,m=-1/Math.tan(n)*g+a+1/Math.tan(n)*s,
v=g,m>=f&&f+l>=m&&x.push({x:m,y:v}),g=_+d,m=-1/Math.tan(n)*g+a+1/Math.tan(n)*s,v=g,
m>=f&&f+l>=m&&x.push({x:m,y:v});var M;if("inside"==o)for(var p=0;p<x.length;p++){
var y=x[p];if(M=this._distance(y.x,y.y,a,s)-i,M>=0){f=a+Math.cos(n)*(i-M)-l/2,_=s-Math.sin(n)*(i-M)-d/2;
break}}else for(p=0;p<x.length;p++)if(y=x[p],M=this._distance(y.x,y.y,a,s)-i,0>=M){
f=a+Math.cos(n)*(i-M)-l/2,_=s-Math.sin(n)*(i-M)-d/2;break}this.text=this._gauge.drawText(t,e,f+l/2,_+d,"middle",this.color,this.font);
},_distance:function(t,e,a,s){return Math.sqrt((a-t)*(a-t)+(s-e)*(s-e))},_move:function(e){
var i=Math.min(Math.max(this.value,this._gauge.min),this._gauge.max),n=this.currentValue;
if(e){var o=this._gauge._getAngle(i);this.shape.setTransform([{dx:this._gauge.cx,
dy:this._gauge.cy},h.matrix.rotateg(o)]),this.currentValue=i}else if(n!=i){var g=new s.Animation({
curve:[n,i],duration:this.duration,easing:this.easing});a.connect(g,"onAnimate",t.hitch(this,function(t){
this.shape.setTransform([{dx:this._gauge.cx,dy:this._gauge.cy},h.matrix.rotateg(this._gauge._getAngle(t))]),
this.currentValue=t})),g.play()}}})});