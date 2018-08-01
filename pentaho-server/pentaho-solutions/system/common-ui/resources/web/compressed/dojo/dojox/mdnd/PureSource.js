define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/dom-class","dojo/dnd/common","dojo/dnd/Selector","dojo/dnd/Manager"],function(o,n,e,t,s,i,r,u,d){
return n("dojox.mdnd.PureSource",u,{horizontal:!1,copyOnly:!0,skipForm:!1,withHandles:!1,
isSource:!0,targetState:"Disabled",generateText:!0,constructor:function(o,n){e.mixin(this,e.mixin({},n));
this.accept;this.isDragging=!1,this.mouseDown=!1,this.sourceState="",i.add(this.node,"dojoDndSource"),
this.horizontal&&i.add(this.node,"dojoDndHorizontal"),this.topics=[t.subscribe("/dnd/cancel",this,"onDndCancel"),t.subscribe("/dnd/drop",this,"onDndCancel")];
},onDndCancel:function(){this.isDragging=!1,this.mouseDown=!1,delete this.mouseButton;
},copyState:function(o){return this.copyOnly||o},destroy:function(){dojox.mdnd.PureSource.superclass.destroy.call(this),
s.forEach(this.topics,t.unsubscribe),this.targetAnchor=null},markupFactory:function(o,n){
return o._skipStartup=!0,new dojox.mdnd.PureSource(n,o)},onMouseMove:function(o){
if(!this.isDragging){dojox.mdnd.PureSource.superclass.onMouseMove.call(this,o);var n=d.manager();
if(this.mouseDown&&!this.isDragging&&this.isSource){var e=this.getSelectedNodes();
e.length&&(n.startDrag(this,e,this.copyState(t.isCopyKey(o))),this.isDragging=!0);
}}},onMouseDown:function(o){!this._legalMouseDown(o)||this.skipForm&&r.isFormElement(o)||(this.mouseDown=!0,
this.mouseButton=o.button,dojox.mdnd.PureSource.superclass.onMouseDown.call(this,o));
},onMouseUp:function(o){this.mouseDown&&(this.mouseDown=!1,dojox.mdnd.PureSource.superclass.onMouseUp.call(this,o));
},onOverEvent:function(){dojox.mdnd.PureSource.superclass.onOverEvent.call(this),
d.manager().overSource(this)},onOutEvent:function(){dojox.mdnd.PureSource.superclass.onOutEvent.call(this),
d.manager().outSource(this)},_markDndStatus:function(o){this._changeState("Source",o?"Copied":"Moved");
},_legalMouseDown:function(o){if(!this.withHandles)return!0;for(var n=o.target;n&&!i.contains(n,"dojoDndItem");n=n.parentNode)if(i.contains(n,"dojoDndHandle"))return!0;
return!1}})});