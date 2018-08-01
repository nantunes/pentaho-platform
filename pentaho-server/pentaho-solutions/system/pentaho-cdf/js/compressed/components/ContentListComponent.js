define(["../dashboard/Dashboard.ext","../dashboard/Utils","./NavigatorBaseComponent","pentaho/environment","../lib/jquery","amd!../lib/jquery.fancybox"],function(t,e,i,n,r){
return i.extend({update:function(){var t=this,n=4!=this.mode?i.path||e.getPathParameter(i.path):i.getParentPath();
t.draw(n)},draw:function(e){var i=this;r.getJSON(t.getJSONSolution()+"?mode=contentList"+(""!=e?"&path="+e:""),function(t){
i.processContentListResponse(t,e)})},processContentListResponse:function(t,a){r("#"+this.htmlObject).empty();
var s=t.content||[];s.sort(function(t,e){var i=("FOLDER"===t.type?"000":"")+t.name,n=("FOLDER"===e.type?"000":"")+e.name;
return i>n});var o=r("<ul></ul>").attr("id","contentList-"+this.name).appendTo("#"+this.htmlObject);
if(1!==this.mode&&4!==this.mode&&(i.path||e.getPathParameter(i.path))){var h={name:"Up",
title:"Up",type:"FOLDER",description:"Go to parent directory",visible:!0,solution:i.getParentSolution(),
path:a.substring(0,a.lastIndexOf("/"))};s.reverse().push(h),s.reverse()}var p=this;
r.each(s,function(t,e){if(1==p.mode&&"FOLDER"==this.type)return!0;if(2==p.mode&&"FOLDER"!=this.type)return!0;
if(1==this.visible){var i,a="",s="",h="";if("FOLDER"==this.type)a="folder",i=r("<a></a>").attr("target",s).attr("title",this.description).attr("parentPath",e.path).text(this.title).click(function(){
p.draw(r(this).attr("parentPath"))});else{var l=n.server.root.toString();void 0!=this.url?(a="action greybox",
h="/"==l.substring(l.length-1)?l.substring(0,l.length-1)+this.url:l+this.url):(a="action greybox",
h="/"==l.substring(l.length-1)?l.substring(0,l.length-1)+this.link:l+this.link),i=r("<a></a>").attr("target",s).attr("title",this.description).text(this.title).attr("href",h);
}r("<li></li>").attr("class",a).appendTo(o).append(i)}}),r("#contentList-"+this.name+" a").tooltip({
showURL:!1}),r("li.greybox a").click(function(){var t=this.href.replace(/'/g,"&#39;");
return r.fancybox({type:"iframe",href:t,width:r(window).width(),height:r(window).height()
}),!1})}})});