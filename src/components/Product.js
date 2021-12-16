import React, { useState } from "react";
import axios from "axios";


const Product =  (props) => {
  const [product, setProduct] = useState(props.product);
  const Edit = async (id) => {
      const newProduct = {
        "title": product.title,
        "price": product.price,
        "image01": product.image01,
        "image02": product.image01,
        "categorySlug": product.categorySlug,
        "color": product.colors,
        "slug": product.slug,
        "size": product.size,
        "description": product.description
      }
      console.log(newProduct);
     await axios.put(`http://localhost:8000/products/${id}`, newProduct);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={product.title}
        onChange={(event) => {
          setProduct({
            ...product,
            title: event.target.value,
          });
        }}
      />
      <input type="text" placeholder="price" value={product.price} onChange={(event) => {
          setProduct({
            ...product,
            price: event.target.value,
          });
        }}/>
      <input type="text" placeholder="image" value={product.image01} onChange={(event) => {
          setProduct({
            ...product,
            image01: event.target.value,
          });
        }}/>
      <input type="text" placeholder="color" value={product.colors} onChange={(event) => {
          setProduct({
            ...product,
            colors: event.target.value.replace(" ", "").split(","),
          });
        }}/>
      <input type="text" placeholder="size" value={product.size} onChange={(event) => {
          setProduct({
            ...product,
            size: event.target.value.replace(" ", "").split(","),
          });
        }}/>
      <button onClick={() => Edit(product.id)}>Update</button>
    </div>
  );
};

export default Product;
