import{o as s,d as l,j as t,J as e,f as a,t as r,K as o,n,l as i}from"./vendor.36c281f3.js";import{_ as d}from"./Button.4b020695.js";import{_ as m}from"./Spinner.2e0ab286.js";const u={class:"mt-4 sm:mt-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},c={key:1},p={props:{loading:{type:Boolean,default:!1},left:{type:String,default:null},right:{type:String,default:null}},emits:["close","submited"],setup(p){const f=p;return(p,g)=>(s(),l("div",u,[t(d,{color:"blue",disabled:f.loading,onClick:g[0]||(g[0]=o((s=>p.$emit("submited")),["prevent"])),class:n(["w-full inline-flex justify-center  px-4 py-2 sm:col-start-2",{"cursor-not-allowed opacity-60":f.loading}])},{default:e((()=>{var t;return[f.loading?(s(),a(m,{key:0,class:"h-1"})):(s(),l("span",c,r(null!=(t=f.right)?t:"Сохранить"),1))]})),_:1},8,["disabled","class"]),t(d,{color:"gray",onClick:g[1]||(g[1]=o((s=>p.$emit("close")),["prevent"])),class:"mt-3 w-full inline-flex justify-center px-4 py-2 sm:mt-0 sm:col-start-1"},{default:e((()=>{var s;return[i(r(null!=(s=f.left)?s:"Закрыть"),1)]})),_:1})]))}};export{p as _};
