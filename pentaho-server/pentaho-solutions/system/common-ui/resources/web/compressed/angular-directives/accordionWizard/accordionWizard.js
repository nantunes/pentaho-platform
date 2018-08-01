/*!
 The MIT License

 Copyright (c) 2012-2014 the AngularUI Team, https://github.com/organizations/angular-ui/teams/291112

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

define(["common-ui/angular"],function(e){var n=require.toUrl("common-ui/angular-directives/accordionWizard")+"/";
console.log(n),e.module("accordionWizard",["ui.bootstrap.collapse"]).constant("accordionConfig",{
closeOthers:!0}).controller("AccordionWizardController",["$scope","$attrs","accordionConfig",function(n,i,o){
this.groups=[],this.closeOthers=function(r){var c=e.isDefined(i.closeOthers)?n.$eval(i.closeOthers):o.closeOthers;
c&&e.forEach(this.groups,function(e){e!==r&&(e.isOpen=!1)})},this.addGroup=function(e){
var n=this;this.groups.push(e),e.$on("$destroy",function(i){n.removeGroup(e)})},this.removeGroup=function(e){
var n=this.groups.indexOf(e);-1!==n&&this.groups.splice(n,1)}}]).directive("accordionWizard",function(){
return{restrict:"EA",controller:"AccordionWizardController",transclude:!0,replace:!1,
templateUrl:n+"accordionWizard.html"}}).directive("accordionWizardGroup",function(i){
return{require:"^accordionWizard",restrict:"EA",transclude:!0,replace:!0,templateUrl:n+"accordionWizardGroup.html",
scope:{heading:"@",isOpen:"=?",isDisabled:"=?",saveText:"@",cancelText:"@",editText:"@",
summary:"@",_onSave:"&onSave",_onCancel:"&onCancel",canSave:"&canSave"},controller:function(n,i){
this.setHeading=function(e){this.heading=e},i.$observe("saveText",function(i){n.saveText=e.isDefined(i)?i:"save";
}),i.$observe("cancelText",function(i){n.cancelText=e.isDefined(i)?i:"cancel"}),i.$observe("editText",function(i){
n.editText=e.isDefined(i)?i:"edit"}),i.$observe("summary",function(i){n.summary=e.isDefined(i)?i:"";
})},link:function(e,n,i,o){o.addGroup(e),e.$watch("isOpen",function(n){n&&o.closeOthers(e);
}),e.toggleOpen=function(){e.isDisabled||(e.isOpen=!e.isOpen)},e.setSummary=function(n){
e.summary=n},e.saveSettings=function(){var n=!0;if(e._onSave){var i=e._onSave();"undefined"!=typeof i&&(n=i);
}e.isOpen=!n},e.cancelSettings=function(){var n=!0;if(e._onCancel){var i=e._onCancel();
"undefined"!=typeof i&&(n=i)}e.isOpen=!n}}}}).directive("accordionWizardHeading",function(){
return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionWizardGroup",
compile:function(e,n,i){return function(e,n,o,r){r.setHeading(i(e,function(){}))};
}}}).directive("accordionWizardTransclude",function(){return{require:"^accordionWizardGroup",
link:function(e,n,i,o){e.$watch(function(){return o[i.accordionWizardTransclude]},function(e){
e&&(n.html(""),n.append(e))})}}})});