define(["dojo/_base/declare","dojo/_base/lang","../_Plugin","./Dialog","./filter/FilterLayer","./filter/FilterBar","./filter/FilterDefDialog","./filter/FilterStatusTip","./filter/ClearFilterConfirm","../../EnhancedGrid","dojo/i18n!../nls/Filter"],function(e,t,i,r,l,n,o,s,a,f,h){
var u=e("dojox.grid.enhanced.plugins.Filter",i,{name:"filter",constructor:function(e,i){
this.grid=e,this.nls=h,i=this.args=t.isObject(i)?i:{},("number"!=typeof i.ruleCount||i.ruleCount<0)&&(i.ruleCount=3);
var l=this.ruleCountToConfirmClearFilter=i.ruleCountToConfirmClearFilter;void 0===l&&(this.ruleCountToConfirmClearFilter=2),
this._wrapStore();var f={plugin:this};this.clearFilterDialog=new r({refNode:this.grid.domNode,
title:this.nls.clearFilterDialogTitle,content:new a(f)}),this.filterDefDialog=new o(f),
this.filterBar=new n(f),this.filterStatusTip=new s(f),e.onFilterDefined=function(){},
this.connect(e.layer("filter"),"onFilterDefined",function(t){e.onFilterDefined(e.getFilter(),e.getFilterRelation());
})},destroy:function(){this.inherited(arguments);try{this.grid.unwrap("filter"),this.filterBar.destroyRecursive(),
this.filterBar=null,this.clearFilterDialog.destroyRecursive(),this.clearFilterDialog=null,
this.filterStatusTip.destroy(),this.filterStatusTip=null,this.filterDefDialog.destroy(),
this.filterDefDialog=null,this.grid=null,this.args=null}catch(e){console.warn("Filter.destroy() error:",e);
}},_wrapStore:function(){var e=this.grid,i=this.args,r=i.isServerSide?new l.ServerSideFilterLayer(i):new l.ClientSideFilterLayer({
cacheSize:i.filterCacheSize,fetchAll:i.fetchAllOnFirstFilter,getter:this._clientFilterGetter
});l.wrap(e,"_storeLayerFetch",r),this.connect(e,"_onDelete",t.hitch(r,"invalidate"));
},onSetStore:function(e){this.filterDefDialog.clearFilter(!0)},_clientFilterGetter:function(e,t,i){
return t.get(i,e)}});return f.registerPlugin(u),u});