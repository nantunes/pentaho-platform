define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(t,e,a,n,s,i,r,h,o,c,p,l,d){
return t("dojox.gantt.GanttResourceItem",[],{constructor:function(t){this.ganttChart=t,
this.ownerItem=[],this.ownerNameItem=[],this.ownerTaskNodeMapping={},this.ownerTaskNodeMapping_time={},
this.resourceInfo={},this.ownerTimeConsume={}},clearAll:function(){this.clearData(),
this.clearItems()},clearData:function(){this.ownerItem=[],this.ownerNameItem=[],this.ownerTaskNodeMapping={},
this.ownerTaskNodeMapping_time={},this.resourceInfo={},this.ownerTimeConsume={}},
clearItems:function(){this.content.firstChild&&o.destroy(this.content.firstChild);
},buildResource:function(){var t={};return e.forEach(this.ganttChart.arrProjects,function(a){
e.forEach(a.arrTasks,function(e){e.buildResourceInfo(t)},this)},this),t},buildOwnerTimeConsume:function(){
var t={};for(var e in this.resourceInfo){for(var a=this.resourceInfo[e],n={},s=0;s<a.length;s++){
var i=a[s],r=i.taskItem.startTime.getTime(),h=24*i.taskItem.duration*60*60*1e3/this.ganttChart.hsPerDay;
n.min=n.min?Math.min(n.min,r):r,n.max=n.max?Math.max(n.max,r+h):r+h}n.dur=(n.max-n.min)*this.ganttChart.hsPerDay/864e5,
n.min=new Date(n.min),n.max=new Date(n.max),t[e]=n}return t},refresh:function(){this.ownerTimeConsume=this.buildOwnerTimeConsume(),
this.contentData.firstChild.style.width=Math.max(1200,this.ganttChart.pixelsPerDay*this.ganttChart.totalDays)+"px";
for(var t in this.resourceInfo)this.refreshOwnerEntry(t)},reConstruct:function(){
this.clearAll(),this.resourceInfo=this.buildResource(),this.ownerTimeConsume=this.buildOwnerTimeConsume(),
this.tableControl=o.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttResourceTableControl"
});var t=this.tableControl.insertRow(this.tableControl.rows.length);this.contentHeight=this.content.offsetHeight,
this.contentWidth=this.content.offsetWidth,this.content.appendChild(this.tableControl),
this.contentData=o.create("div",{className:"ganttResourceContentDataContainer"}),
this.contentData.appendChild(this.createPanelOwners()),c.set(this.contentData,"height",this.contentHeight-this.ganttChart.panelTimeHeight+"px");
var e=o.create("td",{vAlign:"top"});this.panelNames=o.create("div",{className:"ganttResourcePanelNames"
}),this.panelNames.appendChild(this.createPanelNamesOwners()),e.appendChild(this.panelNames),
t.appendChild(e),e=o.create("td",{vAlign:"top"});var a=o.create("div",{className:"ganttResourceDivCell"
});a.appendChild(this.contentData),e.appendChild(a),t.appendChild(e),c.set(this.panelNames,{
height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",
width:this.ganttChart.maxWidthPanelNames+"px"}),this.contentData.style.width=this.contentWidth-this.ganttChart.maxWidthPanelNames+"px",
this.contentData.firstChild.style.width=this.ganttChart.pixelsPerDay*this.ganttChart.panelTime.firstChild.firstChild.rows[3].cells.length+"px";
var n=this;this.contentData.onscroll=function(){n.panelNames&&(n.panelNames.scrollTop=this.scrollTop);
},this.contentData.scrollLeft=this.ganttChart.contentData.scrollLeft;for(var s in this.resourceInfo)this.createOwnerEntry(s);
this.postAdjustment()},create:function(){var t=o.create("div",{innerHTML:"Resource Chart:",
className:"ganttResourceHeader"},this.ganttChart.content,"after");c.set(t,"width",this.ganttChart.contentWidth+"px");
var e=o.create("div",{className:"ganttResourceContent"},t,"after");c.set(e,{width:this.ganttChart.contentWidth+"px",
height:(this.ganttChart.resourceChartHeight||.8*this.ganttChart.contentHeight)+"px"
}),this.content=e||this.content,this.reConstruct()},postAdjustment:function(){this.contentData.firstChild.style.height=23*this.ownerItem.length+"px",
this.panelNames.firstChild.style.height=23*this.ownerItem.length+"px"},refreshOwnerEntry:function(t){
this.refreshOwnerItem(t),e.forEach(this.resourceInfo[t],function(e,a){var n=this.ownerTaskNodeMapping[t].tasks[a][0];
this.refreshDetailedTaskEntry(t,n,e)},this)},createOwnerEntry:function(t){var a=this.contentData.firstChild,n=this.ownerItem[this.ownerItem.length-1];
this.ownerTaskNodeMapping[t]={},this.ownerTaskNodeMapping[t][t]=[];var s=(n?parseInt(n.style.top):-17)+this.ganttChart.heightTaskItem+11,i=this.createOwnerItem(t,s);
if(a.appendChild(i),this.ownerItem.push(i),this.ownerTaskNodeMapping[t][t].push(i),
this.panelNames){var r=this.createOwnerNameItem(t,s);this.panelNames.firstChild.appendChild(r),
this.ownerNameItem.push(r),this.ownerTaskNodeMapping[t][t].push(r)}var h=this.ownerNameItem[this.ownerNameItem.length-1];
if(this.panelNames){this.checkWidthTaskNameItem(h);var o=this.createTreeImg(h);this.panelNames.firstChild.appendChild(o),
this.ownerTaskNodeMapping[t][t].push(o)}return this.ownerTaskNodeMapping[t].taskCount=this.resourceInfo[t].length,
this.ownerTaskNodeMapping[t].isOpen=!1,this.ownerTaskNodeMapping[t].tasks=[],e.forEach(this.resourceInfo[t],function(e){
this.ownerTaskNodeMapping[t].tasks.push(this.createDetailedTaskEntry(t,h,e))},this),
this},createOwnerNameItem:function(t,e){var a=o.create("div",{id:t,title:t,innerHTML:t,
className:"ganttOwnerNameItem"});return c.set(a,"top",e+"px"),a},refreshOwnerItem:function(t){
var a=this.ownerTaskNodeMapping[t][t][0],n=this.ownerTimeConsume[t].min,s=this.ownerTimeConsume[t].dur,i=this.ganttChart.getPosOnDate(n);
a.style.left=i+"px",a.style.width=s*this.ganttChart.pixelsPerWorkHour+"px",e.forEach(this.resourceInfo[t],function(t,e){
var n=this.ganttChart.getPosOnDate(t.taskItem.startTime);c.set(a.childNodes[e],{left:n-i+"px",
width:t.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"})},this)},createOwnerItem:function(t,a){
var n=this.ownerTimeConsume[t].min,s=this.ownerTimeConsume[t].dur,i=this.ganttChart.getPosOnDate(n),r=o.create("div",{
id:t,owner:!0,className:"ganttOwnerBar"});return c.set(r,{left:i+"px",top:a+"px",
width:s*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"
}),e.forEach(this.resourceInfo[t],function(e){var a=o.create("div",{id:t,className:"ganttOwnerTaskBar"
},r),n=this.ganttChart.getPosOnDate(e.taskItem.startTime);c.set(a,{left:n-i+"px",
width:e.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"
})},this),r},refreshDetailedTaskEntry:function(t,e,a){this.refreshTaskItem(e,a)},
createDetailedTaskEntry:function(t,a,n){var s=[],i=this.contentData.firstChild,r=parseInt(a.style.top),h=this.createTaskItem(n,r);
if(h.style.display="none",i.appendChild(h),this.ownerItem.push(h),s.push(h),this.panelNames){
var o=this.createTaskNameItem(n.taskItem.name,r);this.panelNames.firstChild.appendChild(o),
o.style.display="none",this.ownerNameItem.push(o),s.push(o)}if(this.panelNames){this.ownerNameItem[this.ownerNameItem.length-1].style.left=c.get(a,"left")+15+"px";
var p=this.createConnectingLinesPN(a,this.ownerNameItem[this.ownerNameItem.length-1]);
e.forEach(p,function(t){t.style.display="none"},this),s.push({v:p[0],h:p[1]}),this.checkWidthTaskNameItem(this.ownerNameItem[this.ownerNameItem.length-1]);
}return s},createTaskNameItem:function(t,e){var a=o.create("div",{id:t,className:"ganttTaskNameItem",
title:t,innerHTML:t});return c.set(a,"top",e+"px"),a},refreshTaskItem:function(t,e){
var a=this.ganttChart.getPosOnDate(e.taskItem.startTime);c.set(t,{left:a+"px",width:e.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"
})},createTaskItem:function(t,e){var a=this.ganttChart.getPosOnDate(t.taskItem.startTime),n=o.create("div",{
id:t.taskItem.name,className:"ganttTaskBar"});return c.set(n,{left:a+"px",top:e+"px",
width:t.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",height:this.ganttChart.heightTaskItem+"px"
}),n},createConnectingLinesPN:function(t,e){var a=[],n=o.create("div",{innerHTML:"&nbsp;",
className:"ganttResourceLineVerticalLeft"},this.panelNames.firstChild);n.cNode=e,
n.pNode=t;var s=o.create("div",{noShade:!0,color:"#000",className:"ganttResourceLineHorizontalLeft"
},this.panelNames.firstChild);return s.cNode=e,s.pNode=t,this.panelNames.firstChild.appendChild(s),
a.push(n),a.push(s),a},createTreeImg:function(t){var n=o.create("div",{id:t.id,className:"ganttImageTreeExpand"
});p.set(n,"tabIndex",0);var s=this.ownerTaskNodeMapping[t.id];return e.forEach(["click","keydown"],function(r){
this.ganttChart._events.push(i(n,r,a.hitch(this,function(a){var i,o,p=!1;if("keydown"!=r||a.keyCode==d.ENTER)if(s.isOpen){
h.remove(n,"ganttImageTreeCollapse"),h.add(n,"ganttImageTreeExpand"),s.isOpen=!1;for(i in this.ownerTaskNodeMapping)o=this.ownerTaskNodeMapping[i],
p?(e.forEach(o[i],function(t){c.set(t,"top",c.get(t,"top")-23*s.taskCount+"px")}),
e.forEach(o.tasks,function(t){e.forEach(t,function(t){var a=t.v||t.h?[t.v,t.h]:[t];
e.forEach(a,function(t){c.set(t,"top",c.get(t,"top")-23*s.taskCount+"px")})})})):i==t.id&&(p=!0,
e.forEach(o.tasks,function(t){e.forEach(t,function(t){this.styleOwnerItem(t,o[i][0],"none",0);
},this)},this))}else{h.remove(n,"ganttImageTreeExpand"),h.add(n,"ganttImageTreeCollapse"),
s.isOpen=!0;for(i in this.ownerTaskNodeMapping)o=this.ownerTaskNodeMapping[i],p?(e.forEach(o[i],function(t){
c.set(t,"top",c.get(t,"top")+23*s.taskCount+"px")}),e.forEach(o.tasks,function(t){
e.forEach(t,function(t){var a=t.v||t.h?[t.v,t.h]:[t];e.forEach(a,function(t){c.set(t,"top",c.get(t,"top")+23*s.taskCount+"px");
})})})):i==t.id&&(p=!0,e.forEach(o.tasks,function(t,a){e.forEach(t,function(t){this.styleOwnerItem(t,o[i][0],"inline",23*(a+1));
},this)},this))}})))},this),h.add(n,"ganttResourceTreeImage"),c.set(n,{left:c.get(t,"left")-12+"px",
top:c.get(t,"top")+3+"px"}),n},styleOwnerItem:function(t,e,a,n){t.v||t.h?(c.set(t.v,{
height:Math.max(1,t.v.cNode.offsetTop-t.v.pNode.offsetTop)+"px",top:t.v.pNode.offsetTop+5+"px",
left:t.v.pNode.offsetLeft-9+"px",display:a}),c.set(t.h,{width:Math.max(1,t.h.cNode.offsetLeft-t.h.pNode.offsetLeft+4)+"px",
top:t.h.cNode.offsetTop+5+"px",left:t.h.pNode.offsetLeft-9+"px",display:a})):c.set(t,{
display:a,top:parseInt(e.style.top)+n+"px"})},checkWidthTaskNameItem:function(t){
if(t&&t.offsetWidth+t.offsetLeft>this.ganttChart.maxWidthPanelNames){var e=t.offsetWidth+t.offsetLeft-this.ganttChart.maxWidthPanelNames,a=Math.round(e/(t.offsetWidth/t.firstChild.length)),n=t.id.substring(0,t.firstChild.length-a-3);
t.innerHTML=n+"..."}},createPanelOwners:function(){var t=o.create("div",{className:"ganttOwnerPanel"
});return c.set(t,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px"
}),t},createPanelNamesOwners:function(){var t=o.create("div",{innerHTML:"&nbsp;",
className:"ganttResourcePanelNamesOwners"});return c.set(t,{height:this.contentHeight-this.ganttChart.panelTimeHeight-this.ganttChart.scrollBarWidth+"px",
width:this.ganttChart.maxWidthPanelNames+"px"}),t}})});