let o=document.createElement("style");o.innerHTML="",document.head.appendChild(o);import{d as r,c as n,f as a,g as e,j as l,t as s,F as c}from"./common-db3bf608.js";import{i as m}from"./common-4df17d65.js";import"./common-c334ecf3.js";import{u as t}from"./common-892b3aac.js";import{t as d}from"./common-b92d4298.js";var i={setup:()=>function(o){void 0===o&&(o=200);var a=n(m?window.scrollX:0),e=n(m?window.scrollY:0),l=function(){a.value=window.scrollX,e.value=window.scrollY};o&&(l=d(o,l));var s=t("scroll",l,{passive:!0,capture:!1})[1];return{x:r(a),y:r(e),clear:s}}()};i.render=function(o,r,n,m,t,d){return a(),e(c,null,[l("p",null,"x: "+s(o.x),1),l("p",null,"y: "+s(o.y),1)],64)};export default i;