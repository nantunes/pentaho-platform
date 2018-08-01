define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/json","./Anchor","./_Plugin"],function(t){
t.declare("dojox.sketch.AnnotationTool",dojox.sketch._Plugin,{onMouseDown:function(t){
this._omd=!0},onMouseMove:function(t,o){this._omd&&(this._cshape?this._cshape.setShape(o):(this._cshape=this.figure.surface.createRect(o).setStroke({
color:"#999",width:1,style:"ShortDot"}).setFill([255,255,255,.7]),this._cshape.getEventSource().setAttribute("shape-rendering","crispEdges")));
},onMouseUp:function(t){if(this._omd){this._omd=!1;var o=this.figure;if(this._cshape&&(o.surface.remove(this._cshape),
delete this._cshape),o._startPoint.x!=t.pageX||o._startPoint.y!=t.pageY){var e=10;
Math.max(e,Math.abs(o._absEnd.x-o._start.x),Math.abs(o._absEnd.y-o._start.y))>e&&this._create(o._start,o._end);
}}},_create:function(t,o){var e=this.figure,i=e.nextKey(),s=new this.annotation(e,i);
s.transform={dx:e._calCol(t.x/e.zoomFactor),dy:e._calCol(t.y/e.zoomFactor)},s.end={
x:e._calCol(o.x/e.zoomFactor),y:e._calCol(o.y/e.zoomFactor)},s.control&&(s.control={
x:e._calCol(o.x/2/e.zoomFactor),y:e._calCol(o.y/2/e.zoomFactor)}),e.onBeforeCreateShape(s),
s.initialize(),e.select(s),e.onCreateShape(s),e.history.add(dojox.sketch.CommandTypes.Create,s);
}}),dojox.sketch.Annotation=function(t,o){this.id=this._key=o,this.figure=t,this.mode=dojox.sketch.Annotation.Modes.View,
this.shape=null,this.boundingBox=null,this.hasAnchors=!0,this.anchors={},this._properties={
stroke:{color:"blue",width:2},font:{family:"Arial",size:16,weight:"bold"},fill:"blue",
label:""},this.figure&&this.figure.add(this)};var o=dojox.sketch.Annotation.prototype;
return o.constructor=dojox.sketch.Annotation,o.type=function(){return""},o.getType=function(){
return dojox.sketch.Annotation},o.onRemove=function(t){this.figure.history.add(dojox.sketch.CommandTypes.Delete,this,this.serialize());
},o.property=function(t,o){var e;return t=t.toLowerCase(),void 0!==this._properties[t]&&(e=this._properties[t]),
arguments.length>1&&(this._properties[t]=o,e!=o&&this.onPropertyChange(t,e)),e},o.onPropertyChange=function(t,o){},
o.onCreate=function(){this.figure.history.add(dojox.sketch.CommandTypes.Create,this);
},o.onDblClick=function(t){var o=prompt("Set new text:",this.property("label"));o!==!1&&(this.beginEdit(dojox.sketch.CommandTypes.Modify),
this.property("label",o),this.draw(),this.endEdit())},o.initialize=function(){},o.destroy=function(){},
o.draw=function(){},o.apply=function(t){},o.serialize=function(){},o.getBBox=function(){},
o.beginEdit=function(t){this._type||(this._type=t||dojox.sketch.CommandTypes.Move,
this._prevState=this.serialize())},o.endEdit=function(){this._prevState!=this.serialize()&&this.figure.history.add(this._type,this,this._prevState),
this._type=this._prevState=""},o.calculate={slope:function(t,o){return t.x-o.x?(t.y-o.y)/(t.x-o.x):0;
},dx:function(t,o,e){var i=this.slope(t,o);return 0==i?i:e/i},dy:function(t,o,e){
return this.slope(t,o)*e}},o.drawBBox=function(){var t=this.getBBox();this.boundingBox?this.boundingBox.setShape(t):(this.boundingBox=this.shape.createRect(t).moveToBack().setStroke({
color:"#999",width:1,style:"Dash"}).setFill([238,238,238,.3]),this.boundingBox.getEventSource().setAttribute("id",this.id+"-boundingBox"),
this.boundingBox.getEventSource().setAttribute("shape-rendering","crispEdges"),this.figure._add(this));
},o.setBinding=function(t){this.transform.dx+=t.dx,this.transform.dy+=t.dy,this.draw();
},o.getTextBox=function(t){var o=this.property("font"),e={fontFamily:o.family,fontSize:o.size,
fontWeight:o.weight};return t&&(e.fontSize=Math.floor(e.fontSize/t)),dojox.gfx._base._getTextBox(this.property("label"),e);
},o.setMode=function(t){if(this.mode!=t){this.mode=t;var o="disable";t==dojox.sketch.Annotation.Modes.Edit&&(o="enable"),
"enable"==o?(this.drawBBox(),this.figure._add(this)):this.boundingBox&&(this.shape&&this.shape.remove(this.boundingBox),
this.boundingBox=null);for(var e in this.anchors)this.anchors[e][o]()}},o.zoom=function(o){
if(o=o||this.figure.zoomFactor,this.labelShape){var e=t.clone(this.property("font"));
e.size=Math.ceil(e.size/o)+"px",this.labelShape.setFont(e)}for(var i in this.anchors)this.anchors[i].zoom(o);
if("vml"==dojox.gfx.renderer&&(o=1),this.pathShape){var s=t.clone(this.property("stroke"));
s.width=o>1?s.width:Math.ceil(s.width/o)+"px",this.pathShape.setStroke(s)}},o.writeCommonAttrs=function(){
return'id="'+this.id+'" dojoxsketch:type="'+this.type()+'" transform="translate('+this.transform.dx+","+this.transform.dy+')"'+(this.data?" ><![CDATA[data:"+t.toJson(this.data)+"]]":"");
},o.readCommonAttrs=function(o){for(var e,i=0,s=o.childNodes;e=s[i++];)4==e.nodeType&&("properties:"==e.nodeValue.substr(0,11)?this._properties=t.fromJson(e.nodeValue.substr(11)):"data:"==e.nodeValue.substr(0,5)?this.data=t.fromJson(e.nodeValue.substr(5)):console.error("unknown CDATA node in node ",o));
if(o.getAttribute("transform")){var n=o.getAttribute("transform").replace("translate(",""),r=n.split(",");
this.transform.dx=parseFloat(r[0],10),this.transform.dy=parseFloat(r[1],10)}},dojox.sketch.Annotation.Modes={
View:0,Edit:1},dojox.sketch.Annotation.register=function(o,e){var i=dojox.sketch[o+"Annotation"];
dojox.sketch.registerTool(o,function(s){return t.mixin(s,{shape:o,annotation:i}),
new(e||dojox.sketch.AnnotationTool)(s)})},dojox.sketch.Annotation});