(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,n,t){e.exports=t.p+"static/media/background-valley.de907e3d.jpg"},225:function(e,n,t){e.exports=t(376)},376:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),i=t.n(c),o=t(23),u=t(140),m=t(17),l=t(20),s=t(82),d=t.n(s),p=Object(m.createMuiTheme)({palette:{primary:d.a}}),f=t(24),h=t(83),v={commitments:[]},b=Object(f.c)({plannerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_COMMITMENTS":return Object(h.a)(Object(h.a)({},e),{},{commitments:n.payload.commitments});default:return e}}}),g=t(19),y=t(34),E=t(35),O=t(37),j=t(36),w=t(52),x=t(21),C=t(41),k=t.n(C),S=t(84),T=t(85),D=t.n(T),_="https://us-central1-missao-newton.cloudfunctions.net/generic/joao-meira",F=function(){return function(){var e=Object(S.a)(k.a.mark(function e(n){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(_));case 3:t=e.sent,n({type:"SET_COMMITMENTS",payload:{commitments:t.data}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(n){return e.apply(this,arguments)}}()},M=t(50);function I(){var e=Object(g.a)(["\n  width: 40%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: end;\n"]);return I=function(){return e},e}function N(){var e=Object(g.a)(["\n    padding: 0 3vw;\n    width: 95vw;\n    height: 10%;\n    background-color: #d0cba6;\n    margin: 1vw 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-radius: 3px;\n"]);return N=function(){return e},e}var A=[{name:"Segunda-Feira"},{name:"Ter\xe7a-Feira"},{name:"Quarta-Feira"},{name:"Quinta-Feira"},{name:"Sexta-Feira"},{name:"S\xe1bado"},{name:"Domingo"}],Q=function(e){Object(O.a)(t,e);var n=Object(j.a)(t);function t(e){var a;return Object(y.a)(this,t),(a=n.call(this,e)).handleFieldChange=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.handleCreateCommitment=function(e){e.preventDefault(),a.props.toCreateCommitment(a.state.commitmentDay,a.state.commitmentInput),a.setState({commitmentDay:"",commitmentInput:""})},a.state={commitmentInput:"",commitmentDay:""},a}return Object(E.a)(t,[{key:"render",value:function(){var e=this.state,n=e.commitmentInput,t=e.commitmentDay,a=Object(m.createMuiTheme)({palette:{primary:M.blueGrey}});return r.a.createElement(X,null,r.a.createElement(G,null,r.a.createElement(m.MuiThemeProvider,{theme:a},r.a.createElement(l.e,{onChange:this.handleFieldChange,name:"commitmentInput",type:"text",label:"Insira um compromisso",value:n}),r.a.createElement(l.d,{onChange:this.handleFieldChange,value:t,name:"commitmentDay"},r.a.createElement(l.c,{value:""},r.a.createElement("em",null)),A.map(function(e){return r.a.createElement(l.c,{key:e.name,value:e.name},e.name)})),r.a.createElement(l.a,{color:"primary",size:"medium",onClick:this.handleCreateCommitment},"Adicionar ao Planner"))))}}]),t}(a.Component),R=Object(o.b)(null,function(e){return{toCreateCommitment:function(n,t){return e(function(e,n){return function(){var t=Object(S.a)(k.a.mark(function t(a){var r;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={day:e,text:n},t.prev=1,t.next=4,D.a.post("".concat(_),r);case 4:a(F()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(n,t))}}})(Q),X=x.a.div(N()),G=x.a.div(I());function P(){var e=Object(g.a)(["\n    text-align: center;\n    width: 13%;\n    height: 96%;\n\n    & li {\n      text-align: start;\n      padding-bottom: 1vw;\n    }\n"]);return P=function(){return e},e}function z(){var e=Object(g.a)(["\n    display: flex;\n    justify-content: space-around;\n    width: 95%;\n    height: 75%;\n    background-color: white;\n    border-radius: 3px;\n    & p {\n      font-weight: 700;\n      text-decoration: underline;\n    }\n"]);return z=function(){return e},e}var J=[{name:"Segunda-Feira"},{name:"Ter\xe7a-Feira"},{name:"Quarta-Feira"},{name:"Quinta-Feira"},{name:"Sexta-Feira"},{name:"S\xe1bado"},{name:"Domingo"}],L=function(e){Object(O.a)(t,e);var n=Object(j.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.toGetCommitments()}},{key:"render",value:function(){var e=this.props.commitments,n={};return e&&e.forEach(function(e){n[e.day]?n[e.day].push(e):n[e.day]=[e]}),r.a.createElement(V,null,J.map(function(e){return r.a.createElement(B,{key:e.name},r.a.createElement("p",null," ",e.name," "),r.a.createElement("ul",null,n[e.name]?n[e.name].map(function(e){return r.a.createElement("li",{key:Date.now},e.text)}):r.a.createElement("span",null,"Carregando...")))}))}}]),t}(r.a.Component),U=Object(o.b)(function(e){return{commitments:e.plannerReducer.commitments}},function(e){return{toGetCommitments:function(){return e(F())}}})(L),V=x.a.div(z()),B=x.a.div(P()),H=t(143),q=t.n(H);function K(){var e=Object(g.a)(["\n    color: #667651;\n    width: 20%;\n    height: 4%;\n    min-height: 22px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 2px 2px 1vw;\n    border-radius: 7px;\n"]);return K=function(){return e},e}function W(){var e=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items: flex-start;\n    width: 100vw;\n    height: 100vh;\n    background-image: url(",");\n    background-size: cover;\n    background-repeat: no-repeat;\n    color: brown;\n"]);return W=function(){return e},e}var Y=function(e){Object(O.a)(t,e);var n=Object(j.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement($,{img:q.a},r.a.createElement(ee,null,"MINHA SEMANA"),r.a.createElement(R,null),r.a.createElement(U,null))}}]),t}(r.a.Component),Z=Object(o.b)()(Y),$=x.a.div(W(),function(e){return e.img}),ee=x.a.h2(K()),ne=[Object(f.a)(u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],te=Object(f.e)(b,f.d.apply(void 0,ne)),ae=function(){return r.a.createElement(o.a,{store:te},r.a.createElement(m.MuiThemeProvider,{theme:p},r.a.createElement(l.b,null),r.a.createElement(Z,null)))},re=document.getElementById("root");i.a.render(r.a.createElement(ae,null),re)}},[[225,1,2]]]);
//# sourceMappingURL=main.ce9ece84.chunk.js.map