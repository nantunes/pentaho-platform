define(["dojo","../util/oo","../plugins/_Plugin","../manager/_registry"],function(t,o,i,n){
var e=null,s=o.declare(i,function(t){this.createDom()},{show:function(o,i){this.domNode.innerHTML=i;
var n=30,e=o.data.x+o.data.width,s=o.data.y+o.data.height,a=e+this.mouse.origin.x+n,h=s+this.mouse.origin.y+n;
t.style(this.domNode,{display:"inline",left:a+"px",top:h+"px"});var r=t.marginBox(this.domNode);
this.createShape(a-this.mouse.origin.x,h-this.mouse.origin.y,r.w,r.h)},createShape:function(t,o,i,n){
this.balloon&&this.balloon.destroy();var e=5,s=t+i,a=o+n,h=[],r=function(){for(var t=0;t<arguments.length;t++)h.push(arguments[t]);
};r({x:t,y:o+5},{t:"Q",x:t,y:o},{x:t+e,y:o}),r({t:"L",x:s-e,y:o}),r({t:"Q",x:s,y:o
},{x:s,y:o+e}),r({t:"L",x:s,y:a-e}),r({t:"Q",x:s,y:a},{x:s-e,y:a}),r({t:"L",x:t+e,
y:a}),r({t:"Q",x:t,y:a},{x:t,y:a-e}),r({t:"L",x:t,y:o+e}),this.balloon=this.drawing.addUI("path",{
points:h})},createDom:function(){this.domNode=t.create("span",{"class":"drawingTooltip"
},document.body),t.style(this.domNode,{display:"none",position:"absolute"})}}),a=o.declare(i,function(t){
e||(e=new s(t)),t.stencil||this.button&&(this.connect(this.button,"onOver",this,"onOver"),
this.connect(this.button,"onOut",this,"onOut"))},{width:300,height:200,onOver:function(){
e.show(this.button,this.data.text)},onOut:function(){}});return t.setObject("dojox.drawing.ui.Tooltip",a),
n.register({name:"dojox.drawing.ui.Tooltip"},"stencil"),a});