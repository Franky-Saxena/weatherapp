(this.webpackJsonptempreact=this.webpackJsonptempreact||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),r=(n(11),n(4)),j=n.n(r),o=n(6),u=n(2),l=(n(13),n(0)),b=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(u.a)(s,2),r=(i[0],i[1],Object(c.useState)("mumbai")),b=Object(u.a)(r,2),m=b[0],p=b[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&units=metric&appid=42e90b9a7637705bc7c285fe124bf97b"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a(c.main),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{className:"inputData",children:Object(l.jsx)("input",{type:"search",className:"inputField",onChange:function(e){p(e.target.value)}})}),n?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("h1",{className:"location",children:[Object(l.jsx)("i",{className:"fas fa-street-view"}),m]}),Object(l.jsxs)("h2",{className:"temp",children:[n.temp,"\xb0Cel"]}),Object(l.jsxs)("h3",{className:"tempmin_max",children:[" Min : ",n.temp_min,"\xb0Cel | Max : ",n.temp_max,"\xb0Cel "]})]}),Object(l.jsx)("div",{className:"wave -one"}),Object(l.jsx)("div",{className:"wave -two"}),Object(l.jsx)("div",{className:"wave -three"})]}):Object(l.jsx)("p",{className:"errorMsg",children:"No Data Found"})]})})};n(15);var m=function(){return Object(l.jsx)(b,{})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.9fb05c73.chunk.js.map