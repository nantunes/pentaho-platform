dojo.provide("dojox.layout.dnd.PlottedDnd"),dojo.require("dojo.dnd.Source"),dojo.require("dojo.dnd.Manager"),
dojo.require("dojox.layout.dnd.Avatar"),dojo.declare("dojox.layout.dnd.PlottedDnd",[dojo.dnd.Source],{
GC_OFFSET_X:dojo.dnd.manager().OFFSET_X,GC_OFFSET_Y:dojo.dnd.manager().OFFSET_Y,constructor:function(t,o){
this.childBoxes=null,this.dropIndicator=new dojox.layout.dnd.DropIndicator("dndDropIndicator","div"),
this.withHandles=o.withHandles,this.handleClasses=o.handleClasses,this.opacity=o.opacity,
this.allowAutoScroll=o.allowAutoScroll,this.dom=o.dom,this.singular=!0,this.skipForm=!0,
this._over=!1,this.defaultHandleClass="GcDndHandle",this.isDropped=!1,this._timer=null,
this.isOffset=o.isOffset?!0:!1,this.offsetDrag=o.offsetDrag?o.offsetDrag:{x:0,y:0
},this.hideSource=o.hideSource?o.hideSource:!0,this._drop=this.dropIndicator.create();
},_calculateCoords:function(t){dojo.forEach(this.node.childNodes,function(o){var e=dojo.coords(o,!0);
o.coords={xy:e,w:o.offsetWidth/2,h:o.offsetHeight/2,mw:e.w},t&&(o.coords.mh=e.h)},this);
},_legalMouseDown:function(t){if(!this.withHandles)return!0;for(var o=t.target;o&&o!=this.node;o=o.parentNode)if(dojo.hasClass(o,this.defaultHandleClass))return!0;
return!1},setDndItemSelectable:function(t,o){for(var e=t;e&&t!=this.node;e=e.parentNode)if(dojo.hasClass(e,"dojoDndItem"))return void dojo.setSelectable(e,o);
},getDraggedWidget:function(t){for(var o=t;o&&"body"!=o.nodeName.toLowerCase()&&!dojo.hasClass(o,"dojoDndItem");)o=o.parentNode;
return o?dijit.byNode(o):null},isAccepted:function(t){var o=t?t.getAttribute("dndtype"):null;
return o&&o in this.accept},onDndStart:function(t,o,e){this.firstIndicator=t==this,
this._calculateCoords(!0);var s=dojo.dnd.manager();o[0].coords?(this._drop.style.height=o[0].coords.mh+"px",
dojo.style(s.avatar.node,"width",o[0].coords.mw+"px")):this._drop.style.height=s.avatar.node.clientHeight+"px",
this.dndNodes=o,dojox.layout.dnd.PlottedDnd.superclass.onDndStart.call(this,t,o,e),
t==this&&this.hideSource&&dojo.forEach(o,function(t){dojo.style(t,"display","none");
})},onDndCancel:function(){var t=dojo.dnd.manager();if(t.source==this&&this.hideSource){
var o=this.getSelectedNodes();dojo.forEach(o,function(t){dojo.style(t,"display","");
})}dojox.layout.dnd.PlottedDnd.superclass.onDndCancel.call(this),this.deleteDashedZone();
},onDndDrop:function(t,o,e,s){try{this.isAccepted(o[0])?(t==this&&this._over&&this.dropObject&&(this.current=this.dropObject.c),
dojox.layout.dnd.PlottedDnd.superclass.onDndDrop.call(this,t,o,e,s),this._calculateCoords(!0)):this.onDndCancel();
}catch(i){console.warn(i)}},onMouseDown:function(t){if(null==this.current?this.selection={}:this.current==this.anchor&&(this.anchor=null),
null!==this.current){var o=dojo.coords(this.current,!0);if(this.current.coords={xy:o,
w:this.current.offsetWidth/2,h:this.current.offsetHeight/2,mh:o.h,mw:o.w},this._drop.style.height=this.current.coords.mh+"px",
this.isOffset){if(0==this.offsetDrag.x&&0==this.offsetDrag.y){var e=!0,s=dojo.coords(this._getChildByEvent(t));
this.offsetDrag.x=s.x-t.pageX,this.offsetDrag.y=s.y-t.clientY}this.offsetDrag.y<16&&null!=this.current&&(this.offsetDrag.y=this.GC_OFFSET_Y);
var i=dojo.dnd.manager();i.OFFSET_X=this.offsetDrag.x,i.OFFSET_Y=this.offsetDrag.y,
e&&(this.offsetDrag.x=0,this.offsetDrag.y=0)}}if(dojo.dnd.isFormElement(t))this.setDndItemSelectable(t.target,!0);else{
this.containerSource=!0;var r=this.getDraggedWidget(t.target);r&&r.dragRestriction||dojox.layout.dnd.PlottedDnd.superclass.onMouseDown.call(this,t);
}},onMouseUp:function(t){dojox.layout.dnd.PlottedDnd.superclass.onMouseUp.call(this,t),
this.containerSource=!1,!dojo.isIE&&this.mouseDown&&this.setDndItemSelectable(t.target,!0);
var o=dojo.dnd.manager();o.OFFSET_X=this.GC_OFFSET_X,o.OFFSET_Y=this.GC_OFFSET_Y},
onMouseMove:function(t){var o=dojo.dnd.manager();if(this.isDragging){var e=!1;(null!=this.current||null==this.current&&!this.dropObject)&&(this.isAccepted(o.nodes[0])||this.containerSource)&&(e=this.setIndicatorPosition(t)),
(this.current!=this.targetAnchor||e!=this.before)&&(this._markTargetAnchor(e),o.canDrop(!(this.current&&o.source==this&&this.current.id in this.selection))),
this.allowAutoScroll&&this._checkAutoScroll(t)}else{if(this.mouseDown&&this.isSource){
var s=this.getSelectedNodes();s.length&&o.startDrag(this,s,this.copyState(dojo.isCopyKey(t)));
}this.allowAutoScroll&&this._stopAutoScroll()}},_markTargetAnchor:function(t){(this.current!=this.targetAnchor||this.before!=t)&&(this.targetAnchor=this.current,
this.targetBox=null,this.before=t)},_unmarkTargetAnchor:function(){this.targetAnchor&&(this.targetAnchor=null,
this.targetBox=null,this.before=!0)},setIndicatorPosition:function(t){var o=!1;return this.current?((!this.current.coords||this.allowAutoScroll)&&(this.current.coords={
xy:dojo.coords(this.current,!0),w:this.current.offsetWidth/2,h:this.current.offsetHeight/2
}),o=this.horizontal?t.pageX-this.current.coords.xy.x<this.current.coords.w:t.pageY-this.current.coords.xy.y<this.current.coords.h,
this.insertDashedZone(o)):this.dropObject||this.insertDashedZone(!1),o},onOverEvent:function(){
if(this._over=!0,dojox.layout.dnd.PlottedDnd.superclass.onOverEvent.call(this),this.isDragging){
var t=dojo.dnd.manager();!this.current&&!this.dropObject&&this.getSelectedNodes()[0]&&this.isAccepted(t.nodes[0])&&this.insertDashedZone(!1);
}},onOutEvent:function(){this._over=!1,this.containerSource=!1,dojox.layout.dnd.PlottedDnd.superclass.onOutEvent.call(this),
this.dropObject&&this.deleteDashedZone()},deleteDashedZone:function(){this._drop.style.display="none";
for(var t=this._drop.nextSibling;null!=t;)t.coords.xy.y-=parseInt(this._drop.style.height),
t=t.nextSibling;delete this.dropObject},insertDashedZone:function(t){if(this.dropObject){
if(t==this.dropObject.b&&(this.current&&this.dropObject.c==this.current.id||!this.current&&!this.dropObject.c))return;
this.deleteDashedZone()}if(this.dropObject={n:this._drop,c:this.current?this.current.id:null,
b:t},this.current)if(dojo.place(this._drop,this.current,t?"before":"after"),this.firstIndicator)this.firstIndicator=!1;else for(var o=this._drop.nextSibling;null!=o;)o.coords.xy.y+=parseInt(this._drop.style.height),
o=o.nextSibling;else this.node.appendChild(this._drop);this._drop.style.display="";
},insertNodes:function(t,o,e,s){if(!this.dropObject)return dojox.layout.dnd.PlottedDnd.superclass.insertNodes.call(this,t,o,e,s);
dojo.style(this.dropObject.n,"display","none"),dojox.layout.dnd.PlottedDnd.superclass.insertNodes.call(this,!0,o,!0,this.dropObject.n),
this.deleteDashedZone();var i=dijit.byId(o[0].getAttribute("widgetId"));i&&(dojox.layout.dnd._setGcDndHandle(i,this.withHandles,this.handleClasses),
this.hideSource&&dojo.style(i.domNode,"display",""))},_checkAutoScroll:function(t){
this._timer&&clearTimeout(this._timer),this._stopAutoScroll();var o=this.dom,e=this._sumAncestorProperties(o,"offsetTop");
t.pageY-o.offsetTop+30>o.clientHeight?(this.autoScrollActive=!0,this._autoScrollDown(o)):o.scrollTop>0&&t.pageY-e<30&&(this.autoScrollActive=!0,
this._autoScrollUp(o))},_autoScrollUp:function(t){this.autoScrollActive&&t.scrollTop>0&&(t.scrollTop-=30,
this._timer=setTimeout(dojo.hitch(this,"_autoScrollUp",t),100))},_autoScrollDown:function(t){
this.autoScrollActive&&t.scrollTop<t.scrollHeight-t.clientHeight&&(t.scrollTop+=30,
this._timer=setTimeout(dojo.hitch(this,"_autoScrollDown",t),100))},_stopAutoScroll:function(){
this.autoScrollActive=!1},_sumAncestorProperties:function(t,o){if(t=dojo.byId(t),
!t)return 0;for(var e=0;t;){var s=t[o];if(s&&(e+=s-0,t==dojo.body()))break;t=t.parentNode;
}return e}}),dojox.layout.dnd._setGcDndHandle=function(t,o,e,s){var i="GcDndHandle";
if(s||dojo.query(".GcDndHandle",t.domNode).removeClass(i),o){for(var r=!1,d=e.length-1;d>=0;d--){
var n=dojo.query("."+e[d],t.domNode)[0];if(n&&(r=!0,e[d]!=i)){var h=dojo.query("."+i,t.domNode);
0==h.length?dojo.removeClass(t.domNode,i):h.removeClass(i),dojo.addClass(n,i)}}r||dojo.addClass(t.domNode,i);
}else dojo.addClass(t.domNode,i)},dojo.declare("dojox.layout.dnd.DropIndicator",null,{
constructor:function(t,o){this.tag=o||"div",this.style=t||null},isInserted:function(){
return this.node.parentNode&&1==this.node.parentNode.nodeType},create:function(){
if(this.node&&this.isInserted())return this.node;var t="90px",o=dojo.doc.createElement(this.tag);
return this.style?(o.className=this.style,o.style.height=t):dojo.style(o,{position:"relative",
border:"1px dashed #F60",margin:"2px",height:t}),this.node=o,o},destroy:function(){
this.node&&this.isInserted()&&(this.node.parentNode.removeChild(this.node),this.node=null);
}}),dojo.extend(dojo.dnd.Manager,{canDrop:function(t){var o=this.target&&t;this.canDropFlag!=o&&(this.canDropFlag=o,
this.avatar&&this.avatar.update())},makeAvatar:function(){return"dojox.layout.dnd.PlottedDnd"==this.source.declaredClass?new dojox.layout.dnd.Avatar(this,this.source.opacity):new dojo.dnd.Avatar(this);
}}),dojo.isIE&&(dojox.layout.dnd.handdleIE=[dojo.subscribe("/dnd/start",null,function(){
IEonselectstart=document.body.onselectstart,document.body.onselectstart=function(){
return!1}}),dojo.subscribe("/dnd/cancel",null,function(){document.body.onselectstart=IEonselectstart;
}),dojo.subscribe("/dnd/drop",null,function(){document.body.onselectstart=IEonselectstart;
})],dojo.addOnWindowUnload(function(){dojo.forEach(dojox.layout.dnd.handdleIE,dojo.unsubscribe);
}));