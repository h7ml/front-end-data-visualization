import{A as r,b as i,C as l,D as p,o as d,e as _,s as u,v,f}from"./vendor.72e7bd49.js";import{_ as m}from"./index.cc1e433d.js";const b=t=>(u("data-v-32f62822"),t=t(),v(),t),h={class:"map__x"},x=b(()=>f("div",{id:"container"},null,-1)),L=[x],w={setup(t){const s=r();function n(e){alert(e.target.content)}const a=i(null);function c(){const e=new BMapGL.Map("container"),o=new BMapGL.Point(113.942651,22.53945);e.centerAndZoom(o,12),e.enableScrollWheelZoom(!0),a.value=new BMapGL.Label("\u6570\u636E\u53EF\u89C6\u5316 - \u6570\u636E\u53EF\u89C6\u5316",{position:o,offset:new BMapGL.Size(-100,20)}),a.value.setStyle({width:"220px",height:"50px",padding:"20px",color:"#07689f",fontSize:"20px",background:"#b9d7ea",border:"10px solid #8c82fc"}),a.value.addEventListener("click",n),e.addOverlay(a.value)}return l(()=>{c(),s.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Layer/DrawLabel.vue")}),p(()=>{a.value.removeEventListener("click",n)}),(e,o)=>(d(),_("div",h,L))}};var S=m(w,[["__scopeId","data-v-32f62822"]]);export{S as default};