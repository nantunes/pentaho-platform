!function(){var n={"cdf/lib/jquery":$,"amd!cdf/lib/underscore":_,"amd!cdf/lib/backbone":Backbone,
"cdf/AddIn":AddIn,"cdf/lib/mustache":Mustache,"cdf/lib/Base":Base,"cdf/lib/BaseEvents":"undefined"==typeof BaseEvents?{}:BaseEvents,
"cdf/components/UnmanagedComponent":UnmanagedComponent,"cdf/lib/BaseSelectionTree":"undefined"==typeof TreeFilter?{}:TreeFilter.Models.SelectionTree,
"cdf/lib/OpenLayers":"undefined"==typeof OpenLayers?{}:OpenLayers,"css!./Map":"",
"css!./styleGoogle":"","css!./styleOpenLayers2":"","css!./ControlPanel/ControlPanel":""
};CONTEXT_PATH=Dashboards.getWebAppPath()+"/";for(var e in n)define(e,function(){
return n[e]});define("cdf/Dashboard.Clean",function(){return Dashboards.registerGlobalAddIn=Dashboards.registerGlobalAddIn||Dashboards.registerAddIn,
Dashboards}),define("cdf/components/CggComponent.ext",[],function(){var n={getCggDrawUrl:function(){
return CONTEXT_PATH+"plugin/cgg/api/services/draw"}};return n}),define("cdf/Logger",function(){
return{log:Dashboards.log,debug:Dashboards.log,error:Dashboards.log,warn:Dashboards.log
}}),define("text!./ControlPanel.html",[],function(){return'<div class="map-control-panel {{mode}}">\n    <div class="map-controls-zoom">\n        <div class="map-control-button map-control-zoom-in"></div>\n        <div class="map-control-button map-control-zoom-out"></div>\n        <div class="map-control-button map-control-zoombox"></div>\n    </div>\n    <div class="map-controls-mode">\n        {{#configuration.isSelector}}\n        <div class="map-control-button map-control-select"></div>\n        {{/configuration.isSelector}}\n        <div class="map-control-button map-control-pan"></div>\n    </div>\n</div>';
})}();