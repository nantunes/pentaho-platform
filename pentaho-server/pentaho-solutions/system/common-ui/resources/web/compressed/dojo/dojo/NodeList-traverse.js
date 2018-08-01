define(["./query","./_base/lang","./_base/array"],function(e,t,n){var r=e.NodeList;
return t.extend(r,{_buildArrayFromCallback:function(e){for(var t=[],n=0;n<this.length;n++){
var r=e.call(this[n],this[n],t);r&&(t=t.concat(r))}return t},_getUniqueAsNodeList:function(e){
for(var t,r=[],i=0;t=e[i];i++)1==t.nodeType&&-1==n.indexOf(r,t)&&r.push(t);return this._wrap(r,null,this._NodeListCtor);
},_getUniqueNodeListWithParent:function(t,n){var r=this._getUniqueAsNodeList(t);return r=n?e._filterResult(r,n):r,
r._stash(this)},_getRelatedUniqueNodes:function(e,t){return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(t),e);
},children:function(e){return this._getRelatedUniqueNodes(e,function(e,n){return t._toArray(e.childNodes);
})},closest:function(t,n){return this._getRelatedUniqueNodes(null,function(r,i){do if(e._filterResult([r],t,n).length)return r;while(r!=n&&(r=r.parentNode)&&1==r.nodeType);
return null})},parent:function(e){return this._getRelatedUniqueNodes(e,function(e,t){
return e.parentNode})},parents:function(e){return this._getRelatedUniqueNodes(e,function(e,t){
for(var n=[];e.parentNode;)e=e.parentNode,n.push(e);return n})},siblings:function(e){
return this._getRelatedUniqueNodes(e,function(e,t){for(var n=[],r=e.parentNode&&e.parentNode.childNodes,i=0;i<r.length;i++)r[i]!=e&&n.push(r[i]);
return n})},next:function(e){return this._getRelatedUniqueNodes(e,function(e,t){for(var n=e.nextSibling;n&&1!=n.nodeType;)n=n.nextSibling;
return n})},nextAll:function(e){return this._getRelatedUniqueNodes(e,function(e,t){
for(var n=[],r=e;r=r.nextSibling;)1==r.nodeType&&n.push(r);return n})},prev:function(e){
return this._getRelatedUniqueNodes(e,function(e,t){for(var n=e.previousSibling;n&&1!=n.nodeType;)n=n.previousSibling;
return n})},prevAll:function(e){return this._getRelatedUniqueNodes(e,function(e,t){
for(var n=[],r=e;r=r.previousSibling;)1==r.nodeType&&n.push(r);return n})},andSelf:function(){
return this.concat(this._parent)},first:function(){return this._wrap(this[0]&&[this[0]]||[],this);
},last:function(){return this._wrap(this.length?[this[this.length-1]]:[],this)},even:function(){
return this.filter(function(e,t){return t%2!=0})},odd:function(){return this.filter(function(e,t){
return t%2==0})}}),r});