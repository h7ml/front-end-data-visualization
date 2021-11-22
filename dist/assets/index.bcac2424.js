import{p as e,b as a,o as l,f as t,g as n,t as o,G as s,a as u,w as r,u as i,d as m,A as v,r as d,H as c,F as p,h as _,n as h,l as f,c as y,C as g}from"./vendor.02edd428.js";import{i as b,L as w}from"./index.5fa80180.js";import{a as x}from"./ashenTheme.bbfc1098.js";import"./liquidFillView.bd7c453d.js";import"./wordCloud.79b2ab7c.js";import"./echarts.aab74076.js";e("data-v-58371360");const S={class:"common__card"},k={class:"title"},z={class:"value"},A={class:"chart"},D=n("div",{class:"line"},null,-1),C={class:"total"};a();const W={props:{title:String,value:String},setup:e=>(a,u)=>(l(),t("div",S,[n("div",k,o(e.title),1),n("div",z,o(e.value),1),n("div",A,[s(a.$slots,"default",{},void 0,!0)]),D,n("div",C,[s(a.$slots,"footer",{},void 0,!0)])])),__scopeId:"data-v-58371360"};e("data-v-6659043a");const T=n("div",{class:"compare__wrapper"},[n("div",{class:"compare"},[n("span",null,"日同比"),n("span",{class:"emphasis"},"7.33%"),n("div",{class:"increase"})]),n("div",{class:"compare"},[n("span",null,"月同比"),n("span",{class:"emphasis"},"38.79%"),n("div",{class:"decrease"})])],-1),I=n("span",null,"昨日销售额",-1),L=n("span",{class:"emphasis"},"￥ 30,000,000",-1);a();const M={setup:e=>(e,a)=>(l(),t("div",null,[u(i(W),{title:"累计销售额",value:"￥32,039,165"},{default:r((()=>[T])),footer:r((()=>[I,L])),_:1})])),__scopeId:"data-v-6659043a"},O=n("span",null,"昨日订单量",-1),$=n("span",{class:"emphasis"},"2,000,000",-1),V={setup(e){const a=m(null),o=m(null);return v((()=>{o.value=b(a.value),o.value.setOption({xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:[620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],areaStyle:{color:new w(0,0,0,1,[{offset:0,color:"rgba(255, 191, 0, 1)"},{offset:1,color:"rgba(255, 191, 0, 0.1)"}])},lineStyle:{width:0},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,bottom:0,left:0,right:0}})})),(e,o)=>(l(),t("div",null,[u(i(W),{title:"累计订单量",value:"2,157,420"},{default:r((()=>[n("div",{ref:(e,l)=>{l.chartDom=e,a.value=e},style:{width:"100%",height:"100%"}},null,512)])),footer:r((()=>[O,$])),_:1})]))}},j=n("span",null,"退货率",-1),B=n("span",{class:"emphasis"},"5.14%",-1),F={setup(e){const a=m(null),o=m(null);return v((()=>{o.value=b(a.value),o.value.setOption({color:["#3398DB"],xAxis:{type:"category",data:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],show:!1},yAxis:{show:!1},series:[{type:"bar",data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],barWidth:"60%",itemStyle:{color:new w(0,0,0,1,[{offset:0,color:"#aaffff"},{offset:1,color:"#188df0"}])}}],grid:{top:0,bottom:0,left:0,right:0}})})),(e,o)=>(l(),t("div",null,[u(i(W),{title:"今日交易用户数",value:"81,014"},{default:r((()=>[n("div",{ref:(e,l)=>{l.chartDom=e,a.value=e},style:{width:"100%",height:"100%"}},null,512)])),footer:r((()=>[j,B])),_:1})]))}};e("data-v-692bfe54");const G=n("div",{class:"total__users__footer"},[n("span",null,"日同比"),n("span",{class:"emphasis"},"8.73%"),n("div",{class:"increase"}),n("span",{class:"month"},"月同比"),n("span",{class:"emphasis"},"35.91%"),n("div",{class:"decrease"})],-1);a();const q={setup(e){const a=m(null),o=m(null);return v((()=>{o.value=b(a.value),o.value.setOption({xAxis:{type:"value",show:!1},yAxis:{type:"category",show:!1},series:[{type:"bar",data:[100],stack:"总量",barWidth:10,itemStyle:{color:new w(0,0,1,1,[{offset:0,color:"#45cca6"},{offset:1,color:"#45ffa6"}])}},{type:"bar",data:[250],stack:"总量",barWidth:10,itemStyle:{color:"#ccc"}},{type:"custom",data:[100],stack:"重量",renderItem:(e,a)=>{const l=a.value(0);return{type:"group",position:a.coord([l,0]),children:[{type:"path",shape:{d:"M163.396608 289.168384c-40.577024 0-66.526208 54.183936-35.44064 85.25824L477.217792 723.704832c20.031488 20.031488 49.82272 20.031488 69.853184 0l349.274112-349.278208c30.30528-30.294016 6.677504-85.25824-34.927616-85.25824L163.396608 289.168384z",x:-5,y:-18,width:10,height:10,layout:"cover"},style:{fill:"#45ee46"}},{type:"path",shape:{d:"M131.974144 648.752128c-30.418944 30.430208-6.474752 84.301824 34.917376 84.301824L858.258432 733.053952c42.899456 0 65.325056-53.85216 34.916352-84.301824L547.487744 302.569472c-19.930112-19.974144-49.374208-19.95264-69.327872 0L131.974144 648.752128z",x:-5,y:8,width:10,height:10,layout:"cover"},style:{fill:"#45ee46"}}]}}}],grid:{top:0,bottom:0,left:0,right:0}})})),(e,o)=>(l(),t("div",null,[u(i(W),{title:"累计用户数",value:"1,087,503"},{default:r((()=>[n("div",{ref:(e,l)=>{l.chartDom=e,a.value=e},style:{width:"100%",height:"100%"}},null,512)])),footer:r((()=>[G])),_:1})]))},__scopeId:"data-v-692bfe54"};e("data-v-1da0500a");const E={class:"top__view"};a();const U={setup:e=>(e,a)=>{const n=d("el-card"),o=d("el-col"),s=d("el-row");return l(),t("div",E,[u(s,{gutter:20},{default:r((()=>[u(o,{xs:24,sm:12,md:12,lg:6,xl:6,class:"top__view__item"},{default:r((()=>[u(n,{shadow:"hover"},{default:r((()=>[u(M)])),_:1})])),_:1}),u(o,{xs:24,sm:12,md:12,lg:6,xl:6,class:"top__view__item"},{default:r((()=>[u(n,{shadow:"hover"},{default:r((()=>[u(V)])),_:1})])),_:1}),u(o,{xs:24,sm:12,md:12,lg:6,xl:6,class:"top__view__item"},{default:r((()=>[u(n,{shadow:"hover"},{default:r((()=>[u(F)])),_:1})])),_:1}),u(o,{xs:24,sm:12,md:12,lg:6,xl:6,class:"top__view__item"},{default:r((()=>[u(n,{shadow:"hover"},{default:r((()=>[u(q)])),_:1})])),_:1})])),_:1})])},__scopeId:"data-v-1da0500a"},P={props:{options:Object},setup(e){const a=e,n=m(null);return v((()=>{b(n.value).setOption(a.options)})),(e,a)=>(l(),t("div",{ref:(e,a)=>{a.chartDom=e,n.value=e},style:{width:"100%",height:"100%"}},null,512))}};e("data-v-14f31004");const R={class:"salse__view"},H={class:"menu__wrapper"},J=f("销售额"),K=f("访问量"),N={class:"menu__right"},Y={class:"salse__view__chart__wrapper"},Q={class:"sales__view__list"},X=n("div",{class:"sales__view__title"},"排行榜",-1),Z={class:"list__item__wrapper"},ee={class:"list__item__name"},ae={class:"list__item__money"};a();const le={setup(e){const a=m("1");function s(e){a.value=e}const v=m("今日"),f=c({date:"",shortcuts:[{text:"最近一周",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-6048e5),[a,e]}},{text:"最近一个月",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-2592e6),[a,e]}},{text:"最近三个月",value:()=>{const e=new Date,a=new Date;return a.setTime(a.getTime()-7776e6),[a,e]}}]}),y=m({title:{text:"年度销售额",textStyle:{fontSize:12,color:"#666"},top:20,left:25},xAxis:{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisTick:{alignWithLabel:!0,lineStyle:{color:"#999"}},axisLine:{lineStyle:{color:"#999"}},axisLabel:{color:"#333"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dotted",color:"#eee"}}},series:[{type:"bar",barWidth:"35%",data:[200,250,300,350,186,462,452,219,626,437,515,656]}],color:new w(0,0,0,1,[{offset:0,color:"#fa709a"},{offset:1,color:"#fee140"}]),emphasis:{itemStyle:{color:new w(0,0,0,1,[{offset:0,color:"#f83600"},{offset:1,color:"#f9d423"}])}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:70,bottom:50,left:60,right:60}}),g=m([{no:1,name:"麦当劳",money:"323,234"},{no:2,name:"麦当劳",money:"323,234"},{no:3,name:"麦当劳",money:"323,234"},{no:4,name:"麦当劳",money:"323,234"},{no:5,name:"麦当劳",money:"323,234"},{no:6,name:"麦当劳",money:"323,234"},{no:7,name:"麦当劳",money:"323,234"}]);return(e,m)=>{const c=d("el-menu-item"),b=d("el-menu"),w=d("el-radio-button"),x=d("el-radio-group"),S=d("el-date-picker"),k=d("el-card");return l(),t("div",R,[u(k,{shadow:"hover","body-style":{padding:"0 0 20px 0"}},{header:r((()=>[n("div",H,[u(b,{mode:"horizontal","default-active":a.value,onSelect:s,class:"sales__view__menu"},{default:r((()=>[u(c,{index:"1"},{default:r((()=>[J])),_:1}),u(c,{index:"2"},{default:r((()=>[K])),_:1})])),_:1},8,["default-active"]),n("div",N,[u(x,{modelValue:v.value,"onUpdate:modelValue":m[0]||(m[0]=e=>v.value=e),size:"small"},{default:r((()=>[u(w,{label:"今日"}),u(w,{label:"本周"}),u(w,{label:"本月"}),u(w,{label:"今年"})])),_:1},8,["modelValue"]),u(S,{class:"salse__view__date__picker",size:"small",modelValue:i(f).date,"onUpdate:modelValue":m[1]||(m[1]=e=>i(f).date=e),type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:i(f).shortcuts},null,8,["modelValue","shortcuts"])])])])),default:r((()=>[n("div",Y,[u(P,{class:"chart__dom",options:y.value},null,8,["options"]),n("div",Q,[X,n("div",Z,[(l(!0),t(p,null,_(g.value,((e,a)=>(l(),t("div",{class:"list__item",key:e.no},[n("div",{class:h(["list__item__no",+e.no<=3?"top__no"+(a+1):""])},o(e.no),3),n("div",ee,o(e.name),1),n("div",ae,o(e.money),1)])))),128))])])])])),_:1})])}},__scopeId:"data-v-14f31004"};const te={props:{options:{type:Object,required:!0}},setup(e){const a=e,n=m(null);return v((()=>{b(n.value).setOption(a.options)})),(e,a)=>(l(),t("div",{id:"chart",class:"chart",ref:(e,a)=>{a.chartDom=e,n.value=e}},null,512))},__scopeId:"data-v-03d7f188"};e("data-v-728b663e");const ne=n("div",{class:"title__wrapper"},"关键词搜索",-1),oe={class:"chart__wrapper"},se={class:"table__wrapper"},ue={class:"title__wrapper"},re=n("div",{class:"title"},"分类销售排行榜",-1),ie={class:"radio__wrapper"},me={class:"chart__wrapper"};a();const ve={setup(e){const a=c({options:{title:{text:"搜索用户数",textStyle:{color:"#888",fontSize:14},subtext:"93,634",subtextStyle:{color:"#333",fontSize:20,fontWeight:"bold"}},xAxis:{type:"category",boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:[128,328,168,625,154,325,168,457,669,467],areaStyle:{color:new w(0,0,0,1,[{offset:0,color:"#ffecd2"},{offset:1,color:"#fcb69f"}])},lineStyle:{color:"#fcb69f"},itemStyle:{opacity:0},smooth:!0}],grid:{top:50,right:0,bottom:0,left:0}}}),o=c({options:{title:{text:"搜索量",textStyle:{color:"#888",fontSize:14},subtext:"198,782",subtextStyle:{color:"#333",fontSize:20,fontWeight:"bold"}},xAxis:{type:"category",boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:[128,328,168,625,154,325,168,457,669,467],areaStyle:{color:new w(0,0,0,1,[{offset:0,color:"#d4fc79"},{offset:1,color:"#96e6a1"}])},lineStyle:{color:"#96e6a1"},itemStyle:{opacity:0},smooth:!0}],grid:{top:50,right:0,bottom:0,left:0}}}),s=m([{id:1,rank:1,keyWrod:"北京",count:100,users:90,range:"90"},{id:2,rank:2,keyWrod:"上海",count:100,users:90,range:"90"},{id:3,rank:3,keyWrod:"深圳",count:100,users:90,range:"90"},{id:4,rank:4,keyWrod:"广州",count:100,users:90,range:"90"}]);function v(e){console.log(e)}const h=c({radioSelect:"品类",radioTypes:["品类","商品"]}),f=c({options:{title:[{text:"品类分布",textStyle:{fontSize:14,color:"#666"},top:20,left:20},{text:"累计订单量",textStyle:{fontSize:14,color:"#999"},subtextStyle:{fontSize:28,color:"#333"},subtext:"320",x:"34.5%",y:"42.5%",textAlign:"center"}],series:[{name:"品类分布",type:"pie",data:[{legendname:"粥粉面店",value:67,percent:"15.40",itemStyle:{color:"#f79256"},name:"粥粉面店 | 15.40%"},{legendname:"简餐便当",value:97,percent:"22.30",itemStyle:{color:"#7dcfb6"},name:"简餐便当 | 22.30%"},{legendname:"汉堡披萨",value:92,percent:"21.50",itemStyle:{color:"#1d4e89"},name:"汉堡披萨 | 21.50%"}],label:{show:!0,position:"outside",formatter:e=>e.data.legendname},center:["35%","50%"],radius:["45%","60%"],labelLine:{length:5,length2:3,smooth:!0},clockwise:!1,itemStyle:{borderWidth:4,borderColor:"#fff"}}],legend:{type:"scroll",orient:"vertical",height:250,top:"middle",left:"70%",textStyle:{color:"#8c8c8c"}},tooltip:{trigger:"item",formatter:e=>`\n          ${e.seriesName}\n          <br />\n          ${e.marker} ${e.data.legendname}\n          <br />\n          数量：${e.data.value}\n          <br />\n          占比：${e.data.percent}%\n        `}}});return(e,m)=>{const c=d("el-col"),g=d("el-row"),b=d("el-table-column"),w=d("el-table"),x=d("el-pagination"),S=d("el-card"),k=d("el-radio-button"),z=d("el-radio-group");return l(),y(g,{gutter:20,class:"bottom__view"},{default:r((()=>[u(c,{lg:12,md:24,sm:24,xs:24,class:"view"},{default:r((()=>[u(S,{shadow:"hover"},{header:r((()=>[ne])),default:r((()=>[n("div",oe,[u(g,{gutter:20},{default:r((()=>[u(c,{span:12},{default:r((()=>[u(te,{class:"keyword__chart__x",options:i(a).options},null,8,["options"])])),_:1}),u(c,{span:12},{default:r((()=>[u(te,{class:"keyword__chart__x",options:i(o).options},null,8,["options"])])),_:1})])),_:1}),n("div",se,[u(w,{data:s.value},{default:r((()=>[u(b,{prop:"rank",label:"排名"}),u(b,{prop:"keyWrod",label:"关键字"}),u(b,{prop:"count",label:"总搜索量"}),u(b,{prop:"users",label:"搜索用户数"})])),_:1},8,["data"]),u(x,{layout:"prev, pager, next",total:50,"page-size":4,background:"",class:"pagination",onCurrentChange:v})])])])),_:1})])),_:1}),u(c,{lg:12,md:24,sm:24,xs:24,class:"view"},{default:r((()=>[u(S,{shadow:"hover"},{header:r((()=>[n("div",ue,[re,n("div",ie,[u(z,{modelValue:i(h).radioSelect,"onUpdate:modelValue":m[0]||(m[0]=e=>i(h).radioSelect=e),size:"small"},{default:r((()=>[(l(!0),t(p,null,_(i(h).radioTypes,(e=>(l(),y(k,{key:e,label:e},null,8,["label"])))),128))])),_:1},8,["modelValue"])])])])),default:r((()=>[n("div",me,[u(te,{options:i(f).options},null,8,["options"])])])),_:1})])),_:1})])),_:1})}},__scopeId:"data-v-728b663e"};const de={setup(e){const a=g(),o=m(null),s=[{name:"海门",value:9},{name:"鄂尔多斯",value:12},{name:"招远",value:12},{name:"舟山",value:12},{name:"齐齐哈尔",value:14},{name:"盐城",value:15},{name:"赤峰",value:16},{name:"青岛",value:18},{name:"乳山",value:18},{name:"金昌",value:19},{name:"泉州",value:21},{name:"莱西",value:21},{name:"日照",value:21},{name:"胶南",value:22},{name:"南通",value:23},{name:"拉萨",value:24},{name:"云浮",value:24},{name:"梅州",value:25},{name:"文登",value:25},{name:"上海",value:25},{name:"攀枝花",value:25},{name:"威海",value:25},{name:"承德",value:25},{name:"厦门",value:26},{name:"汕尾",value:26},{name:"潮州",value:26},{name:"丹东",value:27},{name:"太仓",value:27},{name:"曲靖",value:27},{name:"烟台",value:28},{name:"福州",value:29},{name:"瓦房店",value:30},{name:"即墨",value:30},{name:"抚顺",value:31},{name:"玉溪",value:31},{name:"张家口",value:31},{name:"阳泉",value:31},{name:"莱州",value:32},{name:"湖州",value:32},{name:"汕头",value:32},{name:"昆山",value:33},{name:"宁波",value:33},{name:"湛江",value:33},{name:"揭阳",value:34},{name:"荣成",value:34},{name:"连云港",value:35},{name:"葫芦岛",value:35},{name:"常熟",value:36},{name:"东莞",value:36},{name:"河源",value:36},{name:"淮安",value:36},{name:"泰州",value:36},{name:"南宁",value:37},{name:"营口",value:37},{name:"惠州",value:37},{name:"江阴",value:37},{name:"蓬莱",value:37},{name:"韶关",value:38},{name:"嘉峪关",value:38},{name:"广州",value:38},{name:"延安",value:38},{name:"太原",value:39},{name:"清远",value:39},{name:"中山",value:39},{name:"昆明",value:39},{name:"寿光",value:40},{name:"盘锦",value:40},{name:"长治",value:41},{name:"深圳",value:41},{name:"珠海",value:42},{name:"宿迁",value:43},{name:"咸阳",value:43},{name:"铜川",value:44},{name:"平度",value:44},{name:"佛山",value:44},{name:"海口",value:44},{name:"江门",value:45},{name:"章丘",value:45},{name:"肇庆",value:46},{name:"大连",value:47},{name:"临汾",value:47},{name:"吴江",value:47},{name:"石嘴山",value:49},{name:"沈阳",value:50},{name:"苏州",value:50},{name:"茂名",value:50},{name:"嘉兴",value:51},{name:"长春",value:51},{name:"胶州",value:52},{name:"银川",value:52},{name:"张家港",value:52},{name:"三门峡",value:53},{name:"锦州",value:54},{name:"南昌",value:54},{name:"柳州",value:54},{name:"三亚",value:54},{name:"自贡",value:56},{name:"吉林",value:56},{name:"阳江",value:57},{name:"泸州",value:57},{name:"西宁",value:57},{name:"宜宾",value:58},{name:"呼和浩特",value:58},{name:"成都",value:58},{name:"大同",value:58},{name:"镇江",value:59},{name:"桂林",value:59},{name:"张家界",value:59},{name:"宜兴",value:59},{name:"北海",value:60},{name:"西安",value:61},{name:"金坛",value:62},{name:"东营",value:62},{name:"牡丹江",value:63},{name:"遵义",value:63},{name:"绍兴",value:63},{name:"扬州",value:64},{name:"常州",value:64},{name:"潍坊",value:65},{name:"重庆",value:66},{name:"台州",value:67},{name:"南京",value:67},{name:"滨州",value:70},{name:"贵阳",value:71},{name:"无锡",value:71},{name:"本溪",value:71},{name:"克拉玛依",value:72},{name:"渭南",value:72},{name:"马鞍山",value:72},{name:"宝鸡",value:72},{name:"焦作",value:75},{name:"句容",value:75},{name:"北京",value:79},{name:"徐州",value:79},{name:"衡水",value:80},{name:"包头",value:80},{name:"绵阳",value:80},{name:"乌鲁木齐",value:84},{name:"枣庄",value:84},{name:"杭州",value:84},{name:"淄博",value:85},{name:"鞍山",value:86},{name:"溧阳",value:86},{name:"库尔勒",value:86},{name:"安阳",value:90},{name:"开封",value:90},{name:"济南",value:92},{name:"德阳",value:93},{name:"温州",value:95},{name:"九江",value:96},{name:"邯郸",value:98},{name:"临安",value:99},{name:"兰州",value:99},{name:"沧州",value:100},{name:"临沂",value:103},{name:"南充",value:104},{name:"天津",value:105},{name:"富阳",value:106},{name:"泰安",value:112},{name:"诸暨",value:112},{name:"郑州",value:113},{name:"哈尔滨",value:114},{name:"聊城",value:116},{name:"芜湖",value:117},{name:"唐山",value:119},{name:"平顶山",value:119},{name:"邢台",value:119},{name:"德州",value:120},{name:"济宁",value:120},{name:"荆州",value:127},{name:"宜昌",value:130},{name:"义乌",value:132},{name:"丽水",value:133},{name:"洛阳",value:134},{name:"秦皇岛",value:136},{name:"株洲",value:143},{name:"石家庄",value:147},{name:"莱芜",value:148},{name:"常德",value:152},{name:"保定",value:153},{name:"湘潭",value:154},{name:"金华",value:157},{name:"岳阳",value:169},{name:"长沙",value:175},{name:"衢州",value:177},{name:"廊坊",value:193},{name:"菏泽",value:194},{name:"合肥",value:229},{name:"武汉",value:273},{name:"大庆",value:279}],u={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]},r=function(e){const a=[];for(let l=0;l<e.length;l++){const t=u[e[l].name];t&&a.push({name:e[l].name,value:t.concat(e[l].value)})}return a},i={bmap:{key:"EcuCFchyeUS7tTG2De4AlsYos1Ky2FOC",center:[137.475941,16.222836],zoom:5,roam:!0,mapStyle:{styleJson:x}},tooltip:{},series:[{name:"销售额",type:"scatter",coordinateSystem:"bmap",data:r(s),encode:{value:2},itemStyle:{color:"#005792"},symbolSize:function(e){return e[2]/10},label:{show:!1,color:"#005792",position:"right",formatter:function(e){return`${e.data.name} - ${e.data.value[2]}`}},emphasis:{label:{show:!0}}},{name:"Top 2",type:"effectScatter",coordinateSystem:"bmap",data:r(s.sort((function(e,a){return a.value-e.value})).slice(0,6)),symbolSize:function(e){return e[2]/10},encode:{value:2},label:{formatter:e=>`${e.data.name} - ${e.data.value[2]}`,position:"right",show:!0},hoverAnimation:!0,rippleEffect:{brushType:"stroke"},itemStyle:{color:"#fc345c",shadowBlur:10,shadowColor:"#fc345c"}}]};return v((()=>{a.commit("setComponentPath","src/views/ECharts/Basic/pages/Map/Map.vue"),b(o.value).setOption(i)})),(e,a)=>(l(),t("div",null,[n("div",{id:"chart",class:"chart",ref:(e,a)=>{a.chartDom=e,o.value=e}},null,512)]))},__scopeId:"data-v-36272f1d"};e("data-v-dee51bbc");const ce={class:"liquid__x"};a();const pe={setup(e){const a=m(null);return v((()=>{b(a.value).setOption({series:[{type:"liquidFill",data:[.5,.5,.44],radius:"70%"}]})})),(e,o)=>(l(),t("div",ce,[n("div",{class:"chart",ref:(e,l)=>{l.chartDom=e,a.value=e}},null,512)]))},__scopeId:"data-v-dee51bbc"};e("data-v-7c25804c");const _e={class:"wordcloud__x"};a();const he={setup(e){const a=g(),o=m(null);return v((()=>{a.commit("setComponentPath","src/views/ECharts/Basic/pages/WordCloud/WordCloud.vue"),b(o.value).setOption({series:[{type:"wordCloud",data:[{name:"麦当劳",value:62},{name:"肯德基",value:53},{name:"汉堡王",value:21},{name:"华莱士",value:30},{name:"修记牛杂",value:40},{name:"鸟剑居酒屋",value:16},{name:"君临餐厅",value:66},{name:"顺德鱼皮",value:56},{name:"辉记糖水",value:82},{name:"华之屋",value:62}],textStyle:{fontFamily:"sans-serif",fontWeight:"bold",width:"90%",height:"90%",sizeRange:[12,60],gridSize:2,layoutAnimation:!0,color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}},emphasis:{focus:"self",textStyle:{shadowBlur:10,shadowColor:"#000"}}}]})})),(e,a)=>(l(),t("div",_e,[n("div",{class:"chart",ref:(e,a)=>{a.chartDom=e,o.value=e}},null,512)]))},__scopeId:"data-v-7c25804c"};e("data-v-fc116724");const fe={class:"map__view"},ye={class:"right__x"},ge=n("div",{class:"title"},"用户月同比增长",-1),be=n("div",{class:"title"},"热门搜索",-1);a();const we={setup:e=>(e,a)=>{const o=d("el-card");return l(),t("div",fe,[u(o,{class:"left__x",shadow:"hover","body-style":{width:"100%",height:"100%",boxSizing:"border-box",padding:"0"}},{default:r((()=>[u(de,{class:"BMapScatter__x"})])),_:1}),n("div",ye,[u(o,{shadow:"hover","body-style":{width:"100%",height:"230px",padding:"0"}},{header:r((()=>[ge])),default:r((()=>[u(pe)])),_:1}),u(o,{shadow:"hover","body-style":{width:"100%",height:"230px",padding:"0"}},{header:r((()=>[be])),default:r((()=>[u(he)])),_:1})])])},__scopeId:"data-v-fc116724"};const xe={setup:e=>(e,a)=>{const t=d("el-card");return l(),y(t,{id:"dataReportDev"},{default:r((()=>[u(U),u(le),u(ve),u(we)])),_:1})},__scopeId:"data-v-14deaa9b"};export{xe as default};