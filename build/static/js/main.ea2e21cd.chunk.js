(this["webpackJsonpw-game"]=this["webpackJsonpw-game"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(18),s=a.n(c),r=a(3),i=Object(n.createContext)(),o=a(6),l=a.n(o),u=a(15),j=(a(46),"https://api.rawg.io/api/"),d="key=566bbd60217a466287e5e182d0437bc8",m="games?",b="".concat(j).concat(m).concat(d,"&page_size=40"),O=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c,s,r,i,o,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.prev=1,a=void 0===t||""===t?b:t,e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,s=c.results,r=c.next,i=c.previous,o=c.count,u=s[Math.floor(Math.random()*s.length)],j=s.map((function(e){return{id:e.id,name:e.name,released:e.released,metacritic:e.metacritic,image:e.background_image,slug:e.slug,rating_star:e.rating_top}})),e.abrupt("return",[j,r,i,u,o]);case 18:e.prev=18,e.t0=e.catch(1),console.error("error on: ",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j).concat("genres?").concat(d));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.results,c=n.map((function(e){return{id:e.id,slug:e.slug,name:e.name,total_games:e.games_count,image:e.image_background}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c,s,r,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="",a=t.includes("genres=")?t:"".concat(j).concat(m).concat(d,"&genres=").concat(t,"&page=1&page_size=40"),e.next=5,fetch(a);case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,s=c.results,r=c.next,i=c.previous,o=c.count,u=s.map((function(e){return{name:e.name,slug:e.slug,platforms:e.platforms,released:e.released,image:e.background_image,calification:e.rating,rating_star:e.rating_top,ratings:e.ratings,metacritic:e.metacritic,updated:e.updated,clasification:e.esrb_rating,gallery:e.short_screenshots}})),e.abrupt("return",[u,r,i,o]);case 17:e.prev=17,e.t0=e.catch(0),console.error(new Error(e.t0));case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"games/").concat(t,"?").concat(d));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",{id:n.id,name:null===n||void 0===n?void 0:n.name,slug:null===n||void 0===n?void 0:n.slug,description:null===n||void 0===n?void 0:n.description_raw,metacritic:null===n||void 0===n?void 0:n.metacritic,released:null===n||void 0===n?void 0:n.released,image:null===n||void 0===n?void 0:n.background_image,genre:null===n||void 0===n?void 0:n.genres,image2:null===n||void 0===n?void 0:n.background_image_additional,calification:null===n||void 0===n?void 0:n.rating,rating_star:null===n||void 0===n?void 0:n.rating_top,people_say:null===n||void 0===n?void 0:n.ratings,platforms:null===n||void 0===n?void 0:n.platforms,developers:null===n||void 0===n?void 0:n.developers,publishers:null===n||void 0===n?void 0:n.publishers,clasification:null===n||void 0===n?void 0:n.esrb_rating,tags:null===n||void 0===n?void 0:n.tags});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"games/").concat(t,"/screenshots?").concat(d));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,c=n.results,s=c.map((function(e){return{id:e.id,screenshot:e.image}})),e.abrupt("return",s);case 12:e.prev=12,e.t0=e.catch(0),console.errror(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c,s,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",t&&t.includes(".com")?a="".concat(t,"&page_size=40"):t&&(a="".concat(j).concat(m).concat(d,"&search=").concat(t,"&page_size=40")),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,s=c.results,r=c.next,i=c.previous,o=s.map((function(e){return{id:e.id,name:e.name,slug:e.slug,released:e.released,calification:e.rating,rating_star:e.rating_top,image:e.background_image,metacritic:e.metacritic}})),e.abrupt("return",[o,r,i]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){O(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),2e3)}))}),[e]),c},v=function(){var e=Object(n.useState)({data:[],loading:!0}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){g().then((function(e){setTimeout((function(){c({data:e,loading:!1})}),2e3)}))}),[]),a},N=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),3e3)}))}),[e]),c},y=function(e){var t=Object(n.useState)({data:{},loading:!0}),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){h(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),2e3)}))}),[e]),c},C=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){i.current=!1}}),[]),Object(n.useEffect)((function(){_(e).then((function(e){setTimeout((function(){s({data:e,loading:!1})}),3e3)}))}),[e]),c},M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n.useState)(e),a=Object(r.a)(t,2),c=a[0],s=a[1],i=function(){s(!c)};return[c,i]},k=a(14),L=(a.p,a(21)),P=a(1),S=function(e){var t=e.rating_star,a=(e.index,[]);if(t)for(var n=0;n<Math.round(t);n++)a.push(Object(P.jsx)(L.b,{className:"star--icon"},n));return Object(P.jsx)("div",{className:"rating--star",children:a})},G=(a(22),a(12)),w=a.n(G),E=function(e){var t=e.data.description;return Object(P.jsxs)("div",{id:"description--game",className:"game__description animate__animated animate__fadeIn",children:[Object(P.jsx)("h3",{className:"game--subtitles",children:"Description"}),Object(P.jsx)("p",{className:"game--description",children:t})]})},I=(a(31),function(e){var t=e.data,a=!!t&&t.replace(/-/gi," ");return Object(P.jsxs)("div",{className:"loading__container",children:[Object(P.jsxs)("div",{className:"animation__container",children:[Object(P.jsx)("div",{className:"loading--animation"}),Object(P.jsx)("div",{className:"loading--animation2"}),Object(P.jsx)("div",{className:"loading--animation3"}),Object(P.jsx)("div",{className:"loading--animation4"})]}),Object(P.jsxs)("h2",{className:"loading--text",children:["Loading ",a]})]})}),D=function(e){var t=e.screenshots,a=e.setCurrentScreenshot,n=t.screenshot,c=t.name;return Object(P.jsx)("figure",{className:"game__gallery__selection",children:Object(P.jsx)(k.LazyLoadImage,{className:"selection--image",src:n,alt:c,onClick:function(){return a(n)},effect:"opacity"})})},F=function(e){var t=e.currentScreenshot;return Object(P.jsx)("figure",{className:"main__image__gallery",children:Object(P.jsx)("img",{className:"main--gallery--image",src:t,alt:"horizon"})})},R=function(e){var t=e.platforms;return Object(P.jsxs)("div",{className:"game__platforms",children:[Object(P.jsx)("h3",{className:"game--subtitles",children:"Platforms"}),Object(P.jsx)("ul",{className:"platforms",children:t.map((function(e){var t=e.platform;return Object(P.jsx)("li",{className:"platform--item",children:t.name},t.id)}))})]})},z=function(e){var t=e.data,a=(t.image,t.image2),c=(t.name,function(e){var t=Object(n.useState)({screenshotData:[],loading:!0}),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){x(e).then((function(e){setTimeout((function(){s({screenshotData:e,loading:!1})}),3e3)}))}),[e]),c}(t.slug)),s=c.screenshotData,i=c.loading,o=Object(n.useState)(a),l=Object(r.a)(o,2),u=l[0],j=l[1];return Object(P.jsxs)("div",{className:"game__gallery",children:[Object(P.jsx)("h3",{className:"game--subtitles",children:"Gallery"}),i?Object(P.jsx)(I,{}):Object(P.jsxs)("div",{children:[Object(P.jsx)(F,{currentScreenshot:u}),Object(P.jsx)("div",{className:"carousel__item",children:s.map((function(e){return Object(P.jsx)(D,{screenshots:e,setCurrentScreenshot:j},e.id)}))})]})]})},A=function(e){var t=e.data,a=t.publishers,n=t.released,c=t.metacritic,s=t.clasification,r=t.genre;return Object(P.jsxs)("div",{className:"game__info",children:[Object(P.jsxs)("p",{className:"info--title",children:["Publisher: ",a.map((function(e){return e.name&&Object(P.jsx)("span",{children:e.name},e.id)}))]}),Object(P.jsxs)("p",{className:"info--title",children:["Release-Date: ",Object(P.jsx)("span",{children:n})]}),Object(P.jsxs)("p",{className:"info--title",children:["Metacritic: ",Object(P.jsx)("span",{children:c})]}),null!==s&&Object(P.jsxs)("p",{className:"info--title",children:["ESRB: ",Object(P.jsx)("span",{children:s.name})]}),Object(P.jsxs)("p",{className:"info--title",children:["Gender: ",Object(P.jsx)("span",{children:r.map((function(e){return"".concat(e.name," ")}))})]})]})},B=function(e){var t=e.data,a=t.slug,n=t.name,c=t.image,s=t.rating_star;t.rating;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("figure",{className:"game__img",children:[Object(P.jsx)("img",{className:"card--image",src:c,alt:a}),Object(P.jsxs)("div",{className:"rating__stars",children:[Object(P.jsx)("h2",{className:"card--title",children:n}),Object(P.jsx)(S,{rating_star:s})]})]})})},T=function(e){var t=e.data.people_say.sort((function(e,t){return e.id<t.id?1:e.id>t.id?-1:void 0}));return console.log(t),Object(P.jsxs)("div",{className:"game__char__rating",children:[Object(P.jsx)("h3",{className:"game--subtitles",children:"What People Say"}),Object(P.jsx)("ul",{className:"game__char",children:t.map((function(e){return Object(P.jsx)("li",{className:"game--".concat(e.title),style:{width:"".concat(e.percent,"%")}},e.id)}))}),Object(P.jsx)("ul",{className:"rating__tags",children:t.map((function(e){return Object(P.jsxs)("li",{className:"rating--tag",children:[" ",e.title," ",Object(P.jsx)("div",{className:"square--".concat(e.title)})]},e.id)}))})]})},q=function(e){var t=e.slug,a=y(t),n=a.data,c=a.loading,s=n.platforms,i=M(),o=Object(r.a)(i,2),l=o[0],u=o[1];return Object(P.jsx)("div",{className:"card__info",children:c?Object(P.jsx)(I,{data:t}):Object(P.jsxs)("div",{className:"card__hero animate__animated animate__fadeIn",children:[Object(P.jsxs)("div",{className:"card__main__content",children:[Object(P.jsx)(B,{data:n}),Object(P.jsx)(A,{data:n})]}),Object(P.jsxs)("a",{className:"submit--button",onClick:u,href:"#description--game",children:[" ",l?"Read Less":"Read More"," "]}),l&&Object(P.jsx)(E,{data:n}),Object(P.jsx)(z,{data:n}),Object(P.jsx)(T,{data:n}),Object(P.jsx)(R,{platforms:s})]})})},H=a(13),J=a(36),W=function(e){var t=e.data,a=M(),n=Object(r.a)(a,2),c=n[0],s=n[1],i=t.name,o=t.image,l=(t.calification,t.metacritic),u=t.rating_star,j=t.slug,d=[];l>=90?d.push(Object(P.jsx)("h2",{className:"calification high--rate--color",children:l},1)):l>=70&&l<90?d.push(Object(P.jsx)("h2",{className:"calification medium--rate--color",children:l},2)):l<70&&d.push(Object(P.jsx)("h2",{className:"calification low--rate--color",children:l},3));return Object(P.jsxs)(k.LazyLoadComponent,{className:"game__medium__card",children:[Object(P.jsxs)("figure",{className:"game__medium__container",children:[Object(P.jsx)(k.LazyLoadImage,{className:"game--image--medium animate__animated animate__fadeIn",src:o,alt:"videogame",effect:"opacity"}),Object(P.jsxs)("div",{className:"game__content animate__animated animate__fadeIn",children:[Object(P.jsx)("h2",{className:"list--title",children:i}),Object(P.jsxs)("div",{className:"card__medium__info",children:[d,Object(P.jsx)(S,{rating_star:u}),Object(P.jsx)(J.a,{className:"dots",onClick:s})]})]})]}),Object(P.jsxs)(w.a,{isOpen:c,onRequestClose:s,className:"Modal",overlayClassName:"Overlay--cards",ariaHideApp:!1,children:[Object(P.jsx)(q,{slug:j}),Object(P.jsx)(H.a,{className:"close--icon",onClick:s})]})]})},Z=function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("label",{className:"list--title",children:"Order By "}),Object(P.jsxs)("select",{name:"order",id:"order",className:"order__options",children:[Object(P.jsx)("option",{value:"abc",children:"A-Z"}),Object(P.jsx)("option",{value:"abc",children:"Z-A"}),Object(P.jsx)("option",{value:"number",children:"0-9"}),Object(P.jsx)("option",{value:"number",children:"9-0"})]})]})},K=(a(32),function(e){var t=e.page;return Object(P.jsx)("form",{className:"result",children:Object(P.jsxs)("div",{className:"header__result",children:[Object(P.jsxs)("h3",{className:"list--title",children:["Search ",Object(P.jsx)("span",{className:"highlight--text",children:t})]}),Object(P.jsx)(Z,{})]})})}),Q=a(9),U=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(!0),j=Object(r.a)(u,2),d=j[0],m=j[1],b=Object(n.useState)(!1),O=Object(r.a)(b,2),g=O[0],f=O[1];return{handleNextPage:function(e){e&&(c(e),f(!0))},handlePreviousPage:function(e){e&&(c(e),l(o-1))},page:a,myLoad:d,currentPage:o,setMyLoad:m,setPage:c,setCurrentPage:l,loadMoreGames:g,setLoadMoreGames:f}},V=(a(59),a(60),a(40)),X=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(),o=Object(r.a)(i,2),l=o[0],u=o[1],j=Object(n.useState)(),d=Object(r.a)(j,2),m=d[0],b=d[1];return Object(n.useEffect)((function(){s((function(t){return[].concat(Object(V.a)(t),[e[0]])})),b({next:e[1],previous:e[2],count:e[4]})}),[e]),Object(n.useEffect)((function(){u(null===c||void 0===c?void 0:c.flat().filter((function(e){return void 0!==e})))}),[c]),{moreLoad:c,pagination:m,fullData:l,setMoreLoad:s}},Y=function(e){var t=e.myData,a=!!t&&t,n=a.handleNextPage,c=a.loadMoreGames,s=a.next;return Object(P.jsx)("div",{className:"scroll__more",children:Object(P.jsx)("button",{className:"show--more",onClick:function(){return n(s)},"eslint-disable-next-line":!0,children:c?"loading...":"Show More"})})},$=function(){var e=Object(n.useContext)(i).searchGame,t=U(),a=t.handleNextPage,c=(t.handlePreviousPage,t.page),s=t.myLoad,r=(t.currentPage,t.setMyLoad),o=t.setPage,l=(t.setCurrentPage,t.loadMoreGames),u=t.setLoadMoreGames;Object(n.useEffect)((function(){o(e)}),[e]);var j=C(c),d=j.data,m=j.loading,b=X(d),O=(b.moreLoad,b.pagination),g=b.fullData,f=b.setMoreLoad,h=(!!O&&O).next;Object(n.useEffect)((function(){r(m)}),[d]),Object(n.useEffect)((function(){r(!0),f([]),u(!1)}),[e]),Object(n.useEffect)((function(){u(!1)}),[g]);return d[0]&&d[0].filter((function(t){if(t.slug.includes(e))return t.rating_star>=1})),Object(P.jsxs)(P.Fragment,{children:[s?Object(P.jsx)(I,{data:e}):Object(P.jsxs)("section",{className:"second__container games__list",children:[Object(P.jsx)(K,{page:c}),Object(P.jsx)("div",{className:"cards__medium__container",children:g.map((function(e){return Object(P.jsx)(W,{className:"animate__animated animate__fadeIn",data:e},e.id.toString())}))})]}),Object(P.jsx)(Y,{myData:{next:h,handleNextPage:a,loadMoreGames:l}})]})},ee=a(39),te=(a(61),a(8)),ae=[{name:"Home",content:!1,page:"/",subMenu:!1},{name:"Games",content:!1,page:"/games",subMenu:!1},{name:"Genres",content:!0,page:"/genres",subMenu:!0},{name:"API",content:!1,page:"/",subMenu:!1}],ne=function(){var e=v(),t=e.data,a=e.loading;return Object(P.jsx)("ul",{className:"drop__down__list",children:a?Object(P.jsx)(I,{}):t.map((function(e){var t=e.id,a=e.name;return Object(P.jsx)("li",{className:"list--item",children:Object(P.jsx)(te.b,{children:a})},t)}))})},ce=function(e){var t=e.handleOpenContent,a=Object(n.useState)(!1),c=Object(r.a)(a,2),s=(c[0],c[1],function(e){e.preventDefault(),t(!1),console.log("click")});return Object(P.jsx)("ul",{className:"menu__list",children:ae.map((function(e){var t=e.name,a=e.page;e.subMenu;return Object(P.jsx)("li",{className:"list--item",onClick:s,children:Object(P.jsx)(te.b,{to:a,children:t})},t)}))})},se=a(4),re=a(38),ie=function(){Object(se.f)();return Object(P.jsx)("button",{type:"submit",className:"button--submit",onClick:function(){},children:Object(P.jsx)(re.a,{className:"search--icon"})})},oe=function(e){var t=e.handleOpenContent,a=Object(se.f)(),c=Object(n.useContext)(i).setSearchGame,s=Object(n.useState)(""),o=Object(r.a)(s,2),l=o[0],u=o[1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("form",{className:"search__bar",onSubmit:function(e){if(e.preventDefault(),l.length>2){return c(l.toLowerCase().replace(/\s/gi,"-")),u(""),t(!0),a.push("./search-result",null),Object(P.jsx)(I,{})}},to:"/games",children:[Object(P.jsx)("input",{className:"search--input",type:"search",value:l,onChange:function(e){u(e.target.value)}}),Object(P.jsx)(ie,{})]})})},le=function(e){var t=e.handleOpenContent;return Object(P.jsxs)("div",{className:"drop__menu",children:[Object(P.jsx)(H.a,{className:"close--icon ",onClick:t}),Object(P.jsx)(oe,{handleOpenContent:t}),Object(P.jsx)(ce,{handleOpenContent:t})]})},ue=function(e){var t=e.list,a=v(),c=a.data,s=a.loading,r=Object(n.useContext)(i).setGamesByGenre,o=Object(se.f)();return Object(P.jsxs)("li",{className:t.subMenu?"list--item  submenu":"list--item",children:[(t.subMenu,Object(P.jsx)(te.b,{to:t.page,children:t.name})),t.subMenu&&Object(P.jsx)("ul",{className:"sub--menu animate__animated animate__fadeIn",children:!s&&c.map((function(e){return Object(P.jsx)("li",{className:"sub--menu--item",onClick:function(){return t=e.slug,r(t),o.push("./genres",null),Object(P.jsx)(I,{});var t},children:e.name},e.slug)}))})]},t.name)},je=function(e){var t=e.handleOpenContent;return Object(P.jsxs)("nav",{className:"navbar",children:[Object(P.jsxs)("ul",{className:"navbar__container",children:[ae.map((function(e){return Object(P.jsx)(ue,{list:e},e.name)})),Object(P.jsx)(oe,{handleOpenContent:t})]}),Object(P.jsx)(ne,{})]})},de=function(){var e=Object(n.useContext)(i),t=e.openContent,a=e.handleOpenContent;return Object(P.jsx)("header",{className:"main__container",children:Object(P.jsxs)("div",{className:"header animate__animated animate__fadeIn",children:[Object(P.jsx)("h2",{className:"highlight--text",children:"WhatGame"}),t?Object(P.jsx)(H.a,{className:"close--icon animate__animated animate__fadeIn",onClick:a}):Object(P.jsx)(ee.a,{onClick:a,className:"icon--menu animate__animated animate__fadeIn"}),Object(P.jsx)(w.a,{isOpen:t,onRequestClose:a,ariaHideApp:!1,className:"Modal--menu",overlayClassName:"Overlay",children:Object(P.jsx)(le,{handleOpenContent:a})}),Object(P.jsx)(je,{handleOpenContent:a})]})})},me=(a.p,a(64),function(e){var t=e.slug,a=M(),n=Object(r.a)(a,2),c=n[0],s=n[1],i=y(t),o=i.data,l=i.loading;return Object(P.jsxs)("div",{className:"check__now",children:[Object(P.jsx)("p",{children:"Add"}),Object(P.jsx)("button",{type:"button",className:"submit--button",onClick:s,children:" Check Now"}),Object(P.jsx)("p",{children:"Info"}),Object(P.jsxs)(w.a,{isOpen:c,onRequestClose:s,className:"Modal",overlayClassName:"Overlay--cards",ariaHideApp:!1,style:{backgroundImage:"url(".concat(o.image,")")},children:[l?Object(P.jsx)(I,{}):Object(P.jsx)(q,{slug:t}),Object(P.jsx)(H.a,{className:"close--icon",onClick:s})]})]})}),be=function(){var e=p(),t=e.loading,a=e.data,n=!t&&a[3],c=!t&&n,s=(c.id,c.name),r=c.background_image,i=c.slug;return Object(P.jsx)("section",{id:"home",className:"main__container home ",children:t?Object(P.jsx)(I,{}):Object(P.jsxs)("figure",{className:"hero__img__container     animate__animated animate__fadeIn",children:[Object(P.jsx)("img",{className:"hero--img animate__animated animate__fadeIn",src:r,alt:s}),Object(P.jsx)("div",{className:"bottom--fade"}),Object(P.jsx)("p",{className:"hero--text",children:s}),Object(P.jsx)(me,{slug:i})]})})},Oe=(a(65),function(e){var t=e.data,a=M(),n=Object(r.a)(a,2),c=n[0],s=n[1],i=t.image,o=t.name,l=t.slug;return Object(P.jsxs)("figure",{className:"game__small__container",children:[Object(P.jsx)(k.LazyLoadImage,{className:"game--image--small",src:i,alt:o,onClick:s,effect:"opacity"}),Object(P.jsxs)(w.a,{isOpen:c,onRequestClose:s,ariaHideApp:!1,className:"Modal ",overlayClassName:"Overlay--cards",children:[Object(P.jsx)(H.a,{className:"close--icon animate__animated animate__fadeIn",onClick:s}),Object(P.jsx)(q,{slug:l})]}),Object(P.jsx)("caption",{className:"game--name",children:o})]})}),ge=(a(66),function(e){var t=e.genre,a=t.slug,c=t.name,s=N(a),r=s.data,i=s.loading,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){}),[r]),Object(P.jsxs)("section",{className:"main__container games__list",children:[Object(P.jsxs)("h2",{className:"list--title",children:["Best ",Object(P.jsx)("span",{className:"highlight--text",children:c})," Games"]}),Object(P.jsx)(Q.a,{className:"left--arrow",onClick:function(){return e=1100,void(o.current.scrollLeft-=e);var e}}),Object(P.jsx)(Q.b,{className:"right--arrow",onClick:function(){return e=1100,void(o.current.scrollLeft+=e);var e}}),Object(P.jsx)("div",{className:"cards__container",ref:o,children:i?Object(P.jsx)(I,{}):r[0].map((function(e){return Object(P.jsx)(Oe,{data:e},e.slug)}))})]})}),fe=(a(67),a(68),a(7)),he=Object(fe.a)(),xe=(a(69),a(35),function(){var e=Object(n.useContext)(i),t=e.gamesByGenre,a=(e.setGamesByGenre,U()),c=a.handleNextPage,s=(a.handlePreviousPage,a.page),r=a.myLoad,o=(a.currentPage,a.setMyLoad),l=a.setPage,u=(a.setCurrentPage,a.loadMoreGames),j=a.setLoadMoreGames;Object(n.useEffect)((function(){l(t)}),[t]);var d=N(s),m=d.data,b=d.loading,O=X(m),g=(O.moreLoad,O.pagination),f=O.fullData,h=O.setMoreLoad,x=(!!g&&g).next;return Object(n.useEffect)((function(){o(b)}),[m]),Object(n.useEffect)((function(){o(!0),h([]),j(!0)}),[t]),Object(n.useEffect)((function(){j(!1)}),[f]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("h2",{className:"list--title",children:t}),r?Object(P.jsx)(I,{}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("section",{id:"scrollableDiv",className:"genre__games__grid second__container animate__animated animate__fadeIn",children:f.map((function(e){return Object(P.jsx)(W,{data:e},e.id)}))}),Object(P.jsx)(Y,{myData:{next:x,handleNextPage:c,loadMoreGames:u}})]})]})}),_e=function(){var e=v(),t=(e.data,e.loading),a=U();a.handleNextPage,a.handlePreviousPage,a.currentPage,a.page,a.myLoad,a.setMyLoad,a.setCurrentPage;return Object(P.jsx)(P.Fragment,{children:t?Object(P.jsx)(I,{}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("main",{className:"genres",children:Object(P.jsx)("div",{className:"hero__text__content"})}),Object(P.jsx)(xe,{})]})})},pe=function(e){e.data;return Object(P.jsx)("form",{className:"result",children:Object(P.jsxs)("div",{className:"header__result",children:[Object(P.jsxs)("h3",{className:"list--title",children:["Search ",Object(P.jsx)("span",{className:"highlight--text",children:"Result ..."})]}),Object(P.jsx)(Z,{})]})})},ve=function(){var e=U(),t=e.handleNextPage,a=(e.handlePreviousPage,e.currentPage,e.page),c=(e.myLoad,e.setMyLoad),s=(e.setCurrentPage,e.loadMoreGames),r=e.setLoadMoreGames,i=p(a),o=i.data,l=i.loading,u=X(o),j=(u.moreLoad,u.pagination),d=u.fullData,m=(!!j&&j).next;!l&&o[0];return Object(n.useEffect)((function(){c(!1),r(!0)}),[o]),Object(n.useEffect)((function(){r(!1)}),[d]),Object(P.jsx)(P.Fragment,{children:l?Object(P.jsx)(I,{}):Object(P.jsxs)("section",{id:"games",className:"second__container games__list",children:[Object(P.jsx)(pe,{}),Object(P.jsx)("div",{id:"infinite__scroll",className:"cards__medium__container",children:d.map((function(e){return Object(P.jsx)(W,{className:"animate__animated animate__fadeIn",data:e},e.id.toString())}))}),Object(P.jsx)(Y,{myData:{handleNextPage:t,loadMoreGames:s,next:m}})]})})},Ne=function(){var e=v(),t=e.data,a=e.loading;t.slice(6,11);return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(te.a,{history:he,children:a?Object(P.jsx)(I,{}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(de,{}),Object(P.jsx)("div",{children:Object(P.jsxs)(se.c,{children:[Object(P.jsxs)(se.a,{exact:!0,path:"/",component:be,children:[Object(P.jsx)(be,{}),t.map((function(e){return Object(P.jsx)(k.LazyLoadComponent,{delayTime:"3000",children:Object(P.jsx)(ge,{genre:e},e.id)},e.id)}))]}),Object(P.jsx)(se.a,{exact:!0,path:"/games",component:ve}),Object(P.jsx)(se.a,{exact:!0,path:"/genres",component:_e}),Object(P.jsx)(se.a,{exact:!0,path:"/search-result",component:$})]})})]})})})},ye=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),a=t[0],c=t[1],s=C(a),o=s.resultData,l=s.loading,u=Object(n.useState)(),j=Object(r.a)(u,2),d=(j[0],j[1]),m=v(),b=m.data,O=m.loading,g=M(),f=Object(r.a)(g,2),h=f[0],x=f[1],_=Object(n.useState)(""),p=Object(r.a)(_,2),N=p[0],y=p[1];return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(i.Provider,{value:{resultData:o,searchGame:a,setSearchGame:c,loading:l,data:b,genreLoading:O,setStateGenre:d,openContent:h,handleOpenContent:x,gamesByGenre:N,setGamesByGenre:y},children:Object(P.jsx)(Ne,{})})})};a(70),a(71);s.a.render(Object(P.jsx)(ye,{}),document.querySelector("#root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ea2e21cd.chunk.js.map