define(["dojo/_base/declare","./HorizontalSlider","dojo/text!./templates/VerticalSlider.html"],function(e,i,t){
return e("dijit.form.VerticalSlider",i,{templateString:t,_mousePixelCoord:"pageY",
_pixelCount:"h",_startingPixelCoord:"y",_handleOffsetCoord:"top",_progressPixelSize:"height",
_descending:!0,_isReversed:function(){return this._descending}})});