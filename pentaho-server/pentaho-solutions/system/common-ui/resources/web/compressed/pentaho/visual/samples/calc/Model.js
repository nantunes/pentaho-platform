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

define(["pentaho/module!_","pentaho/visual/base/Model","pentaho/i18n!model","./theme/model"],function(e,a,i){
"use strict";var t=i.structured.operation.domain;return a.extend({$type:{id:e.id,
v2Id:"sample_calc",defaultView:"./View",props:[{name:"levels",base:"pentaho/visual/role/Property",
modes:[{dataType:"list"}],fields:{isRequired:!0}},{name:"measure",base:"pentaho/visual/role/Property",
modes:[{dataType:"number"}],fields:{isRequired:!0}},{name:"operation",valueType:"string",
domain:[{v:"min",f:t.min.f},{v:"max",f:t.max.f},{v:"avg",f:t.avg.f},{v:"sum",f:t.sum.f
}],defaultValue:"min"}]}}).localize({$type:i.structured.type}).configure({$type:e.config
})});