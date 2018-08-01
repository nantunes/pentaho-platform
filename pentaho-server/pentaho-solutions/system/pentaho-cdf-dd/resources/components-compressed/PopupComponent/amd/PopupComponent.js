define("cde/components/PopupComponent/PopupComponent",["cdf/components/BaseComponent","cdf/lib/jquery","css!./PopupComponent"],function(t,e){
var o=1;return t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,$overlay:void 0,
popupClass:void 0,popupOverlayClass:void 0,horizontalScroll:void 0,verticalScroll:void 0,
update:function(){var t=this;this.content=e("#"+this.htmlObject).detach(),this.ph=this.ph?this.ph.empty():e("<div>").appendTo(e("body")),
this.content.appendTo(this.ph),this.ph.hide(),this.ph.addClass("popupComponent"),
this.popupClass&&this.ph.addClass(this.popupClass),this.cancel=e("<a>&nbsp;</a>"),
this.cancel.addClass("close").click(function(){t.hide()}),this.cancel.appendTo(this.ph),
this.arrow=e("<div class='arrow'>").appendTo(this.ph),this.content.removeClass("hidePopup");
},clone:function(t,s,i){var h=this.base(t,s,i);return h.ph=this.ph.clone(),h.ph.insertAfter(this.ph),
h.ph.hide(),h.ph.find("[id]").each(function(t,s){var h=e(s),p=h.attr("id");p&&p in i?h.attr("id",i[p]):h.attr("id",p+"_"+o++);
}),h},popup:function(t,o){var s,i=t.offset(),h={top:"auto",bottom:"auto",left:"auto",
right:"auto"},p=20,a=12,r=45,n=this.ph.outerHeight(),d=this.ph.outerWidth();o=o||this.gravity;
var l="undefined"==typeof this.draggable?!0:this.draggable;this.horizontalScroll&&e("#"+this.htmlObject).css("overflow-x","scroll"),
this.verticalScroll&&e("#"+this.htmlObject).css("overflow-y","scroll");var c="undefined"==typeof this.closeOnClickOutside?!1:this.closeOnClickOutside;
this.arrow.css({top:"",left:"",bottom:"",right:""}),this.arrow.show(),this.ph.removeClass("north south east west");
var f,u,v,g=p,w=e(document).width()-p,m=p,b=e(document).height()-p;switch(o){case"N":
v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),h.left=this.center(t.outerWidth(),d,i.left,g,w),
u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),s=i.left-h.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
h.top=this.offset(u,n,i.top+v,a,m,b,"near"),this.arrow.css("left",this.center(t.outerWidth(),r,s,0,d)),
this.ph.addClass(h.top<i.top?"north":"south");break;case"S":v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),
u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),h.left=this.center(t.outerWidth(),d,i.left,g,w),
h.top=this.offset(u,n,i.top+v,a,m,b,"far"),s=i.left-h.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
this.arrow.css("left",this.center(t.outerWidth(),r,s,0,d)),this.ph.addClass(h.top<i.top?"north":"south");
break;case"W":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),h.top=this.center(t.outerHeight(),n,i.top,m,b),
f="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),h.left=this.offset(t.width(),d,i.left+v,a,g,w,"near"),
s=i.top-h.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),r,s,0,n)),
this.ph.addClass(h.left<i.left?"west":"east");break;case"E":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),
h.top=this.center(t.outerHeight(),n,i.top,m,b),f="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),
h.left=this.offset(f,d,i.left+v,a,g,w,"far"),s=i.top-h.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),
this.arrow.css("top",this.center(t.outerHeight(),r,s,0,n)),this.ph.addClass(h.left<i.left?"west":"east");
}this.ph.css(h),this.ph.show();var C,y=this;C=function(t){27==t.which&&(y.ph.hide(),
e(document).unbind("keydown",C))},e(document).keydown(C);var $=function(){y.arrow.hide();
};this.ph.bind("drag",$),l&&this.ph.draggable({cancel:"#"+this.htmlObject});var x,O;
this.ph.bind("touchstart",function(t){x=y.ph.offset(),O={left:t.originalEvent.touches[0].pageX,
top:t.originalEvent.touches[0].pageY}}),this.ph.bind("touchmove",function(t){var e={
top:x.top+t.originalEvent.touches[0].pageY-O.top,left:x.left+t.originalEvent.touches[0].pageX-O.left
};y.ph.offset(e),y.arrow.hide(),t.preventDefault()}),c&&(this.$overlay||(this.$overlay=e('<div id="popupComponentOverlay"></div>'),
this.popupOverlayClass&&this.$overlay.addClass(this.popupOverlayClass)),this.$overlay.appendTo("body").click(function(t){
t.stopPropagation(),y.hide()})),e("body").addClass("draggable-popup-fix")},hide:function(){
this.ph.hide(),this.$overlay&&(this.$overlay.unbind("click"),this.$overlay.detach()),
e("body").removeClass("draggable-popup-fix")},center:function(t,e,o,s,i){var h=o+t/2-e/2;
return h+e>i?i-e:s>h?s:h},offset:function(t,e,o,s,i,h,p){var a=o-e-s,r=o+t+s,n=a>i,d=h>r+e;
return"near"==p?n||!d?a:r:"far"==p&&(d||!n)?r:a}})}),define("cde/components/PopupComponent",["cde/components/PopupComponent/PopupComponent"],function(t){
return t});