import"./echarts.aab74076.js";import{h as t,j as e,S as a,l as i,Z as n,p as o,o as r,A as s,D as l,E as d,F as f,H as u,I as c,J as h}from"./index.5fa80180.js";t({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(t){return{fill:t.get("color")}},visualDrawType:"fill",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,i){var n=e(t.data,{coordDimensions:["value"]}),o=new a(n,this);return o.initData(t.data),o},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{fontWeight:"normal"}}}),i({type:"wordCloud",render:function(t,e,a){var i=this.group;i.removeAll();var s=t.getData(),l=t.get("gridSize");t.layoutInstance.ondraw=function(e,a,d,f){var u=s.getItemModel(d),c=u.getModel("textStyle"),h=new n({style:o(c),scaleX:1/f.info.mu,scaleY:1/f.info.mu,x:(f.gx+f.info.gw/2)*l,y:(f.gy+f.info.gh/2)*l,rotation:f.rot});h.setStyle({x:f.info.fillTextOffsetX,y:f.info.fillTextOffsetY+.5*a,text:e,verticalAlign:"middle",fill:s.getItemVisual(d,"style").fill,fontSize:a}),i.add(h),s.setItemGraphicEl(d,h),h.ensureState("emphasis").style=o(u.getModel(["emphasis","textStyle"]),{state:"emphasis"}),h.ensureState("blur").style=o(u.getModel(["blur","textStyle"]),{state:"blur"}),r(h,u.get(["emphasis","focus"]),u.get(["emphasis","blurScope"])),h.stateTransition={duration:t.get("animation")?t.get(["stateAnimation","duration"]):0,easing:t.get(["stateAnimation","easing"])},h.__highDownDispatcher=!0},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}}),
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */
window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var i=parseInt(a.data.substr(e.length),36);t[i]&&(t[i](),t[i]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var i=t.length;return t.push(a),window.postMessage(e+i.toString(36),"*"),i}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)});var m=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!e.getImageData&&(!!e.fillText&&(!!Array.prototype.some&&!!Array.prototype.push))}(),g=function(){if(m){for(var t,e,a=document.createElement("canvas").getContext("2d"),i=20;i;){if(a.font=i.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return i+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,i--}return 0}}(),v=function(t){for(var e,a,i=t.length;i;e=Math.floor(Math.random()*i),a=t[--i],t[i]=t[e],t[e]=a);return t},w=function(t,e){if(m){Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var a={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var i in e)i in a&&(a[i]=e[i]);if("function"!=typeof a.weightFactor){var n=a.weightFactor;a.weightFactor=function(t){return t*n}}if("function"!=typeof a.shape)switch(a.shape){case"circle":default:a.shape="circle";break;case"cardioid":a.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":a.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":a.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":a.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":a.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":a.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}a.gridSize=Math.max(Math.floor(a.gridSize),4);var o,r,s,l,d,f,u,c=a.gridSize,h=c-a.maskGapWidth,w=Math.abs(a.maxRotation-a.minRotation),p=Math.min(a.maxRotation,a.minRotation),y=a.rotationStep;switch(a.color){case"random-dark":u=function(){return z(10,50)};break;case"random-light":u=function(){return z(50,90)};break;default:"function"==typeof a.color&&(u=a.color)}var x=null;"function"==typeof a.classes&&(x=a.classes);var M,S=!1,I=[],b=function(t){var e,a,i=t.currentTarget,n=i.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var o=e-n.left,r=a-n.top,s=Math.floor(o*(i.width/n.width||1)/c),l=Math.floor(r*(i.height/n.height||1)/c);return I[s][l]},C=function(t){var e=b(t);M!==e&&(M=e,e?a.hover(e.item,e.dimension,t):a.hover(void 0,void 0,t))},T=function(t){var e=b(t);e&&(a.click(e.item,e.dimension,t),t.preventDefault())},E=[],k=function(t){if(E[t])return E[t];var e=8*t,i=e,n=[];for(0===t&&n.push([l[0],l[1],0]);i--;){var o=1;"circle"!==a.shape&&(o=a.shape(i/e*2*Math.PI)),n.push([l[0]+t*o*Math.cos(-i/e*2*Math.PI),l[1]+t*o*Math.sin(-i/e*2*Math.PI)*a.ellipticity,i/e*2*Math.PI])}return E[t]=n,n},O=function(){return a.abortThreshold>0&&(new Date).getTime()-f>a.abortThreshold},D=function(e,a,i,n,l){if(!(e>=r||a>=s||e<0||a<0)){if(o[e][a]=!1,i)t[0].getContext("2d").fillRect(e*c,a*c,h,h);S&&(I[e][a]={item:l,dimension:n})}},A=function(e){var i,n,l;Array.isArray(e)?(i=e[0],n=e[1]):(i=e.word,n=e.weight,l=e.attributes);var f=0===a.rotateRatio||Math.random()>a.rotateRatio?0:0===w?p:p+Math.round(Math.random()*w/y)*y,h=function(t,e,i){var n=a.weightFactor(e);if(n<=a.minSize)return!1;var o=1;n<g&&(o=function(){for(var t=2;t*n<g;)t+=2;return t}());var r=document.createElement("canvas"),s=r.getContext("2d",{willReadFrequently:!0});s.font=a.fontWeight+" "+(n*o).toString(10)+"px "+a.fontFamily;var l=s.measureText(t).width/o,d=Math.max(n*o,s.measureText("m").width,s.measureText("Ｗ").width)/o,f=l+2*d,u=3*d,h=Math.ceil(f/c),m=Math.ceil(u/c);f=h*c,u=m*c;var v=-l/2,w=.4*-d,p=Math.ceil((f*Math.abs(Math.sin(i))+u*Math.abs(Math.cos(i)))/c),y=Math.ceil((f*Math.abs(Math.cos(i))+u*Math.abs(Math.sin(i)))/c),x=y*c,M=p*c;r.setAttribute("width",x),r.setAttribute("height",M),s.scale(1/o,1/o),s.translate(x*o/2,M*o/2),s.rotate(-i),s.font=a.fontWeight+" "+(n*o).toString(10)+"px "+a.fontFamily,s.fillStyle="#000",s.textBaseline="middle",s.fillText(t,v*o,(w+.5*n)*o);var S=s.getImageData(0,0,x,M).data;if(O())return!1;for(var I,b,C,T=[],E=y,k=[p/2,y/2,p/2,y/2];E--;)for(I=p;I--;){C=c;t:for(;C--;)for(b=c;b--;)if(S[4*((I*c+C)*x+(E*c+b))+3]){T.push([E,I]),E<k[3]&&(k[3]=E),E>k[1]&&(k[1]=E),I<k[0]&&(k[0]=I),I>k[2]&&(k[2]=I);break t}}return{mu:o,occupied:T,bounds:k,gw:y,gh:p,fillTextOffsetX:v,fillTextOffsetY:w,fillTextWidth:l,fillTextHeight:d,fontSize:n}}(i,n,f);if(!h)return!1;if(O())return!1;if(!a.drawOutOfBound){var m=h.bounds;if(m[1]-m[3]+1>r||m[2]-m[0]+1>s)return!1}for(var M=d+1,I=function(m){var g=Math.floor(m[0]-h.gw/2),v=Math.floor(m[1]-h.gh/2);h.gw,h.gh;return!!function(t,e,i,n,l){for(var d=l.length;d--;){var f=t+l[d][0],u=e+l[d][1];if(f>=r||u>=s||f<0||u<0){if(!a.drawOutOfBound)return!1}else if(!o[f][u])return!1}return!0}(g,v,0,0,h.occupied)&&(function(e,i,n,o,r,s,l,d,f){var h,m,g=n.fontSize;h=u?u(o,r,g,s,l):a.color,m=x?x(o,r,g,s,l):a.classes;var v=n.bounds;v[3],v[0],v[1],v[3],v[2],v[0],t.forEach((function(t){if(t.getContext){var r=t.getContext("2d"),s=n.mu;r.save(),r.scale(1/s,1/s),r.font=a.fontWeight+" "+(g*s).toString(10)+"px "+a.fontFamily,r.fillStyle=h,r.translate((e+n.gw/2)*c*s,(i+n.gh/2)*c*s),0!==d&&r.rotate(-d),r.textBaseline="middle",r.fillText(o,n.fillTextOffsetX*s,(n.fillTextOffsetY+.5*g)*s),r.restore()}else{var l=document.createElement("span"),u="";u="rotate("+-d/Math.PI*180+"deg) ",1!==n.mu&&(u+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var v={position:"absolute",display:"block",font:a.fontWeight+" "+g*n.mu+"px "+a.fontFamily,left:(e+n.gw/2)*c+n.fillTextOffsetX+"px",top:(i+n.gh/2)*c+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:g+"px",whiteSpace:"nowrap",transform:u,webkitTransform:u,msTransform:u,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var w in h&&(v.color=h),l.textContent=o,v)l.style[w]=v[w];if(f)for(var p in f)l.setAttribute(p,f[p]);m&&(l.className+=m),t.appendChild(l)}}))}(g,v,h,i,n,d-M,m[2],f,l),function(e,i,n,o,l,d){var f,u,h=l.occupied,m=a.drawMask;if(m&&((f=t[0].getContext("2d")).save(),f.fillStyle=a.maskColor),S){var g=l.bounds;u={x:(e+g[3])*c,y:(i+g[0])*c,w:(g[1]-g[3]+1)*c,h:(g[2]-g[0]+1)*c}}for(var v=h.length;v--;){var w=e+h[v][0],p=i+h[v][1];w>=r||p>=s||w<0||p<0||D(w,p,m,u,d)}m&&f.restore()}(g,v,0,0,h,e),{gx:g,gy:v,rot:f,info:h})};M--;){var b=k(d-M);a.shuffle&&(b=[].concat(b),v(b));for(var C=0;C<b.length;C++){var T=I(b[C]);if(T)return T}}return null},R=function(e,a,i){if(a)return!t.some((function(t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,a,i||{}),!t.dispatchEvent(n)}),this);t.forEach((function(t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,a,i||{}),t.dispatchEvent(n)}),this)};!function(){var e=t[0];if(e.getContext)r=Math.ceil(e.width/c),s=Math.ceil(e.height/c);else{var i=e.getBoundingClientRect();r=Math.ceil(i.width/c),s=Math.ceil(i.height/c)}if(R("wordcloudstart",!0)){var n,u,h,m,g;if(l=a.origin?[a.origin[0]/c,a.origin[1]/c]:[r/2,s/2],d=Math.floor(Math.sqrt(r*r+s*s)),o=[],!e.getContext||a.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=a.backgroundColor,e.clearRect(0,0,r*(c+1),s*(c+1)),e.fillRect(0,0,r*(c+1),s*(c+1))}else t.textContent="",t.style.backgroundColor=a.backgroundColor,t.style.position="relative"})),n=r;n--;)for(o[n]=[],u=s;u--;)o[n][u]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=a.backgroundColor,v.fillRect(0,0,1,1);var w,p,y=v.getImageData(0,0,1,1).data,x=e.getContext("2d").getImageData(0,0,r*c,s*c).data;for(n=r;n--;)for(o[n]=[],u=s;u--;){p=c;t:for(;p--;)for(w=c;w--;)for(h=4;h--;)if(x[4*((u*c+p)*r*c+(n*c+w))+h]!==y[h]){o[n][u]=!1;break t}!1!==o[n][u]&&(o[n][u]=!0)}x=v=y=void 0}if(a.hover||a.click){for(S=!0,n=r+1;n--;)I[n]=[];a.hover&&e.addEventListener("mousemove",C),a.click&&(e.addEventListener("click",T),e.addEventListener("touchstart",T),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",C),e.removeEventListener("click",T),M=void 0}))}h=0;var b=!0;a.layoutAnimation?0!==a.wait?(m=window.setTimeout,g=window.clearTimeout):(m=window.setImmediate,g=window.clearImmediate):(m=function(t){t()},g=function(){b=!1});var E=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},k=function t(){E("wordcloudstart",t),g(D)};!function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)}("wordcloudstart",k);var D=(a.layoutAnimation?m:setTimeout)((function t(){if(b){if(h>=a.list.length)return g(D),R("wordcloudstop",!1),void E("wordcloudstart",k);f=(new Date).getTime();var e=A(a.list[h]),i=!R("wordclouddrawn",!0,{item:a.list[h],drawn:e});if(O()||i)return g(D),a.abort(),R("wordcloudabort",!1),R("wordcloudstop",!1),void E("wordcloudstart",k);h++,D=m(t,a.wait)}}),a.wait)}}()}function z(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};if(w.isSupported=m,w.minFontSize=g,!w.isSupported)throw new Error("Sorry your browser not support wordCloud");s((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var i=u(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),n=a.getData(),o=document.createElement("canvas");o.width=i.width,o.height=i.height;var r=o.getContext("2d"),s=a.get("maskImage");if(s)try{r.drawImage(s,0,0,o.width,o.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),i=e.createImageData(a),n=0,o=0,r=0;r<a.data.length;r+=4)a.data[r+3]>128&&(n+=l=a.data[r]+a.data[r+1]+a.data[r+2],++o);var s=n/o;for(r=0;r<a.data.length;r+=4){var l=a.data[r]+a.data[r+1]+a.data[r+2];a.data[r+3]<128||l>s?(i.data[r]=0,i.data[r+1]=0,i.data[r+2]=0,i.data[r+3]=0):(i.data[r]=255,i.data[r+1]=255,i.data[r+2]=255,i.data[r+3]=255)}e.putImageData(i,0,0)}(o)}catch(v){console.error("Invalid mask image"),console.error(v.toString())}var l=a.get("sizeRange"),d=a.get("rotationRange"),f=n.getDataExtent("value"),h=Math.PI/180,m=a.get("gridSize");function g(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=i.x/m,t.detail.drawn.gy+=i.y/m,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}w(o,{list:n.mapArray("value",(function(t,e){var a=n.getItemModel(e);return[n.getName(e),a.get("textStyle.fontSize",!0)||c(t,f,l),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.fontFamily")||a.get("emphasis.textStyle.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.fontWeight")||a.get("emphasis.textStyle.fontWeight")||t.get("textStyle.fontWeight"),gridSize:m,ellipticity:i.height/i.width,minRotation:d[0]*h,maxRotation:d[1]*h,clearCanvas:!s,rotateRatio:1,rotationStep:a.get("rotationStep")*h,drawOutOfBound:a.get("drawOutOfBound"),layoutAnimation:a.get("layoutAnimation"),shuffle:!1,shape:a.get("shape")}),o.addEventListener("wordclouddrawn",g),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){o.removeEventListener("wordclouddrawn",g),o.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),l((function(t){var e=(t||{}).series;!d(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function i(t){t&&f(a,(function(e){t.hasOwnProperty(e)&&(t["text"+h(e)]=t[e])}))}f(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};i(e.normal),i(e.emphasis)}}))}));