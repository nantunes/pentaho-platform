define(["../../../AddIn","../localizedTextBase","../../../Dashboard","../../../lib/jquery","amd!../../../lib/datatables"],function(t,a,e,n){
var d=new t(n.extend(!0,{},a,{init:function(){n.fn.dataTableExt.oSort[this.name+"-asc"]=n.fn.dataTableExt.oSort["string-asc"],
n.fn.dataTableExt.oSort[this.name+"-desc"]=n.fn.dataTableExt.oSort["string-desc"];
},setText:function(t,a,e){n(a).empty().append(t),st.tableData[st.rowIdx][st.colIdx]=t;
}}));return e.registerGlobalAddIn("Table","colType",d),d});