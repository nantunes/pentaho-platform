define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dojo/_base/connect","dojo/_base/declare","dojox/form/FileUploader","dijit/_editor/_Plugin"],function(t,e,i,o){
t.experimental("dojox.editor.plugins.UploadImage");var d=t.declare("dojox.editor.plugins.UploadImage",o,{
tempImageUrl:"",iconClassPrefix:"editorIcon",useDefaultCommand:!1,uploadUrl:"",button:null,
label:"Upload",setToolbar:function(t){this.button.destroy(),this.createFileInput(),
t.addChild(this.button)},_initButton:function(){this.command="uploadImage",this.editor.commands[this.command]="Upload Image",
this.inherited("_initButton",arguments),delete this.command},updateState:function(){
this.button.set("disabled",this.get("disabled"))},createFileInput:function(){var e=t.create("span",{
innerHTML:"."},document.body);t.style(e,{width:"40px",height:"20px",paddingLeft:"8px",
paddingRight:"8px"}),this.button=new i.form.FileUploader({isDebug:!0,uploadUrl:this.uploadUrl,
uploadOnChange:!0,selectMultipleFiles:!1,baseClass:"dojoxEditorUploadNorm",hoverClass:"dojoxEditorUploadHover",
activeClass:"dojoxEditorUploadActive",disabledClass:"dojoxEditorUploadDisabled"},e),
this.connect(this.button,"onChange","insertTempImage"),this.connect(this.button,"onComplete","onComplete");
},onComplete:function(e,i,o){e=e[0];var d,n=t.byId(this.currentImageId,this.editor.document);
d=this.downloadPath?this.downloadPath+e.name:e.file,n.src=d,t.attr(n,"_djrealurl",d),
e.width&&(n.width=e.width,n.height=e.height)},insertTempImage:function(){this.currentImageId="img_"+(new Date).getTime();
var t='<img id="'+this.currentImageId+'" src="'+this.tempImageUrl+'" width="32" height="32"/>';
this.editor.execCommand("inserthtml",t)}});return t.subscribe(e._scopeName+".Editor.getPlugin",null,function(t){
if(!t.plugin)switch(t.args.name){case"uploadImage":t.plugin=new d({url:t.args.url
})}}),d});