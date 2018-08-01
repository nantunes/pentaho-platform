define(["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/_base/event","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/sniff","../registry","../_WidgetBase","./_LayoutWidget"],function(i,t,e,s,n,o,h,r,a,l,d,z,c,u,p,f){
var g=e("dijit.layout.SplitContainer",f,{constructor:function(){l.deprecated("dijit.layout.SplitContainer is deprecated","use BorderContainer with splitter instead",2);
},activeSizing:!1,sizerWidth:7,orientation:"horizontal",persist:!0,baseClass:"dijitSplitContainer",
postMixInProperties:function(){this.inherited("postMixInProperties",arguments),this.isHorizontal="horizontal"==this.orientation;
},postCreate:function(){if(this.inherited(arguments),this.sizers=[],c("mozilla")&&(this.domNode.style.overflow="-moz-scrollbars-none"),
"object"==typeof this.sizerWidth)try{this.sizerWidth=parseInt(this.sizerWidth.toString());
}catch(i){this.sizerWidth=7}var t=this.ownerDocument.createElement("div");this.virtualSizer=t,
t.style.position="relative",t.style.zIndex=10,t.className=this.isHorizontal?"dijitSplitContainerVirtualSizerH":"dijitSplitContainerVirtualSizerV",
this.domNode.appendChild(t),s.setSelectable(t,!1)},destroy:function(){if(delete this.virtualSizer,
this._ownconnects)for(var i;i=this._ownconnects.pop();)i.remove();this.inherited(arguments);
},startup:function(){this._started||(i.forEach(this.getChildren(),function(i,t,e){
this._setupChild(i),t<e.length-1&&this._addSizer()},this),this.persist&&this._restoreState(),
this.inherited(arguments))},_setupChild:function(i){this.inherited(arguments),i.domNode.style.position="absolute",
n.add(i.domNode,"dijitSplitPane")},_onSizerMouseDown:function(i){if(i.target.id){
for(var t=0;t<this.sizers.length&&this.sizers[t].id!=i.target.id;t++);t<this.sizers.length&&this.beginSizing(i,t);
}},_addSizer:function(i){i=void 0===i?this.sizers.length:i;var t=this.ownerDocument.createElement("div");
t.id=u.getUniqueId("dijit_layout_SplitterContainer_Splitter"),this.sizers.splice(i,0,t),
this.domNode.appendChild(t),t.className=this.isHorizontal?"dijitSplitContainerSizerH":"dijitSplitContainerSizerV";
var e=this.ownerDocument.createElement("div");e.className="thumb",t.appendChild(e),
this.connect(t,"onmousedown","_onSizerMouseDown"),s.setSelectable(t,!1)},removeChild:function(t){
if(this.sizers.length){var e=i.indexOf(this.getChildren(),t);-1!=e&&(e==this.sizers.length&&e--,
o.destroy(this.sizers[e]),this.sizers.splice(e,1))}this.inherited(arguments),this._started&&this.layout();
},addChild:function(i,t){if(("undefined"==typeof t||"last"==t)&&(t=this.getChildren().length),
this.inherited(arguments,[i,t]),this._started){var e=this.getChildren();e.length>1&&this._addSizer(t),
this.layout()}},layout:function(){this.paneWidth=this._contentBox.w,this.paneHeight=this._contentBox.h;
var t=this.getChildren();if(t.length){var e=this.isHorizontal?this.paneWidth:this.paneHeight;
t.length>1&&(e-=this.sizerWidth*(t.length-1));var s=0;i.forEach(t,function(i){s+=i.sizeShare;
});var n=e/s,o=0;i.forEach(t.slice(0,t.length-1),function(i){var t=Math.round(n*i.sizeShare);
i.sizeActual=t,o+=t}),t[t.length-1].sizeActual=e-o,this._checkSizes();var h=0,r=t[0].sizeActual;
this._movePanel(t[0],h,r),t[0].position=h,h+=r,this.sizers&&i.some(t.slice(1),function(i,t){
return this.sizers[t]?(this._moveSlider(this.sizers[t],h,this.sizerWidth),this.sizers[t].position=h,
h+=this.sizerWidth,r=i.sizeActual,this._movePanel(i,h,r),i.position=h,void(h+=r)):!0;
},this)}},_movePanel:function(i,t,e){var s;this.isHorizontal?(i.domNode.style.left=t+"px",
i.domNode.style.top=0,s={w:e,h:this.paneHeight},i.resize?i.resize(s):h.setMarginBox(i.domNode,s)):(i.domNode.style.left=0,
i.domNode.style.top=t+"px",s={w:this.paneWidth,h:e},i.resize?i.resize(s):h.setMarginBox(i.domNode,s));
},_moveSlider:function(i,t,e){this.isHorizontal?(i.style.left=t+"px",i.style.top=0,
h.setMarginBox(i,{w:e,h:this.paneHeight})):(i.style.left=0,i.style.top=t+"px",h.setMarginBox(i,{
w:this.paneWidth,h:e}))},_growPane:function(i,t){return i>0&&t.sizeActual>t.sizeMin&&(t.sizeActual-t.sizeMin>i?(t.sizeActual=t.sizeActual-i,
i=0):(i-=t.sizeActual-t.sizeMin,t.sizeActual=t.sizeMin)),i},_checkSizes:function(){
var t=0,e=0,s=this.getChildren();if(i.forEach(s,function(i){e+=i.sizeActual,t+=i.sizeMin;
}),e>=t){var n=0;if(i.forEach(s,function(i){i.sizeActual<i.sizeMin&&(n+=i.sizeMin-i.sizeActual,
i.sizeActual=i.sizeMin)}),n>0){var o=this.isDraggingLeft?s.reverse():s;i.forEach(o,function(i){
n=this._growPane(n,i)},this)}}else i.forEach(s,function(i){i.sizeActual=Math.round(e*(i.sizeMin/t));
})},beginSizing:function(i,t){var e=this.getChildren();this.paneBefore=e[t],this.paneAfter=e[t+1],
this.paneBefore.sizeBeforeDrag=this.paneBefore.sizeActual,this.paneAfter.sizeBeforeDrag=this.paneAfter.sizeActual,
this.paneAfter.positionBeforeDrag=this.paneAfter.position,this.isSizing=!0,this.sizingSplitter=this.sizers[t],
this.sizingSplitter.positionBeforeDrag=r.get(this.sizingSplitter,this.isHorizontal?"left":"top"),
this.cover?this.cover.style.zIndex=5:this.cover=o.create("div",{style:{position:"absolute",
zIndex:5,top:0,left:0,width:"100%",height:"100%"}},this.domNode),this.sizingSplitter.style.zIndex=6,
this.startPoint=this.lastPoint=this.isHorizontal?i.pageX:i.pageY,this.maxDelta=this.paneAfter.sizeActual-this.paneAfter.sizeMin,
this.minDelta=-1*(this.paneBefore.sizeActual-this.paneBefore.sizeMin),this.activeSizing||this._showSizingLine(),
this._ownconnects=[z(this.ownerDocument.documentElement,"mousemove",d.hitch(this,"changeSizing")),z(this.ownerDocument.documentElement,"mouseup",d.hitch(this,"endSizing"))],
a.stop(i)},changeSizing:function(i){if(this.isSizing){this.lastPoint=this.isHorizontal?i.pageX:i.pageY;
var t=Math.max(Math.min(this.lastPoint-this.startPoint,this.maxDelta),this.minDelta);
this.activeSizing?this._updateSize(t):this._moveSizingLine(t),a.stop(i)}},endSizing:function(){
if(this.isSizing){this.cover&&(this.cover.style.zIndex=-1),this.activeSizing||this._hideSizingLine();
var i=Math.max(Math.min(this.lastPoint-this.startPoint,this.maxDelta),this.minDelta);
this._updateSize(i),this.isSizing=!1,this.persist&&this._saveState(this);for(var t;t=this._ownconnects.pop();)t.remove();
}},_updateSize:function(t){this.paneBefore.sizeActual=this.paneBefore.sizeBeforeDrag+t,
this.paneAfter.position=this.paneAfter.positionBeforeDrag+t,this.paneAfter.sizeActual=this.paneAfter.sizeBeforeDrag-t,
i.forEach(this.getChildren(),function(i){i.sizeShare=i.sizeActual}),this._started&&this.layout();
},_showSizingLine:function(){this._moveSizingLine(0),h.setMarginBox(this.virtualSizer,this.isHorizontal?{
w:this.sizerWidth,h:this.paneHeight}:{w:this.paneWidth,h:this.sizerWidth}),this.virtualSizer.style.display="block";
},_hideSizingLine:function(){this.virtualSizer.style.display="none"},_moveSizingLine:function(i){
var t=i+this.sizingSplitter.positionBeforeDrag;r.set(this.virtualSizer,this.isHorizontal?"left":"top",t+"px");
},_getCookieName:function(i){return this.id+"_"+i},_restoreState:function(){i.forEach(this.getChildren(),function(i,e){
var s=this._getCookieName(e),n=t(s);if(n){var o=parseInt(n);"number"==typeof o&&(i.sizeShare=o);
}},this)},_saveState:function(){this.persist&&i.forEach(this.getChildren(),function(i,e){
t(this._getCookieName(e),i.sizeShare,{expires:365})},this)}});return g.ChildWidgetProperties={
sizeMin:10,sizeShare:10},d.extend(p,g.ChildWidgetProperties),g});