define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","../../EnhancedGrid","../_Plugin","./_RowMapLayer"],function(e,o,r,i,t,n,a,s){
var l=r("dojox.grid.enhanced.plugins.Rearrange",a,{name:"rearrange",constructor:function(e,o){
this.grid=e,this.setArgs(o);var r=new s(e);dojox.grid.enhanced.plugins.wrap(e,"_storeLayerFetch",r);
},setArgs:function(e){this.args=o.mixin(this.args||{},e||{}),this.args.setIdentifierForNewItem=this.args.setIdentifierForNewItem||function(e){
return e}},destroy:function(){this.inherited(arguments),this.grid.unwrap("rowmap");
},onSetStore:function(e){this.grid.layer("rowmap").clearMapping()},_hasIdentity:function(e){
var o=this.grid,r=o.store,t=o.layout.cells;return r.getFeatures()["dojo.data.api.Identity"]&&i.some(e,function(e){
return r.getIdentityAttributes(o._by_idx[e.r].item)==t[e.c].field})?!0:!1},moveColumns:function(e,o){
var r,i,n=this.grid,a=n.layout,s=a.cells,l=0,c=!0,d={},f={};for(e.sort(function(e,o){
return e-o}),i=0;i<e.length;++i)d[e[i]]=i,e[i]<o&&++l;var u=0,m=0,h=Math.max(e[e.length-1],o);
h==s.length&&--h;var g=Math.min(e[0],o);for(i=g;h>=i;++i){var w=d[i];w>=0?f[i]=o-l+w:o>i?(f[i]=g+u,
++u):i>=o&&(f[i]=o+e.length-l+m,++m)}for(l=0,o==s.length&&(--o,c=!1),n._notRefreshSelection=!0,
i=0;i<e.length;++i)r=e[i],o>r&&(r-=l),++l,r!=o&&(a.moveColumn(s[r].view.idx,s[o].view.idx,r,o,c),
s=a.cells),r>=o&&++o;delete n._notRefreshSelection,t.publish("dojox/grid/rearrange/move/"+n.id,["col",f,e]);
},moveRows:function(e,r){var n,a,s,l,c,d,f=this.grid,u={},m=[],h=[],g=e.length;for(n=0;g>n&&(a=e[n],
!(a>=r));++n)m.push(a);if(h=e.slice(n),l=m,g=l.length)for(c={},i.forEach(l,function(e){
c[e]=!0}),u[l[0]]=r-g,s=0,n=l[s]+1,d=n-1;r>n;++n)c[n]?(++s,u[n]=r-g+s):(u[n]=d,++d);
if(l=h,g=l.length)for(c={},i.forEach(l,function(e){c[e]=!0}),u[l[g-1]]=r+g-1,s=g-1,
n=l[s]-1,d=n+1;n>=r;--n)c[n]?(--s,u[n]=r+s):(u[n]=d,--d);var w=o.clone(u);f.layer("rowmap").setMapping(u),
f.forEachLayer(function(e){return"rowmap"!=e.name()?(e.invalidate(),!0):!1},!1),f.selection.selected=[],
f._noInternalMapping=!0,f._refresh(),setTimeout(function(){t.publish("dojox/grid/rearrange/move/"+f.id,["row",w,e]),
f._noInternalMapping=!1},0)},moveCells:function(e,o){var r=this.grid,n=r.store;if(n.getFeatures()["dojo.data.api.Write"]){
if(e.min.row==o.min.row&&e.min.col==o.min.col)return;var a,s,l,c,d=r.layout.cells,f=(e.max.row-e.min.row+1,
[]),u=[];for(a=e.min.row,l=o.min.row;a<=e.max.row;++a,++l)for(s=e.min.col,c=o.min.col;s<=e.max.col;++s,
++c){for(;d[s]&&d[s].hidden;)++s;for(;d[c]&&d[c].hidden;)++c;f.push({r:a,c:s}),u.push({
r:l,c:c,v:d[s].get(a,r._by_idx[a].item)})}if(this._hasIdentity(f.concat(u)))return void console.warn("Can not write to identity!");
i.forEach(f,function(e){n.setValue(r._by_idx[e.r].item,d[e.c].field,"")}),i.forEach(u,function(e){
n.setValue(r._by_idx[e.r].item,d[e.c].field,e.v)}),n.save({onComplete:function(){
t.publish("dojox/grid/rearrange/move/"+r.id,["cell",{from:e,to:o}])}})}},copyCells:function(e,o){
var r=this.grid,n=r.store;if(n.getFeatures()["dojo.data.api.Write"]){if(e.min.row==o.min.row&&e.min.col==o.min.col)return;
var a,s,l,c,d=r.layout.cells,f=(e.max.row-e.min.row+1,[]);for(a=e.min.row,l=o.min.row;a<=e.max.row;++a,
++l)for(s=e.min.col,c=o.min.col;s<=e.max.col;++s,++c){for(;d[s]&&d[s].hidden;)++s;
for(;d[c]&&d[c].hidden;)++c;f.push({r:l,c:c,v:d[s].get(a,r._by_idx[a].item)})}if(this._hasIdentity(f))return void console.warn("Can not write to identity!");
i.forEach(f,function(e){n.setValue(r._by_idx[e.r].item,d[e.c].field,e.v)}),n.save({
onComplete:function(){setTimeout(function(){t.publish("dojox/grid/rearrange/copy/"+r.id,["cell",{
from:e,to:o}])},0)}})}},changeCells:function(e,o,r){var n=this.grid,a=n.store;if(a.getFeatures()["dojo.data.api.Write"]){
var s,l,c,d,f=e,u=n.layout.cells,m=f.layout.cells,h=(o.max.row-o.min.row+1,[]);for(s=o.min.row,
c=r.min.row;s<=o.max.row;++s,++c)for(l=o.min.col,d=r.min.col;l<=o.max.col;++l,++d){
for(;m[l]&&m[l].hidden;)++l;for(;u[d]&&u[d].hidden;)++d;h.push({r:c,c:d,v:m[l].get(s,f._by_idx[s].item)
})}if(this._hasIdentity(h))return void console.warn("Can not write to identity!");
i.forEach(h,function(e){a.setValue(n._by_idx[e.r].item,u[e.c].field,e.v)}),a.save({
onComplete:function(){t.publish("dojox/grid/rearrange/change/"+n.id,["cell",r])}});
}},clearCells:function(e){var o=this.grid,r=o.store;if(r.getFeatures()["dojo.data.api.Write"]){
var n,a,s=o.layout.cells,l=(e.max.row-e.min.row+1,[]);for(n=e.min.row;n<=e.max.row;++n)for(a=e.min.col;a<=e.max.col;++a){
for(;s[a]&&s[a].hidden;)++a;l.push({r:n,c:a})}if(this._hasIdentity(l))return void console.warn("Can not write to identity!");
i.forEach(l,function(e){r.setValue(o._by_idx[e.r].item,s[e.c].field,"")}),r.save({
onComplete:function(){t.publish("dojox/grid/rearrange/change/"+o.id,["cell",e])}});
}},insertRows:function(e,r,n){try{var a,s=this.grid,l=s.store,c=s.rowCount,d={},f={
idx:0},u=[],m=0>n,h=this,g=r.length;if(m)n=0;else for(a=n;a<s.rowCount;++a)d[a]=a+g;
if(l.getFeatures()["dojo.data.api.Write"]){if(e){var w,p,v=e,x=v.store;if(m)p=i.filter(i.map(s.layout.cells,function(e){
return e.field}),function(e){return e});else{for(a=0;!w;++a)w=s._by_idx[a];p=l.getAttributes(w.item);
}var y=[];i.forEach(r,function(e,o){var r={},t=v._by_idx[e];if(t){i.forEach(p,function(e){
r[e]=x.getValue(t.item,e)}),r=h.args.setIdentifierForNewItem(r,l,c+f.idx)||r;try{
l.newItem(r),u.push(n+o),d[c+f.idx]=n+o,++f.idx}catch(a){console.log("insertRows newItem:",a,r);
}}else y.push(e)})}else{if(!r.length||!o.isObject(r[0]))return;i.forEach(r,function(e,o){
var r=h.args.setIdentifierForNewItem(e,l,c+f.idx)||e;try{l.newItem(r),u.push(n+o),
d[c+f.idx]=n+o,++f.idx}catch(i){console.log("insertRows newItem:",i,r)}})}s.layer("rowmap").setMapping(d),
l.save({onComplete:function(){s._refresh(),setTimeout(function(){t.publish("dojox/grid/rearrange/insert/"+s.id,["row",u]);
},0)}})}}catch(_){console.log("insertRows:",_)}},removeRows:function(e){var o=this.grid,r=o.store;
try{i.forEach(i.map(e,function(e){return o._by_idx[e]}),function(e){e&&r.deleteItem(e.item);
}),r.save({onComplete:function(){t.publish("dojox/grid/rearrange/remove/"+o.id,["row",e]);
}})}catch(n){console.log("removeRows:",n)}},_getPageInfo:function(){var e,o,r,t=this.grid.scroller,n=t.page,a=t.page,s=t.firstVisibleRow,l=t.lastVisibleRow,c=t.rowsPerPage,d=t.pageNodes[0],f=[];
return i.forEach(d,function(i,t){i&&(r=!1,e=t*c,o=(t+1)*c-1,s>=e&&o>=s&&(n=t,r=!0),
l>=e&&o>=l&&(a=t,r=!0),!r&&(e>l||s>o)&&f.push(t))}),{topPage:n,bottomPage:a,invalidPages:f
}}});return n.registerPlugin(l),l});