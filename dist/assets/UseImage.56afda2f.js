import{l as a}from"./logo.652bbcc2.js";import{p as s,b as e,A as o,C as t,f as c,o as n,g as l}from"./vendor.da7f5a2b.js";import{f as i}from"./fabric.630692b0.js";s("data-v-f5b7faa4");const d=[l("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),l("img",{src:a,id:"logo"},null,-1)];e();const r={setup(s){const e=o();return t((()=>{e.commit("setComponentPath","src/views/FabricJS/Basic/pages/UseImage/UseImage.vue"),function(){let s=new i.fabric.Canvas("canvas"),e=document.getElementById("logo");console.log(e),e.onload=()=>{let a=new i.fabric.Image(e,{left:100,top:100,width:200,height:200,angle:50});s.add(a)},i.fabric.Image.fromURL(a,(a=>{a.scale(.5),s.add(a)}))}()})),(a,s)=>(n(),c("div",null,d))},__scopeId:"data-v-f5b7faa4"};export{r as default};
