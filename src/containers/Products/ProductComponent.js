import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { Card, Container, Button,Col,Row } from "react-bootstrap";
import {addToCart} from "../../redux/actions/productActions";
const ProductComponent = (props) => {
  // console.log("props", props);
  const dispatch = useDispatch();
  const toogleCart = (e) => {
    // e.preventDefault();
    dispatch(addToCart(e.currentTarget.id))
    console.log('You clicked submit.', e.currentTarget.id);
  }
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, category, title, image, price } = product;
    return (
  <Col key={id}>
<Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {price} ден
    </Card.Text>
    <Button id={id} onClick={toogleCart} variant="primary">add to cart</Button>
  </Card.Body>
</Card>
</Col>
    );
  });
  return  <Container><Row xs={1} md={2} lg={3} xl={4}  className="g-4">{renderList}</Row></Container>;
};
export default ProductComponent;
