(function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function l(t){return o.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"f0631b3d"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="static/css/"+({about:"about"}[t]||t)+"."+{about:"62f58bd8"}[t]+".css",i=o.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],f.parentNode.removeChild(f),a(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=l(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19c0":function(t,e,a){},"1a60":function(t,e,a){t.exports=a.p+"static/img/8.a79aed98.png"},"26b9":function(t,e,a){},3078:function(t,e,a){t.exports=a.p+"static/img/3.f9a2a886.png"},"3f7a":function(t,e,a){"use strict";var n=a("fc0c"),r=a.n(n);r.a},"40c9":function(t,e,a){t.exports=a.p+"static/img/9.e432e4d6.png"},"44c5":function(t,e,a){t.exports=a.p+"static/img/2.5cd19829.png"},"49fa":function(t,e,a){t.exports=a.p+"static/img/10.e694ab8c.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("blackbandcamp.info")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Discover")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/add"}},[t._v("Add Submission")])],1)])])])]),a("router-view")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s={name:"App",data:function(){return{}}},l=s,o=(a("5c0b"),a("2877")),c=Object(o["a"])(l,r,i,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"container mt-3"},[a("h2",{staticClass:"mt-4 mb-4"},[t._v("A crowd-sourced list of Black artists on Bandcamp.")]),a("Filters",{attrs:{filters:t.filters},on:{loading:function(e){return t.loading=e}}}),t.loading?a("div",{staticClass:"d-flex justify-content-center"},[t._m(0)]):t._e(),0!==t.list.length||t.loading?t._e():a("div",{staticClass:"m-4"},[t._v("No results found, try broadening your search or "),a("a",{attrs:{href:"/"}},[t._v("reset all filters")]),t._v(".")]),t.loading?t._e():a("div",{staticClass:"row"},t._l(t.list,(function(e,n){return a("Card",{key:n,attrs:{name:e.name,genres:e.genre_tags,location:e.location,link:e.link,artwork:e.bandcamp_image_url,bandcamp_ids:e.bandcamp_album_ids,type:e.type},on:{"on-play":t.onPlay}})})),1)],1),t.currentBandcampId?a("Player",{attrs:{"bandcamp-id":t.currentBandcampId}}):t._e()],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-border m-5",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],m=(a("b0c0"),a("85b1")),h=a("bc3a"),b=a.n(h),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"filters p-3 mb-2"},[a("p",[t._v("Discover artists, producers and labels...")]),a("a",{staticClass:"btn btn-bc-blue text-white",on:{click:t.shuffleRandom}},[a("svg",{staticClass:"bi bi-shuffle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M12.646 1.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 4l-2.147-2.146a.5.5 0 0 1 0-.708zm0 8a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.793 12l-2.147-2.146a.5.5 0 0 1 0-.708z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 4a.5.5 0 0 1 .5-.5h2c3.053 0 4.564 2.258 5.856 4.226l.08.123c.636.97 1.224 1.865 1.932 2.539.718.682 1.538 1.112 2.632 1.112h2a.5.5 0 0 1 0 1h-2c-1.406 0-2.461-.57-3.321-1.388-.795-.755-1.441-1.742-2.055-2.679l-.105-.159C6.186 6.242 4.947 4.5 2.5 4.5h-2A.5.5 0 0 1 0 4z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 12a.5.5 0 0 0 .5.5h2c3.053 0 4.564-2.258 5.856-4.226l.08-.123c.636-.97 1.224-1.865 1.932-2.539C11.086 4.93 11.906 4.5 13 4.5h2a.5.5 0 0 0 0-1h-2c-1.406 0-2.461.57-3.321 1.388-.795.755-1.441 1.742-2.055 2.679l-.105.159C6.186 9.758 4.947 11.5 2.5 11.5h-2a.5.5 0 0 0-.5.5z"}})]),t._v(" Random Shuffle ")]),a("hr"),a("p",[t._v("Or filter by name, genre or location...")]),a("form",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"d-flex flex-row flex-wrap justify-content-center"},[a("div",{staticClass:"input-group input-group-sm d-flex justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.name,expression:"filters.name"}],staticClass:"form-control",attrs:{placeholder:"Search by name",type:"text",id:"name-filter"},domProps:{value:t.filters.name},on:{input:function(e){e.target.composing||t.$set(t.filters,"name",e.target.value)}}}),""!==t.filters.name?a("a",{on:{click:function(e){t.filters.name=""}}},[t._v("×")]):t._e()]),a("div",{staticClass:"input-group input-group-sm"},[a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.genre,expression:"filters.genre"}],staticClass:"custom-select",attrs:{disabled:""!==t.filters.name},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"genre",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("All Genres")]),t._l(t.genresData,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])]),a("LocationTypeAhead",{staticClass:"location-filter",attrs:{filters:t.filters}})],1)])]),a("div",{class:{"alphabet-filter":!0,disabled:t.filters.name}},[a("ul",{staticClass:"mt-3 mb-3 mb-0"},[a("li",{class:{"d-inline text-uppercase h4 letter mr-3":!0,active:null===t.filters.first_letter},on:{click:function(e){t.filters.first_letter=null}}},[t._v("All")]),t._l(t.alphabet,(function(e){return a("li",{key:e,class:{"d-inline text-uppercase h4 letter":!0,active:e===t.filters.first_letter},on:{click:function(a){t.filters.first_letter=e,t.filters.name=""}}},[t._v(" "+t._s(e)+" ")])}))],2)])])},g=[],_=(a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-bootstrap-typeahead",{class:{disabled:""!==t.filters.name},attrs:{data:t.locationsData,size:"sm",minLength:"1",serializer:function(t){return t},placeholder:"Type a location...",backgroundVariant:"#343a50"},model:{value:t.filters.location,callback:function(e){t.$set(t.filters,"location",e)},expression:"filters.location"}})],1)}),y=[],C=a("d45f"),w={name:"LocationTypeAhead",props:{filters:Object},components:{VueBootstrapTypeahead:C["a"]},mounted:function(){this.fetchLocations()},data:function(){return{locationsData:[]}},methods:{fetchLocations:function(){var t=this;b.a.get("/api/locations").then((function(e){return t.locationsData=e.data}))}},watch:{}},k=w,x=(a("8d88"),a("e284"),Object(o["a"])(k,_,y,!1,null,"a5ecc29a",null)),j=x.exports,O={name:"Filters",props:{filters:Object},components:{LocationTypeAhead:j},mounted:function(){this.fetchGenres()},data:function(){return{genresData:[],locationsData:[],alphabet:"abcdefghijklmnopqrstuvwxyz#".split("")}},methods:{fetchGenres:function(){var t=this;this.$emit("loading",!0),b.a.get("/api/genres").then((function(e){t.genresData=e.data,t.$emit("loading",!1)}))},shuffleRandom:function(){this.$parent.fetchRandom()}}},A=O,P=(a("cf1c"),Object(o["a"])(A,v,g,!1,null,"0ec26d04",null)),S=P.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6 col-md-3 col-lg-3 p-2"},[n("div",{staticClass:"card"},[n("a",{attrs:{"x-href":"link",target:"_blank"}},[n("div",{staticClass:"image-wrapper"},[t.bandcamp_preview_id?n("div",{staticClass:"play",on:{click:function(e){return t.onPlay()}}},[n("img",{attrs:{src:a("df84")}})]):t._e(),n("img",{staticClass:"bc-image card-img-top",attrs:{src:t.image,alt:t.name}})]),t.type?n("span",{staticClass:"badge badge-primary",class:{"badge-bc-red":"Producer"==t.type,"badge-bc-purple":"Label"==t.type,"badge-bc-blue":"Artist"==t.type,"badge-bc-green":"Band"==t.type}},[t._v(" "+t._s(t.type)+" ")]):t._e()]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.name)),n("br"),n("small",[t._v(t._s(t.location))])]),n("p",{staticClass:"genres"},t._l(t.genres,(function(e,a){return n("span",{key:a},[t._v(" "+t._s(e)),a!=Object.keys(t.genres).length-1?n("span",[t._v(", ")]):t._e()])})),0),n("a",{attrs:{href:t.link,target:"_blank"}},[t._v("Open in Bandcamp")])])])])},E=[],$=a("53ca"),T={name:"Card",props:{name:String,link:String,artwork:String,type:String,location:String,genres:Array,bandcamp_ids:Array},computed:{bandcamp_preview_id:function(){return"object"==Object($["a"])(this.bandcamp_ids)&&this.bandcamp_ids.length>0?this.bandcamp_ids[0]:null},image:function(){if(this.artwork&&this.artwork.length>1)return this.artwork;var t=parseInt(Math.floor(10*Math.random())+1);switch(t){case 1:return a("dfec");case 2:return a("44c5");case 3:return a("3078");case 4:return a("bed1");case 5:return a("5b41");case 6:return a("d0c1");case 7:return a("b012");case 8:return a("1a60");case 9:return a("40c9");case 10:return a("49fa")}return a("dfec")}},methods:{onPlay:function(){this.$emit("on-play",this.bandcamp_preview_id)}}},B=T,D=(a("3f7a"),Object(o["a"])(B,L,E,!1,null,"0713ddd1",null)),N=D.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player"},[a("iframe",{staticStyle:{border:"0",width:"100%",height:"42px"},attrs:{src:"https://bandcamp.com/EmbeddedPlayer/album="+t.bandcampId+"/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",seamless:""}})])},z=[],I={name:"Player",props:{bandcampId:String},mounted:function(){}},R=I,F=(a("e74d"),Object(o["a"])(R,M,z,!1,null,"0315b736",null)),q=F.exports,G={name:"Home",components:{Filters:S,Card:N,Player:q},data:function(){return{list:[],loading:!0,currentBandcampId:null,filters:{genre:"",name:"",location:null,first_letter:"a"}}},watch:{filters:{handler:Object(m["a"])((function(){this.fetchList()}),500),deep:!0},"filters.genre":function(){this.filters.first_letter=null},"filters.location":function(){this.filters.first_letter=null,0===this.filters.location.length&&this.fetchList()},"filters.name":function(){this.filters.first_letter&&(this.filters.first_letter=null)}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var t=this;this.loading=!0,b.a.get("/api/list",{params:this.filters}).then((function(e){t.loading=!1,t.list=e.data}))},fetchRandom:function(){var t=this;this.filters.name="",this.loading=!0,b.a.get("/api/list?random=12&timestamp="+(new Date).getSeconds()).then((function(e){t.loading=!1,t.list=e.data}))},onPlay:function(t){this.currentBandcampId=t}}},H=G,J=(a("d6dc"),Object(o["a"])(H,f,p,!1,null,"4336022a",null)),V=J.exports;n["a"].use(d["a"]);var K=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/add",name:"Add Submission",component:function(){return a.e("about").then(a.bind(null,"7e55"))}}],U=new d["a"]({base:"/",routes:K}),Q=U;n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(u)}}).$mount("#app")},"5b41":function(t,e,a){t.exports=a.p+"static/img/5.e707fcab.png"},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"7d83":function(t,e,a){},"8d88":function(t,e,a){"use strict";var n=a("19c0"),r=a.n(n);r.a},"9c0c":function(t,e,a){},"9fed":function(t,e,a){},b012:function(t,e,a){t.exports=a.p+"static/img/7.ba5db872.png"},bed1:function(t,e,a){t.exports=a.p+"static/img/4.155dd8c8.png"},cf1c:function(t,e,a){"use strict";var n=a("7d83"),r=a.n(n);r.a},d0c1:function(t,e,a){t.exports=a.p+"static/img/6.3e49093e.png"},d6dc:function(t,e,a){"use strict";var n=a("26b9"),r=a.n(n);r.a},df84:function(t,e,a){t.exports=a.p+"static/img/play.a84b5f9b.png"},dfec:function(t,e,a){t.exports=a.p+"static/img/1.ac608d56.png"},dfed:function(t,e,a){},e284:function(t,e,a){"use strict";var n=a("dfed"),r=a.n(n);r.a},e74d:function(t,e,a){"use strict";var n=a("9fed"),r=a.n(n);r.a},fc0c:function(t,e,a){}});
//# sourceMappingURL=app.6977a708.js.map