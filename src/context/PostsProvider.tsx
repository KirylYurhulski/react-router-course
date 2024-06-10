import React, { FC, ReactNode, useContext, useEffect, useState } from 'react'
import { Post } from '../models/Post'

interface Context {
  list: Post[]
}

const PostsContext = React.createContext<Context>({
  list: [],
})

interface Props {
  children: ReactNode
}

export const usePosts = (queryString: string) => {
  return useContext(PostsContext).list.filter(item => item.title.includes(queryString))
}

export const PostsProvider: FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setPosts(
          [...json].sort((a: Post, b: Post) =>
            a.id < b.id ? 1 : a.id > b.id ? -1 : 0,
          ),
        )
      })
  }, [])

  return (
    <PostsContext.Provider
      value={{
        list: posts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
