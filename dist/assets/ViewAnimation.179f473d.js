import{q as n,s as e,B as t,C as a,b as i,i as o,o as c}from"./vendor.b2164b67.js";n("data-v-c4182248");const r={class:"map__x"},l=o("div",{id:"container"},null,-1);e();const s={setup(n){const e=t();let s=null,d=null;const p=[{center:new BMapGL.Point(116.307092,40.054922),zoom:20,tilt:50,heading:0,percentage:0},{center:new BMapGL.Point(116.307631,40.055391),zoom:21,tilt:70,heading:0,percentage:.1},{center:new BMapGL.Point(116.306858,40.057887),zoom:21,tilt:70,heading:0,percentage:.25},{center:new BMapGL.Point(116.306858,40.057887),zoom:21,tilt:70,heading:-90,percentage:.35},{center:new BMapGL.Point(116.307904,40.058118),zoom:21,tilt:70,heading:-90,percentage:.45},{center:new BMapGL.Point(116.307904,40.058118),zoom:21,tilt:70,heading:-180,percentage:.55},{center:new BMapGL.Point(116.308902,40.055954),zoom:21,tilt:70,heading:-180,percentage:.75},{center:new BMapGL.Point(116.308902,40.055954),zoom:21,tilt:70,heading:-270,percentage:.85},{center:new BMapGL.Point(116.307779,40.055754),zoom:21,tilt:70,heading:-360,percentage:.95},{center:new BMapGL.Point(116.307092,40.054922),zoom:20,tilt:50,heading:-360,percentage:1}],m=new BMapGL.ViewAnimation(p,{delay:100,duration:1e4,interation:"INFINITE"});function g(){s.startViewAnimation(m)}function w(){s.cancelViewAnimation(m)}return m.addEventListener("animationstart",(()=>{console.log("start")})),m.addEventListener("animationiterations",(()=>{console.log("animationiterations")})),m.addEventListener("animationend",(()=>{console.log("animationend")})),m.addEventListener("animationcancel",(()=>{console.log("animationcancel")})),a((()=>{s=new BMapGL.Map("container"),d=new BMapGL.Point(116.404,39.915),s.centerAndZoom(d,20),s.enableScrollWheelZoom(!0),s.setTilt(50),s.setHeading(0),e.commit("setComponentPath","src/views/BaiduMap/Basic/pages/Animation/ViewAnimation.vue")})),(n,e)=>(c(),i("div",r,[l,o("button",{onClick:g},"start"),o("button",{onClick:w},"cancel")]))},__scopeId:"data-v-c4182248"};export{s as default};
