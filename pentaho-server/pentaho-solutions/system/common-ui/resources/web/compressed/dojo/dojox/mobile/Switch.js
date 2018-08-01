define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/touch","dijit/_Contained","dijit/_WidgetBase","./sniff","./_maskUtils","./common","dojo/has!dojo-bidi?dojox/mobile/bidi/Switch"],function(t,i,e,s,h,o,n,d,a,c,l,r,f,u,m,b){
var v=e(f("dojo-bidi")?"dojox.mobile.NonBidiSwitch":"dojox.mobile.Switch",[r,l],{
value:"on",name:"",leftLabel:"ON",rightLabel:"OFF",shape:"mblSwDefaultShape",tabIndex:"0",
_setTabIndexAttr:"",baseClass:"mblSwitch",role:"",buildRendering:function(){if(this.templateString||(this.domNode=this.srcNodeRef&&"SPAN"===this.srcNodeRef.tagName?this.srcNodeRef:n.create("span")),
"undefined"!=typeof this.domNode.style.msTouchAction&&(this.domNode.style.msTouchAction="none"),
this.inherited(arguments),!this.templateString){var t=this.srcNodeRef&&this.srcNodeRef.className||this.className||this["class"];
(t=t.match(/mblSw.*Shape\d*/))&&(this.shape=t),o.add(this.domNode,this.shape);var i=this.name?' name="'+this.name+'"':"";
this.domNode.innerHTML='<div class="mblSwitchInner"><div class="mblSwitchBg mblSwitchBgLeft"><div class="mblSwitchText mblSwitchTextLeft"></div></div><div class="mblSwitchBg mblSwitchBgRight"><div class="mblSwitchText mblSwitchTextRight"></div></div><div class="mblSwitchKnob"></div><input type="hidden"'+i+"></div></div>";
var e=this.inner=this.domNode.firstChild;this.left=e.childNodes[0],this.right=e.childNodes[1],
this.knob=e.childNodes[2],this.input=e.childNodes[3]}if(a.set(this.domNode,"role","checkbox"),
a.set(this.domNode,"aria-checked","on"===this.value?"true":"false"),this.switchNode=this.domNode,
f("windows-theme")){var s=n.create("div",{className:"mblSwitchContainer"});this.labelNode=n.create("label",{
"class":"mblSwitchLabel","for":this.id},s),s.appendChild(this.domNode.cloneNode(!0)),
this.domNode=s,this.focusNode=s.childNodes[1],this.labelNode.innerHTML="off"==this.value?this.rightLabel:this.leftLabel,
this.switchNode=this.domNode.childNodes[1];var h=this.inner=this.domNode.childNodes[1].firstChild;
this.left=h.childNodes[0],this.right=h.childNodes[1],this.knob=h.childNodes[2],this.input=h.childNodes[3];
}},postCreate:function(){this.connect(this.switchNode,"onclick","_onClick"),this.connect(this.switchNode,"onkeydown","_onClick"),
this._startHandle=this.connect(this.switchNode,c.press,"onTouchStart"),this._initialValue=this.value;
},_changeState:function(t,i){var e="on"===t;this.left.style.display="",this.right.style.display="",
this.inner.style.left="",i&&o.add(this.switchNode,"mblSwitchAnimation"),o.remove(this.switchNode,e?"mblSwitchOff":"mblSwitchOn"),
o.add(this.switchNode,e?"mblSwitchOn":"mblSwitchOff"),a.set(this.switchNode,"aria-checked",e?"true":"false");
var s=this;s.defer(function(){s.left.style.display=e?"":"none",s.right.style.display=e?"none":"",
o.remove(s.switchNode,"mblSwitchAnimation")},i?300:0)},_createMaskImage:function(){
if(this._timer&&(this._timer.remove(),delete this._timer),!this._hasMaskImage&&(this._width=this.switchNode.offsetWidth-this.knob.offsetWidth,
this._hasMaskImage=!0,f("webkit")||f("svg"))){var t=d.get(this.left,"borderTopLeftRadius");
if("0px"!=t){var i=t.split(" "),e=parseFloat(i[0]),s=1==i.length?e:parseFloat(i[1]),h=this.switchNode.offsetWidth,o=this.switchNode.offsetHeight;
(this.shape+"Mask"+h+o+e+s).replace(/\./,"_");u.createRoundMask(this.switchNode,0,0,0,0,h,o,e,s,1);
}}},_onClick:function(t){t&&"keydown"===t.type&&13!==t.keyCode||this.onClick(t)!==!1&&(this._moved||(this._set("value",this.input.value="on"==this.value?"off":"on"),
this._changeState(this.value,!0),this.onStateChanged(this.value)))},onClick:function(){},
onTouchStart:function(t){this._moved=!1,this.innerStartX=this.inner.offsetLeft,this._conn||(this._conn=[this.connect(this.inner,c.move,"onTouchMove"),this.connect(h.doc,c.release,"onTouchEnd")],
f("windows-theme")&&this._conn.push(this.connect(h.doc,"MSPointerCancel","onTouchEnd"))),
this.touchStartX=t.touches?t.touches[0].pageX:t.clientX,this.left.style.display="",
this.right.style.display="",s.stop(t),this._createMaskImage()},onTouchMove:function(t){
t.preventDefault();var i;if(t.targetTouches){if(1!=t.targetTouches.length)return;i=t.targetTouches[0].clientX-this.touchStartX;
}else i=t.clientX-this.touchStartX;var e=this.innerStartX+i,s=10;e<=-(this._width-s)&&(e=-this._width),
e>=-s&&(e=0),this.inner.style.left=e+"px",Math.abs(i)>s&&(this._moved=!0)},onTouchEnd:function(e){
if(t.forEach(this._conn,i.disconnect),this._conn=null,this.innerStartX==this.inner.offsetLeft)return void(f("touch")&&f("clicks-prevented")&&m._sendClick(this.inner,e));
var s=this.inner.offsetLeft<-(this._width/2)?"off":"on";s=this._newState(s),this._changeState(s,!0),
s!=this.value&&(this._set("value",this.input.value=s),this.onStateChanged(s))},_newState:function(t){
return t},onStateChanged:function(t){this.labelNode&&(this.labelNode.innerHTML="off"==t?this.rightLabel:this.leftLabel);
},_setValueAttr:function(t){this._changeState(t,!1),this.value!=t&&(this._set("value",this.input.value=t),
this.onStateChanged(t))},_setLeftLabelAttr:function(t){this.leftLabel=t,this.left.firstChild.innerHTML=this._cv?this._cv(t):t;
},_setRightLabelAttr:function(t){this.rightLabel=t,this.right.firstChild.innerHTML=this._cv?this._cv(t):t;
},reset:function(){this.set("value",this._initialValue)}});return f("dojo-bidi")?e("dojox.mobile.Switch",[v,b]):v;
});