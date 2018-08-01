dojo.provide("dojox.mobile.app.List"),dojo.experimental("dojox.mobile.app.List"),
dojo.require("dojo.string"),dojo.require("dijit._WidgetBase"),function(){var e={};
dojo.declare("dojox.mobile.app.List",dijit._WidgetBase,{items:null,itemTemplate:"",
emptyTemplate:"",dividerTemplate:"",dividerFunction:null,labelDelete:"Delete",labelCancel:"Cancel",
controller:null,autoDelete:!0,enableDelete:!0,enableHold:!0,formatters:null,_templateLoadCount:0,
_mouseDownPos:null,baseClass:"list",constructor:function(){this._checkLoadComplete=dojo.hitch(this,this._checkLoadComplete),
this._replaceToken=dojo.hitch(this,this._replaceToken),this._postDeleteAnim=dojo.hitch(this,this._postDeleteAnim);
},postCreate:function(){var e=this;if(this.emptyTemplate&&this._templateLoadCount++,
this.itemTemplate&&this._templateLoadCount++,this.dividerTemplate&&this._templateLoadCount++,
this.connect(this.domNode,"onmousedown",function(t){var o=t;t.targetTouches&&t.targetTouches.length>0&&(o=t.targetTouches[0]);
var s=e._getRowNode(t.target);s&&(e._setDataInfo(s,t),e._selectRow(s),e._mouseDownPos={
x:o.pageX,y:o.pageY},e._dragThreshold=null)}),this.connect(this.domNode,"onmouseup",function(t){
t.targetTouches&&t.targetTouches.length>0&&(t=t.targetTouches[0]);var o=e._getRowNode(t.target);
o&&(e._setDataInfo(o,t),e._selectedRow&&e.onSelect(o._data,o._idx,o),this._deselectRow());
}),this.enableDelete&&this.connect(this.domNode,"mousemove",function(t){if(dojo.stopEvent(t),
e._selectedRow){var o=e._getRowNode(t.target);e.enableDelete&&o&&!e._deleting&&e.handleDrag(t);
}}),this.connect(this.domNode,"onclick",function(t){t.touches&&t.touches.length>0&&(t=t.touches[0]);
var o=e._getRowNode(t.target,!0);o&&e._setDataInfo(o,t)}),this.connect(this.domNode,"mouseout",function(t){
t.touches&&t.touches.length>0&&(t=t.touches[0]),t.target==e._selectedRow&&e._deselectRow();
}),!this.itemTemplate)throw Error("An item template must be provided to "+this.declaredClass);
this._loadTemplate(this.itemTemplate,"itemTemplate",this._checkLoadComplete),this.emptyTemplate&&this._loadTemplate(this.emptyTemplate,"emptyTemplate",this._checkLoadComplete),
this.dividerTemplate&&this._loadTemplate(this.dividerTemplate,"dividerTemplate",this._checkLoadComplete);
},handleDrag:function(e){var t=e;e.targetTouches&&e.targetTouches.length>0&&(t=e.targetTouches[0]);
var o=t.pageX-this._mouseDownPos.x,s=Math.abs(o);s>10&&!this._dragThreshold&&(this._dragThreshold=.6*dojo.marginBox(this._selectedRow).w,
this.autoDelete||this.createDeleteButtons(this._selectedRow)),this._selectedRow.style.left=(s>10?o:0)+"px",
this._dragThreshold&&this._dragThreshold<s&&this.preDelete(o)},handleDragCancel:function(){
this._deleting||(dojo.removeClass(this._selectedRow,"hold"),this._selectedRow.style.left=0,
this._mouseDownPos=null,this._dragThreshold=null,this._deleteBtns&&dojo.style(this._deleteBtns,"display","none"));
},preDelete:function(e){this._deleting=!0,dojo.animateProperty({node:this._selectedRow,
duration:400,properties:{left:{end:e+(e>0?1:-1)*this._dragThreshold*.8}},onEnd:dojo.hitch(this,function(){
this.autoDelete&&this.deleteRow(this._selectedRow)})}).play()},deleteRow:function(e){
dojo.style(e,{visibility:"hidden",minHeight:"0px"}),dojo.removeClass(e,"hold"),this._deleteAnimConn=this.connect(e,"webkitAnimationEnd",this._postDeleteAnim),
dojo.addClass(e,"collapsed")},_postDeleteAnim:function(e){this._deleteAnimConn&&(this.disconnect(this._deleteAnimConn),
this._deleteAnimConn=null);var t=this._selectedRow,o=t.nextSibling,s=t.previousSibling;
for(s&&s._isDivider&&(!o||o._isDivider)&&s.parentNode.removeChild(s),t.parentNode.removeChild(t),
this.onDelete(t._data,t._idx,this.items);o;)o._idx&&o._idx--,o=o.nextSibling;dojo.destroy(t),
dojo.query("> *:not(.buttons)",this.domNode).forEach(this.applyClass),this._deleting=!1,
this._deselectRow()},createDeleteButtons:function(e){var t=dojo.marginBox(e);dojo._abs(e,!0);
this._deleteBtns||(this._deleteBtns=dojo.create("div",{"class":"buttons"},this.domNode),
this.buttons=[],this.buttons.push(new dojox.mobile.Button({btnClass:"mblRedButton",
label:this.labelDelete})),this.buttons.push(new dojox.mobile.Button({btnClass:"mblBlueButton",
label:this.labelCancel})),dojo.place(this.buttons[0].domNode,this._deleteBtns),dojo.place(this.buttons[1].domNode,this._deleteBtns),
dojo.addClass(this.buttons[0].domNode,"deleteBtn"),dojo.addClass(this.buttons[1].domNode,"cancelBtn"),
this._handleButtonClick=dojo.hitch(this._handleButtonClick),this.connect(this._deleteBtns,"onclick",this._handleButtonClick)),
dojo.removeClass(this._deleteBtns,"fade out fast"),dojo.style(this._deleteBtns,{display:"",
width:t.w+"px",height:t.h+"px",top:e.offsetTop+"px",left:"0px"})},onDelete:function(e,t,o){
o.splice(t,1),o.length<1&&this.render()},cancelDelete:function(){this._deleting=!1,
this.handleDragCancel()},_handleButtonClick:function(e){e.touches&&e.touches.length>0&&(e=e.touches[0]);
var t=e.target;if(dojo.hasClass(t,"deleteBtn"))this.deleteRow(this._selectedRow);else{
if(!dojo.hasClass(t,"cancelBtn"))return;this.cancelDelete()}dojo.addClass(this._deleteBtns,"fade out");
},applyClass:function(e,t,o){dojo.removeClass(e,"first last"),0==t&&dojo.addClass(e,"first"),
t==o.length-1&&dojo.addClass(e,"last")},_setDataInfo:function(e,t){t.item=e._data,
t.index=e._idx},onSelect:function(e,t,o){},_selectRow:function(e){this._deleting&&this._selectedRow&&e!=this._selectedRow&&this.cancelDelete(),
dojo.hasClass(e,"row")&&((this.enableHold||this.enableDelete)&&dojo.addClass(e,"hold"),
this._selectedRow=e)},_deselectRow:function(){this._selectedRow&&!this._deleting&&(this.handleDragCancel(),
dojo.removeClass(this._selectedRow,"hold"),this._selectedRow=null)},_getRowNode:function(e,t){
for(;e&&!e._data&&e!=this.domNode;){if(!t&&dojo.hasClass(e,"noclick"))return null;
e=e.parentNode}return e==this.domNode?null:e},applyTemplate:function(e,t){return dojo._toDom(dojo.string.substitute(e,t,this._replaceToken,this.formatters||this));
},render:function(){dojo.query("> *:not(.buttons)",this.domNode).forEach(dojo.destroy),
this.items.length<1&&this.emptyTemplate?dojo.place(dojo._toDom(this.emptyTemplate),this.domNode,"first"):this.domNode.appendChild(this._renderRange(0,this.items.length)),
dojo.hasClass(this.domNode.parentNode,"mblRoundRect")&&dojo.addClass(this.domNode.parentNode,"mblRoundRectList");
var e=dojo.query("> .row",this.domNode);e.length>0&&(dojo.addClass(e[0],"first"),
dojo.addClass(e[e.length-1],"last"))},_renderRange:function(e,t){var o,s,i=[],d=document.createDocumentFragment();
for(e=Math.max(0,e),t=Math.min(t,this.items.length),s=e;t>s;s++)o=this.applyTemplate(this.itemTemplate,this.items[s]),
dojo.addClass(o,"row"),o._data=this.items[s],o._idx=s,i.push(o);if(this.dividerFunction&&this.dividerTemplate){
var l,n,a=null;for(s=e;t>s;s++)i[s]._data=this.items[s],i[s]._idx=s,l=this.dividerFunction(this.items[s]),
l&&l!=a&&(n=this.applyTemplate(this.dividerTemplate,{label:l,item:this.items[s]}),
n._isDivider=!0,d.appendChild(n),a=l),d.appendChild(i[s])}else for(s=e;t>s;s++)i[s]._data=this.items[s],
i[s]._idx=s,d.appendChild(i[s]);return d},_replaceToken:function(e,t){return"!"==t.charAt(0)&&(e=dojo.getObject(t.substr(1),!1,_this)),
"undefined"==typeof e?"":null==e?"":"!"==t.charAt(0)?e:e.toString().replace(/"/g,"&quot;");
},_checkLoadComplete:function(){this._templateLoadCount--,this._templateLoadCount<1&&this.get("items")&&this.render();
},_loadTemplate:function(t,o,s){if(!t)return void s();if(e[t])this.set(o,e[t]),s();else{
var i=this;dojo.xhrGet({url:t,sync:!1,handleAs:"text",load:function(d){e[t]=dojo.trim(d),
i.set(o,e[t]),s()}})}},_setFormattersAttr:function(e){this.formatters=e},_setItemsAttr:function(e){
this.items=e||[],this._templateLoadCount<1&&e&&this.render()},destroy:function(){
this.buttons&&(dojo.forEach(this.buttons,function(e){e.destroy()}),this.buttons=null),
this.inherited(arguments)}})}();