var requireConfig=requireCfg.config;requireConfig.amd||(requireConfig.amd={}),requireConfig.amd.shim||(requireConfig.amd.shim={}),
requireConfig.amd.shim["cde/components/GoogleAnalyticsComponent/lib/jquery.ga"]={
exports:"jQuery",deps:{"cdf/lib/jquery":"jQuery"}},requirejs.config(requireCfg),define("cde/components/GoogleAnalyticsComponent/GoogleAnalyticsComponent",["cdf/components/BaseComponent","cdf/lib/jquery","amd!./lib/jquery.ga"],function(e,n){
return e.extend({update:function(){n.ga.load(this.gaTrackingId)}})}),define("cde/components/GoogleAnalyticsComponent",["cde/components/GoogleAnalyticsComponent/GoogleAnalyticsComponent"],function(e){
return e});