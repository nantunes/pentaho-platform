/*!
 * Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
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

define(["cdf/lib/Base","cdf/Logger","dojo/number","dojo/i18n","common-ui/util/util","common-ui/util/GUIDHelper","./WidgetBuilder","cdf/Dashboard.Clean","./parameters/ParameterDefinitionDiffer","common-ui/jquery-clean","common-ui/underscore","./components/CompositeComponent"],function(t,e,a,r,n,i,o,s,u,l,h,m){
function p(t,e){var a=l.extend(t,{promptPanel:this});return this.widgetBuilder.build(a,e);
}function c(t){return p.call(this,{param:t})}function f(t){return p.call(this,{param:t
},"label")}function d(t,e){return p.call(this,{param:t,errorMessage:e},"error-label");
}function g(t,e){return p.call(this,{param:t,components:e},"parameter-panel")}function b(t,e){
return p.call(this,{paramGroup:t,components:e},"group-panel")}function v(){return p.call(this,{},"submit-panel");
}function P(){return this.widgetBuilder.build(this,"prompt-panel")}function C(t,e){
e(t),t.components&&y(t.components,e)}function y(t,e){l.each(t,function(t,a){C(a,e);
})}pentaho.common.Messages&&pentaho.common.Messages.addUrlBundle("prompting",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/prompting/messages/messages");
var S={readOnlyProperties:["promptNeeded","paginate","totalPages","showParameterUI","allowAutoSubmit"],
msgs:{notChangeReadonlyProp:function(t){return"Not possible to change the following read-only properties: "+t+".";
},incorrectBooleanType:function(t,e){return"Unexpected value '"+e+"' for '"+t+"'. Must be boolean type.";
},notAllowedAutoSubmit:"Not possible to set 'autoSubmit'. It's limited by the 'allowAutoSubmit' flag.",
incorrectNumberType:function(t){return"Unexpected value '"+t+"' for 'page'. Must be a number type.";
},paginationNotActivated:function(t){return"Not possible to set page '"+t+"'. The pagination should be activated.";
},incorrectPageValue:function(t,e){return"Not possible to set page '"+t+"'. The correct value should be between 0 and "+e+".";
},incorrectStateObjType:"The input parameter 'state' is incorrect. It should be an object."
}},D=function(t,e){var a=this.getParameterName(t);return w.call(this,a,e)},w=function(t,e){
for(var a in this.dashboard.components){var r=this.dashboard.components[a];if(r.parameter===t){
var n=r.type.search("Panel")>-1;if(e&&n||!e&&!n)return r}}return null},B=function(t){
this.dashboard.addComponent(t),this.dashboard.updateComponent(t);for(var e in t.components)B.call(this,t.components[e]);
},A=function(t){for(var e=null,a=0;a<t.components.length;a++)if("submit"==t.components[a].promptType&&"FlowPromptLayoutComponent"==t.components[a].type){
e=t.components[a];break}return e},T=function(t){var e=null;if(t&&t.components)for(var a=0;a<t.components.length;a++)if("submit"===t.components[a].promptType&&"SubmitPromptComponent"===t.components[a].type){
e=t.components[a];break}return e},_=function(t){var e=[];return t.components&&(e=t.components.filter(function(t){
return"label"==t.promptType&&"TextComponent"==t.type&&t.isErrorIndicator})),e},N=function(t,e){
var a=t.components.indexOf(e);a>-1&&t.components.splice(a,1)},V=function(t,e,a){if(t&&e){
if(h.isArray(t)&&h.isArray(e))return t.length!=e.length?!0:!h.isEqual(t.sort(),e.sort());
switch(a){case"java.lang.String":return h.isArray(e)?t!=e:t.toUpperCase()!=e.toUpperCase();
case"java.sql.Date":return new Date(t).setHours(0,0,0,0)!=new Date(e).setHours(0,0,0,0);
default:return t!=e}}return h.isArray(e)&&0==e.length?!0:t!=e},I=function(t){var e=S.readOnlyProperties.some(function(e){
return t.hasOwnProperty(e)});if(e)throw new Error(S.msgs.notChangeReadonlyProp(S.readOnlyProperties));
},U=function(t,e){if(null!=e&&"boolean"!=typeof e)throw new Error(S.msgs.incorrectBooleanType(t,e));
},O=function(t,e){if(U("autoSubmit",t),null!=t&&!e)throw new Error(S.msgs.notAllowedAutoSubmit);
},E=function(t,e,a){if(null!=t){if("number"!=typeof t)throw new Error(S.msgs.incorrectNumberType(t));
if(!e)throw new Error(S.msgs.paginationNotActivated(t));if(0>t||t>=a)throw new Error(S.msgs.incorrectPageValue(t,a-1));
}},R=function(t,e){if(!t||"object"!=typeof t)throw new Error(S.msgs.incorrectStateObjType);
I(t),U("parametersChanged",t.parametersChanged),O(t.autoSubmit,e.allowAutoSubmit()),
E(t.page,e.paginate,e.totalPages)},L=t.extend({guid:void 0,paramDefn:void 0,autoSubmit:void 0,
dashboard:void 0,parametersChanged:!1,onParameterChanged:null,onBeforeRender:null,
onAfterRender:null,onBeforeUpdate:null,onAfterUpdate:null,onStateChanged:null,onSubmit:null,
constructor:function(t,e,a){if(!t)throw new Error("destinationId is required");this.destinationId=t,
this.setParamDefn(e),this.promptGUIDHelper=new i,this.guid=this.promptGUIDHelper.generateGUID(),
this.dashboard=new s(a),this.dashboard.flatParameters=!0,this.paramDiffer=new u,this.widgetBuilder=o,
this.isEnableSubmitButton=!0},getDashboard:function(){return this.dashboard},getParamDefn:function(){
if(!this.paramDefn)throw new Error("paramDefn is required. Call PromptPanel#setParamDefn");
return this.paramDefn},onPostInit:function(t){this.getDashboard().on("cdf:postInit",t);
},setParamDefn:function(t){var e=this.paramDefn;this.paramDefn=t;var a=function(t,e,a,r){
if(null!=this.onStateChanged){var n=e?r(e):void 0,i=a?r(a):void 0;n!=i&&this.onStateChanged(t,n,i);
}}.bind(this);t&&(void 0==this.autoSubmit&&this.setAutoSubmit(t.allowAutoSubmit()),
a("promptNeeded",e,this.paramDefn,function(t){return t.promptNeeded}),a("paginate",e,this.paramDefn,function(t){
return t.paginate}),a("totalPages",e,this.paramDefn,function(t){return t.totalPages;
}),a("showParameterUI",e,this.paramDefn,function(t){return t.showParameterUI()}),
a("allowAutoSubmit",e,this.paramDefn,function(t){return t.allowAutoSubmit()}),a("page",e,this.paramDefn,function(t){
return t.page}))},setAutoSubmit:function(t){var e=this.autoSubmit;this.autoSubmit=t,
null!=this.onStateChanged&&e!=this.autoSubmit&&this.onStateChanged("autoSubmit",e,this.autoSubmit);
},getAutoSubmitSetting:function(){return this.autoSubmit},getParameterName:function(t){
return"string"==typeof t?this.guid+t:this.guid+t.name},getParameterValues:function(){
function t(t){try{return a.parse(t,{locale:Util.normalizeDojoLocale(SESSION_LOCALE)
})}catch(e){return a.parse(t,{locale:"en"})}}var e={};return this.getParamDefn().mapParameters(function(i){
var o=this.getParameterValue(this.getParameterName(i));if(""!==o&&"undefined"!=typeof o){
if(i.multiSelect&&!l.isArray(o)&&(o=[o]),n.isNumberType(i.type)){var s,u=r.getLocalization("dojo.cldr","number",SESSION_LOCALE.toLowerCase()),h=r.getLocalization("dojo.cldr","number",null);
try{o.indexOf(u?u.decimal:h.decimal)>0?(s=t(o),s.toString().indexOf(h.decimal)<0&&(s=a.format(s,{
places:o.length-o.indexOf(u?u.decimal:h.decimal)-1}),h=r.getLocalization("dojo.cldr","number",null),
s=s.split(h.group).join(""))):s=t(o)}catch(m){s=o}}e[i.name]=isNaN(s)?o:s}},this),
e},generateWidgetGUID:function(){return this.guid+"-"+this.promptGUIDHelper.generateGUID();
},_initializeParameterValue:function(t,e){var a=e.getSelectedValuesValue();0===a.length?a="":1===a.length&&(a=a[0]),
this.setParameterValue(e,a)},setParameterValue:function(t,e){this.dashboard.setParameter(this.getParameterName(t),e);
},getParameterValue:function(t){return"string"!=typeof t&&(t=this.getParameterName(t)),
this.dashboard.getParameterValue(t)},_ready:function(){this.ready(this)},_submit:function(t){
this.submit(this,t)},_submitStart:function(){this.submitStart(this)},ready:function(t){},
submit:function(t,a){this.onSubmit&&("function"==typeof this.onSubmit?this.onSubmit(a):e.warn("The onSubmit event callback is not a function"));
},submitStart:function(t){},parameterChanged:function(t,a,r){if(this.onParameterChanged){
var n=this.onParameterChanged[a]?this.onParameterChanged[a]:this.onParameterChanged[""];
n&&("function"==typeof n?n(a,r,t):e.warn("The parameterChanged callback for '"+a+"' is not a function"));
}!t.list||r&&""!=r&&"null"!=r||(this.nullValueParams||(this.nullValueParams=[]),this.nullValueParams.push(t)),
this._setTimeoutRefreshPrompt(),this.parametersChanged=!0,null!=this.onStateChanged&&this.onStateChanged("parametersChanged",!1,this.parametersChanged);
},_setTimeoutRefreshPrompt:function(){var t=this;setTimeout(function(){t.refreshPrompt();
},0)},getParameterDefinition:function(t,e){e()},refreshPrompt:function(t){try{this.isForceRefresh=t,
this.getParameterDefinition(this,this.refresh.bind(this))}catch(e){this.isForceRefresh=void 0,
console.log(e),alert("Exception caught attempting to execute refreshCallback")}},
refresh:function(t,a){var r=this;if(this.dashboard.waitingForInit&&this.dashboard.waitingForInit.length)return e.warn("Overlapping refresh!"),
void setTimeout(function(){r.refresh(t,a)},0);if(t){if(this.diff=this.paramDiffer.diff(this.getParamDefn(),t,this.nullValueParams),
this.isRefresh=!0,this.setParamDefn(t),this.nullValueParams=null,this.dashboard.components){
var n;/android|ipad|iphone/i.test(navigator.userAgent)||(n=this._multiListBoxTopValuesByParam={});
var i;y(this.dashboard.components,function(e){if(!e.components&&e.param&&"prompt"===e.promptType){
if(!i){var a=e.placeholder();l(":focus",a).length&&(i=e.param.name)}if(n&&"SelectMultiComponent"===e.type){
var r=e.topValue();null!=r&&(n["_"+e.param.name]=r)}}else if(n&&"ScrollingPromptPanelLayoutComponent"===e.type){
var o=e.placeholder().children(".prompt-panel"),s=o.scrollTop(),u=o.children(".parameter-wrapper"),h=u.scrollLeft();
null!=s&&null!=h&&(n["_"+e.name]={scrollTopValue:s,scrollLeftValue:h})}e.param&&(e.param=t.getParameter(e.param.name));
}),this._focusedParam=i}this.init(a)}},_removeComponentsByDiff:function(t){var e=[];
for(var a in t)for(var r=t[a],n=r.params,i=0;i<n.length;i++){var o=n[i],s=D.call(this,o,!0);
if(null!=s){e.push(s);var u=this.dashboard.getComponentByName(a);u&&(N.call(this,u,s),
0==u.components.length&&e.push(u))}}var l=this.dashboard.getComponentByName("prompt"+this.guid);
if(l){for(var i in e)N.call(this,l,e[i]);if(1==l.components.length){var h=A.call(this,l);
h&&(e.push(h),N.call(this,l,h))}this.removeDashboardComponents(e),0==l.components.length&&l.clear();
}},_addComponentsByDiff:function(t){var e=this.dashboard.getComponentByName("prompt"+this.guid);
for(var a in t){for(var r=t[a],n=r.params,i=[],o=0;o<n.length;o++){var s=n[o],u=this._buildPanelForParameter(s);
s.after&&(u.after=D.call(this,s.after,!0)),i.push(u)}var l=this.dashboard.getComponentByName(a);
if(l)for(var h in i){var m=i[h],p=0;if(m.after){var c=l.components.indexOf(m.after);
p=c+1}l.components.splice(p,0,m)}else l=b.call(this,r.group,i),e.components.push(l);
}if(e.components.length>0&&!A.call(this,e)){var f=v.call(this);e.components.push(f);
}B.call(this,e)},_changeErrors:function(t){if(t.isErrorChanged){var e=this.getParamDefn().errors[t.name],a=D.call(this,t,!0),r=_.call(this,a),n=[];
for(var i in r){var o=r[i],s=e&&e.some(function(t){return t==o.label});if(!s){for(var u in r)N.call(this,a,o);
n.push(o)}}if(n.length>0&&this.removeDashboardComponents(n),e)for(var i in e){var l=e[i],h=r.some(function(t){
return t.label==l});if(!h){var i=a.components.length-1,m=d.call(this,t,l);this.dashboard.addComponent(m),
this.dashboard.updateComponent(m),a.components.splice(i,0,m)}}var p=_.call(this,a);
p.length>0?(!a.cssClass||a.cssClass&&-1==a.cssClass.indexOf("error"))&&(a.cssClass=(a.cssClass||"")+" error"):(a.cssClass=(a.cssClass||"").replace(" error",""),
a.removeErrorClass())}},_changeComponentsByDiff:function(t){for(var e in t){var a=t[e],r=a.params;
for(var n in r){var i=r[n],o=D.call(this,i);if(null!=o){var s=!1;this._changeErrors(i);
var u=this.widgetBuilder.build({param:i,promptPanel:this,changed:!0},i.attributes["parameter-render-type"]).valuesArray;
if((JSON.stringify(o.valuesArray)!==JSON.stringify(u)||i.forceUpdate)&&(this._initializeParameterValue(null,i),
o.valuesArray=u,s=!0),this.autoSubmit&&(this.forceSubmit=!0),!s){var l=i.getSelectedValuesValue(),p=this.dashboard.getParameterValue(o.parameter);
h.isArray(p)||1!=l.length||(l=l[0]),s=V(p,l,i.type),i.isErrorChanged&&(s=!0)}if(s){
var c=this.dashboard.getComponentByName(e);C(c,function(t){t instanceof m||this.dashboard.updateComponent(t);
}.bind(this))}}}}},update:function(t){var e=Object.keys(t.toRemove).length>0,a=Object.keys(t.toAdd).length>0,r=Object.keys(t.toChangeData).length>0;
(e||a||r)&&this.onBeforeRender&&this.onBeforeRender(),e&&this._removeComponentsByDiff(t.toRemove),
a&&this._addComponentsByDiff(t.toAdd),r&&this._changeComponentsByDiff(t.toChangeData),
(e||a||r)&&this.onAfterRender&&this.onAfterRender()},init:function(t){this.onBeforeUpdate&&this.onBeforeUpdate();
var e=!0,a=this._multiListBoxTopValuesByParam;a&&delete this._multiListBoxTopValuesByParam;
var r=this._focusedParam;r&&delete this._focusedParam;var n=[],i=function(t){if(n.push(t),
e&&"submit"==t.promptType&&(e=!1),!t.components&&t.param&&"prompt"===t.promptType){
var i=t.param.name;if(r&&r===i&&(r=null,t.autoFocus=!0),a&&"SelectMultiComponent"===t.type){
var o=a["_"+i];null!=o&&(t.autoTopValue=o)}}else if(a&&"ScrollingPromptPanelLayoutComponent"===t.type){
var s=a["_"+t.name];if(null!=s){var u=function(){var e=l("#"+t.htmlObject).children(".prompt-panel");
e.scrollTop(s.scrollTopValue),e.children(".parameter-wrapper").scrollLeft(s.scrollLeftValue);
};this.isRefresh?setTimeout(function(){u()},50):this.dashboard.postInit(function(){
scrollTopValue&&(u(),s=void 0)})}}}.bind(this),o=this.getParamDefn();if(!this.isRefresh&&o.showParameterUI()){
this.onBeforeRender&&this.onBeforeRender(),this.promptGUIDHelper.reset();var s=P.call(this);
C(s,i),this.dashboard.addComponents(n),this.dashboard.init(),this.onAfterRender&&this.onAfterRender();
}else if(this.diff){this.update(this.diff);var s=this.dashboard.getComponentByName("prompt"+this.guid);
if(!s)return;var u=function(t){t&&(this.isForceRefresh&&this.dashboard.updateComponent(t),
i(t))}.bind(this);C(s,u)}else o.mapParameters(function(t){this._initializeParameterValue(o,t);
},this),e=!t;(this.forceSubmit||e)&&this.submit(this,{isInit:!this.isRefresh}),this.diff=null,
this.isRefresh=null,this.forceSubmit=!1,this.isForceRefresh=void 0,this.onAfterUpdate&&this.onAfterUpdate();
},hide:function(){l("#"+this.destinationId).css("display","none")},_buildPanelForParameter:function(t){
var a=[],r=this.getParamDefn();this._initializeParameterValue(r,t),r.removeParameterLabel||a.push(f.call(this,t));
var n=r.errors[t.name];n&&l.each(n,function(e,r){a.push(d.call(this,t,r))}.bind(this));
var i=c.call(this,t);if(!i)return void e.log("No widget created, return");a.push(i);
var o=g.call(this,t,a);return n&&n.length>0&&(o.cssClass=(o.cssClass||"")+" error"),
o},createWidgetForSubmitComponent:function(){return p.call(this,{},"submit")},buildPanelComponents:function(){
var t=[],e=this.getParamDefn();return l.each(e.parameterGroups,function(a,r){var n=[];
l.each(r.parameters,function(t,a){return"true"==a.attributes.hidden?void this._initializeParameterValue(e,a):void n.push(this._buildPanelForParameter(a));
}.bind(this)),n.length>0&&t.push(b.call(this,r,n))}.bind(this)),t.length>0&&t.push(v.call(this)),
t},removeDashboardComponents:function(t,e){var a=this,r=[];y(t,function(t){var e=a.dashboard.removeComponent(t.name);
e&&r.push(e)}),l.each(r,function(t,r){e||(r.remove?r.remove():r.clear()),r.parameter&&l.each(a.dashboard.components,function(t,e){
l.isArray(e.listeners)&&(e.listeners=l.grep(e.listeners,function(t){return t!==r.parameter;
}))})})},showProgressIndicator:function(){this.getDashboard().showProgressIndicator();
},hideProgressIndicator:function(){this.getDashboard().hideProgressIndicator()},setBlockUiOptions:function(t){
this.getDashboard()._setBlockUiOptions(t)},getState:function(){var t=this.getParamDefn(),e={
promptNeeded:t.promptNeeded,paginate:t.paginate,totalPages:t.totalPages,showParameterUI:t.showParameterUI(),
allowAutoSubmit:t.allowAutoSubmit(),parametersChanged:this.parametersChanged,autoSubmit:this.autoSubmit,
page:t.page};return e},setState:function(t){var e=this.getParamDefn();R(t,e),null!=t.parametersChanged&&(null!=this.onStateChanged&&this.parametersChanged!=t.parametersChanged&&this.onStateChanged("parametersChanged",this.parametersChanged,t.parametersChanged),
this.parametersChanged=t.parametersChanged),null!=t.autoSubmit&&this.setAutoSubmit(t.autoSubmit),
null!=t.page&&(e.page=t.page),this.setParamDefn(e)},setDisabledSubmitButton:function(t){
var e=Boolean(t);if(this.isEnableSubmitButton===e){var a=T.call(this,this.getDashboard());
a&&a.setDisabledButton(e),this.isEnableSubmitButton=!e}}});return L});