define(["dojo/_base/lang","./_base","dijit/_WidgetBase","dojo/query"],function(t,e,n,o){
return e.Inline=t.extend(function(t,e){this.create(t,e)},n.prototype,{context:null,
render:function(t){this.context=t||this.context,this.postMixInProperties(),o("*",this.domNode).orphan(),
this.domNode.innerHTML=this.template.render(this.context)},declaredClass:"dojox.dtl.Inline",
buildRendering:function(){var n=this.domNode=document.createElement("div"),o=this.srcNodeRef;
o.parentNode&&o.parentNode.replaceChild(n,o),this.template=new e.Template(t.trim(o.text),!0),
this.render()},postMixInProperties:function(){this.context=this.context.get===e._Context.prototype.get?this.context:new e._Context(this.context);
}})});