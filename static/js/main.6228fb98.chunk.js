(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{91:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"router",(function(){return b})),n.d(r,"nominations",(function(){return g})),n.d(r,"searchResults",(function(){return M})),n.d(r,"loading",(function(){return A})),n.d(r,"error",(function(){return F})),n.d(r,"page",(function(){return T})),n.d(r,"searchTerm",(function(){return H}));var a=n(2),c=n(1),s=n.n(c),l=n(13),o=n.n(l),i=n(3),u=n(16),d=n(23),j=n(15),f=Object(j.a)(),b=Object(u.b)(f),m=n(12),h=n(7),x=n(39),O=Object(h.b)("app/nominations/ADD_NOMINATION"),p=Object(h.b)("app/nominations/REMOVE_NOMINATIONS"),g=Object(h.d)([],(function(e){return e.addCase(O,(function(e,t){e.push(t.payload)})).addCase(p,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))}))})),v=n(22),N=n.n(v),w=n(18),y=n(44),C=n(29),P=n.n(C),S=n(99),k=P.a.create({adapter:Object(S.a)(P.a.defaults.adapter)}),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return k.get("https://www.omdbapi.com/?apikey=bb0c08f4&s=".concat(e,"&page=").concat(t))},E=Object(h.c)("app/page/CHANGE_PAGE",function(){var e=Object(y.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t.term,t.page);case 2:return n=e.sent,e.abrupt("return",Object(w.a)({error:"False"===n.data.Response},n.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(h.d)({currentPage:1,totalPages:1},(function(e){return e.addCase(E.fulfilled,(function(e,t){var n=t.payload.totalResults;return n?{currentPage:t.meta.arg.page,totalPages:Math.ceil(n/10)}:e}))})),I=function(e){return{id:e.imdbID,title:e.Title,year:e.Year,poster:e.Poster}},M=Object(h.d)([],(function(e){return e.addCase(E.fulfilled,(function(e,t){return t.payload.error?[]:t.payload.Search.map(I)}))})),A=Object(h.d)(!1,(function(e){return e.addCase(E.pending,(function(){return!0})).addCase(E.fulfilled,(function(){return!1})).addCase(E.rejected,(function(){return!1}))})),F=Object(h.d)({active:!1,message:""},(function(e){return e.addCase(E.pending,(function(e){e.active=!1})).addCase(E.fulfilled,(function(e,t){return t.payload.error?{active:!0,message:t.payload.Error}:Object(w.a)(Object(w.a)({},e),{},{active:!1})})).addCase(E.rejected,(function(e,t){return{active:!0,message:t.error.message}}))})),H=Object(h.d)("",(function(e){return e.addCase(E.fulfilled,(function(e,t){return t.meta.arg.term}))})),D=Object(m.c)(r),G=Object(h.a)({reducer:D,devTools:!0,middleware:function(e){return e().concat(Object(x.a)(f))},preloadedState:function(){try{var e=localStorage.getItem("appState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.error(t)}}()});G.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("appState",t)}catch(n){console.error(n)}}(G.getState())}));var J,B=G,L=n(21);!function(e){e.HOME="/"}(J||(J={}));var _=J,V=n(48),Y=n(46),z=n.n(Y),K=n(49),q=n(6),Q=n(47),U=function(e){var t=e.className,n=e.onSubmit,r=e.placeholder,s=Object(c.useState)(""),l=Object(K.a)(s,2),o=l[0],i=l[1];return Object(a.jsxs)("div",{className:"relative",children:[Object(a.jsx)(Q.a,{className:"absolute w-5 h-5 text-white inset-4"}),Object(a.jsx)("input",{className:Object(q.a)(t,"text-white p-3 bg-trueGray-700 pl-12 rounded-3xl h-14 w-full outline-none focus:ring-2 focus:ring-blue-600"),value:o,onChange:function(e){var t=e.target.value;i(t),""!==t&&n(t)},onKeyDown:function(e){"Escape"===e.key&&i("")},placeholder:r})]})};U.defaultProps={className:"",placeholder:""};var W=U,X=function(e){var t=e.className,n=e.children;return Object(a.jsx)("div",{className:Object(q.a)(t,"bg-blue-600 w-1/3 md:max-w-xs lg:max-w-sm p-6 rounded-3xl shadow-xl max-h-full"),children:n})};X.defaultProps={className:"",children:null};var Z=X,$=n(30),ee=function(e){var t=e.data,n=e.renderHeader,r=e.renderRow,s=Object(i.e)(),l=Object(c.useCallback)((function(e){return s(p(e))}),[s]),o=Object(a.jsx)("thead",{children:n});return Object(a.jsxs)("table",{className:"w-full table-auto",children:[null!==n?o:null,Object(a.jsx)("tbody",{children:t.map((function(e){return r({row:e,removeRow:l})}))})]})};ee.defaultProps={renderHeader:null};var te=ee,ne=function(e){var t=e.onClick,n=e.className,r=e.children,c=e.disabled;return Object(a.jsx)("button",{type:"button",onClick:t,className:Object(q.a)("h-10 font-heading rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",{"cursor-not-allowed text-gray-400":c},n),disabled:c,children:r})};ne.defaultProps={className:"",children:null,disabled:!1};var re=ne,ae=function(e){var t=e.className,n=e.children;return e.head?Object(a.jsx)("th",{className:"".concat(t," px-6 py-4"),children:n}):Object(a.jsx)("td",{className:"".concat(t," px-6 py-4"),children:n})};ae.defaultProps={className:"",head:!1};var ce=ae,se=function(e){var t=e.className,n=e.children;return Object(a.jsx)("tr",{className:"".concat(t," h-18 py-6 border-b-2 last:border-b-0"),children:n})};se.defaultProps={className:""};var le=se,oe=function(e){var t=e.row,n=e.removeRow;return Object(a.jsxs)(le,{children:[Object(a.jsx)(ce,{className:"w-7/12 p-4",children:t.title}),Object(a.jsx)(ce,{className:"w-full",children:Object(a.jsx)(re,{onClick:function(){return n(t.id)},className:"w-full bg-red-800",children:"Remove"})})]},t.id)},ie=function(){var e=Object(i.f)((function(e){return e.nominations}));return Object(c.useEffect)((function(){5===e.length&&d.b.success("All nominations selected!",{position:"top-center",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0})}),[e]),Object(a.jsxs)("div",{className:"flex flex-col items-center text-white",children:[Object(a.jsx)("h1",{className:"my-4 text-2xl font-title",children:"Your Nominations"}),Object(a.jsx)("div",{className:"w-1/2 m-8 font-header",children:Object(a.jsx)($.a,{value:e.length,maxValue:5,text:"".concat(e.length," / 5"),styles:Object($.b)({strokeLinecap:"round",textSize:"16px",pathColor:"white",textColor:"white",trailColor:"#343434",backgroundColor:"#3e98c7"})})}),Object(a.jsx)(te,{data:e,renderRow:oe})]})},ue=function(e){var t=e.className,n=e.title;return Object(a.jsx)("div",{className:Object(q.a)(t,"bg-black text-white shadow-lg h-12 md:h-16 flex items-center w-screen"),children:Object(a.jsx)("h1",{className:"ml-3 text-3xl font-header md:ml-6",children:n})})};ue.defaultProps={className:""};var de=ue,je=function(e){var t=e.className,n=e.children;return Object(a.jsxs)("div",{className:"w-full h-full",children:[Object(a.jsx)(de,{title:"The Shoppies"}),Object(a.jsx)("div",{className:Object(q.a)(t,"max-w-screen-xl m-auto"),children:n})]})};je.defaultProps={className:"",children:null};var fe=je,be=function(e){var t=e.className,n=e.children;return Object(a.jsx)("div",{className:"".concat(t," m-2 shadow-md rounded-lg"),children:n})};be.defaultProps={className:""};var me=be,he=function(e){var t=e.movie,n=Object(i.e)(),r=Object(i.f)((function(e){return!e.nominations.every((function(e){return e.id!==t.id}))})),c=Object(i.f)((function(e){return e.nominations.length}));return Object(a.jsxs)(me,{className:"flex h-48 text-white bg-trueGray-900 flex-basis-2",children:[Object(a.jsxs)("div",{className:"flex flex-col justify-around flex-auto p-3",children:[Object(a.jsx)("h1",{className:"sm:text-lg lg:text-xl font-header",children:t.title}),Object(a.jsx)("span",{className:"text-gray-600",children:"(".concat(t.year,")")}),Object(a.jsx)(re,{onClick:function(){r?n(p(t.id)):c<5&&n(O(t))},className:Object(q.a)("w-9/12 mx-auto",{"bg-green-600":!r&&c<5,"bg-red-800":r,"bg-gray-600":!r&&c>=5}),disabled:!r&&c>=5,children:r?"Remove":"Nominate"})]}),Object(a.jsx)("img",{alt:"Movie Poster",src:t.poster,className:"flex-none object-cover w-4/12 rounded-r-lg md:w-5/12"})]})},xe="hover: bg-black p-2.5 rounded-md",Oe=function(){var e=Object(i.f)((function(e){return e.page.currentPage})),t=Object(i.f)((function(e){return e.page.totalPages})),n=Object(i.f)((function(e){return e.searchTerm})),r=Object(i.e)(),c=function(t){return function(){return r(E({term:n,page:e+t}))}};return Object(a.jsxs)("div",{className:"flex items-center justify-center my-3 text-white",children:[Object(a.jsx)("button",{className:xe,type:"button",onClick:c(-1),children:"Prev"}),Object(a.jsx)("span",{className:"mx-8",children:"".concat(e," / ").concat(t)}),Object(a.jsx)("button",{className:xe,type:"button",onClick:c(1),children:"Next"})]})},pe=function(){var e=Object(i.e)(),t=Object(i.f)((function(e){return e.searchResults}),i.d),n=Object(i.f)((function(e){return e.loading})),r=Object(i.f)((function(e){return e.error.active})),c=Object(i.f)((function(e){return e.error.message})),s=Object(i.f)((function(e){return e.searchTerm})),l=z()((function(t){""!==t&&e(E({term:t,page:1}))}),500),o=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{className:"m-auto mt-6 text-lg font-header",children:["Showing results for: ",Object(a.jsx)("b",{children:s})]}),Object(a.jsx)("div",{className:"flex flex-wrap justify-center mt-5",children:t.map((function(e){return Object(a.jsx)(he,{movie:e},e.id)}))}),t.length?Object(a.jsx)(Oe,{}):null]}),u=Object(a.jsx)(V.a,{className:"w-1/4 p-8 m-auto h-1/4 animate-spin"}),d=Object(a.jsx)("h1",{className:"mt-8 text-center",children:c});return Object(a.jsxs)(fe,{className:"flex flex-wrap items-start p-4 text-white lg:flex-nowrap",children:[Object(a.jsx)(Z,{className:"flex-auto mb-5 lg:flex-none lg-mb-0",children:Object(a.jsx)(ie,{})}),Object(a.jsxs)("div",{className:"flex flex-col justify-center flex-auto lg:ml-5",children:[Object(a.jsx)(W,{onSubmit:l,placeholder:"Search for Movies"}),r?d:n?u:o]})]})},ge=function(){return Object(a.jsx)(L.c,{children:Object(a.jsx)(L.a,{exact:!0,path:_.HOME,component:pe})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(91),n(92),n(93);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(i.a,{store:B,children:Object(a.jsxs)(u.a,{history:f,children:[Object(a.jsx)(d.a,{}),Object(a.jsx)(ge,{})]})})}),document.getElementById("root")),ve()}},[[94,1,2]]]);
//# sourceMappingURL=main.6228fb98.chunk.js.map