define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom","dijit/registry"],function(t,e,i,n,s,o,d,r,h){
t.experimental("dojox.mobile.ScreenSizeAware");var l=s("dojox.mobile.ScreenSizeAware",null,{
splitterId:"",leftPaneId:"",rightPaneId:"",leftViewId:"",leftListId:"",constructor:function(t){
t&&o.mixin(this,t),n.subscribe("/dojox/mobile/screenSize/tablet",this,function(t){
this.transformUI("tablet")}),n.subscribe("/dojox/mobile/screenSize/phone",this,function(t){
this.transformUI("phone")})},init:function(){return this._initialized?void 0:(this._initialized=!0,
this.splitter=this.splitterId?h.byId(this.splitterId):e.filter(h.findWidgets(d.body()),function(t){
return-1!==t.declaredClass.indexOf("Splitter")})[0],this.splitter?(this.leftPane=this.leftPaneId?h.byId(this.leftPaneId):this.splitter.getChildren()[0],
this.leftPane?(this.rightPane=this.rightPaneId?h.byId(this.rightPaneId):this.splitter.getChildren()[1],
this.rightPane?(this.leftView=this.leftViewId?h.byId(this.leftViewId):e.filter(h.findWidgets(this.leftPane.containerNode),function(t){
return-1!==t.declaredClass.indexOf("View")})[0],this.leftView?(this.leftList=this.leftListId?h.byId(this.leftListId):e.filter(h.findWidgets(this.leftView.containerNode),function(t){
return-1!==t.declaredClass.indexOf("List")||-1!==t.declaredClass.indexOf("IconContainer");
})[0],this.leftList?void 0:void console.error("Left list not found.")):void console.error("Left view not found.")):void console.error("Right pane not found.")):void console.error("Left pane not found.")):void console.error("Splitter not found."));
},isPhone:function(){return"phone"===this._currentMode},getShowingView:function(){
var t=e.filter(this.rightPane.getChildren(),function(t){return-1!==t.declaredClass.indexOf("View");
})[0];return t?t.getShowingView()||e.filter(this.rightPane.getChildren(),function(t){
return t.selected})[0]||t:null},updateStateful:function(){this.leftList.set("stateful",!this.isPhone());
},getDestinationId:function(t){return t.moveTo},updateBackButton:function(){e.forEach(this.leftList.getChildren(),function(t){
var i=this.getDestinationId(t),n=h.byId(i);if(n){var s=e.filter(n.getChildren(),function(t){
return-1!==t.declaredClass.indexOf("Heading")})[0];s.backButton&&(s.backButton.domNode.style.display=this.isPhone()?"":"none"),
s.backBtnNode&&(s.backBtnNode.style.display=this.isPhone()?"":"none")}},this)},updateTransition:function(){
var t=this.isPhone()?"slide":"none";e.forEach(this.leftList.getChildren(),function(e){
e.set("transition",t)})},moveList:function(){var t=this.isPhone()?this.rightPane:this.leftPane;
t.containerNode.appendChild(this.leftView.domNode)},showLeftView:function(){this.leftPane.domNode.style.display=this.isPhone()?"none":"",
this.leftView.show()},showRightView:function(){if(!this.isPhone()){var t=this.getShowingView();
t?t.show():this.leftItemSelected()}},updateSelectedItem:function(){var t,i=this.getShowingView();
if(i&&!this.isPhone()&&(t=i.id),t){var n=e.filter(this.leftList.getChildren(),function(e){
return this.getDestinationId(e)===t},this);n&&n.length>0&&n[0].set("selected",!0);
}else this.leftList.deselectAll&&this.leftList.deselectAll()},leftItemSelected:function(){},
transformUI:function(t){this.init(),t!==this._currentMode&&(this._currentMode=t,this.updateStateful(),
this.updateBackButton(),this.updateTransition(),this.moveList(),this.showLeftView(),
this.showRightView(),this.updateSelectedItem())}});return l._instance=null,l.getInstance=function(){
return l._instance||(l._instance=new l),l._instance},l});