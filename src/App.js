import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Pages/Landing'

const App = () => {
  return (
    <Router>
      {/* <Layout> */}
      <Route path="/" component={Landing} />
      {/* </Layout> */}
    </Router>
  )
}

export default App
