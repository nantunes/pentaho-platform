define(["common-ui/ring"],function(e){var s;window.console||(window.console={},window.console.log=function(){});
var i=function(i){s||(s=require("common-ui/Plugin")),e.instance(i,s)||r(n.errMsgs.invalidObject);
},r=function(e){throw console.log(e),e},n=e.create({init:function(){this.plugins={};
},register:function(e){return i(e),e.config.pluginHandler=this,this.plugins[e.id]&&r(e+n.errMsgs.alreadyRegistered),
this.plugins[e.id]=e,this.plugins[e.id]||r(e+n.errMsgs.wasNotRegistered),console.log(e+" has been registered"),
e.onRegister(e),e},unregister:function(e){return i(e),this.plugins[e.id]||r(e+n.errMsgs.isNotRegistered),
this.unregisterById(e.id)},unregisterById:function(e){this.plugins[e]||r(e+n.errMsgs.isNotRegistered);
var s=this.plugins[e];return delete this.plugins[e],this.plugins[e]&&r(s+n.errMsgs.wasNotRemoved),
s.onUnregister(s),s},get:function(e){return this.plugins[e]}});return n.errMsgs={},
n.errMsgs.invalidObject="Incompatible object Exception",n.errMsgs.alreadyRegistered=" is already registered",
n.errMsgs.wasNotRegistered=" was not added successfully",n.errMsgs.isNotRegistered=" is not registered",
n.errMsgs.wasNotRemoved=" was not removed successfully",n});