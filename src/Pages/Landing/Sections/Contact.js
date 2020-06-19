import React, { Fragment } from 'react'
//Config
import contactInfo from 'config/contact'
import { useTranslation } from 'react-i18next'

//Components
import ContactBox from '../Components/ContactBox'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Form from '../Components/Form'

import { makeStyles } from '@material-ui/core/styles'
import { bg_contactOffice, bg_contactForm } from 'img'

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#01A5E0',
    fontSize: '1.525rem',
    fontWeight: '700',
    margin: '2.5rem auto 1rem auto',
    [theme.breakpoints.up('md')]: {
      color: '#FFF',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '700',
      fontSize: '3rem',
      margin: '4rem auto 0rem auto',
    },
  },
  container: {
    justifyContent: 'center',
    padding: '2rem 0 0 0',
    alignContent: 'flex-start',
  },
  office: {
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg_contactOffice})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      marginBottom: '16rem',
    },
  },
  form: {
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg_contactForm})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      marginBottom: '16rem',
    },
  },
  containerContactBox: {
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

const Contact = ({ layout }) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Fragment>
      {layout === 'office' && (
        <Grid container className={classes.container + ' ' + classes.office} id="contact-office">
          <Typography className={classes.title}>{t('contact.title')}</Typography>
          <Grid container className={classes.containerContactBox}>
            {contactInfo.map((info) => (
              <ContactBox {...info} />
            ))}
          </Grid>
        </Grid>
      )}
      {layout === 'form' && (
        <Grid container className={classes.container + ' ' + classes.form} id="contact-form">
          <Typography className={classes.title}>{t('contact.title')}</Typography>
          <Grid container className={classes.containerForm}>
            <Form></Form>
          </Grid>
        </Grid>
      )}
    </Fragment>
  )
}

export default Contact
