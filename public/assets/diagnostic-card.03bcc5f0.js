import{$ as a,_ as r}from"./drop.cce90c26.js";import{c as s}from"./index.8fc70fb6.js";import{H as e,a as o,c as t}from"./vendor.36c281f3.js";const c=s("crud processes"),p=e({raw:[],preview:void 0});var d={state:o(p),reset:()=>{p.raw=[]},load:async()=>{c&&(p.raw=await a.maps())},drop:async a=>r.map(a,(a=>{p.raw.deleteById(a)})),options:t((()=>p.raw.map((({id:a,title:r})=>({value:a,label:r})))))};export{d as s};
