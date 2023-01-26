import React from 'react'
import './index.scss'
const ProgramsPart = () => {
  return (
    <div id='progPart'>
     
           <div className='main'>
           <div className='title'>
                <h1>Our Programs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
            </div>
           <div className='all'>
           <div className='part1'>
                <div className='img1'><img src="src/images/youtube.svg" alt="" /></div>
                <div className='text1'>
                    <h1>We Are Excellent In Education</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='icon1'>
                    <i class="fa-solid fa-building-columns"></i>
                    <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
            </div>
            <div className='part2'>
              
                <div className='text2'>
                <h1>Strive for Excellent</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                    <div className='icon2'>
                    <i class="fa-solid fa-building-columns"></i>
                    <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
                <div className='img2'><img src="src/images/teach.svg"/></div>
            </div>
           </div>
           </div>
        
    </div>
  )
}

export default ProgramsPart