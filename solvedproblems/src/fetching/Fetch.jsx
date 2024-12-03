import React, { useState } from 'react'
import { useEffect } from 'react'

const FetchData = () => {
    const [data,setData]=useState(null)
useEffect( ()=>{

    async function extracting(){
        let process= await fetch('https://jsonplaceholder.typicode.com/posts')
        let information=await process.json();
        console.log(information)
        setData(information)
    }

    extracting()

},[])

if(!data){
    return <h1>Data is Loading......</h1>
}

  return (
    <div className='h-[400px] overflow-scroll'>
        {data.map((item,index)=>(<div key={index }>

        <h1>{item.title}</h1>


        </div>))}



    </div>
  )
}

export default  FetchData