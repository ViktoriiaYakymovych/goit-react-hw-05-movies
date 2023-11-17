"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{1687:function(e,n,t){var r=t(5861),a=t(7757),c=t.n(a),o=t(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/";var u="48b2bba5f96af80717b061a99685cb65",s=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/trending/movie/day?language=en-US&api_key=".concat(u),{signal:n.signal});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat(u),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(n,"?language=en-US&api_key=").concat(u),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(u),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=").concat(u),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),v={fetchTrendsMovies:s,fetchSearchMovie:i,fetchMovieDetails:l,fetchMovieActors:p,fetchMovieReviews:f};n.Z=v},3174:function(e,n,t){t.d(n,{Z:function(){return f}});var r,a,c=t(7689),o=t(168),u=t(1087),s=t(5867),i=s.ZP.ul(r||(r=(0,o.Z)(["\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),l=(0,s.ZP)(u.OL)(a||(a=(0,o.Z)(["\n  &:hover {\n    color: #f5a142;\n  }\n"]))),p=t(184),f=function(e){var n=e.films,t=(0,c.TH)();return(0,p.jsx)(i,{children:n.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(l,{to:"/movies/:".concat(e.id),state:{from:t},children:e.original_title})},e.id)}))})}},304:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r,a=t(3433),c=t(5861),o=t(9439),u=t(7757),s=t.n(u),i=t(2791),l=t(1687),p=t(3174),f=t(5510),v=t(168),d=t(5867).ZP.section(r||(r=(0,v.Z)(["\n  padding: 16px;\n"]))),g=t(184),h=function(){var e=(0,i.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],u=(0,i.useState)(!1),v=(0,o.Z)(u,2),h=v[0],Z=v[1],x=(0,i.useState)(null),m=(0,o.Z)(x,2),w=m[0],E=m[1];return(0,i.useEffect)((function(){var e=new AbortController,n=function(){var n=(0,c.Z)(s().mark((function n(){var t,c;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,l.Z.fetchTrendsMovies(e);case 4:t=n.sent,c=t.results,r((0,a.Z)(c)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&E(n.t0.message),E(null);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){e.abort()}}),[]),(0,g.jsxs)(d,{children:[(0,g.jsx)("h1",{children:"Trending today"}),t.length>0&&(0,g.jsx)(p.Z,{films:t}),h&&(0,g.jsx)(f.Z,{loading:h}),w&&(0,g.jsx)("p",{children:"Sorry, something went wrong. Please, try to update page."})]})}}}]);
//# sourceMappingURL=304.f935e097.chunk.js.map