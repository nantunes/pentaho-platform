define(["dojo/_base/fx","dojo/dom-style","dojo/dom-class","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dijit/_base/manager","dojox/form/uploader/_Base","dojo/text!../resources/UploaderFileList.html"],function(e,o,t,i,s,n,r,d,a){
return i("dojox.form.uploader.FileList",d,{uploaderId:"",uploader:null,headerIndex:"#",
headerType:"Type",headerFilename:"File Name",headerFilesize:"Size",_upCheckCnt:0,
rowAmt:0,templateString:a,postCreate:function(){this.setUploader(),this.hideProgress();
},reset:function(){for(var e=0;e<this.rowAmt;e++)this.listNode.deleteRow(0);this.rowAmt=0;
},setUploader:function(){if(this.uploaderId||this.uploader){if(this.uploaderId&&!this.uploader)this.uploader=r.byId(this.uploaderId);else if(this._upCheckCnt>4)return void console.warn("uploader not found for ID ",this.uploaderId);
}else console.warn("uploaderId not passed to UploaderFileList");this.uploader?(this.connect(this.uploader,"onChange","_onUploaderChange"),
this.connect(this.uploader,"reset","reset"),this.connect(this.uploader,"onBegin",function(){
this.showProgress(!0)}),this.connect(this.uploader,"onProgress","_progress"),this.connect(this.uploader,"onComplete",function(){
setTimeout(s.hitch(this,function(){this.hideProgress(!0)}),1250)}),(this._fileSizeAvail={
html5:1,flash:1}[this.uploader.uploadType])||(this.sizeHeader.style.display="none")):(this._upCheckCnt++,
setTimeout(s.hitch(this,"setUploader"),250))},hideProgress:function(e){var o=e?{ani:!0,
endDisp:"none",beg:15,end:0}:{endDisp:"none",ani:!1};this._hideShowProgress(o)},showProgress:function(e){
var o=e?{ani:!0,endDisp:"block",beg:0,end:15}:{endDisp:"block",ani:!1};this._hideShowProgress(o);
},_progress:function(e){this.percentTextNode.innerHTML=e.percent,o.set(this.percentBarNode,"width",e.percent);
},_hideShowProgress:function(t){var i=this.progressNode,s=function(){o.set(i,"display",t.endDisp);
};t.ani?(o.set(i,"display","block"),e.animateProperty({node:i,properties:{height:{
start:t.beg,end:t.end,units:"px"}},onEnd:s}).play()):s()},_onUploaderChange:function(e){
this.reset(),n.forEach(e,function(e,o){this._addRow(o+1,this.getFileType(e.name),e.name,e.size);
},this)},_addRow:function(e,o,i,s){var n,r=this.listNode.insertRow(-1);n=r.insertCell(-1),
t.add(n,"dojoxUploaderIndex"),n.innerHTML=e,n=r.insertCell(-1),t.add(n,"dojoxUploaderIcon"),
n.innerHTML=o,n=r.insertCell(-1),t.add(n,"dojoxUploaderFileName"),n.innerHTML=i,this._fileSizeAvail&&(n=r.insertCell(-1),
t.add(n,"dojoxUploaderSize"),n.innerHTML=this.convertBytes(s).value),this.rowAmt++;
}})});