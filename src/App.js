import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './Pages/Pages'
import LocationPage from './Pages/LocationPage';
import "./App.css"
import Registerpage from './Pages/Registerpage';
import Login from './Pages/Login';
import Language from './Components/language/Language';
function App({mainpage}) {
  return (
    <>
     {/* <Pages/> */}
      
     <Router>
     <Routes>
      <Route path='/' element={<Pages/>}/>
       <Route path='/location' element={<LocationPage/>}/>
       <Route path='/register' element={<Registerpage/>}/>
       <Route path='/login'  element={<Login/>}/>
       <Route path='/language' element={<Language/>}/>
       
     </Routes>
     
     
     </Router>
    </>
  )
}

export default App