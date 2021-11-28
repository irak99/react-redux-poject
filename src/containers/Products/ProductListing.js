import React, { useEffect,useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import { useLocation } from 'react-router-dom'
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const location = useLocation();
  console.log(location.pathname);
  
  const dispatch = useDispatch();
  const fetchProduct = async () => {
    // let url = location.pathname !=="/"?`https://fakestoreapi.com/products/category${location.pathname}` :"https://fakestoreapi.com/products"
     await axios
      .get('https://fakestoreapi.com/products').then((res)=>{
      console.log('res',res);
      dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    // 
    // console.log(response.data);
  };
  useEffect(() => {
    console.log('ovde');
    fetchProduct();
  },[location.pathname]);
  console.log("pr", products);
  return (
      <ProductComponent />
  );
};

export default ProductListing;
