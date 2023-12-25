import React from 'react'

const EditTopicForm = () => {
  return (
    <div className='flex justify-center items-center mt-4'>
        <form className='flex flex-col gap-3 '>
            <input className='border-2 border-white w-[70vw] h-[10vh] bg-black' type="text" placeholder="Update Topic Tittle"/>
        
            <input className='border-2 border-white w-[70vw] h-[30vh] bg-black' type="text" placeholder=" Update Topic Description"/>

            <button className='border-2 border-violet-700 h-[10vh]'>Update Topic</button>
        </form>
    </div>
  )
}

export default EditTopicForm