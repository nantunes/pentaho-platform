define(["dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojo/on","dojo/touch","dijit/registry","./Pane","./iconUtils","./sniff"],function(e,o,t,i,s,d,l,n,a,h,c){
return e("dojox.mobile.SimpleDialog",a,{top:"auto",left:"auto",modal:!0,closeButton:!1,
closeButtonClass:"mblDomButtonSilverCircleRedCross",tabIndex:"0",_setTabIndexAttr:"",
baseClass:"mblSimpleDialog",_cover:[],buildRendering:function(){if(this.containerNode=s.create("div",{
className:"mblSimpleDialogContainer"}),this.srcNodeRef)for(var e=0,o=this.srcNodeRef.childNodes.length;o>e;e++)this.containerNode.appendChild(this.srcNodeRef.removeChild(this.srcNodeRef.firstChild));
if(this.inherited(arguments),i.set(this.domNode,"role","dialog"),this.containerNode.getElementsByClassName){
var d=this.containerNode.getElementsByClassName("mblSimpleDialogTitle")[0];d&&(d.id=d.id||n.getUniqueId("dojo_mobile_mblSimpleDialogTitle"),
i.set(this.domNode,"aria-labelledby",d.id));var l=this.containerNode.getElementsByClassName("mblSimpleDialogText")[0];
l&&(l.id=l.id||n.getUniqueId("dojo_mobile_mblSimpleDialogText"),i.set(this.domNode,"aria-describedby",l.id));
}t.add(this.domNode,"mblSimpleDialogDecoration"),this.domNode.style.display="none",
this.domNode.appendChild(this.containerNode),this.closeButton&&(this.closeButtonNode=s.create("div",{
className:"mblSimpleDialogCloseBtn "+this.closeButtonClass},this.domNode),h.createDomButton(this.closeButtonNode),
this.connect(this.closeButtonNode,"onclick","_onCloseButtonClick")),this.connect(this.domNode,"onkeydown","_onKeyDown");
},startup:function(){this._started||(this.inherited(arguments),o.body().appendChild(this.domNode));
},addCover:function(){this._cover[0]?this._cover[0].style.display="":this._cover[0]=s.create("div",{
className:"mblSimpleDialogCover"},o.body()),c("windows-theme")&&this.own(d(this._cover[0],l.press,function(){}));
},removeCover:function(){this._cover[0].style.display="none"},_onCloseButtonClick:function(e){
this.onCloseButtonClick(e)!==!1&&this.hide()},onCloseButtonClick:function(){},_onKeyDown:function(e){
27==e.keyCode&&this.hide()},refresh:function(){var e,t=this.domNode;if(this.closeButton){
var i=this.closeButtonNode,s=Math.round(i.offsetHeight/2);i.style.top=-s+"px",i.style.left=t.offsetWidth-s+"px";
}"auto"===this.top?(e=o.global.innerHeight||o.doc.documentElement.clientHeight,t.style.top=Math.round((e-t.offsetHeight)/2)+"px"):t.style.top=this.top,
"auto"===this.left?(e=o.global.innerWidth||o.doc.documentElement.clientWidth,t.style.left=Math.round((e-t.offsetWidth)/2)+"px"):t.style.left=this.left;
},show:function(){if(""!==this.domNode.style.display){this.modal&&this.addCover(),
this.domNode.style.display="",this.resize(),this.refresh();var e;this.domNode.getElementsByClassName&&(e=this.domNode.getElementsByClassName("mblSimpleDialogButton")[0]);
var o=e||this.closeButtonNode||this.domNode;this.defer(function(){o.focus()},1e3);
}},hide:function(){"none"!==this.domNode.style.display&&(this.domNode.style.display="none",
this.modal&&this.removeCover())}})});