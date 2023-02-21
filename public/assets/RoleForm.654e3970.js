var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(s,a,r)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[a]=r;import{S as i,H as n,U as d,c as m,E as u,F as c,Q as p,I as v,V as f,o as g,d as b,W as j,X as w,u as y,e as h,t as R,j as k,f as P,J as O,av as $,v as V,a2 as _,h as E,l as I}from"./vendor.36c281f3.js";import{_ as T}from"./Office.55bfbecd.js";import{_ as C}from"./Button.4b020695.js";import{_ as M}from"./Input.b03a61c6.js";import{r as x}from"./roles.28ef714e.js";import{u as D}from"./useConfirmDialog.ba73d887.js";import{d as F,a as S,b as U}from"./index.8fc70fb6.js";import{_ as A}from"./Toggle.9fd663bd.js";import{u as q}from"./useToggles.4ea515b1.js";import{$ as B}from"./drop.cce90c26.js";import{s as z}from"./useAvatar.7737e550.js";import{u as H}from"./useSuspense.29183c13.js";import"./headlessui.esm.b519f347.js";import"./Avatar.4eeca634.js";import"./Dropdown.df5c89e3.js";import"./NavBar.2f63176e.js";import"./departments.4f88a00d.js";import"./meta.48f5205a.js";import"./ExclamationCircleIcon.22c0ccb9.js";import"./roles.e9bab731.js";import"./Dialog.b36041f9.js";import"./Spinner.2e0ab286.js";let J,L;const{userRole:N,user:Q}=F(),W=async()=>{const e=await B.permissions();J.value=e.sort(((e,s)=>{var a,r;return(null==(a=s.permissions)?void 0:a.length)-(null==(r=e.permissions)?void 0:r.length)}))};var X=()=>i().run((()=>{const{route:e,isThePage:i,redirectTo:f,router:g}=S("EditRole"),{toggles:b,setToggles:j,truthyTogglesArray:w}=q(),y=async e=>{L.name=null==e?void 0:e.name,L.title=null==e?void 0:e.title,L.id=null==e?void 0:e.id,j(null==e?void 0:e.permissions,!0,"name")};L||(L=n({id:"",title:"",name:""}),J=d([]));const h=m((()=>({title:{required:u.withMessage("Укажите Название",c),minLength:u.withMessage("не менее 5 символов",p(5))}}))),R=v(h,L,{$lazy:!0});return{isEditRolePage:i,v$:R,saveRole:async()=>{if(!(await R.value.$validate()))return;R.value.$reset();const{success:e}=await z.role((n=((e,s)=>{for(var a in s||(s={}))o.call(s,a)&&l(e,a,s[a]);if(r)for(var a of r(s))t.call(s,a)&&l(e,a,s[a]);return e})({},L),d={permissions:w.value},s(n,a(d))),null,!0);var n,d;return i.value&&N.value.id==L.id?window.location="/roles":e&&await f({name:"Roles"}),e},setRoleForm:y,permissions:b,rawRolePermissions:J,fetchRawRolePermissions:W,role:L,atMountedRoleForm:async()=>{const s=i.value&&e.params.id&&await B.role(e.params.id);await y(s||{}),await W()}}}));const G={class:"col-span-12 sm:col-span-12 divide-y"},K={class:"my-3"},Y={class:"grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-16"},Z={async setup(e){let s,a;const{warn:r}=U(),{rawRolePermissions:o,permissions:t,atMountedRoleForm:l,role:i}=X();[s,a]=f((()=>l())),s=await s,a();const n=({id:e})=>"admin"===i.name||"crud orders"===e&&!t.value["read department tasks"];return(e,s)=>(g(),b("div",G,[(g(!0),b(j,null,w(y(o),((e,s)=>(g(),b("div",{key:s,class:"my-6"},[h("div",K,R(e.title),1),h("div",Y,[(g(!0),b(j,null,w(e.permissions,(e=>(g(),b("div",{key:`${e.id}-${y(t)[e.id]?"on":"off"}`},[k(A,{label:e.title,disabled:n(e),modelValue:y(t)[e.id],"onUpdate:modelValue":[s=>y(t)[e.id]=s,s=>((e,{id:s})=>{"read department tasks"!==s||e||t.value["crud orders"]&&(t.value["crud orders"]=!1),"crud orders"===s&&(console.log(t.value["read department tasks"]),t.value["read department tasks"]||r(" Для включения, необходимо добавить просмотр задач своего отделения",""))})(s,e)]},null,8,["label","disabled","modelValue","onUpdate:modelValue"])])))),128))])])))),128))]))}},ee=I("Вернуться "),se=I("Сохранить "),ae=I("Удалить "),re={class:"grid grid-cols-12 gap-6"},oe={class:"col-span-12 sm:col-span-4"},te={setup(e){const{drop:s}=D(),{dropRole:a}=x(),{route:r}=S(),{v$:o,isEditRolePage:t,saveRole:l,role:i}=X(),n=H(Z),d=m((()=>"admin"===i.name));return(e,m)=>(g(),P(T,{title:"Создание новой роли"},{actions:O((()=>[k(C,{type:"secondary",link:{name:"Roles"}},{default:O((()=>[k(y($),{class:"w-5 h-5 mr-1"}),ee])),_:1}),k(C,{color:"green",onClick:y(l),disabled:y(d)},{default:O((()=>[k(y(V),{class:"w-5 h-5 mr-1"}),se])),_:1},8,["onClick","disabled"]),y(t)&&!y(d)?(g(),P(C,{key:0,color:"red",onClick:m[0]||(m[0]=()=>y(s)((()=>y(a)(y(r).params.id))))},{default:O((()=>[k(y(_),{class:"w-5 h-5 mr-1"}),ae])),_:1})):E("",!0)])),default:O((()=>{var e;return[h("div",re,[h("div",oe,[k(M,{disabled:y(d),label:"Название",modelValue:y(i).title,"onUpdate:modelValue":m[1]||(m[1]=e=>y(i).title=e),required:!0,error:null==(e=y(o).title.$errors[0])?void 0:e.$message,onInput:y(o).title.$touch},null,8,["disabled","modelValue","error","onInput"])]),k(y(n),{loadingMsg:"fetching permissions..."})])]})),_:1}))}};export{te as default};
