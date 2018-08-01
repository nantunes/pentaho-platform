var deps=["common-ui/Plugin","common-ui/PluginHandler","common-ui/ring","common-ui/angular","common-ui/angular-route"];
define(deps,function(o,e,r,i){var t=r.create([e],{init:function(){this.$super(),this.docBootstrapped=!1,
this.pluginModules={}},_onRegister:function(o){if(!this.pluginModules[o.id]){var e=i.module(o.moduleName);
if(!e.isPluggable)throw t.errMsgs.moduleNotPluggable;var r=this,l={when:function(i,t){
return i=c(i,o.moduleName),o.routes.push(i),r.docBootstrapped?e.$routeProvider.when(i,t):e.config(["$routeProvider",function(e){
o.isRegistered&&e.when(i,t)}]),l},otherwise:function(){throw t.errMsgs.otherwiseNotAllowed;
}},n=function(i,t){o.controllers.push(i),r.docBootstrapped?e.$controllerProvider.register(i,t):e.controller(i,t);
},u=function(i,t){o.services.push(i),r.docBootstrapped?e.$provide.service(i,t):e.service(i,t);
},a=function(i,t){o.factories.push(i),r.docBootstrapped?e.$provide.factory(i,t):e.factory(i,t);
},s=function(i,t){o.filters.push(i),r.docBootstrapped?e.$filterProvider.register(i,t):e.filter(i,t);
},d=function(i,t){o.directives.push(i),r.docBootstrapped?e.$compileProvider.directive(i,t):e.directive(i,t);
};o.config.routerCallback&&o.config.routerCallback.call(this,l),o.config.controllerCallback&&o.config.controllerCallback.call(this,n),
o.config.serviceCallback&&o.config.serviceCallback.call(this,u),o.config.factoryCallback&&o.config.factoryCallback.call(this,a),
o.config.filterCallback&&o.config.filterCallback.call(this,s),o.config.directiveCallback&&o.config.directiveCallback.call(this,d),
this.pluginModules[o.id]=e}},_onUnregister:function(o){if(this.pluginModules[o.id]){
var e=i.module(o.moduleName),r=this;$(o.controllers).each(function(o,i){r.docBootstrapped?e.$controllerProvider.register(i,null):e.controller(i,null);
}),$(o.services).each(function(o,i){r.docBootstrapped?e.$provide.service(i,null):e.service(i,null);
}),$(o.routes).each(function(o,i){r.docBootstrapped&&e.$routeProvider.when(i,{redirectTo:"/"
})}),$(o.factories).each(function(o,i){r.docBootstrapped?e.$provide.factory(i,null):e.factory(i,null);
}),$(o.filters).each(function(o,i){r.docBootstrapped?e.$filterProvider.register(i,null):e.filter(i,null);
}),$(o.directives).each(function(o,i){r.docBootstrapped?e.$compileProvider.directive(i,null):e.directive(i,null);
}),delete this.pluginModules[o.id]}},module:function(o,e,r){e.push("ngRoute");var t=i.module(o,e,r);
return this._makePluggable(t),t},_makePluggable:function(o){var e=this;o.isPluggable=!0,
o.config(["$routeProvider","$controllerProvider","$compileProvider","$filterProvider","$provide",function(r,i,t,l,c){
o.$controllerProvider=i,o.$compileProvider=t,o.$routeProvider=r,o.$filterProvider=l,
o.$provide=c,e.docBootstrapped=!0}]),o.run(["$location","$rootScope",function(r,i){
o.$location=r,o.$rootScope=i,i["goto"]=function(r){e["goto"](r,o.name)},i.goHome=function(){
e.goHome(o.name)}}])},"goto":function(o,e){l(c(o,e),i.module(e))},goHome:function(o){
l("/",i.module(o))}}),l=function(o,e){e.$location.path(n(o)),e.$rootScope.$$phase||e.$rootScope.$apply();
},c=function(o,e){return"/"+e+"/"+n(o)},n=function(o){for(var e=o.charAt(0);"#"==e||"/"==e;)o=o.slice(1),
e=o.charAt(0);return o};return t.errMsgs={},t.errMsgs.otherwiseNotAllowed="Angular's OTHERWISE property is not allowed to be used",
t.errMsgs.moduleNotPluggable="Module has not been made pluggable",t});