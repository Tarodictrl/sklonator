(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{110:function(e,t,a){e.exports=a(216)},205:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);a(111),a(137),a(139),a(140),a(142),a(143),a(144),a(145),a(146),a(147),a(148),a(149),a(151),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(174),a(175),a(176),a(177),a(178),a(179);var n=a(0),r=a.n(n),c=a(69),l=a.n(c),o=a(28),s=a.n(o),u=a(45),i=a.n(u),m=a(73),f=a(41),p=a(71),d=a.n(p),b=a(108),h=a.n(b),E=a(40),v=a.n(E),S=a(74),g=a.n(S),y=(a(189),a(49)),O=a.n(y),k=a(50),j=a.n(k),U=a(51),w=a.n(U),A=(a(190),a(191),function(e){var t=e.id,a=(e.go,e.fetchedUser);return r.a.createElement(O.a,{id:t},r.a.createElement(j.a,null,"\u0421\u043a\u043b\u043e\u043d\u044f\u0442\u043e\u0440"),a&&r.a.createElement(w.a,{title:"User Data Fetched with VK Bridge"}))}),x=(a(203),a(204),a(52)),I=a.n(x),C=a(70),K=a.n(C),T=a(72),V=a.n(T),W=(a(205),function(e){var t=e.id,a=e.snackbarError,c=e.fetchedUser,l=e.userHasSeenIntro,o=e.go;return r.a.createElement(O.a,{id:t,centered:!0},r.a.createElement(j.a,null,"\u0421\u043a\u043b\u043e\u043d\u044f\u0442\u043e\u0440"),!l&&c&&r.a.createElement(n.Fragment,null,r.a.createElement(w.a,null,r.a.createElement(I.a,{className:"User"},c.photo_200&&r.a.createElement(v.a,{src:c.photo_200}),r.a.createElement("h2",null," \u041f\u0440\u0438\u0432\u0435\u0442, ",c.first_name,"! "),r.a.createElement("h3",null," \u042d\u0442\u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0441\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044f \u043f\u043e \u043f\u0430\u0434\u0435\u0436\u0430\u043c \u0441\u043b\u043e\u0432 \u0438 \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0439."))),r.a.createElement(K.a,{vertical:"bottom"},r.a.createElement(I.a,null,r.a.createElement(V.a,{mode:"commerce",size:"xl",onClick:o},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))),a)}),z="home",J="intro",N={STATUS:"status"},_=function(){var e=Object(n.useState)(J),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(f.a)(l,2),u=o[0],p=o[1],b=Object(n.useState)(r.a.createElement(h.a,{size:"large"})),E=Object(f.a)(b,2),S=E[0],y=E[1],O=Object(n.useState)(!1),k=Object(f.a)(O,2),j=k[0],U=k[1],w=Object(n.useState)(!1),x=Object(f.a)(w,2),I=x[0],C=x[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,s.a.send("VKWebAppStorageGet",{keys:Object.values(N)});case 5:a=e.sent,console.log(a),n={},a.keys.forEach((function(e){var t=e.key,a=e.value;try{switch(n[t]=a?JSON.parse(a):{},t){case N.STATUS:n[t].HasSeenIntro&&(c(z),U(!0))}}catch(l){C(r.a.createElement(I,{layout:"vertical",onClose:function(){return C(null)},before:r.a.createElement(v.a,{size:24,style:{backaroundColor:"var(--dynamic-red)"}},r.a.createElement(g.a,{fill:"#fff",width:"14",height:"14"})),duration:900},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 Storage"))}})),p(t),y(null);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var K=function(e){c(e)},T=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.send("VKWebAppStorageSet",{key:N.STATUS,value:JSON.stringify({hasSeenIntro:!0})});case 3:K(z),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),C(r.a.createElement(I,{layout:"vertical",onClose:function(){return C(null)},before:r.a.createElement(v.a,{size:24,style:{backaroundColor:"var(--dynamic-red)"}},r.a.createElement(g.a,{fill:"#fff",width:"14",height:"14"})),duration:900},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 Storage"));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{activePanel:a,popout:S},r.a.createElement(A,{id:z,fetchedUser:u,go:K,snackbarError:I}),r.a.createElement(W,{id:J,fetchedUser:u,go:T,snackbarError:I,userHasSeenIntro:j}))};s.a.send("VKWebAppInit"),l.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.430778e7.chunk.js.map