/*!
 * Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define(["cdf/lib/Base","common-ui/util/base64","common-ui/util/formatting","./Parameter","./ParameterDefinition","./ParameterGroup","./ParameterValue","common-ui/jquery-clean","cdf/Logger","dojox/html/entities"],function(e,r,t,a,n,i,o,u,m,s){
var l=function(e){var r=new DOMParser,t=r.parseFromString(e,"text/xml"),a=t.documentElement;
return a&&a.nodeName&&"parsererror"!==a.nodeName||u.error("Invalid XML: "+e),t},p=function(e,r){
var t=function(e,r,t){var a=e.errors[r];a||(a=[]),a.push(s.encode(t)),e.errors[r]=a;
};r.find("error").each(function(r,a){var n=u(a),i=v(n,"parameter"),o=v(n,"message");
t(e,i,o)}.bind(this)),r.find("global-error").each(function(r,a){var n=u(a),i=v(n,"message");
t(e,null,i)}.bind(this))},d=function(e,r){r.find("parameter").each(function(r,t){
var a=c(t);t=u(t);var n=a.attributes["parameter-group"];void 0!=n&&u.trim(n).length||(n="parameters");
var o=e.getParameterGroup(n);o||(o=new i,o.name=n,o.label=a.attributes["parameter-group-label"],
e.parameterGroups.push(o)),o.parameters.push(a)}.bind(this))},c=function(e){var r=new a;
return e=u(e),r.name=v(e,"name",!0),r.mandatory=b(e,"is-mandatory"),r.strict=b(e,"is-strict"),
r.list=b(e,"is-list"),r.multiSelect=b(e,"is-multi-select"),r.type=v(e,"type",!0),
r.timezoneHint=e.attr("timezone-hint"),u(e).find("attribute").each(function(e,t){
t=u(t),r.attributes[t.attr("name")]=t.attr("value")}),r.values=f(e,r),r},f=function(e,a){
var n=[];return u(e).find("values value").each(function(e,i){var m=new o;i=u(i),"true"==i.attr("encoded")?m.label=r.base64Decode(v(i,"label")):m.label=v(i,"label"),
"true"==v(i,"null")?m.value="":"true"==i.attr("encoded")?m.value=r.base64Decode(v(i,"value")):m.value=v(i,"value"),
m.type=v(i,"type"),void 0!=m.type&&u.trim(m.type).length||(m.type=a.type),m.selected=b(i,"selected"),
m.value=t.normalizeParameterValue(a,m.type,m.value),n.push(m)}.bind(this)),n},v=function(e,r,t){
var a=e.attr(r);if(!a){var n="ParameterDefinition: no attribute '"+r+"' found";if(t)throw new Error(n);
m.warn(n)}return a},b=function(e,r){if("true"==e.attr(r))return!0;if("false"!=e.attr(r)){
var t="ParameterDefinition: expected '"+r+"' to be boolean, got '"+e.attr(r)+"' instead";
m.warn(t)}return!1};return e.extend({parseParameterXml:function(e){if("string"!=typeof e)throw new Error("parseParameterXml argument is not a string, parser expects a xml string");
if(""==e)throw new Error("parseParameterXml argument is an empty string, parser expects a valid xml string");
var r=u(l(e)),t=r.find("parsererror");if(t.length>0)throw new Error("parseParameterXml error parsing xml string: "+t.find("div").html());
var a=new n,i=u(r.find("parameters")[0]);a.promptNeeded=b(i,"is-prompt-needed"),a.ignoreBiServer5538=b(i,"ignore-biserver-5538"),
a.paginate=b(i,"paginate"),a.layout=v(i,"layout");var o=function(e,r){var t=parseInt(e);
return"NaN"==t?r:t};return a.page=o(v(i,"accepted-page"),0),a.totalPages=o(v(i,"page-count"),0),
a.autoSubmit=v(i,"autoSubmit"),"true"==a.autoSubmit?a.autoSubmit=!0:"false"==a.autoSubmit?a.autoSubmit=!1:a.autoSubmit=void 0,
a.autoSubmitUI=b(i,"autoSubmitUI"),a.minimized=b(i,"minimized"),d(a,i),p(a,r),a}});
});