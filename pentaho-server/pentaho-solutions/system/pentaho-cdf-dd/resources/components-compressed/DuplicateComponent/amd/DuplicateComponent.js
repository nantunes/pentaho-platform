define("cde/components/DuplicateComponent/DuplicateComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery"],function(e,t,a){
var n=0;return e.extend({update:function(){var e=this,t=a("#"+e.htmlObject).empty(),n=a("<a href='javascript:;'>Duplicate</a>");
n.click(function(){e.duplicate()}),n.appendTo(t)},duplicate:function(e){var t=this,r="render_";
e=e||{},n+=1;var o="_"+n,c={};a.each(t.parameters,function(a,n){var r=n+o;t.dashboard.setBookmarkable(r,t.dashboard.isBookmarkable(n)),
t.dashboard.setParameter(r,e[n]||t.dashboard.getParameterValue(n)),c[n]=r});var i={};
a.each(t.components,function(e,t){var a=t+o;i[t]=a});var p={};p[t.targetHtmlObject]=(t.targetHtmlObject+o).replace(/([^\\])\$/g,"$1\\$");
var d=a("#"+t.targetHtmlObject).clone();d.attr("id",d.attr("id")+o),d.find("[id]").each(function(e,t){
var n=a(t);n.attr("id",n.attr("id")+o)}),t.targetContainer?d.appendTo("#"+t.targetContainer):d.insertAfter("#"+t.targetHtmlObject);
for(var m in t.components){var s=t.components[m];s=RegExp("^"+r).test(s)?s:r+s;var l=t.dashboard.getComponent(s);
if(l){p[l.htmlObject]=(l.htmlObject+o).replace(/([^\\])\$/g,"$1\\$");var u=l.clone(c,i,p);
u.name=u.name+o,t.dashboard.addComponents([u]),t.dashboard.update(u)}}},clone:function(e,a,n){
t.warn("This function is deprecated. Please use targetComponent.clone(...), see BaseComponent.js in CDF for more details.");
var r=this.base(e,a,n);return r.targetHtmlObject=n[r.targetHtmlObject],r.parameters&&(r.parameters=r.parameters.map(function(t){
return t in e?e[t]:t})),r}})}),define("cde/components/DuplicateComponent",["cde/components/DuplicateComponent/DuplicateComponent"],function(e){
return e});