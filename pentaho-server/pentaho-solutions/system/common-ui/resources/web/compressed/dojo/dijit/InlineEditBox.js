define(["require","dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/i18n","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/when","./a11yclick","./focus","./_Widget","./_TemplatedMixin","./_WidgetsInTemplateMixin","./_Container","./form/Button","./form/_TextBoxMixin","./form/TextBox","dojo/text!./templates/InlineEditBox.html","dojo/i18n!./nls/common"],function(t,e,i,s,d,n,o,a,r,h,l,u,c,p,g,f,m,y,v,b,x,_,N,j,I){
var B=s("dijit._InlineEditor",[y,v,b],{templateString:I,contextRequire:t,postMixInProperties:function(){
this.inherited(arguments),this.messages=r.getLocalization("dijit","common",this.lang),
e.forEach(["buttonSave","buttonCancel"],function(t){this[t]||(this[t]=this.messages[t]);
},this)},buildRendering:function(){this.inherited(arguments);var i="string"==typeof this.editor?u.getObject(this.editor)||t(this.editor):this.editor,s=this.sourceStyle,d="line-height:"+s.lineHeight+";",n=a.getComputedStyle(this.domNode);
e.forEach(["Weight","Family","Size","Style"],function(t){var e=s["font"+t],i=n["font"+t];
i!=e&&(d+="font-"+t+":"+s["font"+t]+";")},this),e.forEach(["marginTop","marginBottom","marginLeft","marginRight","position","left","top","right","bottom","float","clear","display"],function(t){
this.domNode.style[t]=s[t]},this);var r=this.inlineEditBox.width;"100%"==r?(d+="width:100%;",
this.domNode.style.display="block"):d+="width:"+(r+(Number(r)==r?"px":""))+";";var h=u.delegate(this.inlineEditBox.editorParams,{
style:d,dir:this.dir,lang:this.lang,textDir:this.textDir});this.editWidget=new i(h,this.editorPlaceholder),
this.inlineEditBox.autoSave&&o.destroy(this.buttonContainer)},postCreate:function(){
this.inherited(arguments);var t=this.editWidget;this.inlineEditBox.autoSave?this.own(i.after(t,"onChange",u.hitch(this,"_onChange"),!0),c(t,"keydown",u.hitch(this,"_onKeyDown"))):"intermediateChanges"in t&&(t.set("intermediateChanges",!0),
this.own(i.after(t,"onChange",u.hitch(this,"_onIntermediateChange"),!0)),this.saveButton.set("disabled",!0));
},startup:function(){this.editWidget.startup(),this.inherited(arguments)},_onIntermediateChange:function(){
this.saveButton.set("disabled",this.getValue()==this._resetValue||!this.enableSave());
},destroy:function(){this.editWidget.destroy(!0),this.inherited(arguments)},getValue:function(){
var t=this.editWidget;return String(t.get("displayedValue"in t||"_getDisplayedValueAttr"in t?"displayedValue":"value"));
},_onKeyDown:function(t){if(this.inlineEditBox.autoSave&&this.inlineEditBox.editing){
if(t.altKey||t.ctrlKey)return;t.keyCode==l.ESCAPE?(t.stopPropagation(),t.preventDefault(),
this.cancel(!0)):t.keyCode==l.ENTER&&"INPUT"==t.target.tagName&&(t.stopPropagation(),
t.preventDefault(),this._onChange())}},_onBlur:function(){this.inherited(arguments),
this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&(this.getValue()==this._resetValue?this.cancel(!1):this.enableSave()&&this.save(!1));
},_onChange:function(){this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&this.enableSave()&&m.focus(this.inlineEditBox.displayNode);
},enableSave:function(){return this.editWidget.isValid?this.editWidget.isValid():!0;
},focus:function(){this.editWidget.focus(),this.editWidget.focusNode&&(m._onFocusNode(this.editWidget.focusNode),
"INPUT"==this.editWidget.focusNode.tagName&&this.defer(function(){N.selectInputText(this.editWidget.focusNode);
}))}}),E=s("dijit.InlineEditBox"+(p("dojo-bidi")?"_NoBidi":""),y,{editing:!1,autoSave:!0,
buttonSave:"",buttonCancel:"",renderAsHtml:!1,editor:j,editorWrapper:B,editorParams:{},
disabled:!1,onChange:function(){},onCancel:function(){},width:"100%",value:"",noValueIndicator:p("ie")<=6?"<span style='font-family: wingdings; text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>":"<span style='text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>",
constructor:function(){this.editorParams={}},postMixInProperties:function(){this.inherited(arguments),
this.displayNode=this.srcNodeRef,this.own(c(this.displayNode,f,u.hitch(this,"_onClick")),c(this.displayNode,"mouseover, focus",u.hitch(this,"_onMouseOver")),c(this.displayNode,"mouseout, blur",u.hitch(this,"_onMouseOut"))),
this.displayNode.setAttribute("role","button"),this.displayNode.getAttribute("tabIndex")||this.displayNode.setAttribute("tabIndex",0),
this.value||"value"in this.params||(this.value=u.trim(this.renderAsHtml?this.displayNode.innerHTML:this.displayNode.innerText||this.displayNode.textContent||"")),
this.value||(this.displayNode.innerHTML=this.noValueIndicator),n.add(this.displayNode,"dijitInlineEditBoxDisplayMode");
},setDisabled:function(t){h.deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0"),
this.set("disabled",t)},_setDisabledAttr:function(t){this.domNode.setAttribute("aria-disabled",t?"true":"false"),
t?this.displayNode.removeAttribute("tabIndex"):this.displayNode.setAttribute("tabIndex",0),
n.toggle(this.displayNode,"dijitInlineEditBoxDisplayModeDisabled",t),this._set("disabled",t);
},_onMouseOver:function(){this.disabled||n.add(this.displayNode,"dijitInlineEditBoxDisplayModeHover");
},_onMouseOut:function(){n.remove(this.displayNode,"dijitInlineEditBoxDisplayModeHover");
},_onClick:function(t){this.disabled||(t&&(t.stopPropagation(),t.preventDefault()),
this._onMouseOut(),this.defer("edit"))},edit:function(){if(!this.disabled&&!this.editing){
if(this._set("editing",!0),this._savedTabIndex=d.get(this.displayNode,"tabIndex")||"0",
!this.wrapperWidget){var t=o.create("span",null,this.domNode,"before"),e="string"==typeof this.editorWrapper?u.getObject(this.editorWrapper):this.editorWrapper;
this.wrapperWidget=new e({value:this.value,buttonSave:this.buttonSave,buttonCancel:this.buttonCancel,
dir:this.dir,lang:this.lang,tabIndex:this._savedTabIndex,editor:this.editor,inlineEditBox:this,
sourceStyle:a.getComputedStyle(this.displayNode),save:u.hitch(this,"save"),cancel:u.hitch(this,"cancel"),
textDir:this.textDir},t),this.wrapperWidget._started||this.wrapperWidget.startup(),
this._started||this.startup()}var i=this.wrapperWidget;n.add(this.displayNode,"dijitOffScreen"),
n.remove(i.domNode,"dijitOffScreen"),a.set(i.domNode,{visibility:"visible"}),d.set(this.displayNode,"tabIndex","-1");
var s=i.editWidget,r=this;g(s.onLoadDeferred,u.hitch(i,function(){s.set("displayedValue"in s||"_setDisplayedValueAttr"in s?"displayedValue":"value",r.value),
this.defer(function(){i.saveButton.set("disabled","intermediateChanges"in s),this.focus(),
this._resetValue=this.getValue()})}))}},_onBlur:function(){this.inherited(arguments),
!this.editing},destroy:function(){this.wrapperWidget&&!this.wrapperWidget._destroyed&&(this.wrapperWidget.destroy(),
delete this.wrapperWidget),this.inherited(arguments)},_showText:function(t){var e=this.wrapperWidget;
a.set(e.domNode,{visibility:"hidden"}),n.add(e.domNode,"dijitOffScreen"),n.remove(this.displayNode,"dijitOffScreen"),
d.set(this.displayNode,"tabIndex",this._savedTabIndex),t&&m.focus(this.displayNode);
},save:function(t){if(!this.disabled&&this.editing){this._set("editing",!1);var e=this.wrapperWidget,i=e.getValue();
this.set("value",i),this._showText(t)}},setValue:function(t){return h.deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.","","2.0"),
this.set("value",t)},_setValueAttr:function(t){t=u.trim(t);var e=this.renderAsHtml?t:t.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/\n/g,"<br>");
this.displayNode.innerHTML=e||this.noValueIndicator,this._set("value",t),this._started&&this.defer(function(){
this.onChange(t)})},getValue:function(){return h.deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.","","2.0"),
this.get("value")},cancel:function(t){!this.disabled&&this.editing&&(this._set("editing",!1),
this.defer("onCancel"),this._showText(t))}});return p("dojo-bidi")&&(E=s("dijit.InlineEditBox",E,{
_setValueAttr:function(){this.inherited(arguments),this.applyTextDir(this.displayNode);
}})),E._InlineEditor=B,E});