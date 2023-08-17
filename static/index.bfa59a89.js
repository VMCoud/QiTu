import{p as c,d as u,q as d,s as l,x as f,o as k,c as m,n as p,y as h,e as v}from"./entry.f3a6b6f6.js";const C=u({name:"IconRefresh",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=d("icon"),o=l(()=>[n,`${n}-refresh`,{[`${n}-spin`]:e.spin}]),i=l(()=>{const s={};return e.size&&(s.fontSize=f(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:o,innerStyle:i,onClick:s=>{t("click",s)}}}}),y=["stroke-width","stroke-linecap","stroke-linejoin"],g=v("path",{d:"M38.837 18C36.463 12.136 30.715 8 24 8 15.163 8 8 15.163 8 24s7.163 16 16 16c7.455 0 13.72-5.1 15.496-12M40 8v10H30"},null,-1),b=[g];function z(e,t,n,o,i,a){return k(),m("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:h(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},b,14,y)}var r=c(C,[["render",z]]);const w=Object.assign(r,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+r.name,r)}});export{w as I};
