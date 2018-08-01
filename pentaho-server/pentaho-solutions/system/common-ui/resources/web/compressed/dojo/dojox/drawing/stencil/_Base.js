define(["dojo","dojo/fx/easing","../util/oo","../annotations/BoxShadow","../annotations/Angle","../annotations/Label","../defaults"],function(t,i,e,s,n,h,o){
var a=e.declare(function(i){t.mixin(this,i),this.style=i.style||o.copy(),i.stencil&&(this.stencil=i.stencil,
this.util=i.stencil.util,this.mouse=i.stencil.mouse,this.container=i.stencil.container,
this.style=i.stencil.style);var e=/Line|Vector|Axes|Arrow/,s=/Text/;if(this.shortType=this.util.abbr(this.type),
this.isText=s.test(this.type),this.isLine=e.test(this.type),this.renderHit=this.style.renderHitLayer,
!this.renderHit&&this.style.renderHitLines&&this.isLine&&(this.renderHit=!0),!this.renderHit&&this.style.useSelectedStyle){
this.useSelectedStyle=!0,this.selCopy=t.clone(this.style.selected);for(var h in this.style.norm)void 0===this.style.selected[h]&&(this.style.selected[h]=this.style.norm[h]);
this.textSelected=t.clone(this.style.text),this.textSelected.color=this.style.selected.fill;
}if(this.angleSnap=this.style.angleSnap||1,this.marginZero=i.marginZero||this.style.anchors.marginZero,
this.id=i.id||this.util.uid(this.type),this._cons=[],this.annotation||this.subShape||this.util.attr(this.container,"id",this.id),
this.connect(this,"onBeforeRender","preventNegativePos"),this._offX=this.mouse.origin.x,
this._offY=this.mouse.origin.y,this.isText){if(this.align=i.align||this.align,this.valign=i.valign||this.valign,
i.data&&i.data.makeFit){var a=this.makeFit(i.data.text,i.data.width);this.textSize=this.style.text.size=a.size,
this._lineHeight=a.box.h}else this.textSize=parseInt(this.style.text.size,10),this._lineHeight=1.4*this.textSize;
this.deleteEmptyCreate=void 0!==i.deleteEmptyCreate?i.deleteEmptyCreate:this.style.text.deleteEmptyCreate,
this.deleteEmptyModify=void 0!==i.deleteEmptyModify?i.deleteEmptyModify:this.style.text.deleteEmptyModify;
}this.attr(i.data),this.noBaseRender||(i.points?(i.data&&i.data.closePath===!1&&(this.closePath=!1),
this.setPoints(i.points),this.connect(this,"render",this,"onRender",!0),this.baseRender&&this.enabled&&this.render(),
i.label&&this.setLabel(i.label),i.shadow&&this.addShadow(i.shadow)):i.data?(i.data.width=i.data.width?i.data.width:this.style.text.minWidth,
i.data.height=i.data.height?i.data.height:this._lineHeight,this.setData(i.data),this.connect(this,"render",this,"onRender",!0),
this.baseRender&&this.enabled&&this.render(i.data.text),this.baseRender&&i.label&&this.setLabel(i.label),
this.baseRender&&i.shadow&&this.addShadow(i.shadow)):this.draws&&(this.points=[],
this.data={},this.connectMouse(),this._postRenderCon=t.connect(this,"render",this,"_onPostRender")),
this.showAngle&&(this.angleLabel=new n({stencil:this})),this.enabled||(this.disable(),
this.moveToBack(),this.render(i.data.text)))},{type:"dojox.drawing.stencil",minimumSize:10,
enabled:!0,drawingType:"stencil",setData:function(t){this.data=t,this.points=this.dataToPoints();
},setPoints:function(t){this.points=t,this.pointsToData&&(this.data=this.pointsToData());
},onDelete:function(t){console.info("onDelete",this.id)},onBeforeRender:function(t){},
onModify:function(t){},onChangeData:function(t){},onChangeText:function(t){},onRender:function(i){
this._postRenderCon=t.connect(this,"render",this,"_onPostRender"),this.created=!0,
this.disconnectMouse(),this.shape?this.shape.superClass=this:this.container.superClass=this,
this._setNodeAtts(this)},onChangeStyle:function(t){this._isBeingModified=!0,this.enabled?(this.style.current=this.style.norm,
this.style.currentHit=this.style.hitNorm,this.style.currentText=this.style.text):(this.style.current=this.style.disabled,
this.style.currentText=this.style.textDisabled,this.style.currentHit=this.style.hitNorm),
this.selected?(this.useSelectedStyle&&(this.style.current=this.style.selected,this.style.currentText=this.textSelected),
this.style.currentHit=this.style.hitSelected):this.highlighted&&(this.style.currentHit=this.style.hitHighlighted),
this.render()},animate:function(e,s){console.warn("ANIMATE..........................");
var n,h,o=e.d||e.duration||1e3,a=e.ms||20,r=e.ease||i.linear,d=(e.steps,(new Date).getTime()),l=0,c=!0;
t.isArray(e.start)?(n=e.start,h=e.end):t.isObject(e.start)?(n=e.start,h=e.end,c=!1):console.warn("No data provided to animate");
var y=setInterval(t.hitch(this,function(){var i=(new Date).getTime()-d,e=r(1-i/o);
if(i>o||l++>100)return void clearInterval(y);if(c){var s=[];t.forEach(n,function(t,i){
var o={x:(h[i].x-n[i].x)*e+n[i].x,y:(h[i].y-n[i].y)*e+n[i].y};s.push(o)}),this.setPoints(s),
this.render()}else{var a={};for(var u in n)a[u]=(h[u]-n[u])*e+n[u];this.attr(a)}}),a);
},attr:function(i,e){var s,n,h,o=this.enabled?this.style.norm:this.style.disabled,a=this.enabled?this.style.text:this.style.textDisabled,r=this.textSelected||{},d=t.toJson(o),l=t.toJson(a),c={
x:!0,y:!0,r:!0,height:!0,width:!0,radius:!0,angle:!0},y=!1;"object"!=typeof i?(s={},
s[i]=e):s=t.clone(i),s.width&&(h=s.width,delete s.width);for(n in s)n in o&&(o[n]=s[n]),
n in a&&(a[n]=s[n]),n in r&&(r[n]=s[n]),n in c&&(c[n]=s[n],y=!0,"radius"==n&&void 0===s.angle?s.angle=c.angle=this.getAngle():"angle"==n&&void 0===s.radius&&(s.radius=c.radius=this.getRadius())),
"text"==n&&this.setText(s.text),"label"==n&&this.setLabel(s.label);if(void 0!==s.borderWidth&&(o.width=s.borderWidth),
this.useSelectedStyle){for(n in this.style.norm)void 0===this.selCopy[n]&&(this.style.selected[n]=this.style.norm[n]);
this.textSelected.color=this.style.selected.color}if(this.created){if(void 0!==s.x||void 0!==s.y){
var u=this.getBounds(!0),f={dx:0,dy:0};for(n in s)("x"==n||"y"==n||"r"==n)&&(f["d"+n]=s[n]-u[n]);
this.transformPoints(f)}var g=this.points;void 0!==s.angle?this.dataToPoints({x:this.data.x1,
y:this.data.y1,angle:s.angle,radius:s.radius}):void 0!==h&&(g[1].x=g[2].x=g[0].x+h,
this.pointsToData(g)),void 0!==s.height&&void 0===s.angle&&(console.log("Doing P2D-2"),
g[2].y=g[3].y=g[0].y+s.height,this.pointsToData(g)),void 0!==s.r&&(this.data.r=Math.max(0,s.r)),
(y||l!=t.toJson(a)||d!=t.toJson(o))&&this.onChangeStyle(this),s.width=h,void 0!=s.cosphi&&(this.data?this.data.cosphi=s.cosphi:this.data={
cosphi:s.cosphi},this.style.zAxis=0!=s.cosphi?!0:!1)}},exporter:function(){var i=this.type.substring(this.type.lastIndexOf(".")+1).charAt(0).toLowerCase()+this.type.substring(this.type.lastIndexOf(".")+2),e=t.clone(this.style.norm);
e.borderWidth=e.width,delete e.width,"path"==i?e.points=this.points:e=t.mixin(e,this.data),
e.type=i,this.isText&&(e.text=this.getText(),e=t.mixin(e,this.style.text),delete e.minWidth,
delete e.deleteEmptyCreate,delete e.deleteEmptyModify);var s=this.getLabel();return s&&(e.label=s),
e},disable:function(){this.enabled=!1,this.renderHit=!1,this.onChangeStyle(this)},
enable:function(){this.enabled=!0,this.renderHit=!0,this.onChangeStyle(this)},select:function(){
this.selected=!0,this.onChangeStyle(this)},deselect:function(i){i?setTimeout(t.hitch(this,function(){
this.selected=!1,this.onChangeStyle(this)}),200):(this.selected=!1,this.onChangeStyle(this));
},_toggleSelected:function(){this.selected&&(this.deselect(),setTimeout(t.hitch(this,"select"),0));
},highlight:function(){this.highlighted=!0,this.onChangeStyle(this)},unhighlight:function(){
this.highlighted=!1,this.onChangeStyle(this)},moveToFront:function(){this.container&&this.container.moveToFront();
},moveToBack:function(){this.container&&this.container.moveToBack()},onTransformBegin:function(t){
this._isBeingModified=!0},onTransformEnd:function(t){this._isBeingModified=!1,this.onModify(this);
},onTransform:function(t){this._isBeingModified||this.onTransformBegin(),this.setPoints(this.points),
this.render()},transformPoints:function(i){if(i.dx||i.dy){var e=t.clone(this.points),s=!1;
if(t.forEach(this.points,function(t){t.x+=i.dx,t.y+=i.dy,(t.x<this.marginZero||t.y<this.marginZero)&&(s=!0);
}),s)return this.points=e,void console.error("Attempt to set object '"+this.id+"' to less than zero.");
this.onTransform(),this.onTransformEnd()}},applyTransform:function(t){this.transformPoints(t);
},setTransform:function(t){this.attr({x:t.dx,y:t.dy})},getTransform:function(){return this.selected?this.container.getParent().getTransform():{
dx:0,dy:0}},addShadow:function(t){t=t===!0?{}:t,t.stencil=this,this.shadow=new s(t);
},removeShadow:function(){this.shadow.destroy()},setLabel:function(t){this._label?void 0!=t&&this._label.setLabel(t):this._label=new h.Label({
text:t,util:this.util,mouse:this.mouse,stencil:this,annotation:!0,container:this.container,
labelPosition:this.labelPosition})},getLabel:function(){return this._label?this._label.getText():null;
},getAngle:function(){var t=this.pointsToData(),i={start:{x:t.x1,y:t.y1},x:t.x2,y:t.y2
},e=this.util.angle(i,this.angleSnap);return 0>e?e=360+e:e,e},getRadius:function(){
var t=this.getBounds(!0),i={start:{x:t.x1,y:t.y1},x:t.x2,y:t.y2};return this.util.length(i);
},getBounds:function(t){var i,e,s,n,h=this.points;return 2==h.length?(t?(i=h[0].x,
e=h[0].y,s=h[1].x,n=h[1].y):(i=h[0].x<h[1].x?h[0].x:h[1].x,e=h[0].y<h[1].y?h[0].y:h[1].y,
s=h[0].x<h[1].x?h[1].x:h[0].x,n=h[0].y<h[1].y?h[1].y:h[0].y),{x1:i,y1:e,x2:s,y2:n,
x:i,y:e,w:s-i,h:n-e}):{x1:h[0].x,y1:h[0].y,x2:h[2].x,y2:h[2].y,x:h[0].x,y:h[0].y,
w:h[2].x-h[0].x,h:h[2].y-h[0].y}},preventNegativePos:function(){if(!this._isBeingModified&&this.points&&this.points.length){
if("dojox.drawing.tools.custom.Axes"==this.type){var i=this.marginZero,e=this.marginZero;
t.forEach(this.points,function(t){i=Math.min(t.y,i)}),t.forEach(this.points,function(t){
e=Math.min(t.x,e)}),i<this.marginZero&&t.forEach(this.points,function(t,e){t.y=t.y+(this.marginZero-i);
},this),e<this.marginZero&&t.forEach(this.points,function(t){t.x+=this.marginZero-e;
},this)}else t.forEach(this.points,function(t){t.x=t.x<0?this.marginZero:t.x,t.y=t.y<0?this.marginZero:t.y;
});this.setPoints(this.points)}},_onPostRender:function(i){this._isBeingModified?(this.onModify(this),
this._isBeingModified=!1):!this.created,this.editMode||this.selected||!this._prevData||t.toJson(this._prevData)==t.toJson(this.data)?this._prevData||this.isText&&!this.getText()||(this._prevData=t.clone(this.data)):(this.onChangeData(this),
this._prevData=t.clone(this.data))},_setNodeAtts:function(t){var i=!this.enabled||this.annotation&&"label"!=this.drawingType?"":this.drawingType;
this.util.attr(t,"drawingType",i)},destroy:function(){this.destroyed||((this.data||this.points&&this.points.length)&&this.onDelete(this),
this.disconnectMouse(),this.disconnect(this._cons),t.disconnect(this._postRenderCon),
this.remove(this.shape,this.hit),this.destroyed=!0)},remove:function(){var t=arguments;
if(!t.length){if(!this.shape)return;t=[this.shape]}for(var i=0;i<t.length;i++)t[i]&&t[i].removeShape();
},connectMult:function(){arguments.length>1?this._cons.push(this.connect.apply(this,arguments)):t.isArray(arguments[0][0])?t.forEach(arguments[0],function(t){
this._cons.push(this.connect.apply(this,t))},this):this._cons.push(this.connect.apply(this,arguments[0]));
},connect:function(i,e,s,n,h){var o;if("object"!=typeof i)s?(n=s,s=e,e=i,i=this):(n=e,
e=i,i=s=this);else if(n){if(h)return o=t.connect(i,e,function(i){t.hitch(s,n)(i),
t.disconnect(o)}),this._cons.push(o),o}else n=s,s=this;return o=t.connect(i,e,s,n),
this._cons.push(o),o},disconnect:function(i){i&&(t.isArray(i)||(i=[i]),t.forEach(i,t.disconnect,t));
},connectMouse:function(){this._mouseHandle=this.mouse.register(this)},disconnectMouse:function(){
this.mouse.unregister(this._mouseHandle)},render:function(){},dataToPoints:function(t){},
pointsToData:function(t){},onDown:function(i){this._downOnCanvas=!0,t.disconnect(this._postRenderCon),
this._postRenderCon=null},onMove:function(t){},onDrag:function(t){},onUp:function(t){}
});return t.setObject("dojox.drawing.stencil._Base",a),a});