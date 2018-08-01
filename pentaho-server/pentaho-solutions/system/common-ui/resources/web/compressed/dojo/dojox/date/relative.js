define(["..","dojo/_base/lang","dojo/date/locale","dojo/i18n"],function(e,t,a,r){
function o(e){return e=new Date(e),e.setHours(0,0,0,0),e}var l=t.getObject("date.relative",!0,e),n=864e5,c=6*n,d=dojo.delegate,i=a._getGregorianBundle,u=a.format;
return l.format=function(e,t){t=t||{};var a=o(t.relativeDate||new Date),l=a.getTime()-o(e).getTime(),n={
locale:t.locale};if(0===l)return u(e,d(n,{selector:"time"}));if(c>=l&&l>0&&t.weekCheck!==!1)return u(e,d(n,{
selector:"date",datePattern:"EEE"}))+" "+u(e,d(n,{selector:"time",formatLength:"short"
}));if(e.getFullYear()==a.getFullYear()){var m=i(r.normalizeLocale(t.locale));return u(e,d(n,{
selector:"date",datePattern:m["dateFormatItem-MMMd"]}))}return u(e,d(n,{selector:"date",
formatLength:"medium",locale:t.locale}))},l});