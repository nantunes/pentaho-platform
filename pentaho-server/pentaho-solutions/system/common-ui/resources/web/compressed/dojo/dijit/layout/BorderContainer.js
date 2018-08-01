define(["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/on","dojo/touch","../_WidgetBase","../_Widget","../_TemplatedMixin","./LayoutContainer","./utils"],function(t,i,e,o,r,s,d,h,n,a,l,c,p,u,g,m){
var f=e("dijit.layout._Splitter",[p,u],{live:!0,templateString:'<div class="dijitSplitter" data-dojo-attach-event="onkeydown:_onKeyDown,press:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse" tabIndex="0" role="separator"><div class="dijitSplitterThumb"></div></div>',
constructor:function(){this._handlers=[]},postMixInProperties:function(){this.inherited(arguments),
this.horizontal=/top|bottom/.test(this.region),this._factor=/top|left/.test(this.region)?1:-1,
this._cookieName=this.container.id+"_"+this.region},buildRendering:function(){if(this.inherited(arguments),
o.add(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V")),this.container.persist){
var t=i(this._cookieName);t&&(this.child.domNode.style[this.horizontal?"height":"width"]=t);
}},_computeMaxSize:function(){var i=this.horizontal?"h":"w",e=s.getMarginBox(this.child.domNode)[i],o=t.filter(this.container.getChildren(),function(t){
return"center"==t.region})[0],r=s.getContentBox(o.domNode)[i]-10;return Math.min(this.child.maxSize,e+r);
},_startDrag:function(t){this.cover||(this.cover=r.place("<div class=dijitSplitterCover></div>",this.child.domNode,"after")),
o.add(this.cover,"dijitSplitterCoverActive"),this.fake&&r.destroy(this.fake),(this._resize=this.live)||((this.fake=this.domNode.cloneNode(!0)).removeAttribute("id"),
o.add(this.domNode,"dijitSplitterShadow"),r.place(this.fake,this.domNode,"after")),
o.add(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active"),
this.fake&&o.remove(this.fake,"dijitSplitterHover dijitSplitter"+(this.horizontal?"H":"V")+"Hover");
var i=this._factor,e=this.horizontal,h=e?"pageY":"pageX",c=t[h],p=this.domNode.style,u=e?"h":"w",g=d.getComputedStyle(this.child.domNode),m=s.getMarginBox(this.child.domNode,g)[u],f=this._computeMaxSize(),_=Math.max(this.child.minSize,s.getPadBorderExtents(this.child.domNode,g)[u]+10),v=this.region,S="top"==v||"bottom"==v?"top":"left",j=parseInt(p[S],10),y=this._resize,C=n.hitch(this.container,"_layoutChildren",this.child.id),x=this.ownerDocument;
this._handlers=this._handlers.concat([a(x,l.move,this._drag=function(t,e){var o=t[h]-c,r=i*o+m,s=Math.max(Math.min(r,f),_);
(y||e)&&C(s),p[S]=o+j+i*(s-r)+"px"}),a(x,"dragstart",function(t){t.stopPropagation(),
t.preventDefault()}),a(this.ownerDocumentBody,"selectstart",function(t){t.stopPropagation(),
t.preventDefault()}),a(x,l.release,n.hitch(this,"_stopDrag"))]),t.stopPropagation(),
t.preventDefault()},_onMouse:function(t){var i="mouseover"==t.type||"mouseenter"==t.type;
o.toggle(this.domNode,"dijitSplitterHover",i),o.toggle(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V")+"Hover",i);
},_stopDrag:function(t){try{this.cover&&o.remove(this.cover,"dijitSplitterCoverActive"),
this.fake&&r.destroy(this.fake),o.remove(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active dijitSplitterShadow"),
this._drag(t),this._drag(t,!0)}finally{this._cleanupHandlers(),delete this._drag}
this.container.persist&&i(this._cookieName,this.child.domNode.style[this.horizontal?"height":"width"],{
expires:365})},_cleanupHandlers:function(){for(var t;t=this._handlers.pop();)t.remove();
},_onKeyDown:function(t){this._resize=!0;var i=this.horizontal,e=1;switch(t.keyCode){
case i?h.UP_ARROW:h.LEFT_ARROW:e*=-1;case i?h.DOWN_ARROW:h.RIGHT_ARROW:break;default:
return}var o=s.getMarginSize(this.child.domNode)[i?"h":"w"]+this._factor*e;this.container._layoutChildren(this.child.id,Math.max(Math.min(o,this._computeMaxSize()),this.child.minSize)),
t.stopPropagation(),t.preventDefault()},destroy:function(){this._cleanupHandlers(),
delete this.child,delete this.container,delete this.cover,delete this.fake,this.inherited(arguments);
}}),_=e("dijit.layout._Gutter",[p,u],{templateString:'<div class="dijitGutter" role="presentation"></div>',
postMixInProperties:function(){this.inherited(arguments),this.horizontal=/top|bottom/.test(this.region);
},buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"dijitGutter"+(this.horizontal?"H":"V"));
}}),v=e("dijit.layout.BorderContainer",g,{gutters:!0,liveSplitters:!0,persist:!1,
baseClass:"dijitBorderContainer",_splitterClass:f,postMixInProperties:function(){
this.gutters||(this.baseClass+="NoGutter"),this.inherited(arguments)},_setupChild:function(t){
this.inherited(arguments);var i=t.region,e=t.isLeftToRight();if("leading"==i&&(i=e?"left":"right"),
"trailing"==i&&(i=e?"right":"left"),i&&"center"!=i&&(t.splitter||this.gutters)&&!t._splitterWidget){
var o=t.splitter?this._splitterClass:_;n.isString(o)&&(o=n.getObject(o));var s=new o({
id:t.id+"_splitter",container:this,child:t,region:i,live:this.liveSplitters});s.isSplitter=!0,
t._splitterWidget=s;var d="bottom"==i||i==(this.isLeftToRight()?"right":"left");r.place(s.domNode,t.domNode,d?"before":"after"),
s.startup()}},layout:function(){this._layoutChildren()},removeChild:function(t){var i=t._splitterWidget;
i&&(i.destroy(),delete t._splitterWidget),this.inherited(arguments)},getChildren:function(){
return t.filter(this.inherited(arguments),function(t){return!t.isSplitter})},getSplitter:function(i){
return t.filter(this.getChildren(),function(t){return t.region==i})[0]._splitterWidget;
},resize:function(t,i){if(!this.cs||!this.pe){var e=this.domNode;this.cs=d.getComputedStyle(e),
this.pe=s.getPadExtents(e,this.cs),this.pe.r=d.toPixelValue(e,this.cs.paddingRight),
this.pe.b=d.toPixelValue(e,this.cs.paddingBottom),d.set(e,"padding","0px")}this.inherited(arguments);
},_layoutChildren:function(i,e){if(this._borderBox&&this._borderBox.h){var o=[];t.forEach(this._getOrderedChildren(),function(t){
o.push(t),t._splitterWidget&&o.push(t._splitterWidget)});var r={l:this.pe.l,t:this.pe.t,
w:this._borderBox.w-this.pe.w,h:this._borderBox.h-this.pe.h};m.layoutChildren(this.domNode,r,o,i,e);
}},destroyRecursive:function(){t.forEach(this.getChildren(),function(t){var i=t._splitterWidget;
i&&i.destroy(),delete t._splitterWidget}),this.inherited(arguments)}});return v.ChildWidgetProperties={
splitter:!1,minSize:0,maxSize:1/0},n.mixin(v.ChildWidgetProperties,g.ChildWidgetProperties),
n.extend(c,v.ChildWidgetProperties),v._Splitter=f,v._Gutter=_,v});