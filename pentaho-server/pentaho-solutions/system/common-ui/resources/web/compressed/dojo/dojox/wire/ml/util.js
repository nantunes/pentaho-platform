dojo.provide("dojox.wire.ml.util"),dojo.require("dojox.xml.parser"),dojo.require("dojox.wire.Wire"),
dojox.wire.ml._getValue=function(e,t){if(!e)return void 0;var i=void 0;if(t&&e.length>=9&&"arguments"==e.substring(0,9))return i=e.substring(9),
new dojox.wire.Wire({property:i}).getValue(t);var n=e.indexOf(".");n>=0&&(i=e.substring(n+1),
e=e.substring(0,n));var r=dijit.byId(e)||dojo.byId(e)||dojo.getObject(e);return r?i?new dojox.wire.Wire({
object:r,property:i}).getValue():r:void 0},dojox.wire.ml._setValue=function(e,t){
if(e){var i=e.indexOf(".");if(!(0>i)){var n=this._getValue(e.substring(0,i));if(n){
var r=e.substring(i+1);new dojox.wire.Wire({object:n,property:r}).setValue(t)}}}},
dojo.declare("dojox.wire.ml.XmlElement",null,{constructor:function(e){dojo.isString(e)&&(e=this._getDocument().createElement(e)),
this.element=e},getPropertyValue:function(e){var t=void 0;if(!this.element)return t;
if(!e)return t;if("@"==e.charAt(0)){var i=e.substring(1);t=this.element.getAttribute(i);
}else if("text()"==e){var n=this.element.firstChild;n&&(t=n.nodeValue)}else{for(var r=[],o=0;o<this.element.childNodes.length;o++){
var l=this.element.childNodes[o];1===l.nodeType&&l.nodeName==e&&r.push(new dojox.wire.ml.XmlElement(l));
}r.length>0&&(t=1===r.length?r[0]:r)}return t},setPropertyValue:function(e,t){var i,n;
if(this.element&&e)if("@"==e.charAt(0)){var r=e.substring(1);t?this.element.setAttribute(r,t):this.element.removeAttribute(r);
}else if("text()"==e){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);
t&&(n=this._getDocument().createTextNode(t),this.element.appendChild(n))}else{var o,l=null;
for(i=this.element.childNodes.length-1;i>=0;i--)o=this.element.childNodes[i],1===o.nodeType&&o.nodeName==e&&(l||(l=o.nextSibling),
this.element.removeChild(o));if(t)if(dojo.isArray(t))for(i in t){var s=t[i];s.element&&this.element.insertBefore(s.element,l);
}else t instanceof dojox.wire.ml.XmlElement?t.element&&this.element.insertBefore(t.element,l):(o=this._getDocument().createElement(e),
n=this._getDocument().createTextNode(t),o.appendChild(n),this.element.insertBefore(o,l));
}},toString:function(){var e="";if(this.element){var t=this.element.firstChild;t&&(e=t.nodeValue);
}return e},toObject:function(){if(!this.element)return null;var e,t="",i={},n=0;for(e=0;e<this.element.childNodes.length;e++){
var r=this.element.childNodes[e];if(1===r.nodeType){n++;var o=new dojox.wire.ml.XmlElement(r).toObject(),l=r.nodeName,s=i[l];
s?dojo.isArray(s)?s.push(o):i[l]=[s,o]:i[l]=o}else(3===r.nodeType||4===r.nodeType)&&(t+=r.nodeValue);
}var d=0;if(1===this.element.nodeType)for(d=this.element.attributes.length,e=0;d>e;e++){
var m=this.element.attributes[e];i["@"+m.nodeName]=m.nodeValue}if(0===n){if(0===d)return t;
i["text()"]=t}return i},_getDocument:function(){return this.element?9==this.element.nodeType?this.element:this.element.ownerDocument:dojox.xml.parser.parse();
}});