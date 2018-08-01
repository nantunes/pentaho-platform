define(["dojo","dojox"],function(e,r){return e.declare("dojox.data.util.JsonQuery",null,{
useFullIdInQueries:!1,_toJsonQuery:function(r,t){function n(t,i){var s=i.__id;if(s){
var a={};a[o.idAttribute]=o.useFullIdInQueries?i.__id:i[o.idAttribute],i=a}for(var q in i){
var c=i[q],f=t+(/^[a-zA-Z_][\w_]*$/.test(q)?"."+q:"["+e._escapeString(q)+"]");c&&"object"==typeof c?n(f,c):"*"!=c&&(y+=(u?"":"&")+f+(!s&&"string"==typeof c&&r.queryOptions&&r.queryOptions.ignoreCase?"~":"=")+(o.simplifiedQuery?encodeURIComponent(c):e.toJson(c)),
u=!1)}}var u=!0,o=this;if(r.query&&"object"==typeof r.query){var y="[?(";n("@",r.query),
u?y="":y+=")]",r.queryStr=y.replace(/\\"|"/g,function(e){return'"'==e?"'":e})}else r.query&&"*"!=r.query||(r.query="");
var s=r.sort;if(s){for(r.queryStr=r.queryStr||("string"==typeof r.query?r.query:""),
u=!0,i=0;i<s.length;i++)r.queryStr+=(u?"[":",")+(s[i].descending?"\\":"/")+"@["+e._escapeString(s[i].attribute)+"]",
u=!1;r.queryStr+="]"}return t&&(r.start||r.count)&&(r.queryStr=(r.queryStr||("string"==typeof r.query?r.query:""))+"["+(r.start||"")+":"+(r.count?(r.start||0)+r.count:"")+"]"),
"string"==typeof r.queryStr?(r.queryStr=r.queryStr.replace(/\\"|"/g,function(e){return'"'==e?"'":e;
}),r.queryStr):r.query},jsonQueryPagination:!0,fetch:function(e){return this._toJsonQuery(e,this.jsonQueryPagination),
this.inherited(arguments)},isUpdateable:function(){return!0},matchesQuery:function(e,t){
return t._jsonQuery=t._jsonQuery||r.json.query(this._toJsonQuery(t)),t._jsonQuery([e]).length;
},clientSideFetch:function(e,t){return e._jsonQuery=e._jsonQuery||r.json.query(this._toJsonQuery(e)),
this.clientSidePaging(e,e._jsonQuery(t))},querySuperSet:function(e,r){return e.query?this.inherited(arguments):r.query;
}})});