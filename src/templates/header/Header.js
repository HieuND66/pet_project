import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
export default function Header() {
  return (
    <div id="herader">
      <div className="header-package fiverr-header">
        <div className="header-row-wrapper">
          <div className="header-row max-width-container equal-padding row-main">
            <nav className='fiverr-nav '>
              <ul>
                {localStorage.getItem('USER_LOGIN') ? <li className="display-from-md">
                  <NavLink to='/home' className="aDeZs5- business-nav-link nav-link" >Home</NavLink>
                </li> : <li className="display-from-md">
                  <button onClick={() => {
                    alert('Vui lòng đăng nhập')
                  }} className="aDeZs5- business-nav-link nav-link home-btn" >Home</button>
                </li>}

                <li className="display-from-md">
                  <NavLink to='/login' className="aDeZs5- business-nav-link nav-link" >Sign in</NavLink>
                </li>

                {localStorage.getItem('USER_LOGIN') ? <li className="display-from-md">
                  <button onClick={() => {
                    localStorage.removeItem("USER_LOGIN")

                    history.push('/login')
                  }} className="aDeZs5- business-nav-link nav-link logout-btn" >Logout</button>
                </li> : ''}

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>


  )
}
