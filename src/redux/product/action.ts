import { Types } from "./types";
import { Dispatch, AnyAction } from "redux";

const search = (payload: any) => ({
  type: Types.SEARCH_PRODUCT,
  payload,
});

export const searchProduct = (payload: any) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(search(payload));
  };
};

const filter = (payload: any) => ({
  type: Types.FILTER_PRODUCT_BY,
  payload,
});

export const filterProduct = (payload: any) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(filter(payload));
  };
};
