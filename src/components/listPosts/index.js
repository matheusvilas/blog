import React from 'react'
import { Main, Container, Article, Subtitle, Image, Data, Texts } from './style'
import { Link } from 'react-router-dom'
import { convertDate } from '../../utils'

export default function ListPosts({ posts }) {
  return (
    <Main>
      <Container>
        {posts.data.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Container>
    </Main>
  )
}

export function Post({ post }) {
  return (
    <Article>
      <Link to={`post/${post.id}`} params={{ id: post.id }}>
        <Image src={post.fimg_url} />
      </Link>
      <Texts>
        <Subtitle>{post.title.rendered}</Subtitle>
        <Data>{convertDate(post.date)}</Data>
      </Texts>
    </Article>
  )
}
