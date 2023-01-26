import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.scss'
const Search = ({setTeacher}) => {

    const[name,setname]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/schools')
        setname(await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    
    const handleSearch=(e)=>{
        let newData = name.filter((el)=>
        el.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
        )
        setTeacher(newData)
    }


  return (
    <div className='searchInput'>
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder='Search for your special teacher.'/>
    </div>
  )
}

export default Search