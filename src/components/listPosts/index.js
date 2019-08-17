import React from 'react'
import { Main, Article, Subtitle, Image, Data, Texts } from './style'
import { Link } from 'react-router-dom'

export default function ListPosts() {
  return (
    <Main>
      <Post />
      <Post />
      <Post />
    </Main>
  )
}

export function Post() {
  return (
    <Article>
      <Link>
        <Image
          src={`https://images.unsplash.com/photo-1555513128-e3ed38549214?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1403&q=80`}
        />
      </Link>
      <Texts>
        <Subtitle>
          A Super verdade sobre aquilo que deve se dizer a verdade sempre
        </Subtitle>
        <Data>17/08/2019</Data>
      </Texts>
    </Article>
  )
}
