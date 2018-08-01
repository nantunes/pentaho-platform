define(["dojo","dojox","dojox/data/JsonRestStore"],function(t,r){return t.declare("dojox.data.RailsStore",r.data.JsonRestStore,{
constructor:function(){},preamble:function(e){if("string"==typeof e.target&&!e.service){
var o=e.target.replace(/\/$/g,""),n=function(e,n){n=n||{};var i,u,s=o;t.isObject(e)?(u="",
i="?"+t.objectToQuery(e)):n.queryStr&&-1!=n.queryStr.indexOf("?")?(u=n.queryStr.replace(/\?.*/,""),
i=n.queryStr.replace(/[^?]*\?/g,"?")):t.isString(n.query)&&-1!=n.query.indexOf("?")?(u=n.query.replace(/\?.*/,""),
i=n.query.replace(/[^?]*\?/g,"?")):(u=e?e.toString():"",i=""),-1!=u.indexOf("=")&&(i=u,
u=""),s=u?s+"/"+u+".json"+i:s+".json"+i;var a=r.rpc._sync;return r.rpc._sync=!1,{
url:s,handleAs:"json",contentType:"application/json",sync:a,headers:{Accept:"application/json,application/javascript",
Range:n&&(n.start>=0||n.count>=0)?"items="+(n.start||"0")+"-"+(n.count&&n.count+(n.start||0)-1||""):void 0
}}};e.service=r.rpc.Rest(this.target,!0,null,n)}},fetch:function(r){function e(e){
function o(){null==r.queryStr&&(r.queryStr=""),t.isObject(r.query)?r.queryStr="?"+t.objectToQuery(r.query):t.isString(r.query)&&(r.queryStr=r.query);
}function n(){return-1==r.queryStr.indexOf("?")?"?":"&"}null==r.queryStr&&o(),r.queryStr=r.queryStr+n()+t.objectToQuery(e);
}if(r=r||{},r.start||r.count){if((r.start||0)%r.count)throw new Error("The start parameter must be a multiple of the count parameter");
e({page:(r.start||0)/r.count+1,per_page:r.count})}if(r.sort){var o={sortBy:[],sortDir:[]
};t.forEach(r.sort,function(t){o.sortBy.push(t.attribute),o.sortDir.push(t.descending?"DESC":"ASC");
}),e(o),delete r.sort}return this.inherited(arguments)},_processResults:function(r,e){
var o;if("undefined"==typeof this.rootAttribute&&r[0])if(r[0][this.idAttribute])this.rootAttribute=!1,
console.debug("RailsStore: without root_in_json");else for(var n in r[0])r[0][n][this.idAttribute]&&(this.rootAttribute=n,
console.debug("RailsStore: with root_in_json, attribute: "+n));o=this.rootAttribute?t.map(r,function(t){
return t[this.rootAttribute]},this):r;var i=r.length;return{totalCount:e.fullLength||(e.request.count==i?(e.request.start||0)+2*i:i),
items:o}}})});