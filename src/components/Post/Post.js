import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className='post'>
    
      <div className='postInfo'>
       <div className='postCats'>
       <span className='postCat'>Music</span>
       </div>
       <span className='postTitle'>Lorem ipsum dolor sit amet</span>
       <hr />
       <span className='postData'>1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}

export default Post
