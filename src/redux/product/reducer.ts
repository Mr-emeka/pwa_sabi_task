import { Types } from "./types";

interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  stock: number;
}
interface ProductState {
  items: Item[];
  item: Record<string, string>;
  searchTerm: string;
  filterBy: string;
}

const initialState: ProductState = {
  items: [
    {
      id: "1234ads421egjdsc",
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aimescryptoboard.appspot.com/o/box.png?alt=media&token=4ae95a12-4e8d-4651-be10-14ab6c04af7f",
      price: 5000,
      location: "Lagos",
      stock: 25,
    },
    {
      id: "1234ads421egjdsq",
      name: "Jacket",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aimescryptoboard.appspot.com/o/mund.png?alt=media&token=3b2f26a0-f6fd-414f-ad21-a524d36dfca3",
      price: 10000,
      location: "Kaduna",
      stock: 5,
    },
    {
      id: "1234ads421egjdsv",
      name: "Hats",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aimescryptoboard.appspot.com/o/kopi.png?alt=media&token=e1534f98-0136-4e49-b3b4-35bc31838566",
      price: 20000,
      location: "Ogun",
      stock: 15,
    },
    {
      id: "1234ads421egjdsk",
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aimescryptoboard.appspot.com/o/shoe.png?alt=media&token=d06b875f-7513-4390-aaad-32f438408597",
      price: 40000,
      location: "Enugu",
      stock: 5,
    },
    {
      id: "1234ads421egjdsl",
      name: "NIKE Huararche 2019",
      description:
        "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
      image:
        "https://firebasestorage.googleapis.com/v0/b/aimescryptoboard.appspot.com/o/cocacola.png?alt=media&token=2335728e-d3ab-4dcf-9774-fcb4383fc7ae",
      price: 60000,
      location: "Abia",
      stock: 20,
    },
  ],
  item: {},
  searchTerm: "",
  filterBy: "",
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.FILTER_PRODUCT_BY:
      return { ...state, filterBy: action.payload };
    case Types.SEARCH_PRODUCT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
