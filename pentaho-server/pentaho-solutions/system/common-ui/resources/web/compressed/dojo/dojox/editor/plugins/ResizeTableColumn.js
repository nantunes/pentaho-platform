define(["dojo","dijit","dojox","./TablePlugins"],function(dojo,dijit,dojox,TablePlugins){
var ResizeTableColumn=dojo.declare("dojox.editor.plugins.ResizeTableColumn",TablePlugins,{
constructor:function(){this.isLtr=this.dir?"ltr"==this.dir:dojo._isBodyLtr(),this.ruleDiv=dojo.create("div",{
style:"top: -10000px; z-index: 10001"},dojo.body(),"last")},setEditor:function(editor){
function isBoundary(e,o){var t=dojo.query("> td",e.parentNode);switch(o){case"first":
return t[0]==e;case"last":return t[t.length-1]==e;default:return!1}}function nextSibling(e){
for(e=e.nextSibling;e&&(!e.tagName||"td"!=e.tagName.toLowerCase());)e=e.nextSibling;
return e}function getTable(e){for(;(e=e.parentNode)&&"table"!=e.tagName.toLowerCase(););
return e}function getHeaderCell(e){for(var o=dojo.query("td",getTable(e)),t=o.length,i=0;t>i;i++)if(dojo.position(o[i]).x==dojo.position(e).x)return o[i];
return null}function marginBox(node,width){function px(element,avalue){if(!avalue)return 0;
if("medium"==avalue)return 1;if(avalue.slice&&"px"==avalue.slice(-2))return parseFloat(avalue);
with(element){var sLeft=style.left,rsLeft=runtimeStyle.left;runtimeStyle.left=currentStyle.left;
try{style.left=avalue,avalue=style.pixelLeft}catch(e){avalue=0}style.left=sLeft,runtimeStyle.left=rsLeft;
}return avalue}if(dojo.isIE){var s=node.currentStyle,bl=px(node,s.borderLeftWidth),br=px(node,s.borderRightWidth),pl=px(node,s.paddingLeft),pr=px(node,s.paddingRight);
node.style.width=width-bl-br-pl-pr}else dojo.marginBox(node,{w:width})}var ruleDiv=this.ruleDiv;
this.editor=editor,this.editor.customUndo=!0,this.onEditorLoaded(),editor.onLoadDeferred.addCallback(dojo.hitch(this,function(){
this.connect(this.editor.editNode,"onmousemove",function(e){var o=dojo.position(editor.iframe,!0),t=o.x,i=e.clientX;
if(this.isDragging){var r,n,l,a=this.activeCell,d=dojo.position(a),s=d.x,u=d.w,c=nextSibling(a),g=dojo.position(getTable(a).parentNode),p=g.x,h=g.w;
c&&(r=dojo.position(c),n=r.x,l=r.w),(this.isLtr&&(ruleDiv.headerColumn&&c&&i>p&&s+u>i||!c&&i>s&&p+h>i||c&&i>s&&n+l>i)||!this.isLtr&&(ruleDiv.headerColumn&&c&&p>i&&i>s||!c&&s+u>i&&i>p||c&&s+u>i&&i>n))&&dojo.style(ruleDiv,{
left:t+i+"px"})}else{var m=e.target;if(m.tagName&&"td"==m.tagName.toLowerCase()){
var f=dojo.position(m),v=f.x,x=f.w,j=t+f.x-2;this.isLtr?(ruleDiv.headerColumn=!0,
(!isBoundary(m,"first")||i>v+x/2)&&(j+=x,ruleDiv.headerColumn=!1)):(ruleDiv.headerColumn=!1,
isBoundary(m,"first")&&i>v+x/2&&(j+=x,ruleDiv.headerColumn=!0)),dojo.style(ruleDiv,{
position:"absolute",cursor:"col-resize",display:"block",width:"4px",backgroundColor:"transparent",
top:o.y+f.y+"px",left:j+"px",height:f.h+"px"}),this.activeCell=m}else dojo.style(ruleDiv,{
display:"none",top:"-10000px"})}}),this.connect(ruleDiv,"onmousedown",function(e){
var o=dojo.position(editor.iframe,!0),t=dojo.position(getTable(this.activeCell));this.isDragging=!0,
dojo.style(editor.editNode,{cursor:"col-resize"}),dojo.style(ruleDiv,{width:"1px",
left:e.clientX+"px",top:o.y+t.y+"px",height:t.h+"px",backgroundColor:"#777"})}),this.connect(ruleDiv,"onmouseup",function(e){
var o,t,i,r,n,l,a=this.activeCell,d=dojo.position(a),s=d.w,u=d.x,c=nextSibling(a),g=dojo.position(editor.iframe),p=g.x,h=getTable(a),m=dojo.position(h),f=h.getAttribute("cellspacing"),v=e.clientX,x=getHeaderCell(a);
(!f||(f=parseInt(f,10))<0)&&(f=2),c&&(o=dojo.position(c),t=o.x,i=o.w,r=getHeaderCell(c)),
this.isLtr?ruleDiv.headerColumn?n=p+u+s-v:(n=v-p-u,c&&(l=p+t+i-v-f)):ruleDiv.headerColumn?n=v-p-u:(n=p+u+s-v,
c&&(l=v-p-t-f)),this.isDragging=!1,marginBox(x,n),c&&(ruleDiv.headerColumn||marginBox(r,l)),
(ruleDiv.headerColumn&&isBoundary(a,"first")||isBoundary(a,"last"))&&dojo.marginBox(h,{
w:m.w+n-s}),marginBox(x,dojo.position(a).w),c&&marginBox(r,dojo.position(c).w),dojo.style(editor.editNode,{
cursor:"auto"}),dojo.style(ruleDiv,{display:"none",top:"-10000px"}),this.activeCell=null;
})}))}});return dojo.subscribe(dijit._scopeName+".Editor.getPlugin",null,function(e){
if(!e.plugin&&e.args&&e.args.command){var o=e.args.command.charAt(0).toLowerCase()+e.args.command.substring(1,e.args.command.length);
"resizeTableColumn"==o&&(e.plugin=new ResizeTableColumn({commandName:o}))}}),ResizeTableColumn;
});