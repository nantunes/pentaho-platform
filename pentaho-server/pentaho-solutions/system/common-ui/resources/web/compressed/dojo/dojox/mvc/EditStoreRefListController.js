define(["dojo/_base/declare","dojo/_base/lang","./getPlainValue","./EditStoreRefController","./ListController"],function(o,t,r,e,i){
return o("dojox.mvc.EditStoreRefListController",[e,i],{commitCurrent:function(){for(var o=this.cursor[this.idProperty],t=0;t<this.originalModel.length;t++)if(this.originalModel[t][this.idProperty]==o){
this.originalModel.set(t,this.cloneModel(this.cursor));break}this.store.put(this.cursor);
}})});