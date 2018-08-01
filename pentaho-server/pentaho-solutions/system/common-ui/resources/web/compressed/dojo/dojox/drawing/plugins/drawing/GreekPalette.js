define(["dojo","dijit/popup","../../library/greek","dijit/focus","dijit/_Widget","dijit/_TemplatedMixin","dijit/_PaletteMixin","dojo/i18n!dojox/editor/plugins/nls/latinEntities"],function(t,e,i,n,s,l,o,a){
var r=t.declare(null,{constructor:function(t){this._alias=t},getValue:function(){
return this._alias},fillCell:function(t){t.innerHTML="&"+this._alias+";"}});return t.declare("dojox.drawing.plugins.drawing.GreekPalette",[s,l,o],{
postMixInProperties:function(){var t,e=i,n=0;for(t in e)n++;var s=Math.floor(Math.sqrt(n)),l=s,o=0,a=[],r=[];
for(t in e)o++,r.push(t),o%l===0&&(a.push(r),r=[]);r.length>0&&a.push(r),this._palette=a;
},show:function(i){t.mixin(i,{popup:this}),e.open(i)},onChange:function(t){var i=this._textBlock;
e.hide(this),i.insertText(this._pushChangeTo,t),i._dropMode=!1},onCancel:function(t){
e.hide(this),this._textBlock._dropMode=!1},templateString:'<div class="dojoxEntityPalette">\n	<table>\n		<tbody>\n			<tr>\n				<td>\n					<table class="dijitPaletteTable">\n						<tbody dojoAttachPoint="gridNode"></tbody>\n				   </table>\n				</td>\n			</tr>\n			<tr>\n				<td>\n					<table dojoAttachPoint="previewPane" class="dojoxEntityPalettePreviewTable">\n						<tbody>\n							<tr>\n								<td class="dojoxEntityPalettePreviewDetailEntity">Type: <span class="dojoxEntityPalettePreviewDetail" dojoAttachPoint="previewNode"></span></td>\n							</tr>\n						</tbody>\n					</table>\n				</td>\n			</tr>\n		</tbody>\n	</table>\n</div>',
baseClass:"dojoxEntityPalette",showPreview:!0,dyeClass:r,paletteClass:"editorLatinEntityPalette",
cellClass:"dojoxEntityPaletteCell",buildRendering:function(){this.inherited(arguments);
var e=a;this._preparePalette(this._palette,e);var i=t.query(".dojoxEntityPaletteCell",this.gridNode);
t.forEach(i,function(t){this.connect(t,"onmouseenter","_onCellMouseEnter")},this);
},_onCellMouseEnter:function(t){this.showPreview&&this._displayDetails(t.target)},
_onCellClick:function(e){var i="click"==e.type?e.currentTarget:this._currentFocus,s=this._getDye(i).getValue();
this._setCurrent(i),setTimeout(t.hitch(this,function(){n(i),this._setValueAttr(s,!0);
})),t.removeClass(i,"dijitPaletteCellHover"),t.stopEvent(e)},postCreate:function(){
this.inherited(arguments),this.showPreview||t.style(this.previewNode,"display","none"),
e.moveOffScreen(this)},_setCurrent:function(e){"_currentFocus"in this&&(t.attr(this._currentFocus,"tabIndex","-1"),
t.removeClass(this._currentFocus,"dojoxEntityPaletteCellHover")),this._currentFocus=e,
e&&(t.attr(e,"tabIndex",this.tabIndex),t.addClass(this._currentFocus,"dojoxEntityPaletteCellHover")),
this.showPreview&&this._displayDetails(e)},_displayDetails:function(t){var e=this._getDye(t);
if(e){var i=e.getValue();e._alias;this.previewNode.innerHTML=i}else this.previewNode.innerHTML="",
this.descNode.innerHTML=""},_preparePalette:function(e,i){this._cells=[];for(var n=this._blankGif,s="string"==typeof this.dyeClass?t.getObject(this.dyeClass):this.dyeClass,l=0;l<e.length;l++)for(var o=t.create("tr",{
tabIndex:"-1"},this.gridNode),a=0;a<e[l].length;a++){var r=e[l][a];if(r){var h=new s(r),d=t.create("td",{
"class":this.cellClass,tabIndex:"-1",title:i[r]});h.fillCell(d,n),this.connect(d,"ondijitclick","_onCellClick"),
this._trackMouseState(d,this.cellClass),t.place(d,o),d.idx=this._cells.length,this._cells.push({
node:d,dye:h})}}this._xDim=e[0].length,this._yDim=e.length},_navigateByArrow:function(t){
var e={38:-this._xDim,40:this._xDim,39:this.isLeftToRight()?1:-1,37:this.isLeftToRight()?-1:1
},i=e[t.keyCode],n=this._currentFocus.idx+i;if(n<this._cells.length&&n>-1){var s=this._cells[n].node;
this._setCurrent(s)}}})});