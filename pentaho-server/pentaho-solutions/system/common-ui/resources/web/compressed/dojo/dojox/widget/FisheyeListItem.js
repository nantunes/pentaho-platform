define(["dojo/_base/declare","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/_base/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained"],function(t,e,o,i,s,d,n,a,r,h,c){
return t("dojox.widget.FisheyeListItem",[r,h,c],{iconSrc:"",label:"",id:"",templateString:'<div class="dojoxFisheyeListItem">  <img class="dojoxFisheyeListItemImage" data-dojo-attach-point="imgNode" data-dojo-attach-event="onmouseover:onMouseOver,onmouseout:onMouseOut,onclick:onClick">  <div class="dojoxFisheyeListItemLabel" data-dojo-attach-point="lblNode"></div></div>',
_isNode:function(t){if("function"!=typeof Element)return t&&!isNaN(t.nodeType);try{
return t instanceof Element}catch(e){}return!1},_hasParent:function(t){return Boolean(t&&t.parentNode&&this._isNode(t.parentNode));
},postCreate:function(){var t;".png"==this.iconSrc.toLowerCase().substring(this.iconSrc.length-4)&&e("ie")<7?(this._hasParent(this.imgNode)&&""!=this.id&&(t=this.imgNode.parentNode,
i.set(t,"id",this.id)),d.set(this.imgNode,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this.iconSrc+"', sizingMethod='scale')"),
this.imgNode.src=this._blankGif.toString()):(this._hasParent(this.imgNode)&&""!=this.id&&(t=this.imgNode.parentNode,
i.set(t,"id",this.id)),this.imgNode.src=this.iconSrc),this.lblNode&&n.place(a.doc.createTextNode(this.label),this.lblNode),
o.setSelectable(this.domNode,!1),this.startup()},startup:function(){this.parent=this.getParent();
},onMouseOver:function(t){this.parent.isOver||this.parent._setActive(t),""!=this.label&&(s.add(this.lblNode,"dojoxFishSelected"),
this.parent._positionLabel(this))},onMouseOut:function(t){s.remove(this.lblNode,"dojoxFishSelected");
},onClick:function(t){}})});