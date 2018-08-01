/*The MIT License (MIT)

 Copyright (c) 2014 Andreas Drobisch and contributors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

define(["common-ui/angular"],function(angular){String.prototype.trim||(String.prototype.trim=function(){
return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}),angular.module("angular-dojo",[]).directive("dojoWidget",function($timeout){
var parseProps=function(props,scope){var result={};return void 0!=props&&angular.forEach(props.split(";"),function(prop,index){
var propSplit=prop.split(":");scope.$parent[propSplit[1].trim()]?result[propSplit[0].trim()]=scope.$parent[propSplit[1].trim()]:result[propSplit[0].trim()]=eval(propSplit[1].trim());
}),result};return{restrict:"A",replace:!1,transclude:!1,require:"?ngModel",scope:{
ngModel:"=?",ngClick:"&",ngChange:"&",dojoStore:"&",dojoProps:"@",dojoDisplayValue:"=?",
dojoConstraints:"@"},link:function(o,e,t,n){require(["dojo/ready",t.dojoWidget,"dojo/on"],function(n,i,r){
n(function(){o.widget=new i({},e[0]),t.$observe("dojoProps",function(e){o.widget.set(parseProps(e,o));
}),t.$observe("dojoConstraints",function(e){var t=parseProps(e,o);o.widget.set({constraints:t
})}),t.$observe("dojoStore",function(){void 0!=o.dojoStore&&(o.widget.store=o.dojoStore());
}),t.$observe("ngModel",function(){void 0!=o.ngModel&&(o.widget.set("value",o.ngModel),
o.widget.set("checked",o.ngModel))}),o.$watch("ngModel",function(){void 0!=o.ngModel&&(o.widget.set("value",o.ngModel),
o.widget.set("checked",o.ngModel))}),r(o.widget,"blur",function(){void 0!=o.widget.displayedValue&&(o.dojoDisplayValue=o.widget.displayedValue);
}),r(o.widget,"change",function(e){o.ngModel=e,$timeout(function(){o.$apply(),void 0!=o.ngChange&&o.ngChange();
})}),r(o.widget,"click",function(){$timeout(function(){o.$apply(),void 0!=o.ngClick&&o.ngClick();
})})})})}}})});