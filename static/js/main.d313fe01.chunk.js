(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,c){e.exports={form:"CheckOut_form__1coou",control:"CheckOut_control__2Okv2",actions:"CheckOut_actions__2cGrn",submit:"CheckOut_submit__12uNM",invalid:"CheckOut_invalid__W9FTc"}},,function(e,t,c){e.exports={"cart-items":"Cart_cart-items__f8cci",total:"Cart_total__3Ipr4",actions:"Cart_actions__UijDM","button--alt":"Cart_button--alt__3Ue5t",button:"Cart_button__VMcXh"}},function(e,t,c){e.exports={"cart-item":"CartItem_cart-item__2wO0C",summary:"CartItem_summary__33Yp1",price:"CartItem_price__3ymTK",amount:"CartItem_amount__1SaWN",actions:"CartItem_actions__UK-q9"}},,,function(e,t,c){e.exports={button:"HeaderCartButton_button__1agSL",icon:"HeaderCartButton_icon__3uBlo",badge:"HeaderCartButton_badge__1vA0Z",bump:"HeaderCartButton_bump__OhyLQ"}},,function(e,t,c){e.exports={meals:"AvailableMeals_meals__Izzhb","meals-appear":"AvailableMeals_meals-appear__2VYXB",loading:"AvailableMeals_loading__yvcdC",error:"AvailableMeals_error__3Rh91"}},function(e,t,c){e.exports={meal:"MealItem_meal__2O1K7",description:"MealItem_description__1SOvW",price:"MealItem_price__37iwO"}},function(e,t,c){e.exports={backdrop:"Modal_backdrop__1P3IY",modal:"Modal_modal__3IJJP","slide-down":"Modal_slide-down__3_lCe"}},,function(e,t,c){e.exports={header:"Header_header__2v6c4","main-image":"Header_main-image__wjfYS"}},,function(e,t,c){e.exports={card:"Card_card__2V_he"}},function(e,t,c){e.exports={form:"MealItemForm_form__3EvDW"}},function(e,t,c){e.exports={input:"Input_input__3UwOJ"}},function(e,t,c){e.exports={summary:"MealsSummary_summary__2JtlP"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),i=(c(26),c(2)),r=c(1),s=c.n(r),o=c.p+"static/media/meals.2971f633.jpg",l=c(15),u=c.n(l),d=c(9),j=c.n(d),m=c(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],totalAmount:0,addItems:function(){},removeItems:function(){},clearItems:function(){}}),h=function(e){var t=Object(r.useState)(!0),c=Object(i.a)(t,2),n=c[0],a=c[1],s=Object(r.useContext)(O),o=s.items.reduce((function(e,t){return e+t.amount}),0),l=s.items,u="".concat(j.a.button," ").concat(n?j.a.bump:"");return Object(r.useEffect)((function(){if(0!==l.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[l]),Object(m.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:j.a.badge,children:o})]})},x=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:u.a.header,children:[Object(m.jsx)("p",{children:"React Meals"}),Object(m.jsx)(h,{onClick:e.onClick})]}),Object(m.jsx)("div",{className:u.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"A table full of delicious food!!"})})]})},f=c(17),p=c.n(f),_=function(e){return Object(m.jsx)("div",{className:p.a.card,children:e.children})},v=c(11),C=c.n(v),y=c(12),N=c.n(y),g=c(18),I=c.n(g),k=c(4),A=c(19),S=c.n(A),M=Object(r.forwardRef)((function(e,t){return Object(m.jsxs)("div",{className:S.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(k.a)({ref:t},e.input))]})})),w=function(e){var t=Object(r.useState)(!0),c=Object(i.a)(t,2),n=c[0],a=c[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var c=s.current.value,n=+c;n<1||0===c.trim().length?a(!1):e.onAddToCart(n)},children:[Object(m.jsx)(M,{label:"Amount",ref:s,input:{type:"number",id:"amount_"+e.id,min:"1",step:"1",defaultValue:"1",numberOfItems:{}}}),Object(m.jsx)("button",{children:"+ Add"}),!n&&Object(m.jsx)("p",{children:"Enter amount greater than 1"})]})},F=function(e){var t=Object(r.useContext)(O);return Object(m.jsxs)("li",{className:N.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("p",{className:N.a.description,children:e.description}),Object(m.jsxs)("p",{className:N.a.price,children:["$",e.price.toFixed(2)]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(w,{id:e.id,onAddToCart:function(c){t.addItems({id:e.id,name:e.name,amount:c,price:e.price})}})})]})},R=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),o=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),j=d[0],b=d[1];if(Object(r.useEffect)((function(){fetch("https://practicereact-755c2-default-rtdb.firebaseio.com/meals.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e)t.push({id:c,name:e[c].name,description:e[c].description,price:e[c].price});n(t),l(!1)})).catch((function(e){b(e.message)}))}),[]),o)return Object(m.jsx)("section",{children:Object(m.jsx)("p",{className:C.a.loading,children:"...Loading"})});if(j)return Object(m.jsx)("section",{children:Object(m.jsx)("p",{className:C.a.error,children:"Something went wrong"})});var O=c.map((function(e){return Object(m.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(_,{children:Object(m.jsx)("ul",{children:O})})})},P=c(20),D=c.n(P),H=function(){return Object(m.jsxs)("section",{className:D.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},B=function(){return Object(m.jsxs)("section",{children:[Object(m.jsx)(H,{}),Object(m.jsx)(R,{})]})},T=c(5),E=c.n(T),J=c(13),Y=c.n(J),z=function(e){return Object(m.jsx)("div",{className:Y.a.backdrop,onClick:e.onClick})},L=function(e){return Object(m.jsx)("div",{className:Y.a.modal,children:Object(m.jsx)("div",{className:Y.a.content,children:e.children})})},W=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[a.a.createPortal(Object(m.jsx)(z,{onClick:e.onClick}),document.getElementById("overLays")),a.a.createPortal(Object(m.jsx)(L,{children:e.children}),document.getElementById("overLays"))]})},U=c(6),V=c.n(U),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:V.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:V.a.summary,children:[Object(m.jsx)("span",{className:V.a.price,children:t}),Object(m.jsxs)("span",{className:V.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:V.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=c(21),q=c(3),X=c.n(q),G=function(e){var t=Object($.useState)({name:!0,street:!0,code:!0,city:!0}),c=Object(i.a)(t,2),n=c[0],a=c[1],s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=n.name?"":X.a.invalid,j=n.street?"":X.a.invalid,b=n.code?"":X.a.invalid,O=n.city?"":X.a.invalid;return Object(m.jsxs)("form",{className:X.a.form,onSubmit:function(t){t.preventDefault();var c=s.current.value,n=o.current.value,i=l.current.value,r=u.current.value,d=0!==c.trim().length,j=0!==n.trim().length,m=6===i.trim().length,b=0!==r.trim().length;a({name:d,street:j,code:m,city:b}),d&&j&&m&&b&&e.onConfirm({name:c,street:n,code:i,city:r})},children:[Object(m.jsxs)("div",{className:"".concat(X.a.control," ").concat(d),children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!n.name&&Object(m.jsx)("p",{children:"Please enter valid name!"})]}),Object(m.jsxs)("div",{className:"".concat(X.a.control," ").concat(j),children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!n.street&&Object(m.jsx)("p",{children:"Please enter valid street!"})]}),Object(m.jsxs)("div",{className:"".concat(X.a.control," ").concat(b),children:[Object(m.jsx)("label",{htmlFor:"code",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"code",ref:l}),!n.code&&Object(m.jsx)("p",{children:"Please enter valid code of 6 digits!!"})]}),Object(m.jsxs)("div",{className:"".concat(X.a.control," ").concat(O),children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!n.city&&Object(m.jsx)("p",{children:"Please enter valid city!"})]}),Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:X.a.submit,children:"Submit"})]})]})},Q=function(e){var t=Object(r.useState)(!1),c=Object(i.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),j=Object(i.a)(d,2),b=j[0],h=j[1],x=Object(r.useContext)(O),f="$".concat(x.totalAmount.toFixed(2)),p=x.items.length>0,_=function(e){x.addItems(Object(k.a)(Object(k.a)({},e),{},{amount:1}))},v=function(e){x.removeItems(e)},C=Object(m.jsx)("ul",{className:E.a["cart-items"],children:x.items.map((function(e){return Object(m.jsx)(K,{price:e.price,name:e.name,amount:e.amount,onAdd:_.bind(null,e),onRemove:v.bind(null,e.id)},e.id)}))});return Object(m.jsxs)(W,{onClick:e.onClose,children:[!l&&b&&Object(m.jsx)(r.Fragment,{children:Object(m.jsx)("div",{className:E.a.actions,children:Object(m.jsx)("button",{type:"button",className:E.a["button--alt"],onClick:e.onClose,children:"Close"})})}),l&&Object(m.jsx)("p",{children:"Successfully ordered. We will connect you shortly!!"}),!l&&!b&&Object(m.jsxs)(r.Fragment,{children:[C,Object(m.jsxs)("div",{className:E.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:f})]}),n&&Object(m.jsx)(G,{onConfirm:function(e){u(!0),fetch("https://practicereact-755c2-default-rtdb.firebaseio.com/usersData.json",{method:"POST",body:JSON.stringify({user:e,items:x.items})}),u(!1),h(!0),x.clearItems()},onCancel:e.onClose}),!n&&Object(m.jsxs)("div",{className:E.a.actions,children:[Object(m.jsx)("button",{className:E.a["button--alt"],onClick:e.onClose,children:"Close"}),p&&Object(m.jsx)("button",{className:E.a.button,onClick:function(){a(!0)},children:"Order"})]})]})]})},Z=c(16),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var c,n,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[i];return r?(c=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount}),(n=Object(Z.a)(e.items))[i]=c):n=e.items.concat(t.item),{items:n,totalAmount:a}}if("Remove"===t.type){var s,o,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],d=e.totalAmount-u.price;return 1===u.amount?s=e.items.filter((function(e){return e.id!==t.id})):(o=Object(k.a)(Object(k.a)({},u),{},{amount:u.amount-1}),(s=Object(Z.a)(e.items))[l]=o),{items:s,totalAmount:d}}return ee},ce=function(e){var t=Object(r.useReducer)(te,ee),c=Object(i.a)(t,2),n=c[0],a=c[1],s={items:n.items,totalAmount:n.totalAmount,addItems:function(e){a({type:"ADD",item:e})},removeItems:function(e){a({type:"Remove",id:e})},clearItems:function(){a({type:"clear"})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(m.jsxs)(ce,{children:[c&&Object(m.jsx)(Q,{onClose:function(){n(!1)}}),Object(m.jsx)(x,{onClick:function(){n(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(B,{})})]})};a.a.render(Object(m.jsx)(ne,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.d313fe01.chunk.js.map