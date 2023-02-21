import{r as e,w as a,A as s,f as o,J as t,ag as l,o as r,u as d,j as i,aB as m,a0 as n,a1 as p,e as u,d as c,n as f,h as b,$ as j,l as _}from"./vendor.36c281f3.js";import{r as w}from"./ArrowLeftIcon.b9909565.js";import{a as y,o as V,h}from"./useAvatar.7737e550.js";import{_ as v}from"./Office.55bfbecd.js";import{_ as k}from"./Button.4b020695.js";import{_ as g}from"./ButtonGroup.f61666b1.js";import{_ as x}from"./Header.5847de72.js";import{_ as T}from"./Input.b03a61c6.js";import{_ as B}from"./Label.f0bc0125.js";import{_ as U}from"./Select.bf4a4e1e.js";import{t as A}from"./index.866650bf.js";import{_ as C}from"./Table.e1bf0ba6.js";import{u as D}from"./useSuspense.29183c13.js";import{p as S}from"./index.ce6adbb1.js";import{s as I}from"./employees.2bffecd5.js";import{o as O}from"./orders.a1ebe807.js";import{_ as $}from"./StoSelect.c4156f5b.js";import{a as L}from"./index.8fc70fb6.js";import"./headlessui.esm.b519f347.js";import"./Avatar.4eeca634.js";import"./Dropdown.df5c89e3.js";import"./NavBar.2f63176e.js";import"./departments.4f88a00d.js";import"./drop.cce90c26.js";import"./meta.48f5205a.js";import"./ExclamationCircleIcon.22c0ccb9.js";import"./useOrder.941ce970.js";import"./index.e517b156.js";import"./useConfirmDialog.ba73d887.js";import"./Dialog.b36041f9.js";import"./Spinner.2e0ab286.js";import"./Link.4e9a6f0f.js";import"./Badge.4bd69676.js";import"./Table.ec42ea9a.js";import"./Th.32cd08d3.js";import"./useIntersectionObserver.7ad3d6a4.js";const F=_("Назад "),P=_("Архив "),E=_("Воронка "),G=_("Создать "),H=_("Фильтр"),J={class:"flex flex-wrap gap-1 items-start"},M={class:"w-48"},N={key:0},q=_("Статус"),z=_("В работе"),K=_("Закрытые"),Q={class:"text-center ml-3"},R=_("сбросить"),W={setup(_){const{isThePage:W}=L("TasksArchive"),X=D(C),{order:{criteriaOptions:Y},filter:Z,resetFilter:ee,current:ae,clearMemo:se}=A(W),{options:oe,load:te}=S,{options:le,load:re}=I,{options:de,load:ie}=O,me=e("");return a(Z,y((()=>{Z.department_id&&(me.value=V(Z,["department_id"]))}))),a(ae,(async e=>{e&&await Promise.all([te(),re({department_id:e}),ie({department_id:e})])}),{immediate:!0}),l(se),(e,a)=>{const l=s("v-can");return r(),o(v,{title:"Задачи"},{actions:t((()=>[d(W)?(r(),o(k,{key:0,type:"secondary",link:{name:"Tasks"}},{default:t((()=>[i(d(w),{class:"w-5 h-5 mr-1"}),F])),_:1})):(r(),o(k,{key:1,link:{name:"TasksArchive"}},{default:t((()=>[i(d(m),{class:"w-5 h-5 mr-1"}),P])),_:1})),i(l,{ability:"crud pipelines"},{default:t((()=>[i(k,{type:"secondary",link:{name:"Funnels"}},{default:t((()=>[i(d(n),{class:"w-5 h-5 mr-1"}),E])),_:1})])),_:1}),i(l,{ability:"create tasks"},{default:t((()=>[i(k,{color:"blue",link:{name:"TaskCreate"}},{default:t((()=>[i(d(p),{class:"w-5 h-5 mr-1"}),G])),_:1})])),_:1})])),default:t((()=>[i(x,null,{default:t((()=>[H])),_:1}),u("div",J,[u("div",M,[i(T,{label:"Название",modelValue:d(Z).name,"onUpdate:modelValue":a[0]||(a[0]=e=>d(Z).name=e)},null,8,["modelValue"])]),i(T,{label:"Дата от",type:"date",modelValue:d(Z).start_date,"onUpdate:modelValue":a[1]||(a[1]=e=>d(Z).start_date=e),max:d(h)(new Date)},null,8,["modelValue","max"]),i(T,{label:"Дата до",type:"date",modelValue:d(Z).end_date,"onUpdate:modelValue":a[2]||(a[2]=e=>d(Z).end_date=e),max:d(h)(new Date)},null,8,["modelValue","max"]),d(W)?b("",!0):(r(),c("div",N,[i(B,{class:"mb-1"},{default:t((()=>[q])),_:1}),i(g,null,{default:t((()=>[i(k,{type:"secondary",onClick:a[3]||(a[3]=e=>d(Z).status="process"),group:"left",class:f(["whitespace-nowrap","process"===d(Z).status?"bg-green-100":""])},{default:t((()=>[z])),_:1},8,["class"]),i(k,{type:"secondary",onClick:a[4]||(a[4]=e=>d(Z).status="done"),group:"right",class:f(["whitespace-nowrap","done"===d(Z).status?"bg-indigo-100":""])},{default:t((()=>[K])),_:1},8,["class"])])),_:1})])),u("div",null,[i($,{onBottomTouched:a[5]||(a[5]=()=>{}),label:"Исполнитель",options:d(le),modelValue:d(Z).user_id,"onUpdate:modelValue":a[6]||(a[6]=e=>d(Z).user_id=e),class:"w-44",search:""},null,8,["options","modelValue"])]),u("div",null,[i($,{onBottomTouched:a[7]||(a[7]=()=>{}),label:"Заказ-наряд",options:d(de),modelValue:d(Z).order_id,"onUpdate:modelValue":a[8]||(a[8]=e=>d(Z).order_id=e),class:"w-44"},null,8,["options","modelValue"])]),u("div",null,[i($,{onBottomTouched:a[9]||(a[9]=()=>{}),label:"Воронка",options:d(oe),modelValue:d(Z).pipeline_id,"onUpdate:modelValue":a[10]||(a[10]=e=>d(Z).pipeline_id=e),class:"w-44"},null,8,["options","modelValue"])]),u("div",null,[i(U,{label:"Сортировать",options:d(Y),modelValue:d(Z).order,"onUpdate:modelValue":a[11]||(a[11]=e=>d(Z).order=e),class:"w-44"},null,8,["options","modelValue"])]),u("div",Q,[i(B,null,{default:t((()=>[R])),_:1}),i(k,{type:"secondary",class:"rounded-full",onClick:a[12]||(a[12]=()=>d(ee)())},{default:t((()=>[i(d(j),{class:"h-4 w-4 text-gray-600"})])),_:1})])]),i(d(X),{key:`tab-${me.value}-${d(ae)}-${d(W)?"archived":""}`})])),_:1})}}};export{W as default};
