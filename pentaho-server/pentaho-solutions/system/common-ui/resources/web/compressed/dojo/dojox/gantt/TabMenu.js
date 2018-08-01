define(["./contextMenuTab","./GanttTaskControl","./GanttProjectControl","dijit/Dialog","dijit/form/Button","dijit/form/Form","dijit/registry","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/date/locale","dojo/request","dojo/on","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/keys","dojo/domReady!"],function(t,e,a,n,i,d,s,o,r,l,h,c,m,u,p,P,g,T,b,C){
return o("dojox.gantt.TabMenu",[],{constructor:function(t){this.ganttChart=t,this.menuPanel=null,
this.paneContentArea=null,this.paneActionBar=null,this.tabPanelDlg=null,this.tabPanelDlgId=null,
this.arrTabs=[],this.isShow=!1,this.buildContent()},buildContent:function(){this.createMenuPanel(),
this.createTabPanel();var t=this.createTab(11,"Add Successor Task","t",!0,this);t.addItem(1,"Id","id",!0),
t.addItem(2,"Name","name"),t.addItem(3,"Start Time","startTime"),t.addItem(4,"Duration (hours)","duration"),
t.addItem(5,"Percent Complete (%)","percentage"),t.addItem(6,"Task Assignee","taskOwner"),
t.addAction("addSuccessorTaskAction");var e=this.createTab(10,"Add Child Task","t",!0,this);
e.addItem(1,"Id","id",!0),e.addItem(2,"Name","name"),e.addItem(3,"Start Time","startTime"),
e.addItem(4,"Duration (hours)","duration"),e.addItem(5,"Percent Complete (%)","percentage"),
e.addItem(6,"Task Assignee","taskOwner"),e.addAction("addChildTaskAction");var a=this.createTab(4,"Set Duration(hours)","t",!0,this,!0);
a.addItem(1,"Duration (hours)","duration",!0),a.addAction("durationUpdateAction");
var n=this.createTab(5,"Set Complete Percentage (%)","t",!0,this,!0);n.addItem(1,"Percent Complete (%)","percentage",!0),
n.addAction("cpUpdateAction");var i=this.createTab(20,"Set Owner","t",!0,this,!0);
i.addItem(1,"Task Assignee","taskOwner",!0),i.addAction("ownerUpdateAction");var d=this.createTab(13,"Set Previous Task","t",!0,this);
d.addItem(1,"Previous Task Id","previousTaskId",!0),d.addAction("ptUpdateAction");
var s=this.createTab(1,"Rename Task","t",!0,this,!0);s.addItem(1,"New Name","name",!0),
s.addAction("renameTaskAction");var o=this.createTab(2,"Delete Task","t",!0,this);
o.addAction("deleteAction");var r=this.createTab(12,"Add New Project","p",!1,this);
r.addItem(1,"Id","id",!0),r.addItem(2,"Name","name",!0),r.addItem(3,"Start Date","startDate",!0),
r.addAction("addProjectAction");var l=this.createTab(8,"Set Complete Percentage (%)","p",!0,this,!0);
l.addItem(1,"Percent Complete (%)","percentage",!0),l.addAction("cpProjectAction");
var h=this.createTab(6,"Rename Project","p",!0,this,!0);h.addItem(1,"New Name","name",!0),
h.addAction("renameProjectAction");var c=this.createTab(7,"Delete Project","p",!0,this);
c.addAction("deleteProjectAction");var m=this.createTab(9,"Add New Task","p",!0,this);
m.addItem(1,"Id","id",!0),m.addItem(2,"Name","name"),m.addItem(3,"Start Time","startTime"),
m.addItem(4,"Duration (hours)","duration"),m.addItem(5,"Percent Complete (%)","percentage"),
m.addItem(6,"Task Assignee","taskOwner"),m.addItem(7,"Parent Task Id","parentTaskId"),
m.addItem(8,"Previous Task Id","previousTaskId"),m.addAction("addTaskAction")},createMenuPanel:function(){
this.menuPanel=P.create("div",{innerHTML:"<table></table>",className:"ganttMenuPanel"
},this.ganttChart.content),p.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,
this.menuPanel.firstChild.cellSpacing=0},createTabPanel:function(){this.tabPanelDlg=s.byId(this.tabPanelDlgId)||new n({
title:"Settings"}),this.tabPanelDlgId=this.tabPanelDlg.id,this.tabPanelDlg.closeButtonNode.style.display="none";
var t=this.tabPanelDlg.containerNode;this.paneContentArea=P.create("div",{className:"dijitDialogPaneContentArea"
},t),this.paneActionBar=P.create("div",{className:"dijitDialogPaneActionBar"},t),
this.paneContentArea.innerHTML="<table cellpadding=0 cellspacing=0><tr><th></th></tr><tr><td></td></tr></table>";
var e=this.paneContentArea.firstChild.rows[0].cells[0];e.colSpan=2,e.innerHTML="Description: ",
p.add(e,"ganttDialogContentHeader");var a=this.paneContentArea.firstChild.rows[1].cells[0];
a.innerHTML="<table></table>",p.add(a.firstChild,"ganttDialogContentCell"),a.align="center",
this.ok=new i({label:"OK"}),this.cancel=new i({label:"Cancel"}),this.paneActionBar.appendChild(this.ok.domNode),
this.paneActionBar.appendChild(this.cancel.domNode)},addItemMenuPanel:function(t){
var e=this.menuPanel.firstChild.insertRow(this.menuPanel.firstChild.rows.length),a=P.create("td",{
className:"ganttContextMenuItem",innerHTML:t.Description});T.set(a,"tabIndex",0),
this.ganttChart._events.push(m(a,"click",l.hitch(this,function(){try{this.hide(),
t.show()}catch(e){console.log("dialog open exception: "+e.message)}}))),this.ganttChart._events.push(m(a,"keydown",l.hitch(this,function(e){
if(e.keyCode==C.ENTER)try{this.hide(),t.show()}catch(a){console.log("dialog open exception: "+a.message);
}}))),this.ganttChart._events.push(m(a,"mouseover",l.hitch(this,function(){p.add(a,"ganttContextMenuItemHover");
}))),this.ganttChart._events.push(m(a,"mouseout",l.hitch(this,function(){p.remove(a,"ganttContextMenuItemHover");
}))),e.appendChild(a)},show:function(t,n){n.constructor==e?r.forEach(this.arrTabs,function(t){
"t"==t.type&&(t.object=n,this.addItemMenuPanel(t))},this):n.constructor==a&&r.forEach(this.arrTabs,function(t){
"p"==t.type&&(t.object=n,this.addItemMenuPanel(t))},this),this.isShow=!0,g.set(this.menuPanel,{
zIndex:15,visibility:"visible"});var i=b.position(this.menuPanel,!0),d=b.position(this.ganttChart.content,!0),s=b.position(t,!0);
s.y+i.h>d.y+d.h+50?this.menuPanel.style.top=s.y-i.h+s.h+"px":this.menuPanel.style.top=s.y+"px",
b.isBodyLtr()?this.menuPanel.style.left=s.x+s.w+5+"px":this.menuPanel.style.left=s.x-i.w-5+"px";
},hide:function(){this.isShow=!1,this.menuPanel.style.visibility="hidden"},clear:function(){
this.menuPanel.removeChild(this.menuPanel.firstChild),this.menuPanel.innerHTML="<table></table>",
p.add(this.menuPanel.firstChild,"ganttContextMenu"),this.menuPanel.firstChild.cellPadding=0,
this.menuPanel.firstChild.cellSpacing=0},createTab:function(e,a,n,i,d,s){var o=new t(e,a,n,i,d,s);
return this.arrTabs.push(o),o}})});