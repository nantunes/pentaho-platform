define(["dojo/_base/array","dojo/dom-construct","dojo/_base/declare","dojox/gfx","dojox/gfx/shape"],function(t,e,r,a,i){
return r("dojox.charting.Element",null,{chart:null,group:null,htmlElements:null,dirty:!0,
constructor:function(t){this.chart=t,this.group=null,this.htmlElements=[],this.dirty=!0,
this.trailingSymbol="...",this._events=[]},purgeGroup:function(){if(this.destroyHtmlElements(),
this.group){this.getGroup().removeShape();var r=this.getGroup().children;if(i.dispose)for(var a=0;a<r.length;++a)i.dispose(r[a],!0);
this.getGroup().rawNode&&e.empty(this.getGroup().rawNode),this.getGroup().clear(),
i.dispose&&i.dispose(this.getGroup(),!0),this.getGroup()!=this.group&&(this.group.rawNode&&e.empty(this.group.rawNode),
this.group.clear(),i.dispose&&i.dispose(this.group,!0)),this.group=null}return this.dirty=!0,
this._events.length&&(t.forEach(this._events,function(t){t.shape.disconnect(t.handle);
}),this._events=[]),this},cleanGroup:function(t){if(this.destroyHtmlElements(),t||(t=this.chart.surface),
this.group){var r,a=this.getGroup().children;if(i.dispose)for(var s=0;s<a.length;++s)i.dispose(a[s],!0);
this.getGroup().rawNode&&(r=this.getGroup().bgNode,e.empty(this.getGroup().rawNode)),
this.getGroup().clear(),r&&this.getGroup().rawNode.appendChild(r)}else this.group=t.createGroup();
return this.dirty=!0,this},getGroup:function(){return this.group},destroyHtmlElements:function(){
this.htmlElements.length&&(t.forEach(this.htmlElements,e.destroy),this.htmlElements=[]);
},destroy:function(){this.purgeGroup()},getTextWidth:function(t,e){return a._base._getTextBox(t,{
font:e}).w||0},getTextWithLimitLength:function(t,e,r,a){if(!t||t.length<=0)return{
text:"",truncated:a||!1};if(!r||0>=r)return{text:t,truncated:a||!1};var i=2,s=.618,h=t.substring(0,1)+this.trailingSymbol,n=this.getTextWidth(h,e);
if(n>=r)return{text:h,truncated:!0};var o=this.getTextWidth(t,e);if(r>=o)return{text:t,
truncated:a||!1};for(var p=0,l=t.length;l>p;){if(i>=l-p){for(;this.getTextWidth(t.substring(0,p)+this.trailingSymbol,e)>r;)p-=1;
return{text:t.substring(0,p)+this.trailingSymbol,truncated:!0}}var u=p+Math.round((l-p)*s),d=this.getTextWidth(t.substring(0,u),e);
r>d?(p=u,l=l):(p=p,l=u)}},getTextWithLimitCharCount:function(t,e,r,a){return!t||t.length<=0?{
text:"",truncated:a||!1}:!r||0>=r||t.length<=r?{text:t,truncated:a||!1}:{text:t.substring(0,r)+this.trailingSymbol,
truncated:!0}},_plotFill:function(t,e,r){if(!t||!t.type||!t.space)return t;var i,s=t.space;
switch(t.type){case"linear":("plot"===s||"shapeX"===s||"shapeY"===s)&&(t=a.makeParameters(a.defaultLinearGradient,t),
t.space=s,("plot"===s||"shapeX"===s)&&(i=e.height-r.t-r.b,t.y1=r.t+i*t.y1/100,t.y2=r.t+i*t.y2/100),
("plot"===s||"shapeY"===s)&&(i=e.width-r.l-r.r,t.x1=r.l+i*t.x1/100,t.x2=r.l+i*t.x2/100));
break;case"radial":if("plot"===s){t=a.makeParameters(a.defaultRadialGradient,t),t.space=s;
var h=e.width-r.l-r.r,n=e.height-r.t-r.b;t.cx=r.l+h*t.cx/100,t.cy=r.t+n*t.cy/100,
t.r=t.r*Math.sqrt(h*h+n*n)/200}break;case"pattern":("plot"===s||"shapeX"===s||"shapeY"===s)&&(t=a.makeParameters(a.defaultPattern,t),
t.space=s,("plot"===s||"shapeX"===s)&&(i=e.height-r.t-r.b,t.y=r.t+i*t.y/100,t.height=i*t.height/100),
("plot"===s||"shapeY"===s)&&(i=e.width-r.l-r.r,t.x=r.l+i*t.x/100,t.width=i*t.width/100));
}return t},_shapeFill:function(t,e){if(!t||!t.space)return t;var r,i=t.space;switch(t.type){
case"linear":("shape"===i||"shapeX"===i||"shapeY"===i)&&(t=a.makeParameters(a.defaultLinearGradient,t),
t.space=i,("shape"===i||"shapeX"===i)&&(r=e.width,t.x1=e.x+r*t.x1/100,t.x2=e.x+r*t.x2/100),
("shape"===i||"shapeY"===i)&&(r=e.height,t.y1=e.y+r*t.y1/100,t.y2=e.y+r*t.y2/100));
break;case"radial":"shape"===i&&(t=a.makeParameters(a.defaultRadialGradient,t),t.space=i,
t.cx=e.x+e.width/2,t.cy=e.y+e.height/2,t.r=t.r*e.width/200);break;case"pattern":("shape"===i||"shapeX"===i||"shapeY"===i)&&(t=a.makeParameters(a.defaultPattern,t),
t.space=i,("shape"===i||"shapeX"===i)&&(r=e.width,t.x=e.x+r*t.x/100,t.width=r*t.width/100),
("shape"===i||"shapeY"===i)&&(r=e.height,t.y=e.y+r*t.y/100,t.height=r*t.height/100));
}return t},_pseudoRadialFill:function(t,e,r,i,s){if(!t||"radial"!==t.type||"shape"!==t.space)return t;
var h=t.space;if(t=a.makeParameters(a.defaultRadialGradient,t),t.space=h,arguments.length<4)return t.cx=e.x,
t.cy=e.y,t.r=t.r*r/100,t;var n=arguments.length<5?i:(s+i)/2;return{type:"linear",
x1:e.x,y1:e.y,x2:e.x+t.r*r*Math.cos(n)/100,y2:e.y+t.r*r*Math.sin(n)/100,colors:t.colors
}}})});