define(["dojo/_base/array","dijit/registry","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/place","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip"],function(o,e,t,i,r,l,d,n,s,a,h,b){
var m=t(h("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",a,{baseClass:"mblTooltip mblTooltipHidden",
buildRendering:function(){this.inherited(arguments),this.anchor=l.create("div",{"class":"mblTooltipAnchor"
},this.domNode,"first"),this.arrow=l.create("div",{"class":"mblTooltipArrow"},this.anchor),
this.innerArrow=l.create("div",{"class":"mblTooltipInnerArrow"},this.anchor),this.containerNode||(this.containerNode=this.domNode);
},show:function(t,l){var a=this.domNode,h={MRM:"mblTooltipAfter",MLM:"mblTooltipBefore",
BMT:"mblTooltipBelow",TMB:"mblTooltipAbove",BLT:"mblTooltipBelow",TLB:"mblTooltipAbove",
BRT:"mblTooltipBelow",TRB:"mblTooltipAbove",TLT:"mblTooltipBefore",TRT:"mblTooltipAfter",
BRB:"mblTooltipAfter",BLB:"mblTooltipBefore"};r.remove(a,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]),
o.forEach(e.findWidgets(a),function(o){"auto"==o.height&&"function"==typeof o.resize&&(o._parentPadBorderExtentsBottom||(o._parentPadBorderExtentsBottom=d.getPadBorderExtents(a).b),
o.resize())}),l&&(l=o.map(l,function(o){return{after:"after-centered",before:"before-centered"
}[o]||o}));var b=s.around(a,t,l||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight()),m=h[b.corner+b.aroundCorner.charAt(0)]||"";
r.add(a,m);var c=d.position(t,!0);return n.set(this.anchor,"mblTooltipAbove"==m||"mblTooltipBelow"==m?{
top:"",left:Math.max(0,c.x-b.x+(c.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",
top:Math.max(0,c.y-b.y+(c.h>>1)-(this.arrow.offsetHeight>>1))+"px"}),r.replace(a,"mblTooltipVisible","mblTooltipHidden"),
this.resize=i.hitch(this,"show",t,l),b},hide:function(){this.resize=void 0,r.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible");
},onBlur:function(o){return!0},destroy:function(){this.anchor&&(this.anchor.removeChild(this.innerArrow),
this.anchor.removeChild(this.arrow),this.domNode.removeChild(this.anchor),this.anchor=this.arrow=this.innerArrow=void 0),
this.inherited(arguments)}});return h("dojo-bidi")?t("dojox.mobile.Tooltip",[m,b]):m;
});