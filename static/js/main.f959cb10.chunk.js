/*! For license information please see main.f959cb10.chunk.js.LICENSE.txt */
(this.webpackJsonpnetwork_v2=this.webpackJsonpnetwork_v2||[]).push([[0],{101:function(t,e,n){},122:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(29),c=n(5),a="dialogs/SEND-MESSAGE",s={dialogsData:[{id:1,name:"Ilya"},{id:2,name:"Anna"},{id:3,name:"Aleksey"},{id:4,name:"Egor"},{id:5,name:"Konstantin"}],messagesData:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430"},{id:3,message:"\u0423\u0447\u0443 \u0440\u0435\u0430\u043a\u0442"},{id:4,message:"\u0433\u043e\u0440\u0438\u0442 \u0441\u043b\u0430\u0432\u043d\u043e"}]},i=function(t){return{type:a,messagesData:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return Object(c.a)(Object(c.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:5,message:e.messagesData}])});default:return t}}},123:function(t,e,n){"use strict";n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"h",(function(){return k})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return C})),n.d(e,"i",(function(){return E}));var r=n(9),c=n.n(r),a=n(15),s=n(29),i=n(5),u=n(13),o="users/FOLLOW",l="users/UNFOLLOW",j="users/SET_USERS",b="users/SET_CURRENT_PAGE",f="users/SET_TOTAL_COUNT",d="users/TOGGLE_IS_FETCHING",p="users/TOGGLE_IS_FOLLOWING_PROGRESS",O={usersData:[],pagesSize:50,totalCount:0,currentPage:1,isFetching:!1,followingInProgress:[],portionSize:10},h=function(t){return{type:o,userId:t}},g=function(t){return{type:l,userId:t}},m=function(t){return{type:j,users:t}},v=function(t){return{type:b,currentPage:t}},x=function(t){return{type:f,totalCount:t}},w=function(t){return{type:d,isFetching:t}},y=function(t,e){return{type:p,isFetching:t,userId:e}},k=function(t,e){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),n.next=3,u.c.getUsersPage(t,e);case 3:a=n.sent,r(w(!1)),r(m(a.items)),r(x(a.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(t,e){return function(){var n=Object(a.a)(c.a.mark((function n(r){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(v(t)),r(w(!0)),n.next=4,u.c.getUsersPage(t,e);case 4:a=n.sent,r(w(!1)),r(m(a.items));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},N=function(){var t=Object(a.a)(c.a.mark((function t(e,n,r,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(y(!0,n)),t.next=3,r(n);case 3:0==t.sent.resultCode&&e(a(n)),e(y(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,c){return t.apply(this,arguments)}}(),C=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(n,t,u.c.getUsersUnSubscribe.bind(u.c),g);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(n,t,u.c.getUsersSubscribe.bind(u.c),h);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(i.a)(Object(i.a)({},t),{},{usersData:t.usersData.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{follow:!0}):t}))});case l:return Object(i.a)(Object(i.a)({},t),{},{usersData:t.usersData.map((function(t){return t.id===e.userId?Object(i.a)(Object(i.a)({},t),{},{follow:!1}):t}))});case j:return Object(i.a)(Object(i.a)({},t),{},{usersData:Object(s.a)(e.users)});case b:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case f:return Object(i.a)(Object(i.a)({},t),{},{totalCount:e.totalCount});case d:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case p:return Object(i.a)(Object(i.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(s.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!=e.userId}))});default:return t}}},13:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return i}));n(0);var r=n(127),c=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"879087b0-6726-4a3a-b345-a3063ffa34d8"}}),a={getUsersPage:function(t,e){return c.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},getUsersUnSubscribe:function(t){return c.delete("follow/".concat(t)).then((function(t){return t.data}))},getUsersSubscribe:function(t){return c.post("follow/".concat(t)).then((function(t){return t.data}))}},s={getProfile:function(t){return c.get("profile/"+t).then((function(t){return t.data}))},getStatus:function(t){return c.get("profile/status/"+t).then((function(t){return t.data}))},updateStatus:function(t){return c.put("profile/status",{status:t}).then((function(t){return t.data}))}},i={getAuthMe:function(){return c.get("auth/me").then((function(t){return t.data}))},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return c.post("auth/login",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}))},logout:function(){return c.delete("auth/login").then((function(t){return t.data}))}}},160:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},187:function(t,e,n){},188:function(t,e,n){},287:function(t,e,n){},288:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(62),s=n.n(a),i=(n(160),n(49)),u=n(50),o=n(52),l=n(51),j=n(10),b=n(19),f=n(11),d=n(5),p=n(13),O=n(9),h=n.n(O),g=n(15),m=n(38),v="auth/SEND-MESSAGE",x={userId:null,email:null,login:null,isAuth:!1},w=function(t,e,n,r){return{type:v,payload:{userId:t,email:e,login:n,isAuth:r}}},y=function(){return function(){var t=Object(g.a)(h.a.mark((function t(e){var n,r,c,a,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.getAuthMe();case 2:0===(n=t.sent).resultCode&&(r=n.data,c=r.id,a=r.email,s=r.login,e(w(c,a,s,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(d.a)(Object(d.a)({},t),e.payload);default:return t}},S="app/SET_INITIALAZE",N={initialazed:!1},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(d.a)(Object(d.a)({},t),{},{initialazed:!0});default:return t}},E=(n(183),n(20)),T=(n(184),n(1)),P=function(t){return Object(T.jsxs)("div",{className:"header",children:[Object(T.jsx)("img",{src:"https://cdn.logo.com/hotlink-ok/logo-social-sq.png"}),Object(T.jsx)("div",{className:"login-blok",children:t.isAuth?Object(T.jsxs)("div",{className:"login-blok-button",children:[Object(T.jsxs)("span",{children:[t.login," "]}),Object(T.jsx)("button",{onClick:t.logoutTC,className:"login-button",children:" \u0412\u044b\u0439\u0442\u0438 "})]}):Object(T.jsxs)(E.b,{to:"/login",children:[" ",Object(T.jsx)("button",{className:"login-blok-button",children:" Login "})," "]})})]})},A=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(T.jsx)(P,Object(d.a)({},this.props))}}]),n}(c.a.Component),I=Object(b.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logoutTC:function(){return function(){var t=Object(g.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.logout();case 2:0===t.sent.resultCode&&e(w(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(A),D=(n(187),function(){return Object(T.jsxs)("nav",{className:"nav",children:[Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/profile",activeClassName:"active-link",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/dialogs",activeClassName:"active-link",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/users",activeClassName:"active-link",children:"\u0414\u0440\u0443\u0437\u044c\u044f"})}),Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/news",activeClassName:"active-link",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/music",activeClassName:"active-link",children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(T.jsx)("div",{className:"item",children:Object(T.jsx)(E.b,{to:"/settings",activeClassName:"active-link",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})}),_=n(61);var U=function(){var t=Object(r.useState)(0),e=Object(_.a)(t,2),n=e[0],c=e[1];return Object(T.jsxs)("div",{children:[Object(T.jsxs)("p",{children:["\u0412\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 ",n," \u0440\u0430\u0437"]}),Object(T.jsx)("button",{onClick:function(){return c(n+1)},children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"}),Object(T.jsx)("button",{onClick:function(){return c(n-5)},children:"\u041d\u0430 \u043c\u0435\u043d\u044f \u043d\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0439!"})]})},L=function(){var t=Object(r.useState)(0),e=Object(_.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){document.title="\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ".concat(n," \u0440\u0430\u0437")})),Object(T.jsxs)("div",{children:[Object(T.jsxs)("p",{children:["\u0412\u044b \u043d\u0430\u0436\u0430\u043b\u0438 ",n," \u0440\u0430\u0437"]}),Object(T.jsx)("button",{onClick:function(){return c(n+1)},children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043c\u0435\u043d\u044f"})]})},z=function(){return Object(T.jsx)("div",{children:"Settings"})},F=(n(101),n(124)),G=n(63),M=Object(F.a)({form:"login"})((function(t){return Object(T.jsx)("form",{onSubmit:t.handleSubmit,children:Object(T.jsxs)("div",{className:"login-user",children:[Object(T.jsx)("div",{className:"login-user-item",children:Object(G.b)("Login","input","email","login-user-input",null)}),Object(T.jsx)("div",{className:"login-user-item",children:Object(G.b)("Password","input","password","login-user-input","password")}),t.error&&Object(T.jsx)("div",{className:"login-error",children:t.error}),Object(T.jsxs)("div",{className:"login-user-item",children:[Object(G.b)(null,"input","rememberMe",null,"checkbox"),"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"]}),Object(T.jsx)("div",{className:"login-user-item",children:Object(T.jsx)("button",{children:"Login"})})]})})})),R=Object(b.b)((function(t){return{isAuth:t.auth.isAuth}}),{loginTC:function(t,e,n){return function(){var r=Object(g.a)(h.a.mark((function r(c){var a,s,i;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(t,e,n);case 2:0===(a=r.sent).resultCode?c(y()):(s=a.messages.length>0?a.messages[0]:"\u041e\u0448\u0438\u0431\u043a\u0430",i=Object(m.a)("login",{_error:s}),c(i));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}})((function(t){return t.isAuth?Object(T.jsx)(j.a,{to:"/profile"}):Object(T.jsxs)("div",{className:"login-user-window",children:[Object(T.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(T.jsx)(M,{onSubmit:function(e){t.loginTC(e.email,e.password,e.rememberMe)}})]})})),W=n(44),J=c.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),K=c.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),q=c.a.lazy((function(){return n.e(5).then(n.bind(null,303))})),B=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initialazeAppTC()}},{key:"render",value:function(){return this.props.initialize?Object(T.jsxs)("div",{className:"app-wrapper content",children:[Object(T.jsx)(I,{}),Object(T.jsx)(D,{}),Object(T.jsxs)("div",{className:"content-board",children:[Object(T.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(T.jsxs)(r.Suspense,{fallback:Object(T.jsx)(W.a,{}),children:[" ",Object(T.jsx)(J,{})," "]})}}),Object(T.jsx)(j.b,{path:"/dialogs",render:function(){return Object(T.jsxs)(r.Suspense,{fallback:Object(T.jsx)(W.a,{}),children:[" ",Object(T.jsx)(K,{})," "]})}}),Object(T.jsx)(j.b,{path:"/users",render:function(){return Object(T.jsxs)(r.Suspense,{fallback:Object(T.jsx)(W.a,{}),children:[" ",Object(T.jsx)(q,{})," "]})}}),Object(T.jsx)(j.b,{path:"/news",component:U}),Object(T.jsx)(j.b,{path:"/music",component:L}),Object(T.jsx)(j.b,{path:"/settings",component:z}),Object(T.jsx)(j.b,{path:"/login",component:R})]})]}):Object(T.jsx)(W.a,{})}}]),n}(c.a.Component),H=Object(f.d)(Object(b.b)((function(t){return{initialize:t.app.initialazed}}),{initialazeAppTC:function(){return function(t){var e=t(y());Promise.all([e]).then((function(){t({type:S})}))}}}),j.f)(B),Y=n(122),Z=n(91),Q=n(123),V=n(129),X=n(125),$=Object(f.c)({profilePage:Z.b,dialogsPage:Y.b,usersPage:Q.a,auth:k,form:X.a,app:C}),tt=Object(f.e)($,Object(f.a)(V.a));window.store=tt;var et=tt;s.a.render(Object(T.jsx)(E.a,{children:Object(T.jsx)(b.a,{store:et,children:Object(T.jsx)(H,{store:et})})}),document.getElementById("root"))},44:function(t,e,n){"use strict";n(0),n(287);var r=n(1);e.a=function(){return Object(r.jsx)("div",{className:"preloader",children:Object(r.jsx)("img",{src:"https://thumbs.gfycat.com/FatherlyGoodAustrianpinscher-size_restricted.gif"})})}},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n(5),c=n(130),a=(n(0),n(85)),s=(n(188),n(1)),i=function(t){var e=t.input,n=t.meta,a=Object(c.a)(t,["input","meta"]);return Object(s.jsxs)("div",{className:"input-form",children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},e),a)),n.touched&&n.error&&Object(s.jsxs)("span",{className:"error",children:[n.error,"'"]})]})},u=function(t,e,n,r,c){return Object(s.jsx)(a.a,{placeholder:t,component:e,name:n,className:r,type:c})}},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"e",(function(){return m}));var r=n(9),c=n.n(r),a=n(15),s=n(29),i=n(5),u=n(13),o="profile/ADD-POST",l="profile/SET_PROFILE_PAGE",j="profile/SET_STATUS",b="profile/UPDATE_STATUS",f="profile/DELETE_POST",d={postData:[{id:1,post:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",like:5},{id:2,post:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0443 \u0432\u0430\u0441 \u0434\u0435\u043b\u0430?",like:2},{id:3,post:"\u042d\u0442\u043e \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 React",like:10}],profile:null,status:""},p=function(t){return{type:o,newPostText:t}},O=function(t){return{type:j,status:t}},h=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getProfile(t);case 2:r=e.sent,n({type:l,profile:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getStatus(t);case 2:r=e.sent,n(O(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.updateStatus(t);case 2:0===e.sent.resultCode&&n(O(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(i.a)(Object(i.a)({},t),{},{postData:[].concat(Object(s.a)(t.postData),[{id:5,post:e.newPostText,like:25}])});case f:return Object(i.a)(Object(i.a)({},t),{},{postData:Object(s.a)(t.postData.filter((function(t){return!t.action.id})))});case l:return Object(i.a)(Object(i.a)({},t),{},{profile:e.profile});case j:case b:return Object(i.a)(Object(i.a)({},t),{},{status:e.status});default:return t}}}},[[288,1,2]]]);
//# sourceMappingURL=main.f959cb10.chunk.js.map