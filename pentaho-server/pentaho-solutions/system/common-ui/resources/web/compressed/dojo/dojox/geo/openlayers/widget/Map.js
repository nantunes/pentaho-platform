define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojo/query","dijit/_Widget","../_base","../Map","../Layer","../GfxLayer"],function(e,a,t,i,n,r,o,s,d,u){
return a("dojox.geo.openlayers.widget.Map",r,{baseLayerType:o.BaseLayerType.OSM,initialLocation:null,
touchHandler:!1,map:null,startup:function(){this.inherited(arguments),this.map.initialFit({
initialLocation:this.initialLocation})},buildRendering:function(){this.inherited(arguments);
var e=this.domNode,a=new s(e,{baseLayerType:this.baseLayerType,touchHandler:this.touchHandler
});this.map=a,this._makeLayers()},_makeLayers:function(){var a=this.domNode,i=n("> .layer",a);
t.forEach(i,function(a){var t=a.getAttribute("type"),i=a.getAttribute("name"),n="dojox.geo.openlayers."+t,r=e.getObject(n);
if(r){var o=new r(i,{});o&&this.map.addLayer(o)}},this)},resize:function(a,t){var n,r=this.map.getOLMap();
switch(arguments.length){case 0:break;case 1:n=e.mixin({},a),i.setMarginBox(r.div,n);
break;case 2:n={w:arguments[0],h:arguments[1]},i.setMarginBox(r.div,n)}r.updateSize();
}})});