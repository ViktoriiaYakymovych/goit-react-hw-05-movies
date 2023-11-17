"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[80],{1687:function(e,n,t){var r=t(5861),a=t(7757),c=t.n(a),i=t(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/";var s="48b2bba5f96af80717b061a99685cb65",o=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/3/trending/movie/day?language=en-US&api_key=".concat(s),{signal:n.signal});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat(s),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/3/movie/".concat(n,"?language=en-US&api_key=").concat(s),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(s),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=").concat(s),{signal:t.signal});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),f={fetchTrendsMovies:o,fetchSearchMovie:l,fetchMovieDetails:u,fetchMovieActors:p,fetchMovieReviews:d};n.Z=f},8080:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,a,c,i,s,o,l,u,p=t(5861),d=t(9439),f=t(7757),v=t.n(f),h=t(7689),x=t(2791),g=t(9135),m=t(1687),Z=t(5510),b=t(168),j=t(1087),w=t(5867),k=w.ZP.section(r||(r=(0,b.Z)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  border-bottom: 1px solid black;\n"]))),y=w.ZP.ul(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),_=(0,w.ZP)(j.OL)(c||(c=(0,b.Z)(["\n  &:hover,\n  &:focus {\n    color: #f5a142;\n  }\n"]))),E=t(184),C=function(){return(0,E.jsxs)(k,{children:[(0,E.jsx)("h3",{children:"Additional information"}),(0,E.jsxs)(y,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(_,{to:"cast",children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(_,{to:"reviews",children:"Reviews"})})]})]})},R=w.ZP.div(i||(i=(0,b.Z)(["\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  gap: 16px;\n  border-bottom: 1px solid black;\n"]))),S=w.ZP.img(s||(s=(0,b.Z)(["\n  max-width: 560px;\n  object-fit: contain;\n"]))),D=w.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),A=function(e){var n=e.movieDetails,t=n.backdrop_path,r=n.poster_path,a=n.title,c=n.release_date,i=n.vote_average,s=n.overview,o=n.genres,l=[];var u="https://image.tmdb.org/t/p/original/".concat(t),p="https://image.tmdb.org/t/p/original/".concat(r);function d(){if(void 0!==c)return c.slice(0,4)}return d(),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(R,{children:[(0,E.jsx)(S,{src:t&&u||r&&p,alt:a}),(0,E.jsxs)(D,{children:[(0,E.jsx)("h2",{children:"".concat(a," (").concat(d(),")")}),(0,E.jsxs)("p",{children:["User score: ",(10*i).toFixed(),"%"]}),""===s?(0,E.jsx)("p",{children:"We don't have any overwiew."}):(0,E.jsxs)("div",{children:[(0,E.jsx)("h3",{children:"Overview"}),(0,E.jsx)("p",{children:s})]}),(0,E.jsx)("h3",{children:"Genres"}),(0,E.jsx)("p",{children:(o&&o.map((function(e){return l.push(e.name)})),l.toString())})]})]}),(0,E.jsx)(C,{})]})},L=w.ZP.section(l||(l=(0,b.Z)(["\n  padding: 16px;\n"]))),P=(0,w.ZP)(j.OL)(u||(u=(0,b.Z)(["\n  margin-bottom: 16px;\n  padding: 8px;\n  display: flex;\n  gap: 4px;\n  align-items: center;\n  max-width: 240px;\n\n  &:hover,\n  &:focus {\n    color: #f5a142;\n  }\n"]))),U=function(){var e,n,t=(0,x.useState)(!1),r=(0,d.Z)(t,2),a=r[0],c=r[1],i=(0,x.useState)(!1),s=(0,d.Z)(i,2),o=s[0],l=s[1],u=(0,x.useState)({}),f=(0,d.Z)(u,2),b=f[0],j=f[1],w=(0,h.UO)().movieId,k=null!==(e=null===(n=(0,h.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,x.useEffect)((function(){if(w){var e=new AbortController,n=w.slice(1);return function(){t.apply(this,arguments)}(),function(){e.abort()}}function t(){return(t=(0,p.Z)(v().mark((function t(){var r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,m.Z.fetchMovieDetails(n,e);case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return");case 7:j(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),"ERR_CANCELED"!==t.t0.code&&(l(!0),console.log(t.t0.message));case 13:return t.prev=13,c(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}}),[w]),(0,E.jsxs)(L,{children:[(0,E.jsxs)(P,{to:k,children:[(0,E.jsx)(g.x_l,{}),"Back to movies"]}),(0,E.jsx)(A,{movieDetails:b}),a&&(0,E.jsx)(Z.Z,{loading:a}),o&&(0,E.jsx)("p",{children:"Sorry, something went wrong. Please, try to update page."}),(0,E.jsx)(x.Suspense,{fallback:(0,E.jsx)(Z.Z,{}),children:(0,E.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=80.4731432e.chunk.js.map