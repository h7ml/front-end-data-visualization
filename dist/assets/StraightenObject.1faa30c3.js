import{A as e,C as t,r as a,f as n,g as s,a as l,w as r,o as i,l as o}from"./vendor.ab550d3c.js";import{f as c}from"./fabric.7a42a7e0.js";const d={style:{"margin-bottom":"10px"}},u=o("摆正元素"),f=o("摆正元素"),g=s("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),h={setup(o){const h=e();let p=null,b=null;function m(){b.straighten(),p.renderAll()}function v(){b.fxStraighten({onChange(){p.renderAll()},onComplete(){p.renderAll()}})}return t((()=>{h.commit("setComponentPath","src/views/FabricJS/Basic/pages/StraightenObject/StraightenObject.vue"),p=new c.fabric.Canvas("canvas"),b=new c.fabric.Triangle({top:100,left:100,width:80,height:100,fill:"blue",angle:30}),p.add(b)})),(e,t)=>{const o=a("el-button");return i(),n("div",null,[s("div",d,[l(o,{onClick:m,type:"success"},{default:r((()=>[u])),_:1}),l(o,{onClick:v,type:"warning"},{default:r((()=>[f])),_:1})]),g])}}};export{h as default};
