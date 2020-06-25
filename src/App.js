import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Configurator from './Pages/Panel'

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/panel" component={Configurator} />
      {/* </Layout> */}
    </Router>
  )
}

export default App
