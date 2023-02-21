var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,s,r)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[s]=r,t=(e,t)=>{for(var l in t||(t={}))s.call(t,l)&&o(e,l,t[l]);if(a)for(var l of a(t))r.call(t,l)&&o(e,l,t[l]);return e};import{o as l,d as i,j as n,u,S as v,ag as c,H as d,I as m,c as p,E as f,F as b,G as w,r as g,P as _}from"./vendor.36c281f3.js";import{r as $}from"./refreshPassword.0792169f.js";import{b as y,d as j,u as h}from"./index.8fc70fb6.js";import{u as P}from"./useModalForm.1c23c14e.js";import{_ as O}from"./Input.b03a61c6.js";import{v as V,r as A}from"./useAvatar.7737e550.js";import{u as I}from"./useToggles.4ea515b1.js";const U={setup(e){const{v$:a,form:s}=z();return(e,r)=>(l(),i("div",null,[n(O,{label:"Новый пароль",type:"password",modelValue:u(s).password,"onUpdate:modelValue":r[0]||(r[0]=e=>u(s).password=e),onInput:u(a).password.$touch,error:u(a).password.$error?u(a).password.$silentErrors[0].$message:""},null,8,["modelValue","onInput","error"]),n(O,{label:"Повторите пароль",type:"password",modelValue:u(s).confirmPassword,"onUpdate:modelValue":r[1]||(r[1]=e=>u(s).confirmPassword=e),onInput:u(a).confirmPassword.$touch,error:u(a).confirmPassword.$error?u(a).confirmPassword.$silentErrors[0].$message:""},null,8,["modelValue","onInput","error"])]))}},F=y();let E,M;const S=async()=>{if(M.value.$touch(),M.value.$invalid)return;M.value.$reset();const{message:e,success:a}=await V("profile/password",E,"PUT");try{return{message:e,success:a}}finally{a&&F.success(null!=e?e:"Пароль успешно обновлен")}};function z(){return{saveForm:S,render:(...e)=>{const a=v();a.run((()=>{const{render:s}=P({title:"Изменить пароль",RawForm:U,atSubmit:S,atClose:()=>a.stop(),atOpen:()=>{E=d({});const e=$(E);M=m(e,E,{$lazy:!0})}});s(...e),c((()=>{E=void 0,M=void 0}))}))},v$:M,form:E}}const T=y();let q,k;var x=()=>v().run((()=>{const{apiRequest:e}=h(),{rules:a}={rules:p((()=>({email:{required:f.withMessage("Заполните поле",b),email:f.withMessage("Укажите верный email",w)},name:{required:f.withMessage("Заполните поле",b)}})))},{user:s,setUser:r}=j(),{avatar:o,isUploadingAvatar:l,isValideAvatarFileSize:i,log:n,setAvatar:u,updateAvatar:v}=A(),{toggles:$,setToggles:y,bitwisedToggles:P}=I();q||(q=d({name:s.value.name,email:s.value.email,surname:s.value.surname,middle_name:s.value.middle_name,phone:s.value.phone,about:s.value.about,born_at:s.value.born_at,office_position:s.value.office_position}),k=m(a,q,{$lazy:!0}));const O=async()=>{u(s.value),Object.keys(q).forEach((e=>{var a;q[e]=null!=(a=s.value[e])?a:""}));const{is_about_visible:e,is_born_at_visible:a,is_active:r}=s.value;if(y({is_about_visible:e,is_born_at_visible:a,is_active:r}),!q.born_at)return;const[o,t,l]=q.born_at.split(".");q.born_at=`${l}-${t}-${o}`},V=g(!1);return _((async()=>{await O()})),c((()=>{q=void 0,k=void 0})),{v$:k,avatar:o,isUploadingAvatar:l,toggles:$,log:n,form:q,save:async()=>{let a=await k.value.$validate();if(a&&(a=i.value),!a)return;k.value.$reset(),V.value=!0,await v("profile/avatar");const s=await(async()=>{var a,s;const{call:r,data:o,errorMsg:l,success:i}=e("/profile",{method:"put",data:t(t({},q),P.value)});return await r(),i.value?T.success("Ваши данные успешно обновлены"):T.danger(null!=(a=l.value)?a:"Undefined (network?) error"),null==(s=o.value)?void 0:s.user})();r(s),await O(),V.value=!1},isValideAvatarFileSize:i,isBusy:V}}));export{z as p,x as s};
