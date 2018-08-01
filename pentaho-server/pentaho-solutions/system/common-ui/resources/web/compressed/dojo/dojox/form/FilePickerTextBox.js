define(["dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/window","dijit/focus","dijit/registry","dijit/form/_TextBoxMixin","dijit/form/ValidationTextBox","dijit/_HasDropDown","dojox/widget/FilePicker","dojo/text!./resources/FilePickerTextBox.html","dojo/_base/declare","dojo/keys"],function(t,e,s,i,o,n,h,r,u,a,l,c,d){
return c("dojox.form.FilePickerTextBox",[r,u],{baseClass:"dojoxFilePickerTextBox",
templateString:l,searchDelay:500,valueItem:null,numPanes:2.25,postMixInProperties:function(){
this.inherited(arguments),this.dropDown=new a(this.constraints)},postCreate:function(){
this.inherited(arguments),this.connect(this.dropDown,"onChange",this._onWidgetChange),
this.connect(this.focusNode,"onblur","_focusBlur"),this.connect(this.focusNode,"onfocus","_focusFocus"),
this.connect(this.focusNode,"ondblclick",function(){h.selectInputText(this.focusNode);
})},_setValueAttr:function(e,s,i){if(!this._searchInProgress){this.inherited(arguments),
e=e||"";var o=this.dropDown.get("pathValue")||"";if(e!==o){this._skip=!0;var n=t.hitch(this,"_setBlurValue");
this.dropDown._setPathValueAttr(e,!i,this._settingBlurValue?n:null)}}},_onWidgetChange:function(t){
if(!t&&this.focusNode.value)this._hasValidPath=!1,this.focusNode.value="";else{this.valueItem=t;
var e=this.dropDown._getPathValueAttr(t);e&&(this._hasValidPath=!0),this._skip||this._setValueAttr(e,void 0,!0),
delete this._skip}this.validate()},startup:function(){this.dropDown._started||this.dropDown.startup(),
this.inherited(arguments)},openDropDown:function(){this.dropDown.domNode.style.width="0px",
"minPaneWidth"in(this.constraints||{})||this.dropDown.set("minPaneWidth",this.domNode.offsetWidth/this.numPanes),
this.inherited(arguments)},toggleDropDown:function(){this.inherited(arguments),this._opened&&this.dropDown.set("pathValue",this.get("value"));
},_focusBlur:function(e){e.explicitOriginalTarget!=this.focusNode||this._allowBlur?this._menuFocus&&(this.dropDown._updateClass(this._menuFocus,"Item",{
Hover:!1}),delete this._menuFocus):window.setTimeout(t.hitch(this,function(){this._allowBlur||this.focus();
}),1)},_focusFocus:function(t){this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{
Hover:!1}),delete this._menuFocus;var e=o.curNode;e&&(e=n.byNode(e),e&&(this._menuFocus=e.domNode)),
this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!0}),delete this._allowBlur;
},_onBlur:function(){this._allowBlur=!0,delete this.dropDown._savedFocus,this.inherited(arguments);
},_setBlurValue:function(){this.dropDown&&!this._settingBlurValue?(this._settingBlurValue=!0,
this.set("value",this.focusNode.value)):(delete this._settingBlurValue,this.inherited(arguments));
},parse:function(t,e){if(this._hasValidPath||this._hasSelection)return t;var s=this.dropDown,i=s.topDir,o=s.pathSeparator,n=s.get("pathValue"),h=function(t){
return i.length&&0===t.indexOf(i)&&(t=t.substring(i.length)),o&&t[t.length-1]==o&&(t=t.substring(0,t.length-1)),
t};n=h(n);var r=h(t);return r==n?t:void 0},_startSearchFromInput:function(){var s=this.dropDown,o=this.focusNode,n=o.value,r=n,u=s.topDir;
this._hasSelection&&h.selectInputText(o,r.length),this._hasSelection=!1,u.length&&0===n.indexOf(u)&&(n=n.substring(u.length));
var a=n.split(s.pathSeparator),l=t.hitch(this,function(n){var u,c=a[n],d=s.getChildren()[n];
this._searchInProgress=!0;var _=t.hitch(this,function(){delete this._searchInProgress;
});if(!c&&!d||this._opened||this.toggleDropDown(),c&&d){var f=t.hitch(this,function(){
u&&this.disconnect(u),delete u;var t=d._menu.getChildren(),f=e.filter(t,function(t){
return t.label==c})[0],p=e.filter(t,function(t){return 0===t.label.indexOf(c)})[0];
if(f&&(a.length>n+1&&f.children||!f.children))n++,d._menu.onItemClick(f,{type:"internal",
stopPropagation:function(){},preventDefault:function(){}}),a[n]?l(n):_();else{if(d._setSelected(null),
p&&a.length===n+1){s._setInProgress=!0,s._removeAfter(d),delete s._setInProgress;var g=p.label;
p.children&&(g+=s.pathSeparator),g=g.substring(c.length),window.setTimeout(function(){
i.scrollIntoView(p.domNode)},1),o.value=r+g,h.selectInputText(o,r.length),this._hasSelection=!0;
try{p.focusNode.focus()}catch(m){}}else this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{
Hover:!1,Focus:!1}),delete this._menuFocus;_()}});d.isLoaded?f():u=this.connect(d,"onLoad",f);
}else d&&(d._setSelected(null),s._setInProgress=!0,s._removeAfter(d),delete s._setInProgress),
_()});l(0)},_onKey:function(e){if(!this.disabled&&!this.readOnly){var i=e.charOrCode;
if(i==d.DOWN_ARROW&&(this._allowBlur=!0),i==d.ENTER&&this._opened)return this.dropDown.onExecute(),
h.selectInputText(this.focusNode,this.focusNode.value.length),this._hasSelection=!1,
void s.stop(e);if((i==d.RIGHT_ARROW||i==d.LEFT_ARROW||i==d.TAB)&&this._hasSelection)return this._startSearchFromInput(),
void s.stop(e);this.inherited(arguments);var o=!1;i!=d.BACKSPACE&&i!=d.DELETE||!this._hasSelection?o=i==d.BACKSPACE||i==d.DELETE||" "==i?!0:""!==e.keyChar:this._hasSelection=!1,
this._searchTimer&&window.clearTimeout(this._searchTimer),delete this._searchTimer,
o&&(this._hasValidPath=!1,this._hasSelection=!1,this._searchTimer=window.setTimeout(t.hitch(this,"_startSearchFromInput"),this.searchDelay+1));
}}})});