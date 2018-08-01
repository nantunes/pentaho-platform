//
// dojox.image.Gallery courtesy Shane O Sullivan, licensed under a Dojo CLA
//
// For a sample usage, see http://www.skynet.ie/~sos/photos.php
//
//	TODO: Make public, document params and privitize non-API conformant methods.
//	document topics.

dojo.provide("dojox.image.Gallery"),dojo.experimental("dojox.image.Gallery"),dojo.require("dojo.fx"),
dojo.require("dijit._Widget"),dojo.require("dijit._Templated"),dojo.require("dojox.image.ThumbnailPicker"),
dojo.require("dojox.image.SlideShow"),dojo.declare("dojox.image.Gallery",[dijit._Widget,dijit._Templated],{
imageHeight:375,imageWidth:500,pageSize:dojox.image.SlideShow.prototype.pageSize,
autoLoad:!0,linkAttr:"link",imageThumbAttr:"imageUrlThumb",imageLargeAttr:"imageUrl",
titleAttr:"title",slideshowInterval:3,templateString:dojo.cache("dojox.image","resources/Gallery.html"),
postCreate:function(){this.widgetid=this.id,this.inherited(arguments),this.thumbPicker=new dojox.image.ThumbnailPicker({
linkAttr:this.linkAttr,imageLargeAttr:this.imageLargeAttr,imageThumbAttr:this.imageThumbAttr,
titleAttr:this.titleAttr,useLoadNotifier:!0,size:this.imageWidth},this.thumbPickerNode),
this.slideShow=new dojox.image.SlideShow({imageHeight:this.imageHeight,imageWidth:this.imageWidth,
autoLoad:this.autoLoad,linkAttr:this.linkAttr,imageLargeAttr:this.imageLargeAttr,
titleAttr:this.titleAttr,slideshowInterval:this.slideshowInterval,pageSize:this.pageSize
},this.slideShowNode);var e=this;dojo.subscribe(this.slideShow.getShowTopicName(),function(i){
e.thumbPicker._showThumbs(i.index)}),dojo.subscribe(this.thumbPicker.getClickTopicName(),function(i){
e.slideShow.showImage(i.index)}),dojo.subscribe(this.thumbPicker.getShowTopicName(),function(i){
e.slideShow.moveImageLoadingPointer(i.index)}),dojo.subscribe(this.slideShow.getLoadTopicName(),function(i){
e.thumbPicker.markImageLoaded(i)}),this._centerChildren()},setDataStore:function(e,i,t){
this.thumbPicker.setDataStore(e,i,t),this.slideShow.setDataStore(e,i,t)},reset:function(){
this.slideShow.reset(),this.thumbPicker.reset()},showNextImage:function(e){this.slideShow.showNextImage();
},toggleSlideshow:function(){dojo.deprecated("dojox.widget.Gallery.toggleSlideshow is deprecated.  Use toggleSlideShow instead.","","2.0"),
this.toggleSlideShow()},toggleSlideShow:function(){this.slideShow.toggleSlideShow();
},showImage:function(e,i){this.slideShow.showImage(e,i)},resize:function(e){this.thumbPicker.resize(e);
},_centerChildren:function(){var e=dojo.marginBox(this.thumbPicker.outerNode),i=dojo.marginBox(this.slideShow.outerNode),t=(e.w-i.w)/2;
t>0?dojo.style(this.slideShow.outerNode,"marginLeft",t+"px"):0>t&&dojo.style(this.thumbPicker.outerNode,"marginLeft",-1*t+"px");
}});