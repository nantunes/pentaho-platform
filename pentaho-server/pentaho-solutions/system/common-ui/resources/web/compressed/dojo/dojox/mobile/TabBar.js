define(["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TabBarButton","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBar"],function(t,e,i,o,s,a,n,r,d,h,l,b,g,f){
var c=e(g("dojo-bidi")?"dojox.mobile.NonBidiTabBar":"dojox.mobile.TabBar",[l,h,d],{
iconBase:"",iconPos:"",barType:"tabBar",closable:!1,center:!0,syncWithViews:!1,tag:"ul",
fill:"auto",selectOne:!0,baseClass:"mblTabBar",_fixedButtonWidth:76,_fixedButtonMargin:17,
_largeScreenWidth:500,buildRendering:function(){this.domNode=this.srcNodeRef||s.create(this.tag),
r.set(this.domNode,"role","tablist"),this.reset(),this.inherited(arguments)},postCreate:function(){
if(this.syncWithViews){var e=function(e,i,o,s,a,n){var r=t.filter(this.getChildren(),function(t){
return t.moveTo==="#"+e.id||t.moveTo===e.id})[0];r&&r.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",e),
this.subscribe("/dojox/mobile/startView",e)}},startup:function(){this._started||(this.inherited(arguments),
this.resize())},reset:function(){var t=this._barType;if("object"==typeof this.barType){
this._barType=this.barType["*"];for(var e in this.barType)if(o.contains(i.doc.documentElement,e)){
this._barType=this.barType[e];break}}else this._barType=this.barType;var s=function(t){
return t.charAt(0).toUpperCase()+t.substring(1)};t&&o.remove(this.domNode,this.baseClass+s(t)),
o.add(this.domNode,this.baseClass+s(this._barType))},resize:function(e){var i,s;s=e&&e.w?e.w:a.getMarginBox(this.domNode).w;
var n=this._fixedButtonWidth,r=this._fixedButtonMargin,d=t.map(this.getChildren(),function(t){
return t.domNode});o.toggle(this.domNode,"mblTabBarNoIcons",!t.some(this.getChildren(),function(t){
return t.iconNode1})),o.toggle(this.domNode,"mblTabBarNoText",!t.some(this.getChildren(),function(t){
return t.label}));var h=0;if("tabBar"==this._barType)if(this.containerNode.style.paddingLeft="",
h=Math.floor((s-(n+2*r)*d.length)/2),"always"==this.fill||"auto"==this.fill&&(s<this._largeScreenWidth||0>h))for(o.add(this.domNode,"mblTabBarFill"),
i=0;i<d.length;i++)d[i].style.width=100/d.length+"%",d[i].style.margin="0";else{for(i=0;i<d.length;i++)d[i].style.width=n+"px",
d[i].style.margin="0 "+r+"px";d.length>0&&(g("dojo-bidi")&&!this.isLeftToRight()?(d[0].style.marginLeft="0px",
d[0].style.marginRight=h+r+"px"):d[0].style.marginLeft=h+r+"px"),this.containerNode.style.padding="0px";
}else{for(i=0;i<d.length;i++)d[i].style.width=d[i].style.margin="";var l=this.getParent();
if("always"==this.fill)for(o.add(this.domNode,"mblTabBarFill"),i=0;i<d.length;i++)d[i].style.width=100/d.length+"%",
"segmentedControl"!=this._barType&&"standardTab"!=this._barType&&(d[i].style.margin="0");else{
if(this.center&&(!l||!o.contains(l.domNode,"mblHeading"))){for(h=s,i=0;i<d.length;i++)h-=a.getMarginBox(d[i]).w;
h=Math.floor(h/2)}g("dojo-bidi")&&!this.isLeftToRight()?(this.containerNode.style.paddingLeft="0px",
this.containerNode.style.paddingRight=h?h+"px":""):this.containerNode.style.paddingLeft=h?h+"px":"";
}}e&&e.w&&a.setMarginBox(this.domNode,e)},getSelectedTab:function(){return t.filter(this.getChildren(),function(t){
return t.selected})[0]},onCloseButtonClick:function(t){return!0}});return g("dojo-bidi")?e("dojox.mobile.TabBar",[c,f]):c;
});