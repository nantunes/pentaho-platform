define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom","dojo/dom-construct","dojo/domReady!"],function(i,e,t,n,r,o){
function a(t){return t=i.mixin(e.clone(l),t||{}),"path"in t||t.testing?(t.testing&&(t.path=""),
"id"in t||(t.id=s+p++),t):(console.error("dojox.embed.Quicktime(ctor):: no path reference to a QuickTime movie was provided."),
null)}function d(){setTimeout(function(){var i=document[b.id],e=r.byId(f);if(i)try{
var t=i.GetQuickTimeVersion().split(".");v.version={major:parseInt(t[0]||0),minor:parseInt(t[1]||0),
rev:parseInt(t[2]||0)},(v.supported=t[0])&&v.onInitialize(),k=0}catch(n){k--&&d();
}!k&&e&&o.destroy(e)},20)}var u,c,m={major:0,minor:0,rev:0},l={width:320,height:240,
redirect:null},s="dojox-embed-quicktime-",p=0,h='This content requires the <a href="http://www.apple.com/quicktime/download/" title="Download and install QuickTime.">QuickTime plugin</a>.';
i.getObject("dojox.embed",!0);t("ie")?(c=function(){function i(i){return t.substring(i,i+1)-0||0;
}try{var e=new ActiveXObject("QuickTimeCheckObject.QuickTimeCheck.1");if(void 0!==e){
var t=e.QuickTimeVersion.toString(16);return m={major:i(0),minor:i(1),rev:i(2)},e.IsQuickTimeAvailable(0);
}}catch(n){}return!1}(),u=function(i){if(!c)return{id:null,markup:h};if(i=a(i),!i)return null;
var e='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0" id="'+i.id+'" width="'+i.width+'" height="'+i.height+'"><param name="src" value="'+i.path+'"/>';
for(var t in i.params||{})e+='<param name="'+t+'" value="'+i.params[t]+'"/>';return e+="</object>",
{id:i.id,markup:e}}):(c=function(){for(var i=0,e=navigator.plugins,t=e.length;t>i;i++)if(e[i].name.indexOf("QuickTime")>-1)return!0;
return!1}(),u=function(i){if(!c)return{id:null,markup:h};if(i=a(i),!i)return null;
var e='<embed type="video/quicktime" src="'+i.path+'" id="'+i.id+'" name="'+i.id+'" pluginspage="www.apple.com/quicktime/download" enablejavascript="true" width="'+i.width+'" height="'+i.height+'"';
for(var t in i.params||{})e+=" "+t+'="'+i.params[t]+'"';return e+="></embed>",{id:i.id,
markup:e}});var v=function(i,e){return v.place(i,e)};if(i.mixin(v,{minSupported:6,
available:c,supported:c,version:m,initialized:!1,onInitialize:function(){v.initialized=!0;
},place:function(i,e){var a=u(i);return(e=r.byId(e))||(e=o.create("div",{id:a.id+"-container"
},n.body())),a&&(e.innerHTML=a.markup,a.id)?t("ie")?dom.byId(a.id):document[a.id]:null;
}}),t("ie"))t("ie")&&c&&setTimeout(function(){v.onInitialize()},10);else{var f="-qt-version-test",b=u({
testing:!0,width:4,height:4}),k=10,w="-1000px",g="1px";o.create("div",{innerHTML:b.markup,
id:f,style:{top:w,left:0,width:g,height:g,overflow:"hidden",position:"absolute"}},n.body()),
d()}return e.setObject("dojox.embed.Quicktime",v),v});