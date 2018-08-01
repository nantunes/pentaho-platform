define(["dijit/registry","dojo/_base/declare","dojo/_base/lang","./util","dojo/_base/html"],function(t,e,i,s,o){
var a=function(t){for(var e,i=0,s=t.parentNode;e=s.childNodes[i++];)if(e==t)return i-1;
return-1},h=function(e){e&&dojo.forEach(t.toArray(),function(t){t.domNode&&o.isDescendant(t.domNode,e,!0)&&t.destroy();
})},n=function(t){var e=o.byId(t);return e&&e.tagName?e.tagName.toLowerCase():""},r=function(t,e){
for(var i,s=[],o=0;i=t.childNodes[o];)o++,n(i)==e&&s.push(i);return s},g=function(t){
return r(t,"div")};return e("dojox.grid._Scroller",null,{constructor:function(t){
this.setContentNodes(t),this.pageHeights=[],this.pageNodes=[],this.stack=[]},rowCount:0,
defaultRowHeight:32,keepRows:100,contentNode:null,scrollboxNode:null,defaultPageHeight:0,
keepPages:10,pageCount:0,windowHeight:0,firstVisibleRow:0,lastVisibleRow:0,averageRowHeight:0,
page:0,pageTop:0,init:function(t,e,s){switch(arguments.length){case 3:this.rowsPerPage=s;
case 2:this.keepRows=e;case 1:this.rowCount=t}this.defaultPageHeight=(this.grid.rowHeight>0?this.grid.rowHeight:this.defaultRowHeight)*this.rowsPerPage,
this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage),this.setKeepInfo(this.keepRows),
this.invalidate(),this.scrollboxNode&&(this.scrollboxNode.scrollTop=0,this.scroll(0),
this.scrollboxNode.onscroll=i.hitch(this,"onscroll"))},_getPageCount:function(t,e){
return t?Math.ceil(t/e)||1:0},destroy:function(){this.invalidateNodes(),delete this.contentNodes,
delete this.contentNode,delete this.scrollboxNode},setKeepInfo:function(t){this.keepRows=t,
this.keepPages=this.keepRows?Math.max(Math.ceil(this.keepRows/this.rowsPerPage),2):this.keepPages;
},setContentNodes:function(t){this.contentNodes=t,this.colCount=this.contentNodes?this.contentNodes.length:0,
this.pageNodes=[];for(var e=0;e<this.colCount;e++)this.pageNodes[e]=[]},getDefaultNodes:function(){
return this.pageNodes[0]||[]},invalidate:function(){this._invalidating=!0,this.invalidateNodes(),
this.pageHeights=[],this.height=this.pageCount?(this.pageCount-1)*this.defaultPageHeight+this.calcLastPageHeight():0,
this.resize(),this._invalidating=!1},updateRowCount:function(t){this.invalidateNodes(),
this.rowCount=t;var e=this.pageCount;if(0===e&&(this.height=1),this.pageCount=this._getPageCount(this.rowCount,this.rowsPerPage),
this.pageCount<e)for(var i=e-1;i>=this.pageCount;i--)this.height-=this.getPageHeight(i),
delete this.pageHeights[i];else this.pageCount>e&&(this.height+=this.defaultPageHeight*(this.pageCount-e-1)+this.calcLastPageHeight());
this.resize()},pageExists:function(t){return Boolean(this.getDefaultPageNode(t))},
measurePage:function(t){if(this.grid.rowHeight)return((t+1)*this.rowsPerPage>this.rowCount?this.rowCount-t*this.rowsPerPage:this.rowsPerPage)*this.grid.rowHeight;
var e=this.getDefaultPageNode(t);return e&&e.innerHTML?e.offsetHeight:void 0},positionPage:function(t,e){
for(var i=0;i<this.colCount;i++)this.pageNodes[i][t].style.top=e+"px"},repositionPages:function(t){
for(var e=this.getDefaultNodes(),i=0,s=0;s<this.stack.length;s++)i=Math.max(this.stack[s],i);
for(var o=e[t],a=o?this.getPageNodePosition(o)+this.getPageHeight(t):0,h=t+1;i>=h;h++){
if(o=e[h]){if(this.getPageNodePosition(o)==a)return;this.positionPage(h,a)}a+=this.getPageHeight(h);
}},installPage:function(t){for(var e=0;e<this.colCount;e++)this.contentNodes[e].appendChild(this.pageNodes[e][t]);
},preparePage:function(t,e){for(var i=e?this.popPage():null,s=0;s<this.colCount;s++){
var o=this.pageNodes[s],a=null===i?this.createPageNode():this.invalidatePageNode(i,o);
a.pageIndex=t,o[t]=a}},renderPage:function(t){var e,i,s=[];for(e=0;e<this.colCount;e++)s[e]=this.pageNodes[e][t];
for(e=0,i=t*this.rowsPerPage;e<this.rowsPerPage&&i<this.rowCount;e++,i++)this.renderRow(i,s);
},removePage:function(t){for(var e=0,i=t*this.rowsPerPage;e<this.rowsPerPage;e++,
i++)this.removeRow(i)},destroyPage:function(t){for(var e=0;e<this.colCount;e++){var i=this.invalidatePageNode(t,this.pageNodes[e]);
i&&o.destroy(i)}},pacify:function(t){},pacifying:!1,pacifyTicks:200,setPacifying:function(t){
this.pacifying!=t&&(this.pacifying=t,this.pacify(this.pacifying))},startPacify:function(){
this.startPacifyTicks=(new Date).getTime()},doPacify:function(){var t=(new Date).getTime()-this.startPacifyTicks>this.pacifyTicks;
return this.setPacifying(!0),this.startPacify(),t},endPacify:function(){this.setPacifying(!1);
},resize:function(){this.scrollboxNode&&(this.windowHeight=this.scrollboxNode.clientHeight);
for(var t=0;t<this.colCount;t++)s.setStyleHeightPx(this.contentNodes[t],Math.max(1,this.height));
var e=!this._invalidating;if(!e){var i=this.grid.get("autoHeight");"number"==typeof i&&i<=Math.min(this.rowsPerPage,this.rowCount)&&(e=!0);
}e&&this.needPage(this.page,this.pageTop);var o=this.page<this.pageCount-1?this.rowsPerPage:this.rowCount%this.rowsPerPage||this.rowsPerPage,a=this.getPageHeight(this.page);
this.averageRowHeight=a>0&&o>0?a/o:0},calcLastPageHeight:function(){if(!this.pageCount)return 0;
var t=this.pageCount-1,e=(this.rowCount%this.rowsPerPage||this.rowsPerPage)*this.defaultRowHeight;
return this.pageHeights[t]=e,e},updateContentHeight:function(t){this.height+=t,this.resize();
},updatePageHeight:function(t,e,i){if(this.pageExists(t)){var s=this.getPageHeight(t),o=this.measurePage(t);
if(void 0===o&&(o=s),this.pageHeights[t]=o,s!=o){this.updateContentHeight(o-s);var a=this.grid.get("autoHeight");
if("number"==typeof a&&a>this.rowCount||a===!0&&!e)if(i){var h=this.grid.viewsNode.style;
h.height=parseInt(h.height)+o-s+"px",this.repositionPages(t)}else this.grid.sizeChange();else this.repositionPages(t);
}return o}return 0},rowHeightChanged:function(t,e){this.updatePageHeight(Math.floor(t/this.rowsPerPage),!1,e);
},invalidateNodes:function(){for(;this.stack.length;)this.destroyPage(this.popPage());
},createPageNode:function(){var t=document.createElement("div");return o.attr(t,"role","presentation"),
t.style.position="absolute",t.style[this.grid.isLeftToRight()?"left":"right"]="0",
t},getPageHeight:function(t){var e=this.pageHeights[t];return void 0!==e?e:this.defaultPageHeight;
},pushPage:function(t){return this.stack.push(t)},popPage:function(){return this.stack.shift();
},findPage:function(t){for(var e=0,i=0,s=0;e<this.pageCount&&(s=this.getPageHeight(e),
!(i+s>=t));e++,i+=s);this.page=e,this.pageTop=i},buildPage:function(t,e,i){this.preparePage(t,e),
this.positionPage(t,i),this.installPage(t),this.renderPage(t),this.pushPage(t)},needPage:function(t,e){
var i=this.getPageHeight(t);return this.pageExists(t)?this.positionPage(t,e):(this.buildPage(t,!this.grid._autoHeight&&this.keepPages&&this.stack.length>=this.keepPages,e),
i=this.updatePageHeight(t,!0)),i},onscroll:function(){this.scroll(this.scrollboxNode.scrollTop);
},scroll:function(t){if(this.grid.scrollTop=t,this.colCount){this.startPacify(),this.findPage(t);
for(var e=this.height,i=this.getScrollBottom(t),s=this.page,o=this.pageTop;s<this.pageCount&&(0>i||i>o);s++)o+=this.needPage(s,o);
this.firstVisibleRow=this.getFirstVisibleRow(this.page,this.pageTop,t),this.lastVisibleRow=this.getLastVisibleRow(s-1,o,i),
e!=this.height&&this.repositionPages(s-1),this.endPacify()}},getScrollBottom:function(t){
return this.windowHeight>=0?t+this.windowHeight:-1},processNodeEvent:function(t,e){
for(var i=t.target;i&&i!=e&&i.parentNode&&i.parentNode.parentNode!=e;)i=i.parentNode;
if(!i||!i.parentNode||i.parentNode.parentNode!=e)return!1;var s=i.parentNode;return t.topRowIndex=s.pageIndex*this.rowsPerPage,
t.rowIndex=t.topRowIndex+a(i),t.rowTarget=i,!0},processEvent:function(t){return this.processNodeEvent(t,this.contentNode);
},renderRow:function(t,e){},removeRow:function(t){},getDefaultPageNode:function(t){
return this.getDefaultNodes()[t]},positionPageNode:function(t,e){},getPageNodePosition:function(t){
return t.offsetTop},invalidatePageNode:function(t,e){var i=e[t];return i&&(delete e[t],
this.removePage(t,i),h(i),i.innerHTML=""),i},getPageRow:function(t){return t*this.rowsPerPage;
},getLastPageRow:function(t){return Math.min(this.rowCount,this.getPageRow(t+1))-1;
},getFirstVisibleRow:function(t,e,i){if(!this.pageExists(t))return 0;for(var s=this.getPageRow(t),o=this.getDefaultNodes(),a=g(o[t]),h=0,n=a.length;n>h&&i>e;h++,
s++)e+=a[h].offsetHeight;return s?s-1:s},getLastVisibleRow:function(t,e,i){if(!this.pageExists(t))return 0;
for(var s=this.getDefaultNodes(),o=this.getLastPageRow(t),a=g(s[t]),h=a.length-1;h>=0&&e>i;h--,
o--)e-=a[h].offsetHeight;return o+1},findTopRow:function(t){for(var e,i=this.getDefaultNodes(),s=g(i[this.page]),o=0,a=s.length,h=this.pageTop;a>o;o++)if(e=s[o].offsetHeight,
h+=e,h>=t)return this.offset=e-(h-t),o+this.page*this.rowsPerPage;return-1},findScrollTop:function(t){
var e,i,s=Math.floor(t/this.rowsPerPage),o=0;for(e=0;s>e;e++)o+=this.getPageHeight(e);
this.pageTop=o,this.page=s,this.needPage(s,this.pageTop);var a=this.getDefaultNodes(),h=g(a[s]),n=t-this.rowsPerPage*s;
for(e=0,i=h.length;i>e&&n>e;e++)o+=h[e].offsetHeight;return o},dummy:0})});