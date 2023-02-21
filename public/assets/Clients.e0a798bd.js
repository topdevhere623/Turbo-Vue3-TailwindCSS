var e=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{S as l,H as o,ag as n,c as m,V as i,o as d,d as u,j as c,J as p,u as f,l as b,t as j,r as _,w as v,P as y,A as h,f as w,aP as k,a1 as V,e as x,$ as C}from"./vendor.36c281f3.js";import{a as O,o as g}from"./useAvatar.7737e550.js";import{_ as T}from"./Office.55bfbecd.js";import{_ as P}from"./Button.4b020695.js";import{_ as U}from"./Header.5847de72.js";import{_ as E}from"./Select.bf4a4e1e.js";import{_ as S}from"./Input.b03a61c6.js";import{_ as B}from"./Label.f0bc0125.js";import{_ as D}from"./Link.4e9a6f0f.js";import{u as I}from"./useConfirmDialog.ba73d887.js";import{c as $}from"./clients.e20f9038.js";import{o as A}from"./useOrder.941ce970.js";import{d as F}from"./departments.4f88a00d.js";import{a as H}from"./index.8fc70fb6.js";import{u as L}from"./useIntersectionObserver.7ad3d6a4.js";import{_ as J}from"./Table.ec42ea9a.js";import{u as N}from"./useSuspense.29183c13.js";import"./headlessui.esm.b519f347.js";import"./Avatar.4eeca634.js";import"./Dropdown.df5c89e3.js";import"./NavBar.2f63176e.js";import"./meta.48f5205a.js";import"./ExclamationCircleIcon.22c0ccb9.js";import"./Dialog.b36041f9.js";import"./Spinner.2e0ab286.js";import"./drop.cce90c26.js";import"./Th.32cd08d3.js";const{current:R}=F,{sort:q,fill:z,reset:G}=$,K={id:{label:"По умолчанию",sort:(e,a)=>e.id-a.id},name:{label:"По имени",sort:(e,a)=>e.name>a.name?1:e.name<a.name?-1:0},surname:{label:"По фамилии",sort:(e,a)=>e.surname>a.surname?1:e.surname<a.surname?-1:0}};let M;var Q=()=>l().run((()=>{const{redirectTo:e}=H(),a=A(K,"id",(e=>{q(e)})),{reset:r}=a;M||(M=o({name:"",search:"",number:"",department_id:R,order:"id"}));return{order:a,filter:M,fetchClients:async(e=!1)=>{M.department_id&&(e&&G(),await z(M))},resetFilter:()=>{Object.keys(M).forEach((e=>{"department_id"!==e&&(M[e]="")})),r(!0)},edit:async a=>{await e({name:"EditClient",params:{id:a}})},cleanUp:()=>n((()=>{M=void 0}))}}));const W={emits:["bottomTouched"],async setup(e,{emit:a}){let r,t;const{fetchClients:s,edit:l}=Q(),{state:o,drop:n}=$,{drop:_}=I(),v=[{label:"ФИО",key:"name"},{label:"Паспорт",key:"passport"},{label:"телефон",key:"phones"},{label:"Эл. адрес",key:"emails"}],{pixel:y,container:h}=L((()=>{a("bottomTouched")}),m((()=>o.raw.length>0)));return[r,t]=i((()=>s(!0))),r=await r,t(),(e,a)=>(d(),u("div",{ref:e=>h.value=e},[c(J,{onBottomTouched:a[0]||(a[0]=()=>f(s)()),fields:v,items:f(o).raw,onDelete:a[1]||(a[1]=e=>f(_)((()=>f(n)(e)))),onEdit:a[2]||(a[2]=e=>f(l)(e))},{"td-name":p((({item:e})=>[c(D,{onClick:()=>f(l)(e.id)},{default:p((()=>{var a;return[b(j(`${e.surname} ${e.name} ${null!=(a=e.middle_name)?a:""}`),1)]})),_:2},1032,["onClick"])])),"td-phones":p((({value:e})=>{var a;return[b(j(null!=(a=e[0])?a:"_"),1)]})),"td-emails":p((({value:e})=>{var a;return[b(j(null!=(a=e[0])?a:"_"),1)]})),_:1},8,["items"]),c(f(y))],512))}},X=b("Автомобили "),Y=b("Создать "),Z=b("Фильтр"),ee={class:"flex flex-wrap gap-2 items-start"},ae={class:"text-center ml-5"},re=b("сбросить"),te={setup(e){const{filter:l,order:o,resetFilter:n,fetchClients:m,cleanUp:i}=Q(),{criteriaOptions:u}=o,b=N(),j=_(""),D=()=>{l.department_id&&(j.value=g(l))};return v((()=>Reflect.deleteProperty(((e,l)=>{for(var o in l||(l={}))r.call(l,o)&&s(e,o,l[o]);if(a)for(var o of a(l))t.call(l,o)&&s(e,o,l[o]);return e})({},l),"department_id")),O(D),{deep:!0}),v((()=>l.department_id),D),y(i),(e,a)=>{const r=h("v-can");return d(),w(T,{title:"Клиенты","main-classes":"flex flex-col min-w-0 flex-1 md:overflow-hidden overflow-auto"},{actions:p((()=>[c(r,{ability:["crud cars","crud car marks","crud fuels","crud engine volumes","crud car models"]},{default:p((()=>[c(P,{type:"secondary",link:{name:"Cars"}},{default:p((()=>[c(f(k),{class:"w-5 h-5 mr-1"}),X])),_:1})])),_:1}),c(r,{ability:"crud clients"},{default:p((()=>[c(P,{color:"blue",link:{name:"ClientForm"}},{default:p((()=>[c(f(V),{class:"w-5 h-5 mr-1"}),Y])),_:1})])),_:1})])),default:p((()=>[c(U,null,{default:p((()=>[Z])),_:1}),x("div",ee,[c(S,{label:"Поиск",modelValue:f(l).search,"onUpdate:modelValue":a[0]||(a[0]=e=>f(l).search=e)},null,8,["modelValue"]),c(S,{label:"Имя",modelValue:f(l).name,"onUpdate:modelValue":a[1]||(a[1]=e=>f(l).name=e)},null,8,["modelValue"]),c(S,{label:"Номер машины",modelValue:f(l).number,"onUpdate:modelValue":a[2]||(a[2]=e=>f(l).number=e)},null,8,["modelValue"]),c(E,{label:"Сортировать",options:f(u),modelValue:f(l).order,"onUpdate:modelValue":a[3]||(a[3]=e=>f(l).order=e),class:"w-44"},null,8,["options","modelValue"]),x("div",ae,[c(B,null,{default:p((()=>[re])),_:1}),c(P,{type:"secondary",class:"rounded-full",onClick:a[4]||(a[4]=()=>f(n)())},{default:p((()=>[c(f(C),{class:"h-4 w-4 text-gray-600"})])),_:1})])]),c(f(b),{key:j.value},{default:p((()=>[c(W,{onBottomTouched:a[5]||(a[5]=()=>f(m)())})])),_:1})])),_:1})}}};export{te as default};
