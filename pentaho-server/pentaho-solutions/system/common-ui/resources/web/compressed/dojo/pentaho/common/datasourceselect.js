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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojox/html/entities","pentaho/common/SmallImageButton","pentaho/common/ListBox","pentaho/common/Dialog","pentaho/common/MessageBox","dojo/_base/lang","dojo/text!pentaho/common/datasourceselect.html","dojo/Stateful","dojo/has","dojo/_base/sniff"],function(t,e,i,o,s,a,n,d,l,c,h,r,u,m){
return t("pentaho.common.datasourceselect",[u,l,i,o],{getModel:null,modelSelected:null,
canDataSourceAdmin:!1,datasourceEditCallback:null,datasourceAddCallback:null,datasourceDeleteCallback:null,
datasourceWizardIncluded:!1,datasourceEditorPath:"",models:null,buttons:["Ok_txt","Cancel_txt"],
scrollPosition:0,setModelList:function(t){this.models=t,this.modelList.clearOptions();
for(var e=0;e<t.length;e++){var i=new Option(t[e].name,t[e].id);this.modelList.addOption(i);
}t.length>0&&(this.modelList.set("value",t[0].id),this.datasourceSelected())},onModelDblClick:function(t){
this.buttonClick(0)},getSelectedModel:function(){var t=this.modelList.selectedIndex;
return this.models[t]},setSelectedIndex:function(t){this.modelList.set("value",this.models[t]),
this.modelList.selectedIndex=t,this.datasourceSelected()},setCanDataSourceAdmin:function(t){
t?this.canDataSourceAdmin=window.parent&&window.parent.pho&&window.parent.pho.openEditDatasourceEditor:this.canDataSourceAdmin=!1,
this.disableDatasourceAdminButtons(),this.enableIconButton(this.adddatasourceimg,this.canDataSourceAdmin,this.addDatasource);
},datasourceSelected:function(){var t=this.modelList.get("value"),e=this.getModel(t),i="MODEL_1"==e.modelId&&this.canDataSourceAdmin;
this.enableIconButton(this.editdatasourceimg,i,this.editDatasource),this.enableIconButton(this.deletedatasourceimg,i,this.deleteDatasource),
this.enableIconButton(this.adddatasourceimg,this.canDataSourceAdmin,this.addDatasource);
},enableIconButton:function(t,e,i){var o=t;o.src;this.canDataSourceAdmin&&e?t.set("disabled",!1):e||t.set("disabled",!0);
},_localize:function(){this.inherited(arguments),this.set("title",this.getLocaleString("modelSelectDialog_title")),
this.modelSelectDialogComment.innerHTML=this.getLocaleString("modelSelectDialogComment_content"),
this.datasourcelistlbl.innerHTML=this.getLocaleString("datasourcelistlbl_content"),
this.editdatasourceimg.title=this.getLocaleString("editdatasourceimg_title"),this.adddatasourceimg.title=this.getLocaleString("adddatasourceimg_title"),
this.deletedatasourceimg.title=this.getLocaleString("deletedatasourceimg_title")},
templateString:r,postCreate:function(){this.inherited(arguments),this.modelList.onChange=h.hitch(this,this.datasourceSelected),
s(this.adddatasourceimg.buttonImg,"click",h.hitch(this,this.addDatasource)),s(this.editdatasourceimg.buttonImg,"click",h.hitch(this,this.editDatasource)),
s(this.deletedatasourceimg.buttonImg,"click",h.hitch(this,this.deleteDatasource)),
s(this.modelList.menuNode,"dblclick",h.hitch(this,this.onModelDblClick)),8==m("ie")&&(s(this.modelList.menuOuterNode,"scroll",h.hitch(this,this.retainScrollPosition)),
s(this,"focus",h.hitch(this,this.applyScrollPosition)),s(this,"blur",h.hitch(this,this.applyScrollPosition)),
s(this,"mouseover",h.hitch(this,this.applyScrollPosition)),s(this,"mouseout",h.hitch(this,this.applyScrollPosition)));
},retainScrollPosition:function(){this.scrollPosition=this.modelList.menuOuterNode.scrollTop;
},applyScrollPosition:function(){window.setTimeout(h.hitch(this,function(){0===this.modelList.menuOuterNode.scrollTop&&(this.modelList.menuOuterNode.scrollTop=this.scrollPosition);
}),0)},addDatasource:function(){if(!this.adddatasourceimg.disabled){var t={onError:function(t){
console&&console.log("Error with Datasource Editor",t)},onCancel:function(){},onReady:function(){}
};t.onFinish=h.hitch(this,this.datasourceAddCallback),window.parent&&window.parent.pho&&window.parent.pho.openDatasourceEditor&&window.parent.pho.openDatasourceEditor(t);
}},editDatasource:function(){if(!this.editdatasourceimg.disabled&&this.canDataSourceAdmin&&window.parent&&window.parent.pho&&window.parent.pho.openEditDatasourceEditor){
if(-1==this.modelList.selectedIndex)return!1;var t=(this.modelList.get("value"),{
onError:function(t){console&&console.log("Error with Datasource Editor",t)},onCancel:function(){},
onReady:function(){}});t.onFinish=h.hitch(this,this.datasourceEditCallback);var e=this.getModel(this.modelList.get("value"));
window.parent.pho.openEditDatasourceEditor(e.domainId,e.modelId,t)}},deleteDatasource:function(){
if(!this.deletedatasourceimg.disabled&&this.canDataSourceAdmin&&window.parent&&window.parent.pho&&window.parent.pho.openEditDatasourceEditor){
if(-1==this.modelList.selectedIndex)return!1;this.msgBox||(this.msgBox=registry.byId("messagebox"),
this.msgBox.setLocalizationLookupFunction(this.getLocaleString)),this.msgBox.buttons=[this.getLocaleString("Yes"),this.getLocaleString("No")],
this.msgBox.setTitle(this.getLocaleString("DeleteDatasourceWarningTitle")),this.msgBox.setMessage(this.getLocaleString("DeleteDatasourceWarning",a.encode(this.getSelectedModel().name))),
this.msgBox.callbacks=[h.hitch(this,this.deleteDatasource2),h.hitch(this,function(){
this.msgBox.hide()})],this.msgBox.show()}},deleteDatasource2:function(){this.msgBox.hide();
var t={onError:function(t){alert("error:"+t)},onCancel:function(){},onReady:function(){}
};t.onFinish=h.hitch(this,this.datasourceDeleteCallback),window.parent.pho.deleteModel(this.models[this.modelList.selectedIndex].domainId,this.models[this.modelList.selectedIndex].modelId,t);
},disableDatasourceAdminButtons:function(){this.enableIconButton(this.editdatasourceimg,!1),
this.enableIconButton(this.deletedatasourceimg,!1),this.enableIconButton(this.adddatasourceimg,!1);
}})});