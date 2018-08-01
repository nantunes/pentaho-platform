define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom","dojo/_base/xhr","dojo/_base/kernel","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/xml/parser"],function(t,e,o,i,r,s,n,a,d){
var h=t("dojox.data.HtmlStore",null,{constructor:function(t){if(t&&"urlPreventCache"in t&&(this.urlPreventCache=t.urlPreventCache?!0:!1),
t&&"trimWhitespace"in t&&(this.trimWhitespace=t.trimWhitespace?!0:!1),t.url){if(!t.dataId)throw new Error("dojo.data.HtmlStore: Cannot instantiate using url without an id!");
this.url=t.url,this.dataId=t.dataId}else t.dataId&&(this.dataId=t.dataId);t&&"fetchOnCreate"in t&&(this.fetchOnCreate=t.fetchOnCreate?!0:!1),
this.fetchOnCreate&&this.dataId&&this.fetch()},url:"",dataId:"",trimWhitespace:!1,
urlPreventCache:!1,fetchOnCreate:!1,_indexItems:function(){if(this._getHeadings(),
this._rootNode.rows){this._rootNode.tBodies&&this._rootNode.tBodies.length>0&&(this._rootNode=this._rootNode.tBodies[0]);
var t;for(t=0;t<this._rootNode.rows.length;t++)this._rootNode.rows[t]._ident=t+1}else{
var e=1;for(t=0;t<this._rootNode.childNodes.length;t++)1===this._rootNode.childNodes[t].nodeType&&(this._rootNode.childNodes[t]._ident=e,
e++)}},_getHeadings:function(){this._headings=[],this._rootNode.tHead?e.forEach(this._rootNode.tHead.rows[0].cells,o.hitch(this,function(t){
var e=d.textContent(t);this._headings.push(this.trimWhitespace?o.trim(e):e)})):this._headings=["name"];
},_getAllItems:function(){var t,e=[];if(this._rootNode.rows)for(t=0;t<this._rootNode.rows.length;t++)e.push(this._rootNode.rows[t]);else for(t=0;t<this._rootNode.childNodes.length;t++)1===this._rootNode.childNodes[t].nodeType&&e.push(this._rootNode.childNodes[t]);
return e},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("dojo.data.HtmlStore: a function was passed an item argument that was not an item");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("dojo.data.HtmlStore: a function was passed an attribute argument that was not an attribute name string");
return e.indexOf(this._headings,t)},getValue:function(t,e,o){var i=this.getValues(t,e);
return i.length>0?i[0]:o},getValues:function(t,e){this._assertIsItem(t);var i=this._assertIsAttribute(e);
if(i>-1){var r;return r=t.cells?d.textContent(t.cells[i]):d.textContent(t),[this.trimWhitespace?o.trim(r):r];
}return[]},getAttributes:function(t){this._assertIsItem(t);for(var e=[],o=0;o<this._headings.length;o++)this.hasAttribute(t,this._headings[o])&&e.push(this._headings[o]);
return e},hasAttribute:function(t,e){return this.getValues(t,e).length>0},containsValue:function(t,e,o){
var i=void 0;return"string"==typeof o&&(i=a.patternToRegExp(o,!1)),this._containsValue(t,e,o,i);
},_containsValue:function(t,e,o,i){for(var r=this.getValues(t,e),s=0;s<r.length;++s){
var n=r[s];if("string"==typeof n&&i)return null!==n.match(i);if(o===n)return!0}return!1;
},isItem:function(t){return t&&i.isDescendant(t,this._rootNode)},isItemLoaded:function(t){
return this.isItem(t)},loadItem:function(t){this._assertIsItem(t.item)},_fetchItems:function(t,e,o){
if(this._rootNode)this._finishFetchItems(t,e,o);else if(this.url){var s={url:this.url,
handleAs:"text",preventCache:this.urlPreventCache},n=this,a=r.get(s);a.addCallback(function(i){
var r=function(t,e){if(t.id==e)return t;if(t.childNodes)for(var o=0;o<t.childNodes.length;o++){
var i=r(t.childNodes[o],e);if(i)return i}return null},s=document.createElement("div");
s.innerHTML=i,n._rootNode=r(s,n.dataId),n._indexItems(),n._finishFetchItems(t,e,o);
}),a.addErrback(function(e){o(e,t)})}else this._rootNode=i.byId(this.dataId),this._indexItems(),
this._finishFetchItems(t,e,o)},_finishFetchItems:function(t,e,o){var i=[],r=this._getAllItems();
if(t.query){var s=t.queryOptions?t.queryOptions.ignoreCase:!1;i=[];var n,d,h={};for(n in t.query)d=t.query[n]+"",
"string"==typeof d&&(h[n]=a.patternToRegExp(d,s));for(var l=0;l<r.length;++l){var u=!0,c=r[l];
for(n in t.query)d=t.query[n]+"",this._containsValue(c,n,d,h[n])||(u=!1);u&&i.push(c);
}e(i,t)}else r.length>0&&(i=r.slice(0,r.length)),e(i,t)},getFeatures:function(){return{
"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(t){},getLabel:function(t){
return this.isItem(t)?t.cells?"Item #"+this.getIdentity(t):this.getValue(t,"name"):void 0;
},getLabelAttributes:function(t){return t.cells?null:["name"]},getIdentity:function(t){
return this._assertIsItem(t),this.hasAttribute(t,"name")?this.getValue(t,"name"):t._ident;
},getIdentityAttributes:function(t){return null},fetchItemByIdentity:function(t){
var e=t.identity,o=this,n=null,a=null;if(this._rootNode)this._rootNode.rows[e+1]&&(n=this._rootNode.rows[e+1],
t.onItem&&(a=t.scope?t.scope:s.global,t.onItem.call(a,n)));else if(this.url){var h={
url:this.url,handleAs:"text"},l=r.get(h);l.addCallback(function(i){var r=function(t,e){
if(t.id==e)return t;if(t.childNodes)for(var o=0;o<t.childNodes.length;o++){var i=r(t.childNodes[o],e);
if(i)return i}return null},h=document.createElement("div");if(h.innerHTML=i,o._rootNode=r(h,o.dataId),
o._indexItems(),o._rootNode.rows&&e<=o._rootNode.rows.length)n=o._rootNode.rows[e-1];else for(var l=0;l<o._rootNode.childNodes.length;l++)if(1===o._rootNode.childNodes[l].nodeType&&e===d.textContent(o._rootNode.childNodes[l])){
n=o._rootNode.childNodes[l];break}t.onItem&&(a=t.scope?t.scope:s.global,t.onItem.call(a,n));
}),l.addErrback(function(e){t.onError&&(a=t.scope?t.scope:s.global,t.onError.call(a,e));
})}else{if(this._rootNode=i.byId(this.dataId),this._indexItems(),o._rootNode.rows)n=this._rootNode.rows[e+1];else for(var u=0;u<o._rootNode.childNodes.length;u++)1===o._rootNode.childNodes[u].nodeType&&e===d.textContent(o._rootNode.childNodes[u])&&(n=o._rootNode.childNodes[u]);
t.onItem&&(a=t.scope?t.scope:s.global,t.onItem.call(a,n))}}});return o.extend(h,n),
h});