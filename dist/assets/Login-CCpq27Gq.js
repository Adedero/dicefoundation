import{s as b}from"./index-BZlZQXpL.js";import{d as h,r as u,aT as k,b as c,j as a,w as m,a as o,k as x,s as $,p as C,aW as y,o as p}from"./index-Cjbmz-ZE.js";import{s as B}from"./index-BNSzrili.js";import{s as N}from"./index-D-JN0ZYy.js";import{_ as E,a as L}from"./ErrorMessage.vue_vue_type_script_setup_true_lang-B4fsL62Q.js";import"./index-jtX0e_pZ.js";import"./index-93PTaMgM.js";const M={class:"w-dvw h-full grid place-content-center"},P={class:"grid gap-4"},T={class:"grid gap-1"},U={class:"grid gap-1"},j={key:0,class:"text-red-500"},F=h({__name:"Login",setup(R){const s=u({}),r=y(),v=k(),t=u(),n=u();async function f(){n.value=void 0,t.value=!0;const{data:i,error:e}=await L("/auth/login").post(s.value).json();if(t.value=!1,n.value=e.value,i.value){v.setUser(i.value);const l=r.currentRoute.value.query.redirect;if(l){r.push(l.toString());return}r.push({name:"home"})}}return(i,e)=>{const l=E,g=N,_=B,w=$,V=b;return p(),c("div",M,[a(V,{class:"w-80"},{title:m(()=>e[2]||(e[2]=[C(" Log in ")])),content:m(()=>[o("div",P,[a(l,{error:n.value},null,8,["error"]),o("div",T,[e[3]||(e[3]=o("label",{class:""},"Email",-1)),a(g,{modelValue:s.value.email,"onUpdate:modelValue":e[0]||(e[0]=d=>s.value.email=d),modelModifiers:{trim:!0},type:"email",fluid:""},null,8,["modelValue"])]),o("div",U,[e[4]||(e[4]=o("label",{class:""},"Password",-1)),a(_,{modelValue:s.value.password,"onUpdate:modelValue":e[1]||(e[1]=d=>s.value.password=d),modelModifiers:{trim:!0},"toggle-mask":"",feedback:!1,fluid:""},null,8,["modelValue"]),s.value.password&&s.value.password.length<6?(p(),c("small",j," Password must contain at least 6 characters. ")):x("",!0)]),o("div",null,[a(w,{class:"mt-3",onClick:f,loading:t.value,disabled:!s.value.email||!s.value.password||s.value.password.length<6||t.value,label:"Log in",icon:"pi pi-sign-in","icon-pos":"right",fluid:""},null,8,["loading","disabled"])])])]),_:1})])}}});export{F as default};
