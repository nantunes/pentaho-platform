define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/SpinWheelSlot","dojo/touch","dojo/on","dijit/_Contained","dijit/_WidgetBase","./scrollable","./common"],function(e,t,i,s,o,n,h,l,a,r,d,m,c){
var u=i(h("dojo-bidi")?"dojox.mobile.NonBidiSpinWheelSlot":"dojox.mobile.SpinWheelSlot",[m,d,c],{
items:[],labels:[],labelFrom:0,labelTo:0,zeroPad:0,value:"",step:1,tabIndex:"0",_setTabIndexAttr:"",
baseClass:"mblSpinWheelSlot",maxSpeed:500,minItems:15,centerPos:0,scrollBar:!1,constraint:!1,
propagatable:!1,androidWorkaroud:!1,buildRendering:function(){this.inherited(arguments),
this.initLabels();var e,t;if(this.labels.length>0)for(this.items=[],e=0;e<this.labels.length;e++)this.items.push([e,this.labels[e]]);
this.containerNode=n.create("div",{className:"mblSpinWheelSlotContainer"}),this.containerNode.style.height=2*(s.global.innerHeight||s.doc.documentElement.clientHeight)+"px",
this.panelNodes=[];for(var i=0;3>i;i++){this.panelNodes[i]=n.create("div",{className:"mblSpinWheelSlotPanel"
});var l=this.items.length;if(l>0){var d=Math.ceil(this.minItems/l);for(t=0;d>t;t++)for(e=0;l>e;e++)n.create("div",{
className:"mblSpinWheelSlotLabel",name:this.items[e][0],"data-mobile-val":this.items[e][1],
innerHTML:this._cv?this._cv(this.items[e][1]):this.items[e][1]},this.panelNodes[i]);
}this.containerNode.appendChild(this.panelNodes[i])}if(this.domNode.appendChild(this.containerNode),
this.touchNode=n.create("div",{className:"mblSpinWheelSlotTouch"},this.domNode),this.setSelectable(this.domNode,!1),
""===this.value&&this.items.length>0&&(this.value=this.items[0][1]),this._initialValue=this.value,
h("windows-theme")){var m=this,c=this.containerNode,u=5;this.own(r(m.touchNode,a.press,function(e){
for(var t=e.pageY,i=m.getParent().getChildren(),s=0,n=i.length;n>s;s++){var h=i[s].containerNode;
c!==h?(o.remove(h,"mblSelectedSlot"),h.selected=!1):o.add(c,"mblSelectedSlot")}var l=r(m.touchNode,a.move,function(e){
if(!(Math.abs(e.pageY-t)<u)){l.remove(),d.remove(),c.selected=!0;var i=m.getCenterItem();
i&&o.remove(i,"mblSelectedSlotItem")}}),d=r(m.touchNode,a.release,function(){d.remove(),
l.remove(),c.selected?o.remove(c,"mblSelectedSlot"):o.add(c,"mblSelectedSlot"),c.selected=!c.selected;
})})),this.on("flickAnimationEnd",function(){var e=m.getCenterItem();m.previousCenterItem&&o.remove(m.previousCenterItem,"mblSelectedSlotItem"),
o.add(e,"mblSelectedSlotItem"),m.previousCenterItem=e})}},startup:function(){if(!this._started){
if(this.inherited(arguments),this.noResize=!0,this.items.length>0){this.init(),this.centerPos=this.getParent().centerPos;
var e=this.panelNodes[1].childNodes;this._itemHeight=e[0].offsetHeight,this.adjust(),
this.connect(this.domNode,"onkeydown","_onKeyDown")}h("windows-theme")&&(this.previousCenterItem=this.getCenterItem(),
this.previousCenterItem&&o.add(this.previousCenterItem,"mblSelectedSlotItem"))}},
initLabels:function(){if(this.labelFrom!==this.labelTo)for(var e=this.labels=[],t=this.zeroPad&&Array(this.zeroPad).join("0"),i=this.labelFrom;i<=this.labelTo;i+=this.step)e.push(this.zeroPad?(t+i).slice(-this.zeroPad):i+"");
},adjust:function(){for(var e,t=this.panelNodes[1].childNodes,i=0,s=t.length;s>i;i++){
var o=t[i];if(o.offsetTop<=this.centerPos&&this.centerPos<o.offsetTop+o.offsetHeight){
e=this.centerPos-(o.offsetTop+Math.round(o.offsetHeight/2));break}}var n=this.panelNodes[0].offsetHeight;
this.panelNodes[0].style.top=-n+e+"px",this.panelNodes[1].style.top=e+"px",this.panelNodes[2].style.top=n+e+"px";
},setInitialValue:function(){this.set("value",this._initialValue)},_onKeyDown:function(e){
e&&"keydown"===e.type&&(40===e.keyCode?this.spin(-1):38===e.keyCode&&this.spin(1));
},_getCenterPanel:function(){for(var e=this.getPos(),t=0,i=this.panelNodes.length;i>t;t++){
var s=e.y+this.panelNodes[t].offsetTop;if(s<=this.centerPos&&this.centerPos<s+this.panelNodes[t].offsetHeight)return this.panelNodes[t];
}return null},setColor:function(e,i){t.forEach(this.panelNodes,function(s){t.forEach(s.childNodes,function(t,s){
o.toggle(t,i||"mblSpinWheelSlotLabelBlue",t.innerHTML===e)},this)},this)},disableValues:function(e){
t.forEach(this.panelNodes,function(t){for(var i=0;i<t.childNodes.length;i++)o.toggle(t.childNodes[i],"mblSpinWheelSlotLabelGray",i>=e);
})},getCenterItem:function(){var e=this.getPos(),t=this._getCenterPanel();if(t)for(var i=e.y+t.offsetTop,s=t.childNodes,o=0,n=s.length;n>o;o++)if(i+s[o].offsetTop<=this.centerPos&&this.centerPos<i+s[o].offsetTop+s[o].offsetHeight)return s[o];
return null},_getKeyAttr:function(){if(!this._started){if(this.items)for(var e=(this.value,
0);e<this.items.length;e++)if(this.items[e][1]==this.value)return this.items[e][0];
return null}var t=this.getCenterItem();return t&&t.getAttribute("name")},_getValueAttr:function(){
if(!this._started)return this.value;if(this.items.length>0){var e=this.getCenterItem();
return e&&e.getAttribute("data-mobile-val")}return this._initialValue},_setValueAttr:function(e){
this.items.length>0&&this._spinToValue(e,!0)},_spinToValue:function(e,t){var i,s,o=this.get("value");
if(!o)return void(this._pendingValue=e);if(o!=e){this._pendingValue=void 0,t&&this._set("value",e);
for(var n=this.items.length,h=0;n>h&&(this.items[h][1]===String(o)&&(i=h),this.items[h][1]===String(e)&&(s=h),
void 0===i||void 0===s);h++);var l,a=s-(i||0);l=a>0?n-a>a?-a:n-a:n+a>-a?-a:-(n+a),
this.spin(l)}},onFlickAnimationStart:function(e){this._onFlickAnimationStartCalled=!0,
this.inherited(arguments)},onFlickAnimationEnd:function(e){this._duringSlideTo=!1,
this._onFlickAnimationStartCalled=!1,this.inherited(arguments)},spin:function(e){
if(this._started&&!this._duringSlideTo){var t=this.getPos();t.y+=e*this._itemHeight,
this.slideTo(t,1)}},getSpeed:function(){var e=0,t=this._time.length,i=(new Date).getTime()-this.startTime-this._time[t-1];
if(t>=2&&200>i){var s=this._posY[t-1]-this._posY[t-6>=0?t-6:0],o=this._time[t-1]-this._time[t-6>=0?t-6:0];
e=this.calcSpeed(s,o)}return{x:0,y:e}},calcSpeed:function(e,t){var i=this.inherited(arguments);
if(!i)return 0;var s=Math.abs(i),o=i;return s>this.maxSpeed&&(o=this.maxSpeed*(i/s)),
o},adjustDestination:function(e,t,i){var s=this._itemHeight,o=e.y+Math.round(s/2),n=o>=0?o%s:o%s+s;
return e.y=o-n,!0},resize:function(e){var t=this.panelNodes[1].childNodes;t.length>0&&!h("windows-theme")&&(this._itemHeight=t[0].offsetHeight,
this.centerPos=this.getParent().centerPos,this.panelNodes[0].style.top||this.adjust()),
this._pendingValue&&this.set("value",this._pendingValue)},slideTo:function(e,t,i){
this._duringSlideTo=!0;var s,o=this.getPos(),n=o.y+this.panelNodes[1].offsetTop,h=n+this.panelNodes[1].offsetHeight,l=this.domNode.parentNode.offsetHeight;
o.y<e.y?h>l&&(s=this.panelNodes[2],s.style.top=this.panelNodes[0].offsetTop-this.panelNodes[0].offsetHeight+"px",
this.panelNodes[2]=this.panelNodes[1],this.panelNodes[1]=this.panelNodes[0],this.panelNodes[0]=s):o.y>e.y&&0>n&&(s=this.panelNodes[0],
s.style.top=this.panelNodes[2].offsetTop+this.panelNodes[2].offsetHeight+"px",this.panelNodes[0]=this.panelNodes[1],
this.panelNodes[1]=this.panelNodes[2],this.panelNodes[2]=s),this.getParent()._duringStartup?t=0:Math.abs(this._speed.y)<40&&(t=.2),
this.inherited(arguments,[e,t,i]),this.getParent()._duringStartup&&!this._onFlickAnimationStartCalled?this.onFlickAnimationEnd():this._onFlickAnimationStartCalled||(this._duringSlideTo=!1);
}});return h("dojo-bidi")?i("dojox.mobile.SpinWheelSlot",[u,l]):u});