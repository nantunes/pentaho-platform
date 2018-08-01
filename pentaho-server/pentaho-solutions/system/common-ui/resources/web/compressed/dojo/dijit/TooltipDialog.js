define(["dojo/_base/declare","dojo/dom-class","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","./focus","./layout/ContentPane","./_DialogMixin","./form/_FormMixin","./_TemplatedMixin","dojo/text!./templates/TooltipDialog.html","./main"],function(t,o,i,e,s,n,r,l,d,c,h,a,p){
var f=t("dijit.TooltipDialog",[l,h,c,d],{title:"",doLayout:!1,autofocus:!0,baseClass:"dijitTooltipDialog",
_firstFocusItem:null,_lastFocusItem:null,templateString:a,_setTitleAttr:"containerNode",
postCreate:function(){this.inherited(arguments),this.own(n(this.containerNode,"keydown",s.hitch(this,"_onKey")));
},orient:function(t,i,e){var s={"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft",
"TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft",
"TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight",
"TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft",
"BR-TL":"dijitTooltipBelow dijitTooltipABLeft","BL-TR":"dijitTooltipBelow dijitTooltipABRight",
"TL-BR":"dijitTooltipAbove dijitTooltipABRight","TR-BL":"dijitTooltipAbove dijitTooltipABLeft"
}[i+"-"+e];o.replace(this.domNode,s,this._currentOrientClass||""),this._currentOrientClass=s;
},focus:function(){this._getFocusItems(this.containerNode),r.focus(this._firstFocusItem);
},onOpen:function(t){this.orient(this.domNode,t.aroundCorner,t.corner);var o=t.aroundNodePos;
"M"==t.corner.charAt(0)&&"M"==t.aroundCorner.charAt(0)?(this.connectorNode.style.top=o.y+(o.h-this.connectorNode.offsetHeight>>1)-t.y+"px",
this.connectorNode.style.left=""):"M"==t.corner.charAt(1)&&"M"==t.aroundCorner.charAt(1)&&(this.connectorNode.style.left=o.x+(o.w-this.connectorNode.offsetWidth>>1)-t.x+"px"),
this._onShow()},onClose:function(){this.onHide()},_onKey:function(t){if(t.keyCode==e.ESCAPE)this.defer("onCancel"),
t.stopPropagation(),t.preventDefault();else if(t.keyCode==e.TAB){var o=t.target;this._getFocusItems(this.containerNode),
this._firstFocusItem==this._lastFocusItem?(t.stopPropagation(),t.preventDefault()):o==this._firstFocusItem&&t.shiftKey?(r.focus(this._lastFocusItem),
t.stopPropagation(),t.preventDefault()):o!=this._lastFocusItem||t.shiftKey?t.stopPropagation():(r.focus(this._firstFocusItem),
t.stopPropagation(),t.preventDefault())}}});return i("dojo-bidi")&&f.extend({_setTitleAttr:function(t){
this.containerNode.title=this.textDir&&this.enforceTextDirWithUcc?this.enforceTextDirWithUcc(null,t):t,
this._set("title",t)},_setTextDirAttr:function(t){this._created&&this.textDir==t||(this._set("textDir",t),
this.textDir&&this.title&&(this.containerNode.title=this.enforceTextDirWithUcc(null,this.title)));
}}),f});