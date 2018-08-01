define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/Stateful"],function(e,t,s,l){
return e("dojox.widget.Selection",l,{constructor:function(){this.selectedItems=[];
},selectionMode:"single",_setSelectionModeAttr:function(e){"none"!=e&&"single"!=e&&"multiple"!=e&&(e="single"),
e!=this.selectionMode&&(this.selectionMode=e,"none"==e?this.set("selectedItems",null):"single"==e&&this.set("selectedItem",this.selectedItem));
},selectedItem:null,_setSelectedItemAttr:function(e){this.selectedItem!=e&&(this._set("selectedItem",e),
this.set("selectedItems",e?[e]:null))},selectedItems:null,_setSelectedItemsAttr:function(e){
var t=this.selectedItems;this.selectedItems=e,this.selectedItem=null,null!=t&&t.length>0&&this.updateRenderers(t,!0),
this.selectedItems&&this.selectedItems.length>0&&(this.selectedItem=this.selectedItems[0],
this.updateRenderers(this.selectedItems,!0))},_getSelectedItemsAttr:function(){return null==this.selectedItems?[]:this.selectedItems.concat();
},isItemSelected:function(e){return null==this.selectedItems||0==this.selectedItems.length?!1:t.some(this.selectedItems,s.hitch(this,function(t){
return this.getIdentity(t)==this.getIdentity(e)}))},getIdentity:function(e){},setItemSelected:function(e,s){
if("none"!=this.selectionMode&&null!=e){var l=this.get("selectedItems");this.get("selectedItems");
if("single"==this.selectionMode)s?this.set("selectedItem",e):this.isItemSelected(e)&&this.set("selectedItems",null);else if(s){
if(this.isItemSelected(e))return;null==l?l=[e]:l.unshift(e),this.set("selectedItems",l);
}else{var i=t.filter(l,function(t){return t.id!=e.id});if(null==i||i.length==l.length)return;
this.set("selectedItems",i)}}},selectFromEvent:function(e,t,s,l){if("none"==this.selectionMode)return!1;
var i,n=this.get("selectedItem"),c=t?this.isItemSelected(t):!1;return null==t?e.ctrlKey||null==this.selectedItem||(this.set("selectedItem",null),
i=!0):"multiple"==this.selectionMode?e.ctrlKey?(this.setItemSelected(t,!c),i=!0):(this.set("selectedItem",t),
i=!0):e.ctrlKey?(this.set("selectedItem",c?null:t),i=!0):c||(this.set("selectedItem",t),
i=!0),l&&i&&this.dispatchChange(n,this.get("selectedItem"),s,e),i},dispatchChange:function(e,t,s,l){
this.onChange({oldValue:e,newValue:t,renderer:s,triggerEvent:l})},onChange:function(){}
})});