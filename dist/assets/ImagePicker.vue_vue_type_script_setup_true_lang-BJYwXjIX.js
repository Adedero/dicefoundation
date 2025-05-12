import{C as z,J as C,b as r,o as n,B as g,a as f,d as y,i as B,aD as P,I,r as m,j as c,H as N,s as D,aG as F,w as k,c as j,k as G,F as L,e as R,f as V,m as W,n as U}from"./index-BernQVxA.js";import{_ as A,$ as E}from"./ErrorMessage.vue_vue_type_script_setup_true_lang-sh5mCXpp.js";var H=function(o){var s=o.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(s("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(s("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(s("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(s("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(s("progressspinner.color.4"),`;
    }
}
`)},J={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},M=z.extend({name:"progressspinner",theme:H,classes:J}),q={name:"BaseProgressSpinner",extends:C,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:M,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},_={name:"ProgressSpinner",extends:q,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},K=["fill","stroke-width"];function O(e,o,s,a,d,i){return n(),r("div",g({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(n(),r("svg",g({class:e.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},e.ptm("spin")),[f("circle",g({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,K)],16))],16)}_.render=O;const Q=y({__name:"Icon",props:{name:{},size:{}},setup(e){const o=B(()=>{if(e.size)return typeof e.size=="number"||!isNaN(parseFloat(e.size))?`${e.size}px`:e.size});return(s,a)=>(n(),r("span",{class:I(`pi pi-${s.name}`),style:P(`font-size: ${o.value}`)},null,6))}}),T={key:0,class:"w-full grid place-content-center"},X={key:2},Y={key:0,class:"grid gap-5 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]"},Z=["onClick"],ee=["src"],ne={key:1,class:"flex flex-col items-center justify-center gap-3"},oe=y({__name:"ImagePicker",emits:["select"],setup(e,{emit:o}){const s=o,a=m(!1),d=m(!1),i=m(),u=m(),h=async()=>{W(d,i);const{data:l,error:t}=await E("gallery",{cache:"default"}).json();U(d,i,t),l.value&&(u.value=l.value)},b=l=>{s("select",l),a.value=!1};return(l,t)=>{const v=D,$=_,x=Q,S=V("RouterLink"),w=F;return n(),r("div",null,[f("div",{onClick:t[0]||(t[0]=p=>a.value=!0),class:"cursor-pointer"},[N(l.$slots,"default",{},()=>[c(v,{label:"Choose Image",fluid:""})])]),c(w,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=p=>a.value=p),onShow:h,modal:"",header:"Gallery",class:"w-full md:w-[32rem]"},{default:k(()=>[d.value?(n(),r("div",T,[c($,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):i.value?(n(),j(A,{key:1,error:i.value,"should-retry":"",onRetry:h},null,8,["error"])):u.value?(n(),r("div",X,[u.value.length>0?(n(),r("div",Y,[(n(!0),r(L,null,R(u.value,p=>(n(),r("div",{key:p.id,onClick:se=>b(p),class:"cursor-pointer border rounded-md w-full h-40 overflow-hidden bg-neutral-200 dark:bg-neutral-800"},[f("img",{src:p.url,class:"w-full h-full object-cover"},null,8,ee)],8,Z))),128))])):(n(),r("div",ne,[c(x,{name:"image",size:100,class:"text-neutral-300 dark:text-neutral-700"}),t[2]||(t[2]=f("p",{class:"font-semibold text-lg text-neutral-300 dark:text-neutral-700"},"No files",-1)),c(S,{to:{name:"gallery"}},{default:k(()=>[c(v,{label:"Upload files",icon:"pi pi-image"})]),_:1})]))])):G("",!0)]),_:1},8,["visible"])])}}});export{oe as _};
