"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[515],{4515:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(501),a=n(6871),c=n(5861),u=n(885),s=n(7757),i=n.n(s),o=n(2791),p=n(652);var f=n(6373),l=n(184),h=function(){var t=function(){var t=(0,o.useState)([]),e=(0,u.Z)(t,2),n=e[0],r=e[1],a=(0,o.useState)(null),s=(0,u.Z)(a,2),f=s[0],l=s[1],h=(0,o.useState)(!1),v=(0,u.Z)(h,2),d=v[0],x=v[1];return(0,o.useEffect)((function(){x(!0);var t=function(){var t=(0,c.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Y1)();case 3:e=t.sent,r(e),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),l(t.t0.message),console.error(t.t0.message);case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),{trendingMovie:n,error:f,isLoading:d}}(),e=t.trendingMovie,n=t.error,s=t.isLoading,h=(0,a.TH)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Home page"}),s&&(0,l.jsx)(f.VF,{}),n&&(0,l.jsx)("h2",{children:"\u0423\u043f\u0441! \u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),(0,l.jsx)("ul",{children:0!==e.length&&e.map((function(t){var e=t.id,n=t.title;return(0,l.jsx)("li",{children:(0,l.jsx)(r.rU,{to:"movies/".concat(e),state:{from:h},children:n})},e)}))})]})}},652:function(t,e,n){n.d(e,{Hx:function(){return d},Ny:function(){return f},WK:function(){return m},Y1:function(){return o},uV:function(){return h}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),i="9247604179ba4f8029cfb34035e24946";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,n=e.data,r=n.results,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,r=n.data,a=r.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,r=n.data,a=r.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,s().get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 3:return n=t.sent,r=n.data,a=r.results,console.log(a),t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=515.ce46bef9.chunk.js.map