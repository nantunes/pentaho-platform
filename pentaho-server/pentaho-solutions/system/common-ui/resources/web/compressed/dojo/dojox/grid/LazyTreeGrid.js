define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/array","dojo/query","dojo/parser","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/dom","dojo/keys","dojo/text!./resources/Expando.html","dijit/_Widget","dijit/_TemplatedMixin","./TreeGrid","./_Builder","./_View","./_Layout","./cells/tree","./_RowManager","./_FocusManager","./_EditManager","./DataSelection","./util"],function(e,t,i,s,o,r,n,h,d,a,l,c,u,_,g,p,f,x,m,y,w,C,v,I,R,b){
var S=t("dojox.grid._LazyExpando",[g,p],{grid:null,view:null,rowIdx:-1,cellIdx:-1,
level:0,itemId:"",templateString:_,onToggle:function(e){if(this.grid._treeCache.items[this.rowIdx]){
this.grid.focus.setFocusIndex(this.rowIdx,this.cellIdx),this.setOpen(!this.grid._treeCache.items[this.rowIdx].opened);
try{s.stop(e)}catch(t){}}},setOpen:function(e){var t=this.grid,i=t._by_idx[this.rowIdx].item;
i&&t.treeModel.mayHaveChildren(i)&&!t._loading&&t._treeCache.items[this.rowIdx].opened!==e&&(t._treeCache.items[this.rowIdx].opened=e,
t.expandoFetch(this.rowIdx,e),this._updateOpenState(i))},_updateOpenState:function(e){
var t,i=this.grid;e&&i.treeModel.mayHaveChildren(e)?(t=i._treeCache.items[this.rowIdx].opened,
this.expandoInner.innerHTML=t?"-":"+",d.toggle(this.domNode,"dojoxGridExpandoOpened",t),
this.domNode.parentNode.setAttribute("aria-expanded",t)):d.remove(this.domNode,"dojoxGridExpandoOpened");
},setRowNode:function(e,t,i){if(this.cellIdx<0||!this.itemId)return!1;this.view=i,
this.grid=i.grid,this.rowIdx=e;var s=this.grid.isLeftToRight()?"marginLeft":"marginRight";
return a.set(this.domNode.parentNode,s,1.125*this.level+"em"),this._updateOpenState(this.grid._by_idx[this.rowIdx].item),
!0}}),j=t("dojox.grid._TreeGridContentBuilder",x._ContentBuilder,{generateHtml:function(e,t){
var s=this.getTableArray(),r=this.grid,n=this.view,h=n.structure.cells,d=r.getItem(t),a=0,c="",u=r._treeCache.items[t]?r._treeCache.items[t].treePath:null;
b.fire(this.view,"onBeforeRow",[t,h]),d&&i.isArray(u)&&(a=u.length,c=r.treeModel.mayHaveChildren(d)?"":"dojoxGridNoChildren");
for(var _,g,p,f=0,x=0,m=0,y=[];_=h[x];x++)if(!_.hidden&&!_.header){s.push('<tr class="'+c+'">'),
p=this._getColSpans(a),p&&o.forEach(p,function(e){for(f=0;g=_[f];f++)f>=e.start&&f<=e.end&&(m+=this._getCellWidth(_,f));
y.push(m),m=0},this);var w,C,v,I,R=0;for(f=0;g=_[f];f++)if(w=g.markup,C=g.customClasses=[],
v=g.customStyles=[],p&&p[R]&&f>=p[R].start&&f<=p[R].end){var S=p[R].primary||p[R].start;
if(f!=S){if(f==p[R].end){R++;continue}continue}w[5]=g.formatAtLevel(d,a,t),w[1]=C.join(" "),
I=l.getMarginBox(g.getHeaderNode()).w-l.getContentBox(g.getHeaderNode()).w,v=g.customStyles=["width:"+(y[R]-I)+"px"],
w[3]=v.join(";"),s.push.apply(s,w)}else w[5]=g.formatAtLevel(d,a,t),w[1]=C.join(" "),
w[3]=v.join(";"),s.push.apply(s,w);s.push("</tr>")}return s.push("</table>"),s.join("");
},_getColSpans:function(e){var t=this.grid.colSpans;return t&&t[e]?t[e]:null},_getCellWidth:function(e,t){
var i=e[t],s=i.getHeaderNode();if(i.hidden)return 0;if(t==e.length-1||o.every(e.slice(t+1),function(e){
return e.hidden})){var r=l.position(e[t].view.headerContentNode.firstChild);return r.x+r.w-l.position(s).x;
}var n;do n=e[++t];while(n.hidden);return l.position(n.getHeaderNode()).x-l.position(s).x;
}});t("dojox.grid._TreeGridView",m,{_contentBuilderClass:j,postCreate:function(){
this.inherited(arguments),this._expandos={},this.connect(this.grid,"_onCleanupExpandoCache","_cleanupExpandoCache");
},destroy:function(){this._cleanupExpandoCache(),this.inherited(arguments)},_cleanupExpandoCache:function(e){
if(e&&this._expandos[e])this._expandos[e].destroy(),delete this._expandos[e];else{
var t;for(t in this._expandos)this._expandos[t].destroy();this._expandos={}}},onAfterRow:function(e,t,i){
r("span.dojoxGridExpando",i).forEach(function(t){if(t&&t.parentNode){var s,o,r=this.grid._by_idx;
r&&r[e]&&r[e].idty&&(s=r[e].idty,o=this._expandos[s]),o?(h.place(o.domNode,t,"replace"),
o.itemId=t.getAttribute("itemId"),o.cellIdx=parseInt(t.getAttribute("cellIdx"),10),
isNaN(o.cellIdx)&&(o.cellIdx=-1)):(o=n.parse(t.parentNode)[0],s&&(this._expandos[s]=o)),
o.setRowNode(e,i,this)||o.domNode.parentNode.removeChild(o.domNode),h.destroy(t)}
},this),this.inherited(arguments)},updateRow:function(e){var t,i=this.grid;i.keepSelection&&(t=i.getItem(e),
t&&i.selection.preserver._reSelectById(t,e)),this.inherited(arguments)}});var P=i.mixin(i.clone(w),{
formatAtLevel:function(t,i,s){if(!t)return this.formatIndexes(s,t,i);var o,r="",n="";
return this.isCollapsable&&this.grid.store.isItem(t)&&(n="<span "+e._scopeName+'Type="dojox.grid._LazyExpando" level="'+i+'" class="dojoxGridExpando" itemId="'+this.grid.store.getIdentity(t)+'" cellIdx="'+this.index+'"></span>'),
o=this.formatIndexes(s,t,i),r=""!==n?"<div>"+n+o+"</div>":o},formatIndexes:function(e,t,i){
var s=this.grid.edit.info,o=this.get?this.get(e,t):this.value||this.defaultValue;if(this.editable&&(this.alwaysEditing||s.rowIndex===e&&s.cell===this))return this.formatEditing(o,e);
var r=this.textDir||this.grid.textDir,n=this._defaultFormat(o,[o,e,i,this]);return r&&this._enforceTextDirWithUcc&&(n=this._enforceTextDirWithUcc(r,n)),
n}}),M=t("dojox.grid._LazyTreeLayout",y,{setStructure:function(e){var t=this.grid,i=e;
t&&!o.every(i,function(e){return!!e.cells})&&(i=arguments[0]=[{cells:[i]}]),1===i.length&&1===i[0].cells.length&&(i[0].type="dojox.grid._TreeGridView",
this._isCollapsable=!0,i[0].cells[0][this.grid.expandoCell].isCollapsable=!0),this.inherited(arguments);
},addCellDef:function(e,t,s){var o=this.inherited(arguments);return i.mixin(o,P)}
}),N=t("dojox.grid._LazyTreeGridCache",null,{constructor:function(){this.items=[];
},getSiblingIndex:function(e,t){for(var i,s=e-1,o=0;s>=0;s--)if(i=this.items[s]?this.items[s].treePath:[],
i.join("/")===t.join("/"))o++;else if(i.length<t.length)break;return o},removeChildren:function(e){
for(var t,i,s=e+1,o=this.items[e]?this.items[e].treePath:[];s<this.items.length&&(i=this.items[s]?this.items[s].treePath:[],
!(i.join("/")===o.join("/")||i.length<=o.length));s++);return t=s-(e+1),this.items.splice(e+1,t),
t}}),E=t("dojox.grid.LazyTreeGrid",f,{_layoutClass:M,_size:0,treeModel:null,defaultState:null,
colSpans:null,postCreate:function(){if(this._setState(),this.inherited(arguments),
this._treeCache||(this._treeCache=new N),!(this.treeModel&&this.treeModel instanceof dijit.tree.ForestStoreModel))throw new Error("dojox.grid.LazyTreeGrid: must be used with a treeModel which is an instance of dijit.tree.ForestStoreModel");
d.add(this.domNode,"dojoxGridTreeModel"),c.setSelectable(this.domNode,this.selectable);
},createManagers:function(){this.rows=new C(this),this.focus=new v(this),this.edit=new I(this);
},createSelection:function(){this.selection=new R(this)},setModel:function(e){e&&(this._setModel(e),
this._cleanup(),this._refresh(!0))},setStore:function(e,t,i){e&&(this._setQuery(t,i),
this.treeModel.query=t,this.treeModel.store=e,this.treeModel.root.children=[],this.setModel(this.treeModel));
},onSetState:function(){},_setState:function(){this.defaultState&&(this._treeCache=this.defaultState.cache,
this.sortInfo=this.defaultState.sortInfo||0,this.query=this.defaultState.query||this.query,
this._lastScrollTop=this.defaultState.scrollTop,this.keepSelection?this.selection.preserver._selectedById=this.defaultState.selection:this.selection.selected=this.defaultState.selection||[],
this.onSetState())},getState:function(){var e=this,t=this.keepSelection?this.selection.preserver._selectedById:this.selection.selected;
return{cache:i.clone(e._treeCache),query:i.clone(e.query),sortInfo:i.clone(e.sortInfo),
scrollTop:i.clone(e.scrollTop),selection:i.clone(t)}},_setQuery:function(e,t){this.inherited(arguments),
this.treeModel.query=e},filter:function(e,t){this._cleanup(),this.inherited(arguments);
},destroy:function(){this._cleanup(),this.inherited(arguments)},expand:function(e){
this._fold(e,!0)},collapse:function(e){this._fold(e,!1)},refresh:function(e){e||this._cleanup(),
this._refresh(!0)},_cleanup:function(){this._treeCache.items=[],this._onCleanupExpandoCache();
},setSortIndex:function(e,t){this.canSort(e+1)&&this._cleanup(),this.inherited(arguments);
},_refresh:function(e){this._clearData(),this.updateRowCount(this._size),this._fetch(0,!0);
},render:function(){this.inherited(arguments),this.setScrollTop(this.scrollTop)},
_onNew:function(e,t){var i=t&&this.store.isItem(t.item)&&o.some(this.treeModel.childrenAttrs,function(e){
return e===t.attribute}),s=this._treeCache.items,r=this._by_idx;if(i){for(var n=t.item,h=this.store.getIdentity(n),d=-1,a=0;a<r.length;a++)if(h===r[a].idty){
d=a;break}if(d>=0)if(s[d]&&s[d].opened){for(var l=s[d].treePath,c=d+1;c<s.length&&!(s[c].treePath.length<=l.length);c++);
var u=l.slice();u.push(h),this._treeCache.items.splice(c,0,{opened:!1,treePath:u});
var _=this.store.getIdentity(e);this._by_idty[_]={idty:_,item:e},r.splice(c,0,this._by_idty[_]),
this._size+=1,this.updateRowCount(this._size),this._updateRenderedRows(c)}else this.updateRow(d);
}else s.push({opened:!1,treePath:[]}),this._size+=1,this.inherited(arguments)},_onDelete:function(e){
for(var t=0,i=-1,s=this.store.getIdentity(e);t<this._by_idx.length;t++)if(s===this._by_idx[t].idty){
i=t;break}if(i>=0){var o,r=this._treeCache.items,n=r[i]?r[i].treePath:[],h=1;for(t=i+1;t<this._size&&(o=r[t]?r[t].treePath:[],
!(r[t].treePath.length<=n.length));t++,h++);r.splice(i,h),this._onCleanupExpandoCache(s),
this._by_idx.splice(i,h),this._size-=h,this.updateRowCount(this._size),this._updateRenderedRows(i);
}},_onCleanupExpandoCache:function(e){},_fetch:function(e,t){this._loading||(this._loading=!0),
e=e||0;var i=this._size-e>0?Math.min(this.rowsPerPage,this._size-e):this.rowsPerPage,s=0,o=[];
for(this._reqQueueLen=0;i>s&&this._by_idx[e+s];s++)o.push(this._by_idx[e+s].item);
if(o.length===i)this._reqQueueLen=1,this._onFetchBegin(this._size,{startRowIdx:e,
count:i}),this._onFetchComplete(o,{startRowIdx:e,count:i});else{var r,n,h=1,d=this._treeCache.items,a=d[e]?d[e].treePath:[];
for(s=1;i>s;s++)r=d[e+h-1]?d[e+h-1].treePath.length:0,n=d[e+h]?d[e+h].treePath.length:0,
r!==n?(this._reqQueueLen++,this._fetchItems({startRowIdx:e,count:h,treePath:a}),e+=h,
h=1,a=d[e]?d[e].treePath:0):h++;this._reqQueueLen++,this._fetchItems({startRowIdx:e,
count:h,treePath:a})}},_fetchItems:function(e){if(!this._pending_requests[e.startRowIdx]){
this.showMessage(this.loadingMessage),this._pending_requests[e.startRowIdx]=!0;var t=i.hitch(this,"_onFetchError"),s=this._treeCache.getSiblingIndex(e.startRowIdx,e.treePath);
if(0===e.treePath.length)this.store.fetch({start:s,startRowIdx:e.startRowIdx,treePath:e.treePath,
count:e.count,query:this.query,sort:this.getSortProps(),queryOptions:this.queryOptions,
onBegin:i.hitch(this,"_onFetchBegin"),onComplete:i.hitch(this,"_onFetchComplete"),
onError:i.hitch(this,"_onFetchError")});else{var o,r=e.treePath[e.treePath.length-1],n={
start:s,startRowIdx:e.startRowIdx,treePath:e.treePath,count:e.count,parentId:r,sort:this.getSortProps()
},h=this,d=function(){var e=i.hitch(h,"_onFetchComplete");1==arguments.length?e.apply(h,[arguments[0],n]):e.apply(h,arguments);
};this._by_idty[r]?(o=this._by_idty[r].item,this.treeModel.getChildren(o,d,t,n)):this.store.fetchItemByIdentity({
identity:r,onItem:function(e){h.treeModel.getChildren(e,d,t,n)},onError:t})}}},_onFetchBegin:function(e,t){
0===this._treeCache.items.length&&(this._size=parseInt(e,10)),e=this._size,this.inherited(arguments);
},_onFetchComplete:function(e,t){var s=t.startRowIdx,o=t.count,r=e.length<=o?0:t.start,n=t.treePath||[];
if(i.isArray(e)&&e.length>0){for(var h=0,d=Math.min(o,e.length);d>h;h++)this._treeCache.items[s+h]||(this._treeCache.items[s+h]={
opened:!1,treePath:n}),this._by_idx[s+h]||this._addItem(e[r+h],s+h,!0);this.updateRows(s,d);
}0==this._size?this.showMessage(this.noDataMessage):this.showMessage(),this._pending_requests[s]=!1,
this._reqQueueLen--,this._loading&&0===this._reqQueueLen&&(this._loading=!1,this._lastScrollTop&&this.setScrollTop(this._lastScrollTop));
},expandoFetch:function(e,t){if(!this._loading&&this._by_idx[e]){this._loading=!0,
this._toggleLoadingClass(e,!0),this.expandoRowIndex=e;var s=this._by_idx[e].item;if(t){
var o={start:0,count:this.rowsPerPage,parentId:this.store.getIdentity(this._by_idx[e].item),
sort:this.getSortProps()};this.treeModel.getChildren(s,i.hitch(this,"_onExpandoComplete"),i.hitch(this,"_onFetchError"),o);
}else{var r=this._treeCache.removeChildren(e);this._by_idx.splice(e+1,r),this._bop=this._eop=-1,
this._size-=r,this.updateRowCount(this._size),this._updateRenderedRows(e+1),this._toggleLoadingClass(e,!1),
this._loading&&(this._loading=!1),this.focus._delayedCellFocus()}}},_onExpandoComplete:function(e,t,i){
i=isNaN(i)?e.length:parseInt(i,10);var s=this._treeCache.items[this.expandoRowIndex].treePath.slice(0);
s.push(this.store.getIdentity(this._by_idx[this.expandoRowIndex].item));for(var o,r=1;i>=r;r++)this._treeCache.items.splice(this.expandoRowIndex+r,0,{
treePath:s,opened:!1});for(this._size+=i,this.updateRowCount(this._size),r=0;i>r;r++)e[r]?(o=this.store.getIdentity(e[r]),
this._by_idty[o]={idty:o,item:e[r]},this._by_idx.splice(this.expandoRowIndex+1+r,0,this._by_idty[o])):this._by_idx.splice(this.expandoRowIndex+1+r,0,null);
this._updateRenderedRows(this.expandoRowIndex+1),this._toggleLoadingClass(this.expandoRowIndex,!1),
this.stateChangeNode=null,this._loading&&(this._loading=!1),this.autoHeight===!0&&this._resize(),
this.focus._delayedCellFocus()},styleRowNode:function(e,t){t&&this.rows.styleRowNode(e,t);
},onStyleRow:function(e){return this.layout._isCollapsable?(e.customClasses+=(e.odd?" dojoxGridRowOdd":"")+(e.selected?" dojoxGridRowSelected":"")+(e.over?" dojoxGridRowOver":""),
this.focus.styleRow(e),void this.edit.styleRow(e)):void this.inherited(arguments);
},onKeyDown:function(e){if(!e.altKey&&!e.metaKey){var t=dijit.findWidgets(e.target)[0];
e.keyCode===u.ENTER&&t instanceof S&&t.onToggle(),this.inherited(arguments)}},_toggleLoadingClass:function(e,t){
var i,s=this.views.views,o=s[s.length-1].getRowNode(e);o&&(i=r(".dojoxGridExpando",o)[0],
i&&d.toggle(i,"dojoxGridExpandoLoading",t))},_updateRenderedRows:function(e){o.forEach(this.scroller.stack,function(t){
t*this.rowsPerPage>=e?this.updateRows(t*this.rowsPerPage,this.rowsPerPage):(t+1)*this.rowsPerPage>=e&&this.updateRows(e,(t+1)*this.rowsPerPage-e+1);
},this)},_fold:function(e,t){var i=-1,s=0,o=this._by_idx,r=this._by_idty[e];if(r&&r.item&&this.treeModel.mayHaveChildren(r.item)){
for(;s<o.length;s++)if(o[s]&&o[s].idty===e){i=s;break}if(i>=0){var n=this.views.views[this.views.views.length-1].getRowNode(i);
if(n){var h=dijit.findWidgets(n)[0];h&&h.setOpen(t)}}}}});return E.markupFactory=function(e,t,i,s){
return f.markupFactory(e,t,i,s)},E});