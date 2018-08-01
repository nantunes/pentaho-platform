define("cde/components/PopupComponent/PopupComponent",["cdf/components/BaseComponent","cdf/lib/jquery","css!./PopupComponent"],function(t,e){
var o=1;return t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,$overlay:void 0,
popupClass:void 0,popupOverlayClass:void 0,horizontalScroll:void 0,verticalScroll:void 0,
update:function(){var t=this;this.content=e("#"+this.htmlObject).detach(),this.ph=this.ph?this.ph.empty():e("<div>").appendTo(e("body")),
this.content.appendTo(this.ph),this.ph.hide(),this.ph.addClass("popupComponent"),
this.popupClass&&this.ph.addClass(this.popupClass),this.cancel=e("<a>&nbsp;</a>"),
this.cancel.addClass("close").click(function(){t.hide()}),this.cancel.appendTo(this.ph),
this.arrow=e("<div class='arrow'>").appendTo(this.ph),this.content.removeClass("hidePopup");
},clone:function(t,a,i){var n=this.base(t,a,i);return n.ph=this.ph.clone(),n.ph.insertAfter(this.ph),
n.ph.hide(),n.ph.find("[id]").each(function(t,a){var n=e(a),r=n.attr("id");r&&r in i?n.attr("id",i[r]):n.attr("id",r+"_"+o++);
}),n},popup:function(t,o){var a,i=t.offset(),n={top:"auto",bottom:"auto",left:"auto",
right:"auto"},r=20,p=12,h=45,s=this.ph.outerHeight(),c=this.ph.outerWidth();o=o||this.gravity;
var d="undefined"==typeof this.draggable?!0:this.draggable;this.horizontalScroll&&e("#"+this.htmlObject).css("overflow-x","scroll"),
this.verticalScroll&&e("#"+this.htmlObject).css("overflow-y","scroll");var l="undefined"==typeof this.closeOnClickOutside?!1:this.closeOnClickOutside;
this.arrow.css({top:"",left:"",bottom:"",right:""}),this.arrow.show(),this.ph.removeClass("north south east west");
var u,m,C,f=r,v=e(document).width()-r,g=r,x=e(document).height()-r;switch(o){case"N":
C=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),n.left=this.center(t.outerWidth(),c,i.left,f,v),
m="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),a=i.left-n.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
n.top=this.offset(m,s,i.top+C,p,g,x,"near"),this.arrow.css("left",this.center(t.outerWidth(),h,a,0,c)),
this.ph.addClass(n.top<i.top?"north":"south");break;case"S":C=parseInt(t.css("padding-top").replace(/(.*)px/,"$1"),10),
m="ownerSVGElement"in t[0]?t.attr("height")?t.attr("height")-0:0:t.height(),n.left=this.center(t.outerWidth(),c,i.left,f,v),
n.top=this.offset(m,s,i.top+C,p,g,x,"far"),a=i.left-n.left-this.ph.css("border-top-width").replace(/(.*)px/,"$1"),
this.arrow.css("left",this.center(t.outerWidth(),h,a,0,c)),this.ph.addClass(n.top<i.top?"north":"south");
break;case"W":C=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),n.top=this.center(t.outerHeight(),s,i.top,g,x),
u="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),n.left=this.offset(t.width(),c,i.left+C,p,f,v,"near"),
a=i.top-n.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),this.arrow.css("top",this.center(t.outerHeight(),h,a,0,s)),
this.ph.addClass(n.left<i.left?"west":"east");break;case"E":C=parseInt(t.css("padding-left").replace(/(.*)px/,"$1"),10),
n.top=this.center(t.outerHeight(),s,i.top,g,x),u="ownerSVGElement"in t[0]?t.attr("width")?t.attr("width")-0:0:t.width(),
n.left=this.offset(u,c,i.left+C,p,f,v,"far"),a=i.top-n.top-this.ph.css("border-left-width").replace(/(.*)px/,"$1"),
this.arrow.css("top",this.center(t.outerHeight(),h,a,0,s)),this.ph.addClass(n.left<i.left?"west":"east");
}this.ph.css(n),this.ph.show();var b,w=this;b=function(t){27==t.which&&(w.ph.hide(),
e(document).unbind("keydown",b))},e(document).keydown(b);var y=function(){w.arrow.hide();
};this.ph.bind("drag",y),d&&this.ph.draggable({cancel:"#"+this.htmlObject});var k,E;
this.ph.bind("touchstart",function(t){k=w.ph.offset(),E={left:t.originalEvent.touches[0].pageX,
top:t.originalEvent.touches[0].pageY}}),this.ph.bind("touchmove",function(t){var e={
top:k.top+t.originalEvent.touches[0].pageY-E.top,left:k.left+t.originalEvent.touches[0].pageX-E.left
};w.ph.offset(e),w.arrow.hide(),t.preventDefault()}),l&&(this.$overlay||(this.$overlay=e('<div id="popupComponentOverlay"></div>'),
this.popupOverlayClass&&this.$overlay.addClass(this.popupOverlayClass)),this.$overlay.appendTo("body").click(function(t){
t.stopPropagation(),w.hide()})),e("body").addClass("draggable-popup-fix")},hide:function(){
this.ph.hide(),this.$overlay&&(this.$overlay.unbind("click"),this.$overlay.detach()),
e("body").removeClass("draggable-popup-fix")},center:function(t,e,o,a,i){var n=o+t/2-e/2;
return n+e>i?i-e:a>n?a:n},offset:function(t,e,o,a,i,n,r){var p=o-e-a,h=o+t+a,s=p>i,c=n>h+e;
return"near"==r?s||!c?p:h:"far"==r&&(c||!s)?h:p}})}),define("cde/components/PopupComponent",["cde/components/PopupComponent/PopupComponent"],function(t){
return t}),define("cdf/components/CggComponent.ext",["pentaho/environment"],function(t){
return{getCggDrawUrl:function(){return t.server.root+"plugin/cgg/api/services/draw";
}}}),define("cde/components/PopupComponent/ExportPopupComponent",["./PopupComponent","cdf/components/CggComponent.ext","cdf/dashboard/Utils","cdf/Logger","cdf/lib/jquery","amd!cdf/lib/jquery.fancybox","css!./ExportPopupComponent"],function(t,e,o,a,i){
return t.extend({ph:void 0,arrow:void 0,content:void 0,cancel:void 0,dataComponent:void 0,
chartComponent:void 0,baseSize:200,scalingFactor:1.5,clone:function(t,e,o){var a=this.dataComponent,i=this.chartComponent;
delete this.dataComponent,delete this.chartComponent;var n=this.base(t,e,o);if(a&&(this.dataComponent=a,
n.dataComponent=e[a.name]||a),i){this.chartComponent=i;var r=/render_(.*)/.test(i.name)?i.name.match(/render_(.*)/)[1]:null;
e[i.name]?(n.chartComponent=this.dashboard.getComponentByName(e[i.name]),n.chartExportComponent=e[i.name]):r&&e[r]?(n.chartComponent=this.dashboard.getComponentByName("render_"+e[r]),
n.chartExportComponent=e[r]):n.chartComponent=i,n.chartComponent=e[i.name]||i}return n;
},update:function(){var t=this;t.ph&&t.ph.remove(),t.chartComponent=t.dashboard.getComponentByName("render_"+t.chartExportComponent),
t.dataComponent=t.dashboard.getComponentByName("render_"+t.dataExportComponent),t.ph=i("<div>"),
i("#"+t.htmlObject).empty();var e=i('<div class="popupTitle">');if(e.text(t.title||"Export"),
e.click(function(o){t.popup(e),o.stopPropagation()}),i("#"+t.htmlObject).append(e),
t.chartComponent){var o="Export Chart";t.chartExportLabel&&t.chartExportLabel.length>0&&(o=t.chartExportLabel);
var a=i('<div class="exportElement">');a.text(o),a.click(function(){t.exportChart();
}),a.appendTo(t.ph)}if(t.dataComponent){var n="Export Data";t.dataExportLabel&&t.dataExportLabel.length>0&&(n=t.dataExportLabel);
var r=i('<div class="exportElement">');r.text(n),r.click(function(){t.exportData();
}),r.appendTo(t.ph)}i(t.contentLinks).each(function(e,o){var a=i('<div class="exportElement">');
a.text(o[0]),a.click(o[1]),a.appendTo(t.ph)}),t.ph.hide().appendTo(i("body")),t.ph.addClass("popupComponent"),
t.ph.addClass("exportOptions"),t.cancel=i("<a>&nbsp;</a>"),t.cancel.addClass("close").click(function(){
t.hide()}),t.cancel.appendTo(t.ph),t.arrow=i("<div class='arrow'>").appendTo(t.ph);
},popup:function(t,e){var o=this;o.base(t,e);var a=function(t){var e=t.pageX,n=t.pageY,r=i("#"+o.htmlObject).position();
(e<r.left||e>r.left+i("#"+o.htmlObject).width()||n<r.top||n>r.top+i("#"+o.htmlObject).height())&&(o.hide(),
i(document).unbind("click",a))};i(document).click(a)},exportData:function(t){var e=void 0==t?this.dataExportType:t;
a.log("Exporting to "+e);for(var o=this.dataComponent.parameters.slice(),i=0;i<o.length;i++)if("metadata"===o[i][0]){
o[i]=o[i].slice(),o[i][1]="false";break}var n=this.dataComponent.chartDefinition||this.dataComponent.queryDefinition,r=this.dashboard.getQuery(n);
r.exportData(e,o,{filename:this.dataExportAttachmentName+"."+e})},getExportChartOptions:function(){
for(var t=this.dashboard.context.fullPath?this.dashboard.context.fullPath.replace(/[^\/]+$/,""):this.dashboard.context.path.replace(/[^\/]+$/,""),e={
outputType:this.chartExportType,script:t+this.chartExportComponent+".js"},i=this.chartComponent.parameters,n=0,r=i.length;r>n;n++){
var p=i[n][0],h=i[n][1],s=o.ev(this.dashboard.getParameterValue(h));void 0!==s&&(e["param"+p]="metadata"!=p?s:"false");
}var c=a.debug;return c>1&&(e.paramdebug=!0,e.paramdebugLevel=c),e},getExportChartUrl:function(t){
return e.getCggDrawUrl()+"?"+i.param(t)},exportChart:function(){var t=this.getExportChartOptions();
a.log("Exporting to "+t.outputType);var e=this.getExportChartUrl(t),o=this,n=i('<div class="exportChartMasterDiv">'),r=Math.max(800,this.chartComponent.chartDefinition.width),p=i("<div class='exportChartPopupButtons'>");
n.append(p);var h=i("<div class='exportChartTitle'>Export Options</div>");p.append(h);
var s=i("<div class='exportChartPopupButton exportChartButtonNotLast'>Small</div>");
s.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked");
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),
i("#height").attr("disabled",!0),i("#width").val(o.baseSize),i("#height").val(o.baseSize*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width));
}),p.append(s);var c=i("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Medium</div>");
c.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked");
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),
i("#height").attr("disabled",!0);var t=o.baseSize*o.scalingFactor;i("#width").val(t),
i("#height").val(t*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width));
}),c.getComponentData=function(){return[o.chartComponent.chartDefinition.width,o.chartComponent.chartDefinition.height];
},p.append(c);var d=i("<div class='exportChartPopupButton exportChartButtonNotLast exportChartButtonMiddle'>Large</div>");
d.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked");
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").attr("disabled",!0),
i("#height").attr("disabled",!0);var t=o.baseSize*o.scalingFactor*o.scalingFactor;
i("#width").val(t),i("#height").val(t*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width));
}),p.append(d);var l=i("<div class='exportChartPopupButton exportChartButtonMiddle'>Custom</div>");
l.click(function(){i(".exportChartPopupButtonClicked").each(function(t,e){i(e).removeClass("exportChartPopupButtonClicked");
}),i(this).addClass("exportChartPopupButtonClicked"),i("#width").removeAttr("disabled"),
i("#height").removeAttr("disabled"),i("#width").val(o.chartComponent.chartDefinition.width),
i("#height").val(o.chartComponent.chartDefinition.height)}),p.append(l);var u=i("<div class='exportChartInput'>&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;Width:&nbsp;<input id='width' disabled='true' value='"+this.chartComponent.chartDefinition.width+'\' onChange=\'javascript:$("#height").val($("#width").val() * '+o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width+");' type='text'></div>");
p.append(u);var m=i("<div class='exportChartInput'>Height:&nbsp;</span><input id='height' disabled='true' value='"+this.chartComponent.chartDefinition.height+"' type='text'></div>");
p.append(m);var C=i("<div class='exportChartPopupButton exportChartOkButton'>Export</div>");
C.click(function(){var t,a;switch(i(".exportChartPopupButtonClicked").text()){case"Small":
t=[o.baseSize,o.BaseSize*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width)];
break;case"Medium":a=o.baseSize*o.scalingFactor,t=[a,a*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width)];
break;case"Large":a=o.baseSize*o.scalingFactor*o.scalingFactor,t=[a,a*(o.chartComponent.chartDefinition.height/o.chartComponent.chartDefinition.width)];
break;case"Custom":default:t=[i("#width").val(),i("#height").val()]}var n=i('<iframe style="display:none">');
n.detach(),n[0].src=e+"&attachmentName="+o.dataExportAttachmentName+"."+o.chartExportType+"&paramwidth="+t[0]+"&paramheight="+t[1],
n.appendTo(i("body"))}),p.append(C);var f=i("<img src='"+e+"&paramwidth="+this.chartComponent.chartDefinition.width+"&paramheight="+this.chartComponent.chartDefinition.height+"'/>"),v=i("<div class='exportChartImageDiv'>");
v.append(f),v.append("&nbsp;"),n.append(v);var g=i('<div class="exportChartMasterDivHolder">');
g.append(n),i.fancybox({type:"html",closeBtn:!0,content:g,width:r,height:this.chartComponent.chartDefinition.height+60,
autoDimensions:!1})}})});