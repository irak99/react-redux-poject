import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductComponent = (props) => {
  // console.log("props", props);
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, category, title, image, price } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
        <button onClick={props.handler(id)}>test</button>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
