define(["dojo/_base/declare","dojo/query","./FisheyeLite"],function(e,o,n){return e("dojox.widget._FisheyeFX",null,{
addFx:function(e,i){o(e,i).forEach(function(e){new n({properties:{fontSize:1.1}},e);
})}})});