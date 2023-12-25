import EditTopicForm from '@/app/components/editTopicForm'
import React from 'react'

const getTopicById=async(id)=>{
  try{
    const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:"no-store"
    })

    if(!res.ok){
      throw new Error('failed to fetch topic')
    }
    return res.json()

  }catch(error){
   console.log(error)
  }
}

const Edittopic = async({params}) => {

  const{id}=params;
  const {topic}=await getTopicById(id)
  const{title,description}=topic
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description}></EditTopicForm>
    </div>
  )
}

export default Edittopic