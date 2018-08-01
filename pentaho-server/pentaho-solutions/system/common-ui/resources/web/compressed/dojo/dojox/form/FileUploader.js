define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/window","dojo/_base/sniff","dojo/query","dojo/dom","dojo/dom-style","dojo/dom-geometry","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-form","dojo/_base/config","dijit/_base/manager","dojo/io/iframe","dojo/_base/Color","dojo/_base/unload","dijit/_Widget","dijit/_TemplatedMixin","dijit/_Contained","dojox/embed/Flash","dojox/embed/flashVars","dojox/html/styles"],function(t,e,i,s,o,n,h,d,l,a,r,f,p,c,u,m,g,b,_,v,y,N,I,x,C,w){
return t.deprecated("dojox.form.FileUploader","Use dojox.form.Uploader","2.0"),e("dojox.form.FileUploader",[y,N,I],{
swfPath:m.uploaderPath||require.toUrl("dojox/form/resources/fileuploader.swf"),templateString:'<div><div dojoAttachPoint="progNode"><div dojoAttachPoint="progTextNode"></div></div><div dojoAttachPoint="insideNode" class="uploaderInsideNode"></div></div>',
uploadUrl:"",isDebug:!1,devMode:!1,baseClass:"dojoxUploaderNorm",hoverClass:"dojoxUploaderHover",
activeClass:"dojoxUploaderActive",disabledClass:"dojoxUploaderDisabled",force:"",
uploaderType:"",flashObject:null,flashMovie:null,insideNode:null,deferredUploading:1,
fileListId:"",uploadOnChange:!1,selectMultipleFiles:!0,htmlFieldName:"uploadedfile",
flashFieldName:"flashUploadFiles",fileMask:null,minFlashVersion:9,tabIndex:-1,showProgress:!1,
progressMessage:"Loading",progressBackgroundUrl:require.toUrl("dijit/themes/tundra/images/buttonActive.png"),
progressBackgroundColor:"#ededed",progressWidgetId:"",skipServerCheck:!1,serverTimeout:5e3,
log:function(){this.isDebug&&console.log(Array.prototype.slice.call(arguments).join(" "));
},constructor:function(){this._subs=[]},postMixInProperties:function(){this.fileList=[],
this._cons=[],this.fileMask=this.fileMask||[],this.fileInputs=[],this.fileCount=0,
this.flashReady=!1,this._disabled=!1,this.force=this.force.toLowerCase(),this.uploaderType=(x.available>=this.minFlashVersion||"flash"==this.force)&&"html"!=this.force?"flash":"html",
this.deferredUploading=this.deferredUploading===!0?1:this.deferredUploading,this._refNode=this.srcNodeRef,
this.getButtonStyle()},startup:function(){},postCreate:function(){this.inherited(arguments),
this.setButtonStyle();var t;"flash"==this.uploaderType?t="createFlashUploader":(this.uploaderType="html",
t="createHtmlUploader"),this[t](),this.fileListId&&this.connect(l.byId(this.fileListId),"click",function(t){
var e=t.target.parentNode.parentNode.parentNode;e.id&&e.id.indexOf("file_")>-1&&this.removeFile(e.id.split("file_")[1]);
}),v.addOnUnload(this,this.destroy)},getHiddenNode:function(t){if(!t)return null;for(var e=null,i=t.parentNode;i&&"body"!=i.tagName.toLowerCase();){
var s=a.get(i,"display");if("none"==s){e=i;break}i=i.parentNode}return e},getButtonStyle:function(){
var t=this.srcNodeRef;if(this._hiddenNode=this.getHiddenNode(t),this._hiddenNode&&a.set(this._hiddenNode,"display","block"),
!t&&this.button&&this.button.domNode){var e=!0,i=this.button.domNode.className+" dijitButtonNode",s=this.getText(d(".dijitButtonText",this.button.domNode)[0]),o='<button id="'+this.button.id+'" class="'+i+'">'+s+"</button>";
t=c.place(o,this.button.domNode,"after"),this.srcNodeRef=t,this.button.destroy(),
this.baseClass="dijitButton",this.hoverClass="dijitButtonHover",this.pressClass="dijitButtonActive",
this.disabledClass="dijitButtonDisabled"}else!this.srcNodeRef&&this.button&&(t=this.button);
f.get(t,"class")&&(this.baseClass+=" "+f.get(t,"class")),f.set(t,"class",this.baseClass),
this.norm=this.getStyle(t),this.width=this.norm.w,this.height=this.norm.h,"flash"==this.uploaderType?(this.over=this.getTempNodeStyle(t,this.baseClass+" "+this.hoverClass,e),
this.down=this.getTempNodeStyle(t,this.baseClass+" "+this.activeClass,e),this.dsbl=this.getTempNodeStyle(t,this.baseClass+" "+this.disabledClass,e),
this.fhtml={cn:this.getText(t),nr:this.norm,ov:this.over,dn:this.down,ds:this.dsbl
}):(this.fhtml={cn:this.getText(t),nr:this.norm},"middle"==this.norm.va&&(this.norm.lh=this.norm.h)),
this.devMode&&(this.log("classes - base:",this.baseClass," hover:",this.hoverClass,"active:",this.activeClass),
this.log("fhtml:",this.fhtml),this.log("norm:",this.norm),this.log("over:",this.over),
this.log("down:",this.down))},setButtonStyle:function(){a.set(this.domNode,{width:this.fhtml.nr.w+"px",
height:this.fhtml.nr.h+"px",padding:"0px",lineHeight:"normal",position:"relative"
}),"html"==this.uploaderType&&"middle"==this.norm.va&&a.set(this.domNode,"lineHeight",this.norm.lh+"px"),
this.showProgress?(this.progTextNode.innerHTML=this.progressMessage,a.set(this.progTextNode,{
width:this.fhtml.nr.w+"px",height:this.fhtml.nr.h+0+"px",padding:"0px",margin:"0px",
left:"0px",lineHeight:this.fhtml.nr.h+0+"px",position:"absolute"}),a.set(this.progNode,{
width:this.fhtml.nr.w+"px",height:this.fhtml.nr.h+0+"px",padding:"0px",margin:"0px",
left:"0px",position:"absolute",display:"none",backgroundImage:"url("+this.progressBackgroundUrl+")",
backgroundPosition:"bottom",backgroundRepeat:"repeat-x",backgroundColor:this.progressBackgroundColor
})):c.destroy(this.progNode),a.set(this.insideNode,{position:"absolute",top:"0px",
left:"0px",display:""}),p.add(this.domNode,this.srcNodeRef.className),this.fhtml.nr.d.indexOf("inline")>-1&&p.add(this.domNode,"dijitInline");
try{this.insideNode.innerHTML=this.fhtml.cn}catch(t){if("flash"==this.uploaderType){
this.insideNode=this.insideNode.parentNode.removeChild(this.insideNode),n.body().appendChild(this.insideNode),
this.insideNode.innerHTML=this.fhtml.cn;var e=o.connect(this,"onReady",this,function(){
o.disconnect(e),this.insideNode=this.insideNode.parentNode.removeChild(this.insideNode),
this.domNode.appendChild(this.insideNode)})}else this.insideNode.appendChild(document.createTextNode(this.fhtml.cn));
}this._hiddenNode&&a.set(this._hiddenNode,"display","none")},onChange:function(t){},
onProgress:function(t){},onComplete:function(t){},onCancel:function(){},onError:function(t){},
onReady:function(t){},onLoad:function(t){},submit:function(t){var e=t?u.toObject(t):null;
return this.upload(e),!1},upload:function(t){if(!this.fileList.length)return!1;if(!this.uploadUrl)return console.warn("uploadUrl not provided. Aborting."),
!1;if(this.showProgress||this.set("disabled",!0),this.progressWidgetId){var e=g.byId(this.progressWidgetId).domNode;
"none"==a.get(e,"display")&&(this.restoreProgDisplay="none",a.set(e,"display","block")),
"hidden"==a.get(e,"visibility")&&(this.restoreProgDisplay="hidden",a.set(e,"visibility","visible"));
}t&&!t.target&&(this.postData=t),this.log("upload type:",this.uploaderType," - postData:",this.postData);
for(var i=0;i<this.fileList.length;i++){var s=this.fileList[i];s.bytesLoaded=0,s.bytesTotal=s.size||1e5,
s.percent=0}return"flash"==this.uploaderType?this.uploadFlash():this.uploadHTML(),
!1},removeFile:function(t,e){var i;for(i=0;i<this.fileList.length;i++)if(this.fileList[i].name==t){
e||this.fileList.splice(i,1);break}"flash"==this.uploaderType?this.flashMovie.removeFile(t):e||(c.destroy(this.fileInputs[i]),
this.fileInputs.splice(i,1),this._renumberInputs()),this.fileListId&&c.destroy("file_"+t);
},destroy:function(){return"flash"!=this.uploaderType||this.flashMovie?(s.forEach(this._subs,o.unsubscribe,dojo),
s.forEach(this._cons,o.disconnect,dojo),this.scrollConnect&&o.disconnect(this.scrollConnect),
"flash"==this.uploaderType?(this.flashObject.destroy(),delete this.flashObject):(c.destroy(this._fileInput),
c.destroy(this._formNode)),void this.inherited(arguments)):void this._cons.push(o.connect(this,"onLoad",this,"destroy"));
},_displayProgress:function(t){if(t===!0)"flash"==this.uploaderType?a.set(this.insideNode,"top","-2500px"):a.set(this.insideNode,"display","none"),
a.set(this.progNode,"display","");else if(t===!1)a.set(this.insideNode,{display:"",
top:"0"}),a.set(this.progNode,"display","none");else{var e=t*this.fhtml.nr.w;a.set(this.progNode,"width",e+"px");
}},_animateProgress:function(){this._displayProgress(!0);var t=!1,e=o.connect(this,"_complete",function(){
o.disconnect(e),t=!0}),s=0,n=setInterval(i.hitch(this,function(){s+=5,s>this.fhtml.nr.w&&(s=0,
t=!0),this._displayProgress(s/this.fhtml.nr.w),t&&(clearInterval(n),setTimeout(i.hitch(this,function(){
this._displayProgress(!1)}),500))}),50)},_error:function(t){"string"==typeof t&&(t=new Error(t)),
this.onError(t)},_addToFileList:function(){if(this.fileListId){var t="";s.forEach(this.fileList,function(e){
t+='<table id="file_'+e.name+'" class="fileToUpload"><tr><td class="fileToUploadClose"></td><td class="fileToUploadName">'+e.name+'</td><td class="fileToUploadSize">'+(e.size?Math.ceil(.001*e.size)+"kb":"")+"</td></tr></table>";
},this),l.byId(this.fileListId).innerHTML=t}},_change:function(t){h("ie")&&s.forEach(t,function(t){
t.name=t.name.split("\\")[t.name.split("\\").length-1]}),this.selectMultipleFiles?this.fileList=this.fileList.concat(t):(this.fileList[0]&&this.removeFile(this.fileList[0].name,!0),
this.fileList=t),this._addToFileList(),this.onChange(t),this.uploadOnChange?("html"==this.uploaderType&&this._buildFileInput(),
this.upload()):"html"==this.uploaderType&&this.selectMultipleFiles&&(this._buildFileInput(),
this._connectInput())},_complete:function(t){t=i.isArray(t)?t:[t],s.forEach(t,function(t){
t.ERROR&&this._error(t.ERROR)},this),s.forEach(this.fileList,function(t){t.bytesLoaded=1,
t.bytesTotal=1,t.percent=100,this._progress(t)},this),s.forEach(this.fileList,function(t){
this.removeFile(t.name,!0)},this),this.onComplete(t),this.fileList=[],this._resetHTML(),
this.set("disabled",!1),this.restoreProgDisplay&&setTimeout(i.hitch(this,function(){
a.set(g.byId(this.progressWidgetId).domNode,"none"==this.restoreProgDisplay?"display":"visibility",this.restoreProgDisplay);
}),500)},_progress:function(t){for(var e=0,i=0,s=0;s<this.fileList.length;s++){var o=this.fileList[s];
o.name==t.name&&(o.bytesLoaded=t.bytesLoaded,o.bytesTotal=t.bytesTotal,o.percent=Math.ceil(o.bytesLoaded/o.bytesTotal*100),
this.log(o.name,"percent:",o.percent)),i+=Math.ceil(.001*o.bytesLoaded),e+=Math.ceil(.001*o.bytesTotal);
}var n=Math.ceil(i/e*100);this.progressWidgetId&&g.byId(this.progressWidgetId).update({
progress:n+"%"}),this.showProgress&&this._displayProgress(.01*n),this.onProgress(this.fileList);
},_getDisabledAttr:function(){return this._disabled},_setDisabledAttr:function(t){
if(this._disabled!=t){if("flash"==this.uploaderType){if(!this.flashReady){var e=o.connect(this,"onLoad",this,function(){
o.disconnect(e),this._setDisabledAttr(t)});return}this._disabled=t,this.flashMovie.doDisable(t);
}else this._disabled=t,a.set(this._fileInput,"display",this._disabled?"none":"");p.toggle(this.domNode,this.disabledClass,t);
}},_onFlashBlur:function(){if(this.flashMovie.blur(),!this.nextFocusObject&&this.tabIndex)for(var t=d("[tabIndex]"),e=0;e<t.length;e++)if(t[e].tabIndex>=Number(this.tabIndex)+1){
this.nextFocusObject=t[e];break}this.nextFocusObject.focus()},_disconnect:function(){
s.forEach(this._cons,o.disconnect,dojo)},uploadHTML:function(){this.selectMultipleFiles&&c.destroy(this._fileInput),
this._setHtmlPostData(),this.showProgress&&this._animateProgress();b.send({url:this.uploadUrl.toString(),
form:this._formNode,handleAs:"json",error:i.hitch(this,function(t){this._error("HTML Upload Error:"+t.message);
}),load:i.hitch(this,function(t,e,i){this._complete(t)})})},createHtmlUploader:function(){
this._buildForm(),this._setFormStyle(),this._buildFileInput(),this._connectInput(),
this._styleContent(),a.set(this.insideNode,"visibility","visible"),this.onReady();
},_connectInput:function(){this._disconnect(),this._cons.push(o.connect(this._fileInput,"mouseover",this,function(t){
p.add(this.domNode,this.hoverClass),this.onMouseOver(t)})),this._cons.push(o.connect(this._fileInput,"mouseout",this,function(t){
setTimeout(i.hitch(this,function(){p.remove(this.domNode,this.activeClass),p.remove(this.domNode,this.hoverClass),
this.onMouseOut(t),this._checkHtmlCancel("off")}),0)})),this._cons.push(o.connect(this._fileInput,"mousedown",this,function(t){
p.add(this.domNode,this.activeClass),p.remove(this.domNode,this.hoverClass),this.onMouseDown(t);
})),this._cons.push(o.connect(this._fileInput,"mouseup",this,function(t){p.remove(this.domNode,this.activeClass),
this.onMouseUp(t),this.onClick(t),this._checkHtmlCancel("up")})),this._cons.push(o.connect(this._fileInput,"change",this,function(){
this._checkHtmlCancel("change"),this._change([{name:this._fileInput.value,type:"",
size:0}])})),this.tabIndex>=0&&f.set(this.domNode,"tabIndex",this.tabIndex)},_checkHtmlCancel:function(t){
"change"==t&&(this.dialogIsOpen=!1),"up"==t&&(this.dialogIsOpen=!0),"off"==t&&(this.dialogIsOpen&&this.onCancel(),
this.dialogIsOpen=!1)},_styleContent:function(){var t=this.fhtml.nr;a.set(this.insideNode,{
width:t.w+"px",height:"middle"==t.va?t.h+"px":"auto",textAlign:t.ta,paddingTop:t.p[0]+"px",
paddingRight:t.p[1]+"px",paddingBottom:t.p[2]+"px",paddingLeft:t.p[3]+"px"});try{
a.set(this.insideNode,"lineHeight","inherit")}catch(e){}},_resetHTML:function(){"html"==this.uploaderType&&this._formNode&&(this.fileInputs=[],
d("*",this._formNode).forEach(function(t){c.destroy(t)}),this.fileCount=0,this._buildFileInput(),
this._connectInput())},_buildForm:function(){this._formNode||(h("ie")<9||h("ie")&&h("quirks")?(this._formNode=document.createElement('<form enctype="multipart/form-data" method="post">'),
this._formNode.encoding="multipart/form-data",this._formNode.id=g.getUniqueId("FileUploaderForm"),
this.domNode.appendChild(this._formNode)):this._formNode=c.create("form",{enctype:"multipart/form-data",
method:"post",id:g.getUniqueId("FileUploaderForm")},this.domNode))},_buildFileInput:function(){
this._fileInput&&(this._disconnect(),this._fileInput.id=this._fileInput.id+this.fileCount,
a.set(this._fileInput,"display","none")),this._fileInput=document.createElement("input"),
this.fileInputs.push(this._fileInput);var t=this.htmlFieldName,e=this.id;this.selectMultipleFiles&&(t+=this.fileCount,
e+=this.fileCount,this.fileCount++),f.set(this._fileInput,{id:this.id,name:t,type:"file"
}),p.add(this._fileInput,"dijitFileInputReal"),this._formNode.appendChild(this._fileInput);
var i=r.getMarginBox(this._fileInput);a.set(this._fileInput,{position:"relative",
left:this.fhtml.nr.w-i.w+"px",opacity:0})},_renumberInputs:function(){if(this.selectMultipleFiles){
var t;this.fileCount=0,s.forEach(this.fileInputs,function(e){t=this.htmlFieldName+this.fileCount,
this.fileCount++,f.set(e,"name",t)},this)}},_setFormStyle:function(){var t=Math.max(2,Math.max(Math.ceil(this.fhtml.nr.w/60),Math.ceil(this.fhtml.nr.h/15)));
w.insertCssRule("#"+this._formNode.id+" input","font-size:"+t+"em"),a.set(this.domNode,{
overflow:"hidden",position:"relative"}),a.set(this.insideNode,"position","absolute");
},_setHtmlPostData:function(){if(this.postData)for(var t in this.postData)c.create("input",{
type:"hidden",name:t,value:this.postData[t]},this._formNode)},uploadFlash:function(){
try{if(this.showProgress){this._displayProgress(!0);var t=o.connect(this,"_complete",this,function(){
o.disconnect(t),this._displayProgress(!1)})}var e={};for(var i in this.postData)e[i]=this.postData[i];
this.flashMovie.doUpload(e)}catch(s){this._error("FileUploader - Sorry, the SWF failed to initialize."+s);
}},createFlashUploader:function(){if(this.uploadUrl=this.uploadUrl.toString(),this.uploadUrl)if(this.uploadUrl.toLowerCase().indexOf("http")<0&&0!=this.uploadUrl.indexOf("/")){
var t=window.location.href.split("/");t.pop(),t=t.join("/")+"/",this.uploadUrl=t+this.uploadUrl,
this.log("SWF Fixed - Relative loc:",t," abs loc:",this.uploadUrl)}else this.log("SWF URL unmodified:",this.uploadUrl);else console.warn("Warning: no uploadUrl provided.");
var e=this.fhtml.nr.w,s=this.fhtml.nr.h,o={expressInstall:!0,path:this.swfPath.uri||this.swfPath,
width:e,height:s,allowScriptAccess:"always",allowNetworking:"all",vars:{uploadDataFieldName:this.flashFieldName,
uploadUrl:this.uploadUrl,uploadOnSelect:this.uploadOnChange,deferredUploading:this.deferredUploading||0,
selectMultipleFiles:this.selectMultipleFiles,id:this.id,isDebug:this.isDebug,devMode:this.devMode,
flashButton:C.serialize("fh",this.fhtml),fileMask:C.serialize("fm",this.fileMask),
noReturnCheck:this.skipServerCheck,serverTimeout:this.serverTimeout},params:{scale:"noscale",
wmode:"opaque",allowScriptAccess:"always",allowNetworking:"all"}};this.flashObject=new x(o,this.insideNode),
this.flashObject.onError=i.hitch(function(t){this._error("Flash Error: "+t)}),this.flashObject.onReady=i.hitch(this,function(){
a.set(this.insideNode,"visibility","visible"),this.log("FileUploader flash object ready"),
this.onReady(this)}),this.flashObject.onLoad=i.hitch(this,function(t){this.flashMovie=t,
this.flashReady=!0,this.onLoad(this)}),this._connectFlash()},_connectFlash:function(){
this._doSub("/filesSelected","_change"),this._doSub("/filesUploaded","_complete"),
this._doSub("/filesProgress","_progress"),this._doSub("/filesError","_error"),this._doSub("/filesCanceled","onCancel"),
this._doSub("/stageBlur","_onFlashBlur"),this._doSub("/up","onMouseUp"),this._doSub("/down","onMouseDown"),
this._doSub("/over","onMouseOver"),this._doSub("/out","onMouseOut"),this.connect(this.domNode,"focus",function(){
this.flashMovie.focus(),this.flashMovie.doFocus()}),this.tabIndex>=0&&f.set(this.domNode,"tabIndex",this.tabIndex);
},_doSub:function(t,e){this._subs.push(o.subscribe(this.id+t,this,e))},urlencode:function(t){
return t&&"none"!=t?t.replace(/:/g,"||").replace(/\./g,"^^").replace("url(","").replace(")","").replace(/'/g,"").replace(/"/g,""):!1;
},isButton:function(t){var e=t.tagName.toLowerCase();return"button"==e||"input"==e;
},getTextStyle:function(t){var e={};if(e.ff=a.get(t,"fontFamily"),e.ff){if(e.ff=e.ff.replace(", ",","),
e.ff=e.ff.replace(/\"|\'/g,""),e.ff="sans-serif"==e.ff?"Arial":e.ff,e.fw=a.get(t,"fontWeight"),
e.fi=a.get(t,"fontStyle"),e.fs=parseInt(a.get(t,"fontSize"),10),a.get(t,"fontSize").indexOf("%")>-1)for(var i=t;i.tagName;){
if(-1==a.get(i,"fontSize").indexOf("%")){e.fs=parseInt(a.get(i,"fontSize"),10);break;
}"body"==i.tagName.toLowerCase()&&(e.fs=.16*parseInt(a.get(i,"fontSize"),10)),i=i.parentNode;
}e.fc=new _(a.get(t,"color")).toHex(),e.fc=parseInt(e.fc.substring(1,1/0),16)}return e.lh=a.get(t,"lineHeight"),
e.ta=a.get(t,"textAlign"),e.ta="start"!=e.ta&&e.ta?e.ta:"left",e.va=this.isButton(t)?"middle":e.lh==e.h?"middle":a.get(t,"verticalAlign"),
e},getText:function(t){var e=i.trim(t.innerHTML);return e.indexOf("<")>-1&&(e=escape(e)),
e},getStyle:function(t){var e={},s=r.getContentBox(t),o=r.getPadExtents(t);e.p=[o.t,o.w-o.l,o.h-o.t,o.l],
e.w=s.w+o.w,e.h=s.h+o.h,e.d=a.get(t,"display");var n=new _(a.get(t,"backgroundColor"));
e.bc=0==n.a?"#ffffff":n.toHex(),e.bc=parseInt(e.bc.substring(1,1/0),16);var h=this.urlencode(a.get(t,"backgroundImage"));
if(h&&(e.bi={url:h,rp:a.get(t,"backgroundRepeat"),pos:escape(a.get(t,"backgroundPosition"))
},!e.bi.pos)){var d=a.get(t,"backgroundPositionX"),l=a.get(t,"backgroundPositionY");
d="left"==d?"0%":"right"==d?"100%":d,l="top"==l?"0%":"bottom"==l?"100%":l,e.bi.pos=escape(d+" "+l);
}return i.mixin(e,this.getTextStyle(t))},getTempNodeStyle:function(t,e,i){var s,o;
if(i){s=c.place("<"+t.tagName+"><span>"+t.innerHTML+"</span></"+t.tagName+">",t.parentNode);
var n=s.firstChild;p.add(n,t.className),p.add(s,e),o=this.getStyle(n)}else s=c.place("<"+t.tagName+">"+t.innerHTML+"</"+t.tagName+">",t.parentNode),
p.add(s,t.className),p.add(s,e),s.id=t.id,o=this.getStyle(s);return c.destroy(s),
o}})});