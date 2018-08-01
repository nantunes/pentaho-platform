define(["./GanttTaskItem","./GanttTaskControl","dijit/focus","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(t,e,s,a,r,i,h,n,o,l,c,d,p,g,k,T){
return a("dojox.gantt.GanttProjectControl",[],{constructor:function(t,e){this.project=e,
this.ganttChart=t,this.descrProject=null,this.projectItem=null,this.projectNameItem=null,
this.posY=0,this.posX=0,this.nextProject=null,this.previousProject=null,this.arrTasks=[],
this.percentage=0,this.duration=0},checkWidthProjectNameItem:function(){if(this.projectNameItem.offsetWidth+this.projectNameItem.offsetLeft>this.ganttChart.maxWidthTaskNames){
var t=this.projectNameItem.offsetWidth+this.projectNameItem.offsetLeft-this.ganttChart.maxWidthTaskNames,e=Math.round(t/(this.projectNameItem.offsetWidth/this.projectNameItem.firstChild.length)),s=this.project.name.substring(0,this.projectNameItem.firstChild.length-e-3);
s+="...",this.projectNameItem.innerHTML=s}},refreshProjectItem:function(t){this.percentage=this.getPercentCompleted(),
p.set(t,{left:this.posX+"px",width:this.duration*this.ganttChart.pixelsPerWorkHour+"px"
});var e=t.firstChild,s=this.duration*this.ganttChart.pixelsPerWorkHour;e.width=(0==s?1:s)+"px",
e.style.width=(0==s?1:s)+"px";var a=e.rows[0];if(-1!=this.percentage){if(0!=this.percentage){
var r=a.firstChild;r.width=this.percentage+"%";var i=r.firstChild;p.set(i,{width:(this.duration?this.percentage*this.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.percentage){var r=a.lastChild;
r.width=100-this.percentage+"%";var i=r.firstChild;p.set(i,{width:(this.duration?(100-this.percentage)*this.duration*this.ganttChart.pixelsPerWorkHour/100:1)+"px",
height:this.ganttChart.heightTaskItem+"px"})}}else{var r=a.firstChild;r.width="1px";
var i=r.firstChild;p.set(i,{width:"1px",height:this.ganttChart.heightTaskItem+"px"
})}var h=t.lastChild,n=h.firstChild;p.set(n,{height:this.ganttChart.heightTaskItem+"px",
width:(this.duration?this.duration*this.ganttChart.pixelsPerWorkHour:1)+"px"});var o=n.rows[0],l=o.firstChild;
return l.height=this.ganttChart.heightTaskItem+"px",0==this.project.parentTasks.length&&(t.style.display="none"),
t},refreshDescrProject:function(t){var e=this.posX+this.duration*this.ganttChart.pixelsPerWorkHour+10;
return p.set(t,{left:e+"px"}),0==this.project.parentTasks.length&&(this.descrProject.style.visibility="hidden"),
t},postLoadData:function(){},refresh:function(){return this.posX=(this.project.startDate-this.ganttChart.startDate)/36e5*this.ganttChart.pixelsPerHour,
this.refreshProjectItem(this.projectItem[0]),this.refreshDescrProject(this.projectItem[0].nextSibling),
this},create:function(){var t=this.ganttChart.contentData.firstChild;if(this.posX=(this.project.startDate-this.ganttChart.startDate)/36e5*this.ganttChart.pixelsPerHour,
this.previousProject)if(this.previousProject.arrTasks.length>0){var e=this.ganttChart.getLastChildTask(this.previousProject.arrTasks[this.previousProject.arrTasks.length-1]);
this.posY=parseInt(e.cTaskItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;
}else this.posY=parseInt(this.previousProject.projectItem[0].style.top)+this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;else this.posY=6;
var s=this.ganttChart.panelNames.firstChild;this.projectNameItem=this.createProjectNameItem(),
s.appendChild(this.projectNameItem),this.checkWidthProjectNameItem(),this.projectItem=[this.createProjectItem(),[]],
t.appendChild(this.projectItem[0]),t.appendChild(this.createDescrProject()),this.adjustPanelTime();
},getTaskById:function(t){for(var e=0;e<this.arrTasks.length;e++){var s=this.arrTasks[e],a=this.searchTaskInTree(s,t);
if(a)return a}return null},searchTaskInTree:function(t,e){if(t.taskItem.id==e)return t;
for(var s=0;s<t.childTask.length;s++){var a=t.childTask[s];if(a.taskItem.id==e)return a;
if(a.childTask.length>0){var a=this.searchTaskInTree(a,e);if(a)return a}}return null;
},shiftProjectItem:function(){for(var t=null,e=null,s=parseInt(this.projectItem[0].style.left),a=0;a<this.arrTasks.length;a++){
var r=this.arrTasks[a],i=parseInt(r.cTaskItem[0].style.left),h=parseInt(r.cTaskItem[0].style.left)+parseInt(r.cTaskItem[0].firstChild.firstChild.width);
t||(t=i),e||(e=h),t>i&&(t=i),h>e&&(e=h)}t!=s&&(this.project.startDate=new Date(this.ganttChart.startDate),
this.project.startDate.setHours(this.project.startDate.getHours()+t/this.ganttChart.pixelsPerHour)),
this.projectItem[0].style.left=t+"px",this.resizeProjectItem(e-t),this.duration=Math.round(parseInt(this.projectItem[0].firstChild.width)/this.ganttChart.pixelsPerWorkHour),
this.shiftDescrProject(),this.adjustPanelTime()},adjustPanelTime:function(){var t=this.projectItem[0],e=parseInt(t.style.left)+parseInt(t.firstChild.style.width)+this.ganttChart.panelTimeExpandDelta;
e+=this.descrProject.offsetWidth,this.ganttChart.adjustPanelTime(e)},resizeProjectItem:function(t){
var e=this.percentage,s=this.projectItem[0];if(e>0&&100>e){s.firstChild.style.width=t+"px",
s.firstChild.width=t+"px",s.style.width=t+"px";var a=s.firstChild.rows[0];a.cells[0].firstChild.style.width=Math.round(t*e/100)+"px",
a.cells[0].firstChild.style.height=this.ganttChart.heightTaskItem+"px",a.cells[1].firstChild.style.width=Math.round(t*(100-e)/100)+"px",
a.cells[1].firstChild.style.height=this.ganttChart.heightTaskItem+"px",s.lastChild.firstChild.width=t+"px";
}else if(0==e||100==e){s.firstChild.style.width=t+"px",s.firstChild.width=t+"px",
s.style.width=t+"px";var a=s.firstChild.rows[0];a.cells[0].firstChild.style.width=t+"px",
a.cells[0].firstChild.style.height=this.ganttChart.heightTaskItem+"px",s.lastChild.firstChild.width=t+"px";
}},shiftDescrProject:function(){var t=parseInt(this.projectItem[0].style.left)+this.duration*this.ganttChart.pixelsPerWorkHour+10;
this.descrProject.style.left=t+"px",this.descrProject.innerHTML=this.getDescStr();
},showDescrProject:function(){var t=parseInt(this.projectItem[0].style.left)+this.duration*this.ganttChart.pixelsPerWorkHour+10;
this.descrProject.style.left=t+"px",this.descrProject.style.visibility="visible",
this.descrProject.innerHTML=this.getDescStr()},hideDescrProject:function(){this.descrProject.style.visibility="hidden";
},getDescStr:function(){return this.duration/this.ganttChart.hsPerDay+" days,  "+this.duration+" hours";
},createDescrProject:function(){var t=this.posX+this.duration*this.ganttChart.pixelsPerWorkHour+10,e=d.create("div",{
innerHTML:this.getDescStr(),className:"ganttDescProject"});return p.set(e,{left:t+"px",
top:this.posY+"px"}),this.descrProject=e,0==this.project.parentTasks.length&&(this.descrProject.style.visibility="hidden"),
e},createProjectItem:function(){this.percentage=this.getPercentCompleted(),this.duration=this.getDuration();
var t=d.create("div",{id:this.project.id,className:"ganttProjectItem"});p.set(t,{
left:this.posX+"px",top:this.posY+"px",width:this.duration*this.ganttChart.pixelsPerWorkHour+"px"
});var e=d.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTblProjectItem"
},t),s=this.duration*this.ganttChart.pixelsPerWorkHour;e.width=(0==s?1:s)+"px",e.style.width=(0==s?1:s)+"px";
var a=e.insertRow(e.rows.length);if(-1!=this.percentage){if(0!=this.percentage){var r=d.create("td",{
width:this.percentage+"%"},a);r.style.lineHeight="1px";var i=d.create("div",{className:"ganttImageProgressFilled"
},r);p.set(i,{width:this.percentage*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"})}if(100!=this.percentage){var r=d.create("td",{
width:100-this.percentage+"%"},a);r.style.lineHeight="1px";var i=d.create("div",{
className:"ganttImageProgressBg"},r);p.set(i,{width:(100-this.percentage)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"})}}else{var r=d.create("td",{width:"1px"
},a);r.style.lineHeight="1px";var i=d.create("div",{className:"ganttImageProgressBg"
},r);p.set(i,{width:"1px",height:this.ganttChart.heightTaskItem+"px"})}var h=d.create("div",{
className:"ganttDivTaskInfo"}),n=d.create("table",{cellPadding:"0",cellSpacing:"0",
height:this.ganttChart.heightTaskItem+"px",width:(this.duration*this.ganttChart.pixelsPerWorkHour==0?1:this.duration*this.ganttChart.pixelsPerWorkHour)+"px"
},h),o=n.insertRow(0);return d.create("td",{align:"center",vAlign:"top",height:this.ganttChart.heightTaskItem+"px",
className:"ganttMoveInfo"},o),t.appendChild(h),0==this.project.parentTasks.length&&(t.style.display="none"),
t},createProjectNameItem:function(){var t=d.create("div",{className:"ganttProjectNameItem",
innerHTML:this.project.name,title:this.project.name});return p.set(t,{left:"5px",
top:this.posY+"px"}),g.set(t,"tabIndex",0),this.ganttChart.isShowConMenu&&(this.ganttChart._events.push(o(t,"mouseover",i.hitch(this,function(e){
c.add(t,"ganttProjectNameItemHover"),clearTimeout(this.ganttChart.menuTimer),this.ganttChart.tabMenu.clear(),
this.ganttChart.tabMenu.show(e.target,this)}))),this.ganttChart._events.push(o(t,"keydown",i.hitch(this,function(t){
t.keyCode==T.ENTER&&(this.ganttChart.tabMenu.clear(),this.ganttChart.tabMenu.show(t.target,this)),
!this.ganttChart.tabMenu.isShow||t.keyCode!=T.LEFT_ARROW&&t.keyCode!=T.RIGHT_ARROW||s(this.ganttChart.tabMenu.menuPanel.firstChild.rows[0].cells[0]),
this.ganttChart.tabMenu.isShow&&t.keyCode==T.ESCAPE&&this.ganttChart.tabMenu.hide();
}))),this.ganttChart._events.push(o(t,"mouseout",i.hitch(this,function(){c.remove(t,"ganttProjectNameItemHover"),
clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){
this.ganttChart.tabMenu.hide()}),200)}))),this.ganttChart._events.push(o(this.ganttChart.tabMenu.menuPanel,"mouseover",i.hitch(this,function(){
clearTimeout(this.ganttChart.menuTimer)}))),this.ganttChart._events.push(o(this.ganttChart.tabMenu.menuPanel,"keydown",i.hitch(this,function(){
this.ganttChart.tabMenu.isShow&&event.keyCode==T.ESCAPE&&this.ganttChart.tabMenu.hide();
}))),this.ganttChart._events.push(o(this.ganttChart.tabMenu.menuPanel,"mouseout",i.hitch(this,function(){
clearTimeout(this.ganttChart.menuTimer),this.ganttChart.menuTimer=setTimeout(i.hitch(this,function(){
this.ganttChart.tabMenu.hide()}),200)})))),t},getPercentCompleted:function(){var t=0;
return r.forEach(this.project.parentTasks,function(e){t+=parseInt(e.percentage)},this),
0!=this.project.parentTasks.length?Math.round(t/this.project.parentTasks.length):-1;
},getDuration:function(){var t=0,e=0;return this.project.parentTasks.length>0?(r.forEach(this.project.parentTasks,function(s){
e=24*s.duration/this.ganttChart.hsPerDay+(s.startTime-this.ganttChart.startDate)/36e5,
e>t&&(t=e)},this),(t-this.posX)/24*this.ganttChart.hsPerDay):0},deleteTask:function(t){
var e=this.getTaskById(t);e&&(this.deleteChildTask(e),this.ganttChart.checkPosition());
},setName:function(t){t&&(this.project.name=t,this.projectNameItem.innerHTML=t,this.projectNameItem.title=t,
this.checkWidthProjectNameItem(),this.descrProject.innerHTML=this.getDescStr(),this.adjustPanelTime());
},setPercentCompleted:function(t){if(t=parseInt(t),isNaN(t)||t>100||0>t)return!1;var e=this.projectItem[0].firstChild.rows[0],s=e.cells[0],a=e.cells[1];
if(t>0&&100>t&&this.percentage>0&&this.percentage<100)s.width=parseInt(t)+"%",s.firstChild.style.width=t*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
a.width=100-parseInt(t)+"%",a.firstChild.style.width=(100-t)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px";else if((0==t||100==t)&&this.percentage>0&&this.percentage<100)0==t?(s.parentNode.removeChild(s),
a.width="100%",a.firstChild.style.width=this.duration*this.ganttChart.pixelsPerWorkHour+"px"):100==t&&(a.parentNode.removeChild(a),
s.width="100%",s.firstChild.style.width=this.duration*this.ganttChart.pixelsPerWorkHour+"px");else if(0!=t&&100!=t||0!=this.percentage&&100!=this.percentage)if(!(t>0||100>t)||0!=this.percentage&&100!=this.percentage){
if(-1==this.percentage)if(100==t)c.remove(s.firstChild,"ganttImageProgressBg"),c.add(s.firstChild,"ganttImageProgressFilled");else if(100>t&&t>0){
s.parentNode.removeChild(s);var r=d.create("td",{width:t+"%"},e);r.style.lineHeight="1px",
i=d.create("div",{className:"ganttImageProgressFilled"},r),p.set(i,{width:t*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"}),r=d.create("td",{width:100-t+"%"},e),
r.style.lineHeight="1px",i=d.create("div",{className:"ganttImageProgressBg"},r),p.set(i,{
width:(100-t)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"
})}}else{s.parentNode.removeChild(s);var r=d.create("td",{width:t+"%"},e);r.style.lineHeight="1px";
var i=d.create("div",{className:"ganttImageProgressFilled"},r);p.set(i,{width:t*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",
height:this.ganttChart.heightTaskItem+"px"}),r=d.create("td",{width:100-t+"%"},e),
r.style.lineHeight="1px",i=d.create("div",{className:"ganttImageProgressBg"},r),p.set(i,{
width:(100-t)*this.duration*this.ganttChart.pixelsPerWorkHour/100+"px",height:this.ganttChart.heightTaskItem+"px"
})}else 0==t&&100==this.percentage?(c.remove(s.firstChild,"ganttImageProgressFilled"),
c.add(s.firstChild,"ganttImageProgressBg")):100==t&&0==this.percentage&&(c.remove(s.firstChild,"ganttImageProgressBg"),
c.add(s.firstChild,"ganttImageProgressFilled"));return this.percentage=t,this.descrProject.innerHTML=this.getDescStr(),
!0},deleteChildTask:function(t){if(t){var e=t.cTaskItem[0],s=t.cTaskNameItem[0],a=t.cTaskItem[1],r=t.cTaskNameItem[1],i=t.cTaskNameItem[2];
if("none"==e.style.display&&this.ganttChart.openTree(t.parentTask),t.childPredTask.length>0)for(var h=0;h<t.childPredTask.length;h++){
for(var n=t.childPredTask[h],o=0;o<n.cTaskItem[1].length;o++)n.cTaskItem[1][o].parentNode.removeChild(n.cTaskItem[1][o]);
n.cTaskItem[1]=[],n.predTask=null}if(t.childTask.length>0)for(;t.childTask.length>0;)this.deleteChildTask(t.childTask[0]);
var l=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;if("none"!=e.style.display&&t.shiftCurrentTasks(t,-l),
this.project.deleteTask(t.taskItem.id),e&&e.parentNode.removeChild(e),t.descrTask.parentNode.removeChild(t.descrTask),
a.length>0)for(var c=0;c<a.length;c++)a[c].parentNode.removeChild(a[c]);if(s&&s.parentNode.removeChild(s),
t.cTaskNameItem[1])for(var c=0;c<r.length;c++)r[c].parentNode.removeChild(r[c]);if(i&&i.parentNode&&i.parentNode.removeChild(i),
t.taskIdentifier&&(t.taskIdentifier.parentNode.removeChild(t.taskIdentifier),t.taskIdentifier=null),
t.parentTask){t.previousChildTask&&(t.nextChildTask?t.previousChildTask.nextChildTask=t.nextChildTask:t.previousChildTask.nextChildTask=null);
for(var d=t.parentTask,h=0;h<d.childTask.length;h++)if(d.childTask[h].taskItem.id==t.taskItem.id){
d.childTask[h]=null,d.childTask.splice(h,1);break}0==d.childTask.length&&d.cTaskNameItem[2]&&(d.cTaskNameItem[2].parentNode.removeChild(d.cTaskNameItem[2]),
d.cTaskNameItem[2]=null)}else{t.previousParentTask&&(t.nextParentTask?t.previousParentTask.nextParentTask=t.nextParentTask:t.previousParentTask.nextParentTask=null);
for(var p=t.project,h=0;h<p.arrTasks.length;h++)p.arrTasks[h].taskItem.id==t.taskItem.id&&p.arrTasks.splice(h,1);
}if(t.predTask)for(var g=t.predTask,h=0;h<g.childPredTask.length;h++)g.childPredTask[h].taskItem.id==t.taskItem.id&&(g.childPredTask[h]=null,
g.childPredTask.splice(h,1));0!=t.project.arrTasks.length?t.project.shiftProjectItem():(t.project.projectItem[0].style.display="none",
this.hideDescrProject()),this.ganttChart.contentDataHeight-=this.ganttChart.heightTaskItemExtra+this.ganttChart.heightTaskItem;
}},insertTask:function(s,a,r,i,h,n,o,l){var c=null,d=null;if(this.project.getTaskById(s))return!1;
if((!i||i<this.ganttChart.minWorkLength)&&(i=this.ganttChart.minWorkLength),a&&""!=a||(a=s),
h&&""!=h){if(h=parseInt(h),0>h||h>100)return!1}else h=0;var p=!1;if(l&&""!=l){var g=this.project.getTaskById(l);
if(!g)return!1;if(r=r||g.startTime,r<g.startTime)return!1;if(c=new t({id:s,name:a,
startTime:r,duration:i,percentage:h,previousTaskId:n,taskOwner:o}),!this.ganttChart.checkPosParentTask(g,c))return!1;
c.parentTask=g;var k=this.getTaskById(g.id),T=!1;if("none"==k.cTaskItem[0].style.display?T=!0:k.cTaskNameItem[2]&&(k.isExpanded||(T=!0)),
T&&(0==k.childTask.length?this.ganttChart.openTree(k.parentTask):this.ganttChart.openTree(k)),
""!=n){var m=this.project.getTaskById(n);if(!m)return!1;if(!m.parentTask)return!1;
if(m.parentTask.id!=c.parentTask.id)return!1;this.ganttChart.checkPosPreviousTask(m,c)||this.ganttChart.correctPosPreviousTask(m,c),
c.previousTask=m}var u=!1;if(p)for(var C=0;C<g.cldTasks.length;C++)if(c.startTime<g.cldTasks[C].startTime){
g.cldTasks.splice(C,0,c),C>0&&(g.cldTasks[C-1].nextChildTask=g.cldTasks[C],g.cldTasks[C].previousChildTask=g.cldTasks[C-1]),
g.cldTasks[C+1]&&(g.cldTasks[C+1].previousChildTask=g.cldTasks[C],g.cldTasks[C].nextChildTask=g.cldTasks[C+1]),
u=!0;break}u||(g.cldTasks.length>0&&(g.cldTasks[g.cldTasks.length-1].nextChildTask=c,
c.previousChildTask=g.cldTasks[g.cldTasks.length-1]),g.cldTasks.push(c)),1==g.cldTasks.length&&(k.cTaskNameItem[2]=k.createTreeImg()),
d=new e(c,this,this.ganttChart),d.create(),c.nextChildTask&&(d.nextChildTask=d.project.getTaskById(c.nextChildTask.id)),
d.adjustPanelTime();var f=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;
d.shiftCurrentTasks(d,f)}else{if(r=r||this.project.startDate,c=new t({id:s,name:a,
startTime:r,duration:i,percentage:h,previousTaskId:n,taskOwner:o}),c.startTime<=this.ganttChart.startDate)return!1;
if(""!=n){var m=this.project.getTaskById(n);if(!m)return!1;if(this.ganttChart.checkPosPreviousTask(m,c)||this.ganttChart.correctPosPreviousTask(m,c),
m.parentTask)return!1;c.previousTask=m}var u=!1;if(p)for(var C=0;C<this.project.parentTasks.length;C++){
var I=this.project.parentTasks[C];if(r<I.startTime){this.project.parentTasks.splice(C,0,c),
C>0&&(this.project.parentTasks[C-1].nextParentTask=c,c.previousParentTask=this.project.parentTasks[C-1]),
this.project.parentTasks[C+1]&&(this.project.parentTasks[C+1].previousParentTask=c,
c.nextParentTask=this.project.parentTasks[C+1]),u=!0;break}}u||(this.project.parentTasks.length>0&&(this.project.parentTasks[this.project.parentTasks.length-1].nextParentTask=c,
c.previousParentTask=this.project.parentTasks[this.project.parentTasks.length-1]),
this.project.parentTasks.push(c)),d=new e(c,this,this.ganttChart),d.create(),c.nextParentTask&&(d.nextParentTask=d.project.getTaskById(c.nextParentTask.id)),
d.adjustPanelTime(),this.arrTasks.push(d);var f=this.ganttChart.heightTaskItem+this.ganttChart.heightTaskItemExtra;
d.shiftCurrentTasks(d,f),this.projectItem[0].style.display="inline",this.setPercentCompleted(this.getPercentCompleted()),
this.shiftProjectItem(),this.showDescrProject()}return this.ganttChart.checkHeighPanelTasks(),
this.ganttChart.checkPosition(),d},shiftNextProject:function(t,e){t.nextProject&&(t.nextProject.shiftProject(e),
this.shiftNextProject(t.nextProject,e))},shiftProject:function(t){this.posY=this.posY+t,
this.projectItem[0].style.top=parseInt(this.projectItem[0].style.top)+t+"px",this.descrProject.style.top=parseInt(this.descrProject.style.top)+t+"px",
this.projectNameItem.style.top=parseInt(this.projectNameItem.style.top)+t+"px",this.arrTasks.length>0&&this.shiftNextParentTask(this.arrTasks[0],t);
},shiftTask:function(t,e){t.posY=t.posY+e;var s=t.cTaskNameItem[0],a=t.cTaskNameItem[1],r=t.cTaskNameItem[2],i=t.cTaskItem[1];
s.style.top=parseInt(s.style.top)+e+"px",r&&(r.style.top=parseInt(r.style.top)+e+"px"),
t.parentTask&&(a[0].style.top=parseInt(a[0].style.top)+e+"px",a[1].style.top=parseInt(a[1].style.top)+e+"px"),
t.cTaskItem[0].style.top=parseInt(t.cTaskItem[0].style.top)+e+"px",t.descrTask.style.top=parseInt(t.descrTask.style.top)+e+"px",
i[0]&&(i[0].style.top=parseInt(i[0].style.top)+e+"px",i[1].style.top=parseInt(i[1].style.top)+e+"px",
i[2].style.top=parseInt(i[2].style.top)+e+"px")},shiftNextParentTask:function(t,e){
this.shiftTask(t,e),this.shiftChildTasks(t,e),t.nextParentTask&&this.shiftNextParentTask(t.nextParentTask,e);
},shiftChildTasks:function(t,e){r.forEach(t.childTask,function(t){this.shiftTask(t,e),
t.childTask.length>0&&this.shiftChildTasks(t,e)},this)}})});