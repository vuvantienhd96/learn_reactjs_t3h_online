(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{242:function(e,t,n){},243:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),s=n.n(c),o=(n(242),n(22)),i=n(23),l=n(25),d=n(24),u=(n(243),n(34)),h=n.n(u),p=n(52),j=n(41),m=n(232),b=n(440),O=n(442),x=n(448),f=n(445),v=n(449),y=n(444),g=n(450),C=n(76),k=n(208),N=n.n(k),D=n(209),w=n.n(D),S=n(17),A=n(207),I=n.n(A),E=n(210),P=n.n(E),T=n(437),F=n(53),L=n.n(F),M=n(40),_=n(1),R=r.a.createContext(),B=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_NEW_MEMBER":return Object(j.a)(Object(j.a)({},e),{},{contacts:[t.payload].concat(Object(M.a)(e.contacts))});case"UPDATE_CONTACT":return Object(j.a)(Object(j.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],isloading:!1,dispatch:function(t){e.setState((function(e){return B(e,t)}))}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,this.setState({contacts:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error!!!");case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.contacts),Object(_.jsx)(R.Provider,{value:this.state,children:this.props.children})}}]),n}(a.Component),J=R.Consumer,V=(Object(S.a)((function(e){e.expand;var t=Object(m.a)(e,["expand"]);return Object(_.jsx)(b.a,Object(j.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onShowClick=function(t,n){e.setState({expanded:!e.state.expanded})},e.onDeleteClick=function(){var e=Object(p.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:e.sent,n({type:"DELETE_CONTACT",payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("errrr",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),e.state={expanded:!1},console.log("this is contructor"),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.expanded,this.state.expanded}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.contact,n=t.name,a=t.email,c=t.phone,s=t.id,o=this.state.expanded;return Object(_.jsx)(J,{children:function(t){var i=t.dispatch;return Object(_.jsx)(r.a.Fragment,{children:Object(_.jsxs)(O.a,{style:{marginBottom:"20px"},children:[Object(_.jsx)(x.a,{avatar:Object(_.jsx)(f.a,{sx:{bgcolor:C.a[500]},"aria-label":"recipe",children:"R"}),action:Object(_.jsx)(r.a.Fragment,{children:Object(_.jsx)(b.a,{"aria-label":"share",onClick:e.onDeleteClick.bind(e,s,i),children:Object(_.jsx)(I.a,{})})}),title:n,subheader:a}),o&&Object(_.jsxs)(v.a,{children:[Object(_.jsx)(y.a,{variant:"body2",color:"text.secondary",children:c}),Object(_.jsx)(y.a,{variant:"body2",color:"text.secondary",children:a})]}),Object(_.jsxs)(g.a,{disableSpacing:!0,children:[Object(_.jsx)(b.a,{sx:{color:o?"red":""},"aria-label":"add to favorites",onClick:e.onShowClick.bind(e,a),children:Object(_.jsx)(N.a,{})}),Object(_.jsx)(b.a,{"aria-label":"settings",children:Object(_.jsx)(w.a,{})}),Object(_.jsx)(T.a,{to:"/edit/".concat(s),children:Object(_.jsx)(b.a,{"aria-label":"share",onClick:function(){return console.log("edit clicked !")},children:Object(_.jsx)(P.a,{})})})]})]})})}})}}]),n}(a.Component)),q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsx)(J,{children:function(e){var t=e.contacts;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("h2",{className:"text-secondary",children:"List Contacts"}),t.map((function(e,t){return Object(_.jsx)(V,{contact:e},e.id)}))]})}})}}]),n}(a.Component),W=n(16),z=n(3),H=n.n(z),G=function(e){var t=e.label,n=e.name,a=e.value,r=e.placeholder,c=e.type,s=e.onChange,o=e.error;return Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:n,children:t}),Object(_.jsx)("input",{type:c,name:n,className:H()("form-control form-control-lg",{"is-invalid":o}),placeholder:r,value:a,onChange:s}),o&&Object(_.jsxs)("div",{className:"invalid-feedback",children:[" ",o," "]})]})};G.defaultProps={type:"text"};var K=G,Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(W.a)({},t.target.name,t.target.value))},e.handlePushData=function(){var t=Object(p.a)(h.a.mark((function t(n,a){var r,c,s,o,i,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.prev=12,t.next=15,L.a.post("https://jsonplaceholder.typicode.com/users",i);case 15:l=t.sent,n({type:"ADD_NEW_MEMBER",payload:l.data}),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(12),console.log("error",t.t0);case 22:e.setState({name:"",email:"",phone:"",errors:{}});case 23:case"end":return t.stop()}}),t,null,[[12,19]])})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.email,r=t.phone,c=t.errors;return Object(_.jsx)(J,{children:function(t){var s=t.dispatch;return Object(_.jsxs)("div",{className:"card mb-3",children:[Object(_.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(_.jsx)("div",{className:"card-body",children:Object(_.jsxs)("form",{onSubmit:e.handlePushData.bind(e,s),children:[Object(_.jsx)(K,{label:"Name",name:"name",value:n,placeholder:"name...",onChange:e.onChange,error:c.name}),Object(_.jsx)(K,{label:"Email",name:"email",value:a,placeholder:"email...",onChange:e.onChange,type:"email",error:c.email}),Object(_.jsx)(K,{label:"Phone",name:"phone",value:r,placeholder:"phone...",onChange:e.onChange,error:c.phone}),Object(_.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),n}(a.Component),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handlePushData=function(e){e.preventDefault();var t={name:a.nameInput.current.value,email:a.emailInput.current.value,phone:a.phoneInput.current.value};console.log("contacs",t)},a.nameInput=r.a.createRef(),a.emailInput=r.a.createRef(),a.phoneInput=r.a.createRef(),a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email,a=e.phone;return console.log("this.props",this.props),Object(_.jsxs)("div",{className:"card mb-3",children:[Object(_.jsx)("div",{className:"card-header",children:"Add Contact uncontroled component"}),Object(_.jsx)("div",{className:"card-body",children:Object(_.jsxs)("form",{onSubmit:this.handlePushData,children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name"}),Object(_.jsx)("input",{type:"text",name:"name",className:"form-control form-control-lg",placeholder:"name...",defaultValue:t,ref:this.nameInput})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"email",children:"Email"}),Object(_.jsx)("input",{type:"email",name:"email",className:"form-control form-control-lg",placeholder:"email...",defaultValue:n,ref:this.emailInput})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{htmlFor:"phone",children:"Phone"}),Object(_.jsx)("input",{type:"text",name:"phone",className:"form-control form-control-lg",placeholder:"phone...",defaultValue:a,ref:this.phoneInput})]}),Object(_.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})}}]),n}(a.Component);X.defaultProps={name:"tienvv",email:"tienvv@gmail.com.vn",phone:"+098765"};var Y=n(443),Z=n(446),$=n(447),ee=n(211),te=n.n(ee),ne=n(212),ae=n.n(ne),re=n(213),ce=n.n(re),se=(n(268),function(e){console.log(e);var t=e.brand,n=e.name;return Object(_.jsxs)("div",{children:[Object(_.jsxs)("h2",{style:oe,children:[t," ",n]}),Object(_.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger\r mb-3\r ",children:Object(_.jsxs)("div",{className:"container",children:[Object(_.jsxs)("a",{href:"/",className:"nav-brand",children:[t," ",n]}),Object(_.jsx)("div",{children:Object(_.jsx)("nav",{children:Object(_.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("span",{style:{display:"flex"},children:Object(_.jsxs)(T.a,{to:"/",className:"nav-link",children:["Home  ",Object(_.jsx)(te.a,{})]})})}),Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("span",{style:{display:"flex"},children:Object(_.jsxs)(T.a,{to:"/addContact",className:"nav-link",children:["Add Contact ",Object(_.jsx)(ae.a,{})]})})}),Object(_.jsx)("li",{className:"nav-item",children:Object(_.jsx)("span",{style:{display:"flex"},children:Object(_.jsxs)(T.a,{to:"/about",className:"nav-link",children:["About ",Object(_.jsx)(ce.a,{})]})})})]})})})]})})]})});se.defaultProps={brand:"Default title"};var oe={color:"red",fontSize:"35px"},ie=se,le=n(83),de=n(46),ue=n(438);n(269),n(270);function he(){return Object(_.jsx)("div",{className:"site-card-wrapper",children:Object(_.jsxs)(le.a,{gutter:16,children:[Object(_.jsx)(de.a,{span:8,children:Object(_.jsx)(ue.a,{title:"Infomation",bordered:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"})}),Object(_.jsx)(de.a,{span:8,children:Object(_.jsx)(ue.a,{title:"Contact Company",bordered:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"})}),Object(_.jsx)(de.a,{span:8,children:Object(_.jsx)(ue.a,{title:"Adress",bordered:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"})})]})})}n(180),a.Component;var pe=n(27),je=(a.Component,function(){var e=Object(a.useState)(null),t=Object(pe.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),console.log(n),Object(_.jsx)(r.a.Fragment,{children:Object(_.jsx)("h2",{children:"xin chao "})})}),me=(a.Component,a.Component,function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChange=function(e,t){a.setState(Object(W.a)({},t.target.name,t.target.value))},a.handlePushData=function(){var e=Object(p.a)(h.a.mark((function e(t,n){var r,c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={name:a.state.name,email:a.state.email,phone:a.state.phone},e.prev=2,c=a.props.match.params.id,e.next=6,L.a.put("https://jsonplaceholder.typicode.com/users/".concat(c),r);case 6:s=e.sent,t({type:"UPDATE_CONTACT",payload:s.data}),a.setState={name:"",email:"",phone:"",errors:{}},e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("errr",e.t0);case 14:a.props.history.push("/");case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),a.state={name:"",email:"",phone:"",errors:{},dataDefault:{}},a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.dataDefault!==this.state.dataDefault&&this.setState(Object(j.a)(Object(j.a)({},this.state),{},{name:this.state.dataDefault.name,email:this.state.dataDefault.email,phone:this.state.dataDefault.phone}))}},{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,L.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 4:n=e.sent,a=n.data,this.setState({name:a.name,email:a.email,phone:a.phone}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(_.jsx)(J,{children:function(t){t.contacts.filter((function(t){return t.id===e.props.match.params.id}))[0];var n=t.dispatch,a=e.state,c=a.name,s=a.phone,o=a.email,i=a.errors;return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("h2",{className:"display-4",children:["About Contact ",e.params]}),"table",Object(_.jsx)("p",{className:"text-secondary",children:"Version 1.0"}),Object(_.jsxs)("div",{className:"card mb-3",children:[Object(_.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(_.jsx)("div",{className:"card-body",children:Object(_.jsxs)("form",{onSubmit:function(t){return e.handlePushData(n,t)},children:[Object(_.jsx)(K,{label:"Name",name:"name",value:c,placeholder:"name...",onChange:function(t){return e.onChange("name",t)},error:i.name}),Object(_.jsx)(K,{label:"Email",name:"email",value:o,placeholder:"email...",onChange:function(t){return e.onChange("email",t)},type:"email",error:i.email}),Object(_.jsx)(K,{label:"Phone",name:"phone",value:s,placeholder:"phone...",onChange:function(t){return e.onChange("phone",t)},error:i.phone}),Object(_.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})]})}})}}]),n}(a.Component)),be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsx)(U,{children:Object(_.jsx)(Y.a,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(ie,{name:"JJ"}),Object(_.jsx)(je,{}),Object(_.jsxs)(Z.a,{children:[Object(_.jsx)($.a,{path:"/",exact:!0,component:q}),Object(_.jsx)($.a,{path:"/addContact",exact:!0,component:Q}),Object(_.jsx)($.a,{path:"/edit/:id",exact:!0,component:me})]}),Object(_.jsx)(he,{})]})})})}}]),n}(a.Component),Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,451)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(be,{})}),document.getElementById("root")),Oe()}},[[411,1,2]]]);
//# sourceMappingURL=main.022e0458.chunk.js.map