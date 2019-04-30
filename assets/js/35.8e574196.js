(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{159:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),r("p",[t._v("通过ConvexGeometry我们可以在一组点外面建立一个凸包。凸包就是包围这组点的最小图形。")]),t._m(3),r("p",[t._v("通过LatheGeometry可以从一条光滑的曲线开始创建图形。曲线是通过节点定义的，曲线通常被称作样条曲线。当样条曲线绕着一个固定的点旋转时就构成了一个类似花瓶或者铃铛的图形。")]),t._m(4),r("p",[t._v("拉伸THREE.CircleGeometry对象，能够得到类似圆柱体的图形。\n拉伸THREE.PlanceGeometry对象，能够得到类似方块的图形。\n最通用的拉伸图形方法是使用THREE.ExtrudeGeometry对象。")]),t._m(5),r("p",[t._v("拉伸几何体，沿Z轴拉伸")]),t._m(6),r("p",[t._v("沿着三维样条曲线拉伸出一根管子。")]),t._m(7),r("p",[r("a",{attrs:{href:"https://github.com/asutherland/d3-threeD",target:"_blank",rel:"noopener noreferrer"}},[t._v("将SVG路径转为Three.js图形 https://github.com/asutherland/d3-threeD"),r("OutboundLink")],1)]),r("p",[t._v("SVG(Scalabel Vector Graphics) 可缩放矢量图，是基于XML标准，用来在网页上创建二维矢量图。")]),r("p",[t._v("d3-ThreeD库提供transformSVGPathExposed函数，可以将SVG转为Thress.js图形")]),t._m(8),r("p",[t._v("通过ParametricGeometry可以创建基于等式的几何体")]),t._m(9),t._m(10),t._m(11),t._m(12)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"高级几何体和二元操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级几何体和二元操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级几何体和二元操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("ConvexGeometry 凸面体")]),e("li",[this._v("LatheGeometry 扫描体")]),e("li",[this._v("TubeGeometry 管状几何体")]),e("li",[this._v("ExtrudeGeometry 拉伸几何体")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"convexgeometry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convexgeometry","aria-hidden":"true"}},[this._v("#")]),this._v(" ConvexGeometry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lathegeometry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lathegeometry","aria-hidden":"true"}},[this._v("#")]),this._v(" LatheGeometry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"通过拉伸创建几何体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过拉伸创建几何体","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过拉伸创建几何体")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"extrudegeometry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extrudegeometry","aria-hidden":"true"}},[this._v("#")]),this._v(" ExtrudeGeometry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tubegeometry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tubegeometry","aria-hidden":"true"}},[this._v("#")]),this._v(" TubeGeometry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"从svg拉伸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从svg拉伸","aria-hidden":"true"}},[this._v("#")]),this._v(" 从SVG拉伸")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"parametricgeometry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parametricgeometry","aria-hidden":"true"}},[this._v("#")]),this._v(" ParametricGeometry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"textgeometry-三维文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#textgeometry-三维文本","aria-hidden":"true"}},[this._v("#")]),this._v(" TextGeometry 三维文本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用二元操作组合网格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用二元操作组合网格","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用二元操作组合网格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用ConvexGeometry、TubeGeometry和LatheGeometry可以创建相当有趣的几何体。")]),e("li",[this._v("将已有的SVG路径转为Three.js路径是可能的。")]),e("li",[this._v("使用ExtrudeGeometry可以轻松的将二维几何体转为三维几何体。")]),e("li",[this._v("使用文本时需要指定字体。")]),e("li",[this._v("通过ThreeBSP可以在网格上应用三种二元操作：union、subtract和intersect.")])])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);