//
// dojox.image.SlideShow courtesy Shane O Sullivan, licensed under a Dojo CLA
// For a sample usage, see http://www.skynet.ie/~sos/photos.php
//
//
//	TODO: more cleanups
//

dojo.provide("dojox.image.SlideShow"),dojo.require("dojo.string"),dojo.require("dojo.fx"),
dojo.require("dijit._Widget"),dojo.require("dijit._Templated"),dojo.declare("dojox.image.SlideShow",[dijit._Widget,dijit._Templated],{
imageHeight:375,imageWidth:500,title:"",titleTemplate:'${title} <span class="slideShowCounterText">(${current} of ${total})</span>',
noLink:!1,loop:!0,hasNav:!0,images:[],pageSize:20,autoLoad:!0,autoStart:!1,fixedHeight:!1,
imageStore:null,linkAttr:"link",imageLargeAttr:"imageUrl",titleAttr:"title",slideshowInterval:3,
templateString:dojo.cache("dojox.image","resources/SlideShow.html"),_imageCounter:0,
_tmpImage:null,_request:null,postCreate:function(){this.inherited(arguments);var t=document.createElement("img");
t.setAttribute("width",this.imageWidth),t.setAttribute("height",this.imageHeight),
this.hasNav&&(dojo.connect(this.outerNode,"onmouseover",this,function(t){try{this._showNav();
}catch(i){}}),dojo.connect(this.outerNode,"onmouseout",this,function(t){try{this._hideNav(t);
}catch(i){}})),this.outerNode.style.width=this.imageWidth+"px",t.setAttribute("src",this._blankGif);
this.largeNode.appendChild(t),this._tmpImage=this._currentImage=t,this._fitSize(!0),
this._loadImage(0,dojo.hitch(this,"showImage",0)),this._calcNavDimensions(),dojo.style(this.navNode,"opacity",0);
},setDataStore:function(t,i,e){this.reset();var o=this;this._request={query:{},start:i.start||0,
count:i.count||this.pageSize,onBegin:function(t,i){o.maxPhotos=t}},i.query&&dojo.mixin(this._request.query,i.query),
e&&dojo.forEach(["imageLargeAttr","linkAttr","titleAttr"],function(t){e[t]&&(this[t]=e[t]);
},this);var s=function(t){o.maxPhotos=t.length,o._request.onComplete=null,o.autoStart?(o.imageIndex=-1,
o.toggleSlideShow()):o.showImage(0)};this.imageStore=t,this._request.onComplete=s,
this._request.start=0,this.imageStore.fetch(this._request)},reset:function(){dojo.query("> *",this.largeNode).orphan(),
this.largeNode.appendChild(this._tmpImage),dojo.query("> *",this.hiddenNode).orphan(),
dojo.forEach(this.images,function(t){t&&t.parentNode&&t.parentNode.removeChild(t);
}),this.images=[],this.isInitialized=!1,this._imageCounter=0},isImageLoaded:function(t){
return this.images&&this.images.length>t&&this.images[t]},moveImageLoadingPointer:function(t){
this._imageCounter=t},destroy:function(){this._slideId&&this._stop(),this.inherited(arguments);
},showNextImage:function(t,i){if(t&&this._timerCancelled)return!1;if(this.imageIndex+1>=this.maxPhotos){
if(!t||!this.loop&&!i)return this._slideId&&this._stop(),!1;this.imageIndex=-1}return this.showImage(this.imageIndex+1,dojo.hitch(this,function(){
t&&this._startTimer()})),!0},toggleSlideShow:function(){if(this._slideId)this._stop();else{
dojo.toggleClass(this.domNode,"slideShowPaused"),this._timerCancelled=!1;var t=this.imageIndex;
if(0>t||this.images[t]&&this.images[t]._img.complete){var i=this.showNextImage(!0,!0);
i||this._stop()}else{var e=dojo.subscribe(this.getShowTopicName(),dojo.hitch(this,function(i){
setTimeout(dojo.hitch(this,function(){if(i.index==t){var o=this.showNextImage(!0,!0);
o||this._stop(),dojo.unsubscribe(e)}}),1e3*this.slideshowInterval)}));dojo.publish(this.getShowTopicName(),[{
index:t,title:"",url:""}])}}},getShowTopicName:function(){return(this.widgetId||this.id)+"/imageShow";
},getLoadTopicName:function(){return(this.widgetId?this.widgetId:this.id)+"/imageLoad";
},showImage:function(t,i){!i&&this._slideId&&this.toggleSlideShow();var e=this,o=this.largeNode.getElementsByTagName("div");
this.imageIndex=t;var s=function(){if(e.images[t]){for(;e.largeNode.firstChild;)e.largeNode.removeChild(e.largeNode.firstChild);
dojo.style(e.images[t],"opacity",0),e.largeNode.appendChild(e.images[t]),e._currentImage=e.images[t]._img,
e._fitSize();var o=function(o,s,a){var h=e.images[t].firstChild;"img"!=h.tagName.toLowerCase()&&(h=h.firstChild);
var n=h.getAttribute("title")||"";e._navShowing&&e._showNav(!0),dojo.publish(e.getShowTopicName(),[{
index:t,title:n,url:h.getAttribute("src")}]),i&&i(o,s,a),e._setTitle(n)};dojo.fadeIn({
node:e.images[t],duration:300,onEnd:o}).play()}else e._loadImage(t,function(){e.showImage(t,i);
})};o&&o.length>0?dojo.fadeOut({node:o[0],duration:300,onEnd:function(){e.hiddenNode.appendChild(o[0]),
s()}}).play():s()},_fitSize:function(t){if(!this.fixedHeight||t){var i=this._currentImage.height+(this.hasNav?20:0);
return void dojo.style(this.innerWrapper,"height",i+"px")}dojo.style(this.largeNode,"paddingTop",this._getTopPadding()+"px");
},_getTopPadding:function(){return this.fixedHeight?(this.imageHeight-this._currentImage.height)/2:0;
},_loadNextImage:function(){if(this.autoLoad){for(;this.images.length>=this._imageCounter&&this.images[this._imageCounter];)this._imageCounter++;
this._loadImage(this._imageCounter)}},_loadImage:function(t,i){if(!this.images[t]&&this._request){
var e=t-t%(this._request.count||this.pageSize);this._request.start=e,this._request.onComplete=function(i){
var o=t-e;i&&i.length>o&&a(i[o])};var o=this,s=this.imageStore,a=function(e){var a=o.imageStore.getValue(e,o.imageLargeAttr),h=new Image,n=dojo.create("div",{
id:o.id+"_imageDiv"+t});n._img=h;var d=o.imageStore.getValue(e,o.linkAttr);if(!d||o.noLink)n.appendChild(h);else{
var r=dojo.create("a",{href:d,target:"_blank"},n);r.appendChild(h)}dojo.connect(h,"onload",function(){
s==o.imageStore&&(o._fitImage(h),dojo.attr(n,{width:o.imageWidth,height:o.imageHeight
}),dojo.publish(o.getLoadTopicName(),[t]),setTimeout(function(){o._loadNextImage();
},1),i&&i())}),o.hiddenNode.appendChild(n);dojo.create("div",{className:"slideShowTitle"
},n);o.images[t]=n,dojo.attr(h,"src",a);var g=o.imageStore.getValue(e,o.titleAttr);
g&&dojo.attr(h,"title",g)};this.imageStore.fetch(this._request)}},_stop:function(){
this._slideId&&clearTimeout(this._slideId),this._slideId=null,this._timerCancelled=!0,
dojo.removeClass(this.domNode,"slideShowPaused")},_prev:function(){this.imageIndex<1||this.showImage(this.imageIndex-1);
},_next:function(){this.showNextImage()},_startTimer:function(){var t=this.id;this._slideId=setTimeout(function(){
dijit.byId(t).showNextImage(!0)},1e3*this.slideshowInterval)},_calcNavDimensions:function(){
dojo.style(this.navNode,"position","absolute"),dojo.style(this.navNode,"top","-10000px"),
dojo.style(this.navPlay,"marginLeft",0),this.navPlay._size=dojo.marginBox(this.navPlay),
this.navPrev._size=dojo.marginBox(this.navPrev),this.navNext._size=dojo.marginBox(this.navNext),
dojo.style(this.navNode,{position:"",top:""})},_setTitle:function(t){this.titleNode.innerHTML=dojo.string.substitute(this.titleTemplate,{
title:t,current:1+this.imageIndex,total:this.maxPhotos||""})},_fitImage:function(t){
var i=t.width,e=t.height;i>this.imageWidth&&(e=Math.floor(e*(this.imageWidth/i)),
t.height=e,t.width=i=this.imageWidth),e>this.imageHeight&&(i=Math.floor(i*(this.imageHeight/e)),
t.height=this.imageHeight,t.width=i)},_handleClick:function(t){switch(t.target){case this.navNext:
this._next();break;case this.navPrev:this._prev();break;case this.navPlay:this.toggleSlideShow();
}},_showNav:function(t){if(!this._navShowing||t){this._calcNavDimensions(),dojo.style(this.navNode,"marginTop","0px");
var i=dojo.style(this.navNode,"width")/2-this.navPlay._size.w/2-this.navPrev._size.w;
console.log("navPlayPos = "+dojo.style(this.navNode,"width")/2+" - "+this.navPlay._size.w+"/2 - "+this.navPrev._size.w),
dojo.style(this.navPlay,"marginLeft",i+"px");var e=(dojo.marginBox(this.outerNode),
this._currentImage.height-this.navPlay._size.h-10+this._getTopPadding());e>this._currentImage.height&&(e+=10),
dojo[this.imageIndex<1?"addClass":"removeClass"](this.navPrev,"slideShowCtrlHide"),
dojo[this.imageIndex+1>=this.maxPhotos?"addClass":"removeClass"](this.navNext,"slideShowCtrlHide");
var o=this;this._navAnim&&this._navAnim.stop(),this._navShowing||(this._navAnim=dojo.fadeIn({
node:this.navNode,duration:300,onEnd:function(){o._navAnim=null}}),this._navAnim.play(),
this._navShowing=!0)}},_hideNav:function(t){if(!t||!this._overElement(this.outerNode,t)){
var i=this;this._navAnim&&this._navAnim.stop(),this._navAnim=dojo.fadeOut({node:this.navNode,
duration:300,onEnd:function(){i._navAnim=null}}),this._navAnim.play(),this._navShowing=!1;
}},_overElement:function(t,i){if("undefined"==typeof dojo)return!1;t=dojo.byId(t);
var e={x:i.pageX,y:i.pageY},o=dojo.position(t,!0);return e.x>=o.x&&e.x<=o.x+o.w&&e.y>=o.y&&e.y<=top+o.h;
}});