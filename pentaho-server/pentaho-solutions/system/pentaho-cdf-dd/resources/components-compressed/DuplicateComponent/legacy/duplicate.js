var DuplicateComponent=BaseComponent.extend({update:function(){var e=this,a=$("#"+e.htmlObject).empty(),t=$("<a href='javascript:;'>Duplicate</a>");
t.click(function(){e.duplicate()}),t.appendTo(a)},duplicate:function(e){var a=this,t="render_";
e=e||{},Dashboards.duplicateIndex||(Dashboards.duplicateIndex=0),Dashboards.duplicateIndex+=1;
var r="_"+Dashboards.duplicateIndex,n={};$.each(a.parameters,function(a,t){var o=t+r;
Dashboards.setBookmarkable(o,Dashboards.isBookmarkable(t)),Dashboards.setParameter(o,e[t]||Dashboards.getParameterValue(t)),
n[t]=o});var o={};$.each(a.components,function(e,a){var t=a+r;o[a]=t});var s={};s[a.targetHtmlObject]=(a.targetHtmlObject+r).replace(/([^\\])\$/g,"$1\\$");
var d=$("#"+a.targetHtmlObject).clone();d.attr("id",d.attr("id")+r),d.find("[id]").each(function(e,a){
var t=$(a);t.attr("id",t.attr("id")+r)}),a.targetContainer?d.appendTo("#"+a.targetContainer):d.insertAfter("#"+a.targetHtmlObject);
for(c in a.components){var i=a.components[c];i=RegExp("^"+t).test(i)?i:t+i;var p=Dashboards.getComponent(i);
if(p){s[p.htmlObject]=(p.htmlObject+r).replace(/([^\\])\$/g,"$1\\$");var m=p.clone(n,o,s);
m.name=m.name+r,window[m.name]=m,Dashboards.addComponents([m]),Dashboards.update(m);
}}},clone:function(e,a,t){Dashboards.log("This function is deprecated. Please use targetComponent.clone(...), see BaseComponent in CDF (core.js) for more details.","warn");
var r=this.base(e,a,t);return r.targetHtmlObject=t[r.targetHtmlObject],r.parameters&&(r.parameters=r.parameters.map(function(a){
return a in e?e[a]:a})),r}});