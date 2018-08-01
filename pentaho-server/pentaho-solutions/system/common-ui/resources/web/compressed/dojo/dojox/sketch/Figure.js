define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/html","../gfx","../xml/DomParser","./UndoStack"],function(t){
t.experimental("dojox.sketch");var e=dojox.sketch;e.tools={},e.registerTool=function(t,o){
e.tools[t]=o},e.Figure=function(o){var n=this;this.annCounter=1,this.shapes=[],this.image=null,
this.imageSrc=null,this.size={w:0,h:0},this.surface=null,this.group=null,this.node=null,
this.zoomFactor=1,this.tools=null,this.obj={},t.mixin(this,o),this.selected=[],this.hasSelections=function(){
return this.selected.length>0},this.isSelected=function(t){for(var e=0;e<n.selected.length;e++)if(n.selected[e]==t)return!0;
return!1},this.select=function(t){n.isSelected(t)||(n.clearSelections(),n.selected=[t]),
t.setMode(e.Annotation.Modes.View),t.setMode(e.Annotation.Modes.Edit)},this.deselect=function(t){
for(var o=-1,i=0;i<n.selected.length;i++)if(n.selected[i]==t){o=i;break}return o>-1&&(t.setMode(e.Annotation.Modes.View),
n.selected.splice(o,1)),t},this.clearSelections=function(){for(var t=0;t<n.selected.length;t++)n.selected[t].setMode(e.Annotation.Modes.View);
n.selected=[]},this.replaceSelection=function(t,e){if(!n.isSelected(e))return void n.select(t);
for(var o=-1,i=0;i<n.selected.length;i++)if(n.selected[i]==e){o=i;break}o>-1&&n.selected.splice(o,1,t);
},this._c=null,this._ctr=null,this._lp=null,this._action=null,this._prevState=null,
this._startPoint=null,this._ctool=null,this._start=null,this._end=null,this._absEnd=null,
this._cshape=null,this._dblclick=function(t){var e=n._fromEvt(t);e&&n.onDblClickShape(e,t);
},this._keydown=function(e){var o=!1;e.ctrlKey&&(90===e.keyCode||122===e.keyCode?(n.undo(),
o=!0):(89===e.keyCode||121===e.keyCode)&&(n.redo(),o=!0)),(46===e.keyCode||8===e.keyCode)&&(n._delete(n.selected),
o=!0),o&&t.stopEvent(e)},this._md=function(e){"vml"==dojox.gfx.renderer&&n.node.focus();
var o=n._fromEvt(e);n._startPoint={x:e.pageX,y:e.pageY},n._ctr=t.position(n.node);
var i={x:n.node.scrollLeft,y:n.node.scrollTop};n._ctr={x:n._ctr.x-i.x,y:n._ctr.y-i.y
};var s=e.clientX-n._ctr.x,r=e.clientY-n._ctr.y;n._lp={x:s,y:r},n._start={x:s,y:r
},n._end={x:s,y:r},n._absEnd={x:s,y:r},o?(o.type&&"Anchor"!=o.type()&&(n.isSelected(o)?n._sameShapeSelected=!0:(n.select(o),
n._sameShapeSelected=!1)),o.beginEdit(),n._c=o):(n.clearSelections(),n._ctool.onMouseDown(e));
},this._mm=function(t){if(n._ctr){if(n._c&&!n._c.shape)return void n._clearMouse();
var e=t.clientX-n._ctr.x,o=t.clientY-n._ctr.y,i=e-n._lp.x,s=o-n._lp.y;if(n._absEnd={
x:e,y:o},n._c)n._c.setBinding({dx:i/n.zoomFactor,dy:s/n.zoomFactor}),n._lp={x:e,y:o
};else{n._end={x:i,y:s};var r={x:Math.min(n._start.x,n._absEnd.x),y:Math.min(n._start.y,n._absEnd.y),
width:Math.abs(n._start.x-n._absEnd.x),height:Math.abs(n._start.y-n._absEnd.y)};r.width&&r.height&&n._ctool.onMouseMove(t,r);
}}},this._mu=function(t){n._c?n._c.shape&&n._c.endEdit():n._ctool.onMouseUp(t),n._clearMouse();
},this._clearMouse=function(){n._c=n._ctr=n._lp=n._action=n._prevState=n._startPoint=null,
n._cshape=n._start=n._end=n._absEnd=null},this.initUndoStack()};var o=e.Figure.prototype;
return o.initUndoStack=function(){this.history=new e.UndoStack(this)},o.setTool=function(t){
this._ctool=t},o.gridSize=0,o._calCol=function(t){return this.gridSize?Math.round(t/this.gridSize)*this.gridSize:t;
},o._delete=function(t,o){for(var n=0;n<t.length;n++)t[n].setMode(e.Annotation.Modes.View),
t[n].destroy(o),this.remove(t[n]),this._remove(t[n]),o||t[n].onRemove();t.splice(0,t.length);
},o.onDblClickShape=function(t,e){t.onDblClick&&t.onDblClick(e)},o.onCreateShape=function(t){},
o.onBeforeCreateShape=function(t){},o.initialize=function(e){this.node=e,this.surface=dojox.gfx.createSurface(e,this.size.w,this.size.h),
this.group=this.surface.createGroup(),this._cons=[];var o=this.surface.getEventSource();
this._cons.push(t.connect(o,"ondraggesture",t.stopEvent),t.connect(o,"ondragenter",t.stopEvent),t.connect(o,"ondragover",t.stopEvent),t.connect(o,"ondragexit",t.stopEvent),t.connect(o,"ondragstart",t.stopEvent),t.connect(o,"onselectstart",t.stopEvent),t.connect(o,"onmousedown",this._md),t.connect(o,"onmousemove",this._mm),t.connect(o,"onmouseup",this._mu),t.connect(o,"onclick",this,"onClick"),t.connect(o,"ondblclick",this._dblclick),t.connect(e,"onkeydown",this._keydown)),
this.image=this.group.createImage({width:this.imageSize.w,height:this.imageSize.h,
src:this.imageSrc})},o.destroy=function(e){this.node&&(e||(this.history&&this.history.destroy(),
this._subscribed&&(t.unsubscribe(this._subscribed),delete this._subscribed)),t.forEach(this._cons,t.disconnect),
this._cons=[],t.empty(this.node),this.group=this.surface=null,this.obj={},this.shapes=[]);
},o.nextKey=function(){return"annotation-"+this.annCounter++},o.draw=function(){},
o.zoom=function(t){this.zoomFactor=t/100;var e=this.size.w*this.zoomFactor,o=this.size.h*this.zoomFactor;
this.surface.setDimensions(e,o),this.group.setTransform(dojox.gfx.matrix.scale(this.zoomFactor,this.zoomFactor));
for(var n=0;n<this.shapes.length;n++)this.shapes[n].zoom(this.zoomFactor)},o.getFit=function(){
var t=(this.node.parentNode.offsetWidth-5)/this.size.w,e=(this.node.parentNode.offsetHeight-5)/this.size.h;
return 100*Math.min(t,e)},o.unzoom=function(){this.zoomFactor=1,this.surface.setDimensions(this.size.w,this.size.h),
this.group.setTransform()},o._add=function(t){this.obj[t._key]=t},o._remove=function(t){
this.obj[t._key]&&delete this.obj[t._key]},o._get=function(t){return t&&t.indexOf("bounding")>-1?t=t.replace("-boundingBox",""):t&&t.indexOf("-labelShape")>-1&&(t=t.replace("-labelShape","")),
this.obj[t]},o._keyFromEvt=function(t){var e=t.target.id+"";if(0==e.length){for(var o=t.target.parentNode,n=this.surface.getEventSource();o&&0==o.id.length&&o!=n;)o=o.parentNode;
e=o.id}return e},o._fromEvt=function(t){return this._get(this._keyFromEvt(t))},o.add=function(t){
for(var e=0;e<this.shapes.length;e++)if(this.shapes[e]==t)return!0;return this.shapes.push(t),
!0},o.remove=function(t){for(var e=-1,o=0;o<this.shapes.length;o++)if(this.shapes[o]==t){
e=o;break}return e>-1&&this.shapes.splice(e,1),t},o.getAnnotator=function(t){for(var e=0;e<this.shapes.length;e++)if(this.shapes[e].id==t)return this.shapes[e];
return null},o.convert=function(o,n){var i=n+"Annotation";if(e[i]){var s,r,h,a,c=o.type(),l=o.id,d=o.label,u=o.mode;
o.tokenId;switch(c){case"Preexisting":case"Lead":a={dx:o.transform.dx,dy:o.transform.dy
},s={x:o.start.x,y:o.start.y},r={x:o.end.x,y:o.end.y};var f=r.x-(r.x-s.x)/2,_=r.y-(r.y-s.y)/2;
h={x:f,y:_};break;case"SingleArrow":case"DoubleArrow":a={dx:o.transform.dx,dy:o.transform.dy
},s={x:o.start.x,y:o.start.y},r={x:o.end.x,y:o.end.y},h={x:o.control.x,y:o.control.y
};break;case"Underline":a={dx:o.transform.dx,dy:o.transform.dy},s={x:o.start.x,y:o.start.y
},h={x:s.x+50,y:s.y+50},r={x:s.x+100,y:s.y+100};break;case"Brace":}var g=new e[i](this,l);
"Underline"==g.type()?g.transform={dx:a.dx+s.x,dy:a.dy+s.y}:(g.transform&&(g.transform=a),
g.start&&(g.start=s)),g.end&&(g.end=r),g.control&&(g.control=h),g.label=d,g.token=t.lang.shallowCopy(o.token),
g.initialize(),this.replaceSelection(g,o),this._remove(o),this.remove(o),o.destroy(),
g.setMode(u)}},o.setValue=function(t){var e=dojox.xml.DomParser.parse(t),o=this.node;
this.load(e,o)},o.load=function(t,e){this.surface&&this.destroy(!0);var o=t.documentElement;
this.size={w:parseFloat(o.getAttribute("width"),10),h:parseFloat(o.getAttribute("height"),10)
};var n=o.childrenByName("g")[0],i=n.childrenByName("image")[0];this.imageSize={w:parseFloat(i.getAttribute("width"),10),
h:parseFloat(i.getAttribute("height"),10)},this.imageSrc=i.getAttribute("xlink:href"),
this.initialize(e);for(var s=n.childrenByName("g"),r=0;r<s.length;r++)this._loadAnnotation(s[r]);
this._loadDeferred&&(this._loadDeferred.callback(this),this._loadDeferred=null),this.onLoad();
},o.onLoad=function(){},o.onClick=function(){},o._loadAnnotation=function(t){var o=t.getAttribute("dojoxsketch:type")+"Annotation";
if(e[o]){var n=new e[o](this,t.id);return n.initialize(t),this.nextKey(),n.setMode(e.Annotation.Modes.View),
this._add(n),n}return null},o.onUndo=function(){},o.onBeforeUndo=function(){},o.onRedo=function(){},
o.onBeforeRedo=function(){},o.undo=function(){this.history&&(this.onBeforeUndo(),
this.history.undo(),this.onUndo())},o.redo=function(){this.history&&(this.onBeforeRedo(),
this.history.redo(),this.onRedo())},o.serialize=function(){for(var t='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dojoxsketch="http://dojotoolkit.org/dojox/sketch" width="'+this.size.w+'" height="'+this.size.h+'"><g><image xlink:href="'+this.imageSrc+'" x="0" y="0" width="'+this.size.w+'" height="'+this.size.h+'" />',e=0;e<this.shapes.length;e++)t+=this.shapes[e].serialize();
return t+="</g></svg>"},o.getValue=o.serialize,dojox.sketch.Figure});