let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{c as a,f as o,g as t,j as l,t as n,B as s,C as u,F as r}from"./common-db3bf608.js";import{u as S}from"./common-ca89c097.js";var c={setup(){const[e,o]=S("a","localStorage"),[t,l]=S("b","sessionStorage",sessionStorage);return{localStorageState:e,sessionStorageState:t,value:a(e.value),val:a(t.value),updateLocalStorage:o,updateSessionStorage:l}}};const p=l("p",null,"将数据持久化到 localStorage 中",-1),i=l("p",null,"刷新页面能拿到存在 localStorage 中的状态",-1),d=l("p",null,"将数据持久化到 sessionStorage 中",-1),g=l("p",null,"刷新页面能拿到存在 sessionStorage 中的状态",-1);c.render=function(e,a,S,c,m,v){return o(),t(r,null,[l("div",null,[p,l("p",null,"localStorage中的值： "+n(c.localStorageState),1),i,s(l("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>c.value=e)},null,512),[[u,c.value]]),l("button",{onClick:a[2]||(a[2]=e=>c.updateLocalStorage(c.value))},"update"),l("button",{onClick:a[3]||(a[3]=e=>c.updateLocalStorage())},"remove")]),l("div",null,[d,l("p",null,"sessionStorage中的值： "+n(c.sessionStorageState),1),g,s(l("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>c.val=e)},null,512),[[u,c.val]]),l("button",{onClick:a[5]||(a[5]=e=>c.updateSessionStorage(c.val))},"update"),l("button",{onClick:a[6]||(a[6]=e=>c.updateSessionStorage())},"remove")])],64)};export default c;