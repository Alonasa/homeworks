(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={body:"Affairs_body__14erQ",title:"Affairs_title__28DTS",list:"Affairs_list__zlLbW",affair:"Affairs_affair__3rwYr",selected:"Affairs_selected__3CnL6"}},function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__1kG8X",sidebar__content:"Sidebar_sidebar__content__1cagb",sidebar__container:"Sidebar_sidebar__container__2lGb2",sidebar__items:"Sidebar_sidebar__items__1C_xR",active:"Sidebar_active__2YxrM",menu__button:"Sidebar_menu__button__9xafs",menu__button__pressed:"Sidebar_menu__button__pressed__3Dtpm",shake:"Sidebar_shake___qvXS"}},function(e,t,n){e.exports={header:"Header_header__3vIbw",header__content:"Header_header__content__3Hmd9",header__container:"Header_header__container__2DTwr",header__items:"Header_header__items__23CIV",active:"Header_active__8ayTN",menu__button:"Header_menu__button__3ZNHz",menu__button__pressed:"Header_menu__button__pressed__12iFm",shake:"Header_shake__2R3O4"}},function(e,t,n){e.exports={body:"Greeting_body__2GPtW",title:"Greeting_title__3w2OV",success:"Greeting_success__1waT7",error:"Greeting_error__20BML",indent:"Greeting_indent__1Tz3Q"}},,,,function(e,t,n){e.exports={input:"SuperInputText_input__iHn0M",superInput:"SuperInputText_superInput__2lZgL",errorInput:"SuperInputText_errorInput__33CU3",error:"SuperInputText_error__1H7kn"}},function(e,t,n){e.exports={blue:"HW4_blue__3ueJG",column:"HW4_column__2Z64C",testSpanError:"HW4_testSpanError__2vNcR"}},,function(e,t,n){e.exports={default:"SuperButton_default__1DIXZ",red:"SuperButton_red__1qSOe"}},function(e,t,n){e.exports={spanClassName:"SuperCheckbox_spanClassName__18UaU",checkbox:"SuperCheckbox_checkbox__3s7vO"}},function(e,t,n){e.exports={error__404:"Error404_error__404__3lgaw",error__wrapper:"Error404_error__wrapper__1dVZt",shake:"Error404_shake__1EmPa"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__1QudM"}},function(e,t,n){e.exports={error__404:"Error404_error__404__1SkKI",error__wrapper:"Error404_error__wrapper__38UoP",shake:"Error404_shake__2H4i6"}},,function(e,t,n){e.exports={App:"App_App__3CaSs"}},function(e,t,n){e.exports={super__span:"SuperEditableSpan_super__span__3xKol",one:"SuperEditableSpan_one__dM4t0"}},function(e,t,n){e.exports={select:"SuperSelect_select__MD3sn"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(23),s=n.n(a),i=(n(31),n(24)),j=n.n(i),o=n(4),l=n(3),b=n(9),u=n.n(b),d=n(2),_=(n(32),n(0));var h=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{}),Object(_.jsx)("button",{children:"Send"})]})},O=function(e){return Object(_.jsxs)("div",{className:"message",children:[Object(_.jsxs)("div",{className:"message__sended",children:[Object(_.jsx)("img",{className:"message__avatar",src:e.avatar}),Object(_.jsxs)("div",{className:"message__data",children:[Object(_.jsx)("h3",{className:"message__author",children:e.name}),Object(_.jsx)("p",{className:"message__text",children:e.message}),Object(_.jsx)("span",{className:"message__time",children:e.time})]})]}),Object(_.jsx)(h,{})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Some Name",p="some text",f="22:00";var v=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(O,{avatar:x,name:m,message:p,time:f}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},g=n(8),N=n.n(g);var k=function(e){return Object(_.jsxs)("div",{className:N.a.list,children:[Object(_.jsx)("span",{children:e.affair.name}),Object(_.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]},e.affair._id)};var C=function(e){var t=e.data.map((function(t){return Object(_.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return e.filter===t?N.a.selected:N.a.affair};return Object(_.jsxs)("div",{children:[t,Object(_.jsx)("button",{className:n("all"),onClick:function(){e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{className:n("high"),onClick:function(){e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{className:n("middle"),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{className:n("low"),onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(c.useState)(w),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(l.a)(a,2),i=s[0],j=s[1],o=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(_.jsxs)("div",{className:N.a.body,children:[Object(_.jsx)("hr",{}),Object(_.jsx)("h3",{className:N.a.title,children:"homeworks 2"}),Object(_.jsx)(C,{data:o,setFilter:j,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},y=n(14),A=n(11),H=n.n(A),E=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=t?H.a.success:H.a.error;return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{value:t,onChange:n,className:s}),Object(_.jsx)("span",{children:r}),Object(_.jsx)("button",{onClick:c,children:"add"}),Object(_.jsx)("span",{className:H.a.indent,children:a})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(l.a)(r,2),s=a[0],i=a[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),b=o[0],u=o[1],d=t.length;return Object(_.jsx)(E,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){s?(n(s),i(s),alert("Hello ".concat(s,"!")),i("")):u(b)},error:b,totalUsers:d})},I=n(36);var P=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{className:H.a.body,children:[Object(_.jsx)("hr",{}),Object(_.jsx)("h3",{className:H.a.title,children:"homeworks 3"}),Object(_.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};r([t].concat(Object(y.a)(n)))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},F=n(7),J=n(6),U=n(15),G=n.n(U),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,j=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(G.a.error," ").concat(i||""),l="".concat(a?G.a.errorInput:G.a.superInput," ").concat(s);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},j)),a&&Object(_.jsx)("span",{className:o,children:a})]})},M=n(16),W=n.n(M),D=n(18),L=n.n(D),Z=function(e){var t=e.red,n=e.className,c=Object(J.a)(e,["red","className"]),r="".concat(t?L.a.red:L.a.default," ").concat(n);return Object(_.jsx)("button",Object(F.a)({className:r},c))},K=n(19),R=n.n(K),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(R.a.checkbox," ").concat(c||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(_.jsx)("span",{className:R.a.spanClassName,children:r})]})};var z=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),j=Object(l.a)(i,2),o=j[0],b=j[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),Object(_.jsx)("h3",{children:"homeworks 4"}),Object(_.jsxs)("div",{className:W.a.column,children:[Object(_.jsx)(B,{value:n,onChangeText:r,onEnter:s,error:a,spanClassName:W.a.testSpanError}),Object(_.jsx)(B,{className:W.a.blue}),Object(_.jsx)(Z,{children:"default"}),Object(_.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(Z,{disabled:!0,children:"disabled"}),Object(_.jsxs)(X,{checked:o,onChangeChecked:b,children:["some text",n]}),Object(_.jsx)(X,{checked:o,onChange:function(e){return b(e.currentTarget.checked)}})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},q=n(10),Q=n.n(q),V=n(25),Y=n.n(V),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(l.a)(s,2),j=i[0],o=i[1],b=r||{},u=b.children,d=b.onDoubleClick,h=b.className,O=Object(J.a)(b,["children","onDoubleClick","className"]),x="".concat(Y.a.super__span," ").concat(h);return Object(_.jsx)(_.Fragment,{children:j?Object(_.jsx)(B,Object(F.a)({autoFocus:!0,onBlur:function(e){o(!1),t&&t(e)},onEnter:function(){o(!1),n&&n()}},a)):Object(_.jsx)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){o(!0),d&&d(e)},className:x},O),{},{children:u||a.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 6",Object(_.jsx)("div",{children:Object(_.jsx)($,{value:n,onChangeText:r,spanProps:{children:n?void 0:"Make double click here to be able to enter text..."}})}),Object(_.jsx)(Z,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(_.jsx)(Z,{onClick:function(){r(te("editable-span-value",n))},children:"restore"}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var ce=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(v,{}),Object(_.jsx)(S,{}),Object(_.jsx)(P,{}),Object(_.jsx)(z,{}),Object(_.jsx)(ne,{})]})},re=n(20),ae=n.n(re);var se=function(){return Object(_.jsx)("div",{className:ae.a.error__404,children:Object(_.jsxs)("div",{className:ae.a.error__wrapper,children:[Object(_.jsx)("div",{children:"404"}),Object(_.jsx)("div",{children:"Page not found!"}),Object(_.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})})},ie=n(26),je=n.n(ie),oe=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,r=Object(J.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)})):[];return Object(_.jsx)("select",Object(F.a)(Object(F.a)({className:je.a.select,onChange:function(e){c&&c(e.currentTarget.value),n&&n(e)}},r),{},{children:a}))},le=n(21),be=n.n(le),ue=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=(Object(J.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e.currentTarget.value),r&&r(e)}),i=n?n.map((function(e,n){return Object(_.jsxs)("label",{className:be.a.label,children:[Object(_.jsx)("input",{className:be.a.radio,type:"radio",name:t,value:t,checked:e===c,onChange:s}),e]},t+"-"+n)})):[];return Object(_.jsx)(_.Fragment,{children:i})},de=["x","y","z"];var _e=function(){var e=Object(c.useState)(de[1]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 7",Object(_.jsx)("div",{children:Object(_.jsx)(oe,{options:de,value:n,onChangeOption:r})}),Object(_.jsx)("div",{children:Object(_.jsx)(ue,{name:"radio",options:de,value:n,onChangeOption:r})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},he=function(e,t){switch(t.type){case"sort":var n=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));return"up"===t.payload?n:n.reverse();case"check":return Object(y.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},Oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var xe=function(){var e=Object(c.useState)(Oe),t=Object(l.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(_.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 8",a,Object(_.jsx)("div",{children:Object(_.jsx)(Z,{onClick:function(){return r(he(Oe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(_.jsx)("div",{children:Object(_.jsx)(Z,{onClick:function(){return r(he(Oe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(_.jsx)(Z,{onClick:function(){return r(he(Oe,{type:"check",payload:18}))},children:"check 18"}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},me=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(_e,{}),Object(_.jsx)(xe,{})]})},pe="/pre-junior",fe="/junior",ve="/hw1",ge="/hw2",Ne="/hw3",ke="/hw4",Ce="/hw6",we="/hw7",Se="/404";var ye=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(d.c,{children:[Object(_.jsx)(d.a,{path:"/",element:Object(_.jsx)(ce,{})}),Object(_.jsx)(d.a,{path:ve,element:Object(_.jsx)(v,{})}),Object(_.jsx)(d.a,{path:ge,element:Object(_.jsx)(S,{})}),Object(_.jsx)(d.a,{path:Ne,element:Object(_.jsx)(P,{})}),Object(_.jsx)(d.a,{path:ke,element:Object(_.jsx)(z,{})}),Object(_.jsx)(d.a,{path:Ce,element:Object(_.jsx)(ne,{})}),Object(_.jsx)(d.a,{path:we,element:Object(_.jsx)(_e,{})}),Object(_.jsx)(d.a,{path:pe,element:Object(_.jsx)(ce,{})}),Object(_.jsx)(d.a,{path:fe,element:Object(_.jsx)(me,{})}),Object(_.jsx)(d.a,{path:Se,element:Object(_.jsx)(se,{})}),Object(_.jsx)(d.a,{path:"*",element:Object(_.jsx)(se,{})})]})})};var Ae=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(e){return e?Q.a.active:""};return Object(_.jsx)("div",{className:Q.a.header,children:Object(_.jsx)("div",{className:Q.a.header__container,children:Object(_.jsxs)("nav",{className:Q.a.header__content,children:[Object(_.jsx)("div",{className:n?Q.a.menu__button__pressed:Q.a.menu__button,onClick:function(){r(!n)},children:"\u041c\u0435\u043d\u044e"}),Object(_.jsxs)("div",{className:Q.a.header__items,children:[Object(_.jsx)(o.b,{to:ve,className:function(e){return a(e.isActive)},children:"Homework 1"}),Object(_.jsx)(o.b,{to:ge,className:function(e){return a(e.isActive)},children:"Homework 2"}),Object(_.jsx)(o.b,{to:Ne,className:function(e){return a(e.isActive)},children:"Homework 3"}),Object(_.jsx)(o.b,{to:ke,className:function(e){return a(e.isActive)},children:"Homework 4"}),Object(_.jsx)(o.b,{to:pe,className:function(e){return a(e.isActive)},children:"Pre Junior"}),Object(_.jsx)(o.b,{to:fe,className:function(e){return a(e.isActive)},children:"Junior"})]})]})})})};var He=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(o.a,{children:[Object(_.jsx)(Ae,{}),Object(_.jsx)(ye,{})]})})},Ee=n(22),Te=n.n(Ee);var Ie=function(){return Object(_.jsx)("div",{className:Te.a.error__404,children:Object(_.jsxs)("div",{className:Te.a.error__wrapper,children:[Object(_.jsx)("div",{children:"404"}),Object(_.jsx)("div",{children:"Page not found!"}),Object(_.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})})};var Pe=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(v,{}),Object(_.jsx)(S,{}),Object(_.jsx)(P,{}),Object(_.jsx)(z,{}),Object(_.jsx)(ne,{})]})},Fe=function(){return Object(_.jsx)("div",{children:"Junior Plus"})},Je="pre_junior_link",Ue="junior_link",Ge="junior_plus_link",Be="/hw1",Me="/hw2",We="/hw3",De="/hw4",Le="/hw5",Ze="/hw6",Ke="/hw7",Re="/hw8";var Xe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(d.c,{children:[Object(_.jsx)(d.a,{path:"/",element:Object(_.jsx)(Pe,{})}),Object(_.jsx)(d.a,{path:Je,element:Object(_.jsx)(Pe,{})}),Object(_.jsx)(d.a,{path:Be,element:Object(_.jsx)(v,{})}),Object(_.jsx)(d.a,{path:Me,element:Object(_.jsx)(S,{})}),Object(_.jsx)(d.a,{path:We,element:Object(_.jsx)(P,{})}),Object(_.jsx)(d.a,{path:De,element:Object(_.jsx)(z,{})}),Object(_.jsx)(d.a,{path:Le,element:Object(_.jsx)(He,{})}),Object(_.jsx)(d.a,{path:Ze,element:Object(_.jsx)(ne,{})}),Object(_.jsx)(d.a,{path:Ke,element:Object(_.jsx)(_e,{})}),Object(_.jsx)(d.a,{path:Re,element:Object(_.jsx)(xe,{})}),Object(_.jsx)(d.a,{path:Ue,element:Object(_.jsx)(me,{})}),Object(_.jsx)(d.a,{path:Ge,element:Object(_.jsx)(Fe,{})}),Object(_.jsx)(d.a,{path:"/*",element:Object(_.jsx)(Ie,{})})]})})},ze=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(e){return e?u.a.active:""};return Object(_.jsx)("div",{className:u.a.sidebar,children:Object(_.jsx)("div",{className:u.a.sidebar__container,children:Object(_.jsxs)("nav",{className:u.a.sidebar__content,children:[Object(_.jsx)("div",{className:n?u.a.menu__button__pressed:u.a.menu__button,onClick:function(){r(!n)},children:"\u041c\u0435\u043d\u044e"}),Object(_.jsxs)("div",{className:u.a.sidebar__items,children:[Object(_.jsx)(o.b,{to:Je,className:function(e){return a(e.isActive)},children:"Pre-Junior"}),Object(_.jsx)(o.b,{to:Ue,className:function(e){return a(e.isActive)},children:"Junior"}),Object(_.jsx)(o.b,{to:Ge,className:function(e){return a(e.isActive)},children:"Junior PLUS"})]})]})})})};var qe=function(){return Object(_.jsx)(ze,{})};var Qe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(o.a,{children:[Object(_.jsx)(qe,{}),Object(_.jsx)(Xe,{})]})})};var Ve=function(){return Object(_.jsx)("div",{className:j.a.App,children:Object(_.jsx)(Qe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(Ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.78cfc196.chunk.js.map