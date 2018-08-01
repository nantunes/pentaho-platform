define(["dojo","dojox","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/atom/io/Connection"],function(t,e){
t.experimental("dojox.data.AppStore");var s=t.declare("dojox.data.AppStore",null,{
url:"",urlPreventCache:!1,xmethod:!1,_atomIO:null,_feed:null,_requests:null,_processing:null,
_updates:null,_adds:null,_deletes:null,constructor:function(t){if(t&&t.url&&(this.url=t.url),
t&&t.urlPreventCache&&(this.urlPreventCache=t.urlPreventCache),!this.url)throw new Error("A URL is required to instantiate an APP Store object");
},_setFeed:function(t,e){this._feed=t;var s;for(s=0;s<this._feed.entries.length;s++)this._feed.entries[s].store=this;
if(this._requests)for(s=0;s<this._requests.length;s++){var i=this._requests[s];i.request&&i.fh&&i.eh?this._finishFetchItems(i.request,i.fh,i.eh):i.clear?this._feed=null:i.add?this._feed.addEntry(i.add):i.remove&&this._feed.removeEntry(i.remove);
}this._requests=null},_getAllItems:function(){for(var t=[],e=0;e<this._feed.entries.length;e++)t.push(this._feed.entries[e]);
return t},_assertIsItem:function(t){if(!this.isItem(t))throw new Error("This error message is provided when a function is called in the following form: getAttribute(argument, attributeName).  The argument variable represents the member or owner of the object. The error is created when an item that does not belong to this store is specified as an argument.");
},_assertIsAttribute:function(t){if("string"!=typeof t)throw new Error("The attribute argument must be a string. The error is created when a different type of variable is specified such as an array or object.");
for(var s in e.atom.io.model._actions)if(s==t)return!0;return!1},_addUpdate:function(t){
this._updates?this._updates.push(t):this._updates=[t]},getValue:function(t,e,s){var i=this.getValues(t,e);
return i.length>0?i[0]:s},getValues:function(t,e){this._assertIsItem(t);var s=this._assertIsAttribute(e);
if(s){if(("author"===e||"contributor"===e||"link"===e)&&t[e+"s"])return t[e+"s"];if("category"===e&&t.categories)return t.categories;
if(t[e])return t=t[e],"Content"==t.nodeType?[t.value]:[t]}return[]},getAttributes:function(t){
this._assertIsItem(t);var s=[];for(var i in e.atom.io.model._actions)this.hasAttribute(t,i)&&s.push(i);
return s},hasAttribute:function(t,e){return this.getValues(t,e).length>0},containsValue:function(e,s,i){
var r=void 0;return"string"==typeof i&&(r=t.data.util.filter.patternToRegExp(i,!1)),
this._containsValue(e,s,i,r)},_containsValue:function(t,e,s,i,r){for(var a=this.getValues(t,e),n=0;n<a.length;++n){
var o=a[n];if("string"==typeof o&&i)return r&&(o=o.replace(new RegExp(/^\s+/),""),
o=o.replace(new RegExp(/\s+$/),"")),o=o.replace(/\r|\n|\r\n/g,""),null!==o.match(i);
if(s===o)return!0}return!1},isItem:function(t){return t&&t.store&&t.store===this},
isItemLoaded:function(t){return this.isItem(t)},loadItem:function(t){this._assertIsItem(t.item);
},_fetchItems:function(t,s,i){if(this._feed)this._finishFetchItems(t,s,i);else{var r=!1;
this._requests||(this._requests=[],r=!0),this._requests.push({request:t,fh:s,eh:i
}),r&&(this._atomIO=new e.atom.io.Connection(!1,this.urlPreventCache),this._atomIO.getFeed(this.url,this._setFeed,null,this));
}},_finishFetchItems:function(e,s,i){var r=null,a=this._getAllItems();if(e.query){
var n=e.queryOptions?e.queryOptions.ignoreCase:!1;r=[];var o,u,h={};for(o in e.query)u=e.query[o]+"",
"string"==typeof u&&(h[o]=t.data.util.filter.patternToRegExp(u,n));for(var l=0;l<a.length;++l){
var d=!0,c=a[l];for(o in e.query)u=e.query[o]+"",this._containsValue(c,o,u,h[o],e.trim)||(d=!1);
d&&r.push(c)}}else a.length>0&&(r=a.slice(0,a.length));try{s(r,e)}catch(f){i(f,e);
}},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Write":!0,
"dojo.data.api.Identity":!0}},close:function(t){this._feed=null},getLabel:function(t){
return this.isItem(t)?this.getValue(t,"title","No Title"):void 0},getLabelAttributes:function(t){
return["title"]},getIdentity:function(t){return this._assertIsItem(t),this.getValue(t,"id");
},getIdentityAttributes:function(t){return["id"]},fetchItemByIdentity:function(e){
this._fetchItems({query:{id:e.identity},onItem:e.onItem,scope:e.scope},function(e,s){
var i=s.scope;i||(i=t.global),e.length<1?s.onItem.call(i,null):s.onItem.call(i,e[0]);
},e.onError)},newItem:function(s){var i,r=new e.atom.io.model.Entry,a=null,n=null;
for(var o in s)if(this._assertIsAttribute(o))switch(a=s[o],o){case"link":for(i in a)n=a[i],
r.addLink(n.href,n.rel,n.hrefLang,n.title,n.type);break;case"author":for(i in a)n=a[i],
r.addAuthor(n.name,n.email,n.uri);break;case"contributor":for(i in a)n=a[i],r.addContributor(n.name,n.email,n.uri);
break;case"category":for(i in a)n=a[i],r.addCategory(n.scheme,n.term,n.label);break;
case"icon":case"id":case"logo":case"xmlBase":case"rights":r[o]=a;break;case"updated":
case"published":case"issued":case"modified":r[o]=e.atom.io.model.util.createDate(a);
break;case"content":case"summary":case"title":case"subtitle":r[o]=new e.atom.io.model.Content(o),
r[o].value=a;break;default:r[o]=a}return r.store=this,r.isDirty=!0,this._adds?this._adds.push(r):this._adds=[r],
this._feed?this._feed.addEntry(r):this._requests?this._requests.push({add:r}):(this._requests=[{
add:r}],this._atomIO=new e.atom.io.Connection(!1,this.urlPreventCache),this._atomIO.getFeed(this.url,t.hitch(this,this._setFeed))),
!0},deleteItem:function(s){return this._assertIsItem(s),this._deletes?this._deletes.push(s):this._deletes=[s],
this._feed?this._feed.removeEntry(s):this._requests?this._requests.push({remove:s
}):(this._requests=[{remove:s}],this._atomIO=new e.atom.io.Connection(!1,this.urlPreventCache),
this._atomIO.getFeed(this.url,t.hitch(this,this._setFeed))),s=null,!0},setValue:function(t,s,i){
this._assertIsItem(t);var r={item:t};if(this._assertIsAttribute(s))switch(s){case"link":
return r.links=t.links,this._addUpdate(r),t.links=null,t.addLink(i.href,i.rel,i.hrefLang,i.title,i.type),
t.isDirty=!0,!0;case"author":return r.authors=t.authors,this._addUpdate(r),t.authors=null,
t.addAuthor(i.name,i.email,i.uri),t.isDirty=!0,!0;case"contributor":return r.contributors=t.contributors,
this._addUpdate(r),t.contributors=null,t.addContributor(i.name,i.email,i.uri),t.isDirty=!0,
!0;case"category":return r.categories=t.categories,this._addUpdate(r),t.categories=null,
t.addCategory(i.scheme,i.term,i.label),t.isDirty=!0,!0;case"icon":case"id":case"logo":
case"xmlBase":case"rights":return r[s]=t[s],this._addUpdate(r),t[s]=i,t.isDirty=!0,
!0;case"updated":case"published":case"issued":case"modified":return r[s]=t[s],this._addUpdate(r),
t[s]=e.atom.io.model.util.createDate(i),t.isDirty=!0,!0;case"content":case"summary":
case"title":case"subtitle":return r[s]=t[s],this._addUpdate(r),t[s]=new e.atom.io.model.Content(s),
t[s].value=i,t.isDirty=!0,!0;default:return r[s]=t[s],this._addUpdate(r),t[s]=i,t.isDirty=!0,
!0}return!1},setValues:function(t,s,i){if(0===i.length)return this.unsetAttribute(t,s);
this._assertIsItem(t);var r,a,n={item:t};if(this._assertIsAttribute(s))switch(s){
case"link":n.links=t.links,t.links=null;for(a in i)r=i[a],t.addLink(r.href,r.rel,r.hrefLang,r.title,r.type);
return t.isDirty=!0,!0;case"author":n.authors=t.authors,t.authors=null;for(a in i)r=i[a],
t.addAuthor(r.name,r.email,r.uri);return t.isDirty=!0,!0;case"contributor":n.contributors=t.contributors,
t.contributors=null;for(a in i)r=i[a],t.addContributor(r.name,r.email,r.uri);return t.isDirty=!0,
!0;case"categories":n.categories=t.categories,t.categories=null;for(a in i)r=i[a],
t.addCategory(r.scheme,r.term,r.label);return t.isDirty=!0,!0;case"icon":case"id":
case"logo":case"xmlBase":case"rights":return n[s]=t[s],t[s]=i[0],t.isDirty=!0,!0;case"updated":
case"published":case"issued":case"modified":return n[s]=t[s],t[s]=e.atom.io.model.util.createDate(i[0]),
t.isDirty=!0,!0;case"content":case"summary":case"title":case"subtitle":return n[s]=t[s],
t[s]=new e.atom.io.model.Content(s),t[s].values[0]=i[0],t.isDirty=!0,!0;default:return n[s]=t[s],
t[s]=i[0],t.isDirty=!0,!0}return this._addUpdate(n),!1},unsetAttribute:function(t,e){
if(this._assertIsItem(t),this._assertIsAttribute(e)&&null!==t[e]){var s={item:t};switch(e){
case"author":case"contributor":case"link":s[e+"s"]=t[e+"s"];break;case"category":
s.categories=t.categories;break;default:s[e]=t[e]}return t.isDirty=!0,t[e]=null,this._addUpdate(s),
!0}return!1},save:function(e){var s;for(s in this._adds)this._atomIO.addEntry(this._adds[s],null,function(){},e.onError,!1,e.scope);
this._adds=null;for(s in this._updates)this._atomIO.updateEntry(this._updates[s].item,function(){},e.onError,!1,this.xmethod,e.scope);
this._updates=null;for(s in this._deletes)this._atomIO.removeEntry(this._deletes[s],function(){},e.onError,this.xmethod,e.scope);
if(this._deletes=null,this._atomIO.getFeed(this.url,t.hitch(this,this._setFeed)),
e.onComplete){var i=e.scope||t.global;e.onComplete.call(i)}},revert:function(){var t;
for(t in this._adds)this._feed.removeEntry(this._adds[t]);this._adds=null;var e,s,i;
for(t in this._updates){e=this._updates[t],s=e.item;for(i in e)"item"!==i&&(s[i]=e[i]);
}this._updates=null;for(t in this._deletes)this._feed.addEntry(this._deletes[t]);return this._deletes=null,
!0},isDirty:function(t){return t?(this._assertIsItem(t),t.isDirty?!0:!1):null!==this._adds||null!==this._updates;
}});return t.extend(s,t.data.util.simpleFetch),s});