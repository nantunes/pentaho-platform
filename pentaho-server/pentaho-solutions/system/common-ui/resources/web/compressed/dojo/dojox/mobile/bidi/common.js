define(["dojo/_base/array","dijit/_BidiSupport"],function(o,t){return common={},common.enforceTextDirWithUcc=function(o,n){
return n?(n="auto"===n?t.prototype._checkContextual(o):n,("rtl"===n?common.MARK.RLE:common.MARK.LRE)+o+common.MARK.PDF):o;
},common.removeUCCFromText=function(o){return o?o.replace(/\u202A|\u202B|\u202C/g,""):o;
},common.setTextDirForButtons=function(t){var n=t.getChildren();n&&t.textDir&&o.forEach(n,function(o){
o.set("textDir",t.textDir)},t)},common.MARK={LRE:"‪",RLE:"‫",PDF:"‬"},common});