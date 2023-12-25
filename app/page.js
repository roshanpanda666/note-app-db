import React from 'react'
import TopicsList from './components/topicsList'


const Page = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div>
          <TopicsList></TopicsList>
        </div>
      </div>
    </div>
  )
}

export default Page