define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/Color","dojo/_base/sniff","dojo/_base/window","dojo/_base/array","dojo/dom","dojo/dom-construct","dojo/dom-geometry"],function(e,t,n,r,a,i,o,l,u){
var s=t.getObject("dojox.gfx",!0),c=s._base={};s._hasClass=function(e,t){var n=e.getAttribute("className");
return n&&(" "+n+" ").indexOf(" "+t+" ")>=0},s._addClass=function(e,t){var n=e.getAttribute("className")||"";
(!n||(" "+n+" ").indexOf(" "+t+" ")<0)&&e.setAttribute("className",n+(n?" ":"")+t);
},s._removeClass=function(e,t){var n=e.getAttribute("className");n&&e.setAttribute("className",n.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)"),"$1$2"));
},c._getFontMeasurements=function(){var e,t={"1em":0,"1ex":0,"100%":0,"12pt":0,"16px":0,
"xx-small":0,"x-small":0,small:0,medium:0,large:0,"x-large":0,"xx-large":0};r("ie")&&(a.doc.documentElement.style.fontSize="100%");
var n=l.create("div",{style:{position:"absolute",left:"0",top:"-100px",width:"30px",
height:"1000em",borderWidth:"0",margin:"0",padding:"0",outline:"none",lineHeight:"1",
overflow:"hidden"}},a.body());for(e in t)n.style.fontSize=e,t[e]=16*Math.round(12*n.offsetHeight/16)/12/1e3;
return a.body().removeChild(n),t};var d=null;c._getCachedFontMeasurements=function(e){
return(e||!d)&&(d=c._getFontMeasurements()),d};var f=null,p={};c._getTextBox=function(e,t,n){
var r,i,o,s=arguments.length;if(f||(f=l.create("div",{style:{position:"absolute",
top:"-10000px",left:"0"}},a.body())),r=f,r.className="",i=r.style,i.borderWidth="0",
i.margin="0",i.padding="0",i.outline="0",s>1&&t)for(o in t)o in p||(i[o]=t[o]);if(s>2&&n&&(r.className=n),
r.innerHTML=e,r.getBoundingClientRect){var c=r.getBoundingClientRect();return{l:c.left,
t:c.top,w:c.width||c.right-c.left,h:c.height||c.bottom-c.top}}return u.getMarginBox(r);
},c._computeTextLocation=function(e,t,n,r){var a={},i=e.align;switch(i){case"end":
a.x=e.x-t;break;case"middle":a.x=e.x-t/2;break;default:a.x=e.x}var o=r?.75:1;return a.y=e.y-n*o,
a},c._computeTextBoundingBox=function(e){if(!s._base._isRendered(e))return{x:0,y:0,
width:0,height:0};var t,n=e.getShape(),r=e.getFont()||s.defaultFont,a=e.getTextWidth(),i=s.normalizedLength(r.size);
return t=c._computeTextLocation(n,a,i,!0),{x:t.x,y:t.y,width:a,height:i}},c._isRendered=function(e){
for(var t=e.parent;t&&t.getParent;)t=t.parent;return null!==t};var g=0;return c._getUniqueId=function(){
var t;do t=e._scopeName+"xUnique"+ ++g;while(o.byId(t));return t},c._fixMsTouchAction=function(e){
var t=e.rawNode;"undefined"!=typeof t.style.msTouchAction&&(t.style.msTouchAction="none");
},t.mixin(s,{defaultPath:{type:"path",path:""},defaultPolyline:{type:"polyline",points:[]
},defaultRect:{type:"rect",x:0,y:0,width:100,height:100,r:0},defaultEllipse:{type:"ellipse",
cx:0,cy:0,rx:200,ry:100},defaultCircle:{type:"circle",cx:0,cy:0,r:100},defaultLine:{
type:"line",x1:0,y1:0,x2:100,y2:100},defaultImage:{type:"image",x:0,y:0,width:0,height:0,
src:""},defaultText:{type:"text",x:0,y:0,text:"",align:"start",decoration:"none",
rotated:!1,kerning:!0},defaultTextPath:{type:"textpath",text:"",align:"start",decoration:"none",
rotated:!1,kerning:!0},defaultStroke:{type:"stroke",color:"black",style:"solid",width:1,
cap:"butt",join:4},defaultLinearGradient:{type:"linear",x1:0,y1:0,x2:100,y2:100,colors:[{
offset:0,color:"black"},{offset:1,color:"white"}]},defaultRadialGradient:{type:"radial",
cx:0,cy:0,r:100,colors:[{offset:0,color:"black"},{offset:1,color:"white"}]},defaultPattern:{
type:"pattern",x:0,y:0,width:0,height:0,src:""},defaultFont:{type:"font",style:"normal",
variant:"normal",weight:"normal",size:"10pt",family:"serif"},getDefault:function(){
var e={};return function(t){var n=e[t];return n?new n:(n=e[t]=new Function,n.prototype=s["default"+t],
new n)}}(),normalizeColor:function(e){return e instanceof n?e:new n(e)},normalizeParameters:function(e,t){
var n;if(t){var r={};for(n in e)n in t&&!(n in r)&&(e[n]=t[n])}return e},makeParameters:function(e,n){
var r=null;if(!n)return t.delegate(e);var a={};for(r in e)r in a||(a[r]=t.clone(r in n?n[r]:e[r]));
return a},formatNumber:function(e,t){var n=e.toString();if(n.indexOf("e")>=0)n=e.toFixed(4);else{
var r=n.indexOf(".");r>=0&&n.length-r>5&&(n=e.toFixed(4))}return 0>e?n:t?" "+n:n},
makeFontString:function(e){return e.style+" "+e.variant+" "+e.weight+" "+e.size+" "+e.family;
},splitFontString:function(e){var t=s.getDefault("Font"),n=e.split(/\s+/);do{if(n.length<5)break;
t.style=n[0],t.variant=n[1],t.weight=n[2];var r=n[3].indexOf("/");t.size=0>r?n[3]:n[3].substring(0,r);
var a=4;0>r&&("/"==n[4]?a=6:"/"==n[4].charAt(0)&&(a=5)),a<n.length&&(t.family=n.slice(a).join(" "));
}while(!1);return t},cm_in_pt:72/2.54,mm_in_pt:7.2/2.54,px_in_pt:function(){return s._base._getCachedFontMeasurements()["12pt"]/12;
},pt2px:function(e){return e*s.px_in_pt()},px2pt:function(e){return e/s.px_in_pt();
},normalizedLength:function(e){if(0===e.length)return 0;if(e.length>2){var t=s.px_in_pt(),n=parseFloat(e);
switch(e.slice(-2)){case"px":return n;case"pt":return n*t;case"in":return 72*n*t;case"pc":
return 12*n*t;case"mm":return n*s.mm_in_pt*t;case"cm":return n*s.cm_in_pt*t}}return parseFloat(e);
},pathVmlRegExp:/([A-Za-z]+)|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,pathSvgRegExp:/([A-Za-z])|(\d+(\.\d+)?)|(\.\d+)|(-\d+(\.\d+)?)|(-\.\d+)/g,
equalSources:function(e,t){return e&&t&&e===t},switchTo:function(e){var t="string"==typeof e?s[e]:e;
t&&(i.forEach(["Group","Rect","Ellipse","Circle","Line","Polyline","Image","Text","Path","TextPath","Surface","createSurface","fixTarget"],function(e){
s[e]=t[e]}),"string"==typeof e?s.renderer=e:i.some(["svg","vml","canvas","canvasWithEvents","silverlight"],function(e){
return s.renderer=s[e]&&s[e].Surface===s.Surface?e:null}))}}),s});