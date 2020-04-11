import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configureStore } from './redux/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import i18n from 'i18n'
import { initReactI18next } from 'react-i18next'
import i18nInit from './config/i18n'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nInit)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
