import{p as t,b as a,A as n,d as e,C as o,f as i,o as s,F as r,g as l}from"./vendor.ab550d3c.js";import{T as u}from"./TileImage.6719d572.js";import{O as c}from"./OSM.b07225a9.js";import{bD as d,bE as p,bF as _,M as h,bG as v,V as f}from"./ol.bbcea228.js";import"./XYZ.4ee3e030.js";var g,m=(g=function(t,a){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])})(t,a)},function(t,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function n(){this.constructor=t}g(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}),w=function(t){function a(a){var n=this,e=a||{};return(n=t.call(this,e)||this).condition_=e.condition?e.condition:d,n.lastAngle_=void 0,n.lastMagnitude_=void 0,n.lastScaleDelta_=0,n.duration_=void 0!==e.duration?e.duration:400,n}return m(a,t),a.prototype.handleDragEvent=function(t){if(p(t)){var a=t.map,n=a.getSize(),e=t.pixel,o=e[0]-n[0]/2,i=n[1]/2-e[1],s=Math.atan2(i,o),r=Math.sqrt(o*o+i*i),l=a.getView();if(void 0!==this.lastAngle_){var u=this.lastAngle_-s;l.adjustRotationInternal(u)}this.lastAngle_=s,void 0!==this.lastMagnitude_&&l.adjustResolutionInternal(this.lastMagnitude_/r),void 0!==this.lastMagnitude_&&(this.lastScaleDelta_=this.lastMagnitude_/r),this.lastMagnitude_=r}},a.prototype.handleUpEvent=function(t){if(!p(t))return!0;var a=t.map.getView(),n=this.lastScaleDelta_>1?1:-1;return a.endInteraction(this.duration_,n),this.lastScaleDelta_=0,!1},a.prototype.handleDownEvent=function(t){return!!p(t)&&(!!this.condition_(t)&&(t.map.getView().beginInteraction(),this.lastAngle_=void 0,this.lastMagnitude_=void 0,!0))},a}(_);t("data-v-59d49934");const M=l("div",{id:"map",class:"map__x"},null,-1),y=l("div",null,"按住Shift并使用鼠标拖拽可以旋转、缩放地图",-1);a();const b={setup(t){const a=n(),l=e(null);return o((()=>{a.commit("setComponentPath","src/views/OpenLayers/Basic/pages/MouseRotationMap/MouseRotationMap.vue"),l.value=new h({target:"map",interactions:v().extend([new w]),layers:[new u({source:new c})],view:new f({projection:"EPSG:4326",center:[114.064839,22.548857],minZoom:10,zoom:12})})})),(t,a)=>(s(),i(r,null,[M,y],64))},__scopeId:"data-v-59d49934"};export{b as default};
