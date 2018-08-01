define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/window","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dojo/dom-attr","dojo/dom-construct","dojo/dom-form","dijit","dijit/form/Button","./uploader/_Base","./uploader/_HTML5","./uploader/_IFrame","./uploader/_Flash","dojo/i18n!./nls/Uploader","dojo/text!./resources/Uploader.html"],function(t,e,i,s,n,o,u,h,a,l,d,p,r,c,f,m,_,b,g,y){
return e("dojox.form.Uploader",[f,c,m,_,b],{uploadOnSelect:!1,tabIndex:0,multiple:!1,
label:g.label,url:"",name:"uploadedfile",flashFieldName:"",force:"",uploadType:"",
showInput:"",focusedClass:"dijitButtonHover",_nameIndex:0,templateString:y,baseClass:"dijitUploader "+c.prototype.baseClass,
postMixInProperties:function(){this._inputs=[],this._cons=[],this.force=this.force.toLowerCase(),
this.supports("multiple")?this.uploadType="form"===this.force?"form":"html5":this.uploadType="flash"===this.force?"flash":"iframe",
this.inherited(arguments)},buildRendering:function(){this.inherited(arguments),u.set(this.domNode,{
overflow:"hidden",position:"relative"}),this._buildDisplay(),l.set(this.titleNode,"tabIndex",-1);
},_buildDisplay:function(){this.showInput&&(this.displayInput=d.create("input",{"class":"dijitUploadDisplayInput",
tabIndex:-1,autocomplete:"off",role:"presentation"},this.containerNode,this.showInput),
this._attachPoints.push("displayInput"),this.connect(this,"onChange",function(t){
for(var e,i=0,s=(t.length,[]);e=t[i++];)e&&e.name&&s.push(e.name);this.displayInput.value=s.join(", ");
}),this.connect(this,"reset",function(){this.displayInput.value=""}))},startup:function(){
this._buildInitialized||(this._buildInitialized=!0,this._getButtonStyle(this.domNode),
this._setButtonStyle(),this.inherited(arguments))},onChange:function(t){},onBegin:function(t){},
onProgress:function(t){},onComplete:function(t){this.reset()},onCancel:function(){},
onAbort:function(){},onError:function(t){},upload:function(t){t=t||{},t.uploadType=this.uploadType,
this.inherited(arguments)},submit:function(t){t=t&&t.tagName?t:this.getForm();var e=p.toObject(t);
e.uploadType=this.uploadType,this.upload(e)},reset:function(){delete this._files,
this._disconnectButton(),s.forEach(this._inputs,d.destroy,dojo),this._inputs=[],this._nameIndex=0,
this._createInput()},getFileList:function(){var t=[];return this.supports("multiple")?s.forEach(this._files,function(e,i){
t.push({index:i,name:e.name,size:e.size,type:e.type})},this):s.forEach(this._inputs,function(e,i){
e.value&&t.push({index:i,name:e.value.substring(e.value.lastIndexOf("\\")+1),size:0,
type:e.value.substring(e.value.lastIndexOf(".")+1)})},this),t},_getValueAttr:function(){
return this.getFileList()},_setValueAttr:function(t){console.error("Uploader value is read only");
},_setDisabledAttr:function(t){this.disabled!=t&&this.inputNode&&(this.inherited(arguments),
u.set(this.inputNode,"display",t?"none":""))},_getButtonStyle:function(t){this.btnSize={
w:u.get(t,"width"),h:u.get(t,"height")}},_setButtonStyle:function(){this.inputNodeFontSize=Math.max(2,Math.max(Math.ceil(this.btnSize.w/60),Math.ceil(this.btnSize.h/15))),
this._createInput()},_getFileFieldName:function(){var t;return t=this.supports("multiple")&&this.multiple?this.name+"s[]":this.name+(this.multiple?this._nameIndex:"");
},_createInput:function(){this._inputs.length&&(u.set(this.inputNode,{top:"500px"
}),this._disconnectButton(),this._nameIndex++);var t=this._getFileFieldName();this.focusNode=this.inputNode=d.create("input",{
type:"file",name:t,"aria-labelledby":this.id+"_label"},this.domNode,"first"),this.supports("multiple")&&this.multiple&&l.set(this.inputNode,"multiple",!0),
this._inputs.push(this.inputNode),u.set(this.inputNode,{position:"absolute",fontSize:this.inputNodeFontSize+"em",
top:"-3px",right:"-3px",opacity:0}),this._connectButton()},_connectButton:function(){
this._cons.push(n.connect(this.inputNode,"change",this,function(t){this._files=this.inputNode.files,
this.onChange(this.getFileList(t)),!this.supports("multiple")&&this.multiple&&this._createInput();
})),this.tabIndex>-1&&(this.inputNode.tabIndex=this.tabIndex,this._cons.push(n.connect(this.inputNode,"focus",this,function(){
h.add(this.domNode,this.focusedClass)})),this._cons.push(n.connect(this.inputNode,"blur",this,function(){
h.remove(this.domNode,this.focusedClass)})))},_disconnectButton:function(){s.forEach(this._cons,n.disconnect),
this._cons.splice(0,this._cons.length)}})});