dojo.provide("dojox.lang.oo.Decorator"),function(){var o=dojox.lang.oo,n=o.Decorator=function(o,n){
this.value=o,this.decorator="object"==typeof n?function(){return n.exec.apply(n,arguments);
}:n};o.makeDecorator=function(o){return function(r){return new n(r,o)}}}();