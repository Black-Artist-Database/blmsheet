(function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i=[];function s(t){return l.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"81348ed1"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=s(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var f=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"079e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("blackbandcamp.info")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Discover")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/add"}},[t._v("Add Submission")])],1)])])])]),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=(a("5c0b"),a("2877")),l={},o=Object(s["a"])(l,r,i,!1,null,null,null),c=o.exports,u=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-3"},[a("h2",{staticClass:"mt-4 mb-4"},[t._v("A crowd-sourced list of black artists on Bandcamp.")]),a("Filters",{attrs:{filters:t.filters}}),0===t.list.length?a("div",{staticClass:"m-4"},[t._v("No results found, try broadening your search or "),a("a",{attrs:{href:"/"}},[t._v("reset all filters")]),t._v(".")]):t._e(),a("div",{staticClass:"row"},t._l(t.list,(function(t,e){return a("Card",{key:e,attrs:{name:t.name,genres:t.genre,location:t.location,link:t.link,artwork:t.bandcamp_image_url,type:t.type}})})),1)],1)},d=[],p=a("bc3a"),v=a.n(p),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bg-light p-3 mb-2"},[a("p",[t._v("Discover artists, producers and labels...")]),a("a",{staticClass:"btn btn-primary text-white",on:{click:t.shuffleRandom}},[a("svg",{staticClass:"bi bi-shuffle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"}})]),t._v(" Random Shuffle ")]),a("hr"),a("p",[t._v("Or filter by genre or location...")]),a("form",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"form-inline"},[a("div",{staticClass:"input-group"},[a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.genre,expression:"filters.genre"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"genre",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All Genres")]),t._l(t.genresData,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])]),a("div",{staticClass:"input-group"},[a("LocationTypeAhead",{attrs:{filters:t.filters}})],1)])])]),a("div",{staticClass:"alphabet-filter"},[a("ul",{staticClass:"mt-3 mb-3 mb-0"},[a("li",{class:{"d-inline text-uppercase h4 letter mr-3":!0,active:null===t.filters.first_letter},on:{click:function(e){t.filters.first_letter=null}}},[t._v("All")]),t._l(t.alphabet,(function(e){return a("li",{key:e,class:{"d-inline text-uppercase h4 letter":!0,active:e===t.filters.first_letter},on:{click:function(a){t.filters.first_letter=e}}},[t._v(" "+t._s(e)+" ")])}))],2)])])},m=[],b=(a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-bootstrap-typeahead",{attrs:{data:t.locationsData,size:"sm",minLength:"1",serializer:function(t){return t},placeholder:"Type a location..."},model:{value:t.filters.location,callback:function(e){t.$set(t.filters,"location",e)},expression:"filters.location"}})}),g=[],_=a("d45f"),y={name:"LocationTypeAhead",props:{filters:Object},components:{VueBootstrapTypeahead:_["a"]},mounted:function(){this.fetchLocations()},data:function(){return{locationsData:[]}},methods:{fetchLocations:function(){var t=this;v.a.get("/api/locations").then((function(e){return t.locationsData=e.data}))}},watch:{}},C=y,k=Object(s["a"])(C,b,g,!1,null,null,null),w=k.exports,x={name:"Filters",props:{filters:Object},components:{LocationTypeAhead:w},mounted:function(){this.fetchGenres()},data:function(){return{genresData:[],locationsData:[],alphabet:"abcdefghijklmnopqrstuvwxyz#".split("")}},methods:{fetchGenres:function(){var t=this;v.a.get("/api/genres").then((function(e){return t.genresData=e.data}))},shuffleRandom:function(){this.$parent.fetchRandom()}}},j=x,O=(a("d4ce"),Object(s["a"])(j,h,m,!1,null,"98ffda28",null)),A=O.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-6 col-md-3 col-lg-3 p-2"},[a("div",{staticClass:"card"},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("div",{staticClass:"image-wrapper"},[a("img",{staticClass:"card-img-top",attrs:{src:t.image,alt:t.name}})]),a("span",{staticClass:"badge badge-primary"},[t._v(t._s(t.type))])]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.name)),a("br"),a("small",[t._v(t._s(t.location))])]),a("p",{staticClass:"genres"},t._l(t.genres,(function(e,n){return a("span",{key:n},[t._v(" "+t._s(e)),n!=Object.keys(t.genres).length-1?a("span",[t._v(", ")]):t._e()])})),0),a("a",{attrs:{href:t.link,target:"_blank"}},[t._v("Open in Bandcamp")])])])])},L=[],T={name:"Card",props:{name:String,link:String,artwork:String,type:String,location:String,genres:Array},computed:{image:function(){return this.artwork&&this.artwork.length>1?this.artwork:"https://generative-placeholders.glitch.me/image?width=300&height=300&style=triangles&gap="+Math.floor(30*Math.random())}}},D=T,P=(a("e845"),Object(s["a"])(D,S,L,!1,null,"dc65698c",null)),$=P.exports,E={name:"Home",components:{Filters:A,Card:$},data:function(){return{list:[],filters:{genre:"",location:null,first_letter:"a"}}},watch:{filters:{handler:function(){this.fetchList()},deep:!0},"filters.genre":function(){this.filters.first_letter=null},"filters.location":function(){this.filters.first_letter=null}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var t=this;v.a.get("/api/list",{params:this.filters}).then((function(e){return t.list=e.data}))},fetchRandom:function(){var t=this;v.a.get("/api/list?random=12&timestamp="+(new Date).getSeconds()).then((function(e){return t.list=e.data}))}}},M=E,z=Object(s["a"])(M,f,d,!1,null,null,null),N=z.exports;n["a"].use(u["a"]);var R=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/add",name:"Add Submission",component:function(){return a.e("about").then(a.bind(null,"7e55"))}}],B=new u["a"]({base:"/",routes:R}),F=B;n["a"].config.productionTip=!1,new n["a"]({router:F,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"907d":function(t,e,a){},"9c0c":function(t,e,a){},d4ce:function(t,e,a){"use strict";var n=a("079e"),r=a.n(n);r.a},e845:function(t,e,a){"use strict";var n=a("907d"),r=a.n(n);r.a}});
//# sourceMappingURL=app.e92cadc3.js.map