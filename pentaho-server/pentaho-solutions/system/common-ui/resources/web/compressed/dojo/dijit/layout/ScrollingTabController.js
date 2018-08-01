define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/fx","dojo/_base/lang","dojo/on","dojo/query","dojo/sniff","../registry","dojo/text!./templates/ScrollingTabController.html","dojo/text!./templates/_ScrollingTabControllerButton.html","./TabController","./utils","../_WidgetsInTemplateMixin","../Menu","../MenuItem","../form/Button","../_HasDropDown","dojo/NodeList-dom","../a11yclick"],function(t,i,e,o,s,n,r,l,h,d,a,c,u,f,g,_,m,b,S,p){
var N=i("dijit.layout.ScrollingTabController",[f,_],{baseClass:"dijitTabController dijitScrollingTabController",
templateString:c,useMenu:!0,useSlider:!0,tabStripClass:"",_minScroll:5,_setClassAttr:{
node:"containerNode",type:"class"},buildRendering:function(){this.inherited(arguments);
var t=this.domNode;this.scrollNode=this.tablistWrapper,this._initButtons(),this.tabStripClass||(this.tabStripClass="dijitTabContainer"+this.tabPosition.charAt(0).toUpperCase()+this.tabPosition.substr(1).replace(/-.*/,"")+"None",
e.add(t,"tabStrip-disabled")),e.add(this.tablistWrapper,this.tabStripClass)},onStartup:function(){
this.inherited(arguments),s.set(this.domNode,"visibility",""),this._postStartup=!0,
this.own(l(this.containerNode,"attrmodified-label, attrmodified-iconclass",r.hitch(this,function(t){
this._dim&&this.resize(this._dim)})))},onAddChild:function(t,i){this.inherited(arguments),
s.set(this.containerNode,"width",s.get(this.containerNode,"width")+200+"px")},onRemoveChild:function(t,i){
var e=this.pane2button(t.id);this._selectedTab===e.domNode&&(this._selectedTab=null),
this.inherited(arguments)},_initButtons:function(){this._btnWidth=0,this._buttons=h("> .tabStripButton",this.domNode).filter(function(t){
return this.useMenu&&t==this._menuBtn.domNode||this.useSlider&&(t==this._rightBtn.domNode||t==this._leftBtn.domNode)?(this._btnWidth+=o.getMarginSize(t).w,
!0):(s.set(t,"display","none"),!1)},this)},_getTabsWidth:function(){var t=this.getChildren();
if(t.length){var i=t[this.isLeftToRight()?0:t.length-1].domNode,e=t[this.isLeftToRight()?t.length-1:0].domNode;
return e.offsetLeft+e.offsetWidth-i.offsetLeft}return 0},_enableBtn:function(t){var i=this._getTabsWidth();
return t=t||s.get(this.scrollNode,"width"),i>0&&i>t},resize:function(t){this._dim=t,
this.scrollNode.style.height="auto";var i=this._contentBox=g.marginBox2contentBox(this.domNode,{
h:0,w:t.w});i.h=this.scrollNode.offsetHeight,o.setContentSize(this.domNode,i);var e=this._enableBtn(this._contentBox.w);
return this._buttons.style("display",e?"":"none"),this._leftBtn.region="left",this._rightBtn.region="right",
this._menuBtn.region=this.isLeftToRight()?"right":"left",g.layoutChildren(this.domNode,this._contentBox,[this._menuBtn,this._leftBtn,this._rightBtn,{
domNode:this.scrollNode,region:"center"}]),this._selectedTab&&(this._anim&&"playing"==this._anim.status()&&this._anim.stop(),
this.scrollNode.scrollLeft=this._convertToScrollLeft(this._getScrollForSelectedTab())),
this._setButtonClass(this._getScroll()),this._postResize=!0,{h:this._contentBox.h,
w:t.w}},_getScroll:function(){return this.isLeftToRight()||d("ie")<8||d("ie")&&d("quirks")||d("webkit")?this.scrollNode.scrollLeft:s.get(this.containerNode,"width")-s.get(this.scrollNode,"width")+(d("ie")>=8?-1:1)*this.scrollNode.scrollLeft;
},_convertToScrollLeft:function(t){if(this.isLeftToRight()||d("ie")<8||d("ie")&&d("quirks")||d("webkit"))return t;
var i=s.get(this.containerNode,"width")-s.get(this.scrollNode,"width");return(d("ie")>=8?-1:1)*(t-i);
},onSelectChild:function(t){var i=this.pane2button(t.id);if(i){var e=i.domNode;if(e!=this._selectedTab&&(this._selectedTab=e,
this._postResize)){var o=this._getScroll();(o>e.offsetLeft||o+s.get(this.scrollNode,"width")<e.offsetLeft+s.get(e,"width"))&&this.createSmoothScroll().play();
}this.inherited(arguments)}},_getScrollBounds:function(){var t=this.getChildren(),i=s.get(this.scrollNode,"width"),e=s.get(this.containerNode,"width"),o=e-i,n=this._getTabsWidth();
if(t.length&&n>i)return{min:this.isLeftToRight()?0:t[t.length-1].domNode.offsetLeft,
max:this.isLeftToRight()?t[t.length-1].domNode.offsetLeft+t[t.length-1].domNode.offsetWidth-i:o
};var r=this.isLeftToRight()?0:o;return{min:r,max:r}},_getScrollForSelectedTab:function(){
var t=(this.scrollNode,this._selectedTab),i=s.get(this.scrollNode,"width"),e=this._getScrollBounds(),o=t.offsetLeft+s.get(t,"width")/2-i/2;
return o=Math.min(Math.max(o,e.min),e.max)},createSmoothScroll:function(t){if(arguments.length>0){
var i=this._getScrollBounds();t=Math.min(Math.max(t,i.min),i.max)}else t=this._getScrollForSelectedTab();
this._anim&&"playing"==this._anim.status()&&this._anim.stop();var e=this,o=this.scrollNode,s=new n.Animation({
beforeBegin:function(){this.curve&&delete this.curve;var i=o.scrollLeft,r=e._convertToScrollLeft(t);
s.curve=new n._Line(i,r)},onAnimate:function(t){o.scrollLeft=t}});return this._anim=s,
this._setButtonClass(t),s},_getBtnNode:function(t){for(var i=t.target;i&&!e.contains(i,"tabStripButton");)i=i.parentNode;
return i},doSlideRight:function(t){this.doSlide(1,this._getBtnNode(t))},doSlideLeft:function(t){
this.doSlide(-1,this._getBtnNode(t))},doSlide:function(t,i){if(!i||!e.contains(i,"dijitTabDisabled")){
var o=s.get(this.scrollNode,"width"),n=.75*o*t,r=this._getScroll()+n;this._setButtonClass(r),
this.createSmoothScroll(r).play()}},_setButtonClass:function(t){var i=this._getScrollBounds();
this._leftBtn.set("disabled",t<=i.min),this._rightBtn.set("disabled",t>=i.max)}}),B=i("dijit.layout._ScrollingTabControllerButtonMixin",null,{
baseClass:"dijitTab tabStripButton",templateString:u,tabIndex:"",isFocusable:function(){
return!1}});return i("dijit.layout._ScrollingTabControllerButton",[S,B]),i("dijit.layout._ScrollingTabControllerMenuButton",[S,p,B],{
containerId:"",tabIndex:"-1",isLoaded:function(){return!1},loadDropDown:function(i){
this.dropDown=new m({id:this.containerId+"_menu",ownerDocument:this.ownerDocument,
dir:this.dir,lang:this.lang,textDir:this.textDir});var e=a.byId(this.containerId);
t.forEach(e.getChildren(),function(t){var i=new b({id:t.id+"_stcMi",label:t.title,
iconClass:t.iconClass,disabled:t.disabled,ownerDocument:this.ownerDocument,dir:t.dir,
lang:t.lang,textDir:t.textDir||e.textDir,onClick:function(){e.selectChild(t)}});this.dropDown.addChild(i);
},this),i()},closeDropDown:function(t){this.inherited(arguments),this.dropDown&&(this._popupStateNode.removeAttribute("aria-owns"),
this.dropDown.destroyRecursive(),delete this.dropDown)}}),N});