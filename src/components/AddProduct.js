import React, { useState } from "react";
import axios from "axios";

const AddProduct = (props) => {
  const [product, setProduct] = useState({});

  const Add = async () => {
    console.log(product);
    await axios.post("http://localhost:8000/products", product);
    window.location.reload();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(event) => {
          setProduct({
            ...product,
            title: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(event) => {
          setProduct({
            ...product,
            price: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(event) => {
          setProduct({
            ...product,
            image01: event.target.value,
            image02: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="catetory j do"
        onChange={(event) => {
          setProduct({
            ...product,
            categorySlug: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="slug"
        onChange={(event) => {
          setProduct({
            ...product,
            slug: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="color"
        onChange={(event) => {
          setProduct({
            ...product,
            color: event.target.value.replace(" ", "").split(","),
          });
        }}
      />
      <input
        type="text"
        placeholder="size"
        onChange={(event) => {
          setProduct({
            ...product,
            size: event.target.value.replace(" ", "").split(","),
          });
        }}
      />
      <input
        type="text"
        placeholder="mô tả"
        onChange={(event) => {
          setProduct({
            ...product,
            description: event.target.value,
          });
        }}
      />
      <button onClick={() => Add()}>Add</button>
    </div>
  );
};

export default AddProduct;
