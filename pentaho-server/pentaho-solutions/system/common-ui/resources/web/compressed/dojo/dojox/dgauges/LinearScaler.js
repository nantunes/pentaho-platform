define(["dojo/_base/lang","dojo/_base/declare","dojo/Stateful"],function(i,t,m){return t("dojox.dgauges.LinearScaler",m,{
minimum:0,maximum:100,snapInterval:1,majorTickInterval:NaN,minorTickInterval:NaN,
minorTicksEnabled:!0,majorTicks:null,minorTicks:null,_computedMajorTickInterval:NaN,
_computedMinorTickInterval:NaN,constructor:function(){this.watchedProperties=["minimum","maximum","majorTickInterval","minorTickInterval","snapInterval","minorTicksEnabled"];
},_buildMinorTickItems:function(){var i=this.majorTicks,t=[];if(this.maximum>this.minimum)for(var m,n=Math.floor((this.maximum-this.minimum)/this.getComputedMajorTickInterval())+1,a=Math.floor(this.getComputedMajorTickInterval()/this.getComputedMinorTickInterval()),r=0;n-1>r;r++)for(var s=1;a>s;s++)m={
scaler:this},m.isMinor=!0,m.value=i[r].value+s*this.getComputedMinorTickInterval(),
m.position=(Number(m.value)-this.minimum)/(this.maximum-this.minimum),t.push(m);return t;
},_buildMajorTickItems:function(){var i=[];if(this.maximum>this.minimum)for(var t,m=Math.floor((this.maximum-this.minimum)/this.getComputedMajorTickInterval())+1,n=0;m>n;n++)t={
scaler:this},t.isMinor=!1,t.value=this.minimum+n*this.getComputedMajorTickInterval(),
t.position=(Number(t.value)-this.minimum)/(this.maximum-this.minimum),i.push(t);return i;
},getComputedMajorTickInterval:function(){return isNaN(this.majorTickInterval)?(isNaN(this._computedMajorTickInterval)&&(this._computedMajorTickInterval=(this.maximum-this.minimum)/10),
this._computedMajorTickInterval):this.majorTickInterval},getComputedMinorTickInterval:function(){
return isNaN(this.minorTickInterval)?(isNaN(this._computedMinorTickInterval)&&(this._computedMinorTickInterval=this.getComputedMajorTickInterval()/5),
this._computedMinorTickInterval):this.minorTickInterval},computeTicks:function(){
return this.majorTicks=this._buildMajorTickItems(),this.minorTicks=this.minorTicksEnabled?this._buildMinorTickItems():[],
this.majorTicks.concat(this.minorTicks)},positionForValue:function(i){var t;return(null==i||isNaN(i)||i<=this.minimum)&&(t=0),
i>=this.maximum&&(t=1),isNaN(t)&&(t=(i-this.minimum)/(this.maximum-this.minimum)),
t},valueForPosition:function(i){var t=Math.abs(this.minimum-this.maximum),m=this.minimum+t*i;
return!isNaN(this.snapInterval)&&this.snapInterval>0&&(m=Math.round((m-this.minimum)/this.snapInterval)*this.snapInterval+this.minimum),
m}})});