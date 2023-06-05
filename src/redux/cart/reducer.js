import { click } from "@testing-library/user-event/dist/click";
import { product } from "ramda";
import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
  DECREMET_ITEM_CART,
  INCREMET_ITEM_CART,
} from "../actions";

const initialState = {
  checkoutStatus: {
    checkoutPending: false,
    error: null,
  },
  quantityById: [],
  products: [],
};

function checkoutStatus(state = initialState.checkoutStatus, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        checkoutPending: true,
        error: null,
      };
    case CHECKOUT_SUCCESS:
      return initialState.checkoutStatus;
    case CHECKOUT_FAILURE:
      return {
        checkoutPending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

function cartReducer(products = [], action) {
  const { productId } = action;
  console.log("productId ******",productId)
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return initialState.products;
    case ADD_TO_CART:
      return [...products, productId];

    case REMOVE_FROM_CART:
      return [...products.filter((product) => product.id !== productId.id)];

    //products.length= products.length? products.length-1:[]
    //return [products];
    case INCREMET_ITEM_CART:
      return [
        ...products.map((x) => {
          if (x.id === productId.id)
            return {
              ...x,
              counts: x.counts + 1,
            };
          return x;
        }),
      ];

    case DECREMET_ITEM_CART:
      return [
        ...products.map((x) => {
          if (x.id === productId.id && x.counts > 1)
            return {
              ...x,
              counts: x.counts - 1,
            };
          return x;
        }),
      ];

    default:
      return products;
  }
}

export default combineReducers({
  checkoutStatus,
  cartReducer,
});
