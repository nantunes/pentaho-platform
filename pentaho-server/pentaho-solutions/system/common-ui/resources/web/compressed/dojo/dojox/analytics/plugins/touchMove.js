define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on","dojo/touch"],function(t,e,a,s,h,o){
return e.plugins.touchMove=new function(){void 0===a.watchTouch||a.watchTouch?this.watchTouch=!0:this.watchTouch=!1,
void 0===a.showTouchesDetails||a.showTouchesDetails?this.showTouchesDetails=!0:this.showTouchesDetails=!1,
this.touchSampleDelay=a.touchSampleDelay||1e3,this.targetProps=a.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],
this.textContentMaxChars=a.textContentMaxChars||50,this.addData=t.hitch(e,"addData","touch.move"),
this.sampleTouchMove=function(e){return this._rateLimited||(this.addData("sample",this.trimTouchEvent(e)),
this._rateLimited=!0,setTimeout(t.hitch(this,function(){this._rateLimited&&(this.trimTouchEvent(this._lastTouchEvent),
delete this._lastTouchEvent,delete this._rateLimited)}),this.touchSampleDelay)),this._lastTouchEvent=e,
e},h(s.doc,o.move,t.hitch(this,"sampleTouchMove")),this.handleTarget=function(t,e,a){
var s=this.targetProps;t[a]={};for(var h=0;h<s.length;h++)("object"==typeof e||"function"==typeof e)&&s[h]in e&&("text"==s[h]||"textContent"==s[h]?e.localName&&"HTML"!=e.localName&&"BODY"!=e.localName&&(t[a][s[h]]=e[s[h]].substr(0,this.textContentMaxChars)):t[a][s[h]]=e[s[h]]);
},this.trimTouchEvent=function(t){var e,a={};for(var s in t)switch(s){case"target":
this.handleTarget(a,t[s],s);break;case"touches":if(0!==t[s].length&&(a["touches.length"]=t[s].length),
this.showTouchesDetails)for(var h=0;h<t[s].length;h++)for(var o in t[s][h])switch(o){
case"target":this.handleTarget(a,t[s][h].target,"touches["+h+"][target]");break;case"clientX":
case"clientY":case"screenX":case"screenY":t[s][h]&&(e=t[s][h][o],a["touches["+h+"]["+o+"]"]=e+"");
}break;case"clientX":case"clientY":case"screenX":case"screenY":t[s]&&(e=t[s],a[s]=e+"");
}return a}}});