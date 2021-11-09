(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"CheckOut_form__1uCft",control:"CheckOut_control__2KKhW",actions:"CheckOut_actions__R8u3x",submit:"CheckOut_submit__sXYI9",invalid:"CheckOut_invalid__2lk5y"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2IAet",total:"Cart_total__1oRRy",actions:"Cart_actions__gVAIw","button--alt":"Cart_button--alt__2_WlU",button:"Cart_button__1j9B7"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3HGVA",summary:"CartItem_summary__19T9R",price:"CartItem_price__2402h",amount:"CartItem_amount__K9h3x",actions:"CartItem_actions__3789x"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2NwEu",icon:"HeaderCartButton_icon__2NiC7",badge:"HeaderCartButton_badge__1D9hQ",bump:"HeaderCartButton_bump__3B5vr"}},,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3P8By","meals-appear":"AvailableMeals_meals-appear__2Rgt3",loading:"AvailableMeals_loading___iWF9",error:"AvailableMeals_error__1I63t"}},function(e,t,n){e.exports={meal:"MealItem_meal__2czP1",description:"MealItem_description__2ibOU",price:"MealItem_price__2GrYI"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1lbw9",modal:"Modal_modal__o8jdX","slide-down":"Modal_slide-down__ekTPe"}},,function(e,t,n){e.exports={header:"Header_header__3P-6p","main-image":"Header_main-image__jrK45"}},,function(e,t,n){e.exports={card:"Card_card__2eMX0"}},function(e,t,n){e.exports={form:"MealItemForm_form__3L2O6"}},function(e,t,n){e.exports={input:"Input_input__2OZoW"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__3EEOP"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),i=(n(25),n(2)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpg",l=n(15),u=n.n(l),d=n(9),j=n.n(d),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],totalAmount:0,addItems:function(){},removeItems:function(){},clearItems:function(){}}),h=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useContext)(O),o=s.items.reduce((function(e,t){return e+t.amount}),0),l=s.items,u="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(r.useEffect)((function(){if(0!==l.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(m.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:j.a.badge,children:o})]})},x=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:u.a.header,children:[Object(m.jsx)("p",{children:"Pvn Restaurent"}),Object(m.jsx)(h,{onClick:e.onClick})]}),Object(m.jsx)("div",{className:u.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"A table full of delicious food!!"})})]})},f=n(17),p=n.n(f),_=function(e){return Object(m.jsx)("div",{className:p.a.card,children:e.children})},v=n(11),C=n.n(v),y=n(12),g=n.n(y),N=n(18),I=n.n(N),k=n(4),A=n(19),S=n.n(A),w=Object(r.forwardRef)((function(e,t){return Object(m.jsxs)("div",{className:S.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(k.a)({ref:t},e.input))]})})),R=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;c<1||0===n.trim().length?a(!1):e.onAddToCart(c)},children:[Object(m.jsx)(w,{label:"Amount",ref:s,input:{type:"number",id:"amount_"+e.id,min:"1",step:"1",defaultValue:"1",numberofitems:{}}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Enter amount greater than 1"})]})},M=function(e){var t=Object(r.useContext)(O);return Object(m.jsxs)("li",{className:g.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{className:g.a.description,children:e.description}),Object(m.jsxs)("p",{className:g.a.price,children:["$",e.price.toFixed(2)]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(R,{id:e.id,onAddToCart:function(n){t.addItems({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},F=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),j=d[0],b=d[1];if(Object(r.useEffect)((function(){fetch("https://practicereact-755c2-default-rtdb.firebaseio.com/meals.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e)t.push({id:n,name:e[n].name,description:e[n].description,price:e[n].price});c(t),l(!1)})).catch((function(e){b(e.message)}))}),[]),o)return Object(m.jsx)("section",{children:Object(m.jsx)("p",{className:C.a.loading,children:"...Loading"})});if(j)return Object(m.jsx)("section",{children:Object(m.jsx)("p",{className:C.a.error,children:"Something went wrong"})});var O=n.map((function(e){return Object(m.jsx)(M,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(_,{children:Object(m.jsx)("ul",{children:O})})})},P=n(20),H=n.n(P),B=function(){return Object(m.jsxs)("section",{className:H.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},D=function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(B,{}),Object(m.jsx)(F,{})]})},E=n(5),T=n.n(E),W=n(13),z=n.n(W),K=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onClick})},L=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},Y=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(m.jsx)(K,{onClick:e.onClick}),document.getElementById("overLays")),a.a.createPortal(Object(m.jsx)(L,{children:e.children}),document.getElementById("overLays"))]})},J=n(6),V=n.n(J),X=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:V.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:V.a.summary,children:[Object(m.jsx)("span",{className:V.a.price,children:t}),Object(m.jsxs)("span",{className:V.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:V.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(3),G=n.n($),U=function(e){var t=Object(r.useState)({name:!0,street:!0,code:!0,city:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=c.name?"":G.a.invalid,j=c.street?"":G.a.invalid,b=c.code?"":G.a.invalid,O=c.city?"":G.a.invalid;return Object(m.jsxs)("form",{className:G.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,i=l.current.value,r=u.current.value,d=0!==n.trim().length,j=0!==c.trim().length,m=6===i.trim().length,b=0!==r.trim().length;a({name:d,street:j,code:m,city:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:c,code:i,city:r})},children:[Object(m.jsxs)("div",{className:"".concat(G.a.control," ").concat(d),children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(m.jsx)("p",{children:"Please enter valid name!"})]}),Object(m.jsxs)("div",{className:"".concat(G.a.control," ").concat(j),children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(m.jsx)("p",{children:"Please enter valid street!"})]}),Object(m.jsxs)("div",{className:"".concat(G.a.control," ").concat(b),children:[Object(m.jsx)("label",{htmlFor:"code",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"code",ref:l}),!c.code&&Object(m.jsx)("p",{children:"Please enter valid code of 6 digits!!"})]}),Object(m.jsxs)("div",{className:"".concat(G.a.control," ").concat(O),children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(m.jsx)("p",{children:"Please enter valid city!"})]}),Object(m.jsxs)("div",{className:G.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:G.a.submit,children:"Submit"})]})]})},q=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),j=Object(i.a)(d,2),b=j[0],h=j[1],x=Object(r.useContext)(O),f="$".concat(x.totalAmount.toFixed(2)),p=x.items.length>0,_=function(e){x.addItems(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},v=function(e){x.removeItems(e)},C=Object(m.jsx)("ul",{className:T.a["cart-items"],children:x.items.map((function(e){return Object(m.jsx)(X,{price:e.price,name:e.name,amount:e.amount,onAdd:_.bind(null,e),onRemove:v.bind(null,e.id)},e.id)}))});return Object(m.jsxs)(Y,{onClick:e.onClose,children:[!l&&b&&Object(m.jsx)(r.Fragment,{children:Object(m.jsx)("div",{className:T.a.actions,children:Object(m.jsx)("button",{type:"button",className:T.a["button--alt"],onClick:e.onClose,children:"Close"})})}),l&&Object(m.jsx)("p",{children:"Successfully ordered. We will connect you shortly!!"}),!l&&!b&&Object(m.jsxs)(r.Fragment,{children:[C,Object(m.jsxs)("div",{className:T.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:f})]}),c&&Object(m.jsx)(U,{onConfirm:function(e){u(!0),fetch("https://practicereact-755c2-default-rtdb.firebaseio.com/usersData.json",{method:"POST",body:JSON.stringify({user:e,items:x.items})}),u(!1),h(!0),x.clearItems()},onCancel:e.onClose}),!c&&Object(m.jsxs)("div",{className:T.a.actions,children:[Object(m.jsx)("button",{className:T.a["button--alt"],onClick:e.onClose,children:"Close"}),p&&Object(m.jsx)("button",{className:T.a.button,onClick:function(){a(!0)},children:"Order"})]})]})]})},Q=n(16),Z={items:[],totalAmount:0},ee=function(e,t){if("ADD"===t.type){var n,c,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(n=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount}),(c=Object(Q.a)(e.items))[i]=n):c=e.items.concat(t.item),{items:c,totalAmount:a}}if("Remove"===t.type){var s,o,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],d=e.totalAmount-u.price;return 1===u.amount?s=e.items.filter((function(e){return e.id!==t.id})):(o=Object(k.a)(Object(k.a)({},u),{},{amount:u.amount-1}),(s=Object(Q.a)(e.items))[l]=o),{items:s,totalAmount:d}}return Z},te=function(e){var t=Object(r.useReducer)(ee,Z),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItems:function(e){a({type:"ADD",item:e})},removeItems:function(e){a({type:"Remove",id:e})},clearItems:function(){a({type:"clear"})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(te,{children:[n&&Object(m.jsx)(q,{onClose:function(){c(!1)}}),Object(m.jsx)(x,{onClick:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(D,{})})]})};a.a.render(Object(m.jsx)(ne,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9552f765.chunk.js.map