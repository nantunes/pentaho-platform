define(["./_base","./canvas"],function(e,t){var n=e.canvasext={};return t.Surface.extend({
getImageData:function(e){return"pendingRender"in this&&this._render(!0),this.rawNode.getContext("2d").getImageData(e.x,e.y,e.width,e.height);
},getContext:function(){return this.rawNode.getContext("2d")}}),n});