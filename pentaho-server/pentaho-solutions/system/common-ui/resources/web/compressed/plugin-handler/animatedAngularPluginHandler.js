var deps=["common-ui/AngularPluginHandler","common-ui/ring","common-ui/angular-animate"];
define(deps,function(n,t){var i=t.create([n],{init:function(){this.$super(),this.animation="slide-left";
},_setAnimation:function(n){this.animation=n},"goto":function(n,t,i){i||this._setAnimation("none"),
this.$super(n,t)},goHome:function(n,t){t||this._setAnimation("none"),this.$super(n);
},goNext:function(n,t){this._setAnimation("slide-left"),this["goto"](n,t,!0)},goPrevious:function(n,t){
this._setAnimation("slide-right"),this["goto"](n,t,!0)},close:function(n){this._setAnimation("fade"),
this.goHome(n,!0)},open:function(n,t){this._setAnimation("fade"),this["goto"](n,t,!0);
},slideDownTop:function(n,t){this._setAnimation("slide-down-top"),this["goto"](n,t,!0);
},module:function(n,t,i){return t.push("ngAnimate"),this.$super.call(this,n,t,i)},
_makePluggable:function(n){this.$super(n);var t=this;n.animation(".ng-app-element",function(){
return{enter:function(n,i){return $(".ng-app-element:not(.deny-animation-change)").attr("animate",t.animation),
function(n){$(".ng-app-element:not(.deny-animation-change)").attr("animate",t.animation);
}}}}),n.run(["$rootScope",function(i){i.goNext=function(i){t.goNext(i,n.name)},i.goPrevious=function(i){
t.goPrevious(i,n.name)},i.close=function(){t.close(n.name)},i.open=function(i){t.open(i,n.name);
},i["goto"]=function(i){t["goto"](i,n.name)},i.slideDownTop=function(i){t.slideDownTop(i,n.name);
},i.goHome=function(i){t.goHome(n.name,i)}}])}});return i});