define(["../dashboard/Dashboard.ext","common-ui/util/URLEncoder","pentaho/environment"],function(e,o,n){
return{getReport:function(t,r,i){var a="string"==typeof t||t instanceof String,c=n.server.root+"api/repos/{0}/"+r,s=o.encodeRepositoryPath(a?t:e.composePath(t));
return o.encode(c,s,i)}}});