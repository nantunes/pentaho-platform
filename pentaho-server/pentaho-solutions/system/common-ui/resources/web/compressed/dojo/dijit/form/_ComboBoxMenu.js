define(["dojo/_base/declare","dojo/dom-class","dojo/dom-style","dojo/keys","../_WidgetBase","../_TemplatedMixin","./_ComboBoxMenuMixin","./_ListMouseMixin"],function(e,t,i,o,n,s,d,r){
return e("dijit.form._ComboBoxMenu",[n,s,r,d],{templateString:"<div class='dijitReset dijitMenu' data-dojo-attach-point='containerNode' style='overflow: auto; overflow-x: hidden;' role='listbox'><div class='dijitMenuItem dijitMenuPreviousButton' data-dojo-attach-point='previousButton' role='option'></div><div class='dijitMenuItem dijitMenuNextButton' data-dojo-attach-point='nextButton' role='option'></div></div>",
baseClass:"dijitComboBoxMenu",postCreate:function(){this.inherited(arguments),this.isLeftToRight()||(t.add(this.previousButton,"dijitMenuItemRtl"),
t.add(this.nextButton,"dijitMenuItemRtl")),this.containerNode.setAttribute("role","listbox");
},_createMenuItem:function(){var e=this.ownerDocument.createElement("div");return e.className="dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),
e.setAttribute("role","option"),e},onHover:function(e){t.add(e,"dijitMenuItemHover");
},onUnhover:function(e){t.remove(e,"dijitMenuItemHover")},onSelect:function(e){t.add(e,"dijitMenuItemSelected");
},onDeselect:function(e){t.remove(e,"dijitMenuItemSelected")},_page:function(e){var t=0,o=this.domNode.scrollTop,n=i.get(this.domNode,"height");
for(this.getHighlightedOption()||this.selectNextNode();n>t;){var s=this.getHighlightedOption();
if(e){if(!s.previousSibling||"none"==s.previousSibling.style.display)break;this.selectPreviousNode();
}else{if(!s.nextSibling||"none"==s.nextSibling.style.display)break;this.selectNextNode();
}var d=this.domNode.scrollTop;t+=(d-o)*(e?-1:1),o=d}},handleKey:function(e){switch(e.keyCode){
case o.DOWN_ARROW:return this.selectNextNode(),!1;case o.PAGE_DOWN:return this._page(!1),
!1;case o.UP_ARROW:return this.selectPreviousNode(),!1;case o.PAGE_UP:return this._page(!0),
!1;default:return!0}}})});