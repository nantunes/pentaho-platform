("undefined"==typeof define?function(e,o){o()}:define)(["dojo/_base/config","dojo/_base/lang","dojo/_base/window","require"],function(config,lang,win,require){
var dm=lang&&lang.getObject("dojox.mobile",!0)||{},DeviceTheme=function(){win||(win=window,
win.doc=document,win._no_dojo_dm=dm),config=config||win.mblConfig||{};for(var scripts=win.doc.getElementsByTagName("script"),i=0;i<scripts.length;i++){
var n=scripts[i],src=n.getAttribute("src")||"";if(src.match(/\/deviceTheme\.js/i)){
config.baseUrl=src.replace("deviceTheme.js","../../dojo/");var conf=n.getAttribute("data-dojo-config")||n.getAttribute("djConfig");
if(conf){var obj=eval("({ "+conf+" })");for(var key in obj)config[key]=obj[key]}break;
}if(src.match(/\/dojo\.js/i)){config.baseUrl=src.replace("dojo.js","");break}}this.loadCssFile=function(e){
var o=win.doc.createElement("link");o.href=e,o.type="text/css",o.rel="stylesheet";
var i=win.doc.getElementsByTagName("head")[0];i.insertBefore(o,i.firstChild),dm.loadedCssFiles.push(o);
},this.toUrl=function(e){return require?require.toUrl(e):config.baseUrl+"../"+e},
this.setDm=function(e){dm=e},this.themeMap=config.themeMap||[["Holodark","holodark",[]],["Android 3","holodark",[]],["Android 4","holodark",[]],["Android","android",[]],["BlackBerry","blackberry",[]],["BB10","blackberry",[]],["iPhone","iphone",[]],["iPad","iphone",[this.toUrl("dojox/mobile/themes/iphone/ipad.css")]],["WindowsPhone","windows",[]],["MSIE [6-9]","iphone",[]],["Trident","windows",[]],["Custom","custom",[]],[".*","iphone",[]]],
dm.loadedCssFiles=[],this.loadDeviceTheme=function(e){var o,i,s=config.mblThemeFiles||dm.themeFiles||["@theme"],n=this.themeMap,t=e||config.mblUserAgent||(location.search.match(/theme=(\w+)/)?RegExp.$1:navigator.userAgent);
for(o=0;o<n.length;o++)if(t.match(new RegExp(n[o][0]))){var r=n[o][1];if("windows"==r&&config.mblDisableWindowsTheme)continue;
var c=win.doc.documentElement.className;c=c.replace(new RegExp(" *"+dm.currentTheme+"_theme"),"")+" "+r+"_theme",
win.doc.documentElement.className=c,dm.currentTheme=r;var a=[].concat(n[o][2]);for(i=0;i<s.length;i++){
var d,l=s[i]instanceof Array||"array"==typeof s[i];if(l||-1===s[i].indexOf("/")){
var m=l?(s[i][0]||"").replace(/\./g,"/"):"dojox/mobile",h=(l?s[i][1]:s[i]).replace(/\./g,"/"),f="themes/"+r+"/"+("@theme"===h?r:h)+".css";
d=m+"/"+f}else d=s[i];a.unshift(this.toUrl(d))}for(var g=0;g<dm.loadedCssFiles.length;g++){
var b=dm.loadedCssFiles[g];b.parentNode.removeChild(b)}for(dm.loadedCssFiles=[],i=0;i<a.length;i++){
var u=a[i].toString();if(1==config["dojo-bidi"]&&-1==u.indexOf("_rtl")){var v="android.css blackberry.css custom.css iphone.css holodark.css base.css Carousel.css ComboBox.css IconContainer.css IconMenu.css ListItem.css RoundRectCategory.css SpinWheel.css Switch.css TabBar.css ToggleButton.css ToolBarButton.css",p=u.substr(u.lastIndexOf("/")+1);
-1!=v.indexOf(p)&&this.loadCssFile(u.replace(".css","_rtl.css"))}this.loadCssFile(a[i].toString());
}e&&dm.loadCompatCssFiles&&dm.loadCompatCssFiles();break}}},deviceTheme=new DeviceTheme;
return deviceTheme.loadDeviceTheme(),window.deviceTheme=dm.deviceTheme=deviceTheme,
deviceTheme});