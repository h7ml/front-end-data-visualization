import{A as r,C as _,o as p,e as d,s as i,v as l,f as m}from"./vendor.72e7bd49.js";import{_ as u}from"./index.cc1e433d.js";const M=e=>(i("data-v-25ab9773"),e=e(),l(),e),B={class:"map__x"},v=M(()=>m("div",{id:"container"},null,-1)),f=[v],C={setup(e){const n=r();function a(){const o=new BMapGL.Map("container",{minZoom:11,maxZoom:16,mapType:BMAP_NORMAL_MAP}),t=new BMapGL.Point(116.404,39.915);o.centerAndZoom(t,12),o.enableScrollWheelZoom(!0);const s=new BMapGL.ZoomControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,offset:new BMapGL.Size(10,10)});o.addControl(s);const c=new BMapGL.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT,offset:new BMapGL.Size(10,10)});o.addControl(c),o.addEventListener("zoomstart",function(){console.log("zoom\u7F29\u653E\u524D\uFF1A",o.getZoom())}),o.addEventListener("zoomend",function(){console.log("zoom\u7F29\u653E\u540E\uFF1A",o.getZoom())})}return _(()=>{a(),n.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Control/Control.vue")}),(o,t)=>(p(),d("div",B,f))}};var A=u(C,[["__scopeId","data-v-25ab9773"]]);export{A as default};
