import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import Login from '../../Views/Login';
import './header.css'
import images from '../../Images/Capture 2.PNG'

function Header(props) {


  const navigate = useNavigate();
  const auth = getAuth()

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('----> LogOut')
      navigate('/')
      // window.location.href = ('/')
      // return <Login />

    }).catch((error) => {
      console.log(error.message)
    });

  }


  return (
    <div className="head">
      <div className='top'>
        <div className='olx'>
          <img width={40} src='https://1000logos.net/wp-content/uploads/2020/09/OLX-logo.png' />
        </div>
        <div className='olx1'>
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={() => navigate('/myadd')}>My Adds</button>
          <button onClick={() => navigate('/editprofile')}>Edit Profile</button>
        </div>

      </div>
      <div className="main">

        <div onClick={() => navigate('/dashboard')} className="brandName">
          <h1>
            <svg height="20" viewBox="0 0 36.289 20.768" alt="Olx logo" class="_063feb70">
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z">
              </path>
            </svg>
          </h1>
        </div>

        <div className='inputFields'>
          <input onChange={(e) => props.setSearch(e.target.value)} />
          <button className='searchBar' >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>


        <div className="myBtn4">
          <button className='logoutBtn' onClick={logOut}>Logout</button>
          <button className='span1' onClick={() => navigate('/createadd')}>
            <img src={images} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header