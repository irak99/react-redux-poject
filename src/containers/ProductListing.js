import React, { useEffect,useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { useLocation } from 'react-router-dom'
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const location = useLocation();
  console.log(location.pathname);
  
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    let url = location.pathname !=="/"?`https://fakestoreapi.com/products/category${location.pathname}` :"https://fakestoreapi.com/products"
    const response = await axios
      .get(url)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    console.log('ovde');
    fetchProduct();
  },[location.pathname]);
  console.log("pr", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
