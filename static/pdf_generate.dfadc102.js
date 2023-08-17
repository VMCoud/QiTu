import{p as J1,d as D1,q as W1,s as x1,x as Q1,o as u,c as f,n as A,y as X1,e,u as G1,a as Y1,r as i,b as h,g as a,w as n,h as r,i as Q,j as X,F as G,M as c,_ as ee,k as h1,N as f1,f as p,l as n1,O as g1,P as q,t as H,Q as te,T as ae,X as le}from"./entry.f3a6b6f6.js";import{_ as se}from"./Login.vue.5cd924bf.js";import{aw as ne,ax as oe,ay as ie,az as ce,aA as de,aB as re,aC as ue,aD as _e,aE as pe,aF as ve}from"./api.75434be6.js";import{_ as he}from"./header_jifen.2383ebc7.js";import{f as fe}from"./FileSaver.min.11d3c3aa.js";import{u as ge}from"./counter.8b7d25a0.js";import{m as C1,H as V1}from"./index.7f22f95f.js";import{m as me}from"./index.148f5fd9.js";import{a as we}from"./index.f62d9c3c.js";import{I as F1}from"./index.bfa59a89.js";import{I as ye}from"./index.a99b4c2a.js";import{I as be}from"./index.cabe1884.js";import{I as ke}from"./index.24dc7742.js";import"./nuxt-link.1ccb43b1.js";import"./safe_login.a991f1f7.js";import"./wechat.f8f675e5.js";import"./captcha-2.41d59436.js";import"./index.8ed57307.js";import"./index.e62e449a.js";import"./index.25e3049d.js";import"./katex.69619638.js";const Me=D1({name:"IconMosaic",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:d=>["butt","round","square"].includes(d)},strokeLinejoin:{type:String,default:"miter",validator:d=>["arcs","bevel","miter","miter-clip","round"].includes(d)},rotate:Number,spin:Boolean},emits:{click:d=>!0},setup(d,{emit:z}){const w=W1("icon"),k=x1(()=>[w,`${w}-mosaic`,{[`${w}-spin`]:d.spin}]),Y=x1(()=>{const x={};return d.size&&(x.fontSize=Q1(d.size)?`${d.size}px`:d.size),d.rotate&&(x.transform=`rotate(${d.rotate}deg)`),x});return{cls:k,innerStyle:Y,onClick:x=>{z("click",x)}}}}),ze=["stroke-width","stroke-linecap","stroke-linejoin"],xe=e("path",{d:"M6 7h4v4H6V7ZM6 23h4v4H6v-4ZM6 38h4v4H6v-4ZM14 15h4v4h-4v-4ZM14 31h4v4h-4v-4ZM22 7h4v4h-4V7ZM22 23h4v4h-4v-4ZM22 38h4v4h-4v-4ZM30 15h4v4h-4v-4ZM30 31h4v4h-4v-4ZM38 7h4v4h-4V7ZM38 23h4v4h-4v-4ZM38 38h4v4h-4v-4Z",fill:"currentColor",stroke:"none"},null,-1),Ce=e("path",{d:"M6 7h4v4H6V7ZM6 23h4v4H6v-4ZM6 38h4v4H6v-4ZM14 15h4v4h-4v-4ZM14 31h4v4h-4v-4ZM22 7h4v4h-4V7ZM22 23h4v4h-4v-4ZM22 38h4v4h-4v-4ZM30 15h4v4h-4v-4ZM30 31h4v4h-4v-4ZM38 7h4v4h-4V7ZM38 23h4v4h-4v-4ZM38 38h4v4h-4v-4Z"},null,-1),Ve=[xe,Ce];function Fe(d,z,w,k,Y,y){return u(),f("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:A(d.cls),style:X1(d.innerStyle),"stroke-width":d.strokeWidth,"stroke-linecap":d.strokeLinecap,"stroke-linejoin":d.strokeLinejoin,onClick:z[0]||(z[0]=(...x)=>d.onClick&&d.onClick(...x))},Ve,14,ze)}var m1=J1(Me,[["render",Fe]]);const De=Object.assign(m1,{install:(d,z)=>{var w;const k=(w=z==null?void 0:z.iconPrefix)!=null?w:"";d.component(k+m1.name,m1)}}),He={style:{width:"15%","min-width":"260px","margin-left":"1px"},class:"flex h-full flex-col bg-[#fafbfc] chat-message-left ai_pdf_list"},$e={key:0,class:"chat_list_message p-2 bg-[#fafbfc]"},Ze={class:"all_message mb-2 mt-2"},Ie={class:"chat-list mb-2"},Pe={class:"bot_info"},Be={class:"hover_action"},Se=["onClick"],Le={class:"card-body"},Te={class:"media"},Ne=e("div",{class:"avatar me-3"},[e("svg",{t:"1688027443507",class:"icon w-10 inline h-auto",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2439",width:"64",height:"64 "},[e("path",{d:"M995.17 246.71v485.97H35.29V246.71c0-118.55 96.1-214.66 214.66-214.66h530.56c118.55 0.01 214.66 96.12 214.66 214.66z",fill:"#FDF1F2","p-id":"2440"}),e("path",{d:"M995.17 732.68v44.59c0 118.56-96.11 214.67-214.66 214.67H249.95c-118.56 0-214.66-96.11-214.66-214.67v-44.59h959.88z",fill:"#F04D58","p-id":"2441"}),e("path",{d:"M344.31 928.24V803.76h46.96c8.26 0 14.58 0.4 18.93 1.19 6.11 1.02 11.24 2.96 15.37 5.82 4.13 2.86 7.46 6.87 9.98 12.02 2.52 5.15 3.78 10.81 3.78 16.98 0 10.59-3.37 19.54-10.1 26.88-6.74 7.33-18.91 11-36.51 11h-31.93v50.61h-16.48z m16.48-65.3h32.18c10.64 0 18.2-1.98 22.67-5.94 4.47-3.96 6.71-9.54 6.71-16.73 0-5.21-1.32-9.67-3.95-13.37-2.63-3.71-6.1-6.16-10.4-7.34-2.77-0.74-7.9-1.1-15.37-1.1h-31.84v44.48zM467.26 928.24V803.76h42.88c9.68 0 17.07 0.59 22.16 1.78 7.13 1.64 13.22 4.61 18.26 8.92 6.57 5.55 11.48 12.64 14.73 21.27 3.25 8.63 4.88 18.5 4.88 29.59 0 9.45-1.1 17.83-3.31 25.13-2.21 7.3-5.04 13.35-8.49 18.13-3.45 4.78-7.23 8.55-11.34 11.29-4.1 2.75-9.06 4.83-14.86 6.24-5.8 1.42-12.47 2.12-20 2.12h-44.91z m16.47-14.69h26.58c8.21 0 14.65-0.76 19.32-2.29s8.39-3.68 11.17-6.45c3.91-3.91 6.95-9.16 9.13-15.75 2.18-6.59 3.27-14.59 3.27-23.99 0-13.02-2.14-23.02-6.41-30.02-4.27-6.99-9.47-11.68-15.58-14.05-4.42-1.7-11.52-2.55-21.31-2.55h-26.15v95.1zM600.65 928.24V803.76h83.98v14.69h-67.5V857h58.42v14.69h-58.42v56.55h-16.48z",fill:"#FFFFFF","p-id":"2442"}),e("path",{d:"M500.21 352.29c-6.1 20.03-14.85 41.39-26.78 64.93-5.3 10.28-11.14 20.01-13.26 28.14l2.92-1.09c33.68-13.25 65.5-20.83 88.57-25.16-3.98-2.71-7.69-5.68-10.87-8.65-15.92-13.8-29.71-33.82-40.58-58.17z m171.83 103.08c-4.51 5.13-12.46 8.11-24.13 8.11-20.16 0-53.03-6.22-79.55-20.02-45.61 5.14-79.55 11.36-106.86 20.29-1.33 0.54-2.92 1.08-4.77 1.89-32.88 57.34-57.28 83.05-78.76 83.05-4.24 0-8.49-1.09-11.67-2.98l-12.73-8.39-0.8-1.35c-1.86-4.87-2.39-9.48-1.33-14.61 2.92-14.33 18.03-37.06 49.85-57.35 5.04-3.8 12.99-8.11 23.6-13.25 7.96-14.07 16.44-30.57 25.46-48.7 13.53-27.86 22.01-55.46 28.64-79.26v-0.27c-9.81-32.73-15.65-52.47-5.83-88.46 2.38-10.28 11.14-20.83 20.95-20.83h6.37c6.1 0 11.93 2.16 16.17 6.49 17.5 17.85 9.28 61.41 0.53 97.38-0.53 1.63-0.8 2.98-1.06 3.79 10.61 30.56 25.72 55.19 42.43 69.25 6.89 5.41 14.59 10.82 23.07 15.7 11.93-1.36 23.33-1.9 34.21-1.9 32.88 0 52.77 5.96 60.46 18.66 2.65 4.34 3.98 9.47 3.18 14.89-0.27 6.77-2.66 13-7.43 17.87z m-10.87-19.22c-2.65-2.7-13.26-9.47-50.38-9.47-1.86 0-3.71 0-6.1 2.71 19.36 8.66 38.18 13.8 50.38 13.8 1.86 0 3.45-0.27 5.04-0.54h1.06c1.33-0.54 2.12-0.81 2.39-3.52-0.54-0.82-1.06-1.9-2.39-2.98z m-243.16 39.5c-5.57 3.25-10.08 6.22-12.73 8.39-18.83 17.58-30.76 35.44-32.08 45.71 11.93-4.05 27.57-21.91 44.81-54.1z m80.08-186.93l1.33-1.09c1.86-8.65 2.65-16.23 4.24-22.18l0.8-4.31c2.65-15.43 2.12-23.27-2.39-29.76l-3.98-1.36c-0.53 0.82-1.33 2.17-1.85 3.25-4.51 11.36-4.25 31.11 1.85 55.45z",fill:"#F04D58","p-id":"2443"})])],-1),Oe={class:"media-body overflow-hidden"},je={class:"d-flex align-items-center mb-1"},Ue={class:"text-truncate mb-0 me-auto"},qe=["innerHTML"],Ae={class:"left-panel-footer p-2"},Ee={class:"left-panel-footer__tips mb-2"},Ke={class:"left-panel-footer__spend-tip"},Re=e("svg",{t:"1690301472439",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6949",width:"24",height:"24"},[e("path",{d:"M366 174h292a10 10 0 0 1 10 10v322a10 10 0 0 1-10 10H366a10 10 0 0 1-10-10V184a10 10 0 0 1 10-10z",fill:"#4988FD","p-id":"6950"}),e("path",{d:"M658 546H366c-22.056 0-40-17.944-40-40V184c0-22.056 17.944-40 40-40h292c22.056 0 40 17.944 40 40v322c0 22.056-17.944 40-40 40z m-272-60h252V204H386v282z",fill:"#4988FD","p-id":"6951"}),e("path",{d:"M507.582 304.244a4 4 0 0 1 7.188 0l86.972 178.018c0.586 1.2 1.734 2.03 201.152 28.936a4.002 4.002 0 0 1 2.216 6.87l-144.304 136.648a4.006 4.006 0 0 0-1.184 3.622l35.488 194.43a3.998 3.998 0 0 1-5.798 4.252l-176.244-93.506a4 4 0 0 0-3.75 0l-176.252 93.508a4 4 0 0 1-5.802-4.252l35.478-194.43a4.006 4.006 0 0 0-1.184-3.622l-144.304-136.648a4.002 4.002 0 0 1 2.216-6.868c199.416-26.912 200.564-27.736 201.152-28.938l86.96-178.02z",fill:"#DFECFD","p-id":"6952"}),e("path",{d:"M331.204 887.48a33.92 33.92 0 0 1-30.082-18.148 34.15 34.15 0 0 1-3.376-21.91l32.956-180.61-134.074-126.96c-13.616-12.902-14.196-34.464-1.302-48.074a34.1 34.1 0 0 1 20.136-10.308c104.136-14.054 161.49-21.976 184.632-25.53l80.534-164.864c5.66-11.588 17.654-19.078 30.552-19.078 5.146 0 10.31 1.196 14.936 3.458a34.138 34.138 0 0 1 15.618 15.634l80.54 164.848c23.146 3.554 80.498 11.476 184.634 25.528 18.572 2.502 31.652 19.656 29.15 38.234a34.138 34.138 0 0 1-10.318 20.146l-134.074 126.962 32.958 180.568a33.782 33.782 0 0 1-5.506 25.47 33.778 33.778 0 0 1-21.896 14.086c-7.242 1.318-15.208 0.138-21.874-3.368l-164.154-87.09-164.068 87.042a34.19 34.19 0 0 1-15.922 3.964z m-53.87-353.836l104.852 99.29a33.896 33.896 0 0 1 10.072 30.78l-25.848 141.656 128.848-68.36c9.79-5.19 22.078-5.184 31.85-0.01l128.854 68.364-25.852-141.64a33.904 33.904 0 0 1 10.052-30.778l104.868-99.302c-61.762-8.382-100.142-13.708-121.64-16.872-12.33-1.814-19.714-3.004-23.946-3.858-4.89-0.986-17.88-3.608-24.658-17.488l-63.608-130.192-63.6 130.196c-6.788 13.88-19.772 16.498-24.66 17.484-4.228 0.854-11.612 2.042-23.946 3.856-21.464 3.158-59.842 8.484-121.638 16.874z",fill:"#DFECFD","p-id":"6953"}),e("path",{d:"M418 651a29.9 29.9 0 0 1-21.212-8.788l-66-66c-11.716-11.714-11.716-30.71 0-42.426 11.714-11.714 30.71-11.714 42.426 0l66 66c11.716 11.714 11.716 30.71 0 42.426A29.908 29.908 0 0 1 418 651z",fill:"#4988FD","p-id":"6954"})],-1),Je={class:"disclaimer"},We={class:"disclaimer"},Qe=e("br",null,null,-1),Xe=e("br",null,null,-1),Ge=e("div",{class:"d-sm-flex align-items-center"},[e("svg",{role:"img","aria-label":"warning",focusable:"false","data-icon":"warning","aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"gd_design_icon gd_design_icon-warning"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.25 14V7H12.75V14H11.25ZM11.25 17V15.5H12.75V17H11.25Z",fill:"currentColor"})]),p(" 免责声明 ")],-1),Ye={class:"main overflow-auto ai-pdf"},e2={class:"ai-header",style:{top:"0px",height:"60px"}},t2={class:"ai-header__logo ai-header__logo--mobile"},a2={class:"ai-header__link"},l2=["src"],s2={class:"ai-header__right"},n2={class:"ai-page__right"},o2={placement:"bottomRight"},i2=e("div",{class:"creation"},[e("img",{src:he,class:"creation-count__icon"})],-1),c2={class:"w-full pb-20 pt-10"},d2={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},r2={class:"flex flex-column align-items-center"},u2=e("h1",{class:"mt-10 mb-10"},"PDF解析工具",-1),_2={key:0,class:"arco-upload-list-picture w-100 h-auto custom-upload-avatar"},p2=e("svg",{t:"1688027443507",class:"icon w-16 inline h-auto",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2439",width:"128",height:"128"},[e("path",{d:"M995.17 246.71v485.97H35.29V246.71c0-118.55 96.1-214.66 214.66-214.66h530.56c118.55 0.01 214.66 96.12 214.66 214.66z",fill:"#FDF1F2","p-id":"2440"}),e("path",{d:"M995.17 732.68v44.59c0 118.56-96.11 214.67-214.66 214.67H249.95c-118.56 0-214.66-96.11-214.66-214.67v-44.59h959.88z",fill:"#F04D58","p-id":"2441"}),e("path",{d:"M344.31 928.24V803.76h46.96c8.26 0 14.58 0.4 18.93 1.19 6.11 1.02 11.24 2.96 15.37 5.82 4.13 2.86 7.46 6.87 9.98 12.02 2.52 5.15 3.78 10.81 3.78 16.98 0 10.59-3.37 19.54-10.1 26.88-6.74 7.33-18.91 11-36.51 11h-31.93v50.61h-16.48z m16.48-65.3h32.18c10.64 0 18.2-1.98 22.67-5.94 4.47-3.96 6.71-9.54 6.71-16.73 0-5.21-1.32-9.67-3.95-13.37-2.63-3.71-6.1-6.16-10.4-7.34-2.77-0.74-7.9-1.1-15.37-1.1h-31.84v44.48zM467.26 928.24V803.76h42.88c9.68 0 17.07 0.59 22.16 1.78 7.13 1.64 13.22 4.61 18.26 8.92 6.57 5.55 11.48 12.64 14.73 21.27 3.25 8.63 4.88 18.5 4.88 29.59 0 9.45-1.1 17.83-3.31 25.13-2.21 7.3-5.04 13.35-8.49 18.13-3.45 4.78-7.23 8.55-11.34 11.29-4.1 2.75-9.06 4.83-14.86 6.24-5.8 1.42-12.47 2.12-20 2.12h-44.91z m16.47-14.69h26.58c8.21 0 14.65-0.76 19.32-2.29s8.39-3.68 11.17-6.45c3.91-3.91 6.95-9.16 9.13-15.75 2.18-6.59 3.27-14.59 3.27-23.99 0-13.02-2.14-23.02-6.41-30.02-4.27-6.99-9.47-11.68-15.58-14.05-4.42-1.7-11.52-2.55-21.31-2.55h-26.15v95.1zM600.65 928.24V803.76h83.98v14.69h-67.5V857h58.42v14.69h-58.42v56.55h-16.48z",fill:"#FFFFFF","p-id":"2442"}),e("path",{d:"M500.21 352.29c-6.1 20.03-14.85 41.39-26.78 64.93-5.3 10.28-11.14 20.01-13.26 28.14l2.92-1.09c33.68-13.25 65.5-20.83 88.57-25.16-3.98-2.71-7.69-5.68-10.87-8.65-15.92-13.8-29.71-33.82-40.58-58.17z m171.83 103.08c-4.51 5.13-12.46 8.11-24.13 8.11-20.16 0-53.03-6.22-79.55-20.02-45.61 5.14-79.55 11.36-106.86 20.29-1.33 0.54-2.92 1.08-4.77 1.89-32.88 57.34-57.28 83.05-78.76 83.05-4.24 0-8.49-1.09-11.67-2.98l-12.73-8.39-0.8-1.35c-1.86-4.87-2.39-9.48-1.33-14.61 2.92-14.33 18.03-37.06 49.85-57.35 5.04-3.8 12.99-8.11 23.6-13.25 7.96-14.07 16.44-30.57 25.46-48.7 13.53-27.86 22.01-55.46 28.64-79.26v-0.27c-9.81-32.73-15.65-52.47-5.83-88.46 2.38-10.28 11.14-20.83 20.95-20.83h6.37c6.1 0 11.93 2.16 16.17 6.49 17.5 17.85 9.28 61.41 0.53 97.38-0.53 1.63-0.8 2.98-1.06 3.79 10.61 30.56 25.72 55.19 42.43 69.25 6.89 5.41 14.59 10.82 23.07 15.7 11.93-1.36 23.33-1.9 34.21-1.9 32.88 0 52.77 5.96 60.46 18.66 2.65 4.34 3.98 9.47 3.18 14.89-0.27 6.77-2.66 13-7.43 17.87z m-10.87-19.22c-2.65-2.7-13.26-9.47-50.38-9.47-1.86 0-3.71 0-6.1 2.71 19.36 8.66 38.18 13.8 50.38 13.8 1.86 0 3.45-0.27 5.04-0.54h1.06c1.33-0.54 2.12-0.81 2.39-3.52-0.54-0.82-1.06-1.9-2.39-2.98z m-243.16 39.5c-5.57 3.25-10.08 6.22-12.73 8.39-18.83 17.58-30.76 35.44-32.08 45.71 11.93-4.05 27.57-21.91 44.81-54.1z m80.08-186.93l1.33-1.09c1.86-8.65 2.65-16.23 4.24-22.18l0.8-4.31c2.65-15.43 2.12-23.27-2.39-29.76l-3.98-1.36c-0.53 0.82-1.33 2.17-1.85 3.25-4.51 11.36-4.25 31.11 1.85 55.45z",fill:"#F04D58","p-id":"2443"})],-1),v2={class:"flex justify-center"},h2={class:"arco-upload-list-picture-mask"},f2={key:1,class:"arco-upload-picture-card pl-20 pr-20 h-48"},g2={class:"arco-upload-picture-card-text"},m2=e("div",null,"点击或拖拽PDF文件到这进行解析",-1),w2={key:0,class:"w-full flex justify-content-center"},y2=["src"],b2={class:"chat_content p-4"},k2={class:"chat_message_all"},M2=["innerHTML"],z2=["innerHTML"],x2={class:"mes_footer position-absolute bottom-0 d-flex w-full p-4"},C2={class:"flex h-full flex-col bg-[#fafbfc] ai_pdf_list"},V2={key:0,class:"chat_list_message p-2 bg-[#fafbfc]"},F2={class:"all_message mb-2 mt-2"},D2={class:"chat-list mb-2"},H2={class:"bot_info"},$2={class:"hover_action"},Z2=["onClick"],I2={class:"card-body"},P2={class:"media"},B2=e("div",{class:"avatar me-3"},[e("svg",{t:"1688027443507",class:"icon w-10 inline h-auto",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2439",width:"64",height:"64 "},[e("path",{d:"M995.17 246.71v485.97H35.29V246.71c0-118.55 96.1-214.66 214.66-214.66h530.56c118.55 0.01 214.66 96.12 214.66 214.66z",fill:"#FDF1F2","p-id":"2440"}),e("path",{d:"M995.17 732.68v44.59c0 118.56-96.11 214.67-214.66 214.67H249.95c-118.56 0-214.66-96.11-214.66-214.67v-44.59h959.88z",fill:"#F04D58","p-id":"2441"}),e("path",{d:"M344.31 928.24V803.76h46.96c8.26 0 14.58 0.4 18.93 1.19 6.11 1.02 11.24 2.96 15.37 5.82 4.13 2.86 7.46 6.87 9.98 12.02 2.52 5.15 3.78 10.81 3.78 16.98 0 10.59-3.37 19.54-10.1 26.88-6.74 7.33-18.91 11-36.51 11h-31.93v50.61h-16.48z m16.48-65.3h32.18c10.64 0 18.2-1.98 22.67-5.94 4.47-3.96 6.71-9.54 6.71-16.73 0-5.21-1.32-9.67-3.95-13.37-2.63-3.71-6.1-6.16-10.4-7.34-2.77-0.74-7.9-1.1-15.37-1.1h-31.84v44.48zM467.26 928.24V803.76h42.88c9.68 0 17.07 0.59 22.16 1.78 7.13 1.64 13.22 4.61 18.26 8.92 6.57 5.55 11.48 12.64 14.73 21.27 3.25 8.63 4.88 18.5 4.88 29.59 0 9.45-1.1 17.83-3.31 25.13-2.21 7.3-5.04 13.35-8.49 18.13-3.45 4.78-7.23 8.55-11.34 11.29-4.1 2.75-9.06 4.83-14.86 6.24-5.8 1.42-12.47 2.12-20 2.12h-44.91z m16.47-14.69h26.58c8.21 0 14.65-0.76 19.32-2.29s8.39-3.68 11.17-6.45c3.91-3.91 6.95-9.16 9.13-15.75 2.18-6.59 3.27-14.59 3.27-23.99 0-13.02-2.14-23.02-6.41-30.02-4.27-6.99-9.47-11.68-15.58-14.05-4.42-1.7-11.52-2.55-21.31-2.55h-26.15v95.1zM600.65 928.24V803.76h83.98v14.69h-67.5V857h58.42v14.69h-58.42v56.55h-16.48z",fill:"#FFFFFF","p-id":"2442"}),e("path",{d:"M500.21 352.29c-6.1 20.03-14.85 41.39-26.78 64.93-5.3 10.28-11.14 20.01-13.26 28.14l2.92-1.09c33.68-13.25 65.5-20.83 88.57-25.16-3.98-2.71-7.69-5.68-10.87-8.65-15.92-13.8-29.71-33.82-40.58-58.17z m171.83 103.08c-4.51 5.13-12.46 8.11-24.13 8.11-20.16 0-53.03-6.22-79.55-20.02-45.61 5.14-79.55 11.36-106.86 20.29-1.33 0.54-2.92 1.08-4.77 1.89-32.88 57.34-57.28 83.05-78.76 83.05-4.24 0-8.49-1.09-11.67-2.98l-12.73-8.39-0.8-1.35c-1.86-4.87-2.39-9.48-1.33-14.61 2.92-14.33 18.03-37.06 49.85-57.35 5.04-3.8 12.99-8.11 23.6-13.25 7.96-14.07 16.44-30.57 25.46-48.7 13.53-27.86 22.01-55.46 28.64-79.26v-0.27c-9.81-32.73-15.65-52.47-5.83-88.46 2.38-10.28 11.14-20.83 20.95-20.83h6.37c6.1 0 11.93 2.16 16.17 6.49 17.5 17.85 9.28 61.41 0.53 97.38-0.53 1.63-0.8 2.98-1.06 3.79 10.61 30.56 25.72 55.19 42.43 69.25 6.89 5.41 14.59 10.82 23.07 15.7 11.93-1.36 23.33-1.9 34.21-1.9 32.88 0 52.77 5.96 60.46 18.66 2.65 4.34 3.98 9.47 3.18 14.89-0.27 6.77-2.66 13-7.43 17.87z m-10.87-19.22c-2.65-2.7-13.26-9.47-50.38-9.47-1.86 0-3.71 0-6.1 2.71 19.36 8.66 38.18 13.8 50.38 13.8 1.86 0 3.45-0.27 5.04-0.54h1.06c1.33-0.54 2.12-0.81 2.39-3.52-0.54-0.82-1.06-1.9-2.39-2.98z m-243.16 39.5c-5.57 3.25-10.08 6.22-12.73 8.39-18.83 17.58-30.76 35.44-32.08 45.71 11.93-4.05 27.57-21.91 44.81-54.1z m80.08-186.93l1.33-1.09c1.86-8.65 2.65-16.23 4.24-22.18l0.8-4.31c2.65-15.43 2.12-23.27-2.39-29.76l-3.98-1.36c-0.53 0.82-1.33 2.17-1.85 3.25-4.51 11.36-4.25 31.11 1.85 55.45z",fill:"#F04D58","p-id":"2443"})])],-1),S2={class:"media-body overflow-hidden"},L2={class:"d-flex align-items-center mb-1"},T2={class:"text-truncate mb-0 me-auto"},N2=["innerHTML"],O2={class:"left-panel-footer p-2"},j2={class:"left-panel-footer__tips mb-2"},U2={class:"left-panel-footer__spend-tip"},q2=e("svg",{t:"1690301472439",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6949",width:"24",height:"24"},[e("path",{d:"M366 174h292a10 10 0 0 1 10 10v322a10 10 0 0 1-10 10H366a10 10 0 0 1-10-10V184a10 10 0 0 1 10-10z",fill:"#4988FD","p-id":"6950"}),e("path",{d:"M658 546H366c-22.056 0-40-17.944-40-40V184c0-22.056 17.944-40 40-40h292c22.056 0 40 17.944 40 40v322c0 22.056-17.944 40-40 40z m-272-60h252V204H386v282z",fill:"#4988FD","p-id":"6951"}),e("path",{d:"M507.582 304.244a4 4 0 0 1 7.188 0l86.972 178.018c0.586 1.2 1.734 2.03 201.152 28.936a4.002 4.002 0 0 1 2.216 6.87l-144.304 136.648a4.006 4.006 0 0 0-1.184 3.622l35.488 194.43a3.998 3.998 0 0 1-5.798 4.252l-176.244-93.506a4 4 0 0 0-3.75 0l-176.252 93.508a4 4 0 0 1-5.802-4.252l35.478-194.43a4.006 4.006 0 0 0-1.184-3.622l-144.304-136.648a4.002 4.002 0 0 1 2.216-6.868c199.416-26.912 200.564-27.736 201.152-28.938l86.96-178.02z",fill:"#DFECFD","p-id":"6952"}),e("path",{d:"M331.204 887.48a33.92 33.92 0 0 1-30.082-18.148 34.15 34.15 0 0 1-3.376-21.91l32.956-180.61-134.074-126.96c-13.616-12.902-14.196-34.464-1.302-48.074a34.1 34.1 0 0 1 20.136-10.308c104.136-14.054 161.49-21.976 184.632-25.53l80.534-164.864c5.66-11.588 17.654-19.078 30.552-19.078 5.146 0 10.31 1.196 14.936 3.458a34.138 34.138 0 0 1 15.618 15.634l80.54 164.848c23.146 3.554 80.498 11.476 184.634 25.528 18.572 2.502 31.652 19.656 29.15 38.234a34.138 34.138 0 0 1-10.318 20.146l-134.074 126.962 32.958 180.568a33.782 33.782 0 0 1-5.506 25.47 33.778 33.778 0 0 1-21.896 14.086c-7.242 1.318-15.208 0.138-21.874-3.368l-164.154-87.09-164.068 87.042a34.19 34.19 0 0 1-15.922 3.964z m-53.87-353.836l104.852 99.29a33.896 33.896 0 0 1 10.072 30.78l-25.848 141.656 128.848-68.36c9.79-5.19 22.078-5.184 31.85-0.01l128.854 68.364-25.852-141.64a33.904 33.904 0 0 1 10.052-30.778l104.868-99.302c-61.762-8.382-100.142-13.708-121.64-16.872-12.33-1.814-19.714-3.004-23.946-3.858-4.89-0.986-17.88-3.608-24.658-17.488l-63.608-130.192-63.6 130.196c-6.788 13.88-19.772 16.498-24.66 17.484-4.228 0.854-11.612 2.042-23.946 3.856-21.464 3.158-59.842 8.484-121.638 16.874z",fill:"#DFECFD","p-id":"6953"}),e("path",{d:"M418 651a29.9 29.9 0 0 1-21.212-8.788l-66-66c-11.716-11.714-11.716-30.71 0-42.426 11.714-11.714 30.71-11.714 42.426 0l66 66c11.716 11.714 11.716 30.71 0 42.426A29.908 29.908 0 0 1 418 651z",fill:"#4988FD","p-id":"6954"})],-1),A2={class:"disclaimer"},E2={class:"disclaimer"},K2=e("br",null,null,-1),R2=e("br",null,null,-1),J2=e("div",{class:"d-sm-flex align-items-center"},[e("svg",{role:"img","aria-label":"warning",focusable:"false","data-icon":"warning","aria-hidden":"true",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"gd_design_icon gd_design_icon-warning"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.25 14V7H12.75V14H11.25ZM11.25 17V15.5H12.75V17H11.25Z",fill:"currentColor"})]),p(" 免责声明 ")],-1),gt=D1({__name:"pdf_generate",setup(d){const z=t=>C1({linkify:!0,highlight:(s,m)=>{if(m&&V1.getLanguage(m))try{return`<pre class="hljs"><span ref="preCopy" class="pre_copy">Copy</span><code>${V1.highlight(s,{language:m,ignoreIllegals:!0}).value}</code></pre>`}catch{}return`<pre class="hljs"><span ref="preCopy" class="pre_copy">Copy</span><code>${C1().utils.escapeHtml(s)}</code></pre>`},breaks:!0}).use(me).render(t),w=G1("token"),k=ge(),Y=k.setting.APP_URL+"/api/upload_pdf";Y1({title:"pdf解析 - "+k.setting.title,meta:[{name:"description",content:k.setting.description},{name:"keywords",content:k.setting.keywords}]});const y=i(""),x=i(0),L=i(""),H1=i(!1),V=i(!1),T=i(""),E=i(0),K=i(!1),v=i([]),g=i(""),e1=i(!1),N=i(1),t1=i(8),O=i(""),$=i(!1),w1=t=>{$.value=!0,N.value=1,N.value=t,O.value?R():P()},R=()=>{$.value=!0,re({page:N.value,limit:t1.value,qs:O.value}).then(t=>{E.value=t._rawValue.count,B.value=t._rawValue.data,$.value=!1}).catch(t=>{console.log(t)})},I=i(!1),j=t=>{if(t==0){g.value="",y.value="";return}I.value=!0,ue({pdf_id:t}).then(s=>{v.value=s._rawValue.data,y.value=s._rawValue.info.pdf_url,L.value=s._rawValue.info.title,g.value=t,I.value=!1,a1()}).catch(s=>{console.log(s),I.value=!1})},o1=i(!1),J=i(""),i1=t=>{o1.value=!0,g.value=t},$1=()=>{if(!J.value)return c.warning("请输入内容"),!0;ne({pdf_id:g.value,title:J.value}).then(t=>{c.success(t._rawValue.message),P(),p1()}).catch(t=>{c.error(t.message)}),J.value=""},c1=t=>{_e({pdf_id:t}).then(s=>{c.success("删除成功"),g.value==t&&j(0),P()}).catch(s=>{console.log(s)})},y1=()=>{pe().then(t=>{c.success("删除成功"),B.value=[],j(0),E.value=0}).catch(t=>{console.log(t)})},d1=i(0),b1=i(0),Z1=()=>{oe().then(t=>{d1.value=t._rawValue.pdf,b1.value=t._rawValue.data})};w.value&&Z1();const r1=i(!1),I1=()=>{r1.value=!0},P1=t=>{if(t.response.status!=200){c.error("上传失败!");return}c.clear(),c.success("上传成功!"),y.value=t.response.data,x.value=t.response.size,L.value=t.response.name},B1=t=>{const s=t.type==="application/pdf",m=t.size/1024/1024<10;return s?m?w.value?(c.loading("上传中..."),!0):(e1.value=!0,c.error("请先登录!"),!1):(c.error("上传文件大小不能超过 15MB!"),!1):(c.error("上传文件只能是 PDF 格式!"),!1)},S1=()=>{y.value=""},L1=()=>{e1.value=!0},T1=()=>{e1.value=!1},P=()=>{$.value=!0,ie({page:N.value,limit:t1.value}).then(t=>{B.value=t._rawValue.data,E.value=t._rawValue.count,$.value=!1}).catch(t=>{console.log(t),$.value=!1})},k1=i([]);(()=>{ce().then(t=>{k1.value=t._rawValue.data}).catch(t=>{console.log(t)})})();const a1=()=>{setTimeout(()=>{let t=document.getElementsByClassName("arco-card-body")[0];t.style.transition="500ms",t.scrollTo({top:t.scrollHeight,behavior:"smooth"})},100)},{public:{baseUrl:N1}}=le(),O1={Authorization:`Bearer ${w.value}`,Accept:"text/event-stream"},u1=i("start"),_1=i(!0),l1=i(),j1=()=>{let t=document.getElementsByClassName("arco-card-body")[0].innerHTML;we(t).then(s=>{fe.saveAs(s,"pdf_answer.docx")})},M1=async()=>{var Z;if(T.value==""){c.error("请输入内容!");return}if(y.value==""){c.error("请先上传PDF文件!");return}if(!w.value)return c.warning("请先登录"),L1(),!1;V.value=!0,V.value=!0,v.value.push({pdf_id:g.value,question:T.value,message:"思考中..."}),a1();const t=await fetch(`${N1}api/send_pdf_ask`,{method:"POST",headers:O1,body:JSON.stringify({info:T.value,pdf_id:g.value})});if(u1.value="start",t&&(v.value[v.value.length-1].message=""),t.status==500)return V.value=!1,c.error("服务器错误"),!1;if(t.status==401)return V.value=!1,c.error("请先登录"),!1;if(t.status==402)return V.value=!1,v.value[v.value.length-1].message="发送次数已达上限或余额不足",c.error("发送次数已达上限或余额不足"),!1;if(t.status==403)return V.value=!1,v.value[v.value.length-1].message="禁止发送违禁词",c.error("禁止发送违禁词"),!1;let s=!1;const m=(Z=t.body)==null?void 0:Z.getReader(),b=({value:D})=>{let _=new TextDecoder().decode(D).split(`

`).map(o=>o.replace(/\n/g,"")),C=[];for(let o=0;o<_.length;o++){if(_1.value=!1,_[o].slice(-2)=="]}"&&_[o].startsWith("data:"))C.push(JSON.parse(_[o].replace("data:","")));else if(_[o].startsWith("data:")&&_[o].slice(-2)!="]}")l1.value=_[o].replace("data:","");else if(_[o].slice(-2)=="]}"&&_[o].startsWith("data:")==!1){let s1=l1.value+=_[o];C.push(JSON.parse(s1.replace("data:",""))),l1.value=""}else _[o].includes('"error"')&&(v.value[v.value.length-1].message=JSON.parse(_[o]).error.message),l1.value="";if(_[o].includes("reply_content:")&&(s=!0),s){let U=_[o].substring(14);for(let S=0;S<U.length;S++)setTimeout(()=>{v.value[v.value.length-1].message+=U.charAt(S),a1()},1e3)}}for(let o=0;o<C.length;o++)setTimeout(()=>{C[o].choices[0].delta.content&&(v.value[v.value.length-1].message+=C[o].choices[0].delta.content),a1()},100)},F=async()=>{const D=await(m==null?void 0:m.read());if(u1.value=="end")return console.log("end"),u1.value="start",m==null||m.cancel(),!1;D!=null&&D.done?(console.log("done"),_1.value=!0,p1(),V.value=!1,T.value=""):(V.value=!0,_1.value=!1,b(D),await F())};await F()},U1=()=>{if(y.value==""){c.error("请先上传PDF文件!");return}c.loading({content:"解析中...",duration:1e6}),K.value=!0,ve({pdf_url:y.value}).then(t=>{g.value=t._rawValue.pdf_id,p1(),K.value=!1,P(),c.clear(),c.success("解析成功!")}).catch(t=>{console.log(t),c.clear(),K.value=!1})};w.value&&P();const B=i([]),p1=()=>{I.value=!0,de({pdf_id:g.value}).then(t=>{v.value=t._rawValue.data,y.value=t._rawValue.info.pdf_url,L.value=t._rawValue.info.title,I.value=!1}).catch(t=>{console.log(t),I.value=!1})};return(t,s)=>{const m=h("a-input-search"),b=h("a-button"),F=h("a-space"),Z=h("a-popconfirm"),D=h("a-empty"),v1=h("a-pagination"),_=ee,C=h("a-spin"),o=h("a-tooltip"),s1=h("a-upload"),U=h("a-card"),S=h("a-col"),q1=h("a-textarea"),z1=h("a-row"),A1=se,E1=h("a-input"),K1=h("a-modal"),R1=h("a-drawer");return u(),f(G,null,[e("div",He,[a(F,{class:"p-2 bg-white"},{default:n(()=>[a(m,{modelValue:O.value,"onUpdate:modelValue":s[0]||(s[0]=l=>O.value=l),onSearch:R,onKeydown:h1(R,["enter","native"]),placeholder:"搜索..."},null,8,["modelValue","onKeydown"]),a(b,{type:"primary",onClick:s[1]||(s[1]=l=>j(0)),status:"danger"},{default:n(()=>[a(r(f1))]),_:1})]),_:1}),a(C,{class:"overflow-auto h-full",loading:$.value,tip:"Loading.."},{default:n(()=>[B.value.length>0?(u(),f("div",$e,[e("p",Ze,[e("span",{onClick:s[2]||(s[2]=l=>P()),class:"py-0 border-0 text-muted",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[a(r(F1),{class:"fs-6 align-text-bottom"})]),p(" PDF文档 ")]),e("ul",Ie,[e("div",Pe,[(u(!0),f(G,null,n1(B.value,(l,M)=>(u(),f("li",{class:A(["online list-animation-bottomIn",[g.value==l[l.length-1].pdf_id?"active":"","delay-"+M]]),key:M},[e("div",Be,[a(F,null,{default:n(()=>[a(r(g1),{onClick:W=>i1(l[l.length-1].pdf_id)},null,8,["onClick"]),a(Z,{content:"此操作将永久删除当前pdf文档,确定要删除吗?",onOk:W=>c1(l[l.length-1].pdf_id),type:"warning"},{default:n(()=>[a(r(q))]),_:2},1032,["onOk"])]),_:2},1024)]),e("div",{class:"card mb-2",onClick:W=>j(l[l.length-1].pdf_id)},[e("div",Le,[e("div",Te,[Ne,e("div",Oe,[e("div",je,[e("h6",Ue,H(l[l.length-1].title?l[l.length-1].title:"未命名.pdf"),1)]),e("div",{class:"text-truncate h-20",innerHTML:l[l.length-1].message.replace(/\n/g,"<br />")},null,8,qe)])])])],8,Se)],2))),128))])])])):(u(),Q(D,{key:1,class:"message_empty"})),a(v1,{size:"small",total:E.value,current:N.value,"page-size":t1.value,class:"justify-content-center mb-2",background:"",simple:"",onChange:w1,"hide-on-single-page":!0},null,8,["total","current","page-size"]),a(_,null,{default:n(()=>[a(Z,{content:"此操作将永久删除所有PDF,确定要删除吗?",onOk:y1,type:"warning"},{default:n(()=>[a(b,{type:"primary",status:"danger",class:"w-11/12 flex m-auto mb-2"},{icon:n(()=>[a(r(q))]),default:n(()=>[p("清空所有PDF")]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"]),a(_,null,{default:n(()=>[e("div",Ae,[e("div",Ee,[e("div",Ke,[Re,p("消耗"+H(d1.value)+"额度/会员"+H(r(k).setting.pdf_generate_limit)+"次 ",1)]),e("div",Je,[e("div",We,[a(o,{class:"box-item",effect:"dark",placement:"top"},{content:n(()=>[p(" 您应当合法合规使用本服务，并承担由此产生的所有责任。"),Qe,p("本服务生成的作品仅供个人学习交流使用，不可用于商业用途"),Xe,p("对您的使用不做保证且不承担任何责任。 ")]),default:n(()=>[Ge]),_:1})])])])])]),_:1})]),e("main",Ye,[e("div",e2,[e("div",{class:"ai-header__left",onClick:s[3]||(s[3]=l=>I1())},[a(r(te),{size:"24"})]),e("div",t2,[e("span",null,[e("a",a2,[e("img",{src:r(k).setting.logo,style:{width:"40px"}},null,8,l2)])])]),e("div",s2,[e("div",n2,[e("div",o2,[e("div",null,[e("div",null,[a(o,{class:"item",effect:"dark",content:"额度："+b1.value,placement:"bottom"},{default:n(()=>[i2]),_:1},8,["content"])])])])])])]),e("div",c2,[e("div",d2,[e("div",r2,[u2,g.value==0?(u(),Q(U,{key:0,hoverable:"",class:"upload_card"},{default:n(()=>[a(s1,{class:"avatar-uploader",action:Y,"show-file-list":!1,headers:{Authorization:"Bearer "+r(w)},onBeforeUpload:B1,onSuccess:P1,draggable:"",accept:"application/pdf"},{"upload-button":n(()=>[e("div",null,[y.value?(u(),f("div",_2,[p2,e("div",v2,[e("p",null,"名称："+H(L.value)+" |",1),e("span",null," 大小："+H(x.value)+"KB",1)]),e("div",h2,[a(r(f1))])])):(u(),f("div",f2,[e("div",g2,[a(r(ye),{class:"fs-2"}),m2])]))])]),_:1},8,["headers"]),y.value?(u(),f("div",w2,[a(F,null,{default:n(()=>[a(b,{type:"primary",loading:K.value,onClick:s[4]||(s[4]=l=>U1())},{icon:n(()=>[a(r(De))]),default:n(()=>[p(" 进行解析 ")]),_:1},8,["loading"]),a(b,{type:"primary",loading:K.value,status:"danger",onClick:s[5]||(s[5]=l=>S1())},{icon:n(()=>[a(r(q))]),default:n(()=>[p(" 删除PDF文档 ")]),_:1},8,["loading"])]),_:1})])):X("",!0)]),_:1})):X("",!0)]),a(C,{loading:I.value},{default:n(()=>[y.value&&g.value!=0?(u(),Q(z1,{key:0,gutter:20,class:"mt-2 mb-2"},{default:n(()=>[a(S,{xs:{span:24},lg:{span:12},class:"mb-3"},{default:n(()=>[e("iframe",{src:y.value,width:"100%",height:"600"},null,8,y2)]),_:1}),a(S,{xs:{span:24},lg:{span:12}},{default:n(()=>[a(U,{title:L.value?L.value:"未命名.pdf",style:{"min-height":"600px"},class:"mes_content"},{extra:n(()=>[a(F,null,{default:n(()=>[a(o,{content:"编辑名称"},{default:n(()=>[a(b,{type:"primary",onClick:s[6]||(s[6]=l=>i1(g.value))},{icon:n(()=>[a(r(g1))]),_:1})]),_:1}),a(o,{content:"删除当前会话"},{default:n(()=>[a(Z,{content:"此操作将永久删除当前pdf文档,确定要删除吗?",onOk:s[7]||(s[7]=l=>c1(g.value)),type:"warning"},{default:n(()=>[a(b,{type:"primary"},{icon:n(()=>[a(r(q))]),_:1})]),_:1})]),_:1}),a(o,{content:"导出为word"},{default:n(()=>[a(b,{type:"primary",onClick:s[8]||(s[8]=l=>j1())},{icon:n(()=>[a(r(be))]),_:1})]),_:1})]),_:1})]),default:n(()=>[a(C,{loading:H1.value,class:"d-flex justify-content-center flex-wrap"},{default:n(()=>[e("div",b2,[e("div",k2,[(u(!0),f(G,null,n1(v.value,(l,M)=>(u(),f("div",{class:"message_right_all",key:M},[l.question?(u(),f("div",{key:0,class:A(["chat-message-row list-animation-bottomIn human",["delay"+M]])},[e("div",{class:"chat-message",innerHTML:z(l.question!=""?l.question:l.message)},null,8,M2)],2)):X("",!0),l.message?(u(),f("div",{key:1,class:A(["chat-message-row list-animation-bottomIn ai",["delay"+M]])},[e("div",{class:"chat-message",innerHTML:z(l.message!=""?l.message:"")},null,8,z2)],2)):X("",!0)]))),128))])]),e("div",x2,[a(q1,{placeholder:"询问pdf相关内容",modelValue:T.value,"onUpdate:modelValue":s[9]||(s[9]=l=>T.value=l),"allow-clear":"","auto-size":{minRows:1,maxRows:4},onKeydown:s[10]||(s[10]=h1(ae(l=>M1(),["prevent"]),["enter","native"])),"show-word-limit":""},null,8,["modelValue"]),a(b,{class:"ml-1",onClick:s[11]||(s[11]=l=>M1()),type:"primary",loading:V.value},{default:n(()=>[a(r(ke),{class:"text-lg"})]),_:1},8,["loading"])])]),_:1},8,["loading"])]),_:1},8,["title"])]),_:1})]),_:1})):X("",!0)]),_:1},8,["loading"]),a(z1,{gutter:20,class:"mt-4 mb-4"},{default:n(()=>[(u(!0),f(G,null,n1(k1.value,(l,M)=>(u(),Q(S,{xs:{span:24},lg:{span:8},key:M,class:A(["list-animation-leftIn mb-2","delay"-M])},{default:n(()=>[a(U,{title:l.title,class:"shadow-sm"},{default:n(()=>[p(H(l.description),1)]),_:2},1032,["title"])]),_:2},1032,["class"]))),128))]),_:1})])])]),a(A1,{login_dialog:e1.value,onHandleCancel:T1},null,8,["login_dialog"]),a(K1,{visible:o1.value,"onUpdate:visible":s[13]||(s[13]=l=>o1.value=l),title:"修改名称",onOk:$1},{default:n(()=>[a(E1,{modelValue:J.value,"onUpdate:modelValue":s[12]||(s[12]=l=>J.value=l),placeholder:"修改pdf名称"},null,8,["modelValue"])]),_:1},8,["visible"]),a(R1,{visible:r1.value,"onUpdate:visible":s[17]||(s[17]=l=>r1.value=l),placement:"left",class:"left_pdf",width:"60%",header:!1},{footer:n(()=>[e("div",O2,[e("div",j2,[e("div",U2,[q2,p("消耗"+H(d1.value)+"额度/会员"+H(r(k).setting.pdf_generate_limit)+"次 ",1)]),e("div",A2,[e("div",E2,[a(o,{class:"box-item",effect:"dark",placement:"top"},{content:n(()=>[p(" 您应当合法合规使用本服务，并承担由此产生的所有责任。"),K2,p("本服务生成的作品仅供个人学习交流使用，不可用于商业用途"),R2,p("对您的使用不做保证且不承担任何责任。 ")]),default:n(()=>[J2]),_:1})])])])])]),default:n(()=>[e("div",C2,[a(F,{class:"p-2 bg-white"},{default:n(()=>[a(m,{modelValue:O.value,"onUpdate:modelValue":s[14]||(s[14]=l=>O.value=l),onSearch:R,onKeydown:h1(R,["enter","native"]),placeholder:"搜索..."},null,8,["modelValue","onKeydown"]),a(b,{type:"primary",onClick:s[15]||(s[15]=l=>j(0)),status:"danger"},{default:n(()=>[a(r(f1))]),_:1})]),_:1}),a(C,{class:"overflow-auto h-full",loading:$.value,tip:"Loading.."},{default:n(()=>[B.value.length>0?(u(),f("div",V2,[e("p",F2,[e("span",{onClick:s[16]||(s[16]=l=>P()),class:"py-0 border-0 text-muted",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[a(r(F1),{class:"fs-6 align-text-bottom"})]),p(" PDF文档 ")]),e("ul",D2,[e("div",H2,[(u(!0),f(G,null,n1(B.value,(l,M)=>(u(),f("li",{class:A(["online list-animation-bottomIn",[g.value==l[l.length-1].pdf_id?"active":"","delay-"+M]]),key:M},[e("div",$2,[a(F,null,{default:n(()=>[a(r(g1),{onClick:W=>i1(l[l.length-1].pdf_id)},null,8,["onClick"]),a(Z,{content:"此操作将永久删除当前pdf文档,确定要删除吗?",onOk:W=>c1(l[l.length-1].pdf_id),type:"warning"},{default:n(()=>[a(r(q))]),_:2},1032,["onOk"])]),_:2},1024)]),e("div",{class:"card mb-2",onClick:W=>j(l[l.length-1].pdf_id)},[e("div",I2,[e("div",P2,[B2,e("div",S2,[e("div",L2,[e("h6",T2,H(l[l.length-1].title?l[l.length-1].title:"未命名.pdf"),1)]),e("div",{class:"text-truncate h-20",innerHTML:l[l.length-1].message.replace(/\n/g,"<br />")},null,8,N2)])])])],8,Z2)],2))),128))])])])):(u(),Q(D,{key:1,class:"message_empty"})),a(v1,{size:"small",total:E.value,current:N.value,"page-size":t1.value,class:"justify-content-center mb-2",background:"",simple:"",onChange:w1,"hide-on-single-page":!0},null,8,["total","current","page-size"]),a(_,null,{default:n(()=>[a(Z,{content:"此操作将永久删除所有PDF,确定要删除吗?",onOk:y1,type:"warning"},{default:n(()=>[a(b,{type:"primary",status:"danger",class:"w-11/12 flex m-auto mb-2"},{icon:n(()=>[a(r(q))]),default:n(()=>[p("清空所有PDF")]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])])]),_:1},8,["visible"])],64)}}});export{gt as default};
