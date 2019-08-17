import React, { Fragment, useEffect } from 'react'
import Header from '../../components/header'
import { Link } from 'react-router-dom'
import { getPost } from '../../api'
export default function Post({ match }) {
  useEffect(() => {
    getPost(match.params.id).then(response => {
      console.log(response)
    })
  }, [match.params.id])

  return (
    <Fragment>
      <Header />

      <p>post</p>
      <Link to="/">Home</Link>
    </Fragment>
  )
}
