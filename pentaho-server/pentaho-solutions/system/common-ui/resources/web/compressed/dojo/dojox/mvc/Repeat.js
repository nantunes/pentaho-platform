define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom","dojo/dom-construct","dojo/_base/array","dojo/query","dojo/when","dijit/registry","./_Container"],function(e,t,i,d,s,n,r,o,a,h,l){
return e("dojox.mvc.Repeat",l,{index:0,useParent:"",removeRepeatNode:!1,children:null,
_relTargetProp:"children",startup:function(){if(this.removeRepeatNode){t.isFunction(this.getParent)&&this.getParent()&&(this.select=this.getParent().select,
this.onCheckStateChanged=this.getParent().onCheckStateChanged)}this.inherited(arguments),
this._setChildrenAttr(this.children)},postscript:function(e,t){if(this.useParent&&s.byId(this.useParent)?this.srcNodeRef=s.byId(this.useParent):this.srcNodeRef=s.byId(t),
this.srcNodeRef){var i=this._attachTemplateNodes?"inlineTemplateString":"templateString";
""==this[i]&&(this[i]=this.srcNodeRef.innerHTML);try{this.srcNodeRef.innerHTML="";
}catch(d){for(;this.srcNodeRef.firstChild;)this.srcNodeRef.removeChild(this.srcNodeRef.firstChild);
}}this.inherited(arguments)},_setChildrenAttr:function(e){var t=this.children;this._set("children",e),
this.binding!=e&&this.set("ref",e),!this._started||this._builtOnce&&t==e||(this._builtOnce=!0,
this._buildContained(e))},_buildContained:function(e){if(e){this.useParent&&s.byId(this.useParent)&&(this.srcNodeRef=s.byId(this.useParent)),
this._destroyBody(),this._updateAddRemoveWatch(e);var r=[],o=this._attachTemplateNodes?"inlineTemplateString":"templateString";
for(this.index=0;t.isFunction(e.get)?e.get(this.index):e[this.index];this.index++)r.push(this._exprRepl(this[o]));
var l=this.containerNode||this.srcNodeRef||this.domNode;if(i("ie")&&/^(table|tbody)$/i.test(l.tagName)){
var c=d.doc.createElement("div");c.innerHTML="<table><tbody>"+r.join("")+"</tbody></table>";
for(var f=c.getElementsByTagName("tbody")[0];f.firstChild;)l.appendChild(f.firstChild);
}else if(i("ie")&&/^td$/i.test(l.tagName)){var c=d.doc.createElement("div");c.innerHTML="<table><tbody><tr>"+r.join("")+"</tr></tbody></table>";
for(var m=c.getElementsByTagName("tr")[0];m.firstChild;)l.appendChild(m.firstChild);
}else l.innerHTML=r.join("");this.srcNodeRef=l;var u=this;a(this._createBody(),function(){
if(u.removeRepeatNode){var e=u.domNode;!u.savedParentId&&u.domNode.parentNode&&u.domNode.parentNode.id&&(u.savedParentId=u.domNode.parentNode.id);
var t=s.byId(u.savedParentId);if(e&&e.children){for(var i=h.findWidgets(e),d=i.length,r=d;r>0;r--)if("dojox.mvc.Group"==i[r-1].declaredClass)for(var o=e.children[r-1].children.length,a=h.byId(t.id).select,l=o;l>0;l--)h.byId(e.children[r-1].id).select=a,
n.place(e.children[r-1].removeChild(e.children[r-1].children[l-1]),t,"first");else n.place(e.removeChild(e.children[r-1]),t,"first");
n.destroy(e)}}})}},_updateAddRemoveWatch:function(e){this._addRemoveWatch&&this._addRemoveWatch.unwatch();
var i=this;this._addRemoveWatch=t.isFunction(e.watchElements)&&e.watchElements(function(e,t,d){
(!t||!d||t.length||d.length)&&i._buildContained(i.children)})}})});