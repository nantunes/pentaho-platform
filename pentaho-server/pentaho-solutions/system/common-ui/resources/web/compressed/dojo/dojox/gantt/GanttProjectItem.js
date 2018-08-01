define(["./GanttTaskItem","dojo/_base/declare","./GanttProjectControl","dojo/domReady!"],function(s,a){
return a("dojox.gantt.GanttProjectItem",[s],{constructor:function(s){this.id=s.id,
this.name=s.name||this.id,this.startDate=s.startDate||new Date,this.parentTasks=[];
},getTaskById:function(s){for(var a=0;a<this.parentTasks.length;a++){var e=this.parentTasks[a],t=this.getTaskByIdInTree(e,s);
if(t)return t}return null},getTaskByIdInTree:function(s,a){if(s.id==a)return s;for(var e=0;e<s.cldTasks.length;e++){
var t=s.cldTasks[e];if(t.id==a)return t;if(t.cldTasks.length>0&&t.cldTasks.length>0){
var n=this.getTaskByIdInTree(t,a);if(n)return n}}return null},addTask:function(s){
this.parentTasks.push(s),s.setProject(this)},deleteTask:function(s){var a=this.getTaskById(s);
if(a)if(a.parentTask)for(var e=a.parentTask,t=0;t<e.cldTasks.length;t++){var n=e.cldTasks[t];
if(n.id==s){n.nextChildTask?n.previousChildTask?(n.previousChildTask.nextChildTask=n.nextChildTask,
n.nextChildTask.previousChildTask=n.previousChildTask):n.nextChildTask.previousChildTask=null:n.previousChildTask&&(n.previousChildTask.nextChildTask=null),
n=null,e.cldTasks.splice(t,1);break}}else for(var t=0;t<this.parentTasks.length;t++){
var r=this.parentTasks[t];if(r.id==s){r.nextParentTask?r.previousParentTask?(r.previousParentTask.nextParentTask=r.nextParentTask,
r.nextParentTask.previousParentTask=r.previousParentTask):r.nextParentTask.previousParentTask=null:r.previousParentTask&&(r.previousParentTask.nextParentTask=null),
r=null,this.parentTasks.splice(t,1);break}}}})});