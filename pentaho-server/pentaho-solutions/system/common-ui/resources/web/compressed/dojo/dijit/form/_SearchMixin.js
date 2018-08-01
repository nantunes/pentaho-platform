define(["dojo/_base/declare","dojo/keys","dojo/_base/lang","dojo/query","dojo/string","dojo/when","../registry"],function(e,t,r,i,s,a,n){
return e("dijit.form._SearchMixin",null,{pageSize:1/0,store:null,fetchProperties:{},
query:{},searchDelay:200,searchAttr:"name",queryExpr:"${0}*",ignoreCase:!0,_patternToRegExp:function(e){
return new RegExp("^"+e.replace(/(\\.)|(\*)|(\?)|\W/g,function(e,t,r,i){return r?".*":i?".":t?t:"\\"+e;
})+"$",this.ignoreCase?"mi":"m")},_abortQuery:function(){this.searchTimer&&(this.searchTimer=this.searchTimer.remove()),
this._queryDeferHandle&&(this._queryDeferHandle=this._queryDeferHandle.remove()),
this._fetchHandle&&(this._fetchHandle.abort&&(this._cancelingQuery=!0,this._fetchHandle.abort(),
this._cancelingQuery=!1),this._fetchHandle.cancel&&(this._cancelingQuery=!0,this._fetchHandle.cancel(),
this._cancelingQuery=!1),this._fetchHandle=null)},_processInput:function(e){if(!this.disabled&&!this.readOnly){
var r=e.charOrCode;if(!("type"in e&&"key"==e.type.substring(0,3)&&(e.altKey||(e.ctrlKey||e.metaKey)&&"x"!=r&&"v"!=r||r==t.SHIFT))){
var i=!1;switch(this._prev_key_backspace=!1,r){case t.DELETE:case t.BACKSPACE:this._prev_key_backspace=!0,
this._maskValidSubsetError=!0,i=!0;break;default:i="string"==typeof r||229==r}i&&(this.store?this.searchTimer=this.defer("_startSearchFromInput",1):this.onSearch());
}}},onSearch:function(){},_startSearchFromInput:function(){this._startSearch(this.focusNode.value);
},_startSearch:function(e){this._abortQuery();var t,i=this,n=r.clone(this.query),o={
start:0,count:this.pageSize,queryOptions:{ignoreCase:this.ignoreCase,deep:!0}},c=s.substitute(this.queryExpr,[e.replace(/([\\\*\?])/g,"\\$1")]),h=function(){
var e=i._fetchHandle=i.store.query(n,o);i.disabled||i.readOnly||t!==i._lastQuery||a(e,function(r){
i._fetchHandle=null,i.disabled||i.readOnly||t!==i._lastQuery||a(e.total,function(e){
r.total=e;var t=i.pageSize;(isNaN(t)||t>r.total)&&(t=r.total),r.nextPage=function(e){
o.direction=e=e!==!1,o.count=t,e?(o.start+=r.length,o.start>=r.total&&(o.count=0)):(o.start-=t,
o.start<0&&(o.count=Math.max(t+o.start,0),o.start=0)),o.count<=0?(r.length=0,i.onSearch(r,n,o)):h();
},i.onSearch(r,n,o)})},function(e){i._fetchHandle=null,i._cancelingQuery||console.error(i.declaredClass+" "+e.toString());
})};r.mixin(o,this.fetchProperties),this.store._oldAPI?t=c:(t=this._patternToRegExp(c),
t.toString=function(){return c}),this._lastQuery=n[this.searchAttr]=t,this._queryDeferHandle=this.defer(h,this.searchDelay);
},constructor:function(){this.query={},this.fetchProperties={}},postMixInProperties:function(){
if(!this.store){var e=this.list;e&&(this.store=n.byId(e))}this.inherited(arguments);
}})});