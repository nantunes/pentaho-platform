var loadGoogleMapsOverlay=function(o){var e,a=o.now();return function(){if(e)return e;
var l,r=o.Deferred(),s=function(){r.resolve(window.google&&google.maps?google.maps:!1);
},n="loadGoogleMapsOverlay_"+a++;return window.google&&google.maps?s():window.google&&google.load?google.load("maps","3.exp",{
other_params:"sensor=false&libraries=places",callback:s}):(l={v:"3.exp",sensor:!1,
libraries:"places",callback:n},window[n]=function(){s(),setTimeout(function(){try{
delete window[n]}catch(o){}},20)},o.ajax({dataType:"script",data:l,url:"//maps.googleapis.com/maps/api/js"
})),e=r.promise()}}(jQuery);