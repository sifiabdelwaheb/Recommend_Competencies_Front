import { product } from "ramda";
import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../actions";

const defaultState = {
    products: [],
    selectedProduct: {
        image: null,
        description: null,
        title: null,
        price: null
    }
};

export default function shop(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, products: action.products}
        case REMOVE_PRODUCT:
            return Object.assign({}, state, {
                products: [
                    ...state.products.filter(product => product.id !== action.product.id)
                ]
            })
        case ADD_PRODUCT:
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            })
        case SET_VIEW_PRODUCT_ID:
            return Object.assign({}, state, {
                productId: action.productId
            })
        case SET_SELECTED_PRODUCT:
            return Object.assign({}, state, {
                selectedProduct: action.selectedProduct
            })
        default:
            return state
    }
}
