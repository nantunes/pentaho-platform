define(["dojo/_base/window","dojo/dom-style","./sniff"],function(e,t,l){var a={};return{
createRoundMask:function(i,o,r,s,n,c,f,v,d,h){var g=o+c+s,b=r+f+n;if(l("webkit")){
var p=("DojoMobileMask"+o+r+c+f+v+d).replace(/\./g,"_");if(!a[p]){a[p]=1;var y=e.doc.getCSSCanvasContext("2d",p,g,b);
if(y.beginPath(),v==d)2==v&&5==c?(y.fillStyle="rgba(0,0,0,0.5)",y.fillRect(1,0,3,2),
y.fillRect(0,1,5,1),y.fillRect(0,f-2,5,1),y.fillRect(1,f-1,3,2),y.fillStyle="rgb(0,0,0)",
y.fillRect(0,2,5,f-4)):2==v&&5==f?(y.fillStyle="rgba(0,0,0,0.5)",y.fillRect(0,1,2,3),
y.fillRect(1,0,1,5),y.fillRect(c-2,0,1,5),y.fillRect(c-1,1,2,3),y.fillStyle="rgb(0,0,0)",
y.fillRect(2,0,c-4,5)):(y.fillStyle="#000000",y.moveTo(o+v,r),y.arcTo(o,r,o,r+v,v),
y.lineTo(o,r+f-v),y.arcTo(o,r+f,o+v,r+f,v),y.lineTo(o+c-v,r+f),y.arcTo(o+c,r+f,o+c,r+v,v),
y.lineTo(o+c,r+v),y.arcTo(o+c,r,o+c-v,r,v));else{var M=Math.PI;y.scale(1,d/v),y.moveTo(o+v,r),
y.arc(o+v,r+v,v,1.5*M,.5*M,!0),y.lineTo(o+c-v,r+2*v),y.arc(o+c-v,r+v,v,.5*M,1.5*M,!0);
}y.closePath(),y.fill()}i.style.webkitMaskImage="-webkit-canvas("+p+")"}else if(l("svg")){
i._svgMask&&i.removeChild(i._svgMask);for(var u=null,k=i.parentNode;k&&(u=t.getComputedStyle(k).backgroundColor,
!u||"transparent"==u||u.match(/rgba\(.*,\s*0\s*\)/));k=k.parentNode);var R="http://www.w3.org/2000/svg",w=e.doc.createElementNS(R,"svg");
w.setAttribute("width",g),w.setAttribute("height",b),w.style.position="absolute",
w.style.pointerEvents="none",w.style.opacity="1",w.style.zIndex="2147483647";var S=e.doc.createElementNS(R,"path");
h=h||0,v+=h,d+=h;var T=" M"+(o+v-h)+","+(r-h)+" a"+v+","+d+" 0 0,0 "+-v+","+d+" v"+-d+" h"+v+" Z M"+(o-h)+","+(r+f-d+h)+" a"+v+","+d+" 0 0,0 "+v+","+d+" h"+-v+" v"+-d+" z M"+(o+c-v+h)+","+(r+f+h)+" a"+v+","+d+" 0 0,0 "+v+","+-d+" v"+d+" h"+-v+" z M"+(o+c+h)+","+(r+d-h)+" a"+v+","+d+" 0 0,0 "+-v+","+-d+" h"+v+" v"+d+" z";
r>0&&(T+=" M0,0 h"+g+" v"+r+" h"+-g+" z"),n>0&&(T+=" M0,"+(r+f)+" h"+g+" v"+n+" h"+-g+" z"),
S.setAttribute("d",T),S.setAttribute("fill",u),S.setAttribute("stroke",u),S.style.opacity="1",
w.appendChild(S),i._svgMask=w,i.appendChild(w)}}}});