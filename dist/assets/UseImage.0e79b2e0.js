import{l as a}from"./logo.652bbcc2.js";import{p as e,b as s,A as o,C as t,f as c,o as n,g as l}from"./vendor.ec101613.js";import{f as i}from"./fabric.699e1af5.js";e("data-v-f5b7faa4");const r=[l("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),l("img",{src:a,id:"logo"},null,-1)];s();const d={setup(e){const s=o();return t((()=>{s.commit("setComponentPath","src/views/FabricJS/Basic/pages/UseImage/UseImage.vue"),function(){let e=new i.fabric.Canvas("canvas"),s=document.getElementById("logo");console.log(s),s.onload=()=>{let a=new i.fabric.Image(s,{left:100,top:100,width:200,height:200,angle:50});e.add(a)},i.fabric.Image.fromURL(a,(a=>{a.scale(.5),e.add(a)}))}()})),(a,e)=>(n(),c("div",null,r))},__scopeId:"data-v-f5b7faa4"};export{d as default};
