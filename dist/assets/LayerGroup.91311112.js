import{q as e,s as i,B as t,H as s,k as o,C as n,b as l,i as a,J as r,M as p,p as c,K as u,F as b,h as d,o as v}from"./vendor.2e2c44b9.js";import{Z as m,af as h,d as y,ag as f,ah as O,A as g,cd as S,M as _,V as J}from"./ol.fd4c2e5b.js";import{e as N,c as x,f as j,a as w,T as E}from"./TileImage.e8088637.js";import{O as z}from"./OSM.1b463a36.js";import{j as L}from"./net.7b649b59.js";import"./XYZ.1fe87975.js";var R,T=(R=function(e,i){return(R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])})(e,i)},function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function t(){this.constructor=e}R(e,i),e.prototype=null===i?Object.create(i):(t.prototype=i.prototype,new t)}),k=function(e){function i(i){var t=e.call(this,{attributions:i.attributions,cacheSize:i.cacheSize,crossOrigin:i.crossOrigin,imageSmoothing:i.imageSmoothing,projection:m("EPSG:3857"),reprojectionErrorThreshold:i.reprojectionErrorThreshold,state:h.LOADING,tileLoadFunction:i.tileLoadFunction,wrapX:void 0===i.wrapX||i.wrapX,transition:i.transition,zDirection:i.zDirection})||this;if(t.tileJSON_=null,t.tileSize_=i.tileSize,i.url)if(i.jsonp)L(i.url,t.handleTileJSONResponse.bind(t),t.handleTileJSONError.bind(t));else{var s=new XMLHttpRequest;s.addEventListener("load",t.onXHRLoad_.bind(t)),s.addEventListener("error",t.onXHRError_.bind(t)),s.open("GET",i.url),s.send()}else i.tileJSON?t.handleTileJSONResponse(i.tileJSON):y(!1,51);return t}return T(i,e),i.prototype.onXHRLoad_=function(e){var i=e.target;if(!i.status||i.status>=200&&i.status<300){var t=void 0;try{t=JSON.parse(i.responseText)}catch(s){return void this.handleTileJSONError()}this.handleTileJSONResponse(t)}else this.handleTileJSONError()},i.prototype.onXHRError_=function(e){this.handleTileJSONError()},i.prototype.getTileJSON=function(){return this.tileJSON_},i.prototype.handleTileJSONResponse=function(e){var i,t=m("EPSG:4326"),s=this.getProjection();if(void 0!==e.bounds){var o=f(t,s);i=O(e.bounds,o)}var n=N(s),l=e.minzoom||0,a=e.maxzoom||22,r=x({extent:n,maxZoom:a,minZoom:l,tileSize:this.tileSize_});if(this.tileGrid=r,this.tileUrlFunction=j(e.tiles,r),void 0!==e.attribution&&!this.getAttributions()){var p=void 0!==i?i:n;this.setAttributions((function(i){return g(p,i.extent)?[e.attribution]:null}))}this.tileJSON_=e,this.setState(h.READY)},i.prototype.handleTileJSONError=function(){this.setState(h.ERROR)},i}(w);e("data-v-9beefbc4");const C=a("div",{id:"map",class:"map__x"},null,-1),V=a("span",null,"OSM 层",-1),X={id:"layer0"},G={class:"checkbox",for:"visible0"},M=d("可见 "),Y=a("label",null,"透明度",-1),I=a("span",null,"图层组",-1),U={id:"layer1"},H={class:"checkbox",for:"visible1"},F=d("可见 "),P=a("label",null,"透明度",-1),A=a("span",null,"食物危机主题图层",-1),D={id:"layer10"},Z={class:"checkbox",for:"visible10"},Q=d("可见 "),q=a("label",null,"透明度",-1),B=a("span",null,"世界陆地边界图",-1),W={id:"layer11"},K={class:"checkbox",for:"visible11"},$=d("可见 "),ee=a("label",null,"透明度",-1);i();const ie={setup(e){const i=t(),d=s({visible0:!0,visible0Opacity:100,visible1:!0,visible1Opacity:100,visible10:!0,visible10Opacity:100,visible11:!0,visible11Opacity:100});function m(e,i){y(f.value,i).setVisible(d[e])}function h(e,i){y(f.value,i).setOpacity(parseFloat(d[e]))}function y(e,i){let t=e.getLayers();for(let s=0;s<t.getLength();s++){if(t.item(s).get("name")===i)return t.item(s);if(t.item(s)instanceof S)return y(t.item(s),i)}}const f=o(null);return n((()=>{i.commit("setComponentPath","src/views/OpenLayers/Basic/pages/LayerGroup/LayerGroup.vue"),f.value=new _({target:"map",layers:[new E({name:"baseMap",source:new z}),new S({name:"group",layers:[new E({name:"food",source:new k({url:"https://api.tiles.mapbox.com/v4/mapbox.20110804-hoa-foodinsecurity-3month.json?securee&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})}),new E({name:"land",source:new k({url:"https://api.tiles.mapbox.com/v4/mapbox.world-borders-light.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q",crossOrigin:"anonymous"})})]})],view:new J({projection:"EPSG:4326",center:[37.4057,8.81566],zoom:5})})})),(e,i)=>(v(),l(b,null,[C,a("ul",null,[a("li",null,[V,a("fieldset",X,[a("label",G,[r(a("input",{id:"visible0",class:"visible",type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=e=>c(d).visible0=e),onChange:i[1]||(i[1]=e=>m("visible0","baseMap"))},null,544),[[p,c(d).visible0]]),M]),Y,r(a("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[2]||(i[2]=e=>c(d).visible0Opacity=e),onChange:i[3]||(i[3]=e=>h("visible0Opacity","baseMap"))},null,544),[[u,c(d).visible0Opacity]])])]),a("li",null,[I,a("fieldset",U,[a("label",H,[r(a("input",{id:"visible1",class:"visible",type:"checkbox","onUpdate:modelValue":i[4]||(i[4]=e=>c(d).visible1=e),onChange:i[5]||(i[5]=e=>m("visible1","group"))},null,544),[[p,c(d).visible1]]),F]),P,r(a("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[6]||(i[6]=e=>c(d).visible1Opacity=e),onChange:i[7]||(i[7]=e=>h("visible1Opacity","group"))},null,544),[[u,c(d).visible1Opacity]])]),a("ul",null,[a("li",null,[A,a("fieldset",D,[a("label",Z,[r(a("input",{id:"visible10",class:"visible",type:"checkbox","onUpdate:modelValue":i[8]||(i[8]=e=>c(d).visible10=e),onChange:i[9]||(i[9]=e=>m("visible10","food"))},null,544),[[p,c(d).visible10]]),Q]),q,r(a("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[10]||(i[10]=e=>c(d).visible10Opacity=e),onChange:i[11]||(i[11]=e=>h("visible10Opacity","food"))},null,544),[[u,c(d).visible10Opacity]])])]),a("li",null,[B,a("fieldset",W,[a("label",K,[r(a("input",{id:"visible11",class:"visible",type:"checkbox","onUpdate:modelValue":i[12]||(i[12]=e=>c(d).visible11=e),onChange:i[13]||(i[13]=e=>m("visible11","land"))},null,544),[[p,c(d).visible11]]),$]),ee,r(a("input",{class:"opacity",type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":i[14]||(i[14]=e=>c(d).visible11Opacity=e),onChange:i[15]||(i[15]=e=>h("visible11Opacity","land"))},null,544),[[u,c(d).visible11Opacity]])])])])])])],64))},__scopeId:"data-v-9beefbc4"};export{ie as default};