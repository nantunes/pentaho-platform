define(["dojo/_base/lang","dojo/_base/config","dojo/ready","dojo/_base/unload","dojo/_base/sniff","dojo/request","dojo/json","dojo/io-query","dojo/request/script"],function(t,e,i,s,a,n,h,r,d){
var o=function(){this._data=[],this._id=1,this.sendInterval=e.sendInterval||5e3,this.inTransitRetry=e.inTransitRetry||200,
this.dataUrl=e.analyticsUrl||require.toUrl("dojox/analytics/logger/dojoxAnalytics.php"),
this.sendMethod=e.sendMethod||"xhrPost",this.maxRequestSize=a("ie")?2e3:e.maxRequestSize||4e3,
i(this,"schedulePusher"),s.addOnUnload(this,function(){this.pushData()})};return t.extend(o,{
schedulePusher:function(e){setTimeout(t.hitch(this,"checkData"),e||this.sendInterval);
},addData:function(t,e){arguments.length>2&&(e=Array.prototype.slice.call(arguments,1)),
this._data.push({plugin:t,data:e})},checkData:function(){return this._inTransit?void this.schedulePusher(this.inTransitRetry):void(this.pushData()||this.schedulePusher());
},pushData:function(){if(this._data.length){this._inTransit=this._data,this._data=[];
var e;switch(this.sendMethod){case"script":e=d.get(this.getQueryPacket(),{preventCache:1,
callbackParamName:"callback"});break;case"xhrPost":default:e=n.post(this.dataUrl,{
data:{id:this._id++,data:h.stringify(this._inTransit)}})}return e.then(t.hitch(this,"onPushComplete")),
e}return!1},getQueryPacket:function(){for(;;){var t={id:this._id++,data:h.stringify(this._inTransit)
},e=this.dataUrl+"?"+r.objectToQuery(t);if(!(e.length>this.maxRequestSize))return e;
this._data.unshift(this._inTransit.pop()),this._split=1}},onPushComplete:function(t){
this._inTransit&&delete this._inTransit,this._data.length>0?this.schedulePusher(this.inTransitRetry):this.schedulePusher();
}}),t.setObject("dojox.analytics",new o)});