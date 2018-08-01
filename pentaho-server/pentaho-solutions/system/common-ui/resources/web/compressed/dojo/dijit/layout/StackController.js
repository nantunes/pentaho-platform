define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","dojo/topic","../focus","../registry","../_Widget","../_TemplatedMixin","../_Container","../form/ToggleButton","dojo/touch","dojo/i18n!../nls/common"],function(t,e,i,o,n,a,s,d,r,l,h,c,u,b){
var C=e("dijit.layout._StackButton",b,{tabIndex:"-1",closeButton:!1,_aria_attr:"aria-selected",
buildRendering:function(t){this.inherited(arguments),(this.focusNode||this.domNode).setAttribute("role","tab");
}}),p=e("dijit.layout.StackController",[h,c,u],{baseClass:"dijitStackController",
templateString:"<span role='tablist' data-dojo-attach-event='onkeydown'></span>",
containerId:"",buttonWidget:C,buttonWidgetCloseClass:"dijitStackCloseButton",pane2button:function(t){
return l.byId(this.id+"_"+t)},postCreate:function(){this.inherited(arguments),this.own(d.subscribe(this.containerId+"-startup",a.hitch(this,"onStartup")),d.subscribe(this.containerId+"-addChild",a.hitch(this,"onAddChild")),d.subscribe(this.containerId+"-removeChild",a.hitch(this,"onRemoveChild")),d.subscribe(this.containerId+"-selectChild",a.hitch(this,"onSelectChild")),d.subscribe(this.containerId+"-containerKeyDown",a.hitch(this,"onContainerKeyDown"))),
this.containerNode.dojoClick=!0,this.own(s(this.containerNode,"click",a.hitch(this,function(t){
var e=l.getEnclosingWidget(t.target);if(e!=this.containerNode&&!e.disabled&&e.page)for(var o=t.target;o!==this.containerNode;o=o.parentNode){
if(i.contains(o,this.buttonWidgetCloseClass)){this.onCloseButtonClick(e.page);break;
}if(o==e.domNode){this.onButtonClick(e.page);break}}})))},onStartup:function(e){this.textDir=e.textDir,
t.forEach(e.children,this.onAddChild,this),e.selected&&this.onSelectChild(e.selected);
var i=l.byId(this.containerId).containerNode,o=a.hitch(this,"pane2button"),n={title:"label",
showtitle:"showLabel",iconclass:"iconClass",closable:"closeButton",tooltip:"title",
disabled:"disabled",textdir:"textdir"},d=function(t,e){return s(i,"attrmodified-"+t,function(t){
var i=o(t.detail&&t.detail.widget&&t.detail.widget.id);i&&i.set(e,t.detail.newValue);
})};for(var r in n)this.own(d(r,n[r]))},destroy:function(t){this.destroyDescendants(t),
this.inherited(arguments)},onAddChild:function(t,e){var i=a.isString(this.buttonWidget)?a.getObject(this.buttonWidget):this.buttonWidget,o=new i({
id:this.id+"_"+t.id,name:this.id+"_"+t.id,label:t.title,disabled:t.disabled,ownerDocument:this.ownerDocument,
dir:t.dir,lang:t.lang,textDir:t.textDir||this.textDir,showLabel:t.showTitle,iconClass:t.iconClass,
closeButton:t.closable,title:t.tooltip,page:t});this.addChild(o,e),t.controlButton=o,
this._currentChild||this.onSelectChild(t);var n=t._wrapper.getAttribute("aria-labelledby")?t._wrapper.getAttribute("aria-labelledby")+" "+o.id:o.id;
t._wrapper.removeAttribute("aria-label"),t._wrapper.setAttribute("aria-labelledby",n);
},onRemoveChild:function(t){this._currentChild===t&&(this._currentChild=null);var e=this.pane2button(t.id);
e&&(this.removeChild(e),e.destroy()),delete t.controlButton},onSelectChild:function(t){
if(t){if(this._currentChild){var e=this.pane2button(this._currentChild.id);e.set("checked",!1),
e.focusNode.setAttribute("tabIndex","-1")}var i=this.pane2button(t.id);i.set("checked",!0),
this._currentChild=t,i.focusNode.setAttribute("tabIndex","0");l.byId(this.containerId);
}},onButtonClick:function(t){var e=this.pane2button(t.id);r.focus(e.focusNode),this._currentChild&&this._currentChild.id===t.id&&e.set("checked",!0);
var i=l.byId(this.containerId);i.selectChild(t)},onCloseButtonClick:function(t){var e=l.byId(this.containerId);
if(e.closeChild(t),this._currentChild){var i=this.pane2button(this._currentChild.id);
i&&r.focus(i.focusNode||i.domNode)}},adjacent:function(e){this.isLeftToRight()||this.tabPosition&&!/top|bottom/.test(this.tabPosition)||(e=!e);
var i,o=this.getChildren(),n=t.indexOf(o,this.pane2button(this._currentChild.id)),a=o[n];
do n=(n+(e?1:o.length-1))%o.length,i=o[n];while(i.disabled&&i!=a);return i},onkeydown:function(t,e){
if(!this.disabled&&!t.altKey){var i=null;if(t.ctrlKey||!t._djpage){switch(t.keyCode){
case n.LEFT_ARROW:case n.UP_ARROW:t._djpage||(i=!1);break;case n.PAGE_UP:t.ctrlKey&&(i=!1);
break;case n.RIGHT_ARROW:case n.DOWN_ARROW:t._djpage||(i=!0);break;case n.PAGE_DOWN:
t.ctrlKey&&(i=!0);break;case n.HOME:for(var o=this.getChildren(),a=0;a<o.length;a++){
var s=o[a];if(!s.disabled){this.onButtonClick(s.page);break}}t.stopPropagation(),
t.preventDefault();break;case n.END:for(var o=this.getChildren(),a=o.length-1;a>=0;a--){
var s=o[a];if(!s.disabled){this.onButtonClick(s.page);break}}t.stopPropagation(),
t.preventDefault();break;case n.DELETE:case"W".charCodeAt(0):this._currentChild.closable&&(t.keyCode==n.DELETE||t.ctrlKey)&&(this.onCloseButtonClick(this._currentChild),
t.stopPropagation(),t.preventDefault());break;case n.TAB:t.ctrlKey&&(this.onButtonClick(this.adjacent(!t.shiftKey).page),
t.stopPropagation(),t.preventDefault())}null!==i&&(this.onButtonClick(this.adjacent(i).page),
t.stopPropagation(),t.preventDefault())}}},onContainerKeyDown:function(t){t.e._djpage=t.page,
this.onkeydown(t.e)}});return p.StackButton=C,p});