define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-style","dojo/dom-construct","dojo/dom-geometry","dojo/ready","dojox/calc/Standard","dojox/calc/Grapher","dojox/layout/FloatingPane","dojo/text!./templates/GraphPro.html","dojox/calc/_Executor","dijit/Menu","dijit/MenuItem","dijit/form/ComboButton","dijit/form/Button","dijit/form/TextBox"],function(t,e,a,i,n,o,r,s,h,d,u){
return t("dojox.calc.GraphPro",s,{templateString:u,grapher:null,funcMaker:null,aFloatingPane:null,
executorLoaded:function(){this.inherited(arguments),r(e.hitch(this,function(){null==this.writeStore&&"functionMakerButton"in this&&i.set(this.functionMakerButton.domNode,{
visibility:"hidden"})}))},makeFunctionWindow:function(){var t=a.body(),i=n.create("div");
t.appendChild(i),this.aFloatingPane=new dojox.layout.FloatingPane({resizable:!1,dockable:!0,
maxable:!1,closable:!0,duration:300,title:"Function Window",style:"position:absolute;left:10em;top:10em;width:50em;"
},i);var o=this,r=n.create("div");this.funcMaker=new h.FuncGen({writeStore:o.writeStore,
readStore:o.readStore,functions:o.functions,deleteFunction:o.executor.deleteFunction,
onSaved:function(){var t,e;if(""==(t=this.combo.get("value")))this.status.set("value","The function needs a name");else if(""==(e=this.textarea.get("value")))this.status.set("value","The function needs a body");else{
var a=this.args.get("value");t in this.functions||(this.combo.item=this.writeStore.put({
name:t,args:a,body:e})),this.saveFunction(t,a,e),this.status.set("value","Function "+t+" was saved");
}},saveFunction:e.hitch(o,o.saveFunction)},r),this.aFloatingPane.set("content",this.funcMaker),
this.aFloatingPane.startup(),this.aFloatingPane.bringToTop()},makeGrapherWindow:function(){
var t=a.body(),e=n.create("div");t.appendChild(e),this.aFloatingPane=new dojox.layout.FloatingPane({
resizable:!1,dockable:!0,maxable:!1,closable:!0,duration:300,title:"Graph Window",
style:"position:absolute;left:10em;top:5em;width:50em;"},e);var i=this,r=n.create("div");
this.grapher=new h.Grapher({myPane:this.aFloatingPane,drawOne:function(t){if(this.array[t][this.chartIndex].resize(this.graphWidth.get("value"),this.graphHeight.get("value")),
this.array[t][this.chartIndex].axes.x.max=this.graphMaxX.get("value"),""==this.array[t][this.expressionIndex].get("value"))return void this.setStatus(t,"Error");
var e,a="y="==this.array[t][this.functionMode];if(this.array[t][this.expressionIndex].get("value")!=this.array[t][this.evaluatedExpression]){
var n="x";a||(n="y"),e=i.executor.Function("",n,"return "+this.array[t][this.expressionIndex].get("value")),
this.array[t][this.evaluatedExpression]=this.array[t][this.expressionIndex].value,
this.array[t][this.functionRef]=e}else e=this.array[t][this.functionRef];var o=this.array[t][this.colorIndex].get("value");
o||(o="black"),h.draw(this.array[t][this.chartIndex],e,{graphNumber:this.array[t][this.funcNumberIndex],
fOfX:a,color:{stroke:{color:o}}}),this.setStatus(t,"Drawn")},onDraw:function(){for(var t=0;t<this.rowCount;t++)!this.dirty&&this.array[t][this.checkboxIndex].get("checked")||this.dirty&&"Drawn"==this.array[t][this.statusIndex].innerHTML?this.drawOne(t):(this.array[t][this.chartIndex].resize(this.graphWidth.get("value"),this.graphHeight.get("value")),
this.array[t][this.chartIndex].axes.x.max=this.graphMaxX.get("value"));var e=o.position(this.outerDiv).y-o.position(this.myPane.domNode).y;
e*=2,e=Math.abs(e);var a=""+Math.max(parseInt(this.graphHeight.get("value"))+50,this.outerDiv.scrollHeight+e),i=""+(parseInt(this.graphWidth.get("value"))+this.outerDiv.scrollWidth);
this.myPane.resize({w:i,h:a})}},r),this.aFloatingPane.set("content",this.grapher),
this.aFloatingPane.startup(),this.aFloatingPane.bringToTop()}})});