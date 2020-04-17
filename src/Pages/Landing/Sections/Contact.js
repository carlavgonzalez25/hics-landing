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
import { bg_services } from 'img'

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '2rem auto 2rem auto',
    color: '#FFF',
  },
  container: {
    justifyContent: 'center',
    margin: '7rem 0 0 0',
    marginBottom: '1rem',

    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${bg_services})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '850px',
      marginBottom: '16rem',
    },
  },
  overlay: {
    backgroundColor: '#00000059',
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    height: 'inherit',
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
      <Grid container className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          {t('contact.title')}{' '}
        </Typography>
        <Grid container className={classes.containerContactBox}>
          {contactInfo.map((info) => (
            <ContactBox {...info} />
          ))}
        </Grid>
        <Grid container className={classes.containerForm}>
          <Form></Form>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Contact
