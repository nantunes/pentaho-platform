define(["./_base/lang","./sniff"],function(e,t){var a={};return e.setObject("dojo.gears",a),
a._gearsObject=function(){var a,r=e.getObject("google.gears");if(r)return r;if("undefined"!=typeof GearsFactory)a=new GearsFactory;else if(t("ie"))try{
a=new ActiveXObject("Gears.Factory")}catch(o){}else navigator.mimeTypes["application/x-googlegears"]&&(a=document.createElement("object"),
a.setAttribute("type","application/x-googlegears"),a.setAttribute("width",0),a.setAttribute("height",0),
a.style.display="none",document.documentElement.appendChild(a));return a?(e.setObject("google.gears.factory",a),
e.getObject("google.gears")):null},a.available=!!a._gearsObject()||0,a});