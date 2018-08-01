/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2013 Steve
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

define(["common-ui/angular","common-ui/util/spin","common-ui/util/PentahoSpinner"],function(e,d,n){
e.module("folderBrowser",[]).directive("treecontrol",["$compile","$location","$anchorScroll",function(t,l,o){
return{restrict:"A",require:"treecontrol",transclude:!0,scope:{treeModel:"=",extSelect:"=",
addFolder:"=",selectedNode:"=",onSelection:"&",nodeChildren:"@",loading:"=?"},controller:function(d){
d.nodeChildren=d.nodeChildren||"children",d.expandedNodes={},l.hash(""),d.spinner=void 0,
d.headClass=function(n){return e.isArray(n[d.nodeChildren])&&n[d.nodeChildren].length>0&&!d.expandedNodes[n.path]?style="tree-collapsed":e.isArray(n[d.nodeChildren])&&n[d.nodeChildren].length>0&&d.expandedNodes[n.path]?style="tree-expanded":style="tree-collapsed",
style},d.selectorClass=function(n){var t="";return t=e.isArray(n[d.nodeChildren])&&n[d.nodeChildren].length>0&&!d.expandedNodes[n.path]?"arrow-collapsed":e.isArray(n[d.nodeChildren])&&n[d.nodeChildren].length>0&&d.expandedNodes[n.path]?"arrow-expanded":"blank";
},d.findNodeByAttr=function(n,t){d.treeModel;var l,o=!1,r=d.treeModel.children;return recurseChildren=function(d){
if(0==o)for(var r=0;r<d.length&&(d[r][n]==t?(o=!0,l=d[r]):e.isArray(d[r].children)&&d[r].children.length>0&&recurseChildren(d[r].children),
1!=o);r++);},recurseChildren(r),{node:l}},d.nodeExpanded=function(e){return d.expandedNodes[e.path];
},d.expandParents=function(e){d.expandedNodes=[];var n=e.path;if(n){for(;n.split("/").length-1>1;){
var t=n.lastIndexOf("/");n=n.replace(n.substring(t,n.length),""),d.expandedNodes[n]=!0;
}d.expandedNodes[n]=!0}},d.selectNodeHead=function(e){d.expandedNodes[e.path]=!d.expandedNodes[e.path];
},d.selectNodeHeadExt=function(e){d.expandedNodes[e.path]||(d.expandedNodes[e.path]=!0);
},d.selectNodeLabel=function(e){d.selectedScope=e.path,d.selectedNode=e,d.onSelection&&d.onSelection({
node:e})},d.selectedClass=function(n){var t="";if(d.selectedScope==n.path&&(e.element(".tree-selected").removeClass("tree-selected"),
e.element("#"+n.id).addClass("tree-selected"),t="tree-selected",d.extSelect&&n.path==d.extSelect.val)){
var r=l.hash();r!=n.id&&(l.hash(n.id),o())}return t};var n='<ul class="treecontrol"><li ng-repeat="node in node.'+d.nodeChildren+'" ng-class="headClass(node)"><div id="{{node.id}}"><span ng-class="selectorClass(node)" ng-click="selectNodeHead(node)"></span><i class="tree-has-children" ng-click="selectNodeLabel(node)" ng-dblclick="selectNodeHead(node)"></i><i class="tree-normal"></i><div class="tree-label" ng-class="selectedClass(node)" ng-click="selectNodeLabel(node)" ng-dblclick="selectNodeHead(node)" tree-transclude></div></div><div treeitem class="treeitem" ng-if="nodeExpanded(node)"></></li></ul>',r='<div class="treeControlView treeControlLoading" ng-show="loading"><div class="spin"></div></div><div class="treeControlView" ng-hide="loading">'+n+"</div>";
return{templateRoot:t(r),templateChild:t(n)}},compile:function(t,l,o){return function(t,l,r,a){
function i(d){e.isArray(d)?(t.node={},t.node[t.nodeChildren]=d):t.node=d}function s(){
if(t.extSelect&&t.extSelect.attr){var e=t.findNodeByAttr(t.extSelect.attr,t.extSelect.val);
t.selectedNode=e.node,t.expandParents(t.selectedNode),t.selectNodeHeadExt(t.selectedNode),
t.selectNodeLabel(t.selectedNode)}else t.expandedNodes={},t.selectedNode={}}function c(){
if(t.addFolder&&t.addFolder.id&&t.addFolder.name&&t.selectedNode){var e="";e=t.addFolder.path?t.addFolder.path:t.selectedNode.path+"/"+t.addFolder.name,
t.addFolder.children||(t.addFolder.children=[]),t.addFolder.permissions||(t.addFolder.permissions=t.selectedNode.permissions),
t.addFolder.localizedName||(t.addFolder.localizedName=t.addFolder.name);var d={id:t.addFolder.id,
name:t.addFolder.name,localizedName:t.addFolder.localizedName,isFolder:!0,path:e,
children:t.addFolder.children,permissions:t.addFolder.permissions};t.selectedNode.children.push(d),
t.selectedNode=d,t.expandParents(t.selectedNode),t.selectNodeHeadExt(t.selectedNode),
t.selectNodeLabel(t.selectedNode)}}initSpinner=function(){if(n.getLargeConfig&&!t.spinner){
var l=n.getLargeConfig(),o=e.element(".treeControlView.treeControlLoading .spin")[0],r=new d(l);
r.spin(o),t.spinner=r}},t.$watch("treeModel",i),i(t.treeModel),t.$watch("extSelect",s),
t.$watch("addFolder",c),t.$watch("loading",initSpinner),a.templateRoot(t,function(e){
l.html("").append(e)}),t.$treeTransclude=o}}}}]).directive("treeitem",function(){
return{restrict:"EA",require:"^treecontrol",link:function(e,d,n,t){t.templateChild(e,function(e){
d.html("").append(e)})}}}).directive("treeTransclude",function(){return{link:function(e,d,n,t){
e.$treeTransclude(e,function(e){d.empty(),d.append(e)})}}})});