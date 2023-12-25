"use client"
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'


const Addtopic = () => {

  const titleref = useRef(null)
  const descriptionref = useRef(null)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const titlevalue = titleref.current.value
    const descreptionvalue = descriptionref.current.value

    if (!titlevalue || !descreptionvalue) {
      alert("title and description are required")
      return
    }
    if(titlevalue || descreptionvalue ==="Prachi"||"prachi"){
      const audio = new Audio('music.mp3');
      audio.play()
      alert("love from Roshan")
      
      
    }

    console.log(`title: ${titlevalue}`);
    console.log(`description: ${descreptionvalue}`);

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title: titlevalue, description: descreptionvalue })
      })
      if (res.ok) {
        router.push('/')
      } else {
        throw new Error("failed to create a topic")
      }
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mt-4 flex justify-center items-center'>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
        <input className='border-2 border-white w-[70vw] h-[10vh] bg-black' type="text" placeholder="Topic Title" ref={titleref} />

        <input className='border-2 border-white w-[70vw] h-[30vh] bg-black' type="text" placeholder="Topic Description" ref={descriptionref} />

        <button type='submit' className='border-2 border-violet-700 h-[10vh]' >Add Topic</button>
      </form>
    </div>
  )
}

export default Addtopic
