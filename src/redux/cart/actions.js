import {
  GET_ALL_PRODUCTS,
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
  DECREMET_ITEM_CART,
  INCREMET_ITEM_CART
} from "../actions";

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
  };
}

export function receiveProducts(productId) {
  return {
    type: RECEIVE_PRODUCTS,
    productId,
  };
}

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId,
  };
}
export function incremetToCart(productId) {
  return {
    type: INCREMET_ITEM_CART,
    productId,
  };
}export function decrementToCart(productId) {
  return {
    type: DECREMET_ITEM_CART,
    productId,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId,
  };
}

export function checkout() {
  return {
    type: CHECKOUT_REQUEST,
  };
}

export function checkoutSuccess(cart) {
  return {
    type: CHECKOUT_SUCCESS,
    cart,
  };
}

export function checkoutFailure(error) {
  return {
    type: CHECKOUT_FAILURE,
    error,
  };
}
