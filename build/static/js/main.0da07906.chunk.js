(this["webpackJsonpreact-boiler"]=this["webpackJsonpreact-boiler"]||[]).push([[0],{34:function(e,a,t){e.exports=t(66)},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),o=t.n(c),r=t(2),s=t(11),i=t(28),u=t.n(i),m=t(15),d=Object(m.b)({name:"user",initialState:{isSignedIn:!1,userData:null,searchInput:"anime",blogData:null},reducers:{setSignedIn:function(e,a){e.isSignedIn=a.payload},setUserData:function(e,a){e.userData=a.payload},setInput:function(e,a){e.searchInput=a.payload},setBlogData:function(e,a){e.blogData=a.payload}}}),g=d.actions,b=g.setSignedIn,v=g.setUserData,h=g.setInput,f=g.setBlogData,p=function(e){return e.user.isSignedIn},E=function(e){return e.user.userData},_=function(e){return e.user.searchInput},N=d.reducer,j=(t(62),function(){var e,a=Object(r.c)(_),t="https://gnews.io/api/v4/search?q=".concat(a,"&token=689a5f474c2664a0d3709f8803722772"),c=Object(r.b)(),o=Object(n.useState)(),i=Object(s.a)(o,2),m=i[0],d=i[1],g=Object(n.useState)(!0),b=Object(s.a)(g,2),v=b[0],h=b[1];return Object(n.useEffect)((function(){u.a.get(t).then((function(e){c(f(e.data)),d(e.data),h(!1)})).catch((function(e){console.log(e)}))}),[a]),l.a.createElement("div",{className:"blog__page"},l.a.createElement("h1",{className:"blog__page__header"},"Blogs"),v?l.a.createElement("h1",{className:"loading"},"Loading..."):"",l.a.createElement("div",{className:"blogs"},null===m||void 0===m||null===(e=m.articles)||void 0===e?void 0:e.map((function(e){return l.a.createElement("a",{className:"blog",target:"_blank",href:e.url},l.a.createElement("img",{src:e.image}),l.a.createElement("div",null,l.a.createElement("h3",{className:"sourceName"},l.a.createElement("span",null,e.source.name),l.a.createElement("p",null,e.publishedAt)),l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.description)))})),0==(null===m||void 0===m?void 0:m.totalArticles)&&l.a.createElement("h1",{className:"no__blogs"},"No blogs available \ud83d\ude1e. Search something else to read blogs on the greatest platform.")))}),O=t(13),I=t.n(O),S=(t(63),function(){var e=Object(r.c)(p),a=Object(r.b)(),t=function(e){console.log(e),a(b(!0)),a(v(e.profileObj))};return l.a.createElement("div",{className:"home__page",style:{display:e?"none":""}},e?"":l.a.createElement("div",{className:"login__message"},l.a.createElement("h3",null,"Amazing blogs just one search away. "),l.a.createElement(I.a,{clientId:"255368387867-89v0vs3vh1rf2c8bjo5vuoh1ihrdk9so.apps.googleusercontent.com",render:function(e){return l.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"login__button"},"Login with Google")},onSuccess:t,onFailure:t,isSignedIn:!0,cookiePolicy:"single_host_origin"})))}),k=t(80);t(64);var D=function(){var e=Object(n.useState)("Anime"),a=Object(s.a)(e,2),t=a[0],c=a[1],o=Object(r.c)(p),i=Object(r.c)(E),u=Object(r.b)();return l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",{className:"navbar__header"},"Blogs "),o&&l.a.createElement("div",{className:"blog__search"},l.a.createElement("input",{className:"search",placeholder:"Search for a blog",value:t,onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{className:"submit",onClick:function(e){e.preventDefault(),u(h(t))}},"Search")),o?l.a.createElement("div",{className:"navbar__user__data"},l.a.createElement(k.a,{className:"user",src:null===i||void 0===i?void 0:i.imageUrl,alt:null===i||void 0===i?void 0:i.name}),l.a.createElement("h1",{className:"signedIn"},null===i||void 0===i?void 0:i.givenName),l.a.createElement(O.GoogleLogout,{clientId:"255368387867-89v0vs3vh1rf2c8bjo5vuoh1ihrdk9so.apps.googleusercontent.com",render:function(e){return l.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"logout__button"},"Logout")},onLogoutSuccess:function(e){u(b(!1)),u(v(null))}})):l.a.createElement("h1",{className:"notSignedIn"}," "))},y=(t(65),function(){var e=Object(r.c)(p);return l.a.createElement("div",{className:"app"},l.a.createElement(D,null),l.a.createElement(S,null),e&&l.a.createElement(j,null))}),C=Object(m.a)({reducer:{user:N}});o.a.render(l.a.createElement(r.a,{store:C},l.a.createElement(y,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0da07906.chunk.js.map