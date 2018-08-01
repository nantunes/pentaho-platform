define(["dojo","../util/oo","../stencil/Rect","../stencil/Ellipse","../stencil/Text","../manager/_registry"],function(t,i,e,s,h,n){
var o=i.declare(function(i){i.subShape=!0,t.mixin(this,i),this.width=i.data.width||2*i.data.rx,
this.height=i.data.height||2*i.data.ry,this.y=i.data.y||i.data.cy-i.data.ry,this.id=this.id||this.util.uid(this.type),
this.util.attr(this.container,"id",this.id),this.callback&&(this.hitched=t.hitch(this.scope||window,this.callback,this)),
i.drawingType="ui",i.data.width&&i.data.height?this.shape=new e(i):this.shape=new s(i);
var n=function(i,e,s){t.forEach(["norm","over","down","selected"],function(t){i[t].fill[e]=s;
})};if(n(this.style.button,"y2",this.height+this.y),n(this.style.button,"y1",this.y),
i.icon&&!i.icon.text){var o=this.drawing.getConstructor(i.icon.type),a=this.makeOptions(i.icon);
a.data=t.mixin(a.data,this.style.button.icon.norm),a.data&&0===a.data.borderWidth?a.data.fill=this.style.button.icon.norm.fill=a.data.color:("line"==i.icon.type||"path"==i.icon.type&&!i.icon.closePath)&&(this.style.button.icon.selected.color=this.style.button.icon.selected.fill),
this.icon=new o(a)}else(i.text||i.icon&&i.icon.text)&&(a=this.makeOptions(i.text||i.icon.text),
a.data.color=this.style.button.icon.norm.color,this.style.button.icon.selected.color=this.style.button.icon.selected.fill,
this.icon=new h(a),this.icon.attr({height:this.icon._lineHeight,y:(this.height-this.icon._lineHeight)/2+this.y
}));var c=this.drawing.getConstructor(this.toolType);c&&this.drawing.addUI("tooltip",{
data:{text:c.setup.tooltip},button:this}),this.onOut()},{callback:null,scope:null,
hitched:null,toolType:"",onClick:function(t){},makeOptions:function(i,e){e=e||1,i=t.clone(i);
var s={util:this.util,mouse:this.mouse,container:this.container,subShape:!0};if("string"==typeof i)s.data={
x:this.data.x-5,y:this.data.y+2,width:this.data.width,height:this.data.height,text:i,
makeFit:!0};else if(i.points){t.forEach(i.points,function(t){t.x=t.x*this.data.width*.01*e+this.data.x,
t.y=t.y*this.data.height*.01*e+this.data.y},this),s.data={};for(var h in i)"points"!=h&&(s.data[h]=i[h]);
s.points=i.points}else{for(h in i)/x|width/.test(h)?i[h]=i[h]*this.data.width*.01*e:/y|height/.test(h)&&(i[h]=i[h]*this.data.height*.01*e),
/x/.test(h)&&!/r/.test(h)?i[h]+=this.data.x:/y/.test(h)&&!/r/.test(h)&&(i[h]+=this.data.y);
delete i.type,s.data=i}return s.drawingType="ui",s},enabled:!0,selected:!1,type:"drawing.library.UI.Button",
select:function(){this.selected=!0,this.icon&&this.icon.attr(this.style.button.icon.selected),
this._change(this.style.button.selected),this.shape.shadow&&this.shape.shadow.hide();
},deselect:function(){this.selected=!1,this.icon&&this.icon.attr(this.style.button.icon.norm),
this.shape.shadow&&this.shape.shadow.show(),this._change(this.style.button.norm)},
disable:function(){this.enabled&&(this.enabled=!1,this._change(this.style.button.disabled),
this.icon.attr({color:this.style.button.norm.color}))},enable:function(){this.enabled||(this.enabled=!0,
this._change(this.style.button.norm),this.icon.attr({color:this.style.button.icon.norm.color
}))},_change:function(t){this.shape.attr(t),this.shape.shadow&&this.shape.shadow.container.moveToBack(),
this.icon&&this.icon.shape.moveToFront()},onOver:function(){!this.selected&&this.enabled&&this._change(this.style.button.over);
},onOut:function(){this.selected||this._change(this.style.button.norm)},onDown:function(){
!this.selected&&this.enabled&&this._change(this.style.button.selected)},onUp:function(){
this.enabled&&(this._change(this.style.button.over),this.hitched&&this.hitched(),
this.onClick(this))},attr:function(t){this.icon&&this.icon.attr(t)}});return t.setObject("dojox.drawing.ui.Button",o),
n.register({name:"dojox.drawing.ui.Button"},"stencil"),o});