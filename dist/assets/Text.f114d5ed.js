import{C as c,A as n,o as i,e as r,f as l}from"./vendor.ab263734.js";import{f as a}from"./fabric.c200722d.js";const d=l("canvas",{width:"600",height:"600",id:"canvas",style:{border:"1px solid #ccc"}},null,-1),f=[d],_={setup(m){const o=c();function s(){let e=new a.fabric.Canvas("canvas"),t=new a.fabric.Text("Hello World!",{left:100,top:100,fontFamily:"Comic Sans",fontSize:20,fill:"red"});e.add(t)}return n(()=>{o.commit("setComponentPath","src/views/FabricJS/Basic/pages/Text/Text.vue"),s()}),(e,t)=>(i(),r("div",null,f))}};export{_ as default};