define(["dojo","dijit","dojox","dijit/_editor/_Plugin","dijit/_editor/html","dojo/_base/connect","dojo/_base/declare"],function(e,t,i,r,o){
var s=e.declare("dojox.editor.plugins.NormalizeStyle",r,{mode:"semantic",condenseSpans:!0,
setEditor:function(t){this.editor=t,t.customUndo=!0,"semantic"===this.mode?this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToSemantic)):"css"===this.mode&&this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToCss)),
e.isIE?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),
this._browserFilter=this._convertToSemantic):e.isWebKit?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToCss)),
this._browserFilter=this._convertToCss):e.isMoz?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),
this._browserFilter=this._convertToSemantic):(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),
this._browserFilter=this._convertToSemantic),this.editor._inserthtmlImpl&&(this.editor._oldInsertHtmlImpl=this.editor._inserthtmlImpl),
this.editor._inserthtmlImpl=e.hitch(this,this._inserthtmlImpl)},_convertToSemantic:function(t){
if(t){var i=this.editor.document,r=this,o=function(t){if(1==t.nodeType){if("dijitEditorBody"!==t.id){
var s,n=t.style,a=t.tagName?t.tagName.toLowerCase():"";if(n&&"table"!=a&&"ul"!=a&&"ol"!=a){
var l=n.fontWeight?n.fontWeight.toLowerCase():"",c=n.fontStyle?n.fontStyle.toLowerCase():"",d=n.textDecoration?n.textDecoration.toLowerCase():"",h=n.fontSize?n.fontSize.toLowerCase():"",m=n.backgroundColor?n.backgroundColor.toLowerCase():"",f=n.color?n.color.toLowerCase():"",u=function(t,i){
if(t){for(;i.firstChild;)t.appendChild(i.firstChild);"span"!=a||i.style.cssText?i.appendChild(t):(e.place(t,i,"before"),
i.parentNode.removeChild(i),i=t)}return i};switch(l){case"bold":case"bolder":case"700":
case"800":case"900":s=i.createElement("b"),t.style.fontWeight=""}if(t=u(s,t),s=null,
"italic"==c&&(s=i.createElement("i"),t.style.fontStyle=""),t=u(s,t),s=null,d){var p=d.split(" "),g=0;
e.forEach(p,function(e){switch(e){case"underline":s=i.createElement("u");break;case"line-through":
s=i.createElement("strike")}g++,g==p.length&&(t.style.textDecoration=""),t=u(s,t),
s=null})}if(h){var x={"xx-small":1,"x-small":2,small:3,medium:4,large:5,"x-large":6,
"xx-large":7,"-webkit-xxx-large":7};h.indexOf("pt")>0?(h=h.substring(0,h.indexOf("pt")),
h=parseInt(h),5>h?h="xx-small":10>h?h="x-small":15>h?h="small":20>h?h="medium":25>h?h="large":30>h?h="x-large":h>30&&(h="xx-large")):h.indexOf("px")>0&&(h=h.substring(0,h.indexOf("px")),
h=parseInt(h),5>h?h="xx-small":10>h?h="x-small":15>h?h="small":20>h?h="medium":25>h?h="large":30>h?h="x-large":h>30&&(h="xx-large"));
var b=x[h];b||(b=3),s=i.createElement("font"),s.setAttribute("size",b),t.style.fontSize="";
}t=u(s,t),s=null,m&&"font"!==a&&r._isInline(a)&&(m=new e.Color(m).toHex(),s=i.createElement("font"),
s.style.backgroundColor=m,t.style.backgroundColor=""),f&&"font"!==a&&(f=new e.Color(f).toHex(),
s=i.createElement("font"),s.setAttribute("color",f),t.style.color=""),t=u(s,t),s=null;
}}if(t.childNodes){var v=[];e.forEach(t.childNodes,function(e){v.push(e)}),e.forEach(v,o);
}}return t};return this._normalizeTags(o(t))}return t},_normalizeTags:function(t){
var i=(this.editor.window,this.editor.document);return e.query("em,s,strong",t).forEach(function(t){
var r,o=t.tagName?t.tagName.toLowerCase():"";switch(o){case"s":r="strike";break;case"em":
r="i";break;case"strong":r="b"}if(r){var s=i.createElement(r);for(e.place("<"+r+">",t,"before");t.firstChild;)s.appendChild(t.firstChild);
t.parentNode.removeChild(t)}}),t},_convertToCss:function(t){if(t){var i=this.editor.document,r=function(t){
if(1==t.nodeType){if("dijitEditorBody"!==t.id){var o=t.tagName?t.tagName.toLowerCase():"";
if(o){var s;switch(o){case"b":case"strong":s=i.createElement("span"),s.style.fontWeight="bold";
break;case"i":case"em":s=i.createElement("span"),s.style.fontStyle="italic";break;
case"u":s=i.createElement("span"),s.style.textDecoration="underline";break;case"strike":
case"s":s=i.createElement("span"),s.style.textDecoration="line-through";break;case"font":
var n={};e.attr(t,"color")&&(n.color=e.attr(t,"color")),e.attr(t,"face")&&(n.fontFace=e.attr(t,"face")),
t.style&&t.style.backgroundColor&&(n.backgroundColor=t.style.backgroundColor),t.style&&t.style.color&&(n.color=t.style.color);
var a={1:"xx-small",2:"x-small",3:"small",4:"medium",5:"large",6:"x-large",7:"xx-large"
};e.attr(t,"size")&&(n.fontSize=a[e.attr(t,"size")]),s=i.createElement("span"),e.style(s,n);
}if(s){for(;t.firstChild;)s.appendChild(t.firstChild);e.place(s,t,"before"),t.parentNode.removeChild(t),
t=s}}}if(t.childNodes){var l=[];e.forEach(t.childNodes,function(e){l.push(e)}),e.forEach(l,r);
}}return t};t=r(t),this.condenseSpans&&this._condenseSpans(t)}return t},_condenseSpans:function(t){
var i=function(t){var r=function(t){var i;if(t){i={};var r=t.toLowerCase().split(";");
e.forEach(r,function(t){if(t){var r=t.split(":"),o=r[0]?e.trim(r[0]):"",s=r[1]?e.trim(r[1]):"";
if(o&&s){var n,a="";for(n=0;n<o.length;n++){var l=o.charAt(n);"-"==l?(n++,l=o.charAt(n),
a+=l.toUpperCase()):a+=l}i[a]=s}}})}return i};if(t&&1==t.nodeType){var o=t.tagName?t.tagName.toLowerCase():"";
if("span"===o&&t.childNodes&&1===t.childNodes.length)for(var s=t.firstChild;s&&1==s.nodeType&&s.tagName&&"span"==s.tagName.toLowerCase();)if(e.attr(s,"class")||e.attr(s,"id")||!s.style)s=s.nextSibling;else{
var n=r(t.style.cssText),a=r(s.style.cssText);if(n&&a){var l,c={};for(l in n){if(n[l]&&a[l]&&n[l]!=a[l]){
if(n[l]!=a[l]){"textDecoration"==l?(c[l]=n[l]+" "+a[l],delete a[l]):c=null;break}
c=null;break}c[l]=n[l],delete a[l]}if(c){for(l in a)c[l]=a[l];for(e.style(t,c);s.firstChild;)t.appendChild(s.firstChild);
var d=s.nextSibling;s.parentNode.removeChild(s),s=d}else s=s.nextSibling}else s=s.nextSibling;
}}t.childNodes&&t.childNodes.length&&e.forEach(t.childNodes,i)};i(t)},_isInline:function(e){
switch(e){case"a":case"b":case"strong":case"s":case"strike":case"i":case"u":case"em":
case"sup":case"sub":case"span":case"font":case"big":case"cite":case"q":case"img":
case"small":return!0;default:return!1}},_inserthtmlImpl:function(e){if(e){var t=this.editor.document,i=t.createElement("div");
return i.innerHTML=e,i=this._browserFilter(i),e=o.getChildrenHtml(i),i.innerHTML="",
this.editor._oldInsertHtmlImpl?this.editor._oldInsertHtmlImpl(e):this.editor.execCommand("inserthtml",e);
}return!1}});return e.subscribe(t._scopeName+".Editor.getPlugin",null,function(e){
if(!e.plugin){var t=e.args.name.toLowerCase();"normalizestyle"===t&&(e.plugin=new s({
mode:"mode"in e.args?e.args.mode:"semantic",condenseSpans:"condenseSpans"in e.args?e.args.condenseSpans:!0
}))}}),s});