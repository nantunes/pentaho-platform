define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/query","dijit/_Widget","dijit/_Templated","dijit/_Contained","dijit/layout/StackContainer","dojo/fx/easing","dojo/_base/fx","dojo/dom-construct","dojo/dom-class"],function(t,o,i,e,d,n,s,a,h,l,r,u,c){
t.experimental("dojox.layout.RadioGroup");var _=o("dojox.layout.RadioGroup",[h,s],{
duration:750,hasButtons:!1,buttonClass:"dojox.layout._RadioButton",templateString:'<div class="dojoxRadioGroup"> 	<div dojoAttachPoint="buttonHolder" style="display:none;">		<table class="dojoxRadioButtons"><tbody><tr class="dojoxRadioButtonRow" dojoAttachPoint="buttonNode"></tr></tbody></table>	</div>	<div class="dojoxRadioView" dojoAttachPoint="containerNode"></div></div>',
startup:function(){this.inherited(arguments),this._children=this.getChildren(),this._buttons=this._children.length,
this._size=i.coords(this.containerNode),this.hasButtons&&i.style(this.buttonHolder,"display","block");
},_setupChild:function(t){if(i.style(t.domNode,"position","absolute"),this.hasButtons){
var o=this.buttonNode.appendChild(u.create("td")),d=u.create("div",null,o),n=e.getObject(this.buttonClass),s=new n({
label:t.title,page:t},d);e.mixin(t,{_radioButton:s}),s.startup()}t.domNode.style.display="none";
},removeChild:function(t){this.hasButtons&&t._radioButton&&(t._radioButton.destroy(),
delete t._radioButton),this.inherited(arguments)},_transition:function(t,o){this._showChild(t),
o&&this._hideChild(o),this.doLayout&&t.resize&&t.resize(this._containerContentBox||this._contentBox);
},_showChild:function(t){var o=this.getChildren();t.isFirstChild=t==o[0],t.isLastChild=t==o[o.length-1],
t.selected=!0,t.domNode.style.display="",t._onShow?t._onShow():t.onShow&&t.onShow();
},_hideChild:function(t){t.selected=!1,t.domNode.style.display="none",t.onHide&&t.onHide();
}});o("dojox.layout.RadioGroupFade",_,{_hideChild:function(t){r.fadeOut({node:t.domNode,
duration:this.duration,onEnd:e.hitch(this,"inherited",arguments,arguments)}).play();
},_showChild:function(t){this.inherited(arguments),i.style(t.domNode,"opacity",0),
r.fadeIn({node:t.domNode,duration:this.duration}).play()}}),o("dojox.layout.RadioGroupSlide",_,{
easing:"dojo.fx.easing.backOut",zTop:99,constructor:function(){e.isString(this.easing)&&(this.easing=e.getObject(this.easing));
},_positionChild:function(t){if(this._size){var o=!0,e=!0;switch(t.slideFrom){case"bottom":
e=!e;break;case"right":o=!o,e=!e;break;case"top":break;case"left":o=!o;break;default:
o=Math.round(Math.random()),e=Math.round(Math.random())}var d=o?"top":"left",n=(e?"-":"")+(this._size[o?"h":"w"]+20)+"px";
i.style(t.domNode,d,n)}},_showChild:function(t){var o=this.getChildren();t.isFirstChild=t==o[0],
t.isLastChild=t==o[o.length-1],t.selected=!0,i.style(t.domNode,{zIndex:this.zTop,
display:""}),this._anim&&"playing"==this._anim.status()&&this._anim.gotoPercent(100,!0),
this._anim=r.animateProperty({node:t.domNode,properties:{left:0,top:0},duration:this.duration,
easing:this.easing,onEnd:e.hitch(t,function(){this.onShow&&this.onShow(),this._onShow&&this._onShow();
}),beforeBegin:e.hitch(this,"_positionChild",t)}),this._anim.play()},_hideChild:function(t){
t.selected=!1,t.domNode.style.zIndex=this.zTop-1,t.onHide&&t.onHide()}}),o("dojox.layout._RadioButton",[n,s,a],{
label:"",page:null,templateString:'<div dojoAttachPoint="focusNode" class="dojoxRadioButton"><span dojoAttachPoint="titleNode" class="dojoxRadioButtonLabel">${label}</span></div>',
startup:function(){this.connect(this.domNode,"onmouseenter","_onMouse")},_onMouse:function(t){
this.getParent().selectChild(this.page),this._clearSelected(),c.add(this.domNode,"dojoxRadioButtonSelected");
},_clearSelected:function(){d(".dojoxRadioButtonSelected",this.domNode.parentNode.parentNode).removeClass("dojoxRadioButtonSelected");
}}),e.extend(n,{slideFrom:"random"})});