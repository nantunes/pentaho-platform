wd=wd||{},wd.utils=wd.utils||{},wd.utils.OlapUtils=function(e){var t={url:wd.helpers.olap.getServiceUrl(),
extraParams:{}},n={};n.options=$.extend({},t,e);var r=!1,a=(n.options.catalog,n.options.cube,
[]),i={},l={GET_OLAP_CUBES:wd.helpers.olap.getCubesUrl(),GET_CUBE_STRUCTURE:wd.helpers.olap.getCubeStructureUrl(),
GET_PAGINATED_LEVEL_MEMBERS:wd.helpers.olap.getPaginatedLevelMembersUrl(),GET_MEMBER_STRUCTURE:wd.helpers.olap.getLevelMembersStructureUrl()
};return n.initialize=function(){r||(n.initCatalogs(),r=!0)},n.setOptions=function(e){
n.options=$.extend(n.options,e)},n.setCatalog=function(e){n.catalog=e,n.options.catalog=e;
},n.initCatalogs=function(){wd.debug("Getting info from cube");var e=n.callOlapUtilsSync({
operation:l.GET_OLAP_CUBES});a=e.catalogs,wd.info("[OlapUtils] Successfully got catalog information");
},n.resetCubeStructure=function(e){var t=n.getSelectedCatalogName(e),r=n.getSelectedCubeName(e),a=t+"::"+r;
return a?delete i[a]:i={},!0},n.getCatalogs=function(){return a},n.getCubes=function(e){
var t=n.getSelectedCatalogName(e),r=_.find(a,function(e){return e.schema.indexOf(t)>=0;
});return r?r.cubes:null},n.getCubeStructure=function(e){var t=n.getSelectedCatalogName(e),r=n.getSelectedCubeName(e),a=t+"::"+r;
if(!t||!r)return wd.error("Catalog or Cube not specified"),null;if(i[a])return i[a];
var o={operation:l.GET_CUBE_STRUCTURE,catalog:t,cube:r},u=n.callOlapUtilsSync(o);return i[a]=u,
u},n.getCube=function(e){return n.getCubeStructure(e)},n.getDimensions=function(e){
var t=n.getCubeStructure(e);return null!=t?t.dimensions:null},n.getDimension=function(e){
var t=n.getSelectedDimensionName(e),r=n.getCubeStructure(e),a=_.find(r.dimensions,function(e){
return e.name==t});return a},n.getHierarchies=function(e){var t=n.getDimension(e);
return null!=t?t.hierarchies:null},n.getHierarchy=function(e){var t=n.getSelectedHierarchyName(e),r=_.find(n.getHierarchies(e),function(e){
return e.name==t});return r},n.getLevels=function(e){var t=n.getHierarchy(e);return null!=t?t.levels:null;
},n.getLevel=function(e){var t=n.getSelectedLevelName(e),r=_.find(n.getLevels(e),function(e){
return e.name==t});return r},n.getPaginatedLevelMembers=function(e,t){var r={operation:l.GET_PAGINATED_LEVEL_MEMBERS,
startMember:"",pageStart:0,pageSize:100,searchTerm:"",context:""},a=$.extend({},r,e);
a.catalog=n.getSelectedCatalogName(e),a.cube=n.getSelectedCubeName(e);var i=n.getLevel(e);
a.level=i.qualifiedName,n.callOlapUtils(a,function(e){var n=e.members;wd.debug("Got results for paginatedLevelMembers: "+_(n).pluck("name").join(", ")),
t&&t(e)})},n.getOlapUtilsUrl=function(){return n.options.url},n.getSelectedCatalogName=function(e){
var t=$.extend({},n.options,e).catalog;return t},n.getSelectedCubeName=function(e){
return $.extend({},n.options,e).cube},n.getSelectedDimensionName=function(e){return $.extend({},n.options,e).dimension;
},n.getSelectedHierarchyName=function(e){var t=$.extend({},n.options,e).hierarchy;
return null==t&&(t=n.getHierarchies(e)[0].name,n.options.hierarchy=t,wd.info("No hierarchy explicitly selected - setting the default one to '"+t+"'")),
t},n.getSelectedLevelName=function(e){return $.extend({},n.options,e).level},n.callOlapUtilsSync=function(e){
return n.callOlapUtils(e,void 0,void 0,!0)},n.callOlapUtils=function(e,t,n,r){var a,i=this;
return $.ajax({type:"GET",url:i.getOlapUtilsUrl()+e.operation,data:$.extend({},i.options.extraParams,e),
dataType:"json",success:function(e){return e&&"true"==e.status&&e.result?void(r?a=e.result:t(e.result)):("function"!=typeof n&&(n=alert),
n(e))},async:!r}),a},n.initialize(),wd.info("OlapUtils initialized!"),n};