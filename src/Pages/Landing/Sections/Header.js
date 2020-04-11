import React from 'react'
import i18n from 'i18next'
import { Typography, Grid, Button, Slider } from '@material-ui/core'

const Header = () => {
  const changeLanguage = (lan) => i18n.changeLanguage(lan)

  return (
    <div>
      Header section
      <Button onClick={() => changeLanguage('es')} size="small">
        Español
      </Button>
      <Button onClick={() => changeLanguage('en')} size="small" onPres>
        English
      </Button>
    </div>
  )
}

export default Header
