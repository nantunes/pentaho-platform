define(["dojo/_base/declare","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/_base/window","../Viewport"],function(e,i,t,o,s,r,n){
return t.add("textarea-needs-help-shrinking",function(){var e=r.body(),t=i.create("textarea",{
rows:"5",cols:"20",value:" ",style:{zoom:1,fontSize:"12px",height:"96px",overflow:"hidden",
visibility:"hidden",position:"absolute",border:"5px solid white",margin:"0",padding:"0",
boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"
}},e,"last"),o=t.scrollHeight>=t.clientHeight;return e.removeChild(t),o}),e("dijit.form._ExpandingTextAreaMixin",null,{
_setValueAttr:function(){this.inherited(arguments),this.resize()},postCreate:function(){
this.inherited(arguments);var e=this.textbox;e.style.overflowY="hidden",this.own(s(e,"focus, resize",o.hitch(this,"_resizeLater")));
},startup:function(){this.inherited(arguments),this.own(n.on("resize",o.hitch(this,"_resizeLater"))),
this._resizeLater()},_onInput:function(e){this.inherited(arguments),this.resize();
},_estimateHeight:function(){var e=this.textbox;e.rows=(e.value.match(/\n/g)||[]).length+1;
},_resizeLater:function(){this.defer("resize")},resize:function(){function e(){var e=!1;
""===i.value&&(i.value=" ",e=!0);var t=i.scrollHeight;return e&&(i.value=""),t}var i=this.textbox;
if("hidden"==i.style.overflowY&&(i.scrollTop=0),!this.busyResizing){if(this.busyResizing=!0,
e()||i.offsetHeight){var o=e()+Math.max(i.offsetHeight-i.clientHeight,0),s=o+"px";
if(s!=i.style.height&&(i.style.height=s,i.rows=1),t("textarea-needs-help-shrinking")){
var r,n=e(),h=n,a=i.style.minHeight,l=4,d=i.scrollTop;for(i.style.minHeight=s,i.style.height="auto";o>0;){
i.style.minHeight=Math.max(o-l,4)+"px",r=e();var g=h-r;if(o-=g,l>g)break;h=r,l<<=1;
}i.style.height=o+"px",i.style.minHeight=a,i.scrollTop=d}i.style.overflowY=e()>i.clientHeight?"auto":"hidden",
"hidden"==i.style.overflowY&&(i.scrollTop=0)}else this._estimateHeight();this.busyResizing=!1;
}}})});