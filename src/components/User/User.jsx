

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../ui/Card/Card'

const User = () => {
const [posts,setPosts] = useState([])

const getPosts = async () => {

  const respons = await fetch ("https://jsonplaceholder.typicode.com/posts")
  const data = await respons.json();
 
  setPosts(data)
}

useEffect(() => {
 getPosts()
},[])

  return (
    <div>
        <Card>
          <ul>
          <h1>User</h1>
            {posts.map((item) => {
              return(
             <li key={item.id}>{item.title}</li>
              )
            })}
          </ul>
           
        </Card>
    </div>
  )
}

export default User