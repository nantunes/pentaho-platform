define(["dojo/_base/declare","dojo/_base/xhr","dojo/_base/lang","dojo/_base/array","./LineString","./Collection","./GeometryFeature"],function(r,a,e,t,n,o,s){
return r("dojox.geo.openlayers.JsonImport",null,{constructor:function(r){this._params=r;
},loadData:function(){var r=this._params;a.get({url:r.url,handleAs:"json",sync:!0,
load:e.hitch(this,this._gotData),error:e.hitch(this,this._loadError)})},_gotData:function(r){
var a=this._params.nextFeature;if(e.isFunction(a)){var n=r.layerExtent,i=n[0],h=n[1],l=i+n[2],u=h+n[3],c=r.layerExtentLL,_=c[0],m=c[1],v=_+c[2],f=m+c[3],p=_,y=f,d=v,g=m,F=r.features;
for(var j in F){var x=F[j],k=x.shape,w=null;if(e.isArray(k[0])){var E=new Array;t.forEach(k,function(r){
var a=this._makeGeometry(r,i,h,l,u,p,y,d,g);E.push(a)},this);var b=new o(E);w=new s(b),
a.call(this,w)}else w=this._makeFeature(k,i,h,l,u,p,y,d,g),a.call(this,w)}var G=this._params.complete;
e.isFunction(G)&&G.call(this,G)}},_makeGeometry:function(r,a,e,t,o,s,i,h,l){for(var u=[],c=0,_=0;_<r.length-1;_+=2){
var m=r[_],v=r[_+1];c=(m-a)/(t-a);var f=c*(h-s)+s;c=(v-e)/(o-e);var p=c*(l-i)+i;u.push({
x:f,y:p})}var y=new n(u);return y},_makeFeature:function(r,a,e,t,n,o,i,h,l){var u=this._makeGeometry(r,a,e,t,n,o,i,h,l),c=new s(u);
return c},_loadError:function(){var r=this._params.error;e.isFunction(r)&&r.apply(this,parameters);
}})});