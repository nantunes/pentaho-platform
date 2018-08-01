define(["dojo/_base/kernel","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/form/_ComboBoxMenuMixin","dijit/_WidgetBase","./_ListTouchMixin","./scrollable","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_ComboBoxMenu"],function(o,e,t,i,n,s,l,d,m,b){
var r=e(m("dojo-bidi")?"dojox.mobile._NonBidiComboBoxMenu":"dojox.mobile._ComboBoxMenu",[s,l,n],{
baseClass:"mblComboBoxMenu",bgIframe:!0,buildRendering:function(){this.domNode=this.focusNode=i.create("div",{
"class":"mblReset"}),this.containerNode=i.create("div",{style:{position:"absolute",
top:0,left:0}},this.domNode),this.previousButton=i.create("div",{"class":"mblReset mblComboBoxMenuItem mblComboBoxMenuPreviousButton",
role:"option"},this.containerNode),this.nextButton=i.create("div",{"class":"mblReset mblComboBoxMenuItem mblComboBoxMenuNextButton",
role:"option"},this.containerNode),this.inherited(arguments)},_createMenuItem:function(){
return i.create("div",{"class":"mblReset mblComboBoxMenuItem"+(this.isLeftToRight()?"":" mblComboBoxMenuItemRtl"),
role:"option"})},onSelect:function(o){t.add(o,"mblComboBoxMenuItemSelected")},onDeselect:function(o){
t.remove(o,"mblComboBoxMenuItemSelected")},onOpen:function(){this.scrollable.init({
domNode:this.domNode,containerNode:this.containerNode}),this.scrollable.scrollTo({
x:0,y:0})},onClose:function(){this.scrollable.cleanup()},destroyRendering:function(){
this.bgIframe=!1,this.inherited(arguments)},postCreate:function(){this.inherited(arguments),
this.scrollable=new d,this.scrollable.resize=function(){}}});return m("dojo-bidi")?e("dojox.mobile._ComboBoxMenu",[r,b]):r;
});