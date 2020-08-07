import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Main from './Main'
import Header from './Components/Header'
import styled from 'styled-components'

const App = () => {
  const MainWithProps = (props) => <Main {...props} />
  let { path } = useRouteMatch()
  return (
    <>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route path={`${path}/new/:id/:step`} render={MainWithProps} />
            <Route path={path}>
              <Redirect to={`${path}/new/0/0`} />
            </Route>
          </Switch>
        </Router>
      </Content>
    </>
  )
}

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - ${(p) => p.theme.headerHeight}px);
  height: calc(100vh - ${(p) => p.theme.headerHeight}px);
  margin-top: ${(p) => p.theme.headerHeight}px;
  overflow: scroll;
  background: red;
`

export default App
