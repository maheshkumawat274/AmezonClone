import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import AmezonLogo from './AmezonLogo';
import { Link } from 'react-router-dom';

function Header() {
 const navinput = {
  height:"100%",
  width:"76%",
  outline:"none"
 }
 const search = {
  height: "99%",
  width:"10%",
  cursor:"pointer",
  float:"right",
 }
 const location={
  height:"25px",
  marginTop:"20px"
 }
 const [RadioClick,setRadioValue] = useState('EN');
 function InputChange(event){
  const Ptag = document.getElementById('language');
   setRadioValue(
    Ptag.innerHTML = event.target.value
   )
 }
  
  return (
    <>
    <div className='container-fluid   bg-dark navigation'>
     <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12' >
       <Link to='/'><AmezonLogo/></Link>  
       <div className='navigationaddress d-flex'>
       <img style={location} src='./images/icons8-location-50.png'></img>
       <div class="location-address">
       <Link style={{textDecoration:'none'}}  to='/location'>
        <div  class="address">Delivering to Delhi 110001</div> 
        <div class="addresss text-white">Update location</div> </Link>
       </div>
        </div>    
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center align-items-center ' >
       <div className='inputtag d-flex justify-content-center'>
        <select className='navselect'>
         <option>All</option>
         <option>All Categories</option>
         <option>Amazon Devices</option>
         <option>Amazon Fashion</option>
         <option>Amazon Fresh</option>
         <option>Amazon Pharmacy</option>
         <option>Appliances</option>
         <option>Apps & Games</option>
         <option>Audible Audiobooks</option>
         <option>Baby</option>
         <option>Beauty</option>
         <option>Books</option>
         <option>Car & Motorbike</option>
         <option>Clothing & Accessories</option>
         <option>Collectibles</option>
         <option>Computers & Accessories</option>
         <option>Deals</option>
         <option>Electronics</option>
         <option>Furniture</option>
         <option>Gardern & Outdoors</option>
         <option>Gift Cards</option>
         <option>Grocery & Gourmet Foods</option>
         <option>Health & Personal Care</option>
         <option>Home & Kitchen</option>
         <option>Industrial & Scientific</option>
         <option>Jewellery</option>
         <option>Kindle Store</option>
         <option>Luggage & Bags</option>
         <option>Luxury Beauty</option>
         <option>Movies & TV Shows</option>
         <option>Music</option>
         <option>Musicsl Instruments</option>
         <option>Office Products</option>
         <option>Pet Supplies</option>
         <option>Prime Video</option>
         <option>Shoes & Handbags</option>
         <option>Software</option>
         <option>Sports, Fitness & Outdoors</option>
        </select>
        <input style={navinput} type='text' placeholder='Search Amezon.in'></input>
        
         <div class="bg-warning d-flex justify-content-center align-items-center" style={search}>
         <img style={{height:"30px"}} src='./images/search.png'></img>
         </div>
       </div>
      </div>
      <div className='col-lg-4 col-md-4 col-sm-12 text-white d-flex ' >
       <div className='navright1 d-flex justify-content-center align-items-center'>
        <img className="flag mx-1" src="./images/Screenshot 2024-01-17 151111.png"/>
        <Link to='./language'>
          <div style={{height:"22px",width:"30px",color:"white"}}>
            <p id='language'style={{fontSize:"14px"}}>EN</p><i style={{fontSize:"30px",position:"relative",bottom:"45px",left:"8px"}} class="ri-arrow-drop-down-fill"></i>
            
          </div>
        </Link>
        <div className='languages'>
          <ul className='list-unstyled text-dark px-4 pt-2' style={{fontSize:'11px'}}>
          <li><input type='radio' id='radio' onChange={InputChange} value='EN' name='radio'></input><a>EN</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='HI' name='radio'></input><a>HI</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='TA' name='radio'></input><a>TA</a></li>
            <li><input id='radio' onChange={InputChange} type='radio'value='TE' name='radio'></input><a>TE</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='KN' name='radio'></input><a>KN</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='ML' name='radio'></input><a>ML</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='BN' name='radio'></input><a>BN</a></li>
            <li><input id='radio' onChange={InputChange} type='radio' value='MR' name='radio'></input><a>MR</a></li>
            <li className='px-3'><a href='#' style={{textDecoration:'none'}}>Learn more</a></li>
            <hr/>
            <div style={{fontSize:"10px"}}><img className="flag" src="./images/Screenshot 2024-01-17 151111.png"/>Your are shopping on Amazon.in</div>
            <li><a href='#' style={{textDecoration:'none'}}>Change country/region.</a></li>
          </ul>
        </div>
       </div>
       <div className='navright1 pt-3 px-2'>
         
        <div className='navsign p-0'>Account & Lists</div>
        <div className='navsigns'>Hello, sign in</div>
        <div className='sign-item'>
          <div className='container text-center'>
            <Link to='/login'><button className='btn btn-warning w-50 mt-3'>Sign in</button></Link>
            <p>New Customer ? <Link to='/register'><a href='#' style={{textDecoration:'none'}}>Start here</a></Link> </p>
          </div><hr/>
          <div className='container d-flex justify-centent-end'>
            <div className='container' style={{float:'left'}}>
              <ul className='list-unstyled' style={{fontSize:'15px'}}>
                <li style={{fontWeight:'700',fontSize:'22px'}}>Your Lists</li>
                <li>Create a Wish List</li>
                <li>Wish From Any Website</li>
                <li>Baby Wishlist</li>
                <li>Discover Your Style</li>
                <li>Explore Showroom</li>
              </ul>
            </div>
            <div className='container mx-4 px-2' style={{float:'left', borderLeft:'2px solid gray'}}>
              <ul className='list-unstyled' style={{fontSize:'15px'}}>
                <li style={{fontWeight:'700',fontSize:'22px'}}>Your Account</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Your Wish List</li>
                <li>Your Recommendations</li>
                <li>Your Prime Membership</li>
                <li>Your Prime Video</li>
                <li>Your Subscribe & Save items</li>
                <li>Memberships & Subscriptions</li>
                <li>Your Seller Account</li>
                <li>Manage Youtr Content and<br></br> Devices</li>
                <li>Your Free Amazon Business<br></br> Accont</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
       <div className='navright1 pt-3 px-4'>
       <Link style={{textDecoration:"none",color:"white"}} to='/login'>
       <div className='navsign p-0'>Returns</div>
        <div className='navsigns'>& Orders</div></Link>
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