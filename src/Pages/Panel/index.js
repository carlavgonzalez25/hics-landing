import React from 'react'
import Header from './Components/Header'
import Steps from './Components/Steps'
import ModelSelection from './Sections/ModelSelection'
import { Grid, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 1rem 3rem 1rem',
  },
  cardContainer: {
    marginBottom: '2rem',
  },
  button: {
    marginLeft: 'auto',
    marginRight: '3rem',
    background: theme.palette.primary.main,
    minWidth: '130px',
  },
}))

const Panel = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Header />
      <Steps />
      <Grid container className={classes.cardContainer}>
        <ModelSelection />
      </Grid>
      <Button className={classes.button}>{t('buttons.next')}</Button>
    </Grid>
  )
}

export default Panel
