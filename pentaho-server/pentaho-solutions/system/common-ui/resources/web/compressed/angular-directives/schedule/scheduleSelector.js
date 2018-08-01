/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * Copyright 2014 - 2017 Hitachi Vantara.  All rights reserved.
 */

define(["common-ui/angular"],function(e){e.module("common.schedule",[]).directive("scheduleSelector",function(l){
var t=function(l){var t="";switch(l=e.lowercase(l)){case"daily":t='<div daily-schedule ng-model="model"></div>';
break;case"weekly":t="<div weekly weekly-label=\"{{'SCHEDULE.LABEL.DaysOfWeek' | i18n}}\" start-label=\"{{'SCHEDULE.LABEL.Start' | i18n}}\" until-label=\"{{'SCHEDULE.LABEL.Until' | i18n}}\" no-end-label=\"{{'SCHEDULE.LABEL.NoEndDate' | i18n}}\" end-by-label=\"{{'SCHEDULE.LABEL.EndBy' | i18n}}\" at-label=\"{{'SCHEDULE.LABEL.At' | i18n}}\" weekly-recurrence-info='model'></div>";
break;case"monthly":t='<div monthly-schedule ng-model="model"></div>';break;case"yearly":
t='<div yearly-schedule ng-model="model"></div>';break;case"never":t='<div never-schedule model="model"></div>';
}return t},n=function(n,o){n.isValid=!1,n.sessionModelMap={},n.$watch("type",function(i){
var d=n.sessionModelMap[i];d?n.model=e.copy(d):n.saved&&n.saved.type===i&&(n.model=e.copy(n.saved)),
o.empty(),o.html(t(i)).show(),l(o.contents())(n),n.model&&(n.model.type=i)}),n.$watch("model",function(l,t){
n.model&&(n.model.type=n.type,n.model.uiPassParam=e.uppercase(n.type),e.equals(l,t)||(n.sessionModelMap[n.type]=e.copy(n.model),
n.validateSchedule()))}),n.validateSchedule=function(){var l="scheduleSelector:isValidRequest:"+e.lowercase(n.type);
n.$broadcast(l)},n.$on("scheduleSelector:isValidResponse",function(e,l){n.isValid=l;
}),n.$on("scheduleSelector:onSave",function(e){n.sessionModelMap={}}),n.$on("scheduleSelector:onReset",function(i){
n.sessionModelMap={},n.saved&&n.saved.type===n.type&&(n.model=e.copy(n.saved)),o.empty(),
o.html(t(n.type)).show(),l(o.contents())(n)})};return{restrict:"EA",replace:!0,link:n,
scope:{model:"=",type:"=",saved:"=",isValid:"="}}}).directive("neverSchedule",function(){
return{restrict:"EA",replace:"true",template:'<span>{{ "SCHEDULE.Never.Msg" | i18n }}</span>',
scope:{model:"="},link:function(e,l){var t="scheduleSelector:isValidRequest:never",n=e.$on(t,function(){
var l=e.validateNever();e.$emit("scheduleSelector:isValidResponse",l)});l.on("$destroy",function(){
n()})},controller:["$scope",function(e){e.model={},e.validateNever=function(){return!0;
}}]}}).directive("dailySchedule",function(){return{restrict:"EA",replace:"true",template:"<div>{{model.type}}</div>",
controller:["$scope",function(e){e.model={}}]}}).directive("monthlySchedule",function(){
return{restrict:"EA",replace:"true",template:"<div>{{type}}</div>",link:function(e,l,t){},
controller:["$scope",function(e){e.model={}}]}}).directive("yearlySchedule",function(){
return{restrict:"EA",replace:"true",template:"<div>{{type}}</div>",link:function(e,l,t){},
controller:["$scope",function(e){e.model={}}]}})});