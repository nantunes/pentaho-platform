define(["dojo","../../util/oo","../../plugins/_Plugin"],function(o,t,s){var n=t.declare(s,function(t){
t.node.className,t.node.innerHTML;this.domNode=o.create("div",{id:"btnZoom","class":"toolCombo"
},t.node,"replace"),this.makeButton("ZoomIn",this.topClass),this.makeButton("Zoom100",this.midClass),
this.makeButton("ZoomOut",this.botClass)},{type:"dojox.drawing.ui.dom.Zoom",zoomInc:.1,
maxZoom:10,minZoom:.1,zoomFactor:1,baseClass:"drawingButton",topClass:"toolComboTop",
midClass:"toolComboMid",botClass:"toolComboBot",makeButton:function(t,s){var n=o.create("div",{
id:"btn"+t,"class":this.baseClass+" "+s,innerHTML:'<div title="Zoom In" class="icon icon'+t+'"></div>'
},this.domNode);o.connect(document,"mouseup",function(t){o.stopEvent(t),o.removeClass(n,"active");
}),o.connect(n,"mouseup",this,function(s){o.stopEvent(s),o.removeClass(n,"active"),
this["on"+t]()}),o.connect(n,"mouseover",function(t){o.stopEvent(t),o.addClass(n,"hover");
}),o.connect(n,"mousedown",this,function(t){o.stopEvent(t),o.addClass(n,"active");
}),o.connect(n,"mouseout",this,function(t){o.stopEvent(t),o.removeClass(n,"hover");
})},onZoomIn:function(o){this.zoomFactor+=this.zoomInc,this.zoomFactor=Math.min(this.zoomFactor,this.maxZoom),
this.canvas.setZoom(this.zoomFactor),this.mouse.setZoom(this.zoomFactor)},onZoom100:function(o){
this.zoomFactor=1,this.canvas.setZoom(this.zoomFactor),this.mouse.setZoom(this.zoomFactor);
},onZoomOut:function(o){this.zoomFactor-=this.zoomInc,this.zoomFactor=Math.max(this.zoomFactor,this.minZoom),
this.canvas.setZoom(this.zoomFactor),this.mouse.setZoom(this.zoomFactor)}});return o.setObject("dojox.drawing.ui.dom.Zoom",n),
n});