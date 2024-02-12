import React from 'react'
import Users from '../footer/Users'
import FooterContent from '../footer/FooterContent'
import Header from '../HeaderContent/Header'
import HeaderBootm from '../HeaderContent/HeaderBootm'
function Language() {
  return (
    <>
    <Header/>
    <HeaderBootm/>
    <div className='container-fluid p-3' style={{backgroundColor:"white"}}>
      <div className='container pt-5'>
        <h1>Language Settings</h1>
        <p>Select the language you prefer for browsing, shopping and communications.</p>
        <div className='px-3'>
        <input type='radio' name='radio'></input>English - EN<hr style={{width:"30%"}}/>
        <input type='radio' name='radio'></input>हिन्दी - HI - अनुवाद<br></br>
        <input type='radio' name='radio'></input>தமிழ் - TA - மொழிபெயர்ப்பு<br></br>
        <input type='radio' name='radio'></input>తెలుగు - TE - అనువాదం<br></br>
        <input type='radio' name='radio'></input>ಕನ್ನಡ - KN - ಭಾಷಾಂತರ<br></br>
        <input type='radio' name='radio'></input>മലയാളം - ML - വിവർത്തനം<br></br>
        <input type='radio' name='radio'></input>বাংলা - BN - অনুবাদ<br></br>
        <input type='radio' name='radio'></input>मराठी - MR - भाषांतर
        </div>
        <hr/>
        <button className='btn btn-light'style={{boxShadow:"0 0 5px black"}}>Cancel</button><button className='btn btn-primary mx-2' >Save Changes</button>
      </div>
    </div>
    <Users/>
    <FooterContent/>
    </>
  )
}

export default Language