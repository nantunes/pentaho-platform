dojo.provide("dojox.flash._base"),dojo.experimental("dojox.flash"),dojo.require("dojo.window"),
dojox.flash={ready:!1,url:null,_visible:!0,_loadedListeners:[],_installingListeners:[],
setSwf:function(e,o){this.url=e,this._visible=!0,null!==o&&void 0!==o&&(this._visible=o),
this._initialize()},addLoadedListener:function(e){this._loadedListeners.push(e)},
addInstallingListener:function(e){this._installingListeners.push(e)},loaded:function(){
if(dojox.flash.ready=!0,dojox.flash._loadedListeners.length)for(var e=0;e<dojox.flash._loadedListeners.length;e++)dojox.flash._loadedListeners[e].call(null);
},installing:function(){if(dojox.flash._installingListeners.length)for(var e=0;e<dojox.flash._installingListeners.length;e++)dojox.flash._installingListeners[e].call(null);
},_initialize:function(){var e=new dojox.flash.Install;dojox.flash.installer=e,e.needed()?e.install():(dojox.flash.obj=new dojox.flash.Embed(this._visible),
dojox.flash.obj.write(),dojox.flash.comm=new dojox.flash.Communicator)}},dojox.flash.Info=function(){
this._detectVersion()},dojox.flash.Info.prototype={version:-1,versionMajor:-1,versionMinor:-1,
versionRevision:-1,capable:!1,installing:!1,isVersionOrAbove:function(e,o,t){return t=parseFloat("."+t),
this.versionMajor>=e&&this.versionMinor>=o&&this.versionRevision>=t?!0:!1},_detectVersion:function(){
for(var e,o=25;o>0;o--){if(dojo.isIE){var t;try{t=o>6?new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+o):new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
"object"==typeof t&&(6==o&&(t.AllowScriptAccess="always"),e=t.GetVariable("$version"));
}catch(i){continue}}else e=this._JSFlashInfo(o);if(-1==e)return void(this.capable=!1);
if(0!=e){var a;if(dojo.isIE){var s=e.split(" "),n=s[1];a=n.split(",")}else a=e.split(".");
this.versionMajor=a[0],this.versionMinor=a[1],this.versionRevision=a[2];var l=this.versionMajor+"."+this.versionRevision;
this.version=parseFloat(l),this.capable=!0;break}}},_JSFlashInfo:function(e){if(null!=navigator.plugins&&navigator.plugins.length>0&&(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])){
var o=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"",t=navigator.plugins["Shockwave Flash"+o].description,i=t.split(" "),a=i[2].split("."),s=a[0],n=a[1],l=(i[3]||i[4]).split("r"),r=l[1]>0?l[1]:0,d=s+"."+n+"."+r;
return d}return-1}},dojox.flash.Embed=function(e){this._visible=e},dojox.flash.Embed.prototype={
width:215,height:138,id:"flashObject",_visible:!0,protocol:function(){switch(window.location.protocol){
case"https:":return"https";default:return"http"}},write:function(e){var o,t=dojox.flash.url,i=t,a=t,s=dojo.baseUrl,n=document.location.protocol+"//"+document.location.host;
if(e){var l=escape(window.location);document.title=document.title.slice(0,47)+" - Flash Player Installation";
var r=escape(document.title);i+="?MMredirectURL="+l+"&MMplayerType=ActiveX&MMdoctitle="+r+"&baseUrl="+escape(s)+"&xdomain="+escape(n),
a+="?MMredirectURL="+l+"&MMplayerType=PlugIn&baseUrl="+escape(s)+"&xdomain="+escape(n);
}else i+="?cachebust="+(new Date).getTime(),i+="&baseUrl="+escape(s),i+="&xdomain="+escape(n);
a+=-1==a.indexOf("?")?"?baseUrl="+escape(s):"&baseUrl="+escape(s),a+="&xdomain="+escape(n),
o='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+this.protocol()+'://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"\n width="'+this.width+'"\n height="'+this.height+'"\n id="'+this.id+'"\n name="'+this.id+'"\n align="middle">\n <param name="allowScriptAccess" value="always"></param>\n <param name="movie" value="'+i+'"></param>\n <param name="quality" value="high"></param>\n <param name="bgcolor" value="#ffffff"></param>\n <embed src="'+a+'" quality="high" bgcolor="#ffffff" width="'+this.width+'" height="'+this.height+'" id="'+this.id+'Embed" name="'+this.id+'" swLiveConnect="true" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="'+this.protocol()+'://www.macromedia.com/go/getflashplayer" ></embed>\n</object>\n',
dojo.connect(dojo,"loaded",dojo.hitch(this,function(){var e=this.id+"Container";if(!dojo.byId(e)){
var t=document.createElement("div");t.id=this.id+"Container",t.style.width=this.width+"px",
t.style.height=this.height+"px",this._visible||(t.style.position="absolute",t.style.zIndex="10000",
t.style.top="-1000px"),t.innerHTML=o;var i=document.getElementsByTagName("body");if(!i||!i.length)throw new Error("No body tag for this page");
i=i[0],i.appendChild(t)}}))},get:function(){return dojo.isIE||dojo.isWebKit?dojo.byId(this.id):document[this.id+"Embed"];
},setVisible:function(e){var o=dojo.byId(this.id+"Container");e?(o.style.position="absolute",
o.style.visibility="visible"):(o.style.position="absolute",o.style.y="-1000px",o.style.visibility="hidden");
},center:function(){var e=this.width,o=this.height,t=dojo.window.getBox(),i=t.l+(t.w-e)/2,a=t.t+(t.h-o)/2,s=dojo.byId(this.id+"Container");
s.style.top=a+"px",s.style.left=i+"px"}},dojox.flash.Communicator=function(){},dojox.flash.Communicator.prototype={
_addExternalInterfaceCallback:function(e){var o=dojo.hitch(this,function(){for(var o=new Array(arguments.length),t=0;t<arguments.length;t++)o[t]=this._encodeData(arguments[t]);
var i=this._execFlash(e,o);return i=this._decodeData(i)});this[e]=o},_encodeData:function(e){
return e&&"string"==typeof e?(e=e.replace("\\","&custom_backslash;"),e=e.replace(/\0/g,"&custom_null;")):e;
},_decodeData:function(e){return e&&e.length&&"string"!=typeof e&&(e=e[0]),e&&"string"==typeof e?(e=e.replace(/\&custom_null\;/g,"\x00"),
e=e.replace(/\&custom_lt\;/g,"<").replace(/\&custom_gt\;/g,">").replace(/\&custom_backslash\;/g,"\\")):e;
},_execFlash:function(methodName,methodArgs){var plugin=dojox.flash.obj.get();methodArgs=methodArgs?methodArgs:[];
for(var i=0;methodArgs>i;i++)"string"==typeof methodArgs[i]&&(methodArgs[i]=this._encodeData(methodArgs[i]));
var flashExec=function(){return eval(plugin.CallFunction('<invoke name="'+methodName+'" returntype="javascript">'+__flash__argumentsToXML(methodArgs,0)+"</invoke>"));
},results=flashExec.call(methodArgs);return"string"==typeof results&&(results=this._decodeData(results)),
results}},dojox.flash.Install=function(){},dojox.flash.Install.prototype={needed:function(){
return dojox.flash.info.capable&&dojox.flash.info.isVersionOrAbove(8,0,0)?!1:!0},
install:function(){var e;dojox.flash.info.installing=!0,dojox.flash.installing(),
0==dojox.flash.info.capable?(e=new dojox.flash.Embed(!1),e.write()):dojox.flash.info.isVersionOrAbove(6,0,65)?(e=new dojox.flash.Embed(!1),
e.write(!0),e.setVisible(!0),e.center()):(alert("This content requires a more recent version of the Macromedia  Flash Player."),
window.location.href=+dojox.flash.Embed.protocol()+"://www.macromedia.com/go/getflashplayer");
},_onInstallStatus:function(e){"Download.Complete"==e?dojox.flash._initialize():"Download.Cancelled"==e?(alert("This content requires a more recent version of the Macromedia  Flash Player."),
window.location.href=dojox.flash.Embed.protocol()+"://www.macromedia.com/go/getflashplayer"):"Download.Failed"==e&&alert("There was an error downloading the Flash Player update. Please try again later, or visit macromedia.com to download the latest version of the Flash plugin.");
}},dojox.flash.info=new dojox.flash.Info;