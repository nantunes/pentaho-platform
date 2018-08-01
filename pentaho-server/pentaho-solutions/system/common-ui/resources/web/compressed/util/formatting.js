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

define("common-ui/util/formatting",["common-ui/util/timeutil","common-ui/util/TextFormatter"],function(t,e){
return{createDataTransportFormatter:function(t){var r=e.getFormatType(t.type);return"number"==r?{
format:function(t){return""+t},parse:function(t){return t}}:"date"==r?this._createDateTransportFormatter(t):void 0;
},createFormatter:function(t,r){var a=r||t.attributes["data-format"];return!t.list&&a?e.createFormatter(t.type,a):void 0;
},_initDateFormatters:function(){this.dateFormatters||(this.dateFormatters={"with-timezone":e.createFormatter("date","yyyy-MM-dd'T'HH:mm:ss.SSSZ"),
"without-timezone":e.createFormatter("date","yyyy-MM-dd'T'HH:mm:ss.SSS"),utc:e.createFormatter("date","yyyy-MM-dd'T'HH:mm:ss.SSS'+0000'"),
simple:e.createFormatter("date","yyyy-MM-dd")})},_createDataTransportFormatter:function(t,r){
var a=e.getFormatType(t.type);if("number"==a)return{format:function(t){return r.format(t);
},parse:function(t){return""+r.parse(t)}};if("date"==a){var i=this._createDateTransportFormatter(t);
return{format:function(t){return r.format(i.parse(t))},parse:function(t){return i.format(r.parse(t));
}}}},_createDateTransportFormatter:function(r,a){var i=r.attributes.timezone;return this._initDateFormatters(),
{format:function(r){if("client"===i)return this.dateFormatters["with-timezone"].format(r);
if("server"!==i&&i){if("utc"===i)return this.dateFormatters.utc.format(r);var a=t.getOffsetAsString(i,r);
return this.dateFormatters[a]||(this.dateFormatters[a]=e.createFormatter("date","yyyy-MM-dd'T'HH:mm:ss.SSS'"+a+"'")),
this.dateFormatters[a].format(r)}return this.dateFormatters["without-timezone"].format(r);
}.bind(this),parse:function(t){if("client"===i)try{return this.dateFormatters["with-timezone"].parse(t);
}catch(e){}try{return this.parseDateWithoutTimezoneInfo(t)}catch(e){}try{if(10==t.length)return this.dateFormatters.simple.parse(t);
}catch(e){}try{return new Date(parseFloat(t))}catch(e){}return""}.bind(this)}},parseDateWithoutTimezoneInfo:function(t){
return 28===t.length&&(t=t.substring(0,23)),this.dateFormatters["without-timezone"].parse(t);
},normalizeParameterValue:function(t,e,r){if(null==r||null==e)return null;var a=e.match("^\\[L([^;]+);$");
switch(null!=a&&2===a.length&&(e=a[1]),e){case"java.util.Date":case"java.sql.Date":
case"java.sql.Time":case"java.sql.Timestamp":var i=t.attributes.timezone;return i&&"server"!=i?"client"==i?r:void 0!=t.timezoneHint&&0!=$.trim(t.timezoneHint).length&&r.match(t.timezoneHint+"$")?r:this.convertTimeStampToTimeZone(r,i):(void 0==t.timezoneHint&&28==r.length&&(t.timezoneHint=r.substring(23,28)),
r)}return r},convertTimeStampToTimeZone:function(e,r){this._initDateFormatters();var a=t.getOffset(r,e),i=this.parseDateWithoutTimezoneInfo(e),n=this.dateFormatters["with-timezone"].parse(e),o=t.formatOffset(a),m=-new Date(i).getTimezoneOffset(),s=i.getTime()+6e4*a+(n.getTime()-i.getTime()-6e4*m),u=new Date(s);
return this.dateFormatters["without-timezone"].format(u)+o}}});