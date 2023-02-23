import{M as N,P as V}from"./ProductDeleteModal-ae9e02f9.js";import{j as A,c as I,k as D,m as S,n as F,o as L}from"./api-4abfc6b0.js";import{_ as P,o as a,c,b as t,t as p,h as d,v as u,f as E,F as v,e as x,J as $,n as b,K as y,r as _,a as f,M,d as w}from"./index-fe0b81cf.js";import{L as H}from"./Loading-4fb4e3ea.js";import{S as h}from"./sweetalert2.all-cf7836bc.js";const j={props:{editMode:{type:Boolean,default:!1},id:{type:String,default:""},title:{type:String,default:""},imageUrl:{type:String,default:""},imagesUrl:{type:Array,default:()=>[]},description:{type:String,default:""},category:{type:String,default:""},content:{type:String,default:""},origin_price:{type:Number,default:0},price:{type:Number,default:0},unit:{type:String,default:""},num:{type:Number,default:0},evaluate:{type:Number,default:1},is_enabled:{type:Number,default:0}},mixins:[N],data(){return{modal:{},product:{},tempImage:""}},computed:{getTitle(){return this.editMode?"編輯產品":"新增產品"}},methods:{initProduct(){this.product.id=this.id,this.product.title=this.title,this.product.imageUrl=this.imageUrl,this.product.imagesUrl=[...this.imagesUrl],this.product.description=this.description,this.product.category=this.category,this.product.content=this.content,this.product.origin_price=this.origin_price,this.product.price=this.price,this.product.unit=this.unit,this.product.num=this.num,this.product.evaluate=this.evaluate,this.product.is_enabled=this.is_enabled},fileHandle(l){const e=l.target.files[0],i=new FormData;i.append("file-to-upload",e),this.uploadFile(i)},uploadFile(l){A(l).then(e=>{console.log(e);const{data:{imageUrl:i}}=e;this.product.imagesUrl.push(i)}).catch(e=>{console.log(e)})},addImage(){this.product.imagesUrl.push(this.tempImage),this.tempImage=""},deleteImage(l){this.product.imagesUrl.splice(l,1)},confirmHandler(){const{imagesUrl:l}=this.product,[e]=l;this.product.imageUrl=e,this.$emit(`${this.editMode?"edit":"add"}`,{data:this.product})},show(){this.modal.show(),this.initProduct()}}},T={id:"productModal",ref:"modal",class:"modal fade text-start",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},z={class:"modal-dialog modal-xl modal-dialog-centered"},J={class:"modal-content border-0"},K={class:"modal-header bg-dark text-white"},O={id:"productModalLabel",class:"modal-title"},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},Q={class:"row"},R={class:"col-sm-4"},W={class:"mb-2"},X={class:"mb-3"},Y=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Z=["src","alt"],tt={class:"mb-3"},et=["disabled"],ot={class:"mb-5"},st=t("label",{for:"formFile",class:"form-label"},"或上傳圖片",-1),it=["value"],lt=["onClick"],nt={class:"col-sm-8"},rt={class:"mb-3"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),at={class:"row"},ct={class:"mb-3 col-md-6"},ut=t("label",{for:"category",class:"form-label"},"分類",-1),pt={class:"mb-3 col-md-6"},mt=t("label",{for:"price",class:"form-label"},"單位",-1),ht={class:"row"},gt={class:"mb-3 col-md-6"},ft=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"mb-3 col-md-6"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),vt=t("hr",null,null,-1),yt={class:"mb-3"},Pt=t("label",{for:"evaluate",class:"form-label"},"商品評價星級",-1),xt={class:"mb-3"},kt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Mt={class:"mb-3"},wt=t("label",{for:"content",class:"form-label"},"說明內容",-1),Ut={class:"mb-3"},Ct={class:"form-check"},Bt=t("label",{class:"form-check-label",for:"isEnabled"},"是否啟用",-1),Nt={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function At(l,e,i,m,s,n){return a(),c("div",T,[t("div",z,[t("div",J,[t("div",K,[t("h5",O,[t("span",null,p(n.getTitle),1)]),q]),t("div",G,[t("div",Q,[t("div",R,[t("div",W,[t("div",X,[Y,d(t("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=o=>s.tempImage=o)},null,512),[[u,s.tempImage,void 0,{lazy:!0}]])]),s.tempImage?(a(),c("img",{key:0,class:"img-fluid",src:s.tempImage,alt:`${i.title} photo`},null,8,Z)):E("",!0)]),t("div",tt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",disabled:!s.tempImage,onClick:e[1]||(e[1]=(...o)=>n.addImage&&n.addImage(...o))}," 新增圖片 ",8,et)]),t("div",ot,[st,t("input",{class:"form-control",type:"file",id:"formFile",onChange:e[2]||(e[2]=(...o)=>n.fileHandle&&n.fileHandle(...o))},null,32)]),(a(!0),c(v,null,x(s.product.imagesUrl,(o,g)=>(a(),c("div",{key:o,class:"my-3"},[t("input",{type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結",value:s.product.imagesUrl[g]},null,8,it),t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:k=>n.deleteImage(g)}," 刪除圖片 ",8,lt)]))),128))]),t("div",nt,[t("div",rt,[dt,d(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[3]||(e[3]=o=>s.product.title=o)},null,512),[[u,s.product.title]])]),t("div",at,[t("div",ct,[ut,d(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[4]||(e[4]=o=>s.product.category=o)},null,512),[[u,s.product.category]])]),t("div",pt,[mt,d(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[5]||(e[5]=o=>s.product.unit=o)},null,512),[[u,s.product.unit,void 0,{number:!0}]])])]),t("div",ht,[t("div",gt,[ft,d(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[6]||(e[6]=o=>s.product.origin_price=o)},null,512),[[u,s.product.origin_price,void 0,{number:!0}]])]),t("div",_t,[bt,d(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[7]||(e[7]=o=>s.product.price=o)},null,512),[[u,s.product.price]])])]),vt,t("div",yt,[Pt,d(t("input",{id:"evaluate",type:"range",class:"form-range",min:"1",max:"5",step:"0.5","onUpdate:modelValue":e[8]||(e[8]=o=>s.product.evaluate=o)},null,512),[[u,s.product.evaluate,void 0,{number:!0}]])]),t("div",xt,[kt,d(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=o=>s.product.description=o)},`
                `,512),[[u,s.product.description]])]),t("div",Mt,[wt,d(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=o=>s.product.content=o)},`
                `,512),[[u,s.product.content]])]),t("div",Ut,[t("div",Ct,[d(t("input",{id:"isEnabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=o=>s.product.is_enabled=o)},null,512),[[$,s.product.is_enabled]]),Bt])])])])]),t("div",Nt,[Vt,t("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=(...o)=>n.confirmHandler&&n.confirmHandler(...o))},"確認")])])])],512)}const It=P(j,[["render",At]]),Dt={props:{current_page:{type:Number,default:1},has_next:{type:Boolean,default:!0},has_pre:{type:Boolean,default:!0},total_pages:{type:Number,default:1}},methods:{goPre(){this.has_pre&&this.$emit("emit-pages",this.current_page-1)},goNext(){this.has_next&&this.$emit("emit-pages",this.current_page+1)}}},St={"aria-label":"Page navigation example"},Ft={class:"pagination justify-content-center"},Lt=["onClick"];function Et(l,e,i,m,s,n){return a(),c("nav",St,[t("ul",Ft,[t("li",{class:b(["page-item",{disabled:!i.has_pre}])},[t("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=y((...o)=>n.goPre&&n.goPre(...o),["prevent"]))},"Previous")],2),(a(!0),c(v,null,x(i.total_pages,o=>(a(),c("li",{class:"page-item",key:o},[t("a",{class:b(["page-link",{active:i.current_page===o}]),href:"#",onClick:y(g=>l.$emit("emitPages",o),["prevent"])},p(o),11,Lt)]))),128)),t("li",{class:b(["page-item",{disabled:!i.has_next}])},[t("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=y((...o)=>n.goNext&&n.goNext(...o),["prevent"]))},"Next")],2)])])}const $t=P(Dt,[["render",Et]]),Ht={components:{ProductModal:It,ProudctDeleteModal:V,Pagination:$t,Loading:H},data(){return{products:[],tempProduct:{},pagination:{}}},methods:{getPrice(l){return I(l,"$ ")},getProduct(l=1){D(l).then(e=>{const{data:{products:i,pagination:m}}=e;if(i===null){this.products=[];return}this.products=Object.values(i),this.pagination=m,this.$refs.loading.hide()}).catch(e=>{console.log(e),this.$refs.loading.hide()})},openModal(l,e){if(l==="new")this.$refs.productModal.show();else if(l==="edit"){const{id:i}=e;this.$refs[`productModal-${i}`][0].show()}else l==="delete"&&(this.tempProduct={...e},this.$refs.productDeleteModal.show())},addProduct(l){this.$refs.loading.show(),S(l).then(e=>{const{data:{message:i=" "}}=e;this.$refs.productModal.hide(),this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:i}),this.getProduct()}).catch(e=>{const{response:{data:{message:i=[]}}}=e;this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"新增失敗",text:i})})},editProduct(l){this.$refs.loading.show();const{data:{id:e}}=l;F(e,l).then(i=>{const{data:{message:m=" "}}=i;this.$refs[`productModal-${e}`][0].hide(),this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:m}),this.getProduct()}).catch(i=>{console.log(i);const{response:{data:{message:m}}}=i;this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"編輯失敗",text:m})})},deleteProduct(l){this.$refs.loading.show(),L(l).then(()=>{this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:"刪除成功(*’ｰ’*)！"}),this.getProduct()}).catch(e=>{const{response:{data:{message:i}}}=e;this.$refs.loading.hide(),h.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"error",title:"刪除失敗",text:i})})}},mounted(){this.getProduct()}},jt={class:"container"},Tt={class:"row justify-content-center py-5"},zt={class:"col"},Jt=t("h2",null,"產品列表",-1),Kt={class:"text-end mt-4"},Ot={class:"table table-hover mt-4 align-middle"},qt=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"產品名稱"),t("th",{scope:"col"},"分類"),t("th",{scope:"col"},"原價"),t("th",{scope:"col"},"售價"),t("th",{scope:"col"},"是否啟用"),t("th",{scope:"col"},"編輯")])],-1),Gt={class:"badge rounded-pill px-2 bg-info text-dark"},Qt={class:"btn-group"},Rt=["onClick"],Wt=["onClick"],Xt={class:"text-info"};function Yt(l,e,i,m,s,n){const o=_("ProductModal"),g=_("Pagination"),k=_("ProudctDeleteModal"),U=_("Loading");return a(),c(v,null,[t("div",jt,[t("div",Tt,[t("div",zt,[Jt,t("div",Kt,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=r=>n.openModal("new"))},"建立新的產品")]),t("table",Ot,[qt,t("tbody",null,[(a(!0),c(v,null,x(s.products,(r,C)=>(a(),c("tr",{key:r.id},[t("td",null,p(C+1),1),t("td",null,p(r.title),1),t("td",null,[t("span",Gt,p(r.category),1)]),t("td",null,p(n.getPrice(r.origin_price)),1),t("td",null,p(n.getPrice(r.price)),1),t("td",null,[t("span",{class:b(["badge rounded-pill px-3 py-1",`bg-${r.is_enabled?"success":"secondary"}`])},p(r.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Qt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:B=>n.openModal("edit",r)}," 編輯 ",8,Rt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:B=>n.openModal("delete",r)}," 刪除 ",8,Wt)])]),f(o,M({editMode:"",ref_for:!0,ref:`productModal-${r.id}`},r,{onEdit:n.editProduct}),null,16,["onEdit"])]))),128))])]),f(g,M(s.pagination,{onEmitPages:n.getProduct}),null,16,["onEmitPages"]),t("p",null,[w(" 目前有 "),t("span",Xt,p(s.products.length),1),w(" 項產品 ")])])]),f(k,{ref:"productDeleteModal",id:s.tempProduct.id,title:s.tempProduct.title,onDelete:n.deleteProduct},null,8,["id","title","onDelete"])]),f(o,{ref:"productModal",onAdd:n.addProduct},null,8,["onAdd"]),f(U,{ref:"loading"},null,512)],64)}const ie=P(Ht,[["render",Yt]]);export{ie as default};