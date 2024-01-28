import React from 'react'
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
  return (
    <>
    <div className='container-fluid m-0 p-0 d-flex navigation-bottom'>
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
        <div className='navigation-bottom-items'>Amezon miniTV</div>
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
     <img src="images/india.png" style={indlogo}/>
        <span style={reimg}> Republic Day Sale | SHOP NOW </span>
     </div>
    </div>
    </>
  )
}

export default HeaderBootm