import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Route exact path="/" component={Landing} />
      <Route path="/Dashboard" component={Dashboard} />

      {/* </Layout> */}
    </Router>
  )
}

export default App
