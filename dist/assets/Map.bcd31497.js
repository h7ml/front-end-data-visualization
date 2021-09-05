import{B as e,c as t,b as o,m as a,a as n,d as r,f as i,r as l,g as s,i as p}from"./index.1df546ee.js";import{k as m,B as f,b as y,i as d,o as c}from"./vendor.ce0b2847.js";function u(e,t){this._bmap=e,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=t,this._projection=new BMap.MercatorProjection}function h(e,t){return t=t||[0,0],a([0,1],(function(o){var a=t[o],n=e[o]/2,r=[],i=[];return r[o]=a-n,i[o]=a+n,r[1-o]=i[1-o]=t[1-o],Math.abs(this.dataToPoint(r)[o]-this.dataToPoint(i)[o])}),this)}var v;function b(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}u.prototype.dimensions=["lng","lat"],u.prototype.setZoom=function(e){this._zoom=e},u.prototype.setCenter=function(e){this._center=this._projection.lngLatToPoint(new BMap.Point(e[0],e[1]))},u.prototype.setMapOffset=function(e){this._mapOffset=e},u.prototype.getBMap=function(){return this._bmap},u.prototype.dataToPoint=function(e){var t=new BMap.Point(e[0],e[1]),o=this._bmap.pointToOverlayPixel(t),a=this._mapOffset;return[o.x-a[0],o.y-a[1]]},u.prototype.pointToData=function(e){var t=this._mapOffset;return[(e=this._bmap.overlayPixelToPoint({x:e[0]+t[0],y:e[1]+t[1]})).lng,e.lat]},u.prototype.getViewRect=function(){var t=this._api;return new e(0,0,t.getWidth(),t.getHeight())},u.prototype.getRoamTransform=function(){return t()},u.prototype.prepareCustoms=function(){var e=this.getViewRect();return{coordSys:{type:"bmap",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:o(this.dataToPoint,this),size:o(h,this)}}},u.dimensions=u.prototype.dimensions,u.create=function(e,t){var o,a=t.getDom();e.eachComponent("bmap",(function(e){var r,i=t.getZr().painter,l=i.getViewportRoot();if("undefined"==typeof BMap)throw new Error("BMap api is not loaded");if(v=v||function(){function e(e){this._root=e}return e.prototype=new BMap.Overlay,e.prototype.initialize=function(e){return e.getPanes().labelPane.appendChild(this._root),this._root},e.prototype.draw=function(){},e}(),o)throw new Error("Only one bmap component can exist");if(!e.__bmap){var s=a.querySelector(".ec-extension-bmap");s&&(l.style.left="0px",l.style.top="0px",a.removeChild(s)),(s=document.createElement("div")).className="ec-extension-bmap",s.style.cssText="position:absolute;width:100%;height:100%",a.appendChild(s);var p=e.get("mapOptions");p&&delete(p=n(p)).mapType,r=e.__bmap=new BMap.Map(s,p);var m=new v(l);r.addOverlay(m),i.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}r=e.__bmap;var f=e.get("center"),y=e.get("zoom");if(f&&y){var d=r.getCenter(),c=r.getZoom();if(e.centerOrZoomChanged([d.lng,d.lat],c)){var h=new BMap.Point(f[0],f[1]);r.centerAndZoom(h,y)}}(o=new u(r,t)).setMapOffset(e.__mapOffset||[0,0]),o.setZoom(y),o.setCenter(f),e.coordinateSystem=o})),e.eachSeries((function(e){"bmap"===e.get("coordinateSystem")&&(e.coordinateSystem=o)}))},r({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(e,t){this.option.center=e,this.option.zoom=t},centerOrZoomChanged:function(e,t){var o,a,n=this.option;return o=e,a=n.center,!(o&&a&&o[0]===a[0]&&o[1]===a[1]&&t===n.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}}),i({type:"bmap",render:function(e,t,o){var a=!0,r=e.getBMap(),i=o.getZr().painter.getViewportRoot(),l=e.coordinateSystem,s=function(t,n){if(!a){var r=i.parentNode.parentNode.parentNode,s=[-parseInt(r.style.left,10)||0,-parseInt(r.style.top,10)||0],p=i.style,m=s[0]+"px",f=s[1]+"px";p.left!==m&&(p.left=m),p.top!==f&&(p.top=f),l.setMapOffset(s),e.__mapOffset=s,o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function p(){a||o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}r.removeEventListener("moving",this._oldMoveHandler),r.removeEventListener("moveend",this._oldMoveHandler),r.removeEventListener("zoomend",this._oldZoomEndHandler),r.addEventListener("moving",s),r.addEventListener("moveend",s),r.addEventListener("zoomend",p),this._oldMoveHandler=s,this._oldZoomEndHandler=p;var m=e.get("roam");m&&"scale"!==m?r.enableDragging():r.disableDragging(),m&&"move"!==m?(r.enableScrollWheelZoom(),r.enableDoubleClickZoom(),r.enablePinchToZoom()):(r.disableScrollWheelZoom(),r.disableDoubleClickZoom(),r.disablePinchToZoom());var f=e.__mapStyle,y=e.get("mapStyle")||{},d=JSON.stringify(y);JSON.stringify(f)!==d&&(b(y)||r.setMapStyle(n(y)),e.__mapStyle=JSON.parse(d));var c=e.__mapStyle2,u=e.get("mapStyleV2")||{},h=JSON.stringify(u);JSON.stringify(c)!==h&&(b(u)||r.setMapStyleV2(n(u)),e.__mapStyle2=JSON.parse(h)),a=!1}}),l("bmap",u),s({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(e,t){t.eachComponent("bmap",(function(e){var t=e.getBMap(),o=t.getCenter();e.setCenterAndZoom([o.lng,o.lat],t.getZoom())}))}));var g=[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}];const T={setup(e){const t=m(null),o={title:{text:"大标题",subtext:"小标题（有链接，点击跳转）",sublink:"https://mapv.baidu.com/gl/docs/CircleLayer.html",left:"center"},bmap:{key:"EcuCFchyeUS7tTG2De4AlsYos1Ky2FOC",center:[121.475941,31.222836],zoom:5,roam:!0,mapStyle:{styleJson:g}},tooltip:{},series:[{name:"销售额",type:"scatter",coordinateSystem:"bmap",data:[{name:"海门",value:[121.15,31.89,80]},{name:"南京",value:[118.78,32.04,100]}],encode:{value:2},itemStyle:{color:"purple"},symbolSize:function(e){return e[2]/10},label:{show:!1,color:"purple",position:"right",formatter:function(e){return`${e.data.name} - ${e.data.value[2]}`}},emphasis:{label:{show:!0}}},{name:"Top 2",type:"effectScatter",coordinateSystem:"bmap",data:[{name:"北京",value:[116.404269,39.913385,200]},{name:"上海",value:[121.475941,31.222836,200]}],symbolSize:function(e){return e[2]/10},encode:{value:2},label:{formatter:e=>`${e.data.name} - ${e.data.value[2]}`,position:"right",show:!0},hoverAnimation:!0,rippleEffect:{brushType:"stroke"},itemStyle:{color:"purple",shadowBlur:10,shadowColor:"#333"}}]};return f((()=>{p(t.value).setOption(o)})),(e,o)=>(c(),y("div",null,[d("div",{id:"chart",class:"chart",ref:t},null,512)]))},__scopeId:"data-v-b40c5f50"};export{T as default};