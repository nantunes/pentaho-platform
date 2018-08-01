define(["dojo","dojox/main","dojox/image/Badge","dojox/data/FlickrRestStore"],function(e,t){
return e.getObject("image",!0,t),e.declare("dojox.image.FlickrBadge",t.image.Badge,{
children:"a.flickrImage",userid:"",username:"",setid:"",tags:"",searchText:"",target:"",
apikey:"8c6803164dbc395fb7131c9d54843627",_store:null,postCreate:function(){if(this.username&&!this.userid){
var t=e.io.script.get({url:"http://www.flickr.com/services/rest/",preventCache:!0,
content:{format:"json",method:"flickr.people.findByUsername",api_key:this.apikey,
username:this.username},callbackParamName:"jsoncallback"});t.addCallback(this,function(e){
e.user&&e.user.nsid&&(this.userid=e.user.nsid,this._started||this.startup())})}},
startup:function(){if(!this._started&&this.userid){var s={userid:this.userid};this.setid&&(s.setid=this.setid),
this.tags&&(s.tags=this.tags),this.searchText&&(s.text=this.searchText);var i=arguments;
this._store=new t.data.FlickrRestStore({apikey:this.apikey}),this._store.fetch({count:this.cols*this.rows,
query:s,onComplete:e.hitch(this,function(s){e.forEach(s,function(t){var s=e.doc.createElement("a");
e.addClass(s,"flickrImage"),s.href=this._store.getValue(t,"link"),this.target&&(s.target=this.target);
var i=e.doc.createElement("img");i.src=this._store.getValue(t,"imageUrlThumb"),e.style(i,{
width:"100%",height:"100%"}),s.appendChild(i),this.domNode.appendChild(s)},this),
t.image.Badge.prototype.startup.call(this,i)})})}}})});