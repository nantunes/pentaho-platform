define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/on","dojo/sniff","./main"],function(t,e,i,n,o,s){
var h=s.typematic={_fireEventAndReload:function(){this._timer=null,this._callback(++this._count,this._node,this._evt),
this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay),
this._timer=setTimeout(i.hitch(this,"_fireEventAndReload"),this._currentTimeout)},
trigger:function(t,e,n,o,s,h,r,u){if(s!=this._obj){this.stop(),this._initialDelay=r||500,
this._subsequentDelay=h||.9,this._minDelay=u||10,this._obj=s,this._node=n,this._currentTimeout=-1,
this._count=-1,this._callback=i.hitch(e,o),this._evt={faux:!0};for(var a in t)if("layerX"!=a&&"layerY"!=a){
var c=t[a];"function"!=typeof c&&"undefined"!=typeof c&&(this._evt[a]=c)}this._fireEventAndReload();
}},stop:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._obj&&(this._callback(-1,this._node,this._evt),
this._obj=null)},addKeyListener:function(o,s,r,u,a,c,_){var f="keyCode"in s?"keydown":"charCode"in s?"keypress":e._keypress,d="keyCode"in s?"keyCode":"charCode"in s?"charCode":"charOrCode",l=[n(o,f,i.hitch(this,function(t){
t[d]!=s[d]||void 0!==s.ctrlKey&&s.ctrlKey!=t.ctrlKey||void 0!==s.altKey&&s.altKey!=t.altKey||void 0!==s.metaKey&&s.metaKey!=(t.metaKey||!1)||void 0!==s.shiftKey&&s.shiftKey!=t.shiftKey?h._obj==s&&h.stop():(t.stopPropagation(),
t.preventDefault(),h.trigger(t,r,o,u,s,a,c,_))})),n(o,"keyup",i.hitch(this,function(){
h._obj==s&&h.stop()}))];return{remove:function(){t.forEach(l,function(t){t.remove();
})}}},addMouseListener:function(e,s,r,u,a,c){var _=[n(e,"mousedown",i.hitch(this,function(t){
t.preventDefault(),h.trigger(t,s,e,r,e,u,a,c)})),n(e,"mouseup",i.hitch(this,function(t){
this._obj&&t.preventDefault(),h.stop()})),n(e,"mouseout",i.hitch(this,function(t){
this._obj&&t.preventDefault(),h.stop()})),n(e,"dblclick",i.hitch(this,function(t){
t.preventDefault(),o("ie")<9&&(h.trigger(t,s,e,r,e,u,a,c),setTimeout(i.hitch(this,h.stop),50));
}))];return{remove:function(){t.forEach(_,function(t){t.remove()})}}},addListener:function(e,i,n,o,s,h,r,u){
var a=[this.addKeyListener(i,n,o,s,h,r,u),this.addMouseListener(e,o,s,h,r,u)];return{
remove:function(){t.forEach(a,function(t){t.remove()})}}}};return h});