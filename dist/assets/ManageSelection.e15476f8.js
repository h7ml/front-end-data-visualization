import{C as p,A as _,r as v,o as m,e as w,f as l,a as i,w as a,k as o}from"./vendor.ab263734.js";import{f as c}from"./fabric.c200722d.js";const A=o("\u5EFA\u7EC4"),j=o("\u53D6\u6D88\u7EC4"),O=o("\u5168\u9009"),C=o("\u53D6\u6D88\u9009\u4E2D"),R=o("\u6DFB\u52A0\u66F4\u591A\u56FE\u5F62"),M=l("canvas",{id:"canvas",width:"600",height:"600",style:{border:"1px solid #ccc"}},null,-1),k=l("div",null,[o("\u4EE3\u7801\u51FA\u5904 "),l("a",{href:"http://fabricjs.com/manage-selection",target:"view_window"},"http://fabricjs.com/manage-selection")],-1),q={setup(S){const s=p();let e=null;function d(){e=new c.fabric.Canvas("canvas");const n=new c.fabric.Rect({top:100,left:0,width:80,height:50,fill:"red"}),r=new c.fabric.Rect({top:0,left:100,width:50,height:70,fill:"blue"}),t=new c.fabric.Rect({top:100,left:100,width:60,height:60,fill:"green"});c.fabric.Object.prototype.transparentCorners=!1,e.add(n,r,t)}function h(){!e.getActiveObject()||(console.log("\u5F53\u524D\u9009\u4E2D\u7684\u72B6\u6001",e.getActiveObject().type),e.getActiveObject().type==="activeSelection"&&(e.getActiveObject().toGroup(),e.requestRenderAll()))}function f(){!e.getActiveObject()||(console.log("\u5F53\u524D\u9009\u4E2D\u7684\u72B6\u6001",e.getActiveObject().type),e.getActiveObject().type==="group"&&(e.getActiveObject().toActiveSelection(),e.requestRenderAll()))}function u(){e.discardActiveObject();const n=new c.fabric.ActiveSelection(e.getObjects(),{canvas:e});e.setActiveObject(n),e.requestRenderAll()}function b(){const n=new c.fabric.Rect({top:Math.random()*e.height,left:Math.random()*e.width,width:80,height:50,fill:"red"}),r=new c.fabric.Rect({top:Math.random()*e.height,left:Math.random()*e.width,width:50,height:70,fill:"blue"}),t=new c.fabric.Rect({top:Math.random()*e.height,left:Math.random()*e.width,width:60,height:60,fill:"green"});e.add(n,r,t)}function g(){e.discardActiveObject(),e.requestRenderAll()}return _(()=>{s.commit("setComponentPath","src/views/FabricJS/Demo/pages/ManageSelection/ManageSelection.vue"),d()}),(n,r)=>{const t=v("el-button");return m(),w("div",null,[l("div",null,[i(t,{onClick:h},{default:a(()=>[A]),_:1}),i(t,{onClick:f},{default:a(()=>[j]),_:1}),i(t,{onClick:u},{default:a(()=>[O]),_:1}),i(t,{onClick:g},{default:a(()=>[C]),_:1}),i(t,{onClick:b},{default:a(()=>[R]),_:1})]),M,k])}}};export{q as default};