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
    card: {
      display: 'flex',
      margin: '0.2rem 0.2rem',
      boxShadow: '8px 7px 9px -4px rgba(0,0,0,0.2)',

      flexDirection: 'row',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        margin: '1rem 1rem',
      },
    },
    cardContent: {
      [theme.breakpoints.up('lg')]: {
        minHeight: '255px',
      },
    },
    cardTitle: {
      textTransform: 'uppercase',
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
    },
    icon: {
      height: '1em',
      marginRight: '0.3rem',
    },
    flag: {
      height: '1.3em',
      transform: 'translateY(71%)',
      marginRight: '0.3em',
    },
  }))

  const classes = useStyles()

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.card}>
        <Grid item className={classes.cardImg}></Grid>
        <CardContent className={classes.cardContent}>
          <Grid item className={classes.ctTextIcon}>
            <img src={flag} alt="country flag" className={classes.flag}></img>
            <Typography gutterBottom variant="subtitle1" className={classes.cardTitle}>
              {t('office', { place: name })}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.address} alt="address icon" className={classes.icon}></img>
            <Typography gutterBottom variant="body2">
              {address}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.tel} alt="telephone icon" className={classes.icon}></img>
            <Typography gutterBottom variant="body2">
              {tel}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.mail} alt="mail icon" className={classes.icon}></img>
            <Typography gutterBottom variant="body2">
              {mail}
            </Typography>
          </Grid>
          <Grid item className={classes.ctTextIcon}>
            <img src={icon.time} alt="Time icon" className={classes.icon}></img>
            <Typography gutterBottom variant="body2">
              {time}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ContactBox
