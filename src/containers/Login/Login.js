import axios from "axios";
import React, { Component } from "react";
import { FloatingLabel, Form, Container, Button, Alert } from "react-bootstrap";
export default class LoginComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
        email:'',
        password:'',
        error:false,
        redirect: null
      }
    }
  login = async (e) => {;
    e.preventDefault()
    await axios
      .post(
        "http://localhost:8080/login",
        { username: this.state.email, password: this.state.password },
        { "Content-Type": "application/json" }
      )
      .then((response) => {
       
    if (response.status === 201) {
      console.log(this.props);
      this.setState({error : false}) 
      this.props.setLogin(response.data)
      this.props.history.push('/')

    }else{
      console.log(response);
    }
      })
      .catch((err) => {
        console.log(err);
        this.setState({error : true})
      });
  };
  updateEmail(e){
    this.setState({email : e.target.value})
  }
  updatePassword(e){
    this.setState({password : e.target.value})
  }

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control onChange={e => this.updateEmail(e)} type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control onChange={e => this.updatePassword(e)} type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button onClick={this.login} variant="primary" type="submit">
            Submit
          </Button>
          {this.state.error ? <Alert className="mt-3" variant='danger'>
    Погрешен емаил или лозинка обидете се повторно.
   </Alert> : null}
        </Form>
      </Container>
    );
  }
}

