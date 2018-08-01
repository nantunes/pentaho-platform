define(["./common"],function(n){var r=4,x=20,a={};return a.label=function(a,t){var y=.5*(a.x+t.x),e=.5*(a.y+t.y),o=n.slope(a,t),l=r/Math.sqrt(1+o*o);
(t.y>a.y&&t.x>a.x||t.y<a.y&&t.x<a.x)&&(l=-l,e-=x),y+=-l*o,e+=l;var i=t.x<a.x?"end":"start";
return{x:y,y:e,foo:"bar",align:i}},a.angle=function(a,t){var y=.7*a.x+.3*t.x,e=.7*a.y+.3*t.y,o=n.slope(a,t),l=r/Math.sqrt(1+o*o);
t.x<a.x&&(l=-l),y+=-l*o,e+=l;var i=t.y>a.y?"end":"start";return e+=t.x>a.x?.5*x:-.5*x,
{x:y,y:e,align:i}},a});