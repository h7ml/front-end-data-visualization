import{A as a,C as s,r as e,f as n,g as t,a as r,w as o,o as i,l as c}from"./vendor.ab550d3c.js";import{f as l}from"./fabric.7a42a7e0.js";import{b as f}from"./gwen-spider-verse-ah.f8f635e7.js";const u={class:"btn-x"},b=c("平移画布"),d=t("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),m={setup(c){const m=a();let p=null;function v(){p.absolutePan(new l.fabric.Point(50,100))}return s((()=>{m.commit("setComponentPath","src/views/FabricJS/Basic/pages/AbsolutePan/AbsolutePan.vue"),p=new l.fabric.Canvas("canvas"),l.fabric.Image.fromURL(f,(a=>{p.setBackgroundImage(a,p.renderAll.bind(p))}))})),(a,s)=>{const c=e("el-button");return i(),n("div",null,[t("div",u,[r(c,{onClick:v,type:"primary"},{default:o((()=>[b])),_:1})]),d])}}};export{m as default};
