import { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Post } from '../../../models/Post'
import { NavLink } from 'react-router-dom'
import { XString } from '../../../utils/StringUtil'

interface Props {
  post: Post
}

export const Item: FC<Props> = ({ post }) => {
  return (
    <Card
      style={{
        border: '0px',
        marginTop: '10px',
      }}
    >
      <Card.Body>
        <Card.Title>
          <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
        </Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Card.Footer>
          <small className="text-muted">{`Post Id: ${post.id}, ${new XString(post?.body).wordCounter()} words`}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}
