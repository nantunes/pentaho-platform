define([],function(){var n={tool:{},stencil:{},drawing:{},plugin:{},button:{}};return{
register:function(t,e){"drawing"==e?n.drawing[t.id]=t:"tool"==e?n.tool[t.name]=t:"stencil"==e?n.stencil[t.name]=t:"plugin"==e?n.plugin[t.name]=t:"button"==e&&(n.button[t.toolType]=t);
},getRegistered:function(t,e){return e?n[t][e]:n[t]}}});