import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Location() {
  return (
    <>
    <div className='container-fluid min-vh-100 w-100 d-flex justify-content-center align-items-center'style={{backgroundColor:'transparent',position:'absolute'}}>
     <div className='container-fluid h-25 w-25 p-3 bg-light'style={{borderRadius:'10px'}}>
          <p className='bg-secondary pt-3 py-3 text-light' style={{fontWeight:'700'}}>Choose your location</p>
          <p>Select a delivery location to see product availability and delivery options</p>
          <button className='btn w-100 btn-warning'>Sign in to see your addresses</button>
          <p className='text-center pt-3 text-secondary'>or enter an Indian pincode</p>
          <div className='input-group'>
            <input type='text' id='text' className='form-control'></input>
            <button className='btn btn-secondary'>Apply</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Location