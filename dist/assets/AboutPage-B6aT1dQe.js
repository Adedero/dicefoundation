import{_ as k}from"./VPage.vue_vue_type_script_setup_true_lang-C4NydXBT.js";import{s as $}from"./index-C4WMVmmE.js";import{d as j,u as B,h as C,r,i as P,c as A,w as _,a as n,j as i,b as N,k as S,l as v,s as E,o as f,m as F,n as T}from"./index-Cjbmz-ZE.js";import{$ as l,_ as z}from"./ErrorMessage.vue_vue_type_script_setup_true_lang-B4fsL62Q.js";import"./index-93PTaMgM.js";const D={class:"flex justify-end mt-6"},M={key:0},R={class:"mt-4 md:col-span-3 grid gap-1"},K=j({__name:"AboutPage",async setup(U){var p;let s,d;const c=B(),{data:u,error:g}=([s,d]=C(()=>l("pages?where=title,about").json()),s=await s,d(),s),t=r(((p=u.value)==null?void 0:p[0])??{title:"about",content:{description:""}}),o=r(!1),m=r(null),b=async()=>{F(o,m);const{data:a,error:e}=t.value.id?await l(`pages/${t.value.id}`).put({data:t.value}).json():await l("pages").post({data:t.value}).json();T(o,m,e),a.value&&c.add({severity:"success",summary:"Success",detail:"Saved",life:3e3}),e.value&&c.add({severity:"error",summary:"Error",detail:e.value.message,life:3e3})},y=P(()=>{var a;return!((a=t.value.content)!=null&&a.description)});return(a,e)=>{const h=E,w=$,x=k;return f(),A(x,{header:"About Page"},{actions:_(()=>[n("div",D,[i(h,{onClick:b,loading:o.value,label:"Save",icon:"pi pi-save",disabled:o.value||y.value},null,8,["loading","disabled"])])]),default:_(()=>[n("div",null,[i(z,{error:v(g),shouldRetry:""},null,8,["error"]),v(u)?(f(),N("div",M,[n("div",R,[e[1]||(e[1]=n("label",{class:"text-sm font-medium"},"Description",-1)),i(w,{modelValue:t.value.content.description,"onUpdate:modelValue":e[0]||(e[0]=V=>t.value.content.description=V),modelModifiers:{trim:!0},rows:"18",fluid:"",class:"resize-none"},null,8,["modelValue"])])])):S("",!0)])]),_:1})}}});export{K as default};
