define("cdf/components/CggComponent.ext",["pentaho/environment"],function(e){return{
getCggDrawUrl:function(){return e.server.root+"plugin/cgg/api/services/draw"}}}),
define("cde/components/CggComponent/CggComponent",["cdf/components/UnmanagedComponent","cdf/components/CggComponent.ext","cdf/lib/jquery"],function(e,t,n){
return e.extend({ph:null,have_SVG:!0,getScriptUrl:function(){return this.resourceFile;
},getOutputType:function(){return this.have_SVG?"svg":"png"},detectSvg:function(){
this.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);
},update:function(){if(this.detectSvg(),this.clear(),this.preExec()){var e=t.getCggDrawUrl(),r=this.processParams(),i=this.getScriptUrl(),o=this,a=this.placeholder();
this.have_SVG?o.triggerAjax({url:e,data:r,type:"get"},function(t){try{a[0].appendChild(document.importNode(t.lastChild,!0)),
a.find("svg").width(o.width).height(o.height)}catch(n){o.createObj(e,i,r,o.width,o.height);
a[0].innerHTML=arguments[2].responseText,a.find("svg").width(o.width).height(o.height);
}}):o.synchronous(function(){a.html('<img src="'+e+"?"+n.param(r)+'" width="'+o.width+'" height="'+o.height+'"/>');
})}},processParams:function(){var e={};this._processParametersCore(e);var t=this.dashboard.debug;
return t>1&&(e.paramdebug=!0,e.paramdebugLevel=t),e.script=escape(this.getScriptUrl()),
e.outputType=this.getOutputType(),e},_processParametersCore:function(e){for(var t=this.dashboard,r=this.parameters,i=0,o=r.length;o>i;i++){
var a=r[i],s=t.getParameterValue(a[1]);n.isArray(s)&&1==s.length&&(""+s[0]).indexOf(";")>=0&&(s=doCsvQuoting(s[0],";")),
e["param"+a[0]]=s}},objectUrl:function(e,t,n){var r=e+"?",i=[];for(var o in n)n.hasOwnProperty(o)&&i.push(escape(o)+"="+escape(n[o]));
return r+="&"+i.join("&")},createObj:function(e,t,n,r,i){var o=document.createElement("object");
return o.setAttribute("type","image/svg+xml"),o.setAttribute("data",this.objectUrl(e,t,n)),
o.setAttribute("width",r),o.setAttribute("height",i),o}})}),define("cde/components/CggComponent",["cde/components/CggComponent/CggComponent"],function(e){
return e});