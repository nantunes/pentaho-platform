define(["dojo/_base/array","dojo/_base/declare","dojo/query","dojo/_base/connect","dojo/_base/Color","./Legend","dijit/form/CheckBox","../action2d/Highlight","dojox/lang/functional","dojox/gfx/fx","dojo/keys","dojo/dom-construct","dojo/dom-prop"],function(e,t,i,n,s,o,h,r,a,l,d,c,g){
function u(e){return"mouseenter"==e?"onmouseover":"mouseleave"==e?"onmouseout":"on"+e;
}var f=t(null,{constructor:function(t){this.legend=t,this.index=0,this.horizontalLength=this._getHrizontalLength(),
e.forEach(t.legends,function(e,t){t>0&&i("input",e).attr("tabindex",-1)}),this.firstLabel=i("input",t.legends[0])[0],
n.connect(this.firstLabel,"focus",this,function(){this.legend.active=!0}),n.connect(this.legend.domNode,"keydown",this,"_onKeyEvent");
},_getHrizontalLength:function(){var e=this.legend.horizontal;return"number"==typeof e?Math.min(e,this.legend.legends.length):e?this.legend.legends.length:1;
},_onKeyEvent:function(e){if(this.legend.active){if(e.keyCode==d.TAB)return void(this.legend.active=!1);
var t=this.legend.legends.length;switch(e.keyCode){case d.LEFT_ARROW:this.index--,
this.index<0&&(this.index+=t);break;case d.RIGHT_ARROW:this.index++,this.index>=t&&(this.index-=t);
break;case d.UP_ARROW:this.index-this.horizontalLength>=0&&(this.index-=this.horizontalLength);
break;case d.DOWN_ARROW:this.index+this.horizontalLength<t&&(this.index+=this.horizontalLength);
break;default:return}this._moveToFocus(),Event.stop(e)}},_moveToFocus:function(){
i("input",this.legend.legends[this.index])[0].focus()}}),p=t("dojox.charting.widget.SelectableLegend",o,{
outline:!1,transitionFill:null,transitionStroke:null,postCreate:function(){this.legends=[],
this.legendAnim={},this._cbs=[],this.inherited(arguments)},refresh:function(){this.legends=[],
this._clearLabels(),this.inherited(arguments),this._applyEvents(),new f(this)},_clearLabels:function(){
for(var e=this._cbs;e.length;)e.pop().destroyRecursive()},_addLabel:function(e,t){
this.inherited(arguments);var n=i("td",this.legendBody),s=n[n.length-1];this.legends.push(s);
var o=new h({checked:!0});this._cbs.push(o),c.place(o.domNode,s,"first");var r=i("label",s)[0];
g.set(r,"for",o.id)},_applyEvents:function(){this.chart.dirty||e.forEach(this.legends,function(t,s){
var o,h,r,l=[];this._isPie()?(o=this.chart.stack[0],l.push(o.group.children[s]),h=o.name,
r=this.chart.series[0].name):(o=this.chart.series[s],l=o.group.children,h=o.plot,
r=o.name);var d={fills:a.map(l,"x.getFill()"),strokes:a.map(l,"x.getStroke()")},c=i(".dijitCheckBox",t)[0];
n.connect(c,"onclick",this,function(e){this._toggle(l,s,t.vanished,d,r,h),t.vanished=!t.vanished,
e.stopPropagation()});var g=i(".dojoxLegendIcon",t)[0],u=this._getFilledShape(this._surfaces[s].children);
e.forEach(["onmouseenter","onmouseleave"],function(e){n.connect(g,e,this,function(e){
this._highlight(e,u,l,s,t.vanished,d,r,h)})},this)},this)},_toggle:function(t,i,n,o,h,r){
e.forEach(t,function(e,t){var i=o.fills[t],h=this._getTransitionFill(r),a=o.strokes[t],d=this.transitionStroke;
i&&(h&&("string"==typeof i||i instanceof s)?l.animateFill({shape:e,color:{start:n?h:i,
end:n?i:h}}).play():e.setFill(n?i:h)),a&&!this.outline&&e.setStroke(n?a:d)},this);
},_highlight:function(t,i,n,s,o,h,r,a){if(!o){var l=this._getAnim(a),d=this._isPie(),c=u(t.type),g={
shape:i,index:d?"legend"+s:"legend",run:{name:r},type:c};l.process(g),e.forEach(n,function(e,t){
e.setFill(h.fills[t]);var i={shape:e,index:d?s:t,run:{name:r},type:c};l.duration=100,
l.process(i)})}},_getAnim:function(e){return this.legendAnim[e]||(this.legendAnim[e]=new r(this.chart,e),
this.chart.getPlot(e).dirty=!1),this.legendAnim[e]},_getTransitionFill:function(e){
return-1!=this.chart.stack[this.chart.plots[e]].declaredClass.indexOf("dojox.charting.plot2d.Stacked")?this.chart.theme.plotarea.fill:null;
},_getFilledShape:function(e){for(var t=0;e[t];){if(e[t].getFill())return e[t];t++;
}return null},_isPie:function(){return"dojox.charting.plot2d.Pie"==this.chart.stack[0].declaredClass;
},destroy:function(){this._clearLabels(),this.inherited(arguments)}});return p});