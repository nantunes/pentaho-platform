define(["dojo/_base/lang","dijit/registry","dojo/Stateful"],function(e,t){var r=function(r,i){
if("string"==typeof r){var o=r.match(/^(expr|rel|widget):(.*)$/)||[];try{r="rel"==o[1]?e.getObject(o[2]||"",!1,i):"widget"==o[1]?t.byId(o[2]):e.getObject(o[2]||r,!1,i);
}catch(c){}}return r};return e.setObject("dojox.mvc.resolve",r)});