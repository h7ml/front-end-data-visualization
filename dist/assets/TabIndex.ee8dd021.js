import{q as a,s,B as e,k as n,C as o,b as t,o as l,F as i,i as p}from"./vendor.b2164b67.js";import{T as r}from"./TileImage.a866ab61.js";import{O as m}from"./OSM.fb350885.js";import{M as c,V as d}from"./ol.ecbd344a.js";import"./XYZ.727f5f3d.js";a("data-v-a9585912");const u=p("div",{tabindex:"2",id:"map",class:"map__x"},null,-1),b=p("div",{class:"explain"},[p("p",null,'通过给地图容器设置 tabindex="2" 来控制默认不会选中地图。'),p("p",null,"只有当鼠标点击地图时，才能进行缩放等操作。"),p("p",null,"如果没选中地图，即使在地图上滑动滚轮，也不会操作到地图。")],-1),v=p("div",{class:"occupied"},null,-1);s();const f={setup(a){const s=e(),p=n(null);return o((()=>{s.commit("setComponentPath","src/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue"),p.value=new c({target:"map",layers:[new r({source:new m})],view:new d({projection:"EPSG:4326",center:[113.120444,23.034742],zoom:12})})})),(a,s)=>(l(),t(i,null,[u,b,v],64))},__scopeId:"data-v-a9585912"};export{f as default};
