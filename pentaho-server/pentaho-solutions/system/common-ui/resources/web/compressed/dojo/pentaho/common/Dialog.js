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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/on","dojo/dom","dojo/query","dojo/dom-construct","dojo/dom-style","dijit/Dialog","pentaho/common/button","pentaho/common/SmallImageButton","pentaho/common/Messages","dojo/dom-class","dojo/_base/lang","dojo/_base/event","dojo/keys"],function(t,i,e,o,h,s,n,d,a,l,p,c,u,r,m,g,b){
return t("pentaho.common.Dialog",[i,e,o],{popup:null,title:"",getLocaleString:pentaho.common.Messages.getString,
callbacks:[],shown:!1,buttonsCreated:!1,buttonPanel:null,hasTitleBar:!0,hasBorder:!0,
hasCloseIcon:!1,closeIcon:void 0,_onCancelCallback:void 0,setLocalizationLookupFunction:function(t){
this.getLocaleString=t,this._localize()},buttonClick:function(t){this.callbacks[t]&&this.callbacks[t]();
},buttons:[],_localize:function(){if(this.getLocaleString){for(var t=0;t<this.buttons.length;t++){
var i=n("button"+t,this.popup.domNode);this.buttons[t]=this.getLocaleString(this.buttons[t]),
i&&(i.innerHTML=this.getLocaleString())}this.hasCloseIcon&&this.closeIcon.domNode.setAttribute("title",this.getLocaleString("CloseIcon_title"));
}},templateString:"<div></div>",postMixInProperties:function(){this.inherited(arguments);
},_createButtonPanel:function(){this.buttonPanel=d.create("TABLE"),a.set(this.buttonPanel,"width","100%"),
d.place(this.buttonPanel,this.popup.domNode),r.add(this.buttonPanel,"button-panel");
},_createButtons:function(){this.buttonPanel.rows.length>0&&this.buttonPanel.deleteRow(-1);
var t=this.buttonPanel.insertRow(-1),i=t.insertCell(-1);a.set(i,"align","right"),
a.set(i,"width","100%");for(var e=0;e<this.buttons.length;e++){i=t.insertCell(-1),
a.set(i,"align","right");var o=document.createElement("BUTTON");r.add(o,"pentaho-button"),
o.setAttribute("id","button"+e),o.innerHTML=this.buttons[e],i.appendChild(o),o.onclick=m.hitch(this,this.buttonClick,e);
}},setButtonEnabled:function(t,i){var e=s.byId("button"+t);"undefined"!=typeof e&&null!=e&&("undefined"!=typeof e.set?e.set("disabled",!i):e.disabled=!i);
},postCreate:function(){(this.templatePath||"<div></div>"!=this.templateString)&&this.popup.attr("content",this.domNode),
this.inherited(arguments),this.hasTitleBar||r.add(n(".dijitDialogTitleBar",this.popup.domNode)[0],"hidden"),
this.hasBorder&&r.add(this.popup.domNode,"pentaho-dialog"),this.hasCloseIcon&&(this.closeIcon=new pentaho.common.SmallImageButton({
baseClass:"pentaho-closebutton"}),r.add(this.closeIcon.domNode,"pentahoDialogCloseIcon"),
d.place(this.closeIcon.domNode,n(".dijitDialogTitleBar",this.popup.domNode)[0]),this.closeIcon.callback=m.hitch(this,this.onCancel)),
r.add(n(".dijitDialogTitleBar",this.popup.domNode)[0],"Caption"),h(this.domNode,"keyPress",m.hitch(this,this.keyUp)),
h(this.popup.domNode,"keyPress",m.hitch(this,this.keyUp)),this.onKeyUp=m.hitch(this,this.keyup),
h(this.domNode,"keyUp",m.hitch(this,this.keyup)),h(this.popup,"keyUp",m.hitch(this,this.keyup)),
h(this.popup.domNode,"keyUp",m.hitch(this,this.keyup)),this.popup.onCancel=m.hitch(this,function(){}),
this.popup.onExecute=m.hitch(this,this.okClick),this._localize(),h(this.popup,"Hide",m.hitch(m.hitch(this,"onHide")));
},keyup:function(t){g.stop(t),t.keyCode==b.ENTER&&this.execute&&this.execute(),t.keyCode==b.ESCAPE&&this.onCancel&&this.onCancel();
},setTitle:function(t){this.title=t,this.popup.set("title",this.title)},show:function(){
this.domNode.style.display="",this.popup.set("title",this.title),a.set(this.popup.domNode,"display","none"),
this.templateBased?this.shown||(this.width=""+a.get(this.domNode,"width")+"px","block"===a.get(this.domNode,"display")&&(this.width=a.get(this.domNode,"width")+a.get(this.domNode,"paddingLeft")+a.get(this.domNode,"paddingRight")+a.get(this.domNode,"borderLeftWidth")+a.get(this.domNode,"borderRightWidth")+"px"),
a.set(this.popup.domNode,"width",this.width),n(".dijitDialogPaneContent",this.popup.domNode).forEach(function(t){
a.set(t,"width",this.width)}),n(".dijitDialogPaneContent",this.domNode).forEach(function(t){
a.set(t,"width",this.width)})):this.shown||(a.set(this.domNode,"width",this.width),
a.set(this.popup.domNode,"width",this.width),n(".dijitDialogPaneContent",this.popup.domNode).forEach(function(t){
a.set(t,"width",this.width)}),n(".dijitDialogPaneContent",this.domNode).forEach(function(t){
a.set(t,"width",this.width)}),a.set(this.domNode,"height",this.height),a.set(this.popup.domNode,"height",this.height),
n(".dijitDialogPaneContent",this.popup.domNode).forEach(function(t){a.set(t,"height",this.height);
}),n(".dijitDialogPaneContent",this.domNode).forEach(function(t){a.set(t,"height",this.height);
})),this.shown||this._createButtonPanel(),this._createButtons(),this.popup.show(),
this.shown=!0},hide:function(){return this.popup.hide()},destroy:function(){this.popup.destroy();
},destroyRecursive:function(){this.popup.destroyRecursive(),d.empty(this.domNode);
},buildRendering:function(){this.templatePath&&(this.templateString=null),this.inherited(arguments),
"<div></div>"==this.templateString&&this.popup.buildRendering()},_attachTemplateNodes:function(t,i){
this.inherited(arguments)},_fillContent:function(t){this.templatePath||"<div></div>"!=this.templateString?(this.templateBased=!0,
this.popup=new l):(this.templateBased=!1,this.width=""+a.get(t,"width")+"px",this.height=""+a.get(t,"height")+"px",
r.contains(t,"hidden")&&r.remove(t,"hidden"),this._attachTemplateNodes(t),this.source=t,
this.popup=new l({title:this.title,content:this.source.innerHTML}),r.add(this.popup.domNode,"pentaho-dialog"),
r.remove(this.popup.domNode,"hidden"),r.add(n(".dijitDialogTitleBar",this.popup.domNode)[0],"Caption")),
this.inherited(arguments)},registerOnCancelCallback:function(t){this._onCancelCallback=t;
},onCancel:function(){if(this._onCancelCallback)try{this._onCancelCallback()}catch(t){
console.warn("error in onCancelCallback: "+t)}this.hide()},onHide:function(){}})});