(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,r){e.exports=r(33)},32:function(e,a,r){},33:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),l=r(11),c=r.n(l),s=r(3),i=r(1),o=function(){var e=Object(i.g)();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Iniciar sesi\xf3n"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){e("/",{replace:!0})}},"Iniciar sesi\xf3n"))},m=function(){var e=Object(i.g)();return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(s.c,{className:"nav-item nav-link",to:"/marvel"},"Marvel"),n.a.createElement(s.c,{className:"nav-item nav-link",to:"/dc"},"DC"),n.a.createElement(s.c,{className:"nav-item nav-link",to:"/search"},"Search"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},"Edier"),n.a.createElement("button",{className:"btn nav-item nav-link",onClick:function(){e("login",{replace:!0})}},"Logout"))))},u=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],p=function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("".concat(e," is not a valid publisher."));return u.filter(function(a){return a.publisher===e})},h=function(e){var a=e.id,r=e.superhero,t=(e.publisher,e.alter_ego),l=e.first_appearance,c=e.characters,i="".concat("/heroesApp-react","/assets/img/").concat(a,".jpg");return n.a.createElement("div",{className:"col animate__animated animate__fadeIn"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:i,alt:r,className:"card-img"})),n.a.createElement("div",{className:"col-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},r),n.a.createElement("p",{className:"card-text"},t),t!==c&&n.a.createElement("p",{className:"text-muted"},c),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"},l)),n.a.createElement(s.b,{to:"/hero/".concat(a)},"M\xe1s..."))))))},d=function(e){var a=e.publisher,r=Object(t.useMemo)(function(){return p(a)},[a]);return n.a.createElement("div",{className:"row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn"},r.map(function(e){return n.a.createElement(h,Object.assign({key:e.id},e))}))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Dc Screen"),n.a.createElement("hr",null),n.a.createElement(d,{publisher:"DC Comics"}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u.find(function(a){return a.id===e})},b=function(){var e=Object(i.h)().id,a=Object(i.g)(),r=Object(t.useMemo)(function(){return E(e)},[e]);if(!r)return n.a.createElement(i.a,{to:"/"});return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"".concat("/heroesApp-react","/assets/img/").concat(e,".jpg"),alt:r.superhero,className:"img-thumbnail animate__animated animate__fadeInLeft"})),n.a.createElement("div",{className:"col-8 animate__animated animate__fadeIn"},n.a.createElement("h3",null,r.superhero),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Alter ago:")," ",r.alter_ego),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"Publisher:")," ",r.publisher),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"First Appearance:")," ",r.first_appearance)),n.a.createElement("h5",{className:"mt-3"},"Characters"),n.a.createElement("p",null,r.characters),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){a(-1)}},"Regresar")))},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Marvel Screen"),n.a.createElement("hr",null),n.a.createElement(d,{publisher:"Marvel Comics"}))},g=r(4),C=r(12),_=r.n(C),N=r(5),M=r(8),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(g.a)(a,2),n=r[0],l=r[1];return[n,function(e){var a=e.target,r=a.name,t=a.value;l(Object(M.a)(Object(M.a)({},n),{},Object(N.a)({},r,t)))},function(){l(e)}]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e.trim()?[]:(e=e.trim().toLowerCase(),u.filter(function(a){return a.superhero.toLowerCase().includes(e)}))},D=function(){var e=Object(i.g)(),a=Object(i.f)(),r=_.a.parse(a.search).q,l=void 0===r?"":r,c=k({searchText:l}),s=Object(g.a)(c,2),o=s[0].searchText,m=s[1],u=Object(t.useMemo)(function(){return y(l)},[l]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"B\xfasquedas"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null,"Search Form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e("?q=".concat(o))}},n.a.createElement("input",{type:"text",placeholder:"Buscar un h\xe9roe",className:"form-control",name:"searchText",autoComplete:"off",value:o,onChange:m}),n.a.createElement("button",{className:"btn btn-outline-primary m-2",type:"submit"},"Buscar"))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null,"Resultados"),n.a.createElement("hr",null),""===l?n.a.createElement("div",{className:"alert alert-info"},"Buscar un h\xe9roe..."):0===u.length&&n.a.createElement("div",{className:"alert alert-danger"},"No hay resultados para ",n.a.createElement("b",null,l),"."),u.map(function(e){return n.a.createElement(h,Object.assign({key:e.id},e))}))))},w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement("div",{className:"container"},n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"dc",element:n.a.createElement(v,null)}),n.a.createElement(i.b,{path:"hero/:id",element:n.a.createElement(b,null)}),n.a.createElement(i.b,{path:"marvel",element:n.a.createElement(f,null)}),n.a.createElement(i.b,{path:"search",element:n.a.createElement(D,null)}),n.a.createElement(i.b,{path:"/",element:n.a.createElement(f,null)}))))},S=function(){return n.a.createElement(s.a,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"login",element:n.a.createElement(o,null)}),n.a.createElement(i.b,{path:"/*",element:n.a.createElement(w,null)})))};var O=function(){return n.a.createElement(S,null)};r(32);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c65ec5bb.chunk.js.map