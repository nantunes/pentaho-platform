var profile=function(){var t=/^dijit\/tests\//,e=function(t,e){var i={"dijit/dijit.profile":1,
"dijit/package.json":1,"dijit/themes/claro/compile":1};return e in i||/^dijit\/resources\//.test(e)&&!/\.css$/.test(t)||/(png|jpg|jpeg|gif|tiff)$/.test(t);
};return{resourceTags:{test:function(e,i){return t.test(i)||"dijit/robot"==i||"dijit/robotx"==i;
},copyOnly:function(t,i){return e(t,i)},amd:function(i,n){return!t.test(n)&&!e(i,n)&&/\.js$/.test(i);
},miniExclude:function(t,e){return/^dijit\/bench\//.test(e)||/^dijit\/themes\/themeTest/.test(e);
}}}}();