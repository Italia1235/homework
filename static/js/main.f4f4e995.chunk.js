(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={message:"Message_message__1eu56",name:"Message_name__3HSMP",dialog:"Message_dialog__3e1xi",textMessage:"Message_textMessage__Crqul",time:"Message_time__4qrJq"}},16:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__RuFwP",errorInput:"SuperInputText_errorInput__212Q7",error:"SuperInputText_error__uo0Ak"}},21:function(e,t,n){e.exports={someClass:"Greeting_someClass__2Inb7",error:"Greeting_error__34iQr"}},22:function(e,t,n){e.exports={blue:"HW4_blue__3ux5S",column:"HW4_column__2VE_D",testSpanError:"HW4_testSpanError__2CeZ2"}},23:function(e,t,n){e.exports={default:"SuperButton_default__37-3b",red:"SuperButton_red__2yLUV"}},24:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__11Hgs",spanClassName:"SuperCheckbox_spanClassName__14--7"}},29:function(e,t,n){e.exports={App:"App_App__2F5Ej"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),s=n.n(c),i=(n(38),n(29)),o=n.n(i),j=n(9),l=n(8),u=n.n(l),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.navbar,children:[Object(d.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/pre-junior",children:["  ",Object(d.jsx)("span",{children:"Prejunior"})," "]}),Object(d.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/junior",children:["  ",Object(d.jsx)("span",{children:"Junior"})," "]}),Object(d.jsxs)(j.b,{className:u.a.navlink,activeClassName:u.a.active,to:"/junior+",children:["  ",Object(d.jsx)("span",{children:"Junior+"})," "]})]})},h=n(2),x=n(13),O=n.n(x);var m=function(e){var t=e.avatar,n=e.name,r=e.message,a=e.time;return Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("img",{src:t}),Object(d.jsxs)("div",{className:O.a.dialog,children:[Object(d.jsx)("div",{className:O.a.name,children:n}),Object(d.jsxs)("div",{className:O.a.textMessage,children:[r,"   "]}),Object(d.jsx)("div",{className:O.a.time,children:a})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Some Name",f="some text",_="22:00";var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(m,{avatar:p,name:v,message:f,time:_}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=n(7);var k=function(e){return Object(d.jsxs)("div",{children:[e.title,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{title:t.name,affair:t,deleteAffairCallback:e.deleteAffairCallback,id:t._id},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(r.useState)(y),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i})]})},w=n(33),I=n(21),A=n.n(I),H=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?A.a.error:A.a.someClass;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:s}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("button",{onClick:r,disabled:!t,children:"add"}),Object(d.jsx)("span",{children:c})]})},M=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(C.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],b=t.length;return Object(d.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("where name?"))},addUser:function(){n(s),alert("Hello ".concat(s," !"))},error:l,totalUsers:b})},T=n(32);var E=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(M,{users:n,addUserCallback:function(e){var t={_id:Object(T.v1)(),name:e};a([].concat(Object(w.a)(n),[t]))}})]})},F=n(11),P=n(12),U=n(16),W=n.n(U),J=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(W.a.error," ").concat(s||""),j="".concat(W.a.input," ").concat(c?W.a.errorInput:W.a.superInput);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},i)),c&&Object(d.jsx)("span",{className:o,children:c})]})},B=n(22),q=n.n(B),G=n(23),K=n.n(G),Z=function(e){var t=e.red,n=e.className,r=Object(P.a)(e,["red","className"]),a="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(d.jsx)("button",Object(F.a)({className:a},r))},L=n(24),Q=n.n(L),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(J,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(J,{className:q.a.blue}),Object(d.jsx)(Z,{children:"default"}),Object(d.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(Z,{disabled:!0,children:"disabled"}),Object(d.jsx)(R,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(R,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var X=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)(S,{}),Object(d.jsx)(E,{}),Object(d.jsx)(V,{})]})};var D=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var Y=function(){return Object(d.jsx)("div",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442"})};var $=function(){return Object(d.jsx)("div",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442"})},z="/pre-junior",ee="/junior",te="/junior+";var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(h.a,{to:z})}}),Object(d.jsx)(h.b,{path:z,render:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(h.b,{path:ee,render:function(){return Object(d.jsx)(Y,{})}}),Object(d.jsx)(h.b,{path:te,render:function(){return Object(d.jsx)($,{})}}),"// add routes",Object(d.jsx)(h.b,{render:function(){return Object(d.jsx)(D,{})}})]})})};var re=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(ne,{})]})})};var ae=function(){return Object(d.jsx)("div",{className:o.a.App,children:Object(d.jsx)(re,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports={navbar:"Header_navbar__1PIbh",navlink:"Header_navlink__cd6GI",active:"Header_active__1yZ7y"}}},[[47,1,2]]]);
//# sourceMappingURL=main.f4f4e995.chunk.js.map