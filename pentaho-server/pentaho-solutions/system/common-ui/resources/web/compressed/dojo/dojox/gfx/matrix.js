define(["./_base","dojo/_base/lang"],function(t,n){var x=t.matrix={},e={};return x._degToRad=function(t){
return e[t]||(e[t]=Math.PI*t/180)},x._radToDeg=function(t){return t/Math.PI*180},
x.Matrix2D=function(t){if(t)if("number"==typeof t)this.xx=this.yy=t;else if(t instanceof Array){
if(t.length>0){for(var e=x.normalize(t[0]),y=1;y<t.length;++y){var r=e,i=x.normalize(t[y]);
e=new x.Matrix2D,e.xx=r.xx*i.xx+r.xy*i.yx,e.xy=r.xx*i.xy+r.xy*i.yy,e.yx=r.yx*i.xx+r.yy*i.yx,
e.yy=r.yx*i.xy+r.yy*i.yy,e.dx=r.xx*i.dx+r.xy*i.dy+r.dx,e.dy=r.yx*i.dx+r.yy*i.dy+r.dy;
}n.mixin(this,e)}}else n.mixin(this,t)},n.extend(x.Matrix2D,{xx:1,xy:0,yx:0,yy:1,
dx:0,dy:0}),n.mixin(x,{identity:new x.Matrix2D,flipX:new x.Matrix2D({xx:-1}),flipY:new x.Matrix2D({
yy:-1}),flipXY:new x.Matrix2D({xx:-1,yy:-1}),translate:function(t,n){return arguments.length>1?new x.Matrix2D({
dx:t,dy:n}):new x.Matrix2D({dx:t.x,dy:t.y})},scale:function(t,n){return arguments.length>1?new x.Matrix2D({
xx:t,yy:n}):"number"==typeof t?new x.Matrix2D({xx:t,yy:t}):new x.Matrix2D({xx:t.x,
yy:t.y})},rotate:function(t){var n=Math.cos(t),e=Math.sin(t);return new x.Matrix2D({
xx:n,xy:-e,yx:e,yy:n})},rotateg:function(t){return x.rotate(x._degToRad(t))},skewX:function(t){
return new x.Matrix2D({xy:Math.tan(t)})},skewXg:function(t){return x.skewX(x._degToRad(t));
},skewY:function(t){return new x.Matrix2D({yx:Math.tan(t)})},skewYg:function(t){return x.skewY(x._degToRad(t));
},reflect:function(t,n){1==arguments.length&&(n=t.y,t=t.x);var e=t*t,y=n*n,r=e+y,i=2*t*n/r;
return new x.Matrix2D({xx:2*e/r-1,xy:i,yx:i,yy:2*y/r-1})},project:function(t,n){1==arguments.length&&(n=t.y,
t=t.x);var e=t*t,y=n*n,r=e+y,i=t*n/r;return new x.Matrix2D({xx:e/r,xy:i,yx:i,yy:y/r
})},normalize:function(t){return t instanceof x.Matrix2D?t:new x.Matrix2D(t)},isIdentity:function(t){
return 1==t.xx&&0==t.xy&&0==t.yx&&1==t.yy&&0==t.dx&&0==t.dy},clone:function(t){var n=new x.Matrix2D;
for(var e in t)"number"==typeof t[e]&&"number"==typeof n[e]&&n[e]!=t[e]&&(n[e]=t[e]);
return n},invert:function(t){var n=x.normalize(t),e=n.xx*n.yy-n.xy*n.yx;return n=new x.Matrix2D({
xx:n.yy/e,xy:-n.xy/e,yx:-n.yx/e,yy:n.xx/e,dx:(n.xy*n.dy-n.yy*n.dx)/e,dy:(n.yx*n.dx-n.xx*n.dy)/e
})},_multiplyPoint:function(t,n,x){return{x:t.xx*n+t.xy*x+t.dx,y:t.yx*n+t.yy*x+t.dy
}},multiplyPoint:function(t,n,e){var y=x.normalize(t);return"number"==typeof n&&"number"==typeof e?x._multiplyPoint(y,n,e):x._multiplyPoint(y,n.x,n.y);
},multiplyRectangle:function(t,n){var e=x.normalize(t);if(n=n||{x:0,y:0,width:0,height:0
},x.isIdentity(e))return{x:n.x,y:n.y,width:n.width,height:n.height};var y=x.multiplyPoint(e,n.x,n.y),r=x.multiplyPoint(e,n.x,n.y+n.height),i=x.multiplyPoint(e,n.x+n.width,n.y),a=x.multiplyPoint(e,n.x+n.width,n.y+n.height),u=Math.min(y.x,r.x,i.x,a.x),o=Math.min(y.y,r.y,i.y,a.y),s=Math.max(y.x,r.x,i.x,a.x),d=Math.max(y.y,r.y,i.y,a.y);
return{x:u,y:o,width:s-u,height:d-o}},multiply:function(t){for(var n=x.normalize(t),e=1;e<arguments.length;++e){
var y=n,r=x.normalize(arguments[e]);n=new x.Matrix2D,n.xx=y.xx*r.xx+y.xy*r.yx,n.xy=y.xx*r.xy+y.xy*r.yy,
n.yx=y.yx*r.xx+y.yy*r.yx,n.yy=y.yx*r.xy+y.yy*r.yy,n.dx=y.xx*r.dx+y.xy*r.dy+y.dx,n.dy=y.yx*r.dx+y.yy*r.dy+y.dy;
}return n},_sandwich:function(t,n,e){return x.multiply(x.translate(n,e),t,x.translate(-n,-e));
},scaleAt:function(t,n,e,y){switch(arguments.length){case 4:return x._sandwich(x.scale(t,n),e,y);
case 3:return"number"==typeof e?x._sandwich(x.scale(t),n,e):x._sandwich(x.scale(t,n),e.x,e.y);
}return x._sandwich(x.scale(t),n.x,n.y)},rotateAt:function(t,n,e){return arguments.length>2?x._sandwich(x.rotate(t),n,e):x._sandwich(x.rotate(t),n.x,n.y);
},rotategAt:function(t,n,e){return arguments.length>2?x._sandwich(x.rotateg(t),n,e):x._sandwich(x.rotateg(t),n.x,n.y);
},skewXAt:function(t,n,e){return arguments.length>2?x._sandwich(x.skewX(t),n,e):x._sandwich(x.skewX(t),n.x,n.y);
},skewXgAt:function(t,n,e){return arguments.length>2?x._sandwich(x.skewXg(t),n,e):x._sandwich(x.skewXg(t),n.x,n.y);
},skewYAt:function(t,n,e){return arguments.length>2?x._sandwich(x.skewY(t),n,e):x._sandwich(x.skewY(t),n.x,n.y);
},skewYgAt:function(t,n,e){return arguments.length>2?x._sandwich(x.skewYg(t),n,e):x._sandwich(x.skewYg(t),n.x,n.y);
}}),t.Matrix2D=x.Matrix2D,x});