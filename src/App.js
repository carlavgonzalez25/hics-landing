import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Panel from './Pages/Panel/Router'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/panel" component={Panel} />
      <Route path="/dashboard" component={Dashboard} />
      {/* </Layout> */}
    </Router>
  )
}

export default App
