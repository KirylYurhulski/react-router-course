import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Post } from '../../../models/Post'
import { XString } from '../../../utils/StringUtil'
import { Button } from 'react-bootstrap'

export const Single = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        setPost(json)
      })
  }, [id])

  return (
    <>
      <div className="col-md-4">
        <Button variant="outline-primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">{post?.title}</h2>
        <p className="blog-post-meta">{`Post Id: ${post?.id}, ${new XString(post?.body).wordCounter()} words`}</p>
        <hr />
        <p>{post?.body} </p>
      </article>
    </>
  )
}
