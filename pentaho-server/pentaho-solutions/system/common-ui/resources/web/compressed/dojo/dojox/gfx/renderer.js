define(["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(e,n,a,i,r){
var o=null;return a.add("vml",function(e,n,a){a.innerHTML='<v:shape adj="1"/>';var i="adj"in a.firstChild;
return a.innerHTML="",i}),{load:function(s,l,t){function v(){l(["dojox/gfx/"+c],function(n){
e.renderer=c,o=n,t(n)})}if(o&&"force"!=s)return void t(o);for(var g,d,c=r.forceGfxRenderer,f=!c&&(n.isString(r.gfxRenderer)?r.gfxRenderer:"svg,vml,canvas,silverlight").split(",");!c&&f.length;)switch(f.shift()){
case"svg":"SVGAngle"in i.global&&(c="svg");break;case"vml":a("vml")&&(c="vml");break;
case"silverlight":try{a("ie")?(g=new ActiveXObject("AgControl.AgControl"),g&&g.IsVersionSupported("1.0")&&(d=!0)):navigator.plugins["Silverlight Plug-In"]&&(d=!0);
}catch(u){d=!1}finally{g=null}d&&(c="silverlight");break;case"canvas":i.global.CanvasRenderingContext2D&&(c="canvas");
}"canvas"===c&&r.canvasEvents!==!1&&(c="canvasWithEvents"),r.isDebug&&console.log("gfx renderer = "+c),
"svg"==c&&"undefined"!=typeof window.svgweb?window.svgweb.addOnLoad(v):v()}}});