import React from 'react'
import { useTranslation } from 'react-i18next'

//Components
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const ContactBox = (props) => {
  const { t } = useTranslation()
  const { icon, imgUrl, name, address, tel, mail, time, flag } = props

  //Pongo esto aqui dentro poruqe necesito usar como background image un elemento enviado como props.
  //no se me ocurre otra manera de resolverlo

  const useStyles = makeStyles((theme) => ({
    cardContainer: {
      margin: '0.4rem 0',
      [theme.breakpoints.up('md')]: {
        margin: 'unset',
      },
    },
    card: {
      display: 'flex',
      margin: '0.2rem 0.2rem',
      boxShadow: '8px 7px 9px -4px rgba(0,0,0,0.2)',
      height: '17vh',
      flexDirection: 'row',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        margin: '1rem 1rem',
        height: 'unset',
      },
    },
    cardContent: {
      padding: '1rem',
      paddingBottom: '0 !important',
      [theme.breakpoints.up('lg')]: {
        height: '150px',
        paddingLeft: '2.8rem',
      },
    },
    cardTitle: {
      textTransform: 'uppercase',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '800',
      fontSize: '0.825',
      [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
      },
    },
    cardText: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '400',
      fontSize: '0.650rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.8rem',
      },
    },
    cardImgCt: {
      width: '40%',
    },
    cardImg: {
      backgroundImage: `url(${imgUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
      minWidth: '30%',
      height: '100px',
      [theme.breakpoints.up('xl')]: {
        height: '130px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '120px',
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
    ctTextIcon: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {},
    },
    icon: {
      height: '1.3em',
      marginRight: '0.4rem',
      [theme.breakpoints.up('md')]: {
        height: '1.7em',
        marginRight: '0.7rem',
      },
    },
    tel: {
      marginLeft: '0.2rem',
      [theme.breakpoints.up('md')]: {
        marginTop: '0.3rem',
        marginLeft: '0.3rem',
        height: '1.6em',
      },
    },
    mail: {
      height: '1em',
      [theme.breakpoints.up('md')]: {
        height: '0.9rem',
        marginTop: ' 0.4rem',
      },
    },
    address: {
      marginLeft: '0.2rem',
      [theme.breakpoints.up('md')]: {
        marginLeft: '0.2rem',
      },
    },
  }))

  const classes = useStyles()

  return (
    <Grid item xs={12} md={4} className={classes.cardContainer}>
      <Card className={classes.card}>
        <Grid item className={classes.cardImg}></Grid>
        <CardContent className={classes.cardContent}>
          <Grid item className={classes.ctTextIcon}>
            <Typography gutterBottom className={classes.cardTitle}>
              {t('office', { place: name })}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <Typography gutterBottom className={classes.cardText}>
              {address}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <Typography gutterBottom className={classes.cardText}>
              {tel}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <Typography gutterBottom className={classes.cardText}>
              {mail}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <Typography gutterBottom className={classes.cardText}>
              {time}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ContactBox
