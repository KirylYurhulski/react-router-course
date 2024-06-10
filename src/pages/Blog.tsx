import { List } from '../components/ui/Posts/List'
import { PostsProvider } from '../context/PostsProvider'

export const Blog = () => {
  return (
    <PostsProvider>
      <List itemsPerPage={5} />
    </PostsProvider>
  )
}
