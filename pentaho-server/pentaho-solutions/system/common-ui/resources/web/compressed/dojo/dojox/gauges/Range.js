define(["dojo/_base/declare","dijit/_Widget"],function(o,i){return o("dojox.gauges.Range",[i],{
low:0,high:0,hover:"",color:null,size:0,startup:function(){this.color=this.color?this.color.color||this.color:"black";
}})});