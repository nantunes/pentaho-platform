/*!
* Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

pentaho="undefined"==typeof pentaho?{}:pentaho,pentaho.DataTable=function(t){this.jsonTable=t,
this.className="pentaho.DataTable",t.metadata&&(this.jsonTable=pentaho.DataTable.convertCdaToDataTable(t));
},pentaho.DataTable.convertCdaToDataTable=function(t){for(var e=[],o=[],a=0;a<t.metadata.length;a++)col={
id:t.metadata[a].colName,type:t.metadata[a].colType.toLowerCase(),label:t.metadata[a].colLabel
},col.label||(col.label=col.id),"numeric"==col.type&&(col.type="number"),e.push(col);
for(var n=t.resultset,r=0;r<n.length;r++){var l=[],s=n[r];for(a=0;a<s.length;a++)l.push({
v:s[a]});var i={c:l};o.push(i)}return{cols:e,rows:o}},pentaho.DataTable.prototype.makePostable=function(){
this.jsonTable["class"]="org.pentaho.dataservice.DataTable";for(var t=0;t<this.getNumberOfColumns();t++)this.jsonTable.cols[t]["class"]="org.pentaho.dataservice.Column";
for(var t=0;t<this.getNumberOfRows();t++){var e=this.jsonTable.rows[t].c;if(e)for(cellNo=0;cellNo<e.length;cellNo++)e[cellNo]&&(e[cellNo]["class"]="org.pentaho.dataservice.Cell");
}},pentaho.DataTable.prototype.getJsonTable=function(){return this.jsonTable},pentaho.DataTable.prototype.getNumberOfColumns=function(){
return this.jsonTable.cols.length},pentaho.DataTable.prototype.getNumberOfRows=function(){
return this.jsonTable.rows.length},pentaho.DataTable.prototype.getColumnType=function(t){
return this.jsonTable.cols[t].type},pentaho.DataTable.prototype.getColumnId=function(t){
return this.jsonTable.cols[t].id},pentaho.DataTable.prototype.getColumnLabel=function(t){
return this.jsonTable.cols[t].label},pentaho.DataTable.prototype.getValue=function(t,e){
return this.jsonTable.rows[t].c[e]?void 0!==this.jsonTable.rows[t].c[e].v?this.jsonTable.rows[t].c[e].v:this.jsonTable.rows[t].c[e]:null;
},pentaho.DataTable.prototype._getCell=function(t,e){return this.jsonTable.rows[t].c[e]?this.jsonTable.rows[t].c[e]:null;
},pentaho.DataTable.prototype.getFormattedValue=function(t,e){return this.jsonTable.rows[t].c[e]?void 0!==this.jsonTable.rows[t].c[e].f?this.jsonTable.rows[t].c[e].f:void 0!==this.jsonTable.rows[t].c[e].v?this.jsonTable.rows[t].c[e].v:null==this.jsonTable.rows[t].c[e].v?null:this.jsonTable.rows[t].c[e]:null;
},pentaho.DataTable.prototype.getColumnRange=function(t,e){for(var o,a,n=!1,r=e&&e.key,l=0;l<this.getNumberOfRows();l++){
var s=this.getValue(l,t);null!=s&&(r&&(s=r(s)),n?(o>s&&(o=s),s>a&&(a=s)):(o=s,a=s,
n=!0))}var i={min:o,max:a};return i},pentaho.DataTable.prototype.getDistinctValues=function(t){
for(var e=[],o={},a="number"==this.getColumnType(t),n=0;n<this.getNumberOfRows();n++){
var r=a?this.getValue(n,t):this.getFormattedValue(n,t);o[r]||(o[r]=!0,e.push(r))}
return e},pentaho.DataTable.prototype.getDistinctFormattedValues=function(t){for(var e=[],o={},a=0;a<this.getNumberOfRows();a++){
var n=this.getFormattedValue(a,t);o[n]||(o[n]=!0,e.push(n))}return e},pentaho.DataTable.prototype.getFilteredRows=function(t){
for(var e=[],o={},a=0;a<this.getNumberOfRows();a++)for(var n=0;n<t.length;n++)if(t[n].value&&this.getValue(a,t[n].column)==t[n].value&&e.push(a),
t[n].combinations){var r=this.getValue(a,t[n].column),l=t[n].combinations,s=!1;for(combinationNo=0;combinationNo<l.length;combinationNo++)for(valueNo=0;valueNo<l[combinationNo].values.length;valueNo++)if(r==l[combinationNo].values[valueNo]){
if(o[combinationNo])o[combinationNo][1].push(a);else{var i=["combine",[]];i[1].push(a),
e.push(i),o[combinationNo]=i}s=!0}s||e.push(a)}return e},pentaho.DataTable.prototype.setColumnProperty=function(t,e,o){
t>=0&&t<this.jsonTable.cols.length&&(this.jsonTable.cols[t][e]=o)},pentaho.DataTable.prototype.getColumnProperty=function(t,e){
return t>=0&&t<this.jsonTable.cols.length?this.jsonTable.cols[t][e]:null},pentaho.DataView=function(t){
this.dataTable=t,this.rows=null,this.columns=null,this.className="pentaho.DataView";
},pentaho.DataView.prototype.setRows=function(t){this.rows=t},pentaho.DataView.prototype.setColumns=function(t){
this.columns=t},pentaho.DataView.prototype.getColumnRange=function(t,e){for(var o,a,n=!1,r=e&&e.key,l=0;l<this.getNumberOfRows();l++){
var s=this.getValue(l,t);null!=s&&(r&&(s=r(s)),n?(o>s&&(o=s),s>a&&(a=s)):(o=s,a=s,
n=!0))}var i={min:o,max:a};return i},pentaho.DataView.prototype.getDistinctValues=function(t){
for(var e=[],o={},a=0;a<this.getNumberOfRows();a++){var n=this.getValue(a,t);o[n]||(o[n]=!0,
e.push(n))}return e},pentaho.DataView.prototype.getDistinctFormattedValues=function(t){
for(var e=[],o={},a=0;a<this.getNumberOfRows();a++){var n=this.getFormattedValue(a,t);
o[n]||(o[n]=!0,e.push(n))}return e},pentaho.DataView.prototype.hideColumns=function(t){
tmpCols=[];for(var e=0;e<this.getNumberOfColumns();e++)tmpCols.push(e);for(var o=t.length-1;o>-1;o--)tmpCols.splice(t[o],1);
this.columns=tmpCols},pentaho.DataView.prototype.getNumberOfRows=function(){return null==this.rows?this.dataTable.getNumberOfRows():this.rows.length;
},pentaho.DataView.prototype.getNumberOfColumns=function(){return null==this.columns?this.dataTable.getNumberOfColumns():this.columns.length;
},pentaho.DataView.prototype.getColumnId=function(t){return null==this.columns?this.dataTable.getColumnId(t):this.dataTable.getColumnId(this.columns[t]);
},pentaho.DataView.prototype.getColumnLabel=function(t){return null==this.columns?this.dataTable.getColumnLabel(t):this.dataTable.getColumnLabel(this.columns[t]);
},pentaho.DataView.prototype.getColumnType=function(t){return null==this.columns?this.dataTable.getColumnType(t):this.dataTable.getColumnType(this.columns[t]);
},pentaho.DataView.prototype.getValue=function(t,e){var o=null==this.rows?t:this.rows[t],a=null==this.columns?e:this.columns[e];
if(o.length&&"combine"==o[0]){for(var n,r=this.getColumnType(e),l=0;l<o[1].length;l++)0==l?n=this.dataTable.getValue(o[1][l],a):"string"==r?n+=" + "+this.dataTable.getValue(o[1][l],a):"number"==r&&(n+=this.dataTable.getValue(o[1][l],a));
return n}return this.dataTable.getValue(o,a)},pentaho.DataView.prototype._getCell=function(t,e){
var o=null==this.rows?t:this.rows[t],a=null==this.columns?e:this.columns[e];return this.dataTable._getCell(o,a);
},pentaho.DataView.prototype.getFormattedValue=function(t,e){var o=null==this.rows?t:this.rows[t],a=null==this.columns?e:this.columns[e];
if(o.length&&"combine"==o[0]){for(var n,r=this.getColumnType(e),l=0;l<o[1].length;l++)0==l?n=this.dataTable.getFormattedValue(o[1][l],a):"string"==r?n+=" + "+this.dataTable.getFormattedValue(o[1][l],a):"number"==r&&(n+=this.dataTable.getFormattedValue(o[1][l],a));
return n}return this.dataTable.getFormattedValue(o,a)},pentaho.DataView.prototype.toDataTable=function(){
for(var t=[],e=0;e<this.getNumberOfColumns();e++)col={type:this.getColumnType(e),
id:this.getColumnId(e),label:this.getColumnLabel(e)},t.push(col);for(var o=[],a=0;a<this.getNumberOfRows();a++){
cells=[];for(var e=0;e<this.getNumberOfColumns();e++){var n=this._getCell(a,e);cells.push(n);
}row={c:cells},o.push(row)}var r={cols:t,rows:o},l=new pentaho.DataTable(r);return l;
},pentaho.DataView.prototype.setColumnProperty=function(t,e,o){this.dataTable.setColumnProperty(t,e,o);
},pentaho.DataView.prototype.getColumnProperty=function(t,e){return this.dataTable.getColumnProperty(t,e);
},function(){function t(t){return new Error("Argument '"+t+"' is required.")}function e(t,e){
return new Error("Argument '"+t+"' is invalid."+(e?" "+e:""))}function o(t){return null!=t?+t:NaN;
}pentaho.DataView.prototype.createTrend=pentaho.DataTable.prototype.createTrend=function(o){
if(!(o instanceof Object))throw t("trendArgs");var a=o.type;if(!a)throw t("trendArgs.type");
a=""+a;var n=pentaho.trends.get(a,!0),r=this.getNumberOfColumns(),l=o.x;if(null==l)throw t("trendArgs.x");
if(l=+l,isNaN(l))throw e("trendArgs.x","Not a number.");if(0>l||l>=r)throw e("trendArgs.x","Out of range.");
var s=o.y;if(null==s)throw t("trendArgs.y");if(s=+s,isNaN(s))throw e("trendArgs.y","Not a number.");
if(0>s||s>=r)throw e("trendArgs.y","Out of range.");if("number"!==this.getColumnType(s))throw e("trendArgs.y","Must be a numeric column.");
var i=o.name||a+"Trend",u=o.label||(o.name?i:n.label),h=o.options||{},p=(this.dataTable||this).jsonTable,c=p.cols.length;
p.cols.push({type:"number",id:i,label:u});var m="number"!==this.getColumnType(l),b=this.getRowIndexEnumerator(),f=this,g=m?null:function(t){
return f.getValue(t,l)},d=function(t){return f.getValue(t,s)},T=Object.create(h);T.rows=b,
T.x=g,T.y=d;var w=n.model(T);return w?(dojo.forEach(p.rows,function(t,e){var o=g?g(e):e,a=null!=o?w.sample(o,d(e),e):null;
t.c[c]={v:a}}),!0):(dojo.forEach(p.rows,function(t){t.c[c]={v:null}}),!1)},pentaho.DataView.prototype.getRowIndexEnumerator=pentaho.DataTable.prototype.getRowIndexEnumerator=function(){
var t=-1,e=this.getNumberOfRows(),o={item:void 0,next:function(){return e-1>t?(o.item=++t,
!0):(o.item&&(o.item=void 0),!1)}};return o};var a={};pentaho.trends={},pentaho.trends.define=function(o,n){
if(!o)throw t("type");if(o=""+o,!n)throw t("spec");var r=n.model;if(!r)throw t("spec.model");
if("function"!=typeof r)throw e("spec.model","Not a function");var l=n.label;l||(l=o.chartAt(0).toUpperCase()+o.substr(1)+" Trend");
var s={type:o,label:l,model:r};a[o]=s},pentaho.trends.get=function(o,n){if(!o)throw t("type");
var r=a.hasOwnProperty(o)?a[o]:null;if(!r&&n)throw e("type","There is no trend type named '"+o+"'.");
return r},pentaho.trends.types=function(){var t=[];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.push(e);
return t},pentaho.trends.define("linear",{label:"Linear trend",model:function(t){
for(var e=t.rows,a=t.x,n=t.y,r=0,l=0,s=0,i=0,u=0,h=0;e.next();){var p=e.item,c=a?o(a(p)):r;
if(!isNaN(c)){var m=o(n(p));isNaN(m)||(l++,s+=c,i+=m,u+=c*m,h+=c*c)}r++}var b,f;if(l>=2){
var g=s/l,d=i/l,T=u/l,w=h/l,v=w-g*g;return f=0===v?0:(T-g*d)/v,b=d-f*g,{alpha:b,beta:f,
reset:function(){},sample:function(t){return b+f*+t}}}}})}();