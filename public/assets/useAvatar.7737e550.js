import{b as e,u as a}from"./index.8fc70fb6.js";import{r,c as s,ag as t}from"./vendor.36c281f3.js";const n=(e,a,r=window)=>function(...s){if(a.value)return e.call(r,...s)},o=(e,...a)=>{const r={};return e&&Object.keys(e).forEach((s=>{if(a.includes(s))return;const t=Reflect.get(e,s);null!=t&&""!==t&&Reflect.set(r,s,t)})),r},c=function(e,a=1500){let r;return function(){const s=this,t=arguments;clearTimeout(r),r=setTimeout((()=>{e.apply(s,t)}),a)}},l=(e=[],a="",r)=>[...new Set(e.map((e=>{const r=Reflect.get(e,a);return r?r[0].toUpperCase():"_"})))].sort().reduce(((s,t)=>(s[t]=e.filter((e=>{const r=Reflect.get(e,a);return(r?r[0].toUpperCase():"_")===t})).map(r),s)),{});function u(e){return new Promise((a=>{setTimeout(a,e)}))}function p(e=""){return e.includes("/")&&([e]=e.split("/")),"s"===e[e.length-1]}const i=e=>e.includes("/")?e.split("/")[0]:e,d=e=>{return e.includes("/")?e:p(a=`${e.replace("_","-")}`)?a:"y"===a[a.length-1]?(a+="$_").replace("y$_","ies"):`${a}s`;var a},_=(e="")=>({path:d(e),ressource:i(e)}),m=(e,a=[])=>Object.getOwnPropertyNames(e).reduce(((r,s)=>r+(a.includes(s)?"":e[s])),""),g=e=>JSON.parse(JSON.stringify(e)),f=e=>{for(e=`${e}`;e.length<"6";)e=`0${e}`;return e},v=(e="")=>{const[a,r]=e.split(" "),[s,t,n]=a.split("."),[o,c]=r.split(":");return new Date(n,t-1,s,o,c)},y={wait:{color:"yellow",label:"Ожидает"},process:{color:"green",label:"В работе"},pause:{color:"red",label:"На паузе"},done:{color:"indigo",label:"Завершена"},cancel:{color:"red",label:"Отменено"}},w=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь","Месяц","Год"],h=e=>{if("string"==typeof e){const[a,r,s]=e.split(".");return`${s}-${r}-${a}`}return e instanceof Date?e.toISOString().split("T")[0]:"number"==typeof e?h(new Date(e)):e},k=(e="",a=20)=>e.length>a?`${e.substring(0,a)} ...`:e,$=e=>{[e]=e.toISOString().split("T");const[a,r,s]=e.split("-");return`${s}-${r}-${a}`},b=e=>{let a=0;return r=>{const s=`${Date.now()}-${null!=e?e:"empty"}-${null!=r?r:"empty"}-${a}`;return a++,s}};const O=e=>new Proxy(e,{get(e,a){var r;const s=e[a];return"object"==typeof s?O(s):null!=(r=null!=s?s:e._)?r:"Fix the messages file"}});var q=O({fetch:{error:{users:"Не удалось получить пользователей",user:"Не удалось получить пользователя",permissions:"Не удалось получить разрешения",roles:"Не удалось получить роли",role:"Не удалось получить роль",departments:"Не удалось получить отделы",department:"Не удалось получить отделение",clients:"Не удалось получить клиентов",client:"Не удалось получить клиент",cities:"Не удалось получить города",cars:"Не удалось получить aвтомобили",car:"Не удалось получить автомобиль",car_marks:"Не удалось получить Марки автомобиля",car_mark:"Не удалось получить Марка автомобиля",car_models:"Не удалось получить модели автомобиля",car_model:"Не удалось получить модель автомобиля",engine_volumes:"Не удалось получить объем двигателя автомобиля",fuels:"Не удалось получить объем видов топлива",finance_groups:"Не удалось получить cписок финансовые группы",finance_group:"Не удалось получить финансовых групп",finances:"Не удалось получить финансы",finance:"Не удалось получить финансовая сделка",tasks:"Не удалось получить задачи",task:"Не удалось получить задание",pipelines:"Не удалось получить воронки",pipeline:"Не удалось получить воронка",stages:"Не удалось получить этапы воронки",stage:"Не удалось получить этап воронки",process_categories:"Не удалось получить процессы",process_category:"Не удалось получить процесс",process_tasks:"Не удалось получить задачи",process_task:"Не удалось получить задание",map_questions:"Не удалось получить диагностическая карта - вопросы",map_question:"Не удалось получить вопрос",appeal_reasons:"Не удалось получить причины обращения",appeal_reason:"Не удалось получить причина обращения",_:"Не удалось получить ресурс"}},save:{success:{user:"Данные сотрудника успешно сохранены",role:"Данные ролей успешно сохранены",department:"Данные oтделa успешно сохранены",client:"Данные клиента успешно сохранены",car:"Данные автомобиля успешно сохранены",car_mark:"Данные Марка автомобиля успешно сохранены",car_model:"Данные модели автомобиля успешно сохранены",finance_group:"финансовая группа успешно сохранена",finance:"финансовая сделка успешно сохранена",producer:"Данные производителя успешно сохранены",storage:"Данные склада успешно сохранены",product:"Данные продукта успешно сохранены",task:"Данные задачи успешно сохранены",pipeline:"Данные воронкa успешно сохранены",stage:"Данные этапа воронки успешно сохранены",process_category:"Данные процесса успешно сохранены",process_task:"Данные задачи успешно сохранены",map_question:"Данные вопроса успешно сохранены",appeal_reason:"Причина обращения данные успешно сохранены",payment:"Оплата данные успешно сохранены",order:"Данные заказ наряда успешно сохранены",_:"Данные ресурса успешно сохранены"},error:{user:"Не удалось сохранить данные сотрудника",role:"Не удалось сохранить данные роли",department:"Не удалось сохранить данные отдела",client:"Не удалось сохранить данные клиента",car:"Не удалось сохранить данные автомобиля",car_mark:"Не удалось сохранить данные марки автомобиля",car_model:"Не удалось сохранить данные модели автомобиля",finance_group:"Не удалось сохранить данные финансовой группы",finance:"Не удалось сохранить данные финансовой транзакции",producer:"Не удалось сохранить данные производителя",storage:"Не удалось сохранить данные склада",product:"Не удалось сохранить данные товар",task:"Не удалось сохранить данные задачи",pipeline:"Не удалось сохранить данные воронкa",stage:"Не удалось сохранить данные этапа воронки",process_category:"Не удалось сохранить данные процесса",process_task:"Не удалось сохранить данные задачи",map_question:"Не удалось сохранить данные вопроса",appeal_reason:"Не удалось сохранить данные причина обращения",payment:"Не удалось сохранить данные oплата",order:"Не удалось сохранить данные заказ наряда",_:"не удалось сохранить данные ресурсa"}},drop:{success:{user:"Сотрудник успешно удален",role:"Роль успешно удалена",department:"Отдел успешно удален",client:"Клиент успешно удален",car:"Автомобили успешно удален",car_mark:"Марка автомобиля успешно удален",car_model:"Модель автомобиля успешно удален",finance_group:"Группа финансов успешно удалена",finance:"Финансовая транзакция успешно удалена",producer:"производитель успешно удален",product:"Товар успешно удален",storage:"Склад успешно удален",task:"Задача успешно удалена",pipeline:"Воронка успешно удалена",stage:"Зтап воронки успешно удален",process_category:"Процесс успешно удален",process_task:"Задача успешно удалена",map_question:"Вопрос успешно удален",appeal_reason:"Причина обращения успешно удалена",payment:"Оплата успешно удалена",order:"Заказ-наряд успешно удален",_:"Ресурс успешно удален"},error:{user:"Не удалось удалить пользователя",role:"Не удалось удалить Роль",department:"Не удалось удалить отделение",client:"Не удалось удалить клиент",car:"Не удалось удалить Автомобили",car_mark:"Не удалось удалить Марка автомобиля",car_model:"Не удалось удалить модель автомобиля",finance_group:"Не удалось удалить финансовые группы",finance:"Не удалось удалить финансовую транзакцию",producer:"Не удалось удалить производитель",product:"Не удалось удалить товар",storage:"Не удалось удалить склада",payment:"Не удалось удалить oплата",order:"Не удалось удалить заказ наряда",_:"Не удалось удалить ресурс"}},modal:{create:{car:"Создание нового автомобиля",client:"Добавление нового клиента",car_mark:"Создайте марка автомобиля",department:"Создайте отдела",car_model:"Создайте Модель автомобиля",finance_group:"Создайте финансовая группа",finance:"Создание финансовой сделки",storage:"Создайте склад",producer:"Создайте производитель",appeal_reason:"Создание новой причины обращения",pipeline:"Создайте новую воронку",stage:"Создайте новый этап воронки",order_stage:"Создайте новый этап",process_category:"Создайте новый процесс",payment:"Создайте oплата",products_request:"Добавить новую запчасть",_:"Создайте новый ресурс"},update:{car_mark:"Oбновляете марка автомобиля",department:"Oбновляете отдела",car_model:"Oбновляете Модель автомобиля",finance_group:"Oбновляете финансовая группа",finance:"Oбновляете финансовая сделка",storage:"Oбновляете склад",producer:"Oбновляете производитель",appeal_reason:"Обновляете причины обращения",pipeline:"Обновляете воронку",stage:"Обновляете этап воронки",order_stage:"Обновляете этап",process_category:"Обновление процесса",payment:"Обновление oплата",products_request:"Обновить запчасть",_:"Oбновляете ресурс"}},auth:{_:""}});const S=e(),{apiRequest:j}=a(),R=async function(e,a){const{call:r,errorMsg:s,success:t,data:n}=j();return await r(e,{method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}}),{message:s.value,success:t.value,data:n.value}},T=async(e,a,r)=>{const{call:s,errorMsg:t,success:n,data:o}=j();return await s(e,{method:r,data:a}),{message:t.value,success:n.value,data:o.value}};var x=new Proxy((async function(e,a){var r;const s=null!=(r=null==this?void 0:this.id)?r:a;return T(`/${e}/${null!=s?s:""}`,o(this,"id"),s?"put":"post")}),{get(e,a){const{path:r,ressource:s}=_(a);return async function(a,t,n=!1){let{success:o,message:c,data:l}=await e.call(a,r,t);c=o?q.save.success[s]:null!=c?c:q.save.error[s];try{return{message:c,success:o,data:l}}finally{n&&S[o?"success":"danger"](c)}}},apply(e,a,r){const{data:s,path:t,id:n}=r[0];return e.call(s,t,n)}});const D=e(),U={avatar:"https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",photo:"https://webcolours.ca/wp-content/uploads/2020/10/webcolours-unknown.png"};let A,F,P;const C=e=>{[F.value]=e.target.files,A.value=window.URL.createObjectURL(F.value)},N=(e,a="avatar")=>{var r;F.value=null,e&&(A.value=null!=(r=e[a])?r:U[a])},z=async(e,a="avatar")=>{if(!F.value)return!0;P.value=!0;const r=new FormData;r.append(a,F.value);const{success:s,message:t}=await R(e,r);return P.value=!1,s?D.success("Фото успешно обновлено"):D.danger(null!=t?t:"Что-то пошло не так, не удалось сохранить фото"),s};function I(){A=r(U.avatar),F=r(null),P=r(!1);const e=s((()=>!F.value||F.value.size<"10000000"));return t((()=>{A=void 0,F=void 0,P=void 0})),{avatar:A,avatarFile:F,isUploadingAvatar:P,isValideAvatarFileSize:e,log:C,setAvatar:N,updateAvatar:z,defaults:U}}export{c as a,l as b,q as c,U as d,_ as e,o as f,f as g,h,p as i,g as j,u as k,y as l,$ as m,v as n,m as o,b as p,n as q,I as r,x as s,k as t,R as u,T as v,w};
