define(["dojo/aspect","dojo/_base/declare","./_base","dijit/_TemplatedMixin","dojo/dom-construct","dojo/cache","dojo/_base/array","dojo/string","dojo/parser"],function(e,t,i,a,o,d,r,s,n){
return t("dojox.dtl._Templated",a,{_dijitTemplateCompat:!1,buildRendering:function(){
var t;if(!this.domNode||this._template){if(!this._template){var a=this.getCachedTemplate(this.templatePath,this.templateString,this._skipNodeCache);
a instanceof i.Template?this._template=a:t=a.cloneNode(!0)}if(!t){var d=new i._Context(this);
this._created||delete d._getter;var r=o.toDom(this._template.render(d));if(1!==r.nodeType&&3!==r.nodeType)for(var s=0,h=r.childNodes.length;h>s&&(t=r.childNodes[s],
1!=t.nodeType);++s);else t=r}if(this._attachTemplateNodes(t),this.widgetsInTemplate){
var p,l,m=n;"[dojoType]"!=m._query&&(p=m._query,l=m._attrName,m._query="[dojoType]",
m._attrName="dojoType");var c=this._startupWidgets=n.parse(t,{noStart:!this._earlyTemplatedStartup,
inherited:{dir:this.dir,lang:this.lang}});p&&(m._query=p,m._attrName=l);for(var s=0;s<c.length;s++)this._processTemplateNode(c[s],function(e,t){
return e[t]},function(t,i,a){return i in t?e.after(t,i,a,!0):t.on(i,a,!0)})}this.domNode&&(o.place(t,this.domNode,"before"),
this.destroyDescendants(),o.destroy(this.domNode)),this.domNode=t,this._fillContent(this.srcNodeRef);
}},_processTemplateNode:function(e,t,i){return this.widgetsInTemplate&&(t(e,"dojoType")||t(e,"data-dojo-type"))?!0:void this.inherited(arguments);
},_templateCache:{},getCachedTemplate:function(e,t,a){var r=this._templateCache,n=t||e;
return r[n]?r[n]:(t=s.trim(t||d(e,{sanitize:!0})),this._dijitTemplateCompat&&(a||t.match(/\$\{([^\}]+)\}/g))&&(t=this._stringRepl(t)),
a||!t.match(/\{[{%]([^\}]+)[%}]\}/g)?r[n]=o.toDom(t):r[n]=new i.Template(t))},render:function(){
this.buildRendering()},startup:function(){r.forEach(this._startupWidgets,function(e){
e&&!e._started&&e.startup&&e.startup()}),this.inherited(arguments)}})});