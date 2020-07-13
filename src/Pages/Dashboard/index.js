import React, { useState } from 'react'
import LeftMenu from './Components/LeftMenu'
import Header from './Components/Header'
import Projects from './Sections/Projects'
import Models from './Sections/Models'
import Home from './Sections/Home'
import { Grid } from '@material-ui/core'
//import { BrowserRouter as Router, Route } from 'react-router-dom'

const Dashboard = () => {
  const [section, setSection] = useState('models')

  const changeSection = (section) => {
    setSection(section)
  }

  return (
    <Grid container>
      <Header />
      <Grid container>
        <LeftMenu setSection={changeSection} />
        <Grid item>
          {section === 'home' && <Home />}
          {section === 'models' && <Models />}
          {section === 'project' && <Projects />}
        </Grid>
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
