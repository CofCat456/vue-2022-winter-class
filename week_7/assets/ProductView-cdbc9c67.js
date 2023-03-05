import{L as v}from"./Loading-42f177d0.js";import{B as y}from"./Breadcrumb-34f6a483.js";import{_ as h,o as d,c as l,e as t,F as b,g as x,j as _,l as C,r as m,d as p,n as w,t as c,m as B,v as k,f as L,b as P}from"./index-b8bbc98a.js";import{a as q,b as N}from"./api-161edbe7.js";import{c as T}from"./context-a6f610a2.js";const U={props:{imagesUrl:{type:Array,default:()=>[]}}},V=t("nav",null,[t("div",{class:"nav nav-tabs mb-3 d-flex",id:"nav-tab",role:"tablist"},[t("button",{class:"nav-link w-25 active",id:"nav-images-tab","data-bs-toggle":"tab","data-bs-target":"#nav-images",type:"button",role:"tab","aria-controls":"nav-images","aria-selected":"true"}," 產品照片 ")])],-1),M={class:"tab-content",id:"nav-tabContent"},j={class:"tab-pane fade show active",id:"nav-images",role:"tabpanel","aria-labelledby":"nav-images-tab",tabindex:"0"},A=["src"];function $(o,s,a,i,e,r){return d(),l(b,null,[V,t("div",M,[t("div",j,[(d(!0),l(b,null,x(a.imagesUrl,u=>(d(),l("div",{key:u,class:"ratio ratio-4x3 mb-4"},[t("img",{src:u,class:"img-fluid object-fit-cover"},null,8,A)]))),128))])])],64)}const D=h(U,[["render",$]]),F={components:{Loading:v,Breadcrumb:y,ProductContent:D},data(){return{product:null,qty:1}},computed:{getBreadcrumb(){return[{title:"首頁",pathName:"Home"},{title:"產品列表",pathName:"ProductList"},{title:this.product.title}]}},methods:{getBadgeColor(o){return`text-bg-${T.get(o)||"secondary"}`},getProduct(o){this.$refs.loading.show(),q(o).then(s=>{this.$refs.loading.hide();const{data:{success:a,product:i}}=s;a&&(this.product=i)}).catch(s=>{this.$refs.loading.hide();const{response:a}=s;_(a),this.$router.go(-1)})},plus(){this.qty+=1},dash(){this.qty-=1},addToCart(){this.$refs.loading.show();const o={product_id:this.product.id,qty:this.qty};N({data:o}).then(s=>{this.$refs.loading.hide();const{data:{success:a,message:i}}=s;C(a,i)}).catch(s=>{this.$refs.loading.hide();const{response:a}=s;_(a)})}},mounted(){const{id:o}=this.$route.params;this.getProduct(o)}},z={class:"container py-5"},E={key:0,class:"row"},H={class:"col-12"},S={class:"col-md-6"},G={class:"ratio ratio-4x3"},I=["src","alt"],J={class:"col-md-6 d-flex flex-column align-items-start ps-md-3"},K={class:"mb-3 fw-bold"},O={class:"flex-fill"},Q={class:"mb-3 fw-bold"},R={class:"input-group w-50 mb-3"},W=t("i",{class:"bi bi-dash"},null,-1),X=[W],Y={class:"input-group-text"},Z=t("i",{class:"bi bi-plus"},null,-1),tt=[Z],st={class:"w-100 d-flex mb-3"},et=t("i",{class:"bi bi-cart-plus"},null,-1),ot={class:"col mt-5"};function at(o,s,a,i,e,r){const u=m("Breadcrumb"),g=m("ProductContent"),f=m("Loading");return d(),l("div",z,[e.product?(d(),l("div",E,[t("div",H,[p(u,{breadcrumbList:r.getBreadcrumb},null,8,["breadcrumbList"])]),t("div",S,[t("div",G,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover rounded",alt:e.product.title},null,8,I)])]),t("div",J,[t("span",{class:w(["badge mb-3",r.getBadgeColor(e.product.category)])},c(e.product.category),3),t("h2",K,c(e.product.title),1),t("p",O,c(e.product.description),1),t("h2",Q,c(o.$filters.currency(e.product.price,"NT ")),1),t("div",R,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[0]||(s[0]=(...n)=>r.dash&&r.dash(...n))},X),B(t("input",{type:"text",class:"form-control",min:"1","aria-label":"商品購買數量",readonly:"","onUpdate:modelValue":s[1]||(s[1]=n=>e.qty=n)},null,512),[[k,e.qty]]),t("span",Y,c(e.product.unit),1),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:s[2]||(s[2]=(...n)=>r.plus&&r.plus(...n))},tt)]),t("div",st,[t("button",{type:"button",class:"btn btn-primary w-50 py-2",onClick:s[3]||(s[3]=(...n)=>r.addToCart&&r.addToCart(...n))},[et,L(" 加入購物車 ")])])]),t("div",ot,[p(g,{imagesUrl:e.product.imagesUrl},null,8,["imagesUrl"])])])):P("",!0),p(f,{ref:"loading"},null,512)])}const lt=h(F,[["render",at]]);export{lt as default};