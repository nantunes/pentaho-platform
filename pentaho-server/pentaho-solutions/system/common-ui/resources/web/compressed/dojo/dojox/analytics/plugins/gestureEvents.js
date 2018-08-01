define(["dojo/_base/lang","../_base","dojo/_base/window","dojo/on","dojo/_base/config","dojo/touch","dojox/gesture/tap","dojox/gesture/swipe"],function(t,e,a,i,s,h,o,n){
return e.plugins.gestureEvents=new function(){void 0===s.watchSwipe||s.watchSwipe?this.watchSwipe=!0:this.watchSwipe=!1,
this.swipeSampleDelay=s.swipeSampleDelay||1e3,this.targetProps=s.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],
this.textContentMaxChars=s.textContentMaxChars||50,this.addDataSwipe=t.hitch(e,"addData","gesture.swipe"),
this.sampleSwipe=function(e){return this._rateLimited||(this.addDataSwipe(this.trimEvent(e)),
this._rateLimited=!0,setTimeout(t.hitch(this,function(){this._rateLimited&&(this.trimEvent(this._lastSwipeEvent),
delete this._lastSwipeEvent,delete this._rateLimited)}),this.swipeSampleDelay)),this._lastSwipeEvent=e,
e},this.watchSwipe&&i(a.doc,n,t.hitch(this,"sampleSwipe")),this.addData=t.hitch(e,"addData","gesture.tap"),
this.onGestureTap=function(t){this.addData(this.trimEvent(t))},i(a.doc,o,t.hitch(this,"onGestureTap")),
this.addDataDoubleTap=t.hitch(e,"addData","gesture.tap.doubletap"),this.onGestureDoubleTap=function(t){
this.addDataDoubleTap(this.trimEvent(t))},i(a.doc,o.doubletap,t.hitch(this,"onGestureDoubleTap")),
this.addDataTapHold=t.hitch(e,"addData","gesture.tap.taphold"),this.onGestureTapHold=function(t){
this.addDataTapHold(this.trimEvent(t))},i(a.doc,o.hold,t.hitch(this,"onGestureTapHold")),
this.trimEvent=function(t){var e={};for(var a in t)switch(a){case"target":var i=this.targetProps;
e[a]={};for(var s=0;s<i.length;s++)t[a][i[s]]&&("text"==i[s]||"textContent"==i[s]?"HTML"!=t[a].localName&&"BODY"!=t[a].localName&&(e[a][i[s]]=t[a][i[s]].substr(0,this.textContentMaxChars)):e[a][i[s]]=t[a][i[s]]);
break;case"clientX":case"clientY":case"screenX":case"screenY":case"dx":case"dy":case"time":
e[a]=t[a]}return e}}});