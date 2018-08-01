define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/has","dojo/i18n","dojo/i18n!./nls/ComboBox"],function(t,e,i,n,o){
var s=e("dijit.form._ComboBoxMenuMixin"+(n("dojo-bidi")?"_NoBidi":""),null,{_messages:null,
postMixInProperties:function(){this.inherited(arguments),this._messages=o.getLocalization("dijit.form","ComboBox",this.lang);
},buildRendering:function(){this.inherited(arguments),this.previousButton.innerHTML=this._messages.previousMessage,
this.nextButton.innerHTML=this._messages.nextMessage},_setValueAttr:function(t){this._set("value",t),
this.onChange(t)},onClick:function(t){t==this.previousButton?(this._setSelectedAttr(null),
this.onPage(-1)):t==this.nextButton?(this._setSelectedAttr(null),this.onPage(1)):this.onChange(t);
},onChange:function(){},onPage:function(){},onClose:function(){this._setSelectedAttr(null);
},_createOption:function(t,e){var i=this._createMenuItem(),n=e(t);return n.html?i.innerHTML=n.label:i.appendChild(i.ownerDocument.createTextNode(n.label)),
""==i.innerHTML&&(i.innerHTML="&#160;"),i},createOptions:function(e,n,o){this.items=e,
this.previousButton.style.display=0==n.start?"none":"",i.set(this.previousButton,"id",this.id+"_prev"),
t.forEach(e,function(t,e){var n=this._createOption(t,o);n.setAttribute("item",e),
i.set(n,"id",this.id+e),this.nextButton.parentNode.insertBefore(n,this.nextButton);
},this);var s=!1;e.total&&!e.total.then&&-1!=e.total?n.start+n.count<e.total?s=!0:n.start+n.count>e.total&&n.count==e.length&&(s=!0):n.count==e.length&&(s=!0),
this.nextButton.style.display=s?"":"none",i.set(this.nextButton,"id",this.id+"_next");
},clearResultList:function(){for(var t=this.containerNode;t.childNodes.length>2;)t.removeChild(t.childNodes[t.childNodes.length-2]);
this._setSelectedAttr(null)},highlightFirstOption:function(){this.selectFirstNode();
},highlightLastOption:function(){this.selectLastNode()},selectFirstNode:function(){
this.inherited(arguments),this.getHighlightedOption()==this.previousButton&&this.selectNextNode();
},selectLastNode:function(){this.inherited(arguments),this.getHighlightedOption()==this.nextButton&&this.selectPreviousNode();
},getHighlightedOption:function(){return this.selected}});return n("dojo-bidi")&&(s=e("dijit.form._ComboBoxMenuMixin",s,{
_createOption:function(){var t=this.inherited(arguments);return this.applyTextDir(t),
t}})),s});