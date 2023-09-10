import React, { useEffect, useState } from "react";
import { productsAPI } from "requester";

const Catalog = () => {
  const [productsList, setProductsList] = useState([]);

  const getProducts = async () => {
    const response = await productsAPI.get("notebooks/");
    const products = response.data;
    setProductsList(products);
  };
  console.log("productsList: ", productsList);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {productsList?.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

// Catalog.propTypes = {};
export default Catalog;
