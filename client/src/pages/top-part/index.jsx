import React from 'react'
import './topPart.scss'
const TopPart = () => {
  return (
    <div id='topPart'>
        <div className='topPart'>
            <div className='textPart'>
                <h1>Learn From The Expert</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime <br /> ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <button>ADMISSION NOW</button>
            </div>
            <div className='signUpPart'>
                <div className='main'>
                    <div className='mainTitle'><h1>Sign Up</h1></div>
                    <div className='formPart'>
                        <input type="text" placeholder='Email address' className='formInput'/><br /><br />
                        <input type="password" placeholder='Password' className='formInput'/><br /><br />
                        <input type="password" placeholder='Re-type Password' className='formInput'/><br /><br />
                        <button type="submit" className='formBtm'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopPart