define(["dojo/_base/declare","./Geometry"],function(e,o){return e("dojox.geo.openlayers.Collection",o,{
coordinates:null,setGeometries:function(e){this.coordinates=e},getGeometries:function(){
return this.coordinates}})});