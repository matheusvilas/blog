// @flow
import React from 'react'
import { Nav, Title } from './style'
import { Link } from 'react-router-dom'

type Props = {
  siteTitle: string,
}

export function Header({ siteTitle }: Props) {
  return (
    <header>
      <Nav>
        <Link to="/">
          <Title>VilasBoas.dev</Title>
        </Link>
      </Nav>
    </header>
  )
}

export default Header
