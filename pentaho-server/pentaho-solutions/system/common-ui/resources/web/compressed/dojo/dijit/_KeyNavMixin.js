define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dijit/registry","dijit/_FocusMixin"],function(t,e,i,s,o,h,n,r){
return e("dijit._KeyNavMixin",r,{tabIndex:"0",childSelector:null,postCreate:function(){
if(this.inherited(arguments),i.set(this.domNode,"tabIndex",this.tabIndex),!this._keyNavCodes){
var t=this._keyNavCodes={};t[s.HOME]=o.hitch(this,"focusFirstChild"),t[s.END]=o.hitch(this,"focusLastChild"),
t[this.isLeftToRight()?s.LEFT_ARROW:s.RIGHT_ARROW]=o.hitch(this,"_onLeftArrow"),t[this.isLeftToRight()?s.RIGHT_ARROW:s.LEFT_ARROW]=o.hitch(this,"_onRightArrow"),
t[s.UP_ARROW]=o.hitch(this,"_onUpArrow"),t[s.DOWN_ARROW]=o.hitch(this,"_onDownArrow");
}var e=this,r="string"==typeof this.childSelector?this.childSelector:o.hitch(this,"childSelector");
this.own(h(this.domNode,"keypress",o.hitch(this,"_onContainerKeypress")),h(this.domNode,"keydown",o.hitch(this,"_onContainerKeydown")),h(this.domNode,"focus",o.hitch(this,"_onContainerFocus")),h(this.containerNode,h.selector(r,"focusin"),function(t){
e._onChildFocus(n.getEnclosingWidget(this),t)}))},_onLeftArrow:function(){},_onRightArrow:function(){},
_onUpArrow:function(){},_onDownArrow:function(){},focus:function(){this.focusFirstChild();
},_getFirstFocusableChild:function(){return this._getNextFocusableChild(null,1)},
_getLastFocusableChild:function(){return this._getNextFocusableChild(null,-1)},focusFirstChild:function(){
this.focusChild(this._getFirstFocusableChild())},focusLastChild:function(){this.focusChild(this._getLastFocusableChild());
},focusChild:function(t,e){t&&(this.focusedChild&&t!==this.focusedChild&&this._onChildBlur(this.focusedChild),
t.set("tabIndex",this.tabIndex),t.focus(e?"end":"start"))},_onContainerFocus:function(t){
t.target!==this.domNode||this.focusedChild||this.focus()},_onFocus:function(){i.set(this.domNode,"tabIndex","-1"),
this.inherited(arguments)},_onBlur:function(t){i.set(this.domNode,"tabIndex",this.tabIndex),
this.focusedChild&&(this.focusedChild.set("tabIndex","-1"),this.lastFocusedChild=this.focusedChild,
this._set("focusedChild",null)),this.inherited(arguments)},_onChildFocus:function(t){
t&&t!=this.focusedChild&&(this.focusedChild&&!this.focusedChild._destroyed&&this.focusedChild.set("tabIndex","-1"),
t.set("tabIndex",this.tabIndex),this.lastFocused=t,this._set("focusedChild",t))},
_searchString:"",multiCharSearchDuration:1e3,onKeyboardSearch:function(t,e,i,s){t&&this.focusChild(t);
},_keyboardSearchCompare:function(t,e){var i=t.domNode,s=t.label||(i.focusNode?i.focusNode.label:"")||i.innerText||i.textContent||"",o=s.replace(/^\s+/,"").substr(0,e.length).toLowerCase();
return e.length&&o==e?-1:0},_onContainerKeydown:function(t){var e=this._keyNavCodes[t.keyCode];
e?(e(t,this.focusedChild),t.stopPropagation(),t.preventDefault(),this._searchString=""):t.keyCode==s.SPACE&&this._searchTimer&&!(t.ctrlKey||t.altKey||t.metaKey)&&(t.stopImmediatePropagation(),
t.preventDefault(),this._keyboardSearch(t," "))},_onContainerKeypress:function(t){
t.charCode<s.SPACE||t.ctrlKey||t.altKey||t.metaKey||t.charCode==s.SPACE&&this._searchTimer||(t.preventDefault(),
t.stopPropagation(),this._keyboardSearch(t,String.fromCharCode(t.charCode).toLowerCase()));
},_keyboardSearch:function(t,e){var i,s=null,h=0,n=o.hitch(this,function(){this._searchTimer&&this._searchTimer.remove(),
this._searchString+=e;var t=/^(.)\1*$/.test(this._searchString),o=t?1:this._searchString.length;
i=this._searchString.substr(0,o),this._searchTimer=this.defer(function(){this._searchTimer=null,
this._searchString=""},this.multiCharSearchDuration);var n=this.focusedChild||null;
if(1!=o&&n||(n=this._getNextFocusableChild(n,1))){var r=n;do{var d=this._keyboardSearchCompare(n,i);
if(d&&0==h++&&(s=n),-1==d){h=-1;break}n=this._getNextFocusableChild(n,1)}while(n!=r);
}});n(),this.onKeyboardSearch(s,t,i,h)},_onChildBlur:function(){},_getNextFocusableChild:function(t,e){
var i=t;do{if(t)t=this._getNext(t,e);else if(t=this[e>0?"_getFirst":"_getLast"](),
!t)break;if(null!=t&&t!=i&&t.isFocusable())return t}while(t!=i);return null},_getFirst:function(){
return null},_getLast:function(){return null},_getNext:function(t,e){if(t)for(t=t.domNode;t;)if(t=t[0>e?"previousSibling":"nextSibling"],
t&&"getAttribute"in t){var i=n.byNode(t);if(i)return i}return null}})});