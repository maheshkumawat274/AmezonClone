import React from 'react'
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <>
    <div className='container d-flex justify-content-center'>
      <div className='container-fluid w-25'>
        <div className='w-100 d-flex justify-content-center mt-3' >
          <img style={{height:'30px'}} className='img-fluid' src='./images/amezonbold.png' ></img>
        </div>
      <form className='p-3' style={{border:'1px solid gray',borderRadius:'10px '}}>
          <p className='fs-3'>Create Account</p>
            <label for="name" className="form-label">Your name</label>
            <input type='text' className='form-control' id='name' placeholder='First and last name'></input>
            <label for='number'className='form-label'>Mobile number</label>
            <div className="input-group">
              <span className="input-group-text">
              <select>
                <option value="+91">IN+91</option>
            </select>
              </span>
              <input type="text" className="form-control" id="number"
              />
            </div>
            <label className='form-label' for='password1'>Password</label>
            <input type='password' className='form-control' id='password1' placeholder='At least 6 characters'></input>
            <a style={{fontSize:"12px"}}>Passwords must bw at least 6 characters.</a><br></br><br></br>
            <p style={{fontSize:"12px"}}>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
            <button className='btn btn-warning px-5 mt-2 w-100'>Verify mobile number</button>
          </form>
          <hr/>
          <p className='px-3' style={{fontSize:"12px"}}>Buying for work?<a href='#'>Create a free business account</a></p>
          <hr/>
          <p className='px-3' style={{fontWeight:"700",fontSize:"14px"}}>
            Already have an account?<Link style={{textDecoration:"none"}} to='/login'><a href='#'>Sign in</a></Link></p>
          <p className='px-3' style={{fontSize:"12px"}}>By creating an account or logging in, you agree to Amazon’s<a href='#'>Conditions of Use </a> and <a href='#'>Privacy Policy.</a></p>
        <div className='px- 3 container mt-2 signitem'>
          <ul className='list-unstyled d-flex justify-content-evenly' style={{fontSize:"12px"}}>
            <li style={{color:"blue"}}> Conditions of Use </li>
            <li style={{color:"blue"}}> Privacy Notice </li>
            <li style={{color:"blue"}}> Help</li>
            
          </ul>
          <div className='text-center' style={{fontSize:"12px",}}>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Register