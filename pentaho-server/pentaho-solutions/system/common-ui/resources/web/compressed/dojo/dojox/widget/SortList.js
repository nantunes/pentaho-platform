dojo.provide("dojox.widget.SortList"),dojo.experimental("dojox.widget.SortList"),
dojo.require("dijit.layout._LayoutWidget"),dojo.require("dijit._Templated"),dojo.declare("dojox.widget.SortList",[dijit.layout._LayoutWidget,dijit._Templated],{
title:"",heading:"",descending:!0,selected:null,sortable:!0,store:"",key:"name",baseClass:"dojoxSortList",
templateString:dojo.cache("dojox.widget","SortList/SortList.html"),_addItem:function(t){
dojo.create("li",{innerHTML:this.store.getValue(t,this.key).replace(/</g,"&lt;")},this.containerNode);
},postCreate:function(){if(this.store){this.store=dojo.getObject(this.store);var t={
onItem:dojo.hitch(this,"_addItem"),onComplete:dojo.hitch(this,"onSort")};this.store.fetch(t);
}else this.onSort();this.inherited(arguments)},startup:function(){this.inherited(arguments),
this.heading&&(this.setTitle(this.heading),this.title=this.heading),setTimeout(dojo.hitch(this,"resize"),5),
this.sortable&&this.connect(this.titleNode,"onclick","onSort")},resize:function(){
this.inherited(arguments);var t=this._contentBox.h-dojo.style(this.titleNode,"height")-10;
this.bodyWrapper.style.height=Math.abs(t)+"px"},onSort:function(t){var e=dojo.query("li",this.domNode);
this.sortable&&(this.descending=!this.descending,dojo.addClass(this.titleNode,this.descending?"sortListDesc":"sortListAsc"),
dojo.removeClass(this.titleNode,this.descending?"sortListAsc":"sortListDesc"),e.sort(this._sorter),
this.descending&&e.reverse());var i=0;dojo.forEach(e,function(t){dojo[i++%2===0?"addClass":"removeClass"](t,"sortListItemOdd"),
this.containerNode.appendChild(t)},this)},_set:function(t){t.target!==this.bodyWrapper&&dojo.addClass(t.target,"sortListItemHover");
},_unset:function(t){dojo.removeClass(t.target,"sortListItemHover")},_handleClick:function(t){
dojo.toggleClass(t.target,"sortListItemSelected"),t.target.focus(),this._updateValues(t.target.innerHTML);
},_updateValues:function(){this._selected=dojo.query("li.sortListItemSelected",this.containerNode),
this.selected=[],dojo.forEach(this._selected,function(t){this.selected.push(t.innerHTML);
},this),this.onChanged(arguments)},_sorter:function(t,e){var i=t.innerHTML,o=e.innerHTML;
return i>o?1:o>i?-1:0},setTitle:function(t){this.focusNode.innerHTML=this.title=t;
},onChanged:function(){}});