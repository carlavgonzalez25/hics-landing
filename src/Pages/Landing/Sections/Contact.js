import React from 'react'
//Config
import contactInfo from 'config/contact'
import { useTranslation } from 'react-i18next'

//Components
import ContactBox from '../Components/ContactBox'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'
import { servicios_1 } from 'img'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '1rem 0 2rem 0',
  },
  ctGral: {
    justifyContent: 'center',
    backgroundImage: `url(${servicios_1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: ' 7rem 0',
  },
  ctContactBox: {
    justifyContent: 'center',
    padding: '0 4rem',
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
