define(["./MatrixView","dojo/text!./templates/ColumnViewSecondarySheet.html","dojo/_base/html","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/sniff","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dojo/date","dojo/date/locale","dojo/query","dojox/html/metrics","dojo/_base/fx","dojo/on","dojo/window"],function(e,t,o,n,d,i,a,r,h,s,l,u,c,g,_,f,m,x){
return n("dojox.calendar.ColumnViewSecondarySheet",e,{templateString:t,rowCount:1,
cellPaddingTop:4,roundToDay:!1,_defaultHeight:-1,layoutDuringResize:!0,_defaultItemToRendererKindFunc:function(e){
return e.allDay?"horizontal":null},_formatGridCellLabel:function(){return null},_formatRowHeaderLabel:function(){
return null},__fixEvt:function(e){return e.sheet="secondary",e.source=this,e},_dispatchCalendarEvt:function(e,t){
e=this.inherited(arguments),this.owner.owner&&this.owner.owner[t](e)},_layoutExpandRenderers:function(e,t,o){
if(this.expandRenderer){var n=s.getMarginBox(this.domNode).h;-1==this._defaultHeight&&(this._defaultHeight=n),
-1!=this._defaultHeight&&this._defaultHeight!=n&&n>=this._getExpandedHeight()?this._layoutExpandRendererImpl(0,this._expandedRowCol,null,!0):this.inherited(arguments);
}},expandRendererClickHandler:function(e,t){d.stop(e);var o=s.getMarginBox(this.domNode).h;
this._defaultHeight==o||o<this._getExpandedHeight()?(this._expandedRowCol=t.columnIndex,
this.owner.resizeSecondarySheet(this._getExpandedHeight())):this.owner.resizeSecondarySheet(this._defaultHeight);
},_getExpandedHeight:function(){return this.naturalRowsHeight[0]+this.expandRendererHeight+this.verticalGap+this.verticalGap;
},_layoutRenderers:function(e){this._domReady&&this.inherited(arguments)}})});