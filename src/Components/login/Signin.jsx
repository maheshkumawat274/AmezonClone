import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css'
import { Link } from 'react-router-dom';
function Signin() {
  const imghw = {
    height:"50px",
    width:"100px",
  }
  return (
    <>
    <div className='container-fluid d-flex justify-content-center p-5' style={{backgroundColor:"white"}}>
    
      <div className='card w-25 maincard'>
      <div className='w-25 img' >
        <img className='img-fluid' src='./images/amezonbold.png' ></img>
      </div>
        <div className='card p-3 px-4 mt-3 borders'>
          <p className='fs-3'>Sign in</p>
          <a style={{fontWeight:"700"}}>Email or mobile phone number</a>
          <form>
            <input type='text' className='form-control'></input>
            <button className='btn btn-warning px-5 mt-2 w-100'>Continue</button>
          </form>
          <p style={{fontSize:"15px"}}>By continuing,  your agree to Amazon's <a href='#' style={{textDecoration:"none"}}>Conditions of Use</a>and <a href='#' style={{textDecoration:"none"}}>Privacy Notice.</a></p>
          <p><a href='#' style={{textDecoration:"none"}}>Need help?</a></p>
          <hr/>
          <p style={{fontWeight:"700"}}>Buying for work?</p>
          <a href='#' style={{textDecoration:"none"}}>Shop on Amazon Business</a>
        </div>
        <p style={{fontSize:"15px",color:"gray",textAlign:"center",paddingTop:"5px"}}>New to Amazon?</p>
        <Link to='/register'><button className='btn w-75 mx-5 buttonSign'>Create your Amezon Account</button></Link>
        <hr/>
        <div className='container mt-2 signitem'>
          <ul className='list-unstyled d-flex justify-content-evenly' style={{fontSize:"12px"}}>
            <li style={{color:"blue"}}> Conditions of Use </li>
            <li style={{color:"blue"}}> Privacy Notice </li>
            <li style={{color:"blue"}}> Help</li>
            
          </ul>
          <div style={{fontSize:"15px",textAlign:"center"}}>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Signin