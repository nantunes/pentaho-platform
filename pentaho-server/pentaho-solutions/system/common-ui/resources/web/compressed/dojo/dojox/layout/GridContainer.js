define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/_base/lang","dojo/_base/window","dojo/ready","dojox/layout/GridContainerLite"],function(i,e,t,n,s,o,r,h,d,l,a,c,u){
return e("dojox.layout.GridContainer",u,{hasResizableColumns:!0,liveResizeColumns:!1,
minColWidth:20,minChildWidth:150,mode:"right",isRightFixed:!1,isLeftFixed:!1,startup:function(){
if(this.inherited(arguments),this.hasResizableColumns){for(var i=0;i<this._grid.length-1;i++)this._createGrip(i);
this.getParent()||c(l.hitch(this,"_placeGrips"))}},resizeChildAfterDrop:function(i,e,t){
this.inherited(arguments)&&this._placeGrips()},onShow:function(){this.inherited(arguments),
this._placeGrips()},resize:function(){this.inherited(arguments),this._isShown()&&this.hasResizableColumns&&this._placeGrips();
},_createGrip:function(i){var e=this._grid[i],t=d.create("div",{"class":"gridContainerGrip"
},this.domNode);e.grip=t,e.gripHandler=[this.connect(t,"onmouseover",function(i){
for(var e=!1,t=0;t<this._grid.length-1;t++)if(o.contains(this._grid[t].grip,"gridContainerGripShow")){
e=!0;break}e||o.replace(i.target,"gridContainerGripShow","gridContainerGrip")})[0],this.connect(t,"onmouseout",function(i){
this._isResized||o.replace(i.target,"gridContainerGrip","gridContainerGripShow")})[0],this.connect(t,"onmousedown","_resizeColumnOn")[0],this.connect(t,"ondblclick","_onGripDbClick")[0]];
},_placeGrips:function(){var i,e,n,s=0;t.forEach(this._grid,function(t){t.grip&&(n=t.grip,
i||(i=n.offsetWidth/2),s+=h.getMarginBox(t.node).w,r.set(n,"left",s-i+"px"),e||(e=h.getContentBox(this.gridNode).h),
e>0&&r.set(n,"height",e+"px"))},this)},_onGripDbClick:function(){this._updateColumnsWidth(this._dragManager),
this.resize()},_resizeColumnOn:function(i){this._activeGrip=i.target,this._initX=i.pageX,
i.preventDefault(),a.body().style.cursor="ew-resize",this._isResized=!0;var e,o,d=[];
for(o=0;o<this._grid.length;o++)d[o]=h.getContentBox(this._grid[o].node).w;for(this._oldTabSize=d,
o=0;o<this._grid.length;o++)e=this._grid[o],this._activeGrip==e.grip&&(this._currentColumn=e.node,
this._currentColumnWidth=d[o],this._nextColumn=this._grid[o+1].node,this._nextColumnWidth=d[o+1]),
e.node.style.width=d[o]+"px";var l=function(i,e){var n=0,o=0;return t.forEach(i,function(i){
if(1==i.nodeType){var t=r.getComputedStyle(i),h=s("ie")?e:parseInt(t.minWidth);o=h+parseInt(t.marginLeft)+parseInt(t.marginRight),
o>n&&(n=o)}}),n},c=l(this._currentColumn.childNodes,this.minChildWidth),u=l(this._nextColumn.childNodes,this.minChildWidth),_=Math.round(h.getMarginBox(this.gridContainerTable).w*this.minColWidth/100);
this._currentMinCol=c,this._nextMinCol=u,_>this._currentMinCol&&(this._currentMinCol=_),
_>this._nextMinCol&&(this._nextMinCol=_),this._connectResizeColumnMove=n.connect(a.doc,"onmousemove",this,"_resizeColumnMove"),
this._connectOnGripMouseUp=n.connect(a.doc,"onmouseup",this,"_onGripMouseUp")},_onGripMouseUp:function(){
a.body().style.cursor="default",n.disconnect(this._connectResizeColumnMove),n.disconnect(this._connectOnGripMouseUp),
this._connectOnGripMouseUp=this._connectResizeColumnMove=null,this._activeGrip&&o.replace(this._activeGrip,"gridContainerGrip","gridContainerGripShow"),
this._isResized=!1},_resizeColumnMove:function(i){i.preventDefault(),this._connectResizeColumnOff||(n.disconnect(this._connectOnGripMouseUp),
this._connectOnGripMouseUp=null,this._connectResizeColumnOff=n.connect(a.doc,"onmouseup",this,"_resizeColumnOff"));
var e=i.pageX-this._initX;0!=e&&(this._currentColumnWidth+e<this._currentMinCol||this._nextColumnWidth-e<this._nextMinCol||(this._currentColumnWidth+=e,
this._nextColumnWidth-=e,this._initX=i.pageX,this._activeGrip.style.left=parseInt(this._activeGrip.style.left)+e+"px",
this.liveResizeColumns&&(this._currentColumn.style.width=this._currentColumnWidth+"px",
this._nextColumn.style.width=this._nextColumnWidth+"px",this.resize())))},_resizeColumnOff:function(i){
a.body().style.cursor="default",n.disconnect(this._connectResizeColumnMove),n.disconnect(this._connectResizeColumnOff),
this._connectResizeColumnOff=this._connectResizeColumnMove=null,this.liveResizeColumns||(this._currentColumn.style.width=this._currentColumnWidth+"px",
this._nextColumn.style.width=this._nextColumnWidth+"px");var e,t,r=[],d=[],l=this.gridContainerTable.clientWidth,c=!1;
for(t=0;t<this._grid.length;t++)e=this._grid[t].node,s("ie")?(r[t]=h.getMarginBox(e).w,
d[t]=h.getContentBox(e).w):(r[t]=h.getContentBox(e).w,d=r);for(t=0;t<d.length;t++)if(d[t]!=this._oldTabSize[t]){
c=!0;break}if(c){var u=s("ie")?100:1e4;for(t=0;t<this._grid.length;t++)this._grid[t].node.style.width=Math.round(100*u*r[t]/l)/u+"%";
this.resize()}this._activeGrip&&o.replace(this._activeGrip,"gridContainerGrip","gridContainerGripShow"),
this._isResized=!1},setColumns:function(i){var e,t;if(i>0){var s=this._grid.length,o=s-i;
if(o>0){var r,h,d,l,a=[];if("right"==this.mode){for(d=this.isLeftFixed&&s>0?1:0,h=this.isRightFixed?s-2:s-1,
e=h;e>=d;e--){for(l=0,r=this._grid[e].node,t=0;t<r.childNodes.length;t++)if(1==r.childNodes[t].nodeType&&""!=r.childNodes[t].id){
l++;break}if(0==l&&(a[a.length]=e),a.length>=o){this._deleteColumn(a);break}}a.length<o&&n.publish("/dojox/layout/gridContainer/noEmptyColumn",[this]);
}else{for(h=this.isLeftFixed&&s>0?1:0,d=this.isRightFixed?s-1:s,e=h;d>e;e++){for(l=0,
r=this._grid[e].node,t=0;t<r.childNodes.length;t++)if(1==r.childNodes[t].nodeType&&""!=r.childNodes[t].id){
l++;break}if(0==l&&(a[a.length]=e),a.length>=o){this._deleteColumn(a);break}}a.length<o&&n.publish("/dojox/layout/gridContainer/noEmptyColumn",[this]);
}}else 0>o&&this._addColumn(Math.abs(o));this.hasResizableColumns&&this._placeGrips();
}},_addColumn:function(i){var e,t,n,s=this._grid,o="right"==this.mode,r=this.acceptTypes.join(","),h=this._dragManager;
this.hasResizableColumns&&(!this.isRightFixed&&o||this.isLeftFixed&&!o&&1==this.nbZones)&&this._createGrip(s.length-1);
for(var l=0;i>l;l++)e=d.create("td",{"class":"gridContainerZone dojoxDndArea",accept:r,
id:this.id+"_dz"+this.nbZones}),n=s.length,o?this.isRightFixed?(t=n-1,s.splice(t,0,{
node:s[t].node.parentNode.insertBefore(e,s[t].node)})):(t=n,s.push({node:this.gridNode.appendChild(e)
})):this.isLeftFixed?(t=1==n?0:1,this._grid.splice(1,0,{node:this._grid[t].node.parentNode.appendChild(e,this._grid[t].node)
}),t=1):(t=n-this.nbZones,this._grid.splice(t,0,{node:s[t].node.parentNode.insertBefore(e,s[t].node)
})),this.hasResizableColumns&&(!o&&1!=this.nbZones||!o&&1==this.nbZones&&!this.isLeftFixed||o&&i-1>l||o&&l==i-1&&this.isRightFixed)&&this._createGrip(t),
h.registerByNode(s[t].node),this.nbZones++;this._updateColumnsWidth(h)},_deleteColumn:function(i){
for(var e,s,o=0,r=i.length,h=this._dragManager,l=0;r>l;l++)s="right"==this.mode?i[l]:i[l]-o,
e=this._grid[s],this.hasResizableColumns&&e.grip&&(t.forEach(e.gripHandler,function(i){
n.disconnect(i)}),d.destroy(this.domNode.removeChild(e.grip)),e.grip=null),h.unregister(e.node),
d.destroy(this.gridNode.removeChild(e.node)),this._grid.splice(s,1),this.nbZones--,
o++;var a=this._grid[this.nbZones-1];a.grip&&(t.forEach(a.gripHandler,n.disconnect),
d.destroy(this.domNode.removeChild(a.grip)),a.grip=null),this._updateColumnsWidth(h);
},_updateColumnsWidth:function(i){this.inherited(arguments),i._dropMode.updateAreas(i._areaList);
},destroy:function(){n.unsubscribe(this._dropHandler),this.inherited(arguments)}});
});