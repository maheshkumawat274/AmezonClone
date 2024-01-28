import React from 'react'
import './Footer.css'
function FooterContent() {
 const Fontwt = {
  fontWeight:"800",
  fontSize:"15px"
 }
 const color ={
  backgroundColor:"rgba(8, 8, 8, 0.693)",
 }
 const imgh={
  height:"5vh"
 }
 const btnimg={
  backgroundColor: "transparent",
  border:"1px solid white",
 }
  return (
    <>
     <div className='container-fluid mt-5 p-3  d-flex justify-content-center align-itmes-center text-white COlor'> Back to to</div>
     <div className='container-fluid' style={color}>
      <div className='row p-5 mk'>
       <div className='col-lg-3 text-white col-md-6 col-sm-12 '>
        <p style={Fontwt}>Get to Know Us</p>
        <p><a>About Us</a></p>
        <p><a>Careers</a></p>
        <p><a>Press Releases</a></p>
       </div>
       <div className='col-lg-3 text-white col-md-6 col-sm-12 '>
        <p style={Fontwt}>Connect with Us</p>
        <p><a>Facebook</a></p>
        <p><a>Twitter</a></p>
        <p><a>Instagram</a></p>
       </div>
       <div className='col-lg-3 text-white col-md-6 col-sm-12 '>
        <p style={Fontwt}>Make Money with Us</p>
        <p><a>Sell on Amazon</a></p>
        <p><a>Sell under Amazon Accelerator</a></p>
        <p><a>Protect and Build Your Brand</a></p>
        <p><a>Amazon Global Selling</a></p>
        <p><a>Become an Affiliate</a></p>
        <p><a>Fulfilment by Amazon</a></p>
        <p><a>Advertise Your Products</a></p>
        <p><a>Amazon Pay on Merchants</a></p>
       </div>
       <div className='col-lg-3 text-white col-md-6 col-sm-12 '>
       <p style={Fontwt}>Let Us Help You</p>
       <p><a>COVID-19 and Amazon</a></p>
       <p><a>Your Account</a></p>
       <p><a>Returns Centre</a></p>
       <p><a>100% Purchase Protection</a></p>
       <p><a>Amazon App Download</a></p>
       <p><a>Help</a></p>

       </div><hr style={{marginTop:"50px",color:"white"}}></hr>
       <div className='d-flex justify-content-center m-0 gap-5 pt-5'>
       <img className='img-fluid' style={imgh} src='./images/PngItem_12080.png'></img>
       <button className='d-flex justify-content-center text-white align-items-center gap-3 px-5'style={btnimg}><img src='./images/globe2.svg'/>English</button>
      </div>
      <ul className='d-flex justify-content-center pt-2 gap-2 list-unstyled'>
        <li>Australia</li>
        <li>Brazil</li>
        <li>Canada</li>
        <li>China</li>
        <li>France</li>
        <li>Germany</li>
        <li>Italy</li>
        <li>japan</li>
        <li>Mexico</li>
      </ul>
      </div>
      
     </div>
     <div className='container-fluid bg-dark '>
      <div className='row text-white'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-unstyled'>
            <li>AbeBooks</li>
            <li>Books, art</li>
            <li>& collectibles</li>
            <li>Shopbop</li>
            <li>Designer</li>
            <li>Fashion Brands</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-unstyled'>
            <li>Amazon Web Services</li>
            <li>Scalable Cloud</li>
            <li>Computing Services</li>
            <li>Amazon Business</li>
            <li>Everything For</li>
            <li>Your Business</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-unstyled'>
            <li>Audible</li>
            <li>Download</li>
            <li>Audio Books</li>
            <li>Prime Now</li>
            <li>2-hours Delivery</li>
            <li>on Everyday Items</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <ul className='list-unstyled'>
            <li>IMDb</li>
            <li>Movies, TV </li>
            <li>& Celebrities</li>
            <li>Amazon Prime Music</li>
            <li>100 million songs, ad-free</li>
            <li>Over 15million podcast episodes</li>
          </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default FooterContent