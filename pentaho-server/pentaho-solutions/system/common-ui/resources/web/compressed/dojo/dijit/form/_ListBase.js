define(["dojo/_base/declare","dojo/on","dojo/window"],function(e,t,s){return e("dijit.form._ListBase",null,{
selected:null,_listConnect:function(e,s){var i=this;return i.own(t(i.containerNode,t.selector(function(e,t,s){
return e.parentNode==s},e),function(e){/^touch/.test(e.type)||e.preventDefault(),
i[s](e,this)}))},selectFirstNode:function(){for(var e=this.containerNode.firstChild;e&&"none"==e.style.display;)e=e.nextSibling;
this._setSelectedAttr(e)},selectLastNode:function(){for(var e=this.containerNode.lastChild;e&&"none"==e.style.display;)e=e.previousSibling;
this._setSelectedAttr(e)},selectNextNode:function(){var e=this.selected;if(e){for(var t=e.nextSibling;t&&"none"==t.style.display;)t=t.nextSibling;
t?this._setSelectedAttr(t):this.selectFirstNode()}else this.selectFirstNode()},selectPreviousNode:function(){
var e=this.selected;if(e){for(var t=e.previousSibling;t&&"none"==t.style.display;)t=t.previousSibling;
t?this._setSelectedAttr(t):this.selectLastNode()}else this.selectLastNode()},_setSelectedAttr:function(e){
if(this.selected!=e){var t=this.selected;t&&this.onDeselect(t),e&&(s.scrollIntoView(e),
this.onSelect(e)),this._set("selected",e)}else e&&this.onSelect(e)}})});