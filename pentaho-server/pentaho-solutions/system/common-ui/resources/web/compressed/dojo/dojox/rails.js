dojo.provide("dojox.rails"),dojo.require("dojo.NodeList-traverse"),dojox.rails.live=function(t,a,e){
dojo.isIE&&a.match(/^(on)?submit$/i)?dojox.rails.live(t,"click",function(t){var a=t.target,o=a.tagName.toLowerCase();
if(("input"==o||"button"==o)&&"submit"==dojo.attr(a,"type").toLowerCase()){var r=dojo.query(a).closest("form");
if(r.length)var n=dojo.connect(r[0],"submit",function(t){dojo.disconnect(n),e.call(t.target,t);
})}}):dojo.connect(dojo.body(),a,function(a){var o=dojo.query(a.target).closest(t);
o.length&&e.call(o[0],a)})},dojo.ready(function(t,a,e){return function(){var o=t.query,r=a.live,n=o("meta[name=csrf-token]").attr("content"),i=o("meta[name=csrf-param]").attr("content"),d=function(t,a){
var e='<form style="display:none" method="post" action="'+t+'"><input type="hidden" name="_method" value="'+a+'" /><input type="hidden" name="'+i+'" value="'+n+'" /></form>';
return dojo.place(e,dojo.body())},c=function(a){t.forEach(a,function(a){if(!t.attr(a,"disabled")){
var e="input"==a.tagName.toLowerCase()?"value":"innerHTML",o=t.attr(a,"data-disable-with"),r=t.attr(a,e);
t.attr(a,"disabled",!0),t.attr(a,"data-original-value",r),t.attr(a,e,o)}})},l={text:"text",
json:"application/json","json-comment-optional":"text","json-comment-filtered":"text",
javascript:"application/javascript",xml:"text/xml"},u=function(a){var e=a.target,o=e.tagName.toLowerCase(),r="form"==o.toLowerCase()?t.formToObject(e):{},n=t.attr(e,"data-type")||"javascript",i=(t.attr(e,"method")||t.attr(e,"data-method")||"get").toLowerCase(),c=t.attr(e,"action")||t.attr(e,"href");
"form"!=o&&"get"!=i&&(e=d(c,i),i="POST"),a.preventDefault(),t.publish("ajax:before",[e]);
t.xhr(i,{url:c,headers:{Accept:l[n]},content:r,handleAs:n,load:function(a,o){t.publish("ajax:success",[e,a,o]);
},error:function(a,o){t.publish("ajax:failure",[e,a,o])},handle:function(a,o){t.publish("ajax:complete",[e,a,o]);
}});t.publish("ajax:after",[e])},s=function(a){o("*[data-disable-with][disabled]",a).forEach(function(a){
var e="input"==a.tagName.toLowerCase()?"value":"innerHTML",o=t.attr(a,"data-original-value");
t.attr(a,"disabled",!1),t.attr(a,"data-original-value",null),t.attr(a,e,o)})},f=function(t){
var a=t.target,e=d(a.href,dojo.attr(a,"data-method"));t.preventDefault(),e.submit();
},m=function(a){var e=a.target,r=o("*[data-disable-with]",e);r.length&&c(r),t.attr(e,"data-remote")&&(a.preventDefault(),
u(a))},j=function(a){var o=e.confirm(t.attr(a.target,"data-confirm"));o?t.attr(a.target,"data-remote")&&u(a):a.preventDefault();
};r("*[data-confirm]","click",j),t.subscribe("ajax:complete",s),r("a[data-remote]:not([data-confirm])","click",u),
r("a[data-method]:not([data-remote])","click",f),r("form","submit",m)}}(dojo,dojox.rails,dojo.global));