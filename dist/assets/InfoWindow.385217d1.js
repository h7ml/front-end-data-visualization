import{q as e,s as a,B as n,k as o,C as l,I as t,b as s,o as i,i as c}from"./vendor.b2164b67.js";import{l as u}from"./logo.f549c8cc.js";e("data-v-0069ad77");const v={class:"map__x"},d=[c("div",{id:"container"},null,-1)];a();const r={setup(e){const a=n(),c=o(null),r=o(null),p=o(null);function w(){const e=new BMapGL.InfoWindow("内容：数据可视化",{width:250,height:100,title:"标题标题",offset:new BMapGL.Size(0,-20)});c.value.openInfoWindow(e,r.value)}return l((()=>{!function(){c.value=new BMapGL.Map("container"),r.value=new BMapGL.Point(113.298378,23.20661),c.value.centerAndZoom(r.value,18),c.value.enableScrollWheelZoom(!0);const e=new BMapGL.Icon(u,new BMapGL.Size(60,60));p.value=new BMapGL.Marker(r.value,{icon:e}),p.value.addEventListener("click",w),c.value.addOverlay(p.value)}(),a.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Layer/InfoWindow.vue")})),t((()=>{p.value.removeEventListener("click",w)})),(e,a)=>(i(),s("div",v,d))},__scopeId:"data-v-0069ad77"};export{r as default};
