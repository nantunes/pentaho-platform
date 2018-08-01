define(["dojo/_base/array","dojo/_base/declare","dojo/sniff","dojo/_base/window","dojo/dom","dojo/dom-construct","dojo/dom-style","./_ScrollableMixin","./Pane","./_maskUtils"],function(e,i,o,t,s,d,r,n,a,h){
return i("dojox.mobile.ScrollablePane",[a,n],{roundCornerMask:!1,radius:0,baseClass:"mblScrollablePane",
buildRendering:function(){var e=this.containerNode=d.create("div",{className:"mblScrollableViewContainer",
style:{width:"v"===this.scrollDir?"100%":""}});if(this.inherited(arguments),this.srcNodeRef)for(var i=0,t=this.srcNodeRef.childNodes.length;t>i;i++)this.containerNode.appendChild(this.srcNodeRef.firstChild);
if(this.roundCornerMask&&(o("webkit")||o("svg"))){var r=this.containerNode,n=this.maskNode=d.create("div",{
className:"mblScrollablePaneMask"});n.appendChild(r),e=n}this.domNode.appendChild(e),
s.setSelectable(this.containerNode,!1)},resize:function(){this.inherited(arguments),
this.roundCornerMask&&this.createRoundMask(),e.forEach(this.getChildren(),function(e){
e.resize&&e.resize()})},isTopLevel:function(e){var i=this.getParent&&this.getParent();
return!i||!i.resize},createRoundMask:function(){if(o("webkit")||o("svg")){if(0==this.domNode.offsetHeight)return;
this.maskNode.style.height=this.domNode.offsetHeight+"px";var e=this.getChildren()[0],i=this.containerNode,t=e?e.domNode:i.childNodes.length>0&&(1===i.childNodes[0].nodeType?i.childNodes[0]:i.childNodes[1]),s=this.radius;
if(!s){var d=function(e){return parseInt(r.get(e,"borderTopLeftRadius"))};if(e){if(s=d(e.domNode),
!s){var n=e.getChildren()[0];s=n?d(n.domNode):0}}else s=d(t)}var a=(this.domNode.offsetWidth,
t.offsetWidth),l=this.domNode.offsetHeight,c=r.get(t,"marginTop"),f=r.get(t,"marginBottom"),m=r.get(t,"marginLeft");
h.createRoundMask(this.maskNode,m,c,0,f,a,l-f-c,s,s)}}})});