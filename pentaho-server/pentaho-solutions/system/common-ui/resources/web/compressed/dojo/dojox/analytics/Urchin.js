define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/_base/config","dojo/dom-construct"],function(t,a,o,e,c){
return a("dojox.analytics.Urchin",null,{acct:"",constructor:function(a){this.tracker=null,
t.mixin(this,a),this.acct=this.acct||e.urchin;var n=/loaded|complete/,i="https:"==o.doc.location.protocol?"https://ssl.":"http://www.",s=o.doc.getElementsByTagName("head")[0],r=c.create("script",{
src:i+"google-analytics.com/ga.js"},s);r.onload=r.onreadystatechange=t.hitch(this,function(t){
(t&&"load"==t.type||n.test(r.readyState))&&(r.onload=r.onreadystatechange=null,this._gotGA(),
s.removeChild(r))})},_gotGA:function(){this.tracker=_gat._getTracker(this.acct),this.GAonLoad.apply(this,arguments);
},GAonLoad:function(){this.trackPageView()},trackPageView:function(t){this.tracker._trackPageview.apply(this.tracker,arguments);
}})});