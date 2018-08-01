define(["dojo/_base/declare","dojo/dom-construct","dojo/dom-style"],function(e,t,n){
return e("dojox.treemap.GroupLabel",null,{createRenderer:function(e,r,o){var i=this.inherited(arguments);
if("content"==o||"leaf"==o){var a=t.create("div");n.set(a,{zIndex:30,position:"relative",
height:"100%",textAlign:"center",top:"50%",marginTop:"-.5em"}),t.place(a,i)}return i;
},styleRenderer:function(e,t,r,o){switch(o){case"leaf":n.set(e,"background",this.getColorForItem(t).toHex());
case"content":0==r?e.firstChild.innerHTML=this.getLabelForItem(t):e.firstChild.innerHTML=null;
break;case"header":n.set(e,"display","none")}}})});