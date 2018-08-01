var SiteMapComponent=BaseComponent.extend({ph:void 0,selected:"UNUSEDPARAM!@#$",templates:{
list:"<ul class='siteMap siteMapLevel{{level}}'></ul>",item:"<li class='siteMapItem {{classes}}'><a href='{{link}}'>{{name}}</a></li>"
},update:function(){var e=this;if("undefined"!=typeof e.siteMapSelectedParameter&&""!=e.siteMapSelectedParameter&&(e.selected=Dashboards.getParameterValue(e.siteMapSelectedParameter)),
e.ph=$("#"+e.htmlObject).empty(),e.ajaxUrl){var a={url:e.ajaxUrl};_.isEmpty(e.parameters)&&(a.data=Dashboards.propertiesArrayToObject(e.ajaxData)),
e.fetchItems(a,function(a){e.renderList(e.ph,a,0)})}else e.siteMapParameter&&e.renderList(e.ph,Dashboards.getParameterValue(e.siteMapParameter),0);
e.ph.find(".siteMapItem.siteMapSelected").parents(".siteMapItem").addClass("siteMapSelected"),
e.ph.find(".siteMapItem.siteMapInitial").parents(".siteMapItem").addClass("siteMapInitial");
},fetchItems:function(e,a){e=e||{};var t={type:"GET",success:function(e){a(e)},dataType:"json",
async:!0};t=_.extend({},t,e),$.ajax(t)},renderList:function(e,a,t){for(var s=this,i=$(Mustache.render(s.templates.list,{
level:t})),n=-1,l=a.length;++n<l;){var p=a[n],r=p.name||p.id||"",d=p.id||p.name,c=$(Mustache.render(s.templates.item,{
name:r,link:p.link,classes:p.classes||""}));p.link||"function"!=typeof p.action||c.find("a").click(function(){
p.action(c),s.ph.find(".siteMapItem.siteMapSelected").removeClass("siteMapSelected"),
$(this).parents(".siteMapItem").addClass("siteMapSelected"),_.isEmpty(d)||Dashboards.fireChange(s.siteMapSelectedParameter,d);
}),d==s.selected&&c.addClass("siteMapSelected siteMapInitial"),p.sublinks&&p.sublinks.length>0&&s.renderList(c,p.sublinks,++t),
c.appendTo(i)}i.appendTo(e)}});