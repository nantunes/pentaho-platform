define(["dojo/_base/declare","dojo/_base/lang","./CalendarBase","./ColumnView","./ColumnViewSecondarySheet","./VerticalRenderer","./MatrixView","./HorizontalRenderer","./LabelRenderer","./ExpandRenderer","./Keyboard","./Mouse","dojo/text!./templates/Calendar.html","dijit/form/Button","dijit/Toolbar","dijit/ToolbarSeparator"],function(e,i,r,t,a,n,o,l,d,s,c,h,m){
return e("dojox.calendar.Calendar",r,{templateString:m,_createDefaultViews:function(){
var r=e([a,c,h]),m=e([t,c,h])(i.mixin({secondarySheetClass:r,verticalRenderer:n,horizontalRenderer:l,
expandRenderer:s},this.columnViewProps)),u=e([o,c,h])(i.mixin({horizontalRenderer:l,
labelRenderer:d,expandRenderer:s},this.matrixViewProps));this.columnView=m,this.matrixView=u;
var w=[m,u];return this.installDefaultViewsActions(w),w},installDefaultViewsActions:function(e){
this.matrixView.on("rowHeaderClick",i.hitch(this,this.matrixViewRowHeaderClick)),
this.columnView.on("columnHeaderClick",i.hitch(this,this.columnViewColumnHeaderClick));
}})});