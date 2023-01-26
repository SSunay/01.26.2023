import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
const Detail = () => {
    const [detail,setDetail]=useState([])
const {_id}=useParams()
const navigate = useNavigate()
    const getData=async()=>{
        let data = await axios.get(`http://localhost:8000/schools/${_id}`)
        setDetail(await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    


const handleDelete=(_id)=>{
    axios.delete(`http://localhost:8000/schools/${_id}`)
    let newData = detail.filter((q)=>q._id !== _id)
    setDetail(newData)
}


  return (
    <div className='detailPart'>
        <div className='main'>
            <div className='ImgandText'>
            <div className='detailImg'><img src={detail.img} alt="" /></div> 
            <div className='detailText'>
                <h1><span>Name:</span><br/>{detail.name}</h1>
                <h4><span>Catacory:</span><br/>{detail.catacory}</h4>
                <p><span>Description:</span><br/>{detail.description}</p>
                <div className='detailBtn'>
                <button className='delete' onClick={()=>handleDelete(_id)}>Delete</button>
                <button className='back' onClick={()=>navigate('/')}>Go Back</button>
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Detail