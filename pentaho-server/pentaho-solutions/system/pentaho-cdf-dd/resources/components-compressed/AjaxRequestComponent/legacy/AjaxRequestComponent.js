var AjaxRequestComponent=BaseComponent.extend({visible:!1,update:function(){this.executeRequest(this);
},parseXML:function(e){if(!e)return null;var r;try{return parser=new DOMParser,r=parser.parseFromString(e,"text/xml");
}catch(t){try{return r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(e),
r}catch(t){}}return alert("XML is invalid or no XML parser found"),null},executeRequest:function(e){
var r=e.url,t=e.ajaxRequestType,a=e.parameters,o=e.asyncCall;if(void 0==r)return void Dashboards.log("Fatal - No url passed","error");
if(void 0==t&&(t="json"),void 0!=a){for(var s=!1,n=0;n<a.length;n++){var i;"time"==a[n][0]?(i=(new Date).getTime(),
s=!0):i=Dashboards.getParameterValue(a[n][0]),a[n][1]=i}s?a.push(["time",(new Date).getTime()]):0,
a=Dashboards.propertiesArrayToObject(a)}else a={};void 0==o&&(o=!0),$.ajax({url:r,
type:"GET",dataType:t,async:o,data:a,complete:function(r,t){var a=r.responseText,o=void 0;
if(void 0==a)return void Dashboards.log("Found error: Empty Data");if("xml"==this.dataType||"html"==this.dataType){
var s;try{parser=new DOMParser,s=parser.parseFromString(a,"text/xml")}catch(n){try{
s=new ActiveXObject("Microsoft.XMLDOM"),s.async="false",s.loadXML(a),a=s}catch(n){
Dashboards.log("XML is invalid or no XML parser found")}}a=s;var i=a.getElementsByTagName("return");
if(!(i.length>0&&i[0].firstChild))return;a=i[0].firstChild.nodeValue,a=$.parseJSON(a);
}else if("json"==this.dataType)a=$.parseJSON(a);else if("script"!=this.dataType&&"text"!=this.dataType)return void Dashboards.log("Found error: Unknown returned format");
"function"==typeof e.postFetch&&(o=e.postFetch(a)),void 0!=o&&(a=o),void 0!=e.resultvar&&Dashboards.fireChange(e.resultvar,a);
},error:function(e,r,t){Dashboards.log("Found error: "+e+" - "+r+", Error: "+t,"error");
}})}});