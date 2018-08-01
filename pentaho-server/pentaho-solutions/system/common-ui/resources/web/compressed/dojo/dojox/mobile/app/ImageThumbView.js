dojo.provide("dojox.mobile.app.ImageThumbView"),dojo.experimental("dojox.mobile.app.ImageThumbView"),
dojo.require("dijit._WidgetBase"),dojo.require("dojo.string"),dojo.declare("dojox.mobile.app.ImageThumbView",dijit._WidgetBase,{
items:[],urlParam:"url",labelParam:null,itemTemplate:'<div class="mblThumbInner"><div class="mblThumbOverlay"></div><div class="mblThumbMask"><div class="mblThumbSrc" style="background-image:url(${url})"></div></div></div>',
minPadding:4,maxPerRow:3,maxRows:-1,baseClass:"mblImageThumbView",thumbSize:"medium",
animationEnabled:!0,selectedIndex:-1,cache:null,cacheMustMatch:!1,clickEvent:"onclick",
cacheBust:!1,disableHide:!1,constructor:function(e,i){},postCreate:function(){this.inherited(arguments);
var e=this;this.addThumb=dojo.hitch(this,this.addThumb),this.handleImgLoad=dojo.hitch(this,this.handleImgLoad),
this.hideCached=dojo.hitch(this,this.hideCached),this._onLoadImages={},this.cache=[],
this.visibleImages=[],this._cacheCounter=0,this.connect(this.domNode,this.clickEvent,function(i){
var t=e._getItemNodeFromEvent(i);t&&!t._cached&&(e.onSelect(t._item,t._index,e.items),
dojo.query(".selected",this.domNode).removeClass("selected"),dojo.addClass(t,"selected"));
}),dojo.addClass(this.domNode,this.thumbSize),this.resize(),this.render()},onSelect:function(e,i,t){},
_setAnimationEnabledAttr:function(e){this.animationEnabled=e,dojo[e?"addClass":"removeClass"](this.domNode,"animated");
},_setItemsAttr:function(e){this.items=e||[];var i,t={};for(i=0;i<this.items.length;i++)t[this.items[i][this.urlParam]]=1;
var s=[];for(var h in this._onLoadImages)!t[h]&&this._onLoadImages[h]._conn&&(dojo.disconnect(this._onLoadImages[h]._conn),
this._onLoadImages[h].src=null,s.push(h));for(i=0;i<s.length;i++)delete this._onLoadImages[h];
this.render()},_getItemNode:function(e){for(;e&&!dojo.hasClass(e,"mblThumb")&&e!=this.domNode;)e=e.parentNode;
return e==this.domNode?null:e},_getItemNodeFromEvent:function(e){return e.touches&&e.touches.length>0&&(e=e.touches[0]),
this._getItemNode(e.target)},resize:function(){this._thumbSize=null,this._size=dojo.contentBox(this.domNode),
this.disableHide=!0,this.render(),this.disableHide=!1},hideCached:function(){for(var e=0;e<this.cache.length;e++)this.cache[e]&&dojo.style(this.cache[e],"display","none");
},render:function(){for(var e,i,t,s;this.visibleImages&&this.visibleImages.length>0;)s=this.visibleImages.pop(),
this.cache.push(s),this.disableHide||dojo.addClass(s,"hidden"),s._cached=!0;if(this.cache&&this.cache.length>0&&setTimeout(this.hideCached,1e3),
this.items&&0!=this.items.length){for(e=0;e<this.items.length&&(t=this.items[e],i=dojo.isString(t)?t:t[this.urlParam],
this.addThumb(t,i,e),!(this.maxRows>0&&(e+1)/this.maxPerRow>=this.maxRows));e++);
if(this._thumbSize){var h=0,o=-1,a=this._thumbSize.w+2*this.padding,d=this._thumbSize.h+2*this.padding,n=this.thumbNodes=dojo.query(".mblThumb",this.domNode),m=0;
for(n=this.visibleImages,e=0;e<n.length;e++)n[e]._cached||(m%this.maxPerRow==0&&o++,
h=m%this.maxPerRow,this.place(n[e],h*a+this.padding,o*d+this.padding),n[e]._loading||dojo.removeClass(n[e],"hidden"),
m==this.selectedIndex&&dojo[m==this.selectedIndex?"addClass":"removeClass"](n[e],"selected"),
m++);var l=Math.ceil(m/this.maxPerRow);this._numRows=l,this.setContainerHeight(l*(this._thumbSize.h+2*this.padding));
}}},setContainerHeight:function(e){dojo.style(this.domNode,"height",e+"px")},addThumb:function(e,i,t){
var s,h=!1;if(this.cache.length>0){for(var o=!1,a=0;a<this.cache.length;a++)if(this.cache[a]._url==i){
s=this.cache.splice(a,1)[0],o=!0;break}s||this.cacheMustMatch?h=!0:(s=this.cache.pop(),
dojo.removeClass(s,"selected"))}if(s||(s=dojo.create("div",{"class":"mblThumb hidden",
innerHTML:dojo.string.substitute(this.itemTemplate,{url:i},null,this)},this.domNode)),
this.labelParam){var d=dojo.query(".mblThumbLabel",s)[0];d||(d=dojo.create("div",{
"class":"mblThumbLabel"},s)),d.innerHTML=e[this.labelParam]||""}if(dojo.style(s,"display",""),
this.disableHide||dojo.addClass(s,"hidden"),!h){var n=dojo.create("img",{});n._thumbDiv=s,
n._conn=dojo.connect(n,"onload",this.handleImgLoad),n._url=i,s._loading=!0,this._onLoadImages[i]=n,
n&&(n.src=i)}this.visibleImages.push(s),s._index=t,s._item=e,s._url=i,s._cached=!1,
this._thumbSize||(this._thumbSize=dojo.marginBox(s),0==this._thumbSize.h&&(this._thumbSize.h=100,
this._thumbSize.w=100),this.labelParam&&(this._thumbSize.h+=8),this.calcPadding());
},handleImgLoad:function(e){var i=e.target;dojo.disconnect(i._conn),dojo.removeClass(i._thumbDiv,"hidden"),
i._thumbDiv._loading=!1,i._conn=null;var t=i._url;this.cacheBust&&(t+=(t.indexOf("?")>-1?"&":"?")+"cacheBust="+(new Date).getTime()+"_"+this._cacheCounter++),
dojo.query(".mblThumbSrc",i._thumbDiv).style("backgroundImage","url("+t+")"),delete this._onLoadImages[i._url];
},calcPadding:function(){var e=this._size.w,i=this._thumbSize.w,t=i+this.minPadding;
this.maxPerRow=Math.floor(e/t),this.padding=Math.floor((e-i*this.maxPerRow)/(2*this.maxPerRow));
},place:function(e,i,t){dojo.style(e,{"-webkit-transform":"translate("+i+"px,"+t+"px)"
})},destroy:function(){var e,i=0;for(var t in this._onLoadImages)e=this._onLoadImages[t],
e&&(e.src=null,i++);this.inherited(arguments)}});