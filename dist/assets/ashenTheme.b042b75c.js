import{B as e,c as t,b as o,m as n,a,d as r,f as i,r as p,g as l}from"./index.201f4293.js";function s(e,t){this._bmap=e,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=t,this._projection=new BMap.MercatorProjection}function f(e,t){return t=t||[0,0],n([0,1],(function(o){var n=t[o],a=e[o]/2,r=[],i=[];return r[o]=n-a,i[o]=n+a,r[1-o]=i[1-o]=t[1-o],Math.abs(this.dataToPoint(r)[o]-this.dataToPoint(i)[o])}),this)}var m;function y(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}s.prototype.dimensions=["lng","lat"],s.prototype.setZoom=function(e){this._zoom=e},s.prototype.setCenter=function(e){this._center=this._projection.lngLatToPoint(new BMap.Point(e[0],e[1]))},s.prototype.setMapOffset=function(e){this._mapOffset=e},s.prototype.getBMap=function(){return this._bmap},s.prototype.dataToPoint=function(e){var t=new BMap.Point(e[0],e[1]),o=this._bmap.pointToOverlayPixel(t),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},s.prototype.pointToData=function(e){var t=this._mapOffset;return[(e=this._bmap.overlayPixelToPoint({x:e[0]+t[0],y:e[1]+t[1]})).lng,e.lat]},s.prototype.getViewRect=function(){var t=this._api;return new e(0,0,t.getWidth(),t.getHeight())},s.prototype.getRoamTransform=function(){return t()},s.prototype.prepareCustoms=function(){var e=this.getViewRect();return{coordSys:{type:"bmap",x:e.x,y:e.y,width:e.width,height:e.height},api:{coord:o(this.dataToPoint,this),size:o(f,this)}}},s.dimensions=s.prototype.dimensions,s.create=function(e,t){var o,n=t.getDom();e.eachComponent("bmap",(function(e){var r,i=t.getZr().painter,p=i.getViewportRoot();if("undefined"==typeof BMap)throw new Error("BMap api is not loaded");if(m=m||function(){function e(e){this._root=e}return e.prototype=new BMap.Overlay,e.prototype.initialize=function(e){return e.getPanes().labelPane.appendChild(this._root),this._root},e.prototype.draw=function(){},e}(),o)throw new Error("Only one bmap component can exist");if(!e.__bmap){var l=n.querySelector(".ec-extension-bmap");l&&(p.style.left="0px",p.style.top="0px",n.removeChild(l)),(l=document.createElement("div")).className="ec-extension-bmap",l.style.cssText="position:absolute;width:100%;height:100%",n.appendChild(l);var f=e.get("mapOptions");f&&delete(f=a(f)).mapType,r=e.__bmap=new BMap.Map(l,f);var y=new m(p);r.addOverlay(y),i.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}r=e.__bmap;var d=e.get("center"),c=e.get("zoom");if(d&&c){var u=r.getCenter(),h=r.getZoom();if(e.centerOrZoomChanged([u.lng,u.lat],h)){var g=new BMap.Point(d[0],d[1]);r.centerAndZoom(g,c)}}(o=new s(r,t)).setMapOffset(e.__mapOffset||[0,0]),o.setZoom(c),o.setCenter(d),e.coordinateSystem=o})),e.eachSeries((function(e){"bmap"===e.get("coordinateSystem")&&(e.coordinateSystem=o)}))},r({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(e,t){this.option.center=e,this.option.zoom=t},centerOrZoomChanged:function(e,t){var o,n,a=this.option;return o=e,n=a.center,!(o&&n&&o[0]===n[0]&&o[1]===n[1]&&t===a.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}}),i({type:"bmap",render:function(e,t,o){var n=!0,r=e.getBMap(),i=o.getZr().painter.getViewportRoot(),p=e.coordinateSystem,l=function(t,a){if(!n){var r=i.parentNode.parentNode.parentNode,l=[-parseInt(r.style.left,10)||0,-parseInt(r.style.top,10)||0],s=i.style,f=l[0]+"px",m=l[1]+"px";s.left!==f&&(s.left=f),s.top!==m&&(s.top=m),p.setMapOffset(l),e.__mapOffset=l,o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function s(){n||o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}r.removeEventListener("moving",this._oldMoveHandler),r.removeEventListener("moveend",this._oldMoveHandler),r.removeEventListener("zoomend",this._oldZoomEndHandler),r.addEventListener("moving",l),r.addEventListener("moveend",l),r.addEventListener("zoomend",s),this._oldMoveHandler=l,this._oldZoomEndHandler=s;var f=e.get("roam");f&&"scale"!==f?r.enableDragging():r.disableDragging(),f&&"move"!==f?(r.enableScrollWheelZoom(),r.enableDoubleClickZoom(),r.enablePinchToZoom()):(r.disableScrollWheelZoom(),r.disableDoubleClickZoom(),r.disablePinchToZoom());var m=e.__mapStyle,d=e.get("mapStyle")||{},c=JSON.stringify(d);JSON.stringify(m)!==c&&(y(d)||r.setMapStyle(a(d)),e.__mapStyle=JSON.parse(c));var u=e.__mapStyle2,h=e.get("mapStyleV2")||{},g=JSON.stringify(h);JSON.stringify(u)!==g&&(y(h)||r.setMapStyleV2(a(h)),e.__mapStyle2=JSON.parse(g)),n=!1}}),p("bmap",s),l({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(e,t){t.eachComponent("bmap",(function(e){var t=e.getBMap(),o=t.getCenter();e.setCenterAndZoom([o.lng,o.lat],t.getZoom())}))}));var d=[{featureType:"water",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"land",elementType:"all",stylers:{color:"#f3f3f3"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#fefefe"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}];export{d as a};