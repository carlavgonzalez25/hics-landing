import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

/* Redux */
import { configureStore } from './redux/store'
import { Provider } from 'react-redux'

/* i18n */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import i18nInit from './config/i18n'

/* Theme */
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { mainTheme } from 'theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
const theme = createMuiTheme(mainTheme)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18nInit)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <ThemeProviderStyled theme={mainTheme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ThemeProviderStyled>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
