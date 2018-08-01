define(["dojo/_base/lang","dojo/sniff"],function(e,o){var i=e.getObject("dojox.mobile",!0);
if(!o("webkit")&&10!==o("ie")||!o("ie")&&o("trident")>6){var t="dojox/mobile/_compat";
require([t])}return i});