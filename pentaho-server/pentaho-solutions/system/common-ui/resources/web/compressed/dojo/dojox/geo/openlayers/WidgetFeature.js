define(["dojo/_base/declare","dojo/dom-style","dojo/_base/lang","dijit/registry","./Feature"],function(t,e,i,o,d){
return t("dojox.geo.openlayers.WidgetFeature",d,{_widget:null,_bbox:null,constructor:function(t){
this._params=t},setParameters:function(t){this._params=t},getParameters:function(){
return this._params},_getWidget:function(){var t=this._params;if(null==this._widget&&null!=t){
var d=null;if("function"==typeof t.createWidget)d=t.createWidget.call(this);else if(t.dojoType){
dojo.require(t.dojoType);var r=i.getObject(t.dojoType);d=new r(t)}else t.dijitId?d=o.byId(t.dijitId):t.widget&&(d=t.widget);
if(null!=d){this._widget=d,"function"==typeof d.startup&&d.startup();var a=d.domNode;
null!=a&&e.set(a,{position:"absolute"})}this._widget=d}return this._widget},_getWidgetWidth:function(){
var t=this._params;if(t.width)return t.width;var i=this._getWidget();return i?e.get(i.domNode,"width"):10;
},_getWidgetHeight:function(){var t=this._params;if(t.height)return t.height;var i=this._getWidget();
return i?e.get(i.domNode,"height"):10},render:function(){var t=this.getLayer(),e=this._getWidget();
if(null!=e){var i=this._params,o=i.longitude,d=i.latitude,r=this.getCoordinateSystem(),a=t.getDojoMap(),n=a.transformXY(o,d,r),s=this._getLocalXY(n),h=this._getWidgetWidth(),g=this._getWidgetHeight(),u=s[0]-h/2,p=s[1]-g/2,l=e.domNode,f=t.olLayer.div;
l.parentNode!=f&&(l.parentNode&&l.parentNode.removeChild(l),f.appendChild(l)),this._updateWidgetPosition({
x:u,y:p,width:h,height:g})}},_updateWidgetPosition:function(t){var o=this._widget,d=o.domNode;
e.set(d,{position:"absolute",left:t.x+"px",top:t.y+"px",width:t.width+"px",height:t.height+"px"
}),o.srcNodeRef&&e.set(o.srcNodeRef,{position:"absolute",left:t.x+"px",top:t.y+"px",
width:t.width+"px",height:t.height+"px"}),i.isFunction(o.resize)&&o.resize({w:t.width,
h:t.height})},remove:function(){var t=this._getWidget();if(t){var e=t.domNode;e.parentNode&&e.parentNode.removeChild(e);
}}})});