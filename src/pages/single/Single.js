import React from 'react'
import './Single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

function Single() {
  return (
    <div className='single'>
      {/* post */}
      <Sidebar />
      <SinglePost />
    </div>
  )
}

export default Single
