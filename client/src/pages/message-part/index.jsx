import React from 'react'
import './index.scss'
const MessagePart = () => {
  return (
    <div className='messagepart'>
        <div className='main'>
            <div className='title'>
                <h1>Message Us</h1>
                <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia <br /> quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
            </div>
            <div className='messageForm'>
                <div className='nameAndUser'>
                    <input type="text" placeholder='First Name'/><br /><br />
                    <input type="text" placeholder=' Lastname' /><br /><br />
                </div>
                <div className='textArea'>
    <input type="text" placeholder='Subject'/><br /><br />
    <input type="email" placeholder='E-mail'/><br /><br />
    <textarea name="" id="" cols="30" rows="10"></textarea><br /><br placeholder='First Name'/>
    <button>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessagePart