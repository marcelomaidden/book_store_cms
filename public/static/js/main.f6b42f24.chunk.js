(this.webpackJsonpbook_store=this.webpackJsonpbook_store||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(15),a=c.n(i),l=c(9),r=c(11),o=c(12),s=c(3),b=(c(35),c(36),c(1)),j=function(e){var t=e.book,c=e.delete;return Object(b.jsxs)("div",{className:"".concat(t.visible?"book-panel d-flex flex-column flex-md-row":"d-none"),children:[Object(b.jsxs)("div",{className:"book-info",children:[Object(b.jsx)("div",{className:"book-category",children:t.category}),Object(b.jsx)("div",{className:"book-title",children:t.title}),Object(b.jsx)("div",{className:"book-id",children:"Book ID: ".concat(t.id)}),Object(b.jsxs)("div",{className:"actions",children:[Object(b.jsx)("span",{className:"first",children:"Comments"}),Object(b.jsx)("a",{href:"/#",onClick:function(){return c(t)},children:"Remove"}),Object(b.jsx)("span",{className:"last",children:"Edit"})]})]}),Object(b.jsxs)("div",{className:"book-info position-relative",children:[Object(b.jsx)("i",{className:"Oval-2 d-none d-md-flex"}),Object(b.jsx)("span",{className:"percentage",children:"64%"}),Object(b.jsx)("span",{className:"completed",children:"Completed"})]}),Object(b.jsxs)("div",{className:"col d-flex flex-column",children:[Object(b.jsx)("span",{className:"completed",children:"CURRENT CHAPTER"}),Object(b.jsx)("span",{className:"chapter",children:"Chapter 17"}),Object(b.jsx)("button",{type:"button",className:"btn btn-update mt-3",onClick:function(){return c(t)},children:"Update Progress"})]})]})},d="CREATE_BOOK",u="REMOVE_BOOK",O="CHANGE_FILTER",m="CHANGE_VISIBILITY",h=Object(l.b)((function(e){return{books:e.books}}),(function(e){return{delete:function(t){return e(function(e){return{type:u,book:e}}(t))}}}))((function(e){var t=e.books,c=e.delete;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(j,{book:e,delete:c},e.id)}))})})),f=c(5),x=c(26),v=[{key:0,name:"Action"},{key:1,name:"Biography"},{key:2,name:"History"},{key:3,name:"Horror"},{key:4,name:"Kids"},{key:5,name:"Learning"},{key:6,name:"Sci-Fi"}],p=function(e){var t=e.handleFilter;return Object(b.jsxs)("label",{htmlFor:"filterCategories",className:"form-label d-flex",children:["CATEGORIES\xa0",Object(b.jsxs)("select",{name:"filterCategories",onChange:t,id:"filterCategories",className:"form-select filter-categories",children:[Object(b.jsx)("option",{value:"All",children:"All"}),v.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name},e.key)}))]})]})},g=(c(38),Object(l.b)(null,(function(e){return{create:function(t){return e(function(e){return{type:d,book:e}}(t))}}}))((function(e){var t=e.create,c=Object(n.useState)({title:"",category:""}),i=Object(x.a)(c,2),a=i[0],l=i[1],r=function(e){"inputTitle"===e.target.id?l(Object(f.a)(Object(f.a)({},a),{},{title:e.target.value,invalid:!1})):l(Object(f.a)(Object(f.a)({},a),{},{category:e.target.value}))};return Object(b.jsxs)("form",{className:"row g-3 form-book",children:[Object(b.jsx)("h1",{className:"add-book col-12",children:"ADD NEW BOOK"}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)("input",{type:"text",placeholder:"Enter the book title",onChange:r,value:a.title,className:"form-control ".concat(a.invalid?"is-invalid":""),id:"inputTitle"})}),Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)("select",{name:"category",onChange:r,className:"form-select",id:"category",children:v.map((function(e){var t=e.key,c=e.name;return Object(b.jsx)("option",{value:c,children:c},t)}))})}),Object(b.jsx)("div",{className:"col-md-1",children:Object(b.jsx)("button",{type:"button",onClick:function(){""===a.title?l(Object(f.a)(Object(f.a)({},a),{},{invalid:!0})):(t(a),l({title:"",category:"",invalid:!1}))},className:"btn btn-create",children:"Create book"})})]})}))),k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(g,{})]})},N=(c(39),Object(l.b)(null,(function(e){return{handleChangeFilter:function(t){return e({type:O,filter:t})},handleVisibility:function(t){return e({type:m,filter:t})}}}))((function(e){var t=e.handleChangeFilter,c=e.handleVisibility;return Object(b.jsxs)("nav",{className:"d-flex flex-column flex-md-row",children:[Object(b.jsxs)("div",{className:"nav-links d-flex flex-column flex-md-row",children:[Object(b.jsx)("h1",{className:"title",children:Object(b.jsx)(o.b,{to:"/",children:"BookStore CMS"})}),Object(b.jsx)("h2",{className:"books",children:Object(b.jsx)(o.b,{to:"/books",children:"BOOKS"})}),Object(b.jsx)("h2",{className:"categories",children:Object(b.jsx)(p,{handleFilter:function(e){t(e.target.value),c(e.target.value)}})})]}),Object(b.jsx)("span",{className:"login",children:Object(b.jsx)(o.b,{to:"/login",className:"fa fa-user-circle"})})]})}))),y=c(25),E=function(e,t){var c=Math.ceil(e),n=Math.floor(t);return Math.floor(Math.random()*(n-c+1))+c},C=[{id:E(1,1e3),title:"Star Wars",category:"Sci-Fi",visible:!0},{id:E(1,1e3),title:"Alien",category:"Sci-Fi",visible:!0},{id:E(1,1e3),title:"Freddie Krugger",category:"Horror",visible:!0}],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(Object(y.a)(e),[{id:E(1,1e3),title:t.book.title,category:t.book.category,visible:!0}]);case u:return e.filter((function(e){return e.id!==t.book.id}));case m:return e.map((function(e){return"All"===t.filter?Object(f.a)(Object(f.a)({},e),{},{visible:!0}):e.category!==t.filter?Object(f.a)(Object(f.a)({},e),{},{visible:!1}):Object(f.a)(Object(f.a)({},e),{},{visible:!0})}));default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.filter;default:return e}},A=Object(r.b)({books:_,filter:S}),w=Object(r.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(b.jsx)(l.a,{store:w,children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(N,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",component:k}),Object(b.jsx)(s.a,{path:"/books",component:k}),Object(b.jsx)(s.a,{path:"/categories",component:k})]})]})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f6b42f24.chunk.js.map