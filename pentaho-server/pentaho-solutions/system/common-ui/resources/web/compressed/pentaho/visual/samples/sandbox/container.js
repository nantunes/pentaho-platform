/*!
 * Copyright 2010 - 2018 Hitachi Vantara. All rights reserved.
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
 */

define(["pentaho/visual/base/View","pentaho/data/Table"],function(e,a){"use strict";
var n=document.getElementById("sandbox-container"),l=new a({model:[{name:"family",
type:"string",label:"Family"},{name:"sales",type:"number",label:"Sales"}],rows:[{
c:[{v:"plains",f:"Plains"},123]},{c:[{v:"cars",f:"Cars"},{v:456}]}]}),i={width:100,
height:100,domContainer:n,model:{_:"pentaho/visual/samples/calc/Model",data:l,levels:{
fields:["family"]},measure:{fields:["sales"]},operation:"avg"}};window.app={view:null
},e.createAsync(i).then(function(e){return window.app.view=e,e.update()}).then(function(){
console.log("View update finished")})});