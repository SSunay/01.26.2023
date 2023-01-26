import React from 'react'
import MessagePart from '../message-part'
import ProgramsPart from '../programs-part'
import StaticPart from '../static-part'
import TopPart from '../top-part'

const HomePage = () => {
  return (
    <div>
        <TopPart/>
        <ProgramsPart/>
        <StaticPart/>
        <MessagePart/>

    </div>
  )
}

export default HomePage