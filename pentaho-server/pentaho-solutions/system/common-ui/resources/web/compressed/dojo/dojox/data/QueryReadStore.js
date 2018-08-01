define(["dojo","dojox","dojo/data/util/sorter","dojo/string"],function(t,e){return t.declare("dojox.data.QueryReadStore",null,{
url:"",requestMethod:"get",_className:"dojox.data.QueryReadStore",_items:[],_lastServerQuery:null,
_numRows:-1,lastRequestHash:null,doClientPaging:!1,doClientSorting:!1,_itemsByIdentity:null,
_identifier:null,_features:{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0},
_labelAttr:"label",constructor:function(e){t.mixin(this,e)},getValue:function(e,i,r){
if(this._assertIsItem(e),!t.isString(i))throw new Error(this._className+".getValue(): Invalid attribute, string expected!");
return!this.hasAttribute(e,i)&&r?r:e.i[i]},getValues:function(t,e){this._assertIsItem(t);
var i=[];return this.hasAttribute(t,e)&&i.push(t.i[e]),i},getAttributes:function(t){
this._assertIsItem(t);var e=[];for(var i in t.i)e.push(i);return e},hasAttribute:function(t,e){
return this.isItem(t)&&"undefined"!=typeof t.i[e]},containsValue:function(t,e,i){
for(var r=this.getValues(t,e),n=r.length,s=0;n>s;s++)if(r[s]==i)return!0;return!1;
},isItem:function(t){return t?"undefined"!=typeof t.r&&t.r==this:!1},isItemLoaded:function(t){
return this.isItem(t)},loadItem:function(t){this.isItemLoaded(t.item)},fetch:function(e){
e=e||{},e.store||(e.store=this);var i=this,r=function(e,i){if(i.onError){var r=i.scope||t.global;
i.onError.call(r,e,i)}},n=function(e,r,n){var s=r.abort||null,o=!1,a=r.start?r.start:0;
0==i.doClientPaging&&(a=0);var l=r.count?a+r.count:e.length;r.abort=function(){o=!0,
s&&s.call(r)};var u=r.scope||t.global;if(r.store||(r.store=i),r.onBegin&&r.onBegin.call(u,n,r),
r.sort&&i.doClientSorting&&e.sort(t.data.util.sorter.createSortFunction(r.sort,i)),
r.onItem)for(var h=a;h<e.length&&l>h;++h){var c=e[h];o||r.onItem.call(u,c,r)}if(r.onComplete&&!o){
var f=null;r.onItem||(f=e.slice(a,l)),r.onComplete.call(u,f,r)}};return this._fetchItems(e,n,r),
e},getFeatures:function(){return this._features},close:function(t){},getLabel:function(t){
return this._labelAttr&&this.isItem(t)?this.getValue(t,this._labelAttr):void 0},getLabelAttributes:function(t){
return this._labelAttr?[this._labelAttr]:null},_xhrFetchHandler:function(e,i,r,n){
e=this._filterResponse(e),e.label&&(this._labelAttr=e.label);var s=e.numRows||-1;this._items=[],
t.forEach(e.items,function(t){this._items.push({i:t,r:this})},this);var o=e.identifier;
if(this._itemsByIdentity={},o){this._identifier=o;var a;for(a=0;a<this._items.length;++a){
var l=this._items[a].i,u=l[o];if(this._itemsByIdentity[u])throw new Error(this._className+":  The json data as specified by: ["+this.url+"] is malformed.  Items within the list have identifier: ["+o+"].  Value collided: ["+u+"]");
this._itemsByIdentity[u]=l}}else for(this._identifier=Number,a=0;a<this._items.length;++a)this._items[a].n=a;
s=this._numRows=-1===s?this._items.length:s,r(this._items,i,s),this._numRows=s},_fetchItems:function(e,i,r){
var n=e.serverQuery||e.query||{};if(this.doClientPaging||(n.start=e.start||0,e.count&&(n.count=e.count)),
!this.doClientSorting&&e.sort){var s=[];t.forEach(e.sort,function(t){t&&t.attribute&&s.push((t.descending?"-":"")+t.attribute);
}),n.sort=s.join(",")}if(this.doClientPaging&&null!==this._lastServerQuery&&t.toJson(n)==t.toJson(this._lastServerQuery))this._numRows=-1===this._numRows?this._items.length:this._numRows,
i(this._items,e,this._numRows);else{var o="post"==this.requestMethod.toLowerCase()?t.xhrPost:t.xhrGet,a=o({
url:this.url,handleAs:"json-comment-optional",content:n,failOk:!0});e.abort=function(){
a.cancel()},a.addCallback(t.hitch(this,function(t){this._xhrFetchHandler(t,e,i,r);
})),a.addErrback(function(t){r(t,e)}),this.lastRequestHash=(new Date).getTime()+"-"+String(Math.random()).substring(2),
this._lastServerQuery=t.mixin({},n)}},_filterResponse:function(t){return t},_assertIsItem:function(t){
if(!this.isItem(t))throw new Error(this._className+": Invalid item argument.")},_assertIsAttribute:function(t){
if("string"!=typeof t)throw new Error(this._className+": Invalid attribute argument ('"+t+"').");
},fetchItemByIdentity:function(e){if(this._itemsByIdentity){var i=this._itemsByIdentity[e.identity];
if(void 0!==i){if(e.onItem){var r=e.scope?e.scope:t.global;e.onItem.call(r,{i:i,r:this
})}return}}var n=function(i,r){var n=e.scope?e.scope:t.global;e.onError&&e.onError.call(n,i);
},s=function(i,r){var n=e.scope?e.scope:t.global;try{var s=null;i&&1==i.length&&(s=i[0]),
e.onItem&&e.onItem.call(n,s)}catch(o){e.onError&&e.onError.call(n,o)}},o={serverQuery:{
id:e.identity}};this._fetchItems(o,s,n)},getIdentity:function(t){var e=null;return e=this._identifier===Number?t.n:t.i[this._identifier];
},getIdentityAttributes:function(t){return[this._identifier]}})});