(this.webpackJsonpnetwork_v2=this.webpackJsonpnetwork_v2||[]).push([[3],{289:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var n=s(5),c=s(49),i=s(50),a=s(52),r=s(51),o=s(0),u=s.n(o),l=s(19),j=s(10),p=s(1),f=function(t){var e=function(e){Object(a.a)(o,e);var s=Object(r.a)(o);function o(){return Object(c.a)(this,o),s.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return!1===this.props.isAuth?Object(p.jsx)(j.a,{to:"/login"}):Object(p.jsx)(t,Object(n.a)({},this.props))}}]),o}(u.a.Component);return Object(l.b)((function(t){return{isAuth:t.auth.isAuth}}))(e)}},290:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return c}));var n=function(t){if(!t)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f !!!!!"},c=function(t){return function(e){if(e.length>t)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u0441\u0442\u0430 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 !!!!")}}},292:function(t,e,s){},293:function(t,e,s){},294:function(t,e,s){},295:function(t,e,s){},296:function(t,e,s){},302:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(49),i=s(50),a=s(52),r=s(51),o=s(0),u=s.n(o),l=s(19),j=s(91),p=(s(292),s(293),s(1)),f=function(t){return Object(p.jsx)("div",{className:"post",children:Object(p.jsxs)("div",{className:"avatar",children:[Object(p.jsx)("img",{src:"https://i.pinimg.com/originals/4d/af/2f/4daf2f183af331a8ba9a12bc2a458486.jpg"}),Object(p.jsx)("span",{className:"post-message",children:t.message}),Object(p.jsxs)("div",{className:"like",children:["like ",t.like]})]})})},b=s(85),d=s(124),h=s(290),O=s(63),m=Object(h.a)(100),x=u.a.memo((function(t){var e=t.profilePage.postData.map((function(t){return Object(p.jsx)(f,{message:t.post,like:t.like})}));return Object(p.jsxs)("div",{className:"posts",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"})}),Object(p.jsx)(v,{onSubmit:function(e){t.addPost(e.newPostText)}}),e]})})),v=Object(d.a)({form:"addPostForm"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,className:"input-post",children:[Object(p.jsx)(b.a,{placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c...",component:O.a,name:"newPostText",validate:[h.b,m]}),Object(p.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})),g=Object(l.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))(x),N=s(44),C=(s(294),s(61)),k=function(t){var e=Object(o.useState)(!1),s=Object(C.a)(e,2),n=s[0],c=s[1],i=Object(o.useState)(t.status),a=Object(C.a)(i,2),r=a[0],u=a[1];Object(o.useEffect)((function(){u(t.status)}),[t.status]);return Object(p.jsx)("div",{className:"profile-status",children:!1===n?Object(p.jsx)("div",{className:"profile-status-now",onDoubleClick:function(){c(!0)},children:r||"No status"}):Object(p.jsxs)("div",{className:"profile-status-change",children:[Object(p.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},value:r,autoFocus:!0}),Object(p.jsx)("button",{onClick:function(){t.updateUserStatusTC(r),c(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})},P=function(t){return null==t.profile?Object(p.jsx)(N.a,{}):Object(p.jsxs)("div",{className:"profile",children:[Object(p.jsxs)("div",{className:"description",children:[Object(p.jsx)("img",{src:null==t.profile.photos.large?"https://pbs.twimg.com/profile_images/612140046938959872/OaKOyzpC_400x400.jpg":t.profile.photos.large,className:"ava"}),Object(p.jsxs)("div",{className:"profile-info",children:[Object(p.jsx)("div",{className:"profile-info-name",children:t.profile.fullName}),Object(p.jsx)("div",{className:"profile-info-age",children:"28 \u043b\u0435\u0442"}),Object(p.jsx)("div",{className:"profile-info-gender",children:"\u043c\u0443\u0436\u0447\u0438\u043d\u0430"})]})]}),Object(p.jsx)("hr",{className:"line"}),Object(p.jsx)(k,{status:t.status,updateUserStatusTC:t.updateUserStatusTC})]})},S=(s(295),s(296),function(t){return Object(p.jsxs)("div",{className:"profile-panel",children:[Object(p.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"}),Object(p.jsx)("button",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438"}),Object(p.jsx)("button",{children:"\u041c\u043e\u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"}),Object(p.jsx)("button",{className:"right-button",children:"\u041e\u0431\u043e \u043c\u043d\u0435"})]})}),T=function(t){return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(P,{profile:t.profile,status:t.status,updateUserStatusTC:t.updateUserStatusTC}),Object(p.jsx)(S,{}),Object(p.jsx)(g,{})]})},y=s(10),w=s(289),U=s(11),A=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;void 0==t&&((t=this.props.authorizedMyId)||this.props.histoty.push("/login")),this.props.setProfilePageTC(t,this.props.profile),this.props.getUserStatusTC(t)}},{key:"render",value:function(){return Object(p.jsx)(T,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status}))}}]),s}(u.a.Component);e.default=Object(U.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedMyId:t.auth.userId,isAuth:t.auth.isAuth}}),{setProfilePageTC:j.d,getUserStatusTC:j.c,updateUserStatusTC:j.e}),y.f,w.a)(A)}}]);
//# sourceMappingURL=3.6a17d115.chunk.js.map