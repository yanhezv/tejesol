(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],n[s]&&f.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/tejesol/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var a=o("64a9"),n=o.n(a);n.a},"06e8":function(e,t,o){},"184e":function(e,t,o){},"1b11":function(e,t,o){},"1b42":function(e,t,o){e.exports=o.p+"img/tejesol-logo.fe66b8be.png"},4216:function(e,t,o){e.exports=o.p+"img/tejesol-logo-normal.f4555588.png"},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),n=o("8aa5"),r=o.n(n),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},i=[],c=(o("034f"),o("2877")),l={},u=Object(c["a"])(l,s,i,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,f=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"auth-layout"},[o("div",{staticClass:"auth-layout__main"},[e._m(0),o("div",{staticClass:"auth-layout__right"},[o("div",{staticClass:"auth-layout__header"},[o("q-icon",{attrs:{name:"far fa-user"}})],1),o("div",{staticClass:"auth-layout__body"},[o("router-view")],1)])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-layout__left"},[a("figure",{staticClass:"auth-layout__figure"},[a("img",{staticClass:"auth-layout__logo",attrs:{src:o("4216"),alt:"Logo tejesol"}})])])}],b=o("e083"),g={name:"LayoutDefault",data:function(){return{}},methods:{openURL:b["b"]}},h=g,v=(o("a946"),Object(c["a"])(h,p,m,!1,null,"31b052ca",null));v.options.__file="AuthLayout.vue";var _=v.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-layout-header",[a("q-toolbar",{attrs:{color:"grey-3","text-color":"grey-8"}},[a("q-btn",{attrs:{flat:"",dense:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v(e._s(this.$store.state.titleSection))])],1)],1),a("q-layout-drawer",{attrs:{"content-class":"mat"===e.$q.theme?"bg-grey-3":null},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticStyle:{width:"100%",height:"100vh"}},[a("div",{staticClass:"q-pt-lg q-px-md row justify-center items-center"},[a("img",{staticClass:"base-layout__logo",attrs:{alt:"Quasar logo",src:o("1b42")}})]),a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[a("q-item-separator"),a("q-item",{attrs:{to:{name:"welcome"}}},[a("q-item-side",{attrs:{icon:"home"}}),a("q-item-main",{attrs:{label:"Inicio"}})],1),a("q-item-separator"),a("q-list-header",[e._v("Producto")]),a("q-item",{attrs:{to:{name:"products"}}},[a("q-item-side",{attrs:{icon:"view_list"}}),a("q-item-main",{attrs:{label:"Listado"}})],1),a("q-item",{attrs:{to:{name:"categories"}}},[a("q-item-side",{attrs:{icon:"category"}}),a("q-item-main",{attrs:{label:"Categoría"}})],1),a("q-item",{attrs:{to:{name:"newProduct"}}},[a("q-item-side",{attrs:{icon:"timelapse"}}),a("q-item-main",{attrs:{label:"Temporada"}})],1),a("q-item",{attrs:{to:{name:"editProduct"}}},[a("q-item-side",{attrs:{icon:"money"}}),a("q-item-main",{attrs:{label:"Stock"}})],1),a("q-item-separator"),a("q-list-header",[e._v("Ventas")]),a("q-item",{attrs:{to:{name:"newCategory"}}},[a("q-item-side",{attrs:{icon:"add_circle_outline"}}),a("q-item-main",{attrs:{label:"Registro"}})],1),a("q-item",{attrs:{to:{name:"editCategory"}}},[a("q-item-side",{attrs:{icon:"local_grocery_store"}}),a("q-item-main",{attrs:{label:"Pedidos"}})],1),a("q-item",{attrs:{to:{name:"editFeature"}}},[a("q-item-side",{attrs:{icon:"payment"}}),a("q-item-main",{attrs:{label:"Pago"}})],1),a("q-item-separator"),a("q-list-header",[e._v("Administración")]),a("q-item",{attrs:{to:{name:"editImage"}}},[a("q-item-side",{attrs:{icon:"store"}}),a("q-item-main",{attrs:{label:"Tienda"}})],1),a("q-item",{attrs:{to:{name:"products"}}},[a("q-item-side",{attrs:{icon:"how_to_reg"}}),a("q-item-main",{attrs:{label:"Empleados"}})],1),a("q-item",{attrs:{to:{name:"products"}}},[a("q-item-side",{attrs:{icon:"wc"}}),a("q-item-main",{attrs:{label:"Clientes"}})],1),a("q-item",{attrs:{to:{name:"products"}}},[a("q-item-side",{attrs:{icon:"group"}}),a("q-item-main",{attrs:{label:"Usuarios"}})],1)],1)],1)],1)],1),a("q-page-container",[a("q-page",[a("router-view")],1)],1)],1)},O=[],w={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop}},methods:{openURL:b["b"]}},y=w,I=(o("f77a"),Object(c["a"])(y,q,O,!1,null,"49aa07f3",null));I.options.__file="BaseLayout.vue";var C=I.exports,$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("WELCOME")])},R=[],L={name:"Welcome",created:function(){this.$store.dispatch("title","Inicio")},data:function(){return console.log(this.$store),{}}},j=L,k=(o("b6d1"),Object(c["a"])(j,$,R,!1,null,"35ac7f4d",null));k.options.__file="Welcome.vue";var x=k.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"login"},[o("q-field",{attrs:{error:!1,"error-label":"Oh buggers! You made a boo boo.",dark:""}},[o("q-input",{attrs:{type:"text","float-label":"Correo electrónico",color:"greendark",inverted:"",clearable:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),o("q-field",{attrs:{error:!1,"error-label":"Oh buggers! You made a boo boo."}},[o("q-input",{attrs:{type:"password","float-label":"Contraseña",color:"greendark",inverted:"",clearable:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),o("div",{staticClass:"login__actions"},[o("q-btn",{attrs:{label:"Iniciar sesión",color:"green-10","text-color":"green-8",size:"md"},on:{click:e.login}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Registrate","text-color":"green-10",size:"md",outline:"",push:"",flat:""},on:{click:function(t){e.$router.push("/sign-up")}}})],1)],1)},D=[],U=(o("a481"),{name:"Login",data:function(){return console.log(this.$store),{user:{email:"",password:""}}},methods:{login:function(){this.$router.replace("intranet")}}}),E=U,S=(o("c219"),Object(c["a"])(E,P,D,!1,null,"28f226db",null));S.options.__file="Login.vue";var z=S.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"sign-up"},[o("q-field",{attrs:{error:!1,"error-label":"Oh buggers! You made a boo boo.",dark:""}},[o("q-input",{attrs:{type:"email","float-label":"Correo electrónico",color:"greendark",inverted:"",clearable:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),o("q-field",{attrs:{error:!1,"error-label":"Oh buggers! You made a boo boo."}},[o("q-input",{attrs:{type:"password","float-label":"Contraseña",color:"greendark",inverted:"",clearable:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),o("q-field",{attrs:{error:!1,"error-label":"Oh buggers! You made a boo boo."}},[o("q-input",{attrs:{type:"password","float-label":"Confirmar contraseña",color:"greendark",inverted:"",clearable:""},model:{value:e.user.passwordRepeat,callback:function(t){e.$set(e.user,"passwordRepeat",t)},expression:"user.passwordRepeat"}})],1),o("div",{staticClass:"sign-up__actions"},[o("q-btn",{attrs:{label:"Registrarse",color:"green-10","text-color":"green-8",size:"md"}}),o("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Iniciar sesión","text-color":"green-10",size:"md",outline:"",push:"",flat:""},on:{click:function(t){e.$router.push("/login")}}})],1)],1)},A=[],F={name:"SignUp",data:function(){return console.log(this.$store),{user:{email:"",password:"",passwordRepeat:""}}}},B=F,Y=(o("bd0c"),Object(c["a"])(B,T,A,!1,null,"04548642",null));Y.options.__file="SignUp.vue";var M=Y.exports,N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("PRODUCT LIST")])},G=[],Q={name:"ProductList",created:function(){this.$store.dispatch("title","Productos")},data:function(){return console.log(this.$store),{}}},W=Q,X=(o("9b93"),Object(c["a"])(W,N,G,!1,null,"9fffe1a6",null));X.options.__file="ProductList.vue";var H=X.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("PRODUCT FORM")])},K=[],V={name:"ProductForm",created:function(){this.$store.dispatch("title","Formulario de producto")},data:function(){return console.log(this.$store),{}}},Z=V,ee=(o("71cc"),Object(c["a"])(Z,J,K,!1,null,"4d3bcd3b",null));ee.options.__file="ProductForm.vue";var te=ee.exports,oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("CATEGORY LIST")])},ae=[],ne={name:"ProductCategoryList",created:function(){this.$store.dispatch("title","Categorias")},data:function(){return console.log(this.$store),{}}},re=ne,se=(o("a7bb"),Object(c["a"])(re,oe,ae,!1,null,"b55dba8c",null));se.options.__file="ProductCategoryList.vue";var ie=se.exports,ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("CATEGORY FORM")])},le=[],ue={name:"ProductCategoryForm",created:function(){this.$store.dispatch("title","Formulario de categoría de producto")},data:function(){return console.log(this.$store),{}}},de=ue,fe=(o("9e15"),Object(c["a"])(de,ce,le,!1,null,"23d804c8",null));fe.options.__file="ProductCategoryForm.vue";var pe=fe.exports,me=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("CARACTERISTICAS DE PRODUCTO")])},be=[],ge={name:"ProductList",created:function(){this.$store.dispatch("title","Características del producto")},data:function(){return console.log(this.$store),{}}},he=ge,ve=(o("e470"),Object(c["a"])(he,me,be,!1,null,"00fae60e",null));ve.options.__file="ProductFeature.vue";var _e=ve.exports,qe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h1",[e._v("PRODUCT IMAGE")])},Oe=[],we={name:"ProductList",created:function(){this.$store.dispatch("title","Imágenes del producto")},data:function(){return console.log(this.$store),{}}},ye=we,Ie=(o("7239"),Object(c["a"])(ye,qe,Oe,!1,null,"844c4344",null));Ie.options.__file="ProductImage.vue";var Ce=Ie.exports,$e=[{path:"/login",component:_,children:[{path:"",name:"login",component:z},{path:"/sign-up",name:"signUp",component:M}]},{path:"/intranet",component:C,name:"intranet",meta:{requiresAuth:!0},children:[{path:"",name:"welcome",component:x},{path:"/product",name:"products",component:H},{path:"/product/new",name:"newProduct",component:te},{path:"/product/edit/:productId",name:"editProduct",component:te},{path:"/product/category",name:"categories",component:ie},{path:"/product/category/new",name:"newCategory",component:pe},{path:"/product/category/edit/:productId",name:"editCategory",component:pe},{path:"/product/:productId/feature",name:"editFeature",component:_e},{path:"/product/:productId/image",name:"editImage",component:Ce}]},{path:"*",redirect:"/login"}];a["a"].use(f["a"]);var Re=new f["a"]({mode:"history",base:"/tejesol/",routes:$e});Re.beforeEach(function(e,t,o){var a=r.a.auth().currentUser,n=e.matched.some(function(e){return e.meta.requiresAuth});console.log("USER: ",a,"REQUERIDO: ",n),console.log(t.fullPath),n&&!a?(console.log("No hay usuario"),o({name:"login"})):!n&&a?(console.log("Ya te haz logueado"),o({name:"welcome"})):(console.log("Entrando..."),o())});var Le=Re,je=o("2f62");a["a"].use(je["a"]);var ke=new je["a"].Store({state:{status:"",titleSection:"",token:localStorage.getItem("token")||"",user:{}},mutations:{changePageTitle:function(e,t){e.titleSection=t}},actions:{title:function(e,t){var o=e.commit;o("changePageTitle",t)}},getters:{pageTitle:function(e){return e.titleSection}}}),xe=o("9483");Object(xe["a"])("".concat("/tejesol/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("06e8"),o("a4ac"),o("4a91");var Pe=o("74f1");o("2826"),o("401b"),o("7e57"),o("38aa"),o("410d"),o("b3f4");a["a"].use(b["a"],{config:{},i18n:Pe["a"]}),a["a"].config.productionTip=!1;var De="";r.a.initializeApp({apiKey:"AIzaSyB34t4tHQfsXYLnwFVrGINK67N6DfqzUBQ",authDomain:"artesaniatejesol.firebaseapp.com",databaseURL:"https://artesaniatejesol.firebaseio.com",projectId:"artesaniatejesol",storageBucket:"artesaniatejesol.appspot.com",messagingSenderId:"124677378569"}),r.a.auth().onAuthStateChanged(function(){De?console.log("no renderizo"):(console.log("Renderizando...."),new a["a"]({router:Le,store:ke,render:function(e){return e(d)}}).$mount("#app"))})},5991:function(e,t,o){},"64a9":function(e,t,o){},"68c0":function(e,t,o){},"71cc":function(e,t,o){"use strict";var a=o("ee59"),n=o.n(a);n.a},7239:function(e,t,o){"use strict";var a=o("1b11"),n=o.n(a);n.a},8908:function(e,t,o){},"8d19":function(e,t,o){},"97cb":function(e,t,o){var a={"./bounce.css":"3d49","./bounceIn.css":"0a58","./bounceInDown.css":"a4a9","./bounceInLeft.css":"5965","./bounceInRight.css":"da80","./bounceInUp.css":"b60e","./bounceOut.css":"f39d","./bounceOutDown.css":"a9b5","./bounceOutLeft.css":"06dd","./bounceOutRight.css":"66bc","./bounceOutUp.css":"908f","./fadeIn.css":"1070","./fadeInDown.css":"1625","./fadeInDownBig.css":"9338","./fadeInLeft.css":"0c2e","./fadeInLeftBig.css":"f357","./fadeInRight.css":"ef8f","./fadeInRightBig.css":"747a","./fadeInUp.css":"e7fb","./fadeInUpBig.css":"b8af","./fadeOut.css":"25cd","./fadeOutDown.css":"93ea","./fadeOutDownBig.css":"c888","./fadeOutLeft.css":"5f1d","./fadeOutLeftBig.css":"a555","./fadeOutRight.css":"8934","./fadeOutRightBig.css":"9438","./fadeOutUp.css":"351b","./fadeOutUpBig.css":"23a5","./flash.css":"58a5","./flip.css":"bda0","./flipInX.css":"58b8","./flipInY.css":"5902","./flipOutX.css":"72c5","./flipOutY.css":"b8ad","./headShake.css":"2289","./hinge.css":"085e","./jello.css":"8014","./lightSpeedIn.css":"eb7d","./lightSpeedOut.css":"d043","./pulse.css":"ab98","./rollIn.css":"dc73","./rollOut.css":"592c","./rotateIn.css":"487d","./rotateInDownLeft.css":"bf6b","./rotateInDownRight.css":"7b96","./rotateInUpLeft.css":"89f8","./rotateInUpRight.css":"cb8c","./rotateOut.css":"de65","./rotateOutDownLeft.css":"8134","./rotateOutDownRight.css":"1ea7","./rotateOutUpLeft.css":"63d1","./rotateOutUpRight.css":"fcc3","./rubberBand.css":"aab2","./shake.css":"15f1","./slideInDown.css":"79ea","./slideInLeft.css":"a963","./slideInRight.css":"3b76","./slideInUp.css":"21e3","./slideOutDown.css":"abed","./slideOutLeft.css":"f857","./slideOutRight.css":"0a43","./slideOutUp.css":"5706","./swing.css":"b968","./tada.css":"3391","./wobble.css":"ed5b","./zoomIn.css":"38f3","./zoomInDown.css":"2577","./zoomInLeft.css":"1992","./zoomInRight.css":"ef68","./zoomInUp.css":"97a1","./zoomOut.css":"cc15","./zoomOutDown.css":"2ac6","./zoomOutLeft.css":"1fd4","./zoomOutRight.css":"fa2f","./zoomOutUp.css":"91e5"};function n(e){var t=r(e);return o(t)}function r(e){var t=a[e];if(!(t+1)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="97cb"},"9b93":function(e,t,o){"use strict";var a=o("b9ba"),n=o.n(a);n.a},"9cb7":function(e,t,o){},"9e15":function(e,t,o){"use strict";var a=o("8908"),n=o.n(a);n.a},a4ac:function(e,t,o){},a7bb:function(e,t,o){"use strict";var a=o("5991"),n=o.n(a);n.a},a946:function(e,t,o){"use strict";var a=o("c001"),n=o.n(a);n.a},b6d1:function(e,t,o){"use strict";var a=o("184e"),n=o.n(a);n.a},b9ba:function(e,t,o){},bd0c:function(e,t,o){"use strict";var a=o("9cb7"),n=o.n(a);n.a},c001:function(e,t,o){},c219:function(e,t,o){"use strict";var a=o("cb66"),n=o.n(a);n.a},cb66:function(e,t,o){},e470:function(e,t,o){"use strict";var a=o("68c0"),n=o.n(a);n.a},ee59:function(e,t,o){},f77a:function(e,t,o){"use strict";var a=o("8d19"),n=o.n(a);n.a}});
//# sourceMappingURL=app.9a740466.js.map