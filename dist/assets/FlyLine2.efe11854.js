import{q as e,s as t,y as a,b as n,o as r,i as l}from"./vendor.e18d4800.js";e("data-v-a49a66b6");const i={class:"map__x"},o=[l("div",{id:"map_container"},null,-1)];t();const s={setup:e=>(a((()=>{!function(e,t){const a=new mapvgl.View({map:e}),n=new mapvgl.LineLayer({color:"rgba(55, 50, 250, 0.3)",blend:"lighter",width:2});a.addLayer(n),n.setData(t);let r=new mapvgl.LinePointLayer({size:3,speed:10,color:"rgba(255, 255, 0, 0.6)",animationType:mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH,shapeType:mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE,blend:"lighter"});a.addLayer(r),r.setData(t)}(function(){const e=mapv.utilCityCenter.getCenterByCityName("佛山");return initMap({tilt:0,center:[e.lng,e.lat],zoom:5,style:purpleStyle})}(),function(){let e=[],t=["北京","天津","上海","重庆","石家庄","太原","呼和浩特","哈尔滨","长春","沈阳","济南","南京","合肥","杭州","南昌","福州","郑州","武汉","长沙","广州","南宁","西安","银川","兰州","西宁","乌鲁木齐","成都","贵阳","昆明","拉萨","海口"],a=mapv.utilCityCenter.getCenterByCityName("佛山"),n=[{x:a.lng,y:a.lat}],r=[{source:0,target:0}];for(let i=0;i<500;i++){let e=mapv.utilCityCenter.getCenterByCityName(t[parseInt(t.length*Math.random())]);n.push({x:e.lng-5+10*Math.random(),y:e.lat-5+10*Math.random()}),r.push({source:i+1,target:0})}let l=mapv.utilForceEdgeBundling().nodes(n).edges(r)();for(let i=0;i<l.length;i++){let t=l[i],a=[];for(let e=0;e<t.length;e++)a.push([t[e].x,t[e].y]);e.push({geometry:{type:"LineString",coordinates:a}})}return e}())})),(e,t)=>(r(),n("div",i,o))),__scopeId:"data-v-a49a66b6"};export{s as default};
