import{e as N,r as y,s as F,t as S,f as R,g as L,h as T,u as V,i as K,j as l,k as q,d as D,o as p,c as f,b as c,l as b,a as d,m as B,n as U,p as k,q as P,v as $,x as W,y as z,F as j,z as Z,w as G,_ as J}from"./ULE9LOBi.js";import{c as Q,_ as X,a as Y,b as tt}from"./CSEyXnkV.js";import{_ as O}from"./DlAUqK2U.js";import{u as A}from"./CXYda3Sc.js";const et=a=>a==="defer"||a===!1;function at(...a){var M;const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[t,o,e={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=V(),_=o,x=()=>null,w=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];e.server=e.server??!0,e.default=e.default??x,e.getCachedData=e.getCachedData??w,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??N.deep,e.dedupe=e.dedupe??"cancel";const m=()=>e.getCachedData(t,s)!=null;if(!s._asyncData[t]||!e.immediate){(M=s.payload._errors)[t]??(M[t]=null);const u=e.deep?y:F;s._asyncData[t]={data:u(e.getCachedData(t,s)??e.default()),pending:y(!m()),error:S(s.payload._errors,t),status:y("idle")}}const i={...s._asyncData[t]};i.refresh=i.execute=(u={})=>{if(s._asyncDataPromises[t]){if(et(u.dedupe??e.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if((u._initial||s.isHydrating&&u._initial!==!1)&&m())return Promise.resolve(e.getCachedData(t,s));i.pending.value=!0,i.status.value="pending";const g=new Promise((r,v)=>{try{r(_(s))}catch(H){v(H)}}).then(async r=>{if(g.cancelled)return s._asyncDataPromises[t];let v=r;e.transform&&(v=await e.transform(r)),e.pick&&(v=nt(v,e.pick)),s.payload.data[t]=v,i.data.value=v,i.error.value=null,i.status.value="success"}).catch(r=>{if(g.cancelled)return s._asyncDataPromises[t];i.error.value=K(r),i.data.value=l(e.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=g,s._asyncDataPromises[t]},i.clear=()=>st(s,t);const C=()=>i.refresh({_initial:!0}),I=e.server!==!1&&s.payload.serverRendered;{const u=q();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const r=u._nuxtOnBeforeMountCbs;u&&(R(()=>{r.forEach(v=>{v()}),r.splice(0,r.length)}),L(()=>r.splice(0,r.length)))}I&&s.isHydrating&&(i.error.value||m())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):u&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?u._nuxtOnBeforeMountCbs.push(C):e.immediate&&C(),e.watch&&T(e.watch,()=>i.refresh());const g=s.hook("app:data:refresh",async r=>{(!r||r.includes(t))&&await i.refresh()});u&&L(g)}const h=Promise.resolve(s._asyncDataPromises[t]).then(()=>i);return Object.assign(h,i),h}function st(a,n){n in a.payload.data&&(a.payload.data[n]=void 0),n in a.payload._errors&&(a.payload._errors[n]=null),a._asyncData[n]&&(a._asyncData[n].data.value=void 0,a._asyncData[n].error.value=null,a._asyncData[n].pending.value=!1,a._asyncData[n].status.value="idle"),n in a._asyncDataPromises&&(a._asyncDataPromises[n].cancelled=!0,a._asyncDataPromises[n]=void 0)}function nt(a,n){const t={};for(const o of n)t[o]=a[o];return t}const ot=["title"],ct=D({__name:"MenuItem",props:{title:{default:"lala"}},setup(a){const n=a;return(t,o)=>(p(),f("div",null,[c("button",{title:n.title,class:"min-w-[80px] h-[44px] xl:min-w-[140px] xl:h-[64px] rounded-[100px] py-[12px] px-[18px] xl:py-[16px] xl:px-[32px] uppercase font-neucha text-[16px]/[20px] xl:text-[28px]/[32px] text-[#B3A296] hover:bg-[#312525] focus:bg-[#312525] hover:text-white focus:text-white active:scale-75"},b(n.title),9,ot)]))}}),it={},lt={class:"mt-[22px] lg:mt-[100px]"},rt=c("div",{class:"w-fit mx-auto flex items-center justify-center gap-x-[10px] lg:gap-x-[40px]"},[c("span",{class:"bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"}),c("h2",{class:"font-neucha font-[400] text-[22px]/[24px] lg:text-[60px]/[67px] text-[#191919] lg:text-[#312525] uppercase"}," меню "),c("span",{class:"bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"})],-1),ut={class:"mt-[10px] lg:mt-[50px] flex items-center justify-center flex-wrap gap-x-[2px] lg:gap-x-2"};function pt(a,n){const t=ct;return p(),f("div",null,[c("section",lt,[rt,c("div",ut,[d(t,{title:"Роллы"}),d(t,{title:"суши и гунканы"}),d(t,{title:"сеты"}),d(t,{title:"лапша и рис"}),d(t,{title:"салаты"}),d(t,{title:"Горячие блюда"})])])])}const dt=O(it,[["render",pt]]),_t=D({__name:"InBagButton",emits:["activited"],setup(a,{emit:n}){const t=n,o=e=>{e.preventDefault(),t("activited")};return(e,s)=>(p(),f("button",{title:"На главную",onClick:B(o,["stop"]),class:"w-[100px] h-[35px] rounded-[8px] font-ptSansNarrow text-[15px]/[20px] font-[400] tracking-[0.04em] shadow-[0px_0px_12px_0px_#00000059] bg-[#312525] text-white active:scale-75"}," В корзину "))}}),ft="data:image/svg+xml,%3csvg%20width='14'%20height='2'%20viewBox='0%200%2014%202'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3337%201.00024H1.66699'%20stroke='%232A344A'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",mt="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.55545%204.99998H1.44434M4.99989%208.55545V1.44434'%20stroke='%232A344A'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ht={class:"w-fit p-1 flex items-center justify-center gap-x-[12px]"},xt=c("img",{src:ft,alt:"minus",loading:"lazy"},null,-1),vt=[xt],gt={class:"font-neucha font-[400] text-[19px]/[20px] tracking-[0.05em]"},wt=c("img",{class:"block absolute left-[48%] top-[50%] translate-x-[-50%] translate-y-[-48%]",src:mt,alt:"plus",loading:"lazy"},null,-1),yt=[wt],Dt=D({__name:"MinPlusButton",props:{id:{}},emits:["minus","plus"],setup(a,{emit:n}){const t=n,o=a,e=A(),{ItemCount:s}=e,_=y(s(o.id).value),x=m=>{m.preventDefault(),t("minus")},w=m=>{m.preventDefault(),t("plus")};return U(()=>{_.value=s(o.id).value}),(m,i)=>(p(),f("div",ht,[c("button",{onClick:B(x,["stop"]),class:"w-[30px] h-[30px] bg-white p-[7px] font-bold text-black rounded-full active:scale-75"},vt),c("span",gt,b(l(_)),1),c("button",{onClick:B(w,["stop"]),class:"w-[30px] h-[30px] relative bg-white p-[7px] font-bold text-black rounded-full active:scale-75"},yt)]))}}),Ct=""+new URL("cat.DKMas90h.png",import.meta.url).href,bt={class:"w-[100%]"},It={class:"w-fit mx-auto flex items-start justify-stretch"},$t=c("img",{src:Ct,alt:"catItem",loading:"lazy"},null,-1),kt={class:"w-[100%] px-[30px] mt-6 h-[35%] flex-auto"},Bt={class:"flex items-start justify-between gap-x-[20px]"},Mt={class:"mt-[20px] h-[60%] overflow-x-hidden overflow-y-auto mb-3"},Pt={class:"w-[100%] px-[30px]"},jt={class:"flex items-center justify-between"},Lt=D({__name:"ItemCat",props:{pItem:{}},setup(a){const n=a,t=y(!1),o=y(n.pItem),e=A(),{AddItem:s,setItemCount:_,DeleteItem:x,inBag:w,heartItem:m}=e,i=()=>{t.value=!t.value,t.value&&(o.value.count++,s(o.value))},C=()=>{o.value.count++,_(o.value.id,o.value.count)},I=()=>{o.value.count--,o.value.count<1&&(o.value.count=0),_(o.value.id,o.value.count),o.value.count===0&&x(o.value.id)};return U(()=>{t.value=w(o.value.id).value,t.value&&(o.value.heart=m(o.value.id).value)}),(h,M)=>{const u=Q,g=_t,r=Dt;return p(),f("div",{class:k(["max-w-[270px] min-h-[390px] overflow-hidden rounded-[8px] transition-all flex flex-col py-[30px] shadow-[0px_0px_12px_0px_#00000040]",l(t)?"bg-[#312525] text-white":"bg-[#FAFAFA]"])},[c("header",bt,[c("div",It,[$t,d(u,{"is-heart":l(o).heart,"is-active":l(t),"param-id":l(o).id},null,8,["is-heart","is-active","param-id"])])]),c("main",kt,[c("div",Bt,[c("span",{class:k(["font-neucha font-[400] text-[19px]/[25px] tracking-[0.1em] uppercase",l(t)?"text-white":"text-[#141414]"])},b(h.pItem.name),3),c("span",{class:k(["font-myArial text-[13px]/[15px] font-[400] tracking-[0.04em]",l(t)?"text-white":"text-[#808080]"])},b(h.pItem.weight)+"г.",3)]),c("p",Mt,b(h.pItem.description),1)]),c("footer",Pt,[c("div",jt,[c("span",{class:k(["font-neucha font-[400] text-[19px]/[21px] tracking-[0.05em]",l(t)?"text-white":"text-[#141414]"])},b(h.pItem.price)+" ₽",3),l(t)?$("",!0):(p(),P(g,{key:0,onActivited:i})),l(t)?(p(),P(r,{key:1,id:l(o).id,onMinus:I,onPlus:C},null,8,["id"])):$("",!0)])])],2)}}}),zt="data:image/svg+xml,%3csvg%20width='25'%20height='15'%20viewBox='0%200%2025%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5245%200.555247L0.399387%2011.6806C0.141869%2011.9379%200%2012.2814%200%2012.6476C0%2013.0139%200.141869%2013.3574%200.399387%2013.6147L1.21849%2014.434C1.75222%2014.9671%202.61969%2014.9671%203.15262%2014.434L12.4948%205.0918L21.8474%2014.4444C22.1049%2014.7017%2022.4482%2014.8438%2022.8142%2014.8438C23.1807%2014.8438%2023.524%2014.7017%2023.7817%2014.4444L24.6006%2013.6251C24.8581%2013.3675%2025%2013.0243%2025%2012.658C25%2012.2917%2024.8581%2011.9482%2024.6006%2011.6909L13.4653%200.555247C13.207%200.297323%2012.8621%200.155658%2012.4954%200.156471C12.1273%200.155658%2011.7826%200.297323%2011.5245%200.555247Z'%20fill='white'/%3e%3c/svg%3e",Et=c("img",{class:"w-[32px] h-[32px]",src:zt,alt:"up",losding:"lazy"},null,-1),Ut=[Et],Ot=D({__name:"UpButton",setup(a){const n=()=>{scrollTo(0,0)};return(t,o)=>(p(),f("button",{onClick:B(n,["prevent"]),title:"К началу страницы",class:"w-[60px] h-[60px] bg-[#312525] px-4 active:scale-75 rounded-full"},Ut))}});function At(){const a=y(!1);return{isShow:a,show:()=>{a.value=!0},hide:()=>{a.value=!1}}}const Ht={mounted(a,n){const t={root:null,rootMargin:"0px",threshold:[1]},o=s=>{s.forEach(_=>{_.isIntersecting&&n.value.func&&typeof n.value.func=="function"&&n.value.func()})};new IntersectionObserver(o,t).observe(a)},name:"Intercept"},E=Ht,Nt={key:0},Ft={key:0,class:"mt-[50px] w-fit mx-auto gridData"},St={key:0,class:"fixed bottom-16 right-8 animate-fromTop"},Rt=D({__name:"CatItems",async setup(a){let n,t;const{pending:o,error:e,data:s}=([n,t]=W(async()=>at("catItems",async()=>await $fetch("/api/items"))),n=await n,t(),n),{isShow:_,show:x,hide:w}=At();return(m,i)=>{const C=Lt,I=Ot;return p(),f(j,null,[l(o)?(p(),f("div",Nt,"Loading...")):$("",!0),c("div",null,[z(c("div",null,null,512),[[l(E),{func:l(w)}]]),!l(o)&&!l(e)?(p(),f("section",Ft,[(p(!0),f(j,null,Z(l(s),h=>(p(),P(C,{key:h.id,"p-item":h},null,8,["p-item"]))),128)),l(_)?(p(),f("div",St,[d(I)])):$("",!0)])):$("",!0),z(c("div",null,null,512),[[l(E),{func:l(x)}]])])],64)}}}),Tt=O(Rt,[["__scopeId","data-v-45a62a66"]]),Zt=D({__name:"index",setup(a){return(n,t)=>{const o=J,e=tt,s=dt,_=Tt,x=Y;return p(),f(j,null,[d(o,{color:"navy"}),d(X),d(x,null,{default:G(()=>[c("div",null,[d(e),d(s),d(_)])]),_:1})],64)}}});export{Zt as default};
