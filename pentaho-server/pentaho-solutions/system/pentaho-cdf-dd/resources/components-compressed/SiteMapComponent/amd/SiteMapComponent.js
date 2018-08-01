define("cde/components/SiteMapComponent/SiteMapComponent",["cdf/components/BaseComponent","cdf/lib/jquery","amd!cdf/lib/underscore","cdf/lib/mustache","cdf/dashboard/Utils"],function(e,t,a,s,i){
return e.extend({ph:void 0,selected:"UNUSEDPARAM!@#$",templates:{list:"<ul class='siteMap siteMapLevel{{level}}'></ul>",
item:"<li class='siteMapItem {{classes}}'><a href='{{link}}'>{{name}}</a></li>"},
update:function(){var e=this;if("undefined"!=typeof e.siteMapSelectedParameter&&""!=e.siteMapSelectedParameter&&(e.selected=e.dashboard.getParameterValue(e.siteMapSelectedParameter)),
e.ph=t("#"+e.htmlObject).empty(),e.ajaxUrl){var s={url:e.ajaxUrl};a.isEmpty(e.parameters)&&(s.data=i.propertiesArrayToObject(e.ajaxData)),
e.fetchItems(s,function(t){e.renderList(e.ph,t,0)})}else e.siteMapParameter&&e.renderList(e.ph,e.dashboard.getParameterValue(e.siteMapParameter),0);
e.ph.find(".siteMapItem.siteMapSelected").parents(".siteMapItem").addClass("siteMapSelected"),
e.ph.find(".siteMapItem.siteMapInitial").parents(".siteMapItem").addClass("siteMapInitial");
},fetchItems:function(e,s){e=e||{};var i={type:"GET",success:function(e){s(e)},dataType:"json",
async:!0};i=a.extend({},i,e),t.ajax(i)},renderList:function(e,i,n){for(var p=this,d=t(s.render(p.templates.list,{
level:n})),l=-1,r=i.length;++l<r;){var c=i[l],o=c.name||c.id||"",m=c.id||c.name,M=t(s.render(p.templates.item,{
name:o,link:c.link,classes:c.classes||""}));c.link||"function"!=typeof c.action||M.find("a").click(function(){
c.action(M),p.ph.find(".siteMapItem.siteMapSelected").removeClass("siteMapSelected"),
t(this).parents(".siteMapItem").addClass("siteMapSelected"),a.isEmpty(m)||p.dashboard.fireChange(p.siteMapSelectedParameter,m);
}),m==p.selected&&M.addClass("siteMapSelected siteMapInitial"),c.sublinks&&c.sublinks.length>0&&p.renderList(M,c.sublinks,++n),
M.appendTo(d)}d.appendTo(e)}})}),define("cde/components/SiteMapComponent",["cde/components/SiteMapComponent/SiteMapComponent"],function(e){
return e});