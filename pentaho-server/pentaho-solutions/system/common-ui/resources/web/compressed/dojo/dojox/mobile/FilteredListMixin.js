define(["require","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/aspect","dijit/registry","./SearchBox","./ScrollableView","./viewRegistry"],function(e,t,i,o,r,l,s,a,h,n,c,d){
return i("dojox.mobile.FilteredListMixin",null,{filterBoxRef:null,placeHolder:"",
filterBoxVisible:!0,_filterBox:null,_createdFilterBox:null,_createdScrollableView:null,
startup:function(){if(!this._started){if(this.inherited(arguments),this.filterBoxRef){
if(this._filterBox=h.byId(this.filterBoxRef),!this._filterBox||!this._filterBox.isInstanceOf(n))throw new Error("Cannot find a widget of type dojox/mobile/SearchBox or subclass at the specified filterBoxRef: "+this.filterBoxRef);
this._filterBox.set("searchAttr",this.labelProperty?this.labelProperty:"label"),this._filterBox.placeHolder||this._filterBox.set("placeHolder",this.placeHolder),
this._filterBox.on("search",o.hitch(this,"_onFilter"))}else{this._filterBox=new n({
searchAttr:this.labelProperty?this.labelProperty:"label",ignoreCase:!0,incremental:!0,
onSearch:o.hitch(this,"_onFilter"),selectOnClick:!0,placeHolder:this.placeHolder}),
this._createdFilterBox=this._filterBox,this._createdScrollableView=new c;var e=this.domNode,t=this.domNode.parentNode;
t.replaceChild(this._createdScrollableView.domNode,this.domNode),s.place(e,this._createdScrollableView.containerNode);
var i=s.create("div");s.place(this._createdFilterBox.domNode,i),s.place(i,this._createdScrollableView.domNode,"before"),
this.filterBoxClass&&l.add(i,this.filterBoxClass),this._createdFilterBox.startup(),
this._createdScrollableView.startup(),this._createdScrollableView.resize()}var r=d.getEnclosingScrollable(this.domNode);
r&&this.connect(r,"onFlickAnimationEnd",o.hitch(this,function(){this._filterBox.focusNode.value||(this._previousUnfilteredScrollPos=r.getPos());
})),this.store?this._initStore():this._createStore(this._initStore)}},_setFilterBoxVisibleAttr:function(e){
this._set("filterBoxVisible",e),this._filterBox&&this._filterBox.domNode&&(this._filterBox.domNode.style.display=e?"":"none");
},_setPlaceHolderAttr:function(e){this._set("placeHolder",e),this._filterBox&&this._filterBox.set("placeHolder",e);
},getFilterBox:function(){return this._filterBox},getScrollableView:function(){return this._createdScrollableView;
},_initStore:function(){var t=this.store;t.get&&t.query?this._filterBox.store=t:e(["dojo/store/DataStore"],o.hitch(this,function(e){
t=new e({store:t}),this._filterBox.store=t}))},_createStore:function(r){e(["./_StoreListMixin","dojo/store/Memory"],o.hitch(this,function(e,l){
i.safeMixin(this,new e),this.append=!0,this.createListItem=function(e){return e.listItem;
},a.before(this,"generateList",function(){t.forEach(this.getChildren(),function(e){
e.domNode.parentNode.removeChild(e.domNode)})});var s=[],h=null;t.forEach(this.getChildren(),function(e){
h=e.label?e.label:e.domNode.innerText||e.domNode.textContent,s.push({label:h,listItem:e
})});var n={items:s},c=new l({idProperty:"label",data:n});this.store=null,this.query={},
this.setStore(c,this.query,this.queryOptions),o.hitch(this,r)()}))},_onFilter:function(e,t,i){
if(this.onFilter(e,t,i)!==!1){this.setQuery(t);var o=d.getEnclosingScrollable(this.domNode);
o&&o.scrollTo(this._filterBox.focusNode.value?{x:0,y:0}:this._previousUnfilteredScrollPos||{
x:0,y:0})}},onFilter:function(){},destroy:function(e){this.inherited(arguments),this._createdFilterBox&&(this._createdFilterBox.destroy(e),
this._createdFilterBox=null),this._createdScrollableView&&(this._createdScrollableView.destroy(e),
this._createdScrollableView=null)}})});