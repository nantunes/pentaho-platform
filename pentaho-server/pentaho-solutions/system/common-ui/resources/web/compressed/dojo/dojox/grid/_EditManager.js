define(["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect","dojo/_base/sniff","./util"],function(i,t,o,n,s,e){
return o("dojox.grid._EditManager",null,{constructor:function(t){this.grid=t,this.connections=s("ie")?[n.connect(document.body,"onfocus",i.hitch(this,"_boomerangFocus"))]:[],
this.connections.push(n.connect(this.grid,"onBlur",this,"apply")),this.connections.push(n.connect(this.grid,"prerender",this,"_onPreRender"));
},info:{},destroy:function(){t.forEach(this.connections,n.disconnect)},cellFocus:function(i,t){
this.grid.singleClickEdit||this.isEditRow(t)?this.setEditCell(i,t):this.apply(),(this.isEditing()||i&&i.editable&&i.alwaysEditing)&&this._focusEditor(i,t);
},rowClick:function(i){this.isEditing()&&!this.isEditRow(i.rowIndex)&&this.apply();
},styleRow:function(i){i.index==this.info.rowIndex&&(i.customClasses+=" dojoxGridRowEditing");
},dispatchEvent:function(i){var t=i.cell,o=t&&t.editable?t:0;return o&&o.dispatchEvent(i.dispatch,i);
},isEditing:function(){return void 0!==this.info.rowIndex},isEditCell:function(i,t){
return this.info.rowIndex===i&&this.info.cell.index==t},isEditRow:function(i){return this.info.rowIndex===i;
},setEditCell:function(i,t){!this.isEditCell(t,i.index)&&this.grid.canEdit&&this.grid.canEdit(i,t)&&this.start(i,t,this.isEditRow(t)||i.editable);
},_focusEditor:function(i,t){e.fire(i,"focus",[t])},focusEditor:function(){this.isEditing()&&this._focusEditor(this.info.cell,this.info.rowIndex);
},_boomerangWindow:500,_shouldCatchBoomerang:function(){return this._catchBoomerang>(new Date).getTime();
},_boomerangFocus:function(){this._shouldCatchBoomerang()&&(this.grid.focus.focusGrid(),
this.focusEditor(),this._catchBoomerang=0)},_doCatchBoomerang:function(){s("ie")&&(this._catchBoomerang=(new Date).getTime()+this._boomerangWindow);
},start:function(i,t,o){this._isValidInput()&&(this.grid.beginUpdate(),this.editorApply(),
this.isEditing()&&!this.isEditRow(t)&&(this.applyRowEdit(),this.grid.updateRow(t)),
o?(this.info={cell:i,rowIndex:t},this.grid.doStartEdit(i,t),this.grid.updateRow(t)):this.info={},
this.grid.endUpdate(),this.grid.focus.focusGrid(),this._focusEditor(i,t),this._doCatchBoomerang());
},_editorDo:function(i){var t=this.info.cell;t&&t.editable&&t[i](this.info.rowIndex);
},editorApply:function(){this._editorDo("apply")},editorCancel:function(){this._editorDo("cancel");
},applyCellEdit:function(i,t,o){this.grid.canEdit(t,o)&&this.grid.doApplyCellEdit(i,o,t.field);
},applyRowEdit:function(){this.grid.doApplyEdit(this.info.rowIndex,this.info.cell.field);
},apply:function(){this.isEditing()&&this._isValidInput()&&(this.grid.beginUpdate(),
this.editorApply(),this.applyRowEdit(),this.info={},this.grid.endUpdate(),this.grid.focus.focusGrid(),
this._doCatchBoomerang())},cancel:function(){this.isEditing()&&(this.grid.beginUpdate(),
this.editorCancel(),this.info={},this.grid.endUpdate(),this.grid.focus.focusGrid(),
this._doCatchBoomerang())},save:function(i,t){var o=this.info.cell;!this.isEditRow(i)||t&&o.view!=t||!o.editable||o.save(o,this.info.rowIndex);
},restore:function(i,t){var o=this.info.cell;this.isEditRow(t)&&o.view==i&&o.editable&&o.restore(this.info.rowIndex);
},_isValidInput:function(){var i=(this.info.cell||{}).widget;return i&&i.isValid?(i.focused=!0,
i.isValid(!0)):!0},_onPreRender:function(){this.isEditing()&&(this.info.value=this.info.cell.getValue());
}})});