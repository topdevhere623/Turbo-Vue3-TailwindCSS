import{a}from"./index.8fc70fb6.js";import{c as s}from"./cars.41f6223d.js";import{ag as r}from"./vendor.36c281f3.js";const{drop:e,fill:c,reset:o,cars:t}=s,i=async(a=!1)=>{a&&o(),await c()};let n,d,m;const f=async a=>{const{success:s,message:r}=await e(a);return d.value&&s&&m(),{success:s,message:r}},p=async a=>{await n({name:"EditCar",params:{id:a}})};function u(){const{redirectTo:s,isThePage:e,back:c}=a("EditCar");return[n,d,m]=[s,e,c],r((()=>{n=void 0,d=void 0,m=void 0})),{moveToEditCarPage:p,dropCar:f,fetchCars:i,cars:t}}export{u as c};
