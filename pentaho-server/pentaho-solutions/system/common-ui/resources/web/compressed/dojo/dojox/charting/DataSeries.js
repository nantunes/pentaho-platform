define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojox/lang/functional"],function(t,e,i,s,h){
return e("dojox.charting.DataSeries",null,{constructor:function(e,i,n){this.store=e,
this.kwArgs=i,n?t.isFunction(n)?this.value=n:t.isObject(n)?this.value=t.hitch(this,"_dictValue",h.keys(n),n):this.value=t.hitch(this,"_fieldValue",n):this.value=t.hitch(this,"_defaultValue"),
this.data=[],this._events=[],this.store.getFeatures()["dojo.data.api.Notification"]&&this._events.push(s.connect(this.store,"onNew",this,"_onStoreNew"),s.connect(this.store,"onDelete",this,"_onStoreDelete"),s.connect(this.store,"onSet",this,"_onStoreSet")),
this._initialRendering=!0,this.fetch()},destroy:function(){i.forEach(this._events,s.disconnect);
},setSeriesObject:function(t){this.series=t},_dictValue:function(t,e,s,h){var n={};
return i.forEach(t,function(t){n[t]=s.getValue(h,e[t])}),n},_fieldValue:function(t,e,i){
return e.getValue(i,t)},_defaultValue:function(t,e){return t.getValue(e,"value")},
fetch:function(){if(!this._inFlight){this._inFlight=!0;var e=t.delegate(this.kwArgs);
e.onComplete=t.hitch(this,"_onFetchComplete"),e.onError=t.hitch(this,"onFetchError"),
this.store.fetch(e)}},_onFetchComplete:function(t,e){this.items=t,this._buildItemMap(),
this.data=i.map(this.items,function(t){return this.value(this.store,t)},this),this._pushDataChanges(),
this._inFlight=!1},onFetchError:function(t,e){this._inFlight=!1},_buildItemMap:function(){
if(this.store.getFeatures()["dojo.data.api.Identity"]){var t={};i.forEach(this.items,function(e,i){
t[this.store.getIdentity(e)]=i},this),this.itemMap=t}},_pushDataChanges:function(){
this.series&&(this.series.chart.updateSeries(this.series.name,this,this._initialRendering),
this._initialRendering=!1,this.series.chart.delayedRender())},_onStoreNew:function(){
this.fetch()},_onStoreDelete:function(t){if(this.items){var e=i.some(this.items,function(e,i){
return e===t?(this.items.splice(i,1),this._buildItemMap(),this.data.splice(i,1),!0):!1;
},this);e&&this._pushDataChanges()}},_onStoreSet:function(t){if(this.itemMap){var e=this.store.getIdentity(t),s=this.itemMap[e];
"number"==typeof s&&(this.data[s]=this.value(this.store,this.items[s]),this._pushDataChanges());
}else if(this.items){var h=i.some(this.items,function(e,i){return e===t?(this.data[i]=this.value(this.store,e),
!0):!1},this);h&&this._pushDataChanges()}}})});