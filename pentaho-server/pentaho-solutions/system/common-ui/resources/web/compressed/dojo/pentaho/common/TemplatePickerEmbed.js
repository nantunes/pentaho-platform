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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/query","pentaho/common/button","pentaho/common/SmallImageButton","dojo/dom-class","dojo/text!pentaho/common/TemplatePickerEmbed.html","dojo/_base/lang"],function(e,t,a,i,l,s,o,h,m,n,p){
return e("pentaho.common.TemplatePickerEmbed",[t,a,i],{buttons:[],templates:[],pageNo:0,
hasTitleBar:!1,hasBorder:!1,templateSelectedCallback:null,templateString:n,updatePageArrows:function(){
this.prevSetBtn.set&&this.prevSetBtn.set("disabled",0==this.pageNo),this.nextSetBtn.set&&this.nextSetBtn.set("disabled",6*(this.pageNo+1)>=this.templates.length);
},setTemplates:function(e){this.templates=e,this.showPage(),this.updatePageArrows();
},showPage:function(){for(var e=6*this.pageNo,t=0;6>t;t++)t+e<this.templates.length?(this["templateImg"+t].src=this.templates[t+e].imagePath,
this.templates[t+e].description&&null!=this.templates[t+e].description&&(this["templateImg"+t].title=this.templates[t+e].description),
this["templateName"+t].innerHTML=this.templates[t+e].name,m.remove(this["templateImg"+t],"hidden"),
m.add(this["templateName"+t],"fadeEmbed"),this.templates[t+e].selected?(m.add(this["templateName"+t],"pentaho-selection-dialog-selected"),
m.add(this["templateImgCell"+t],"pentaho-selection-dialog-selected"),m.remove(this["templateName"+t],"pentaho-selection-dialog-unselected"),
m.remove(this["templateImgCell"+t],"pentaho-selection-dialog-unselected")):(m.add(this["templateName"+t],"pentaho-selection-dialog-unselected"),
m.add(this["templateImgCell"+t],"pentaho-selection-dialog-unselected"),m.remove(this["templateName"+t],"pentaho-selection-dialog-selected"),
m.remove(this["templateImgCell"+t],"pentaho-selection-dialog-selected"))):(m.add(this["templateImg"+t],"hidden"),
m.remove(this["templateName"+t],"fadeEmbed"),m.add(this["templateImgCell"+t],"pentaho-selection-dialog-unselected"),
m.remove(this["templateImgCell"+t],"pentaho-selection-dialog-selected"),m.remove(this["templateName"+t],"pentaho-selection-dialog-selected"),
this["templateName"+t].innerHTML="");this.updatePageArrows()},postCreate:function(){
this.inherited(arguments),this.prevSetBtn.callback=p.hitch(this,this.prevPage),this.nextSetBtn.callback=p.hitch(this,this.nextPage);
for(var e=0;6>e;e++)l(this["templateImg"+e],"click",p.hitch(this,"imgClick")),l(this["templateName"+e],"click",p.hitch(this,"imgClick")),
l(this["templateImg"+e],"dblclick",p.hitch(this,"imgDblClick")),l(this["templateName"+e],"dblclick",p.hitch(this,"imgDblClick")),
l(this["templateImgCell"+e],"mouseover",p.hitch(this,"mouseOver")),l(this["templateImgCell"+e],"mouseout",p.hitch(this,"mouseOut")),
l(this["templateName"+e],"mouseover",p.hitch(this,"mouseOver")),l(this["templateName"+e],"mouseout",p.hitch(this,"mouseOut"));
},mouseOver:function(e){var t=parseInt(dojo.attr(e.target,"idx"));if(!this.templates[t]||!this.templates[t].selected){
var a=this["templateImgCell"+t];a&&m.add(a,"pentaho-selection-dialog-hover");var a=this["templateName"+t];
a&&m.add(a,"pentaho-selection-dialog-hover")}},mouseOut:function(e){var t=parseInt(e.target.getAttribute("idx")),a=this["templateImgCell"+t];
a&&m.remove(a,"pentaho-selection-dialog-hover");var a=this["templateName"+t];a&&m.remove(a,"pentaho-selection-dialog-hover");
},imgDblClick:function(e){var t=parseInt(e.target.getAttribute("idx")),a=6*this.pageNo+t;
this.templateDblClickCallback&&this.templateDblClickCallback(a)},imgClick:function(e){
var t=parseInt(e.target.getAttribute("idx")),a=6*this.pageNo+t;this.select(t,a),this.templateSelectedCallback&&this.templateSelectedCallback(a);
},prevPage:function(){0!=this.pageNo&&(this.pageNo--,this.showPage())},nextPage:function(){
6*(this.pageNo+1)>=this.templates.length||(this.pageNo++,this.showPage())},select:function(e,t){
for(var a=0;a<this.templates.length;a++)this.templates[a].selected=!1;this.templates[t].selected=!0;
var i=this["templateImgCell"+e];m.remove(i,"pentaho-selection-dialog-hover");var i=this["templateName"+e];
m.remove(i,"pentaho-selection-dialog-hover"),this.showPage()}})});