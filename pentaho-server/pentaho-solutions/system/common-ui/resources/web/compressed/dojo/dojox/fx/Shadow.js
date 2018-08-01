define(["dojo/_base/kernel","dojo/_base/query","dojo/_base/lang","dojo/_base/declare","dojo/_base/sniff","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dojo/_base/fx","dojo/fx","dijit/_Widget","dojo/NodeList-fx"],function(kernel,query,lang,declare,has,domConstruct,domClass,domGeom,baseFx,coreFx,Widget,NodeListFx){
return kernel.experimental("dojox.fx.Shadow"),declare("dojox.fx.Shadow",Widget,{shadowPng:kernel.moduleUrl("dojox.fx","resources/shadow"),
shadowThickness:7,shadowOffset:3,opacity:.75,animate:!1,node:null,startup:function(){
this.inherited(arguments),this.node.style.position="relative",this.pieces={};var e=-1*this.shadowThickness,s=this.shadowOffset,t=this.shadowOffset+this.shadowThickness;
this._makePiece("tl","top",s,"left",e),this._makePiece("l","top",t,"left",e,"scale"),
this._makePiece("tr","top",s,"left",0),this._makePiece("r","top",t,"left",0,"scale"),
this._makePiece("bl","top",0,"left",e),this._makePiece("b","top",0,"left",0,"crop"),
this._makePiece("br","top",0,"left",0),this.nodeList=query(".shadowPiece",this.node),
this.setOpacity(this.opacity),this.resize()},_makePiece:function(e,s,t,i,o,a){var d,h=this.shadowPng+e.toUpperCase()+".png";
has("ie")<7?(d=domConstruct.create("div"),d.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+h+"'"+(a?", sizingMethod='"+a+"'":"")+")"):d=domConstruct.create("img",{
src:h}),d.style.position="absolute",d.style[s]=t+"px",d.style[i]=o+"px",d.style.width=this.shadowThickness+"px",
d.style.height=this.shadowThickness+"px",domClass.add(d,"shadowPiece"),this.pieces[e]=d,
this.node.appendChild(d)},setOpacity:function(e,s){if(!has("ie"))if(s||(s={}),this.animate){
var t=[];this.nodeList.forEach(function(i){t.push(baseFx._fade(lang.mixin(s,{node:i,
end:e})))}),coreFx.combine(t).play()}else this.nodeList.style("opacity",e)},setDisabled:function(e){
if(e){if(this.disabled)return;this.animate?this.nodeList.fadeOut().play():this.nodeList.style("visibility","hidden"),
this.disabled=!0}else{if(!this.disabled)return;this.animate?this.nodeList.fadeIn().play():this.nodeList.style("visibility","visible"),
this.disabled=!1}},resize:function(args){var x,y;if(args)x=args.x,y=args.y;else{var co=domGeom.position(this.node);
x=co.w,y=co.h}var sideHeight=y-(this.shadowOffset+this.shadowThickness);with(0>sideHeight&&(sideHeight=0),
1>y&&(y=1),1>x&&(x=1),this.pieces)l.style.height=sideHeight+"px",r.style.height=sideHeight+"px",
b.style.width=x+"px",bl.style.top=y+"px",b.style.top=y+"px",br.style.top=y+"px",tr.style.left=x+"px",
r.style.left=x+"px",br.style.left=x+"px"}})});