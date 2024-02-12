import React, { useEffect, useState } from 'react'
import './HeaderBottom.css'

function HeaderBootm() {
 const menu = {
  height:"20px"
 }
 const reimg = {
  fontSize:"15px",
  fontWeight:"700",
  color:"white"

 }
 const indlogo={
  height:"25px",
  marginRight:"0px"
 }

const [isSiderbarOpen,setIsSiderbar] = useState(false);

useEffect(()=>{
   const openbtn = document.querySelector(".sidebar");
   const show = document.querySelector(".side-slider");
   const closebtn = document.querySelector('#closebtn');
   const humbarger = document.querySelector('.humbarger');

   const openSiderbar = () =>{
      setIsSiderbar(
         openbtn.addEventListener('click',function(){
            show.style.display = 'block';
            closebtn.style.display = "block";
         }),
         humbarger.addEventListener("click",function(){
            show.style.display = 'block';
         })
      );
      
   }
   openSiderbar();
   const closeSiderbar = () =>{
      closebtn.addEventListener("click",function(){
         show.style.display = "none";
         closebtn.style.display = "none"
      })
      
   }
   closeSiderbar()
})




  return (
    <>
    <div className='container-fluid m p-0 d-flex navigation-bottom'>
     <div className='sidebar'>
         <img src="./images/icons8-menu-50.png" style={menu}/> All
     </div>
     <div className='checkbox'>
      <input type='checkbox' id="checkbox_toggle"></input>
     </div>
     <div className='humbarger' >
           <img for='checkbox_toggle' src="./images/icons8-menu-50.png" style={menu}/>
     </div>
     <div className='w-75 d-flex allitems'>
        <div className='navigation-bottom-items'>Fresh</div>
        <div className='navigation-bottom-items'>AmezonminiTV</div>
        <div className='navigation-bottom-items'>Sell</div>
        <div className='navigation-bottom-items'>Best Sellers</div>
        <div className='navigation-bottom-items'>Today's Deals</div>
        <div className='navigation-bottom-items'>Mobiles</div>
        <div className='navigation-bottom-items'>Electronics</div>
        <div className='navigation-bottom-items'>Prime</div>
        <div className='navigation-bottom-items'>Gift Ideas</div>
        <div className='navigation-bottom-items'>Service</div>
        <div className='navigation-bottom-items'>New Releases</div>
        <div className='navigation-bottom-items'>Home Kitchen</div>
        </div>
        <div className='republic'>
          <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CaptainMiller/400x39-SWM_NP._CB582105252_.jpg" style={indlogo}/>
        </div>
     <button id='closebtn' className='btn btn-light'><i style={{position:"relative",bottom:"4px"}} class="ri-close-circle-line"></i></button>
     <div className='side-slider'>
      
         <div className='signin'>
          <img style={{height:'40%'}} src='images/sign.png'></img>
           <a>&ensp; Hello, sign in</a>
         </div>
         <div className='sidebar-item px-5'>
            <ul className='list-unstyled '>
               <p style={{fontWeight:'700'}}>Trending</p>
               <li>Best Sellers  <i class="ri-arrow-right-s-line"></i></li>
               <li>New Releases <i class="ri-arrow-right-s-line"></i></li>
               <li>Movers and Shakers <i class="ri-arrow-right-s-line"></i></li>
               <hr/>
               <p style={{fontWeight:'700'}}>Digital Content and Devices</p>
               <li>Echo & Alexa <i class="ri-arrow-right-s-line"></i></li>
               <li>Fire TV <i class="ri-arrow-right-s-line"></i></li>
               <li>Kindle E-Readers & eBooks <i class="ri-arrow-right-s-line"></i></li>
               <li>Audible Audiobooks <i class="ri-arrow-right-s-line"></i></li>
               <li>Amazon Prime Video <i class="ri-arrow-right-s-line"></i></li>
               <li>Amazon Prime Music <i class="ri-arrow-right-s-line"></i></li>
               <hr/>
               <p style={{fontWeight:'700'}}>Shop by Caregory</p>
               <li>Mobiles, Computers <i class="ri-arrow-right-s-line"></i></li>
               <li>TV, Appliances, Electronics <i class="ri-arrow-right-s-line"></i></li>
               <li>Men's Fashion <i class="ri-arrow-right-s-line"></i></li>
               <li>Women's Fashion <i class="ri-arrow-right-s-line"></i></li>
               <li>See all <i class="ri-arrow-right-s-line"></i></li>
               <hr/>
               <p style={{fontWeight:'700'}}>Programs & Settings</p>
               <li>Amezon Pay <i class="ri-arrow-right-s-line"></i></li>
               <li>Gift Cards & Mobile Recharges <i class="ri-arrow-right-s-line"></i></li>
               <li>Amazon Launchpad <i class="ri-arrow-right-s-line"></i></li>
               <li>Handloom and Handicrafts <i class="ri-arrow-right-s-line"></i></li>
               <li>See all <i class="ri-arrow-right-s-line"></i></li>
               <hr/>
               <p style={{fontWeight:'700'}}>Help & Settings</p>
               <li>Your Account <i class="ri-arrow-right-s-line"></i></li>
               <li>Customer Service <i class="ri-arrow-right-s-line"></i></li>
               <li>Sign in <i class="ri-arrow-right-s-line"></i></li>
            </ul>
         </div>
        
     </div>
    </div>
    </>
  )
}

export default HeaderBootm