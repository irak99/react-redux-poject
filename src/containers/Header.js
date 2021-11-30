import React, { Component } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart, Person } from 'react-bootstrap-icons';
import { connect } from "react-redux";
const mapStateToProps = state => ({
  user: state.user,
  card: state.cart
});
class MenuExamplePointing extends Component {
  render() {
    console.log('header', this.props.card);
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Мажи" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Фармерки</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Кошули</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Маици</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Се</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Жени" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Фармерки</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Кошули</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Маици</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Се</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Деца" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Фармерки</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Кошули</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Маици</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Се</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/category' href="#">Акција</Nav.Link>
              <Nav.Link as={Link} to='/aboutus' href="#">За нас</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/login' href="#deets"><Person size={20}></Person>{this.props.user.username}</Nav.Link>
              <Nav.Link as={Link} to='/cart' href="#">
                <Cart size={20} />{this.props.card ? this.props.card.length : 0}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export const Header = connect(
  mapStateToProps
)(MenuExamplePointing);
