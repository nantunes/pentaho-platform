define(["dojo","dijit","dojox","dijit/_Widget","dijit/_TemplatedMixin","dijit/_PaletteMixin","dojo/_base/connect","dojo/_base/declare","dojo/i18n","dojo/i18n!dojox/editor/plugins/nls/latinEntities"],function(t,e,i,n,o,a){
t.experimental("dojox.editor.plugins.EntityPalette");var d=t.declare("dojox.editor.plugins.EntityPalette",[n,o,a],{
templateString:'<div class="dojoxEntityPalette">\n	<table>\n		<tbody>\n			<tr>\n				<td>\n					<table class="dijitPaletteTable">\n						<tbody dojoAttachPoint="gridNode"></tbody>\n				   </table>\n				</td>\n			</tr>\n			<tr>\n				<td>\n					<table dojoAttachPoint="previewPane" class="dojoxEntityPalettePreviewTable">\n						<tbody>\n							<tr>\n								<th class="dojoxEntityPalettePreviewHeader">Preview</th>\n								<th class="dojoxEntityPalettePreviewHeader" dojoAttachPoint="codeHeader">Code</th>\n								<th class="dojoxEntityPalettePreviewHeader" dojoAttachPoint="entityHeader">Name</th>\n								<th class="dojoxEntityPalettePreviewHeader">Description</th>\n							</tr>\n							<tr>\n								<td class="dojoxEntityPalettePreviewDetailEntity" dojoAttachPoint="previewNode"></td>\n								<td class="dojoxEntityPalettePreviewDetail" dojoAttachPoint="codeNode"></td>\n								<td class="dojoxEntityPalettePreviewDetail" dojoAttachPoint="entityNode"></td>\n								<td class="dojoxEntityPalettePreviewDetail" dojoAttachPoint="descNode"></td>\n							</tr>\n						</tbody>\n					</table>\n				</td>\n			</tr>\n		</tbody>\n	</table>\n</div>',
baseClass:"dojoxEntityPalette",showPreview:!0,showCode:!1,showEntityName:!1,palette:"latin",
dyeClass:"dojox.editor.plugins.LatinEntity",paletteClass:"editorLatinEntityPalette",
cellClass:"dojoxEntityPaletteCell",postMixInProperties:function(){var e,i=t.i18n.getLocalization("dojox.editor.plugins","latinEntities"),n=0;
for(e in i)n++;var o=Math.floor(Math.sqrt(n)),a=o,d=0,s=[],l=[];for(e in i)d++,l.push(e),
d%a===0&&(s.push(l),l=[]);l.length>0&&s.push(l),this._palette=s},buildRendering:function(){
this.inherited(arguments);var e=t.i18n.getLocalization("dojox.editor.plugins","latinEntities");
this._preparePalette(this._palette,e);var i=t.query(".dojoxEntityPaletteCell",this.gridNode);
t.forEach(i,function(t){this.connect(t,"onmouseenter","_onCellMouseEnter")},this);
},_onCellMouseEnter:function(t){this._displayDetails(t.target)},postCreate:function(){
this.inherited(arguments),t.style(this.codeHeader,"display",this.showCode?"":"none"),
t.style(this.codeNode,"display",this.showCode?"":"none"),t.style(this.entityHeader,"display",this.showEntityName?"":"none"),
t.style(this.entityNode,"display",this.showEntityName?"":"none"),this.showPreview||t.style(this.previewNode,"display","none");
},_setCurrent:function(t){this.inherited(arguments),this.showPreview&&this._displayDetails(t);
},_displayDetails:function(e){var i=this._getDye(e);if(i){var n=i.getValue(),o=i._alias;
this.previewNode.innerHTML=n,this.codeNode.innerHTML="&amp;#"+parseInt(n.charCodeAt(0),10)+";",
this.entityNode.innerHTML="&amp;"+o+";";var a=t.i18n.getLocalization("dojox.editor.plugins","latinEntities");
this.descNode.innerHTML=a[o].replace("\n","<br>")}else this.previewNode.innerHTML="",
this.codeNode.innerHTML="",this.entityNode.innerHTML="",this.descNode.innerHTML="";
}});return d.LatinEntity=t.declare("dojox.editor.plugins.LatinEntity",null,{constructor:function(t){
this._alias=t},getValue:function(){return"&"+this._alias+";"},fillCell:function(t){
t.innerHTML=this.getValue()}}),d});