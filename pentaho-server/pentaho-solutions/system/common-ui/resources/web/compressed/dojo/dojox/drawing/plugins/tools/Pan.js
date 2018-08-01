define(["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(t,s,n,o){
var e=s.declare(n,function(s){this.domNode=s.node;var n;this.toolbar=s.scope,this.connect(this.toolbar,"onToolClick",this,function(){
this.onSetPan(!1)}),this.connect(this.keys,"onKeyUp",this,"onKeyUp"),this.connect(this.keys,"onKeyDown",this,"onKeyDown"),
this.connect(this.keys,"onArrow",this,"onArrow"),this.connect(this.anchors,"onAnchorUp",this,"checkBounds"),
this.connect(this.stencils,"register",this,"checkBounds"),this.connect(this.canvas,"resize",this,"checkBounds"),
this.connect(this.canvas,"setZoom",this,"checkBounds"),this.connect(this.canvas,"onScroll",this,function(){
return this._blockScroll?void(this._blockScroll=!1):(n&&clearTimeout(n),void(n=setTimeout(t.hitch(this,"checkBounds"),200)));
}),this._mouseHandle=this.mouse.register(this)},{selected:!1,keyScroll:!1,type:"dojox.drawing.plugins.tools.Pan",
onPanUp:function(t){t.id==this.button.id&&this.onSetPan(!1)},onKeyUp:function(t){
switch(t.keyCode){case 32:this.onSetPan(!1);break;case 39:case 37:case 38:case 40:
clearInterval(this._timer)}},onKeyDown:function(t){32==t.keyCode&&this.onSetPan(!0);
},interval:20,onArrow:function(s){this._timer&&clearInterval(this._timer),this._timer=setInterval(t.hitch(this,function(t){
this.canvas.domNode.parentNode.scrollLeft+=10*t.x,this.canvas.domNode.parentNode.scrollTop+=10*t.y;
},s),this.interval)},onSetPan:function(t){(t===!0||t===!1)&&(this.selected=!t),console.log("ON SET PAN:",this.selected),
this.selected?(this.selected=!1,this.button.deselect()):(this.selected=!0,this.button.select()),
this.mouse.setEventMode(this.selected?"pan":"")},onPanDrag:function(t){t.x-t.last.x,
t.y-t.last.y;this.canvas.domNode.parentNode.scrollTop-=t.move.y,this.canvas.domNode.parentNode.scrollLeft-=t.move.x,
this.canvas.onScroll()},onUp:function(t){t.withinCanvas?this.keyScroll=!0:this.keyScroll=!1;
},onStencilUp:function(t){this.checkBounds()},onStencilDrag:function(t){},checkBounds:function(){
var t=function(){},s=function(){},n=1/0,o=-(1/0),e=-1e4,i=1e4,c=0,h=0,a=0,l=0,r=this.stencils.group?this.stencils.group.getTransform():{
dx:0,dy:0},d=this.mouse.scrollOffset(),u=(d.left?10:0,d.top?10:0,this.canvas.height),m=this.canvas.width,p=this.canvas.zoom,v=this.canvas.parentHeight,y=this.canvas.parentWidth;
this.stencils.withSelected(function(t){var c=t.getBounds();s("SEL BOUNDS:",c),n=Math.min(c.y1+r.dy,n),
o=Math.max(c.x2+r.dx,o),e=Math.max(c.y2+r.dy,e),i=Math.min(c.x1+r.dx,i)}),this.stencils.withUnselected(function(c){
var h=c.getBounds();s("UN BOUNDS:",h),n=Math.min(h.y1,n),o=Math.max(h.x2,o),e=Math.max(h.y2,e),
i=Math.min(h.x1,i),t("----------- B:",e,h.y2)}),e*=p;var f=0,g=0;t("Bottom test","b:",e,"z:",p,"ch:",u,"pch:",v,"top:",d.top,"sy:",h,"mx.dy:",r.dy),
e>v||d.top?(t("*bottom scroll*"),u=Math.max(e,v+d.top),h=d.top,f+=this.canvas.getScrollWidth()):!h&&u>v&&(t("*bottom remove*"),
u=v),o*=p,o>y||d.left?(m=Math.max(o,y+d.left),c=d.left,g+=this.canvas.getScrollWidth()):!c&&m>y&&(m=y),
m+=2*f,u+=2*g,this._blockScroll=!0,this.stencils.group&&this.stencils.group.applyTransform({
dx:l,dy:a}),this.stencils.withUnselected(function(t){t.transformPoints({dx:l,dy:a
})}),this.canvas.setDimensions(m,u,c,h)}});return e.setup={name:"dojox.drawing.plugins.tools.Pan",
tooltip:"Pan Tool",iconClass:"iconPan",button:!1},t.setObject("dojox.drawing.plugins.tools.Pan",e),
o.register(e.setup,"plugin"),e});