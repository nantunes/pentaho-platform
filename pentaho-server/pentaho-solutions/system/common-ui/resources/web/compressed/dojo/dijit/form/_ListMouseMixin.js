define(["dojo/_base/declare","dojo/on","dojo/touch","./_ListBase"],function(e,t,i,o){
return e("dijit.form._ListMouseMixin",o,{postCreate:function(){this.inherited(arguments),
this.domNode.dojoClick=!0,this.own(t(this.domNode,"mousedown",function(e){e.preventDefault();
})),this._listConnect("click","_onClick"),this._listConnect("mousedown","_onMouseDown"),
this._listConnect("mouseup","_onMouseUp"),this._listConnect("mouseover","_onMouseOver"),
this._listConnect("mouseout","_onMouseOut")},_onClick:function(e,t){this._setSelectedAttr(t),
this._deferredClick&&this._deferredClick.remove(),this._deferredClick=this.defer(function(){
this._deferredClick=null,this.onClick(t)})},_onMouseDown:function(e,t){this._hoveredNode&&(this.onUnhover(this._hoveredNode),
this._hoveredNode=null),this._isDragging=!0,this._setSelectedAttr(t)},_onMouseUp:function(e,t){
this._isDragging=!1;var i=this.selected,o=this._hoveredNode;i&&t==i?this.defer(function(){
this._onClick(e,i)}):o&&this.defer(function(){this._onClick(e,o)})},_onMouseOut:function(e,t){
this._hoveredNode&&(this.onUnhover(this._hoveredNode),this._hoveredNode=null),this._isDragging&&(this._cancelDrag=(new Date).getTime()+1e3);
},_onMouseOver:function(e,t){if(this._cancelDrag){var i=(new Date).getTime();i>this._cancelDrag&&(this._isDragging=!1),
this._cancelDrag=null}this._hoveredNode=t,this.onHover(t),this._isDragging&&this._setSelectedAttr(t);
}})});