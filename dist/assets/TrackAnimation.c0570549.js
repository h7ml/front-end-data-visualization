import{q as a,s as n,B as e,C as t,b as o,o as i,i as s}from"./vendor.1e7a51da.js";a("data-v-108ebdb4");const c={class:"map__x"},d=[s("div",{id:"container"},null,-1)];n();const p={setup(a){const n=e();return t((()=>{!function(){const a=new BMapGL.Map("container"),n=new BMapGL.Point(116.2967611,40.047363);a.centerAndZoom(n,15),a.enableScrollWheelZoom(!0),a.setHeading(0);let e=[new BMapGL.Point(116.418038,39.91979),new BMapGL.Point(116.418267,40.0592479),new BMapGL.Point(116.307899,40.057038)];const t=new BMapGL.Polyline(e);new BMapGLLib.TrackAnimation(a,t,{delay:1e3,duration:2e4,titl:30,overallView:!0}).start()}(),n.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Animation/TrackAnimation.vue")})),(a,n)=>(i(),o("div",c,d))},__scopeId:"data-v-108ebdb4"};export{p as default};