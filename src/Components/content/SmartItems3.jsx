import React from 'react'
import './SmartItems3.css'
function SmartItems3() {

  const imghw = {
    height:"100%",
    width:"100%"
  }

  return (
    <>
    <div className='container-fluid mt-3  section3'>
     <div className='row'>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card cardhw'>
        <h1 className='fs-3 pt-2 text-center'>Up to 40% off | Lipakshi handicrafts</h1>
        <div className='card-body'>
         <div className='cardDiv' >
          <img className='img-fluid' style={imghw} src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg'></img>
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card cardhw'>
        <h1 className='fs-3 pt-2 text-center'>Flat ₹50 cashback | Fruits & vegetables | Amazon Fresh</h1>
        <div className='card-body'>
         <div className='cardDiv' >
          <img className='img-fluid' style={imghw} src='https://m.media-amazon.com/images/I/91aPKJ5q1qL._AC_SY200_.jpg'></img>
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card cardhw'>
        <h1 className='fs-3 pt-2 text-center'>Up to 60% off | Must haves from emerging brands</h1>
        <div className='card-body'>
         <div className='cardDiv' >
          <img className='img-fluid' style={imghw} src='https://i.ytimg.com/vi/jO6TUo0dEsY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC-bKAd2YnMLlUycD-y6KDIHwN6Ww'></img>
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card cardhw'>
        <h1 className='fs-3 pt-2 text-center'>Buy 2 Get 10% off, freebies & more offers</h1>
        <div className='card-body'>
         <div className='cardDiv' >
          <img className='img-fluid' style={imghw} src='https://images.squarespace-cdn.com/content/5616e3d8e4b0fdd101fce023/1456330300085-A9KXUQQ1K28EMGHUFGUL/Promotional-Items.jpg?content-type=image%2Fjpeg'></img>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

    </>
  )
}

export default SmartItems3