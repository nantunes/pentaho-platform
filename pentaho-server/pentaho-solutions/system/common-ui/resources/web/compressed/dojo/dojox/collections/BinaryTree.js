define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,r,e){return e.BinaryTree=function(t){
function r(t,e,n){this.value=t||null,this.right=e||null,this.left=n||null,this.clone=function(){
var t=new r;return this.value.value?t.value=this.value.clone():t.value=this.value,
null!=this.left&&(t.left=this.left.clone()),null!=this.right&&(t.right=this.right.clone()),
t},this.compare=function(t){return this.value>t.value?1:this.value<t.value?-1:0},
this.compareData=function(t){return this.value>t?1:this.value<t?-1:0}}function n(t,r){
t&&(n(t.left,r),r.push(t.value),n(t.right,r))}function i(t,r){var e="";return t&&(e=t.value.toString()+r,
e+=i(t.left,r),e+=i(t.right,r)),e}function a(t,r){var e="";return t&&(e=a(t.left,r),
e+=t.value.toString()+r,e+=a(t.right,r)),e}function l(t,r){var e="";return t&&(e=l(t.left,r),
e+=l(t.right,r),e+=t.value.toString()+r),e}function h(t,r){if(!t)return null;var e=t.compareData(r);
return 0==e?t:e>0?h(t.left,r):h(t.right,r)}this.add=function(t){for(var e,n=new r(t),i=o,a=null;i;){
if(e=i.compare(n),0==e)return;a=i,i=e>0?i.left:i.right}this.count++,a?(e=a.compare(n),
e>0?a.left=n:a.right=n):o=n},this.clear=function(){o=null,this.count=0},this.clone=function(){
for(var t=new e.BinaryTree,r=this.getIterator();!r.atEnd();)t.add(r.get());return t;
},this.contains=function(t){return null!=this.search(t)},this.deleteData=function(t){
for(var r=o,e=null,n=r.compareData(t);0!=n&&null!=r;)n>0?(e=r,r=r.left):0>n&&(e=r,
r=r.right),n=r.compareData(t);if(r)if(this.count--,r.right)if(r.right.left){for(var i=r.right.left,a=r.right;null!=i.left;)a=i,
i=i.left;a.left=i.right,i.left=r.left,i.right=r.right,e?(n=e.compare(r),n>0?e.left=i:0>n&&(e.right=i)):o=i;
}else e?(n=e.compare(r),n>0?e.left=r.right:0>n&&(e.right=r.right)):o=r.right;else e?(n=e.compare(r),
n>0?e.left=r.left:0>n&&(e.right=r.left)):o=r.left},this.getIterator=function(){var t=[];
return n(o,t),new e.Iterator(t)},this.search=function(t){return h(o,t)},this.toString=function(t,r){
t||(t=e.BinaryTree.TraversalMethods.Inorder),r||(r=",");var n="";switch(t){case e.BinaryTree.TraversalMethods.Preorder:
n=i(o,r);break;case e.BinaryTree.TraversalMethods.Inorder:n=a(o,r);break;case e.BinaryTree.TraversalMethods.Postorder:
n=l(o,r)}return 0==n.length?"":n.substring(0,n.length-r.length)},this.count=0;var o=this.root=null;
t&&this.add(t)},e.BinaryTree.TraversalMethods={Preorder:1,Inorder:2,Postorder:3},
e.BinaryTree});