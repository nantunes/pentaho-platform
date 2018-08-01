define(["dojo/_base/kernel","dojo/text!./resources/GridContainer.html","dojo/_base/declare","dojo/query","dojo/_base/sniff","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom-construct","dojo/dom-attr","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/keys","dojo/topic","dijit/registry","dijit/focus","dijit/_base/focus","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/layout/_LayoutWidget","dojo/_base/NodeList","dojox/mdnd/AreaManager","dojox/mdnd/DropIndicator","dojox/mdnd/dropMode/OverDropMode","dojox/mdnd/AutoScroll"],function(e,i,t,o,d,n,r,s,a,h,l,c,g,u,f,p,_,b,N,y,C,m){
var v=t("dojox.layout.GridContainerLite",[C,y],{autoRefresh:!0,templateString:i,dragHandleClass:"dojoxDragHandle",
nbZones:1,doLayout:!0,isAutoOrganized:!0,acceptTypes:[],colWidths:"",constructor:function(e,i){
this.acceptTypes=(e||{}).acceptTypes||["text"],this._disabled=!0},postCreate:function(){
this.inherited(arguments),this._grid=[],this._createCells(),this.subscribe("/dojox/mdnd/drop","resizeChildAfterDrop"),
this.subscribe("/dojox/mdnd/drag/start","resizeChildAfterDragStart"),this._dragManager=dojox.mdnd.areaManager(),
this._dragManager.autoRefresh=this.autoRefresh,this._dragManager.dragHandleClass=this.dragHandleClass,
this.doLayout?this._border={h:d("ie")?s.getBorderExtents(this.gridContainerTable).h:0,
w:6==d("ie")?1:0}:(r.set(this.domNode,"overflowY","hidden"),r.set(this.gridContainerTable,"height","auto"));
},startup:function(){this._started||(this.isAutoOrganized?this._organizeChildren():this._organizeChildrenManually(),
l.forEach(this.getChildren(),function(e){e.startup()}),this._isShown()&&this.enableDnd(),
this.inherited(arguments))},resizeChildAfterDrop:function(e,i,t){if(this._disabled)return!1;
if(p.getEnclosingWidget(i.node)==this){var o=p.byNode(e);if(o.resize&&c.isFunction(o.resize)&&o.resize(),
o.set("column",e.parentNode.cellIndex),this.doLayout){var d=this._contentBox.h,n=s.getContentBox(this.gridContainerDiv).h;
n>=d&&r.set(this.gridContainerTable,"height",d-this._border.h+"px")}return!0}return!1;
},resizeChildAfterDragStart:function(e,i,t){return this._disabled?!1:p.getEnclosingWidget(i.node)==this?(this._draggedNode=e,
this.doLayout&&s.setMarginBox(this.gridContainerTable,{h:s.getContentBox(this.gridContainerDiv).h-this._border.h
}),!0):!1},getChildren:function(){var e=new m;return l.forEach(this._grid,function(i){
o("> [widgetId]",i.node).map(p.byNode).forEach(function(i){e.push(i)})}),e},_isShown:function(){
if("open"in this)return this.open;var e=this.domNode;return"none"!=e.style.display&&"hidden"!=e.style.visibility&&!n.contains(e,"dijitHidden");
},layout:function(){if(this.doLayout){var e=this._contentBox;s.setMarginBox(this.gridContainerTable,{
h:e.h-this._border.h}),s.setContentSize(this.domNode,{w:e.w-this._border.w})}l.forEach(this.getChildren(),function(e){
e.resize&&c.isFunction(e.resize)&&e.resize()})},onShow:function(){this._disabled&&this.enableDnd();
},onHide:function(){this._disabled||this.disableDnd()},_createCells:function(){0===this.nbZones&&(this.nbZones=1);
for(var e=this.acceptTypes.join(","),i=0,t=this._computeColWidth();i<this.nbZones;)this._grid.push({
node:a.create("td",{"class":"gridContainerZone",accept:e,id:this.id+"_dz"+i,style:{
width:t[i]+"%"}},this.gridNode)}),i++},_getZonesAttr:function(){return o(".gridContainerZone",this.containerNode);
},enableDnd:function(){var e=this._dragManager;l.forEach(this._grid,function(i){e.registerByNode(i.node);
}),e._dropMode.updateAreas(e._areaList),this._disabled=!1},disableDnd:function(){
var e=this._dragManager;l.forEach(this._grid,function(i){e.unregister(i.node)}),e._dropMode.updateAreas(e._areaList),
this._disabled=!0},_organizeChildren:function(){for(var e=dojox.layout.GridContainerLite.superclass.getChildren.call(this),i=this.nbZones,t=Math.floor(e.length/i),o=e.length%i,d=0,n=0;i>n;n++){
for(var r=0;t>r;r++)this._insertChild(e[d],n),d++;if(o>0){try{this._insertChild(e[d],n),
d++}catch(s){console.error("Unable to insert child in GridContainer",s)}o--}else if(0===t)break;
}},_organizeChildrenManually:function(){for(var e,i=dojox.layout.GridContainerLite.superclass.getChildren.call(this),t=i.length,o=0;t>o;o++){
e=i[o];try{this._insertChild(e,e.column-1)}catch(d){console.error("Unable to insert child in GridContainer",d);
}}},_insertChild:function(e,i,t){var o=this._grid[i].node,d=o.childNodes.length;return("undefined"==typeof t||t>d)&&(t=d),
this._disabled?(a.place(e.domNode,o,t),h.set(e.domNode,"tabIndex","0")):e.dragRestriction?(a.place(e.domNode,o,t),
h.set(e.domNode,"tabIndex","0")):this._dragManager.addDragItem(o,e.domNode,t,!0),
e.set("column",i),e},removeChild:function(e){this._disabled?this.inherited(arguments):this._dragManager.removeDragItem(e.domNode.parentNode,e.domNode);
},addService:function(e,i,t){kernel.deprecated("addService is deprecated.","Please use  instead.","Future"),
this.addChild(e,i,t)},addChild:function(e,i,t){e.domNode.id=e.id,dojox.layout.GridContainerLite.superclass.addChild.call(this,e,0),
(0>i||void 0===i)&&(i=0),0>=t&&(t=0);try{return this._insertChild(e,i,t)}catch(o){
console.error("Unable to insert child in GridContainer",o)}return null},_setColWidthsAttr:function(e){
this.colWidths=c.isString(e)?e.split(","):c.isArray(e)?e:[e],this._started&&this._updateColumnsWidth();
},_updateColumnsWidth:function(e){for(var i=this._grid.length,t=this._computeColWidth(),o=0;i>o;o++)this._grid[o].node.style.width=t[o]+"%";
},_computeColWidth:function(){var e,i,t=this.colWidths||[],o=[],d=0;for(i=0;i<this.nbZones;i++)o.length<t.length?(d+=1*t[i],
o.push(t[i])):(e||(e=(100-d)/(this.nbZones-i),0>e&&(e=100/this.nbZones)),o.push(e),
d+=1*e);if(d>100){var n=100/d;for(i=0;i<o.length;i++)o[i]*=n}return o},_selectFocus:function(e){
if(!this._disabled){var i,t,o,n,r,s,a,l=e.keyCode,c=u,N=null,y=b.getFocus(),C=y.node,m=this._dragManager;
if(C==this.containerNode)switch(s=this.gridNode.childNodes,l){case c.DOWN_ARROW:case c.RIGHT_ARROW:
for(i=!1,t=0;t<s.length;t++){for(r=s[t].childNodes,o=0;o<r.length;o++)if(N=r[o],null!==N&&"none"!=N.style.display){
_.focus(N),g.stop(e),i=!0;break}if(i)break}break;case c.UP_ARROW:case c.LEFT_ARROW:
for(s=this.gridNode.childNodes,i=!1,t=s.length-1;t>=0;t--){for(r=s[t].childNodes,
o=r.length;o>=0;o--)if(N=r[o],null!==N&&"none"!=N.style.display){_.focus(N),g.stop(e),
i=!0;break}if(i)break}}else if(C.parentNode.parentNode==this.gridNode){var v=l==c.UP_ARROW||l==c.LEFT_ARROW?"lastChild":"firstChild",R=l==c.UP_ARROW||l==c.LEFT_ARROW?"previousSibling":"nextSibling";
switch(l){case c.UP_ARROW:case c.DOWN_ARROW:g.stop(e),i=!1;for(var j=C;!i;){r=j.parentNode.childNodes;
var x=0;for(t=0;t<r.length&&("none"!=r[t].style.display&&x++,!(x>1));t++);if(1==x)return;
N=null===j[R]?j.parentNode[v]:j[R],"none"===N.style.display?j=N:i=!0}if(e.shiftKey){
var W=C.parentNode;for(t=0;t<this.gridNode.childNodes.length&&W!=this.gridNode.childNodes[t];t++);
for(r=this.gridNode.childNodes[t].childNodes,o=0;o<r.length&&N!=r[o];o++);(d("mozilla")||d("webkit"))&&t--,
a=p.byNode(C),a.dragRestriction?f.publish("/dojox/layout/gridContainer/moveRestriction",this):(n=m.removeDragItem(W,C),
this.addChild(a,t,o),h.set(C,"tabIndex","0"),_.focus(C))}else _.focus(N);break;case c.RIGHT_ARROW:
case c.LEFT_ARROW:if(g.stop(e),e.shiftKey){var A=0;if(null===C.parentNode[R])d("ie")&&l==c.LEFT_ARROW&&(A=this.gridNode.childNodes.length-1);else if(3==C.parentNode[R].nodeType)A=this.gridNode.childNodes.length-2;else{
for(t=0;t<this.gridNode.childNodes.length&&C.parentNode[R]!=this.gridNode.childNodes[t];t++)A++;
(d("mozilla")||d("webkit"))&&A--}a=p.byNode(C);var T=C.getAttribute("dndtype");T=null===T?a&&a.dndType?a.dndType.split(/\s*,\s*/):["text"]:T.split(/\s*,\s*/);
var z=!1;for(t=0;t<this.acceptTypes.length;t++)for(o=0;o<T.length;o++)if(T[o]==this.acceptTypes[t]){
z=!0;break}if(z&&!a.dragRestriction){var M=C.parentNode,D=0;if(c.LEFT_ARROW==l){var L=A;
(d("mozilla")||d("webkit"))&&(L=A+1),D=this.gridNode.childNodes[L].childNodes.length;
}n=m.removeDragItem(M,C),this.addChild(a,A,D),h.set(n,"tabIndex","0"),_.focus(n)}else f.publish("/dojox/layout/gridContainer/moveRestriction",this);
}else{for(var O=C.parentNode;null===N;)if(O=null!==O[R]&&3!==O[R].nodeType?O[R]:"previousSibling"===R?O.parentNode.childNodes[O.parentNode.childNodes.length-1]:O.parentNode.childNodes[d("ie")?0:1],
N=O[v],N&&"none"==N.style.display){r=N.parentNode.childNodes;var k=null;if("previousSibling"==R){
for(t=r.length-1;t>=0;t--)if("none"!=r[t].style.display){k=r[t];break}}else for(t=0;t<r.length;t++)if("none"!=r[t].style.display){
k=r[t];break}k?N=k:(C=N,O=C.parentNode,N=null)}_.focus(N)}}}}},destroy:function(){
var e=this._dragManager;l.forEach(this._grid,function(i){e.unregister(i.node)}),this.inherited(arguments);
}});return v.ChildWidgetProperties={column:"1",dragRestriction:!1},c.extend(N,v.ChildWidgetProperties),
v});