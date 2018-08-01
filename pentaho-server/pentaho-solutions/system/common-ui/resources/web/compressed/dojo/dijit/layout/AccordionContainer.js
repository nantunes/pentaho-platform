define(["require","dojo/_base/array","dojo/_base/declare","dojo/_base/fx","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/topic","../focus","../_base/manager","dojo/ready","../_Widget","../_Container","../_TemplatedMixin","../_CssStateMixin","./StackContainer","./ContentPane","dojo/text!./templates/AccordionButton.html","../a11yclick"],function(t,e,i,n,o,d,s,r,a,c,h,l,u,g,p,_,f,W,b,m,y,C,N){
var w=i("dijit.layout._AccordionButton",[f,b,m],{templateString:N,label:"",_setLabelAttr:{
node:"titleTextNode",type:"innerHTML"},title:"",_setTitleAttr:{node:"titleTextNode",
type:"attribute",attribute:"title"},iconClassAttr:"",_setIconClassAttr:{node:"iconNode",
type:"class"},baseClass:"dijitAccordionTitle",getParent:function(){return this.parent;
},buildRendering:function(){this.inherited(arguments);var t=this.id.replace(" ","_");
d.set(this.titleTextNode,"id",t+"_title"),this.focusNode.setAttribute("aria-labelledby",d.get(this.titleTextNode,"id")),
o.setSelectable(this.domNode,!1)},getTitleHeight:function(){return a.getMarginSize(this.domNode).h;
},_onTitleClick:function(){var t=this.getParent();t.selectChild(this.contentWidget,!0),
g.focus(this.focusNode)},_onTitleKeyDown:function(t){return this.getParent()._onKeyDown(t,this.contentWidget);
},_setSelectedAttr:function(t){this._set("selected",t),this.focusNode.setAttribute("aria-expanded",t?"true":"false"),
this.focusNode.setAttribute("aria-selected",t?"true":"false"),this.focusNode.setAttribute("tabIndex",t?"0":"-1");
}});l("dojo-bidi")&&w.extend({_setLabelAttr:function(t){this._set("label",t),d.set(this.titleTextNode,"innerHTML",t),
this.applyTextDir(this.titleTextNode)},_setTitleAttr:function(t){this._set("title",t),
d.set(this.titleTextNode,"title",t),this.applyTextDir(this.titleTextNode)}});var x=i("dijit.layout._AccordionInnerContainer"+(l("dojo-bidi")?"_NoBidi":""),[f,m],{
baseClass:"dijitAccordionInnerContainer",isLayoutContainer:!0,buildRendering:function(){
this.domNode=r.place("<div class='"+this.baseClass+"' role='presentation'>",this.contentWidget.domNode,"after");
var t=this.contentWidget,e=h.isString(this.buttonWidget)?h.getObject(this.buttonWidget):this.buttonWidget;
this.button=t._buttonWidget=new e({contentWidget:t,label:t.title,title:t.tooltip,
dir:t.dir,lang:t.lang,textDir:t.textDir||this.textDir,iconClass:t.iconClass,id:t.id+"_button",
parent:this.parent}).placeAt(this.domNode),this.containerNode=r.place("<div class='dijitAccordionChildWrapper' role='tabpanel' style='display:none'>",this.domNode),
this.containerNode.setAttribute("aria-labelledby",this.button.id),r.place(this.contentWidget.domNode,this.containerNode);
},postCreate:function(){this.inherited(arguments);var t=this.button,e=this.contentWidget;
this._contentWidgetWatches=[e.watch("title",h.hitch(this,function(e,i,n){t.set("label",n);
})),e.watch("tooltip",h.hitch(this,function(e,i,n){t.set("title",n)})),e.watch("iconClass",h.hitch(this,function(e,i,n){
t.set("iconClass",n)}))]},_setSelectedAttr:function(t){if(this._set("selected",t),
this.button.set("selected",t),t){var e=this.contentWidget;e.onSelected&&e.onSelected();
}},startup:function(){this.contentWidget.startup()},destroy:function(){this.button.destroyRecursive(),
e.forEach(this._contentWidgetWatches||[],function(t){t.unwatch()}),delete this.contentWidget._buttonWidget,
delete this.contentWidget._wrapperWidget,this.inherited(arguments)},destroyDescendants:function(t){
this.contentWidget.destroyRecursive(t)}});l("dojo-bidi")&&(x=i("dijit.layout._AccordionInnerContainer",x,{
postCreate:function(){this.inherited(arguments);var t=this.button;this._contentWidgetWatches.push(this.contentWidget.watch("textDir",function(e,i,n){
t.set("textDir",n)}))}}));var A=i("dijit.layout.AccordionContainer",y,{duration:p.defaultDuration,
buttonWidget:w,baseClass:"dijitAccordionContainer",buildRendering:function(){this.inherited(arguments),
this.domNode.style.overflow="hidden",this.domNode.setAttribute("role","tablist")},
startup:function(){this._started||(this.inherited(arguments),this.selectedChildWidget&&this.selectedChildWidget._wrapperWidget.set("selected",!0));
},layout:function(){var t=this.selectedChildWidget;if(t){var i=t._wrapperWidget.domNode,n=a.getMarginExtents(i),o=a.getPadBorderExtents(i),d=t._wrapperWidget.containerNode,s=a.getMarginExtents(d),r=a.getPadBorderExtents(d),c=this._contentBox,h=0;
e.forEach(this.getChildren(),function(e){e!=t&&(h+=a.getMarginSize(e._wrapperWidget.domNode).h);
}),this._verticalSpace=c.h-h-n.h-o.h-s.h-r.h-t._buttonWidget.getTitleHeight(),this._containerContentBox={
h:this._verticalSpace,w:this._contentBox.w-n.w-o.w-s.w-r.w},t&&t.resize(this._containerContentBox);
}},_setupChild:function(t){t._wrapperWidget=x({contentWidget:t,buttonWidget:this.buttonWidget,
id:t.id+"_wrapper",dir:t.dir,lang:t.lang,textDir:t.textDir||this.textDir,parent:this
}),this.inherited(arguments),r.place(t.domNode,t._wrapper,"replace")},removeChild:function(t){
t._wrapperWidget&&(r.place(t.domNode,t._wrapperWidget.domNode,"after"),t._wrapperWidget.destroy(),
delete t._wrapperWidget),s.remove(t.domNode,"dijitHidden"),this.inherited(arguments);
},getChildren:function(){return e.map(this.inherited(arguments),function(t){return"dijit.layout._AccordionInnerContainer"==t.declaredClass?t.contentWidget:t;
},this)},destroy:function(){this._animation&&this._animation.stop(),e.forEach(this.getChildren(),function(t){
t._wrapperWidget?t._wrapperWidget.destroy():t.destroyRecursive()}),this.inherited(arguments);
},_showChild:function(t){return t._wrapperWidget.containerNode.style.display="block",
this.inherited(arguments)},_hideChild:function(t){t._wrapperWidget.containerNode.style.display="none",
this.inherited(arguments)},_transition:function(t,e,i){l("ie")<8&&(i=!1),this._animation&&(this._animation.stop(!0),
delete this._animation);var o=this;if(t){t._wrapperWidget.set("selected",!0);var d=this._showChild(t);
this.doLayout&&t.resize&&t.resize(this._containerContentBox)}if(e&&(e._wrapperWidget.set("selected",!1),
i||this._hideChild(e)),i){var s=t._wrapperWidget.containerNode,r=e._wrapperWidget.containerNode,c=t._wrapperWidget.containerNode,h=a.getMarginExtents(c),u=a.getPadBorderExtents(c),g=h.h+u.h;
r.style.height=o._verticalSpace-g+"px",this._animation=new n.Animation({node:s,duration:this.duration,
curve:[1,this._verticalSpace-g-1],onAnimate:function(t){t=Math.floor(t),s.style.height=t+"px",
r.style.height=o._verticalSpace-g-t+"px"},onEnd:function(){delete o._animation,s.style.height="auto",
e._wrapperWidget.containerNode.style.display="none",r.style.height="auto",o._hideChild(e);
}}),this._animation.onStop=this._animation.onEnd,this._animation.play()}return d},
_onKeyDown:function(t,e){if(!this.disabled&&!t.altKey&&(e||t.ctrlKey)){var i=t.keyCode;
e&&(i==c.LEFT_ARROW||i==c.UP_ARROW)||t.ctrlKey&&i==c.PAGE_UP?(this._adjacent(!1)._buttonWidget._onTitleClick(),
t.stopPropagation(),t.preventDefault()):(e&&(i==c.RIGHT_ARROW||i==c.DOWN_ARROW)||t.ctrlKey&&(i==c.PAGE_DOWN||i==c.TAB))&&(this._adjacent(!0)._buttonWidget._onTitleClick(),
t.stopPropagation(),t.preventDefault())}}});return l("dijit-legacy-requires")&&_(0,function(){
var e=["dijit/layout/AccordionPane"];t(e)}),A._InnerContainer=x,A._Button=w,A});