(this["webpackJsonpcat-toys"]=this["webpackJsonpcat-toys"]||[]).push([[6],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var c=a(56),i=a(57),s=a(0),r=function(){return[{id:1,title:"Cat Menu",description:"Set of toys for cat with catnip filling",image:"/img/1.jpg"},{id:2,title:"Donut",description:"",image:"/img/2.jpg"},{id:3,title:"Mousies",description:"Set of two cute mouses with bells inside",image:"/img/3.png"},{id:4,title:"Avocatto",description:"This Mister doesn't need a description :)",image:"/img/4.jpg"},{id:5,title:"Fish",description:"Fish with feathery tail. Available in two colors",image:"/img/5.jpg"},{id:6,title:"Worm",description:"",image:"/img/6.jpg"},{id:7,title:"Cat Silhouette",description:"If you can see a silhouette here - you're definitely Cat lover",image:"/img/7.png"},{id:8,title:"Fishing Rod",description:"Available in 3 variations",image:"/img/8.jpg"}]},n=a(58),o=a(53),l=a(46),d=a(3);function u(e){var t=e.handleSearchValue,a=e.searchValue;return Object(d.jsxs)(o.a,{className:"container custom-input-group",children:[Object(d.jsx)(l.b,{className:"icon"}),Object(d.jsx)(n.a,{placeholder:"Search",type:"text",name:"search",className:"mr-sm-2",value:a||"",onChange:t})]})}var j=a(66);function m(e){var t=e.product,a=e.handleAddProductToCart,c=t.id,i=t.image,s=t.title,r=t.description;return Object(d.jsxs)(j.a,{className:"custom-card",children:[Object(d.jsx)(j.a.Img,{src:i,alt:s,className:"item-img"}),Object(d.jsxs)(j.a.Body,{style:{border:"none"},className:"custom-card-body",children:[Object(d.jsx)(j.a.Title,{style:{border:"none"},className:"custom-card-title",children:s}),Object(d.jsx)(j.a.Text,{style:{border:"none"},className:"custom-card-text",children:r}),Object(d.jsx)(l.a,{className:"add-icon",onClick:function(){return a(c)}})]})]},c)}var b=a(61),h=a(62);function g(e){var t=e.product,a=e.handleRemoveFromCart,c=t.id,i=t.title,s=t.image;return Object(d.jsxs)(b.a,{className:"custom-list-group-item",children:[Object(d.jsx)(h.a,{src:s,alt:i,style:{width:"100px",border:"1px solid rgba(0,0,0,.125)"},className:"custom-image"}),Object(d.jsx)("h5",{children:i}),Object(d.jsx)(l.c,{className:"remove-icon",onClick:function(){return a(c)}})]})}var p=a(63),O=function(){return Object(d.jsxs)("div",{className:"ad-container",children:[Object(d.jsxs)(j.a,{className:"ad",style:{borderRadius:0},children:[Object(d.jsx)(j.a.Img,{variant:"top",src:"img/popular.jpg"}),Object(d.jsxs)(j.a.Body,{style:{border:"none"},children:[Object(d.jsx)(j.a.Title,{style:{border:"none"},className:"custom-card-title",children:"Check Our Popular Toy"}),Object(d.jsx)(p.a,{variant:"info",style:{borderRadius:0},className:"custom-btn",children:"Check Now!"})]})]}),Object(d.jsxs)(j.a,{className:"ad",style:{borderRadius:0},children:[Object(d.jsx)(j.a.Img,{variant:"top",src:"img/new.jpg"}),Object(d.jsxs)(j.a.Body,{style:{border:"none"},children:[Object(d.jsx)(j.a.Title,{style:{border:"none"},className:"custom-card-title",children:"Check Our New Toy"}),Object(d.jsx)(p.a,{variant:"info",style:{borderRadius:0},className:"custom-btn",children:"Check Now!"})]})]})]})},x=a(64);function f(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)([]),l=Object(i.a)(o,2),j=l[0],b=l[1],h=Object(s.useState)(""),p=Object(i.a)(h,2),f=p[0],v=p[1],y=function(){n(r)},N=function(e){b([].concat(Object(c.a)(j),[e]))},C=function(e){var t=j.filter((function(t){return t!==e}));b(t)};return Object(s.useEffect)((function(){y()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(u,{handleSearchValue:function(e){v(e.target.value),function(e){var t=e.toLowerCase();if(t){var c=a.filter((function(e){return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)}));n(c)}else v(""),y()}(e.target.value)},searchValue:f})}),Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsx)(x.a,{className:"custom-card-deck",children:a.map((function(e){return Object(d.jsx)(m,{product:e,handleAddProductToCart:N},e.id)}))}),Object(d.jsx)("div",{className:"cart-container",children:j.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Your Cart"}),j.map((function(e){var t=a.findIndex((function(t){return t.id===e})),c=a[t];return Object(d.jsx)(g,{product:c,handleRemoveFromCart:C,haveInCart:!0},c.id)}))]}):Object(d.jsx)("h3",{children:"Your Cart is Empty :("})})]}),Object(d.jsx)(O,{})]})}}}]);
//# sourceMappingURL=6.66f83656.chunk.js.map