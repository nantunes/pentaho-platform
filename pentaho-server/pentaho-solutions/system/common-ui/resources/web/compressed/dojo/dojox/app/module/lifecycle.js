define(["dojo/_base/declare","dojo/topic"],function(t,s){return t(null,{lifecycle:{
UNKNOWN:0,STARTING:1,STARTED:2,STOPPING:3,STOPPED:4},_status:0,getStatus:function(){
return this._status},setStatus:function(t){this._status=t,s.publish("/app/status",t);
}})});