"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({id,title,description}) => {
  
  const[newtitle,setnewtitle]=useState(title)
  const[newdescription,setnewdescription]=useState(description)
  
  const router=useRouter()

  const handlesubmit=async(e)=>{
    e.preventDefault()

    try{
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method:'PUT',
        headers:{
          "Content-type":"application/json",
        },
        body: JSON.stringify({newtitle,newdescription})
      })

      if(!res.ok){
        throw new Error("failed to update")
      }
      
        router.push("/")
      
    }catch(error){
      console.log("error")
    }
  }

  return (
    <div className='flex justify-center items-center mt-4'>
        <form onSubmit={handlesubmit} className='flex flex-col gap-3 '>
            <input className='border-2 border-white w-[70vw] h-[10vh] bg-black' type="text" placeholder="Update Topic Tittle"
            onChange={(e)=>setnewtitle(e.target.value)}
            value={newtitle}
            />
        
            <input className='border-2 border-white w-[70vw] h-[30vh] bg-black' type="text" placeholder=" Update Topic Description"
            onChange={(e)=>setnewdescription(e.target.value)}
            value={newdescription}
            />

            <button type='submit' className='border-2 border-violet-700 h-[10vh]'>Update Topic</button>
        </form>
    </div>
  )
}

export default EditTopicForm