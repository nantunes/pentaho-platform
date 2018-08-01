define(["dojo"],function(dojo){function prep(e){return e=dojo.delegate(_baseKwArgs,e),
"path"in e?("id"in e||(e.id=keyBase+keyCount++),e):(console.error("dojox.embed.Flash(ctor):: no path reference to a Flash movie was provided."),
null)}var fMarkup,fVersion,minimumVersion=9,keyBase="dojox-embed-flash-",keyCount=0,_baseKwArgs={
expressInstall:!1,width:320,height:240,swLiveConnect:"true",allowScriptAccess:"sameDomain",
allowNetworking:"all",style:null,redirect:null};dojo.isIE?(fMarkup=function(e){if(e=prep(e),
!e)return null;var i,o=e.path;if(e.vars){var t=[];for(i in e.vars)t.push(i+"="+e.vars[i]);
e.params.FlashVars=t.join("&"),delete e.vars}var r='<object id="'+e.id+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"'+(e.style?' style="'+e.style+'"':"")+'><param name="movie" value="'+o+'" />';
if(e.params)for(i in e.params)r+='<param name="'+i+'" value="'+e.params[i]+'" />';
return r+="</object>",{id:e.id,markup:r}},fVersion=function(){for(var e=10,i=null;!i&&e>7;)try{
i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+e--)}catch(o){}if(i){var t=i.GetVariable("$version").split(" ")[1].split(",");
return{major:null!=t[0]?parseInt(t[0]):0,minor:null!=t[1]?parseInt(t[1]):0,rev:null!=t[2]?parseInt(t[2]):0
}}return{major:0,minor:0,rev:0}}(),dojo.addOnWindowUnload(function(){console.warn("***************UNLOAD");
var e=function(){};dojo.query("object").reverse().style("display","none").forEach(function(i){
for(var o in i)if("FlashVars"!=o&&dojo.isFunction(i[o]))try{i[o]=e}catch(t){}})})):(fMarkup=function(e){
if(e=prep(e),!e)return null;var i,o=e.path;if(e.vars){var t=[];for(i in e.vars)t.push(i+"="+e.vars[i]);
e.params.flashVars=t.join("&"),delete e.vars}var r='<embed type="application/x-shockwave-flash" src="'+o+'" id="'+e.id+'" width="'+e.width+'" height="'+e.height+'"'+(e.style?' style="'+e.style+'" ':"")+'pluginspage="'+window.location.protocol+'//www.adobe.com/go/getflashplayer" ';
if(e.params)for(i in e.params)r+=" "+i+'="'+e.params[i]+'"';return r+=" />",{id:e.id,
markup:r}},fVersion=function(){var e=navigator.plugins["Shockwave Flash"];if(e&&e.description){
var i=e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".");
return{major:null!=i[0]?parseInt(i[0]):0,minor:null!=i[1]?parseInt(i[1]):0,rev:null!=i[2]?parseInt(i[2]):0
}}return{major:0,minor:0,rev:0}}());var Flash=function(e,i){if(location.href.toLowerCase().indexOf("file://")>-1)throw new Error("dojox.embed.Flash can't be run directly from a file. To instatiate the required SWF correctly it must be run from a server, like localHost.");
this.available=dojox.embed.Flash.available,this.minimumVersion=e.minimumVersion||minimumVersion,
this.id=null,this.movie=null,this.domNode=null,i&&(i=dojo.byId(i)),setTimeout(dojo.hitch(this,function(){
e.expressInstall||this.available&&this.available>=this.minimumVersion?e&&i?this.init(e,i):this.onError("embed.Flash was not provided with the proper arguments."):this.available?this.onError("Flash version detected: "+this.available+" is out of date. Minimum required: "+this.minimumVersion):this.onError("Flash is not installed.");
}),100)};return dojo.extend(Flash,{onReady:function(e){},onLoad:function(e){},onError:function(e){},
_onload:function(){clearInterval(this._poller),delete this._poller,delete this._pollCount,
delete this._pollMax,this.onLoad(this.movie)},init:function(e,i){if(this.destroy(),
i=dojo.byId(i||this.domNode),!i)throw new Error("dojox.embed.Flash: no domNode reference has been passed.");
var o=0;this._poller=null,this._pollCount=0,this._pollMax=15,this.pollTime=100,dojox.embed.Flash.initialized&&(this.id=dojox.embed.Flash.place(e,i),
this.domNode=i,setTimeout(dojo.hitch(this,function(){this.movie=this.byId(this.id,e.doc),
this.onReady(this.movie),this._poller=setInterval(dojo.hitch(this,function(){try{
o=this.movie.PercentLoaded()}catch(e){console.warn("this.movie.PercentLoaded() failed",e,this.movie);
}if(100==o)this._onload();else if(0==o&&this._pollCount++>this._pollMax)throw clearInterval(this._poller),
new Error("Building SWF failed.")}),this.pollTime)}),1))},_destroy:function(){try{
this.domNode.removeChild(this.movie)}catch(e){}this.id=this.movie=this.domNode=null;
},destroy:function(){if(this.movie){var e=dojo.delegate({id:!0,movie:!0,domNode:!0,
onReady:!0,onLoad:!0});for(var i in this)e[i]||delete this[i];this._poller?dojo.connect(this,"onLoad",this,"_destroy"):this._destroy();
}},byId:function(e,i){return i=i||document,i.embeds[e]?i.embeds[e]:i[e]?i[e]:window[e]?window[e]:document[e]?document[e]:null;
}}),dojo.mixin(Flash,{minSupported:8,available:fVersion.major,supported:fVersion.major>=fVersion.required,
minimumRequired:fVersion.required,version:fVersion,initialized:!1,onInitialize:function(){
Flash.initialized=!0},__ie_markup__:function(e){return fMarkup(e)},proxy:function(obj,methods){
dojo.forEach(dojo.isArray(methods)?methods:[methods],function(item){this[item]=dojo.hitch(this,function(){
return function(){return eval(this.movie.CallFunction('<invoke name="'+item+'" returntype="javascript"><arguments>'+dojo.map(arguments,function(e){
return __flash__toXML(e)}).join("")+"</arguments></invoke>"))}.apply(this,arguments||[]);
})},obj)}}),Flash.place=function(e,i){var o=fMarkup(e);return i=dojo.byId(i),i||(i=dojo.doc.createElement("div"),
i.id=o.id+"-container",dojo.body().appendChild(i)),o?(i.innerHTML=o.markup,o.id):null;
},Flash.onInitialize(),dojo.setObject("dojox.embed.Flash",Flash),Flash});