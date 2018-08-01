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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","pentaho/common/button","pentaho/common/Dialog","pentaho/common/CustomColorPicker","pentaho/common/TabSet","dojo/dom-style","dojo/on","dojo/_base/lang","dojo/dom-class","dojo/text!pentaho/common/ComboColorPicker.html"],function(declare,_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin,Button,Dialog,CustomColorPicker,TabSet,style,on,lang,domClass,templateStr){
return declare("pentaho.common.ComboColorPicker",[_WidgetBase,_TemplatedMixin,_WidgetsInTemplateMixin],{
hasTitleBar:!1,onColorChange:null,closeCallback:null,setLocalizationLookupFunction:function(o){
this.getLocaleString=o,this._localize()},_localize:function(){this.inherited(arguments),
this.currentLbl.innerHTML=this.getLocaleString("currentColor_content"),this.inUseLbl.innerHTML=this.getLocaleString("inUseColors_content"),
this.tabset.setTabs([{id:"palettetab",title:this.getLocaleString("Palette_txt"),afterCallback:lang.hitch(this,"showTab","palettetab")
},{id:"customtab",title:this.getLocaleString("Custom_txt"),afterCallback:lang.hitch(this,"showTab","customtab")
}])},showTab:function(o){"palettetab"==o?(domClass.add(this.customtab,"hidden"),domClass.remove(this.palettetab,"hidden")):(domClass.add(this.palettetab,"hidden"),
domClass.remove(this.customtab,"hidden"))},show:function(){domClass.remove(this.topframe,"hidden");
},hide:function(){domClass.add(this.topframe,"hidden")},templateString:templateStr,
usedColors:[],setColor:function(o){this._setColor(o)},_setColor:function(o){style.set(this.currentColor,"backgroundColor",o),
this.palette._setValueAttr(o,!1),this.colorPicker.setColor(o,!1)},_colorChange:function(o){
this._setColor(o),this.onColorChange&&this.onColorChange(o)},colorPaletteChange:function(o){
this.colorPicker.setColor(o,!1),style.set(dis.currentColor,"backgroundColor",o)},
setUsedColors:function(colors){this.usedColors=colors;for(var table=this.colorTable;table.rows.length>0;)table.deleteRow(0);
for(var row=null,idx=0;idx<colors.length;idx++){var color=colors[idx];null==row&&(row=table.insertRow(-1));
var cell=row.insertCell(-1),div=document.createElement("DIV");div.className="usedColorTableDiv",
cell.className="usedColorTableCell",style.set(div,"backgroundColor",""+color);var id="usedcolor"+idx;
if(0==color.indexOf("rgb")&&(color=eval("this."+color)),"#"!=color[0]){var array=dojo.Color.named[color];
array&&(color=dojox.color.fromArray(array).toHex())}div.setAttribute("id",id),div.setAttribute("color",""+color),
on(cell,"onclick",this,"usedColorClick"),cell.appendChild(div),idx%10==9&&(row=null);
}},usedColorClick:function(o){var t=parseInt(o.target.id.substr("usedcolor".length));
this._colorChange(this.usedColors[t],!1)},closeRequest:function(){this.closeCallback&&this.closeCallback();
},postCreate:function(){this.inherited(arguments),this.colorPicker.animatePoint=!1,
pentaho.common.Messages.addUrlBundle("pentaho.common",CONTEXT_PATH+"i18n?plugin=common-ui&name=resources/web/dojo/pentaho/common/nls/messages"),
on(this.palette,"change",lang.hitch(this,"_colorChange")),on(this.colorPicker,"change",lang.hitch(this,"_colorChange")),
on(this.closeBtn,"click",lang.hitch(this,"closeRequest"))},rgb:function(o,t,e){var l="#",i=o.toString(16),n=t.toString(16),r=e.toString(16);
return l+=i.length<2?"0"+i:i,l+=n.length<2?"0"+n:n,l+=r.length<2?"0"+r:r},rgba:function(o,t,e,l){
var i="#",n=o.toString(16),r=t.toString(16),a=e.toString(16);return i+=n.length<2?"0"+n:n,
i+=r.length<2?"0"+r:r,i+=a.length<2?"0"+a:a}})});