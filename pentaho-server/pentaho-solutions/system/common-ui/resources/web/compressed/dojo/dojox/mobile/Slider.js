define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/touch","dijit/_WidgetBase","dijit/form/_FormValueMixin"],function(t,e,i,s,a,o,h,n,r,d,l,c,m,u){
return i("dojox.mobile.Slider",[m,u],{value:0,min:0,max:100,step:1,baseClass:"mblSlider",
flip:!1,orientation:"auto",halo:"8pt",buildRendering:function(){if(!this.templateString){
this.focusNode=this.domNode=n.create("div",{}),this.valueNode=n.create("input",this.srcNodeRef&&this.srcNodeRef.name?{
type:"hidden",name:this.srcNodeRef.name}:{type:"hidden"},this.domNode,"last");var t=n.create("div",{
style:{position:"relative",height:"100%",width:"100%"}},this.domNode,"last");this.progressBar=n.create("div",{
style:{position:"absolute"},"class":"mblSliderProgressBar"},t,"last"),this.touchBox=n.create("div",{
style:{position:"absolute"},"class":"mblSliderTouchBox"},t,"last"),this.handle=n.create("div",{
style:{position:"absolute"},"class":"mblSliderHandle"},t,"last")}this.inherited(arguments),
"undefined"!=typeof this.domNode.style.msTouchAction&&(this.domNode.style.msTouchAction="none");
},_setValueAttr:function(t,e){t=Math.max(Math.min(t,this.max),this.min);100*(this.value-this.min)/(this.max-this.min);
if(this.valueNode.value=t,this.inherited(arguments),this._started){this.focusNode.setAttribute("aria-valuenow",t);
var i=100*(t-this.min)/(this.max-this.min);"V"!=this.orientation;e===!0?(h.add(this.handle,"mblSliderTransition"),
h.add(this.progressBar,"mblSliderTransition")):(h.remove(this.handle,"mblSliderTransition"),
h.remove(this.progressBar,"mblSliderTransition")),d.set(this.handle,this._attrs.handleLeft,(this._reversed?100-i:i)+"%"),
d.set(this.progressBar,this._attrs.width,i+"%")}},postCreate:function(){function i(i){
function h(t){u=m?t[this._attrs.pageX]:t.touches?t.touches[0][this._attrs.pageX]:t[this._attrs.clientX],
f=u-y,f=Math.min(Math.max(f,0),x);var e=this.step?(this.max-this.min)/this.step:x;
(1>=e||e==1/0)&&(e=x);var i=Math.round(f*e/x);p=(this.max-this.min)*i/e,p=this._reversed?this.max-p:this.min+p;
}function n(t){t.preventDefault(),s.hitch(this,h)(t),this.set("value",p,!1)}function l(e){
e.preventDefault(),t.forEach(j,s.hitch(this,"disconnect")),j=[],this.set("value",this.value,!0);
}i.preventDefault();var m="mousedown"==i.type,b=r.position(v,!1),_=o("ie")||o("trident")>6?1:d.get(a.body(),"zoom")||1;
isNaN(_)&&(_=1);var g=o("ie")||o("trident")>6?1:d.get(v,"zoom")||1;isNaN(g)&&(g=1);
var y=b[this._attrs.x]*g*_+r.docScroll()[this._attrs.x],x=b[this._attrs.w]*g*_;s.hitch(this,h)(i),
i.target==this.touchBox&&this.set("value",p,!0),t.forEach(j,e.disconnect);var N=a.doc.documentElement,j=[this.connect(N,c.move,n),this.connect(N,c.release,l)];
}function n(t){if(!(this.disabled||this.readOnly||t.altKey||t.ctrlKey||t.metaKey)){
var e,i=this.step,s=1;switch(t.keyCode){case l.HOME:e=this.min;break;case l.END:e=this.max;
break;case l.RIGHT_ARROW:s=-1;case l.LEFT_ARROW:e=this.value+s*(g&&b?i:-i);break;case l.DOWN_ARROW:
s=-1;case l.UP_ARROW:e=this.value+s*(!g||b?i:-i);break;default:return}t.preventDefault(),
this._setValueAttr(e,!1)}}function m(t){this.disabled||this.readOnly||t.altKey||t.ctrlKey||t.metaKey||this._setValueAttr(this.value,!0);
}this.inherited(arguments);var u,f,p,v=this.domNode;"auto"==this.orientation&&(this.orientation=v.offsetHeight<=v.offsetWidth?"H":"V"),
h.add(this.domNode,t.map(this.baseClass.split(" "),s.hitch(this,function(t){return t+this.orientation;
})));var b="V"!=this.orientation,_=b?this.isLeftToRight():!1,g=!!this.flip;this._reversed=!(b&&(_&&!g||!_&&g)||!b&&g),
this._attrs=b?{x:"x",w:"w",l:"l",r:"r",pageX:"pageX",clientX:"clientX",handleLeft:"left",
left:this._reversed?"right":"left",width:"width"}:{x:"y",w:"h",l:"t",r:"b",pageX:"pageY",
clientX:"clientY",handleLeft:"top",left:this._reversed?"bottom":"top",width:"height"
},this.progressBar.style[this._attrs.left]="0px",this.connect(this.touchBox,c.press,i),
this.connect(this.handle,c.press,i),this.connect(this.domNode,"onkeypress",n),this.connect(this.domNode,"onkeyup",m),
this.startup(),this.set("value",this.value)}})});