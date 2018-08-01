define(["dojo/_base/declare","dojo/_base/html","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/sniff","dojo/_base/xhr","dojo/_base/array","dojo/query","dojo/DeferredList","../_Plugin","../../EnhancedGrid","./exporter/TableWriter"],function(t,e,i,r,o,n,s,h,l,d,a,c){
var p=t("dojox.grid.enhanced.plugins.Printer",d,{name:"printer",constructor:function(t){
this.grid=t,this._mixinGrid(t),t.setExportFormatter(function(t,e,i,r){return e.format(i,r);
})},_mixinGrid:function(){var t=this.grid;t.printGrid=r.hitch(this,this.printGrid),
t.printSelected=r.hitch(this,this.printSelected),t.exportToHTML=r.hitch(this,this.exportToHTML),
t.exportSelectedToHTML=r.hitch(this,this.exportSelectedToHTML),t.normalizePrintedGrid=r.hitch(this,this.normalizeRowHeight);
},printGrid:function(t){this.exportToHTML(t,r.hitch(this,this._print))},printSelected:function(t){
this.exportSelectedToHTML(t,r.hitch(this,this._print))},exportToHTML:function(t,e){
t=this._formalizeArgs(t);var i=this;this.grid.exportGrid("table",t,function(r){i._wrapHTML(t.title,t.cssFiles,t.titleInBody+r).then(e);
})},exportSelectedToHTML:function(t,e){t=this._formalizeArgs(t);var i=this;this.grid.exportSelected("table",t.writerArgs,function(r){
i._wrapHTML(t.title,t.cssFiles,t.titleInBody+r).then(e)})},_loadCSSFiles:function(t){
var e=s.map(t,function(t){if(t=r.trim(t),".css"===t.substring(t.length-4).toLowerCase())return n.get({
url:t});var e=new i;return e.callback(t),e});return l.prototype.gatherResults(e)},
_print:function(t){var i,r=this,n=function(e){var i=e.document;i.open(),i.write(t),
i.close(),r.normalizeRowHeight(i)};if(window.print)if(o("chrome")||o("opera"))i=window.open("javascript: ''","","status=0,menubar=0,location=0,toolbar=0,width=1,height=1,resizable=0,scrollbars=0"),
n(i),i.print(),i.close();else{var s=this._printFrame,h=this.grid.domNode;if(!s){var l=h.id+"_print_frame";
(s=e.byId(l))||(s=e.create("iframe"),s.id=l,s.frameBorder=0,e.style(s,{width:"1px",
height:"1px",position:"absolute",right:0,bottom:0,border:"none",overflow:"hidden"
}),o("ie")||e.style(s,"visibility","hidden"),h.appendChild(s)),this._printFrame=s;
}i=s.contentWindow,n(i),i.focus(),i.print()}},_wrapHTML:function(t,i,r){return this._loadCSSFiles(i).then(function(i){
var o,n=['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',"<html ",e._isBodyLtr()?"":'dir="rtl"',"><head><title>",t,'</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>'];
for(o=0;o<i.length;++o)n.push('<style type="text/css">',i[o],"</style>");return n.push("</head>"),
r.search(/^\s*<body/i)<0&&(r="<body>"+r+"</body>"),n.push(r,"</html>"),n.join("");
})},normalizeRowHeight:function(t){var i,r,o,n=h(".grid_view",t.body),l=s.map(n,function(t){
return h(".grid_header",t)[0]}),d=s.map(n,function(t){return h(".grid_row",t)}),a=d[0].length,c=0;
for(r=n.length-1;r>=0;--r)o=e.contentBox(l[r]).h,o>c&&(c=o);for(r=n.length-1;r>=0;--r)e.style(l[r],"height",c+"px");
for(i=0;a>i;++i){for(c=0,r=n.length-1;r>=0;--r)o=e.contentBox(d[r][i]).h,o>c&&(c=o);
for(r=n.length-1;r>=0;--r)e.style(d[r][i],"height",c+"px")}var p=0,u=e._isBodyLtr();
for(r=0;r<n.length;++r)e.style(n[r],u?"left":"right",p+"px"),p+=e.marginBox(n[r]).w;
},_formalizeArgs:function(t){return t=t&&r.isObject(t)?t:{},t.title=String(t.title)||"",
r.isArray(t.cssFiles)||(t.cssFiles=[t.cssFiles]),t.titleInBody=t.title?["<h1>",t.title,"</h1>"].join(""):"",
t}});return a.registerPlugin(p,{dependency:["exporter"]}),p});