define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/sniff","dojo/_base/fx","dojo/dom","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/on","dojo/date","dojo/date/locale","dojo/query","dojox/html/metrics","./SimpleColumnView","dojo/text!./templates/ColumnView.html","./ColumnViewSecondarySheet"],function(e,t,n,s,r,i,o,d,h,a,c,u,y,l,S,m,f,g){
return e("dojox.calendar.ColumnView",m,{templateString:f,baseClass:"dojoxCalendarColumnView",
secondarySheetClass:g,secondarySheetProps:null,headerPadding:3,buildRendering:function(){
if(this.inherited(arguments),this.secondarySheetNode){var e=n.mixin({owner:this},this.secondarySheetProps);
this.secondarySheet=new this.secondarySheetClass(e,this.secondarySheetNode),this.secondarySheetNode=this.secondarySheet.domNode;
}},destroy:function(e){this.secondarySheet&&this.secondarySheet.destroy(e),this.inherited(arguments);
},_setVisibility:function(e){this.inherited(arguments),this.secondarySheet&&this.secondarySheet._setVisibility(e);
},resize:function(e){this.inherited(arguments),this.secondarySheet&&this.secondarySheet.resize();
},invalidateLayout:function(){this._layoutRenderers(this.renderData),this.secondarySheet&&this.secondarySheet._layoutRenderers(this.secondarySheet.renderData);
},onRowHeaderClick:function(e){},resizeSecondarySheet:function(e){if(this.secondarySheetNode){
var t=h.getMarginBox(this.header).h;d.set(this.secondarySheetNode,"height",e+"px"),
this.secondarySheet._resizeHandler(null,!0);var n=e+t+this.headerPadding+"px";d.set(this.scrollContainer,"top",n),
this.vScrollBar&&d.set(this.vScrollBar,"top",n)}},updateRenderers:function(e,t){this.inherited(arguments),
this.secondarySheet&&this.secondarySheet.updateRenderers(e,t)},_setItemsAttr:function(e){
this.inherited(arguments),this.secondarySheet&&this.secondarySheet.set("items",e);
},_setStartDateAttr:function(e){this.inherited(arguments),this.secondarySheet&&this.secondarySheet.set("startDate",e);
},_setColumnCountAttr:function(e){this.inherited(arguments),this.secondarySheet&&this.secondarySheet.set("columnCount",e);
},_setHorizontalRendererAttr:function(e){this.secondarySheet&&this.secondarySheet.set("horizontalRenderer",e);
},_getHorizontalRendererAttr:function(){return this.secondarySheet?this.secondarySheet.get("horizontalRenderer"):null;
},_setExpandRendererAttr:function(e){this.secondarySheet&&this.secondarySheet.set("expandRenderer",e);
},_getExpandRendererAttr:function(){return this.secondarySheet?this.secondarySheet.get("expandRenderer"):null;
},_setTextDirAttr:function(e){this.secondarySheet.set("textDir",e),this._set("textDir",e);
},_defaultItemToRendererKindFunc:function(e){return e.allDay?null:"vertical"},getSecondarySheet:function(){
return this.secondarySheet},_onGridTouchStart:function(e){this.inherited(arguments),
this._doEndItemEditing(this.secondarySheet,"touch")},_onGridMouseDown:function(e){
this.inherited(arguments),this._doEndItemEditing(this.secondarySheet,"mouse")},_configureScrollBar:function(e){
if(this.inherited(arguments),this.secondarySheetNode){var t=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition;
d.set(this.secondarySheetNode,t?"right":"left",e.scrollbarWidth+"px"),d.set(this.secondarySheetNode,t?"left":"right","0");
}},_refreshItemsRendering:function(){if(this.inherited(arguments),this.secondarySheet){
var e=this.secondarySheet.renderData;this.secondarySheet._computeVisibleItems(e),
this.secondarySheet._layoutRenderers(e)}},_layoutRenderers:function(e){this.secondarySheet._domReady||(this.secondarySheet._domReady=!0,
this.secondarySheet._layoutRenderers(this.secondarySheet.renderData)),this.inherited(arguments);
},invalidateRendering:function(){this.secondarySheet&&this.secondarySheet.invalidateRendering(),
this.inherited(arguments)}})});