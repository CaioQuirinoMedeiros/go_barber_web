(window.webpackJsonpgo_barber_web=window.webpackJsonpgo_barber_web||[]).push([[0],{156:function(n,e,t){n.exports=t.p+"static/media/logo-roxa.910146c3.svg"},164:function(n,e,t){n.exports=t(335)},335:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(35),i=t.n(o),c=t(30),l=t(20),s=t(147),u=t(21),p=t(160),d=t(68),f=t(159),b=t(17),m=t(148),h=t.n(m),g=t(64),v={token:null,signed:!1,loading:!1};var x={profile:null};var E=Object(b.c)({auth:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;return Object(g.a)(n,function(t){switch(e.type){case"@auth/SIGN_IN_REQUEST":t.loading=!0;break;case"@auth/SIGN_IN_SUCCESS":t.token=e.payload.token,t.signed=!0,t.loading=!1;break;case"@auth/SIGN_UP_REQUEST":t.loading=!0;break;case"@auth/SIGN_UP_SUCCESS":case"@auth/SIGN_FAILURE":t.loading=!1;break;case"@auth/SIGN_OUT":t.signed=!1,t.token=null;break;default:return n}})},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;return Object(g.a)(n,function(t){switch(e.type){case"@auth/SIGN_IN_SUCCESS":t.profile=e.payload.user;break;case"@user/UPDATE_PROFILE_SUCCESS":t.profile=e.payload.profile;break;case"@auth/SIGN_OUT":t.profile=null;break;default:return n}})}}),O=t(10),j=t.n(O),w=t(15),y=t(149),k=t.n(y).a.create({baseURL:"https://go-barber-api-caio.herokuapp.com"}),S=t(18),_=Object(S.a)({basename:""});function I(n,e){return{type:"@auth/SIGN_IN_SUCCESS",payload:{token:n,user:e}}}var C=j.a.mark(P),U=j.a.mark(N);function P(n){var e,t,a,r,o,i,c;return j.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e=n.payload,t=e.email,a=e.password,l.prev=2,l.next=5,Object(w.b)(k.post,"sessions",{email:t,password:a});case 5:if(r=l.sent,o=r.data,i=o.token,(c=o.user).provider){l.next=11;break}throw u.b.error("Voc\xea n\xe3o \xe9 um provedor de servi\xe7o"),new Error;case 11:return l.next=13,Object(w.c)(I(i,c));case 13:_.push("/dashboard"),u.b.success("Bem-vindo"),l.next=22;break;case 17:return l.prev=17,l.t0=l.catch(2),u.b.error(l.t0.response.data.error||"Falha na autentica\xe7\xe3o, verifique seus dados"),l.next=22,Object(w.c)({type:"@auth/SIGN_FAILURE"});case 22:case"end":return l.stop()}},C,null,[[2,17]])}function N(n){var e,t,a,r,o;return j.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return e=n.payload,i.prev=1,t=e.name,a=e.email,r=e.password,o=e.passwordConfirmation,i.next=5,Object(w.b)(k.post,"users",{name:t,email:a,password:r,passwordConfirmation:o,provider:!0});case 5:_.push("/"),u.b.success("Cadastro criado com sucesso"),i.next=14;break;case 9:return i.prev=9,i.t0=i.catch(1),u.b.error(i.t0.response.data.error||"Falha no cadastro, verifique seus dados"),i.next=14,Object(w.c)({type:"@auth/SIGN_FAILURE"});case 14:case"end":return i.stop()}},U,null,[[1,9]])}var R=Object(w.a)([Object(w.d)("persist/REHYDRATE",function(n){var e=n.payload;if(e){var t=e.auth.token;t&&(k.defaults.headers.Authorization="Bearer ".concat(t))}}),Object(w.d)("@auth/SIGN_IN_REQUEST",P),Object(w.d)("@auth/SIGN_UP_REQUEST",N),Object(w.d)("@auth/SIGN_OUT",function(){_.push("/")})]),G=t(65);function z(n){return{type:"@user/UPDATE_PROFILE_SUCCESS",payload:{profile:n}}}var A=j.a.mark(T);function T(n){var e,t,a,r,o,i,c,l,s;return j.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return e=n.payload,t=e.data,a=t.name,r=t.email,o=t.avatar_id,i=Object(G.a)(t,["name","email","avatar_id"]),c=Object.assign({name:a,email:r,avatar_id:o},i.password?i:{}),p.prev=3,p.next=6,Object(w.b)(k.put,"/users",c);case 6:return l=p.sent,s=l.data,p.next=10,Object(w.c)(z(s));case 10:u.b.success("Perfil atualizado com sucesso"),p.next=18;break;case 13:return p.prev=13,p.t0=p.catch(3),p.next=17,Object(w.c)({type:"@user/UPDATE_PROFILE_FAILURE"});case 17:u.b.error(p.t0.response.data.error||"Erro ao atualizar perfil, confira seus dados");case 18:case"end":return p.stop()}},A,null,[[3,13]])}var D=Object(w.a)([Object(w.d)("@user/UPDATE_PROFILE_REQUEST",T)]),F=j.a.mark(q);function q(){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(w.a)([R,D]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},F)}var L,Q=Object(p.a)(),M=[Q],B=function(n,e){var t=b.d;return Object(b.e)(n,t(b.a.apply(void 0,Object(f.a)(e))))}((L=E,Object(d.a)({key:"go_barber",storage:h.a,whitelist:["auth","user"]},L)),M),J=Object(d.b)(B);Q.run(q);var V=t(8),H=t(9),X=t(38);function Y(){var n=Object(V.a)(["\n  width: 100%;\n  max-width: 315px;\n  text-align: center;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30px;\n\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: none;\n      border-radius: 4px;\n      height: 44px;\n      padding: 15px;\n      color: #fff;\n      margin: 0 0 10px;\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n\n    span {\n      color: #fc6f95;\n      align-self: flex-start;\n      margin: 0 0 10px;\n    }\n\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: #3b9eff;\n      font-weight: bold;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: all 0.3s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n\n    a {\n      color: #fff;\n      margin-top: 15px;\n      font-size: 16px;\n      opacity: 0.8;\n      transition: all 0.15s;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  height: 100%;\n\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n"]);return Z=function(){return n},n}var K=H.c.div(Z()),W=H.c.div(Y(),Object(X.a)(.05,"#3b9eff"));function $(n){var e=n.children;return r.a.createElement(K,null,r.a.createElement(W,null,e))}var nn=t(26),en=t(154),tn=t(37),an=t(28),rn=t(50),on=t(345),cn=t(337),ln=t(66),sn=t.n(ln),un=t(155),pn=t.n(un);function dn(){var n=Object(V.a)(["\n  max-height: 260px;\n  padding: 5px 15px;\n"]);return dn=function(){return n},n}function fn(){var n=Object(V.a)(["\n  color: ",";\n\n  & + div {\n    margin-top: 15px;\n    padding-top: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n  }\n\n  p {\n    font-size: 13px;\n    line-height: 18px;\n  }\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 5px;\n\n    time {\n      font-size: 12px;\n      opacity: 0.6;\n    }\n\n    button {\n      height: 8px;\n      width: 8px;\n      background: #ff892c;\n      border-radius: 50%;\n      transition: all 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return fn=function(){return n},n}function bn(){var n=Object(V.a)(["\n  display: ",';\n  width: 300px;\n  position: absolute;\n  top: calc(100% + 30px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 4px;\n  padding: 15px 5px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: -20px;\n    width: 0;\n    height: 0;\n    border-left: 20px solid transparent;\n    border-right: 20px solid transparent;\n    border-bottom: 20px solid rgba(0, 0, 0, 0.6);\n  }\n']);return bn=function(){return n},n}function mn(){var n=Object(V.a)(['\n      &::after {\n        position: absolute;\n        right: 0;\n        top: 0;\n        width: 8px;\n        height: 8px;\n        background: #ff892e;\n        content: "";\n        border-radius: 50%;\n      }\n    ']);return mn=function(){return n},n}function hn(){var n=Object(V.a)(["\n  position: relative;\n\n  ","\n"]);return hn=function(){return n},n}function gn(){var n=Object(V.a)(["\n  position: relative;\n"]);return gn=function(){return n},n}var vn=H.c.div(gn()),xn=H.c.button(hn(),function(n){return n.hasUnread&&Object(H.b)(mn())}),En=H.c.div(bn(),function(n){return n.visible?"block":"none"}),On=H.c.div(fn(),function(n){return n.unread?"#fff":"rgba(255,255,255,0.6)"},Object(X.b)(.15,"#ff892c")),jn=Object(H.c)(pn.a)(dn());function wn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,a)}return t}function yn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?wn(t,!0).forEach(function(e){Object(en.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wn(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function kn(){var n=Object(a.useState)(!1),e=Object(an.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)([]),c=Object(an.a)(i,2),l=c[0],s=c[1],u=Object(a.useRef)(null),p=Object(a.useMemo)(function(){return!l.every(function(n){return n.read})},[l]);function d(n){var e=u.current;e&&!e.contains(n.target)&&o(!1)}function f(){return(f=Object(tn.a)(j.a.mark(function n(e){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.put("/notifications/".concat(e));case 2:s(l.map(function(n){return n._id===e?yn({},n,{read:!0}):n}));case 3:case"end":return n.stop()}},n)}))).apply(this,arguments)}return Object(a.useEffect)(function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}},[]),Object(a.useEffect)(function(){function n(){return(n=Object(tn.a)(j.a.mark(function n(){var e,t,a;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.get("/notifications");case 2:e=n.sent,t=e.data,a=t.map(function(n){return yn({},n,{timeDistance:Object(on.a)(Object(cn.a)(n.createdAt),{addSuffix:!0,locale:sn.a})})}),s(a);case 6:case"end":return n.stop()}},n)}))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},[]),r.a.createElement(vn,null,r.a.createElement(xn,{hasUnread:p,onClick:function(){o(!0)}},r.a.createElement(rn.c,{color:"#7159c1",size:20})),r.a.createElement(En,{visible:t,ref:u},r.a.createElement(jn,{className:"perfect-scrollbar"},l.map(function(n){return r.a.createElement(On,{key:n._id,unread:!n.read},r.a.createElement("p",null,n.content),r.a.createElement("div",null,r.a.createElement("time",null,n.timeDistance),!n.read&&r.a.createElement("button",{type:"button",onClick:function(){return function(n){return f.apply(this,arguments)}(n._id)}})))}))))}var Sn=t(156),_n=t.n(Sn);function In(){var n=Object(V.a)(["\n  display: flex;\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #eee;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #333;\n    }\n\n    a {\n      display: block;\n      margin-top: 2px;\n      font-size: 12px;\n      color: #999;\n      transition: all 0.2s;\n\n      &:hover {\n        color: #555;\n      }\n    }\n  }\n\n  img {\n    height: 32px;\n    width: 32px;\n    border-radius: 50%;\n  }\n"]);return In=function(){return n},n}function Cn(){var n=Object(V.a)(["\n  height: 64px;\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  nav {\n    display: flex;\n    align-items: center;\n\n    img {\n      margin-right: 20px;\n      padding-right: 20px;\n      border-right: 1px solid #eee;\n    }\n\n    a {\n      font-weight: bold;\n      color: #7159c1;\n    }\n  }\n\n  aside {\n    display: flex;\n    align-items: center;\n  }\n"]);return Cn=function(){return n},n}function Un(){var n=Object(V.a)(["\n  background: #fff;\n  padding: 0 30px;\n"]);return Un=function(){return n},n}var Pn=H.c.div(Un()),Nn=H.c.div(Cn()),Rn=H.c.div(In());function Gn(){var n=Object(l.c)(function(n){return n.user}).profile;return r.a.createElement(Pn,null,r.a.createElement(Nn,null,r.a.createElement("nav",null,r.a.createElement("img",{src:_n.a,alt:"GoBarber"}),r.a.createElement(nn.a,{to:"/dashboard"},"Dashboard")),r.a.createElement("aside",null,r.a.createElement(kn,null),r.a.createElement(Rn,null,r.a.createElement("div",null,r.a.createElement("strong",null,n.name),r.a.createElement(nn.a,{to:"/profile"},"Meu perfil")),r.a.createElement("img",{src:n.avatar?n.avatar.url:"https://api.adorable.io/avatars/50/abott@adorable.png",alt:"Caio"})))))}function zn(){var n=Object(V.a)(["\n  height: 100%;\n  min-height: 100vh;\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n"]);return zn=function(){return n},n}var An=H.c.div(zn());function Tn(n){var e=n.children;return r.a.createElement(An,null,r.a.createElement(Gn,null),e)}function Dn(n){var e=n.component,t=n.isPrivate,a=Object(G.a)(n,["component","isPrivate"]),o=B.getState().auth.signed;if(!o&&t)return r.a.createElement(c.a,{to:"/"});if(o&&!t)return r.a.createElement(c.a,{to:"/dashboard"});var i=o?Tn:$;return r.a.createElement(c.b,Object.assign({},a,{render:function(n){return r.a.createElement(i,null,r.a.createElement(e,n))}}))}Dn.defaultPropts={isPrivate:!1};var Fn=t(13),qn=t(14),Ln=t(67),Qn=t.n(Ln),Mn=qn.object().shape({email:qn.string().email("Este n\xe3o \xe9 um e-mail v\xe1lido").required("Insira seu e-mail"),password:qn.string().required("Insira sua senha")});function Bn(){var n=Object(l.b)(),e=Object(l.c)(function(n){return n.auth}).loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:Qn.a,alt:"GoBarber"}),r.a.createElement(Fn.a,{onSubmit:function(e){var t=e.email,a=e.password;n(function(n,e){return{type:"@auth/SIGN_IN_REQUEST",payload:{email:n,password:e}}}(t,a))},schema:Mn},r.a.createElement(Fn.b,{type:"email",name:"email",placeholder:"Seu e-mail"}),r.a.createElement(Fn.b,{type:"password",name:"password",placeholder:"Sua senha secreta"}),r.a.createElement("button",{type:"submit"},e?"Carregando...":"Acessar"),r.a.createElement(nn.a,{to:"/register"},"Criar conta gratuita")))}var Jn=qn.object().shape({name:qn.string().required("O nome \xe9 obrigat\xf3rio"),email:qn.string().email("Insira um e-mail v\xe1lido").required("O e-mail \xe9 obrigat\xf3rio"),password:qn.string().min(6,"A senha precisar ter no m\xednimo 6 caracteres").required("A senha \xe9 obrigat\xf3ria"),passwordConfirmation:qn.string().required("Confirme a sua senha").oneOf([qn.ref("password")],"As senhas n\xe3o conferem")});function Vn(){var n=Object(l.b)(),e=Object(l.c)(function(n){return n.auth}).loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:Qn.a,alt:"GoBarber"}),r.a.createElement(Fn.a,{onSubmit:function(e){var t=e.name,a=e.email,r=e.password,o=e.passwordConfirmation;n(function(n,e,t,a){return{type:"@auth/SIGN_UP_REQUEST",payload:{name:n,email:e,password:t,passwordConfirmation:a}}}(t,a,r,o))},schema:Jn},r.a.createElement(Fn.b,{name:"name",placeholder:"Nome completo"}),r.a.createElement(Fn.b,{type:"email",name:"email",placeholder:"E-mail"}),r.a.createElement(Fn.b,{type:"password",name:"password",placeholder:"Senha secreta"}),r.a.createElement(Fn.b,{type:"password",name:"passwordConfirmation",placeholder:"Confirme sua senha secreta"}),r.a.createElement("button",{type:"submit"},e?"Carregando...":"Criar conta"),r.a.createElement(nn.a,{to:"/"},"J\xe1 tenho login")))}var Hn=t(346),Xn=t(344),Yn=t(338),Zn=t(339),Kn=t(340),Wn=t(341),$n=t(342),ne=t(343),ee=t(158);function te(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border-radius: 4px;\n  background: #fff;\n  opacity: ",";\n\n  strong {\n    color: ",";\n    font-size: 20px;\n    font-weight: normal;\n  }\n\n  span {\n    margin-top: 3px;\n    color: ",";\n  }\n"]);return te=function(){return n},n}function ae(){var n=Object(V.a)(["\n  max-width: 600px;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n\n  header {\n    display: flex;\n    align-self: center;\n    align-items: center;\n\n    strong {\n      color: #fff;\n      font-size: 24px;\n      margin: 0 15px;\n    }\n  }\n\n  ul {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 15px;\n    margin-top: 15px;\n  }\n"]);return ae=function(){return n},n}var re=H.c.div(ae()),oe=H.c.li(te(),function(n){return n.past?"0.6":"1"},function(n){return n.available?"#999":"#7159c1"},function(n){return n.available?"#999":"#666"}),ie=[8,9,10,11,12,13,14,15,16,17,18,19,20];function ce(){var n=Object(a.useState)([]),e=Object(an.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(new Date),c=Object(an.a)(i,2),l=c[0],s=c[1],u=Object(a.useMemo)(function(){return Object(Xn.a)(l,"d 'de' MMMM",{locale:sn.a})},[l]);return Object(a.useEffect)(function(){function n(){return(n=Object(tn.a)(j.a.mark(function n(){var e,t,a;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.get("/schedule",{params:{date:l}});case 2:e=n.sent,t=Intl.DateTimeFormat().resolvedOptions().timeZone,a=ie.map(function(n){var a=Object(Yn.a)(Object(Zn.a)(Object(Kn.a)(l,n),0),0),r=Object(Hn.a)(a,t);return{time:"".concat(n,":00"),past:Object(Wn.a)(r),appointment:e.data.find(function(n){return Object($n.a)(Object(cn.a)(n.date),r)})}}),o(a);case 6:case"end":return n.stop()}},n)}))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},[l]),r.a.createElement(re,null,r.a.createElement("header",null,r.a.createElement("button",{type:"button",onClick:function(){s(Object(ne.a)(l,1))}},r.a.createElement(rn.a,{size:36,color:"#fff"})),r.a.createElement("strong",null,u),r.a.createElement("button",{type:"button",onClick:function(){s(Object(ee.a)(l,1))}},r.a.createElement(rn.b,{size:36,color:"#fff"}))),r.a.createElement("ul",null,t.map(function(n){return r.a.createElement(oe,{key:n.time,past:n.past,available:!n.appointment},r.a.createElement("strong",null,n.time),r.a.createElement("span",null,n.appointment?n.appointment.user.name:"Em aberto"))})))}function le(){var n=Object(V.a)(["\n  align-self: center;\n  margin-bottom: 20px;\n\n  label {\n    cursor: pointer;\n    transition: all 0.3s;\n\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n\n  img {\n    height: 120px;\n    width: 120px;\n    border-radius: 50%;\n    border: 3px solid rgba(255, 255, 255, 0.3);\n    background: #eee;\n  }\n\n  input {\n    display: none;\n  }\n"]);return le=function(){return n},n}var se=H.c.div(le());function ue(n){var e=n.name,t=Object(a.useRef)(null),o=Object(Fn.c)("avatar").defaultValue,i=Object(Fn.c)(e),c=i.defaultValue,l=i.registerField,s=Object(a.useState)(c||null),p=Object(an.a)(s,2),d=p[0],f=p[1],b=Object(a.useState)(o&&o.url),m=Object(an.a)(b,2),h=m[0],g=m[1];function v(){return(v=Object(tn.a)(j.a.mark(function n(e){var t,a,r,o,i;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(t=new FormData).append("file",e.target.files[0]),n.next=5,k.post("/files",t);case 5:a=n.sent,r=a.data,o=r.id,i=r.url,f(o),g(i),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),u.b.error("Erro ao carregar imagem");case 14:case"end":return n.stop()}},n,null,[[0,11]])}))).apply(this,arguments)}return Object(a.useEffect)(function(){l({name:e,ref:t.current,path:"dataset.file"})},[t.current]),r.a.createElement(se,null,r.a.createElement("label",{htmlFor:"avatar"},r.a.createElement("img",{src:h||"https://api.adorable.io/avatars/120/abott@adorable.png",alt:"profile"}),r.a.createElement("input",{name:e,type:"file",id:"avatar",accept:"image/*","data-file":d,onChange:function(n){return v.apply(this,arguments)},ref:t})))}function pe(){var n=Object(V.a)(["\n  max-width: 600px;\n  height: 100%;\n  margin: 20px auto;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: none;\n      border-radius: 4px;\n      height: 44px;\n      padding: 15px;\n      color: #fff;\n      margin: 0 0 10px;\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n\n    span {\n      color: #fc6f95;\n      align-self: flex-start;\n      margin: 0 0 10px;\n    }\n\n    hr {\n      border: none;\n      height: 1px;\n      background: rgba(255, 255, 255, 0.2);\n      margin: 10px 0 20px;\n    }\n\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: #3b9eff;\n      font-weight: bold;\n      color: #fff;\n      border: none;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: all 0.3s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n\n    a {\n      color: #fff;\n      margin-top: 15px;\n      font-size: 16px;\n      opacity: 0.8;\n      transition: all 0.15s;\n\n      &:hover {\n        opacity: 1;\n      }\n    }\n  }\n\n  > button {\n    width: 100%;\n    margin: 10px 0 0;\n    height: 44px;\n    background: #f64c75;\n    font-weight: bold;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    font-size: 16px;\n    transition: all 0.3s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return pe=function(){return n},n}var de=H.c.div(pe(),Object(X.a)(.05,"#3b9eff"),Object(X.a)(.08,"#f64c75")),fe=qn.object().shape({name:qn.string().required("O nome \xe9 obrigat\xf3rio"),email:qn.string().email("Insira um e-mail v\xe1lido").required("O e-mail \xe9 obrigat\xf3rio"),oldPassword:qn.string().when("password",function(n,e){return n?e.required("Preencha a sua senha atual"):e}),password:qn.string(),passwordConfirmation:qn.string().oneOf([qn.ref("password")],"As senhas n\xe3o conferem").when("password",function(n,e){return n?e.required("Confirme a sua senha"):e}),avatar_id:qn.string()});function be(){var n=Object(l.c)(function(n){return n.user}).profile,e=Object(l.b)();return r.a.createElement(de,null,r.a.createElement(Fn.a,{onSubmit:function(n){e(function(n){return{type:"@user/UPDATE_PROFILE_REQUEST",payload:{data:n}}}(n))},schema:fe,initialData:n},r.a.createElement(ue,{name:"avatar_id"}),r.a.createElement(Fn.b,{name:"name",placeholder:"Nome completo"}),r.a.createElement(Fn.b,{type:"email",name:"email",placeholder:"E-mail"}),r.a.createElement("hr",null),r.a.createElement(Fn.b,{type:"password",name:"oldPassword",placeholder:"Senha atual"}),r.a.createElement(Fn.b,{type:"password",name:"password",placeholder:"Nova senha"}),r.a.createElement(Fn.b,{type:"password",name:"passwordConfirmation",placeholder:"Confirme sua nova senha"}),r.a.createElement("button",{type:"submit"},"Atualizar perfil")),r.a.createElement("button",{type:"button",onClick:function(){e({type:"@auth/SIGN_OUT"})}},"Sair"))}function me(){return r.a.createElement("div",null,"404")}function he(){return r.a.createElement(c.d,null,r.a.createElement(Dn,{path:"/",exact:!0,component:Bn}),r.a.createElement(Dn,{path:"/register",component:Vn}),r.a.createElement(Dn,{path:"/dashboard",component:ce,isPrivate:!0}),r.a.createElement(Dn,{path:"/profile",component:be,isPrivate:!0}),r.a.createElement(Dn,{path:"*",component:me}))}t(333),t(334);function ge(){var n=Object(V.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    outline: none;\n    box-sizing: border-box;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: #f5f5f5;\n      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: #999;\n      outline: 1px solid slategrey;\n    }\n  }\n\n  body, html, #root {\n    min-height: 100vh;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    font-size: 14px;\n    font-family: 'Roboto', Arial, sans-serif;\n  }\n\n  a {\n    text-decoration: none\n  }\n\n  button {\n    font-family: inherit;\n    border: none;\n    background: none;\n    cursor: pointer;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  .perfect-scrollbar {\n    .ps__rail-y,\n    .ps__rail-x {\n      background: none !important;\n    }\n\n    .ps__thumb-y,\n    .ps__thumb-x {\n      width: 6px !important;\n    }\n  }\n"]);return ge=function(){return n},n}var ve=Object(H.a)(ge());var xe=function(){return r.a.createElement(l.a,{store:B},r.a.createElement(s.a,{persistor:J},r.a.createElement(c.c,{history:_},r.a.createElement(he,null),r.a.createElement(ve,null),r.a.createElement(u.a,{autoClose:3500,pauseOnHover:!1}))))};i.a.render(r.a.createElement(xe,null),document.getElementById("root"))},67:function(n,e,t){n.exports=t.p+"static/media/logo.5228e44e.svg"}},[[164,1,2]]]);
//# sourceMappingURL=main.2e82f604.chunk.js.map