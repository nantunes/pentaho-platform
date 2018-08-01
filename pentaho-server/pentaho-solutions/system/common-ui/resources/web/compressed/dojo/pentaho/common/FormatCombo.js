define(["dojo/_base/declare","dijit/form/ComboBox","dojo/store/Memory","dojo/_base/lang"],function(e,t,a,y){
var r,m=[{name:"0",type:"numeric",category:"number"},{name:"0.00",type:"numeric",
category:"number"},{name:"#,##0",type:"numeric",category:"number"},{name:"#,###.00",
type:"numeric",category:"number"},{name:"-#,###.00",type:"numeric",category:"number"
},{name:"(#,###.00)",type:"numeric",category:"number"},{name:"$ #,##0",type:"numeric",
category:"currency"},{name:"$ #,##0.00",type:"numeric",category:"currency"},{name:"$ -#,##0.00",
type:"numeric",category:"currency"},{name:"$ (#,##0.00)",type:"numeric",category:"currency"
},{name:"$ #,##0.00;(#,##0.00)",type:"numeric",category:"currency"},{name:"0 %",type:"numeric",
category:"percent"},{name:"0.00 %",type:"numeric",category:"percent"},{name:"#E+#",
type:"numeric",category:"scientific"},{name:"0.00E+00",type:"numeric",category:"scientific"
},{name:"##0.0E+0",type:"numeric",category:"scientific"},{name:"M/d",type:"date",
category:"date"},{name:"M/d/yy",type:"date",category:"date"},{name:"MM/dd/yy",type:"date",
category:"date"},{name:"d-MMM",type:"date",category:"date"},{name:"d-MMM-yy",type:"date",
category:"date"},{name:"MMM-yy",type:"date",category:"date"},{name:"MMMMM-yy",type:"date",
category:"date"},{name:"MMMMM d, yyyy",type:"date",category:"date"},{name:"M/d/yy h:mm AM/PM",
type:"date",category:"date"},{name:"M/d/yy h:mm",type:"date",category:"date"},{name:"M/d/yyyy",
type:"date",category:"date"},{name:"d-MMM-yyyy",type:"date",category:"date"},{name:"h:mm",
type:"date",category:"time"},{name:"h:mm AM/PM",type:"date",category:"time"},{name:"h:mm:ss",
type:"date",category:"time"},{name:"h:mm:ss AM/PM",type:"date",category:"time"},{
name:"[h]:mm:ss",type:"date",category:"time"}];return e("pentaho.common.FormatCombo",[t],{
dataType:"numeric",placeHolder:"Type or select your format",searchAttr:"name",labelAttr:"label",
labelType:"html",orient:["below-centered","below","before"],ignoreCase:!1,constructor:function(e){
y.mixin(this,e),this.baseClass="pentahoFormatCombo "+this.baseClass,r=new a(e&&e.formats?{
data:e.formats}:{data:m}),this.store=r,e&&e.dataType?this.setDataType(e.dataType):this.setDataType(this.dataType);
},setDataType:function(e,t){this.dataType=e,t?(this.category=t,this.query={type:e,
category:t}):this.query={type:e}},labelFunc:function(e,t){return e[this.labelAttr]?e[this.labelAttr]:e.name;
}})});