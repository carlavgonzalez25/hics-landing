import React, { Fragment } from 'react'
//Config
import contactInfo from 'config/contact'
import { useTranslation } from 'react-i18next'

//Components
import ContactBox from '../Components/ContactBox'
import Grid from '@material-ui/core/Grid'

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
    alignContent: 'center',
  },
  office: {
    height: '60%',
    [theme.breakpoints.up('md')]: {
      background: 'grey',
      height: '55%',
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

const Contact = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Fragment>
      <Grid container className={classes.container + ' ' + classes.office} id="contact-office">
        <Grid container className={classes.containerContactBox}>
          {contactInfo.map((info) => (
            <ContactBox key={info.name} {...info} />
          ))}
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Contact
