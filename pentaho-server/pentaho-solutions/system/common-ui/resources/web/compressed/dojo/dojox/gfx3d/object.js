define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojox/gfx","dojox/gfx/matrix","./_base","./scheduler","./gradient","./vector","./matrix","./lighting"],function(t,e,i,s,r,n,h,o,c,a,l){
var u=h.scheduler;return e("dojox.gfx3d.Object",null,{constructor:function(){this.object=null,
this.matrix=null,this.cache=null,this.renderer=null,this.parent=null,this.strokeStyle=null,
this.fillStyle=null,this.shape=null},setObject:function(t){return this.object=s.makeParameters(this.object,t),
this},setTransform:function(t){return this.matrix=a.clone(t?a.normalize(t):n.identity,!0),
this},applyRightTransform:function(t){return t?this.setTransform([this.matrix,t]):this;
},applyLeftTransform:function(t){return t?this.setTransform([t,this.matrix]):this;
},applyTransform:function(t){return t?this.setTransform([this.matrix,t]):this},setFill:function(t){
return this.fillStyle=t,this},setStroke:function(t){return this.strokeStyle=t,this;
},toStdFill:function(t,e){return this.fillStyle&&"undefined"!=typeof this.fillStyle.type?t[this.fillStyle.type](e,this.fillStyle.finish,this.fillStyle.color):this.fillStyle;
},invalidate:function(){this.renderer.addTodo(this)},destroy:function(){if(this.shape){
var t=this.shape.getParent();t&&t.remove(this.shape),this.shape=null}},render:function(t){
throw"Pure virtual function, not implemented"},draw:function(t){throw"Pure virtual function, not implemented";
},getZOrder:function(){return 0},getOutline:function(){return null}}),e("dojox.gfx3d.Scene",n.Object,{
constructor:function(){this.objects=[],this.todos=[],this.schedule=u.zOrder,this._draw=n.drawer.conservative;
},setFill:function(e){return this.fillStyle=e,t.forEach(this.objects,function(t){
t.setFill(e)}),this},setStroke:function(e){return this.strokeStyle=e,t.forEach(this.objects,function(t){
t.setStroke(e)}),this},render:function(e,i){var s=a.multiply(e,this.matrix);i&&(this.todos=this.objects),
t.forEach(this.todos,function(t){t.render(s,i)})},draw:function(t){this.objects=this.schedule(this.objects),
this._draw(this.todos,this.objects,this.renderer)},addTodo:function(e){t.every(this.todos,function(t){
return t!=e})&&(this.todos.push(e),this.invalidate())},invalidate:function(){this.parent.addTodo(this);
},getZOrder:function(){var e=0;return t.forEach(this.objects,function(t){e+=t.getZOrder();
}),this.objects.length>1?e/this.objects.length:0}}),e("dojox.gfx3d.Edges",n.Object,{
constructor:function(){this.object=i.clone(n.defaultEdges)},setObject:function(t,e){
return this.object=s.makeParameters(this.object,t instanceof Array?{points:t,style:e
}:t),this},getZOrder:function(){var e=0;return t.forEach(this.cache,function(t){e+=t.z;
}),this.cache.length>1?e/this.cache.length:0},render:function(e){var i=a.multiply(e,this.matrix);
this.cache=t.map(this.object.points,function(t){return a.multiplyPoint(i,t)})},draw:function(){
var e=this.cache;this.shape?this.shape.setShape(""):this.shape=this.renderer.createPath();
var i=this.shape.setAbsoluteMode("absolute");if("strip"==this.object.style||"loop"==this.object.style)i.moveTo(e[0].x,e[0].y),
t.forEach(e.slice(1),function(t){i.lineTo(t.x,t.y)}),"loop"==this.object.style&&i.closePath();else for(var s=0;s<this.cache.length;)i.moveTo(e[s].x,e[s].y),
s++,i.lineTo(e[s].x,e[s].y),s++;i.setStroke(this.strokeStyle)}}),e("dojox.gfx3d.Orbit",n.Object,{
constructor:function(){this.object=i.clone(n.defaultOrbit)},render:function(e){var i=a.multiply(e,this.matrix),s=[0,Math.PI/4,Math.PI/3],n=a.multiplyPoint(i,this.object.center),h=t.map(s,function(t){
return{x:this.center.x+this.radius*Math.cos(t),y:this.center.y+this.radius*Math.sin(t),
z:this.center.z}},this.object);h=t.map(h,function(t){return a.multiplyPoint(i,t)});
var o=c.normalize(h);h=t.map(h,function(t){return c.substract(t,n)});var l={xx:h[0].x*h[0].y,
xy:h[0].y*h[0].y,xz:1,yx:h[1].x*h[1].y,yy:h[1].y*h[1].y,yz:1,zx:h[2].x*h[2].y,zy:h[2].y*h[2].y,
zz:1,dx:0,dy:0,dz:0},u=t.map(h,function(t){return-Math.pow(t.x,2)}),f=a.multiplyPoint(a.invert(l),u[0],u[1],u[2]),d=Math.atan2(f.x,1-f.y)/2,p=t.map(h,function(t){
return r.multiplyPoint(r.rotate(-d),t.x,t.y)}),y=Math.pow(p[0].x,2),m=Math.pow(p[0].y,2),g=Math.pow(p[1].x,2),b=Math.pow(p[1].y,2),x=Math.sqrt((y*b-m*g)/(b-m)),j=Math.sqrt((y*b-m*g)/(y-g));
this.cache={cx:n.x,cy:n.y,rx:x,ry:j,theta:d,normal:o}},draw:function(t){this.shape?this.shape.setShape(this.cache):this.shape=this.renderer.createEllipse(this.cache),
this.shape.applyTransform(r.rotateAt(this.cache.theta,this.cache.cx,this.cache.cy)).setStroke(this.strokeStyle).setFill(this.toStdFill(t,this.cache.normal));
}}),e("dojox.gfx3d.Path3d",n.Object,{constructor:function(){this.object=i.clone(n.defaultPath3d),
this.segments=[],this.absolute=!0,this.last={},this.path=""},_collectArgs:function(t,e){
for(var i=0;i<e.length;++i){var s=e[i];"boolean"==typeof s?t.push(s?1:0):"number"==typeof s?t.push(s):s instanceof Array?this._collectArgs(t,s):"x"in s&&"y"in s&&(t.push(s.x),
t.push(s.y))}},_validSegments:{m:3,l:3,z:0},_pushSegment:function(t,e){var i,s=this._validSegments[t.toLowerCase()];
"number"==typeof s&&(s?e.length>=s&&(i={action:t,args:e.slice(0,e.length-e.length%s)
},this.segments.push(i)):(i={action:t,args:[]},this.segments.push(i)))},moveTo:function(){
var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"M":"m",t),
this},lineTo:function(){var t=[];return this._collectArgs(t,arguments),this._pushSegment(this.absolute?"L":"l",t),
this},closePath:function(){return this._pushSegment("Z",[]),this},render:function(e){
var i=a.multiply(e,this.matrix),s="",r=this._validSegments;t.forEach(this.segments,function(t){
s+=t.action;for(var e=0;e<t.args.length;e+=r[t.action.toLowerCase()]){var n=a.multiplyPoint(i,t.args[e],t.args[e+1],t.args[e+2]);
s+=" "+n.x+" "+n.y}}),this.cache=s},_draw:function(){return this.parent.createPath(this.cache);
}}),e("dojox.gfx3d.Triangles",n.Object,{constructor:function(){this.object=i.clone(n.defaultTriangles);
},setObject:function(t,e){return t instanceof Array?this.object=s.makeParameters(this.object,{
points:t,style:e}):this.object=s.makeParameters(this.object,t),this},render:function(e){
var i=a.multiply(e,this.matrix),s=t.map(this.object.points,function(t){return a.multiplyPoint(i,t);
});this.cache=[];var r=s.slice(0,2),n=s[0];if("strip"==this.object.style)t.forEach(s.slice(2),function(t){
r.push(t),r.push(r[0]),this.cache.push(r),r=r.slice(1,3)},this);else if("fan"==this.object.style)t.forEach(s.slice(2),function(t){
r.push(t),r.push(n),this.cache.push(r),r=[n,t]},this);else for(var h=0;h<s.length;)this.cache.push([s[h],s[h+1],s[h+2],s[h]]),
h+=3},draw:function(e){this.cache=u.bsp(this.cache,function(t){return t}),this.shape?this.shape.clear():this.shape=this.renderer.createGroup(),
t.forEach(this.cache,function(t){this.shape.createPolyline(t).setStroke(this.strokeStyle).setFill(this.toStdFill(e,c.normalize(t)));
},this)},getZOrder:function(){var e=0;return t.forEach(this.cache,function(t){e+=(t[0].z+t[1].z+t[2].z)/3;
}),this.cache.length>1?e/this.cache.length:0}}),e("dojox.gfx3d.Quads",n.Object,{constructor:function(){
this.object=i.clone(n.defaultQuads)},setObject:function(t,e){return this.object=s.makeParameters(this.object,t instanceof Array?{
points:t,style:e}:t),this},render:function(e){var i,s=a.multiply(e,this.matrix),r=t.map(this.object.points,function(t){
return a.multiplyPoint(s,t)});if(this.cache=[],"strip"==this.object.style){var n=r.slice(0,2);
for(i=2;i<r.length;)n=n.concat([r[i],r[i+1],n[0]]),this.cache.push(n),n=n.slice(2,4),
i+=2}else for(i=0;i<r.length;)this.cache.push([r[i],r[i+1],r[i+2],r[i+3],r[i]]),i+=4;
},draw:function(t){this.cache=n.scheduler.bsp(this.cache,function(t){return t}),this.shape?this.shape.clear():this.shape=this.renderer.createGroup();
for(var e=0;e<this.cache.length;e++)this.shape.createPolyline(this.cache[e]).setStroke(this.strokeStyle).setFill(this.toStdFill(t,c.normalize(this.cache[e])));
},getZOrder:function(){for(var t=0,e=0;e<this.cache.length;e++){var i=this.cache[e];
t+=(i[0].z+i[1].z+i[2].z+i[3].z)/4}return this.cache.length>1?t/this.cache.length:0;
}}),e("dojox.gfx3d.Polygon",n.Object,{constructor:function(){this.object=i.clone(n.defaultPolygon);
},setObject:function(t){return this.object=s.makeParameters(this.object,t instanceof Array?{
path:t}:t),this},render:function(e){var i=a.multiply(e,this.matrix);this.cache=t.map(this.object.path,function(t){
return a.multiplyPoint(i,t)}),this.cache.push(this.cache[0])},draw:function(t){this.shape?this.shape.setShape({
points:this.cache}):this.shape=this.renderer.createPolyline({points:this.cache}),
this.shape.setStroke(this.strokeStyle).setFill(this.toStdFill(t,a.normalize(this.cache)));
},getZOrder:function(){for(var t=0,e=0;e<this.cache.length;e++)t+=this.cache[e].z;
return this.cache.length>1?t/this.cache.length:0},getOutline:function(){return this.cache.slice(0,3);
}}),e("dojox.gfx3d.Cube",n.Object,{constructor:function(){this.object=i.clone(n.defaultCube),
this.polygons=[]},setObject:function(t){this.object=s.makeParameters(this.object,t);
},render:function(e){var i=this.object.top,s=this.object.bottom,r={x:s.x,y:i.y,z:i.z
},n={x:s.x,y:s.y,z:i.z},h={x:i.x,y:s.y,z:i.z},o={x:i.x,y:i.y,z:s.z},c={x:s.x,y:i.y,
z:s.z},l={x:i.x,y:s.y,z:s.z},u=[i,r,n,h,o,c,s,l],f=a.multiply(e,this.matrix),d=t.map(u,function(t){
return a.multiplyPoint(f,t)});i=d[0],r=d[1],n=d[2],h=d[3],o=d[4],c=d[5],s=d[6],l=d[7],
this.cache=[[i,r,n,h,i],[o,c,s,l,o],[i,h,l,o,i],[h,n,s,l,h],[n,r,c,s,n],[r,i,o,c,r]];
},draw:function(t){this.cache=n.scheduler.bsp(this.cache,function(t){return t});var e=this.cache.slice(3);
this.shape?this.shape.clear():this.shape=this.renderer.createGroup();for(var i=0;i<e.length;i++)this.shape.createPolyline(e[i]).setStroke(this.strokeStyle).setFill(this.toStdFill(t,c.normalize(e[i])));
},getZOrder:function(){var t=this.cache[0][0],e=this.cache[1][2];return(t.z+e.z)/2;
}}),e("dojox.gfx3d.Cylinder",n.Object,{constructor:function(){this.object=i.clone(n.defaultCylinder);
},render:function(e){var i=a.multiply(e,this.matrix),s=[0,Math.PI/4,Math.PI/3],n=a.multiplyPoint(i,this.object.center),h=t.map(s,function(t){
return{x:this.center.x+this.radius*Math.cos(t),y:this.center.y+this.radius*Math.sin(t),
z:this.center.z}},this.object);h=t.map(h,function(t){return c.substract(a.multiplyPoint(i,t),n);
});var l={xx:h[0].x*h[0].y,xy:h[0].y*h[0].y,xz:1,yx:h[1].x*h[1].y,yy:h[1].y*h[1].y,
yz:1,zx:h[2].x*h[2].y,zy:h[2].y*h[2].y,zz:1,dx:0,dy:0,dz:0},u=t.map(h,function(t){
return-Math.pow(t.x,2)}),f=a.multiplyPoint(a.invert(l),u[0],u[1],u[2]),d=Math.atan2(f.x,1-f.y)/2,p=t.map(h,function(t){
return r.multiplyPoint(r.rotate(-d),t.x,t.y)}),y=Math.pow(p[0].x,2),m=Math.pow(p[0].y,2),g=Math.pow(p[1].x,2),b=Math.pow(p[1].y,2),x=Math.sqrt((y*b-m*g)/(b-m)),j=Math.sqrt((y*b-m*g)/(y-g));
if(j>x){var v=x;x=j,j=v,d-=Math.PI/2}var S=a.multiplyPoint(i,c.sum(this.object.center,{
x:0,y:0,z:this.object.height})),z="constant"==this.fillStyle.type?this.fillStyle.color:o(this.renderer.lighting,this.fillStyle,this.object.center,this.object.radius,Math.PI,2*Math.PI,i);
(isNaN(x)||isNaN(j)||isNaN(d))&&(x=this.object.radius,j=0,d=0),this.cache={center:n,
top:S,rx:x,ry:j,theta:d,gradient:z}},draw:function(){var t=this.cache,e=c,i=r,s=[t.center,t.top],n=e.substract(t.top,t.center);
e.dotProduct(n,this.renderer.lighting.incident)>0&&(s=[t.top,t.center],n=e.substract(t.center,t.top));
var h=this.renderer.lighting[this.fillStyle.type](n,this.fillStyle.finish,this.fillStyle.color),o=Math.sqrt(Math.pow(t.center.x-t.top.x,2)+Math.pow(t.center.y-t.top.y,2));
this.shape?this.shape.clear():this.shape=this.renderer.createGroup(),this.shape.createPath("").moveTo(0,-t.rx).lineTo(o,-t.rx).lineTo(o,t.rx).lineTo(0,t.rx).arcTo(t.ry,t.rx,0,!0,!0,0,-t.rx).setFill(t.gradient).setStroke(this.strokeStyle).setTransform([i.translate(s[0]),i.rotate(Math.atan2(s[1].y-s[0].y,s[1].x-s[0].x))]),
t.rx>0&&t.ry>0&&this.shape.createEllipse({cx:s[1].x,cy:s[1].y,rx:t.rx,ry:t.ry}).setFill(h).setStroke(this.strokeStyle).applyTransform(i.rotateAt(t.theta,s[1]));
}}),e("dojox.gfx3d.Viewport",s.Group,{constructor:function(){this.dimension=null,
this.objects=[],this.todos=[],this.renderer=this,this.schedule=n.scheduler.zOrder,
this.draw=n.drawer.conservative,this.deep=!1,this.lights=[],this.lighting=null},setCameraTransform:function(t){
return this.camera=a.clone(t?a.normalize(t):n.identity,!0),this.invalidate(),this;
},applyCameraRightTransform:function(t){return t?this.setCameraTransform([this.camera,t]):this;
},applyCameraLeftTransform:function(t){return t?this.setCameraTransform([t,this.camera]):this;
},applyCameraTransform:function(t){return this.applyCameraRightTransform(t)},setLights:function(t,e,i){
this.lights=t instanceof Array?{sources:t,ambient:e,specular:i}:t;var s={x:0,y:0,
z:1};return this.lighting=new l.Model(s,this.lights.sources,this.lights.ambient,this.lights.specular),
this.invalidate(),this},addLights:function(t){return this.setLights(this.lights.sources.concat(t));
},addTodo:function(e){t.every(this.todos,function(t){return t!=e})&&this.todos.push(e);
},invalidate:function(){this.deep=!0,this.todos=this.objects},setDimensions:function(t){
if(t){var e=i.isString(t.width)?parseInt(t.width):t.width,s=i.isString(t.height)?parseInt(t.height):t.height;
if(this.rawNode){var r=this.rawNode.style;r?(r.height=s,r.width=e):(this.rawNode.width=e,
this.rawNode.height=s)}this.dimension={width:e,height:s}}else this.dimension=null;
},render:function(){if(this.todos.length){for(var t=a,e=0;e<this.todos.length;e++)this.todos[e].render(a.normalize([t.cameraRotateXg(180),t.cameraTranslate(0,this.dimension.height,0),this.camera]),this.deep);
this.objects=this.schedule(this.objects),this.draw(this.todos,this.objects,this),
this.todos=[],this.deep=!1}}}),n.Viewport.nodeType=s.Group.nodeType,n._creators={
createEdges:function(t,e){return this.create3DObject(n.Edges,t,e)},createTriangles:function(t,e){
return this.create3DObject(n.Triangles,t,e)},createQuads:function(t,e){return this.create3DObject(n.Quads,t,e);
},createPolygon:function(t){return this.create3DObject(n.Polygon,t)},createOrbit:function(t){
return this.create3DObject(n.Orbit,t)},createCube:function(t){return this.create3DObject(n.Cube,t);
},createCylinder:function(t){return this.create3DObject(n.Cylinder,t)},createPath3d:function(t){
return this.create3DObject(n.Path3d,t)},createScene:function(){return this.create3DObject(n.Scene);
},create3DObject:function(t,e,i){var s=new t;return this.adopt(s),e&&s.setObject(e,i),
s},adopt:function(t){return t.renderer=this.renderer,t.parent=this,this.objects.push(t),
this.addTodo(t),this},abandon:function(t,e){for(var i=0;i<this.objects.length;++i)this.objects[i]==t&&this.objects.splice(i,1);
return t.parent=null,this},setScheduler:function(t){this.schedule=t},setDrawer:function(t){
this.draw=t}},i.extend(n.Viewport,n._creators),i.extend(n.Scene,n._creators),delete n._creators,
i.extend(s.Surface,{createViewport:function(){var t=this.createObject(n.Viewport,null,!0);
return t.setDimensions(this.getDimensions()),t}}),n.Object});