define(["dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/query","../_base","../dom","dojo/parser","dojo/_base/sniff"],function(t,e,n,i,o,r,s,d){
function a(t){var e=t.cloneNode(!0);return d("ie")&&i("script",e).forEach("item.text = this[index].text;",i("script",t)),
e}var c=t.getObject("contrib.dijit",!0,o);return c.AttachNode=t.extend(function(t,e){
this._keys=t,this._object=e},{render:function(t,e){if(!this._rendered){this._rendered=!0;
for(var n,i=0;n=this._keys[i];i++)t.getThis()[n]=this._object||e.getParent()}return e;
},unrender:function(t,e){if(this._rendered){this._rendered=!1;for(var n,i=0;n=this._keys[i];i++)t.getThis()[n]===(this._object||e.getParent())&&delete t.getThis()[n];
}return e},clone:function(t){return new this.constructor(this._keys,this._object);
}}),c.EventNode=t.extend(function(e,n){this._command=e;for(var i,o=e.split(/\s*,\s*/),r=t.trim,s=[],d=[];i=o.pop();)if(i){
var a=null;if(-1!=i.indexOf(":")){var c=i.split(":");i=r(c[0]),a=r(c.slice(1).join(":"));
}else i=r(i);a||(a=i),s.push(i),d.push(a)}this._types=s,this._fns=d,this._object=n,
this._rendered=[]},{_clear:!1,render:function(i,r){for(var s,d=0;s=this._types[d];d++){
this._clear||this._object||(r.getParent()[s]=null);var a,c=this._fns[d];if(-1!=c.indexOf(" ")&&(this._rendered[d]&&(e.disconnect(this._rendered[d]),
this._rendered[d]=!1),a=n.map(c.split(" ").slice(1),function(t){return new o._Filter(t).resolve(i);
}),c=c.split(" ",2)[0]),!this._rendered[d])if(this._object){var h=c;t.isArray(a)&&(h=function(t){
this[c].apply(this,[t].concat(a))}),this._rendered[d]=e.connect(this._object,s,i.getThis(),c);
}else this._rendered[d]=r.addEvent(i,s,c,a)}return this._clear=!0,r},unrender:function(t,n){
for(;this._rendered.length;)e.disconnect(this._rendered.pop());return n},clone:function(){
return new this.constructor(this._command,this._object)}}),c.DojoTypeNode=t.extend(function(e,n){
this._node=e,this._parsed=n;var i=e.getAttribute("dojoAttachEvent")||e.getAttribute("data-dojo-attach-event");
i&&(this._events=new c.EventNode(t.trim(i)));var r=e.getAttribute("dojoAttachPoint")||e.getAttribute("data-dojo-attach-point");
if(r&&(this._attach=new c.AttachNode(t.trim(r).split(/\s*,\s*/))),n){e=a(e);var d=c.widgetsInTemplate;
c.widgetsInTemplate=!1,this._template=new o.DomTemplate(e),c.widgetsInTemplate=d}else this._dijit=s.instantiate([a(e)])[0];
},{render:function(t,e){if(this._parsed){var n=new o.DomBuffer;this._template.render(t,n);
var i=a(n.getRootNode()),r=document.createElement("div");r.appendChild(i);var d=r.innerHTML;
r.removeChild(i),d!=this._rendered&&(this._rendered=d,this._dijit&&this._dijit.destroyRecursive(),
this._dijit=s.instantiate([i])[0])}var c=this._dijit.domNode;return this._events&&(this._events._object=this._dijit,
this._events.render(t,e)),this._attach&&(this._attach._object=this._dijit,this._attach.render(t,e)),
e.concat(c)},unrender:function(t,e){return e.remove(this._dijit.domNode)},clone:function(){
return new this.constructor(this._node,this._parsed)}}),t.mixin(c,{widgetsInTemplate:!0,
dojoAttachPoint:function(t,e){return new c.AttachNode(e.contents.slice(-1!==e.contents.indexOf("data-")?23:16).split(/\s*,\s*/));
},dojoAttachEvent:function(t,e){return new c.EventNode(e.contents.slice(-1!==e.contents.indexOf("data-")?23:16));
},dojoType:function(t,e){var n=!1;" parsed"==e.contents.slice(-7)&&(n=!0);var i=-1!==e.contents.indexOf("data-")?e.contents.slice(15):e.contents.slice(9),r=n?i.slice(0,-7):i.toString();
if(c.widgetsInTemplate){var s=t.swallowNode();return s.setAttribute("data-dojo-type",r),
new c.DojoTypeNode(s,n)}return new o.AttributeNode("data-dojo-type",r)},on:function(t,e){
var n=e.contents.split();return new c.EventNode(n[0]+":"+n.slice(1).join(" "))}}),
c["data-dojo-type"]=c.dojoType,c["data-dojo-attach-point"]=c.dojoAttachPoint,c["data-dojo-attach-event"]=c.dojoAttachEvent,
o.register.tags("dojox.dtl.contrib",{dijit:["attr:dojoType","attr:data-dojo-type","attr:dojoAttachPoint","attr:data-dojo-attach-point",["attr:attach","dojoAttachPoint"],["attr:attach","data-dojo-attach-point"],"attr:dojoAttachEvent","attr:data-dojo-attach-event",[/(attr:)?on(click|key(up))/i,"on"]]
}),c});