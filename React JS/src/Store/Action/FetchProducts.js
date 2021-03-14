import axios from "axios";

export const fetchProducts = (Page, Limit) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(process.env.REACT_APP_GETPRODUCTS_URL + "/" + Page + "/" + Limit)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};

export const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};

export const fetchProductsSuccess = (Products) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    payload: Products.response,
    documentCount: Products.TotalNumber,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    payload: error,
  };
};
