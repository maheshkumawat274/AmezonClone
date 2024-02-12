import React from 'react'

function ButtonLeft({btnclick}) {
  return (
    <>
    <button onClick={btnclick} className='leftbtn'>
      <i class="ri-arrow-right-s-line"></i>
    </button>
    </>
  )
}

export default ButtonLeft