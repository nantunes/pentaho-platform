define(["dojo/_base/declare","dojox/data/CssRuleStore"],function(t,e){return t("dojox.data.CssClassStore",e,{
_labelAttribute:"class",_idAttribute:"class",_cName:"dojox.data.CssClassStore",getFeatures:function(){
return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},getAttributes:function(t){
return this._assertIsItem(t),["class","classSans"]},getValue:function(t,e,s){var i=this.getValues(t,e);
return i&&i.length>0?i[0]:s},getValues:function(t,e){this._assertIsItem(t),this._assertIsAttribute(e);
var s=[];return"class"===e?s=[t.className]:"classSans"===e&&(s=[t.className.replace(/\./g,"")]),
s},_handleRule:function(t,e,s){for(var i={},n=t.selectorText.split(" "),a=0;a<n.length;a++){
var r=n[a],l=r.indexOf(".");if(r&&r.length>0&&-1!==l){var h=r.indexOf(",")||r.indexOf("[");
r=r.substring(l,-1!==h&&h>l?h:r.length),i[r]=!0}}for(var u in i)if(!this._allItems[u]){
var o={};o.className=u,o[this._storeRef]=this,this._allItems[u]=o}},_handleReturn:function(){
var t=[],e={};for(var s in this._allItems)e[s]=this._allItems[s];for(var i;this._pending.length;)i=this._pending.pop(),
i.request._items=e,t.push(i);for(;t.length;)i=t.pop(),i.fetch?this._handleFetchReturn(i.request):this._handleFetchByIdentityReturn(i.request);
},_handleFetchByIdentityReturn:function(t){var e=t._items,s=e[t.identity];if(this.isItem(s)||(s=null),
t.onItem){var i=t.scope||dojo.global;t.onItem.call(i,s)}},getIdentity:function(t){
return this._assertIsItem(t),this.getValue(t,this._idAttribute)},getIdentityAttributes:function(t){
return this._assertIsItem(t),[this._idAttribute]},fetchItemByIdentity:function(t){
return t=t||{},t.store||(t.store=this),this._pending&&this._pending.length>0?this._pending.push({
request:t}):(this._pending=[{request:t}],this._fetch(t)),t}})});