define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser","dojo/query","./_Widget","./_TemplatedMixin","./_WidgetsInTemplateMixin","dojo/NodeList-dom"],function(t,e,o,a,i,r,n,d,s){
return o("dijit.Declaration",n,{_noScript:!0,stopParser:!0,widgetClass:"",defaults:null,
mixins:[],buildRendering:function(){var c=this.srcNodeRef.parentNode.removeChild(this.srcNodeRef),p=r("> script[type='dojo/method']",c).orphan(),h=r("> script[type='dojo/connect']",c).orphan(),u=r("> script[type='dojo/aspect']",c).orphan(),j=c.nodeName,g=this.defaults||{};
t.forEach(p,function(t){var e=t.getAttribute("event")||t.getAttribute("data-dojo-event"),o=i._functionFromScript(t,"data-dojo-");
e?g[e]=o:u.push(t)}),this.mixins.length?this.mixins=t.map(this.mixins,function(t){
return a.getObject(t)}):this.mixins=[n,d,s],g._skipNodeCache=!0,g.templateString="<"+j+" class='"+c.className+"' data-dojo-attach-point='"+(c.getAttribute("data-dojo-attach-point")||c.getAttribute("dojoAttachPoint")||"")+"' data-dojo-attach-event='"+(c.getAttribute("data-dojo-attach-event")||c.getAttribute("dojoAttachEvent")||"")+"' >"+c.innerHTML.replace(/\%7B/g,"{").replace(/\%7D/g,"}")+"</"+j+">";
var f=o(this.widgetClass,this.mixins,g);t.forEach(u,function(t){var o=(t.getAttribute("data-dojo-advice")||"after",
t.getAttribute("data-dojo-method")||"postscript"),a=i._functionFromScript(t);e.after(f.prototype,o,a,!0);
}),t.forEach(h,function(t){var o=t.getAttribute("event")||t.getAttribute("data-dojo-event"),a=i._functionFromScript(t);
e.after(f.prototype,o,a,!0)})}})});