import{A as a,d as e,C as s,f as n,g as t,t as o,o as i}from"./vendor.ab550d3c.js";import{f as l}from"./fabric.7a42a7e0.js";const c=t("div",null,"点击画布",-1),u=t("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),r={setup(r){const v=a(),d=e(""),f=e("");return s((()=>{v.commit("setComponentPath","src/views/FabricJS/Basic/pages/MousePoint/MousePoint.vue"),function(){let a=new l.fabric.Canvas("canvas");a.on("mouse:down",(e=>{d.value=`x: ${e.e.clientX}, y: ${e.e.clientY}`;const s=a.getPointer(e.e);f.value=`x: ${s.x}, y: ${s.y}`}))}()})),(a,e)=>(i(),n("div",null,[c,u,t("div",null,"在页面的坐标："+o(d.value),1),t("div",null,"在画布的坐标："+o(f.value),1)]))}};export{r as default};
