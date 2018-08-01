define(["dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","../_Plugin"],function(i,e,t,o,r,s,h,l,n){
return i("dijit._editor.plugins.AlwaysShowToolbar",n,{_handleScroll:!0,setEditor:function(i){
return i.iframe?(this.editor=i,void i.onLoadDeferred.then(r.hitch(this,this.enable))):void console.log("Port AlwaysShowToolbar plugin to work with Editor without iframe");
},enable:function(i){return this._updateHeight(),this.own(s(window,"scroll",r.hitch(this,"globalOnScrollHandler")),this.editor.on("NormalizedDisplayChanged",r.hitch(this,"_updateHeight"))),
i},_updateHeight:function(){var i=this.editor;if(i.isLoaded&&!i.height){var e=o.getMarginSize(i.editNode).h;
if(h("opera")&&(e=i.editNode.scrollHeight),e||(e=o.getMarginSize(i.document.body).h),
this._fixEnabled&&(e+=o.getMarginSize(this.editor.header).h),0==e)return void console.debug("Can not figure out the height of the editing area!");
if(h("ie")<=7&&this.editor.minHeight){var t=parseInt(this.editor.minHeight);t>e&&(e=t);
}e!=this._lastHeight&&(this._lastHeight=e,o.setMarginBox(i.iframe,{h:this._lastHeight
}))}},_lastHeight:0,globalOnScrollHandler:function(){var i=h("ie")<7;if(this._handleScroll){
var r=this.editor.header;this._scrollSetUp||(this._scrollSetUp=!0,this._scrollThreshold=o.position(r,!0).y);
var s=o.docScroll(this.editor.ownerDocument).y,l=r.style;if(s>this._scrollThreshold&&s<this._scrollThreshold+this._lastHeight){
if(!this._fixEnabled){var n=o.getMarginSize(r);this.editor.iframe.style.marginTop=n.h+"px",
i?(l.left=o.position(r).x,r.previousSibling?this._IEOriginalPos=["after",r.previousSibling]:r.nextSibling?this._IEOriginalPos=["before",r.nextSibling]:this._IEOriginalPos=["last",r.parentNode],
this.editor.ownerDocumentBody.appendChild(r),e.add(r,"dijitIEFixedToolbar")):(l.position="fixed",
l.top="0px"),o.setMarginBox(r,{w:n.w}),l.zIndex=2e3,this._fixEnabled=!0}var d=this.height?parseInt(this.editor.height):this.editor._lastHeight;
l.display=s>this._scrollThreshold+d?"none":""}else this._fixEnabled&&(this.editor.iframe.style.marginTop="",
l.position="",l.top="",l.zIndex="",l.display="",i&&(l.left="",e.remove(r,"dijitIEFixedToolbar"),
this._IEOriginalPos?(t.place(r,this._IEOriginalPos[1],this._IEOriginalPos[0]),this._IEOriginalPos=null):t.place(r,this.editor.iframe,"before")),
l.width="",this._fixEnabled=!1)}},destroy:function(){this._IEOriginalPos=null,this._handleScroll=!1,
this.inherited(arguments),h("ie")<7&&e.remove(this.editor.header,"dijitIEFixedToolbar");
}})});