dojo.provide("dojox.lang.oo.Filter"),function(){var t=dojox.lang.oo,o=t.Filter=function(t,o){
this.bag=t,this.filter="object"==typeof o?function(){return o.exec.apply(o,arguments);
}:o},n=function(t){this.map=t};n.prototype.exec=function(t){return this.map.hasOwnProperty(t)?this.map[t]:t;
},t.filter=function(t,e){return new o(t,new n(e))}}();