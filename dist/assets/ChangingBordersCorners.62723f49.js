import{C as s,A as a,f as r,o as e,g as i}from"./vendor.02edd428.js";import{f as n}from"./fabric.566d3038.js";const o=[i("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1)],t={setup(i){const t=s();return a((()=>{t.commit("setComponentPath","src/views/FabricJS/Basic/pages/ChangingBordersCorners/ChangingBordersCorners.vue"),function(){let s=new n.fabric.Canvas("canvas"),a=new n.fabric.Circle({left:100,top:100,fill:"#6eb6ff",radius:50});a.hasBorders=!1;let r=new n.fabric.Circle({left:300,top:100,fill:"#fb929e",radius:50});r.hasControls=!1,s.add(a,r)}()})),(s,a)=>(e(),r("div",null,o))}};export{t as default};