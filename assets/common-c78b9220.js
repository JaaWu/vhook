let o=document.createElement("style");o.innerHTML="",document.head.appendChild(o);import{d as a,c as n,f as t,g as e}from"./common-db3bf608.js";import"./common-4df17d65.js";import"./common-c334ecf3.js";import{u as s}from"./common-892b3aac.js";var c={setup(){return o=n(window.location.hash),s("hashchange",(function(){o.value=window.location.hash})),{hash:a(o),setHash:function(a){a!==o.value&&(window.location.hash=a)}};var o}};c.render=function(o,a,n,s,c,i){return t(),e("button",{onClick:a[1]||(a[1]=a=>o.setHash("api"))},"set hash to api")};export default c;
