define(["dojo/_base/lang","../../util/oo","../_Plugin","../../manager/_registry"],function(o,n,t,i){
var s,e=Math.pow(2,.25),u=10,m=.1,l=1;return o.getObject("dojox.drawing.plugins.tools")||o.setObject("dojox.drawing.plugins.tools",{}),
s=dojox.drawing.plugins.tools,s.ZoomIn=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.ZoomIn",
onZoomIn:function(){l*=e,l=Math.min(l,u),this.canvas.setZoom(l),this.mouse.setZoom(l);
},onClick:function(){this.onZoomIn()}}),s.Zoom100=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.Zoom100",
onZoom100:function(){l=1,this.canvas.setZoom(l),this.mouse.setZoom(l)},onClick:function(){
this.onZoom100()}}),s.ZoomOut=n.declare(t,function(o){},{type:"dojox.drawing.plugins.tools.ZoomOut",
onZoomOut:function(){l/=e,l=Math.max(l,m),this.canvas.setZoom(l),this.mouse.setZoom(l);
},onClick:function(){this.onZoomOut()}}),s.ZoomIn.setup={name:"dojox.drawing.plugins.tools.ZoomIn",
tooltip:"Zoom In"},i.register(s.ZoomIn.setup,"plugin"),s.Zoom100.setup={name:"dojox.drawing.plugins.tools.Zoom100",
tooltip:"Zoom to 100%"},i.register(s.Zoom100.setup,"plugin"),s.ZoomOut.setup={name:"dojox.drawing.plugins.tools.ZoomOut",
tooltip:"Zoom In"},i.register(s.ZoomOut.setup,"plugin"),s});