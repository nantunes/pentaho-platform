define(["./_base/kernel","./query","./_base/lang","./_base/array","./dom-attr"],function(e,t,a,n,r){
var o=t.NodeList,d={},i=0,u="data-dojo-dataid",g=function(e){var t=r.get(e,u);return t||(t="pid"+i++,
r.set(e,u,t)),t},f=e._nodeData=function(e,t,n){var r,o=g(e);return d[o]||(d[o]={}),
1==arguments.length&&(r=d[o]),"string"==typeof t?arguments.length>2?d[o][t]=n:r=d[o][t]:r=a.mixin(d[o],t),
r},s=e._removeNodeData=function(e,t){var a=g(e);d[a]&&(t?delete d[a][t]:delete d[a]);
};return o._gcNodeData=e._gcNodeData=function(){var e=t("["+u+"]").map(g);for(var a in d)n.indexOf(e,a)<0&&delete d[a];
},a.extend(o,{data:o._adaptWithCondition(f,function(e){return 0===e.length||1==e.length&&"string"==typeof e[0];
}),removeData:o._adaptAsForEach(s)}),o});