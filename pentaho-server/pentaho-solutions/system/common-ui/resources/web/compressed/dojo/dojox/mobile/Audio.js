define(["dojo/_base/declare","dojo/dom-construct","dojo/sniff","dijit/_Contained","dijit/_WidgetBase"],function(e,t,i,o,s){
return e("dojox.mobile.Audio",[s,o],{source:null,width:"200px",height:"15px",_playable:!1,
_tag:"audio",constructor:function(){this.source=[]},buildRendering:function(){this.domNode=this.srcNodeRef||t.create(this._tag);
},_getEmbedRegExp:function(){return i("ff")?/audio\/mpeg/i:i("ie")?/audio\/wav/i:null;
},startup:function(){if(!this._started){this.inherited(arguments);var e;if(this.domNode.canPlayType)if(this.source.length>0)for(e=0,
len=this.source.length;e<len;e++)t.create("source",{src:this.source[e].src,type:this.source[e].type
},this.domNode),this._playable=this._playable||!!this.domNode.canPlayType(this.source[e].type);else for(e=0,
len=this.domNode.childNodes.length;e<len;e++){var o=this.domNode.childNodes[e];1===o.nodeType&&"SOURCE"===o.nodeName&&(this.source.push({
src:o.src,type:o.type}),this._playable=this._playable||!!this.domNode.canPlayType(o.type));
}if(i.add("mobile-embed-audio-video-support",!0),i("mobile-embed-audio-video-support")&&!this._playable)for(e=0,
len=this.source.length,re=this._getEmbedRegExp();e<len;e++)if(this.source[e].type.match(re)){
var s=t.create("embed",{src:this.source[0].src,type:this.source[0].type,width:this.width,
height:this.height});this.domNode.parentNode.replaceChild(s,this.domNode),this.domNode=s,
this._playable=!0;break}}}})});