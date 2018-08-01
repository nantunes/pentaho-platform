define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/mouse","dojo/on","dojo/string","dojo/query","dijit/form/_FormWidget"],function(t,e,o,i,s,a,n,r,d){
return t("dojox.form.Rating",d,{templateString:null,numStars:3,value:0,buildRendering:function(t){
for(var e='<div dojoAttachPoint="domNode" class="dojoxRating dijitInline"><input type="hidden" value="0" dojoAttachPoint="focusNode" /><ul data-dojo-attach-point="list">${stars}</ul></div>',o='<li class="dojoxRatingStar dijitInline" value="${value}"></li>',i="",s=0;s<this.numStars;s++)i+=n.substitute(o,{
value:s+1});this.templateString=n.substitute(e,{stars:i}),this.inherited(arguments);
},postCreate:function(){this.inherited(arguments),this._renderStars(this.value),this.own(a(this.list,a.selector(".dojoxRatingStar","mouseover"),e.hitch(this,"_onMouse")),a(this.list,a.selector(".dojoxRatingStar","click"),e.hitch(this,"onStarClick")),a(this.list,s.leave,e.hitch(this,function(){
this._renderStars(this.value)})))},_onMouse:function(t){var e=+o.get(t.target,"value");
this._renderStars(e,!0),this.onMouseOver(t,e)},_renderStars:function(t,e){r(".dojoxRatingStar",this.domNode).forEach(function(o,s){
s+1>t?(i.remove(o,"dojoxRatingStarHover"),i.remove(o,"dojoxRatingStarChecked")):(i.remove(o,"dojoxRatingStar"+(e?"Checked":"Hover")),
i.add(o,"dojoxRatingStar"+(e?"Hover":"Checked")))})},onStarClick:function(t){var e=+o.get(t.target,"value");
this.setAttribute("value",e==this.value?0:e),this._renderStars(this.value),this.onChange(this.value);
},onMouseOver:function(){},setAttribute:function(t,e){this.set(t,e)},_setValueAttr:function(t){
this.focusNode.value=t,this._set("value",t),this._renderStars(t),this.onChange(t);
}})});