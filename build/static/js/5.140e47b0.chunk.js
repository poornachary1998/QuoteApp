(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{51:function(e,t,c){e.exports={item:"QuoteItem_item__2J9bn"}},52:function(e,t,c){e.exports={list:"QuoteList_list__3crIv",sorting:"QuoteList_sorting__1Y8mr"}},53:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__2TCQV"}},56:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(54),r=c(51),a=c.n(r),u=c(1),d=function(e){return Object(u.jsxs)("li",{className:a.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(i.c,{className:"btn",activeClassName:o.default,to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},j=c(52),l=c.n(j),b=function(e){var t,c,i=Object(n.h)(),o=Object(n.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),a=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){i.push("".concat(o.pathname,"?sort=").concat(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(u.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(38),x=c(53),O=c.n(x),m=function(){return Object(u.jsxs)("div",{className:O.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},f=c(39),p=c(14);t.default=function(){var e=Object(h.a)(f.d,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(p.a,{})}):i?Object(u.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(u.jsx)(b,{quotes:n}):Object(u.jsx)(m,{})}}}]);
//# sourceMappingURL=5.140e47b0.chunk.js.map