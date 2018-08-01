define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./sniff"],function(t,e,o,n,r,i,s,a,l,c){
var d=r.getObject("dojox.mobile",!0),m=function(){this.setupSpriteIcon=function(e,o){
if(e&&o){var n=t.map(o.split(/[ ,]/),function(t){return t-0}),r=n[0],i=n[1]+n[2],a=n[0]+n[3],c=n[1];
l.set(e,{position:"absolute",clip:"rect("+r+"px "+i+"px "+a+"px "+c+"px)",top:(e.parentNode?l.get(e,"top"):0)-r+"px",
left:-c+"px"}),s.add(e,"mblSpriteIcon")}},this.createDomButton=function(t,o,n){if(!this._domButtons)if(c("webkit")){
var r=function(t,e){var o,n;if(!t){var s={},a=i.doc.styleSheets;for(o=0;o<a.length;o++)a[o]&&r(a[o],s);
return s}var l=t.cssRules||[];for(o=0;o<l.length;o++){var c=l[o];if(c.href&&c.styleSheet)r(c.styleSheet,e);else if(c.selectorText){
var d=c.selectorText.split(/,/);for(n=0;n<d.length;n++){var m=d[n],u=m.split(/>/).length-1;
if(m.match(/(mblDomButton\w+)/)){var f=RegExp.$1;(!e[f]||u>e[f])&&(e[f]=u)}}}}return e;
};this._domButtons=r()}else this._domButtons={};var d=t.className,m=n||t;if(d.match(/(mblDomButton\w+)/)&&-1===d.indexOf("/")){
var u=RegExp.$1,f=4;d.match(/(mblDomButton\w+_(\d+))/)?f=RegExp.$2-0:void 0!==this._domButtons[u]&&(f=this._domButtons[u]);
var p=null;c("bb")&&e.mblBBBoxShadowWorkaround!==!1&&(p={style:"-webkit-box-shadow:none"
});for(var h=0,b=m;f>h;h++)b=b.firstChild||a.create("div",p,b);n&&(setTimeout(function(){
s.remove(t,u)},0),s.add(n,u))}else{if(-1===d.indexOf("."))return null;a.create("img",{
src:d},m)}return s.add(m,"mblDomButton"),!!o&&l.set(m,o),m},this.createIcon=function(t,e,r,i,c,m,u){
if(i=i||"",t&&0===t.indexOf("mblDomButton"))r?r.className.match(/(mblDomButton\w+)/)&&s.remove(r,RegExp.$1):r=a.create("div",null,m||c,u),
r.title=i,s.add(r,t),this.createDomButton(r);else if(t&&"none"!==t){if(r&&"IMG"===r.nodeName||(r=a.create("img",{
alt:i},m||c,u)),r.src=(t||"").replace("${theme}",d.currentTheme),this.setupSpriteIcon(r,e),
e&&c){var f=e.split(/[ ,]/);l.set(c,{position:"relative",width:f[2]+"px",height:f[3]+"px"
}),s.add(c,"mblSpriteIconParent")}o.connect(r,"ondragstart",n,"stop")}return r},this.iconWrapper=!1,
this.setIcon=function(t,e,o,n,r,i,l){return r&&(t||o)?t&&"none"!==t?(this.iconWrapper||0===t.indexOf("mblDomButton")||e?(o&&"IMG"===o.tagName&&(a.destroy(o),
o=null),o&&a.empty(o),o||(o=a.create("div",null,i||r,l)),this.createIcon(t,e,null,null,o),
n&&(o.title=n)):(o&&"DIV"===o.tagName&&(a.destroy(o),o=null),o=this.createIcon(t,null,o,n,r,i,l),
s.add(o,"mblImageIcon")),s.remove(r,"mblNoIcon"),o):(a.destroy(o),s.add(r,"mblNoIcon"),
null):null}};return new m});