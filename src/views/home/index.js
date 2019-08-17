import React, { Fragment } from 'react'
import Header from '../../components/header'
import ListPosts from '../../components/listPosts'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <ListPosts />
      <Link to="post/teste">Post</Link>
    </Fragment>
  )
}
