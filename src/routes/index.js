import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/home'
import Post from '../views/post'
import MissPath from '../views/pathless'

export default function RouteComponent() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post/:id" component={Post} />
      <Route component={MissPath} />
    </Switch>
  )
}
