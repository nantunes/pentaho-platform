define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder","pentaho/environment"],function(e,o,n){
return{getAnalyzer:function(r,t,a){var i=n.server.root+"api/repos/{0}/"+t,c=o.encodeRepositoryPath(e.composePath(r));
return o.encode(i,c,a)}}});