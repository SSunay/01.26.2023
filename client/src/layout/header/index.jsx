import React from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div id='header'>
        <div className='container'>
            <div className='navBar'>
                <div className='logo'><NavLink to={'/'}><h1>OneSchool</h1></NavLink></div>
                <div className='link'>
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/'}>Courses</NavLink></li>
                        <li><NavLink to={'/'}>Programs</NavLink></li>
                        <li><NavLink to={'/'}>Teachers</NavLink></li>
                        <li><NavLink to={'/add-page'}>Add</NavLink></li>
                           
                        
                    </ul>
                </div>
                <div className='navBtn'><button>Contact Us</button></div>
            </div>
        </div>
        
    </div>
  )
}

export default Header