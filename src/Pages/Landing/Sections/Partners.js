import React from 'react'
import { logo_hicsvyda_vertical, logo_benavente, logo_tarragona } from 'img'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '45%',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      /*flexDirection: 'column',*/
    },
    [theme.breakpoints.up('md')]: {
      height: '30%',
      flexDirection: 'row',
      justifyContent: 'unset',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  title: {
    fontFamily: '"Poppins", sans-serif',
    color: '#9BA4AA',
    textTransform: 'uppercase',
    padding: '0.5rem 0 0 0.5rem',
    fontSize: '1rem',
    width: 'fit-content',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
      padding: '1.4rem 0 0 1.1rem',
      width: '200px',
    },
  },
  item: {
    margin: '0 auto',
    display: 'flex',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'baseline',

    [theme.breakpoints.up('md')]: {
      padding: '0 0 0.8rem 0',
      margin: 'unset',
      alignItems: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 0 1.2rem 0',

      margin: 'auto',
      justifyContent: 'space-between',
    },
  },
  partners: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      height: '100%',
      width: '60%',
    },
  },
  partnerOf: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    borderLeft: 'thin solid #9BA4AA',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center',
      height: 'fit-content',
      [theme.breakpoints.up('md')]: {
        height: 'unset',
      },
    },
  },
  img: {
    filter: 'grayscale(1)',
    transition: 'all 0.3s',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      width: 'unset',
    },
    '&:hover': {
      filter: 'none',
      transition: 'all 0.3s',
    },
  },
  logoTarragona: {
    maxWidth: '135px',
    padding: '0.5rem 0.5rem',

    [theme.breakpoints.up('sm')]: {
      maxWidth: '140px',
      padding: '0',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '210px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '240px',
    },
  },
  logoBenavente: {
    maxWidth: '115px',
    padding: '0.5rem 0.5rem',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '140px',
      padding: '0',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '172px',
      paddingBottom: '0.4rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '195px',
    },
  },
  logoHics: {
    maxWidth: '115px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '120px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '100px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '155px',
    },
  },
}))

const Partners = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container className={classes.root} id="partners">
      <div className={classes.partners}>
        <Typography variant="h6" className={classes.title}>
          {t('partners.title')}
        </Typography>
        <Grid item className={classes.item}>
          <a href="https://tarragona.us/" target="__blank">
            <img src={logo_tarragona} alt="Logo tarragona" className={classes.img + ' ' + classes.logoTarragona} />
          </a>

          <img src={logo_benavente} alt="Logo benavente" className={classes.img + ' ' + classes.logoBenavente} />
        </Grid>
      </div>
      <div className={classes.partnerOf}>
        <Typography variant="h6" className={classes.title}>
          PARTNER OF
        </Typography>
        <a href="https://hicsvydacapital.com/" target="__blank">
          <img src={logo_hicsvyda_vertical} alt="Logo hics capital" className={classes.img + ' ' + classes.logoHics} />
        </a>
      </div>
    </Grid>
  )
}

export default Partners
