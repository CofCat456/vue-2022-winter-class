import{_ as u,r as _,o as e,c as r,e as d,F as s,g as l,a as m,w as b,f as o,t as c}from"./index-f9a2aef5.js";const p={props:{breadcrumbList:{type:Array,default:()=>[{title:"Home"}]}}},f={"aria-label":"breadcrumb"},k={class:"breadcrumb"},y=["aria-current"];function B(x,L,n,g,h,$){const i=_("RouterLink");return e(),r("nav",f,[d("ol",k,[(e(!0),r(s,null,l(n.breadcrumbList,({title:t,pathName:a})=>(e(),r("li",{key:t,class:"breadcrumb-item","aria-current":a?null:"page"},[a?(e(),m(i,{key:0,to:{name:a}},{default:b(()=>[o(c(t),1)]),_:2},1032,["to"])):(e(),r(s,{key:1},[o(c(t),1)],64))],8,y))),128))])])}const w=u(p,[["render",B]]);export{w as B};
