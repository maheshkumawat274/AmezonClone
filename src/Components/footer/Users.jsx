import React from 'react'
import './Users.css'
import { Link } from 'react-router-dom'
import CustomersViewed from './CustomersViewed'
function Users() {
  const items ={
    height:"75%",
    width:"100%",
  }
  const register = {
    height:"25%",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
  const midReg={
    height:"90%",
    width:"25%",
    textAlign:"center",
    paddingTop:"20px"
  }
  const signg = {
    width:"70%",
  }
  const texts={
    marginBottom:"0",
    fontSize:"15px",
    fontWeight:"700"

  }
  const textDeco={
    textDecoration:"none"
  }
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:"white"}}>
      <div>
      <h1 className='fs-3 pt-3'>Inspired by your browsing history</h1>
      <CustomersViewed/>
      </div><hr></hr>
      <div style={register}>
        <div style={midReg}>
          <p style={texts}>See personalized recommendations</p>
          <Link to='/login'><button className='btn btn-warning'style={signg}>Sign in</button></Link>
          <p >New customer? <Link to='/register'><a href='%' style={textDeco}>Start here.</a></Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Users