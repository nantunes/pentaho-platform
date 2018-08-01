define(["dojo/aspect","dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/fx","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","./PagerItem","dojo/text!./Pager/Pager.html"],function(t,e,i,s,a,r,o,n,h,g,d,p,c,u,l,P,m,f){
return d.experimental("dojox.widget.Pager"),i("dojox.widget.Pager",[l,P],{templateString:f,
iconPrevious:"",iconNext:"",iconPage:require.toUrl("dojox/widget/Pager/images/pageInactive.png"),
iconPageActive:require.toUrl("dojox/widget/Pager/images/pageActive.png"),store:null,
orientation:"horizontal",statusPos:"leading",pagerPos:"center",duration:500,itemSpace:2,
resizeChildren:!0,itemClass:m,itemsPage:3,postMixInProperties:function(){var t="horizontal"==this.orientation;
c.mixin(this,{_totalPages:0,_currentPage:1,dirClass:"pager"+(t?"Horizontal":"Vertical"),
iconNext:require.toUrl("dojox/widget/Pager/images/"+(t?"h":"v")+"Next.png"),iconPrevious:require.toUrl("dojox/widget/Pager/images/"+(t?"h":"v")+"Previous.png")
})},postCreate:function(){this.inherited(arguments),this.store.fetch({onComplete:c.hitch(this,"_init")
})},_a11yStyle:function(t){r.toggle(t.target,"pagerFocus","focus"==t.type)},_handleKey:function(t){
var e=t.charCode==p.SPACE?p.SPACE:t.keyCode;switch(e){case p.UP_ARROW:case p.RIGHT_ARROW:
case 110:case 78:t.preventDefault(),this._pagerNext();break;case p.DOWN_ARROW:case p.LEFT_ARROW:
case 112:case 80:t.preventDefault(),this._pagerPrevious();break;case p.ENTER:switch(t.target){
case this.pagerNext:this._pagerNext();break;case this.pagerPrevious:this._pagerPrevious();
}}},_init:function(t){this.items=t,this._renderPages(),this._renderStatus(),this._renderPager();
},generatePagerItem:function(t,e){var i=this.itemClass,s="string"==typeof i?c.getObject(i):i,a=o.create("div",{
innerHTML:t.content});return new s({id:this.id+"-item-"+(e+1)},a)},_renderPages:function(){
var t=this.pagerContainerView,i="horizontal"==this.orientation;if(i){var s=n.getMarginBox(this.pagerContainerPager).h,a=n.getMarginBox(this.pagerContainerStatus).h;
if("center"!=this.pagerPos)var r=s+a;else{var r=a,o=this.pagerIconNext.width,g=h.get(t,"width"),d=g-2*o;
h.set(t,{width:d+"px",marginLeft:this.pagerIconNext.width+"px",marginRight:this.pagerIconNext.width+"px"
})}var p=h.get(this.pagerContainer,"height")-r;h.set(this.pagerContainerView,"height",p+"px");
var c=Math.floor(h.get(t,"width")/this.itemsPage);"trailing"==this.statusPos?("center"!=this.pagerPos&&h.set(t,"marginTop",s+"px"),
h.set(t,"marginBottom",a+"px")):(h.set(t,"marginTop",a+"px"),"center"!=this.pagerPos&&h.set(t,"marginTop",s+"px"));
}else{var u=n.getMarginBox(this.pagerContainerPager).w,l=n.getMarginBox(this.pagerContainerStatus).w;
h.get(this.pagerContainer,"width");if("center"!=this.pagerPos)var P=u+l;else{var P=l,m=this.pagerIconNext.height,f=h.get(t,"height"),v=f-2*m;
h.set(t,{height:v+"px",marginTop:this.pagerIconNext.height+"px",marginBottom:this.pagerIconNext.height+"px"
})}var _=h.get(this.pagerContainer,"width")-P;h.set(t,"width",_+"px");var c=Math.floor(h.get(t,"height")/this.itemsPage);
"trailing"==this.statusPos?("center"!=this.pagerPos&&h.set(t,"marginLeft",u+"px"),
h.set(t,"marginRight",l+"px")):(h.set(t,"marginLeft",l+"px"),"center"!=this.pagerPos&&h.set(t,"marginRight",u+"px"));
}var x="padding"+(i?"Left":"Top"),C="padding"+(i?"Right":"Bottom");e.forEach(this.items,function(e,s){
var a=this.generatePagerItem(e,s),r={};this.pagerItems.appendChild(a.domNode),r[i?"width":"height"]=c-this.itemSpace+"px";
var o=i?"height":"width";if(r[o]=h.get(t,o)+"px",h.set(a.containerNode,r),this.resizeChildren&&a.resizeChildren(),
a.parseChildren(),h.set(a.domNode,"position","absolute"),s<this.itemsPage){var n=s*c,g=i?"left":"top",d=i?"top":"left";
h.set(a.domNode,d,"0px"),h.set(a.domNode,g,n+"px")}else h.set(a.domNode,"top","-1000px"),
h.set(a.domNode,"left","-1000px");h.set(a.domNode,C,this.itemSpace/2+"px"),h.set(a.domNode,x,this.itemSpace/2+"px");
},this)},_renderPager:function(){var t=this.pagerContainerPager,e="0px",i="horizontal"==this.orientation;
i?("center"==this.statusPos||("trailing"==this.statusPos?h.set(t,"top",e):h.set(t,"bottom",e)),
h.set(this.pagerNext,"right",e),h.set(this.pagerPrevious,"left",e)):("trailing"==this.statusPos?h.set(t,"left",e):h.set(t,"right",e),
h.set(this.pagerNext,"bottom",e),h.set(this.pagerPrevious,"top",e))},_renderStatus:function(){
this._totalPages=Math.ceil(this.items.length/this.itemsPage),this.iconWidth=0,this.iconHeight=0,
this.iconsLoaded=0,this._iconConnects=[];for(var t=1;t<=this._totalPages;t++){var e=new Image,i=t;
u(e,"click",c.hitch(this,"_pagerSkip",i)),this._iconConnects[i]=u(e,"load",c.hitch(this,function(t){
if(this.iconWidth+=e.width,this.iconHeight+=e.height,this.iconsLoaded++,this._totalPages==this.iconsLoaded)if("horizontal"==this.orientation){
if("trailing"==this.statusPos){if("center"==this.pagerPos){var i=h.get(this.pagerContainer,"height"),s=h.get(this.pagerContainerStatus,"height");
h.set(this.pagerContainerPager,"top",i/2-s/2+"px")}h.set(this.pagerContainerStatus,"bottom","0px");
}else{if("center"==this.pagerPos){var i=h.get(this.pagerContainer,"height"),s=h.get(this.pagerContainerStatus,"height");
h.set(this.pagerContainerPager,"bottom",i/2-s/2+"px")}h.set(this.pagerContainerStatus,"top","0px");
}var a=h.get(this.pagerContainer,"width")/2-this.iconWidth/2;h.set(this.pagerContainerStatus,"paddingLeft",a+"px");
}else{if("trailing"==this.statusPos){if("center"==this.pagerPos){var r=h.get(this.pagerContainer,"width"),o=h.get(this.pagerContainerStatus,"width");
h.set(this.pagerContainerPager,"left",r/2-o/2+"px")}h.set(this.pagerContainerStatus,"right","0px");
}else{if("center"==this.pagerPos){var r=h.get(this.pagerContainer,"width"),o=h.get(this.pagerContainerStatus,"width");
h.set(this.pagerContainerPager,"right",r/2-o/2+"px")}h.set(this.pagerContainerStatus,"left","0px");
}var a=h.get(this.pagerContainer,"height")/2-this.iconHeight/2;h.set(this.pagerContainerStatus,"paddingTop",a+"px");
}this._iconConnects[t].remove()},i)),t==this._currentPage?e.src=this.iconPageActive:e.src=this.iconPage;
var i=t;r.add(e,this.orientation+"PagerIcon"),a.set(e,"id",this.id+"-status-"+t),
this.pagerContainerStatus.appendChild(e),"vertical"==this.orientation&&h.set(e,"display","block");
}},_pagerSkip:function(e){if(this._currentPage!=e){var i,s;e<this._currentPage?(i=this._currentPage-e,
s=this._totalPages+e-this._currentPage):(i=this._totalPages+this._currentPage-e,s=e-this._currentPage);
var a=s>i;this._toScroll=a?i:s;var r=a?"_pagerPrevious":"_pagerNext",o=t.after(this,"onScrollEnd",c.hitch(this,function(){
this._toScroll--,this._toScroll<1?o.remove():this[r]()}),!0);this[r]()}},_pagerNext:function(){
if(!this._anim){for(var e=[],i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--)if(s.byId(this.id+"-item-"+i)){
var a=s.byId(this.id+"-item-"+i),r=n.getMarginBox(a);if("horizontal"==this.orientation){
var o=r.l-this.itemsPage*r.w;e.push(g.slideTo({node:a,left:o,duration:this.duration
}))}else{var o=r.t-this.itemsPage*r.h;e.push(g.slideTo({node:a,top:o,duration:this.duration
}))}}var d=this._currentPage;this._currentPage==this._totalPages?this._currentPage=1:this._currentPage++;
for(var p=this.itemsPage,i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--){
if(s.byId(this.id+"-item-"+i)){var a=s.byId(this.id+"-item-"+i),r=n.getMarginBox(a);
if("horizontal"==this.orientation){var u=h.get(this.pagerContainerView,"width")+(p-1)*r.w-1;
h.set(a,"left",u+"px"),h.set(a,"top","0px");var o=u-this.itemsPage*r.w;e.push(g.slideTo({
node:a,left:o,duration:this.duration}))}else{u=h.get(this.pagerContainerView,"height")+(p-1)*r.h-1,
h.set(a,"top",u+"px"),h.set(a,"left","0px");var o=u-this.itemsPage*r.h;e.push(g.slideTo({
node:a,top:o,duration:this.duration}))}}p--}this._anim=g.combine(e);var l=t.after(this._anim,"onEnd",c.hitch(this,function(){
delete this._anim,this.onScrollEnd(),l.remove()}),!0);this._anim.play(),s.byId(this.id+"-status-"+d).src=this.iconPage,
s.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},_pagerPrevious:function(){
if(!this._anim){for(var e=[],i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--)if(s.byId(this.id+"-item-"+i)){
var a=s.byId(this.id+"-item-"+i),r=n.getMarginBox(a);if("horizontal"==this.orientation){
var o=h.get(a,"left")+this.itemsPage*r.w;e.push(g.slideTo({node:a,left:o,duration:this.duration
}))}else{var o=h.get(a,"top")+this.itemsPage*r.h;e.push(g.slideTo({node:a,top:o,duration:this.duration
}))}}var d=this._currentPage;1==this._currentPage?this._currentPage=this._totalPages:this._currentPage--;
for(var p=this.itemsPage,u=1,i=this._currentPage*this.itemsPage;i>(this._currentPage-1)*this.itemsPage;i--){
if(s.byId(this.id+"-item-"+i)){var a=s.byId(this.id+"-item-"+i),r=n.getMarginBox(a);
if("horizontal"==this.orientation){var l=-(u*r.w)+1;h.set(a,"left",l+"px"),h.set(a,"top","0px");
var o=(p-1)*r.w;e.push(g.slideTo({node:a,left:o,duration:this.duration}));var o=l+this.itemsPage*r.w;
e.push(g.slideTo({node:a,left:o,duration:this.duration}))}else{l=-(u*r.h+1),h.set(a,"top",l+"px"),
h.set(a,"left","0px");var o=(p-1)*r.h;e.push(g.slideTo({node:a,top:o,duration:this.duration
}))}}p--,u++}this._anim=g.combine(e);var P=t.after(this._anim,"onEnd",c.hitch(this,function(){
delete this._anim,this.onScrollEnd(),P.remove()}),!0);this._anim.play(),s.byId(this.id+"-status-"+d).src=this.iconPage,
s.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},onScrollEnd:function(){}
})});