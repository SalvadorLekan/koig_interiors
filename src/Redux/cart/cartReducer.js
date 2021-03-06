import { cartActionTypes } from './cartActionTypes'
import { addItem, removeItemFromCart, reduceCartQuantity, increaseCartQuantity, reduceItemCount } from './cartUtils';


const initialState = {

    cartItems: [],
    itemCount: 0
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload),
                itemCount: Number(state.itemCount + 1)
            }
        case cartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                itemCount: reduceItemCount(state.itemCount)

            }
        case cartActionTypes.REDUCE_QUANTITY:
            return {
                ...state,
                cartItems: reduceCartQuantity(state.cartItems, action.payload, state.itemCount),


            }
        case cartActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: increaseCartQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    };
};

export default cartReducer;