import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Container, Icon, Image, Label } from "semantic-ui-react";
const ProductComponent = (props) => {
  // console.log("props", props);
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, category, title, image, price } = product;
    return (
    
      <Link to={`/product/${id}`}>
          <Card>
            <Image
              label={{ as: "a", corner: "left", icon: "heart", color: "red" }}
              src={image}
              wrapped
              ui={false}
            />
            <Card.Content>
              {/* TODO LOADER https://react.semantic-ui.com/elements/placeholder/#types-card */}
              <Card.Header>{title}</Card.Header>
              <Card.Meta>
                <Label as="a" color="red" ribbon>
                  50% discount
                </Label>
                <span className="date">${price}</span>
              </Card.Meta>
              <Card.Description>
                {category}
                <Label as="a" tag>
                  New
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="cart" />
                Add to cart
              </a>
            </Card.Content>
          </Card>
       </Link>
        
    );
  });
  return  <Container fluid><Card.Group  itemsPerRow={4}>{renderList}</Card.Group></Container>;
};
export default ProductComponent;
