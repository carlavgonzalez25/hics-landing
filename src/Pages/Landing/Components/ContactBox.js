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
      height: '24vh',
      margin: '0.4rem 0',

      [theme.breakpoints.up('md')]: {
        //height: 'unset',
        margin: 'unset',
      },
    },
    card: {
      display: 'flex',
      margin: '0.2rem 0.2rem',
      boxShadow: '8px 7px 9px -4px rgba(0,0,0,0.2)',
      height: '24vh',

      flexDirection: 'row',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        margin: '1rem 1rem',
        height: 'unset',
      },
    },
    cardContent: {
      [theme.breakpoints.up('lg')]: {
        height: '290px',
        paddingLeft: '2.8rem',
      },
    },
    cardTitle: {
      textTransform: 'uppercase',
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '800',
      fontSize: '0.825',
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.5rem',
      },
    },
    cardText: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: '400',
      fontSize: '0.650rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
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
      minHeight: '150px',
      maxHeight: '215px',
      overflow: 'hidden',
      minWidth: '30%',
      [theme.breakpoints.up('xl')]: {
        height: '215px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '180px',
      },
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
    ctTextIcon: {
      display: 'flex',
      margin: '0.3rem 0',
      [theme.breakpoints.up('md')]: {
        margin: '0.7rem 0',
      },
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
    time: {},
    flag: {
      height: '1.3em',
      transform: 'translateY(25%)',
      marginRight: '0.3em',
      [theme.breakpoints.up('md')]: {
        transform: 'translateY(56%)',
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
            <img src={flag} alt="country flag" className={classes.flag}></img>
            <Typography gutterBottom className={classes.cardTitle}>
              {t('office', { place: name })}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.address} alt="address icon" className={classes.icon + ' ' + classes.address}></img>
            <Typography gutterBottom className={classes.cardText}>
              {address}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.tel} alt="telephone icon" className={classes.icon + ' ' + classes.tel}></img>
            <Typography gutterBottom className={classes.cardText}>
              {tel}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.mail} alt="mail icon" className={classes.icon + ' ' + classes.mail}></img>
            <Typography gutterBottom className={classes.cardText}>
              {mail}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.time} alt="Time icon" className={classes.icon + ' ' + classes.time}></img>
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
