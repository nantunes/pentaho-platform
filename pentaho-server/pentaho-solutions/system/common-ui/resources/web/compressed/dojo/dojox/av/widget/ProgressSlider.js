define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(t,i,e,s){
return t.declare("dojox.av.widget.ProgressSlider",[e,s],{templateString:t.cache("dojox.av.widget","resources/ProgressSlider.html"),
postCreate:function(){this.seeking=!1,this.handleWidth=t.marginBox(this.handle).w;
var i=t.coords(this.domNode);this.finalWidth=i.w,this.width=i.w-this.handleWidth,
this.x=i.x,t.setSelectable(this.domNode,!1),t.setSelectable(this.handle,!1)},setMedia:function(i,e){
this.playerWidget=e,this.media=i,t.connect(this.media,"onMetaData",this,function(t){
t&&t.duration&&(this.duration=t.duration)}),t.connect(this.media,"onEnd",this,function(){
t.disconnect(this.posCon),this.setHandle(this.duration)}),t.connect(this.media,"onStart",this,function(){
this.posCon=t.connect(this.media,"onPosition",this,"setHandle")}),t.connect(this.media,"onDownloaded",this,function(t){
this.setLoadedPosition(.01*t),this.width=.01*this.finalWidth*t})},onDrag:function(i){
var e=i.clientX-this.x;0>e&&(e=0),e>this.width-this.handleWidth&&(e=this.width-this.handleWidth);
var s=e/this.finalWidth;this.media.seek(this.duration*s),t.style(this.handle,"marginLeft",e+"px"),
t.style(this.progressPosition,"width",e+"px")},startDrag:function(){t.setSelectable(this.playerWidget.domNode,!1),
this.seeking=!0,this.cmove=t.connect(t.doc,"mousemove",this,"onDrag"),this.cup=t.connect(t.doc,"mouseup",this,"endDrag");
},endDrag:function(){t.setSelectable(this.playerWidget.domNode,!0),this.seeking=!1,
this.cmove&&t.disconnect(this.cmove),this.cup&&t.disconnect(this.cup),this.handleOut();
},setHandle:function(i){if(!this.seeking){var e=this.width-this.handleWidth,s=i/this.duration,n=s*e;
t.style(this.handle,"marginLeft",n+"px"),t.style(this.progressPosition,"width",n+"px");
}},setLoadedPosition:function(i){t.style(this.progressLoaded,"width",this.finalWidth*i+"px");
},handleOver:function(){t.addClass(this.handle,"over")},handleOut:function(){this.seeking||t.removeClass(this.handle,"over");
},onResize:function(i){var e=t.coords(this.domNode);this.finalWidth=e.w}})});