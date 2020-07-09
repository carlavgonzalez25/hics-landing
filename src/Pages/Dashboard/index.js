import React from 'react'
import LeftMenu from './Components/LeftMenu'
import Header from './Components/Header'
import Projects from './Sections/Projects'
import Models from './Sections/Models'
import { Grid } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Grid container direction="row">
      <Header />
      <LeftMenu />

      <Router>
        <Route path="/Projects" component={Projects} />
        <Route path="/Models" component={Models} />
      </Router>
    </Grid>
  )
}

export default Dashboard
