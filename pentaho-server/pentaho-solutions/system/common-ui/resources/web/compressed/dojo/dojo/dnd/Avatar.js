define(["../_base/declare","../_base/window","../dom","../dom-attr","../dom-class","../dom-construct","../hccss","../query"],function(e,t,a,n,r,o,s,i){
return e("dojo.dnd.Avatar",null,{constructor:function(e){this.manager=e,this.construct();
},construct:function(){var e,t=o.create("table",{"class":"dojoDndAvatar",style:{position:"absolute",
zIndex:"1999",margin:"0px"}}),a=this.manager.source,r=o.create("tbody",null,t),i=o.create("tr",null,r),d=o.create("td",null,i),c=Math.min(5,this.manager.nodes.length),l=0;
for(s("highcontrast")&&o.create("span",{id:"a11yIcon",innerHTML:this.manager.copy?"+":"<"
},d),o.create("span",{innerHTML:a.generateText?this._generateText():""},d),n.set(i,{
"class":"dojoDndAvatarHeader",style:{opacity:.9}});c>l;++l){if(a.creator)e=a._normalizedCreator(a.getItem(this.manager.nodes[l].id).data,"avatar").node;else if(e=this.manager.nodes[l].cloneNode(!0),
"tr"==e.tagName.toLowerCase()){var h=o.create("table"),g=o.create("tbody",null,h);
g.appendChild(e),e=h}e.id="",i=o.create("tr",null,r),d=o.create("td",null,i),d.appendChild(e),
n.set(i,{"class":"dojoDndAvatarItem",style:{opacity:(9-l)/10}})}this.node=t},destroy:function(){
o.destroy(this.node),this.node=!1},update:function(){if(r.toggle(this.node,"dojoDndAvatarCanDrop",this.manager.canDropFlag),
s("highcontrast")){var e=a.byId("a11yIcon"),t="+";this.manager.canDropFlag&&!this.manager.copy?t="< ":this.manager.canDropFlag||this.manager.copy?this.manager.canDropFlag||(t="x"):t="o",
e.innerHTML=t}i("tr.dojoDndAvatarHeader td span"+(s("highcontrast")?" span":""),this.node).forEach(function(e){
e.innerHTML=this.manager.source.generateText?this._generateText():""},this)},_generateText:function(){
return this.manager.nodes.length.toString()}})});