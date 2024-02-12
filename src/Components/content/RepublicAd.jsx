import React, { useEffect, useState } from 'react';
import ButtonRight from './ButtonRight';
import ButtonLeft from './ButtonLeft';
import "./RepublicAd.css";

function RepublicAd(props) {
  const [counter, setCounter] = useState(0);
  const images = ['./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg'];
  const [intervalId, setIntervalId] = useState(null);

  const slidebar = () => {
    document.querySelector('.img-fluid.imgs').src = images[counter];

      if (counter === images.length - 1) {
        setCounter(0);
      } else {
        setCounter((prevCounter) => prevCounter +1);
      }

    console.log(counter);
  };

  useEffect(() => {
    const id = setInterval(slidebar, 2000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [counter]);

  const Rightbtn = () => {
    clearInterval(intervalId);
    slidebar();
  };

  const Leftbtn = () => {
    clearInterval(intervalId);
    document.querySelector('.img-fluid.imgs').src = images[counter];
      if (counter === 0) {
        setCounter(images.length - 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }

    console.log(counter);
  };

  return (
    <>
      <div className='ad'>
      <ButtonRight btnclick={Rightbtn} />
      <img className='img-fluid imgs' src='' alt="Slide" />
      <ButtonLeft btnclick={Leftbtn} />
    </div>
    </>
  );
}

export default RepublicAd;
