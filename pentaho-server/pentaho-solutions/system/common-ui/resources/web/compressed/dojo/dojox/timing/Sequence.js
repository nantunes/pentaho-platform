define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","./_base"],function(e){
return e.experimental("dojox.timing.Sequence"),e.declare("dojox.timing.Sequence",null,{
_goOnPause:0,_running:!1,constructor:function(){this._defsResolved=[]},go:function(s,t){
this._running=!0,e.forEach(s,function(e){if(e.repeat>1)for(var s=e.repeat,t=0;s>t;t++)e.repeat=1,
this._defsResolved.push(e);else this._defsResolved.push(e)},this);s[s.length-1];t&&this._defsResolved.push({
func:t}),this._defsResolved.push({func:[this.stop,this]}),this._curId=0,this._go();
},_go:function(){function s(s){var t=null;return t=e.isArray(s)?s.length>2?s[0].apply(s[1],s.slice(2)):s[0].apply(s[1]):s();
}if(this._running){var t=this._defsResolved[this._curId];if(this._curId+=1,this._curId>=this._defsResolved.length)return void s(t.func);
if(t.pauseAfter)s(t.func)!==!1?setTimeout(e.hitch(this,"_go"),t.pauseAfter):this._goOnPause=t.pauseAfter;else if(t.pauseBefore){
var i=e.hitch(this,function(){s(t.func)!==!1&&this._go()});setTimeout(i,t.pauseBefore);
}else s(t.func)!==!1&&this._go()}},goOn:function(){this._goOnPause?(setTimeout(e.hitch(this,"_go"),this._goOnPause),
this._goOnPause=0):this._go()},stop:function(){this._running=!1}})});