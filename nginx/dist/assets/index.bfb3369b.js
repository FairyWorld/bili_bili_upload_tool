import{d as e,r as l,o as a,Q as t,p as u,a as o,b as s,c as n,e as d,f as i,F as c,g as p,w as r,h as m,i as f,j as h,C as v,A as b}from"./vendor.ca300f42.js";!function(e=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),u=e=>{URL.revokeObjectURL(e.src),e.remove()};self[l]=e=>new Promise(((a,o)=>{const s=new URL(e,t);if(self[l].moduleMap[s])return a(self[l].moduleMap[s]);const n=new Blob([`import * as m from '${s}';`,`${l}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){o(new Error(`Failed to import: ${e}`)),u(d)},onload(){a(self[l].moduleMap[s]),u(d)}});document.head.appendChild(d)})),self[l].moduleMap={}}}("/assets/");const g=e({setup(){const e=l([]),t=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),u=()=>[{value:"694b3...(例子)"},{value:"32fe...(例子)"},{value:"A7...(例子)"}];return a((()=>{e.value=[{value:"694b3...(例子)"},{value:"32fe...(例子)"},{value:"A7...(例子)"}]})),{input:l(""),input2:l(""),input4:l(""),input5:l(""),sessdata:l(""),bili_jct:l(""),buvid3:l(""),restaurants:e,querySearch:(l,a)=>{a(l?e.value.filter(t(l)):e.value)},loadAll:u,handleSelect:e=>{console.log(e)},createFilter:t}},data:()=>({options:[{value:"27",label:"动画(综合)"},{value:"21",label:"生活(综合)"},{value:"17",label:"游戏(单机)"},{value:"130",label:"音乐(综合)"},{value:"138",label:"搞笑(生活)"},{value:"174",label:"生活(其他)"},{value:"65",label:"游戏(网络)"}],value:""}),methods:{onSubmit(){var e={link:this.input,title:this.input2,id:this.value,tag:this.input4,desc:this.input5+",喜欢点赞",sessdata:this.sessdata,bili_jct:this.bili_jct,buvid3:this.buvid3};this.$axios.post(window.location.href+"upload",e).then((e=>{console.log(e.data),t.success({message:"上传成功"+e.data,type:"success"})}))}}}),_=r("data-v-1594ecce");u("data-v-1594ecce");const V={class:"grid-content bg-purple-light"},S={class:"grid-content bg-purple"},U={class:"grid-content bg-purple-light"},j=m("仓库地址"),y=m("上传");o();const w=_(((e,l,a,t,u,o)=>{const r=s("el-autocomplete"),m=s("el-col"),f=s("el-row"),h=s("el-input"),v=s("el-option"),b=s("el-select"),g=s("el-link"),w=s("el-button");return n(),d(c,null,[i(f,null,{default:_((()=>[i(m,{span:8},{default:_((()=>[i(r,{class:"inline-input",modelValue:e.sessdata,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sessdata=l),"fetch-suggestions":e.querySearch,placeholder:"SESSDATA(请勿泄露,盗号风险)",onSelect:e.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])])),_:1}),i(m,{span:8},{default:_((()=>[i(r,{class:"inline-input",modelValue:e.bili_jct,"onUpdate:modelValue":l[2]||(l[2]=l=>e.bili_jct=l),"fetch-suggestions":e.querySearch,placeholder:"bili_jct(请勿泄露,盗号风险)",onSelect:e.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])])),_:1}),i(m,{span:8},{default:_((()=>[i(r,{class:"inline-input",modelValue:e.buvid3,"onUpdate:modelValue":l[3]||(l[3]=l=>e.buvid3=l),"fetch-suggestions":e.querySearch,placeholder:"buvid3(请勿泄露,盗号风险)",onSelect:e.handleSelect},null,8,["modelValue","fetch-suggestions","onSelect"])])),_:1})])),_:1}),i(f,null,{default:_((()=>[i(m,{span:10},{default:_((()=>[i(h,{modelValue:e.input,"onUpdate:modelValue":l[4]||(l[4]=l=>e.input=l),placeholder:"Youtube Link"},null,8,["modelValue"])])),_:1}),i(m,{span:10},{default:_((()=>[i("div",V,[i(h,{modelValue:e.input2,"onUpdate:modelValue":l[5]||(l[5]=l=>e.input2=l),placeholder:"标题"},null,8,["modelValue"])])])),_:1}),i(m,{span:4},{default:_((()=>[i("div",S,[i(b,{modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=l=>e.value=l),placeholder:"请选择"},{default:_((()=>[(n(!0),d(c,null,p(e.options,(e=>(n(),d(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1}),i(f,null,{default:_((()=>[i(m,{span:8},{default:_((()=>[i("div",U,[i(h,{modelValue:e.input4,"onUpdate:modelValue":l[7]||(l[7]=l=>e.input4=l),placeholder:"标签(逗号隔开)"},null,8,["modelValue"])])])),_:1}),i(m,{span:16},{default:_((()=>[i(h,{modelValue:e.input5,"onUpdate:modelValue":l[8]||(l[8]=l=>e.input5=l),placeholder:"description(简介)"},null,8,["modelValue"])])),_:1})])),_:1}),i(f,null,{default:_((()=>[i(m,{span:4,offset:2},{default:_((()=>[i(g,{type:"danger",href:"https://github.com/googidaddy/bili_upload_tool"},{default:_((()=>[j])),_:1})])),_:1}),i(m,{span:12},{default:_((()=>[i(w,{type:"primary",onClick:e.onSubmit},{default:_((()=>[y])),_:1},8,["onClick"])])),_:1})])),_:1})],64)}));g.render=w,g.__scopeId="data-v-1594ecce";const L=i("img",{alt:"logo",src:"/assets/02.345b3f11.jpg"},null,-1),k=h({expose:[],setup:e=>(e,l)=>{const a=s("el-header"),t=s("el-main"),u=s("el-container");return n(),d(u,null,{default:f((()=>[i(a,null,{default:f((()=>[L])),_:1}),i(t,{class:"main"},{default:f((()=>[i(g)])),_:1})])),_:1})}});k.config.globalProperties.$axios=v,k.use(b),k.mount("#app");