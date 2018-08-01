define(["dojo","../util/oo"],function(n,t){return t.declare(function(t){this._cons=[],
n.mixin(this,t),this.button&&this.onClick&&this.connect(this.button,"onClick",this,"onClick");
},{util:null,keys:null,mouse:null,drawing:null,stencils:null,anchors:null,canvas:null,
node:null,button:null,type:"dojox.drawing.plugins._Plugin",connect:function(){this._cons.push(n.connect.apply(n,arguments));
},disconnect:function(t){t&&(n.isArray(t)||(t=[t]),n.forEach(t,n.disconnect,n))}});
});