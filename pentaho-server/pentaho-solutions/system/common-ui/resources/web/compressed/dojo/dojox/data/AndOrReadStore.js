define(["dojo/_base/declare","dojo/_base/lang","dojo/data/ItemFileReadStore","dojo/data/util/filter","dojo/_base/array","dojo/_base/json"],function(declare,lang,ItemFileReadStore,filterUtil,array,json){
return declare("dojox.data.AndOrReadStore",[ItemFileReadStore],{_containsValue:function(item,attribute,value,regexp){
return array.some(this.getValues(item,attribute),function(possibleValue){return lang.isString(regexp)?eval(regexp):null===possibleValue||lang.isObject(possibleValue)||!regexp?value===possibleValue?!0:!1:possibleValue.toString().match(regexp)?!0:void 0;
})},filter:function(requestArgs,arrayOfItems,findCallback){var items=[];if(requestArgs.query){
var query=json.fromJson(json.toJson(requestArgs.query));if("object"==typeof query){
var count=0,p;for(p in query)count++;if(count>1&&query.complexQuery){var cq=query.complexQuery,wrapped=!1;
for(p in query)if("complexQuery"!==p){wrapped||(cq="( "+cq+" )",wrapped=!0);var v=requestArgs.query[p];
lang.isString(v)&&(v="'"+v+"'"),cq+=" AND "+p+":"+v,delete query[p]}query.complexQuery=cq;
}}var ignoreCase=requestArgs.queryOptions?requestArgs.queryOptions.ignoreCase:!1;"string"!=typeof query&&(query=json.toJson(query),
query=query.replace(/\\\\/g,"\\")),query=query.replace(/\\"/g,'"');var complexQuery=lang.trim(query.replace(/{|}/g,"")),pos2,i;
if(complexQuery.match(/"? *complexQuery *"?:/)){complexQuery=lang.trim(complexQuery.replace(/"?\s*complexQuery\s*"?:/,""));
var quotes=["'",'"'],pos1,colon,flag=!1;for(i=0;i<quotes.length;i++)if(pos1=complexQuery.indexOf(quotes[i]),
pos2=complexQuery.indexOf(quotes[i],1),colon=complexQuery.indexOf(":",1),0===pos1&&-1!=pos2&&pos2>colon){
flag=!0;break}flag&&(complexQuery=complexQuery.replace(/^\"|^\'|\"$|\'$/g,""))}var complexQuerySave=complexQuery,begRegExp=/^>=|^<=|^<|^>|^,|^NOT |^AND |^OR |^\(|^\)|^!|^&&|^\|\|/i,sQuery="",op="",val="",pos=-1,err=!1,key="",value="",tok="";
for(pos2=-1,i=0;i<arrayOfItems.length;++i){var match=!0,candidateItem=arrayOfItems[i];
if(null===candidateItem)match=!1;else{for(complexQuery=complexQuerySave,sQuery="";complexQuery.length>0&&!err;){
for(op=complexQuery.match(begRegExp);op&&!err;)complexQuery=lang.trim(complexQuery.replace(op[0],"")),
op=lang.trim(op[0]).toUpperCase(),op="NOT"==op?"!":"AND"==op||","==op?"&&":"OR"==op?"||":op,
op=" "+op+" ",sQuery+=op,op=complexQuery.match(begRegExp);if(complexQuery.length>0){
var opsRegex=/:|>=|<=|>|</g,matches=complexQuery.match(opsRegex),match=matches&&matches.shift(),regex;
if(pos=complexQuery.indexOf(match),-1==pos){err=!0;break}if(key=lang.trim(complexQuery.substring(0,pos).replace(/\"|\'/g,"")),
complexQuery=lang.trim(complexQuery.substring(pos+match.length)),tok=complexQuery.match(/^\'|^\"/)){
if(tok=tok[0],pos=complexQuery.indexOf(tok),pos2=complexQuery.indexOf(tok,pos+1),
-1==pos2){err=!0;break}value=complexQuery.substring(pos+match.length,pos2),complexQuery=pos2==complexQuery.length-1?"":lang.trim(complexQuery.substring(pos2+1)),
regex=":"!=match?this.getValue(candidateItem,key)+match+value:filterUtil.patternToRegExp(value,ignoreCase),
sQuery+=this._containsValue(candidateItem,key,value,regex)}else{if(tok=complexQuery.match(/\s|\)|,/)){
for(var pos3=new Array(tok.length),j=0;j<tok.length;j++)pos3[j]=complexQuery.indexOf(tok[j]);
if(pos=pos3[0],pos3.length>1)for(var j=1;j<pos3.length;j++)pos=Math.min(pos,pos3[j]);
value=lang.trim(complexQuery.substring(0,pos)),complexQuery=lang.trim(complexQuery.substring(pos));
}else value=lang.trim(complexQuery),complexQuery="";":"!=match?regex=this.getValue(candidateItem,key)+match+value:(regex=filterUtil.patternToRegExp(value,ignoreCase),
console.log("regex value: ",value," regex pattern: ",regex)),sQuery+=this._containsValue(candidateItem,key,value,regex);
}}}match=eval(sQuery)}match&&items.push(candidateItem)}err&&(items=[],console.log("The store's _fetchItems failed, probably due to a syntax error in query."));
}else for(var i=0;i<arrayOfItems.length;++i){var item=arrayOfItems[i];null!==item&&items.push(item);
}findCallback(items,requestArgs)}})});