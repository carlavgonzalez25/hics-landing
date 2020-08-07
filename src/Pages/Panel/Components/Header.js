import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
//import Search from './Search'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { language_en, language_sp } from 'img'

const useStyles = makeStyles({
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
    <Container>
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
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: ${(props) => props.theme.headerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
