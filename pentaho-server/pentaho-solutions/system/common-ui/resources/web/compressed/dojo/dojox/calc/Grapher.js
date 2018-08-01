define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","dijit/_TemplatedMixin","dojox/math/_base","dijit/registry","dijit/form/DropDownButton","dijit/TooltipDialog","dijit/form/TextBox","dijit/form/CheckBox","dijit/ColorPalette","dojox/charting/Chart","dojox/charting/axis2d/Default","dojox/charting/plot2d/Default","dojox/charting/plot2d/Lines","dojox/charting/themes/Tufte","dojo/colors","dojo/text!./templates/Grapher.html","dojox/calc/_Executor","dijit/form/Button","dijit/form/Select"],function(e,t,r,i,o,a,s,n,h,d,c,l,u,x,p,f,g,y,m,C,v,w,b,I){
var k=1e-15/9,j=1e200,N=Math.log(2),D={graphNumber:0,fOfX:!0,color:{stroke:"black"
}},M=e("dojox.calc.Grapher",[s,h,n],{templateString:b,addXYAxes:function(e){return e.addAxis("x",{
max:parseInt(this.graphMaxX.get("value")),min:parseInt(this.graphMinX.get("value")),
majorLabels:!0,minorLabels:!0,minorTicks:!1,microTicks:!1,htmlLabels:!0,labelFunc:function(e){
return e},maxLabelSize:30,fixUpper:"major",fixLower:"major",majorTick:{length:3}}).addAxis("y",{
max:parseInt(this.graphMaxY.get("value")),min:parseInt(this.graphMinY.get("value")),
labelFunc:function(e){return e},maxLabelSize:50,vertical:!0,microTicks:!1,minorTicks:!0,
majorTick:{stroke:"black",length:3}})},selectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!0);
},deselectAll:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].set("checked",!1);
},drawOne:function(e){},onDraw:function(){console.log("Draw was pressed")},erase:function(e){
for(var t=0,r="Series "+this.array[e][this.funcNumberIndex]+"_"+t;r in this.array[e][this.chartIndex].runs;)this.array[e][this.chartIndex].removeSeries(r),
t++,r="Series "+this.array[e][this.funcNumberIndex]+"_"+t;this.array[e][this.chartIndex].render(),
this.setStatus(e,"Hidden")},onErase:function(){for(var e=0;e<this.rowCount;e++)this.array[e][this.checkboxIndex].get("checked")&&this.erase(e);
},onDelete:function(){for(var e=0;e<this.rowCount;e++)if(this.array[e][this.checkboxIndex].get("checked")){
this.erase(e);for(var t=0;t<this.functionRef;t++)this.array[e][t]&&this.array[e][t].destroy&&this.array[e][t].destroy();
this.graphTable.deleteRow(e),this.array.splice(e,1),this.rowCount--,e--}},checkboxIndex:0,
functionMode:1,expressionIndex:2,colorIndex:3,dropDownIndex:4,tooltipIndex:5,colorBoxFieldsetIndex:6,
statusIndex:7,chartIndex:8,funcNumberIndex:9,evaluatedExpression:10,functionRef:11,
createFunction:function(){var e=this.graphTable.insertRow(-1);this.array[e.rowIndex]=[];
var s=e.insertCell(-1),n=i.create("div");s.appendChild(n);var h=new p({},n);this.array[e.rowIndex][this.checkboxIndex]=h,
o.add(n,"dojoxCalcCheckBox"),s=e.insertCell(-1);var d=this.funcMode.get("value");n=r.doc.createTextNode(d),
s.appendChild(n),this.array[e.rowIndex][this.functionMode]=d,s=e.insertCell(-1),n=i.create("div"),
s.appendChild(n);var c=new x({},n);this.array[e.rowIndex][this.expressionIndex]=c,
o.add(n,"dojoxCalcExpressionBox");var g=i.create("div"),y=new f({changedColor:this.changedColor
},g);o.add(g,"dojoxCalcColorPalette"),this.array[e.rowIndex][this.colorIndex]=y;var m=i.create("div"),C=new u({
content:y},m);this.array[e.rowIndex][this.tooltipIndex]=C,o.add(m,"dojoxCalcContainerOfColor"),
s=e.insertCell(-1),n=i.create("div"),s.appendChild(n);var v=i.create("fieldset");a.set(v,{
backgroundColor:"black",width:"1em",height:"1em",display:"inline"}),this.array[e.rowIndex][this.colorBoxFieldsetIndex]=v;
var w=new l({label:"Color ",dropDown:C},n);w.containerNode.appendChild(v),this.array[e.rowIndex][this.dropDownIndex]=w,
o.add(n,"dojoxCalcDropDownForColor"),s=e.insertCell(-1),n=i.create("fieldset"),n.innerHTML="Hidden",
this.array[e.rowIndex][this.statusIndex]=n,o.add(n,"dojoxCalcStatusBox"),s.appendChild(n),
n=i.create("div"),a.set(n,{position:"absolute",left:"0px",top:"0px"}),this.chartsParent.appendChild(n),
this.array[e.rowIndex][this.chartNodeIndex]=n,o.add(n,"dojoxCalcChart");var b=new dojox.charting.Chart(n).setTheme(dojox.charting.themes.Tufte).addPlot("default",{
type:"Lines",shadow:{dx:1,dy:1,width:2,color:[0,0,0,.3]}});this.addXYAxes(b),this.array[e.rowIndex][this.chartIndex]=b,
y.set("chart",b),y.set("colorBox",v),y.set("onChange",t.hitch(y,"changedColor")),
this.array[e.rowIndex][this.funcNumberIndex]=this.funcNumber++,this.rowCount++},setStatus:function(e,t){
this.array[e][this.statusIndex].innerHTML=t},changedColor:function(){for(var e=this.get("chart"),t=this.get("colorBox"),r=0;r<e.series.length;r++)e.series[r].stroke&&e.series[r].stroke.color&&(e.series[r].stroke.color=this.get("value"),
e.dirty=!0);e.render(),a.set(t,{backgroundColor:this.get("value")})},makeDirty:function(){
this.dirty=!0},checkDirty1:function(){setTimeout(t.hitch(this,"checkDirty"),0)},checkDirty:function(){
if(this.dirty){for(var e=0;e<this.rowCount;e++)this.array[e][this.chartIndex].removeAxis("x"),
this.array[e][this.chartIndex].removeAxis("y"),this.addXYAxes(this.array[e][this.chartIndex]);
this.onDraw()}this.dirty=!1},postCreate:function(){this.inherited(arguments),this.createFunc.set("onClick",t.hitch(this,"createFunction")),
this.selectAllButton.set("onClick",t.hitch(this,"selectAll")),this.deselectAllButton.set("onClick",t.hitch(this,"deselectAll")),
this.drawButton.set("onClick",t.hitch(this,"onDraw")),this.eraseButton.set("onClick",t.hitch(this,"onErase")),
this.deleteButton.set("onClick",t.hitch(this,"onDelete")),this.dirty=!1,this.graphWidth.set("onChange",t.hitch(this,"makeDirty")),
this.graphHeight.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxX.set("onChange",t.hitch(this,"makeDirty")),
this.graphMinX.set("onChange",t.hitch(this,"makeDirty")),this.graphMaxY.set("onChange",t.hitch(this,"makeDirty")),
this.graphMinY.set("onChange",t.hitch(this,"makeDirty")),this.windowOptionsInside.set("onClose",t.hitch(this,"checkDirty1")),
this.funcNumber=0,this.rowCount=0,this.array=[]},startup:function(){this.inherited(arguments);
var e=c.getEnclosingWidget(this.domNode.parentNode);e&&"function"==typeof e.close?this.closeButton.set("onClick",t.hitch(e,"close")):a.set(this.closeButton.domNode,{
display:"none"}),this.createFunction(),this.array[0][this.checkboxIndex].set("checked",!0),
this.onDraw(),this.erase(0),this.array[0][this.expressionIndex].value=""}});return t.mixin(I,{
draw:function(e,r,i){i=t.mixin({},D,i),e.fullGeometry();var o,a,s;1==i.fOfX?(o="x",
a="y",s=I.generatePoints(r,o,a,e.axes.x.scaler.bounds.span,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper)):(o="y",
a="x",s=I.generatePoints(r,o,a,e.axes.y.scaler.bounds.span,e.axes.y.scaler.bounds.lower,e.axes.y.scaler.bounds.upper,e.axes.x.scaler.bounds.lower,e.axes.x.scaler.bounds.upper));
var n=0;if(s.length>0)for(;n<s.length;n++)s[n].length>0&&e.addSeries("Series "+i.graphNumber+"_"+n,s[n],i.color);
for(var h="Series "+i.graphNumber+"_"+n;h in e.runs;)e.removeSeries(h),n++,h="Series "+i.graphNumber+"_"+n;
return e.render(),s},generatePoints:function(e,t,r,i,o,a,s,n){function h(e,i,o,a){
for(;o>=i;){var s=(i[t]+o[t])/2,n={};if(n[t]=s,n[r]=e(n[t]),a==n[r]||n[t]==o[t]||n[t]==i[t])return n;
var h=!0;a<n[r]&&(h=!1),n[r]<o[r]?h?i=n:o=n:n[r]<i[r]&&(h?o=n:i=n)}return NaN}function d(e,i,o){
for(var a,s=[[],[]],n=i,h=o;n[t]<=h[t];){var d=(n[t]+h[t])/2;a={},a[t]=d,a[r]=e(d);
var c=l(a[t]),u={};if(u[t]=c,u[r]=e(c),Math.abs(u[r])>=Math.abs(a[r]))s[0].push(a),
n=u;else{if(s[1].unshift(a),h[t]==a[t])break;h=a}}return s}function c(e,t){var r=!1,i=!1;
return t>e&&(r=!0),t>0&&(i=!0),{inc:r,pos:i}}function l(e){var t;return t=e>-1&&1>e?0>e?e>=-k?-e:e/Math.ceil(e/k):k:Math.abs(e)*k,
e+t}function u(e,i){return(i[r]-e[r])/(i[t]-e[t])}var x,p,f=1<<Math.ceil(Math.log(i)/N),g=(a-o)/f,y=[],m=0;
y[m]=[];for(var C,v,w=o,b=0;f>=b;w+=g,b++){if(v={},v[t]=w,v[r]=e({_name:t,_value:w,
_graphing:!0}),null==v[t]||null==v[r])return{};if(!isNaN(v[r])&&!isNaN(v[t]))if(y[m].push(v),
3!=y[m].length){if(!(y[m].length<4)&&(p=c(u(y[m][y[m].length-3],y[m][y[m].length-2]),u(y[m][y[m].length-2],y[m][y[m].length-1])),
x.inc!=p.inc||x.pos!=p.pos)){var I=d(e,y[m][y[m].length-3],y[m][y[m].length-1]);v=y[m].pop(),
y[m].pop();for(var D=0;D<I[0].length;D++)y[m].push(I[0][D]);for(C=1;C<I.length;C++)y[++m]=I.pop();
y[m].push(v),x=p}}else x=c(u(y[m][y[m].length-3],y[m][y[m].length-2]),u(y[m][y[m].length-2],y[m][y[m].length-1]));
}for(;y.length>1;){for(C=0;C<y[1].length;C++)y[0][y[0].length-1][t]!=y[1][C][t]&&y[0].push(y[1][C]);
y.splice(1,1)}y=y[0];var M=0,B=[[]];for(C=0;C<y.length;C++){var T,_,S,A;if(isNaN(y[C][r])||isNaN(y[C][t])){
for(;isNaN(y[C][r])||isNaN(y[C][t]);)y.splice(C,1);B[++M]=[],C--}else if(y[C][r]>n||y[C][r]<s){
C>0&&y[C-1].y!=s&&y[C-1].y!=n&&(A=u(y[C-1],y[C]),A>j?A=j:-j>A&&(A=-j),_=y[C][r]>n?n:s,
S=y[C][r]-A*y[C][t],T=(_-S)/A,v={},v[t]=T,v[r]=e(T),v[r]!=_&&(v=h(e,y[C-1],y[C],_)),
B[M].push(v),B[++M]=[]);for(;C<y.length&&(y[C][r]>n||y[C][r]<s);)C++;if(C>=y.length){
0==B[M].length&&B.splice(M,1);break}C>0&&y[C].y!=s&&y[C].y!=n&&(A=u(y[C-1],y[C]),
A>j?A=j:-j>A&&(A=-j),_=y[C-1][r]>n?n:s,S=y[C][r]-A*y[C][t],T=(_-S)/A,v={},v[t]=T,
v[r]=e(T),v[r]!=_&&(v=h(e,y[C-1],y[C],_)),B[M].push(v),B[M].push(y[C]))}else B[M].push(y[C]);
}return B},Grapher:M})});