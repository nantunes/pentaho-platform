define(["./kernel","./lang","../sniff"],function(o,l,a){var i={global:o.global,doc:this.document||null,
body:function(l){return l=l||o.doc,l.body||l.getElementsByTagName("body")[0]},setContext:function(l,a){
o.global=i.global=l,o.doc=i.doc=a},withGlobal:function(l,a,n,t){var d=o.global;try{
return o.global=i.global=l,i.withDoc.call(null,l.document,a,n,t)}finally{o.global=i.global=d;
}},withDoc:function(l,n,t,d){var e,r,c,u=i.doc,s=a("quirks"),g=a("ie");try{return o.doc=i.doc=l,
o.isQuirks=a.add("quirks","BackCompat"==o.doc.compatMode,!0,!0),a("ie")&&(c=l.parentWindow)&&c.navigator&&(e=parseFloat(c.navigator.appVersion.split("MSIE ")[1])||void 0,
r=l.documentMode,r&&5!=r&&Math.floor(e)!=r&&(e=r),o.isIE=a.add("ie",e,!0,!0)),t&&"string"==typeof n&&(n=t[n]),
n.apply(t,d||[])}finally{o.doc=i.doc=u,o.isQuirks=a.add("quirks",s,!0,!0),o.isIE=a.add("ie",g,!0,!0);
}}};return a("extend-dojo")&&l.mixin(o,i),i});