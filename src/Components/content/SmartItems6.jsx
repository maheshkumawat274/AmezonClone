import React from 'react'
import './SmartItems6.css'
function SmartItems6() {

 const ankar = {
  fontSize:"20px",
  marginLeft:"10px",
  textDecoration:"none"
 }
 const imgw ={
  height:"24vh",
  width:"10vh"
 }
  return (
    <>
    <div className='container-fluid section'>
     <div className='row'>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card CardHW'>
        <h1 className='fs-3 text-center'>Birthday store</h1>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg'></img>
              <p>Gift for men</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg'></img>
              <p>Gift for women</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg'></img>
              <p>Gift for boys</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg'></img>
              <p>Gift for girls</p>
            </div>
          </div>
         
          <a style={ankar} href='#'>See more</a>
       </div>
      </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card CardHW'>
        <h1 className='fs-3 text-center'>Under ₹499 | Pocket-friendly fashion</h1>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid'  src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg'></img>
              <p>Clothing</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg'></img>
              <p>Backpacks</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg'></img>
              <p>Footwear</p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg'></img>
              <p>View all</p>
            </div>
          </div>
         
          <a style={ankar} href='#'>See more</a>
         </div>
        </div>
       </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card CardHW'>
        <h1 className='fs-3 text-center'>New series streaming now | Watch now only on miniTV</h1>
        <div className='card-body'>
         <div className='carddiv'>
          <img className='img-fluid' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Campus_Beats/PC_CC/DeskCC-379x304_Campus-Beats-S3_V2._SY304_CB572320011_.jpg'></img>
          
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12'>
       <div className='card CardHW'>
        <h1 className='fs-3 text-center'>Under ₹499 | Pocket-friendly fashion</h1>
        <div className='card-body'>
         <div className='row text-center'>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='img-fluid' style={imgw} src='https://m.media-amazon.com/images/I/61kIVnGChCL._AC_SY170_.jpg'></img>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='img-fluid' style={imgw} src='https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY170_.jpg'></img>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='img-fluid' style={imgw} src='https://m.media-amazon.com/images/I/41EPTfn5-wL._AC_SY170_.jpg'></img>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <img className='img-fluid' style={imgw} src='https://m.media-amazon.com/images/I/61iZMVtMAoL._AC_SY170_.jpg'></img>
          </div>
         </div>
          <a style={ankar} href='#'>See more</a>
        </div>
       </div>
      </div>
      </div>
     </div>
    </>
  )
}

export default SmartItems6