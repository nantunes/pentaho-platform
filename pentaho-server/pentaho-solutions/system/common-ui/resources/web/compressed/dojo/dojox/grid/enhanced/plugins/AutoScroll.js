define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/window","../_Plugin","../../_RowSelector","../../EnhancedGrid"],function(o,t,i,n,r,e,l,s){
var c=o("dojox.grid.enhanced.plugins.AutoScroll",e,{name:"autoScroll",autoScrollInterval:1e3,
autoScrollMargin:30,constructor:function(o,t){this.grid=o,this.readyForAutoScroll=!1,
this._scrolling=!1,t=i.isObject(t)?t:{},"interval"in t&&(this.autoScrollInterval=t.interval),
"margin"in t&&(this.autoScrollMargin=t.margin),this._initEvents(),this._mixinGrid();
},_initEvents:function(){var o=this.grid;this.connect(o,"onCellMouseDown",function(){
this.readyForAutoScroll=!0}),this.connect(o,"onHeaderCellMouseDown",function(){this.readyForAutoScroll=!0;
}),this.connect(o,"onRowSelectorMouseDown",function(){this.readyForAutoScroll=!0}),
this.connect(r.doc,"onmouseup",function(o){this._manageAutoScroll(!0),this.readyForAutoScroll=!1;
}),this.connect(r.doc,"onmousemove",function(i){if(this.readyForAutoScroll){this._event=i;
var r=n.position(o.domNode),e=o._getHeaderHeight(),s=this.autoScrollMargin,c=i.clientY,a=i.clientX,u=r.y,h=r.x,d=r.h,f=r.w;
if(a>=h&&h+f>=a){if(c>=u+e&&u+e+s>c)return void this._manageAutoScroll(!1,!0,!1);if(c>u+d-s&&u+d>=c)return void this._manageAutoScroll(!1,!0,!0);
if(c>=u&&u+d>=c){var _=t.some(o.views.views,function(o,t){if(o instanceof l)return!1;
var i=n.position(o.domNode);return a<i.x+s&&a>=i.x?(this._manageAutoScroll(!1,!1,!1,o),
!0):a>i.x+i.w-s&&a<i.x+i.w?(this._manageAutoScroll(!1,!1,!0,o),!0):!1},this);if(_)return;
}}this._manageAutoScroll(!0)}})},_mixinGrid:function(){var o=this.grid;o.onStartAutoScroll=function(){},
o.onEndAutoScroll=function(){}},_fireEvent:function(o,t){var i=this.grid;switch(o){
case"start":i.onStartAutoScroll.apply(i,t);break;case"end":i.onEndAutoScroll.apply(i,t);
}},_manageAutoScroll:function(o,t,n,r){o?(this._scrolling=!1,clearInterval(this._handler)):this._scrolling||(this._scrolling=!0,
this._fireEvent("start",[t,n,r]),this._autoScroll(t,n,r),this._handler=setInterval(i.hitch(this,"_autoScroll",t,n,r),this.autoScrollInterval));
},_autoScroll:function(o,t,i){var n=this.grid,r=null;if(o){var e=n.scroller.firstVisibleRow+(t?1:-1);
e>=0&&e<n.rowCount&&(n.scrollToRow(e),r=e)}else r=this._scrollColumn(t,i);null!==r&&this._fireEvent("end",[o,t,i,r,this._event]);
},_scrollColumn:function(o,i){var r=i.scrollboxNode,e=null;if(r.clientWidth<r.scrollWidth){
var l,s,c,a,u=t.filter(this.grid.layout.cells,function(o){return!o.hidden}),h=n.position(i.domNode);
if(o){for(l=r.clientWidth,a=0;a<u.length;++a)if(c=n.position(u[a].getHeaderNode()),
s=c.x-h.x+c.w,s>l){e=u[a].index,r.scrollLeft+=s-l+10;break}}else for(l=0,a=u.length-1;a>=0;--a)if(c=n.position(u[a].getHeaderNode()),
s=c.x-h.x,l>s){e=u[a].index,r.scrollLeft+=s-l-10;break}}return e}});return s.registerPlugin(c),
c});