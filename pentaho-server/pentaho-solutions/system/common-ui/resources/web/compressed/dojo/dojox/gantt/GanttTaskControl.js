define(["dijit/focus","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(t,s,e,i,a,h,r,n,o,l,d,k,m,c){
return s("dojox.gantt.GanttTaskControl",[],{constructor:function(t,s,e){this.ganttChart=e,
this.project=s,this.taskItem=t,this.checkMove=!1,this.checkResize=!1,this.moveChild=!1,
this.maxPosXMove=-1,this.minPosXMove=-1,this.maxWidthResize=-1,this.minWidthResize=-1,
this.posX=0,this.posY=0,this.mouseX=0,this.taskItemWidth=0,this.isHide=!1,this.hideTasksHeight=0,
this.isExpanded=!0,this.descrTask=null,this.cTaskItem=null,this.cTaskNameItem=null,
this.parentTask=null,this.predTask=null,this.childTask=[],this.childPredTask=[],this.nextChildTask=null,
this.previousChildTask=null,this.nextParentTask=null,this.previousParentTask=null;
},createConnectingLinesPN:function(){var t=[],s=l.create("div",{innerHTML:"&nbsp;",
className:"ganttTaskLineVerticalLeft"},this.ganttChart.panelNames.firstChild),e=this.cTaskNameItem[0],i=this.parentTask.cTaskNameItem[0];
d.set(s,{height:e.offsetTop-i.offsetTop+"px",top:i.offsetTop+5+"px",left:i.offsetLeft-9+"px"
});var a=l.create("div",{noShade:!0,color:"#000000",className:"ganttTaskLineHorizontalLeft"
},this.ganttChart.panelNames.firstChild);return d.set(a,{left:i.offsetLeft-9+"px",
top:e.offsetTop+5+"px",height:"1px",width:e.offsetLeft-i.offsetLeft+4+"px"}),t.push(s),
t.push(a),t},createConnectingLinesDS:function(){var t=this.ganttChart.contentData.firstChild,s=[],e=l.create("div",{
className:"ganttImageArrow"}),i=document.createElement("div"),a=document.createElement("div"),h=d.get(this.predTask.cTaskItem[0],"left"),r=d.get(this.predTask.cTaskItem[0],"top"),n=d.get(this.cTaskItem[0],"left"),k=this.posY+2,m=parseInt(this.predTask.cTaskItem[0].firstChild.firstChild.width);
return k>r?(o.add(i,"ganttTaskLineVerticalRight"),d.set(i,{height:k-this.ganttChart.heightTaskItem/2-r-3+"px",
width:"1px",left:h+m-20+"px",top:r+this.ganttChart.heightTaskItem+"px"}),o.add(a,"ganttTaskLineHorizontal"),
d.set(a,{width:15+(n-(m+h))+"px",left:h+m-20+"px",top:k+2+"px"}),o.add(e,"ganttTaskArrowImg"),
d.set(e,{left:n-7+"px",top:k-1+"px"})):(o.add(i,"ganttTaskLineVerticalRightPlus"),
d.set(i,{height:r+2-k+"px",width:"1px",left:h+m-20+"px",top:k+2+"px"}),o.add(a,"ganttTaskLineHorizontalPlus"),
d.set(a,{width:15+(n-(m+h))+"px",left:h+m-20+"px",top:k+2+"px"}),o.add(e,"ganttTaskArrowImgPlus"),
d.set(e,{left:n-7+"px",top:k-1+"px"})),t.appendChild(i),t.appendChild(a),t.appendChild(e),
s.push(i),s.push(e),s.push(a),s},showChildTasks:function(t,s){if(s)for(var e=0;e<t.childTask.length;e++){
var i=t.childTask[e],a=i.cTaskItem[0],h=i.cTaskNameItem[0],r=i.cTaskItem[1],n=i.cTaskNameItem[1],o=i.cTaskNameItem[2];
if("none"==a.style.display){a.style.display="inline",h.style.display="inline",i.showDescTask(),
t.isHide=!1,o&&(o.style.display="inline",s=i.isExpanded);for(var l=0;l<r.length;l++)r[l].style.display="inline";
for(var l=0;l<n.length;l++)n[l].style.display="inline";i.taskIdentifier&&(i.taskIdentifier.style.display="inline"),
this.hideTasksHeight+=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,
i.childTask.length>0&&this.showChildTasks(i,s)}}},hideChildTasks:function(t){for(var s=0;s<t.childTask.length;s++){
var e=t.childTask[s],i=e.cTaskItem[0],a=e.cTaskNameItem[0],h=e.cTaskItem[1],r=e.cTaskNameItem[1],n=e.cTaskNameItem[2];
if("none"!=i.style.display){i.style.display="none",a.style.display="none",e.hideDescTask(),
t.isHide=!0,n&&(n.style.display="none");for(var o=0;o<h.length;o++)h[o].style.display="none";
for(var o=0;o<r.length;o++)r[o].style.display="none";e.taskIdentifier&&(e.taskIdentifier.style.display="none"),
this.hideTasksHeight+=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,
e.childTask.length>0&&this.hideChildTasks(e)}}},shiftCurrentTasks:function(t,s){this.shiftNextTask(this,s),
t.project.shiftNextProject(t.project,s)},shiftTask:function(t,s){t.posY=t.posY+s;var e=t.cTaskItem[0],i=t.cTaskNameItem[0],a=t.cTaskItem[1],h=t.cTaskNameItem[1],r=t.cTaskNameItem[2];
i.style.top=parseInt(i.style.top)+s+"px",r&&(r.style.top=parseInt(r.style.top)+s+"px"),
t.parentTask&&(parseInt(this.cTaskNameItem[0].style.top)>parseInt(t.parentTask.cTaskNameItem[0].style.top)&&"none"!=h[0].style.display?h[0].style.height=parseInt(h[0].style.height)+s+"px":h[0].style.top=parseInt(h[0].style.top)+s+"px",
h[1].style.top=parseInt(h[1].style.top)+s+"px"),e.style.top=parseInt(e.style.top)+s+"px",
t.descrTask.style.top=parseInt(t.descrTask.style.top)+s+"px",t.predTask&&((parseInt(this.cTaskItem[0].style.top)>parseInt(t.predTask.cTaskItem[0].style.top)||this.cTaskItem[0].id==t.predTask.taskItem.id)&&"none"!=a[0].style.display?a[0].style.height=parseInt(a[0].style.height)+s+"px":a[0].style.top=parseInt(a[0].style.top)+s+"px",
a[1].style.top=parseInt(a[1].style.top)+s+"px",a[2].style.top=parseInt(a[2].style.top)+s+"px");
},shiftNextTask:function(t,s){t.nextChildTask?(this.shiftTask(t.nextChildTask,s),
this.shiftChildTask(t.nextChildTask,s),this.shiftNextTask(t.nextChildTask,s)):t.parentTask?this.shiftNextTask(t.parentTask,s):t.nextParentTask&&(this.shiftTask(t.nextParentTask,s),
this.shiftChildTask(t.nextParentTask,s),this.shiftNextTask(t.nextParentTask,s))},
shiftChildTask:function(t,s){e.forEach(t.childTask,function(t){this.shiftTask(t,s),
t.childTask.length>0&&this.shiftChildTask(t,s)},this)},endMove:function(){var t=this.cTaskItem[0],s=d.get(t,"left")-this.posX,e=this.getDateOnPosition(d.get(t,"left"));
e=this.checkPos(e),this.checkMove&&(s=this.ganttChart.getPosOnDate(e)-this.posX,this.moveCurrentTaskItem(s,this.moveChild),
this.project.shiftProjectItem()),this.checkMove=!1,this.posX=0,this.maxPosXMove=-1,
this.minPosXMove=-1,t.childNodes[1].firstChild.rows[0].cells[0].innerHTML="",this.adjustPanelTime(),
this.ganttChart.resource&&this.ganttChart.resource.refresh()},checkPos:function(t){
var s=this.cTaskItem[0],e=t.getHours();return e>=12?(t.setDate(t.getDate()+1),t.setHours(0),
parseInt(s.firstChild.firstChild.width)+this.ganttChart.getPosOnDate(t)>this.maxPosXMove&&-1!=this.maxPosXMove&&(t.setDate(t.getDate()-1),
t.setHours(0))):12>e&&0!=e&&(t.setHours(0),this.ganttChart.getPosOnDate(t)<this.minPosXMove&&t.setDate(t.getDate()+1)),
s.style.left=this.ganttChart.getPosOnDate(t)+"px",t},getMaxPosPredChildTaskItem:function(){
for(var t=0,s=0,e=0;e<this.childPredTask.length;e++)s=this.getMaxPosPredChildTaskItemInTree(this.childPredTask[e]),
s>t&&(t=s);return t},getMaxPosPredChildTaskItemInTree:function(t){var s=t.cTaskItem[0],i=parseInt(s.firstChild.firstChild.width)+d.get(s,"left"),a=0,h=0;
return e.forEach(t.childPredTask,function(t){h=this.getMaxPosPredChildTaskItemInTree(t),
h>a&&(a=h)},this),a>i?a:i},moveCurrentTaskItem:function(t,s){var i=this.cTaskItem[0];
this.taskItem.startTime=new Date(this.ganttChart.startDate),this.taskItem.startTime.setHours(this.taskItem.startTime.getHours()+parseInt(i.style.left)/this.ganttChart.pixelsPerHour),
this.showDescTask();var a=this.cTaskItem[1];a.length>0&&(a[2].style.width=parseInt(a[2].style.width)+t+"px",
a[1].style.left=parseInt(a[1].style.left)+t+"px"),e.forEach(this.childTask,function(e){
e.predTask||this.moveChildTaskItems(e,t,s)},this),e.forEach(this.childPredTask,function(e){
this.moveChildTaskItems(e,t,s)},this)},moveChildTaskItems:function(t,s,i){var a=t.cTaskItem[0];
if(i){a.style.left=parseInt(a.style.left)+s+"px",t.adjustPanelTime(),t.taskItem.startTime=new Date(this.ganttChart.startDate),
t.taskItem.startTime.setHours(t.taskItem.startTime.getHours()+parseInt(a.style.left)/this.ganttChart.pixelsPerHour);
var h=t.cTaskItem[1];e.forEach(h,function(t){t.style.left=parseInt(t.style.left)+s+"px";
},this),e.forEach(t.childTask,function(t){t.predTask||this.moveChildTaskItems(t,s,i);
},this),e.forEach(t.childPredTask,function(t){this.moveChildTaskItems(t,s,i)},this);
}else{var h=t.cTaskItem[1];if(h.length>0){var r=h[0],n=h[2];n.style.left=parseInt(n.style.left)+s+"px",
n.style.width=parseInt(n.style.width)-s+"px",r.style.left=parseInt(r.style.left)+s+"px";
}}t.moveDescTask()},adjustPanelTime:function(){var t=this.cTaskItem[0],s=parseInt(t.style.left)+parseInt(t.firstChild.firstChild.width)+this.ganttChart.panelTimeExpandDelta;
s+=this.descrTask.offsetWidth,this.ganttChart.adjustPanelTime(s)},getDateOnPosition:function(t){
var s=new Date(this.ganttChart.startDate);return s.setHours(s.getHours()+t/this.ganttChart.pixelsPerHour),
s},moveItem:function(t){var s=t.screenX,e=this.posX+(s-this.mouseX),i=parseInt(this.cTaskItem[0].childNodes[0].firstChild.width),a=e+i;
this.checkMove&&this.minPosXMove<=e&&(a<=this.maxPosXMove||-1==this.maxPosXMove)&&this.moveTaskItem(e);
},moveTaskItem:function(t){var s=this.cTaskItem[0];s.style.left=t+"px",s.childNodes[1].firstChild.rows[0].cells[0].innerHTML=this.getDateOnPosition(t).getDate()+"."+(this.getDateOnPosition(t).getMonth()+1)+"."+this.getDateOnPosition(t).getUTCFullYear();
},resizeItem:function(t){if(this.checkResize){var s=t.screenX,e=this.taskItemWidth+(s-this.mouseX);
e>=this.taskItemWidth?e<=this.maxWidthResize||-1==this.maxWidthResize?this.resizeTaskItem(e):-1!=this.maxWidthResize&&e>this.maxWidthResize&&this.resizeTaskItem(this.maxWidthResize):e<=this.taskItemWidth&&(e>=this.minWidthResize?this.resizeTaskItem(e):e<this.minWidthResize&&this.resizeTaskItem(this.minWidthResize));
}},resizeTaskItem:function(t){var s=this.cTaskItem[0],e=Math.round(t/this.ganttChart.pixelsPerWorkHour),i=s.childNodes[0].firstChild.rows[0],a=i.cells[0],h=i.cells[1];
a&&(a.firstChild.style.width=parseInt(a.width)*t/100+"px"),h&&(h.firstChild.style.width=parseInt(h.width)*t/100+"px"),
s.childNodes[0].firstChild.width=t+"px",s.childNodes[1].firstChild.width=t+"px",this.cTaskItem[0].childNodes[1].firstChild.rows[0].cells[0].innerHTML=e;
var r=s.childNodes[2];r.childNodes[0].style.width=t+"px",r.childNodes[1].style.left=t-10+"px";
},endResizeItem:function(){var t=this.cTaskItem[0];if(this.taskItemWidth!=parseInt(t.childNodes[0].firstChild.width)){
var s=t.offsetLeft,e=t.offsetLeft+parseInt(t.childNodes[0].firstChild.width);if(this.taskItem.duration=Math.round((e-s)/this.ganttChart.pixelsPerWorkHour),
this.childPredTask.length>0)for(var i=0;i<this.childPredTask.length;i++){var a=this.childPredTask[i].cTaskItem[1],h=a[0],r=a[2],n=t.childNodes[0];
r.style.width=parseInt(r.style.width)-(parseInt(n.firstChild.width)-this.taskItemWidth)+"px",
r.style.left=parseInt(r.style.left)+(parseInt(n.firstChild.width)-this.taskItemWidth)+"px",
h.style.left=parseInt(h.style.left)+(parseInt(n.firstChild.width)-this.taskItemWidth)+"px";
}}this.cTaskItem[0].childNodes[1].firstChild.rows[0].cells[0].innerHTML="",this.checkResize=!1,
this.taskItemWidth=0,this.mouseX=0,this.showDescTask(),this.project.shiftProjectItem(),
this.adjustPanelTime(),this.ganttChart.resource&&this.ganttChart.resource.refresh();
},startMove:function(t){this.moveChild=t.ctrlKey,this.mouseX=t.screenX,this.getMoveInfo(),
this.checkMove=!0,this.hideDescTask()},showDescTask:function(){var t=parseInt(this.cTaskItem[0].style.left)+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;
this.descrTask.style.left=t+"px",this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),
this.descrTask.style.visibility="visible"},hideDescTask:function(){d.set(this.descrTask,"visibility","hidden");
},buildResourceInfo:function(t){if(this.childTask&&this.childTask.length>0)for(var s=0;s<this.childTask.length;s++){
var e=this.childTask[s];e.buildResourceInfo(t)}if(i.trim(this.taskItem.taskOwner).length>0)for(var a=this.taskItem.taskOwner.split(";"),s=0;s<a.length;s++){
var h=a[s];i.trim(h).length<=0||(t[h]?t[h].push(this):t[h]=[this])}},objKeyToStr:function(t,s){
var e="";if(s=s||" ",t)for(var i in t)e+=s+i;return e},getTaskOwner:function(){var t={};
if(i.trim(this.taskItem.taskOwner).length>0)for(var s=this.taskItem.taskOwner.split(";"),a=0;a<s.length;a++){
var h=s[a];t[h]=1}return e.forEach(this.childTask,function(s){i.mixin(t,s.getTaskOwner());
},this),t},moveDescTask:function(){var t=parseInt(this.cTaskItem[0].style.left)+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;
this.descrTask.style.left=t+"px"},getMoveInfo:function(){this.posX=parseInt(this.cTaskItem[0].style.left);
var t=parseInt(this.cTaskItem[0].childNodes[0].firstChild.width),s=this.parentTask?parseInt(this.parentTask.cTaskItem[0].style.left):0,i=this.predTask?parseInt(this.predTask.cTaskItem[0].style.left)+parseInt(this.predTask.cTaskItem[0].childNodes[0].firstChild.width):0,a=this.parentTask?parseInt(this.parentTask.cTaskItem[0].childNodes[0].firstChild.width):0,h=0,r=0,n=0;
if(this.childPredTask.length>0){var o=null;e.forEach(this.childPredTask,function(t){
(!o||o&&o>parseInt(t.cTaskItem[0].style.left))&&(o=parseInt(t.cTaskItem[0].style.left));
},this),h=o}if(this.childTask.length>0){var l=null;e.forEach(this.childTask,function(t){
(!l||l&&l>parseInt(t.cTaskItem[0].style.left))&&(l=parseInt(t.cTaskItem[0].style.left));
},this),n=l;var o=null;e.forEach(this.childTask,function(t){(!o||o&&o<parseInt(t.cTaskItem[0].style.left)+parseInt(t.cTaskItem[0].firstChild.firstChild.width))&&(o=parseInt(t.cTaskItem[0].style.left)+parseInt(t.cTaskItem[0].firstChild.firstChild.width));
},this),r=o}if(this.moveChild){if(s>0&&0==i?(this.minPosXMove=s,this.maxPosXMove=s+a):0==s&&0==i?(this.minPosXMove=this.ganttChart.initialPos,
this.maxPosXMove=-1):s>0&&i>0?(this.minPosXMove=i,this.maxPosXMove=s+a):0==s&&i>0&&(this.minPosXMove=i,
this.maxPosXMove=-1),this.parentTask&&this.childPredTask.length>0){var o=this.getMaxPosPredChildTaskItem(this),s=parseInt(this.parentTask.cTaskItem[0].style.left)+parseInt(this.parentTask.cTaskItem[0].firstChild.firstChild.width);
this.maxPosXMove=this.posX+t+s-o}}else this.childPredTask.length>0&&this.maxPosXMove<h&&(this.maxPosXMove=h),
this.childTask.length>0&&(this.childPredTask.length>0&&this.maxPosXMove-t>n&&(this.maxPosXMove=this.maxPosXMove-(this.maxPosXMove-t-n)),
this.childPredTask.length>0||(this.maxPosXMove=n+t),this.minPosXMove=r-t),s>0&&(!(this.childPredTask.length>0)&&this.childTask.length>0&&this.maxPosXMove>s+a&&(this.maxPosXMove=s+a),
this.minPosXMove<=s&&(this.minPosXMove=s),this.childTask.length>0||this.childPredTask.length>0?!(this.childTask.length>0)&&this.childPredTask.length>0&&s+a>i&&(this.maxPosXMove=h):this.maxPosXMove=s+a),
i>0&&this.minPosXMove<=i&&(this.minPosXMove=i),0==i&&0==s&&this.minPosXMove<=this.ganttChart.initialPos&&(this.minPosXMove=this.ganttChart.initialPos);
},startResize:function(t){this.mouseX=t.screenX,this.getResizeInfo(),this.hideDescTask(),
this.checkResize=!0,this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width);
},getResizeInfo:function(){var t=this.cTaskItem[0],s=this.parentTask?parseInt(this.parentTask.cTaskItem[0].style.left):0,i=this.parentTask?parseInt(this.parentTask.cTaskItem[0].childNodes[0].firstChild.width):0,a=parseInt(t.style.left),h=0,r=0;
if(this.childPredTask.length>0){var n=null;e.forEach(this.childPredTask,function(t){
(!n||n&&n>parseInt(t.cTaskItem[0].style.left))&&(n=parseInt(t.cTaskItem[0].style.left));
},this),h=n}if(this.childTask.length>0){var n=null;e.forEach(this.childTask,function(t){
(!n||n&&n<parseInt(t.cTaskItem[0].style.left)+parseInt(t.cTaskItem[0].firstChild.firstChild.width))&&(n=parseInt(t.cTaskItem[0].style.left)+parseInt(t.cTaskItem[0].firstChild.firstChild.width));
},this),r=n}if(this.minWidthResize=this.ganttChart.pixelsPerDay,this.childTask.length>0&&(this.minWidthResize=r-a),
this.childPredTask.length>0&&!this.parentTask)this.maxWidthResize=h-a;else if(this.childPredTask.length>0&&this.parentTask){
var o=s+i-a,l=h-a;this.maxWidthResize=Math.min(o,l)}else 0==this.childPredTask.length&&this.parentTask&&(this.maxWidthResize=s+i-a);
},createTaskItem:function(){this.posX=this.ganttChart.getPosOnDate(this.taskItem.startTime);
var t=l.create("div",{id:this.taskItem.id,className:"ganttTaskItemControl"});d.set(t,{
left:this.posX+"px",top:this.posY+"px"});var s=l.create("div",{className:"ganttTaskDivTaskItem"
},t),e=l.create("table",{cellPadding:"0",cellSpacing:"0",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px",
className:"ganttTaskTblTaskItem"},s),a=e.insertRow(e.rows.length);if(0!=this.taskItem.percentage){
var h=l.create("td",{height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.percentage+"%"
},a);h.style.lineHeight="1px";var n=l.create("div",{className:"ganttImageTaskProgressFilled"
},h);d.set(n,{width:this.taskItem.percentage*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.taskItem.percentage){var h=l.create("td",{
height:this.ganttChart.heightTaskItem+"px",width:100-this.taskItem.percentage+"%"
},a);h.style.lineHeight="1px";var o=l.create("div",{className:"ganttImageTaskProgressBg"
},h);d.set(o,{width:(100-this.taskItem.percentage)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(this.ganttChart.isContentEditable){
var k=l.create("div",{className:"ganttTaskDivTaskInfo"},t),m=l.create("table",{cellPadding:"0",
cellSpacing:"0",height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"
},k),c=m.insertRow(0),T=(l.create("td",{align:"center",vAlign:"top",height:this.ganttChart.heightTaskItem+"px",
className:"ganttMoveInfo"},c),l.create("div",{className:"ganttTaskDivTaskName"},t)),p=l.create("div",{},T);
l.create("input",{className:"ganttTaskDivMoveInput",type:"text"},p),d.set(p,{background:"#000000",
opacity:0}),d.set(p,{height:this.ganttChart.heightTaskItem+"px",width:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+"px"
});var g=l.create("div",{className:"ganttTaskDivResize"},T);l.create("input",{className:"ganttTaskDivResizeInput",
type:"text"},g),d.set(g,{left:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour-10+"px",
height:this.ganttChart.heightTaskItem+"px",width:"10px"}),this.ganttChart._events.push(r(p,"mousedown",i.hitch(this,function(t){
this.moveMoveConn=r(document,"mousemove",i.hitch(this,function(t){this.checkMove&&this.moveItem(t);
})),this.moveUpConn=r(document,"mouseup",i.hitch(this,function(){this.checkMove&&(this.endMove(),
this.ganttChart.isMoving=!1,document.body.releaseCapture&&document.body.releaseCapture(),
this.moveMoveConn.remove(),this.moveUpConn.remove())})),this.startMove(t),this.ganttChart.isMoving=!0,
document.body.setCapture&&document.body.setCapture(!1)}))),this.ganttChart._events.push(r(p,"mouseover",i.hitch(this,function(t){
t.target&&(t.target.style.cursor="move")}))),this.ganttChart._events.push(r(p,"mouseout",i.hitch(this,function(t){
t.target.style.cursor=""}))),this.ganttChart._events.push(r(g,"mousedown",i.hitch(this,function(t){
this.resizeMoveConn=r(document,"mousemove",i.hitch(this,function(t){this.checkResize&&this.resizeItem(t);
})),this.resizeUpConn=r(document,"mouseup",i.hitch(this,function(){this.checkResize&&(this.endResizeItem(),
this.ganttChart.isResizing=!1,document.body.releaseCapture&&document.body.releaseCapture(),
this.resizeMoveConn.remove(),this.resizeUpConn.remove())})),this.startResize(t),this.ganttChart.isResizing=!0,
document.body.setCapture&&document.body.setCapture(!1)}))),this.ganttChart._events.push(r(g,"mouseover",i.hitch(this,function(t){
!this.ganttChart.isMoving&&!this.ganttChart.isResizing&&t.target&&(t.target.style.cursor="e-resize");
}))),this.ganttChart._events.push(r(g,"mouseout",i.hitch(this,function(t){!this.checkResize&&t.target&&(t.target.style.cursor="");
})))}return t},createTaskNameItem:function(){var s=l.create("div",{id:this.taskItem.id,
className:"ganttTaskTaskNameItem",title:this.taskItem.name+", id: "+this.taskItem.id+" ",
innerHTML:this.taskItem.name});return d.set(s,"top",this.posY+"px"),k.set(s,"tabIndex",0),
this.ganttChart.isShowConMenu&&(this.ganttChart._events.push(r(s,"mouseover",i.hitch(this,function(t){
o.add(s,"ganttTaskTaskNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.tabMenu.clear(),
this.ganttChart.tabMenu.show(t.target,this)}))),this.ganttChart._events.push(r(s,"keydown",i.hitch(this,function(s){
s.keyCode==c.ENTER&&(this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(s.target,this)),
!this.ganttChart.tabMenu.isShow||s.keyCode!=c.LEFT_ARROW&&s.keyCode!=c.RIGHT_ARROW||t(this.ganttChart.tabMenu.menuPanel.firstChild.rows[0].cells[0]),
this.ganttChart.tabMenu.isShow&&s.keyCode==c.ESCAPE&&this.ganttChart.tabMenu.hide();
}))),this.ganttChart._events.push(r(s,"mouseout",i.hitch(this,function(){o.remove(s,"ganttTaskTaskNameItemHover"),
clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){
this.ganttChart.tabMenu.hide()}),200)}))),this.ganttChart._events.push(r(this.ganttChart.tabMenu.menuPanel,"mouseover",i.hitch(this,function(){
clearTimeout(this.ganttChart.menuTimer)}))),this.ganttChart._events.push(r(this.ganttChart.tabMenu.menuPanel,"keydown",i.hitch(this,function(t){
this.ganttChart.tabMenu.isShow&&t.keyCode==c.ESCAPE&&this.ganttChart.tabMenu.hide();
}))),this.ganttChart._events.push(r(this.ganttChart.tabMenu.menuPanel,"mouseout",i.hitch(this,function(){
clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){
this.ganttChart.tabMenu.hide()}),200)})))),s},createTaskDescItem:function(){var t=this.posX+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10,s=l.create("div",{
innerHTML:this.objKeyToStr(this.getTaskOwner()),className:"ganttTaskDescTask"});return d.set(s,{
left:t+"px",top:this.posY+"px"}),this.descrTask=s},checkWidthTaskNameItem:function(){
if(this.cTaskNameItem[0].offsetWidth+this.cTaskNameItem[0].offsetLeft>this.ganttChart.maxWidthTaskNames){
var t=this.cTaskNameItem[0].offsetWidth+this.cTaskNameItem[0].offsetLeft-this.ganttChart.maxWidthTaskNames,s=Math.round(t/(this.cTaskNameItem[0].offsetWidth/this.cTaskNameItem[0].firstChild.length)),e=this.taskItem.name.substring(0,this.cTaskNameItem[0].firstChild.length-s-3);
e+="...",this.cTaskNameItem[0].innerHTML=e}},refreshTaskItem:function(t){this.posX=this.ganttChart.getPosOnDate(this.taskItem.startTime),
d.set(t,{left:this.posX+"px"});var s=t.childNodes[0],e=s.firstChild;e.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";
var i=e.rows[0];if(0!=this.taskItem.percentage){var a=i.firstChild;a.height=this.ganttChart.heightTaskItem+"px",
a.width=this.taskItem.percentage+"%",a.style.lineHeight="1px";var h=a.firstChild;d.set(h,{
width:(this.taskItem.duration?this.taskItem.percentage*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.taskItem.percentage){var a=i.lastChild;
a.height=this.ganttChart.heightTaskItem+"px",a.width=100-this.taskItem.percentage+"%",
a.style.lineHeight="1px";var r=a.firstChild;d.set(r,{width:(this.taskItem.duration?(100-this.taskItem.percentage)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(this.ganttChart.isContentEditable){
var n=t.childNodes[1],o=n.firstChild;o.height=this.ganttChart.heightTaskItem+"px",
o.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";
var l=o.rows[0],k=l.firstChild;k.height=this.ganttChart.heightTaskItem+"px";var m=t.childNodes[2],c=m.firstChild;
c.style.height=this.ganttChart.heightTaskItem+"px",c.style.width=(this.taskItem.duration?this.taskItem.duration*this.ganttChart.pixelsPerWorkHour:1)+"px";
var T=m.lastChild;d.set(T,{left:this.taskItem.duration*this.ganttChart.pixelsPerWorkHour-10+"px"
}),T.style.height=this.ganttChart.heightTaskItem+"px",T.style.width="10px"}return t;
},refreshTaskDesc:function(t){var s=this.posX+this.taskItem.duration*this.ganttChart.pixelsPerWorkHour+10;
return d.set(t,{left:s+"px"}),t},refreshConnectingLinesDS:function(t){var s=t[1],e=t[0],i=t[2],a=d.get(this.predTask.cTaskItem[0],"left"),h=d.get(this.predTask.cTaskItem[0],"top"),r=d.get(this.cTaskItem[0],"left"),n=this.posY+2,o=parseInt(this.predTask.cTaskItem[0].firstChild.firstChild.width);
return n>h?(d.set(e,{height:n-this.ganttChart.heightTaskItem/2-h-3+"px",left:a+o-20+"px"
}),d.set(i,{width:15+(r-(o+a))+"px",left:a+o-20+"px"}),d.set(s,{left:r-7+"px"})):(d.set(e,{
height:h+2-n+"px",left:a+o-20+"px"}),d.set(i,{width:15+(r-(o+a))+"px",left:a+o-20+"px"
}),d.set(s,{left:r-7+"px"})),t},postLoadData:function(){},refresh:function(){return this.childTask&&this.childTask.length>0&&e.forEach(this.childTask,function(t){
t.refresh()},this),this.refreshTaskItem(this.cTaskItem[0]),this.refreshTaskDesc(this.cTaskItem[0].nextSibling),
this.taskItem.previousTask&&this.predTask&&this.refreshConnectingLinesDS(this.cTaskItem[1]),
this},create:function(){var t=this.ganttChart.contentData.firstChild,s=this.taskItem.previousTask,e=this.taskItem.parentTask,i=this.taskItem.cldTasks.length>0;
if(this.cTaskItem=[],this.cTaskNameItem=[],!e)if(this.taskItem.previousParentTask){
this.previousParentTask=this.project.getTaskById(this.taskItem.previousParentTask.id);
var a=this.ganttChart.getLastChildTask(this.previousParentTask);this.posY=parseInt(a.cTaskItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,
this.previousParentTask.nextParentTask=this}else this.posY=parseInt(this.project.projectItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;
if(e){var h=this.project.getTaskById(this.taskItem.parentTask.id);if(this.parentTask=h,
this.taskItem.previousChildTask){this.previousChildTask=this.project.getTaskById(this.taskItem.previousChildTask.id);
var a=this.ganttChart.getLastChildTask(this.previousChildTask);this.posY=d.get(a.cTaskItem[0],"top")+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra,
this.previousChildTask.nextChildTask=this}else this.posY=d.get(h.cTaskItem[0],"top")+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;
h.childTask.push(this)}if(s){var h=this.project.getTaskById(s.id);this.predTask=h,
h.childPredTask.push(this)}this.cTaskItem.push(this.createTaskItem()),t.appendChild(this.cTaskItem[0]),
this.ganttChart.panelNames&&(this.cTaskNameItem.push(this.createTaskNameItem()),this.ganttChart.panelNames.firstChild.appendChild(this.cTaskNameItem[0])),
t.appendChild(this.createTaskDescItem());var r=[];if(s&&(r=this.createConnectingLinesDS()),
this.cTaskItem.push(r),this.ganttChart.panelNames){var n=[];e&&(this.cTaskNameItem[0].style.left=d.get(this.parentTask.cTaskNameItem[0],"left")+15+"px",
n=this.createConnectingLinesPN()),this.checkWidthTaskNameItem(),this.checkPosition();
var o=null;i&&(o=this.createTreeImg()),this.cTaskNameItem.push(n),this.cTaskNameItem.push(o);
}return this.adjustPanelTime(),this},checkPosition:function(){if(this.ganttChart.withTaskId){
var t=m.getMarginBox(this.cTaskNameItem[0],!0);this.taskIdentifier?(this.childTask&&this.childTask.length>0&&e.forEach(this.childTask,function(t){
t.checkPosition()},this),d.set(this.taskIdentifier,{left:t.l+t.w+4+"px",top:t.t-1+"px"
})):(this.taskIdentifier=l.create("div",{id:"TaskId_"+this.taskItem.id,className:"ganttTaskIdentifier",
title:this.taskItem.id,innerHTML:this.taskItem.id},this.cTaskNameItem[0].parentNode),
d.set(this.taskIdentifier,{left:t.l+t.w+4+"px",top:t.t-1+"px"}))}},createTreeImg:function(){
var t=l.create("div",{id:this.taskItem.id,className:"ganttImageTreeCollapse"});return k.set(t,"tabIndex",0),
e.forEach(["click","keydown"],function(s){this.ganttChart._events.push(r(t,s,i.hitch(this,function(e){
("keydown"!=s||e.keyCode==c.ENTER)&&(this.isExpanded?(o.remove(t,"ganttImageTreeCollapse"),
o.add(t,"ganttImageTreeExpand"),this.isExpanded=!1,this.hideChildTasks(this),this.shiftCurrentTasks(this,-this.hideTasksHeight),
this.ganttChart.checkPosition()):(o.remove(t,"ganttImageTreeExpand"),o.add(t,"ganttImageTreeCollapse"),
this.isExpanded=!0,this.shiftCurrentTasks(this,this.hideTasksHeight),this.showChildTasks(this,!0),
this.hideTasksHeight=0,this.ganttChart.checkPosition()))})))},this),this.ganttChart.panelNames.firstChild.appendChild(t),
o.add(t,"ganttTaskTreeImage"),d.set(t,{left:d.get(this.cTaskNameItem[0],"left")-12+"px",
top:d.get(this.cTaskNameItem[0],"top")+3+"px"}),t},setPreviousTask:function(t){if(""==t)this.clearPredTask();else{
var s=this.taskItem;if(s.id==t)return!1;var e=this.project.getTaskById(t);if(!e)return!1;
var i=e.taskItem,a=null==i.parentTask,h=null==s.parentTask;if(a&&!h||!a&&h||!a&&!h&&i.parentTask.id!=s.parentTask.id)return!1;
var r=s.startTime.getTime(),n=i.startTime.getTime(),o=24*i.duration*60*60*1e3/e.ganttChart.hsPerDay;
if(n+o>r)return!1;this.clearPredTask(),this.ganttChart.checkPosPreviousTask(i,s)||this.ganttChart.correctPosPreviousTask(i,s,this),
s.previousTaskId=t,s.previousTask=i,this.predTask=e,e.childPredTask.push(this),this.cTaskItem[1]=this.createConnectingLinesDS();
}return!0},clearPredTask:function(){if(this.predTask){for(var t=this.predTask.childPredTask,s=0;s<t.length;s++)if(t[s]==this){
t.splice(s,1);break}for(var s=0;s<this.cTaskItem[1].length;s++)this.cTaskItem[1][s].parentNode.removeChild(this.cTaskItem[1][s]);
this.cTaskItem[1]=[],this.taskItem.previousTaskId=null,this.taskItem.previousTask=null,
this.predTask=null}},setStartTime:function(t,s){this.moveChild=s,this.getMoveInfo();
var e=this.ganttChart.getPosOnDate(t);if(parseInt(this.cTaskItem[0].firstChild.firstChild.width)+e>this.maxPosXMove&&-1!=this.maxPosXMove)return this.maxPosXMove=-1,
this.minPosXMove=-1,!1;if(e<this.minPosXMove)return this.maxPosXMove=-1,this.minPosXMove=-1,
!1;this.cTaskItem[0].style.left=e;var i=e-this.posX;return this.moveCurrentTaskItem(i,s),
this.project.shiftProjectItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),
this.adjustPanelTime(),this.posX=0,this.maxPosXMove=-1,this.minPosXMove=-1,!0},setDuration:function(t){
this.getResizeInfo();var s=this.ganttChart.getWidthOnDuration(t);return s>this.maxWidthResize&&-1!=this.maxWidthResize?!1:s<this.minWidthResize?!1:(this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width),
this.resizeTaskItem(s),this.endResizeItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),
!0)},setTaskOwner:function(t){return t=null==t||void 0==t?"":t,this.taskItem.taskOwner=t,
this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),!0},setPercentCompleted:function(t){
if(t=parseInt(t),isNaN(t)||t>100||0>t)return!1;var s=this.cTaskItem[0].childNodes[0].firstChild.rows[0],e=s.cells[0],i=s.cells[1];
if(0!=t&&100!=t){if(0!=this.taskItem.percentage&&100!=this.taskItem.percentage)e.width=t+"%",
i.width=100-t+"%";else if(0==this.taskItem.percentage||100==this.taskItem.percentage){
e.parentNode.removeChild(e);var a=l.create("td",{height:this.ganttChart.heightTaskItem+"px",
width:t+"%"},s);a.style.lineHeight="1px";var h=l.create("div",{className:"ganttImageTaskProgressFilled"
},a);d.set(h,{width:t*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"}),a=l.create("td",{height:this.ganttChart.heightTaskItem+"px",
width:100-t+"%"},s),a.style.lineHeight="1px",h=l.create("div",{className:"ganttImageTaskProgressBg"
},a),d.set(h,{width:(100-t)*this.taskItem.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"})}}else 0==t?0!=this.taskItem.percentage&&100!=this.taskItem.percentage?(e.parentNode.removeChild(e),
i.width="100%"):(o.remove(e.firstChild,"ganttImageTaskProgressFilled"),o.add(e.firstChild,"ganttImageTaskProgressBg")):100==t&&(0!=this.taskItem.percentage&&100!=this.taskItem.percentage?(i.parentNode.removeChild(i),
e.width="100%"):(o.remove(e.firstChild,"ganttImageTaskProgressBg"),o.add(e.firstChild,"ganttImageTaskProgressFilled")));
return this.taskItem.percentage=t,this.taskItemWidth=parseInt(this.cTaskItem[0].firstChild.firstChild.width),
this.resizeTaskItem(this.taskItemWidth),this.endResizeItem(),this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),
!0},setName:function(t){t&&(this.taskItem.name=t,this.cTaskNameItem[0].innerHTML=t,
this.cTaskNameItem[0].title=t,this.checkWidthTaskNameItem(),this.checkPosition(),
this.descrTask.innerHTML=this.objKeyToStr(this.getTaskOwner()),this.adjustPanelTime());
}})});