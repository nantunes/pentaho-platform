define(["dojo/_base/lang"],function(e){var r=e.getObject("dojox.geo.openlayers",!0);
r.BaseLayerType={OSM:"OSM",WMS:"WMS",GOOGLE:"Google",VIRTUAL_EARTH:"VirtualEarth",
BING:"VirtualEarth",YAHOO:"Yahoo",ARCGIS:"ArcGIS"},r.EPSG4326=new OpenLayers.Projection("EPSG:4326");
var a=/^\s*(\d{1,3})[D°]\s*(\d{1,2})[M']\s*(\d{1,2}\.?\d*)\s*(S|"|'')\s*([NSEWnsew]{0,1})\s*$/i;
return r.parseDMS=function(e,r){var o=a.exec(e);if(null==o||o.length<5)return parseFloat(e);
var t=parseFloat(o[1]),s=parseFloat(o[2]),n=parseFloat(o[3]),l=o[5];if(r){var S=l.toLowerCase(),i=t+(s+n/60)/60;
return("w"==S||"s"==S)&&(i=-i),i}return[t,s,n,l]},r});