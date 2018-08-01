define(["dojo/_base/kernel","../../main","dojo/_base/lang","../cells"],function(t,e,i){
return e.grid.cells.TreeCell={formatAggregate:function(t,e,i){var s=this.grid,r=(s.edit.info,
s.aggregator?s.aggregator.getForCell(this,e,t,e===this.level?"cnt":this.parentCell.aggregate):this.value||this.defaultValue),l=this._defaultFormat(r,[r,e-this.level,i,this]),a=this.textDir||this.grid.textDir;
return a&&this._enforceTextDirWithUcc&&(l=this._enforceTextDirWithUcc(a,l)),l},formatIndexes:function(t,e){
var i=this.grid,s=i.edit.info,r=this.get?this.get(t[0],e,t):this.value||this.defaultValue;
if(this.editable&&(this.alwaysEditing||s.rowIndex==t[0]&&s.cell==this))return this.formatEditing(r,t[0],t);
var l=this._defaultFormat(r,[r,t[0],t,this]),a=this.textDir||this.grid.textDir;return a&&this._enforceTextDirWithUcc&&(l=this._enforceTextDirWithUcc(a,l)),
l},getOpenState:function(t){var e=this.grid,i=e.store,s=null;return i.isItem(t)&&(s=t,
t=i.getIdentity(t)),this.openStates||(this.openStates={}),"string"==typeof t&&t in this.openStates||(this.openStates[t]=e.getDefaultOpenState(this,s)),
this.openStates[t]},formatAtLevel:function(e,s,r,l,a,o){i.isArray(e)||(e=[e]);var n="";
if(r>this.level||r===this.level&&l)o.push("dojoxGridSpacerCell"),r===this.level&&o.push("dojoxGridTotalCell"),
n="<span></span>";else if(r<this.level)o.push("dojoxGridSummaryCell"),n='<span class="dojoxGridSummarySpan">'+this.formatAggregate(s,r,e)+"</span>";else{
var h="";if(this.isCollapsable){var d=this.grid.store,g="";d.isItem(s)&&(g=d.getIdentity(s)),
o.push("dojoxGridExpandoCell"),h="<span "+t._scopeName+'Type="dojox.grid._Expando" level="'+r+'" class="dojoxGridExpando"" toggleClass="'+a+'" itemId="'+g+'" cellIdx="'+this.index+'"></span>';
}n=h+this.formatIndexes(e,s)}return this.grid.focus.cell&&this.index==this.grid.focus.cell.index&&e.join("/")==this.grid.focus.rowIndex&&o.push(this.grid.focus.focusClass),
n}},e.grid.cells.TreeCell});