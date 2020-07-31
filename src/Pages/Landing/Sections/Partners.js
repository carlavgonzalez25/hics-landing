import React from 'react'
import { logo_vydacapital, logo_hicscapital } from 'img'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '25%',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      height: '30%',
      justifyContent: 'space-around',
    },
  },
  title: {
    fontFamily: '"Poppins", sans-serif',
    color: '#9BA4AA',
    textTransform: 'uppercase',
    padding: '0.5rem 0 0 0.5rem',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
      padding: '2rem 0 0 2rem',
    },
  },
  item: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '0 3rem',
    },
  },
  img: {
    filter: 'grayscale(1)',
    transition: 'all 0.3s',
    width: '48vw',
    [theme.breakpoints.up('md')]: {
      width: 'unset',
    },
    '&:hover': {
      filter: 'none',
      transition: 'all 0.3s',
    },
  },
  logoHics: {
    width: '90px',
    [theme.breakpoints.up('md')]: {
      width: '110px',
    },
  },
  logoVyda: {
    width: '160px',
    [theme.breakpoints.up('md')]: {
      width: '220px',
    },
  },
}))

const Partners = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  let variable = null
  console.log(' variable ' + 5 + variable)

  return (
    <Grid container className={classes.root} id="partners">
      <Typography variant="h6" className={classes.title}>
        {t('partners.title')}
      </Typography>
      <Grid item className={classes.item}>
        <a href="https://hicscapital.com/" target="__blank">
          <img src={logo_hicscapital} alt="Logo hics capital" className={classes.img + ' ' + classes.logoHics} />
        </a>
        <a href="http://vydacapital.com/" target="__blank">
          <img src={logo_vydacapital} alt="Logo vyda capital" className={classes.img + ' ' + classes.logoVyda} />
        </a>
      </Grid>
    </Grid>
  )
}

export default Partners
