var CggComponent=UnmanagedComponent.extend({ph:null,have_SVG:!0,getScriptUrl:function(){
return this.resourceFile},getOutputType:function(){return this.have_SVG?"svg":"png";
},detectSvg:function(){this.have_SVG=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);
},update:function(){if(this.detectSvg(),this.clear(),this.preExec()){var t=wd.helpers.cggHelper.getCggDrawUrl(),e=this.processParams(),r=this.getScriptUrl(),a=this,i=this.placeholder();
this.have_SVG?a.triggerAjax({url:t,data:e,type:"get"},function(s){try{i[0].appendChild(document.importNode(s.lastChild,!0)),
i.find("svg").width(a.width).height(a.height)}catch(n){a.createObj(t,r,e,a.width,a.height);
i[0].innerHTML=arguments[2].responseText,i.find("svg").width(a.width).height(a.height);
}}):a.synchronous(function(){i.html('<img src="'+t+"?"+$.param(e)+'" width="'+a.width+'" height="'+a.height+'"/>');
})}},processParams:function(){var t={};this._processParametersCore(t);var e=this.dashboard.debug;
return e>1&&(t.paramdebug=!0,t.paramdebugLevel=e),t.script=escape(this.getScriptUrl()),
t.outputType=this.getOutputType(),t},_processParametersCore:function(t){for(var e=this.dashboard,r=this.parameters,a=0,i=r.length;i>a;a++){
var s=r[a],n=e.getParameterValue(s[1]);$.isArray(n)&&1==n.length&&(""+n[0]).indexOf(";")>=0&&(n=doCsvQuoting(n[0],";")),
t["param"+s[0]]=n}},objectUrl:function(t,e,r){var a=t+"?",i=[];for(var s in r)r.hasOwnProperty(s)&&i.push(escape(s)+"="+escape(r[s]));
return a+="&"+i.join("&")},createObj:function(t,e,r,a,i){var s=document.createElement("object");
return s.setAttribute("type","image/svg+xml"),s.setAttribute("data",this.objectUrl(t,e,r)),
s.setAttribute("width",a),s.setAttribute("height",i),s}}),CggDialComponent=CggComponent.extend({
script:"system/pentaho-cdf-dd/resources/components/CggComponent/legacy/charts/dial.js",
priority:6,getScriptUrl:function(){return this.script},_processParametersCore:function(t){
t.paramvalue=this.dashboard.getParameterValue(this.parameter),t.paramcolors=this.colors,
t.paramscale=this.intervals}});