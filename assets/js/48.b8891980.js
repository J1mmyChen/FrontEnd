(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{147:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("直接操作DOM会影响性能，所以才产生了虚拟DOM。")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Vue Virtual DOM实现时参考的项目\n"),a("a",{attrs:{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/snabbdom/snabbdom"),a("OutboundLink")],1)]),t._m(4),a("p",[t._v("Virtual DOM除了数据结构的定义，映射到真实的DOM上要经历VNode的crate、diff、patch等过程。那么在Vue.js中，VNode的crate是通过之前提到的crateElement方法创建的，接下来顺着文章往下看。")]),t._m(5),a("p",[t._v("实现一个Virtual DOM\n"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000016129036",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000016129036"),a("OutboundLink")],1)]),a("p",[t._v("为什么DOM操作昂贵呢\n"),a("a",{attrs:{href:"https://www.kancloud.cn/digest/liao-js/149473",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.kancloud.cn/digest/liao-js/149473"),a("OutboundLink")],1)]),a("p",[t._v("理解Virtual DOM\n"),a("a",{attrs:{href:"https://github.com/y8n/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/y8n/blog/issues/5"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"virtual-dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom","aria-hidden":"true"}},[this._v("#")]),this._v(" Virtual DOM")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟dom","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是虚拟DOM")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",[s("code",[this._v("一个对象，两个前提，三个步骤。\nVirtual DOM是一个基本的JavaScript对象，也是整个Virtual DOM数的基本。\n两个前提：JavaScript可以很快、直接操作DOM很慢，这是Virtual DOM得以实现的两个基本前提。得益于V8引擎的出现，让JavaScript可以高效的运行，在性能上有很大提高。直接操作DOM会引起性能问题。\n三个步骤：实现Virtual DOM的三个步骤，生成Virtual DOM树，对比两棵树的差异，更新视图。\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rendered in this component's scope")]),t._v("\n  key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  componentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeComponentOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  componentInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// component instance")]),t._v("\n  parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// component placeholder node")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// strictly internal")]),t._v("\n  raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// contains raw HTML? (server only)")]),t._v("\n  isStatic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hoisted static node")]),t._v("\n  isRootInsert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// necessary for enter transition check")]),t._v("\n  isComment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// empty comment placeholder?")]),t._v("\n  isCloned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is a cloned node?")]),t._v("\n  isOnce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// is a v-once node?")]),t._v("\n  asyncFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// async component factory function")]),t._v("\n  asyncMeta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isAsyncPlaceholder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ssrContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fnContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// real context vm for functional nodes")]),t._v("\n  fnOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("ComponentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for SSR caching")]),t._v("\n  devtoolsMeta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// used to store functional render context for devtools")]),t._v("\n  fnScopeId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// functional scope id support")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    elm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    componentOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VNodeComponentOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    asyncFactory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Function\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tag\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" children\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elm\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fnContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fnOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fnScopeId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" componentOptions\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentInstance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isStatic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRootInsert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isComment "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isCloned "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOnce "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncFactory\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asyncMeta "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" undefined\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAsyncPlaceholder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.options.__file="14-virtual-DOM.md";s.default=e.exports}}]);