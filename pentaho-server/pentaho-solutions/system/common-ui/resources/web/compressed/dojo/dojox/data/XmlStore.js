define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/xhr","dojo/data/util/simpleFetch","dojo/_base/query","dojo/_base/array","dojo/_base/kernel","dojo/data/util/filter","dojox/xml/parser","dojox/data/XmlItem"],function(e,t,r,i,n,o,s,l,a,u){
var h=t("dojox.data.XmlStore",null,{constructor:function(e){e&&(this.url=e.url,this.rootItem=e.rootItem||e.rootitem||this.rootItem,
this.keyAttribute=e.keyAttribute||e.keyattribute||this.keyAttribute,this._attributeMap=e.attributeMap||e.attributemap,
this.label=e.label||this.label,this.sendQuery=e.sendQuery||e.sendquery||this.sendQuery,
"urlPreventCache"in e&&(this.urlPreventCache=e.urlPreventCache?!0:!1)),this._newItems=[],
this._deletedItems=[],this._modifiedItems=[]},url:"",rootItem:"",keyAttribute:"",
label:"",sendQuery:!1,attributeMap:null,urlPreventCache:!0,getValue:function(e,t,r){
var i,n,o=e.element;if("tagName"===t)return o.nodeName;if("childNodes"===t){for(i=0;i<o.childNodes.length;i++)if(n=o.childNodes[i],
1===n.nodeType)return this._getItem(n);return r}if("text()"===t){for(i=0;i<o.childNodes.length;i++)if(n=o.childNodes[i],
3===n.nodeType||4===n.nodeType)return n.nodeValue;return r}if(t=this._getAttribute(o.nodeName,t),
"@"===t.charAt(0)){var s=t.substring(1),l=o.getAttribute(s);return l?l:r}for(i=0;i<o.childNodes.length;i++)if(n=o.childNodes[i],
1===n.nodeType&&n.nodeName===t)return this._getItem(n);return r},getValues:function(e,t){
var r,i,n=e.element,o=[];if("tagName"===t)return[n.nodeName];if("childNodes"===t){
for(r=0;r<n.childNodes.length;r++)i=n.childNodes[r],1===i.nodeType&&o.push(this._getItem(i));
return o}if("text()"===t){var s=n.childNodes;for(r=0;r<s.length;r++)i=s[r],(3===i.nodeType||4===i.nodeType)&&o.push(i.nodeValue);
return o}if(t=this._getAttribute(n.nodeName,t),"@"===t.charAt(0)){var l=t.substring(1),a=n.getAttribute(l);
return void 0!==a?[a]:[]}for(r=0;r<n.childNodes.length;r++)i=n.childNodes[r],1===i.nodeType&&i.nodeName===t&&o.push(this._getItem(i));
return o},getAttributes:function(e){var t,r=e.element,i=[];if(i.push("tagName"),r.childNodes.length>0){
var n={},o=!0,s=!1;for(t=0;t<r.childNodes.length;t++){var l=r.childNodes[t];if(1===l.nodeType){
var a=l.nodeName;n[a]||(i.push(a),n[a]=a),o=!0}else 3===l.nodeType&&(s=!0)}o&&i.push("childNodes"),
s&&i.push("text()")}for(t=0;t<r.attributes.length;t++)i.push("@"+r.attributes[t].nodeName);
if(this._attributeMap)for(var u in this._attributeMap)if(t=u.indexOf("."),t>0){var h=u.substring(0,t);
h===r.nodeName&&i.push(u.substring(t+1))}else i.push(u);return i},hasAttribute:function(e,t){
return void 0!==this.getValue(e,t)},containsValue:function(e,t,r){for(var i=this.getValues(e,t),n=0;n<i.length;n++)if("string"==typeof r){
if(i[n].toString&&i[n].toString()===r)return!0}else if(i[n]===r)return!0;return!1;
},isItem:function(e){return e&&e.element&&e.store&&e.store===this?!0:!1},isItemLoaded:function(e){
return this.isItem(e)},loadItem:function(e){},getFeatures:function(){var e={"dojo.data.api.Read":!0,
"dojo.data.api.Write":!0};return this.sendQuery&&""===this.keyAttribute||(e["dojo.data.api.Identity"]=!0),
e},getLabel:function(e){if(""!==this.label&&this.isItem(e)){var t=this.getValue(e,this.label);
if(t)return t.toString()}return void 0},getLabelAttributes:function(e){return""!==this.label?[this.label]:null;
},_fetchItems:function(e,t,i){var n=this._getFetchUrl(e);if(!n)return void i(new Error("No URL specified."),e);
var o=this.sendQuery?{}:e,s=this,l={url:n,handleAs:"xml",preventCache:s.urlPreventCache
},a=r.get(l);a.addCallback(function(r){var i=s._getItems(r,o);i&&i.length>0?t(i,e):t([],e);
}),a.addErrback(function(t){i(t,e)})},_getFetchUrl:function(t){if(!this.sendQuery)return this.url;
var r=t.query;if(!r)return this.url;if(e.isString(r))return this.url+r;var i="";for(var n in r){
var o=r[n];o&&(i&&(i+="&"),i+=n+"="+o)}if(!i)return this.url;var s=this.url;return s+=s.indexOf("?")<0?"?":"&",
s+i},_getItems:function(e,t){var r=null;t&&(r=t.query);var i=[],s=null;s=""!==this.rootItem?n(this.rootItem,e):e.documentElement.childNodes;
var a=t.queryOptions?t.queryOptions.deep:!1;a&&(s=this._flattenNodes(s));for(var u=0;u<s.length;u++){
var h=s[u];if(1==h.nodeType){var d=this._getItem(h);if(r){var m,f,c=t.queryOptions?t.queryOptions.ignoreCase:!1,g=!1,p=!0,v={};
for(var _ in r)m=r[_],"string"==typeof m?v[_]=l.patternToRegExp(m,c):m&&(v[_]=m);for(var b in r){
p=!1;var I=this.getValues(d,b);for(f=0;f<I.length;f++){if(m=I[f]){var y=r[b];if("string"==typeof m&&v[b])g=null!==m.match(v[b])?!0:!1;else if("object"==typeof m)if(m.toString&&v[b]){
var N=m.toString();g=null!==N.match(v[b])?!0:!1}else g="*"===y||y===m?!0:!1}if(g)break;
}if(!g)break}(p||g)&&i.push(d)}else i.push(d)}}return o.forEach(i,function(e){e.element.parentNode&&e.element.parentNode.removeChild(e.element);
},this),i},_flattenNodes:function(e){var t=[];if(e){var r;for(r=0;r<e.length;r++){
var i=e[r];t.push(i),i.childNodes&&i.childNodes.length>0&&(t=t.concat(this._flattenNodes(i.childNodes)));
}}return t},close:function(e){},newItem:function(e,t){e=e||{};var r=e.tagName;if(!r&&(r=this.rootItem,
""===r))return null;var i=this._getDocument(),n=i.createElement(r);for(var o in e){
var s;if("tagName"!==o)if("text()"===o)s=i.createTextNode(e[o]),n.appendChild(s);else if(o=this._getAttribute(r,o),
"@"===o.charAt(0)){var l=o.substring(1);n.setAttribute(l,e[o])}else{var a=i.createElement(o);
s=i.createTextNode(e[o]),a.appendChild(s),n.appendChild(a)}}var u=this._getItem(n);
this._newItems.push(u);var h=null;if(t&&t.parent&&t.attribute){h={item:t.parent,attribute:t.attribute,
oldValue:void 0};var d=this.getValues(t.parent,t.attribute);if(d&&d.length>0){var m=d.slice(0,d.length);
1===d.length?h.oldValue=d[0]:h.oldValue=d.slice(0,d.length),m.push(u),this.setValues(t.parent,t.attribute,m),
h.newValue=this.getValues(t.parent,t.attribute)}else this.setValue(t.parent,t.attribute,u),
h.newValue=u}return u},deleteItem:function(e){var t=e.element;return t.parentNode?(this._backupItem(e),
t.parentNode.removeChild(t),!0):(this._forgetItem(e),this._deletedItems.push(e),!0);
},setValue:function(e,t,r){if("tagName"===t)return!1;this._backupItem(e);var i,n,o=e.element;
if("childNodes"===t)i=r.element,o.appendChild(i);else if("text()"===t){for(;o.firstChild;)o.removeChild(o.firstChild);
n=this._getDocument(o).createTextNode(r),o.appendChild(n)}else if(t=this._getAttribute(o.nodeName,t),
"@"===t.charAt(0)){var s=t.substring(1);o.setAttribute(s,r)}else{for(var l=0;l<o.childNodes.length;l++){
var a=o.childNodes[l];if(1===a.nodeType&&a.nodeName===t){i=a;break}}var u=this._getDocument(o);
if(i)for(;i.firstChild;)i.removeChild(i.firstChild);else i=u.createElement(t),o.appendChild(i);
n=u.createTextNode(r),i.appendChild(n)}return!0},setValues:function(e,t,r){if("tagName"===t)return!1;
this._backupItem(e);var i,n,o,s=e.element;if("childNodes"===t){for(;s.firstChild;)s.removeChild(s.firstChild);
for(i=0;i<r.length;i++)n=r[i].element,s.appendChild(n)}else if("text()"===t){for(;s.firstChild;)s.removeChild(s.firstChild);
var l="";for(i=0;i<r.length;i++)l+=r[i];o=this._getDocument(s).createTextNode(l),
s.appendChild(o)}else if(t=this._getAttribute(s.nodeName,t),"@"===t.charAt(0)){var a=t.substring(1);
s.setAttribute(a,r[0])}else{for(i=s.childNodes.length-1;i>=0;i--){var u=s.childNodes[i];
1===u.nodeType&&u.nodeName===t&&s.removeChild(u)}var h=this._getDocument(s);for(i=0;i<r.length;i++)n=h.createElement(t),
o=h.createTextNode(r[i]),n.appendChild(o),s.appendChild(n)}return!0},unsetAttribute:function(e,t){
if("tagName"===t)return!1;this._backupItem(e);var r=e.element;if("childNodes"===t||"text()"===t)for(;r.firstChild;)r.removeChild(r.firstChild);else if(t=this._getAttribute(r.nodeName,t),
"@"===t.charAt(0)){var i=t.substring(1);r.removeAttribute(i)}else for(var n=r.childNodes.length-1;n>=0;n--){
var o=r.childNodes[n];1===o.nodeType&&o.nodeName===t&&r.removeChild(o)}return!0},
save:function(e){e||(e={});var t;for(t=0;t<this._modifiedItems.length;t++)this._saveItem(this._modifiedItems[t],e,"PUT");
for(t=0;t<this._newItems.length;t++){var r=this._newItems[t];r.element.parentNode?(this._newItems.splice(t,1),
t--):this._saveItem(this._newItems[t],e,"POST")}for(t=0;t<this._deletedItems.length;t++)this._saveItem(this._deletedItems[t],e,"DELETE");
},revert:function(){return this._newItems=[],this._restoreItems(this._deletedItems),
this._deletedItems=[],this._restoreItems(this._modifiedItems),this._modifiedItems=[],
!0},isDirty:function(e){if(e){var t=this._getRootElement(e.element);return this._getItemIndex(this._newItems,t)>=0||this._getItemIndex(this._deletedItems,t)>=0||this._getItemIndex(this._modifiedItems,t)>=0;
}return this._newItems.length>0||this._deletedItems.length>0||this._modifiedItems.length>0;
},_saveItem:function(e,t,i){var n,o;if(n="PUT"===i?this._getPutUrl(e):"DELETE"===i?this._getDeleteUrl(e):this._getPostUrl(e),
!n)return void(t.onError&&(o=t.scope||s.global,t.onError.call(o,new Error("No URL for saving content: "+this._getPostContent(e)))));
var l,a={url:n,method:i||"POST",contentType:"text/xml",handleAs:"xml"};"PUT"===i?(a.putData=this._getPutContent(e),
l=r.put(a)):"DELETE"===i?l=r.del(a):(a.postData=this._getPostContent(e),l=r.post(a)),
o=t.scope||s.global;var u=this;l.addCallback(function(r){u._forgetItem(e),t.onComplete&&t.onComplete.call(o);
}),l.addErrback(function(e){t.onError&&t.onError.call(o,e)})},_getPostUrl:function(e){
return this.url},_getPutUrl:function(e){return this.url},_getDeleteUrl:function(e){
var t=this.url;if(e&&""!==this.keyAttribute){var r=this.getValue(e,this.keyAttribute);
if(r){var i="@"===this.keyAttribute.charAt(0)?this.keyAttribute.substring(1):this.keyAttribute;
t+=t.indexOf("?")<0?"?":"&",t+=i+"="+r}}return t},_getPostContent:function(e){return"<?xml version='1.0'?>"+a.innerXML(e.element);
},_getPutContent:function(e){return"<?xml version='1.0'?>"+a.innerXML(e.element)},
_getAttribute:function(e,t){if(this._attributeMap){var r=e+"."+t,i=this._attributeMap[r];
i?t=i:(i=this._attributeMap[t],i&&(t=i))}return t},_getItem:function(e){try{var t=null;
return""===this.keyAttribute&&(t=this._getXPath(e)),new u(e,this,t)}catch(r){console.log(r);
}return null},_getItemIndex:function(e,t){for(var r=0;r<e.length;r++)if(e[r].element===t)return r;
return-1},_backupItem:function(e){var t=this._getRootElement(e.element);this._getItemIndex(this._newItems,t)>=0||this._getItemIndex(this._modifiedItems,t)>=0||(t!=e.element&&(e=this._getItem(t)),
e._backup=t.cloneNode(!0),this._modifiedItems.push(e))},_restoreItems:function(e){
o.forEach(e,function(e){e._backup&&(e.element=e._backup,e._backup=null)},this)},_forgetItem:function(e){
var t=e.element,r=this._getItemIndex(this._newItems,t);r>=0&&this._newItems.splice(r,1),
r=this._getItemIndex(this._deletedItems,t),r>=0&&this._deletedItems.splice(r,1),r=this._getItemIndex(this._modifiedItems,t),
r>=0&&this._modifiedItems.splice(r,1)},_getDocument:function(e){return e?e.ownerDocument:this._document?null:a.parse();
},_getRootElement:function(e){for(;e.parentNode;)e=e.parentNode;return e},_getXPath:function(e){
var t=null;if(!this.sendQuery){var r=e;for(t="";r&&r!=e.ownerDocument;){for(var i=0,n=r,o=r.nodeName;n;)n=n.previousSibling,
n&&n.nodeName===o&&i++;var s="/"+o+"["+i+"]";t=t?s+t:s,r=r.parentNode}}return t},
getIdentity:function(e){if(this.isItem(e)){var t=null;return this.sendQuery&&""!==this.keyAttribute?t=this.getValue(e,this.keyAttribute).toString():this.serverQuery||(t=""!==this.keyAttribute?this.getValue(e,this.keyAttribute).toString():e.q),
t}throw new Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");
},getIdentityAttributes:function(e){if(this.isItem(e))return""!==this.keyAttribute?[this.keyAttribute]:null;
throw new Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");
},fetchItemByIdentity:function(e){var t=null,i=null,n=this,o=null,l=null,a=null;if(n.sendQuery){
if(""!==n.keyAttribute){var u={query:{}};u.query[n.keyAttribute]=e.identity,o=this._getFetchUrl(u),
t=function(t){var r=null;if(t){var i=n._getItems(t,{});if(1===i.length)r=i[0];else if(e.onError){
var o=e.scope||s.global;e.onError.call(o,new Error("More than one item was returned from the server for the denoted identity"));
}}e.onItem&&(o=e.scope||s.global,e.onItem.call(o,r))},l={url:o,handleAs:"xml",preventCache:n.urlPreventCache
},a=r.get(l),a.addCallback(t),e.onError&&a.addErrback(function(t){var r=e.scope||s.global;
e.onError.call(r,t)})}else if(e.onError){var h=e.scope||s.global;e.onError.call(h,new Error("XmlStore is not told that the server to provides identity support.  No keyAttribute specified."));
}}else t=function(t){if(t)if(""!==n.keyAttribute){var r={};r.query={},r.query[n.keyAttribute]=e.identity,
r.queryOptions={deep:!0};var o=n._getItems(t,r);i=e.scope||s.global,1===o.length?e.onItem&&e.onItem.call(i,o[0]):0===o.length?e.onItem&&e.onItem.call(i,null):e.onError&&e.onError.call(i,new Error("Items array size for identity lookup greater than 1, invalid keyAttribute."));
}else{var l,a=e.identity.split("/"),u=t;for(l=0;l<a.length;l++)if(a[l]&&""!==a[l]){
var h=a[l];h=h.substring(0,h.length-1);var d=h.split("["),m=d[0],f=parseInt(d[1],10),c=0;
if(!u)break;var g=u.childNodes;if(g){var p,v=null;for(p=0;p<g.length;p++){var _=g[p];
if(_.nodeName===m){if(!(f>c)){v=_;break}c++}}u=v?v:null}else u=null}var b=null;u&&(b=n._getItem(u),
b.element.parentNode&&b.element.parentNode.removeChild(b.element)),e.onItem&&(i=e.scope||s.global,
e.onItem.call(i,b))}},o=this._getFetchUrl(null),l={url:o,handleAs:"xml",preventCache:n.urlPreventCache
},a=r.get(l),a.addCallback(t),e.onError&&a.addErrback(function(t){var r=e.scope||s.global;
e.onError.call(r,t)})}});return e.extend(h,i),h});