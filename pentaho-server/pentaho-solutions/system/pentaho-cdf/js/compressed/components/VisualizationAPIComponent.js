define(["amd!../lib/underscore","./UnmanagedComponent","pentaho/data/Table","pentaho/visual/base/View","pentaho/shim/es6-promise"],function(i,e,t,n,s){
"use strict";return e.extend({vizView:null,update:function(){this.beginQuery(this.queryDefinition,this.render);
},render:function(e){var t=this.vizView?this.__syncVizViewAsync(e):this.__createVizViewAsync(e);
t.then(function(i){return i.update()}).then(i.bind(this.endExec,this),i.bind(this.failExec,this));
},_onVizViewSyncSpec:function(i){},_onVizViewCreated:function(i){},__getVizViewSyncSpec:function(e){
var n={width:this.width,height:this.height,model:{}},s=n.model;return void 0!==e&&(s.data=new t(e)),
i.each(this.vizOptions,function(i){var e=i[0];switch(e){case"data":return}var t=i[1],n=this.getParameterValue(t);
s[e]=n},this.dashboard),this._onVizViewSyncSpec(n),n},__createVizViewAsync:function(i){
var e=this.__getVizViewSyncSpec(i);e.domContainer=this.placeholder()[0],null==e.isAutoUpdate&&(e.isAutoUpdate=!1),
e.model._=this.vizId;var t=this;return n.createAsync(e).then(function(i){return t.vizView=i,
t._onVizViewCreated(i),i})},__syncVizView:function(i){var e=this.vizView,t=e.isAutoUpdate;
t&&(e.isAutoUpdate=!1);var n=this.__getVizViewSyncSpec(i);try{e.configure(n)}finally{
t&&(e.isAutoUpdate=!0)}},__syncVizViewAsync:function(i){var e=this;return new s(function(t){
e.__syncVizView(i),t(e.vizView)})}})});