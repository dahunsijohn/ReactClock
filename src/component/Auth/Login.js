import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 const axios = require('axios');

 
 
  class Login extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
          email: '',
          password: '',
          loginSucess: false,
          loginFail: false,
          fullname:''
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleError() {
    console.log('THIS', this);
}

 handleSubmit (event)  {
    event.preventDefault()
    axios.post('http://localhost:3000/login', this.state)
        .then(function (response) {
            const data = response.data
            if (data.status) {
                this.setState({
                    // loginSucess:true,
                    // fullname:response.data.userDetail.fullname
                    loginSuccess: 'congratulations! you are logged in'
                    
                })
            }

            else {
                this.setState({
                    loginFail:true
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}

handleChange(event) {
    const value = event.target.value
    const id = event.target.id
    this.state[id] = value
}





   render() {
     return (
      <div className='form'>
      <h3>SIGN IN TO YOUR ACCOUNT</h3>
      <Form className='formbox'>
     
      <Form.Label>Username</Form.Label>
<Form.Group controlId="formGroupUsername">
 <Form.Control type="text"  onChange={this.handleChange} placeholder=" Please enter your Username" />
</Form.Group> 

<Form.Label>Password</Form.Label>
<Form.Group controlId="formGroupPassword">
 <Form.Control type="password" onChange={this.handleChange} placeholder="**********" size ='xxl'/>
</Form.Group>


{['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check className="leftCheck" inline label= "Keep me logged in" type={type} id={`inline-${type}-1`} />
                        </div>
                    ))}
                    <br />
<Button id='btn'>Please Login Here</Button>
<span id='samll'>Forgot your Password?</span>
</Form>
{ this.state.loginFail & (
  <Alert variant='danger'>
  <h4>
      login failed check details
  </h4>
</Alert>
) }

{ this.state.loginSucess && (
  <Alert variant='success'>
  <h4> login in successfull  {this.state.fullname}</h4>
   </Alert>
) }


  </div>
     )
   }
 }
 
 export default Login;

