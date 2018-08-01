define(["./def","./protovis-compat!"],function(e,t){function i(e,t){var i=e&&e.length;
if(i){for(var n=0;i>n;n++){var s=e[n];t&&(s[t]=null),s.dispose()}e.length=0}}function n(e,t,i,n,s){
i[n]=e;var r=e[t]||(e[t]=[]);null==s||s>=r.length?r.push(i):r.splice(s,0,i)}function s(t,i,n,s){
var r,a=t[i];a&&(r=a.indexOf(n))>=0&&e.array.removeAt(a,r),n[s]=null}function r(e,t){
return e.id-t.id}function a(e,t){return t.id-e.id}function o(){delete this.isSelected;
}function l(e){return e.isNull||e.isSelected}function u(e){return e.isSelected===!0;
}function h(e){return e.isSelected===!1}function c(e){return e.isVisible===!0}function m(e){
return e.isVisible===!1}function d(e){return e.isNull===!0}function f(e){return e.isNull===!1;
}function p(t,i,n,s,r){var a;if(this.owner===this)a=new Ce.Atom(this,n,s,t,i),r&&(a.isVirtual=!0);else{
var o=this.parent||this.linkParent;a=o._atomsByKey[i]||p.call(o,t,i,n,s,r)}return e.array.insert(this._atoms,a,this._atomComparer),
N.call(this),this._atomsByKey[i]=a,a}function g(t){var i=t.key,n=this,s=!n._lazyInit;
if(t.dimension===n)return n.owner===n||e.assert("Should be an owner dimension"),i||t!==n._virtualNullAtom?s?N.call(this):this._sumCache=null:t=n.intern(null),
t;if(s){var r=n._atomsByKey[i];if(r){if(r!==t)throw e.error.operationInvalid("Atom is from a different root data.");
return N.call(n),t}if(n.owner===n)throw e.error.operationInvalid("Atom is from a different root data.");
}return g.call(n.parent||n.linkParent,t),s?(n._atomsByKey[i]=t,i?e.array.insert(n._atoms,t,n._atomComparer):(n._nullAtom=t,
n._atoms.unshift(t)),N.call(n)):this._sumCache=null,t}function v(t){var i=e.get(t,"visible"),n=e.get(t,"selected");
return(null==i?null:!!i)+":"+(null==n?null:!!n)}function _(e){var t=this._nullAtom;
return t||(this.owner===this?this.data._atomsBase[this.name]=t=new Ce.Atom(this,null,e,null,""):t=_.call(this.parent||this.linkParent,e),
this._atomsByKey[""]=this._nullAtom=t,this._atoms.unshift(t)),t}function y(){return this.owner===this||e.assert("Can only create atoms on an owner dimension."),
this._virtualNullAtom||(this._virtualNullAtom=new Ce.Atom(this,null,"",null,""),this.data._atomsBase[this.name]=this._virtualNullAtom),
this._virtualNullAtom}function b(){this.owner===this||e.assert("Can only unintern atoms of an owner dimension.");
var t=this._atoms;if(t){for(var i=this._atomsByKey,n=0,s=t.length;s>n;){var r=t[n];
if(r.visited)delete r.visited,n++;else if(r!==this._virtualNullAtom){t.splice(n,1),
s--;var a=r.key;delete i[a],a||(delete this._nullAtom,this.data._atomsBase[this.name]=this._virtualNullAtom);
}}N.call(this)}}function D(){var t=this._atoms;if(t){for(var i,n=this._atomsByKey,s=0,r=t.length;r>s;){
var a=t[s];if(a.isVirtual){t.splice(s,1),r--,i=!0;var o=a.key||e.assert("Cannot be the null or virtual null atom.");
delete n[o]}else s++}i&&N.call(this)}}function N(){this._atomVisibleDatumsCount=this._sumCache=this._visibleAtoms=this._visibleIndexes=null;
}function w(e){n(this,"childNodes",e,"parent"),e.owner=this.owner}function x(e){n(this,"_linkChildren",e,"linkParent"),
e.owner=this.owner}function S(e,t){var i;if(!this._disposed&&(i=this._atomVisibleDatumsCount)){
var n=e.atoms[this.name],s=n.key,r=i[s];i[s]=(r||0)+(t?1:-1),this._visibleAtoms=this._sumCache=this._visibleIndexes=null;
}}function C(){var e=this._atomVisibleDatumsCount;return e||(e={},this.data.datums(null,{
visible:!0}).each(function(t){var i=t.atoms[this.name],n=i.key;e[n]=(e[n]||0)+1},this),
this._atomVisibleDatumsCount=e),e}function I(e){var t=[];return this._atoms.forEach(function(i,n){
this.isVisible(i)===e&&t.push(n)},this),t}function A(t){return e.query(this._atoms).where(function(e){
return this.isVisible(e)===t},this).array()}function T(t,i){this.insertAt(t,i),e.lazy(this,"_childrenByKey")[t.key]=t;
}function k(e,t){n(this,"_linkChildren",e,"linkParent",t)}function O(e){s(this,"_linkChildren",e,"linkParent");
}function R(){i(this.childNodes,"parent"),this._childrenByKey=null,i(this._linkChildren,"linkParent"),
this._groupByCache=null,this._sumAbsCache=null}function L(){this.isOwner()||e.fail("Can only be called on the owner data.");
}function M(t,i){!t.isNull||e.assert("Null datums do not notify selected changes"),
i?this._selectedNotNullDatums.set(t.id,t):this._selectedNotNullDatums.rem(t.id),this._sumAbsCache=null;
}function G(t,i){var n=t.id,s=this,r=e.hasOwnProp;if(r.call(s._datumsById,n)){!t.isNull||e.assert("Null datums do not notify visible changes"),
i?s._visibleNotNullDatums.set(n,t):s._visibleNotNullDatums.rem(n),s._sumAbsCache=null;
for(var a=s._dimensionsList,o=0,l=a.length;l>o;)S.call(a[o++],t,i);for(a=s.childNodes,
o=0,l=a.length;l>o;)G.call(a[o++],t,i);if(a=s._linkChildren,a&&(l=a.length))for(o=0;l>o;)G.call(a[o++],t,i);
}}function P(e){for(var t,i=[e];t=e.parent||e.linkParent;)i.unshift(e=t);return i;
}function B(e,t){for(var i,n=0,s=Math.min(e.length,t.length),r=null;s>n&&(i=e[n])===t[n];)r=i,
n++;return r}function V(t,i){function n(t){if(t){var i=t.key;if(!e.hasOwnProp.call(r,i)){
null!==u&&e.hasOwnProp.call(u,i)&&(t=u[i]);var n=t.id;s.push(t),r[i]=t,a[n]=t,null!==m&&m.push(t),
t.isNull||(t.isSelected&&c.set(n,t),t.isVisible&&h.set(n,t))}}}if(!t)throw e.error.argumentRequired("setDatums");
var s,r,a,o=this._datums.length>0,l=!!e.get(i,"isAdditive"),u=null,h=this._visibleNotNullDatums,c=this._selectedNotNullDatums;
o&&!l?(R.call(this),u=this._datumsByKey,this._datums=s=[],this._datumsById=a={},this._datumsByKey=r={},
h.clear(),c&&c.clear()):(s=this._datums,r=this._datumsByKey,a=this._datumsById,o&&(this._sumAbsCache=null));
var m=null,d=!!this._linkChildren&&this._linkChildren.length>0;if(d&&o&&l&&(m=[]),
e.array.is(t))for(var f=0,p=t.length;p>f;)n.call(this,t[f++]);else{if(!(t instanceof e.Query))throw e.error.argumentInvalid("setDatums","Argument is of invalid type.");
t.each(n,this)}this.select&&this.select(s).forEach(function(e){E.call(this,e),null!==m&&m.splice(m.indexOf(e),1);
},this),j.call(this),d&&this._onDatumsAdded(m||s)}function j(){for(var e=-1,t=this._datums,i=t.length;++e<i;)q.call(this,t[e],!1,!0);
var n=this._dimensionsList;for(e=-1,i=n.length;++e<i;)b.call(n[e])}function q(e,t,i){
var n=this._dimensionsList;if(n||(t=!1),t||i){var s,r,a,o=e.atoms,l=0;if(n)for(s=n.length;s>l;)a=n[l++],
r=o[a.name],r&&(t&&g.call(a,r),i&&(r.visited=!0));else{var u=this.type.dimensionsNames();
for(s=u.length;s>l;)r=o[u[l++]],r&&(r.visited=!0)}}}function E(e){var t=this._datums,i=this._selectedNotNullDatums,n=e.id;
t.splice(t.indexOf(e),1),delete this._datumsById[n],delete this._datumsByKey[e.key],
i&&e.isSelected&&i.rem(n),e.isVisible&&this._visibleNotNullDatums.rem(n)}function K(t){
function i(t){if(null!=t){"object"==typeof t||e.fail.invalidArgument("datumFilter");
var i={},s=!1;for(var r in t){var a=t[r],o=this.dimensions(r).getDistinctAtoms(null!==a?e.array.as(a):[null]);
o.length&&(s=!0,i[r]=o)}s&&n.push(i)}}var n=[];return t=e.array.as(t),t&&t.forEach(i,this),
n}function F(t,i){var n=e.get(i,"visible"),s=e.get(i,"isNull"),r=e.get(i,"selected"),a=e.get(i,"where");
return null!=n&&(t=t.where(n?c:m)),null!=s&&(t=t.where(s?d:f)),null!=r&&(t=t.where(r?u:h)),
a&&(t=t.where(a)),t}function z(t,i){var n=e.get(i,"visible"),s=e.get(i,"isNull"),r=e.get(i,"selected"),a=e.get(i,"where"),o=[];
null!=n&&o.unshift(n?c:m),null!=s&&o.unshift(s?d:f),null!=r&&o.unshift(r?u:h),a&&o.unshift(a),
t&&o.unshift(U(t));var l=o.length;if(l){if(1===l)return o[0];var p=function(e){for(var t=l;t;)if(!o[--t](e))return!1;
return!0};return p}return null}function U(e){function t(t){for(var s=t.atoms,r=0;n>r;r++)if(i(s,e[r]))return!0;
return!1}function i(e,t){for(var i in t)if(t[i].indexOf(e[i])<0)return!1;return!0;
}var n=e.length;return t}function Q(t,i){var n=e.array.as(e.get(i,"orderBy")),s=e.create(i||{},{
orderBy:null}),r=e.query(t).selectMany(function(e,t){return n&&(s.orderBy=n[t]),H.call(this,e,s);
},this);return r.distinct(e.propGet("id"))}function H(t,i){var n=i.orderBy;if(n){
if(n.indexOf("|")>=0)throw e.error.argumentInvalid("keyArgs.orderBy","Multi-dimension order by is not supported.");
}else n=Object.keys(t).sort().join(",");var s=this.groupBy(n,i),r=s.treeHeight,a=[];
return e.query(function(){var i;if(this._data){if(this._datumsQuery){if(this._data||e.assert("Must have a current data"),
a.length||e.assert("Must have a parent data"),!this._dimAtomsOrQuery||e.assert(),
this._datumsQuery.next())return this.item=this._datumsQuery.item,1;this._datumsQuery=null,
i=a.pop(),this._data=i.data,this._dimAtomsOrQuery=i.dimAtomsOrQuery}}else this._data=s,
this._dimAtomsOrQuery=e.query(t[s.groupingLevelSpec.dimensions[0].name]);this._dimAtomsOrQuery||e.assert("Invalid programmer"),
this._data||e.assert("Must have a current data");for(var n=a.length;;){for(;this._dimAtomsOrQuery.next();){
var o=this._dimAtomsOrQuery.item,l=this._data.child(o.key);if(l&&(r-1>n||l._datums.length)){
if(a.push({data:this._data,dimAtomsOrQuery:this._dimAtomsOrQuery}),this._data=l,!(r-1>n))return this._dimAtomsOrQuery=null,
this._datumsQuery=e.query(l._datums),this._datumsQuery.next(),this.item=this._datumsQuery.item,
1;this._dimAtomsOrQuery=e.query(t[l.groupingLevelSpec.dimensions[0].name]),n++}}if(!n)return 0;
i=a.pop(),this._data=i.data,this._dimAtomsOrQuery=i.dimAtomsOrQuery,n--}return 0});
}function $(t,i,n){return e.string.is(t)||e.fail.argumentInvalid("groupLevelText","Invalid grouping specification."),
e.query(t.split(/\s*\|\s*/)).where(e.truthy).select(function(t){var s=Oe.exec(t)||e.fail.argumentInvalid("groupLevelText","Invalid grouping level syntax '{0}'.",[t]),r=s[1],a=(s[2]||"").toLowerCase(),o="desc"===a,l=new Ce.GroupingDimensionSpec(r,o);
return i&&l.bindComplexType(i,n),l})}function W(t,i){function n(){var n={},r=e.query(s.source).select(function(e){
i(e,n);var t=n.series;return null!=t&&null!=t.v&&(t=t.v),t||null}).distinct().array();
return s._createPlot2SeriesKeySet(t,r)}var s=this;this._dataPartGet(n)}function Y(t){
return e.string.is(t)?!!this.mask(t):e.is(t,Ge)?!!this.mask(t.mask()).style(t.style()):void 0;
}function J(e){e||(e="");var t="_"+e,i=Pe[t];return i||(Be===Ge.cacheLimit&&(Pe={},
Be=0),Pe[t]=i=Z(e),Be++),i}function Z(e){function t(e,t){return null==e?a?a(t):"":(e=+e,
isNaN(e)||!isFinite(e)?"":n?0===e?r?r(t):n(t,e,null,!1):e>0?n(t,e,r,!1):s?s(t,-e,r||n):n(t,-e,r,!0):String(e));
}function i(){var t,i,o,l=X(e);if(l.forEach(ee),t=l.length,n=a=s=r=null,t&&(n=re(o=l[0]),
t>1&&(i=l[1],s=re(i.empty?o:i),t>2&&(i=l[2],r=ne(i.empty?o:i),t>3&&(i=l[3],a=se(i.empty?o:i),
t>4)))))throw new Error("Invalid mask. More than 4 sections.")}var n,s,r,a;return i(),
t}function X(e){var t=[];if(e){var i,n,s,r,a=-1,o=e.length,l="",u=1,h=1,c=0,m=0,d=function(e){
u=0,s.list.push(e)},f=function(e){u=0,l+=e},p=function(){l&&(y(),d({type:0,text:l
}),l="")},g=function(e){p(),d(e)},v=function(){p(),!c&&m&&d({type:2}),s.digits=r,
r=0,h=0,s=n.fractional},_=function(){!n||u&&t.length||(h?v():p(),s.digits=r,t.push(n)),
u=h=1,m=r=c=0,n={empty:0,scale:0,groupOn:0,scientific:0,abbreviationOn:0,integer:{
list:[],digits:0},fractional:{list:[],digits:0}},s=n.integer},y=function(){"A"===l?(l="",
g({type:6})):"C"===l?(l="",g({type:4})):"AC"===l?(l="",g({type:6}),g({type:4})):"CA"===l&&(l="",
g({type:4}),g({type:6}))},b=function(){var t,s=a+1,r=!1,l=0;if(o>s){if(t=e.charAt(s),
"-"===t||"+"===t){if(r="+"===t,!(++s<o))return 0;t=e.charAt(s)}for(;"0"===t&&++l&&++s<o&&(t=e.charAt(s)););
if(l)return a=s-1,g({type:5,text:i,digits:l,positive:r}),n.scientific=1,1}return 0;
};for(_();++a<o;)if(i=e.charAt(a),"0"===i)g({type:1}),c=1,r++;else if("#"===i)g({
type:2}),c=1,r++;else if(","===i)h&&g({type:3});else if("."===i)h&&(m=1,v());else if("¤"===i)g({
type:4});else if("C"===i&&"Currency"===e.substring(a,a+8))g({type:4}),a+=7;else if("A"===i&&"Abbreviation"===e.substring(a,a+12))g({
type:6}),a+=11;else if(";"===i)_(),(a+1>=o||";"===e.charAt(a+1))&&(a++,t.push({empty:1
}));else if("\\"===i)a++,o>a&&f(e.charAt(a));else if('"'===i){a++;var D=e.indexOf(i,a);
0>D&&(D=o),f(e.substring(a,D)),a=D}else" "===i?g({type:7}):("e"!==i&&"E"!==i||!b())&&("%"===i?n.scale+=2:"‰"===i?n.scale+=3:"‱"===i&&(n.scale+=4),
f(i));_()}return t}function ee(e){e.empty||(te(e,!0),te(e,!1))}function te(e,t){function i(e){
l[r](e)}for(var n,s,r=t?"push":"unshift",a=e[t?"integer":"fractional"],o=a.list,l=a.list=[],u=a.digits-1,h=0,c=0,m=o.length,d=t?0:m,f=t?function(){
return m>d?o[d++]:null}:function(){return d>0?o[--d]:null};n=f();)switch(s=n.type){
case 0:i(le(n.text));break;case 1:case 2:c&&2===s&&(s=1),i(ue(t,u,1===s,!h)),u--,
h=1,c||1!==s||(c=1);break;case 3:ie(o,d,m)?h&&(e.groupOn=1):e.scale-=3;break;case 4:
i(fe);break;case 5:i(ce(e,n));break;case 6:e.abbreviationOn=1,i(pe);break;case 7:
i(le(" "))}!t&&a.digits&&l.unshift(he(c))}function ie(e,t,i){for(;i>t;){var n=e[t++].type;
if(1===n||2===n)return 1}return 0}function ne(e){function t(t){return ae(e,t,0,!1);
}return t}function se(e){function t(t){return ae(e,t,"",!1)}return t}function re(t){
function i(i,n,s,r){var a,o,l=n,u=0,h=t.scale;if(t.abbreviationOn)for(var c=i.abbreviations.length,m=c;m>0;m--){
var d=3*m;if(Math.pow(10,d)<=n){h-=d,o=m-1;break}}return t.scientific&&(a=Math.floor(Math.log(n)/Math.LN10),
u=h+a-t.integer.digits+1,h-=u),h&&(n=e.mult10(n,h)),n=e.round10(n,t.fractional.digits),
!n&&s?s(i,l):ae(t,i,n,r,u,o)}return i}function ae(e,t,i,n,s,r){var a=""+i,o=a.indexOf("."),l=0>o?a:a.substr(0,o),u=0>o?"":a.substr(o+1);
"0"===l&&(l=""),s||(s=0);var h=[];return n&&h.push(t.negativeSign),l=l.split(""),
u=u.split(""),t.group&&e.groupOn&&oe(t,l),e.integer.list.forEach(function(e){h.push(e(t,l,s,r));
}),e.fractional.list.forEach(function(e){h.push(e(t,u,s,r))}),h.join("")}function oe(e,t){
for(var i,n=e.group,s=function(){t[r-l-1]+=n},r=t.length,a=e.groupSizes,o=a.length,l=0,u=-1;++u<o;){
if(l+=i=a[u],!(r>l))return;s()}for(;(l+=i)<r;)s()}function le(e){function t(){return e;
}return t}function ue(e,t,i,n){function s(t){return t[e?"integerPad":"fractionPad"];
}function r(e,i){var s=i.length;if(s>t){var r=s-1-t;return n?i.slice(0,r+1).join(""):i[r];
}return o?o(e):""}function a(e,i){return t<i.length?i[t]:o?o(e):""}var o=i?s:null;
return e?r:a}function he(e){return e?me:de}function ce(e,t){function i(e,i,n){var s=0>n?e.negativeSign:t.positive?"+":"",r=""+Math.abs(n),a=t.digits-r.length;
return a>0&&(r=new Array(a+1).join("0")+r),t.text+s+r}return i}function me(e){return e.decimal;
}function de(e,t){return t.length?e.decimal:""}function fe(e){return e.currency}function pe(e,t,i,n){
return null!=n?e.abbreviations[n]:void 0}function ge(t){return e.string.is(t)?!!this.mask(t):e.is(t,Ve)?!!this.mask(t.mask()):void 0;
}function ve(i){return i?t.Format.createFormatter(t.Format.date(i)):e.string.to}function _e(t){
return e.is(t,je)?!!this.formatter(t.formatter()):e.fun.is(t)?!!this.formatter(t):void 0;
}function ye(e){return null!=e?String(e):""}function be(t){function i(i){return e.is(i,t)||e.is(i,je)?i:null;
}function n(i,n){var s=e.fun.is(i)?je:t;return s(i,n)}return{cast:i,factory:n}}function De(t){
switch(e.classOf(t)){case Ee:return!!this.number(t.number()).percent(t.percent()).date(t.date()).any(t.any());
case Ge:return!!this.number(t);case Ve:return!!this.date(t);case je:return!!this.any(t);
}if(e.string.is(t)){var i=ze(t);if(i)return!!e.configure(this,i)}}function Ne(t,i){
t=xe(t);var n=e.getOwn(Ke,t);return n?e.configure(n,i):(n=Ke[t]=Ee(i),n.languageCode=t),
n}function we(e){var t=/^([a-z]{2,8})(?:[-_]([a-z]{2}|\d{3}))?$/i,i=t.exec(e);if(!i)return null;
var n=i[1]?i[1].toLowerCase():"",s=i[2]?i[2].toLowerCase():"";return{code:n+(s?"-"+s:""),
primary:n,region:s}}function xe(e){return e?e.toLowerCase():""}function Se(t,i){t=xe(t);
var n=e.getOwn(Ke,t);if(n)return n;if(!i)return null;var s=we(t);if(s){if(s.code!==t&&(n=e.getOwn(Ke,s.code)))return n;
if(s.region&&(n=e.getOwn(Ke,s.primary)))return n}return e.getOwn(Ke,qe,null)}var Ce=e.globalSpace("cdo",{});
e.type("cdo.DimensionType").init(function(i,n,s){this.complexType=i,this.name=n,this.label=e.get(s,"label")||e.titleFromName(n);
var r=e.splitIndexedId(n);this.group=r[0],this.groupLevel=e.nullyTo(r[1],0),this.label.indexOf("{")>=0&&(this.label=e.format(this.label,[this.groupLevel+1])),
this.isHidden=!!e.get(s,"isHidden");var a=e.get(s,"valueType")||null,o=Ce.DimensionType.valueTypeName(a),l=e.getOwn(Ce.DimensionType.cast,o,null);
this.valueType=a,this.valueTypeName=o,this.cast=l;var u=this.valueType===Number,h=!u&&this.valueType===Date;
if(this.isDiscreteValueType=!u&&!h,this.isDiscrete=e.get(s,"isDiscrete"),null==this.isDiscrete)this.isDiscrete=this.isDiscreteValueType;else if(this.isDiscrete=!!this.isDiscrete,
!this.isDiscrete&&this.isDiscreteValueType)throw e.error.argumentInvalid("isDiscrete","The only supported continuous value types are Number and Date.");
if(this._converter=e.get(s,"converter")||null,!this._converter){var c=e.get(s,"rawFormat");
if(c)switch(this.valueType){case Date:this._converter=t.Format.createParser(t.Format.date(c));
}}this._key=e.get(s,"key")||null,this.setComparer(s&&s.comparer);var m,d=e.get(s,"formatter"),f=e.get(s,"formatProto"),p=u?"number":h?"date":"any";
d?m=Ce.format(e.set({},p,d),f):this.isDiscreteValueType?m=Ee(null,f):(m=e.get(s,"format"),
m||u||(m=e.get(s,"rawFormat"),m&&(m=m.replace(/-/g,"/"))),m?e.is(m,Ee)||((e.string.is(m)||e.fun.is(m)&&!e.classOf(m))&&(m=e.set({},p,m)),
m=Ee(m,f)):m=Ee(null,f),d=m[p]()),this._formatter=d||null,this._format=m||null,this.isKey=Boolean(e.get(s,"isKey"));
}).add({isCalculated:!1,compare:function(e,t){return null==e?null==t?0:-1:null==t?1:this._comparer.call(null,e,t);
},comparer:function(e){var t=this;return t.isComparable?e?t._rc||(t._rc=function(e,i){
return t.compare(i,e)}):t._dc||(t._dc=function(e,i){return t.compare(e,i)}):null},
setComparer:function(t){if(void 0===t||!t&&!this.isDiscrete)switch(this.valueType){
case Number:case Date:t=e.compare}this._comparer=t||null,this.isComparable=null!=this._comparer,
this._rc=this._dc=this._rac=this._dac=null},atomComparer:function(e){return e?this._rac||(this._rac=this._createReverseAtomComparer()):this._dac||(this._dac=this._createDirectAtomComparer());
},_toDiscrete:function(){this.isDiscrete=!0},_toCalculated:function(){this.isCalculated=!0;
},_createReverseAtomComparer:function(){function e(e,i){return e===i?0:t.compare(i.value,e.value);
}if(!this.isComparable)return a;var t=this;return e},_createDirectAtomComparer:function(){
function e(e,i){return e===i?0:t.compare(e.value,i.value)}if(!this.isComparable)return r;
var t=this;return e},format:function(){return this._format},formatter:function(){
return this._formatter},converter:function(){return this._converter}}),Ce.DimensionType.cast={
Date:function(e){return e instanceof Date?e:new Date(e)},Number:function(e){return e=Number(e),
isNaN(e)?null:e},String:String,Boolean:Boolean,Object:Object,Any:null},Ce.DimensionType.dimensionGroupName=function(e){
return e.replace(/^(.*?)(\d*)$/,"$1")},Ce.DimensionType.valueTypeName=function(t){
if(null==t)return"Any";switch(t){case Boolean:return"Boolean";case Number:return"Number";
case String:return"String";case Object:return"Object";case Date:return"Date";default:
throw e.error.argumentInvalid("valueType","Invalid valueType function: '{0}'.",[t]);
}},e.type("cdo.ComplexType").init(function(t,i){if(this._dims={},this._dimsList=[],
this._dimsNames=[],this._calculations=[],this._calculatedDimNames={},this._dimsIndexByName=null,
this._dimsByGroup={},this._dimsNamesByGroup={},this.format=Ee(null,e.get(i,"formatProto")),
this.nullNumberAtom=new Ce.NumberAtom(this,null),t)for(var n in t)this.addDimension(n,t[n]);
}).add({describe:function(){var t=e.textTable(2).rowSep().row("Dimension","Properties").rowSep();
return this._dimsList.forEach(function(e){var i=[];i.push('"'+e.label+'"'),i.push(e.valueTypeName),
e.isComparable&&i.push("comparable"),e.isDiscrete||i.push("continuous"),e.isHidden&&i.push("hidden"),
t.row(e.name,i.join(", "))}),t.rowSep(!0),"COMPLEX TYPE INFORMATION\n"+t()+"\n"},
dimensions:function(t,i){if(null==t)return this._dims;var n=e.getOwn(this._dims,t,null);
if(!n&&e.get(i,"assertExists",!0))throw e.error.argumentInvalid("name","Undefined dimension '{0}'",[t]);
return n},filterExtensionDimensionNames:function(t){return t.filter(function(t){return!!e.hasOwn(this,t);
},this._dims)},dimensionsList:function(){return this._dimsList},calculatedDimensionsList:function(){
return this._calcDimsList},dimensionsNames:function(){return this._dimsNames},groupDimensions:function(t,i){
var n=e.getOwn(this._dimsByGroup,t);if(!n&&e.get(i,"assertExists",!0))throw e.error.operationInvalid("There is no dimension type group with name '{0}'.",[t]);
return n},groupDimensionsNames:function(t,i){var n=e.getOwn(this._dimsNamesByGroup,t);
if(!n&&e.get(i,"assertExists",!0))throw e.error.operationInvalid("There is no dimension type group with name '{0}'.",[t]);
return n},addDimension:function(t,i){t||e.fail.argumentRequired("name"),!e.hasOwn(this._dims,t)||e.fail.operationInvalid("A dimension type with name '{0}' is already defined.",[t]);
var n=new Ce.DimensionType(this,t,i);this._dims[t]=n,this._dimsIndexByName=null;var s,r=n.group;
if(r){var a,o=e.getOwn(this._dimsByGroup,r);o?a=this._dimsNamesByGroup[r]:(o=this._dimsByGroup[r]=[],
a=this._dimsNamesByGroup[r]=[]),s=e.array.insert(a,t,e.compare),s=~s,e.array.insertAt(o,s,n);
}var l,u=this._dimsList.length;if(r){s=n.groupLevel;for(var h=0;u>h;h++){var c=this._dimsList[h];
if(c.group===r){if(c.groupLevel>s){l=h;break}l=h+1}}null==l&&(l=u)}else l=u;return e.array.insertAt(this._dimsList,l,n),
e.array.insertAt(this._dimsNames,l,t),n._calculate&&(l=e.array.binarySearch(this._calcDimsList,n._calculationOrder,e.compare,function(e){
return e._calculationOrder}),l>=0?l++:l=~l,e.array.insertAt(this._calcDimsList,l,n)),
n},addCalculation:function(t){t||e.fail.argumentRequired("calcSpec");var i=t.calculation||e.fail.argumentRequired("calculations[i].calculation"),n=t.names;
if(n=e.string.is(n)?n.split(/\s*\,\s*/):e.array.as(n),n&&n.length){var s=this._calculatedDimNames;
n.forEach(function(t){if(t){t=t.replace(/^\s*(.+?)\s*$/,"$1"),!e.hasOwn(s,t)||e.fail.argumentInvalid("calculations[i].names","Dimension name '{0}' is already being calculated.",[t]);
var i=this._dims[t]||e.fail.argumentInvalid("calculations[i].names","Undefined dimension with name '{0}'' ",[t]);
s[t]=!0,i._toCalculated()}},this)}this._calculations.push(i)},isCalculated:function(t){
return e.hasOwn(this._calculatedDimNames,t)},_calculate:function(e){var t=this._calculations,i=t.length;
if(i){for(var n={},s=0;i>s;s++){var r=t[s];r(e,n)}return n}},sortDimensionNames:function(t,i){
var n=this._dimsIndexByName;return n||(n=e.query(this._dimsList).object({name:function(e){
return e.name},value:function(e,t){return t}}),this._dimsIndexByName=n),t.sort(function(t,s){
return e.compare(n[i?i(t):t],n[i?i(s):s])}),t}}),e.type("cdo.ComplexTypeProject").init(function(e){
this._dims={},this._dimList=[],this._dimGroupsDims={},this._dimGroupSpecs=e||{},this._calcList=[];
}).add({_ensureDim:function(t,i){t||e.fail.argumentInvalid("name","Invalid dimension name '{0}'.",[t]);
var n=e.getOwn(this._dims,t);if(n)i&&e.setUDefaults(n.spec,i);else{n=this._dims[t]=this._createDim(t,i),
this._dimList.push(n);var s=e.array.lazy(this._dimGroupsDims,n.groupName);e.array.insert(s,t,e.compare);
}return n},hasDim:function(t){return e.hasOwn(this._dims,t)},setDim:function(t,i){
var n=this._ensureDim(t).spec;return i&&e.copy(n,i),this},setDimDefaults:function(t,i){
return e.setUDefaults(this._ensureDim(t).spec,i),this},_createDim:function(t,i){var n=Ce.DimensionType.dimensionGroupName(t),s=this._dimGroupSpecs[n];
return s&&(i=e.create(s,i)),{name:t,groupName:n,spec:i||{}}},readDim:function(t,i){
var n=this._ensureDim(t,i);if(n.isRead)throw e.error.operationInvalid("Dimension '{0}' already is the target of a reader.",[t]);
if(n.isCalc)throw e.error.operationInvalid("Dimension '{0}' is being calculated, so it cannot be the target of a reader.",[t]);
n.isRead=!0},calcDim:function(t,i){var n=this._ensureDim(t,i);if(n.isCalc)throw e.error.operationInvalid("Dimension '{0}' already is being calculated.",[t]);
if(n.isRead)throw e.error.operationInvalid("Dimension '{0}' is the target of a reader, so it cannot be calculated.",[t]);
n.isCalc=!0},isReadOrCalc:function(t){if(t){var i=e.getOwn(this._dims,t);if(i)return i.isRead||i.isCalc;
}return!1},groupDimensionsNames:function(e){return this._dimGroupsDims[e]},setCalc:function(t){
t||e.fail.argumentRequired("calculations[i]"),t.calculation||e.fail.argumentRequired("calculations[i].calculation");
var i=t.names;i=e.string.is(i)?i.split(/\s*\,\s*/):e.array.as(i),i&&i.length&&i.forEach(this.calcDim,this),
this._calcList.push(t)},configureComplexType:function(e,t){this._dimList.forEach(function(i){
var n=i.name,s=i.spec;s=this._extendSpec(n,s,t),e.addDimension(n,s)},this),this._calcList.forEach(function(t){
e.addCalculation(t)})},_extendSpec:function(t,i,n){var s=Ce.DimensionType.dimensionGroupName(t);
switch(i||(i={}),s){case"category":var r=e.get(n,"isCategoryTimeSeries",!1);r&&void 0===i.valueType&&(i.valueType=Date);
break;case"value":void 0===i.valueType&&(i.valueType=Number)}return void 0!==i.converter||i.valueType!==Date||i.rawFormat||(i.rawFormat=e.get(n,"timeSeriesFormat")),
i.formatProto=e.get(n,"formatProto"),i}}),e.type("cdo.Atom").init(function(t,i,n,s,r){
this.dimension=t,this.id=null==i?-e.nextId():e.nextId(),this.value=i,this._label=null==n?null:n,
void 0!==s&&(this.rawValue=s),this.key=r}).add({isVirtual:!1,rawValue:void 0,get label(){
var e=this._label;return null===e&&(this._label=e=this.dimension.format(this.value,this.rawValue)),
e},set label(t){this._label=e.string.to(t)},get labelPercent(){var e=this.dimension.type.format().percent();
return e(this.value)},toString:function(){var e=this.label;return null!=e?e:(e=this.value,
null!=e?""+e:"")}}),e.type("cdo.NumberAtom").init(function(t,i,n){this.complexType=t,
this.id=e.nextId(),this.value=null==i?null:i,this._label=null==n?null:n,this.key=null==i?"":i.toString();
}).add({dimension:null,get key(){return""+this.value},get rawValue(){return this.value;
},get label(){var e=this._label;return null===e&&(this._label=e=this.complexType.format.number()(this.value,this.rawValue)),
e},set label(t){this._label=e.string.to(t)},get labelPercent(){return this.complexType.format.percent()(this.value);
}});var Ie=1;e.type("cdo.Complex").init(function(t,i,n,s,r,a){this.id=Ie++,s||(s=null);
var o;t?(o=t.owner,null===s&&(s=t.atoms)):o=this,this.owner=o,this.atoms=s?Object.create(s):{};
var l=!!n;if(n||(n=o.type._dimsNames),i){var u,h=this.atoms,c=o._dimensions,m=function(t){
var n=i[t],r=c[t];if(void 0===r){if(!l)throw e.error.operationInvalid("Extension atom values require dimension names to be specified.");
if(!(n instanceof Ce.Atom))throw e.error.operationInvalid("Extension atom values must be cdo.Atom instances.");
h[t]=n}else n=r.intern(n),null==n.value||null!==s&&n===s[t]||(h[t]=n)};if(l)for(var d=-1,f=n.length;++d<f;)m(n[d]);else for(u in i)m(u);
if(a){i=o.type._calculate(this);for(u in i)e.hasOwnProp.call(h,u)||m(u)}}this._initValueKeyLabel(n,r);
}).add({labelSep:" ~ ",keySep:"~",value:null,label:null,rawValue:void 0,_initValueKeyLabel:function(e,t){
var i,n=e.length;if(0===n)this.key="",this.value=null,t&&(this.label="");else if(1===n)i=this.atoms[e[0]],
this.key=this._getAtomKey(i),this.value=i.value,this.rawValue=i.rawValue,t&&(this.label=i.label);else{
for(var s,r,a,o="",l=this.owner.keySep,u=this.owner.labelSep,h=this.atoms,c="",m=-1;++m<n;)i=h[e[m]],
0===m?s=i.key:s+=l+i.key,r=this._getAtomKey(i),null!==r&&(0===m?o=r:o+=l+r),t&&""!==(a=i.label)&&(""===c?c=a:c+=u+a);
this.value=this.rawValue=s,this.key=o,t&&(this.label=c)}},_getAtomKey:function(e){
return e.key},getSpecifiedAtom:function(e){return this.atoms[e]},ensureLabel:function(){
var t=this.label;if(null==t){t="";var i=this.owner.labelSep;e.eachOwn(this.atoms,function(e){
var n=e.label;n&&(t?t+=i+n:t=n)}),this.label=t}return t},view:function(e){return new Ce.ComplexView(this,e);
},toString:function(){var t=[""+e.qualNameOf(this.constructor)];return null!=this.index&&t.push("#"+this.index),
this.owner.type.dimensionsNames().forEach(function(i){t.push(i+": "+e.describe(this.atoms[i].value));
},this),t.join(" ")},rightTrimKeySep:function(e){return e&&Ce.Complex.rightTrimKeySep(e,this.owner.keySep);
},absKeyTrimmed:function(){return this.rightTrimKeySep(this.absKey)},keyTrimmed:function(){
return this.rightTrimKeySep(this.key)}}),Ce.Complex.rightTrimKeySep=function(e,t){
if(e&&t)for(var i,n=t.length;e.lastIndexOf(t)===(i=e.length-n)&&i>=0;)e=e.substr(0,i);
return e},Ce.Complex.values=function(e,t){var i=e.atoms;return t.map(function(e){
return i[e].value})},Ce.Complex.compositeKey=function(e,t){for(var i="",n=t.length,s=e.owner.keySep,r=e.atoms,a=0;n>a;a++){
var o=r[t[a]].key;a?i+=s+o:i=o}return i},Ce.Complex.labels=function(e,t){var i=e.atoms;
return t.map(function(e){return i[e].label})};var Ae=e.propGet("id");e.type("cdo.ComplexView",Ce.Complex).init(function(e,t){
this.source=e,this.viewDimNames=t,this.base(e,e.atoms,t,e.owner.atoms,!0)}).add({
values:function(){return Ce.Complex.values(this,this.viewDimNames)},labels:function(){
return Ce.Complex.labels(this,this.viewDimNames)}}),e.type("cdo.Datum",Ce.Complex).init(function(e,t,i){
this.base(e,t,i,null,!1,!0),this.key||(this.key=this.id)}).add({isSelected:!1,isVisible:!0,
isNull:!1,isVirtual:!1,isTrend:!1,trend:null,isInterpolated:!1,interpolation:null,
_getAtomKey:function(e){return e.dimension.isKey?e.key:null},setSelected:function(e){
if(this.isNull)return!1;e=null==e||!!e;var t=this.isSelected!==e;return t&&(e?this.isSelected=!0:delete this.isSelected,
M.call(this.owner,this,e)),t},toggleSelected:function(){return this.setSelected(!this.isSelected);
},setVisible:function(e){if(this.isNull)return!1;e=null==e||!!e;var t=this.isVisible!==e;
return t&&(this.isVisible=e,G.call(this.owner,this,e)),t},toggleVisible:function(){
return this.setVisible(!this.isVisible)}});var Te=Ce.Datum.isSelected=e.propGet("isSelected");
Ce.Datum.isSelectedT=u,Ce.Datum.isSelectedF=h,Ce.Datum.isVisibleT=c,Ce.Datum.isVisibleF=m,
Ce.Datum.isNullT=d,Ce.Datum.isNullF=f,e.type("cdo.TrendDatum",Ce.Datum).init(function(e,t,i,n){
this.base(e,t,i),this.trend=n}).add({isVirtual:!0,isTrend:!0}),e.type("cdo.InterpolationDatum",Ce.Datum).init(function(e,t,i,n,s){
this.base(e,t,i),this.interpolation=n,this.interpDimName=s}).add({isVirtual:!0,isInterpolated:!0
});var ke={abs:!0};e.type("cdo.Dimension").init(function(t,i){this.data=t,this.type=i,
this.root=this,this.owner=this;var n=i.name;if(this.name=n,this._atomComparer=i.atomComparer(),
this._atomsByKey={},this.isKey=i.isKey,t.isOwner())this._atoms=[],this._lazyInit=null,
y.call(this);else{var s,r=t.parent;r?(s=r._dimensions[n],w.call(s,this),this.root=t.parent.root):(r=t.linkParent,
r||e.assert("Data must have a linkParent"),s=r._dimensions[n],x.call(s,this)),this._nullAtom=this.owner._nullAtom,
this._lazyInit=function(){this._lazyInit=null;for(var t=this.data._datums,i=t.length,r=this._atomsByKey,a=0;i>a;a++){
var o=t[a].atoms[n];r[o.key]=o}this._atoms=s.atoms().filter(function(t){return e.hasOwnProp.call(r,t.key);
})}}}).add({parent:null,linkParent:null,_linkChildren:null,_atomsByKey:null,_atomVisibleDatumsCount:null,
_disposed:!1,_nullAtom:null,_virtualNullAtom:null,_visibleAtoms:null,_visibleIndexes:null,
_atomComparer:null,_atoms:null,_sumCache:null,count:function(){return null!==this._lazyInit&&this._lazyInit(),
this._atoms.length},isVisible:function(t){return null!==this._lazyInit&&this._lazyInit(),
e.hasOwn(this._atomsByKey,t.key)||e.assert("Atom must exist in this dimension."),
C.call(this)[t.key]>0},atoms:function(t){null!==this._lazyInit&&this._lazyInit();var i=e.get(t,"visible");
return null==i?this._atoms:(i=!!i,this._visibleAtoms||(this._visibleAtoms={}),this._visibleAtoms[i]||(this._visibleAtoms[i]=A.call(this,i)));
},indexes:function(i){null!==this._lazyInit&&this._lazyInit();var n=e.get(i,"visible");
return null==n?t.range(0,this._atoms.length):(n=!!n,this._visibleIndexes||(this._visibleIndexes={}),
this._visibleIndexes[n]||(this._visibleIndexes[n]=I.call(this,n)))},atom:function(e){
if(null==e||""===e)return this._nullAtom;if(e instanceof Ce.Atom)return e;null!==this._lazyInit&&this._lazyInit();
var t=this.type._key,i=t?t.call(null,e):e;return this._atomsByKey[i]||null},getDistinctAtoms:function(e){
var t,i,n,s=[],r=e?e.length:0;if(r){n={};for(var a=0;r>a;a++)(t=this.atom(e[a]))&&!n[i="\x00"+t.key]&&(n[i]=t,
s.push(t))}return s},extent:function(t){var i,n=this.atoms(t),s=n.length;if(!s)return void 0;
var r=this._nullAtom&&null==n[0].value?1:0,a=s-r;if(a>0){var o=n[r],l=n[s-1];if(o!==l&&e.get(t,"abs",!1)){
var u=o.value<0?-1:1,h=l.value<0?-1:1;if(u===h)0>h&&(i=l,l=o,o=i);else if(a>2){l.value<-o.value&&(l=o);
var c=e.array.binarySearch(n,0,this.type.comparer(),function(e){return e.value});if(0>c){
c=~c;var m=n[c-1],d=n[c];o=-m.value<d.value?m:d}else o=n[c]}else l.value<-o.value&&(i=l,
l=o,o=i)}return{min:o,max:l}}return void 0},min:function(e){var t=this.atoms(e),i=t.length;
if(!i)return void 0;var n=this._nullAtom&&null==t[0].value?1:0;return i>n?t[n]:void 0;
},max:function(e){var t=this.atoms(e),i=t.length;return i&&null!=t[i-1].value?t[i-1]:void 0;
},sumAbs:function(e){return this.sumAbsAtom(e).value},value:function(e){return this.valueAtom(e).value;
},valueAbs:function(e){return this.valueAbsAtom(e).value},sum:function(e){return this.sumAtom(e).value;
},sumAtom:function(t){var i=!!e.get(t,"abs",!1),n=e.get(t,"zeroIfNone",!0),s=v(t)+":"+i,r=e.getOwn(this._sumCache,s);
if(void 0===r){var a=this.name,o=this.data.datums(null,t).reduce(function(e,t){var n=t.atoms[a].value;
return null===n?e:(i&&0>n&&(n=-n),null!=e?e+n:n)},null);(this._sumCache||(this._sumCache={}))[s]=r=this.read(o);
}return n&&null===r.value?this.read(0):r},sumAbsAtom:function(t){return t=t?e.create(t,ke):ke,
this.sumAtom(t)},valueAtom:function(e){return this.sumAtom(e)},valueAbsAtom:function(e){
var t=this.valueAtom(e);return t.value<0?this.read(-t.value):t},percent:function(e,t){
var i=e instanceof Ce.Atom?e.value:e;if(!i)return 0;var n=this.sumAbs(t);return n?Math.abs(i)/n:0;
},valuePercent:function(e){var t=this.valueAbs(e);if(!t)return 0;var i=this.data.parent;
if(!i)return 1;var n=i.dimensionsSumAbs(this.name,e);return t/n},percentOverParent:function(e){
return this.valuePercent(e)},format:function(t,i){return e.string.to(this.type._formatter?this.type._formatter.call(null,t,i):t);
},intern:function(e,t){return this._read(e,!0,t)},read:function(e){return this._read(e,!1);
},_read:function(t,i,n){var s,r;if(null==t||""===t)return this._nullAtom||(i?_.call(this):this.owner._virtualNullAtom);
if("object"==typeof t){if(t instanceof Ce.Atom){if(t.dimension!==this)throw e.error.operationInvalid("Atom is of a different dimension.");
return t}if("v"in t&&(r=t.f,null==(t=t.v)||""===t))return this._nullAtom||(i?_.call(this,r):this.owner._virtualNullAtom);
}var a,o=this.type;if(n||null===(a=o._converter))s=t;else if(null==(s=a(t))||""===s)return this._nullAtom||(i?_.call(this):this.owner._virtualNullAtom);
if(null!==(a=o.cast)&&(null==(s=a(s))||""===s))return this._nullAtom||(i?_.call(this):this.owner._virtualNullAtom);
var l=""+(null!==(a=o._key)?a(s):s);if(0===l.length)throw e.error.operationInvalid("Only a null value can have an empty key.");
var u;return i?(null!==this._lazyInit&&this._lazyInit(),void 0!==(u=this._atomsByKey[l])?(i&&!n&&u.isVirtual&&delete u.isVirtual,
u):p.call(this,t,l,s,r,n)):void 0!==(u=this.owner._atomsByKey[l])?u:new Ce.Atom(this,s,r,t,l);
},dispose:function(){var e,t=this;t._disposed||(i(t.childNodes,"parent"),i(t._linkChildren,"linkParent"),
(e=t.parent)&&s(e,"childNodes",t,"parent"),(e=t.linkParent)&&s(e,"_linkChildren",t,"linkParent"),
N.call(t),t._lazyInit=t._atoms=t._nullAtom=t._virtualNullAtom=null,t._disposed=!0);
}}),e.type("cdo.Data",Ce.Complex).init(function(i){if(null==i)throw e.error.argumentRequired("keyArgs");
this._visibleNotNullDatums=new e.Map;var n,s,r,a,o,l,u=null,h=null,c=this.parent=i.parent||null;
if(c)this.root=c.root,this.depth=c.depth+1,this.type=c.type,n=c.owner,u=i.datums||e.fail.argumentRequired("datums"),
h=i.atoms||e.fail.argumentRequired("atoms"),a=i.atomsDimNames||e.fail.argumentRequired("atomsDimNames"),
r=c.atoms,l=i.extensionDatums||c.extensionDatums,s=Object.create(c.atomsIsSet),a.forEach(function(e){
s[e]=!0});else{this.root=this,a=[];var m=i.linkParent||null;m?(n=m.owner,this.type=n.type,
u=i.datums||e.fail.argumentRequired("datums"),this._leafs=[],r=i.atomsBase||m.atoms,
s=i.atomsBaseIsSet||Object.create(m.atomsIsSet),l=i.extensionDatums||m.extensionDatums,
o=e.get(i,"index",null),k.call(m,this,o)):(n=this,this.type=i.type||e.fail.argumentRequired("type"),
r={},s={},i.labelSep&&(this.labelSep=i.labelSep),i.keySep&&(this.keySep=i.keySep),
this._selectedNotNullDatums=new e.Map)}this.owner=n,this._datums=[],this._datumsById={},
this._datumsByKey={},null!==u&&this._addDatumsLocal(u),this._atomsBase=r,this.atomsIsSet=s,
this.extensionDatums=l||null,this._dimensions={},this._dimensionsList=[],this.type.dimensionsList().forEach(this._initDimension,this),
this.base(n,h,a,r,!0),t.Dom.Node.call(this),c?(o=e.get(i,"index",null),T.call(c,this,o),
this.absKey=c.absKey?e.string.join(n.keySep,c.absKey,this.key):this.key,this.absLabel=c.absLabel?e.string.join(n.labelSep,c.absLabel,this.label):this.label):(this.absKey=this.key,
this.absLabel=this.label)}).add(t.Dom.Node).add({parent:null,linkParent:null,_dimensions:null,
_dimensionsList:null,_freeDimensionNames:null,_linkChildren:null,_leafs:null,_childrenByKey:null,
_visibleNotNullDatums:null,_selectedNotNullDatums:null,_groupByCache:null,_sumAbsCache:null,
treeHeight:null,_datums:null,_datumsById:null,_datumsByKey:null,depth:0,label:"",
absLabel:"",_disposed:!1,_isFlattenGroup:!1,_isDegenerateFlattenGroup:!1,_initDimension:function(e){
var t=new Ce.Dimension(this,e);this._dimensions[e.name]=t,this._dimensionsList.push(t);
},dimensions:function(t,i){if(null==t)return this._dimensions;var n=e.getOwn(this._dimensions,t);
if(!n&&e.get(i,"assertExists",!0))throw e.error.argumentInvalid("name","Undefined dimension '{0}'.",[t]);
return n},dimensionsList:function(){return this._dimensionsList},getSpecifiedAtom:function(e){
return this.atomsIsSet[e]===!0?this.atoms[e]:null},freeDimensionsNames:function(){
var e=this._freeDimensionNames;return e||(this._freeDimensionNames=e=this.type.dimensionsNames().filter(function(e){
var t=this.atoms[e];return!(t instanceof Ce.Atom)||null==t.value},this)),e},isOwner:function(){
return this.owner===this},children:function(){var t=this.childNodes;return t.length>0?e.query(t):e.query();
},child:function(t){return e.getOwn(this._childrenByKey,t,null)},childCount:function(){
return this.childNodes.length},contains:function(t){return e.hasOwn(this._datumsById,t.id);
},datumByKey:function(t){return e.getOwn(this._datumsByKey,t,null)},leafs:function(){
return e.query(this._leafs)},count:function(){return this._datums.length},firstDatum:function(){
return this._datums.length>0?this._datums[0]:null},firstAtoms:function(){return(this.firstDatum()||this).atoms;
},singleDatum:function(){var e=this._datums;return 1===e.length?e[0]:null},dispose:function(){
var e=this;if(!e._disposed){R.call(e);var t;(t=e._selectedNotNullDatums)&&t.clear(),
e._visibleNotNullDatums.clear(),t=e._dimensionsList;for(var i=0,n=t.length;n>i;i++)t[i].dispose();
e._dimensions=null,e._dimensionsList=null,(t=e.parent)&&(t.removeChild(e),e.parent=null),
(t=e.linkParent)&&O.call(t,e),e._disposed=!0}},disposeChildren:function(){R.call(this);
}}),Ce.Data.add({selectedCount:function(){return this.isOwner()?this._selectedNotNullDatums.count:this.datums(null,{
selected:!0}).count()},selectedDatums:function(){return this.isOwner()?this._selectedNotNullDatums.values():this.datums(null,{
selected:!0}).array()},selectedDatumMap:function(){if(this.isOwner())return this._selectedNotNullDatums.clone();
var t=this.datums(null,{selected:!0}).object({name:e.propGet("id")});return new e.Set(t);
},visibleCount:function(){return this._visibleNotNullDatums.count},replaceSelected:function(t){
e.array.is(t)||(t=t.array());var i=e.query(t).where(Te).object({name:Ae}),n=this.owner.clearSelected(function(t){
return!e.hasOwn(i,t.id)});return n|=Ce.Data.setSelected(t,!0)},clearSelected:function(e){
if(this.owner!==this)return this.owner.clearSelected(e);if(!this._selectedNotNullDatums.count)return!1;
var t;return e?(t=!1,this._selectedNotNullDatums.values().filter(e).forEach(function(e){
t=!0,o.call(e),this._selectedNotNullDatums.rem(e.id)},this)):(t=!0,this._selectedNotNullDatums.values().forEach(function(e){
o.call(e)}),this._selectedNotNullDatums.clear()),t}}),Ce.Data.setSelected=function(t,i){
var n=0;return t&&e.query(t).each(function(e){n|=e.setSelected(i)}),!!n},Ce.Data.toggleSelected=function(t,i){
e.array.isLike(t)||(t=e.query(t).array());var n=e.query(t),s=i?n.any(Te):n.all(l);
return this.setSelected(t,!s)},Ce.Data.setVisible=function(t,i){var n=0;return t&&e.query(t).each(function(e){
n|=e.setVisible(i)}),!!n},Ce.Data.toggleVisible=function(t){e.array.isLike(t)||(t=e.query(t).array());
var i=e.query(t).all(e.propGet("isVisible"));return Ce.Data.setVisible(t,!i)},Ce.Data.add({
select:null,load:function(t,i){L.call(this);var n=e.get(i,"where"),s=e.get(i,"isNull"),r=e.get(i,"isAdditive",!1),a=e.query(t).select(function(e){
var t=new Ce.Datum(this,e);return s&&s(t)&&(t.isNull=!0),n&&!n(t)?null:t},this);V.call(this,a,{
isAdditive:r,doAtomGC:!0})},clearVirtuals:function(){var t=this._datums,i=t.length;
if(i>0){this._sumAbsCache=null;for(var n,s=0;i>s;){var r=t[s];r.isVirtual?(E.call(this,r),
i--,n=!0):s++}if(n){if(!t.length&&this.parent)return void this.dispose();var a=this.childNodes;
if(a)for(s=0,i=a.length;i>s;){var o=a[s];o.clearVirtuals(),o.parent?s++:i--}this._linkChildren&&this._linkChildren.forEach(function(e){
e.clearVirtuals()})}}e.eachOwn(this._dimensions,function(e){D.call(e)})},add:function(e){
L.call(this),V.call(this,e,{isAdditive:!0,doAtomGC:!0})},_addDatumsSimple:function(e){
this._addDatumsLocal(e),this._onDatumsAdded(e)},_onDatumsAdded:function(e){var t=this._linkChildren;
if(t)for(var i=-1,n=t.length;++i<n;)t[i]._addDatumsSimple(e)},_addDatumsLocal:function(e){
var t=this._datums,i=this._visibleNotNullDatums,n=this._selectedNotNullDatums,s=this._datumsById,r=this._datumsByKey,a=!!this._dimensions;
this._sumAbsCache=null;for(var o=-1,l=e.length;++o<l;){var u=e[o],h=u.id;void 0===s[h]&&(t.push(u),
s[h]=u,r[u.key]=u,a&&q.call(this,u,!0,!1),u.isNull||(n&&u.isSelected&&n.set(h,u),
u.isVisible&&i.set(h,u)))}},groupBy:function(t,i){var n,s,r=new Ce.GroupingOper(this,t,i),a=r.key;
return a&&(n=this._groupByCache,s=n&&n[a]),s?e.debug>=7&&e.log("[GroupBy] Cache key hit '"+a+"'"):(e.debug>=7&&e.log("[GroupBy] "+(a?"Cache key not found : '"+a+"' on '"+this.id+"'":"No Cache key")),
s=r.execute(),a&&((n||(this._groupByCache={}))[a]=s)),s},where:function(t,i){var n=t&&K.call(this,t),s=this._datums;
s.length>0&&(n?s=Q.call(this,n,i).array():i&&(s=F(e.query(s),i).array()));var r=(n||i)&&z(n,i);
return new Ce.FilteredData({linkParent:this,datums:s,where:r})},datums:function(t,i){
if(0===this._datums.length)return e.query();if(!t)return i?F(e.query(this._datums),i):e.query(this._datums);
var n=K.call(this,t);return Q.call(this,n,i)},datum:function(e,t){return this.datums(e,t).first()||null;
},dimensionsSumAbs:function(e,t){var i=this.dimensionNumberValue(e,t).value;return null!==i&&0>i?-i:i;
},dimensionNumberValue:function(e,t){var i=this._createDimensionOperArgs(e,t);return this._dimensionNumberValue(i);
},_createDimensionOperArgs:function(t,i){var n,s,r=null;"function"==typeof t?(n=t,
s=e.get(i,"discrimPossibleDims")||null,r=e.get(i,"discrimKey")||null,null!==r&&(r="discrim:"+r)):(n=e.fun.constant(t),
s=[t],r=t);var a=null;return null!==r&&(a=r+":"+v(i)+":"+(s||[]).join("|")),{discrimFun:n,
discrimPossibleDimNames:s,cacheKey:a,keyArgs:i}},_dimensionNumberValue:function(t){
var i,n=t.cacheKey;return(null===n||void 0===(i=e.getOwn(this._sumAbsCache,n)))&&(i=this._dimensionNumberValueCore(t),
null!==n&&((this._sumAbsCache||(this._sumAbsCache={}))[n]=i)),i},_dimensionNumberValueCore:function(t){
var i,n=t.discrimFun(this,null!==t.discrimPossibleDimNames);if(0===this.childCount()){
if(null!==n)return this.dimensions(n).valueAtom(t.keyArgs);i=e.query(t.discrimPossibleDimNames).select(function(e){
return this.dimensions(e).valueAbsAtom(t.keyArgs).value},this).reduce(e.addPreservingNull,null);
}else i=this.children().where(function(e){return!e._isFlattenGroup||e._isDegenerateFlattenGroup;
}).select(function(e){var i=e._dimensionNumberValue(t).value;return null!==i&&0>i?-i:i;
}).reduce(e.addPreservingNull,null);return null!==n?this.dimensions(n).read(i):null===i?this.type.nullNumberAtom:new Ce.NumberAtom(this.type,i);
},dimensionPercentValue:function(e,t){function i(e){return null===a?new Ce.NumberAtom(this.type,e):a.read(e);
}var n=this._createDimensionOperArgs(e,t),s=this._dimensionNumberValue(n),r=s.value;
if(null===r)return s;var a=s.dimension;if(0===r)return i.call(this,0);var o=this.parent;
if(null===o)return i.call(this,1);var l=o._dimensionNumberValue(n);return i.call(this,Math.abs(r)/l.value);
}}).type().add({lca:function(e){var t,i,n,s,r=e.length,a=null;if(r){if(1===r)return e[0];
var o=1;n=P(e[0]);do{if(i=e[o],s=P(i),!(a=B(n,s)))return null;t=i,n=s}while(++o<r);
}return a}}),Ce.querySpecPredicate=U,e.type("cdo.FilteredData",Ce.Data).init(function(t){
if(null==t||null!=t.parent||null==t.linkParent)throw e.error.argumentRequired("keyArgs.linkParent");
this.base(t),this._wherePred=t.where||e.fail.argumentRequired("keyArgs.where")}).add({
_addDatumsSimple:function(e){e=e.filter(this._wherePred),this.base(e)}}),e.type("cdo.GroupingData",Ce.Data).init(function(t){
if(null==t)throw e.error.argumentRequired("keyArgs");this.base(t),this.groupingOper=t.groupingOper||e.fail.argumentRequired("keyArgs.groupingOper"),
this.groupingSpec=t.groupingSpec||null,this.groupingLevelSpec=t.groupingLevelSpec||null;
}),e.type("cdo.GroupingRootData",Ce.GroupingData).init(function(t){if(null==t||null!=t.parent||null==t.linkParent)throw e.error.argumentRequired("keyArgs.linkParent");
var i=t.groupingSpec;if(null==i)throw e.error.argumentRequired("keyArgs.groupingSpec");
var n=t.groupingOper;if(n&&i.hasExtensionComplexTypes){t=Object.create(t);var s=t.atomsBase=Object.create(t.linkParent.atoms),r=n._extensionDataSetsMap;
i.extensionDimensions().each(function(e){void 0===s[e.fullName]&&(s[e.fullName]=r[e.dataSetName].owner.atoms[e.name]);
})}this.base(t)}).add({_addDatumsSimple:function(e){e=this.groupingOper.executeAdd(this,e),
this._onDatumsAdded(e)}}),e.type("cdo.GroupData",Ce.GroupingData).init(function(t){
if(null==t||null==t.parent)throw e.error.argumentRequired("keyArgs.parent");this.base(t);
}),Ce.Data.add({getInfo:function(){var t=["DATA SUMMARY",e.logSeparator,"  Dimension",e.logSeparator];
return e.eachOwn(this.dimensions(),function(e,i){var n=e.count(),s=e.type,r=[];r.push(),
r.push(s.valueTypeName),s.isComparable&&r.push("comparable"),s.isDiscrete||r.push("continuous"),
s.isHidden&&r.push("hidden"),t.push("  "+i+' ("'+s.label+'", #'+n+")\n	"+e.atoms().slice(0,10).map(function(e){
return e.label}).join(", ")+(n>10?"...":""))}),t.join("\n")},getValues:function(){
return t.range(0,this.getCategoriesSize()).map(function(e){return this._getValuesForCategoryIndex(e);
},this)},_getDimensionValues:function(e){return this.dimensions(e).atoms().map(function(e){
return e.value})},_getDimensionVisibleValues:function(e){return this.dimensions(e).atoms({
visible:!0}).map(function(e){return e.value})},getSeries:function(){return this._getDimensionValues("series");
},getVisibleSeriesIndexes:function(){return this.dimensions("series").indexes({visible:!0
})},getVisibleCategoriesIndexes:function(){return this.dimensions("category").indexes({
visible:!0})},getVisibleSeries:function(){return this._getDimensionVisibleValues("series");
},getCategories:function(){return this._getDimensionValues("category")},getVisibleCategories:function(){
return this._getDimensionVisibleValues("category")},_getValuesForCategoryIndex:function(t){
var i=this.dimensions("category").atoms()[t],n=this.datums({category:i}).uniqueIndex(function(e){
return e.atoms.series.key});return this.dimensions("series").atoms().map(function(t){
var i=e.getOwn(n,t.key);return i?i.atoms.value.value:null})},getSeriesSize:function(){
var e=this.dimensions("series",{assertExists:!1});return e?e.count():0},getCategoriesSize:function(){
var e=this.dimensions("category",{assertExists:!1});return e?e.count():0}}),e.type("cdo.DataOper").init(function(t){
t||e.fail.argumentRequired("linkParent"),this._linkParent=t}).add({key:null,execute:e.abstractMethod
}),e.type("cdo.GroupingOper",Ce.DataOper).init(function(t,i,n){if(i||e.fail.argumentRequired("groupingSpecs"),
i=e.array.as(i),0===i.length)throw e.error.argumentRequired("groupingSpecText");e.get(n,"inverted",!1)&&(i=i.slice().reverse()),
this.base(t,n);var s=e.get(n,"where"),r=s&&e.get(n,"whereKey")||"",a=e.get(n,"visible",null),o=e.get(n,"selected",null);
this._preFilter=z(null,{visible:a,selected:o,where:s});var l=e.get(n,"isNull",null);
this._postFilter=z(null,{isNull:l});var u=null==o&&!(s&&!r),h=u?[]:null,c="",m=null,d=e.get(n,"extensionDataSetsMap",null),f=e.get(n,"reverse",!1);
this._groupSpecs=i.map(function(i){if(i instanceof Ce.GroupingSpec){if(i.complexType!==t.type)throw e.error.argumentInvalid("groupingSpecText","Invalid associated complex type.");
}else i=Ce.GroupingSpec.parse(i,t.type);if(i.isNull)throw e.error.argumentInvalid("groupingSpecText","Null grouping specification.");
return i.flatteningMode===Ce.FlatteningMode.SingleLevel&&(i=i.toSingleLevel()),f&&(i=i.reverse()),
u&&h.push(i.key),null!==i.extensionComplexTypeNames&&i.extensionComplexTypeNames.forEach(function(t){
var i;if(null===d||!(i=d[t]))throw e.error.operationInvalid("Grouping specification requires extension data set '{0}'.",[t]);
null===m&&(m=Object.create(null)),m[t]=i,u&&(c+=t+":"+i.id+";")}),i}),this._extensionDataSetsMap=m,
u&&(this.key=h.join("!!")+":"+[a,l,r,c].join(":"))}).add({_getExtensionDatumsMap:function(){
var t=null,i=this._extensionDataSetsMap;if(i){t=Object.create(null);var n=this._linkParent.extensionDatums,s=e.query(Object.keys(i)).each(function(e){
var s=i[e],r=s._datums;if(0===r.length)return!1;if(null!==n){var a=n[e];a&&(r=a.filter(function(e){
return r.indexOf(e)>=0}))}return 0===r.length?!1:void(t[e]=r)});if(s)return!1}return t;
},execute:function(){var t=this._linkParent._datums,i=e.query(t).where(this._preFilter),n=this._group(i);
return this._generateData(n,null,this._linkParent,null)},executeAdd:function(t,i){
var n=e.query(i).where(this._preFilter),s=this._group(n);return this._generateData(s,null,this._linkParent,t),
s.datums},_group:function(t){var i={isRoot:!0,treeHeight:e.query(this._groupSpecs).select(function(e){
return e.flatteningMode&Ce.FlatteningMode.Dfs?1:e.depth}).reduce(e.add,0),datums:[],
datumsById:{},groupSpec:this._groupSpecs[0],groupLevelSpec:this._groupSpecs[0].levels[0]
},n=this._getExtensionDatumsMap();return n!==!1&&this._groupSpecRecursive(i,e.query(t).array(),n,0),
i},_groupSpecRecursive:function(e,t,i,n){var s=this._groupSpecs[n];0!==(s.flatteningMode&Ce.FlatteningMode.Dfs)?this._groupSpecRecursiveFlattened(e,t,i,s,n):this._groupSpecRecursiveNormal(e,t,i,s,n);
},_groupSpecRecursiveNormal:function(e,t,i,n,s){function r(e,t,u,h){var c=a[h],m=h===o-1,d=l&&m;
e.groupSpec=n,e.groupLevelSpec=c;for(var f=e.children=this._groupLevelDatums(c,e,t,u,!1),p=0,g=f.length;g>p;p++){
var v=f[p];if(!d){var _=v.datums;v.datums=[],v.datumsById={},m?this._groupSpecRecursive(v,_,v.extensionDatumsMap,s+1):r.call(this,v,_,v.extensionDatumsMap,h+1);
}this._addChildDatums(e.datums,e.datumsById,v.datums,i)}}var a=n.levels,o=a.length,l=s===this._groupSpecs.length-1;
e.isRoot&&(e.label=n.rootLabel),r.call(this,e,t,i,0)},_addChildDatums:function(t,i,n,s){
if(null===s)e.array.append(t,n);else for(var r=-1,a=n.length;++r<a;){var o=n[r];void 0===i[o.id]&&(i[o.id]=o,
t.push(o))}},_groupSpecRecursiveFlattened:function(t,i,n,s,r){function a(t,i,s,d){
for(var p=l[d],g=d===u-1,v=h&&g,_=this._groupLevelDatums(p,t,i,s,!0),y=h?t.datums:[],b=h?t.datumsById:{},D=0,N=_.length;N>D;D++){
var w=_[D],x=w.datums;if(e.array.lazy(t,"_children").push(w),e.hasOwn(m,w.key))this._addChildDatums(y,b,x,n);else{
var S=c.length;o||(f(w),t.isFlattenGroup=!0),v||(w.datums=[],w.datumsById={},g?this._groupSpecRecursive(w,x,s,r+1):a.call(this,w,x,s,d+1)),
this._addChildDatums(y,b,w.datums,n),o&&(e.hasOwn(m,w.key)&&(w.isFlattenGroup||e.assert("Must be a parent for duplicate keys to exist."),
1===w._children.length&&(c.splice(S,c.length-S),w.isDegenerateFlattenGroup=!0)),f(w),
t.isFlattenGroup=!0)}}h||this._groupSpecRecursive(t,y,s,r+1)}var o=s.flatteningMode===Ce.FlatteningMode.DfsPost,l=s.levels,u=l.length,h=r===this._groupSpecs.length-1,c=[],m={},d={
key:"",absKey:"",atoms:{},datums:[],datumsById:{},label:s.rootLabel,dimNames:[]},f=function(e){
c.push(e),m[e.key]=e};t.children=c,t.childrenByKey=m,o||f(d),a.call(this,d,i,n,0),
o&&f(d),t.datums=d.datums},_groupLevelDatums:function(t,i,n,s,r){function a(n,s){
var a=u.call(t,n,s),o=e.hasOwnProp.call(d,a)&&d[a];o?(!f||f(n))&&o.datums.push(n):(o=h.call(t,n,s),
o.key=a,o.firstDatum=n,o.datums=!f||f(n)?[n]:[],o.extensionDatumsMap=s,r&&(null===p&&(p=n.owner.keySep),
this._onNewChildNodeFlattened(a,p,o,t,i)),e.array.insert(m,o,c),d[a]=o)}function o(e,t){
for(var i=-1,n=t.length;++i<n;)a.call(this,e,t[i])}function l(e,t,i){for(var n=_[t],r=n.dataSetName,a=s[r],o=-1,u=a.length,h=t+1,c=h>=_.length;++o<u;){
var m=Object.create(i);m[r]=[a[o]],c?e.push(m):l(e,h,m)}}var u,h,c,m=[],d=Object.create(null),f=this._postFilter,p=null,g=-1,v=n.length,_=t.extensionDimensions;
if(null!==_){u=t.buildKeyWithExtension,h=t.buildGroupNodeWithExtension,c=t.compareNodesWithExtension.bind(t);
var y=[];for(l(y,0,s);++g<v;)o.call(this,n[g],y)}else for(u=t.buildKeyMain,h=t.buildGroupNodeMain,
c=t.compareNodesMain.bind(t);++g<v;)a.call(this,n[g],s);if(f)for(g=m.length;g--;)0===m[g].datums.length&&m.splice(g,1);
return m},_onNewChildNodeFlattened:function(t,i,n,s,r){if(e.copy(n.atoms,r.atoms),
n.dimNames=s.accAllDimensionNames(),r.dimNames.length){var a=r.absKey+i+t;n.absKey=a,
n.key=Ce.Complex.rightTrimKeySep(a,i)}else n.absKey=t},_generateData:function(t,i,n,s){
var r=null,a=!1;if(t.isRoot)null!==s?(r=s,r._addDatumsLocal(t.datums)):(a=!0,r=new Ce.GroupingRootData({
groupingOper:this,groupingSpec:t.groupSpec,groupingLevelSpec:t.groupLevelSpec,linkParent:n,
datums:t.datums,extensionDatums:t.extensionDatumsMap}),r.treeHeight=t.treeHeight);else if(null!==s&&(r=n.child(t.key),
null!==r&&r._addDatumsSimple(t.datums)),null===r){a=!0;var o,l=null;null!==s&&(o=n.childNodes).length>0&&(l=~e.array.binarySearch(o,t.datums[0],i.groupLevelSpec.mainDatumComparer)),
r=new Ce.GroupData({groupingOper:this,groupingSpec:t.groupSpec,groupingLevelSpec:t.groupLevelSpec,
parent:n,atoms:t.atoms,datums:t.datums,index:l,atomsDimNames:t.dimNames,extensionDatums:t.extensionDatumsMap
})}if(a){t.isFlattenGroup&&(r._isFlattenGroup=!0,r._isDegenerateFlattenGroup=!!t.isDegenerateFlattenGroup);
var u=t.label;u&&(r.label+=u,r.absLabel+=u)}var h=t.children,c=h?h.length:0;if(c>0)for(var m=-1;++m<c;)this._generateData(h[m],t,r,s);else if(a&&!t.isRoot){
var d=r.root._leafs;r.leafIndex=d.length,d.push(r)}return r}}),e.space("cdo").FlatteningMode=e.makeEnum(["SingleLevel","DfsPre","DfsPost"],{
zero:"None",all:"AllMask"}),Ce.FlatteningMode.Dfs=Ce.FlatteningMode.DfsPre|Ce.FlatteningMode.DfsPost,
e.type("cdo.GroupingSpec").init(function(t,i,n,s){this.complexType=i||null,i=this.complexType;
var r=null,a=[],o=[],l=[],u=!1,h=null;this.levels=e.query(t||void 0).where(function(e){
return e.allDimensions.length>0}).select(function(e){return a.push(e.key),o.push.apply(o,e.dimensionNames()),
e.allDimensions.forEach(function(e){if(e.dataSetName?(null===r&&(r=Object.create(null)),
r[e.dataSetName]=!0,l.push(e.fullName)):l.push(e.name),null!==i&&!u){var t=e.dimensionType;
t.isDiscrete?u=!0:null===h?h=t.valueType:h!==t.valueType&&(u=!0)}}),e._setAccAllDimNames(l.slice(0)),
e}).array(),this.extensionComplexTypesMap=null,this.extensionComplexTypeNames=r&&Object.keys(r),
null!==i&&r&&this._setExtensionComplexTypesMap(n),this._dimNames=o,this._allDimNames=l,
this.depth=this.levels.length,this._isDiscrete=null!==i?u:void 0,this._singleContinuousValueType=null!==i?u?null:h:void 0,
this.isSingleDimension=1===l.length,this.firstDimension=this.depth>0?this.levels[0].allDimensions[0]:null,
this.lastDimension=this.depth>0?this.levels[this.depth-1].lastDimension():null,this.rootLabel=e.get(s,"rootLabel")||"",
this.flatteningMode=e.get(s,"flatteningMode")||Ce.FlatteningMode.None,this._cacheKey=this._calcCacheKey(),
this.key=this._cacheKey+"##"+a.join("||")}).add({_calcCacheKey:function(t){return[e.get(t,"flatteningMode")||this.flatteningMode,e.get(t,"rootLabel")||this.rootLabel].join("#");
},bind:function(t,i){this.complexType=t||e.fail.argumentRequired("complexType"),this._setExtensionComplexTypesMap(i),
i=this.extensionComplexTypesMap;var n=!1,s=null;this.levels.forEach(function(e){if(e.bind(t,i),
!n)for(var r=e.allDimensions,a=-1,o=r.length;++a<o;){var l=r[a].dimensionType;if(l.isDiscrete){
n=!0;break}if(null===s)s=l.valueType;else if(s!==l.valueType){n=!0;break}}}),this._isDiscrete=n,
this._singleContinuousValueType=n?null:s},get isBound(){return!!this.complexType},
_setExtensionComplexTypesMap:function(t){if(this.hasExtensionComplexTypes){if(!t){
var i=e.error.operationInvalid("Expects a map of extension types.");throw i.code="need-extension-map",
i}this.extensionComplexTypesMap=e.copyProps(t,this.extensionComplexTypeNames)}else this.extensionComplexTypesMap=null;
},get isNull(){return 0===this.depth},get isSingleLevel(){return 1===this.depth},
get hasExtensionComplexTypes(){return!!this.extensionComplexTypeNames},isDiscrete:function(){
return this._isDiscrete},get singleContinuousValueType(){return this._singleContinuousValueType;
},get singleDimensionName(){if(this.isSingleDimension)return this.firstDimension.name;
throw e.error.operationInvalid("Expected grouping to contain exactly one dimension.");
},get singleDimensionType(){if(this.isSingleDimension)return this.firstDimension.dimensionType;
throw e.error.operationInvalid("Grouping contains more than one dimension.")},dimensions:function(){
return e.query(this.levels).prop("dimensions").selectMany()},allDimensions:function(){
return e.query(this.levels).prop("allDimensions").selectMany()},extensionDimensions:function(){
return e.query(this.levels).prop("extensionDimensions").selectMany()},dimensionNames:function(){
return this._dimNames},get allDimensionNames(){return this._allDimNames},firstDimensionType:function(){
var e=this.firstDimension;return e&&e.dimensionType},firstDimensionName:function(){
var e=this.firstDimensionType();return e&&e.name},firstDimensionValueType:function(){
var e=this.firstDimensionType();return e&&e.valueType},lastDimensionType:function(){
var e=this.lastDimension;return e&&e.dimensionType},lastDimensionName:function(){
var e=this.lastDimensionType();return e&&e.name},lastDimensionValueType:function(){
var e=this.lastDimensionType();return e&&e.valueType},ensure:function(t){var i;if(t){
var n=this._calcCacheKey(t);if(n!==this._cacheKey){var s=e.lazy(this,"_groupingCache");
i=e.getOwn(s,n),i||(i=s[n]=this._ensure(t))}}return i||this},_ensure:function(t){
return new Ce.GroupingSpec(this.levels,this.complexType,this.extensionComplexTypesMap,{
flatteningMode:e.get(t,"flatteningMode")||this.flatteningMode,rootLabel:e.get(t,"rootLabel")||this.rootLabel
})},toSingleLevel:function(){if(this.isSingleLevel)return this;var e=this.allDimensions().array(),t=new Ce.GroupingLevelSpec(e,this.complexType,this.extensionComplexTypesMap);
return new Ce.GroupingSpec([t],this.complexType,this.extensionComplexTypesMap,{flatteningMode:Ce.FlatteningMode.SingleLevel,
rootLabel:this.rootLabel})},reverse:function(){var e=this.levels.map(function(e){
return e.reverse()});return new Ce.GroupingSpec(e,this.complexType,this.extensionComplexTypesMap,{
flatteningMode:this.flatteningMode,rootLabel:this.rootLabel})},view:function(e){var t=e instanceof Ce.Datum?this.dimensionNames():this.allDimensionNames;
return e.view(t)},toString:function(){return this.levels.map(String).join(", ")}}),
e.type("cdo.GroupingLevelSpec").init(function(t){var i=[],n=[],s=[],r=[],a=null;this.dimensions=r,
this.allDimensions=e.query(t).select(function(e){return i.push(e.key),e.dataSetName?(n.push(e.fullName),
null===a&&(a=[]),a.push(e)):(n.push(e.name),s.push(e.name),r.push(e)),e}).array(),
this.extensionDimensions=a,this._dimNames=s,this._allDimNames=n,this._accDimNames=null,
this.depth=this.allDimensions.length,this.key=i.join(",")}).add({_setAccAllDimNames:function(e){
this._accDimNames=e},accAllDimensionNames:function(){return this._accDimNames},dimensionNames:function(){
return this._dimNames},get allDimensionNames(){return this._allDimNames},lastDimension:function(){
return this.allDimensions[this.depth-1]},bind:function(e,t){this.allDimensions.forEach(function(i){
i.bindComplexType(e,t)})},compareNodesMain:function(e,t){for(var i,n=this.dimensions,s=n.length,r=-1;++r<s;)if(0!==(i=n[r].compareDatums(e.firstDatum,t.firstDatum)))return i;
return 0},compareNodesWithExtension:function(e,t){for(var i,n,s,r,a,o=this.allDimensions,l=o.length,u=-1;++u<l;)if(null!==(s=(n=o[u]).dataSetName)?(r=e.extensionDatumsMap[s][0],
a=t.extensionDatumsMap[s][0]):(r=e.firstDatum,a=t.firstDatum),0!==(i=n.compareDatums(r,a)))return i;
return 0},buildKeyMain:function(e){return Ce.Complex.compositeKey(e,this._dimNames);
},buildKeyWithExtension:function(e,t){for(var i,n="",s=this.allDimensions,r=s.length,a=-1,o=e.owner.keySep,l=e.atoms;++a<r;){
var u=null!==(i=s[a]).dataSetName?t[i.dataSetName][0].atoms[i.name].key:l[i.name].key;
a?n+=o+u:n=u}return n},buildGroupNodeMain:function(t){var i=this._dimNames;return{
atoms:e.copyProps(t.atoms,i),dimNames:i}},buildGroupNodeWithExtension:function(e,t){
for(var i,n={},s=this.allDimensions,r=s.length,a=e.atoms,o=-1;++o<r;)null!==(i=s[o]).dataSetName?n[i.fullName]=t[i.dataSetName][0].atoms[i.name]:n[i.name]=a[i.name];
return{atoms:n,dimNames:this._allDimNames}},reverse:function(){var e=this.allDimensions.map(function(e){
return e.reverse()});return new Ce.GroupingLevelSpec(e,this.complexType,this.extensionComplexTypesMap);
},toString:function(){return e.query(this.allDimensions).select(String).array().join("|");
}}),e.type("cdo.GroupingDimensionSpec").init(function(e,t,i){this.fullName=e;var n=/^(?:(.+?)\.)?(.+)$/.exec(e);
this.dataSetName=n&&n[1]||null,this.name=n?n[2]:e,this.isReversed=!!t,this.key=e+":"+(t?"0":"1"),
this.dimensionType=null,i&&this.bind(i)}).add({bindComplexType:function(t,i){t||e.fail.argumentRequired("complexType");
var n;if(null!==this.dataSetName){var s=e.get(i,this.dataSetName);if(!s)throw e.error.operationInvalid("The data set name '{0}' of dimension '{1}' is not defined.",[this.dataSetName,this.fullName]);
n=s}else n=t;return this.bind(n.dimensions(this.name)),this},bind:function(t){if(this.dimensionType=t||e.fail.argumentRequired("dimensionType"),
t.isComparable){var i=t.atomComparer(this.isReversed),n=this.name;this.compareDatums=function(e,t){
return i(e.atoms[n],t.atoms[n])}}else this.compareDatums=this.isReversed?function(e,t){
return t.id-e.id}:function(e,t){return e.id-t.id};return this},compareDatums:function(){
throw e.error.operationInvalid("Not Bound.")},reverse:function(){return new Ce.GroupingDimensionSpec(this.fullName,!this.isReversed,this.dimensionType);
},toString:function(){return this.fullName+(this.dimensionType?' ("'+this.dimensionType.label+'")':"")+(this.isReversed?" desc":"");
}}),Ce.GroupingSpec.parse=function(t,i,n){var s=null;if(t){var r=e.string.is(t)?t.split(/\s*,\s*/):e.array.as(t);
s=e.query(r).select(function(e){var t=$(e,i,n);return new Ce.GroupingLevelSpec(t,i,n);
})}return new Ce.GroupingSpec(s,i,n)};var Oe=/^\s*(.+?)(?:\s+(asc|desc))?\s*$/i;e.type("cdo.LinearInterpolationOper").init(function(t,i,n,s,r,a,o,l){
this._newDatums=[],this._data=n;var u=s.flatten(t).children(),h=r.isBound()?r.flatten(i,{
visible:!0,isNull:!1}).children().array():[null],c=this._valDim=t.owner.dimensions(o),m={
visible:!0,zeroIfNone:!1};this._isCatDiscrete=s.grouping.isDiscrete(),this._stretchEnds=l,
this._catInfos=u.select(function(e,t){var i=n.child(e.key),s={data:i||e,value:e.value,
isInterpolated:!1,serInfos:null,index:t};return s.serInfos=[],h.forEach(function(e){
var t=i;t&&e&&(t=t.child(e.key));var n=a.getBoundDimensionName(t||e,!0);if(null===n||n===o){
var r=t?t.dimensions(c.name).value(m):null;s.serInfos.push({data:e,group:t,value:r,
isNull:null==r,catInfo:s})}}),s}).array(),this._serCount=h.length,this._serStates=e.range(0,this._serCount).select(function(e){
return new Ce.LinearInterpolationOperSeriesState(this,e)},this).array()}).add({interpolate:function(){
for(var e;e=this._catInfos.shift();)e.serInfos.forEach(this._visitSeries,this);var t=this._newDatums;
t.length&&this._data.owner.add(t)},_visitSeries:function(e,t){this._serStates[t].visit(e);
},nextUnprocessedNonNullCategOfSeries:function(e){for(var t=0,i=this._catInfos.length;i>t;){
var n=this._catInfos[t++],s=n.serInfos[e];if(!s.isNull)return s}}}),e.type("cdo.LinearInterpolationOperSeriesState").init(function(e,t){
this.interpolation=e,this.index=t,this._lastNonNull(null)}).add({visit:function(e){
e.isNull?this._interpolate(e):this._lastNonNull(e)},_lastNonNull:function(e){return arguments.length&&(this.__lastNonNull=e,
this.__nextNonNull=void 0),this.__lastNonNull},_nextNonNull:function(){return this.__nextNonNull;
},_initInterpData:function(){if(void 0===this.__nextNonNull){var t=this.__lastNonNull,i=this.__nextNonNull=this.interpolation.nextUnprocessedNonNullCategOfSeries(this.index)||null;
if(i&&t){var n=t.value,s=i.value,r=s-n;if(this.interpolation._isCatDiscrete){var a=i.catInfo.index-t.catInfo.index;
a>=2||e.assert("Must have at least one interpolation point."),this._stepValue=r/a,
this._middleIndex=~~(a/2);var o=a-1;this._isOdd=o%2>0}else{var l=+t.catInfo.value,u=+i.catInfo.value,h=u-l;
this._steep=r/h,this._middleCat=(u+l)/2}}}},_interpolate:function(t){this._initInterpData();
var i=this.__nextNonNull,n=this.__lastNonNull,s=i||n;if(s){var r,a,o=this.interpolation,l=t.catInfo;
if(i&&n)if(o._isCatDiscrete){var u=l.index-n.catInfo.index;r=n.value+this._stepValue*u,
a=(this._isOdd?u<this._middleIndex:u<=this._middleIndex)?n.group:i.group}else{var h=+l.value,c=+n.catInfo.value;
r=n.value+this._steep*(h-c),a=h<this._middleCat?n.group:i.group}else{if(!o._stretchEnds)return;
r=s.value,a=s.group}var m=Object.create(a.atoms);e.copyOwn(m,l.data.atoms);var d=o._valDim,f=d.intern(r,!0);
m[d.name]=f;var p=o._datumDimNames;p||(o._datumDimNames=p=a.type.filterExtensionDimensionNames(e.keys(m))),
o._newDatums.push(new Ce.InterpolationDatum(a.owner,m,p,"linear",d.name))}}}),e.type("cdo.ZeroInterpolationOper").init(function(t,i,n,s,r,a,o,l){
this._newDatums=[],this._data=n;var u=s.flatten(t).children(),h=r.isBound()?r.flatten(i,{
visible:!0,isNull:!1}).children().array():[null],c=this._valDim=t.owner.dimensions(o),m={
visible:!0,zeroIfNone:!1};this._isCatDiscrete=s.grouping.isDiscrete(),this._stretchEnds=l,
this._catInfos=u.select(function(e,t){var i=n.child(e.key),s={data:i||e,value:e.value,
isInterpolated:!1,serInfos:null,index:t};return s.serInfos=[],h.forEach(function(e){
var t=i;t&&e&&(t=t.child(e.key));var n=a.getBoundDimensionName(t||e,!0);if(null===n||n===o){
var r=t?t.dimensions(c.name).value(m):null;s.serInfos.push({data:e,group:t,value:r,
isNull:null==r,catInfo:s})}}),s}).array(),this._serCount=h.length,this._serStates=e.range(0,this._serCount).select(function(e){
return new Ce.ZeroInterpolationOperSeriesState(this,e)},this).array()}).add({interpolate:function(){
for(var e;e=this._catInfos.shift();)e.serInfos.forEach(this._visitSeries,this);var t=this._newDatums;
t.length&&this._data.owner.add(t)},_visitSeries:function(e,t){this._serStates[t].visit(e);
},nextUnprocessedNonNullCategOfSeries:function(e){for(var t=0,i=this._catInfos.length;i>t;){
var n=this._catInfos[t++],s=n.serInfos[e];if(!s.isNull)return s}}}),e.type("cdo.ZeroInterpolationOperSeriesState").init(function(e,t){
this.interpolation=e,this.index=t,this._lastNonNull(null)}).add({visit:function(e){
e.isNull?this._interpolate(e):this._lastNonNull(e)},_lastNonNull:function(e){return arguments.length&&(this.__lastNonNull=e,
this.__nextNonNull=void 0),this.__lastNonNull},_nextNonNull:function(){return this.__nextNonNull;
},_initInterpData:function(){if(void 0===this.__nextNonNull){var t=this.__lastNonNull,i=this.__nextNonNull=this.interpolation.nextUnprocessedNonNullCategOfSeries(this.index)||null;
if(i&&t)if(this.interpolation._isCatDiscrete){var n=i.catInfo.index-t.catInfo.index;
n>=2||e.assert("Must have at least one interpolation point."),this._middleIndex=~~(n/2);
var s=n-1;this._isOdd=s%2>0}else{var r=+t.catInfo.value,a=+i.catInfo.value;this._middleCat=(a+r)/2;
}}},_interpolate:function(t){this._initInterpData();var i=this.__nextNonNull,n=this.__lastNonNull,s=i||n;
if(s){var r,a=this.interpolation,o=t.catInfo;if(i&&n)if(a._isCatDiscrete){var l=o.index-n.catInfo.index;
r=this._isOdd?l<this._middleIndex?n.group:i.group:l<=this._middleIndex?n.group:i.group;
}else{var u=+o.value;r=u<this._middleCat?n.group:i.group}else{if(!a._stretchEnds)return;
r=s.group}var h=Object.create(r.atoms);e.copyOwn(h,o.data.atoms);var c=a._valDim,m=a._zeroAtom||(a._zeroAtom=c.intern(0,!0));
h[c.name]=m;var d=a._datumDimNames;d||(a._datumDimNames=d=r.type.filterExtensionDimensionNames(e.keys(h))),
a._newDatums.push(new Ce.InterpolationDatum(r.owner,h,d,"zero",c.name))}}}),e.type("cdo.TranslationOper").init(function(t,i,n,s){
this.complexTypeProj=t||e.fail.argumentRequired("complexTypeProj"),this.source=i||e.fail.argumentRequired("source"),
this.metadata=n||e.fail.argumentRequired("metadata"),this.options=s||{},this._initType(),
e.debug>=4&&(this._logLogicalRows=!0,this._logLogicalRowCount=0)}).add({_logLogicalRows:!1,
logSource:e.abstractMethod,logLogicalRow:e.abstractMethod,_translType:"Unknown",logTranslatorType:function(){
return this._translType+" data source translator"},logicalColumnCount:function(){
return this.metadata.length},setSource:function(t){if(!t)throw e.error.argumentRequired("source");
this.source=t},defReader:function(t){t||e.fail.argumentRequired("readerSpec");var i=e.string.is(t)?t:t.names;
i=e.string.is(i)?i.split(/\s*\,\s*/):e.array.as(i);var n=e.array.as(t.indexes);n&&n.forEach(this._userUseIndex,this);
var s=!(!i||!i.length),r=t.reader;if(r)s||e.fail.argumentRequired("reader.names","Required argument when a reader function is specified."),
this._userRead(r,i);else{if(s)return this._userCreateReaders(i,n);n&&n.forEach(function(e){
this._userIndexesToSingleDim[e]=null},this)}return n},configureType:function(){this._configureTypeCore();
},_configureTypeCore:e.abstractMethod,_initType:function(){this._userDimsReaders=[],
this._userDimsReadersByDim={},this._userUsedIndexes={},this._userIndexesToSingleDim=[];
var t=this.options.readers;t&&e.array.each(t,this.defReader,this);var i=e.parseDistinctIndexArray(this.options.multiChartIndexes);
i&&(this._multiChartIndexes=this.defReader({names:"multiChart",indexes:i}))},_userUseIndex:function(t){
if(t=+t,0>t)throw e.error.argumentInvalid("index","Invalid reader index: '{0}'.",[t]);
if(e.hasOwn(this._userUsedIndexes,t))throw e.error.argumentInvalid("index","Column '{0}' of the logical table is already assigned.",[t]);
return this._userUsedIndexes[t]=!0,t},_userCreateReaders:function(t,i){i?i.forEach(function(e,t){
i[t]=+e}):i=[];var n,s=i.length,r=t.length;if(r>s){var a=s>0?i[s-1]+1:0;do a=this._getNextFreeLogicalColumnIndex(a),
i[s]=a,this._userUseIndex(a),s++;while(r>s)}for(var o,l=s===r?r:r-1,u=0;l>u;u++)n=t[u],
o=i[u],this._userIndexesToSingleDim[o]=n,this._userRead(this._propGet(n,o),n);if(r>l)for(var h=e.splitIndexedId(t[r-1]),c=h[0],m=e.nullyTo(h[1],0),d=l;s>d;d++,
m++)n=e.indexedId(c,m),o=i[d],this._userIndexesToSingleDim[o]=n,this._userRead(this._propGet(n,o),n);
return i},_userRead:function(t,i){e.fun.is(t)||e.fail.argumentInvalid("reader","Reader must be a function."),
e.array.is(i)?i.forEach(function(e){this._readDim(e,t)},this):this._readDim(i,t),
this._userDimsReaders.push(t)},_readDim:function(t,i){var n,s,r=this._userIndexesToSingleDim.indexOf(t);
if(r>=0&&(n=this._logicalRowInfos[r],n&&!this.options.ignoreMetadataLabels)){var a=n.label||n.name&&e.titleFromName(n.name);
a&&(s={label:a})}this.complexTypeProj.readDim(t,s),this._userDimsReadersByDim[t]=i;
},execute:function(e){return this.data=e,this._executeCore()},_executeCore:function(){
var t=this._getDimensionsReaders();return e.query(this._getLogicalRows()).select(function(e){
return this._readLogicalRow(e,t)},this)},_getLogicalRows:function(){return this.source;
},_getDimensionsReaders:function(){return this._userDimsReaders.slice().reverse();
},_readLogicalRow:function(e,t){for(var i=this._logLogicalRows&&this._logLogicalRowBefore(e),n=t.length,s=this.data,r={};n--;)t[n].call(s,e,r);
return i&&this._logLogicalRowAfter(r),r},_logLogicalRowBefore:function(t){return this._logLogicalRowCount<10?(e.log("logical row ["+this._logLogicalRowCount++ +"]: "+e.describe(t)),
!0):(e.log("..."),this._logLogicalRows=!1)},_logLogicalRowAfter:function(t){var i={};
for(var n in t){var s=t[n];e.object.is(s)&&(s="v"in s?s.v:"value"in s?s.value:"..."),
i[n]=s}e.log("-> read: "+e.describe(i))},_propGet:function(e,t){function i(i,n){n[e]=i[t];
}return i},_getNextFreeLogicalColumnIndex:function(t,i){for(null==t&&(t=0),null==i&&(i=1/0);i>t&&e.hasOwn(this._userUsedIndexes,t);)t++;
return i>t?t:-1},_getPhysicalGroupStartIndex:function(t){return e.getOwn(this._logicalRowPhysicalGroupIndex,t);
},_getPhysicalGroupLength:function(t){return e.getOwn(this._logicalRowPhysicalGroupsLength,t);
},_configureTypeByPhysicalGroup:function(t,i,n,s){var r=this._logicalRowPhysicalGroupIndex[t],a=this._logicalRowPhysicalGroupsLength[t],o=r+a-1,l=r;
if(n=null==n?a:Math.min(a,n),n&&o>=l){i||(i=t),s||(s=1/0);for(var u,h=0;n&&s>h;)if(u=e.indexedId(i,h++),
!this.complexTypeProj.isReadOrCalc(u)){if(l=this._getNextFreeLogicalColumnIndex(l),
l>o)return l;this.defReader({names:u,indexes:l}),l++,n--}}return l},_configureTypeByOrgLevel:function(e,t){
var i=[],n=[];this._logicalRowInfos.forEach(function(e,t){if(!this[t]){var s=1===e.type?i:n;
s&&s.push(t)}},this._userUsedIndexes),this._configureTypeByDimGroups(n,this._processDimGroupSpecs(e,!0,1/0)),
this._configureTypeByDimGroups(i,this._processDimGroupSpecs(t,!1,1))},_processDimGroupSpecs:function(t,i,n){
return t.map(function(t){return e.string.is(t)?{name:t,greedy:i,maxCount:n}:e.setDefaults(t,{
greedy:i,maxCount:n})})},_configureTypeByDimGroups:function(e,t){if(t)for(var i,n=-1,s=t.length;++n<s&&(i=e.length);){
var r=t[n],a=Math.min(r.maxCount,i),o=this._getFreeDimGroupNames(r.name,a,r.greedy);
o&&(o.length,this.defReader({names:o,indexes:e.splice(0,o.length)}))}},_getFreeDimGroupNames:function(t,i,n){
if(!t)return null;var s=[],r=0;for(null==i&&(i=1);i;){var a=e.indexedId(t,r++);this.complexTypeProj.isReadOrCalc(a)?n||i--:(s.push(a),
i--)}return s.length?s:null}}),e.type("cdo.MatrixTranslationOper",Ce.TranslationOper).add({
_initType:function(){this.J=this.metadata.length,this.I=this.source.length,this._processMetadata(),
this.base()},setSource:function(e){this.base(e),this.I=this.source.length},_knownContinuousColTypes:{
numeric:1,number:1,integer:1},_processMetadata:function(){var t,i=this.options.typeCheckingMode,n=this._knownContinuousColTypes;
if("none"===i)t=e.query(this.metadata).select(function(e,t){e.colIndex=t;var i=e.colType;
return i&&1===n[i.toLowerCase()]?1:0}).array();else{var s="extended"===i,r=e.query(this.metadata).select(function(e,t){
return e.colIndex=t,e}).where(function(e){var t=e.colType;return!t||1!==n[t.toLowerCase()];
}).select(function(e){return e.colIndex}).array(),a=this.I,o=this.source,l=r.length;
t=e.array.create(this.J,1);for(var u=0;a>u&&l>0;u++)for(var h=o[u],c=0;l>c;){var m=r[c],d=h[m];
null!=d?(t[m]=this._getSourceValueType(d,s),r.splice(c,1),l--):c++}}this._columnTypes=t;
},_buildLogicalColumnInfoFromMetadata:function(e){var t=this.metadata[e];return{type:this._columnTypes[e],
name:t.colName,label:t.colLabel}},_getSourceValueType:function(e,t){switch(typeof e){
case"number":return 1;case"string":return t&&""!==e&&!isNaN(+e)?1:0;case"object":
return e instanceof Date?1:0}return 0},logSource:function(){var t=Ce.previewRowsMax,i=Ce.previewColsMax,n=this.metadata,s=n.length,r=e.array.prepend;
s>i&&(n=n.slice(0,i),n.push({colName:"("+i+"/"+s+")",colType:"..."}));var a=e.textTable(n.length+1).rowSep().row.apply(a,r(n.map(function(e){
return e.colName}),["Name"])).rowSep().row.apply(a,r(n.map(function(e){return e.colLabel?'"'+e.colLabel+'"':"";
}),["Label"])).rowSep().row.apply(a,r(n.map(function(e){return e.colType}),["Type"])).rowSep();
return e.query(this.source).take(t).each(function(t,n){s>i&&(t=t.slice(0,i)),a.row.apply(a,r(t.map(function(t){
return e.describe(t)}),[n+1]))}),a.rowSep().row("("+Math.min(t,this.I)+"/"+this.I+")").rowSep(!0),
"DATA SOURCE SUMMARY\n"+a()+"\n"},_logLogicalRow:function(t,i){var n=e.textTable(6).rowSep().row("Index","Kind","Type","Name","Label","Dimension").rowSep(),s=0;
return t.forEach(function(e){for(var t=0,r=i[e];r>t;t++){var a=this._logicalRowInfos[s];
n.row(s,e,a.type?"number":"string",a.name||"",a.label||"",this._userIndexesToSingleDim[s]||""),
s++}},this),n.rowSep(!0),"LOGICAL TABLE\n"+n()+"\n"},_createPlot2SeriesKeySet:function(t,i){
var n=null,s=i.length;return e.query(t).each(function(t){var r=+t;if(isNaN(r))throw e.error.argumentInvalid("plot2SeriesIndexes","Element is not a number '{0}'.",[t]);
if(0>r){if(-s>=r)throw e.error.argumentInvalid("plot2SeriesIndexes","Index is out of range '{0}'.",[r]);
r=s+r}else if(r>=s)throw e.error.argumentInvalid("plot2SeriesIndexes","Index is out of range '{0}'.",[r]);
n||(n={}),n[i[r]]=!0}),n},_dataPartGet:function(t){function i(t,i){i[l]=e.hasOwn(s,t)?a||(a=n.intern("1")):r||(r=n.intern("0"));
}var n,s,r,a,o=this,l=this.options.dataPartDimName,u=function(){s=t(),n=o.data.dimensions(l),
e.debug>=3&&s&&e.log("Second axis series values: "+e.describe(e.keys(s))),u=null};
this.complexTypeProj.setCalc({names:l,calculation:function(e,t){u&&u(),i(e.atoms.series.value,t);
}})},_configureTypeCore:function(){["series","category","value"].forEach(function(e){
this._configureTypeByPhysicalGroup(e)},this)}}),Ce.previewRowsMax=15,Ce.previewColsMax=6,
e.type("cdo.CrosstabTranslationOper",Ce.MatrixTranslationOper).add({_translType:"Crosstab",
logicalColumnCount:function(){return this.R+this.C+this.M},_executeCore:function(){
function t(e,t){for(var i=r[e],n=0,o=a[e];o-->0;)s[i++]=t[n++]}function i(e,t){for(var i=r.M,n=a._colGroupsIndexes[t],o=a.M,l=0;o>l;l++){
var u=n[l];s[i++]=null!=u?e[u]:null}}if(!this.metadata.length)return e.query();var n=this._getDimensionsReaders(),s=new Array(this.logicalColumnCount()),r=this._logicalRowCrossGroupIndex,a=this,o=e.query(this.source);
if(this._colGroups&&this._colGroups.length){var l=function(r){return t("R",r),e.query(this._colGroups).select(function(e,a){
return t("C",e),i(r,a),this._readLogicalRow(s,n)},this)};return o.selectMany(l,this);
}return o.select(function(e){return t("R",e),this._readLogicalRow(s,n)},this)},_processMetadata:function(){
this.base(),this._separator=this.options.separator||"~";var t=this.R=1;this.C=1,this.M=1,
this.measuresDirection=null;var i=this.options.seriesInRows,n=this.metadata,s=this.options.compatVersion<=1,r=function(){
var e=i?function(e){return e.colName}:s?function(e){return{v:e.colName}}:function(e){
return{v:e.colName,f:e.colLabel}};return n.map(e)}(),a=this._logicalRowCrossGroupInfos={};
if(this.options.isMultiValued){var o=e.get(this.options,"measuresInColumns",!0);if(o||null==this.options.measuresIndex){
t=this.R=this._getCategoriesCount();var l=r.slice(t),u=l.length;u>0?(o?(this.measuresDirection="columns",
this._processEncodedColGroups(l)):(this._colGroups=l,this._colGroupsIndexes=[],this._colGroups.forEach(function(e,t){
this._colGroups[t]=this._splitEncodedColGroupCell(e),this._colGroupsIndexes[t]=[this.R+t];
},this),a.M=[this._buildLogicalColumnInfoFromMetadata(t)]),this.C=this._colGroups[0].length,
a.C=e.range(0,this.C).select(function(){return{type:0}}).array()):(this.C=this.M=0,
a.M=[],a.C=[])}else{this.measuresDirection="rows",this.R=+this.options.measuresIndex;
var h=this.options.measuresCount;null==h&&(h=1),this.M=h,this._colGroups=r.slice(this.R+1),
this._colGroups.forEach(function(e,t){this._colGroups[t]=[e]},this)}}else t=this.R=this._getCategoriesCount(),
this._colGroups=r.slice(t),this._colGroupsIndexes=new Array(this._colGroups.length),
this._colGroups.forEach(function(e,i){this._colGroups[i]=[e],this._colGroupsIndexes[i]=[t+i];
},this),a.C=[{type:0}],a.M=[{type:this._columnTypes[t]}];a.R=e.range(0,this.R).select(this._buildLogicalColumnInfoFromMetadata,this).array();
var c=this._logicalRowCrossGroupIndex={C:i?this.R:0,R:i?0:this.C,M:this.C+this.R},m=this._logicalRowInfos=new Array(this.logicalColumnCount());
e.eachOwn(c,function(e,t){a[t].forEach(function(t,i){m[e+i]=t})}),this._logicalRowPhysicalGroupsLength={
series:i?this.R:this.C,category:i?this.C:this.R,value:this.M},this._logicalRowPhysicalGroupIndex={
series:0,category:this._logicalRowPhysicalGroupsLength.series,value:this.C+this.R
}},logLogicalRow:function(){return this._logLogicalRow(["C","R","M"],{C:this.C,R:this.R,
M:this.M})},_getCategoriesCount:function(){var t=this.options.categoriesCount;return null!=t&&(!isFinite(t)||0>t)&&(t=null),
null==t&&(t=e.query(this._columnTypes).whayl(function(e){return 0===e}).count(),t||(t=1)),
t},_splitEncodedColGroupCell:function(e){var t,i=e.v;return null==i?i=[]:(i=i.split(this._separator),
t=e.f,t&&(t=t.split(this._separator))),i.map(function(e,i){return{v:e,f:t&&t[i]}});
},_processEncodedColGroups:function(t){for(var i,n=t.length||e.assert("Must have columns"),s=this.R,r=[],a={},o=[],l=0;n>l;l++){
var u,h,c,m,d=t[l],f=d.v,p=d.f,g=f.lastIndexOf(this._separator);0>g?(u=f,h=p,f="",
c=[]):(u=f.substring(g+1),f=f.substring(0,g),c=f.split(this._separator),null!=p&&(m=p.split(this._separator),
h=m.pop()),c.forEach(function(e,t){var i=m&&m[t];c[t]={v:e,f:i}})),i&&i.encValues===f?i.measureNames.push(u):(i={
startIndex:l,encValues:f,values:c,measureNames:[u]},r.push(i));var v=l-i.startIndex,_=e.getOwn(a,u);
_?v>_.groupIndex&&(_.groupIndex=v):(a[u]=_={name:u,label:h,type:this._columnTypes[s+l],
groupIndex:v,index:l},o.push(_))}o.sort(function(t,i){return e.compare(t.groupIndex,i.groupIndex)||e.compare(t.index,i.index);
}),o.forEach(function(e,t){e.groupIndex=t});var y=r.length,b=new Array(y),D=new Array(y),N=o.length;
r.map(function(e,t){b[t]=e.values;var i=e.startIndex,n=D[t]=new Array(N);e.measureNames.forEach(function(e,t){
var r=a[e].groupIndex;n[r]=s+i+t})}),this._colGroups=b,this._colGroupsIndexes=D,this._logicalRowCrossGroupInfos.M=o,
this.M=N},configureType:function(){if("rows"===this.measuresDirection)throw e.error.notImplemented();
var t=this.options.dataPartDimName;if(t&&1===this.C&&!this.complexTypeProj.isReadOrCalc(t)){
var i=this.options.plot2DataSeriesIndexes;if(null!=i){var n=this._colGroups.map(function(e){
return""+e[0].v});this._plot2SeriesKeySet=this._createPlot2SeriesKeySet(i,n)}}if(this.base(),
this._plot2SeriesKeySet){var s=this._userDimsReadersByDim.series;if(s){var r=e.fun.constant(this._plot2SeriesKeySet);
this._dataPartGet(r)}}}}),e.type("cdo.RelationalTranslationOper",Ce.MatrixTranslationOper).add({
M:0,C:0,S:0,_translType:"Relational",_processMetadata:function(){this.base();var t,i,n,s,r=this.metadata,a=this.J,o=this.options.categoriesCount;
if(null!=o&&(!isFinite(o)||0>o)&&(o=0),this.options.isMultiValued&&(i=e.parseDistinctIndexArray(this.options.measuresIndexes,0,a-1),
n=i?i.length:0),null==n)if(a>0&&3>=a&&(null==o||1===o))n=1,i=[a-1],o=a>=2?1:0,t=a>=3?1:0,
s=o+t;else if(null!=o&&o>=a)s=o=a,t=n=0;else{var l=null!=o?a-o:1/0;i=e.query(r).where(function(e,t){
return 0!==this._columnTypes[t]},this).select(function(e){return e.colIndex}).take(l).array(),
n=i.length}null==s&&(s=a-n,0===s?t=o=0:null!=o?o>s?(o=s,t=0):t=s-o:(t=s>1?1:0,o=s-t));
var u=this.options.seriesInRows,h=[];s&&(t&&!u&&h.push({name:"S",count:t}),o&&h.push({
name:"C",count:o}),t&&u&&h.push({name:"S",count:t})),n&&h.push({name:"M",count:n});
var c=e.range(0,a).array();i&&i.slice().sort(e.descending).forEach(function(e){c.splice(e,1);
});var m={};h.forEach(function(e){var t=e.count,n=e.name;m[n]=e,e.indexes=i&&"M"===n?i:c.splice(0,t);
}),this.M=n,this.S=t,this.C=o;var d=[];["S","C","M"].forEach(function(t){var i=m[t];
i&&e.array.append(d,i.indexes)}),this._logicalRowInfos=d.map(this._buildLogicalColumnInfoFromMetadata,this),
this._logicalRowPerm=d,this._logicalRowPhysicalGroupsLength={series:this.S,category:this.C,
value:this.M},this._logicalRowPhysicalGroupIndex={series:0,category:this._logicalRowPhysicalGroupsLength.series,
value:this.S+this.C}},logLogicalRow:function(){return this._logLogicalRow(["S","C","M"],{
S:this.S,C:this.C,M:this.M})},configureType:function(){this.base();var e=this.options.dataPartDimName;
if(e&&!this.complexTypeProj.isReadOrCalc(e)){var t=this.options.plot2DataSeriesIndexes;
if(null!=t){var i=this._userDimsReadersByDim.series;i&&W.call(this,t,i)}}},_executeCore:function(){
var i=this._getDimensionsReaders(),n=this._logicalRowPerm;return e.query(this._getLogicalRows()).select(function(e){
return e=t.permute(e,n),this._readLogicalRow(e,i)},this)}});var Re=Ce.numberFormatStyle=function(e,t){
return new Me(e,t)},Le=e.priv.key().property(),Me=Re.of=e("cdo.NumberFormatStyle",e.FieldsBase.extend({
init:function(){e.classify(this,Re)},fields:{decimal:{cast:String,fail:e.falsy},group:{
cast:String},groupSizes:{fail:e.array.empty},negativeSign:{cast:String,fail:e.falsy
},currency:{cast:String,fail:e.falsy},integerPad:{cast:String,fail:e.falsy},fractionPad:{
cast:String,fail:e.falsy},abbreviations:{fail:e.array.empty}},methods:{tryConfigure:function(t){
if(e.is(t,Re))return!!this.integerPad(t.integerPad()).fractionPad(t.fractionPad()).decimal(t.decimal()).group(t.group()).groupSizes(t.groupSizes()).negativeSign(t.negativeSign()).currency(t.currency()).abbreviations(t.abbreviations());
if(e.string.is(t)){var i=ze(t);if(i)return!!e.configure(this,i.number().style())}
}}},{fieldsPrivProp:Le}));e.classify(Me.prototype,Re),Re.defaults=Re({integerPad:"0",
fractionPad:"0",decimal:".",group:",",groupSizes:[3],abbreviations:["k","m","b","t"],
negativeSign:"-",currency:"$"});var Ge=Ce.numberFormat=function(t,i){function n(e){
return r||(r=J(s.mask)),r(e,Le(s.style))}var s,r;return n.format=n,n.tryConfigure=Y,
e.classify(n,Ge),s=e.instance(n,t,i,{mask:{cast:String,change:function(){r=null}},
style:{cast:e.createAs(Me),factory:Re}}),n};Ge.defaults=Ge().style(Re()),Ge.cacheLimit=20;
var Pe={},Be=0,Ve=Ce.dateFormat=function(t,i){function n(e){return r||(r=ve(s.mask)),
r(e)}var s,r;return n.format=n,n.tryConfigure=ge,e.classify(n,Ve),s=e.instance(n,t,i,{
mask:{cast:String,change:function(){r=null}}}),arguments.length&&e.configure(n,arguments[0]),
n};Ve.defaults=Ve();var je=Ce.customFormat=function(t,i){function n(){var e=s.formatter;
return String(e&&e.apply(null,arguments))}var s;return n.format=n,n.tryConfigure=_e,
e.classify(n,je),s=e.instance(n,t,i,{formatter:{cast:e.fun.as}}),n};je.defaults=je().formatter(ye);
var qe="en-us",Ee=Ce.format=function(t,i){function n(){}n.tryConfigure=De;var s;if(!i&&e.string.is(t)){
var r=ze(t);s=r.languageCode,r&&(i=r,t=null)}return n.languageCode=s?s:qe,e.classify(n,Ee),
e.instance(n,t,i,{number:be(Ge),percent:be(Ge),date:be(Ve),any:{cast:e.createAs(je),
factory:je}}),n};Ee.defaults=Ee({number:"#,0.##",percent:"#,0.#%",date:"%Y/%m/%d",
any:je()});var Ke={},Fe=Ke[qe]=Ee.defaults,ze=Ce.format.language=function(t,i){var n=arguments.length;
if(!n)return Fe;if(1==n){if(void 0===t)throw e.error.operationInvalid("Undefined 'style' value.");
if(null===t||""===t)t=qe;else{if(e.is(t,Ee))return Fe=t;if("object"==typeof t){for(var s in t)Ne(s,e.getOwn(t,s));
return Ce.format}}return Se(t,!0)}if(2==n)return Ne(t,i);throw e.error.operationInvalid("Wrong number of arguments");
};return ze({"en-gb":{number:{mask:"#,0.##",style:{integerPad:"0",fractionPad:"0",
decimal:".",group:",",groupSizes:[3],abbreviations:["k","m","b","t"],negativeSign:"-",
currency:"£"}},date:{mask:"%d/%m/%Y"}},"pt-pt":{number:{mask:"#,0.##",style:{integerPad:"0",
fractionPad:"0",decimal:",",group:" ",groupSizes:[3],abbreviations:["k","m","b","t"],
negativeSign:"-",currency:"€"}},date:{mask:"%d/%m/%Y"}}}),Ce});