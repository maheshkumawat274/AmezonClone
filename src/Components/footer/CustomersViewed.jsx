import React from 'react'
import './Coustomerview.css'
function CustomersViewed() {
  const items = [
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:
        "./images/star.png",
      
      rating:"1100",
      rupees:"₹499.00-₹999.0"
     },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    },
    {
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    }
    ,{
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    }
    ,{
      imgs:"https://images-eu.ssl-images-amazon.com/images/I/41uYQDPM+5L._AC_UL160_SR160,160_.jpg",
      name:"AMERICAN CREW Full Sleeves Polo Collar T-Shirt for Men",
      starimg:"./images/star.png",
      rating:"1100",
      rupees:"₹499.00-₹999.0"
    }
  ]
  return (
    <>
    <div className='container-fluid min-vh-50 w-100' id='main'>
      <ul className='list-unstyled d-flex p-2' >
        {items.map((item)=>
           <li className='p-1' style={{textDecoration:'none'}}>
           <div className='card' id='managecard'>
             <div className='menimg'>
             <img src={item.imgs}></img>
             </div>
             <div className='card-body'>
               <div>{item.name}</div>
               <div className='starimg'><img src={item.starimg} ></img>{item.rating}</div>
               <p>{item.rupees}</p>
             </div>
           </div>
           
         </li>
        )}
      </ul>
    </div>
    </>

  )
}

export default CustomersViewed