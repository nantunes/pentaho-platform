define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","dojo/_base/declare","dojo/_base/fx","dojo/_base/connect","dojo/_base/array","dojo/_base/sniff","dojo/window","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/_TemplatedMixin","dijit/_Widget","dijit/BackgroundIframe","dojo/dnd/Moveable","./ContentPane","./ResizeHandle","dojo/text!./resources/FloatingPane.html","./Dock"],function(i,t,o,e,s,d,n,h,a,l,r,c,u,m,_,f,y,p,x,b,k){
i.experimental("dojox.layout.FloatingPane");var N=e("dojox.layout.FloatingPane",[p,m],{
closable:!0,dockable:!0,resizable:!1,maxable:!1,resizeAxis:"xy",title:"",dockTo:"",
duration:400,contentClass:"dojoxFloatingPaneContent",_showAnim:null,_hideAnim:null,
_dockNode:null,_restoreState:{},_allFPs:[],_startZ:100,templateString:b,attributeMap:t.delegate(_.prototype.attributeMap,{
title:{type:"innerHTML",node:"titleNode"}}),postCreate:function(){this.inherited(arguments),
new y(this.domNode,{handle:this.focusNode}),this.dockable||(this.dockNode.style.display="none"),
this.closable||(this.closeNode.style.display="none"),this.maxable||(this.maxNode.style.display="none",
this.restoreNode.style.display="none"),this.resizable?this.domNode.style.width=c.getMarginBox(this.domNode).w+"px":this.resizeHandle.style.display="none",
this._allFPs.push(this),this.domNode.style.position="absolute",this.bgIframe=new f(this.domNode),
this._naturalState=c.position(this.domNode)},startup:function(){if(!this._started){
if(this.inherited(arguments),this.resizable&&(h("ie")?this.canvas.style.overflow="auto":this.containerNode.style.overflow="auto",
this._resizeHandle=new x({targetId:this.id,resizeAxis:this.resizeAxis},this.resizeHandle)),
this.dockable){var i=this.dockTo;if(this.dockTo?this.dockTo=dijit.byId(this.dockTo):this.dockTo=dijit.byId("dojoxGlobalFloatingDock"),
!this.dockTo){var t,e;i?(t=i,e=l.byId(i)):(e=u.create("div",null,o.body()),r.add(e,"dojoxFloatingDockDefault"),
t="dojoxGlobalFloatingDock"),this.dockTo=new k({id:t,autoPosition:"south"},e),this.dockTo.startup();
}("none"==this.domNode.style.display||"hidden"==this.domNode.style.visibility)&&this.minimize();
}this.connect(this.focusNode,"onmousedown","bringToTop"),this.connect(this.domNode,"onmousedown","bringToTop"),
this.resize(c.position(this.domNode)),this._started=!0}},setTitle:function(t){i.deprecated("pane.setTitle","Use pane.set('title', someTitle)","2.0"),
this.set("title",t)},close:function(){this.closable&&(d.unsubscribe(this._listener),
this.hide(t.hitch(this,function(){this.destroyRecursive()})))},hide:function(i){s.fadeOut({
node:this.domNode,duration:this.duration,onEnd:t.hitch(this,function(){this.domNode.style.display="none",
this.domNode.style.visibility="hidden",this.dockTo&&this.dockable&&this.dockTo._positionDock(null),
i&&i()})}).play()},show:function(i){var o=(s.fadeIn({node:this.domNode,duration:this.duration,
beforeBegin:t.hitch(this,function(){this.domNode.style.display="",this.domNode.style.visibility="visible",
this.dockTo&&this.dockable&&this.dockTo._positionDock(null),"function"==typeof i&&i(),
this._isDocked=!1,this._dockNode&&(this._dockNode.destroy(),this._dockNode=null)})
}).play(),c.getContentBox(this.domNode));this.resize(t.mixin(c.position(this.domNode),{
w:o.w,h:o.h})),this._onShow()},minimize:function(){this._isDocked||this.hide(t.hitch(this,"_dock"));
},maximize:function(){this._maximized||(this._naturalState=c.position(this.domNode),
this._isDocked&&(this.show(),setTimeout(t.hitch(this,"maximize"),this.duration)),
r.add(this.focusNode,"floatingPaneMaximized"),this.resize(a.getBox()),this._maximized=!0);
},_restore:function(){this._maximized&&(this.resize(this._naturalState),r.remove(this.focusNode,"floatingPaneMaximized"),
this._maximized=!1)},_dock:function(){!this._isDocked&&this.dockable&&(this._dockNode=this.dockTo.addNode(this),
this._isDocked=!0)},resize:function(i){i=i||this._naturalState,this._currentState=i;
var t=this.domNode.style;"t"in i?t.top=i.t+"px":"y"in i&&(t.top=i.y+"px"),"l"in i?t.left=i.l+"px":"x"in i&&(t.left=i.x+"px"),
t.width=i.w+"px",t.height=i.h+"px";var o={l:0,t:0,w:i.w,h:i.h-this.focusNode.offsetHeight
};c.setMarginBox(this.canvas,o),this._checkIfSingleChild(),this._singleChild&&this._singleChild.resize&&this._singleChild.resize(o);
},bringToTop:function(){var i=n.filter(this._allFPs,function(i){return i!==this},this);
i.sort(function(i,t){return i.domNode.style.zIndex-t.domNode.style.zIndex}),i.push(this),
n.forEach(i,function(i,t){i.domNode.style.zIndex=this._startZ+2*t,r.remove(i.domNode,"dojoxFloatingPaneFg");
},this),r.add(this.domNode,"dojoxFloatingPaneFg")},destroy:function(){this._allFPs.splice(n.indexOf(this._allFPs,this),1),
this._resizeHandle&&this._resizeHandle.destroy(),this.inherited(arguments)}});return N;
});