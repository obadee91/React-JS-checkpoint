
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Form, Button } from 'react-bootstrap'
import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">
      <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form6Example8'
        label='Create an account?'
        defaultChecked
      />

      <MDBBtn className='mb-4' type='submit' block>
        Place order
      </MDBBtn>
    </form>
      {/* <div className="form-container">
            <form className="signup-form">
                <Form.Group>
                <Form.Control className="name-Form.Control" type="text" placeholder="name" name="name"/>
                <Form.Control className="email-input" type="text" placeholder="name" name="name"/>
                <Button className="submit-input" value="submit" type="submit">submit</Button> 
                </Form.Group>

            </form>


        </div> */}
      
      
    </div>
  );
}

export default App;


