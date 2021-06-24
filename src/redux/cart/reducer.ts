import { Types } from "./types";
import {
  addItemsToCart,
  incrementItemQty,
  reduceItemQty,
} from "./utils";

interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
  stock: number;
}
interface CartState {
  cartItems: Item[] | any[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case Types.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case Types.REDUCE_ITEM_QTY:
      return {
        ...state,
        cartItems: reduceItemQty(state.cartItems, action.payload),
      };
    case Types.INCREMENT_ITEM_QTY:
      return {
        ...state,
        cartItems: incrementItemQty(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
