import{L as u}from"./Loading-96ac62cf.js";import{q as _}from"./api-4abfc6b0.js";import{_ as m,r as f,o as l,c as a,b as e,F as g,e as $,f as b,a as y,t as o,n as v}from"./index-33b32499.js";const L={components:{Loading:u},data(){return{tempProduct:{},orders:[]}},methods:{openModal(s,n){if(s==="delete"){const{id:c,product:d}=n;this.tempProduct={...d,cart_id:c},this.$refs.productDeleteModal.show()}else s==="deleteAll"&&(this.tempProduct={title:"全部購物車"},this.$refs.productDeleteModal.show())},getOrders(){this.$refs.loading.show(),_().then(s=>{this.$refs.loading.hide();const{data:{orders:n}}=s;this.orders=n,this.$refs.loading.hide()}).catch(s=>{console.log(s),this.$refs.loading.hide()})}},mounted(){this.getOrders()}},k={class:"container"},w={class:"row justify-content-center py-5"},x={class:"col"},O=e("h2",null,"訂單",-1),A={class:"table align-middle mt-4 table-hover"},B=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"訂單編號"),e("th",{scope:"col"},"顧客姓名"),e("th",{scope:"col"},"狀態"),e("th",{scope:"col"},"備註")])],-1);function C(s,n,c,d,i,D){const h=f("Loading");return l(),a("div",k,[e("div",w,[e("div",x,[O,e("table",A,[B,e("tbody",null,[i.orders?(l(!0),a(g,{key:0},$(i.orders,(t,p)=>{var r;return l(),a("tr",{key:t.id},[e("td",null,o(p+1),1),e("td",null,o(t.create_at),1),e("td",null,o((r=t==null?void 0:t.user)==null?void 0:r.name),1),e("td",null,[e("span",{class:v(["badge rounded-pill px-3 py-1",`bg-${t.is_paid?"success":"secondary"}`])},o(t.is_paid?"已付款":"未付款"),3)]),e("td",null,o(t.message),1)])}),128)):b("",!0)])])])]),y(h,{ref:"loading"},null,512)])}const V=m(L,[["render",C]]);export{V as default};
