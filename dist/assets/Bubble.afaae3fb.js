import{A as H,C as L,o as z,e as A,s as P,v as T,f as M}from"./vendor.72e7bd49.js";import{_ as W}from"./index.a64f84be.js";function j(){const r=document.getElementById("appHome");var i=document.getElementById("canvas"),s=i.getContext("2d"),n=i.width=r.offsetWidth,f=i.height=r.offsetHeight,c,d,_=!1,l=!1,x=function(t,e,a){var m=c-t,u=d-e;return m<a&&m>a*-1&&u<a&&u>a*-1},o=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},b=function(t,e,a,m){var u=o(0,m);return t<e||u===1?1:t>a||u===2?-1:0},g=[],p=0,C=10,S=100,B=5,E=5,I=10,k="hsl(235,60%,13%)",v=[{color1:"#fa4c2b",color2:"#6aff6e"},{color1:"#ffff82",color2:"#ffce72"},{color1:"#fa4c2b",color2:"#0bfcff"}],h=function(t,e,a){this.id=p+1,this.x=t||o(0,n),this.y=e||o(0,f),this.radius=a||o(B,S),this.color=v[o(0,v.length-1)],this.speed=o(E,I)/10,this.speedBackup=this.speed,this.directionX=o(-1,1)||1,this.directionY=o(-1,1)||1,this.flicker=0,p++,g[p]=this};h.prototype.destroy=function(){for(var t=this.radius/10>0?this.radius/10:2,e=0;e<t;e++)new h(this.x,this.y,o(this.radius/4,this.radius/2));this.radius=o(this.radius/4,this.radius/2),this.color=v[o(0,v.length-1)]},h.prototype.draw=function(){if(this.directionX=b(this.x,0,n,500)||this.directionX,this.directionY=b(this.y,0,f,500)||this.directionY,this.speed=this.speedBackup,l===!0&&x(this.x,this.y,200)){var t=o(0,15);t===5?this.directionX=c-this.x>0?1:-1:t===1&&(this.directionY=d-this.y>0?1:-1),this.speed=1.25}this.x+=this.speed*this.directionX,this.y+=this.speed*this.directionY,this.radius+=b(this.radius,B,S,15),s.save(),s.globalCompositeOperation="color-dodge",s.beginPath();var e=s.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);e.addColorStop(0,this.color.color1),e.addColorStop(.5,this.color.color2),e.addColorStop(1,"rgba(250,76,43,0)"),s.arc(this.x,this.y,this.radius,0,Math.PI*2,!0),s.fillStyle=e,s.fill(),s.closePath(),s.restore(),_===!0&&x(this.x,this.y,this.radius)&&(g[this.id].destroy(),_=!1)};for(var w=0;w<C;w++)new h;var X=function(){s.fillStyle=k,s.fillRect(0,0,n,f);for(var t=1;t<=p;t++)g[t].draw();requestAnimationFrame(X)};requestAnimationFrame(X),i.addEventListener("click",function(t){new h(t.layerX,t.layerY)}),i.addEventListener("contextmenu",function(t){c=t.pageX,d=t.pageY,_=!0,t.preventDefault()});var y;i.addEventListener("mousedown",function(t){c=t.pageX,d=t.pageY,clearTimeout(y),y=setTimeout(function(){return l=!0},500)}),i.addEventListener("mousemove",function(t){l&&(c=t.pageX,d=t.pageY)}),i.addEventListener("mouseup",function(t){clearTimeout(y),l=!1});var Y;window.addEventListener("resize",function(){clearTimeout(Y),Y=setTimeout(function(){n=i.width=r.offsetWidth,f=i.height=r.offsetHeight},500)})}const q=r=>(P("data-v-61b0c205"),r=r(),T(),r),D={class:"app__home",id:"appHome"},F=q(()=>M("canvas",{id:"canvas"},null,-1)),N=[F],O={setup(r){const i=H();return L(()=>{j(),i.commit("setComponentPath","src/views/Canvas/Demo/pages/Bubble/Bubble.vue")}),(s,n)=>(z(),A("div",D,N))}};var V=W(O,[["__scopeId","data-v-61b0c205"]]);export{V as default};
