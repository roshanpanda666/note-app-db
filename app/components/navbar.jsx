import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='mt-5 w-[70vw] h-[10vh] border-2 border-violet-500 flex justify-center lg:gap-[70%] gap-[30%] items-center'>
            <Link href={"/"}>note-app</Link>
            <div className='border-2 border-white'>
            <Link href={'/addTopic'}>add topics</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar