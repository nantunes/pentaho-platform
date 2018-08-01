define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_Contained","dijit/Toolbar","dijit/Menu","dijit/MenuItem","dijit/MenuSeparator","dijit/_editor/_Plugin","dijit/form/Button","dijit/form/ComboButton","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/string","dojo/i18n!dojox/editor/plugins/nls/Breadcrumb"],function(e,t,i,s,n,d,o,a,l,r,u){
e.experimental("dojox.editor.plugins.Breadcrumb");var h=e.declare("dojox.editor.plugins._BreadcrumbMenuTitle",[s,n,d],{
templateString:'<tr><td dojoAttachPoint="title" colspan="4" class="dijitToolbar" style="font-weight: bold; padding: 3px;"></td></tr>',
menuTitle:"",postCreate:function(){e.setSelectable(this.domNode,!1);var t=this.id+"_text";
this.domNode.setAttribute("aria-labelledby",t)},_setMenuTitleAttr:function(e){this.title.innerHTML=e;
},_getMenuTitleAttr:function(e){return this.title.innerHTML}}),m=e.declare("dojox.editor.plugins.Breadcrumb",u,{
_menu:null,breadcrumbBar:null,setEditor:function(i){this.editor=i,this._buttons=[],
this.breadcrumbBar=new t.Toolbar;var s=e.i18n.getLocalization("dojox.editor.plugins","Breadcrumb");
this._titleTemplate=s.nodeActions,e.place(this.breadcrumbBar.domNode,i.footer),this.editor.onLoadDeferred.addCallback(e.hitch(this,function(){
this._menu=new t.Menu({}),e.addClass(this.breadcrumbBar.domNode,"dojoxEditorBreadcrumbArrow");
var n=new t.form.ComboButton({showLabel:!0,label:"body",_selNode:i.editNode,dropDown:this._menu,
onClick:e.hitch(this,function(){this._menuTarget=i.editNode,this._selectContents();
})});this._menuTitle=new h({menuTitle:s.nodeActions}),this._selCMenu=new t.MenuItem({
label:s.selectContents,onClick:e.hitch(this,this._selectContents)}),this._delCMenu=new t.MenuItem({
label:s.deleteContents,onClick:e.hitch(this,this._deleteContents)}),this._selEMenu=new t.MenuItem({
label:s.selectElement,onClick:e.hitch(this,this._selectElement)}),this._delEMenu=new t.MenuItem({
label:s.deleteElement,onClick:e.hitch(this,this._deleteElement)}),this._moveSMenu=new t.MenuItem({
label:s.moveStart,onClick:e.hitch(this,this._moveCToStart)}),this._moveEMenu=new t.MenuItem({
label:s.moveEnd,onClick:e.hitch(this,this._moveCToEnd)}),this._menu.addChild(this._menuTitle),
this._menu.addChild(this._selCMenu),this._menu.addChild(this._delCMenu),this._menu.addChild(new t.MenuSeparator({})),
this._menu.addChild(this._selEMenu),this._menu.addChild(this._delEMenu),this._menu.addChild(new t.MenuSeparator({})),
this._menu.addChild(this._moveSMenu),this._menu.addChild(this._moveEMenu),n._ddConnect=e.connect(n,"openDropDown",e.hitch(this,function(){
this._menuTarget=n._selNode,this._menuTitle.set("menuTitle",e.string.substitute(this._titleTemplate,{
nodeName:"&lt;body&gt;"})),this._selEMenu.set("disabled",!0),this._delEMenu.set("disabled",!0),
this._selCMenu.set("disabled",!1),this._delCMenu.set("disabled",!1),this._moveSMenu.set("disabled",!1),
this._moveEMenu.set("disabled",!1)})),this.breadcrumbBar.addChild(n),this.connect(this.editor,"onNormalizedDisplayChanged","updateState");
})),this.breadcrumbBar.startup(),e.isIE&&setTimeout(e.hitch(this,function(){this.breadcrumbBar.domNode.className=this.breadcrumbBar.domNode.className;
}),100)},_selectContents:function(){if(this.editor.focus(),this._menuTarget){var e=this._menuTarget.tagName.toLowerCase();
switch(e){case"br":case"hr":case"img":case"input":case"base":case"meta":case"area":
case"basefont":break;default:try{this.editor._sCall("collapse",[null]),this.editor._sCall("selectElementChildren",[this._menuTarget]),
this.editor.onDisplayChanged()}catch(t){}}}},_deleteContents:function(){this._menuTarget&&(this.editor.beginEditing(),
this._selectContents(),this.editor._sCall("remove",[this._menuTarget]),this.editor.endEditing(),
this._updateBreadcrumb(),this.editor.onDisplayChanged())},_selectElement:function(){
this.editor.focus(),this._menuTarget&&(this.editor._sCall("collapse",[null]),this.editor._sCall("selectElement",[this._menuTarget]),
this.editor.onDisplayChanged())},_deleteElement:function(){this._menuTarget&&(this.editor.beginEditing(),
this._selectElement(),this.editor._sCall("remove",[this._menuTarget]),this.editor.endEditing(),
this._updateBreadcrumb(),this.editor.onDisplayChanged())},_moveCToStart:function(){
this.editor.focus(),this._menuTarget&&(this._selectContents(),this.editor._sCall("collapse",[!0]));
},_moveCToEnd:function(){this.editor.focus(),this._menuTarget&&(this._selectContents(),
this.editor._sCall("collapse",[!1]))},_updateBreadcrumb:function(){var i=this.editor;
if(i.window){var s=t.range.getSelection(i.window);if(s&&s.rangeCount>0){var n=s.getRangeAt(0),d=i._sCall("getSelectedElement",[])||n.startContainer,o=[];
if(d&&d.ownerDocument===i.document){for(;d&&d!==i.editNode&&d!=i.document.body&&d!=i.document;)1===d.nodeType&&o.push({
type:d.tagName.toLowerCase(),node:d}),d=d.parentNode;for(o=o.reverse();this._buttons.length;){
var a=this._buttons.pop();e.disconnect(a._ddConnect),this.breadcrumbBar.removeChild(a);
}this._buttons=[];var l,r=this;for(l=0;l<o.length;l++){var u=o[l],h=new t.form.ComboButton({
showLabel:!0,label:u.type,_selNode:u.node,dropDown:this._menu,onClick:function(){
r._menuTarget=this._selNode,r._selectContents()}});h._ddConnect=e.connect(h,"openDropDown",e.hitch(h,function(){
r._menuTarget=this._selNode;var t=r._menuTarget.tagName.toLowerCase(),i=e.string.substitute(r._titleTemplate,{
nodeName:"&lt;"+t+"&gt;"});switch(r._menuTitle.set("menuTitle",i),t){case"br":case"hr":
case"img":case"input":case"base":case"meta":case"area":case"basefont":r._selCMenu.set("disabled",!0),
r._delCMenu.set("disabled",!0),r._moveSMenu.set("disabled",!0),r._moveEMenu.set("disabled",!0),
r._selEMenu.set("disabled",!1),r._delEMenu.set("disabled",!1);break;default:r._selCMenu.set("disabled",!1),
r._delCMenu.set("disabled",!1),r._selEMenu.set("disabled",!1),r._delEMenu.set("disabled",!1),
r._moveSMenu.set("disabled",!1),r._moveEMenu.set("disabled",!1)}})),this._buttons.push(h),
this.breadcrumbBar.addChild(h)}e.isIE&&(this.breadcrumbBar.domNode.className=this.breadcrumbBar.domNode.className);
}}}},updateState:function(){if("none"===e.style(this.editor.iframe,"display")||this.get("disabled"))e.style(this.breadcrumbBar.domNode,"display","none");else{
"none"===e.style(this.breadcrumbBar.domNode,"display")&&e.style(this.breadcrumbBar.domNode,"display","block"),
this._updateBreadcrumb();var t=e.marginBox(this.editor.domNode);this.editor.resize({
h:t.h})}},destroy:function(){this.breadcrumbBar&&(this.breadcrumbBar.destroyRecursive(),
this.breadcrumbBar=null),this._menu&&(this._menu.destroyRecursive(),delete this._menu),
this._buttons=null,delete this.editor.breadcrumbBar,this.inherited(arguments)}});return m._BreadcrumbMenuTitle=h,
e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){if(!e.plugin){var t=e.args.name.toLowerCase();
"breadcrumb"===t&&(e.plugin=new m({}))}}),m});