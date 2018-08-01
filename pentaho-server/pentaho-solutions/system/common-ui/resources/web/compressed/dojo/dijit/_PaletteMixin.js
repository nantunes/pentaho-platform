define(["dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","./_CssStateMixin","./a11yclick","./focus","./typematic"],function(e,t,s,i,l,n,o,r,a,h,c){
var d=e("dijit._PaletteMixin",r,{defaultTimeout:500,timeoutChangeRate:.9,value:"",
_selectedCell:-1,tabIndex:"0",cellClass:"dijitPaletteCell",dyeClass:null,_dyeFactory:function(e){
var t="string"==typeof this.dyeClass?n.getObject(this.dyeClass):this.dyeClass;return new t(e);
},_preparePalette:function(e,t){this._cells=[];var s=this._blankGif;this.own(o(this.gridNode,a,n.hitch(this,"_onCellClick")));
for(var r=0;r<e.length;r++)for(var h=i.create("tr",{tabIndex:"-1",role:"row"},this.gridNode),d=0;d<e[r].length;d++){
var u=e[r][d];if(u){var _=this._dyeFactory(u,r,d,t[u]),f=i.create("td",{"class":this.cellClass,
tabIndex:"-1",title:t[u],role:"gridcell"},h);_.fillCell(f,s),f.idx=this._cells.length,
this._cells.push({node:f,dye:_})}}this._xDim=e[0].length,this._yDim=e.length;var C={
UP_ARROW:-this._xDim,DOWN_ARROW:this._xDim,RIGHT_ARROW:this.isLeftToRight()?1:-1,
LEFT_ARROW:this.isLeftToRight()?-1:1};for(var g in C)this.own(c.addKeyListener(this.domNode,{
keyCode:l[g],ctrlKey:!1,altKey:!1,shiftKey:!1},this,function(){var e=C[g];return function(t){
this._navigateByKey(e,t)}}(),this.timeoutChangeRate,this.defaultTimeout))},postCreate:function(){
this.inherited(arguments),this._setCurrent(this._cells[0].node)},focus:function(){
h.focus(this._currentFocus)},_onCellClick:function(e){for(var t=e.target;"TD"!=t.tagName;){
if(!t.parentNode||t==this.gridNode)return;t=t.parentNode}var s=this._getDye(t).getValue();
this._setCurrent(t),h.focus(t),this._setValueAttr(s,!0),e.stopPropagation(),e.preventDefault();
},_setCurrent:function(e){"_currentFocus"in this&&t.set(this._currentFocus,"tabIndex","-1"),
this._currentFocus=e,e&&t.set(e,"tabIndex",this.tabIndex)},_setValueAttr:function(e,t){
if(this._selectedCell>=0&&s.remove(this._cells[this._selectedCell].node,this.cellClass+"Selected"),
this._selectedCell=-1,e)for(var i=0;i<this._cells.length;i++)if(e==this._cells[i].dye.getValue()){
this._selectedCell=i,s.add(this._cells[i].node,this.cellClass+"Selected");break}this._set("value",this._selectedCell>=0?e:null),
(t||void 0===t)&&this.onChange(e)},onChange:function(){},_navigateByKey:function(e,t){
if(-1!=t){var s=this._currentFocus.idx+e;if(s<this._cells.length&&s>-1){var i=this._cells[s].node;
this._setCurrent(i),this.defer(n.hitch(h,"focus",i))}}},_getDye:function(e){return this._cells[e.idx].dye;
}});return d});