import { Types } from "./types";
import { Dispatch, AnyAction } from "redux";

const addItem = (item: any) => ({
  type: Types.ADD_ITEM,
  payload: item,
});
const clearItemFromCart = (item: any) => ({
  type: Types.CLEAR_ITEM_FROM_CART,
  payload: item,
});
const removeItem = (item: any) => ({
  type: Types.REMOVE_ITEM,
  payload: item,
});

const reduceItemQty = (item: any) => ({
  type: Types.REDUCE_ITEM_QTY,
  payload: item,
});
const incrementItemQty = (item: any) => ({
  type: Types.INCREMENT_ITEM_QTY,
  payload: item,
});

export const asyncAddItem = (payload: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addItem(payload));
  };
};

export const asyncClearItemFromCart = (payload: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(clearItemFromCart(payload));
  };
};

export const asyncRemoveItem = (payload: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(removeItem(payload));
  };
};

export const asyncReduceItemQty = (payload: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(reduceItemQty(payload));
  };
};

export const asyncIncrementItemQty = (payload: any) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(incrementItemQty(payload));
  };
};
