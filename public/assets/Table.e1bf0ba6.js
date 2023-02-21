import{V as e,o as a,d as t,e as l,u as s,h as o,W as i,X as d,f as r,J as n,j as u,l as p,t as m,N as f,aC as c}from"./vendor.36c281f3.js";import{_}from"./Link.4e9a6f0f.js";import{_ as v}from"./Badge.4bd69676.js";import{_ as b}from"./Avatar.4eeca634.js";import{s as y}from"./index.e517b156.js";import{_ as k}from"./Table.ec42ea9a.js";import{t as h}from"./index.866650bf.js";import{t as g,l as j,g as w}from"./useAvatar.7737e550.js";import{a as x,f as T,e as E}from"./index.8fc70fb6.js";const $={key:0},V={class:"mx-auto max-w-6xl p-3 bg-gray-50 flex flex-wrap justify-center items-center shadow-inner rounded-md"},B={key:0},A=["data-tooltip"],C=["data-tooltip"],D=["innerHTML"],L={props:{order_id:{type:[String,Number],default:void 0},is_map:{type:Boolean,default:!1},modelValue:{type:[String,Number],required:!1}},emits:["update:modelValue"],async setup(L){let N,H;const M=L,{isThePage:O}=x("OrderEdit"),{fetchTasks:S,removeTask:q,edit:J}=h(),P=[{label:"Название",key:"name"},{label:"Тип",key:"type"},{label:"Bоронка-этап",key:"funnel_etap"},{label:"Ответственный",key:"user"},{label:"Статус",key:"status"},{label:"Крайний срок",key:"deadline_at"},M.order_id?new Array:{label:"Заказ-наряд",key:"order"},{label:"Дата создания",key:"created_at"}];M.order_id||P.push(),P.push();const{state:W,options:X}=y;[N,H]=e((()=>S(!0,M.order_id,M.is_map?1:void 0))),N=await N,H();const z=e=>e.reduce(((e,{pipeline:a,stage:t})=>e+`<span>&#8226;</span> <small>${a.name} - <b>${t.name}</b></small><br />`),"");return(e,y)=>M.is_map?(a(),t("div",$,[l("div",V,[0===s(X).length?(a(),t("p",B,"Нет диагностической карты")):o("",!0),(a(!0),t(i,null,d(s(X),(t=>f((a(),r(v,{onClick:a=>e.$emit("update:modelValue",t.value),key:t.value,point:!0,color:"blue",class:"m-2 p-1 cursor-pointer hover:shadow-lg shadow transition-shadow duration-300 ease-out"},{default:n((()=>[p(m(t.label),1)])),_:2},1032,["onClick"])),[[c,t.value!=L.modelValue]]))),128))])])):(a(),r(k,{key:1,onBottomTouched:y[0]||(y[0]=()=>s(S)(!1,M.order_id)),fields:P,items:s(W).raw,onDelete:y[1]||(y[1]=e=>s(q)(e,!s(O))),onEdit:s(J),noEdit:e=>!s(T)(e,"update"),noDelete:e=>!s(T)(e,"delete"),actions:s(E)(["update tasks","delete tasks"]),class:"relative"},{"td-name":n((({value:e,item:{id:a,department:t}})=>[l("span",{"data-tooltip":e,class:"tooltip"},[u(_,{href:{name:"Task",params:{id:a}}},{default:n((()=>[p(m(s(g)(e)),1)])),_:2},1032,["href"])],8,A)])),"td-type":n((({item:{is_map:e}})=>[u(v,{point:!0,color:e?"green":"purple"},{default:n((()=>[p(m(e?"Дк":"Задачa"),1)])),_:2},1032,["color"])])),"td-user":n((({value:e,item:a})=>{var t,l,s;return[u(b,{title:`${null!=(t=null==e?void 0:e.name)?t:""} ${null!=(l=null==e?void 0:e.middle_name)?l:""}`,subtitle:null!=(s=null==e?void 0:e.office_position)?s:"",image:null==e?void 0:e.avatar},null,8,["title","subtitle","image"])]})),"td-status":n((({value:e})=>[u(v,{point:!0,color:s(j)[e].color},{default:n((()=>[p(m(s(j)[e].label),1)])),_:2},1032,["color"])])),"td-funnel_etap":n((({item:e})=>[l("span",{"data-tooltip":z(e.pipelines),class:"funnel-etap-map"},[l("p",{innerHTML:z(e.pipelines)},null,8,D)],8,C)])),"td-created_at":n((({value:e,item:a})=>[p(m(e.split(" ")[0]),1)])),"td-deadline_at":n((({value:e})=>[p(m(e),1)])),"td-order":n((({value:e})=>{var a;return[u(_,{disabled:null==e,href:{name:"OrderEdit",params:{id:null!=(a=null==e?void 0:e.id)?a:0}}},{default:n((()=>[p(m(e?`#${s(w)(null==e?void 0:e.id)}`:"_"),1)])),_:2},1032,["disabled","href"])]})),_:1},8,["items","onEdit","noEdit","noDelete","actions"]))}};export{L as _};
