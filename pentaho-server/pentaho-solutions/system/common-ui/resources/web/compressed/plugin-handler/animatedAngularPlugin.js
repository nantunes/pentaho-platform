var deps=["common-ui/AngularPlugin","common-ui/AnimatedAngularPluginHandler","common-ui/ring","common-ui/angular-animate"];
define(deps,function(n,i,e){var o=e.create([n],{init:function(n){if(this.$super(n),
!e.instance(this.config.pluginHandler,i))throw o.errMsgs.notAnAnimatedAngularPluginHandler;
},"goto":function(n){this.config.pluginHandler["goto"](n,this.moduleName)},goHome:function(n){
this.config.pluginHandler.goHome(this.moduleName,n)},goNext:function(n){this.config.pluginHandler.goNext(n,this.moduleName);
},goPrevious:function(n){this.config.pluginHandler.goPrevious(n,this.moduleName)},
slideDownTop:function(n){this.config.pluginHandler.slideDownTop(n,this.moduleName);
},open:function(n){this.config.pluginHandler.open(n,this.moduleName)},close:function(){
this.config.pluginHandler.close(this.moduleName)},toString:function(){return this.$super();
}});return o.errMsgs={},o.errMsgs.notAnAnimatedAngularPluginHandler="The attached plugin handler is not an Animated Angular Plugin Handler",
o});