import{A as S,C as k,r as H,o as W,e as B,f as a,a as o,w as d,B as I,s as N,v as V,k as v}from"./vendor.72e7bd49.js";import{f as e}from"./fabric.63a424fe.js";import{_ as j}from"./index.cc1e433d.js";const n=i=>(N("data-v-840e8a54"),i=i(),V(),i),z={class:"box"},$=I('<div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>1\u3001\u9ED8\u8BA4\u5BBD\u9AD8</div><canvas id="canvas1" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div><div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>2\u3001\u5728\u5143\u7D20\u4E0A\u8BBE\u7F6E</div><canvas width="200" height="200" id="canvas2" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div><div class="canvas_x" data-v-840e8a54><div data-v-840e8a54>3\u3001\u521D\u59CB\u5316\u65F6\u8BBE\u7F6E</div><canvas id="canvas3" style="border:1px solid #ccc;" data-v-840e8a54></canvas></div>',3),D={class:"canvas_x"},A=n(()=>a("div",null,"4\u3001\u8BBE\u7F6E\u5BBD\u5EA6",-1)),E={style:{"margin-bottom":"10px"}},F=v("\u8BBE\u7F6E\u5BBD\u5EA6"),J=n(()=>a("canvas",{width:"100",height:"100",id:"canvas4",style:{border:"1px solid #ccc"}},null,-1)),M={class:"canvas_x"},P=n(()=>a("div",null,"5\u3001\u8BBE\u7F6E\u9AD8\u5EA6",-1)),T={style:{"margin-bottom":"10px"}},q=v("\u8BBE\u7F6E\u9AD8\u5EA6"),G=n(()=>a("canvas",{width:"100",height:"100",id:"canvas5",style:{border:"1px solid #ccc"}},null,-1)),K={class:"canvas_x"},L=n(()=>a("div",null,"6\u3001\u4E00\u952E\u8BBE\u7F6E\u5BBD\u9AD8",-1)),O={style:{"margin-bottom":"10px"}},Q=v("\u5BBD200, \u9AD8300"),R=n(()=>a("canvas",{width:"100",height:"100",id:"canvas6",style:{border:"1px solid #ccc"}},null,-1)),U={setup(i){const u=S();function p(){new e.fabric.Canvas("canvas1")}function f(){new e.fabric.Canvas("canvas2")}function m(){new e.fabric.Canvas("canvas3",{width:300,height:200})}let _=null;function x(){_=new e.fabric.Canvas("canvas4")}function b(t){_.setWidth(t)}let l=null;function C(){l=new e.fabric.Canvas("canvas5")}function w(t){l.setHeight(t)}let r=null;function g(){r=new e.fabric.Canvas("canvas6")}function y(t,s){r.setDimensions({width:t,height:s})}return k(()=>{u.commit("setComponentPath","src/views/FabricJS/Basic/pages/SetCanvasWH/SetCanvasWH.vue"),p(),f(),m(),x(),C(),g()}),(t,s)=>{const c=H("el-button");return W(),B("div",z,[$,a("div",D,[A,a("div",E,[o(c,{size:"mini",onClick:s[0]||(s[0]=h=>b(200))},{default:d(()=>[F]),_:1})]),J]),a("div",M,[P,a("div",T,[o(c,{size:"mini",onClick:s[1]||(s[1]=h=>w(300))},{default:d(()=>[q]),_:1})]),G]),a("div",K,[L,a("div",O,[o(c,{size:"mini",onClick:s[2]||(s[2]=h=>y(200,300))},{default:d(()=>[Q]),_:1})]),R])])}}};var aa=j(U,[["__scopeId","data-v-840e8a54"]]);export{aa as default};
