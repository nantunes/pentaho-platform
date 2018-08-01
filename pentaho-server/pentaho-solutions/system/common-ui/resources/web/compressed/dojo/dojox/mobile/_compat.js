define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/fx","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dojo/fx","dojo/fx/easing","dojo/ready","dojo/uacss","dijit/registry","dojox/fx","dojox/fx/flip","./EdgeToEdgeList","./IconContainer","./ProgressIndicator","./RoundRect","./RoundRectList","./ScrollableView","./Switch","./View","./Heading","require"],function(e,t,o,s,i,n,d,a,l,r,c,f,p,h,m,u,y,g,b,v,C,N,R,x,_,T,B,j,k){
var w=i.getObject("dojox.mobile",!0);return n("webkit")||10===n("ie")||!n("ie")&&n("trident")>6||(i.extend(B,{
_doTransition:function(e,t,i,n){var d;this.wakeUp(t);var l,r;if(i&&"none"!=i)if("slide"==i||"cover"==i||"reveal"==i){
var f=e.offsetWidth;l=p.slideTo({node:e,duration:400,left:-f*n,top:c.get(e,"top")
}),r=p.slideTo({node:t,duration:400,left:0,top:c.get(t,"top")}),t.style.position="absolute",
t.style.left=f*n+"px",t.style.display="",d=p.combine([l,r]),o.connect(d,"onEnd",this,function(){
if(this._inProgress){e.style.display="none",e.style.left="0px",t.style.position="relative";
var o=y.byNode(t);o&&!a.contains(o.domNode,"out")&&(o.containerNode.style.paddingTop=""),
this.invokeCallback()}}),d.play()}else if("slidev"==i||"coverv"==i||"reavealv"==i){
var h=e.offsetHeight;l=p.slideTo({node:e,duration:400,left:0,top:-h*n}),r=p.slideTo({
node:t,duration:400,left:0,top:0}),t.style.position="absolute",t.style.top=h*n+"px",
t.style.left="0px",t.style.display="",d=p.combine([l,r]),o.connect(d,"onEnd",this,function(){
this._inProgress&&(e.style.display="none",t.style.position="relative",this.invokeCallback());
}),d.play()}else"flip"==i?(d=g.flip({node:e,dir:"right",depth:.5,duration:400}),t.style.position="absolute",
t.style.left="0px",o.connect(d,"onEnd",this,function(){this._inProgress&&(e.style.display="none",
t.style.position="relative",t.style.display="",this.invokeCallback())}),d.play()):(d=p.chain([s.fadeOut({
node:e,duration:600}),s.fadeIn({node:t,duration:600})]),t.style.position="absolute",
t.style.left="0px",t.style.display="",c.set(t,"opacity",0),o.connect(d,"onEnd",this,function(){
this._inProgress&&(e.style.display="none",t.style.position="relative",c.set(e,"opacity",1),
this.invokeCallback())}),d.play());else t.style.display="",e.style.display="none",
t.style.left="0px",this.invokeCallback()},wakeUp:function(e){if(n("ie")&&!e._wokeup){
e._wokeup=!0;var t=e.style.display;e.style.display="";for(var o=e.getElementsByTagName("*"),s=0,i=o.length;i>s;s++){
var d=o[s].style.display;o[s].style.display="none",o[s].style.display="",o[s].style.display=d;
}e.style.display=t}}}),i.extend(T,{_changeState:function(e,t){var o,s="on"===e;o=s?this.isLeftToRight()?0:-c.get(this.right,"left"):this.isLeftToRight()?-c.get(this.right,"left"):0,
this.left.style.display="",this.right.style.display="";var i=this,n=function(){a.remove(i.domNode,s?"mblSwitchOff":"mblSwitchOn"),
a.add(i.domNode,s?"mblSwitchOn":"mblSwitchOff"),i.left.style.display=s?"":"none",
i.right.style.display=s?"none":"",f.set(i.domNode,"aria-checked",s?"true":"false");
};if(t){var d=p.slideTo({node:this.inner,duration:300,left:o,onEnd:n});d.play()}else((this.isLeftToRight()?s:!s)||o)&&(this.inner.style.left=o+"px"),
n()}}),i.extend(N,{scale:function(e){if(n("ie")){var t={w:e,h:e};r.setMarginBox(this.domNode,t),
r.setMarginBox(this.containerNode,t)}else if(n("ff")){var o=e/40;c.set(this.containerNode,{
MozTransform:"scale("+o+")",MozTransformOrigin:"0 0"}),r.setMarginBox(this.domNode,{
w:e,h:e}),r.setMarginBox(this.containerNode,{w:e/o,h:e/o})}}}),n("ie")&&(i.extend(R,{
buildRendering:function(){w.createRoundRect(this),this.domNode.className="mblRoundRect";
}}),x._addChild=x.prototype.addChild,x._postCreate=x.prototype.postCreate,i.extend(x,{
buildRendering:function(){w.createRoundRect(this,!0),this.domNode.className="mblRoundRectList",
n("ie")&&n("dojo-bidi")&&!this.isLeftToRight()&&(this.domNode.className="mblRoundRectList mblRoundRectListRtl");
},postCreate:function(){x._postCreate.apply(this,arguments),this.redrawBorders()},
addChild:function(e,t){x._addChild.apply(this,arguments),this.redrawBorders(),w.applyPngFilter&&w.applyPngFilter(e.domNode);
},redrawBorders:function(){if(!(this instanceof v))for(var e=!1,t=this.containerNode.childNodes.length-1;t>=0;t--){
var o=this.containerNode.childNodes[t];"LI"==o.tagName&&(o.style.borderBottomStyle=e?"solid":"none",
e=!0)}}}),i.extend(v,{buildRendering:function(){this.domNode=this.containerNode=this.srcNodeRef||d.doc.createElement("ul"),
this.domNode.className="mblEdgeToEdgeList"}}),C._addChild=C.prototype.addChild,i.extend(C,{
addChild:function(e,t){C._addChild.apply(this,arguments),w.applyPngFilter&&w.applyPngFilter(e.domNode);
}}),i.mixin(w,{createRoundRect:function(e,t){var o,s;if(e.domNode=d.doc.createElement("div"),
e.domNode.style.padding="0px",e.domNode.style.backgroundColor="transparent",e.domNode.style.border="none",
e.containerNode=d.doc.createElement(t?"ul":"div"),e.containerNode.className="mblRoundRectContainer",
e.srcNodeRef){for(e.srcNodeRef.parentNode.replaceChild(e.domNode,e.srcNodeRef),o=0,
s=e.srcNodeRef.childNodes.length;s>o;o++)e.containerNode.appendChild(e.srcNodeRef.removeChild(e.srcNodeRef.firstChild));
e.srcNodeRef=null}for(e.domNode.appendChild(e.containerNode),o=0;5>=o;o++){var i=l.create("div");
i.className="mblRoundCorner mblRoundCorner"+o+"T",e.domNode.insertBefore(i,e.containerNode);
var n=l.create("div");n.className="mblRoundCorner mblRoundCorner"+o+"B",e.domNode.appendChild(n);
}}}),i.extend(_,{postCreate:function(){var e=l.create("div",{className:"mblDummyForIE",
innerHTML:"&nbsp;"},this.containerNode,"first");c.set(e,{position:"relative",marginBottom:"-2px",
fontSize:"1px"})}}),j._buildRendering=j.prototype.buildRendering,i.extend(j,{buildRendering:function(){
j._buildRendering.apply(this);for(var e=this.domNode.getElementsByTagName("INPUT"),t=e.length;t--;)e[t].removeAttribute("unselectable");
}})),n("ie")<=6&&(w.applyPngFilter=function(e){e=e||d.body();for(var t=e.getElementsByTagName("IMG"),o=k.toUrl("dojo/resources/blank.gif"),s=0,i=t.length;i>s;s++){
var n=t[s],a=n.offsetWidth,l=n.offsetHeight;if(0===a||0===l){if("none"!=c.get(n,"display"))continue;
if(n.style.display="",a=n.offsetWidth,l=n.offsetHeight,n.style.display="none",0===a||0===l)continue;
}var r=n.src;-1==r.indexOf("resources/blank.gif")&&(n.src=o,n.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+r+"')",
n.style.width=a+"px",n.style.height=l+"px")}},!w._disableBgFilter&&w.createDomButton&&(w._createDomButton_orig=w.createDomButton,
w.createDomButton=function(e,t,o){var s=w._createDomButton_orig.apply(this,arguments);
if(s&&s.className&&-1!==s.className.indexOf("mblDomButton")){var i=function(){if(s.currentStyle&&s.currentStyle.backgroundImage.match(/url.*(mblDomButton.*\.png)/)){
var e=RegExp.$1,t=k.toUrl("dojox/mobile/themes/common/domButtons/compat/")+e;s.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"',sizingMethod='crop')",
s.style.background="none"}};setTimeout(i,1e3),setTimeout(i,5e3)}return s})),w.loadCssFile=function(e){
w.loadedCssFiles||(w.loadedCssFiles=[]),d.doc.createStyleSheet?setTimeout(function(e){
return function(){var t=d.doc.createStyleSheet(e);t&&w.loadedCssFiles.push(t.owningElement);
}}(e),0):w.loadedCssFiles.push(l.create("link",{href:e,type:"text/css",rel:"stylesheet"
},d.doc.getElementsByTagName("head")[0]))},w.loadCss=function(t){if(!w._loadedCss){
var o={};e.forEach(w.getCssPaths(),function(e){o[e]=!0}),w._loadedCss=o}i.isArray(t)||(t=[t]);
for(var s=0;s<t.length;s++){var n=t[s];w._loadedCss[n]||(w._loadedCss[n]=!0,w.loadCssFile(n));
}},w.getCssPaths=function(){var e,t,o,s=[],i=d.doc.styleSheets;for(e=0;e<i.length;e++)if(!i[e].href){
var n=i[e].cssRules||i[e].imports;if(n)for(t=0;t<n.length;t++)n[t].href&&s.push(n[t].href);
}var a=d.doc.getElementsByTagName("link");for(e=0,o=a.length;o>e;e++)a[e].href&&s.push(a[e].href);
return s},w.loadCompatPattern=/\/mobile\/themes\/.*\.css$/,w.loadCompatCssFiles=function(e){
if(n("ie")&&!e)return void setTimeout(function(){w.loadCompatCssFiles(!0)},0);w._loadedCss=void 0;
var o=w.getCssPaths();n("dojo-bidi")&&(o=w.loadRtlCssFiles(o));for(var s=0;s<o.length;s++){
var i=o[s];if((i.match(t.mblLoadCompatPattern||w.loadCompatPattern)||-1!==location.href.indexOf("mobile/tests/"))&&-1===i.indexOf("-compat.css")){
var d=i.substring(0,i.length-4)+"-compat.css";w.loadCss(d)}}},n("dojo-bidi")&&(w.loadRtlCssFiles=function(e){
for(var t=0;t<e.length;t++){var o=e[t];if(-1==o.indexOf("_rtl")){var s="android.css blackberry.css custom.css iphone.css holodark.css base.css Carousel.css ComboBox.css IconContainer.css IconMenu.css ListItem.css RoundRectCategory.css SpinWheel.css Switch.css TabBar.css ToggleButton.css ToolBarButton.css",i=o.substr(o.lastIndexOf("/")+1);
if(-1!=s.indexOf(i)){var n=o.replace(".css","_rtl.css");e.push(n),w.loadCss(n)}}}
return e}),w.hideAddressBar=function(e,t){t!==!1&&w.resizeAll()},m(function(){t.mblLoadCompatCssFiles!==!1&&w.loadCompatCssFiles(),
w.applyPngFilter&&w.applyPngFilter()})),w});