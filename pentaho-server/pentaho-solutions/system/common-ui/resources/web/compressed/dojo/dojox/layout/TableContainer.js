define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/array","dojo/dom-prop","dojo/dom-style","dijit/_WidgetBase","dijit/layout/_LayoutWidget"],function(t,e,i,a,s,o,n,l,h,r){
t.experimental("dojox.layout.TableContainer");var d=i("dojox.layout.TableContainer",r,{
cols:1,labelWidth:"100",showLabels:!0,orientation:"horiz",spacing:1,customClass:"",
postCreate:function(){this.inherited(arguments),this._children=[],this.connect(this,"set",function(t,e){
!e||"orientation"!=t&&"customClass"!=t&&"cols"!=t||this.layout()})},startup:function(){
if(!this._started&&(this.inherited(arguments),!this._initialized)){var t=this.getChildren();
t.length<1||(this._initialized=!0,a.add(this.domNode,"dijitTableLayout"),o.forEach(t,function(t){
t.started||t._started||t.startup()}),this.layout(),this.resize())}},resize:function(){
o.forEach(this.getChildren(),function(t){"function"==typeof t.resize&&t.resize()});
},layout:function(){function t(t,e,i){if(""!=r.customClass){var s=r.customClass+"-"+(e||t.tagName.toLowerCase());
a.add(t,s),arguments.length>2&&a.add(t,s+"-"+i)}}if(this._initialized){var i=this.getChildren(),h={},r=this;
o.forEach(this._children,e.hitch(this,function(t){h[t.id]=t})),o.forEach(i,e.hitch(this,function(t,e){
h[t.id]||this._children.push(t)}));var d=s.create("table",{width:"100%","class":"tableContainer-table tableContainer-table-"+this.orientation,
cellspacing:this.spacing},this.domNode),c=s.create("tbody");d.appendChild(c),t(d,"table",this.orientation);
var b=(Math.floor(100/this.cols)+"%",s.create("tr",{},c)),u=this.showLabels&&"horiz"!=this.orientation?s.create("tr",{},c):b,f=this.cols*(this.showLabels?2:1),p=0;
o.forEach(this._children,e.hitch(this,function(e,i){var a=e.colspan||1;a>1&&(a=this.showLabels?Math.min(f-1,2*a-1):Math.min(f,a)),
p+a-1+(this.showLabels?1:0)>=f&&(p=0,b=s.create("tr",{},c),u="horiz"==this.orientation?b:s.create("tr",{},c));
var o;if(this.showLabels)if(o=s.create("td",{"class":"tableContainer-labelCell"},b),
e.spanLabel)n.set(o,"vert"==this.orientation?"rowspan":"colspan",2);else{t(o,"labelCell");
var h={"for":e.get("id")},r=s.create("label",h,o);(Number(this.labelWidth)>-1||String(this.labelWidth).indexOf("%")>-1)&&l.set(o,"width",String(this.labelWidth).indexOf("%")<0?this.labelWidth+"px":this.labelWidth),
r.innerHTML=e.get("label")||e.get("title")}var d;d=e.spanLabel&&o?o:s.create("td",{
"class":"tableContainer-valueCell"},u),a>1&&n.set(d,"colspan",a),t(d,"valueCell",i),
d.appendChild(e.domNode),p+=a+(this.showLabels?1:0)})),this.table&&this.table.parentNode.removeChild(this.table),
o.forEach(i,function(t){"function"==typeof t.layout&&t.layout()}),this.table=d,this.resize();
}},destroyDescendants:function(t){o.forEach(this._children,function(e){e.destroyRecursive(t);
})},_setSpacingAttr:function(t){this.spacing=t,this.table&&(this.table.cellspacing=Number(t));
}});return d.ChildWidgetProperties={label:"",title:"",spanLabel:!1,colspan:1},e.extend(h,d.ChildWidgetProperties),
d});