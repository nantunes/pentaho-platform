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

define("common-ui/jquery-pentaho-i18n",["common-ui/jquery-i18n"],function(){var n=$.i18n.properties,e=$.i18n.browserLang;
$.i18n.properties=function(u){(null===u.language||""==u.language||void 0==u.language)&&(u.language=e()),
(null===u.language||void 0==u.language)&&(u.language=""),u.language=a(u),n(u)},$.i18n.browserLang=function(){
return null};var a=function(n){var e;return $.ajax({url:n.name+"_supported_languages.properties",
async:!1,cache:n.cache,contentType:"text/plain;charset="+n.encoding,dataType:"text",
success:function(a,r){e=u(a,n.language)},error:function(a,u,r){404==a.status&&(e=n.language);
}}),e},u=function(n,e){var a,u,r;e.length>=2&&(a=e.substring(0,2)),e.length>=5&&(u=e.substring(0,5));
for(var t=n.split(/\n/),g=0;g<t.length;g++){var i=t[g].substr(0,t[g].indexOf("="));
i==a&&void 0==r&&(r=a),i==u&&(r=u)}return void 0==r&&(r=""),r}});