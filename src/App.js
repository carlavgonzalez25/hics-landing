import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      {[1, 2, 3, 4, 5].map((n) => (
        <div>{'componente ' + n}</div>
      ))}
      <footer>Footer</footer>
    </div>
  )
}

export default App
