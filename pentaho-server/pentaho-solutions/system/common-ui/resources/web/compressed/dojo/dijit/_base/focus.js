define(["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus","../selection","../main"],function(o,e,n,r,i,t,a,c){
var u={_curFocus:null,_prevFocus:null,isCollapsed:function(){return c.getBookmark().isCollapsed;
},getBookmark:function(){var o=i.global==window?a:new a.SelectionManager(i.global);
return o.getBookmark()},moveToBookmark:function(o){var e=i.global==window?a:new a.SelectionManager(i.global);
return e.moveToBookmark(o)},getFocus:function(o,n){var r=!t.curNode||o&&e.isDescendant(t.curNode,o.domNode)?c._prevFocus:t.curNode;
return{node:r,bookmark:r&&r==t.curNode&&i.withGlobal(n||i.global,c.getBookmark),openedForWindow:n
}},_activeStack:[],registerIframe:function(o){return t.registerIframe(o)},unregisterIframe:function(o){
o&&o.remove()},registerWin:function(o,e){return t.registerWin(o,e)},unregisterWin:function(o){
o&&o.remove()}};return t.focus=function(o){if(o){var e="node"in o?o.node:o,n=o.bookmark,r=o.openedForWindow,a=n?n.isCollapsed:!1;
if(e){var u="iframe"==e.tagName.toLowerCase()?e.contentWindow:e;if(u&&u.focus)try{
u.focus()}catch(l){}t._onFocusNode(e)}if(n&&i.withGlobal(r||i.global,c.isCollapsed)&&!a){
r&&r.focus();try{i.withGlobal(r||i.global,c.moveToBookmark,null,[n])}catch(s){}}}
},t.watch("curNode",function(o,e,n){c._curFocus=n,c._prevFocus=e,n&&r.publish("focusNode",n);
}),t.watch("activeStack",function(o,e,n){c._activeStack=n}),t.on("widget-blur",function(o,e){
r.publish("widgetBlur",o,e)}),t.on("widget-focus",function(o,e){r.publish("widgetFocus",o,e);
}),n.mixin(c,u),c});