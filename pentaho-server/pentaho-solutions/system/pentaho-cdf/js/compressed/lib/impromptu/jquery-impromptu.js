!function(t){"use strict";t.prompt=function(e,o){void 0!==o&&void 0!==o.classes&&"string"==typeof o.classes&&(o={
box:o.classes}),t.prompt.options=t.extend({},t.prompt.defaults,o),t.prompt.currentPrefix=t.prompt.options.prefix,
t.prompt.timeout&&clearTimeout(t.prompt.timeout),t.prompt.timeout=!1;var p=t.prompt.options,r=t(document.body),i=t(window),n='<div class="'+t.prompt.options.prefix+"box "+p.classes.box+'">';
n+=p.useiframe&&t("object, applet").length>0?'<iframe src="javascript:false;" style="display:block;position:absolute;z-index:-1;" class="'+p.prefix+"fade "+p.classes.fade+'"></iframe>':'<div class="'+p.prefix+"fade "+p.classes.fade+'"></div>',
n+='<div class="'+p.prefix+" "+p.classes.prompt+'"><form action="javascript:false;" onsubmit="return false;" class="'+p.prefix+"form "+p.classes.form+'"><div class="'+p.prefix+"close "+p.classes.close+'">'+p.closeText+'</div><div class="'+p.prefix+'states"></div></form></div></div>',
t.prompt.jqib=t(n).appendTo(r),t.prompt.jqi=t.prompt.jqib.children("."+p.prefix),
t.prompt.jqif=t.prompt.jqib.children("."+p.prefix+"fade"),e.constructor===String&&(e={
state0:{title:p.title,html:e,buttons:p.buttons,position:p.position,focus:p.focus,
defaultButton:p.defaultButton,submit:p.submit}}),t.prompt.options.states={};var s,a;
for(s in e)a=t.extend({},t.prompt.defaults.state,{name:s},e[s]),t.prompt.addState(a.name,a),
""===t.prompt.currentStateName&&(t.prompt.currentStateName=a.name);t.prompt.jqi.on("click","."+p.prefix+"buttons button",function(e){
var o=t(this),r=o.parents("."+p.prefix+"state"),i=t.prompt.options.states[r.data("jqi-name")],n=r.children("."+p.prefix+"message"),s=i.buttons[o.text()]||i.buttons[o.html()],a={};
if(void 0===s)for(var m in i.buttons)(i.buttons[m].title===o.text()||i.buttons[m].title===o.html())&&(s=i.buttons[m].value);
t.each(t.prompt.jqi.children("form").serializeArray(),function(t,e){void 0===a[e.name]?a[e.name]=e.value:typeof a[e.name]===Array||"object"==typeof a[e.name]?a[e.name].push(e.value):a[e.name]=[a[e.name],e.value];
});var u=new t.Event("impromptu:submit");u.stateName=i.name,u.state=r,r.trigger(u,[s,n,a]),
u.isDefaultPrevented()||t.prompt.close(!0,s,n,a)});var m=function(){if(p.persistent){
var e=p.top.toString().indexOf("%")>=0?i.height()*(parseInt(p.top,10)/100):parseInt(p.top,10),o=parseInt(t.prompt.jqi.css("top").replace("px",""),10)-e;
t("html,body").animate({scrollTop:o},"fast",function(){var e=0;t.prompt.jqib.addClass(p.prefix+"warning");
var o=setInterval(function(){t.prompt.jqib.toggleClass(p.prefix+"warning"),e++>1&&(clearInterval(o),
t.prompt.jqib.removeClass(p.prefix+"warning"))},100)})}else t.prompt.close(!0)},u=function(e){
var o=window.event?event.keyCode:e.keyCode;if(27===o&&m(),13===o){var r=t.prompt.getCurrentState().find("."+p.prefix+"defaultbutton"),i=t(e.target);
i.is("textarea,."+p.prefix+"button")===!1&&r.length>0&&(e.preventDefault(),r.click());
}if(9===o){var n=t("input,select,textarea,button",t.prompt.getCurrentState()),s=!e.shiftKey&&e.target===n[n.length-1],a=e.shiftKey&&e.target===n[0];
if(s||a)return setTimeout(function(){if(n){var t=n[a===!0?n.length-1:0];t&&t.focus();
}},10),!1}};return t.prompt.position(),t.prompt.style(),t.prompt.jqif.click(m),i.resize({
animate:!1},t.prompt.position),t.prompt.jqi.find("."+p.prefix+"close").click(t.prompt.close),
t.prompt.jqib.on("keydown",u).on("impromptu:loaded",p.loaded).on("impromptu:close",p.close).on("impromptu:statechanging",p.statechanging).on("impromptu:statechanged",p.statechanged),
t.prompt.jqif[p.show](p.overlayspeed),t.prompt.jqi[p.show](p.promptspeed,function(){
var e=t.prompt.jqi.find("."+p.prefix+"states ."+p.prefix+"state").eq(0);t.prompt.goToState(e.data("jqi-name")),
t.prompt.jqib.trigger("impromptu:loaded")}),p.timeout>0&&(t.prompt.timeout=setTimeout(function(){
t.prompt.close(!0)},p.timeout)),t.prompt.jqib},t.prompt.defaults={prefix:"jqi",classes:{
box:"",fade:"",prompt:"",form:"",close:"",title:"",message:"",buttons:"",button:"",
defaultButton:""},title:"",closeText:"&times;",buttons:{Ok:!0},loaded:function(t){},
submit:function(t,e,o,p){},close:function(t,e,o,p){},statechanging:function(t,e,o){},
statechanged:function(t,e){},opacity:.6,zIndex:999,overlayspeed:"slow",promptspeed:"fast",
show:"fadeIn",focus:0,defaultButton:0,useiframe:!1,top:"15%",position:{container:null,
x:null,y:null,arrow:null,width:null},persistent:!0,timeout:0,states:{},state:{name:null,
title:"",html:"",buttons:{Ok:!0},focus:0,defaultButton:0,position:{container:null,
x:null,y:null,arrow:null,width:null},submit:function(t,e,o,p){return!0}}},t.prompt.currentPrefix=t.prompt.defaults.prefix,
t.prompt.currentStateName="",t.prompt.setDefaults=function(e){t.prompt.defaults=t.extend({},t.prompt.defaults,e);
},t.prompt.setStateDefaults=function(e){t.prompt.defaults.state=t.extend({},t.prompt.defaults.state,e);
},t.prompt.position=function(e){var o=t.fx.off,p=t.prompt.getCurrentState(),r=t.prompt.options.states[p.data("jqi-name")],i=r?r.position:void 0,n=t(window),s=document.body.scrollHeight,a=t(window).height(),m=(t(document).height(),
s>a?s:a),u=parseInt(n.scrollTop(),10)+(t.prompt.options.top.toString().indexOf("%")>=0?a*(parseInt(t.prompt.options.top,10)/100):parseInt(t.prompt.options.top,10));
if(void 0!==e&&e.data.animate===!1&&(t.fx.off=!0),t.prompt.jqib.css({position:"absolute",
height:m,width:"100%",top:0,left:0,right:0,bottom:0}),t.prompt.jqif.css({position:"fixed",
height:m,width:"100%",top:0,left:0,right:0,bottom:0}),i&&i.container){var f=t(i.container).offset();
t.isPlainObject(f)&&void 0!==f.top&&(t.prompt.jqi.css({position:"absolute"}),t.prompt.jqi.animate({
top:f.top+i.y,left:f.left+i.x,marginLeft:0,width:void 0!==i.width?i.width:null}),
u=f.top+i.y-(t.prompt.options.top.toString().indexOf("%")>=0?a*(parseInt(t.prompt.options.top,10)/100):parseInt(t.prompt.options.top,10)),
t("html,body").animate({scrollTop:u},"slow","swing",function(){}))}else i&&i.width?(t.prompt.jqi.css({
position:"absolute",left:"50%"}),t.prompt.jqi.animate({top:i.y||u,left:i.x||"50%",
marginLeft:i.width/2*-1,width:i.width})):t.prompt.jqi.css({position:"absolute",top:u,
left:"50%",marginLeft:t.prompt.jqi.outerWidth(!1)/2*-1});void 0!==e&&e.data.animate===!1&&(t.fx.off=o);
},t.prompt.style=function(){t.prompt.jqif.css({zIndex:t.prompt.options.zIndex,display:"none",
opacity:t.prompt.options.opacity}),t.prompt.jqi.css({zIndex:t.prompt.options.zIndex+1,
display:"none"}),t.prompt.jqib.css({zIndex:t.prompt.options.zIndex})},t.prompt.get=function(e){
return t("."+t.prompt.currentPrefix)},t.prompt.addState=function(e,o,p){var r,i,n,s="",a=null,m="",u="",f=t.prompt.options,l=t("."+t.prompt.currentPrefix+"states"),c=0;
o=t.extend({},t.prompt.defaults.state,{name:e},o),null!==o.position.arrow&&(m='<div class="'+f.prefix+"arrow "+f.prefix+"arrow"+o.position.arrow+'"></div>'),
o.title&&""!==o.title&&(u='<div class="lead '+f.prefix+"title "+f.classes.title+'">'+o.title+"</div>"),
s+='<div id="'+f.prefix+"state_"+e+'" class="'+f.prefix+'state" data-jqi-name="'+e+'" style="display:none;">'+m+u+'<div class="'+f.prefix+"message "+f.classes.message+'">'+o.html+'</div><div class="'+f.prefix+"buttons "+f.classes.buttons+'"'+(t.isEmptyObject(o.buttons)?'style="display:none;"':"")+">";
for(i in o.buttons)n=o.buttons[i],r=o.focus===c||isNaN(o.focus)&&o.defaultButton===c?t.prompt.currentPrefix+"defaultbutton "+f.classes.defaultButton:"",
"object"==typeof n?(s+='<button class="'+f.classes.button+" "+t.prompt.currentPrefix+"button "+r,
"undefined"!=typeof n.classes&&(s+=" "+(t.isArray(n.classes)?n.classes.join(" "):n.classes)+" "),
s+='" name="'+f.prefix+"_"+e+"_button"+n.title.replace(/[^a-z0-9]+/gi,"")+'" id="'+f.prefix+"_"+e+"_button"+n.title.replace(/[^a-z0-9]+/gi,"")+'" value="'+n.value+'">'+n.title+"</button>"):s+='<button class="'+t.prompt.currentPrefix+"button "+f.classes.button+" "+r+'" name="'+f.prefix+"_"+e+"_button"+i.replace(/[^a-z0-9]+/gi,"")+'" id="'+f.prefix+"_"+e+"_button"+i.replace(/[^a-z0-9]+/gi,"")+'" value="'+n+'">'+i+"</button>",
c++;return s+="</div></div>",a=t(s),a.on("impromptu:submit",o.submit),void 0!==p?l.find("#"+t.prompt.currentPrefix+"state_"+p).after(a):l.append(a),
t.prompt.options.states[e]=o,a},t.prompt.removeState=function(e,o){var p=t.prompt.getState(e),r=function(){
p.remove()};return 0===p.length?!1:("none"!==p.css("display")?void 0!==o&&t.prompt.getState(o).length>0?t.prompt.goToState(o,!1,r):p.next().length>0?t.prompt.nextState(r):p.prev().length>0?t.prompt.prevState(r):t.prompt.close():p.slideUp("slow",r),
!0)},t.prompt.getState=function(e){return t("#"+t.prompt.currentPrefix+"state_"+e);
},t.prompt.getStateContent=function(e){return t.prompt.getState(e)},t.prompt.getCurrentState=function(){
return t.prompt.getState(t.prompt.getCurrentStateName())},t.prompt.getCurrentStateName=function(){
return t.prompt.currentStateName},t.prompt.goToState=function(e,o,p){var r=(t.prompt.get(),
t.prompt.options),i=t.prompt.getState(e),n=r.states[i.data("jqi-name")],s=new t.Event("impromptu:statechanging");
return"function"==typeof o&&(p=o,o=!1),t.prompt.jqib.trigger(s,[t.prompt.getCurrentStateName(),e]),
!s.isDefaultPrevented()&&i.length>0&&(t.prompt.jqi.find("."+t.prompt.currentPrefix+"parentstate").removeClass(t.prompt.currentPrefix+"parentstate"),
o?(t.prompt.jqi.find("."+t.prompt.currentPrefix+"substate").not(i).slideUp(r.promptspeed).removeClass("."+t.prompt.currentPrefix+"substate").find("."+t.prompt.currentPrefix+"arrow").hide(),
t.prompt.jqi.find("."+t.prompt.currentPrefix+"state:visible").addClass(t.prompt.currentPrefix+"parentstate"),
i.addClass(t.prompt.currentPrefix+"substate")):t.prompt.jqi.find("."+t.prompt.currentPrefix+"state").not(i).slideUp(r.promptspeed).find("."+t.prompt.currentPrefix+"arrow").hide(),
t.prompt.currentStateName=n.name,i.slideDown(r.promptspeed,function(){var o=t(this);
"string"==typeof n.focus?o.find(n.focus).eq(0).focus():o.find("."+t.prompt.currentPrefix+"defaultbutton").focus(),
o.find("."+t.prompt.currentPrefix+"arrow").show(r.promptspeed),"function"==typeof p&&t.prompt.jqib.on("impromptu:statechanged",p),
t.prompt.jqib.trigger("impromptu:statechanged",[e]),"function"==typeof p&&t.prompt.jqib.off("impromptu:statechanged",p);
}),o||t.prompt.position()),i},t.prompt.nextState=function(e){var o=t("#"+t.prompt.currentPrefix+"state_"+t.prompt.getCurrentStateName()).next();
return o.length>0&&t.prompt.goToState(o.attr("id").replace(t.prompt.currentPrefix+"state_",""),e),
o},t.prompt.prevState=function(e){var o=t("#"+t.prompt.currentPrefix+"state_"+t.prompt.getCurrentStateName()).prev();
return o.length>0&&t.prompt.goToState(o.attr("id").replace(t.prompt.currentPrefix+"state_",""),e),
o},t.prompt.close=function(e,o,p,r){t.prompt.timeout&&(clearTimeout(t.prompt.timeout),
t.prompt.timeout=!1),t.prompt.jqib&&t.prompt.jqib.fadeOut("fast",function(){t.prompt.jqib.trigger("impromptu:close",[o,p,r]),
t.prompt.jqib.remove(),t(window).off("resize",t.prompt.position)}),t.prompt.currentStateName="";
},t.fn.prompt=function(e){void 0===e&&(e={}),void 0===e.withDataAndEvents&&(e.withDataAndEvents=!1),
t.prompt(t(this).clone(e.withDataAndEvents).html(),e)}}(jQuery);