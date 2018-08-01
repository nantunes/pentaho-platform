define(["dojo/_base/lang","dojo/_base/window","dojo/_base/declare","dojo/_base/fx","dojo/on","dojo/_base/array","dojo/_base/sniff","dojo/window","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/BackgroundIframe","dojo/dnd/Moveable","./ContentPane","./ResizeHandle","dojo/text!./resources/FloatingPane.html","dojo/domReady!"],function(o,t,i,e,n,d,s,a,c,l,h,r,j,p,u,_,f,k,g){
var m=i("dojox.layout.Dock",[p,j],{templateString:'<div class="dojoxDock"><ul data-dojo-attach-point="containerNode" class="dojoxDockList"></ul></div>',
_docked:[],_inPositioning:!1,autoPosition:!1,addNode:function(o){var t=r.create("li",null,this.containerNode),i=new x({
title:o.title,paneRef:o},t);return i.startup(),i},startup:function(){("dojoxGlobalFloatingDock"==this.id||this.isFixedDock)&&(this.own(n(window,"resize",o.hitch(this,"_positionDock")),n(window,"scroll",o.hitch(this,"_positionDock"))),
s("ie")&&this.own(n(this.domNode,"resize",o.hitch(this,"_positionDock")))),this._positionDock(null),
this.inherited(arguments)},_positionDock:function(t){this._inPositioning||"south"==this.autoPosition&&setTimeout(o.hitch(this,function(){
this._inPositiononing=!0;var o=a.getBox(),t=this.domNode.style;t.left=o.l+"px",t.width=o.w-2+"px",
t.top=o.h+o.t-this.domNode.offsetHeight+"px",this._inPositioning=!1}),125)}}),x=i("dojox.layout._DockNode",[p,j],{
title:"",paneRef:null,templateString:'<li data-dojo-attach-event="onclick: restore" class="dojoxDockNode"><span data-dojo-attach-point="restoreNode" class="dojoxDockRestoreButton" data-dojo-attach-event="onclick: restore"></span><span class="dojoxDockTitleNode" data-dojo-attach-point="titleNode">${title}</span></li>',
restore:function(){this.paneRef.show(),this.paneRef.bringToTop(),this.destroy()}});
return m});