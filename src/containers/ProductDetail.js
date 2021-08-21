import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ProductDetail = (params) => {
  const { productId } = useParams();
  console.log("test", productId);
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
