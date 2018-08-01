define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/keys","../_Plugin","../../EnhancedGrid"],function(e,t,n,o,i,d,s,r){
var u=e("dojox.grid.enhanced.plugins.Menu",s,{name:"menus",types:["headerMenu","rowMenu","cellMenu","selectedRegionMenu"],
constructor:function(){var e=this.grid;e.showMenu=n.hitch(e,this.showMenu),e._setRowMenuAttr=n.hitch(this,"_setRowMenuAttr"),
e._setCellMenuAttr=n.hitch(this,"_setCellMenuAttr"),e._setSelectedRegionMenuAttr=n.hitch(this,"_setSelectedRegionMenuAttr");
},onStartUp:function(){var e,n=this.option;for(e in n)t.indexOf(this.types,e)>=0&&n[e]&&this._initMenu(e,n[e]);
},_initMenu:function(e,t){var n=this.grid;if(!n[e]){var o=this._getMenuWidget(t);if(!o)return;
n.set(e,o),"headerMenu"!=e?o._scheduleOpen=function(){}:n.setupHeaderMenu()}},_getMenuWidget:function(e){
return e instanceof dijit.Menu?e:dijit.byId(e)},_setRowMenuAttr:function(e){this._setMenuAttr(e,"rowMenu");
},_setCellMenuAttr:function(e){this._setMenuAttr(e,"cellMenu")},_setSelectedRegionMenuAttr:function(e){
this._setMenuAttr(e,"selectedRegionMenu")},_setMenuAttr:function(e,t){var n=this.grid,o=n.domNode;
return e&&e instanceof dijit.Menu?(n[t]&&n[t].unBindDomNode(o),n[t]=e,void n[t].bindDomNode(o)):void console.warn(t," of Grid ",n.id," is not existed!");
},showMenu:function(e){var t=e.cellNode&&o.hasClass(e.cellNode,"dojoxGridRowSelected")||e.rowNode&&(o.hasClass(e.rowNode,"dojoxGridRowSelected")||o.hasClass(e.rowNode,"dojoxGridRowbarSelected"));
if(t&&this.selectedRegionMenu)return void this.onSelectedRegionContextMenu(e);var n={
target:e.target,coords:e.keyCode!==d.F10&&"pageX"in e?{x:e.pageX,y:e.pageY}:null};
return this.rowMenu&&(!this.cellMenu||this.selection.isSelected(e.rowIndex)||e.rowNode&&o.hasClass(e.rowNode,"dojoxGridRowbar"))?(this.rowMenu._openMyself(n),
void i.stop(e)):(this.cellMenu&&this.cellMenu._openMyself(n),void i.stop(e))},destroy:function(){
var e=this.grid;e.headerMenu&&e.headerMenu.unBindDomNode(e.viewsHeaderNode),e.rowMenu&&e.rowMenu.unBindDomNode(e.domNode),
e.cellMenu&&e.cellMenu.unBindDomNode(e.domNode),e.selectedRegionMenu&&e.selectedRegionMenu.destroy(),
this.inherited(arguments)}});return r.registerPlugin(u),u});