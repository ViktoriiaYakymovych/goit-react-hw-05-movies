"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{1687:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),o=n(5294);o.Z.defaults.baseURL="https://api.themoviedb.org/";var s="48b2bba5f96af80717b061a99685cb65",i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/trending/movie/day?language=en-US&api_key=".concat(s),{signal:t.signal});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(s),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(t,"?language=en-US&api_key=").concat(s),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(t,"/credits?language=en-US&api_key=").concat(s),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/3/movie/".concat(t,"/reviews?language=en-US&page=1&api_key=").concat(s),{signal:n.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),g={fetchTrendsMovies:i,fetchSearchMovie:u,fetchMovieDetails:p,fetchMovieActors:l,fetchMovieReviews:f};t.Z=g},3387:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r,a,c,o,s=n(5861),i=n(9439),u=n(7757),p=n.n(u),l=n(2791),f=n(7689),g=n(1687),h=n(5510),v=n(168),d=n(5867),x=d.ZP.section(r||(r=(0,v.Z)(["\n  padding: 16px;\n"]))),m=d.ZP.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),Z=d.ZP.ul(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),b=d.ZP.img(o||(o=(0,v.Z)(["\n  max-width: 240px;\n  object-fit: contain;\n"]))),w=n(184),y=function(){var e=(0,l.useState)(!1),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)(null),c=(0,i.Z)(a,2),o=c[0],u=c[1],v=(0,l.useState)([]),d=(0,i.Z)(v,2),y=d[0],E=d[1],k=(0,f.UO)().movieId;(0,l.useEffect)((function(){if(k){var e=new AbortController,t=k.slice(1);return function(){n.apply(this,arguments)}(),function(){e.abort()}}function n(){return(n=(0,s.Z)(p().mark((function n(){var a;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),n.next=4,g.Z.fetchMovieActors(t,e);case 4:if(void 0!==(a=n.sent)){n.next=7;break}return n.abrupt("return");case 7:E(a.cast),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&(u(!0),console.log(n.t0.message));case 13:return n.prev=13,r(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}}),[k]);return(0,w.jsxs)(x,{children:[(0,w.jsx)(m,{children:0===y.length?(0,w.jsx)("p",{children:"We don't have any information about actors."}):y.map((function(e){return(0,w.jsxs)(Z,{children:[(0,w.jsx)(b,{src:e.profile_path&&"https://image.tmdb.org/t/p/original/".concat(e.profile_path)||"https://image.tmdb.org/t/p/original//zyyGdS7EJak3i2S8osLzWOnVuEY.jpg",alt:e.name}),(0,w.jsx)("p",{children:e.name}),(0,w.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}),n&&(0,w.jsx)(h.Z,{loading:n}),o&&(0,w.jsx)("p",{children:"Sorry, something went wrong. Please, try to update page."})]})}}}]);
//# sourceMappingURL=387.47ebd499.chunk.js.map