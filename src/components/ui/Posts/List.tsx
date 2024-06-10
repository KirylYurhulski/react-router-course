import { FC, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { usePosts } from '../../../context/PostsProvider'
import { Item } from './Item'
import { Post } from '../../../models/Post'
import { SearchForm } from './SearchForm'

const Items: FC<{ currentItems: Post[] }> = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map(item => <Item key={item.id} post={item} />)}
    </>
  )
}

export const List: FC<{ itemsPerPage: number }> = ({ itemsPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const posts = usePosts(searchParams.get('title') || '')
  
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = posts.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(posts.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <SearchForm
        onChange={event =>
          setSearchParams({ title: event.target.value.trim() })
        }
      />
      <Items currentItems={currentItems} />
      <ReactPaginate
        previousLabel="Previous"
        breakLabel={' ... '}
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  )
}
