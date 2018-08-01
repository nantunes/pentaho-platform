define(["require","dojo/when","dojo/on","dojo/dom-attr","dojo/dom-style","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","./utils/model","./utils/constraints"],function(t,e,i,s,r,o,n,a,h,d){
return o("dojox.app.ViewBase",null,{constructor:function(t){this.id="",this.name="",
this.children={},this.selectedChildren={},this.loadedStores={},this._started=!1,n.mixin(this,t),
this.parent.views&&n.mixin(this,this.parent.views[this.name])},start:function(){return this._started?this:(this._startDef=new a,
e(this.load(),n.hitch(this,function(){this._createDataStore(this),this._setupModel();
})),this._startDef)},load:function(){var t=this._loadViewController();return e(t,n.hitch(this,function(t){
t&&n.mixin(this,t)})),t},_createDataStore:function(){if(this.parent.loadedStores&&n.mixin(this.loadedStores,this.parent.loadedStores),
this.stores)for(var e in this.stores)if("_"!==e.charAt(0)){var i=this.stores[e].type?this.stores[e].type:"dojo/store/Memory",s={};
this.stores[e].params&&n.mixin(s,this.stores[e].params);try{var r=t(i)}catch(o){throw new Error(i+" must be listed in the dependencies");
}if(s.data&&n.isString(s.data)&&(s.data=n.getObject(s.data)),this.stores[e].observable){
try{var a=t("dojo/store/Observable")}catch(o){throw new Error("dojo/store/Observable must be listed in the dependencies");
}this.stores[e].store=a(new r(s))}else this.stores[e].store=new r(s);this.loadedStores[e]=this.stores[e].store;
}},_setupModel:function(){if(this.loadedModels)this._startup();else{var t;try{t=h(this.models,this.parent,this.app);
}catch(i){throw new Error("Error creating models: "+i.message)}e(t,n.hitch(this,function(t){
t&&(this.loadedModels=n.isArray(t)?t[0]:t),this._startup()}),function(t){throw new Error("Error creating models: "+t.message);
})}},_startup:function(){this._initViewHidden(),this._needsResize=!0,this._startLayout();
},_initViewHidden:function(){r.set(this.domNode,"visibility","hidden")},_startLayout:function(){
this.app.log("  > in app/ViewBase _startLayout firing layout for name=[",this.name,"], parent.name=[",this.parent.name,"]"),
this.hasOwnProperty("constraint")||(this.constraint=s.get(this.domNode,"data-app-constraint")||"center"),
d.register(this.constraint),this.app.emit("app-initLayout",{view:this,callback:n.hitch(this,function(){
this.startup(),this.app.log("  > in app/ViewBase calling init() name=[",this.name,"], parent.name=[",this.parent.name,"]"),
this.init(),this._started=!0,this._startDef&&this._startDef.resolve(this)})})},_loadViewController:function(){
var e,i=new a;if(!this.controller)return this.app.log("  > in app/ViewBase _loadViewController no controller set for view name=[",this.name,"], parent.name=[",this.parent.name,"]"),
i.resolve(!0),i;e=this.controller.replace(/(\.js)$/,"");var s;try{var r=e,o=r.indexOf("./");
o>=0&&(r=e.substring(o+2)),s=t.on("error",function(t){i.isResolved()||i.isRejected()||t.info[0]&&t.info[0].indexOf(r)>=0&&(i.resolve(!1),
s.remove())}),0==e.indexOf("./")&&(e="app/"+e),t([e],function(t){i.resolve(t),s.remove();
})}catch(n){i.reject(n),s&&s.remove()}return i},init:function(){},beforeActivate:function(){},
afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},
destroy:function(){}})});