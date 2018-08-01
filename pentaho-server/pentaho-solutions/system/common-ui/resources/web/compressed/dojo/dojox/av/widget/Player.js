define(["dojo","dijit","dijit/_Widget","dijit/_TemplatedMixin"],function(i,e,t,s){
return i.experimental("dojox.av.widget.Player"),i.declare("dojox.av.widget.Player",[t,s],{
playerWidth:"480px",widgetsInTemplate:!0,templateString:i.cache("dojox.av.widget","resources/Player.html"),
_fillContent:function(){if(!this.items&&this.srcNodeRef){this.items=[];var e=i.query("*",this.srcNodeRef);
i.forEach(e,function(i){this.items.push(i)},this)}},postCreate:function(){i.style(this.domNode,"width",this.playerWidth+(i.isString(this.playerWidth)?"":"px")),
i.isString(this.playerWidth)&&this.playerWidth.indexOf("%")&&i.connect(window,"resize",this,"onResize"),
this.children=[];i.forEach(this.items,function(t,s){switch(t.id=e.getUniqueId("player_control"),
i.attr(t,"controlType")){case"play":this.playContainer.appendChild(t);break;case"volume":
this.controlsBottom.appendChild(t);break;case"status":this.statusContainer.appendChild(t);
break;case"progress":case"slider":this.progressContainer.appendChild(t);break;case"video":
this.mediaNode=t,this.playerScreen.appendChild(t)}this.items[s]=t.id},this)},startup:function(){
this.media=e.byId(this.mediaNode.id),i.isAIR||(i.style(this.media.domNode,"width","100%"),
i.style(this.media.domNode,"height","100%")),i.forEach(this.items,function(i){if(i!==this.mediaNode.id){
var t=e.byId(i);this.children.push(t),t&&t.setMedia(this.media,this)}},this)},onResize:function(e){
var t=i.marginBox(this.domNode);this.media&&null!==this.media.onResize&&this.media.onResize(t),
i.forEach(this.children,function(i){i.onResize&&i.onResize(t)})}})});