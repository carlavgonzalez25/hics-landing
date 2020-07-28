import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
//import Search from './Search'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import { language_en, language_sp } from 'img'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem ',
    alignItems: 'center',
    margin: '2rem 0 2rem 0',
    // boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  item: {
    paddingRight: '2rem',
  },
  title: {
    marginLeft: 'auto',
  },
  search: {
    minWidth: '100px',
  },
  flagContainer: {
    marginLeft: 'auto',
  },
})
const Header = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const changeLanguage = (lan) => i18n.changeLanguage(lan)
  const [exit, setExit] = useState()

  useEffect(() => {
    setExit(false)
  }, [])

  const goToPanel = () => {
    setExit(true)
  }

  return (
    <Grid className={classes.root}>
      <Grid item className={classes.item + ' ' + classes.title}>
        {t('panel.title')}
      </Grid>

      <Grid item className={classes.flagContainer}>
        <Button onClick={() => changeLanguage('es')} size="small">
          <img src={language_sp} alt="spanish language selector" />
        </Button>
        <Button onClick={() => changeLanguage('en')} size="small">
          <img src={language_en} alt="english language selector" />
        </Button>
        <Button onClick={goToPanel} size="small">
          {t('buttons.back')}
        </Button>
        {exit && <Redirect to="/dashboard" />}
      </Grid>
    </Grid>
  )
}

export default Header
