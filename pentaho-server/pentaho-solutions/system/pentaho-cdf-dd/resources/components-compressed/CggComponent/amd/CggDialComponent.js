define("cdf/components/CggComponent.ext",["pentaho/environment"],function(e){return{
getCggDrawUrl:function(){return e.server.root+"plugin/cgg/api/services/draw"}}}),
define("cde/components/CggComponent/CggComponent",["cdf/components/UnmanagedComponent","cdf/components/CggComponent.ext","cdf/lib/jquery"],function(e,t,r){
return e.extend({ph:null,have_SVG:!0,getScriptUrl:function(){return this.resourceFile;
},getOutputType:function(){return this.have_SVG?"svg":"png"},detectSvg:function(){
this.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);
},update:function(){if(this.detectSvg(),this.clear(),this.preExec()){var e=t.getCggDrawUrl(),n=this.processParams(),o=this.getScriptUrl(),i=this,a=this.placeholder();
this.have_SVG?i.triggerAjax({url:e,data:n,type:"get"},function(t){try{a[0].appendChild(document.importNode(t.lastChild,!0)),
a.find("svg").width(i.width).height(i.height)}catch(r){i.createObj(e,o,n,i.width,i.height);
a[0].innerHTML=arguments[2].responseText,a.find("svg").width(i.width).height(i.height);
}}):i.synchronous(function(){a.html('<img src="'+e+"?"+r.param(n)+'" width="'+i.width+'" height="'+i.height+'"/>');
})}},processParams:function(){var e={};this._processParametersCore(e);var t=this.dashboard.debug;
return t>1&&(e.paramdebug=!0,e.paramdebugLevel=t),e.script=escape(this.getScriptUrl()),
e.outputType=this.getOutputType(),e},_processParametersCore:function(e){for(var t=this.dashboard,n=this.parameters,o=0,i=n.length;i>o;o++){
var a=n[o],s=t.getParameterValue(a[1]);r.isArray(s)&&1==s.length&&(""+s[0]).indexOf(";")>=0&&(s=doCsvQuoting(s[0],";")),
e["param"+a[0]]=s}},objectUrl:function(e,t,r){var n=e+"?",o=[];for(var i in r)r.hasOwnProperty(i)&&o.push(escape(i)+"="+escape(r[i]));
return n+="&"+o.join("&")},createObj:function(e,t,r,n,o){var i=document.createElement("object");
return i.setAttribute("type","image/svg+xml"),i.setAttribute("data",this.objectUrl(e,t,r)),
i.setAttribute("width",n),i.setAttribute("height",o),i}})}),define("cde/components/CggComponent",["cde/components/CggComponent/CggComponent"],function(e){
return e}),define("cde/components/CggComponent/CggDialComponent",["./CggComponent"],function(e){
return e.extend({script:"system/pentaho-cdf-dd/resources/components/CggComponent/amd/charts/dial.js",
priority:6,getScriptUrl:function(){return this.script},_processParametersCore:function(e){
e.paramvalue=this.dashboard.getParameterValue(this.parameter),e.paramcolors=this.colors,
e.paramscale=this.intervals}})});