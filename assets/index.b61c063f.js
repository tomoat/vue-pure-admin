import{C as s}from"./index.1d53ca84.js";const u=(t,i=200,r=!1)=>{let e;const o=s(i);return()=>{e&&clearTimeout(e),r?(e||t(),e=setTimeout(()=>e=null,o)):e=setTimeout(t,o)}};export{u as d};
