define(["../_base/lang","../_base/declare","../_base/fx","../aspect"],function(n,i,e,o){
return i("dojo.fx.Toggler",null,{node:null,showFunc:e.fadeIn,hideFunc:e.fadeOut,showDuration:200,
hideDuration:200,constructor:function(i){var e=this;n.mixin(e,i),e.node=i.node,e._showArgs=n.mixin({},i),
e._showArgs.node=e.node,e._showArgs.duration=e.showDuration,e.showAnim=e.showFunc(e._showArgs),
e._hideArgs=n.mixin({},i),e._hideArgs.node=e.node,e._hideArgs.duration=e.hideDuration,
e.hideAnim=e.hideFunc(e._hideArgs),o.after(e.showAnim,"beforeBegin",n.hitch(e.hideAnim,"stop",!0),!0),
o.after(e.hideAnim,"beforeBegin",n.hitch(e.showAnim,"stop",!0),!0)},show:function(n){
return this.showAnim.play(n||0)},hide:function(n){return this.hideAnim.play(n||0);
}})});