(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cate_Params"],{"0557":function(t,e,r){"use strict";r("75ac")},1276:function(t,e,r){"use strict";var a=r("d784"),n=r("44e7"),i=r("825a"),o=r("1d80"),s=r("4840"),c=r("8aa5"),l=r("50c4"),u=r("14c3"),d=r("9263"),f=r("d039"),p=[].push,m=Math.min,h=4294967295,g=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var a=String(o(this)),i=void 0===r?h:r>>>0;if(0===i)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,i);var s,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,f+"g");while(s=d.call(g,a)){if(c=g.lastIndex,c>m&&(u.push(a.slice(m,s.index)),s.length>1&&s.index<a.length&&p.apply(u,s.slice(1)),l=s[0].length,m=c,u.length>=i))break;g.lastIndex===s.index&&g.lastIndex++}return m===a.length?!l&&g.test("")||u.push(""):u.push(a.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var n=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n,r):a.call(String(n),e,r)},function(t,n){var o=r(a,t,this,n,a!==e);if(o.done)return o.value;var d=i(t),f=String(this),p=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new p(g?d:"^(?:"+d.source+")",b),x=void 0===n?h:n>>>0;if(0===x)return[];if(0===f.length)return null===u(y,f)?[f]:[];var w=0,_=0,C=[];while(_<f.length){y.lastIndex=g?_:0;var k,E=u(y,g?f:f.slice(_));if(null===E||(k=m(l(y.lastIndex+(g?0:_)),f.length))===w)_=c(f,_,v);else{if(C.push(f.slice(w,_)),C.length===x)return C;for(var R=1;R<=E.length-1;R++)if(C.push(E[R]),C.length===x)return C;_=w=k}}return C.push(f.slice(w)),C}]}),!g)},"14c3":function(t,e,r){var a=r("c6b6"),n=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),i=r("17c2"),o=r("9112");for(var s in n){var c=a[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("a640"),i=n("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function a(t,e,r,a,n,i,o){try{var s=t[i](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(a,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){a(o,n,i,s,c,"next",t)}function c(t){a(o,n,i,s,c,"throw",t)}s(void 0)}))}}},"25c7":function(t,e,r){},"3b0d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("参数列表")])],1),r("el-card",[r("el-alert",{attrs:{title:"只允许选择三级页面",type:"warning","show-icon":"",closable:!1}}),r("el-row",{staticClass:"cat_opt"},[r("el-col",[r("span",[t._v("选择商品分类: ")]),r("el-cascader",{attrs:{options:t.catelist,props:t.cateProps},on:{change:t.handleChange},model:{value:t.selectedCateKeys,callback:function(e){t.selectedCateKeys=e},expression:"selectedCateKeys"}})],1)],1),r("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[r("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtndisabled},on:{click:t.showAddDialogVisible}},[t._v("添加参数")]),r("el-table",{attrs:{data:t.manyTableData,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(a,n){return r("el-tag",{key:n,attrs:{closable:!0},on:{close:function(r){return t.handeleClose(n,e.row)}}},[t._v(t._s(a))])})),e.row.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(r){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(r){t.$set(e.row,"inputValue",r)},expression:"scope.row.inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(r){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1),r("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[r("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isBtndisabled},on:{click:t.showAddDialogVisible}},[t._v("添加属性")]),r("el-table",{attrs:{data:t.onlyTableData,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(a,n){return r("el-tag",{key:n,attrs:{closable:!0},on:{close:function(r){return t.handeleClose(n,e.row)}}},[t._v(t._s(a))])})),e.row.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(r){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(r){t.$set(e.row,"inputValue",r)},expression:"scope.row.inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(r){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"属性名称",prop:"attr_name"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return t.showEditDialog(e.row.attr_id)}}},[t._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return t.removeParams(e.row.attr_id)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),r("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.addDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addDialogClosed}},[r("el-form",{ref:"addFormRef",staticClass:"demo-ruleForm",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加"+t.titleText,visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e},close:t.editDialogClosed}},[r("el-form",{ref:"editFormRef",staticClass:"demo-ruleForm",attrs:{model:t.editForm,rules:t.editFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},n=[],i=r("1da1"),o=(r("159b"),r("1276"),r("ac1f"),r("99af"),r("498a"),r("a15b"),r("a434"),r("96cf"),{data:function(){return{catelist:[],cateProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover"},selectedCateKeys:[],activeName:"many",manyTableData:[],onlyTableData:[],addDialogVisible:!1,addFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},addForm:{attr_name:""},editForm:{attr_name:""},editDialogVisible:!1,editFormRules:{attr_name:[{required:!0,message:"请输入参数名称",trigger:"blur"}]},inputVisible:!1,inputValue:""}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories");case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取数据分类失败!"));case 6:t.catelist=a.data;case 7:case"end":return e.stop()}}),e)})))()},handleChange:function(){this.getParamsData()},handleTabClick:function(){this.getParamsData()},getParamsData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3===t.selectedCateKeys.length){e.next=5;break}return t.selectedCateKeys=[],t.manyTableData=[],t.onlyTableData=[],e.abrupt("return","");case 5:return e.next=7,t.$http.get("categories/".concat(t.cateId,"/attributes"),{params:{sel:t.activeName}});case 7:if(r=e.sent,a=r.data,200===a.meta.status){e.next=11;break}return e.abrupt("return",t.$message.error("获取数据分类失败!"));case 11:a.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(" "):[],t.inputVisible=!1,t.inputValue=""})),"many"===t.activeName?t.manyTableData=a.data:t.onlyTableData=a.data;case 13:case"end":return e.stop()}}),e)})))()},showAddDialogVisible:function(){this.addDialogVisible=!0},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addParams:function(){var t=this;this.$refs.addFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,t.$http.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 4:if(a=e.sent,n=a.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加参数失败！"));case 8:t.$message.success("添加成功");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.getParamsData(),this.addDialogVisible=!1},showEditDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("categories/".concat(e.cateId,"/attributes/").concat(t),{params:{attr_sel:e.activeName}});case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",e.$message.error("获取参数信息失败!"));case 6:e.editForm=n.data,e.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editParams:function(){var t=this;this.$refs.editFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return","");case 2:return e.next=4,t.$http.put("categories/".concat(t.cateId,"/attributes/").concat(t.editForm.attr_id),{attr_name:t.editForm.attr_name,attr_sel:t.activeName});case 4:if(a=e.sent,n=a.data,200===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("获取参数信息失败!"));case 8:t.$message.success("修改参数成功"),t.getParamsData(),t.editDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},removeParams:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$confirm("此操作将永久删除该参数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",e.$message.info("已取消删除"));case 5:return r.next=7,e.$http.delete("categories/".concat(e.cateId,"/attributes/").concat(t));case 7:if(n=r.sent,i=n.data,200===i.meta.status){r.next=11;break}return r.abrupt("return",e.$message.error("删除属性失败！"));case 11:e.$message.success("删除成功"),e.getParamsData();case 13:case"end":return r.stop()}}),r)})))()},handleInputConfirm:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(0!==t.inputValue.trim().length){r.next=4;break}return t.inputValue="",t.inputVisible=!1,r.abrupt("return","");case 4:t.attr_vals.push(t.inputValue.trim()),t.inputValue="",t.inputVisible=!1,e.saveAttrVals(t);case 8:case"end":return r.stop()}}),r)})))()},saveAttrVals:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.put("categories/".concat(e.cateId,"/attributes/").concat(t.attr_id),{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:t.attr_vals.join(" ")});case 2:a=r.sent,n=a.data,200!==n.meta.status&&e.$message.error("数据修改失败！"),e.$message.success("修改数据成功");case 6:case"end":return r.stop()}}),r)})))()},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handeleClose:function(t,e){e.attr_vals.splice(t,1),this.saveAttrVals(e)}},computed:{isBtndisabled:function(){return 3!==this.selectedCateKeys.length},cateId:function(){return 3===this.selectedCateKeys.length?this.selectedCateKeys[2]:null},titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}}}),s=o,c=(r("a387"),r("2877")),l=Object(c["a"])(s,a,n,!1,null,"2c332390",null);e["default"]=l.exports},"44e7":function(t,e,r){var a=r("861d"),n=r("c6b6"),i=r("b622"),o=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,i=r("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"75ac":function(t,e,r){},"7f6a":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[t._v("商品管理")]),r("el-breadcrumb-item",[t._v("商品分类")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:t.showAddDialog}},[t._v("添加分类")])],1)],1),r("tree-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"tree-table",attrs:{data:t.cateList,columns:t.columns,"selection-type":!1,"expand-type":!1,"show-index":!0,"index-text":"序号",border:"","show-row-hover":!1},scopedSlots:t._u([{key:"isok",fn:function(t){return[!1===t.row.cat_deleted?r("i",{staticClass:"el-icon-success",staticStyle:{color:"lightgreen"}}):r("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}})]}},{key:"order",fn:function(e){return[0===e.row.cat_level?r("el-tag",{attrs:{size:"mini"}},[t._v("一级")]):1===e.row.cat_level?r("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("二级")]):r("el-tag",{attrs:{type:"warning",size:"mini"}},[t._v("三级")])]}},{key:"option",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return t.showEditDialog(e.row.cat_id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteCateDialog(e.row.cat_id)}}},[t._v("删除")])]}}])}),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[3,5,10,15],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,"pager-count":5},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加分类",visible:t.addDialogVisible,width:"50%"},on:{"update:visible":function(e){t.addDialogVisible=e},close:t.addCateDialogClose}},[r("el-form",{ref:"addCateFormRef",attrs:{model:t.addCateForm,rules:t.addCateRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名称: ",prop:"catName"}},[r("el-input",{model:{value:t.addCateForm.catName,callback:function(e){t.$set(t.addCateForm,"catName",e)},expression:"addCateForm.catName"}})],1),r("el-form-item",{attrs:{label:"父级分类: "}},[r("el-cascader",{attrs:{options:t.parentCateList,props:t.casCaderProps,clearable:""},on:{change:t.parentCateChange},model:{value:t.selectKeys,callback:function(e){t.selectKeys=e},expression:"selectKeys"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addCate}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"添加分类",visible:t.editDialogVisible,width:"50%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[r("el-form",{ref:"addCateFormRef",attrs:{model:t.editCateForm,rules:t.editCateRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名称: ",prop:"catName"}},[r("el-input",{model:{value:t.editCateForm.catName,callback:function(e){t.$set(t.editCateForm,"catName",e)},expression:"editCateForm.catName"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.editCate}},[t._v("确 定")])],1)],1)],1)},n=[],i=r("1da1"),o=(r("96cf"),{data:function(){return{queryInfo:{type:3,pagenum:1,pagesize:5},cateList:[],total:0,columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",type:"template",template:"isok"},{label:"排序",type:"template",template:"order"},{label:"操作",type:"template",template:"option"}],addDialogVisible:!1,loading:!0,addCateForm:{catPid:0,catName:"",catLevel:0},addCateRules:{catName:[{required:!0,message:"请输入商品分类名称",trigger:"blur"}]},editCateRules:{catName:[{required:!0,message:"请输入商品分类名称",trigger:"blur"}]},parentCateList:[],casCaderProps:{value:"cat_id",label:"cat_name",children:"children",expandTrigger:"hover",checkStrictly:!0},selectKeys:[],editCateForm:{editId:"",catName:""},editDialogVisible:!1}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:t.queryInfo});case 2:r=e.sent,a=r.data,200!==a.meta.status&&t.$message.error("获取商品数据失败!"),a&&(t.loading=!1,t.cateList=a.data.result,t.total=a.data.total);case 6:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getCateList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getCateList()},showAddDialog:function(){this.getParentCateList(),this.addDialogVisible=!0},getParentCateList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("categories",{params:{type:2}});case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("获取父级分类数据失败!"));case 6:t.parentCateList=a.data;case 7:case"end":return e.stop()}}),e)})))()},parentCateChange:function(){if(this.selectKeys.length>0)return this.addCateForm.catPid=this.selectKeys[this.selectKeys.length-1],this.addCateForm.catLevel=this.selectKeys.length,"";this.addCateForm.catPid=0,this.addCateForm.catLevel=0},addCate:function(){var t=this;this.$refs.addCateFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$http.post("categories",{cat_pid:t.addCateForm.catPid,cat_name:t.addCateForm.catName,cat_level:t.addCateForm.catLevel});case 4:if(a=e.sent,n=a.data,201===n.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error("添加分类失败!"));case 8:t.$message.success("添加成功"),t.getCateList(),t.addDialogVisible=!1;case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addCateDialogClose:function(){this.$refs.addCateFormRef.resetFields(),this.selectKeys=[]},showEditDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$http.get("categories/".concat(t));case 2:a=r.sent,n=a.data,200!==n.meta.status&&e.$message.error("分类id查询失败"),e.editCateForm.catName=n.data.cat_name,e.editCateForm.editId=t,e.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editCate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.put("categories/".concat(t.editCateForm.editId),{cat_name:t.editCateForm.catName});case 2:r=e.sent,a=r.data,200!==a.meta.status&&t.$message.error("编辑分类失败!"),t.getCateList(),t.$message.success("编辑分类成功"),t.editDialogVisible=!1;case 8:case"end":return e.stop()}}),e)})))()},deleteCateDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(t){return t}));case 2:if(a=r.sent,"confirm"!==a){r.next=12;break}return r.next=6,e.$http.delete("categories/".concat(t));case 6:if(n=r.sent,i=n.data,200===i.meta.status){r.next=10;break}return r.abrupt("return",e.$message.error("删除失败"));case 10:e.$message.success("删除成功"),e.getCateList();case 12:e.deleteDialogVisible=!1,e.$message.success("已取消删除");case 14:case"end":return r.stop()}}),r)})))()}}}),s=o,c=(r("0557"),r("2877")),l=Object(c["a"])(s,a,n,!1,null,"026bd64d",null);e["default"]=l.exports},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},9263:function(t,e,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,r,n,s,d=this,f=l&&d.sticky,p=a.call(d),m=d.source,h=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,h++),r=new RegExp("^(?:"+m+")",p)),u&&(r=new RegExp("^"+m+"$(?!\\s)",p)),c&&(e=d.lastIndex),n=i.call(f?r:d,g),f?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:c&&n&&(d.lastIndex=d.global?n.index+n[0].length:e),u&&n&&n.length>1&&o.call(n[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(n[s]=void 0)})),n}),t.exports=s},"96cf":function(t,e,r){var a=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(I){c=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var n=e&&e.prototype instanceof g?e:g,i=Object.create(n.prototype),o=new $(a||[]);return i._invoke=E(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function g(){}function v(){}function b(){}var y={};y[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(L([])));w&&w!==r&&a.call(w,i)&&(y=w);var _=b.prototype=g.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,i,o,s){var c=u(t[n],t,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var n;function i(t,a){function i(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(i,i):i()}this._invoke=i}function E(t,e,r){var a=d;return function(n,i){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===n)throw i;return V()}r.method=n,r.arg=i;while(1){var o=r.delegate;if(o){var s=R(o,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=u(t,e,r);if("normal"===c.type){if(a=r.done?m:f,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}function R(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){while(++n<t.length)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:V}}function V(){return{value:e,done:!0}}return v.prototype=_.constructor=b,b.constructor=v,v.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new k(l(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(_),c(_,s,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=L,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return s.type="throw",s.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;F(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:L(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=a}catch(n){Function("r","regeneratorRuntime = r")(a)}},"9f7f":function(t,e,r){"use strict";var a=r("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,r){"use strict";var a=r("23e7"),n=r("44ad"),i=r("fc6a"),o=r("a640"),s=[].join,c=n!=Object,l=o("join",",");a({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a387:function(t,e,r){"use strict";r("25c7")},a434:function(t,e,r){"use strict";var a=r("23e7"),n=r("23cb"),i=r("a691"),o=r("50c4"),s=r("7b0b"),c=r("65f0"),l=r("8418"),u=r("1dde"),d=u("splice"),f=Math.max,p=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,a,u,d,g,v,b=s(this),y=o(b.length),x=n(t,y),w=arguments.length;if(0===w?r=a=0:1===w?(r=0,a=y-x):(r=w-2,a=p(f(i(e),0),y-x)),y+r-a>m)throw TypeError(h);for(u=c(b,a),d=0;d<a;d++)g=x+d,g in b&&l(u,d,b[g]);if(u.length=a,r<a){for(d=x;d<y-a;d++)g=d+a,v=d+r,g in b?b[v]=b[g]:delete b[v];for(d=y;d>y-a+r;d--)delete b[d-1]}else if(r>a)for(d=y-a;d>x;d--)g=d+a-1,v=d+r-1,g in b?b[v]=b[g]:delete b[v];for(d=0;d<r;d++)b[d+x]=arguments[d+2];return b.length=y-a+r,u}})},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,e,r){"use strict";var a=r("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c8d2:function(t,e,r){var a=r("d039"),n=r("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}},d784:function(t,e,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),o=r("9263"),s=r("9112"),c=i("species"),l=!n((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!n((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var m=i(t),h=!n((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=h&&!n((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return e=!0,null},r[m](""),!e}));if(!h||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var v=/./[m],b=r(m,""[t],(function(t,e,r,a,n){return e.exec===o?h&&!n?{done:!0,value:v.call(e,r,a)}:{done:!0,value:t.call(r,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=b[0],x=b[1];a(String.prototype,t,y),a(RegExp.prototype,m,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&s(RegExp.prototype[m],"sham",!0)}}}]);
//# sourceMappingURL=Cate_Params.9dc9cc99.js.map