import{L as w}from"./Loading-2ecdc58d.js";import{P as v}from"./ProductDeleteModal-cfc0f945.js";import{S as d}from"./sweetalert2.all-fd087d50.js";import{c as P,d as B,u as y,r as D,e as k}from"./api-18922eb0.js";import{_ as A,r as _,o as c,c as u,b as t,d as h,t as a,F as M,e as L,f as g,a as m,w as C,n as V,h as N,v as j}from"./index-96ee7ff2.js";const q={components:{Loading:w,ProductDeleteModal:v},data(){return{tempProduct:{},carts:[],total:0,final_total:0}},computed:{cartsExist(){return this.carts&&this.carts.length===0}},methods:{openModal(e,o){if(e==="delete"){const{id:l,product:r}=o;this.tempProduct={...r,cart_id:l},this.$refs.productDeleteModal.show()}else e==="deleteAll"&&(this.tempProduct={title:"全部購物車"},this.$refs.productDeleteModal.show())},getPrice(e){return P(e,"$ ")},getCarts(){this.$refs.loading.show(),B().then(e=>{const{data:{data:{carts:o,total:l,final_total:r}}}=e;this.carts=o,this.total=l,this.final_total=r,this.$refs.loading.hide()}).catch(e=>{console.log(e),this.$refs.loading.hide()})},updateCart(e){this.$refs.loading.show();const{id:o,qty:l}=e;y(o,{data:{product_id:o,qty:l}}).then(r=>{const{data:{message:s=" "}}=r;this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:s}),this.getCarts()}).catch(r=>{console.log(r);const{response:{data:{message:s}}}=r;this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"更新失敗",text:s})})},removeCartItem(e){this.$refs.loading.show(),D(e).then(()=>{this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:"移除成功(･8･)！"}),this.getCarts()}).catch(o=>{const{response:{data:{message:l}}}=o;this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"移除失敗",text:l})})},removeAllCart(){this.$refs.loading.show(),k().then(()=>{this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:"移除成功(′゜ω。‵)！"}),this.getCarts()}).catch(e=>{const{response:{data:{message:o}}}=e;this.$refs.loading.hide(),d.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"移除失敗",text:o})})}},mounted(){this.getCarts()}},E={class:"container"},S={class:"row justify-content-center py-5"},T={class:"col"},U=t("h2",{class:"text-center fw-bold"},"購物車",-1),F={class:"fw-bold mx-1"},I={class:"table align-middle mt-4 table-hover"},R=t("thead",null,[t("tr",{class:"text-center"},[t("th",{width:"200"},"商品圖片"),t("th",{width:"250"},"商品名稱"),t("th",null,"單位"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"售價"),t("th",null,"小計"),t("th",null,"刪除")])],-1),$={class:"ratio ratio-16x9"},z=["src","alt"],G={class:"input-group input-group-sm"},H={class:"input-group"},J=["onUpdate:modelValue","onBlur"],K={class:"input-group-text",id:"basic-addon2"},O=["onClick"],Q=t("i",{class:"bi bi-trash3"},null,-1),W=[Q],X=t("td",{colspan:"6",class:"text-end"},"總計",-1),Y={class:"text-end"},Z={key:0},tt=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),et={class:"text-end text-success"},st={class:"d-grid gap-2 mt-4 d-md-flex justify-content-md-between"},ot=["disabled"];function it(e,o,l,r,s,n){const f=_("RouterLink"),b=_("Loading"),x=_("ProductDeleteModal");return c(),u("div",E,[t("div",S,[t("div",T,[U,t("p",null,[h(" 總共有"),t("span",F,a(s.carts.length),1),h("件商品 ")]),t("table",I,[R,t("tbody",null,[s.carts?(c(!0),u(M,{key:0},L(s.carts,i=>(c(),u("tr",{key:i.id,class:"text-center"},[t("td",null,[t("div",$,[t("img",{src:i.product.imageUrl,class:"img-fluid object-fit-cover rounded",alt:i.product.title},null,8,z)])]),t("td",null,a(i.product.title),1),t("td",null,"1 / "+a(i.product.unit),1),t("td",null,[t("div",G,[t("div",H,[N(t("input",{"onUpdate:modelValue":p=>i.qty=p,onBlur:p=>n.updateCart(i),min:"1",type:"number",class:"form-control"},null,40,J),[[j,i.qty,void 0,{number:!0}]]),t("span",K,a(i.product.unit),1)])])]),t("td",null,a(n.getPrice(i.total)),1),t("td",null,a(n.getPrice(i.final_total)),1),t("td",null,[t("button",{type:"button",class:"btn",onClick:p=>n.openModal("delete",i)},W,8,O)])]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[X,t("td",Y,a(n.getPrice(s.total)),1)]),s.final_total!==s.total?(c(),u("tr",Z,[tt,t("td",et,a(n.getPrice(s.final_total)),1)])):g("",!0)])]),t("div",st,[m(f,{class:"btn btn-outline-info",to:{name:"ProductList"}},{default:C(()=>[h(" 繼續購物 ")]),_:1}),t("button",{class:"btn btn-outline-danger",disabled:n.cartsExist,onClick:o[0]||(o[0]=i=>n.openModal("deleteAll"))}," 清空購物車 ",8,ot),m(f,{class:V(["btn btn-outline-success",{disabled:s.carts.length===0}]),to:{name:"Checkout"}},{default:C(()=>[h("送出訂單")]),_:1},8,["class"])])])]),m(b,{ref:"loading"},null,512),m(x,{ref:"productDeleteModal",shopCart:!0,id:s.tempProduct.cart_id,title:s.tempProduct.title,onDelete:n.removeCartItem,onDeleteAll:n.removeAllCart},null,8,["id","title","onDelete","onDeleteAll"])])}const ct=A(q,[["render",it]]);export{ct as default};
