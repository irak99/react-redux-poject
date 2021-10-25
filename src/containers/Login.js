import axios from 'axios'
import React, { Component } from 'react'
import { Container,Button, Checkbox, Form } from 'semantic-ui-react'
export default class Login extends Component {
    login = async ()=>{
       const response = await axios.post("http://localhost:8080/login",{username:"user2",password:"password"},{'Content-Type': 'application/json'})
       .then(response => response)
       .catch((err) => {
        console.log(err);
      });
      if (response.status == 201) {
          // const dispatch = useDispatch(function)
      }
    console.log(response);
    }
    render(){
        return(
            <Container>
            <Form>
            <Form.Field>
              <label>Username</label>
              <input type="text" placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button onClick={this.login} type='submit'>Login</Button>
          </Form>
          </Container>
        )
    }
}