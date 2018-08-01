define(["dojo/_base/array","dojo/_base/lang","dojo/_base/declare","dojo/on","dojo/_base/event","dojo/keys"],function(e,t,i,s,d,o){
return i("dojox.calendar.Keyboard",null,{keyboardUpDownUnit:"minute",keyboardUpDownSteps:15,
keyboardLeftRightUnit:"day",keyboardLeftRightSteps:1,allDayKeyboardUpDownUnit:"day",
allDayKeyboardUpDownSteps:7,allDayKeyboardLeftRightUnit:"day",allDayKeyboardLeftRightSteps:1,
postCreate:function(){this.inherited(arguments),this._viewHandles.push(s(this.domNode,"keydown",t.hitch(this,this._onKeyDown)));
},resizeModifier:"ctrl",maxScrollAnimationDuration:1e3,tabIndex:"0",focusedItem:null,
_isItemFocused:function(e){return null!=this.focusedItem&&this.focusedItem.id==e.id;
},_setFocusedItemAttr:function(e){if(e!=this.focusedItem){var t=this.focusedItem;this._set("focusedItem",e),
this.updateRenderers([t,this.focusedItem],!0),this.onFocusChange({oldValue:t,newValue:e
})}null!=e&&(null!=this.owner&&null!=this.owner.get("focusedItem")&&this.owner.set("focusedItem",null),
null!=this._secondarySheet&&null!=this._secondarySheet.set("focusedItem")&&this._secondarySheet.set("focusedItem",null));
},onFocusChange:function(e){},showFocus:!1,_focusNextItem:function(i){if(!this.renderData||!this.renderData.items||0==this.renderData.items.length)return null;
var s=-1,d=this.renderData.items,o=d.length-1,n=this.get("focusedItem");null==n?s=i>0?0:o:(e.some(d,t.hitch(this,function(e,t){
var i=e.id==n.id;return i&&(s=t),i})),s=this._focusNextItemImpl(i,s,o));for(var r=!1,a=-1;a!=s&&(!r||0!=s);){
r||0!=s||(r=!0);var h=d[s];if(null!=this.itemToRenderer[h.id])return void this.set("focusedItem",h);
a=s,s=this._focusNextItemImpl(i,s,o)}},_focusNextItemImpl:function(e,t,i){if(-1==t)t=e>0?0:i;else{
if(0==t&&-1==e||t==i&&1==e)return t;t=e>0?++t:--t}return t},_handlePrevNextKeyCode:function(e,t){
this.isLeftToRight()||(t=1==t?-1:1),this.showFocus=!0,this._focusNextItem(t);var i=this.get("focusedItem");
!e.ctrlKey&&i&&this.set("selectedItem",i),i&&this.ensureVisibility(i.startTime,i.endTime,"both",void 0,this.maxScrollAnimationDuration);
},_keyboardItemEditing:function(e,t){d.stop(e);var i,s,o=this._edProps;o.editedItem.allDay||this.roundToDay||"label"==o.rendererKind?(i="up"==t||"down"==t?this.allDayKeyboardUpDownUnit:this.allDayKeyboardLeftRightUnit,
s="up"==t||"down"==t?this.allDayKeyboardUpDownSteps:this.allDayKeyboardLeftRightSteps):(i="up"==t||"down"==t?this.keyboardUpDownUnit:this.keyboardLeftRightUnit,
s="up"==t||"down"==t?this.keyboardUpDownSteps:this.keyboardLeftRightSteps),("up"==t||!this.isLeftToRight()&&"right"==t||this.isLeftToRight()&&"left"==t)&&(s=-s);
var n=e[this.resizeModifier+"Key"]?"resizeEnd":"move",r="resizeEnd"==n?o.editedItem.endTime:o.editedItem.startTime,a=this.renderData.dateModule.add(r,i,s);
this._startItemEditingGesture([r],n,"keyboard",e),this._moveOrResizeItemGesture([a],"keyboard",e),
this._endItemEditingGesture(n,"keyboard",e,!1),"move"==n&&-1==this.renderData.dateModule.compare(a,r)?this.ensureVisibility(o.editedItem.startTime,o.editedItem.endTime,"start"):this.ensureVisibility(o.editedItem.startTime,o.editedItem.endTime,"end");
},_onKeyDown:function(e){var t=this.get("focusedItem");switch(e.keyCode){case o.ESCAPE:
this._isEditing&&(this._editingGesture&&this._endItemEditingGesture("keyboard",e,!0),
this._endItemEditing("keyboard",!0),this._edProps=null);break;case o.SPACE:d.stop(e),
null!=t&&this.setItemSelected(t,e.ctrlKey?!this.isItemSelected(t):!0);break;case o.ENTER:
if(d.stop(e),null!=t)if(this._isEditing)this._endItemEditing("keyboard",!1);else{
var i=this.itemToRenderer[t.id];i&&i.length>0&&this.isItemEditable(t,i[0].kind)&&(this._edProps={
renderer:i[0],rendererKind:i[0].kind,tempEditedItem:t,liveLayout:this.liveLayout},
this.set("selectedItem",t),this._startItemEditing(t,"keyboard"))}break;case o.LEFT_ARROW:
d.stop(e),this._isEditing?this._keyboardItemEditing(e,"left"):this._handlePrevNextKeyCode(e,-1);
break;case o.RIGHT_ARROW:d.stop(e),this._isEditing?this._keyboardItemEditing(e,"right"):this._handlePrevNextKeyCode(e,1);
break;case o.UP_ARROW:this._isEditing?this._keyboardItemEditing(e,"up"):this.scrollable&&this.scrollView(-1);
break;case o.DOWN_ARROW:this._isEditing?this._keyboardItemEditing(e,"down"):this.scrollable&&this.scrollView(1);
}}})});