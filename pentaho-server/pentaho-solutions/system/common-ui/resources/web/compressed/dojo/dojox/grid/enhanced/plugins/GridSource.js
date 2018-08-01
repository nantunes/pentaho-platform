define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dnd/Source","./DnD"],function(n,e,i,r,t){
var o=function(n){for(var e=n[0],i=1;i<n.length;++i)e=e.concat(n[i]);return e},s=i.getObject("dojox.grid.enhanced.plugins.GridDnDSource");
return n("dojox.grid.enhanced.plugins.GridSource",r,{accept:["grid/cells","grid/rows","grid/cols","text"],
insertNodesForGrid:!1,markupFactory:function(n,e){return cls=i.getObject("dojox.grid.enhanced.plugins.GridSource"),
new cls(e,n)},checkAcceptance:function(n,i){if(n instanceof s){if(i[0]){var r=n.getItem(i[0].id);
if(r&&(e.indexOf(r.type,"grid/rows")>=0||e.indexOf(r.type,"grid/cells")>=0)&&!n.dndPlugin._allDnDItemsLoaded())return!1;
}this.sourcePlugin=n.dndPlugin}return this.inherited(arguments)},onDraggingOver:function(){
this.sourcePlugin&&(this.sourcePlugin._isSource=!0)},onDraggingOut:function(){this.sourcePlugin&&(this.sourcePlugin._isSource=!1);
},onDropExternal:function(n,i,r){if(n instanceof s){var t,c=e.map(i,function(e){return n.getItem(e.id).data;
}),d=n.getItem(i[0].id),u=d.dndPlugin.grid,g=d.type[0];try{switch(g){case"grid/cells":
i[0].innerHTML=this.getCellContent(u,c[0].min,c[0].max)||"",this.onDropGridCells(u,c[0].min,c[0].max);
break;case"grid/rows":t=o(c),i[0].innerHTML=this.getRowContent(u,t)||"",this.onDropGridRows(u,t);
break;case"grid/cols":t=o(c),i[0].innerHTML=this.getColumnContent(u,t)||"",this.onDropGridColumns(u,t);
}this.insertNodesForGrid&&(this.selectNone(),this.insertNodes(!0,[i[0]],this.before,this.current)),
d.dndPlugin.onDragOut(!r)}catch(l){console.warn("GridSource.onDropExternal() error:",l);
}}else this.inherited(arguments)},getCellContent:function(n,e,i){},getRowContent:function(n,e){},
getColumnContent:function(n,e){},onDropGridCells:function(n,e,i){},onDropGridRows:function(n,e){},
onDropGridColumns:function(n,e){}})});