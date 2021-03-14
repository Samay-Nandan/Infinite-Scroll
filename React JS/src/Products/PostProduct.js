import React, { useState } from "react";
import Styles from "./Styles/PostProduct.module.css";
import axios from "axios";

const PostProduct = ({ history }) => {
  const [TitleState, setTitleState] = useState("");
  const [ImageLinkState, setImageLinkState] = useState("");
  const [DescriptionState, setDescriptionState] = useState("");
  const [SavingDataState, setSavingDataState] = useState("");

  const PostDataHandler = (event) => {
    event.preventDefault();

    const Data = {
      title: TitleState.trim(),
      image: ImageLinkState.trim(),
      DescriptionState: DescriptionState.trim(),
    };

    axios.post(process.env.REACT_APP_POSTPRODUCTS_URL, Data).then((result) => {
      if (result.data.response === "Product Saved Successfully") {
        history.push("/");
      }
      setSavingDataState(result.data.response);
    });
  };

  return (
    <div className={Styles.PostProduct}>
      <input
        type="text"
        placeholder="Title (Required)"
        onChange={(event) => {
          setTitleState(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Image Link (Required)"
        onChange={(event) => {
          setImageLinkState(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(event) => {
          setDescriptionState(event.target.value);
        }}
      />
      <button onClick={PostDataHandler}>Post Data</button>
      {SavingDataState.length !== 0 ? SavingDataState : ""}
    </div>
  );
};

export default PostProduct;
