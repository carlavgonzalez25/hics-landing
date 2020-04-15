import React from 'react'
//Config
import contactInfo from 'config/contact'
import { useTranslation } from 'react-i18next'

//Components
import ContactBox from '../Components/ContactBox'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'
import { bg_services } from 'img'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '1rem 0 2rem 0',
    color: '#FFF',
  },
  ctGral: {
    justifyContent: 'center',

    margin: ' 7rem 0',
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg_services})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
  ctContactBox: {
    justifyContent: 'center',
    padding: '0 1rem',
    [theme.breakpoints.up('md')]: {
      padding: '0 3rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 8rem',
    },
  },
}))

const Contact = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Grid container className={classes.ctGral}>
      <Typography variant="h3" className={classes.title}>
        {t('contact.title')}{' '}
      </Typography>
      <Grid container className={classes.ctContactBox}>
        {contactInfo.map((info) => (
          <ContactBox {...info} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Contact
