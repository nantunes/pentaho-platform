define(["dojo/_base/declare","./registry"],function(e,n){return e("dijit._Contained",null,{
_getSibling:function(e){var i=this.domNode;do i=i[e+"Sibling"];while(i&&1!=i.nodeType);
return i&&n.byNode(i)},getPreviousSibling:function(){return this._getSibling("previous");
},getNextSibling:function(){return this._getSibling("next")},getIndexInParent:function(){
var e=this.getParent();return e&&e.getIndexOfChild?e.getIndexOfChild(this):-1}})});