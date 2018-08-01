define(["../../main","dojo/_base/lang","../_Builder","dijit/_BidiSupport","../_Grid","../cells/_base","../cells/dijit"],function(t,e,i,r,o,l,n){
e.extend(o,{setCellNodeTextDirection:function(t,e,i){this.getCell(t).getNode(e).style.direction=i||"";
},getCellNodeTextDirection:function(t,e){return this.getCell(t).getNode(e).style.direction;
},_setTextDirAttr:function(t){this.textDir=t,this.render()}}),e.extend(i._ContentBuilder,{
_getTextDirStyle:function(t,e,i){var o=this.grid.getItem(i),l="";if("auto"===t){var n=e.get?e.get(i,o):e.value||e.defaultValue;
n&&(t=r.prototype._checkContextual(n))}return l=" direction:"+t+";"}}),e.extend(i._HeaderBuilder,{
_getTextDirStyle:function(t,e,i){if("auto"===t){var o=i||e.name||e.grid.getCellName(e);
o&&(t=r.prototype._checkContextual(o))}return" direction:"+t+"; "}}),e.extend(l.Cell,{
LRE:"‪",RLE:"‫",PDF:"‬",KEY_HANDLER:'onkeyup=\' javascript:(function(){var target; if (event.target) target = event.target; else if (event.srcElement) target = event.srcElement; if(!target) return;var regExMatch = /[A-Za-zא-ٟ٪-ۯۺ-߿יִ-﷿ﹰ-ﻼ]/.exec(target.value);target.dir = regExMatch ? ( regExMatch[0] <= "z" ? "ltr" : "rtl" ) : target.dir ? target.dir : "ltr"; })();\'',
_getTextDirMarkup:function(t){var e="",i=this.textDir||this.grid.textDir;return i&&("auto"===i&&(e=this.KEY_HANDLER,
i=r.prototype._checkContextual(t)),e+=" dir='"+i+"'; "),e},formatEditing:function(t,e){
return this.needFormatNode(t,e),'<input class="dojoxGridInput" '+this._getTextDirMarkup(t)+' type="text" value="'+t+'">';
},_enforceTextDirWithUcc:function(t,e){return t="auto"===t?r.prototype._checkContextual(e):t,
("rtl"===t?this.RLE:this.LRE)+e+this.PDF}}),e.extend(l.Select,{_getValueCallOrig:t.grid.cells.Select.prototype.getValue,
getValue:function(t){var e=this._getValueCallOrig(t);return e&&(this.textDir||this.grid.textDir)&&(e=e.replace(/\u202A|\u202B|\u202C/g,"")),
e},formatEditing:function(t,e){this.needFormatNode(t,e);for(var i,r,o=['<select dir = "'+(this.grid.isLeftToRight()?"ltr":"rtl")+'" class="dojoxGridSelect">'],l=0;void 0!==(i=this.options[l])&&void 0!==(r=this.values[l]);l++)r=r.replace?r.replace(/&/g,"&amp;").replace(/</g,"&lt;"):r,
i=i.replace?i.replace(/&/g,"&amp;").replace(/</g,"&lt;"):i,(this.textDir||this.grid.textDir)&&(i=this._enforceTextDirWithUcc(this.textDir||this.grid.textDir,i)),
o.push("<option",t==r?" selected":"",' value = "'+r+'"',">",i,"</option>");return o.push("</select>"),
o.join("")}}),e.extend(n.ComboBox,{getWidgetPropsCallOrig:t.grid.cells.ComboBox.prototype.getWidgetProps,
getWidgetProps:function(t){var e=this.getWidgetPropsCallOrig(t);return(this.textDir||this.grid.textDir)&&(e.textDir=this.textDir||this.grid.textDir),
e}}),e.extend(n._Widget,{getWidgetPropsCallOrig:t.grid.cells._Widget.prototype.getWidgetProps,
getWidgetProps:function(t){var e=this.getWidgetPropsCallOrig(t);return(this.textDir||this.grid.textDir)&&(e.textDir=this.textDir||this.grid.textDir),
e}})});