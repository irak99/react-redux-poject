import { Component } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
});
class ShoppingCart extends Component {
  render() {
    console.log(Object.keys(this.props.cart) ? 'sobe' : 'false');
    return (
      <>
             <h2 >Shopping cart</h2>
        <Row xs={1} md={2} className="g-0 w-100">
   
          {Object.keys(this.props.cart).length !==0 ? this.props.cart.map((item, idx) => (
            <>
              <Col key={idx}>
                <Card style={{ width: "10rem" }}>
                  <Card.Img
                    style={{ height: "7rem" }}
                    variant="top"
                    src={item.image}
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "7rem" }}>
                      {item.title}
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
                <InputGroup className="mb-3">
                  <Button variant="outline-secondary" id="button-addon1">
                    -
                  </Button>
                  <FormControl
                    value="1"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <Button variant="outline-primary" id="button-addon1">
                    +
                  </Button>
                </InputGroup>
              </Col>
            </>
          )):(<div className='w-100 d-flex flex-column justify-center'><h1 className='text-center mt-3'>Empty shopping cart</h1>
          <Button style={{maxWidth:'300px'}} className='justify-center' size='lg' variant="primary">Go shopping</Button></div>)
          }
        </Row>
      </>
    );
  }
}

export const Cart = connect(mapStateToProps)(ShoppingCart);
