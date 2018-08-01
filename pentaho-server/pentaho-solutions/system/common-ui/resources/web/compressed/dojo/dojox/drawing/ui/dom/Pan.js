define(["dojo","../../util/oo","../../plugins/_Plugin","../../manager/_registry"],function(t,e,n,o){
t.deprecated("dojox.drawing.ui.dom.Pan","It may not even make it to the 1.4 release.",1.4);
var s=e.declare(n,function(e){this.domNode=e.node;var n;t.connect(this.domNode,"click",this,"onSetPan"),
t.connect(this.keys,"onKeyUp",this,"onKeyUp"),t.connect(this.keys,"onKeyDown",this,"onKeyDown"),
t.connect(this.anchors,"onAnchorUp",this,"checkBounds"),t.connect(this.stencils,"register",this,"checkBounds"),
t.connect(this.canvas,"resize",this,"checkBounds"),t.connect(this.canvas,"setZoom",this,"checkBounds"),
t.connect(this.canvas,"onScroll",this,function(){return this._blockScroll?void(this._blockScroll=!1):(n&&clearTimeout(n),
void(n=setTimeout(t.hitch(this,"checkBounds"),200)))}),this._mouseHandle=this.mouse.register(this);
},{selected:!1,type:"dojox.drawing.ui.dom.Pan",onKeyUp:function(t){32==t.keyCode&&this.onSetPan(!1);
},onKeyDown:function(t){32==t.keyCode&&this.onSetPan(!0)},onSetPan:function(e){(e===!0||e===!1)&&(this.selected=!e),
this.selected?(this.selected=!1,t.removeClass(this.domNode,"selected")):(this.selected=!0,
t.addClass(this.domNode,"selected")),this.mouse.setEventMode(this.selected?"pan":"");
},onPanDrag:function(t){t.x-t.last.x,t.y-t.last.y;this.canvas.domNode.parentNode.scrollTop-=t.move.y,
this.canvas.domNode.parentNode.scrollLeft-=t.move.x,this.canvas.onScroll()},onStencilUp:function(t){
this.checkBounds()},onStencilDrag:function(t){},checkBounds:function(){var t=function(){},e=function(){},n=1/0,o=-(1/0),s=-(1/0),i=1/0,c=0,a=0,h=0,d=0,l=this.stencils.group?this.stencils.group.getTransform():{
dx:0,dy:0},r=this.mouse.scrollOffset(),u=(r.left?10:0,r.top?10:0,this.canvas.height),m=this.canvas.width,p=this.canvas.zoom,v=this.canvas.parentHeight,y=this.canvas.parentWidth;
this.stencils.withSelected(function(t){var c=t.getBounds();e("SEL BOUNDS:",c),n=Math.min(c.y1+l.dy,n),
o=Math.max(c.x2+l.dx,o),s=Math.max(c.y2+l.dy,s),i=Math.min(c.x1+l.dx,i)}),this.stencils.withUnselected(function(t){
var c=t.getBounds();e("UN BOUNDS:",c),n=Math.min(c.y1,n),o=Math.max(c.x2,o),s=Math.max(c.y2,s),
i=Math.min(c.x1,i)}),s*=p;var f=0,g=0;t("Bottom test","b:",s,"z:",p,"ch:",u,"pch:",v,"top:",r.top,"sy:",a),
s>v||r.top?(t("*bottom scroll*"),u=Math.max(s,v+r.top),a=r.top,f+=this.canvas.getScrollWidth()):!a&&u>v&&(t("*bottom remove*"),
u=v),o*=p,o>y||r.left?(m=Math.max(o,y+r.left),c=r.left,g+=this.canvas.getScrollWidth()):!c&&m>y&&(m=y),
m+=2*f,u+=2*g,this._blockScroll=!0,this.stencils.group&&this.stencils.group.applyTransform({
dx:d,dy:h}),this.stencils.withUnselected(function(t){t.transformPoints({dx:d,dy:h
})}),this.canvas.setDimensions(m,u,c,a)}});return t.setObject("dojox.drawing.ui.dom.Pan",s),
s.setup={name:"dojox.drawing.ui.dom.Pan",tooltip:"Pan Tool",iconClass:"iconPan"},
o.register(s.setup,"plugin"),s});