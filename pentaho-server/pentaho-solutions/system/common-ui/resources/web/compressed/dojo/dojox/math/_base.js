define(["dojo","dojox"],function(t,n){t.getObject("math",!0,n);var r=n.math;return t.mixin(n.math,{
toRadians:function(t){return t*Math.PI/180},toDegrees:function(t){return 180*t/Math.PI;
},degreesToRadians:function(t){return r.toRadians(t)},radiansToDegrees:function(t){
return r.toDegrees(t)},_gamma:function(t){for(var n=1;--t>=1;)n*=t;if(0==t)return n;
if(Math.floor(t)==t)return NaN;if(t==-.5)return Math.sqrt(Math.PI);if(-.5>t)return Math.PI/(Math.sin(Math.PI*(t+1))*this._gamma(-t));
for(var r=13,a=[5665805601518633e-21,1.274371766337968,-4.937419909315511,7.872026703248596,-6.676050374943609,3.252529844448517,-.9185252144102627,.14474022977730785,-.011627561382389852,.0004011798075706662,-42652458386405745e-22,6.665191329033609e-9,-1.5392547381874824e-13],o=a[0],e=1;r>e;e++)o+=a[e]/(t+e);
return n*Math.pow(t+r,t+.5)/Math.exp(t)*o},factorial:function(t){return this._gamma(t+1);
},permutations:function(t,n){return 0==t||0==n?1:this.factorial(t)/this.factorial(t-n);
},combinations:function(t,n){return 0==t||0==n?1:this.factorial(t)/(this.factorial(t-n)*this.factorial(n));
},bernstein:function(t,n,r){return this.combinations(n,r)*Math.pow(t,r)*Math.pow(1-t,n-r);
},gaussian:function(){var t=2;do{var n=2*Math.random()-1,r=2*Math.random()-1;t=n*n+r*r;
}while(t>=1);return n*Math.sqrt(-2*Math.log(t)/t)},range:function(t,n,r){arguments.length<2&&(n=t,
t=0);var a,o=[],e=r||1;if(e>0)for(a=t;n>a;a+=e)o.push(a);else{if(!(0>e))throw new Error("dojox.math.range: step must not be zero.");
for(a=t;a>n;a+=e)o.push(a)}return o},distance:function(t,n){return Math.sqrt(Math.pow(n[0]-t[0],2)+Math.pow(n[1]-t[1],2));
},midpoint:function(t,n){t.length!=n.length&&console.error("dojox.math.midpoint: Points A and B are not the same dimensionally.",t,n);
for(var r=[],a=0;a<t.length;a++)r[a]=(t[a]+n[a])/2;return r}}),n.math});