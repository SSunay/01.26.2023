import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom'
import Search from '../../components/input-search'
const StaticPart = () => {
    const [teacher,setTeacher]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/schools')
        setTeacher(await data.data)
    }
    useEffect(() => {
      getData()
    }, [])
    

    const minSort=()=>{
        let sort =  axios.get('http://localhost:8000/schools').then((data)=>{
            data.data.sort((a ,b)=>Number(a.price)-Number(b.price))
        })
        setTeacher([...sort])
    }
    const maxSort=()=>{
        let sort =  axios.get('http://localhost:8000/schools').then((data)=>{
            data.data.sort((a ,b)=>Number(b.price)-Number(a.price))
        })
        setTeacher([...sort])
    }



  return (
    <div id='staticPart'>
            <Search setTeacher={setTeacher}/>
{/* <div className='sortBtn'>
    <button className='Min' onClick={()=>minSort()}>Min to Max</button>
    <button className='Max' onClick={()=>maxSort()}>Max to Min</button>
</div> */}
        <div className='all'>
            {teacher.map((element)=>{
                return(
                    <div className='allCard'>
                        <Link to={`home-page/${element._id}`}>
                        <div className='card'>
                            <div className='cardImg'><img src={element.img} alt="" /></div>
                            <div className='cardtext'>
                                <h1>{element.name}</h1>
                                <h3>{element.catacory}</h3>
                                <p>{element.description}</p>
                                <h3>{element.price}</h3>

                            </div>
                        </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default StaticPart