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

define(["common-ui/jquery-clean"],function(e){return function(){return{autoSubmit:void 0,
autoSubmitUI:void 0,ignoreBiServer5538:void 0,layout:void 0,page:void 0,paginate:void 0,
parameterGroups:[],promptNeeded:void 0,totalPages:void 0,errors:{},minimized:void 0,
getParameterGroup:function(t){var r;return e.each(this.parameterGroups,function(e,a){
return a.name===t?(r=a,!1):void 0}),r},allowAutoSubmit:function(){return void 0!=this.autoSubmit?this.autoSubmit:this.autoSubmitUI;
},showParameterUI:function(){var e=!0;return this.mapParameters(function(t){return"showParameters"==t.name?(e=t,
!1):void 0}),void 0!==e.isSelectedValue?!e.isSelectedValue("false"):!e},getParameter:function(e){
var t;return this.mapParameters(function(r){return r.name===e?(t=r,!1):void 0}),t;
},mapParameters:function(t,r){var a=this,i=!1;return e.each(this.parameterGroups,function(n,u){
return e.each(this.parameters,function(e,n){return t.call(r,n,u,a)===!1?(i=!0,!1):void 0;
}),i?!1:void 0}),!i},updateParameterValue:function(e){e&&e.name&&this.mapParameters(function(t,r){
if(e.name===t.name){var a=r.parameters.indexOf(t);return void(r.parameters[a].values=e.values);
}},this)}}}});