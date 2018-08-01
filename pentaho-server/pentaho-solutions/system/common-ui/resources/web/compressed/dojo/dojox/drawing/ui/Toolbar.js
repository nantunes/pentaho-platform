define(["dojo","../library/icons","../util/common","../Drawing","../manager/_registry"],function(t,i,s,e,o){
return t.declare("dojox.drawing.ui.Toolbar",[],{constructor:function(i,s){if(i.drawing)this.toolDrawing=i.drawing,
this.drawing=this.toolDrawing,this.width=this.toolDrawing.width,this.height=this.toolDrawing.height,
this.strSelected=i.selected,this.strTools=i.tools,this.strPlugs=i.plugs,this._mixprops(["padding","margin","size","radius"],i),
this.addBack(),this.orient=i.orient?i.orient:!1;else{var n=t.marginBox(s);this.width=n.w,
this.height=n.h,this.strSelected=t.attr(s,"selected"),this.strTools=t.attr(s,"tools"),
this.strPlugs=t.attr(s,"plugs"),this._mixprops(["padding","margin","size","radius"],s),
this.toolDrawing=new e({mode:"ui"},s),this.orient=t.attr(s,"orient")}if(this.horizontal=this.orient?"H"==this.orient:this.width>this.height,
console.log("this.hor: ",this.horizontal," orient: ",this.orient),this.toolDrawing.ready)this.makeButtons(),
!this.strSelected&&this.drawing.defaults.clickMode&&this.drawing.mouse.setCursor("default");else{
t.connect(this.toolDrawing,"onSurfaceReady",this,function(){if(t.disconnect(i),this.drawing=o.getRegistered("drawing",t.attr(s,"drawingId")),
this.makeButtons(),!this.strSelected&&this.drawing.defaults.clickMode)var i=t.connect(this.drawing,"onSurfaceReady",this,function(){
t.disconnect(i),this.drawing.mouse.setCursor("default")})})}},padding:10,margin:5,
size:30,radius:3,toolPlugGap:20,strSelected:"",strTools:"",strPlugs:"",makeButtons:function(){
this.buttons=[],this.plugins=[];var e=this.padding,n=this.padding,r=this.size,a=this.size,h=this.radius,d=this.margin,l=i,c={
place:"BR",size:2,mult:4};if(this.strTools){var u=[],g=o.getRegistered("tool"),f={};
for(var p in g){var w=s.abbr(p);if(f[w]=g[p],"all"==this.strTools){u.push(w);var m=o.getRegistered("tool",p);
m.secondary&&u.push(m.secondary.name)}}if("all"!=this.strTools){var y=this.strTools.split(",");
t.forEach(y,function(i){i=t.trim(i),u.push(i);var s=o.getRegistered("tool",f[i].name);
s.secondary&&u.push(s.secondary.name)},this)}t.forEach(u,function(i){i=t.trim(i);var s=!1;
if(i.indexOf("Secondary")>-1){var u=i.substring(0,i.indexOf("Secondary")),g=o.getRegistered("tool",f[u].name).secondary,p=g.label;
this[i]=g.funct,g.setup&&t.hitch(this,g.setup)();var w=this.toolDrawing.addUI("button",{
data:{x:e,y:n,width:r,height:a/2,r:h},toolType:i,secondary:!0,text:p,shadow:c,scope:this,
callback:this[i]});g.postSetup&&t.hitch(this,g.postSetup,w)(),s=!0}else var w=this.toolDrawing.addUI("button",{
data:{x:e,y:n,width:r,height:a,r:h},toolType:i,icon:l[i],shadow:c,scope:this,callback:"onToolClick"
});if(o.register(w,"button"),this.buttons.push(w),this.strSelected==i&&(w.select(),
this.selected=w,this.drawing.setTool(w.toolType)),this.horizontal)e+=a+d;else{var m=s?a/2+d:a+d;
n+=m}},this)}if(this.horizontal?e+=this.toolPlugGap:n+=this.toolPlugGap,this.strPlugs){
var b=[],v=o.getRegistered("plugin"),T={};for(var p in v){var k=s.abbr(p);T[k]=v[p],
"all"==this.strPlugs&&b.push(k)}"all"!=this.strPlugs&&(b=this.strPlugs.split(","),
t.map(b,function(i){return t.trim(i)})),t.forEach(b,function(i){var s=t.trim(i);if(0!=T[i].button){
var u=this.toolDrawing.addUI("button",{data:{x:e,y:n,width:r,height:a,r:h},toolType:s,
icon:l[s],shadow:c,scope:this,callback:"onPlugClick"});o.register(u,"button"),this.plugins.push(u),
this.horizontal?e+=a+d:n+=a+d}var g={};g=0==T[i].button?{name:this.drawing.stencilTypeMap[i]
}:{name:this.drawing.stencilTypeMap[i],options:{button:u}},this.drawing.addPlugin(g);
},this)}t.connect(this.drawing,"onRenderStencil",this,"onRenderStencil")},onRenderStencil:function(t){
this.drawing.defaults.clickMode&&(this.drawing.mouse.setCursor("default"),this.selected&&this.selected.deselect(),
this.selected=null)},addTool:function(){},addPlugin:function(){},addBack:function(){
this.toolDrawing.addUI("rect",{data:{x:0,y:0,width:this.width,height:this.size+2*this.padding,
fill:"#ffffff",borderWidth:0}})},onToolClick:function(i){this.drawing.defaults.clickMode&&this.drawing.mouse.setCursor("crosshair"),
t.forEach(this.buttons,function(t){t.id==i.id?(t.select(),this.selected=t,this.drawing.setTool(i.toolType)):t.secondary||t.deselect();
},this)},onPlugClick:function(t){},_mixprops:function(i,s){t.forEach(i,function(i){
this[i]=s.tagName?null===t.attr(s,i)?this[i]:t.attr(s,i):void 0===s[i]?this[i]:s[i];
},this)}})});