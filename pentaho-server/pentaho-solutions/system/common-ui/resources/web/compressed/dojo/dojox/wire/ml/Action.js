dojo.provide("dojox.wire.ml.Action"),dojo.require("dijit._Widget"),dojo.require("dijit._Container"),
dojo.require("dojox.wire.Wire"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.Action",[dijit._Widget,dijit._Container],{
trigger:"",triggerEvent:"",triggerTopic:"",postCreate:function(){this._connect()},
_connect:function(){if(this.triggerEvent)if(this.trigger){var e=dojox.wire.ml._getValue(this.trigger);
e&&(e[this.triggerEvent]||(e[this.triggerEvent]=function(){}),this._triggerHandle=dojo.connect(e,this.triggerEvent,this,"run"));
}else{var i=this.triggerEvent.toLowerCase();if("onload"==i){var r=this;dojo.addOnLoad(function(){
r._run.apply(r,arguments)})}}else this.triggerTopic&&(this._triggerHandle=dojo.subscribe(this.triggerTopic,this,"run"));
},_disconnect:function(){this._triggerHandle&&(this.triggerTopic?dojo.unsubscribe(this.triggerTopic,this._triggerHandle):dojo.disconnect(this._triggerHandle));
},run:function(){var e=this.getChildren();for(var i in e){var r=e[i];if(r instanceof dojox.wire.ml.ActionFilter&&!r.filter.apply(r,arguments))return;
}this._run.apply(this,arguments)},_run:function(){var e=this.getChildren();for(var i in e){
var r=e[i];r instanceof dojox.wire.ml.Action&&r.run.apply(r,arguments)}},uninitialize:function(){
return this._disconnect(),!0}}),dojo.declare("dojox.wire.ml.ActionFilter",dijit._Widget,{
required:"",requiredValue:"",type:"",message:"",error:"",filter:function(){if(""===this.required)return!0;
var e=dojox.wire.ml._getValue(this.required,arguments);if(""===this.requiredValue){
if(e)return!0}else{var i=this.requiredValue;if(""!==this.type){var r=this.type.toLowerCase();
"boolean"===r?i="false"===i.toLowerCase()?!1:!0:"number"===r&&(i=parseInt(i,10))}
if(e===i)return!0}return this.message&&(this.error?dojox.wire.ml._setValue(this.error,this.message):alert(this.message)),
!1}});