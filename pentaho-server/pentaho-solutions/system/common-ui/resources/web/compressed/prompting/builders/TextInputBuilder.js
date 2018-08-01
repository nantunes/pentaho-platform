/*!
 * Copyright 2010 - 2017 Hitachi Vantara.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

define(["common-ui/util/util","dojo/number","cdf/components/TextInputComponent","./FormattedParameterWidgetBuilderBase","common-ui/jquery-clean"],function(e,t,a,n,r){
return n.extend({build:function(n){function o(a){try{return t.parse(a,{locale:e.normalizeDojoLocale(SESSION_LOCALE)
})}catch(n){return t.parse(a,{locale:"en"})}}function u(a){try{return t.format(a,{
locale:e.normalizeDojoLocale(SESSION_LOCALE)})}catch(n){return t.format(a,{locale:"en"
})}}var l=this.base(n),i=l.name+"-input";return r.extend(l,{name:i,type:"TextInputComponent",
preChange:function(){var e=r("#"+this.name).attr("value");this.dashboard.setParameter(this.parameter,o(e));
},postExecution:function(){this.base();var t;r.each(this.param.values,function(a,n){
if(n.selected){t=this.formatter?this.formatter.format(this.transportFormatter.parse(n.value)):n.value;
try{if(isNaN(n.value)||Math.abs(n.value)==1/0)var r=null;else r=e.isNumberType(n.type)?u(n.value):n.value;
}catch(o){r=n.value}null!=r&&(t=n.label=n.value=r)}}.bind(this)),r("#"+this.name).attr("value",t);
}}),new a(l)}})});