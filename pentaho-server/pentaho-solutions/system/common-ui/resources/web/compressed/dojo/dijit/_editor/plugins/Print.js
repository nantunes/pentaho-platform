define(["dojo/_base/declare","dojo/i18n","dojo/_base/lang","dojo/sniff","../../focus","../_Plugin","../../form/Button","dojo/i18n!../nls/commands"],function(t,e,n,i,o,r,a){
var d=t("dijit._editor.plugins.Print",r,{_initButton:function(){var t=e.getLocalization("dijit._editor","commands"),i=this.editor;
this.button=new a({label:t.print,ownerDocument:i.ownerDocument,dir:i.dir,lang:i.lang,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Print",tabIndex:"-1",
onClick:n.hitch(this,"_print")})},setEditor:function(t){this.editor=t,this._initButton(),
this.editor.onLoadDeferred.then(n.hitch(this,function(){this.editor.iframe.contentWindow.print||this.button.set("disabled",!0);
}))},updateState:function(){var t=this.get("disabled");this.editor.iframe.contentWindow.print||(t=!0),
this.button.set("disabled",t)},_print:function(){var t=this.editor.iframe;if(t.contentWindow.print)if(i("opera")||i("chrome")){
var e=this.editor.document,n=this.editor.get("value");n="<html><head><meta http-equiv='Content-Type' content='text/html; charset='UTF-8'></head><body>"+n+"</body></html>";
var r=window.open("javascript: ''","","status=0,menubar=0,location=0,toolbar=0,width=1,height=1,resizable=0,scrollbars=0");
r.document.open(),r.document.write(n),r.document.close();var a=e.getElementsByTagName("style");
if(a){var d;for(d=0;d<a.length;d++){var s=a[d].innerHTML,c=r.document.createElement("style");
c.appendChild(r.document.createTextNode(s)),r.document.getElementsByTagName("head")[0].appendChild(c);
}}r.print(),r.close()}else o.focus(t),t.contentWindow.print()}});return r.registry.print=function(){
return new d({command:"print"})},d});