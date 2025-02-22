import{B as i,b as o,o as n,k as r,a as c,A as a,G as s,I as l}from"./index-WTmT20yY.js";var p=function(d){var t=d.dt;return`
.p-card {
    background: `.concat(t("card.background"),`;
    color: `).concat(t("card.color"),`;
    box-shadow: `).concat(t("card.shadow"),`;
    border-radius: `).concat(t("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(t("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(t("card.title.font.size"),`;
    font-weight: `).concat(t("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(t("card.subtitle.color"),`;
}
`)},u={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},m=i.extend({name:"card",theme:p,classes:u}),b={name:"BaseCard",extends:l,style:m,provide:function(){return{$pcCard:this,$parentInstance:this}}},f={name:"Card",extends:b,inheritAttrs:!1};function $(e,d,t,y,h,v){return n(),o("div",a({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(n(),o("div",a({key:0,class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header")],16)):r("",!0),c("div",a({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(n(),o("div",a({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(n(),o("div",a({key:0,class:e.cx("title")},e.ptm("title")),[s(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(n(),o("div",a({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[s(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),c("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"content")],16),e.$slots.footer?(n(),o("div",a({key:1,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):r("",!0)],16)],16)}f.render=$;export{f as s};
