define("cde/components/AjaxRequestComponent/AjaxRequestComponent",["cdf/components/BaseComponent","cdf/Logger","cdf/lib/jquery","cdf/dashboard/Utils"],function(e,r,t,n){
return e.extend({visible:!1,update:function(){this.executeRequest(this)},parseXML:function(e){
if(!e)return null;var t;try{return(new DOMParser).parseFromString(e,"text/xml")}catch(n){
try{return t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e),t;
}catch(n){}}return r.error("XML is invalid or no XML parser found"),null},executeRequest:function(e){
var o=this,a=e.url,i=e.ajaxRequestType,s=e.parameters,u=e.asyncCall;if(void 0==a)return void r.error("Fatal - No url passed");
if(void 0==i&&(i="json"),void 0!=s){for(var d=!1,p=0;p<s.length;p++){var c;"time"==s[p][0]?(c=(new Date).getTime(),
d=!0):c=o.dashboard.getParameterValue(s[p][0]),s[p][1]=c}d?s.push(["time",(new Date).getTime()]):0,
s=n.propertiesArrayToObject(s)}else s={};void 0==u&&(u=!0),t.ajax({url:a,type:"GET",
dataType:i,async:u,data:s,complete:function(n,a){var i=n.responseText,s=void 0;if(void 0==i)return void r.error("Found error: Empty Data");
if("xml"==this.dataType||"html"==this.dataType){if(i=o.parseXML(i),null==i)return;
var u=i.getElementsByTagName("return");if(!(u.length>0&&u[0].firstChild))return;i=u[0].firstChild.nodeValue,
i=t.parseJSON(i)}else if("json"==this.dataType)i=t.parseJSON(i);else if("script"!=this.dataType&&"text"!=this.dataType)return void r.error("Found error: Unknown returned format");
"function"==typeof e.postFetch&&(s=e.postFetch(i)),void 0!=s&&(i=s),void 0!=e.resultvar&&o.dashboard.fireChange(e.resultvar,i);
},error:function(e,t,n){r.error("Found error: "+e+" - "+t+", Error: "+n)}})}})}),
define("cde/components/AjaxRequestComponent",["cde/components/AjaxRequestComponent/AjaxRequestComponent"],function(e){
return e});