import React, { Fragment, useEffect, useState } from 'react'
import Header from '../../components/header'
import ListPosts from '../../components/listPosts'
import { getPosts } from '../../api'
export default function Home() {
  const [pagePost, setPagePosts] = useState([])
  const [havePost, setHavePost] = useState(false)

  useEffect(() => {
    getPosts().then(posts => {
      setPagePosts(posts)
      setHavePost(true)
    })
  }, [])

  return (
    <Fragment>
      <Header />
      {havePost ? <ListPosts posts={pagePost} /> : null}
    </Fragment>
  )
}
