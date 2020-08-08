import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, useRouteMatch } from 'react-router-dom'
import Main from './Main'
import Header from './Components/Header'
import Footer from './Components/Footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { nextActiveStep, backActiveStep } from '../../redux/actions'

const App = () => {
  const MainWithProps = (props) => <Main {...props} />
  let { path } = useRouteMatch()
  const dispatch = useDispatch()
  let step = useSelector((state) => state.panel.activeStep)
  let id = useSelector((state) => state.panel.selectedModel)
  let models = useSelector((state) => state.panel.models)

  const idExists = models.find((m) => m.idModelo === id)
  const next = step < 3 && idExists ? () => dispatch(nextActiveStep()) : null
  const back = step > 0 ? () => dispatch(backActiveStep()) : null

  return (
    <>
      <Header selectedModel={id} models={models} />
      <Content>
        <Router>
          <Switch>
            <Route path={`${path}/new/:routeid/:routestep`} render={MainWithProps} />
            <Route path={path}>
              <Redirect to={`${path}/new/0/0`} />
            </Route>
          </Switch>
        </Router>
        <Footer next={next} back={back} />
      </Content>
    </>
  )
}

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - ${(p) => p.theme.headerHeight * 2}px);
  height: calc(100vh - ${(p) => p.theme.headerHeight * 2}px);
  margin-top: ${(p) => p.theme.headerHeight}px;
  margin-bottom: ${(p) => p.theme.headerHeight}px;
  overflow: scroll;
  background: red;
`

export default App
