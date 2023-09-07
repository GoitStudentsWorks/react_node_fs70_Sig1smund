"use strict";(self.webpackChunkfinal_fullstack_team_proj=self.webpackChunkfinal_fullstack_team_proj||[]).push([[111],{351:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(9439),s=n(2791),a=n(7689),o=n(8976),c=n(1512),l=n(7834),r={button:"AddPetButton_button__d5mR7",plusIcon:"AddPetButton_plusIcon__QRlb4"},d=n(7609),h=n(3329);function u(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],u=t[1],_=(0,l.Z)().isLoggedIn,m=(0,a.s0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{type:"button",className:r.button,onClick:function(){_?m("/add-pet"):u(!0)},children:["Add Pet",(0,h.jsx)("svg",{className:r.plusIcon,width:24,height:24,children:(0,h.jsx)("use",{href:d.Z+"#logo"})})]}),n&&(0,h.jsx)(o.Z,{isOpen:n,onClose:function(){return u(!1)},children:(0,h.jsx)(c.Z,{})})]})}},1512:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(1087),s={container:"AttentionModal_container__wyVg3",title:"AttentionModal_title__ehV77",subtitle:"AttentionModal_subtitle__b8n+z",buttons:"AttentionModal_buttons__eo2K0",loginBtn:"AttentionModal_loginBtn__M0PaQ global_desktopButtonWhite__yg5Te global_shadow__ECSSe",icon:"AttentionModal_icon__Uc3Dw",registerBtn:"AttentionModal_registerBtn__EjiH8 global_desktopButtonWhite__yg5Te global_shadow__ECSSe"},a=n(7609),o=n(3329);function c(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:s.container,children:[(0,o.jsx)("p",{className:s.title,children:"Attention"}),(0,o.jsx)("p",{className:s.subtitle,children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,o.jsxs)("div",{className:s.buttons,children:[(0,o.jsxs)(i.OL,{className:s.loginBtn,to:"/login",children:["Login",(0,o.jsx)("svg",{className:s.icon,width:24,height:24,children:(0,o.jsx)("use",{href:a.Z+"#pawprint-1"})})]}),(0,o.jsx)(i.OL,{className:s.registerBtn,to:"/register",children:"Register"})]})]})})}},8976:function(e,t,n){n.d(t,{Z:function(){return i.Z}});var i=n(5829)},3111:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var i=n(1413),s=n(9439),a=n(7689),o=n(2791),c=n(9434),l=n(4066),r=function(e){return e.notices.notices},d=function(e){return e.notices.isLoading},h=function(e){return e.notices.filters},u=function(e){return e.notices.isDeleting},_=function(e){return e.notices.total};function m(){return{notices:(0,c.v9)(r),isLoading:(0,c.v9)(d),filters:(0,c.v9)(h),isDeleting:(0,c.v9)(u),total:(0,c.v9)(_)}}var f={form:"noticesSearch_form__tvBj8 global_shadow__ECSSe",button:"noticesSearch_button__ff2AQ",iconSearch:"noticesSearch_iconSearch__NQu4Q",iconClose:"noticesSearch_iconClose__qQyFG",input:"noticesSearch_input__ujHU9"},g=n(7609),x=n(3329);function v(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),n=t[0],i=t[1],r=(0,a.UO)().categoryName,d=(0,c.I0)(),h={categoryName:r,query:n};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:f.form,onSubmit:function(e){e.preventDefault(),d((0,l.r7)(h))},children:[(0,x.jsx)("input",{className:f.input,onChange:function(e){return i(e.currentTarget.value)},value:n,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),(0,x.jsx)("button",{type:"submit",className:f.button,children:(0,x.jsx)("svg",{width:"24px",height:"24px",className:f.iconSearch,children:(0,x.jsx)("use",{href:g.Z+"#search"})})}),""!==n&&(0,x.jsx)("button",{type:"button",className:f.button,onClick:function(){return i(""),void d((0,l.r7)({categoryName:r,query1:""}))},children:(0,x.jsx)("svg",{className:f.iconClose,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M19 5L5 19M5.00004 5L19 19",stroke:"#FFC107",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})}var j=n(1087),N=n(4717),p={button:"NoticesCategoriesNav_button__RYmil global_lostAndFoundButton__5arGq",active:"NoticesCategoriesNav_active__t5djC",container:"NoticesCategoriesNav_container__Z62eL"};function w(){var e=(0,a.TH)(),t=(0,N.Z)().isLoggedIn;return(0,x.jsxs)("nav",{className:p.container,children:[(0,x.jsx)(j.OL,{className:"/notices/sell"===e.pathname?[p.button,p.active].join(" "):p.button,to:"/notices/sell",children:"sell"}),(0,x.jsx)(j.OL,{className:"/notices/lost-found"===e.pathname?[p.button,p.active].join(" "):p.button,to:"/notices/lost-found",children:"lost/found"}),(0,x.jsx)(j.OL,{className:"/notices/in-good-hands"===e.pathname?[p.button,p.active].join(" "):p.button,to:"/notices/in-good-hands",children:"in good hands"}),t&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(j.OL,{className:"/notices/favorite"===e.pathname?[p.button,p.active].join(" "):p.button,to:"/notices/favorite",children:"favorite ads"}),(0,x.jsx)(j.OL,{className:"/notices/own"===e.pathname?[p.button,p.active].join(" "):p.button,to:"/notices/own",children:"my ads"})]})]})}var C=n(3433),b=n(6221),y={mainButton:"NoticesFilters_mainButton__-F18r global_filterButton__bdYhY",activeFilter:"NoticesFilters_activeFilter__lNTjS",filtersContainer:"NoticesFilters_filtersContainer__Q6Iwn",dropdown:"NoticesFilters_dropdown__oRtCQ global_shadow__ECSSe",open:"NoticesFilters_open__GQCr7",close:"NoticesFilters_close__fMiZI",filterGroup:"NoticesFilters_filterGroup__dlQyh",filterSubButton:"NoticesFilters_filterSubButton__vy937",filterOptions:"NoticesFilters_filterOptions__YBQ-I",selectedFilters:"NoticesFilters_selectedFilters__-Ma3Q",filterButtonSelected:"NoticesFilters_filterButtonSelected__oiTMd global_shadow__ECSSe",filtersLeftContainer:"NoticesFilters_filtersLeftContainer__h2Huo",title:"NoticesFilters_title__JFiRD",label:"NoticesFilters_label__AGTAF",icon:"NoticesFilters_icon__irSLL",active:"NoticesFilters_active__zrVS9",mobileBtnFilter:"NoticesFilters_mobileBtnFilter__sM-28"};function L(){var e=(0,c.I0)(),t=m().filters,n=(0,o.useState)(!1),i=(0,s.Z)(n,2),a=i[0],l=i[1],r=(0,o.useState)(!1),d=(0,s.Z)(r,2),h=d[0],u=d[1],_=(0,o.useState)(!1),f=(0,s.Z)(_,2),g=f[0],v=f[1],j=(0,o.useState)(t.gender),N=(0,s.Z)(j,2),p=N[0],w=N[1],L=(0,o.useState)(t.age),B=(0,s.Z)(L,2),Z=B[0],M=B[1],k=(0,o.useState)(!1),S=(0,s.Z)(k,2),F=S[0],I=S[1];(0,o.useEffect)((function(){function e(){I(window.innerWidth<=767)}return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]);var H=function(){l(!a)},V=function(t){var n=p.includes(t)?p.filter((function(e){return e!==t})):[].concat((0,C.Z)(p),[t]);w(n),e((0,b.nM)(n))},A=function(t){var n=Z.includes(t)?Z.filter((function(e){return e!==t})):[].concat((0,C.Z)(Z),[t]);M(n),e((0,b.Ly)(n))};return(0,x.jsxs)("div",{className:y.filtersContainer,children:[(0,x.jsxs)("div",{className:y.filtersLeftContainer,children:[(p.length>0||Z.length>0)&&(0,x.jsxs)("div",{className:y.selectedFilters,children:[p.map((function(e){return(0,x.jsxs)("button",{className:y.filterButtonSelected,onClick:function(){return V(e)},children:[e,(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,x.jsx)("path",{d:"M10.6664 5.33325L5.33301 10.6666M5.33302 5.33325L10.6664 10.6666",className:y.icon})})]},e)})),Z.map((function(e){return(0,x.jsxs)("button",{className:y.filterButtonSelected,onClick:function(){return A(e)},children:[e,(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,x.jsx)("path",{d:"M10.6664 5.33325L5.33301 10.6666M5.33302 5.33325L10.6664 10.6666",className:y.icon})})]},e)}))]}),F?(0,x.jsx)("button",{className:"".concat(y.mobileBtnFilter," ").concat(p.length>0||Z.length>0?y.activeFilter:""),onClick:H,children:(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 4L9 12V18L15 21V12L20 4H4Z",className:"".concat(y.icon," ").concat(p.length>0||Z.length>0?y.active:"")})})}):(0,x.jsxs)("button",{className:"".concat(y.mainButton," ").concat(p.length>0||Z.length>0?y.activeFilter:""),onClick:H,children:["Filter",(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 4L9 12V18L15 21V12L20 4H4Z",className:"".concat(y.icon," ").concat(p.length>0||Z.length>0?y.active:"")})})]})]}),a&&(0,x.jsxs)("div",{className:"".concat(y.dropdown," ").concat(h&&g?y.open:y.close),children:[(0,x.jsx)("h3",{className:y.title,children:"Filters"}),(0,x.jsxs)("div",{className:y.filterGroup,children:[(0,x.jsxs)("button",{className:y.filterSubButton,onClick:function(){u(!h)},children:[h?"":(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 9L12 17L20 9",className:y.icon})}),"By Gender"]}),h&&(0,x.jsxs)("div",{className:y.filterOptions,children:[(0,x.jsxs)("label",{className:y.label,children:[p.includes("male")?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z",className:y.icon})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z",className:y.icon})}),(0,x.jsx)("input",{type:"checkbox",checked:p.includes("male"),onChange:function(){return V("male")}}),"male"]}),(0,x.jsxs)("label",{className:y.label,children:[p.includes("female")?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z",className:y.icon})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z",className:y.icon})}),(0,x.jsx)("input",{type:"checkbox",checked:p.includes("female"),onChange:function(){return V("female")}}),"female"]})]})]}),(0,x.jsxs)("div",{className:y.filterGroup,children:[(0,x.jsxs)("button",{className:y.filterSubButton,onClick:function(){v(!g)},children:[g?"":(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 9L12 17L20 9",className:y.icon})}),"By Age"]}),g&&(0,x.jsxs)("div",{className:y.filterOptions,children:[(0,x.jsxs)("label",{className:y.label,children:[Z.includes("up to 1 year")?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z",className:y.icon})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z",className:y.icon})}),(0,x.jsx)("input",{type:"checkbox",checked:Z.includes("up to 1 year"),onChange:function(){return A("up to 1 year")}}),"up to 1 year"]}),(0,x.jsxs)("label",{className:y.label,children:[Z.includes("up to 2 years")?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z",className:y.icon})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z",className:y.icon})}),(0,x.jsx)("input",{type:"checkbox",checked:Z.includes("up to 2 years"),onChange:function(){return A("up to 2 years")}}),"up to 2 years"]}),(0,x.jsxs)("label",{className:y.label,children:[Z.includes("from 2 years")?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M17 9L9.99998 16L6.99994 13M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20Z",className:y.icon})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,x.jsx)("path",{d:"M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z",className:y.icon})}),(0,x.jsx)("input",{type:"checkbox",checked:Z.includes("from 2 years"),onChange:function(){return A("from 2 years")}}),"from 2 years"]})]})]})]})]})}var B=n(5861),Z=n(4687),M=n.n(Z),k=n(7834),S={container:"NoticeCategoryItem_container__WGJQ5",wrapper:"NoticeCategoryItem_wrapper__FBXOm",pet_img:"NoticeCategoryItem_pet_img__FHf7I",category:"NoticeCategoryItem_category__1jJaa",fav_btn:"NoticeCategoryItem_fav_btn__8tU2Y",trash_btn:"NoticeCategoryItem_trash_btn__+4myF",infav_btn:"NoticeCategoryItem_infav_btn__NSvHo",info_container:"NoticeCategoryItem_info_container__dExE8",info_item:"NoticeCategoryItem_info_item__x1JqN",svg_info:"NoticeCategoryItem_svg_info__4yFHJ",bottom_container:"NoticeCategoryItem_bottom_container__-dfcO",title:"NoticeCategoryItem_title__WTTHR",learn_btn:"NoticeCategoryItem_learn_btn__c2BbC",learn_svg:"NoticeCategoryItem_learn_svg__DepQq",modalTitle:"NoticeCategoryItem_modalTitle__i+2j8",modalText:"NoticeCategoryItem_modalText__r-t7F"},F=function(e){var t=e.split("-"),n=(0,s.Z)(t,3),i=n[0],a=n[1],o=n[2],c=parseInt(a,10)-1,l=new Date(o,c,i),r=(new Date-l)/315576e5;return Math.floor(r)},I=function(e){return e.length>5?e.slice(0,4)+"...":e},H=n(5829),V=n(8976),A=n(1512),P={container:"NoticeModal_container__X0HhL",noticeCard:"NoticeModal_noticeCard__OAZd7",category:"NoticeModal_category__nI7v5",photo:"NoticeModal_photo__GnWe1",information:"NoticeModal_information__b6qb2",title:"NoticeModal_title__18d06",informationItem:"NoticeModal_informationItem__EcdCm",informationKey:"NoticeModal_informationKey__1NCcn",value:"NoticeModal_value__vjlfp",contactWrap:"NoticeModal_contactWrap__JsQIL",valueLink:"NoticeModal_valueLink__LpXhi",wrap:"NoticeModal_wrap__WXiXm",commentContainer:"NoticeModal_commentContainer__kc3cI",commentKey:"NoticeModal_commentKey__MTJz6",buttons:"NoticeModal_buttons__GrV7d",favoriteBtn:"NoticeModal_favoriteBtn__61hw+ global_desktopButtonBlue__4lkQ4 global_desktopButtonWhite__yg5Te global_shadow__ECSSe global_shadow__ECSSe",favBtn:"NoticeModal_favBtn__SwncR",infavBtn:"NoticeModal_infavBtn__+OkFl",heart:"NoticeModal_heart__k1Tys",contactLink:"NoticeModal_contactLink__MKmX4 global_desktopButtonWhite__yg5Te global_shadow__ECSSe"};function O(e){var t=e.item,n=e.handler,i=e.favorites,a=(0,o.useState)(!1),l=(0,s.Z)(a,2),r=l[0],d=l[1],h=(0,k.Z)(),u=h.isRefreshing,_=h.isLoggedIn,m=(0,c.I0)();if(t){var f=t._id,v=t.category,N=t.title,p=t.name,w=t.date,C=t.type,b=t.imageURL,y=t.comments,L=t.sex,B=t.location,Z=t.price,M=t.owner,S=M.email,F=M.phone,I="tel:".concat(F),H="mailto:".concat(S),O="sell"===v;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:P.container,children:[(0,x.jsxs)("div",{className:P.noticeCard,children:[(0,x.jsx)("label",{className:P.category,children:v}),(0,x.jsx)("img",{alt:"notice pet avatar",className:P.photo,src:b}),(0,x.jsxs)("div",{className:P.information,children:[(0,x.jsx)("h2",{className:P.title,children:N}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Name:"}),(0,x.jsx)("p",{className:P.value,children:p})]}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Birthday:"}),(0,x.jsx)("p",{className:P.value,children:w})]}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Type:"}),(0,x.jsx)("p",{className:P.value,children:C})]}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Place:"}),(0,x.jsx)("p",{className:P.value,children:B})]}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"The sex:"}),(0,x.jsx)("p",{className:P.value,children:L})]}),(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Email:"}),(0,x.jsx)("div",{className:P.contactWrap,children:(0,x.jsx)(j.rU,{className:P.valueLink,to:H,children:S})})]}),""!==F&&(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Phone:"}),(0,x.jsx)("div",{className:P.contactWrap,children:(0,x.jsx)(j.rU,{className:P.valueLink,to:I,children:F})})]}),O&&(0,x.jsxs)("div",{className:P.informationItem,children:[(0,x.jsx)("p",{className:P.informationKey,children:"Price:"}),(0,x.jsx)("p",{className:P.value,children:Z})]})]})]}),(0,x.jsxs)("div",{className:P.wrap,children:[(0,x.jsxs)("div",{className:P.commentContainer,children:[(0,x.jsx)("p",{className:P.commentKey,children:"Comments:"}),y]}),(0,x.jsxs)("div",{className:P.buttons,children:[""===F?(0,x.jsx)(j.rU,{className:P.contactLink,to:H,children:"Contact"}):(0,x.jsx)(j.rU,{className:P.contactLink,to:I,children:"Contact"}),!u&&(0,x.jsxs)("button",{className:P.favoriteBtn,onClick:function(){return e=f,void(_?m(n(e)):d(!0));var e},children:[i?"Remove":"Add to",(0,x.jsx)("div",{className:i?[P.favBtn,P.infavBtn].join(" "):[P.favBtn].join(" "),children:(0,x.jsx)("svg",{className:P.heart,width:"24",height:"24",children:(0,x.jsx)("use",{className:P.iconHeart,href:g.Z+"#heart-1"})})})]}),r&&(0,x.jsx)(V.Z,{isOpen:r,onClose:function(){return d(!1)},children:(0,x.jsx)(A.Z,{})})]})]})]})})}}var T=n(799),W=n(6056);function E(e){var t,n=e.item,i=e.favHandler,r=e.favorites,d=(0,k.Z)(),h=d.user,u=d.isLoggedIn,_=d.isRefreshing,f=m().isDeleting,v=(0,o.useState)(!1),j=(0,s.Z)(v,2),N=j[0],p=j[1],w=n._id,C=n.category,b=n.title,y=n.name,L=n.date,B=n.imageURL,Z=n.sex,M=n.location,V=n.owner,A=(0,o.useState)(!1),P=(0,s.Z)(A,2),E=P[0],Q=P[1],K=F(L),R=I(M),U=(0,c.I0)(),D=(0,a.UO)().categoryName,G=V._id===h.id;switch(C){case"sell":default:t="sell";break;case"lost-found":t="lost/found";break;case"in-good-hands":t="in good hands"}return(0,x.jsxs)(x.Fragment,{children:[f&&(0,x.jsx)(T.Z,{}),!f&&(0,x.jsxs)("li",{className:S.container,children:[(0,x.jsxs)("div",{className:S.wrapper,children:[(0,x.jsx)("img",{className:S.pet_img,src:B,alt:y,width:"300"}),(0,x.jsx)("div",{className:S.category,children:(0,x.jsx)("p",{children:t})}),!_&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:r?[S.fav_btn,S.infav_btn].join(" "):[S.fav_btn].join(" "),type:"button",onClick:function(){return i(w)},children:(0,x.jsx)("svg",{className:S.heart,width:"24",height:"24",children:(0,x.jsx)("use",{href:g.Z+"#heart"})})})}),u&&"own"===D&&G&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:S.trash_btn,type:"button",onClick:function(){return Q(!0)},children:(0,x.jsx)("svg",{className:S.trash,width:"24",height:"24",children:(0,x.jsx)("use",{href:g.Z+"#trash-2"})})})}),(0,x.jsxs)("div",{className:S.info_container,children:[(0,x.jsxs)("div",{className:S.info_item,children:[(0,x.jsx)("svg",{className:S.svg_info,width:"24",height:"24",children:(0,x.jsx)("use",{href:g.Z+"#location-1"})}),(0,x.jsx)("p",{children:R})]}),(0,x.jsxs)("div",{className:S.info_item,children:[(0,x.jsx)("svg",{className:S.svg_info,width:"24",height:"24",children:(0,x.jsx)("use",{href:g.Z+"#clock"})}),(0,x.jsxs)("p",{children:[K<1&&"<1 ".concat("year"," "),1===K&&"1 ".concat("year"),K>1&&"".concat(K," ","years")]})]}),(0,x.jsxs)("div",{className:S.info_item,children:[(0,x.jsx)("svg",{className:S.svg_info,width:"24",height:"24",children:(0,x.jsx)("use",{href:"male"===Z?g.Z+"#male":g.Z+"#female"})}),(0,x.jsx)("p",{children:Z})]})]})]}),(0,x.jsxs)("div",{className:S.bottom_container,children:[(0,x.jsx)("h2",{className:S.title,children:b.length<20?b:"".concat(b.slice(0,20),"...")}),N&&(0,x.jsx)(H.Z,{isOpen:N,onClose:function(){return p(!1)},children:(0,x.jsx)(O,{item:n,handler:i,favorites:r})}),(0,x.jsxs)("button",{className:S.learn_btn,type:"button",onClick:function(){return p(!0)},children:["Learn More",(0,x.jsx)("svg",{className:S.learn_svg,width:"24",height:"24",children:(0,x.jsx)("use",{href:g.Z+"#pawprint-1"})})]})]})]}),E&&(0,x.jsx)(H.Z,{isOpen:function(){Q(!0)},onClose:function(){return Q(!1)},children:(0,x.jsx)(W.Z,{close:function(){Q(!1)},id:w,action:function(e){U((0,l.gu)(e)),Q(!1)},logo:"#trash-2",children:(0,x.jsxs)("div",{className:S.modalText,children:[(0,x.jsxs)("div",{className:S.modalTitle,children:[(0,x.jsx)("div",{children:"Delete"})," ",(0,x.jsx)("div",{children:"adverstiment?"})," "]}),"Are you sure you want to delete ",(0,x.jsxs)("b",{children:["\u201c",y,"\u201d"]}),"?",(0,x.jsx)("br",{}),"You can`t undo this action."]})})})]})}var Q=n(9273),K=n(9604),R={list:"NoticesCategoriesList_list__TSyA3",imgNoPet:"NoticesCategoriesList_imgNoPet__KAP8c",noPetsWrapper:"NoticesCategoriesList_noPetsWrapper__EiTAC"};function U(){var e=(0,o.useState)(!1),t=(0,s.Z)(e,2),n=t[0],i=t[1],a=m(),l=a.notices,r=a.filters,d=(0,k.Z)(),h=d.isLoggedIn,u=d.favorites,_=(0,c.I0)(),f=l.filter((function(e){return(0===r.gender.length||r.gender.includes(e.sex))&&(0===r.age.length||r.age.includes(function(e){var t=F(e);return console.log("petsAge",t),t<1?"up to 1 year":t<2?"up to 2 years":t>2?"from 2 years":void 0}(e.date)))})),g=function(){var e=(0,B.Z)(M().mark((function e(t){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=5;break}return _((0,Q.kd)(t)),e.abrupt("return");case 5:i(!0);case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{className:R.list,children:f.length>0?f.map((function(e){return(0,x.jsx)(E,{item:e,favorites:u.includes(e._id),favHandler:g},e._id)})):(0,x.jsxs)("div",{className:R.noPetsWrapper,children:[(0,x.jsx)("p",{children:"No pets match the selected filters"}),(0,x.jsx)("img",{src:K,alt:"sad cat",className:R.imgNoPet})]})}),n&&(0,x.jsx)(V.Z,{isOpen:n,onClose:function(){i(!1)},children:(0,x.jsx)(A.Z,{})})]})}var D=n(351),G=n(4818),z=n(9822),q=n(8434),J={title:"NoticesPage_title__oGlUk",container:"NoticesPage_container__56Lm5",pagination:"NoticesPage_pagination__PZA7B",navContainer:"NoticesPage_navContainer__rQP-I",addPetsButton_container:"NoticesPage_addPetsButton_container__TO5Uk",navDesktopContainer:"NoticesPage_navDesktopContainer__U4pBL",navRightContainer:"NoticesPage_navRightContainer__yhuWz"};function Y(){var e=(0,o.useState)("sell"),t=(0,s.Z)(e,2),n=t[0],r=t[1],d=m(),h=d.notices,u=d.total,_=(0,o.useState)(1),f=(0,s.Z)(_,2),g=f[0],j=f[1],N=(0,a.UO)().categoryName,p=(0,a.s0)(),C=(0,c.I0)();(0,o.useEffect)((function(){p("/notices/sell")}),[p,C]),(0,o.useEffect)((function(){N!==n&&(r(N),j(1))}),[N,n]),(0,o.useEffect)((function(){"sell"!==N&&"lost-found"!==N&&"in-good-hands"!==N||(C((0,l.r7)({categoryName:N,page:g})),p("/notices/".concat(N))),"favorite"===N&&(C((0,l.Y6)()),p("/notices/favorite")),"own"===N&&(C((0,l.hp)()),p("/notices/own"))}),[N,p,C,g]);return(0,x.jsxs)("div",{className:J.container,children:[(0,x.jsx)("h1",{className:J.title,children:"Find your favorite pet"}),(0,x.jsx)(v,{}),(0,x.jsx)("div",{className:J.navContainer,children:(0,x.jsxs)("div",{className:J.navDesktopContainer,children:[" ",(0,x.jsx)(w,{}),(0,x.jsxs)("div",{className:J.navRightContainer,children:[(0,x.jsx)(L,{}),(0,x.jsxs)("div",{className:J.addPetsButton_container,children:[" ",(0,x.jsx)(D.Z,{})]})]})]})}),(0,x.jsx)(a.j3,{}),N&&(0,x.jsx)(U,{}),h.length&&(0,x.jsx)("div",{className:J.pagination,children:(0,x.jsx)(q.Z,{spacing:2,children:(0,x.jsx)(G.Z,{count:function(){var e=Math.ceil(u/12);return"Infinity"===e||0===e?g:e}(),page:g,onChange:function(e,t){j(t)},color:"primary",variant:"outlined",renderItem:function(e){return(0,x.jsx)(z.Z,(0,i.Z)({sx:{border:"1px solid #54ADFF",textAlign:"center",fontFamily:"Inter",fontSize:"16px",fontStyle:"normal",fontWeight:"400"}},e))}})})})]})}},9604:function(e,t,n){e.exports=n.p+"static/media/WBC_sad_1.1cdd451a59d80ee82d45.jpg"}}]);
//# sourceMappingURL=111.e5f2404a.chunk.js.map