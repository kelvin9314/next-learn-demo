(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{L9dH:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),u=e.n(r),o=e("O40h"),a=e("q1tI"),c=e.n(a),i=e("3Hq7"),s=e("q15l"),l=e.n(s),w=c.a.createElement,f=function(n){return w(i.a,null,w("h1",null,n.show.name),w("p",null,n.show.summary.replace(/<[/]?[pb]>/g,"")),w("img",{src:n.show.image.medium}))};f.getInitialProps=function(){var n=Object(o.a)(u.a.mark(function n(t){var e,r,o;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query.id,n.next=3,l()("https://api.tvmaze.com/shows/".concat(e));case 3:return r=n.sent,n.next=6,r.json();case 6:return o=n.sent,console.log("Fetched show: ".concat(o.name)),n.abrupt("return",{show:o});case 9:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),t.default=f},O40h:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var r=e("eVuF"),u=e.n(r);function o(n,t,e,r,o,a,c){try{var i=n[a](c),s=i.value}catch(l){return void e(l)}i.done?t(s):u.a.resolve(s).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new u.a(function(r,u){var a=n.apply(t,e);function c(n){o(a,r,u,c,i,"next",n)}function i(n){o(a,r,u,c,i,"throw",n)}c(void 0)})}}},lmRi:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return e("L9dH")}])},q15l:function(n,t,e){"use strict";t.__esModule=!0,t.default=void 0;var r=window.fetch;t.default=r}},[["lmRi",0,1]]]);