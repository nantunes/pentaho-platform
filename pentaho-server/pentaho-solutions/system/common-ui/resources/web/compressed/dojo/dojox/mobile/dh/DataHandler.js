define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","./ContentTypeMap"],function(e,t,n,o){
return e("dojox.mobile.dh.DataHandler",null,{ds:null,target:null,refNode:null,constructor:function(e,t,n){
this.ds=e,this.target=t,this.refNode=n},processData:function(e,s){var a=o.getHandlerClass(e);
require([a],t.hitch(this,function(e){n.when(this.ds.getData(),t.hitch(this,function(){
n.when((new e).parse(this.ds.text,this.target,this.refNode),function(e){s(e)})}));
}))}})});