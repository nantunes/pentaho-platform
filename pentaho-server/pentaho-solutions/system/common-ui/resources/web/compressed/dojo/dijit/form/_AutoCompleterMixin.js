define(["dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/query","dojo/regexp","dojo/sniff","./DataList","./_TextBoxMixin","./_SearchMixin"],function(t,e,i,s,o,n,r,a,h,l,u){
var c=e("dijit.form._AutoCompleterMixin",u,{item:null,autoComplete:!0,highlightMatch:"first",
labelAttr:"",labelType:"text",maxHeight:-1,_stopClickEvents:!1,_getCaretPos:function(t){
var e=0;if("number"==typeof t.selectionStart)e=t.selectionStart;else if(a("ie")){
var i=t.ownerDocument.selection.createRange().duplicate(),s=t.createTextRange();i.move("character",0),
s.move("character",0);try{s.setEndPoint("EndToEnd",i),e=String(s.text).replace(/\r/g,"").length;
}catch(o){}}return e},_setCaretPos:function(t,e){e=parseInt(e),l.selectInputText(t,e,e);
},_setDisabledAttr:function(t){this.inherited(arguments),this.domNode.setAttribute("aria-disabled",t?"true":"false");
},_onKey:function(t){if(!(t.charCode>=32)){var e=t.charCode||t.keyCode;if(e!=s.ALT&&e!=s.CTRL&&e!=s.META&&e!=s.SHIFT){
var i=this.dropDown,o=null;if(this._abortQuery(),this.inherited(arguments),!(t.altKey||t.ctrlKey||t.metaKey))switch(this._opened&&(o=i.getHighlightedOption()),
e){case s.PAGE_DOWN:case s.DOWN_ARROW:case s.PAGE_UP:case s.UP_ARROW:this._opened&&this._announceOption(o),
t.stopPropagation(),t.preventDefault();break;case s.ENTER:if(o){if(o==i.nextButton){
this._nextSearch(1),t.stopPropagation(),t.preventDefault();break}if(o==i.previousButton){
this._nextSearch(-1),t.stopPropagation(),t.preventDefault();break}t.stopPropagation(),
t.preventDefault()}else this._setBlurValue(),this._setCaretPos(this.focusNode,this.focusNode.value.length);
case s.TAB:var n=this.get("displayedValue");if(i&&(n==i._messages.previousMessage||n==i._messages.nextMessage))break;
o&&this._selectOption(o);case s.ESCAPE:this._opened&&(this._lastQuery=null,this.closeDropDown());
}}}},_autoCompleteText:function(t){var e=this.focusNode;l.selectInputText(e,e.value.length);
var i=this.ignoreCase?"toLowerCase":"substr";if(0==t[i](0).indexOf(this.focusNode.value[i](0))){
var s=this.autoComplete?this._getCaretPos(e):e.value.length;s+1>e.value.length&&(e.value=t,
l.selectInputText(e,s))}else e.value=t,l.selectInputText(e)},_openResultList:function(t,e,i){
var s=this.dropDown.getHighlightedOption();return this.dropDown.clearResultList(),
t.length||0!=i.start?(this._nextSearch=this.dropDown.onPage=o.hitch(this,function(e){
t.nextPage(-1!==e),this.focus()}),this.dropDown.createOptions(t,i,o.hitch(this,"_getMenuLabelFromItem")),
this._showResultList(),void("direction"in i?(i.direction?this.dropDown.highlightFirstOption():i.direction||this.dropDown.highlightLastOption(),
s&&this._announceOption(this.dropDown.getHighlightedOption())):!this.autoComplete||this._prev_key_backspace||/^[*]+$/.test(e[this.searchAttr].toString())||this._announceOption(this.dropDown.containerNode.firstChild.nextSibling))):void this.closeDropDown();
},_showResultList:function(){this.closeDropDown(!0),this.openDropDown(),this.domNode.setAttribute("aria-expanded","true");
},loadDropDown:function(){this._startSearchAll()},isLoaded:function(){return!1},closeDropDown:function(){
this._abortQuery(),this._opened&&(this.inherited(arguments),this.domNode.setAttribute("aria-expanded","false"));
},_setBlurValue:function(){var t=this.get("displayedValue"),e=this.dropDown;!e||t!=e._messages.previousMessage&&t!=e._messages.nextMessage?"undefined"==typeof this.item?(this.item=null,
this.set("displayedValue",t)):(this.value!=this._lastValueReported&&this._handleOnChange(this.value,!0),
this._refreshState()):this._setValueAttr(this._lastValueReported,!0),this.focusNode.removeAttribute("aria-activedescendant");
},_setItemAttr:function(t,e,i){var s="";t&&(i||(i=this.store._oldAPI?this.store.getValue(t,this.searchAttr):t[this.searchAttr]),
s=this._getValueField()!=this.searchAttr?this.store.getIdentity(t):i),this.set("value",s,e,i,t);
},_announceOption:function(t){if(t){var e;if(t==this.dropDown.nextButton||t==this.dropDown.previousButton)e=t.innerHTML,
this.item=void 0,this.value="";else{var s=this.dropDown.items[t.getAttribute("item")];
e=(this.store._oldAPI?this.store.getValue(s,this.searchAttr):s[this.searchAttr]).toString(),
this.set("item",s,!1,e)}this.focusNode.value=this.focusNode.value.substring(0,this._lastInput.length),
this.focusNode.setAttribute("aria-activedescendant",i.get(t,"id")),this._autoCompleteText(e);
}},_selectOption:function(t){this.closeDropDown(),t&&this._announceOption(t),this._setCaretPos(this.focusNode,this.focusNode.value.length),
this._handleOnChange(this.value,!0),this.focusNode.removeAttribute("aria-activedescendant");
},_startSearchAll:function(){this._startSearch("")},_startSearchFromInput:function(){
this.item=void 0,this.inherited(arguments)},_startSearch:function(t){if(!this.dropDown){
var e=this.id+"_popup",i=o.isString(this.dropDownClass)?o.getObject(this.dropDownClass,!1):this.dropDownClass;
this.dropDown=new i({onChange:o.hitch(this,this._selectOption),id:e,dir:this.dir,
textDir:this.textDir})}this._lastInput=t,this.inherited(arguments)},_getValueField:function(){
return this.searchAttr},postMixInProperties:function(){if(this.inherited(arguments),
!this.store){var t=this.srcNodeRef;if(this.store=new h({},t),!("value"in this.params)){
var e=this.item=this.store.fetchSelectedItem();if(e){var i=this._getValueField();this.value=this.store._oldAPI?this.store.getValue(e,i):e[i];
}}}},postCreate:function(){var e=n('label[for="'+this.id+'"]');e.length&&(e[0].id||(e[0].id=this.id+"_label"),
this.domNode.setAttribute("aria-labelledby",e[0].id)),this.inherited(arguments),t.after(this,"onSearch",o.hitch(this,"_openResultList"),!0);
},_getMenuLabelFromItem:function(t){var e=this.labelFunc(t,this.store),i=this.labelType;
return"none"!=this.highlightMatch&&"text"==this.labelType&&this._lastInput&&(e=this.doHighlight(e,this._lastInput),
i="html"),{html:"html"==i,label:e}},doHighlight:function(t,e){var i=(this.ignoreCase?"i":"")+("all"==this.highlightMatch?"g":""),s=this.queryExpr.indexOf("${0}");
return e=r.escapeString(e),this._escapeHtml(t.replace(new RegExp((0==s?"^":"")+"("+e+")"+(s==this.queryExpr.length-4?"$":""),i),"￿$1￿")).replace(/\uFFFF([^\uFFFF]+)\uFFFF/g,'<span class="dijitComboBoxHighlightMatch">$1</span>');
},_escapeHtml:function(t){return t=String(t).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
},reset:function(){this.item=null,this.inherited(arguments)},labelFunc:function(t,e){
return(e._oldAPI?e.getValue(t,this.labelAttr||this.searchAttr):t[this.labelAttr||this.searchAttr]).toString();
},_setValueAttr:function(t,e,i,s){this._set("item",s||null),null==t&&(t=""),this.inherited(arguments);
}});return a("dojo-bidi")&&c.extend({_setTextDirAttr:function(t){this.inherited(arguments),
this.dropDown&&this.dropDown._set("textDir",t)}}),c});