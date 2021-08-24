import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();
  const handler = (some) => {
    console.log("test", some);
  };
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    // console.log(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("pr", products);
  return (
    <div className="ui grid container">
      <ProductComponent handler={() => handler} />
    </div>
  );
};

export default ProductListing;
