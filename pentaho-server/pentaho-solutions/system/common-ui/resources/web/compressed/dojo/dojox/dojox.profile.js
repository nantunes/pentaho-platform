var profile=function(){var e=/\/tests\//,t=function(e,t){var o={"dojox/dojox.profile":1,
"dojox/package.json":1,"dojox/mobile/themes/utils/compile":1,"dojox/mobile/themes/utils/cleanup":1,
"dojox/app/tests/layoutApp/build.profile":1,"dojox/app/tests/globalizedApp/build.profile":1
};return t in o||/^dojox\/resources\//.test(t)||/(png|jpg|jpeg|gif|tiff)$/.test(e)||/dojox\/app\/build\//.test(t);
},o=["secure","data/(demos|ItemExplorer|StoreExplorer|restListener)","drawing/plugins/drawing/Silverlight","editor/plugins/(ResizeTableColumn|SpellCheck)","embed/(IE)","flash/_base","help","image/(Gallery|SlideShow|ThumbnailPicker)","jq","jsonPath/query","lang/(aspect|async|docs|observable|oo|typed|functional/(binrec|curry|linrec|listcomp|multirec|numrec|tailrec|util|zip))","layout/(BorderContainer|dnd|ext-dijit)","mobile/app/","rails","robot","socket/Reconnect","sql/","storage/","widget/(AnalogGauge|BarGauge|DataPresentation|DocTester|DynamicTooltip|FeedPortlet|FilePicker|gauge|Iterator|Loader|RollingList|SortList)","wire/","xmpp"],r=new RegExp(("^dojox/("+o.join("|")+")").replace(/\//,"\\/")),i=function(e){
return r.test(e)};return{resourceTags:{test:function(t,o){return e.test(o)},copyOnly:function(e,o){
return t(e,o)},amd:function(o,r){return!e.test(r)&&!t(o,r)&&!i(r)&&/\.js$/.test(o);
},miniExclude:function(e,t){return 0}}}}();