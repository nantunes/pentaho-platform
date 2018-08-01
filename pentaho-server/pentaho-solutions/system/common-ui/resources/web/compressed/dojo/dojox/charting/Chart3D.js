define(["dojo/_base/array","dojo/dom","dojo/_base/declare","dojox/gfx","dojox/gfx3d","dojo/has","dojo/has!dojo-bidi?./bidi/Chart3D"],function(t,e,i,r,n,s,o){
var a={x:0,y:0,z:1},h=n.vector,l=r.normalizedLength,d=i(s("dojo-bidi")?"dojox.charting.NonBidiChart3D":"dojox.charting.Chart3D",null,{
constructor:function(t,i,n,s){this.node=e.byId(t),this.surface=r.createSurface(this.node,l(this.node.style.width),l(this.node.style.height)),
this.view=this.surface.createViewport(),this.view.setLights(i.lights,i.ambient,i.specular),
this.view.setCameraTransform(n),this.theme=s,this.walls=[],this.plots=[]},generate:function(){
return this._generateWalls()._generatePlots()},invalidate:function(){return this.view.invalidate(),
this},render:function(){return this.view.render(),this},addPlot:function(t){return this._add(this.plots,t);
},removePlot:function(t){return this._remove(this.plots,t)},addWall:function(t){return this._add(this.walls,t);
},removeWall:function(t){return this._remove(this.walls,t)},_add:function(e,i){return t.some(e,function(t){
return t==i})||(e.push(i),this.view.invalidate()),this},_remove:function(e,i){var r=t.filter(e,function(t){
return t!=i});return r.length<e.length?(e=r,this.invalidate()):this},_generateWalls:function(){
for(var t=0;t<this.walls.length;++t)h.dotProduct(a,this.walls[t].normal)>0&&this.walls[t].generate(this);
return this},_generatePlots:function(){for(var t=0,e=n.matrix,i=0;i<this.plots.length;++i)t+=this.plots[i].getDepth();
for(--i;i>=0;--i){var r=this.view.createScene();r.setTransform(e.translate(0,0,-t)),
this.plots[i].generate(this,r),t-=this.plots[i].getDepth()}return this},setDir:function(t){
return this}});return s("dojo-bidi")?i("dojox.charting.Chart3D",[d,o]):d});