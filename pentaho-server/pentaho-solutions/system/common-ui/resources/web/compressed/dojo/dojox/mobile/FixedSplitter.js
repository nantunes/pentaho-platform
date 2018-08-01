define(["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has"],function(e,t,i,o,n,s,r,a,d){
return t("dojox.mobile.FixedSplitter",[a,r,s],{orientation:"H",variablePane:-1,screenSizeAware:!1,
screenSizeAwareClass:"dojox/mobile/ScreenSizeAware",baseClass:"mblFixedSplitter",
startup:function(){if(!this._started){o.add(this.domNode,this.baseClass+this.orientation);
var e,t=this.getParent();if(!t||!t.resize){var i=this;e=function(){i.defer(function(){
i.resize()})}}this.screenSizeAware?require([this.screenSizeAwareClass],function(t){
t.getInstance(),e&&e()}):e&&e(),this.inherited(arguments)}},resize:function(){var t,o,s,r=n.getPadExtents(this.domNode).t,a="H"===this.orientation?"w":"h",h="H"===this.orientation?"l":"t",l={},c={},g=[],f=0,u=0,m=e.filter(this.domNode.childNodes,function(e){
return 1==e.nodeType}),b=-1==this.variablePane?m.length-1:this.variablePane;for(t=0;t<m.length;t++)t!=b&&(g[t]=n.getMarginBox(m[t])[a],
u+=g[t]);"V"==this.orientation&&"BODY"==this.domNode.parentNode.tagName&&1==e.filter(i.body().childNodes,function(e){
return 1==e.nodeType}).length&&(s=i.global.innerHeight||i.doc.documentElement.clientHeight);
var j=(s||n.getMarginBox(this.domNode)[a])-u;if("V"===this.orientation&&(j-=r),c[a]=g[b]=j,
o=m[b],n.setMarginBox(o,c),o.style["H"===this.orientation?"height":"width"]="",d("dojo-bidi")&&"H"==this.orientation&&!this.isLeftToRight())for(f=j,
t=m.length-1;t>=0;t--)o=m[t],l[h]=j-f,n.setMarginBox(o,l),"H"===this.orientation?o.style.top=r+"px":o.style.left="",
f-=g[t];else for("V"===this.orientation&&(f=f?f+r:r),t=0;t<m.length;t++)o=m[t],l[h]=f,
n.setMarginBox(o,l),"H"===this.orientation?o.style.top=r+"px":o.style.left="",f+=g[t];
e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},_setOrientationAttr:function(e){
var t=this.baseClass;o.replace(this.domNode,t+e,t+this.orientation),this.orientation=e,
this._started&&this.resize()}})});