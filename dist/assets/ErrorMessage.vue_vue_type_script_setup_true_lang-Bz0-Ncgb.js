import{C as S,T as O,K as x,J as B,f as P,M as I,c as p,o as a,w,N as f,a as k,B as r,H as m,b as i,k as g,I as C,O as E,aE as D,az as A,aZ as z,a_ as $,aU as M,d as T,i as N,j as h,t as F,s as R}from"./index-CC3Qq7Jz.js";var K=function(s){var e=s.dt;return`
.p-message {
    border-radius: `.concat(e("message.border.radius"),`;
    outline-width: `).concat(e("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(e("message.content.padding"),`;
    gap: `).concat(e("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: `).concat(e("message.close.button.width"),`;
    height: `).concat(e("message.close.button.height"),`;
    border-radius: `).concat(e("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(e("message.transition.duration"),", color ").concat(e("message.transition.duration"),", outline-color ").concat(e("message.transition.duration"),", box-shadow ").concat(e("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(e("message.close.icon.size"),`;
    width: `).concat(e("message.close.icon.size"),`;
    height: `).concat(e("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(e("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(e("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(e("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    outline-color: `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(e("message.info.close.button.hover.background"),`;
}

.p-message-info.p-message-outlined {
    color: `).concat(e("message.info.outlined.color"),`;
    outline-color: `).concat(e("message.info.outlined.border.color"),`;
}

.p-message-info.p-message-simple {
    color: `).concat(e("message.info.simple.color"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    outline-color: `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(e("message.success.close.button.hover.background"),`;
}

.p-message-success.p-message-outlined {
    color: `).concat(e("message.success.outlined.color"),`;
    outline-color: `).concat(e("message.success.outlined.border.color"),`;
}

.p-message-success.p-message-simple {
    color: `).concat(e("message.success.simple.color"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    outline-color: `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(e("message.warn.close.button.hover.background"),`;
}

.p-message-warn.p-message-outlined {
    color: `).concat(e("message.warn.outlined.color"),`;
    outline-color: `).concat(e("message.warn.outlined.border.color"),`;
}

.p-message-warn.p-message-simple {
    color: `).concat(e("message.warn.simple.color"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    outline-color: `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(e("message.error.close.button.hover.background"),`;
}

.p-message-error.p-message-outlined {
    color: `).concat(e("message.error.outlined.color"),`;
    outline-color: `).concat(e("message.error.outlined.border.color"),`;
}

.p-message-error.p-message-simple {
    color: `).concat(e("message.error.simple.color"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    outline-color: `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(e("message.secondary.close.button.hover.background"),`;
}

.p-message-secondary.p-message-outlined {
    color: `).concat(e("message.secondary.outlined.color"),`;
    outline-color: `).concat(e("message.secondary.outlined.border.color"),`;
}

.p-message-secondary.p-message-simple {
    color: `).concat(e("message.secondary.simple.color"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    outline-color: `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(e("message.contrast.close.button.hover.background"),`;
}

.p-message-contrast.p-message-outlined {
    color: `).concat(e("message.contrast.outlined.color"),`;
    outline-color: `).concat(e("message.contrast.outlined.border.color"),`;
}

.p-message-contrast.p-message-simple {
    color: `).concat(e("message.contrast.simple.color"),`;
}

.p-message-text {
    font-size: `).concat(e("message.text.font.size"),`;
    font-weight: `).concat(e("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(e("message.icon.size"),`;
    width: `).concat(e("message.icon.size"),`;
    height: `).concat(e("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: `).concat(e("message.content.sm.padding"),`;
}

.p-message-sm .p-message-text {
    font-size: `).concat(e("message.text.sm.font.size"),`;
}

.p-message-sm .p-message-icon {
    font-size: `).concat(e("message.icon.sm.size"),`;
    width: `).concat(e("message.icon.sm.size"),`;
    height: `).concat(e("message.icon.sm.size"),`;
}

.p-message-sm .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.sm.size"),`;
    width: `).concat(e("message.close.icon.sm.size"),`;
    height: `).concat(e("message.close.icon.sm.size"),`;
}

.p-message-lg .p-message-content {
    padding: `).concat(e("message.content.lg.padding"),`;
}

.p-message-lg .p-message-text {
    font-size: `).concat(e("message.text.lg.font.size"),`;
}

.p-message-lg .p-message-icon {
    font-size: `).concat(e("message.icon.lg.size"),`;
    width: `).concat(e("message.icon.lg.size"),`;
    height: `).concat(e("message.icon.lg.size"),`;
}

.p-message-lg .p-message-close-icon {
    font-size: `).concat(e("message.close.icon.lg.size"),`;
    width: `).concat(e("message.close.icon.lg.size"),`;
    height: `).concat(e("message.close.icon.lg.size"),`;
}

.p-message-outlined {
    background: transparent;
    outline-width: `).concat(e("message.outlined.border.width"),`;
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: `).concat(e("message.simple.content.padding"),`;
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`)},L={root:function(s){var e=s.props;return["p-message p-component p-message-"+e.severity,{"p-message-outlined":e.variant==="outlined","p-message-simple":e.variant==="simple","p-message-sm":e.size==="small","p-message-lg":e.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},U=S.extend({name:"message",theme:K,classes:L}),V={name:"BaseMessage",extends:B,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:U,provide:function(){return{$pcMessage:this,$parentInstance:this}}},j={name:"Message",extends:V,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.life&&setTimeout(function(){s.visible=!1,s.$emit("life-end")},this.life)},methods:{close:function(s){this.visible=!1,this.$emit("close",s)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:x},components:{TimesIcon:O}};function l(n){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},l(n)}function y(n,s){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);s&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),e.push.apply(e,o)}return e}function v(n){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?y(Object(e),!0).forEach(function(o){H(n,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})}return n}function H(n,s,e){return(s=J(s))in n?Object.defineProperty(n,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[s]=e,n}function J(n){var s=Z(n,"string");return l(s)=="symbol"?s:s+""}function Z(n,s){if(l(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var o=e.call(n,s);if(l(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(n)}var q=["aria-label"];function G(n,s,e,o,c,t){var b=P("TimesIcon"),u=I("ripple");return a(),p(A,r({name:"p-message",appear:""},n.ptmi("transition")),{default:w(function(){return[f(k("div",r({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?m(n.$slots,"container",{key:0,closeCallback:t.close}):(a(),i("div",r({key:1,class:n.cx("content")},n.ptm("content")),[m(n.$slots,"icon",{class:C(n.cx("icon"))},function(){return[(a(),p(E(n.icon?"span":null),r({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(a(),i("div",r({key:0,class:n.cx("text")},n.ptm("text")),[m(n.$slots,"default")],16)):g("",!0),n.closable?f((a(),i("button",r({key:1,class:n.cx("closeButton"),"aria-label":t.closeAriaLabel,type:"button",onClick:s[0]||(s[0]=function(d){return t.close(d)})},v(v({},n.closeButtonProps),n.ptm("closeButton"))),[m(n.$slots,"closeicon",{},function(){return[n.closeIcon?(a(),i("i",r({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(a(),p(b,r({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,q)),[[u]]):g("",!0)],16))],16),[[D,c.visible]])]}),_:3},16)}j.render=G;const Y=z({baseUrl:"https://dicefoundation.com",options:{beforeFetch({options:n}){return n.headers={...n.headers,Accept:"application/json, text/plain"},{options:n}},async onFetchError({error:n,response:s}){if((s==null?void 0:s.status)===401)return $(window.location.pathname),{error:n,response:s};const e=await(s==null?void 0:s.json());return n&&e&&(n.message=e.message),{error:n,response:s}}}}),_=z({baseUrl:"https://dicefoundation.com/api",options:{beforeFetch({options:n,cancel:s}){var c;const o=(c=M().user)==null?void 0:c.token;return o||s(),n.headers={...n.headers,Authorization:`Bearer ${o}`,Accept:"application/json, text/plain"},{options:n}},async onFetchError({error:n,response:s}){if((s==null?void 0:s.status)===401)return $(window.location.pathname),{error:n,response:s};const e=await(s==null?void 0:s.json());return n&&e&&(n.message=e.message),{error:n,response:s}}}}),Q={key:0,class:"w-full"},W={key:0,class:"flex justify-end"},ee=T({__name:"ErrorMessage",props:{closable:{type:Boolean,default:!0},error:{},life:{},reload:{type:Boolean,default:!0},shouldRetry:{type:Boolean,default:!1},size:{default:"small"}},emits:["retry"],setup(n,{emit:s}){const e=s,o=N(()=>n.error?typeof n.error=="string"?n.error:n.error.message:""),c=()=>{e("retry"),n.reload&&window.location.reload()};return(t,b)=>{const u=R,d=j;return o.value?(a(),i("div",Q,[h(d,{severity:"error",size:t.size,closable:t.closable,life:t.life},{default:w(()=>[k("p",null,F(o.value),1),t.shouldRetry?(a(),i("div",W,[h(u,{onClick:c,size:"small",severity:"danger",label:"Retry"})])):g("",!0)]),_:1},8,["size","closable","life"])])):g("",!0)}}});export{_ as $,ee as _,Y as a,j as s};
