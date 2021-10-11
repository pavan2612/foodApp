import CartContext from './Cart-Context';
import { useReducer  } from 'react';

const defaultCartState = {items :[],totalAmount:0}

const cartReducer = (state,action) => {
    if(action.type ==='ADD'){
        const updatedAmount = state.totalAmount + action.item.price*action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => item.id===action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItem;
        let updatedItems;
        if (existingCartItem){
            updatedItem = {...existingCartItem,amount:existingCartItem.amount+action.item.amount}
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }else{
            updatedItems = state.items.concat(action.item)
        }

        return{
            items:updatedItems,
            totalAmount:updatedAmount
        }
    }
    if (action.type === 'Remove'){
        const existingCartItemIndex = state.items.findIndex(item => item.id===action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems
        let updatedItem
        if(existingCartItem.amount===1){
           updatedItems =  state.items.filter((item) => item.id !== action.id)
        }else{
            updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems =[...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }

    return  defaultCartState   
}
const CartProvider = (props) => {
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCart({type:'ADD',item:item})
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCart({type:'Remove',id:id})
    }
    const clearCartHandler = () => {
        dispatchCart({type:'clear'})
    }    
    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItems: addItemToCartHandler,
        removeItems: removeItemFromCartHandler,
        clearItems : clearCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider