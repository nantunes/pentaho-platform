dojo.provide("dojox.widget.DocTester"),dojo.require("dojo.string"),dojo.require("dijit._Widget"),
dojo.require("dijit._Templated"),dojo.require("dojox.form.BusyButton"),dojo.require("dojox.testing.DocTest"),
dojo.declare("dojox.widget.DocTester",[dijit._Widget,dijit._Templated],{templateString:dojo.cache("dojox.widget","DocTester/DocTester.html"),
widgetsInTemplate:!0,_fillContent:function(e){var t=e.innerHTML;this.doctests=new dojox.testing.DocTest,
this.tests=this.doctests.getTestsFromString(this._unescapeHtml(t));for(var o=dojo.map(this.tests,"return item.line-1"),s=t.split("\n"),d='<div class="actualResult">FAILED, actual result was: <span class="result"></span></div>',n='<pre class="testCase testNum0 odd">',i=0;i<s.length;i++){
var r=dojo.indexOf(o,i);if(r>0&&-1!=r){var u=r%2?"even":"odd";n+=d,n+='</pre><pre class="testCase testNum'+r+" "+u+'">';
}n+=s[i].replace(/^\s+/,"")+"\n"}n+=d+"</pre>",this.containerNode.innerHTML=n},postCreate:function(){
this.inherited("postCreate",arguments),dojo.connect(this.runButtonNode,"onClick",dojo.hitch(this,"runTests")),
dojo.connect(this.resetButtonNode,"onClick",dojo.hitch(this,"reset")),this.numTestsNode.innerHTML=this.tests.length;
},runTests:function(){for(var e={ok:0,nok:0},t=0;t<this.tests.length;t++){var o=this.doctests.runTest(this.tests[t].commands,this.tests[t].expectedResult);
if(dojo.query(".testNum"+t,this.domNode).addClass(o.success?"resultOk":"resultNok"),
o.success)e.ok++,this.numTestsOkNode.innerHTML=e.ok;else{e.nok++,this.numTestsNokNode.innerHTML=e.nok;
var s=dojo.query(".testNum"+t+" .actualResult",this.domNode)[0];dojo.style(s,"display","inline"),
dojo.query(".result",s)[0].innerHTML=dojo.toJson(o.actualResult)}}this.runButtonNode.cancel(),
dojo.style(this.runButtonNode.domNode,"display","none"),dojo.style(this.resetButtonNode.domNode,"display","");
},reset:function(){dojo.style(this.runButtonNode.domNode,"display",""),dojo.style(this.resetButtonNode.domNode,"display","none"),
this.numTestsOkNode.innerHTML="0",this.numTestsNokNode.innerHTML="0",dojo.query(".actualResult",this.domNode).style("display","none"),
dojo.query(".testCase",this.domNode).removeClass("resultOk").removeClass("resultNok");
},_unescapeHtml:function(e){return e=String(e).replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"');
}});