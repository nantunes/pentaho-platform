define(["dojo/_base/connect","dojo/_base/declare","./Base"],function(e,n,t){return n("dojox.charting.action2d.ChartAction",t,{
constructor:function(e,n){},connect:function(){for(var n=0;n<this._listeners.length;++n)this._listeners[n].handle=e.connect(this.chart.node,this._listeners[n].eventName,this,this._listeners[n].methodName);
},disconnect:function(){for(var n=0;n<this._listeners.length;++n)e.disconnect(this._listeners[n].handle),
delete this._listeners[n].handle}})});