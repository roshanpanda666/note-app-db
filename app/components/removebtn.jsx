"use client"
import React from 'react'
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';
const Removebtn = ({id}) => {
  const router=useRouter()

  const removeTopic=async()=>{
    

    
      await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE"
      })
      router.refresh()
      
      
    
  }
  return (
    <button onClick={removeTopic}>
        <MdDelete  className='size-10 text-red-500'/>
    </button>
  )
}

export default Removebtn