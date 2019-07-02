import React from 'react'
import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';

export default function Signup() {
    return (
        <div className='form'>
            <h3>SIGN UP HERE PLEASE</h3>
            <Form className='formbox'>
            <Form.Label>Full Name</Form.Label>
      <Form.Group controlId="formGroupUsername">
       <Form.Control type="text" placeholder=" Please enter your Full Name" />
     </Form.Group> 
            <Form.Label>Username</Form.Label>
      <Form.Group controlId="formGroupUsername">
       <Form.Control type="text" placeholder=" Please enter your Username" />
     </Form.Group> 
     <Form.Group controlId="formGroupEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="nesa@nigeria.com" />
   </Form.Group>
     <Form.Label>Password</Form.Label>
     <Form.Group controlId="formGroupPassword">
       <Form.Control type="password" placeholder="**********" size ='xxl'/>
    </Form.Group>
    <Form.Group controlId="formGroupConfirmPassword">
      <Form.Label>Confrim Password</Form.Label>
       <Form.Control type="password" placeholder="*************" />
     </Form.Group>
    <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Keep me logged in" />
  </Form.Group>
  <Button id='btn' size='lg' block>Sign-up</Button>
    </Form>
   
    
        </div>
    )
}

