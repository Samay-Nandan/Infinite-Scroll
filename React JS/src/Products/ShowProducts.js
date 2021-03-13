import React, { useState, useEffect } from "react";
import Styles from "./Styles/ShowProducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Store/Action/FetchProducts";
import Spinner from "../Shared/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

let Limit = 10;

const ShowProducts = () => {
  const [Page, setPage] = useState(1);
  const [hasMoreState, sethasMoreState] = useState(true);
  const FetchProducts = useSelector((state) => state.FetchProducts);
  const dispatch = useDispatch();

  let ProductsState = <Spinner></Spinner>;
  if (FetchProducts.Products && !FetchProducts.Loading) {
    ProductsState = FetchProducts.Products.map(
      ({ _id, Title, Image, Description }) => {
        return (
          <div className={Styles.Card} key={_id}>
            <h1>{Title}</h1>
            <img src={Image} alt={Title}></img>
            <p>{Description}</p>
          </div>
        );
      }
    );
  }

  const hasNextPageHandler = () => {
    if (Page * Limit >= FetchProducts.Count) {
      sethasMoreState(false);
    } else {
      setPage(Page + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProducts(Page, Limit));
  }, [dispatch, Page]);

  return (
    <div className={Styles.ShowProducts}>
      <InfiniteScroll
        dataLength={FetchProducts.Products.length}
        next={hasNextPageHandler}
        hasMore={hasMoreState}
        loader={hasMoreState ? <Spinner></Spinner> : ""}
      >
        {ProductsState}
      </InfiniteScroll>
    </div>
  );
};

export default ShowProducts;
