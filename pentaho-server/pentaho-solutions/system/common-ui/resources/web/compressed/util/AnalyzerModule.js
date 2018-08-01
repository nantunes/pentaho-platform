/*!
 * HITACHI VANTARA PROPRIETARY AND CONFIDENTIAL
 *
 * Copyright 2002 - 2017 Hitachi Vantara. All rights reserved.
 *
 * NOTICE: All information including source code contained herein is, and
 * remains the sole property of Hitachi Vantara and its licensors. The intellectual
 * and technical concepts contained herein are proprietary and confidential
 * to, and are trade secrets of Hitachi Vantara and may be covered by U.S. and foreign
 * patents, or patents in process, and are protected by trade secret and
 * copyright laws. The receipt or possession of this source code and/or related
 * information does not convey or imply any rights to reproduce, disclose or
 * distribute its contents, or to manufacture, use, or sell anything that it
 * may describe, in whole or in part. Any reproduction, modification, distribution,
 * or public display of this information without the express written authorization
 * from Hitachi Vantara is strictly prohibited and in violation of applicable laws and
 * international treaties. Access to the source code contained herein is strictly
 * prohibited to anyone except those individuals and entities who have executed
 * confidentiality and non-disclosure agreements or other agreements with Hitachi Vantara,
 * explicitly covering such access.
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/io-query"],function(e,t,r,a){
var n={url:!0,parentElement:!0,reportPath:!0,catalog:!0,cube:!0,dataSource:!0,onAnalyzerReady:!0,
mode:!0,useLegacyPath:!0};window.onAnalyzerReady=function(e,t){var r=window.analyzerModules[t];
r&&(r.api=e,r.onAnalyzerReady(e,t))},window.analyzerModules||(window.analyzerModules={});
var o=function(e){var t="";if(e){var r={};for(var o in e)n[o]||(r[o]=e[o]);e.cube&&(r.cube=e.cube),
e.catalog&&(r.catalog=e.catalog),e.dataSource&&(r.dataSource=e.dataSource),r.ts=(new Date).getTime(),
t=a.objectToQuery(r)}return t},i=function(e){this.url=e.url,this.parentElement=e.parentElement,
this.reportPath=e.reportPath,this.useLegacyPath=e.useLegacyPath;var t="/api/repos/xanalyzer/";
if(this.useLegacyPath&&(t="/content/analyzer/"),this.moduleOptions=e,this.moduleOptions.mode||(this.moduleOptions.mode="viewer"),
!this.validateParams(this.moduleOptions))return console.error("One or more required parameters are missing."),
!1;if(this.analyzerModuleId=9e3*Math.random()+1e3,"string"==typeof this.parentElement)this.analyzerModuleId=this.parentElement,
this.documentAnalyzerRoot=document.getElementById(this.parentElement);else if("object"==typeof this.parentElement){
this.documentAnalyzerRoot=this.parentElement;var r=this.parentElement.attributes.getNamedItem("id");
r&&""!=r.value&&(this.analyzerModuleId=r.value)}if(this.frameId=this.analyzerModuleId+"-iframe",
null==this.documentAnalyzerRoot||null==this.analyzerModuleId)return console.error("Unable to find DOM element for Analyzer module root: "+this.parentElement),
!1;window.analyzerModules[this.frameId]=this;var a="",n=o(this.moduleOptions);this.reportPath?(this.reportPath=this.reportPath.replace(/\//g,":"),
this.reportPath=this.reportPath.replace(/\\/g,":"),"/"==this.reportPath.substring(this.reportPath.length-1)&&(this.reportPath=this.reportPath.substr(0,this.reportPath.length-1)),
a=this.url+"/api/repos/"+encodeURIComponent(this.reportPath)+"/"+this.moduleOptions.mode+"?"+n):a=this.url+t+this.moduleOptions.mode+"?"+n,
this.url=a,this.analyzerIframe=document.createElement("iframe"),this.analyzerIframe.setAttribute("src",this.url),
this.analyzerIframe.setAttribute("id",this.frameId),this.analyzerIframe.setAttribute("height","100%"),
this.analyzerIframe.setAttribute("width","100%"),this.analyzerIframe.setAttribute("frameborder",0),
this.documentAnalyzerRoot.appendChild(this.analyzerIframe)},l=e("common-ui/util/AnalyzerModule",null,{
constructor:function(e){this.onAnalyzerReady=function(t,r){this.api=t,"function"==typeof e.onAnalyzerReady&&e.onAnalyzerReady(t,r);
}.bind(this),i.call(this,e)},validateParams:function(e){if(!e)return!1;var t=!0,r=!0;
return null==e.url?(console.error("Missing url option parameter"),!1):null==e.parentElement||""==e.parentElement?(console.error("Missing parentElement option parameter"),
!1):((null==e.catalog||""==e.catalog)&&(t=!1),(null==e.cube||""==e.cube)&&(t=!1),
(null==e.reportPath||""==e.reportPath)&&(r=!1),0==t&&0==r?(console.error("Must provide reportPath or catalog/cube combination"),
!1):(1==t&&1==r&&(console.info("Must only provide either reportPath or catalog/cube."),
console.info("If both are provided, reportPath takes precedence")),!0))},show:function(){
r.set(this.documentAnalyzerRoot,"display","block")},hide:function(){r.set(this.documentAnalyzerRoot,"display","none");
},dispose:function(){document.getElementById(this.parentElement).removeChild(this.analyzerIframe),
delete window.analyzerModules[this.frameId]},reset:function(){this.api.operation.resetReport();
},getUrl:function(){return this.url},getOptions:function(){return this.moduleOptions;
},getParentElement:function(){return this.parentElement},getApi:function(){return this.api;
}});return l});