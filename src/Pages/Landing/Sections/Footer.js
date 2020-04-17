import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '240px',
    backgroundColor: '#434343',
  },
  footer: {
    display: 'flex',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

const Footer = () => {
  const { t } = useTranslation()

  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <footer className={classes.footer}>
        <Grid item> Logo </Grid>
        <Grid item>
          <ul className={classes.list}>
            <li>{t('home')} </li>
            <li>{t('services.title')} </li>
            <li>{t('contact.title')} </li>
            <li>{t('partners.title')} </li>
          </ul>
        </Grid>
        <Button>Login</Button>
      </footer>
    </Grid>
  )
}

export default Footer
