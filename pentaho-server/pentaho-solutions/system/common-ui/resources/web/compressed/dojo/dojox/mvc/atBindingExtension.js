define(["dojo/aspect","dojo/_base/array","dojo/_base/lang","dijit/_WidgetBase","./_atBindingMixin","dijit/registry"],function(t,n,i,e,a){
return function(e){return n.forEach(arguments,function(n){return n.dataBindAttr?void console.warn("Detected a widget or a widget class that has already been applied data binding extension. Skipping..."):(i._mixin(n,a.mixin),
t.before(n,"postscript",function(t,n){this._dbpostscript(t,n)}),t.before(n,"startup",function(){
this._started||this._startAtWatchHandles()}),t.before(n,"destroy",function(){this._stopAtWatchHandles();
}),void t.around(n,"set",function(t){return function(n,e){return n==a.prototype.dataBindAttr?this._setBind(e):"dojox.mvc.at"==(e||{}).atsignature?this._setAtWatchHandle(n,e):t.apply(this,i._toArray(arguments));
}}))}),arguments}});