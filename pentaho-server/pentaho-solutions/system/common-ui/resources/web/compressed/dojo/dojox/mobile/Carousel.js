define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./lazyLoadUtils","./CarouselItem","./PageIndicator","./SwapView","require","dojo/has!dojo-bidi?dojox/mobile/bidi/Carousel"],function(e,t,i,s,o,n,d,r,h,a,l,c,u,m,f,g,C,b,N){
var p=i(n("dojo-bidi")?"dojox.mobile.NonBidiCarousel":"dojox.mobile.Carousel",[u,c,l],{
numVisible:2,itemWidth:0,title:"",pageIndicator:!0,navButton:!1,height:"",selectable:!0,
baseClass:"mblCarousel",buildRendering:function(){this.containerNode=r.create("div",{
className:"mblCarouselPages"}),this.inherited(arguments);var e;if(this.srcNodeRef)for(e=0,
len=this.srcNodeRef.childNodes.length;e<len;e++)this.containerNode.appendChild(this.srcNodeRef.firstChild);
this.headerNode=r.create("div",{className:"mblCarouselHeaderBar"},this.domNode),this.navButton&&(this.btnContainerNode=r.create("div",{
className:"mblCarouselBtnContainer"},this.headerNode),h.set(this.btnContainerNode,"float","right"),
this.prevBtnNode=r.create("button",{className:"mblCarouselBtn",title:"Previous",innerHTML:"&lt;"
},this.btnContainerNode),this.nextBtnNode=r.create("button",{className:"mblCarouselBtn",
title:"Next",innerHTML:"&gt;"},this.btnContainerNode),this._prevHandle=this.connect(this.prevBtnNode,"onclick","onPrevBtnClick"),
this._nextHandle=this.connect(this.nextBtnNode,"onclick","onNextBtnClick")),this.pageIndicator&&(this.title||(this.title="&nbsp;"),
this.piw=new g,this.headerNode.appendChild(this.piw.domNode)),this.titleNode=r.create("div",{
className:"mblCarouselTitle"},this.headerNode),this.domNode.appendChild(this.containerNode),
this.subscribe("/dojox/mobile/viewChanged","handleViewChanged"),this.connect(this.domNode,"onclick","_onClick"),
this.connect(this.domNode,"onkeydown","_onClick"),this._dragstartHandle=this.connect(this.domNode,"ondragstart",s.stop),
this.selectedItemIndex=-1,this.items=[]},startup:function(){if(!this._started){var t;
if("inherit"===this.height?this.domNode.offsetParent&&(t=this.domNode.offsetParent.offsetHeight+"px"):this.height&&(t=this.height),
t&&(this.domNode.style.height=t),this.store){if(!this.setStore)throw new Error("Use StoreCarousel or DataCarousel instead of Carousel.");
var i=this.store;this.store=null,this.setStore(i,this.query,this.queryOptions)}else this.resizeItems();
this.inherited(arguments),this.currentView=e.filter(this.getChildren(),function(e){
return e.isVisible()})[0]}},resizeItems:function(){var t,i,s,o=0,r=this.domNode.offsetHeight-(this.headerNode?this.headerNode.offsetHeight:0),a=n("ie")<10?5/this.numVisible-1:5/this.numVisible;
e.forEach(this.getChildren(),function(e){if(e instanceof C){e.lazy||(e._instantiated=!0);
var n=e.containerNode.childNodes;for(t=0,len=n.length;t<len;t++)i=n[t],1===i.nodeType&&(s=this.items[o]||{},
h.set(i,{width:s.width||90/this.numVisible+"%",height:s.height||r+"px",margin:"0 "+(s.margin||a+"%")
}),d.add(i,"mblCarouselSlot"),o++)}},this),this.piw&&(this.piw.refId=this.containerNode.firstChild,
this.piw.reset())},resize:function(){if(this.itemWidth){var e=Math.floor(this.domNode.offsetWidth/this.itemWidth);
e!==this.numVisible&&(this.selectedItemIndex=this.getIndexByItemWidget(this.selectedItem),
this.numVisible=e,this.items.length>0&&(this.onComplete(this.items),this.select(this.selectedItemIndex)));
}},fillPages:function(){e.forEach(this.getChildren(),function(t,i){var s,o="";for(s=0;s<this.numVisible;s++){
var n,d,r="",h=i*this.numVisible+s,a={};h<this.items.length?(a=this.items[h],n=this.store.getValue(a,"type"),
n?(r=this.store.getValue(a,"props"),d=this.store.getValue(a,"mixins")):(n="dojox.mobile.CarouselItem",
e.forEach(["alt","src","headerText","footerText"],function(e){var t=this.store.getValue(a,e);
void 0!==t&&(r&&(r+=","),r+=e+':"'+t+'"')},this))):(n="dojox.mobile.CarouselItem",
r='src:"'+b.toUrl("dojo/resources/blank.gif")+'", className:"mblCarouselItemBlank"'),
o+='<div data-dojo-type="'+n+'"',r&&(o+=" data-dojo-props='"+r+"'"),d&&(o+=" data-dojo-mixins='"+d+"'"),
o+="></div>"}t.containerNode.innerHTML=o},this)},onComplete:function(t){e.forEach(this.getChildren(),function(e){
e instanceof C&&e.destroyRecursive()}),this.selectedItem=null,this.items=t;var i,s=Math.ceil(t.length/this.numVisible),o=this.domNode.offsetHeight-this.headerNode.offsetHeight,n=-1===this.selectedItemIndex?0:this.selectedItemIndex;
for(pg=Math.floor(n/this.numVisible),i=0;s>i;i++){var d=new C({height:o+"px",lazy:!0
});this.addChild(d),i===pg?(d.show(),this.currentView=d):d.hide()}this.fillPages(),
this.resizeItems();var r=this.getChildren(),h=pg-1<0?0:pg-1,a=pg+1>s-1?s-1:pg+1;for(i=h;a>=i;i++)this.instantiateView(r[i]);
},onError:function(){},onUpdate:function(){},onDelete:function(){},onSet:function(e,t,i,s){},
onNew:function(e,t){},onStoreClose:function(e){},getParentView:function(e){var t;for(t=a.getEnclosingWidget(e);t;t=t.getParent())if(t.getParent()instanceof C)return t;
return null},getIndexByItemWidget:function(t){if(!t)return-1;var i=t.getParent();return e.indexOf(this.getChildren(),i)*this.numVisible+e.indexOf(i.getChildren(),t);
},getItemWidgetByIndex:function(e){if(-1===e)return null;var t=this.getChildren()[Math.floor(e/this.numVisible)];
return t.getChildren()[e%this.numVisible]},onPrevBtnClick:function(){this.currentView&&this.currentView.goTo(-1);
},onNextBtnClick:function(){this.currentView&&this.currentView.goTo(1)},_onClick:function(e){
if(this.onClick(e)!==!1){if(e&&"keydown"===e.type)if(39===e.keyCode)this.onNextBtnClick();else if(37===e.keyCode)this.onPrevBtnClick();else if(13!==e.keyCode)return;
var i;for(i=a.getEnclosingWidget(e.target);;i=i.getParent()){if(!i)return;if(i.getParent()instanceof C)break;
}this.select(i);var s=this.getIndexByItemWidget(i);t.publish("/dojox/mobile/carouselSelect",[this,i,this.items[s],s]);
}},select:function(e){"number"==typeof e&&(e=this.getItemWidgetByIndex(e)),this.selectable&&(this.selectedItem&&(this.selectedItem.set("selected",!1),
d.remove(this.selectedItem.domNode,"mblCarouselSlotSelected")),e&&(e.set("selected",!0),
d.add(e.domNode,"mblCarouselSlotSelected")),this.selectedItem=e)},onClick:function(){},
instantiateView:function(e){if(e&&!e._instantiated){var t="none"===h.get(e.domNode,"display");
t&&h.set(e.domNode,{visibility:"hidden",display:""}),m.instantiateLazyWidgets(e.containerNode,null,function(i){
t&&h.set(e.domNode,{visibility:"visible",display:"none"})}),e._instantiated=!0}},
handleViewChanged:function(e){e.getParent()===this&&(this.currentView.nextView(this.currentView.domNode)===e?this.instantiateView(e.nextView(e.domNode)):this.instantiateView(e.previousView(e.domNode)),
this.currentView=e)},_setTitleAttr:function(e){this.titleNode.innerHTML=this._cv?this._cv(e):e,
this._set("title",e)}});return p.ChildSwapViewProperties={lazy:!1},o.extend(C,p.ChildSwapViewProperties),
n("dojo-bidi")?i("dojox.mobile.Carousel",[p,N]):p});