define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","dijit/_WidgetBase","dojo/_base/array","dijit/registry","dojo/touch","./viewRegistry","./_css3"],function(e,o,i,t,n,s,r,l,d,a,m,v,c,h){
return e("dojox.mobile.Overlay",d,{baseClass:"mblOverlay mblOverlayHidden",buildRendering:function(){
this.inherited(arguments),this.containerNode||(this.containerNode=this.domNode)},
_reposition:function(){var e=s.position(this.domNode),o=l.getBox(),t=c.getEnclosingScrollable(this.domNode);
return t&&(o.t-=t.getPos().y),(e.y+e.h!=o.h||"absolute"!=r.get(this.domNode,"position")&&i("android")<3)&&(e.y=o.t+o.h-e.h,
r.set(this.domNode,{position:"absolute",top:e.y+"px",bottom:"auto"})),e},show:function(e){
a.forEach(m.findWidgets(this.domNode),function(e){e&&"auto"==e.height&&"function"==typeof e.resize&&e.resize();
});var i=this._reposition();if(e){var r=s.position(e);i.y<r.y&&(t.global.scrollBy(0,r.y+r.h-i.y),
this._reposition())}var l=this.domNode;n.replace(l,["mblCoverv","mblIn"],["mblOverlayHidden","mblRevealv","mblOut","mblReverse","mblTransition"]),
this.defer(function(){var e=this.connect(l,h.name("transitionEnd"),function(){this.disconnect(e),
n.remove(l,["mblCoverv","mblIn","mblTransition"]),this._reposition()});n.add(l,"mblTransition");
},100);var d=!1;return this._moveHandle=this.connect(t.doc.documentElement,v.move,function(){
d=!0}),this._repositionTimer=setInterval(o.hitch(this,function(){return d?void(d=!1):void this._reposition();
}),50),i},hide:function(){var e=this.domNode;this._moveHandle&&(this.disconnect(this._moveHandle),
this._moveHandle=null,clearInterval(this._repositionTimer),this._repositionTimer=null),
i("css3-animations")?(n.replace(e,["mblRevealv","mblOut","mblReverse"],["mblCoverv","mblIn","mblOverlayHidden","mblTransition"]),
this.defer(function(){var o=this.connect(e,h.name("transitionEnd"),function(){this.disconnect(o),
n.replace(e,["mblOverlayHidden"],["mblRevealv","mblOut","mblReverse","mblTransition"]);
});n.add(e,"mblTransition")},100)):n.replace(e,["mblOverlayHidden"],["mblCoverv","mblIn","mblRevealv","mblOut","mblReverse"]);
},onBlur:function(e){return!1}})});