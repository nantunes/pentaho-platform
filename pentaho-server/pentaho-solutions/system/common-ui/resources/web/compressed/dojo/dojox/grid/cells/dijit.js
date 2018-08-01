define(["dojo/_base/kernel","../../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/json","dojo/_base/connect","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","dojo/data/ItemFileReadStore","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/ComboBox","dijit/form/CheckBox","dijit/form/TextBox","dijit/form/NumberSpinner","dijit/form/NumberTextBox","dijit/form/CurrencyTextBox","dijit/form/HorizontalSlider","dijit/form/_TextBoxMixin","dijit/Editor","../util","./_base"],function(t,e,i,o,s,r,d,a,n,g,u,c,h,l,m,f,p,w,x,j,v,C,b,y,k,N,T){
var W={},B=W._Widget=i("dojox.grid.cells._Widget",T,{widgetClass:x,constructor:function(e){
this.widget=null,"string"==typeof this.widgetClass&&(t.deprecated("Passing a string to widgetClass is deprecated","pass the widget class object instead","2.0"),
this.widgetClass=s.getObject(this.widgetClass))},formatEditing:function(t,e){return this.needFormatNode(t,e),
"<div></div>"},getValue:function(t){return this.widget.get("value")},_unescapeHTML:function(t){
return t&&t.replace&&this.grid.escapeHTMLInData?t.replace(/&lt;/g,"<").replace(/&amp;/g,"&"):t;
},setValue:function(t,e){if(this.widget&&this.widget.set)if(e=this._unescapeHTML(e),
this.widget.onLoadDeferred){var i=this;this.widget.onLoadDeferred.addCallback(function(){
i.widget.set("value",null===e?"":e)})}else this.widget.set("value",e);else this.inherited(arguments);
},getWidgetProps:function(t){return s.mixin({dir:this.dir,lang:this.lang},this.widgetProps||{},{
constraints:s.mixin({},this.constraint)||{},required:(this.constraint||{}).required,
value:this._unescapeHTML(t)})},createWidget:function(t,e,i){return new this.widgetClass(this.getWidgetProps(e),t);
},attachWidget:function(t,e,i){t.appendChild(this.widget.domNode),this.setValue(i,e);
},formatNode:function(t,e,i){return this.widgetClass?(this.widget?this.attachWidget.apply(this,arguments):this.widget=this.createWidget.apply(this,arguments),
this.sizeWidget.apply(this,arguments),this.grid.views.renormalizeRow(i),this.grid.scroller.rowHeightChanged(i,!0),
void this.focus()):e},sizeWidget:function(e,i,o){var s=this.getNode(o);t.marginBox(this.widget.domNode,{
w:c.get(s,"width")})},focus:function(t,e){this.widget&&setTimeout(s.hitch(this.widget,function(){
N.fire(this,"focus"),this.focusNode&&"INPUT"===this.focusNode.tagName&&y.selectInputText(this.focusNode);
}),0)},_finish:function(t){this.inherited(arguments),N.removeNode(this.widget.domNode),
a("ie")&&n.setSelectable(this.widget.domNode,!0)}});B.markupFactory=function(t,e){
T.markupFactory(t,e);var i=s.trim(g.get(t,"widgetProps")||""),o=s.trim(g.get(t,"constraint")||""),d=s.trim(g.get(t,"widgetClass")||"");
i&&(e.widgetProps=r.fromJson(i)),o&&(e.constraint=r.fromJson(o)),d&&(e.widgetClass=s.getObject(d));
};var p=W.ComboBox=i("dojox.grid.cells.ComboBox",B,{widgetClass:p,getWidgetProps:function(t){
var e=[];o.forEach(this.options,function(t){e.push({name:t,value:t})});var i=new l({
data:{identifier:"name",items:e}});return s.mixin({},this.widgetProps||{},{value:t,
store:i})},getValue:function(){var t=this.widget;return t.set("displayedValue",t.get("displayedValue")),
t.get("value")}});p.markupFactory=function(t,e){B.markupFactory(t,e);var i=s.trim(g.get(t,"options")||"");
if(i){var o=i.split(",");o[0]!=i&&(e.options=o)}};var m=W.DateTextBox=i("dojox.grid.cells.DateTextBox",B,{
widgetClass:m,setValue:function(t,e){this.widget?this.widget.set("value",new Date(e)):this.inherited(arguments);
},getWidgetProps:function(t){return s.mixin(this.inherited(arguments),{value:new Date(t)
})}});m.markupFactory=function(t,e){B.markupFactory(t,e)};var w=W.CheckBox=i("dojox.grid.cells.CheckBox",B,{
widgetClass:w,getValue:function(){return this.widget.checked},setValue:function(t,e){
this.widget&&this.widget.attributeMap.checked?this.widget.set("checked",e):this.inherited(arguments);
},sizeWidget:function(t,e,i){}});w.markupFactory=function(t,e){B.markupFactory(t,e);
};var k=W.Editor=i("dojox.grid.cells.Editor",B,{widgetClass:k,getWidgetProps:function(t){
return s.mixin({},this.widgetProps||{},{height:this.widgetHeight||"100px"})},createWidget:function(t,e,i){
var o=new this.widgetClass(this.getWidgetProps(e),t);return o.onLoadDeferred.then(s.hitch(this,"populateEditor")),
o},formatNode:function(t,e,i){if(this.content=e,this.inherited(arguments),a("mozilla")){
var o=this.widget;o.open(),this.widgetToolbar&&u.place(o.toolbar.domNode,o.editingArea,"before");
}},populateEditor:function(){this.widget.set("value",this.content),this.widget.placeCursorAtEnd();
}});return k.markupFactory=function(t,e){B.markupFactory(t,e);var i=s.trim(g.get(t,"widgetHeight")||"");
i&&("auto"!=i&&"em"!=i.substr(-2)&&(i=parseInt(i,10)+"px"),e.widgetHeight=i)},W});