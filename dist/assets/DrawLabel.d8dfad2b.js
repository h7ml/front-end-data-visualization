import{q as e,s as a,k as n,y as t,G as o,b as s,i as l,o as i}from"./vendor.e18d4800.js";e("data-v-af8fa9f2");const c={class:"map__x"};a();const d={setup(e){function a(e){alert(e.target.content)}const d=n(null);return t((()=>{!function(){const e=new BMapGL.Map("container"),n=new BMapGL.Point(113.942651,22.53945);e.centerAndZoom(n,12),e.enableScrollWheelZoom(!0),d.value=new BMapGL.Label("数据可视化 - 数据可视化",{position:n,offset:new BMapGL.Size(-100,20)}),d.value.setStyle({width:"220px",height:"50px",padding:"20px",color:"#07689f",fontSize:"20px",background:"#b9d7ea",border:"10px solid #8c82fc"}),d.value.addEventListener("click",a),e.addOverlay(d.value)}()})),o((()=>{d.value.removeEventListener("click",a)})),(e,a)=>(i(),s("div",c,[l("div",{id:"container",ref:mapDom},null,512)]))},__scopeId:"data-v-af8fa9f2"};export{d as default};
