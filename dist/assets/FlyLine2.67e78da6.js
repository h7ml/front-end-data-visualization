import{A as g,C as v,o as h,e as C,s as L,v as f,f as B}from"./vendor.72e7bd49.js";import{_ as x}from"./index.cc1e433d.js";const M=s=>(L("data-v-47c29872"),s=s(),f(),s),w={class:"map__x"},I=M(()=>B("div",{id:"map_container"},null,-1)),P=[I],S={setup(s){const d=g();function y(){const e=mapv.utilCityCenter.getCenterByCityName("\u4F5B\u5C71");return initMap({tilt:0,center:[e.lng,e.lat],zoom:5,style:purpleStyle})}function u(){let e=[],t=["\u5317\u4EAC","\u5929\u6D25","\u4E0A\u6D77","\u91CD\u5E86","\u77F3\u5BB6\u5E84","\u592A\u539F","\u547C\u548C\u6D69\u7279","\u54C8\u5C14\u6EE8","\u957F\u6625","\u6C88\u9633","\u6D4E\u5357","\u5357\u4EAC","\u5408\u80A5","\u676D\u5DDE","\u5357\u660C","\u798F\u5DDE","\u90D1\u5DDE","\u6B66\u6C49","\u957F\u6C99","\u5E7F\u5DDE","\u5357\u5B81","\u897F\u5B89","\u94F6\u5DDD","\u5170\u5DDE","\u897F\u5B81","\u4E4C\u9C81\u6728\u9F50","\u6210\u90FD","\u8D35\u9633","\u6606\u660E","\u62C9\u8428","\u6D77\u53E3"],i=mapv.utilCityCenter.getCenterByCityName("\u4F5B\u5C71"),o=[{x:i.lng,y:i.lat}],r=[{source:0,target:0}],m=500;for(let a=0;a<m;a++){let n=mapv.utilCityCenter.getCenterByCityName(t[parseInt(t.length*Math.random())]);o.push({x:n.lng-5+Math.random()*10,y:n.lat-5+Math.random()*10}),r.push({source:a+1,target:0})}let p=mapv.utilForceEdgeBundling().nodes(o).edges(r)();for(let a=0;a<p.length;a++){let n=p[a],c=[];for(let l=0;l<n.length;l++)c.push([n[l].x,n[l].y]);e.push({geometry:{type:"LineString",coordinates:c}})}return e}function _(e,t){const i=new mapvgl.View({map:e}),o=new mapvgl.LineLayer({color:"rgba(55, 50, 250, 0.3)",blend:"lighter",width:2});i.addLayer(o),o.setData(t);let r=new mapvgl.LinePointLayer({size:3,speed:10,color:"rgba(255, 255, 0, 0.6)",animationType:mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH,shapeType:mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE,blend:"lighter"});i.addLayer(r),r.setData(t)}return v(()=>{const e=y(),t=u();_(e,t),d.commit("setComponentPath","src/views/BaiduMap/Basic/pages/FlyLine/FlyLine2.vue")}),(e,t)=>(h(),C("div",w,P))}};var N=x(S,[["__scopeId","data-v-47c29872"]]);export{N as default};
