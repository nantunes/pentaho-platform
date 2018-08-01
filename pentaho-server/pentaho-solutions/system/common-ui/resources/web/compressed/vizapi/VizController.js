/*!
* Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

function sort(t,e){this.dataTable.sort([{column:t,desc:e==pentaho.pda.Column.SORT_TYPES.DESCENDING
}]);clearDataDisplay(),displayData()}pentaho="undefined"==typeof pentaho?{}:pentaho,
pentaho.palettes=[],pentaho.palettes.push({name:"palette 1",colors:["#336699","#99CCFF","#999933","#666699","#CC9933","#006666","#3399FF","#993300","#CCCC99","#666666","#FFCC66","#6699CC","#663366"]
}),pentaho.palettes.push({name:"palette 2",colors:["#880a0f","#b09a6b","#772200","#c52f0d","#123d82","#4a0866","#ffaa00","#1e8ad3","#aa6611","#772200","#8b2834","#333333"]
}),pentaho.palettes.push({name:"palette 3",colors:["#387179","#626638","#A8979A","#B09A6B","#772200","#C52F0D","#123D82","#4A0866","#445500","#FFAA00","#1E8AD3","#AA6611","#772200"]
}),pentaho.visualizations=pentaho.visualizations||[],pentaho.visualizations.getById=function(t){
for(var e=0;e<this.length;e++)if(this[e].id==t)return this[e];return null};var visualizations=pentaho.visualizations;
pentaho.VizController=function(t){this.id=t,this.domNode=null,this.isDragging=!1,
this.combinations=[],this.selections=[],this.highlights=[],this.metrics=null,this.origTable=null,
this.dataTable=null,this.currentViz=null,this.currentAction="select",this.layoutPanelElement=null,
this.layoutPanel=null,this.visualPanelElement=null,this.layoutShown=!1,this.toolbarElement=null,
this.title=null,this.chart=null,this.palette=pentaho.palettes[0],this.lastError=null,
this.memberPalette=null,this.formatInfo=null},pentaho.VizController.prototype.dispose=function(){
pentaho.events.removeSource(this),this.chart&&(this.chart.dispose&&this.chart.dispose(),
pentaho.events.removeSource(this.chart),this.chart=null),this.domNode=this.visualPanelElement=null;
},pentaho.VizController.prototype.getError=function(){return this.lastError},pentaho.VizController.prototype.getState=function(){
try{var t={};return this.currentViz&&(t.vizId=this.currentViz.id,this.chart.getState&&(t.vizState=this.chart.getState())),
t}catch(e){return this.lastError=e,null}},pentaho.VizController.prototype.setState=function(t){
try{if(!this.currentViz||this.currentViz.id!=t.vizId){for(var e=0;e<pentaho.visualizations.length;e++)if(pentaho.visualizations[e].id==t.id){
this.currentViz=pentaho.visualizations[e];break}this.currentViz||alert("Visualization not found: "+t.vizId),
this.setVisualization(this.currentViz)}return delete t.dataReqs,dojo.safeMixin(this.currentViz,t),
this.chart&&this.chart.setState&&this.chart.setState(t.vizState),!0}catch(i){return this.lastError=i,
!1}},pentaho.VizController.prototype.setDomNode=function(t){try{for(this.domNode=t;t.firstChild;)t.removeChild(t.firstChild);
var e=this.domNode.offsetWidth,i=this.domNode.offsetHeight;return this.visualPanelElement=document.createElement("DIV"),
this.visualPanelElement.setAttribute("id","visualPanelElement-"+this.id),this.visualPanelElement.setAttribute("style","border:0px solid #red; background-color: white; width: "+e+"px; height: "+i+"px"),
this.domNode.appendChild(this.visualPanelElement),!0}catch(o){return this.lastError=o,
!1}},pentaho.VizController.prototype.setDataTable=function(t){try{return this.origTable=t,
this.setupTable(),!0}catch(e){return this.lastError=e,!1}},pentaho.VizController.prototype.setMemberPalette=function(t){
this.memberPalette=t},pentaho.VizController.prototype.setFormatInfo=function(t){this.formatInfo=t;
},pentaho.VizController.prototype.setTitle=function(t){this.title=t},pentaho.VizController.prototype.setVisualization=function(t,e){
try{return this.currentViz&&this.currentViz["class"]!=t["class"]&&this.setDomNode(this.domNode),
this.currentViz=t,this.doVisualization(t,e),!0}catch(i){return this.lastError=i,!1;
}},pentaho.VizController.prototype.updateVisualization=function(t){try{if(!this.currentViz)return;
return this.doVisualization(this.currentViz,t),!0}catch(e){return this.lastError=e,
!1}},pentaho.VizController.prototype.doVisualization=function(visualization,userDefinedOptions){
if(this.userDefinedOptions=userDefinedOptions||{},this.dataTable)try{currentView=new pentaho.DataView(this.dataTable);
var className=visualization["class"],options={title:this.title,width:this.visualPanelElement.offsetWidth,
height:this.visualPanelElement.offsetHeight,metrics:this.metrics,palette:this.palette,
controller:this,action:this.currentAction,selections:this.highlights};if(visualization.needsColorGradient){
var gradMap=[[255,0,0],[255,255,0],[0,0,255],[0,255,0]];options.color1=gradMap[0],
options.color2=gradMap[3]}var propMap=visualization.propMap;if(propMap)for(var propNo=0;propNo<propMap.length;propNo++){
var prop=propMap[propNo],propValue=null;"columnlabel"==prop.source&&(propValue=currentView.getColumnLabel(prop.position)),
"maxvalue"==prop.source&&(propValue=this.metrics[prop.position].range.max),"minvalue"==prop.source&&(propValue=this.metrics[prop.position].range.min);
for(var obj=options,nameNo=0;nameNo<prop.name.length;nameNo++)nameNo<prop.name.length-1?(obj[prop.name[nameNo]]||(obj[prop.name[nameNo]]={}),
obj=obj[prop.name[nameNo]]):obj[prop.name[nameNo]]=propValue}if(visualization.args)for(var x in visualization.args)options[x]=visualization.args[x];
for(var x in this.userDefinedOptions)options[x]=this.userDefinedOptions[x];options.memberPalette=this.memberPalette?this.memberPalette:{},
options.formatInfo=this.formatInfo;var id="chart_div"+this.id;if(this.chart&&this.chart.vizId==visualization.id);else{
var chartDiv=this.visualPanelElement;eval("this.chart = new "+className+"(chartDiv)"),
pentaho.events.addListener(this.chart,"select",function(){return myself.chartSelectHandler.apply(myself,arguments||[]);
}),pentaho.events.addListener(this.chart,"doubleclick",function(){return myself.chartDoubleClickHandler.apply(myself,arguments||[]);
}),pentaho.events.addListener(this.chart,"onmouseover",function(){return myself.chartMouseOverHandler.apply(myself,arguments||[]);
}),pentaho.events.addListener(this.chart,"onmouseout",function(){return myself.chartMouseOutHandler.apply(myself,arguments||[]);
})}var myself=this;if(this.chart.controller=this,this.chart.id="viz"+this.id,this.chart.vizId=visualization.id,
!currentView)return alert("No suitable dataset"),void(document.getElementById("chart_div").innerHTML="");
try{this.chart.draw(currentView,options)}catch(e){console&&console.log&&console.log(e.message);
}return this.currentViz=visualization,!0}catch(e){return this.lastError=e,!1}},pentaho.VizController.prototype.chartSelectHandler=function(t){
this.processHighlights(t),pentaho.events.trigger(this,"select",t)},pentaho.VizController.prototype.chartDoubleClickHandler=function(t){
pentaho.events.trigger(this,"doubleclick",t)},pentaho.VizController.prototype.processHighlights=function(t){
var e=t.selectionMode||"TOGGLE";"REPLACE"==e&&(this.highlights=[]);for(var i=0;i<t.selections.length;i++){
var o,r,a,l,n,h,s,u=t.selections[i];u.rowItem&&(o=u.rowItem,h=u.rowId,s=u.rowLabel),
(u.column||0==u.column)&&(r=u.columnId,a=u.columnLabel,n=u.columnItem),(u.row||0==u.row)&&u.column&&(l=u.value);
var p=!1,c=!1;if("TOGGLE"==e)for(var g=0;g<this.highlights.length;g++){var d=this.highlights[g].rowItem,F=this.highlights[g].colItem,m=d&&(d==o||d.join&&d.join("-")==o.join("-")),f=F&&(F==n||F.join&&F.join("-")==n.join("-"));
if("undefined"==typeof f&&(f=!0),m&&f&&this.highlights[g].colId&&this.highlights[g].colId==r&&"column"==this.highlights[g].type&&"cell"==u.type){
this.highlights[g].type="row",highlight.id=u.rowId,highlight.value=o,c=!0;break}if(m&&f&&this.highlights[g].colId&&this.highlights[g].colId==r&&"column"==this.highlights[g].type){
this.highlights.splice(g,1),p=!0;break}if(m&&f){this.highlights.splice(g,1),p=!0;break;
}}p||c||(highlight={rowItem:o,colId:r,colLabel:a,colItem:n,rowId:h,rowLabel:s},highlight.type=u.type,
"row"==u.type?(highlight.id=h,highlight.value=o):"column"==u.type?(highlight.type="column",
highlight.id=r,highlight.value=a):"cell"==u.type&&(highlight.type="cell",highlight.id=r,
highlight.value=a),this.highlights.push(highlight))}},pentaho.VizController.prototype.createCombination=function(){
for(var t,e,i=[],o=0;o<this.highlights.length;o++)0==o?(t=this.highlights[o].type,
i.push(this.highlights[o].value),e=this.highlights[o].id):this.highlights[o].id==e&&i.push(this.highlights[o].value);
this.combinations.push({values:i,columnId:e}),this.setupTable(),this.highlights=[],
this.updateVisualization()},pentaho.VizController.prototype.updateHighlights=function(){
this.chart.setHighlights&&this.chart.setHighlights(this.highlights)},pentaho.VizController.prototype.clearSelections=function(){
this.highlights=[]},pentaho.VizController.prototype.setupTable=function(){if(this.origTable){
if(this.metrics=[],this.dataTable=this.origTable,this.combinations&&this.combinations.length>0){
var t=this.origTable.getFilteredRows([{column:0,combinations:this.combinations}]),e=new pentaho.DataView(table);
e.setRows(t),this.dataTable=e}for(var i=0;i<this.dataTable.getNumberOfColumns();i++)if("string"==this.dataTable.getColumnType(i)){
var o=this.dataTable.getDistinctValues(i),r=pentaho.VizController.createPaletteMap(o,this.palette);
this.metrics.push({values:o,paletteMap:r})}else if("number"==this.dataTable.getColumnType(i)){
var a=this.dataTable.getColumnRange(i);this.metrics.push({range:a})}}},pentaho.VizController.createPaletteMap=function(t,e){
for(var i={},o=0;o<t.length&&o<e.colors.length;o++)i[t[o]]=e.colors[o];for(var o=e.colors.length;o<t.length;o++)i[t[o]]="#000000";
return i},pentaho.VizController.getRrbGradient=function(t,e,i,o,r){if(0>=i-e)return pentaho.VizController.getRrbColor(r[0],r[1],r[2]);
var a=(t-e)/(i-e),l=new Array(3);return l[0]=Math.floor(a*(r[0]-o[0])+o[0]),l[1]=Math.floor(a*(r[1]-o[1])+o[1]),
l[2]=Math.floor(a*(r[2]-o[2])+o[2]),pentaho.VizController.getRrbColor(l[0],l[1],l[2]);
},pentaho.VizController.getRgbGradientFromMultiColorHex=function(t,e,i,o){var r,a,l=o.length-1,n=i-e;
if(0>=n)r=o.length-1,a=r;else{var h=(t-e)/n*l;r=Math.floor(h),a=Math.ceil(h)}var s,u=pentaho.VizController.convertToRGB(o[r]),p=pentaho.VizController.convertToRGB(o[a]);
if(r==a)return pentaho.VizController.getRrbColor(u[0],u[1],u[2]);var c=r/l*n+e,g=a/l*n+e;
s=(t-c)/(g-c);var d=new Array(3);return d[0]=Math.floor(s*(p[0]-u[0])+u[0]),d[1]=Math.floor(s*(p[1]-u[1])+u[1]),
d[2]=Math.floor(s*(p[2]-u[2])+u[2]),pentaho.VizController.getRrbColor(d[0],d[1],d[2]);
},pentaho.VizController.getDarkerFromColorHex=function(t,e){var i=pentaho.VizController.convertToRGB(t);
return e=Math.pow(.7,null!=e?e:1),pentaho.VizController.getRrbColor(Math.max(0,Math.floor(e*i[0])),Math.max(0,Math.floor(e*i[1])),Math.max(0,Math.floor(e*i[2])));
},pentaho.VizController.getRgbStepFromMultiColorHex=function(t,e,i,o){var r=o.length-1,a=i-e,l=Math.round((t-e)/a*r),n=pentaho.VizController.convertToRGB(o[l]);
return pentaho.VizController.getRrbColor(n[0],n[1],n[2])},pentaho.VizController.convertToRGB=function(t){
return t=0==t.indexOf("#")?t.substring(1):pentaho.VizController.CSS_Names[t.toLowerCase()],
[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)];
},pentaho.VizController.getRrbColor=function(t,e,i){return"RGB("+t+","+e+","+i+")";
},pentaho.VizController.prototype.resize=function(t,e){this.visualPanelElement.style.width=t+"px",
this.visualPanelElement.style.height=e+"px",this.chart.resize(t,e)},pentaho.VizController.dashboardMode=!1;
try{window.parent&&"undefined"!=typeof window.parent.PentahoDashboardController}catch(ignored){}
pentaho.VizController.CSS_Names={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",
aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",
blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",
cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",
cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",
darkgoldenRod:"B8860B",darkgray:"A9A9A9",darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",
darkmagenta:"8B008B",darkoliveGreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",
darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",
darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",
deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",
firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",
ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",grey:"808080",
green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",
indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",
lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",
lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",
lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",
lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",
lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",
mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",
mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",
mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",
moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",
olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",
palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletRed:"D87093",papayawhip:"FFEFD5",
peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",
purple:"800080",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",
salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",
silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",
snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",
thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",
white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"};