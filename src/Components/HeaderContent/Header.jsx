import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
function Header() {
 const naviStyle ={
  width:"25%"
 }
 const naviStyle1 ={
  width:"40%"
 }
 const naviStyle2 ={
  width:"35%",
 }
 const border = {
  border:"none"
 }
 const navinput = {
  height:"100%",
  width:"76%",
  outline:"none"
 }
 const search = {
  height: "100%",
  width:"10%",
  cursor:"pointer",
  float:"right",
 }
 const location={
  height:"25px",
  marginTop:"20px"
 }
 const insta = {
  marginRight:"5px"
 }
 const headerHW ={
  height:"10vh"
 }
  return (
    <>
    <div className='container-fluid   bg-dark navigation'>
     <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12' >
       <div className='navigationimg'>
           <img className='img-fluid' style={{height:"5vh"}} src='./images/PngItem_12080.png' />
        </div>   
       <div className='navigationaddress d-flex'>
       <img style={location} src='./images/icons8-location-50.png'></img>
       <div class="location-address">
        <div class="address">Delivering to Delhi 110001</div>
        <div class="addresss text-white">Update location</div>
       </div>
        </div>    
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center ' >
       <div className='inputtag d-flex justify-content-center'>
        <select className='navselect'>
         <option>All</option>
        </select>
        <input style={navinput} type='text' placeholder='Search Amezon.in'></input>
        <div class="d-flex bg-light justify-content-center align-items-center">
         <i style={insta} class="ri-instagram-line"></i>
         </div>
         <div class="bg-warning d-flex justify-content-center align-items-center " style={search}>
           <i class="ri-search-line"></i>
         </div>
       </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 text-white d-flex ' >
       <div className='navright1 d-flex justify-content-center align-items-center'>
        <img className="flag" src="./images/Screenshot 2024-01-17 151111.png"/>
        <select style={border}>
          <option>EN</option>
        </select>
       </div>
       <div className='navright1 pt-3 px-2'>
        <div className='navsign p-0'>Account & Lists</div>
        <span className='navsigns'>Hello, sign in</span>
       </div>
       <div className='navright1 pt-3 px-4'>
       <div className='navsign p-0'>Returns</div>
        <span className='navsigns'>& Orders</span>
       </div>
       <div className='navright1 d-flex justify-content-center align-items-center'>
        <img className='cart' src="./images/icons8-cart-50.png"/>
        <div className="pt-4">cart</div>
       </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Header