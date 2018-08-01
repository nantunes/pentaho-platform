define(["dojo","../util/oo"],function(i,s){var t;return s.declare(function(i){t=i.surface,
this.canvas=i.canvas,this.mouse=i.mouse,this.keys=i.keys,this._mouseHandle=this.mouse.register(this),
this.stencils={}},{register:function(i){return this.stencils[i.id]=i,i},onUiDown:function(i){
this._isStencil(i)&&this.stencils[i.id].onDown(i)},onUiUp:function(i){this._isStencil(i)&&this.stencils[i.id].onUp(i);
},onOver:function(i){this._isStencil(i)&&this.stencils[i.id].onOver(i)},onOut:function(i){
this._isStencil(i)&&this.stencils[i.id].onOut(i)},_isStencil:function(i){return!!i.id&&!!this.stencils[i.id]&&"drawing.library.UI.Button"==this.stencils[i.id].type;
}})});