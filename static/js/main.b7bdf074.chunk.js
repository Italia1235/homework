(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={navbar:"Header_navbar__1PIbh",navlink:"Header_navlink__cd6GI",active:"Header_active__1yZ7y"}},13:function(e,t,n){e.exports={message:"Message_message__1eu56",name:"Message_name__3HSMP",dialog:"Message_dialog__3e1xi",textMessage:"Message_textMessage__Crqul",time:"Message_time__4qrJq"}},17:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__RuFwP",errorInput:"SuperInputText_errorInput__212Q7",error:"SuperInputText_error__uo0Ak"}},22:function(e,t,n){e.exports={someClass:"Greeting_someClass__2Inb7",error:"Greeting_error__34iQr"}},23:function(e,t,n){e.exports={blue:"HW4_blue__3ux5S",column:"HW4_column__2VE_D",testSpanError:"HW4_testSpanError__2CeZ2"}},24:function(e,t,n){e.exports={finalClassName:"SuperButton_finalClassName__2rzPm",red:"SuperButton_red__2yLUV",default:"SuperButton_default__37-3b"}},25:function(e,t,n){e.exports={label:"SuperCheckbox_label__3tSE2",checkbox:"SuperCheckbox_checkbox__11Hgs",spanClassName:"SuperCheckbox_spanClassName__14--7"}},30:function(e,t,n){e.exports={App:"App_App__2F5Ej"}},34:function(e,t,n){e.exports={spanClassName:"SEP_spanClassName__1T8zW"}},39:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(29),s=n.n(c),i=(n(39),n(30)),o=n.n(i),j=n(11),l=n(10),u=n.n(l),b=n(0);var d=function(){return Object(b.jsxs)("div",{className:u.a.navbar,children:[Object(b.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/pre-junior",children:["  ",Object(b.jsx)("span",{children:"Prejunior"})," "]}),Object(b.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/junior",children:["  ",Object(b.jsx)("span",{children:"Junior"})," "]}),Object(b.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/junior+",children:["  ",Object(b.jsx)("span",{children:"Junior+"})," "]})]})},O=n(2),h=n(13),x=n.n(h);var p=function(e){var t=e.avatar,n=e.name,a=e.message,r=e.time;return Object(b.jsxs)("div",{className:x.a.message,children:[Object(b.jsx)("img",{src:t}),Object(b.jsxs)("div",{className:x.a.dialog,children:[Object(b.jsx)("div",{className:x.a.name,children:n}),Object(b.jsxs)("div",{className:x.a.textMessage,children:[a,"   "]}),Object(b.jsx)("div",{className:x.a.time,children:r})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",f="some text",_="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(p,{avatar:m,name:v,message:f,time:_}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(3);var k=function(e){return Object(b.jsxs)("div",{children:[e.title,Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(b.jsx)(k,{title:t.name,affair:t,deleteAffairCallback:e.deleteAffairCallback,id:t._id},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(y),t=Object(C.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})]})},w=n(16),E=n(22),P=n.n(E),T=function(e){var t=e.name,n=e.setNameCallback,a=e.onEnter,r=e.addUser,c=e.error,s=e.totalUsers,i=c?P.a.error:P.a.someClass;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{onKeyPress:a,value:t,onChange:n,className:i}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("button",{onClick:r,disabled:!t,children:"add"}),Object(b.jsx)("span",{children:s})]})},I=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(C.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],d=function(){n(s),alert("Hello ".concat(s," !"))},O=t.length;return Object(b.jsx)(T,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("where name?"))},addUser:d,onEnter:function(e){"Enter"==e.key&&(d(),i(""))},error:l,totalUsers:O})},F=n(33);var A=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(F.v1)(),name:e};r([].concat(Object(w.a)(n),[t]))}})]})},H=n(7),M=n(6),B=n(17),J=n.n(B),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(J.a.error," ").concat(s||""),j="".concat(J.a.input," ").concat(c?J.a.errorInput:J.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(H.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(b.jsx)("span",{className:o,children:c})]})},U=n(23),K=n.n(U),L=n(24),R=n.n(L),q=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),r="".concat(t?R.a.red:R.a.default," ").concat(n);return Object(b.jsx)("button",Object(H.a)({className:r},a))},D=n(25),G=n.n(D),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(H.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:G.a.spanClassName,children:r})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:K.a.column,children:[Object(b.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(W,{className:K.a.blue}),Object(b.jsx)(q,{children:"default"}),Object(b.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(q,{disabled:!0,children:"disabled"}),Object(b.jsx)(z,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Q=n(34),V=n.n(Q),X=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=r||{},u=l.children,d=l.onDoubleClick,O=l.className,h=Object(M.a)(l,["children","onDoubleClick","className"]);"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(W,Object(H.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsx)("span",Object(H.a)(Object(H.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:V.a.spanClassName},h),{},{children:u||c.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Y("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(X,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(q,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(b.jsx)(q,{onClick:function(){r($("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(S,{}),Object(b.jsx)(A,{}),Object(b.jsx)(Z,{}),Object(b.jsx)(ee,{})]})};var ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ae=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(M.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(H.a)(Object(H.a)({onChange:function(e){n(e.currentTarget.value)}},a),{},{children:r}))},re=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=(e.onChange,e.onChangeOption),c=(Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:c,checked:e===a,value:e,name:t}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},ce=["x","y","z"];var se=function(){var e=Object(a.useState)(ce[1]),t=Object(C.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ae,{options:ce,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(re,{name:"radio",options:ce,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ie=function(e,t){switch(t.type){case"SORT-PEOPLE":var n=Object(w.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"CHECK":return Object(w.a)(e).filter((function(e){return e.age>=t.payload}));default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var je=function(){var e=Object(a.useState)(oe),t=Object(C.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",c,Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return r(ie(oe,{type:"SORT-PEOPLE",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return r(ie(oe,{type:"SORT-PEOPLE",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){return r(ie(oe,{type:"CHECK",payload:18}))},children:"check18"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var le=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(se,{}),Object(b.jsx)(je,{})]})};var ue=function(){return Object(b.jsx)("div",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442"})},be="/pre-junior",de="/junior",Oe="/junior+";var he=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(O.a,{to:be})}}),Object(b.jsx)(O.b,{path:be,render:function(){return Object(b.jsx)(te,{})}}),Object(b.jsx)(O.b,{path:de,render:function(){return Object(b.jsx)(le,{})}}),Object(b.jsx)(O.b,{path:Oe,render:function(){return Object(b.jsx)(ue,{})}}),"// add routes",Object(b.jsx)(O.b,{render:function(){return Object(b.jsx)(ne,{})}})]})})};var xe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(he,{})]})})};var pe=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(xe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.b7bdf074.chunk.js.map