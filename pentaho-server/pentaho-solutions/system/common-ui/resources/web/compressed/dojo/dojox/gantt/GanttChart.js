define(["./GanttProjectItem","./GanttResourceItem","./GanttProjectControl","./GanttTaskControl","./GanttTaskItem","./TabMenu","dijit/Tooltip","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/request/util","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/has","dojo/_base/window","dojo/json","dojo/domReady!"],function(t,e,s,a,i,r,n,h,o,l,c,d,p,u,m,T,g,v,P,k,f,D,y,x){
return h("dojox.gantt.GanttChart",[],{constructor:function(t,e){this.resourceChartHeight=void 0!==t.resourceChartHeight?t.resourceChartHeight:!1,
this.withResource=void 0!==t.withResource?t.withResource:!0,this.correctError=void 0!==t.autoCorrectError?t.autoCorrectError:!1,
this.isShowConMenu=this.isContentEditable=!t.readOnly,this.withTaskId=void 0!==t.withTaskId?t.withTaskId:!t.readOnly,
this.animation=void 0!==t.animation?t.animation:!0,this.saveProgramPath=t.saveProgramPath||"saveGanttData.php",
this.dataFilePath=t.dataFilePath||"gantt_default.json",this.contentHeight=t.height||400,
this.contentWidth=t.width||600,this.content=m.byId(e),this.scrollBarWidth=18,this.panelTimeHeight=102,
this.maxWidthPanelNames=150,this.maxWidthTaskNames=150,this.minWorkLength=8,this.heightTaskItem=12,
this.heightTaskItemExtra=11,this.pixelsPerDay=24,this.hsPerDay=8,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,
this.pixelsPerHour=this.pixelsPerDay/24,this.countDays=0,this.totalDays=0,this.startDate=null,
this.initialPos=0,this.contentDataHeight=0,this.panelTimeExpandDelta=20,this.divTimeInfo=null,
this.panelNames=null,this.panelTime=null,this.contentData=null,this.tabMenu=null,
this.project=[],this.arrProjects=[],this.xmlLoader=null,this.isMoving=!1,this.isResizing=!1,
this.animationNodes=[],this.scale=1,this.tempDayInPixels=0,this.resource=null,this.months=c.getNames("months","wide"),
this._events=[]},getProject:function(t){return o.filter(this.arrProjects,function(e){
return e.project.id==t},this)[0]},checkPosPreviousTask:function(t,e){var s=this.getWidthOnDuration(t.duration),a=this.getPosOnDate(t.startTime),i=this.getPosOnDate(e.startTime);
return i>=s+a},correctPosPreviousTask:function(t,e,s){var a=new Date(t.startTime);
if(a.setHours(a.getHours()+t.duration/this.hsPerDay*24),a.getHours()>0&&(a.setHours(0),
a.setDate(a.getDate()+1)),s?s.setStartTime(a,!0):e.startTime=a,e.parentTask&&!this.checkPosParentTask(e.parentTask,e)){
var i=new Date(e.parentTask.startTime);i.setHours(i.getHours()+e.parentTask.duration/this.hsPerDay*24),
e.duration=parseInt(parseInt((i-e.startTime)/36e5)*this.hsPerDay/24)}},correctPosParentTask:function(t,e){
e.previousTask?this.correctPosPreviousTask(e.previousTask,e):(t.startTime>e.startTime&&(e.startTime=new Date(t.startTime)),
this.checkPosParentTask(t,e)||(e.duration=t.duration))},checkPosParentTaskInTree:function(t){
for(var e=!1,s=0;s<t.cldTasks.length;s++){var a=t.cldTasks[s];if(!this.checkPosParentTask(t,a)){
if(!this.correctError)return!0;this.correctPosParentTask(t,a)}if(t.startTime>a.startTime){
if(!this.correctError)return!0;this.correctPosParentTask(t,a)}a.cldTasks.length>0&&(e=this.checkPosParentTaskInTree(a));
}return e},setPreviousTask:function(t){for(var e=!1,s=0;s<t.parentTasks.length;s++){
var a=t.parentTasks[s];if(a.previousTaskId){if(a.previousTask=t.getTaskById(a.previousTaskId),
!a.previousTask&&!this.correctError)return!0;a.previousTask.cldPreTasks.push(a)}if(a.previousTask&&!this.checkPosPreviousTask(a.previousTask,a)){
if(!this.correctError)return!0;this.correctPosPreviousTask(a.previousTask,a)}e=this.setPreviousTaskInTree(a);
}return e},setPreviousTaskInTree:function(t){for(var e=!1,s=0;s<t.cldTasks.length;s++){
var a=t.cldTasks[s];if(a.previousTaskId){if(a.previousTask=t.project.getTaskById(a.previousTaskId),
!a.previousTask&&!this.correctError)return!0;if(!this.checkPosPreviousTask(a.previousTask,a)){
if(!this.correctError)return!0;this.correctPosPreviousTask(a.previousTask,a)}a.previousTask.cldPreTasks.push(a);
}a.cldTasks.length>0&&(e=this.setPreviousTaskInTree(a))}return e},checkPosParentTask:function(t,e){
var s=this.getWidthOnDuration(t.duration),a=this.getPosOnDate(t.startTime),i=this.getPosOnDate(e.startTime),r=this.getWidthOnDuration(e.duration);
return s+a>=i+r},addProject:function(t){this.project.push(t)},deleteProject:function(e){
var a=this.getProject(e);if(a){if(a.arrTasks.length>0)for(;a.arrTasks.length>0;)a.deleteChildTask(a.arrTasks[0]);
var i=this.heightTaskItemExtra+this.heightTaskItem;if(a.nextProject&&a.shiftNextProject(a,-i),
this.project=o.filter(this.project,function(t){return t.id!=a.project.id},this),a.previousProject&&a.nextProject){
var r=a.previousProject;r.nextProject=a.nextProject}if(a.previousProject&&!a.nextProject){
var r=a.previousProject;r.nextProject=null}if(!a.previousProject&&a.nextProject){
var n=a.nextProject;n.previousProject=null}for(var h=0;h<this.arrProjects.length;h++)this.arrProjects[h].project.id==e&&this.arrProjects.splice(h,1);
if(a.projectItem[0].parentNode.removeChild(a.projectItem[0]),a.descrProject.parentNode.removeChild(a.descrProject),
a.projectNameItem.parentNode.removeChild(a.projectNameItem),this.contentDataHeight-=this.heightTaskItemExtra+this.heightTaskItem,
0==this.project.length){var l=new Date(this.startDate),c=new Date(l.setDate(l.getDate()+1)),d=new t({
id:1,name:"New Project",startDate:c});this.project.push(d);var a=new s(this,d);a.create(),
this.arrProjects.push(a),this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem;
}this.checkPosition()}},insertProject:function(e,a,i){if(this.startDate>=i)return!1;
if(this.getProject(e))return!1;this.checkHeighPanelTasks();var r=new t({id:e,name:a,
startDate:i});this.project.push(r);for(var n=new s(this,r),h=0;h<this.arrProjects.length;h++){
var o=this.arrProjects[h],l=this.arrProjects[h-1],c=this.arrProjects[h+1];if(i<o.project.startDate){
if(this.arrProjects.splice(h,0,n),h>0&&(n.previousProject=l,l.nextProject=n),h+1<=this.arrProjects.length){
n.nextProject=c,c.previousProject=n;var d=this.heightTaskItem+this.heightTaskItemExtra;
n.shiftNextProject(n,d)}return n.create(),n.hideDescrProject(),this.checkPosition(),
n}}return this.arrProjects.length>0&&(this.arrProjects[this.arrProjects.length-1].nextProject=n,
n.previousProject=this.arrProjects[this.arrProjects.length-1]),this.arrProjects.push(n),
n.create(),n.hideDescrProject(),this.checkPosition(),n},openTree:function(t){var e=this.getLastCloseParent(t);
this.openNode(e),t.taskItem.id!=e.taskItem.id&&this.openTree(t)},openNode:function(t){
t.isExpanded||(T.remove(t.cTaskNameItem[2],"ganttImageTreeExpand"),T.add(t.cTaskNameItem[2],"ganttImageTreeCollapse"),
t.isExpanded=!0,t.shiftCurrentTasks(t,t.hideTasksHeight),t.showChildTasks(t,t.isExpanded),
t.hideTasksHeight=0)},getLastCloseParent:function(t){return t.parentTask?t.parentTask.isExpanded&&"none"!=t.parentTask.cTaskNameItem[2].style.display?t:this.getLastCloseParent(t.parentTask):t;
},getProjectItemById:function(t){return o.filter(this.project,function(e){return e.id==t;
},this)[0]},clearAll:function(){this.contentDataHeight=0,this.startDate=null,this.clearData(),
this.clearItems(),this.clearEvents()},clearEvents:function(){o.forEach(this._events,function(t){
t.remove()}),this._events=[]},clearData:function(){this.project=[],this.arrProjects=[];
},clearItems:function(){this.contentData.removeChild(this.contentData.firstChild),
this.contentData.appendChild(this.createPanelTasks()),this.panelNames.removeChild(this.panelNames.firstChild),
this.panelNames.appendChild(this.createPanelNamesTasks()),this.panelTime.removeChild(this.panelTime.firstChild);
},buildUIContent:function(){this.project.sort(this.sortProjStartDate),this.startDate=this.getStartDate(),
this.panelTime.appendChild(this.createPanelTime());for(var t=0;t<this.project.length;t++){
for(var e=this.project[t],a=0;a<e.parentTasks.length;a++){var i=e.parentTasks[a];if(!i.startTime)return;
if(this.setStartTimeChild(i),this.setPreviousTask(e))return}for(var a=0;a<e.parentTasks.length;a++){
var i=e.parentTasks[a];if(i.startTime<e.startDate)return;if(this.checkPosParentTaskInTree(i))return;
}this.sortTasksByStartTime(e)}for(var t=0;t<this.project.length;t++){var e=this.project[t],r=new s(this,e);
if(this.arrProjects.length>0){var n=this.arrProjects[this.arrProjects.length-1];r.previousProject=n,
n.nextProject=r}r.create(),this.checkHeighPanelTasks(),this.arrProjects.push(r),this.createTasks(r);
}this.resource&&this.resource.reConstruct(),this.postLoadData(),this.postBindEvents();
},loadJSONData:function(t){var e=this;e.dataFilePath=t||e.dataFilePath,d.get(e.dataFilePath,{
sync:!0}).then(function(t){e.loadJSONString(t.text),e.buildUIContent(),console.log("Successfully! Loaded data from: "+e.dataFilePath);
},function(){console.log("Failed! Load error: "+e.dataFilePath)})},loadJSONString:function(e){
if(e){this.clearAll();var s=x.parse(e),a=s.items;o.forEach(a,function(e){var s=e.startdate.split("-"),a=new t({
id:e.id,name:e.name,startDate:new Date(s[0],parseInt(s[1])-1,s[2])}),r=e.tasks;o.forEach(r,function(t){
var e=t.id,s=t.name,r=t.starttime.split("-"),n=t.duration,h=t.percentage,o=t.previousTaskId,l=t.taskOwner,c=new i({
id:e,name:s,startTime:new Date(r[0],parseInt(r[1])-1,r[2]),duration:n,percentage:h,
previousTaskId:o,taskOwner:l}),d=t.children;0!=d.length&&this.buildChildTasksData(c,d),
a.addTask(c)},this),this.addProject(a)},this)}},buildChildTasksData:function(t,e){
e&&o.forEach(e,function(e){var s=e.id,a=e.name,r=e.starttime.split("-"),n=e.duration,h=e.percentage,o=e.previousTaskId,l=e.taskOwner,c=new i({
id:s,name:a,startTime:new Date(r[0],parseInt(r[1])-1,r[2]),duration:n,percentage:h,
previousTaskId:o,taskOwner:l});c.parentTask=t,t.addChildTask(c);var d=e.children;0!=d.length&&this.buildChildTasksData(c,d);
},this)},getJSONData:function(){var t={identifier:"id",items:[]};return o.forEach(this.project,function(e){
var s={id:e.id,name:e.name,startdate:e.startDate.getFullYear()+"-"+(e.startDate.getMonth()+1)+"-"+e.startDate.getDate(),
tasks:[]};t.items.push(s),o.forEach(e.parentTasks,function(t){var e={id:t.id,name:t.name,
starttime:t.startTime.getFullYear()+"-"+(t.startTime.getMonth()+1)+"-"+t.startTime.getDate(),
duration:t.duration,percentage:t.percentage,previousTaskId:t.previousTaskId||"",taskOwner:t.taskOwner||"",
children:this.getChildTasksData(t.cldTasks)};s.tasks.push(e)},this)},this),t},getChildTasksData:function(t){
var e=[];return t&&t.length>0&&o.forEach(t,function(t){var s={id:t.id,name:t.name,
starttime:t.startTime.getFullYear()+"-"+(t.startTime.getMonth()+1)+"-"+t.startTime.getDate(),
duration:t.duration,percentage:t.percentage,previousTaskId:t.previousTaskId||"",taskOwner:t.taskOwner||"",
children:this.getChildTasksData(t.cldTasks)};e.push(s)},this),e},saveJSONData:function(t){
var e=this;e.dataFilePath=t&&l.trim(t).length>0?t:this.dataFilePath;try{d.post(e.saveProgramPath,{
query:{filename:e.dataFilePath,data:x.stringify(e.getJSONData())}}).response.then(function(t){
p.checkStatus(t.options.status)||405==t.options.status?console.log("Successfully! Saved data to "+e.dataFilePath):console.log("Failed! Saved error");
})}catch(s){console.log("exception: "+s.message)}},sortTaskStartTime:function(t,e){
return t.startTime<e.startTime?-1:t.startTime>e.startTime?1:0},sortProjStartDate:function(t,e){
return t.startDate<e.startDate?-1:t.startDate>e.startDate?1:0},setStartTimeChild:function(t){
o.forEach(t.cldTasks,function(e){e.startTime||(e.startTime=t.startTime),0!=e.cldTasks.length&&this.setStartTimeChild(e);
},this)},createPanelTasks:function(){var t=g.create("div",{className:"ganttTaskPanel"
});return v.set(t,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"
}),t},refreshParams:function(t){this.pixelsPerDay=t,this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay,
this.pixelsPerHour=this.pixelsPerDay/24},createPanelNamesTasksHeader:function(){var t=g.create("div",{
className:"ganttPanelHeader"}),e=g.create("table",{cellPadding:"0px",border:"0px",
cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttToolbar"},t),s=e.insertRow(e.rows.length),a=e.insertRow(e.rows.length),i=e.insertRow(e.rows.length),r=(e.insertRow(e.rows.length),
g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomIn"},s)),n=l.hitch(this,function(){
2*this.scale>5||(this.scale=2*this.scale,this.switchTeleMicroView(this.pixelsPerDay*this.scale));
});this.zoomInClickEvent&&this.zoomInClickEvent.remove(),this.zoomInClickEvent=u(r,"click",l.hitch(this,n)),
this.zoomInKeyEvent&&this.zoomInKeyEvent.remove(),this.zoomInKeyEvent=u(r,"keydown",l.hitch(this,function(t){
t.keyCode==f.ENTER&&n()})),P.set(r,"tabIndex",0);var h=g.create("td",{align:"center",
vAlign:"middle",className:"ganttToolbarZoomOut"},s),c=l.hitch(this,function(){.5*this.scale<.2||(this.scale=.5*this.scale,
this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomOutClickEvent&&this.zoomOutClickEvent.remove(),
this.zoomOutClickEvent=u(h,"click",l.hitch(this,c)),this.zoomOutKeyEvent&&this.zoomOutKeyEvent.remove(),
this.zoomOutKeyEvent=u(h,"keydown",l.hitch(this,function(t){t.keyCode==f.ENTER&&c();
})),P.set(h,"tabIndex",0);var d=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarMicro"
},a);this.microClickEvent&&this.microClickEvent.remove(),this.microClickEvent=u(d,"click",l.hitch(this,this.refresh,this.animation?15:1,0,2)),
this.microKeyEvent&&this.microKeyEvent.remove(),this.microKeyEvent=u(d,"keydown",l.hitch(this,function(t){
t.keyCode==f.ENTER&&(d.blur(),this.refresh(this.animation?15:1,0,2))})),P.set(d,"tabIndex",0);
var p=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarTele"},a);
this.teleClickEvent&&this.teleClickEvent.remove(),this.teleClickEvent=u(p,"click",l.hitch(this,this.refresh,this.animation?15:1,0,.5)),
this.teleKeyEvent&&this.teleKeyEvent.remove(),this.teleKeyEvent=u(p,"keydown",l.hitch(this,function(t){
t.keyCode==f.ENTER&&(p.blur(),this.refresh(this.animation?15:1,0,.5))})),P.set(p,"tabIndex",0);
var m=g.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarSave"},i);
this.saveClickEvent&&this.saveClickEvent.remove(),this.saveClickEvent=u(m,"click",l.hitch(this,this.saveJSONData,"")),
this.saveKeyEvent&&this.saveKeyEvent.remove(),this.saveKeyEvent=u(m,"keydown",l.hitch(this,function(t){
t.keyCode==f.ENTER&&this.saveJSONData("")})),P.set(m,"tabIndex",0);var v=g.create("td",{
align:"center",vAlign:"middle",className:"ganttToolbarLoad"},i);this.loadClickEvent&&this.loadClickEvent.remove(),
this.loadClickEvent=u(v,"click",l.hitch(this,this.loadJSONData,"")),this.loadKeyEvent&&this.loadKeyEvent.remove(),
this.loadKeyEvent=u(v,"keydown",l.hitch(this,function(t){t.keyCode==f.ENTER&&this.loadJSONData("");
})),P.set(v,"tabIndex",0);var k=[r,h,d,p,m,v],D=["Enlarge timeline","Shrink timeline","Zoom in time zone(microscope view)","Zoom out time zone(telescope view)","Save gantt data to json file","Load gantt data from json file"];
return o.forEach(k,function(t,e){var s=D[e],a=function(){T.add(t,"ganttToolbarActionHover"),
dijit.showTooltip(s,t,["above","below"])};t.onmouseover=a,t.onfocus=a;var i=function(){
T.remove(t,"ganttToolbarActionHover"),t&&dijit.hideTooltip(t)};t.onmouseout=i,t.onblur=i;
},this),t},createPanelNamesTasks:function(){var t=g.create("div",{innerHTML:"&nbsp;",
className:"ganttPanelNames"});return v.set(t,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px",
width:this.maxWidthPanelNames+"px"}),t},createPanelTime:function(){var t=g.create("div",{
className:"ganttPanelTime"}),e=g.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",
bgColor:"#FFFFFF",className:"ganttTblTime"},t);this.totalDays=this.countDays;var s,a,i=e.insertRow(e.rows.length),r=0;
a=s=new Date(this.startDate).getFullYear();for(var n=0;n<this.countDays;n++,r++){
var h=new Date(this.startDate);h.setDate(h.getDate()+n),a=h.getFullYear(),a!=s&&(this.addYearInPanelTime(i,r,s),
r=0,s=a)}this.addYearInPanelTime(i,r,a),v.set(i,"display","none");var o,l,d=e.insertRow(e.rows.length),p=0,u=1970;
l=o=new Date(this.startDate).getMonth();for(var n=0;n<this.countDays;n++,p++){var h=new Date(this.startDate);
h.setDate(h.getDate()+n),l=h.getMonth(),u=h.getFullYear(),l!=o&&(this.addMonthInPanelTime(d,p,o,u),
p=0,o=l)}this.addMonthInPanelTime(d,p,l,u);var m,T,P=e.insertRow(e.rows.length),p=0;
T=m=c._getWeekOfYear(new Date(this.startDate));for(var n=0;n<this.countDays;n++,p++){
var h=new Date(this.startDate);h.setDate(h.getDate()+n),T=c._getWeekOfYear(h),T!=m&&(this.addWeekInPanelTime(P,p,m),
p=0,m=T)}this.addWeekInPanelTime(P,p,T);for(var k=e.insertRow(e.rows.length),n=0;n<this.countDays;n++)this.addDayInPanelTime(k);
for(var f=e.insertRow(e.rows.length),n=0;n<this.countDays;n++)this.addHourInPanelTime(f);
return v.set(f,"display","none"),t},adjustPanelTime:function(){var t=o.map(this.arrProjects,function(t){
return parseInt(t.projectItem[0].style.left)+parseInt(t.projectItem[0].firstChild.style.width)+t.descrProject.offsetWidth+this.panelTimeExpandDelta;
},this).sort(function(t,e){return e-t})[0];if(this.maxTaskEndPos!=t){for(var e=this.panelTime.firstChild.firstChild.rows,s=0;4>=s;s++)this.removeCell(e[s]);
var a=Math.round((t+this.panelTimeExpandDelta)/this.pixelsPerDay);this.totalDays=a;
var i,r,n=0;r=i=new Date(this.startDate).getFullYear();for(var s=0;a>s;s++,n++){var h=new Date(this.startDate);
h.setDate(h.getDate()+s),r=h.getFullYear(),r!=i&&(this.addYearInPanelTime(e[0],n,i),
n=0,i=r)}this.addYearInPanelTime(e[0],n,r);var l,d,p=0,u=1970;d=l=new Date(this.startDate).getMonth();
for(var s=0;a>s;s++,p++){var h=new Date(this.startDate);h.setDate(h.getDate()+s),
d=h.getMonth(),u=h.getFullYear(),d!=l&&(this.addMonthInPanelTime(e[1],p,l,u),p=0,
l=d)}this.addMonthInPanelTime(e[1],p,d,u);var m,T,p=0;T=m=c._getWeekOfYear(new Date(this.startDate));
for(var s=0;a>s;s++,p++){var h=new Date(this.startDate);h.setDate(h.getDate()+s),
T=c._getWeekOfYear(h),T!=m&&(this.addWeekInPanelTime(e[2],p,m),p=0,m=T)}this.addWeekInPanelTime(e[2],p,T);
for(var s=0;a>s;s++)this.addDayInPanelTime(e[3]);for(var s=0;a>s;s++)this.addHourInPanelTime(e[4]);
this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*e[3].cells.length+"px",
this.contentData.firstChild.style.width=this.pixelsPerDay*e[3].cells.length+"px",
this.maxTaskEndPos=t}},addYearInPanelTime:function(t,e,s){var a="Year   "+s,i=g.create("td",{
colSpan:e,align:"center",vAlign:"middle",className:"ganttYearNumber",innerHTML:this.pixelsPerDay*e>20?a:"",
innerHTMLData:a},t);v.set(i,"width",this.pixelsPerDay*e+"px")},addMonthInPanelTime:function(t,e,s,a){
var i=this.months[s]+(a?" of "+a:""),r=g.create("td",{colSpan:e,align:"center",vAlign:"middle",
className:"ganttMonthNumber",innerHTML:this.pixelsPerDay*e>30?i:"",innerHTMLData:i
},t);v.set(r,"width",this.pixelsPerDay*e+"px")},addWeekInPanelTime:function(t,e,s){
var a="Week   "+s,i=g.create("td",{colSpan:e,align:"center",vAlign:"middle",className:"ganttWeekNumber",
innerHTML:this.pixelsPerDay*e>20?a:"",innerHTMLData:a},t);v.set(i,"width",this.pixelsPerDay*e+"px");
},addDayInPanelTime:function(t){var e=new Date(this.startDate);e.setDate(e.getDate()+parseInt(t.cells.length));
var s=g.create("td",{align:"center",vAlign:"middle",className:"ganttDayNumber",innerHTML:this.pixelsPerDay>20?e.getDate():"",
innerHTMLData:String(e.getDate()),data:t.cells.length},t);v.set(s,"width",this.pixelsPerDay+"px"),
e.getDay()>=5&&T.add(s,"ganttDayNumberWeekend"),this._events.push(u(s,"mouseover",l.hitch(this,function(t){
var e=t.target||t.srcElement,a=new Date(this.startDate.getTime());a.setDate(a.getDate()+parseInt(P.get(e,"data"))),
dijit.showTooltip(a.getFullYear()+"."+(a.getMonth()+1)+"."+a.getDate(),s,["above","below"]);
}))),this._events.push(u(s,"mouseout",l.hitch(this,function(t){var e=t.target||t.srcElement;
e&&dijit.hideTooltip(e)})))},addHourInPanelTime:function(t){var e=g.create("td",{
align:"center",vAlign:"middle",className:"ganttHourNumber",data:t.cells.length},t);
v.set(e,"width",this.pixelsPerDay+"px");for(var s=g.create("table",{cellPadding:"0",
cellSpacing:"0"},e),a=s.insertRow(s.rows.length),i=0;i<this.hsPerDay;i++){var r=g.create("td",{
className:"ganttHourClass"},a);v.set(r,"width",this.pixelsPerDay/this.hsPerDay+"px"),
P.set(r,"innerHTMLData",String(9+i)),this.pixelsPerDay/this.hsPerDay>5&&P.set(r,"innerHTML",String(9+i)),
T.add(r,3>=i?"ganttHourNumberAM":"ganttHourNumberPM")}},incHeightPanelTasks:function(t){
var e=this.contentData.firstChild;e.style.height=parseInt(e.style.height)+t+"px"},
incHeightPanelNames:function(t){var e=this.panelNames.firstChild;e.style.height=parseInt(e.style.height)+t+"px";
},checkPosition:function(){o.forEach(this.arrProjects,function(t){o.forEach(t.arrTasks,function(t){
t.checkPosition()},this)},this)},checkHeighPanelTasks:function(){this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem,
parseInt(this.contentData.firstChild.style.height)<=this.contentDataHeight&&(this.incHeightPanelTasks(this.heightTaskItem+this.heightTaskItemExtra),
this.incHeightPanelNames(this.heightTaskItem+this.heightTaskItemExtra))},sortTasksByStartTime:function(t){
t.parentTasks.sort(this.sortTaskStartTime);for(var e=0;e<t.parentTasks.length;e++)t.parentTasks[e]=this.sortChildTasks(t.parentTasks[e]);
},sortChildTasks:function(t){t.cldTasks.sort(this.sortTaskStartTime);for(var e=0;e<t.cldTasks.length;e++)t.cldTasks[e].cldTasks.length>0&&this.sortChildTasks(t.cldTasks[e]);
return t},refresh:function(t,e,s){if(!(this.arrProjects.length<=0||this.arrProjects[0].arrTasks.length<=0)){
if(!t||e>t)return this.refreshController(),this.resource&&this.resource.refresh(),
this.tempDayInPixels=0,void(this.panelNameHeadersCover&&v.set(this.panelNameHeadersCover,"display","none"));
0==this.tempDayInPixels&&(this.tempDayInPixels=this.pixelsPerDay),this.panelNameHeadersCover&&v.set(this.panelNameHeadersCover,"display","");
var a=this.tempDayInPixels+this.tempDayInPixels*(s-1)*Math.pow(e/t,2);this.refreshParams(a),
o.forEach(this.arrProjects,function(t){o.forEach(t.arrTasks,function(t){t.refresh();
},this),t.refresh()},this),setTimeout(l.hitch(this,function(){this.refresh(t,++e,s);
}),15)}},switchTeleMicroView:function(t){for(var e=this.panelTime.firstChild.firstChild,s=0;5>s;s++)t>40?v.set(e.rows[s],"display",0==s||1==s?"none":""):20>t?v.set(e.rows[s],"display",2==s||4==s?"none":""):v.set(e.rows[s],"display",0==s||4==s?"none":"");
},refreshController:function(){this.contentData.firstChild.style.width=Math.max(1200,this.pixelsPerDay*this.totalDays)+"px",
this.panelTime.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px",
this.switchTeleMicroView(this.pixelsPerDay),o.forEach(this.panelTime.firstChild.firstChild.rows,function(t){
o.forEach(t.childNodes,function(t){var e=parseInt(P.get(t,"colSpan")||1),s=l.trim(P.get(t,"innerHTMLData")||"");
s.length>0?P.set(t,"innerHTML",this.pixelsPerDay*e<20?"":s):o.forEach(t.firstChild.rows[0].childNodes,function(t){
var e=l.trim(P.get(t,"innerHTMLData")||"");P.set(t,"innerHTML",this.pixelsPerDay/this.hsPerDay>10?e:"");
},this),1==e&&(v.set(t,"width",this.pixelsPerDay*e+"px"),s.length<=0&&o.forEach(t.firstChild.rows[0].childNodes,function(t){
v.set(t,"width",this.pixelsPerDay*e/this.hsPerDay+"px")},this))},this)},this)},init:function(){
this.startDate=this.getStartDate(),v.set(this.content,{width:this.contentWidth+"px",
height:this.contentHeight+"px"}),this.tableControl=g.create("table",{cellPadding:"0",
cellSpacing:"0",className:"ganttTabelControl"});var t=this.tableControl.insertRow(this.tableControl.rows.length);
this.content.appendChild(this.tableControl),this.countDays=this.getCountDays(),this.panelTime=g.create("div",{
className:"ganttPanelTimeContainer"}),v.set(this.panelTime,"height",this.panelTimeHeight+"px"),
this.panelTime.appendChild(this.createPanelTime()),this.contentData=g.create("div",{
className:"ganttContentDataContainer"}),v.set(this.contentData,"height",this.contentHeight-this.panelTimeHeight+"px"),
this.contentData.appendChild(this.createPanelTasks());var a=g.create("td",{vAlign:"top"
});this.panelNameHeaders=g.create("div",{className:"ganttPanelNameHeaders"},a),v.set(this.panelNameHeaders,{
height:this.panelTimeHeight+"px",width:this.maxWidthPanelNames+"px"}),this.panelNameHeaders.appendChild(this.createPanelNamesTasksHeader()),
this.panelNames=g.create("div",{className:"ganttPanelNamesContainer"},a),this.panelNames.appendChild(this.createPanelNamesTasks()),
t.appendChild(a),a=g.create("td",{vAlign:"top"});var i=g.create("div",{className:"ganttDivCell"
});i.appendChild(this.panelTime),i.appendChild(this.contentData),a.appendChild(i),
t.appendChild(a),v.set(this.panelNames,"height",this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"),
v.set(this.panelNames,"width",this.maxWidthPanelNames+"px"),v.set(this.contentData,"width",this.contentWidth-this.maxWidthPanelNames+"px"),
v.set(this.contentData.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),
v.set(this.panelTime,"width",this.contentWidth-this.maxWidthPanelNames-this.scrollBarWidth+"px"),
v.set(this.panelTime.firstChild,"width",this.pixelsPerDay*this.countDays+"px"),this.isShowConMenu&&(this.tabMenu=new r(this));
var n=this;this.contentData.onscroll=function(){n.panelTime.scrollLeft=this.scrollLeft,
n.panelNames&&(n.panelNames.scrollTop=this.scrollTop,n.isShowConMenu&&n.tabMenu.hide()),
n.resource&&(n.resource.contentData.scrollLeft=this.scrollLeft)},this.project.sort(this.sortProjStartDate);
for(var h=0;h<this.project.length;h++){for(var o=this.project[h],l=0;l<o.parentTasks.length;l++){
var c=o.parentTasks[l];if(c.startTime||(c.startTime=o.startDate),this.setStartTimeChild(c),
this.setPreviousTask(o))return}for(var l=0;l<o.parentTasks.length;l++){var c=o.parentTasks[l];
if(c.startTime<o.startDate){if(!this.correctError)return;c.startTime=o.startDate}
if(this.checkPosParentTaskInTree(c))return}this.sortTasksByStartTime(o)}for(var h=0;h<this.project.length;h++){
var o=this.project[h],d=new s(this,o);if(this.arrProjects.length>0){var p=this.arrProjects[this.arrProjects.length-1];
d.previousProject=p,p.nextProject=d}d.create(),this.checkHeighPanelTasks(),this.arrProjects.push(d),
this.createTasks(d)}return this.withResource&&(this.resource=new e(this),this.resource.create()),
this.postLoadData(),this.postBindEvents(),this},postLoadData:function(){o.forEach(this.arrProjects,function(t){
o.forEach(t.arrTasks,function(t){t.postLoadData()},this),t.postLoadData()},this);var t=k.getMarginBox(this.panelNameHeaders);
this.panelNameHeadersCover||(this.panelNameHeadersCover=g.create("div",{className:"ganttHeaderCover"
},this.panelNameHeaders.parentNode),v.set(this.panelNameHeadersCover,{left:t.l+"px",
top:t.t+"px",height:t.h+"px",width:t.w+"px",display:"none"}))},postBindEvents:function(){
var t=k.position(this.tableControl,!0);D("dom-addeventlistener")&&this._events.push(u(this.tableControl,"mousemove",l.hitch(this,function(e){
var s=e.srcElement||e.target;if(s==this.panelNames.firstChild||s==this.contentData.firstChild){
var a=this.heightTaskItem+this.heightTaskItemExtra,i=parseInt(e.layerY/a)*a+this.panelTimeHeight-this.contentData.scrollTop;
i!=this.oldHLTop&&i<t.h-50&&(this.highLightDiv?v.set(this.highLightDiv,"top",t.y+i+"px"):(this.highLightDiv=g.create("div",{
className:"ganttRowHighlight"},y.body()),v.set(this.highLightDiv,{top:t.y+i+"px",
left:t.x+"px",width:t.w-20+"px",height:a+"px"}))),this.oldHLTop=i}})))},getStartDate:function(){
return o.forEach(this.project,function(t){this.startDate?t.startDate<this.startDate&&(this.startDate=new Date(t.startDate)):this.startDate=new Date(t.startDate);
},this),this.initialPos=24*this.pixelsPerHour,this.startDate?new Date(this.startDate.setHours(this.startDate.getHours()-24)):new Date;
},getCountDays:function(){return parseInt((this.contentWidth-this.maxWidthPanelNames)/(24*this.pixelsPerHour));
},createTasks:function(t){o.forEach(t.project.parentTasks,function(e,s){s>0&&(t.project.parentTasks[s-1].nextParentTask=e,
e.previousParentTask=t.project.parentTasks[s-1]);var i=new a(e,t,this);t.arrTasks.push(i),
i.create(),this.checkHeighPanelTasks(),e.cldTasks.length>0&&this.createChildItemControls(e.cldTasks,t);
},this)},createChildItemControls:function(t,e){t&&o.forEach(t,function(s,i){i>0&&(s.previousChildTask=t[i-1],
t[i-1].nextChildTask=s);var r=new a(s,e,this);r.create(),this.checkHeighPanelTasks(),
s.cldTasks.length>0&&this.createChildItemControls(s.cldTasks,e)},this)},getPosOnDate:function(t){
return(t-this.startDate)/36e5*this.pixelsPerHour},getWidthOnDuration:function(t){
return Math.round(this.pixelsPerWorkHour*t)},getLastChildTask:function(t){return t.childTask.length>0?this.getLastChildTask(t.childTask[t.childTask.length-1]):t;
},removeCell:function(t){for(;t.cells[0];)t.deleteCell(t.cells[0])}})});