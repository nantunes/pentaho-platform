define(["./query","./_base/lang","./aspect","./_base/fx","./fx"],function(n,t,i,e,r){
var a=n.NodeList;return t.extend(a,{_anim:function(n,i,e){e=e||{};var a=r.combine(this.map(function(r){
var a={node:r};return t.mixin(a,e),n[i](a)}));return e.auto?a.play()&&this:a},wipeIn:function(n){
return this._anim(r,"wipeIn",n)},wipeOut:function(n){return this._anim(r,"wipeOut",n);
},slideTo:function(n){return this._anim(r,"slideTo",n)},fadeIn:function(n){return this._anim(e,"fadeIn",n);
},fadeOut:function(n){return this._anim(e,"fadeOut",n)},animateProperty:function(n){
return this._anim(e,"animateProperty",n)},anim:function(n,t,a,u,o){var f=r.combine(this.map(function(i){
return e.animateProperty({node:i,properties:n,duration:t||350,easing:a})}));return u&&i.after(f,"onEnd",u,!0),
f.play(o||0)}}),a});