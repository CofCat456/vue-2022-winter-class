import{_ as m,r as _,o as s,c as o,e as a,d,w as u,f as v,t as b,F as h,g as k,n as g,b as p}from"./index-f9a2aef5.js";const f={props:{light:{type:Boolean,default:!1},headerList:{type:Array,default:()=>[]},logout:{type:Function,default:null}},computed:{titleLink(){const{title:l,pathName:t}=this.headerList[0];return{title:l,pathName:t}},liLinks(){return this.headerList.slice(1,this.headerList.length)}}},L={class:"container"},y=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),N={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav ms-auto"},B={key:0,class:"nav-item ms-3"};function C(l,t,e,V,F,r){const i=_("RouterLink");return s(),o("nav",{class:g(["navbar navbar-expand-lg",e.light?" navbar-light":"navbar-dark bg-dark"])},[a("div",L,[d(i,{class:"navbar-brand m-0",to:{name:r.titleLink.pathName}},{default:u(()=>[v(b(r.titleLink.title),1)]),_:1},8,["to"]),y,a("div",N,[a("ul",x,[(s(!0),o(h,null,k(r.liLinks,({title:n,pathName:c})=>(s(),o("li",{key:n,class:"nav-item"},[d(i,{class:g(["nav-link",{active:l.$route.name===c}]),to:{name:c}},{default:u(()=>[v(b(n),1)]),_:2},1032,["class","to"])]))),128)),e.logout?(s(),o("li",B,[a("button",{type:"button",class:"btn btn-outline-secondary",onClick:t[0]||(t[0]=(...n)=>e.logout&&e.logout(...n))},"登出")])):p("",!0)])])])],2)}const H=m(f,[["render",C]]);export{H};
