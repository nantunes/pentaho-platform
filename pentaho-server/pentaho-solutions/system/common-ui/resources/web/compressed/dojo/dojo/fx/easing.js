define(["../_base/lang"],function(t){var n={linear:function(t){return t},quadIn:function(t){
return Math.pow(t,2)},quadOut:function(t){return t*(t-2)*-1},quadInOut:function(t){
return t=2*t,1>t?Math.pow(t,2)/2:-1*(--t*(t-2)-1)/2},cubicIn:function(t){return Math.pow(t,3);
},cubicOut:function(t){return Math.pow(t-1,3)+1},cubicInOut:function(t){return t=2*t,
1>t?Math.pow(t,3)/2:(t-=2,(Math.pow(t,3)+2)/2)},quartIn:function(t){return Math.pow(t,4);
},quartOut:function(t){return-1*(Math.pow(t-1,4)-1)},quartInOut:function(t){return t=2*t,
1>t?Math.pow(t,4)/2:(t-=2,-0.5*(Math.pow(t,4)-2))},quintIn:function(t){return Math.pow(t,5);
},quintOut:function(t){return Math.pow(t-1,5)+1},quintInOut:function(t){return t=2*t,
1>t?Math.pow(t,5)/2:(t-=2,(Math.pow(t,5)+2)/2)},sineIn:function(t){return-1*Math.cos(t*(Math.PI/2))+1;
},sineOut:function(t){return Math.sin(t*(Math.PI/2))},sineInOut:function(t){return-1*(Math.cos(Math.PI*t)-1)/2;
},expoIn:function(t){return 0==t?0:Math.pow(2,10*(t-1))},expoOut:function(t){return 1==t?1:-1*Math.pow(2,-10*t)+1;
},expoInOut:function(t){return 0==t?0:1==t?1:(t=2*t,1>t?Math.pow(2,10*(t-1))/2:(--t,
(-1*Math.pow(2,-10*t)+2)/2))},circIn:function(t){return-1*(Math.sqrt(1-Math.pow(t,2))-1);
},circOut:function(t){return t-=1,Math.sqrt(1-Math.pow(t,2))},circInOut:function(t){
return t=2*t,1>t?-0.5*(Math.sqrt(1-Math.pow(t,2))-1):(t-=2,.5*(Math.sqrt(1-Math.pow(t,2))+1));
},backIn:function(t){var n=1.70158;return Math.pow(t,2)*((n+1)*t-n)},backOut:function(t){
t-=1;var n=1.70158;return Math.pow(t,2)*((n+1)*t+n)+1},backInOut:function(t){var n=2.5949095;
return t=2*t,1>t?Math.pow(t,2)*((n+1)*t-n)/2:(t-=2,(Math.pow(t,2)*((n+1)*t+n)+2)/2);
},elasticIn:function(t){if(0==t||1==t)return t;var n=.3,u=n/4;return t-=1,-1*Math.pow(2,10*t)*Math.sin(2*(t-u)*Math.PI/n);
},elasticOut:function(t){if(0==t||1==t)return t;var n=.3,u=n/4;return Math.pow(2,-10*t)*Math.sin(2*(t-u)*Math.PI/n)+1;
},elasticInOut:function(t){if(0==t)return 0;if(t=2*t,2==t)return 1;var n=.3*1.5,u=n/4;
return 1>t?(t-=1,-.5*Math.pow(2,10*t)*Math.sin(2*(t-u)*Math.PI/n)):(t-=1,.5*Math.pow(2,-10*t)*Math.sin(2*(t-u)*Math.PI/n)+1);
},bounceIn:function(t){return 1-n.bounceOut(1-t)},bounceOut:function(t){var n,u=7.5625,r=2.75;
return 1/r>t?n=u*Math.pow(t,2):2/r>t?(t-=1.5/r,n=u*Math.pow(t,2)+.75):2.5/r>t?(t-=2.25/r,
n=u*Math.pow(t,2)+.9375):(t-=2.625/r,n=u*Math.pow(t,2)+.984375),n},bounceInOut:function(t){
return.5>t?n.bounceIn(2*t)/2:n.bounceOut(2*t-1)/2+.5}};return t.setObject("dojo.fx.easing",n),
n});