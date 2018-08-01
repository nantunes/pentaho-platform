define("cde/components/DashboardComponent/DashboardComponent.ext",["pentaho/environment"],function(e){
return{getDashboardUrl:function(e){return e.indexOf("getDashboard?path=")>0?e:"dash!"+encodeURIComponent(e).replace(/[!'()*]/g,function(e){
return"%"+e.charCodeAt(0).toString(16)})},getDashboardParametersEndpoint:function(){
return e.server.root+"plugin/pentaho-cdf-dd/api/renderer/getDashboardParameters?path=";
}}}),define("cde/components/DashboardComponent/DashboardComponent",["cdf/components/UnmanagedComponent","./DashboardComponent.ext","cdf/lib/jquery"],function(e,r,a){
return e.extend({_pause:!1,update:function(){if(!this.preExec())return!1;var e=this;
require([r.getDashboardUrl(this.dashboardPath)],function(r){e.requiredDashboard=new r(e.htmlObject),
e.mapDataSources(),e.unregisterEvents(),e.requiredDashboard.setupDOM(),e.requiredDashboard._processComponents(),
e.mapParameters(function(){e.requiredDashboard.on("cdf:postInit",function(r){e.postExec();
}),e.requiredDashboard.init()})})},mapDataSources:function(){for(var e=0;e<this.dataSourceMapping.length;e++)this.requiredDashboard.setDataSource(this.dataSourceMapping[e][1],this.dashboard.getDataSource(this.dataSourceMapping[e][0]),!0);
},unregisterEvents:function(){if(this.registeredEvents)for(var e in this.registeredEvents)for(var r=0;r<this.registeredEvents[e].length;r++)this.dashboard.off(e,this.registeredEvents[e][r]);
},mapParameters:function(e){var t=this,n=this.requiredDashboard;this.registeredEvents={},
this.publicParameters=[];var o=r.getDashboardParametersEndpoint()+this.dashboardPath;
a.ajax({url:o,type:"GET",async:!0,success:function(r){t.publicParameters=r.parameters||[],
t.loopThroughMapping(function(e,r){if(t.isParameterPublic(r)){var a=e+":fireChange",o=function(e){
t._pause||JSON.stringify(n.getParameterValue(r))===JSON.stringify(e.value)||(t.loopThroughMapping(function(e,r){
n.setParameter(r,t.dashboard.getParameterValue(e))}),n.fireChange(r,e.value))};t.dashboard.on(a,o),
n.on(r+":fireChange",function(r){t._pause||0!=t.oneWayMap||(JSON.stringify(t.dashboard.getParameterValue(e))!==JSON.stringify(r.value)&&t.loopThroughMapping(function(e,r){
t.dashboard.setParameter(e,n.getParameterValue(r))}),t.dashboard.fireChange(e,r.value));
}),t.registeredEvents[a]||(t.registeredEvents[a]=[]),t.registeredEvents[a].push(o),
t.requiredDashboard.setParameter(r,t.dashboard.getParameterValue(e))}}),e()},error:function(e){
t.failExec(e)},xhrFields:{withCredentials:!0}})},pausePropagation:function(){this._pause=!0;
},resumePropagation:function(){this._pause=!1},loopThroughMapping:function(e){for(var r=0;r<this.parameterMapping.length;r++)e(this.parameterMapping[r][0],this.parameterMapping[r][1]);
},isParameterPublic:function(e){for(var r=0;r<this.publicParameters.length;r++)if(e===this.publicParameters[r])return!0;
return!1}})}),define("cde/components/DashboardComponent",["cde/components/DashboardComponent/DashboardComponent"],function(e){
return e});