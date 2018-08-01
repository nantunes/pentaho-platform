dojo.provide("dojox.data.StoreExplorer"),dojo.require("dojox.grid.DataGrid"),dojo.require("dojox.data.ItemExplorer"),
dojo.require("dijit.layout.BorderContainer"),dojo.require("dijit.layout.ContentPane"),
dojo.declare("dojox.data.StoreExplorer",dijit.layout.BorderContainer,{constructor:function(e){
dojo.mixin(this,e)},store:null,columnWidth:"",stringQueries:!1,showAllColumns:!1,
postCreate:function(){function e(e,t){var o=new dijit.form.Button({label:e});return r.containerNode.appendChild(o.domNode),
o.onClick=t,o}var t=this;this.inherited(arguments);var r=new dijit.layout.ContentPane({
region:"top"}).placeAt(this),o=r.containerNode.appendChild(document.createElement("span"));
o.innerHTML="Enter query: &nbsp;",o.id="queryText";var n=r.containerNode.appendChild(document.createElement("input"));
n.type="text",n.id="queryTextBox",e("Query",function(){var e=n.value;t.setQuery(t.stringQueries?e:dojo.fromJson(e));
}),r.containerNode.appendChild(document.createElement("span")).innerHTML="&nbsp;&nbsp;&nbsp;";
var i=e("Create New",dojo.hitch(this,"createNew")),a=e("Delete",function(){for(var e=d.selection.getSelected(),r=0;r<e.length;r++)t.store.deleteItem(e[r]);
});this.setItemName=function(e){i.attr("label","<img style='width:12px; height:12px' src='"+dojo.moduleUrl("dijit.themes.tundra.images","dndCopy.png")+"' /> Create New "+e),
a.attr("label","Delete "+e)},e("Save",function(){t.store.save({onError:function(e){
alert(e)}}),t.tree.refreshItem()}),e("Revert",function(){t.store.revert()}),e("Add Column",function(){
var e=prompt("Enter column name:","property");e&&(t.gridLayout.push({field:e,name:e,
formatter:dojo.hitch(t,"_formatCell"),editable:!0}),t.grid.attr("structure",t.gridLayout));
});var s=new dijit.layout.ContentPane({region:"center"}).placeAt(this),d=this.grid=new dojox.grid.DataGrid({
store:this.store});s.attr("content",d),d.canEdit=function(e,t){var r=this._copyAttr(t,e.field);
return!(r&&"object"==typeof r)||r instanceof Date};var l=new dijit.layout.ContentPane({
region:"trailing",splitter:!0,style:"width: 300px"}).placeAt(this),c=this.tree=new dojox.data.ItemExplorer({
store:this.store});l.attr("content",c),dojo.connect(d,"onCellClick",function(){var e=d.selection.getSelected()[0];
c.setItem(e)}),this.gridOnFetchComplete=d._onFetchComplete,this.setStore(this.store);
},setQuery:function(e,t){this.grid.setQuery(e,t)},_formatCell:function(e){return this.store.isItem(e)?this.store.getLabel(e)||this.store.getIdentity(e):e;
},setStore:function(e){function t(e){return r._formatCell(e)}this.store=e;var r=this,o=this.grid;
o._pending_requests[0]=!1;var n=this.gridOnFetchComplete;o._onFetchComplete=function(i,a){
var s,d,l,c,u,h,p=r.gridLayout=[],m=e.getIdentityAttributes();for(c=0;c<m.length;c++)d=m[c],
p.push({field:d,name:d,_score:100,formatter:t,editable:!1});for(c=0;l=i[c++];){var f=e.getAttributes(l);
for(h=0;d=f[h++];){var g=!1;for(u=0;s=p[u++];)if(s.field==d){s._score++,g=!0;break;
}g||p.push({field:d,name:d,_score:1,formatter:t,styles:"white-space:nowrap; ",editable:!0
})}}if(p=p.sort(function(e,t){return t._score-e._score}),!r.showAllColumns)for(u=0;s=p[u];u++)if(s._score<i.length/40*u){
p.splice(u,p.length-u);break}for(u=0;s=p[u++];)s.width=r.columnWidth||Math.round(100/p.length)+"%";
o._onFetchComplete=n,o.attr("structure",p);n.apply(this,arguments)},o.setStore(e),
this.queryOptions={cache:!0},this.tree.setStore(e)},createNew:function(){var e=prompt("Enter any properties (in JSON literal form) to put in the new item (passed to the newItem constructor):","{ }");
if(e)try{this.store.newItem(dojo.fromJson(e))}catch(t){alert(t)}}});