dojo.provide("dojox.wire.ml.Invocation"),dojo.require("dojox.wire.ml.Action"),dojo.declare("dojox.wire.ml.Invocation",dojox.wire.ml.Action,{
object:"",method:"",topic:"",parameters:"",result:"",error:"",_run:function(){if(this.topic){
var o=this._getParameters(arguments);try{dojo.publish(this.topic,o),this.onComplete();
}catch(e){this.onError(e)}}else if(this.method){var r=this.object?dojox.wire.ml._getValue(this.object):dojo.global;
if(!r)return;var o=this._getParameters(arguments),t=r[this.method];if(!t){if(t=r.callMethod,
!t)return;o=[this.method,o]}try{var i=!1;if(r.getFeatures){var s=r.getFeatures();if("fetch"==this.method&&s["dojo.data.api.Read"]||"save"==this.method&&s["dojo.data.api.Write"]){
var a=o[0];a.onComplete||(a.onComplete=function(){}),this.connect(a,"onComplete","onComplete"),
a.onError||(a.onError=function(){}),this.connect(a,"onError","onError"),i=!0}}var n=t.apply(r,o);
if(!i)if(n&&n instanceof dojo.Deferred){var l=this;n.addCallbacks(function(o){l.onComplete(o);
},function(o){l.onError(o)})}else this.onComplete(n)}catch(e){this.onError(e)}}},
onComplete:function(o){this.result&&dojox.wire.ml._setValue(this.result,o),this.error&&dojox.wire.ml._setValue(this.error,"");
},onError:function(o){this.error&&(o&&o.message&&(o=o.message),dojox.wire.ml._setValue(this.error,o));
},_getParameters:function(o){if(!this.parameters)return o;var e=[],r=this.parameters.split(",");
if(1==r.length){var t=dojox.wire.ml._getValue(dojo.trim(r[0]),o);dojo.isArray(t)?e=t:e.push(t);
}else for(var i in r)e.push(dojox.wire.ml._getValue(dojo.trim(r[i]),o));return e}
});