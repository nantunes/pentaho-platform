dojo.provide("dojox.widget.Iterator"),dojo.require("dijit.Declaration"),dojo.experimental("dojox.widget.Iterator"),
dojo.declare("dojox.widget.Iterator",[dijit.Declaration],{constructor:function(){
var t=0;return function(){this.attrs=[],this.children=[],this.widgetClass="dojox.widget.Iterator._classes._"+t++;
}}(),start:0,fetchMax:1e3,query:{name:"*"},attrs:[],defaultValue:"",widgetCtor:null,
dataValues:[],data:null,store:null,_srcIndex:0,_srcParent:null,_setSrcIndex:function(t){
this._srcIndex=0,this._srcParent=t.parentNode;for(var e=t;e.previousSibling;)this._srcIndex++,
e=e.previousSibling},postscript:function(t,e){this._setSrcIndex(e),this.inherited("postscript",arguments);
var i=this.widgetCtor=dojo.getObject(this.widgetClass);this.attrs=dojo.map(i.prototype.templateString.match(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g),function(t){
return t.slice(2,-1)}),dojo.forEach(this.attrs,function(t){i.prototype[t]=""}),this.update();
},clear:function(){this.children.length&&this._setSrcIndex(this.children[0].domNode),
dojo.forEach(this.children,"item.destroy();"),this.children=[]},update:function(){
this.store?this.fetch():this.onDataAvailable(this.data||this.dataValues)},_addItem:function(t,e){
dojo.isString(t)&&(t={value:t});var i=new this.widgetCtor(t);this.children.push(i),
dojo.place(i.domNode,this._srcParent,this._srcIndex+e)},getAttrValuesObj:function(t){
var e={};return dojo.isString(t)?dojo.forEach(this.attrs,function(i){e[i]="value"==i?t:this.defaultValue;
},this):dojo.forEach(this.attrs,function(i){this.store?e[i]=this.store.getValue(t,i)||this.defaultValue:e[i]=t[i]||this.defaultValue;
},this),e},onDataAvailable:function(t){this.clear(),dojo.forEach(t,function(t,e){
this._addItem(this.getAttrValuesObj(t),e)},this)},fetch:function(t,e,i){this.store.fetch({
query:t||this.query,start:e||this.start,count:i||this.fetchMax,onComplete:dojo.hitch(this,"onDataAvailable")
})}}),dojox.widget.Iterator._classes={};