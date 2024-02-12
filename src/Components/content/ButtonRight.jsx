import React from 'react'

function ButtonRight({btnclick}) {
  return (
    <>
    <button onClick={btnclick} className=' rightbtn'>
      <i class="ri-arrow-left-s-line"></i>
    </button>
    </>
  )
}

export default ButtonRight