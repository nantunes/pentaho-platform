var PopupComponent=BaseComponent.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,
$overlay:void 0,popupClass:void 0,popupOverlayClass:void 0,horizontalScroll:void 0,
verticalScroll:void 0,update:function(){var t=this;this.content=$("#"+this.htmlObject).detach(),
this.ph=this.ph?this.ph.empty():$("<div>").appendTo($("body")),this.content.appendTo(this.ph),
this.ph.hide(),this.ph.addClass("popupComponent"),this.popupClass&&this.ph.addClass(this.popupClass),
this.cancel=$("<a>&nbsp;</a>"),this.cancel.addClass("close").click(function(){t.hide();
}),this.cancel.appendTo(this.ph),this.arrow=$("<div class='arrow'>").appendTo(this.ph),
this.content.removeClass("hidePopup")},clone:function(t,e,a){var o=this.base(t,e,a);
return o.ph=this.ph.clone(),o.ph.insertAfter(this.ph),o.ph.hide(),o.ph.find("[id]").each(function(t,e){
$e=$(e);var o=$e.attr("id");o&&o in a?$e.attr("id",a[o]):$e.attr("id",o+"_"+Dashboards.duplicateIndex);
}),o},popup:function(t,e){var a,o=t.offset(),i={top:"auto",bottom:"auto",left:"auto",
right:"auto"},h=20,n=12,r=45,p=this.ph.outerHeight(),s=this.ph.outerWidth();e=e||this.gravity;
var c="undefined"==typeof this.draggable?!0:this.draggable;this.horizontalScroll&&$("#"+this.htmlObject).css("overflow-x","scroll"),
this.verticalScroll&&$("#"+this.htmlObject).css("overflow-y","scroll");var d="undefined"==typeof this.closeOnClickOutside?!1:this.closeOnClickOutside;
this.arrow.css({top:"",left:"",bottom:"",right:""}),this.arrow.show(),this.ph.removeClass("north south east west");
var l,u,v,C=h,m=$(document).width()-h,f=h,g=$(document).height()-h;switch(e){case"N":
v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),i.left=this.center(t.outerWidth(),s,o.left,C,m),
u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),a=o.left-i.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
i.top=this.offset(u,p,o.top+v,n,f,g,"near"),this.arrow.css("left",this.center(t.outerWidth(),r,a,0,s)),
this.ph.addClass(i.top<o.top?"north":"south");break;case"S":v=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),
u="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),i.left=this.center(t.outerWidth(),s,o.left,C,m),
i.top=this.offset(u,p,o.top+v,n,f,g,"far"),a=o.left-i.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
this.arrow.css("left",this.center(t.outerWidth(),r,a,0,s)),this.ph.addClass(i.top<o.top?"north":"south");
break;case"W":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),i.top=this.center(t.outerHeight(),p,o.top,f,g),
l="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),i.left=this.offset(t.width(),s,o.left+v,n,C,m,"near"),
a=o.top-i.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),r,a,0,p)),
this.ph.addClass(i.left<o.left?"west":"east");break;case"E":v=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),
i.top=this.center(t.outerHeight(),p,o.top,f,g),l="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),
i.left=this.offset(l,s,o.left+v,n,C,m,"far"),a=o.top-i.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),
this.arrow.css("top",this.center(t.outerHeight(),r,a,0,p)),this.ph.addClass(i.left<o.left?"west":"east");
}this.ph.css(i),this.ph.show();var x,b=this;x=function(t){27==t.which&&(b.ph.hide(),
$(document).unbind("keydown",x))},$(document).keydown(x);var w;w=function(){b.arrow.hide();
},this.ph.bind("drag",w),c&&this.ph.draggable({cancel:"#"+this.htmlObject});var D,k;
this.ph.bind("touchstart",function(t){D=b.ph.offset(),k={left:t.originalEvent.touches[0].pageX,
top:t.originalEvent.touches[0].pageY}}),this.ph.bind("touchmove",function(t){var e={
top:D.top+t.originalEvent.touches[0].pageY-k.top,left:D.left+t.originalEvent.touches[0].pageX-k.left
};b.ph.offset(e),b.arrow.hide(),t.preventDefault()}),d&&(this.$overlay||(this.$overlay=$('<div id="popupComponentOverlay"></div>'),
this.popupOverlayClass&&this.$overlay.addClass(this.popupOverlayClass)),this.$overlay.appendTo("body").click(function(t){
t.stopPropagation(),b.hide()})),$("body").addClass("draggable-popup-fix")},hide:function(){
this.ph.hide(),this.$overlay&&(this.$overlay.unbind("click"),this.$overlay.detach()),
$("body").removeClass("draggable-popup-fix")},center:function(t,e,a,o,i){var h=a+t/2-e/2;
return h+e>i?i-e:o>h?o:h},offset:function(t,e,a,o,i,h,n){var r=a-e-o,p=a+t+o,s=r>i,c=h>p+e;
return"near"==n?s||!c?r:p:"far"==n&&(c||!s)?p:r}}),ExportPopupComponent=PopupComponent.extend({
ph:void 0,arrow:void 0,content:void 0,cancel:void 0,dataComponent:void 0,chartComponent:void 0,
baseSize:200,scalingFactor:1.5,clone:function(t,e,a){var o=this.dataComponent,i=this.chartComponent;
delete this.dataComponent,delete this.chartComponent;var h=this.base(t,e,a);if(o&&(this.dataComponent=o,
h.dataComponent=e[o.name]||o),i){this.chartComponent=i;var n=/render_(.*)/.test(i.name)?i.name.match(/render_(.*)/)[1]:null;
e[i.name]?(h.chartComponent=Dashboards.getComponentByName(e[i.name]),h.chartExportComponent=e[i.name]):n&&e[n]?(h.chartComponent=Dashboards.getComponentByName("render_"+e[n]),
h.chartExportComponent=e[n]):h.chartComponent=i,h.chartComponent=e[i.name]||i}return h;
},update:function(){var t=this;this.ph&&this.ph.remove(),this.chartComponent=window["render_"+this.chartExportComponent],
this.dataComponent=window["render_"+this.dataExportComponent],this.ph=$("<div>"),
$("#"+this.htmlObject).empty();var e=$('<div class="popupTitle">');if(e.text(this.title||"Export"),
e.click(function(a){t.popup(e),a.stopPropagation()}),$("#"+this.htmlObject).append(e),
this.chartComponent){var a="Export Chart";this.chartExportLabel&&this.chartExportLabel.length>0&&(a=this.chartExportLabel);
var o=$('<div class="exportElement">');o.text(a),o.click(function(){t.exportChart();
}),o.appendTo(t.ph)}if(this.dataComponent){var i="Export Data";this.dataExportLabel&&this.dataExportLabel.length>0&&(i=this.dataExportLabel);
var h=$('<div class="exportElement">');h.text(i),h.click(function(){t.exportData();
}),h.appendTo(t.ph)}$(this.contentLinks).each(function(e,a){var o=$('<div class="exportElement">');
o.text(a[0]),o.click(a[1]),o.appendTo(t.ph)}),this.ph.hide().appendTo($("body")),
this.ph.addClass("popupComponent"),this.ph.addClass("exportOptions"),this.cancel=$("<a>&nbsp;</a>"),
this.cancel.addClass("close").click(function(){t.hide()}),this.cancel.appendTo(this.ph),
this.arrow=$("<div class='arrow'>").appendTo(this.ph)},popup:function(t,e){this.base(t,e);
var a=this,o=function(t){var e=t.pageX,i=t.pageY,h=$("#"+a.htmlObject).position();
(e<h.left||e>h.left+$("#"+a.htmlObject).width()||i<h.top||i>h.top+$("#"+a.htmlObject).height())&&(a.hide(),
$(document).unbind("click",o))};$(document).click(o)},exportData:function(t){var e=void 0==t?this.dataExportType:t;
Dashboards.log("Exporting to "+e);for(var a=this.dataComponent.parameters.slice(),o=0;o<a.length;o++)if("metadata"===a[o][0]){
a[o]=a[o].slice(),a[o][1]="false";break}var i=this.dataComponent.chartDefinition||this.dataComponent.queryDefinition,h=Dashboards.getQuery(i);
h.exportData(e,a,{filename:this.dataExportAttachmentName+"."+e})},getExportChartOptions:function(){
for(var t=Dashboards.context.fullPath?Dashboards.context.fullPath.replace(/[^\/]+$/,""):Dashboards.context.path.replace(/[^\/]+$/,""),e={
outputType:this.chartExportType,script:t+this.chartExportComponent+".js"},a=this.chartComponent.parameters,o=0,i=a.length;i>o;o++){
var h=a[o][0],n=a[o][1],r=Dashboards.ev(Dashboards.getParameterValue(n));void 0!==r&&(e["param"+h]="metadata"!=h?r:"false");
}var p=Dashboards.debug;return p>1&&(e.paramdebug=!0,e.paramdebugLevel=p),e},getExportChartUrl:function(t){
return wd.helpers.cggHelper.getCggDrawUrl()+"?"+$.param(t)},exportChart:function(){
var t=this.getExportChartOptions();Dashboards.log("Exporting to "+t.outputType);var e=this.getExportChartUrl(t),a=this,o=$('<div class="exportChartMasterDiv">'),i=Math.max(800,this.chartComponent.chartDefinition.width),h=$("<div class='exportChartPopupButtons'>");
o.append(h);var n=$("<div class='exportChartTitle'>Export Options</div>");h.append(n);
var r=$("<div class='exportChartPopupButton exportChartButtonNotLast'>Small</div>");
r.click(function(){$(".exportChartPopupButtonClicked").each(function(t,e){$(e).removeClass("exportChartPopupButtonClicked");
}),$(this).addClass("exportChartPopupButtonClicked"),$("#width").attr("disabled",!0),
$("#height").attr("disabled",!0),$("#width").val(a.baseSize),$("#height").val(a.baseSize*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width));
}),h.append(r);var p=$("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Medium</div>");
p.click(function(){$(".exportChartPopupButtonClicked").each(function(t,e){$(e).removeClass("exportChartPopupButtonClicked");
}),$(this).addClass("exportChartPopupButtonClicked"),$("#width").attr("disabled",!0),
$("#height").attr("disabled",!0);var t=a.baseSize*a.scalingFactor;$("#width").val(t),
$("#height").val(t*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width));
}),p.getComponentData=function(){return[a.chartComponent.chartDefinition.width,a.chartComponent.chartDefinition.height];
},h.append(p);var s=$("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Large</div>");
s.click(function(){$(".exportChartPopupButtonClicked").each(function(t,e){$(e).removeClass("exportChartPopupButtonClicked");
}),$(this).addClass("exportChartPopupButtonClicked"),$("#width").attr("disabled",!0),
$("#height").attr("disabled",!0);var t=a.baseSize*a.scalingFactor*a.scalingFactor;
$("#width").val(t),$("#height").val(t*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width));
}),h.append(s);var c=$("<div class='exportChartPopupButton exportChartButtonMiddle'>Custom</div>");
c.click(function(){$(".exportChartPopupButtonClicked").each(function(t,e){$(e).removeClass("exportChartPopupButtonClicked");
}),$(this).addClass("exportChartPopupButtonClicked"),$("#width").removeAttr("disabled"),
$("#height").removeAttr("disabled"),$("#width").val(a.chartComponent.chartDefinition.width),
$("#height").val(a.chartComponent.chartDefinition.height)}),h.append(c);var d=$("<div class='exportChartInput'>&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;Width:&nbsp;<input id='width' disabled='true' value='"+this.chartComponent.chartDefinition.width+'\' onChange=\'javascript:$("#height").val($("#width").val() * '+a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width+");' type='text'></div>");
h.append(d);var l=$("<div class='exportChartInput'>Height:&nbsp;</span><input id='height' disabled='true' value='"+this.chartComponent.chartDefinition.height+"' type='text'></div>");
h.append(l);var u=$("<div class='exportChartPopupButton exportChartOkButton'>Export</div>");
u.click(function(){var t,o;switch($(".exportChartPopupButtonClicked").text()){case"Small":
t=[a.baseSize,a.BaseSize*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Medium":o=a.baseSize*a.scalingFactor,t=[o,o*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Large":o=a.baseSize*a.scalingFactor*a.scalingFactor,t=[o,o*(a.chartComponent.chartDefinition.height/a.chartComponent.chartDefinition.width)];
break;case"Custom":default:t=[$("#width").val(),$("#height").val()]}var i=$('<iframe style="display:none">');
i.detach(),i[0].src=e+"&attachmentName="+a.dataExportAttachmentName+"."+a.chartExportType+"&paramwidth="+t[0]+"&paramheight="+t[1],
i.appendTo($("body"))}),h.append(u);var v=$("<img src='"+e+"&paramwidth="+this.chartComponent.chartDefinition.width+"&paramheight="+this.chartComponent.chartDefinition.height+"'/>"),C=$("<div class='exportChartImageDiv'>");
C.append(v),C.append("&nbsp;"),o.append(C);var m=$('<div class="exportChartMasterDivHolder">');
m.append(o),$.fancybox({type:"html",closeBtn:!0,content:m,width:i,height:this.chartComponent.chartDefinition.height+60,
autoDimensions:!1})}});