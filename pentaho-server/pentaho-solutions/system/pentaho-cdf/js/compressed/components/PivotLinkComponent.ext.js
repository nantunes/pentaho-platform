define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder","pentaho/environment"],function(n,e,o){
return{getPivot:function(t,i,a){var r=o.server.root+"plugin/jpivot/Pivot",u=0===i.indexOf(n.pluginName)?n.samplesBasePath+i:i,s={
solution:t||"system",path:u,action:a};return e.encode(r,null,s)}}});