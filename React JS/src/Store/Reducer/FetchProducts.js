const InitialState = {
  Products: [],
  Error: "",
  Loading: true,
  Count: 0,
};

const FetchedProducts = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return { ...state };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        Products: [...state.Products, ...action.payload],
        Count: action.documentCount,
        Loading: false,
      };
    case "FETCH_PRODUCT_FAILURE":
      return { ...state, Error: action.payload };
    default:
      return state;
  }
};

export default FetchedProducts;
