import React from 'react'
import Removebtn from './removebtn'
import Link from 'next/link'
import { MdEditNote } from "react-icons/md";

const getTopics=async(res)=>{
    try{
        const res =await fetch('http://localhost:3000/api/topics',{
            cache:"no-store"
        })
        if(!res.ok){
            throw new Error("failed to fetch topics")
        }
        return res.json()
    }catch(error){
        console.log("error to fetch topics",error);
    }
}

const TopicsList = async() => {
    const {topics}= await getTopics()
  return (
    <>
                
        {topics.map(t=>(
            <div className='flex mt-7 border-2 border-gray-500 gap-32 justify-start items-center w-[95vw] lg:w-[70vw]'>
        
            <div className='flex flex-col'>
                <div className='font-bold text-3xl mb-5 w-[50vw] text-white'>
                   {t.title}
                </div>
                <div>
                    {t.description}   
                </div>
            </div>
            <div className='flex gap-6'>
                <div>
                    <Removebtn></Removebtn>
                </div>
                <div>
                    <Link href={`/editTopic/${t._id}`} >
                        <MdEditNote className='size-10 text-green-500'/>
                    </Link>
                </div>
            </div>
        </div>
       
        ))}
        
 
    </>
    
  )
}

export default TopicsList