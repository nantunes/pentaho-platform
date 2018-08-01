define(["dojo/dom-form","dojo/dom-style","dojo/dom-construct","dojo/dom-attr","dojo/has","dojo/_base/declare","dojo/_base/event","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin"],function(t,e,o,r,i,n,s,u,a,d){
return i.add("FormData",function(){return!!window.FormData}),i.add("xhr-sendAsBinary",function(){
var t=window.XMLHttpRequest&&new window.XMLHttpRequest;return t&&!!t.sendAsBinary;
}),i.add("file-multiple",function(){return!!{"true":1,"false":1}[r.get(document.createElement("input",{
type:"file"}),"multiple")]}),n("dojox.form.uploader._Base",[u,a,d],{getForm:function(){
if(!this.form)for(var t=this.domNode;t&&t.tagName&&t!==document.body;){if("form"==t.tagName.toLowerCase()){
this.form=t;break}t=t.parentNode}return this.form},getUrl:function(){return this.uploadUrl&&(this.url=this.uploadUrl),
this.url?this.url:(this.getForm()&&(this.url=this.form.action),this.url)},connectForm:function(){
this.url=this.getUrl(),!this._fcon&&this.getForm()&&(this._fcon=!0,this.connect(this.form,"onsubmit",function(t){
console.log("SUBMIT"),s.stop(t),this.submit(this.form)}))},supports:function(t){switch(t){
case"multiple":return"flash"==this.force||"iframe"==this.force?!1:i("file-multiple");
case"FormData":return i(t);case"sendAsBinary":return i("xhr-sendAsBinary")}return!1;
},getMimeType:function(){return"application/octet-stream"},getFileType:function(t){
return t.substring(t.lastIndexOf(".")+1).toUpperCase()},convertBytes:function(t){
var e=Math.round(t/1024*1e5)/1e5,o=Math.round(t/1048576*1e5)/1e5,r=Math.round(t/1073741824*1e5)/1e5,i=t;
return e>1&&(i=e.toFixed(1)+" kb"),o>1&&(i=o.toFixed(1)+" mb"),r>1&&(i=r.toFixed(1)+" gb"),
{kb:e,mb:o,gb:r,bytes:t,value:i}}})});