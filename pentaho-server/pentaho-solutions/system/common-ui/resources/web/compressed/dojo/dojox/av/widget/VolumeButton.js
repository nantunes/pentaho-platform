define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin","dijit/form/Button"],function(t,i,e,o,s){
return t.declare("dojox.av.widget.VolumeButton",[e,o],{templateString:t.cache("dojox.av.widget","resources/VolumeButton.html"),
postCreate:function(){this.handleWidth=t.marginBox(this.handle).w,this.width=t.marginBox(this.volumeSlider).w,
this.slotWidth=100,t.setSelectable(this.handle,!1),this.volumeSlider=this.domNode.removeChild(this.volumeSlider);
},setMedia:function(t){this.media=t,this.updateIcon()},updateIcon:function(i){i=void 0===i?this.media.volume():i,
0===i?t.attr(this.domNode,"class","Volume mute"):.334>i?t.attr(this.domNode,"class","Volume low"):.667>i?t.attr(this.domNode,"class","Volume med"):t.attr(this.domNode,"class","Volume high");
},onShowVolume:function(i){if(void 0==this.showing&&(t.body().appendChild(this.volumeSlider),
this.showing=!1),this.showing)this.onHideVolume();else{var e=2,o=7,s=this.media.volume(),d=this._getVolumeDim(),h=this._getHandleDim();
this.x=d.x-this.width,t.style(this.volumeSlider,"display",""),t.style(this.volumeSlider,"top",d.y+"px"),
t.style(this.volumeSlider,"left",this.x+"px");var n=this.slotWidth*s;t.style(this.handle,"top",e+h.w/2+"px"),
t.style(this.handle,"left",n+o+h.h/2+"px"),this.showing=!0,this.clickOff=t.connect(t.doc,"onmousedown",this,"onDocClick");
}},onDocClick:function(i){t.isDescendant(i.target,this.domNode)||t.isDescendant(i.target,this.volumeSlider)||this.onHideVolume();
},onHideVolume:function(){this.endDrag(),t.style(this.volumeSlider,"display","none"),
this.showing=!1},onDrag:function(i){var e=this.handleWidth/2,o=e+this.slotWidth,s=i.clientX-this.x;
e>s&&(s=e),s>o&&(s=o),t.style(this.handle,"left",s+"px");var d=(s-e)/(o-e);this.media.volume(d),
this.updateIcon(d)},startDrag:function(){this.isDragging=!0,this.cmove=t.connect(t.doc,"mousemove",this,"onDrag"),
this.cup=t.connect(t.doc,"mouseup",this,"endDrag")},endDrag:function(){this.isDragging=!1,
this.cmove&&t.disconnect(this.cmove),this.cup&&t.disconnect(this.cup),this.handleOut();
},handleOver:function(){t.addClass(this.handle,"over")},handleOut:function(){this.isDragging||t.removeClass(this.handle,"over");
},_getVolumeDim:function(){return this._domCoords?this._domCoords:(this._domCoords=t.coords(this.domNode),
this._domCoords)},_getHandleDim:function(){return this._handleCoords?this._handleCoords:(this._handleCoords=t.marginBox(this.handle),
this._handleCoords)},onResize:function(t){this.onHideVolume(),this._domCoords=null;
}})});