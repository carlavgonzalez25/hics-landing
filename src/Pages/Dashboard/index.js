import React, { useState, Fragment } from 'react'
import LeftMenu from './Components/LeftMenu'
import Header from './Components/Header'
import Projects from './Sections/Projects'
import Models from './Sections/Models'
import Home from './Sections/Home'
import { Grid } from '@material-ui/core'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    flexWrap: 'nowrap',
  },
}))

const Dashboard = () => {
  const [section, setSection] = useState('projects')

  const classes = useStyles()

  const changeSection = (newSection) => {
    setSection(newSection)
  }

  return (
    <Grid container>
      <Header />
      <Grid container className={classes.container}>
        <LeftMenu changeSection={changeSection} />
        <Fragment item className={classes.sectionContainer}>
          {section === 'home' && <Home />}
          {section === 'models' && <Models />}
          {section === 'projects' && <Projects />}
        </Fragment>
      </Grid>

      {/*      <Router>
        <Route path="/projects" component={Projects} />
        <Route path="/models" component={Models} />
      </Router>
      */}
    </Grid>
  )
}

export default Dashboard
