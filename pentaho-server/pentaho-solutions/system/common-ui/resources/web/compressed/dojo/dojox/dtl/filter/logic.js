define(["dojo/_base/lang","../_base"],function(n,e){var t=n.getObject("filter.logic",!0,e);
return n.mixin(t,{default_:function(n,e){return n||e||""},default_if_none:function(n,e){
return null===n?e||"":n||""},divisibleby:function(n,e){return parseInt(n,10)%parseInt(e,10)===0;
},_yesno:/\s*,\s*/g,yesno:function(n,e){e||(e="yes,no,maybe");var t=e.split(dojox.dtl.filter.logic._yesno);
return t.length<2?n:n?t[0]:!n&&null!==n||t.length<3?t[1]:t[2]}}),t});