define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/dom-class","dojo/dom-construct","dijit/registry","../lazyLoadUtils"],function(e,n,o,t,r,d,l,s){
return o("dojox.mobile.dh.HtmlContentHandler",null,{parse:function(e,n,o){this.execScript&&(e=this.execScript(e));
var a=d.create("div",{innerHTML:e,style:{visibility:"hidden"}});return n.insertBefore(a,o),
t.when(s.instantiateLazyWidgets(a),function(){var e;for(i=0,len=a.childNodes.length;i<len;i++){
var t=a.firstChild;e||1!==t.nodeType||(e=l.byNode(t)),n.insertBefore(a.firstChild,o);
}return n.removeChild(a),e&&r.contains(e.domNode,"mblView")?e.id:(console.log("HtmlContentHandler.parse: invalid view content"),
null)})}})});