(this.webpackJsonpnetwork_v2=this.webpackJsonpnetwork_v2||[]).push([[4],{289:function(e,s,n){"use strict";n.d(s,"a",(function(){return b}));var t=n(5),a=n(49),i=n(50),c=n(52),r=n(51),u=n(0),d=n.n(u),o=n(19),j=n(10),l=n(1),b=function(e){var s=function(s){Object(c.a)(u,s);var n=Object(r.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return!1===this.props.isAuth?Object(l.jsx)(j.a,{to:"/login"}):Object(l.jsx)(e,Object(t.a)({},this.props))}}]),u}(d.a.Component);return Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}))(s)}},290:function(e,s,n){"use strict";n.d(s,"b",(function(){return t})),n.d(s,"a",(function(){return a}));var t=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f !!!!!"},a=function(e){return function(s){if(s.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u0441\u0442\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 !!!!")}}},297:function(e,s,n){},298:function(e,s,n){},299:function(e,s,n){},300:function(e,s,n){},304:function(e,s,n){"use strict";n.r(s);n(0),n(297);var t=n(20),a=(n(298),n(1)),i=function(e){var s="/dialogs/"+e.id;return Object(a.jsx)("div",{className:"dialigs-item",children:Object(a.jsx)(t.b,{to:s,children:e.name})})},c=(n(299),function(e){return Object(a.jsx)("div",{className:"messages",children:Object(a.jsx)("span",{className:"message-item",children:e.message})})}),r=n(85),u=n(124),d=n(290),o=n(63),j=(n(300),function(e){return Object(a.jsxs)("div",{className:"dialogs-header",children:[Object(a.jsx)("div",{className:"dialogs-header-user",children:"\u0418\u043c\u044f \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"}),Object(a.jsx)("div",{className:"dialogs-header-online",children:"Online"})]})}),l=Object(d.a)(150),b=Object(u.a)({form:"addMessageForm"})((function(e){return Object(a.jsxs)("form",{className:"add-message",onSubmit:e.handleSubmit,children:[Object(a.jsx)(r.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",component:o.a,name:"newMessageBody",validate:[d.b,l],className:"add-message-input"}),Object(a.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),m=function(e){var s=e.dialogsPage.dialogsData.map((function(e){return Object(a.jsx)(i,{name:e.name,id:e.id})})),n=e.dialogsPage.messagesData.map((function(e){return Object(a.jsx)(c,{id:e.id,message:e.message})}));return Object(a.jsxs)("div",{className:"dialogs-container",children:[Object(a.jsx)("div",{className:"dialogue-with-the-user",children:Object(a.jsx)(j,{})}),Object(a.jsx)("hr",{className:"line"}),Object(a.jsxs)("div",{className:"dialogs",children:[Object(a.jsxs)("div",{className:"message-block",children:[Object(a.jsx)("div",{children:n}),Object(a.jsx)("hr",{className:"line"}),Object(a.jsx)(b,{onSubmit:function(s){e.addMessage(s.newMessageBody)}})]}),Object(a.jsxs)("div",{className:"dialog-items",children:[s,Object(a.jsx)("hr",{className:"line-mini"})]})]})]})},h=n(122),O=n(19),f=n(289),g=Object(f.a)(m),x=Object(O.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessage:function(s){e(Object(h.a)(s))}}}))(g);s.default=x}}]);
//# sourceMappingURL=4.5df9fe79.chunk.js.map